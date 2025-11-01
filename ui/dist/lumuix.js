var Pc = (e) => {
  throw TypeError(e);
};
var a0 = (e, t, n) => t.has(e) || Pc("Cannot " + n);
var $o = (e, t, n) => (a0(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ic = (e, t, n) => t.has(e) ? Pc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as Oa from "vue";
import { inject as Kn, provide as Dt, computed as S, ref as M, shallowRef as vn, watch as te, getCurrentScope as ii, onScopeDispose as li, shallowReadonly as Ta, unref as l, defineComponent as _, toRefs as me, createBlock as w, openBlock as g, withCtx as y, renderSlot as x, getCurrentInstance as Ue, toRef as Lu, camelize as Ka, withKeys as qe, h as tt, onMounted as ue, createElementVNode as _e, toDisplayString as de, normalizeProps as J, guardReactiveProps as Z, createTextVNode as ae, mergeProps as B, withModifiers as Pe, createCommentVNode as se, createElementBlock as L, Fragment as le, renderList as Ae, resolveDynamicComponent as it, createVNode as O, useSlots as fh, onBeforeMount as o0, Teleport as pa, watchEffect as xe, onBeforeUnmount as ui, nextTick as re, withDirectives as ha, vShow as di, watchSyncEffect as ph, isRef as lt, toHandlers as r0, normalizeStyle as Qt, toHandlerKey as hh, Comment as zu, cloneVNode as vh, vModelSelect as s0, onBeforeUpdate as i0, onUpdated as l0, markRaw as mh, onUnmounted as Ke, readonly as lo, toRaw as Zr, reactive as Ln, customRef as Hu, mergeDefaults as Uu, watchPostEffect as Wu, effectScope as Ku, normalizeClass as X, toValue as Me, withMemo as u0, hasInjectionContext as gh, mergeModels as bs, useModel as ju, vModelDynamic as d0, vModelText as c0, isVNode as f0 } from "vue";
function p0(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(s) => {
    const i = Kn(a, s);
    if (i || i === null) return i;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (s) => (Dt(a, s), s)];
}
function Ia(e, t) {
  return e - t * Math.floor(e / t);
}
const yh = 1721426;
function Jn(e, t, n, a) {
  t = fr(e, t);
  let o = t - 1, r = -2;
  return n <= 2 ? r = 0 : Fn(t) && (r = -1), yh - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * n - 362) / 12 + r + a);
}
function Fn(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function fr(e, t) {
  return e === "BC" ? 1 - t : t;
}
function ci(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const h0 = {
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
    let n = t, a = n - yh, o = Math.floor(a / 146097), r = Ia(a, 146097), s = Math.floor(r / 36524), i = Ia(r, 36524), u = Math.floor(i / 1461), d = Ia(i, 1461), c = Math.floor(d / 365), f = o * 400 + s * 100 + u * 4 + c + (s !== 4 && c !== 4 ? 1 : 0), [p, h] = ci(f), v = n - Jn(p, h, 1, 1), m = 2;
    n < Jn(p, h, 3, 1) ? m = 0 : Fn(h) && (m = 1);
    let b = Math.floor(((v + m) * 12 + 373) / 367), $ = n - Jn(p, h, b, 1) + 1;
    return new Ne(p, h, b, $);
  }
  toJulianDay(t) {
    return Jn(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return h0[Fn(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Fn(t.year) ? 366 : 365;
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
const v0 = {
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
function Ye(e, t) {
  return t = ot(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Yu(e, t) {
  return t = ot(t, e.calendar), e = Go(e), t = Go(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ht(e, t) {
  return qu(e.calendar, t.calendar) && Ye(e, t);
}
function Rc(e, t) {
  return qu(e.calendar, t.calendar) && Yu(e, t);
}
function qu(e, t) {
  var n, a, o, r;
  return (r = (o = (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && o !== void 0 ? o : (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && r !== void 0 ? r : e.identifier === t.identifier;
}
function bh(e, t) {
  return Ye(e, _s(t));
}
function _h(e, t, n) {
  let a = e.calendar.toJulianDay(e), o = b0(t), r = Math.ceil(a + 1 - o) % 7;
  return r < 0 && (r += 7), r;
}
function m0(e) {
  return dn(Date.now(), e);
}
function _s(e) {
  return x0(m0(e));
}
function wh(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function g0(e, t) {
  return Fc(e) - Fc(t);
}
function Fc(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let Qi = null;
function gn() {
  return Qi == null && (Qi = new Intl.DateTimeFormat().resolvedOptions().timeZone), Qi;
}
function Go(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function Vc(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const Nc = /* @__PURE__ */ new Map();
function y0(e) {
  if (Intl.Locale) {
    let n = Nc.get(e);
    return n || (n = new Intl.Locale(e).maximize().region, n && Nc.set(e, n)), n;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function b0(e) {
  let t = y0(e);
  return t && v0[t] || 0;
}
function ja(e) {
  e = ot(e, new Ot());
  let t = fr(e.era, e.year);
  return xh(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function xh(e, t, n, a, o, r, s) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(a, o, r, s), i.setUTCFullYear(e, t - 1, n), i.getTime();
}
function Il(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === gn()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: a, day: o, hour: r, minute: s, second: i } = Ch(e, t);
  return xh(n, a, o, r, s, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const Lc = /* @__PURE__ */ new Map();
function Ch(e, t) {
  let n = Lc.get(t);
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
  }), Lc.set(t, n));
  let a = n.formatToParts(new Date(e)), o = {};
  for (let r of a) r.type !== "literal" && (o[r.type] = r.value);
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
const zc = 864e5;
function _0(e, t, n, a) {
  return (n === a ? [
    n
  ] : [
    n,
    a
  ]).filter((r) => w0(e, t, r));
}
function w0(e, t, n) {
  let a = Ch(n, t);
  return e.year === a.year && e.month === a.month && e.day === a.day && e.hour === a.hour && e.minute === a.minute && e.second === a.second;
}
function un(e, t, n = "compatible") {
  let a = Ya(e);
  if (t === "UTC") return ja(a);
  if (t === gn() && n === "compatible") {
    a = ot(a, new Ot());
    let u = /* @__PURE__ */ new Date(), d = fr(a.era, a.year);
    return u.setFullYear(d, a.month - 1, a.day), u.setHours(a.hour, a.minute, a.second, a.millisecond), u.getTime();
  }
  let o = ja(a), r = Il(o - zc, t), s = Il(o + zc, t), i = _0(a, t, o - r, o - s);
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
      return Math.min(o - r, o - s);
    case "compatible":
    case "later":
      return Math.max(o - r, o - s);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function $h(e, t, n = "compatible") {
  return new Date(un(e, t, n));
}
function dn(e, t) {
  let n = Il(e, t), a = new Date(e + n), o = a.getUTCFullYear(), r = a.getUTCMonth() + 1, s = a.getUTCDate(), i = a.getUTCHours(), u = a.getUTCMinutes(), d = a.getUTCSeconds(), c = a.getUTCMilliseconds();
  return new Ga(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, r, s, t, n, i, u, d, c);
}
function x0(e) {
  return new Ne(e.calendar, e.era, e.year, e.month, e.day);
}
function Ya(e, t) {
  let n = 0, a = 0, o = 0, r = 0;
  if ("timeZone" in e) ({ hour: n, minute: a, second: o, millisecond: r } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: n, minute: a, second: o, millisecond: r } = t), new qa(e.calendar, e.era, e.year, e.month, e.day, n, a, o, r);
}
function ot(e, t) {
  if (qu(e.calendar, t)) return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), a = e.copy();
  return a.calendar = t, a.era = n.era, a.year = n.year, a.month = n.month, a.day = n.day, ua(a), a;
}
function C0(e, t, n) {
  if (e instanceof Ga)
    return e.timeZone === t ? e : k0(e, t);
  let a = un(e, t, n);
  return dn(a, t);
}
function $0(e) {
  let t = ja(e) - e.offset;
  return new Date(t);
}
function k0(e, t) {
  let n = ja(e) - e.offset;
  return ot(dn(n, t), e.calendar);
}
const ko = 36e5;
function fi(e, t) {
  let n = e.copy(), a = "hour" in n ? A0(n, t) : 0;
  Rl(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Fl(n), kh(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += a, S0(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
  let o = n.calendar.getYearsInEra(n);
  if (n.year > o) {
    var r, s;
    let u = (r = (s = n.calendar).isInverseEra) === null || r === void 0 ? void 0 : r.call(s, n);
    n.year = o, n.month = u ? 1 : n.calendar.getMonthsInYear(n), n.day = u ? 1 : n.calendar.getDaysInMonth(n);
  }
  n.month < 1 && (n.month = 1, n.day = 1);
  let i = n.calendar.getMonthsInYear(n);
  return n.month > i && (n.month = i, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Rl(e, t) {
  var n, a;
  !((n = (a = e.calendar).isInverseEra) === null || n === void 0) && n.call(a, e) && (t = -t), e.year += t;
}
function Fl(e) {
  for (; e.month < 1; )
    Rl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Rl(e, 1);
}
function S0(e) {
  for (; e.day < 1; )
    e.month--, Fl(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Fl(e);
}
function kh(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function ua(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), kh(e);
}
function Sh(e) {
  let t = {};
  for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function Th(e, t) {
  return fi(e, Sh(t));
}
function Gu(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), ua(n), n;
}
function ws(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), E0(n), n;
}
function T0(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Dr(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Dr(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Dr(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Dr(e.hour, 24), t;
}
function E0(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Dr(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function A0(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, T0(e);
}
function Xu(e, t, n, a) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), u = i.indexOf(e.era);
      if (u < 0) throw new Error("Invalid era: " + e.era);
      u = cn(u, n, 0, i.length - 1, a == null ? void 0 : a.round), o.era = i[u], ua(o);
      break;
    }
    case "year":
      var r, s;
      !((r = (s = o.calendar).isInverseEra) === null || r === void 0) && r.call(s, o) && (n = -n), o.year = cn(e.year, n, -1 / 0, 9999, a == null ? void 0 : a.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = cn(e.month, n, 1, e.calendar.getMonthsInYear(e), a == null ? void 0 : a.round);
      break;
    case "day":
      o.day = cn(e.day, n, 1, e.calendar.getDaysInMonth(e), a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), ua(o), o;
}
function Eh(e, t, n, a) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let r = e.hour, s = 0, i = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let u = r >= 12;
        s = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = cn(r, n, s, i, a == null ? void 0 : a.round);
      break;
    }
    case "minute":
      o.minute = cn(e.minute, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "second":
      o.second = cn(e.second, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "millisecond":
      o.millisecond = cn(e.millisecond, n, 0, 999, a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function cn(e, t, n, a, o = !1) {
  if (o) {
    e += Math.sign(t), e < n && (e = a);
    let r = Math.abs(t);
    t > 0 ? e = Math.ceil(e / r) * r : e = Math.floor(e / r) * r, e > a && (e = n);
  } else
    e += t, e < n ? e = a - (n - e - 1) : e > a && (e = n + (e - a - 1));
  return e;
}
function Ah(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = fi(Ya(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = un(o, e.timeZone);
  } else
    n = ja(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let a = dn(n, e.timeZone);
  return ot(a, e.calendar);
}
function D0(e, t) {
  return Ah(e, Sh(t));
}
function M0(e, t, n, a) {
  switch (t) {
    case "hour": {
      let o = 0, r = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let v = e.hour >= 12;
        o = v ? 12 : 0, r = v ? 23 : 11;
      }
      let s = Ya(e), i = ot(ws(s, {
        hour: o
      }), new Ot()), u = [
        un(i, e.timeZone, "earlier"),
        un(i, e.timeZone, "later")
      ].filter((v) => dn(v, e.timeZone).day === i.day)[0], d = ot(ws(s, {
        hour: r
      }), new Ot()), c = [
        un(d, e.timeZone, "earlier"),
        un(d, e.timeZone, "later")
      ].filter((v) => dn(v, e.timeZone).day === d.day).pop(), f = ja(e) - e.offset, p = Math.floor(f / ko), h = f % ko;
      return f = cn(p, n, Math.floor(u / ko), Math.floor(c / ko), a == null ? void 0 : a.round) * ko + h, ot(dn(f, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Eh(e, t, n, a);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Xu(Ya(e), t, n, a), r = un(o, e.timeZone);
      return ot(dn(r, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function B0(e, t, n) {
  let a = Ya(e), o = ws(Gu(a, t), t);
  if (o.compare(a) === 0) return e;
  let r = un(o, e.timeZone, n);
  return ot(dn(r, e.timeZone), e.calendar);
}
function O0(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function Dh(e) {
  let t = ot(e, new Ot()), n;
  return t.era === "BC" ? n = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : n = String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function Mh(e) {
  return `${Dh(e)}T${O0(e)}`;
}
function P0(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), a = e % 36e5 / 6e4;
  return `${t}${String(n).padStart(2, "0")}:${String(a).padStart(2, "0")}`;
}
function I0(e) {
  return `${Mh(e)}${P0(e.offset)}[${e.timeZone}]`;
}
function R0(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ju(e, t, n) {
  R0(e, t), t.set(e, n);
}
function Zu(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Ot(), n;
  if (typeof e[0] == "string") n = e.shift();
  else {
    let s = t.getEras();
    n = s[s.length - 1];
  }
  let a = e.shift(), o = e.shift(), r = e.shift();
  return [
    t,
    n,
    a,
    o,
    r
  ];
}
var F0 = /* @__PURE__ */ new WeakMap();
class Ne {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ne(this.calendar, this.era, this.year, this.month, this.day) : new Ne(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return fi(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return Th(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Gu(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return Xu(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return $h(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Dh(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return wh(this, t);
  }
  constructor(...t) {
    Ju(this, F0, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Zu(t);
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, ua(this);
  }
}
var V0 = /* @__PURE__ */ new WeakMap();
class qa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new qa(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new qa(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return fi(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return Th(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Gu(ws(this, t), t);
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
        return Xu(this, t, n, a);
      default:
        return Eh(this, t, n, a);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return $h(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Mh(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = wh(this, t);
    return n === 0 ? g0(this, Ya(t)) : n;
  }
  constructor(...t) {
    Ju(this, V0, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Zu(t);
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, ua(this);
  }
}
var N0 = /* @__PURE__ */ new WeakMap();
class Ga {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ga(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Ga(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return Ah(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return D0(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return B0(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return M0(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return $0(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return I0(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - C0(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Ju(this, N0, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Zu(t), i = t.shift(), u = t.shift();
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, this.timeZone = i, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, ua(this);
  }
}
const Ra = [
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
], L0 = [
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
], Qr = [
  1867,
  1911,
  1925,
  1988,
  2018
], Pn = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Hc(e) {
  const t = Ra.findIndex(([n, a, o]) => e.year < n || e.year === n && e.month < a || e.year === n && e.month === a && e.day < o);
  return t === -1 ? Ra.length - 1 : t === 0 ? 0 : t - 1;
}
function el(e) {
  let t = Qr[Pn.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new Ne(e.year + t, e.month, e.day);
}
class z0 extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = Hc(n);
    return new Ne(this, Pn[a], n.year - Qr[a], n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(el(t));
  }
  balanceDate(t) {
    let n = el(t), a = Hc(n);
    Pn[a] !== t.era && (t.era = Pn[a], t.year = n.year - Qr[a]), this.constrainDate(t);
  }
  constrainDate(t) {
    let n = Pn.indexOf(t.era), a = L0[n];
    if (a != null) {
      let [o, r, s] = a, i = o - Qr[n];
      t.year = Math.max(1, Math.min(i, t.year)), t.year === i && (t.month = Math.min(r, t.month), t.month === r && (t.day = Math.min(s, t.day)));
    }
    if (t.year === 1 && n >= 0) {
      let [, o, r] = Ra[n];
      t.month = Math.max(o, t.month), t.month === o && (t.day = Math.max(r, t.day));
    }
  }
  getEras() {
    return Pn;
  }
  getYearsInEra(t) {
    let n = Pn.indexOf(t.era), a = Ra[n], o = Ra[n + 1];
    if (o == null)
      return 9999 - a[0] + 1;
    let r = o[0] - a[0];
    return (t.month < o[1] || t.month === o[1] && t.day < o[2]) && r++, r;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(el(t));
  }
  getMinimumMonthInYear(t) {
    let n = Uc(t);
    return n ? n[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let n = Uc(t);
    return n && t.month === n[1] ? n[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Uc(e) {
  if (e.year === 1) {
    let t = Pn.indexOf(e.era);
    return Ra[t];
  }
}
const Bh = -543;
class H0 extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = fr(n.era, n.year);
    return new Ne(this, a - Bh, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Wc(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Wc(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Wc(e) {
  let [t, n] = ci(e.year + Bh);
  return new Ne(t, n, e.month, e.day);
}
const xs = 1911;
function Oh(e) {
  return e.era === "minguo" ? e.year + xs : 1 - e.year + xs;
}
function Kc(e) {
  let t = e - xs;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class U0 extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = fr(n.era, n.year), [o, r] = Kc(a);
    return new Ne(this, o, r, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(jc(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [n, a] = Kc(Oh(t));
    t.era = n, t.year = a;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(jc(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - xs;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function jc(e) {
  let [t, n] = ci(Oh(e));
  return new Ne(t, n, e.month, e.day);
}
const Yc = 1948320, qc = [
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
class W0 {
  fromJulianDay(t) {
    let n = t - Yc, a = 1 + Math.floor((33 * n + 3) / 12053), o = 365 * (a - 1) + Math.floor((8 * a + 21) / 33), r = n - o, s = r < 216 ? Math.floor(r / 31) : Math.floor((r - 6) / 30), i = r - qc[s] + 1;
    return new Ne(this, a, s + 1, i);
  }
  toJulianDay(t) {
    let n = Yc - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return n += qc[t.month - 1], n += t.day, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || Ia(25 * t.year + 11, 33) < 8 ? 30 : 29;
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
const tl = 78, Gc = 80;
class K0 extends Ot {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = n.year - tl, o = t - Jn(n.era, n.year, 1, 1), r;
    o < Gc ? (a--, r = Fn(n.year - 1) ? 31 : 30, o += r + 155 + 90 + 10) : (r = Fn(n.year) ? 31 : 30, o -= Gc);
    let s, i;
    if (o < r)
      s = 1, i = o + 1;
    else {
      let u = o - r;
      u < 155 ? (s = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, s = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new Ne(this, a, s, i);
  }
  toJulianDay(t) {
    let n = t.year + tl, [a, o] = ci(n), r, s;
    return Fn(o) ? (r = 31, s = Jn(a, o, 3, 21)) : (r = 30, s = Jn(a, o, 3, 22)), t.month === 1 ? s + t.day - 1 : (s += r + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (s += (t.month - 7) * 30), s += t.day - 1, s);
  }
  getDaysInMonth(t) {
    return t.month === 1 && Fn(t.year + tl) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const Cs = 1948440, Xc = 1948439, _t = 1300, Ea = 1600, j0 = 460322;
function $s(e, t, n, a) {
  return a + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Ph(e, t, n) {
  let a = Math.floor((30 * (n - t) + 10646) / 10631), o = Math.min(12, Math.ceil((n - (29 + $s(t, a, 1, 1))) / 29.5) + 1), r = n - $s(t, a, o, 1) + 1;
  return new Ne(e, a, o, r);
}
function Jc(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Qu {
  fromJulianDay(t) {
    return Ph(this, Cs, t);
  }
  toJulianDay(t) {
    return $s(Cs, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = 29 + t.month % 2;
    return t.month === 12 && Jc(t.year) && n++, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Jc(t.year) ? 355 : 354;
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
class Y0 extends Qu {
  fromJulianDay(t) {
    return Ph(this, Xc, t);
  }
  toJulianDay(t) {
    return $s(Xc, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const q0 = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Vl, Fa;
function es(e) {
  return j0 + Fa[e - _t];
}
function Io(e, t) {
  let n = e - _t, a = 1 << 11 - (t - 1);
  return Vl[n] & a ? 30 : 29;
}
function Zc(e, t) {
  let n = es(e);
  for (let a = 1; a < t; a++) n += Io(e, a);
  return n;
}
function Qc(e) {
  return Fa[e + 1 - _t] - Fa[e - _t];
}
class G0 extends Qu {
  fromJulianDay(t) {
    let n = t - Cs, a = es(_t), o = es(Ea);
    if (n < a || n > o) return super.fromJulianDay(t);
    {
      let r = _t - 1, s = 1, i = 1;
      for (; i > 0; ) {
        r++, i = n - es(r) + 1;
        let u = Qc(r);
        if (i === u) {
          s = 12;
          break;
        } else if (i < u) {
          let d = Io(r, s);
          for (s = 1; i > d; )
            i -= d, s++, d = Io(r, s);
          break;
        }
      }
      return new Ne(this, r, s, n - Zc(r, s) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < _t || t.year > Ea ? super.toJulianDay(t) : Cs + Zc(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < _t || t.year > Ea ? super.getDaysInMonth(t) : Io(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < _t || t.year > Ea ? super.getDaysInYear(t) : Qc(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Vl || (Vl = new Uint16Array(Uint8Array.from(atob(q0), (t) => t.charCodeAt(0)).buffer)), !Fa) {
      Fa = new Uint32Array(Ea - _t + 1);
      let t = 0;
      for (let n = _t; n <= Ea; n++) {
        Fa[n - _t] = t;
        for (let a = 1; a <= 12; a++) t += Io(n, a);
      }
    }
  }
}
const ef = 347997, Ih = 1080, Rh = 24 * Ih, X0 = 29, J0 = 12 * Ih + 793, Z0 = X0 * Rh + J0;
function Xn(e) {
  return Ia(e * 7 + 1, 19) < 7;
}
function ts(e) {
  let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, a = t * 29 + Math.floor(n / 25920);
  return Ia(3 * (a + 1), 7) < 3 && (a += 1), a;
}
function Q0(e) {
  let t = ts(e - 1), n = ts(e);
  return ts(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0;
}
function Ho(e) {
  return ts(e) + Q0(e);
}
function Fh(e) {
  return Ho(e + 1) - Ho(e);
}
function eb(e) {
  let t = Fh(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function Mr(e, t) {
  if (t >= 6 && !Xn(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let n = eb(e);
  return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Xn(e) ? 30 : 0 : 30;
}
class tb {
  fromJulianDay(t) {
    let n = t - ef, a = n * Rh / Z0, o = Math.floor((19 * a + 234) / 235) + 1, r = Ho(o), s = Math.floor(n - r);
    for (; s < 1; )
      o--, r = Ho(o), s = Math.floor(n - r);
    let i = 1, u = 0;
    for (; u < s; )
      u += Mr(o, i), i++;
    i--, u -= Mr(o, i);
    let d = s - u;
    return new Ne(this, o, i, d);
  }
  toJulianDay(t) {
    let n = Ho(t.year);
    for (let a = 1; a < t.month; a++) n += Mr(t.year, a);
    return n + t.day + ef;
  }
  getDaysInMonth(t) {
    return Mr(t.year, t.month);
  }
  getMonthsInYear(t) {
    return Xn(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return Fh(t.year);
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
    n.year !== t.year && (Xn(n.year) && !Xn(t.year) && n.month > 6 ? t.month-- : !Xn(n.year) && Xn(t.year) && n.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Nl = 1723856, tf = 1824665, Ll = 5500;
function ks(e, t, n, a) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + a - 1;
}
function ed(e, t) {
  let n = Math.floor(4 * (t - e) / 1461), a = 1 + Math.floor((t - ks(e, n, 1, 1)) / 30), o = t + 1 - ks(e, n, a, 1);
  return [
    n,
    a,
    o
  ];
}
function Vh(e) {
  return Math.floor(e % 4 / 3);
}
function Nh(e, t) {
  return t % 13 !== 0 ? 30 : Vh(e) + 5;
}
class td {
  fromJulianDay(t) {
    let [n, a, o] = ed(Nl, t), r = "AM";
    return n <= 0 && (r = "AA", n += Ll), new Ne(this, r, n, a, o);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "AA" && (n -= Ll), ks(Nl, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Nh(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + Vh(t.year);
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
class nb extends td {
  fromJulianDay(t) {
    let [n, a, o] = ed(Nl, t);
    return n += Ll, new Ne(this, "AA", n, a, o);
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
class ab extends td {
  fromJulianDay(t) {
    let [n, a, o] = ed(tf, t), r = "CE";
    return n <= 0 && (r = "BCE", n = 1 - n), new Ne(this, r, n, a, o);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), ks(tf, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), Nh(n, t.month);
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
function ob(e) {
  switch (e) {
    case "buddhist":
      return new H0();
    case "ethiopic":
      return new td();
    case "ethioaa":
      return new nb();
    case "coptic":
      return new ab();
    case "hebrew":
      return new tb();
    case "indian":
      return new K0();
    case "islamic-civil":
      return new Qu();
    case "islamic-tbla":
      return new Y0();
    case "islamic-umalqura":
      return new G0();
    case "japanese":
      return new z0();
    case "persian":
      return new W0();
    case "roc":
      return new U0();
    case "gregory":
    default:
      return new Ot();
  }
}
let nl = /* @__PURE__ */ new Map();
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
    let a = this.formatter.formatToParts(t), o = this.formatter.formatToParts(n);
    return [
      ...a.map((r) => ({
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
    let t = this.formatter.resolvedOptions();
    return ib() && (this.resolvedHourCycle || (this.resolvedHourCycle = lb(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = Lh(t, n), this.options = n;
  }
}
const rb = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Lh(e, t = {}) {
  if (typeof t.hour12 == "boolean" && sb()) {
    t = {
      ...t
    };
    let o = rb[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? r, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((o, r) => o[0] < r[0] ? -1 : 1).join() : "");
  if (nl.has(n)) return nl.get(n);
  let a = new Intl.DateTimeFormat(e, t);
  return nl.set(n, a), a;
}
let al = null;
function sb() {
  return al == null && (al = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), al;
}
let ol = null;
function ib() {
  return ol == null && (ol = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), ol;
}
function lb(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = Lh(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), a = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((r) => r.type === "hour").value, 10), o = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((r) => r.type === "hour").value, 10);
  if (a === 0 && o === 23) return "h23";
  if (a === 24 && o === 23) return "h24";
  if (a === 0 && o === 11) return "h11";
  if (a === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function ub(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a += t)
    n.push(e.slice(a, a + t));
  return n;
}
function wt(e, t = gn()) {
  return nd(e) ? e.toDate() : e.toDate(t);
}
function db(e) {
  return e instanceof qa;
}
function nd(e) {
  return e instanceof Ga;
}
function cb(e) {
  return db(e) || nd(e);
}
function yn(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), n = e.getMonth() + 1;
    return new Date(t, n, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function Vn(e, t) {
  return e.compare(t) < 0;
}
function Ro(e, t) {
  return e.compare(t) > 0;
}
function fb(e, t) {
  return e.compare(t) <= 0;
}
function pb(e, t) {
  return e.compare(t) >= 0;
}
function hb(e, t, n) {
  return pb(e, t) && fb(e, n);
}
function vb(e, t, n) {
  return Ro(e, t) && Vn(e, n);
}
function mb(e, t, n) {
  const a = _h(e, n);
  return t > a ? e.subtract({ days: a + 7 - t }) : t === a ? e : e.subtract({ days: a - t });
}
function gb(e, t, n) {
  const a = _h(e, n), o = t === 0 ? 6 : t - 1;
  return a === o ? e : a > o ? e.add({ days: 7 - a + o }) : e.add({ days: o - a });
}
function yb(e, t, n, a) {
  if (n === void 0 && a === void 0)
    return !0;
  let o = e.add({ days: 1 });
  if (a != null && a(o) || n != null && n(o))
    return !1;
  const r = t;
  for (; o.compare(r) < 0; )
    if (o = o.add({ days: 1 }), a != null && a(o) || n != null && n(o))
      return !1;
  return !0;
}
function nf(e, t) {
  const n = [];
  let a = e.add({ days: 1 });
  const o = t;
  for (; a.compare(o) < 0; )
    n.push(a), a = a.add({ days: 1 });
  return n;
}
function rl(e) {
  const { dateObj: t, weekStartsOn: n, fixedWeeks: a, locale: o } = e, r = yn(t), s = Array.from({ length: r }, (b, $) => t.set({ day: $ + 1 })), i = Go(t), u = Vc(t), d = mb(i, n, o), c = gb(u, n, o), f = nf(d.subtract({ days: 1 }), i), p = nf(u, c.add({ days: 1 })), h = f.length + s.length + p.length;
  if (a && h < 42) {
    const b = 42 - h;
    let $ = p[p.length - 1];
    $ || ($ = Vc(t));
    const k = Array.from({ length: b }, (C, E) => {
      const T = E + 1;
      return $.add({ days: T });
    });
    p.push(...k);
  }
  const v = f.concat(s, p), m = ub(v, 7);
  return {
    value: t,
    cells: v,
    rows: m
  };
}
function bb(e) {
  const { dateObj: t, startIndex: n, endIndex: a } = e, o = Array.from({ length: Math.abs(n ?? 0) + a }, (r, s) => s <= Math.abs(n ?? 0) ? t.subtract({ years: s }).set({ day: 1, month: 1 }) : t.add({ years: s - a }).set({ day: 1, month: 1 }));
  return o.sort((r, s) => r.year - s.year), o;
}
function _b(e) {
  const { dateObj: t, numberOfMonths: n = 1, pagedNavigation: a = !1 } = e;
  return n && a ? Array.from({ length: Math.floor(12 / n) }, (o, r) => Go(t.set({ month: r * n + 1 }))) : Array.from({ length: 12 }, (o, r) => Go(t.set({ month: r + 1 })));
}
function qn(e) {
  const { numberOfMonths: t, dateObj: n, ...a } = e, o = [];
  if (!t || t === 1)
    return o.push(
      rl({
        ...a,
        dateObj: n
      })
    ), o;
  o.push(
    rl({
      ...a,
      dateObj: n
    })
  );
  for (let r = 1; r < t; r++) {
    const s = n.add({ months: r });
    o.push(
      rl({
        ...a,
        dateObj: s
      })
    );
  }
  return o;
}
const wb = ["top", "right", "bottom", "left"], zn = Math.min, ft = Math.max, Ss = Math.round, Br = Math.floor, Yt = (e) => ({
  x: e,
  y: e
}), xb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Cb = {
  start: "end",
  end: "start"
};
function zl(e, t, n) {
  return ft(e, zn(t, n));
}
function bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _n(e) {
  return e.split("-")[0];
}
function uo(e) {
  return e.split("-")[1];
}
function ad(e) {
  return e === "x" ? "y" : "x";
}
function od(e) {
  return e === "y" ? "height" : "width";
}
const $b = /* @__PURE__ */ new Set(["top", "bottom"]);
function jt(e) {
  return $b.has(_n(e)) ? "y" : "x";
}
function rd(e) {
  return ad(jt(e));
}
function kb(e, t, n) {
  n === void 0 && (n = !1);
  const a = uo(e), o = rd(e), r = od(o);
  let s = o === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = Ts(s)), [s, Ts(s)];
}
function Sb(e) {
  const t = Ts(e);
  return [Hl(e), t, Hl(t)];
}
function Hl(e) {
  return e.replace(/start|end/g, (t) => Cb[t]);
}
const af = ["left", "right"], of = ["right", "left"], Tb = ["top", "bottom"], Eb = ["bottom", "top"];
function Ab(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? of : af : t ? af : of;
    case "left":
    case "right":
      return t ? Tb : Eb;
    default:
      return [];
  }
}
function Db(e, t, n, a) {
  const o = uo(e);
  let r = Ab(_n(e), n === "start", a);
  return o && (r = r.map((s) => s + "-" + o), t && (r = r.concat(r.map(Hl)))), r;
}
function Ts(e) {
  return e.replace(/left|right|bottom|top/g, (t) => xb[t]);
}
function Mb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zh(e) {
  return typeof e != "number" ? Mb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Es(e) {
  const {
    x: t,
    y: n,
    width: a,
    height: o
  } = e;
  return {
    width: a,
    height: o,
    top: n,
    left: t,
    right: t + a,
    bottom: n + o,
    x: t,
    y: n
  };
}
function rf(e, t, n) {
  let {
    reference: a,
    floating: o
  } = e;
  const r = jt(t), s = rd(t), i = od(s), u = _n(t), d = r === "y", c = a.x + a.width / 2 - o.width / 2, f = a.y + a.height / 2 - o.height / 2, p = a[i] / 2 - o[i] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: c,
        y: a.y - o.height
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
        x: a.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: a.x,
        y: a.y
      };
  }
  switch (uo(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const Bb = async (e, t, n) => {
  const {
    placement: a = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: s
  } = n, i = r.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: f
  } = rf(d, a, u), p = a, h = {}, v = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: b,
      fn: $
    } = i[m], {
      x: k,
      y: C,
      data: E,
      reset: T
    } = await $({
      x: c,
      y: f,
      initialPlacement: a,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = k ?? c, f = C ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...E
      }
    }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (d = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: c,
      y: f
    } = rf(d, p, u)), m = -1);
  }
  return {
    x: c,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Xo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: a,
    y: o,
    platform: r,
    rects: s,
    elements: i,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = bn(t, e), v = zh(h), b = i[p ? f === "floating" ? "reference" : "floating" : f], $ = Es(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), k = f === "floating" ? {
    x: a,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), E = await (r.isElement == null ? void 0 : r.isElement(C)) ? await (r.getScale == null ? void 0 : r.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Es(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: C,
    strategy: u
  }) : k);
  return {
    top: ($.top - T.top + v.top) / E.y,
    bottom: (T.bottom - $.bottom + v.bottom) / E.y,
    left: ($.left - T.left + v.left) / E.x,
    right: (T.right - $.right + v.right) / E.x
  };
}
const Ob = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: a,
      placement: o,
      rects: r,
      platform: s,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = bn(e, t) || {};
    if (d == null)
      return {};
    const f = zh(c), p = {
      x: n,
      y: a
    }, h = rd(o), v = od(h), m = await s.getDimensions(d), b = h === "y", $ = b ? "top" : "left", k = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", E = r.reference[v] + r.reference[h] - p[h] - r.floating[v], T = p[h] - r.reference[h], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let A = D ? D[C] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(D))) && (A = i.floating[C] || r.floating[v]);
    const N = E / 2 - T / 2, R = A / 2 - m[v] / 2 - 1, P = zn(f[$], R), I = zn(f[k], R), V = P, Y = A - m[v] - I, z = A / 2 - m[v] / 2 + N, H = zl(V, z, Y), ee = !u.arrow && uo(o) != null && z !== H && r.reference[v] / 2 - (z < V ? P : I) - m[v] / 2 < 0, ie = ee ? z < V ? z - V : z - Y : 0;
    return {
      [h]: p[h] + ie,
      data: {
        [h]: H,
        centerOffset: z - H - ie,
        ...ee && {
          alignmentOffset: ie
        }
      },
      reset: ee
    };
  }
}), Pb = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        middlewareData: r,
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
      } = bn(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const $ = _n(o), k = jt(i), C = _n(i) === i, E = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), T = p || (C || !m ? [Ts(i)] : Sb(i)), D = v !== "none";
      !p && D && T.push(...Db(i, m, v, E));
      const A = [i, ...T], N = await Xo(t, b), R = [];
      let P = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (c && R.push(N[$]), f) {
        const z = kb(o, s, E);
        R.push(N[z[0]], N[z[1]]);
      }
      if (P = [...P, {
        placement: o,
        overflows: R
      }], !R.every((z) => z <= 0)) {
        var I, V;
        const z = (((I = r.flip) == null ? void 0 : I.index) || 0) + 1, H = A[z];
        if (H && (!(f === "alignment" ? k !== jt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((be) => be.overflows[0] > 0 && jt(be.placement) === k)))
          return {
            data: {
              index: z,
              overflows: P
            },
            reset: {
              placement: H
            }
          };
        let ee = (V = P.filter((ie) => ie.overflows[0] <= 0).sort((ie, be) => ie.overflows[1] - be.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!ee)
          switch (h) {
            case "bestFit": {
              var Y;
              const ie = (Y = P.filter((be) => {
                if (D) {
                  const G = jt(be.placement);
                  return G === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((be) => [be.placement, be.overflows.filter((G) => G > 0).reduce((G, ce) => G + ce, 0)]).sort((be, G) => be[1] - G[1])[0]) == null ? void 0 : Y[0];
              ie && (ee = ie);
              break;
            }
            case "initialPlacement":
              ee = i;
              break;
          }
        if (o !== ee)
          return {
            reset: {
              placement: ee
            }
          };
      }
      return {};
    }
  };
};
function sf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function lf(e) {
  return wb.some((t) => e[t] >= 0);
}
const Ib = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = bn(e, t);
      switch (a) {
        case "referenceHidden": {
          const r = await Xo(t, {
            ...o,
            elementContext: "reference"
          }), s = sf(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: lf(s)
            }
          };
        }
        case "escaped": {
          const r = await Xo(t, {
            ...o,
            altBoundary: !0
          }), s = sf(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: lf(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Hh = /* @__PURE__ */ new Set(["left", "top"]);
async function Rb(e, t) {
  const {
    placement: n,
    platform: a,
    elements: o
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), s = _n(n), i = uo(n), u = jt(n) === "y", d = Hh.has(s) ? -1 : 1, c = r && u ? -1 : 1, f = bn(t, e);
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
const Fb = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, a;
      const {
        x: o,
        y: r,
        placement: s,
        middlewareData: i
      } = t, u = await Rb(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (a = i.arrow) != null && a.alignmentOffset ? {} : {
        x: o + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, Vb = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: a,
        placement: o
      } = t, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: $,
              y: k
            } = b;
            return {
              x: $,
              y: k
            };
          }
        },
        ...u
      } = bn(e, t), d = {
        x: n,
        y: a
      }, c = await Xo(t, u), f = jt(_n(o)), p = ad(f);
      let h = d[p], v = d[f];
      if (r) {
        const b = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", k = h + c[b], C = h - c[$];
        h = zl(k, h, C);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", k = v + c[b], C = v - c[$];
        v = zl(k, v, C);
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
            [p]: r,
            [f]: s
          }
        }
      };
    }
  };
}, Nb = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: a,
        placement: o,
        rects: r,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = bn(e, t), c = {
        x: n,
        y: a
      }, f = jt(o), p = ad(f);
      let h = c[p], v = c[f];
      const m = bn(i, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const C = p === "y" ? "height" : "width", E = r.reference[p] - r.floating[C] + b.mainAxis, T = r.reference[p] + r.reference[C] - b.mainAxis;
        h < E ? h = E : h > T && (h = T);
      }
      if (d) {
        var $, k;
        const C = p === "y" ? "width" : "height", E = Hh.has(_n(o)), T = r.reference[f] - r.floating[C] + (E && (($ = s.offset) == null ? void 0 : $[f]) || 0) + (E ? 0 : b.crossAxis), D = r.reference[f] + r.reference[C] + (E ? 0 : ((k = s.offset) == null ? void 0 : k[f]) || 0) - (E ? b.crossAxis : 0);
        v < T ? v = T : v > D && (v = D);
      }
      return {
        [p]: h,
        [f]: v
      };
    }
  };
}, Lb = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, a;
      const {
        placement: o,
        rects: r,
        platform: s,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...d
      } = bn(e, t), c = await Xo(t, d), f = _n(o), p = uo(o), h = jt(o) === "y", {
        width: v,
        height: m
      } = r.floating;
      let b, $;
      f === "top" || f === "bottom" ? (b = f, $ = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = f, b = p === "end" ? "top" : "bottom");
      const k = m - c.top - c.bottom, C = v - c.left - c.right, E = zn(m - c[b], k), T = zn(v - c[$], C), D = !t.middlewareData.shift;
      let A = E, N = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = C), (a = t.middlewareData.shift) != null && a.enabled.y && (A = k), D && !p) {
        const P = ft(c.left, 0), I = ft(c.right, 0), V = ft(c.top, 0), Y = ft(c.bottom, 0);
        h ? N = v - 2 * (P !== 0 || I !== 0 ? P + I : ft(c.left, c.right)) : A = m - 2 * (V !== 0 || Y !== 0 ? V + Y : ft(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: N,
        availableHeight: A
      });
      const R = await s.getDimensions(i.floating);
      return v !== R.width || m !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pi() {
  return typeof window < "u";
}
function va(e) {
  return sd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function en(e) {
  var t;
  return (t = (sd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sd(e) {
  return pi() ? e instanceof Node || e instanceof pt(e).Node : !1;
}
function Pt(e) {
  return pi() ? e instanceof Element || e instanceof pt(e).Element : !1;
}
function Xt(e) {
  return pi() ? e instanceof HTMLElement || e instanceof pt(e).HTMLElement : !1;
}
function uf(e) {
  return !pi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
const zb = /* @__PURE__ */ new Set(["inline", "contents"]);
function pr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !zb.has(o);
}
const Hb = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ub(e) {
  return Hb.has(va(e));
}
const Wb = [":popover-open", ":modal"];
function hi(e) {
  return Wb.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Kb = ["transform", "translate", "scale", "rotate", "perspective"], jb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Yb = ["paint", "layout", "strict", "content"];
function id(e) {
  const t = ld(), n = Pt(e) ? It(e) : e;
  return Kb.some((a) => n[a] ? n[a] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || jb.some((a) => (n.willChange || "").includes(a)) || Yb.some((a) => (n.contain || "").includes(a));
}
function qb(e) {
  let t = Hn(e);
  for (; Xt(t) && !Xa(t); ) {
    if (id(t))
      return t;
    if (hi(t))
      return null;
    t = Hn(t);
  }
  return null;
}
function ld() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Gb = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xa(e) {
  return Gb.has(va(e));
}
function It(e) {
  return pt(e).getComputedStyle(e);
}
function vi(e) {
  return Pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Hn(e) {
  if (va(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    uf(e) && e.host || // Fallback.
    en(e)
  );
  return uf(t) ? t.host : t;
}
function Uh(e) {
  const t = Hn(e);
  return Xa(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xt(t) && pr(t) ? t : Uh(t);
}
function Jo(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Uh(e), r = o === ((a = e.ownerDocument) == null ? void 0 : a.body), s = pt(o);
  if (r) {
    const i = Ul(s);
    return t.concat(s, s.visualViewport || [], pr(o) ? o : [], i && n ? Jo(i) : []);
  }
  return t.concat(o, Jo(o, [], n));
}
function Ul(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wh(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const o = Xt(e), r = o ? e.offsetWidth : n, s = o ? e.offsetHeight : a, i = Ss(n) !== r || Ss(a) !== s;
  return i && (n = r, a = s), {
    width: n,
    height: a,
    $: i
  };
}
function ud(e) {
  return Pt(e) ? e : e.contextElement;
}
function Va(e) {
  const t = ud(e);
  if (!Xt(t))
    return Yt(1);
  const n = t.getBoundingClientRect(), {
    width: a,
    height: o,
    $: r
  } = Wh(t);
  let s = (r ? Ss(n.width) : n.width) / a, i = (r ? Ss(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Xb = /* @__PURE__ */ Yt(0);
function Kh(e) {
  const t = pt(e);
  return !ld() || !t.visualViewport ? Xb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Jb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== pt(e) ? !1 : t;
}
function da(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = ud(e);
  let s = Yt(1);
  t && (a ? Pt(a) && (s = Va(a)) : s = Va(e));
  const i = Jb(r, n, a) ? Kh(r) : Yt(0);
  let u = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (r) {
    const p = pt(r), h = a && Pt(a) ? pt(a) : a;
    let v = p, m = Ul(v);
    for (; m && a && h !== v; ) {
      const b = Va(m), $ = m.getBoundingClientRect(), k = It(m), C = $.left + (m.clientLeft + parseFloat(k.paddingLeft)) * b.x, E = $.top + (m.clientTop + parseFloat(k.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, f *= b.y, u += C, d += E, v = pt(m), m = Ul(v);
    }
  }
  return Es({
    width: c,
    height: f,
    x: u,
    y: d
  });
}
function dd(e, t) {
  const n = vi(e).scrollLeft;
  return t ? t.left + n : da(en(e)).left + n;
}
function jh(e, t, n) {
  n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = a.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    dd(e, a)
  )), r = a.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Zb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: a,
    strategy: o
  } = e;
  const r = o === "fixed", s = en(a), i = t ? hi(t.floating) : !1;
  if (a === s || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Yt(1);
  const c = Yt(0), f = Xt(a);
  if ((f || !f && !r) && ((va(a) !== "body" || pr(s)) && (u = vi(a)), Xt(a))) {
    const h = da(a);
    d = Va(a), c.x = h.x + a.clientLeft, c.y = h.y + a.clientTop;
  }
  const p = s && !f && !r ? jh(s, u, !0) : Yt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + p.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + p.y
  };
}
function Qb(e) {
  return Array.from(e.getClientRects());
}
function e_(e) {
  const t = en(e), n = vi(e), a = e.ownerDocument.body, o = ft(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), r = ft(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -n.scrollLeft + dd(e);
  const i = -n.scrollTop;
  return It(a).direction === "rtl" && (s += ft(t.clientWidth, a.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
function t_(e, t) {
  const n = pt(e), a = en(e), o = n.visualViewport;
  let r = a.clientWidth, s = a.clientHeight, i = 0, u = 0;
  if (o) {
    r = o.width, s = o.height;
    const d = ld();
    (!d || d && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: i,
    y: u
  };
}
const n_ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function a_(e, t) {
  const n = da(e, !0, t === "fixed"), a = n.top + e.clientTop, o = n.left + e.clientLeft, r = Xt(e) ? Va(e) : Yt(1), s = e.clientWidth * r.x, i = e.clientHeight * r.y, u = o * r.x, d = a * r.y;
  return {
    width: s,
    height: i,
    x: u,
    y: d
  };
}
function df(e, t, n) {
  let a;
  if (t === "viewport")
    a = t_(e, n);
  else if (t === "document")
    a = e_(en(e));
  else if (Pt(t))
    a = a_(t, n);
  else {
    const o = Kh(e);
    a = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Es(a);
}
function Yh(e, t) {
  const n = Hn(e);
  return n === t || !Pt(n) || Xa(n) ? !1 : It(n).position === "fixed" || Yh(n, t);
}
function o_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let a = Jo(e, [], !1).filter((i) => Pt(i) && va(i) !== "body"), o = null;
  const r = It(e).position === "fixed";
  let s = r ? Hn(e) : e;
  for (; Pt(s) && !Xa(s); ) {
    const i = It(s), u = id(s);
    !u && i.position === "fixed" && (o = null), (r ? !u && !o : !u && i.position === "static" && !!o && n_.has(o.position) || pr(s) && !u && Yh(e, s)) ? a = a.filter((c) => c !== s) : o = i, s = Hn(s);
  }
  return t.set(e, a), a;
}
function r_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? hi(t) ? [] : o_(t, this._c) : [].concat(n), a], i = s[0], u = s.reduce((d, c) => {
    const f = df(t, c, o);
    return d.top = ft(f.top, d.top), d.right = zn(f.right, d.right), d.bottom = zn(f.bottom, d.bottom), d.left = ft(f.left, d.left), d;
  }, df(t, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function s_(e) {
  const {
    width: t,
    height: n
  } = Wh(e);
  return {
    width: t,
    height: n
  };
}
function i_(e, t, n) {
  const a = Xt(t), o = en(t), r = n === "fixed", s = da(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Yt(0);
  function d() {
    u.x = dd(o);
  }
  if (a || !a && !r)
    if ((va(t) !== "body" || pr(o)) && (i = vi(t)), a) {
      const h = da(t, !0, r, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else o && d();
  r && !a && o && d();
  const c = o && !a && !r ? jh(o, i) : Yt(0), f = s.left + i.scrollLeft - u.x - c.x, p = s.top + i.scrollTop - u.y - c.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function sl(e) {
  return It(e).position === "static";
}
function cf(e, t) {
  if (!Xt(e) || It(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return en(e) === n && (n = n.ownerDocument.body), n;
}
function qh(e, t) {
  const n = pt(e);
  if (hi(e))
    return n;
  if (!Xt(e)) {
    let o = Hn(e);
    for (; o && !Xa(o); ) {
      if (Pt(o) && !sl(o))
        return o;
      o = Hn(o);
    }
    return n;
  }
  let a = cf(e, t);
  for (; a && Ub(a) && sl(a); )
    a = cf(a, t);
  return a && Xa(a) && sl(a) && !id(a) ? n : a || qb(e) || n;
}
const l_ = async function(e) {
  const t = this.getOffsetParent || qh, n = this.getDimensions, a = await n(e.floating);
  return {
    reference: i_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function u_(e) {
  return It(e).direction === "rtl";
}
const d_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zb,
  getDocumentElement: en,
  getClippingRect: r_,
  getOffsetParent: qh,
  getElementRects: l_,
  getClientRects: Qb,
  getDimensions: s_,
  getScale: Va,
  isElement: Pt,
  isRTL: u_
};
function Gh(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function c_(e, t) {
  let n = null, a;
  const o = en(e);
  function r() {
    var i;
    clearTimeout(a), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: p,
      height: h
    } = d;
    if (i || t(), !p || !h)
      return;
    const v = Br(f), m = Br(o.clientWidth - (c + p)), b = Br(o.clientHeight - (f + h)), $ = Br(c), C = {
      rootMargin: -v + "px " + -m + "px " + -b + "px " + -$ + "px",
      threshold: ft(0, zn(1, u)) || 1
    };
    let E = !0;
    function T(D) {
      const A = D[0].intersectionRatio;
      if (A !== u) {
        if (!E)
          return s();
        A ? s(!1, A) : a = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Gh(d, e.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, C);
    }
    n.observe(e);
  }
  return s(!0), r;
}
function Xh(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, d = ud(e), c = o || r ? [...d ? Jo(d) : [], ...Jo(t)] : [];
  c.forEach(($) => {
    o && $.addEventListener("scroll", n, {
      passive: !0
    }), r && $.addEventListener("resize", n);
  });
  const f = d && i ? c_(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver(($) => {
    let [k] = $;
    k && k.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = h) == null || C.observe(t);
    })), n();
  }), d && !u && h.observe(d), h.observe(t));
  let v, m = u ? da(e) : null;
  u && b();
  function b() {
    const $ = da(e);
    m && !Gh(m, $) && n(), m = $, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var $;
    c.forEach((k) => {
      o && k.removeEventListener("scroll", n), r && k.removeEventListener("resize", n);
    }), f == null || f(), ($ = h) == null || $.disconnect(), h = null, u && cancelAnimationFrame(v);
  };
}
const Jh = Fb, Zh = Vb, As = Pb, Qh = Lb, ev = Ib, f_ = Ob, tv = Nb, p_ = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), o = {
    platform: d_,
    ...n
  }, r = {
    ...o.platform,
    _c: a
  };
  return Bb(e, t, {
    ...o,
    platform: r
  });
};
function h_(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Wl(e) {
  if (h_(e)) {
    const t = e.$el;
    return sd(t) && va(t) === "#comment" ? null : t;
  }
  return e;
}
function Ba(e) {
  return typeof e == "function" ? e() : l(e);
}
function nv(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Wl(Ba(e.element));
      return n == null ? {} : f_({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function av(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ff(e, t) {
  const n = av(e);
  return Math.round(t * n) / n;
}
function ov(e, t, n) {
  n === void 0 && (n = {});
  const a = n.whileElementsMounted, o = S(() => {
    var A;
    return (A = Ba(n.open)) != null ? A : !0;
  }), r = S(() => Ba(n.middleware)), s = S(() => {
    var A;
    return (A = Ba(n.placement)) != null ? A : "bottom";
  }), i = S(() => {
    var A;
    return (A = Ba(n.strategy)) != null ? A : "absolute";
  }), u = S(() => {
    var A;
    return (A = Ba(n.transform)) != null ? A : !0;
  }), d = S(() => Wl(e.value)), c = S(() => Wl(t.value)), f = M(0), p = M(0), h = M(i.value), v = M(s.value), m = vn({}), b = M(!1), $ = S(() => {
    const A = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return A;
    const N = ff(c.value, f.value), R = ff(c.value, p.value);
    return u.value ? {
      ...A,
      transform: "translate(" + N + "px, " + R + "px)",
      ...av(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: N + "px",
      top: R + "px"
    };
  });
  let k;
  function C() {
    if (d.value == null || c.value == null)
      return;
    const A = o.value;
    p_(d.value, c.value, {
      middleware: r.value,
      placement: s.value,
      strategy: i.value
    }).then((N) => {
      f.value = N.x, p.value = N.y, h.value = N.strategy, v.value = N.placement, m.value = N.middlewareData, b.value = A !== !1;
    });
  }
  function E() {
    typeof k == "function" && (k(), k = void 0);
  }
  function T() {
    if (E(), a === void 0) {
      C();
      return;
    }
    if (d.value != null && c.value != null) {
      k = a(d.value, c.value, C);
      return;
    }
  }
  function D() {
    o.value || (b.value = !1);
  }
  return te([r, s, i, o], C, {
    flush: "sync"
  }), te([d, c], T, {
    flush: "sync"
  }), te(o, D, {
    flush: "sync"
  }), ii() && li(E), {
    x: Ta(f),
    y: Ta(p),
    strategy: Ta(h),
    placement: Ta(v),
    middlewareData: Ta(m),
    isPositioned: Ta(b),
    floatingStyles: $,
    update: C
  };
}
function ge(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(o) => {
    const r = Kn(a, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (Dt(a, o), o)];
}
function cd(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function Ds(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function v_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var m_ = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var a, o, r;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length) return !1;
      for (o = a; o-- !== 0; )
        if (!e(t[o], n[o])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
    if (r = Object.keys(t), a = r.length, a !== Object.keys(n).length) return !1;
    for (o = a; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, r[o])) return !1;
    for (o = a; o-- !== 0; ) {
      var s = r[o];
      if (!e(t[s], n[s])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Zn = /* @__PURE__ */ v_(m_);
function ns(e) {
  return e == null;
}
function rv(e) {
  const { defaultValue: t, defaultPlaceholder: n, granularity: a = "day", locale: o = "en" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (n)
    return n.copy();
  const r = /* @__PURE__ */ new Date(), s = r.getFullYear(), i = r.getMonth() + 1, u = r.getDate(), d = ["hour", "minute", "second"], c = new zt(o), f = ob(c.resolvedOptions().calendar);
  return d.includes(a ?? "day") ? ot(new qa(s, i, u, 0, 0, 0), f) : ot(new Ne(s, i, u), f);
}
function sv(e) {
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
function g_(e, t) {
  var n;
  const a = vn();
  return xe(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), lo(a);
}
function ma(e) {
  return ii() ? (li(e), !0) : !1;
}
function y_() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const a = () => t(n);
      return ma(a), {
        off: a
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((a) => a(...n)))
  };
}
function b_(e) {
  let t = !1, n;
  const a = Ku(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function iv(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, n || (a = Ku(!0), n = a.run(() => e(...r))), ma(o), n);
}
function mn(e) {
  return typeof e == "function" ? e() : l(e);
}
const tn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const __ = (e) => typeof e < "u", w_ = (e) => e != null, x_ = Object.prototype.toString, C_ = (e) => x_.call(e) === "[object Object]", lv = () => {
}, pf = /* @__PURE__ */ $_();
function $_() {
  var e, t;
  return tn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function k_(e) {
  return Ue();
}
function uv(e, t = 1e4) {
  return Hu((n, a) => {
    let o = mn(e), r;
    const s = () => setTimeout(() => {
      o = mn(e), a();
    }, mn(t));
    return ma(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, a(), clearTimeout(r), r = s();
      }
    };
  });
}
function S_(e, t) {
  k_() && ui(e, t);
}
function fd(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, o = M(!1);
  let r = null;
  function s() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    o.value = !1, s();
  }
  function u(...d) {
    s(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(...d);
    }, mn(t));
  }
  return a && (o.value = !0, tn && u()), ma(i), {
    isPending: lo(o),
    start: u,
    stop: i
  };
}
function T_(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: a
  } = t, o = fd(
    a ?? lv,
    e,
    t
  ), r = S(() => !o.isPending.value);
  return n ? {
    ready: r,
    ...o
  } : r;
}
function Ct(e) {
  var t;
  const n = mn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const hr = tn ? window : void 0;
function Ja(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = hr) : [t, n, a, o] = e, !t)
    return lv;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], s = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, f, p, h) => (c.addEventListener(f, p, h), () => c.removeEventListener(f, p, h)), u = te(
    () => [Ct(t), mn(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = C_(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((h) => a.map((v) => i(c, h, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return ma(d), d;
}
function E_(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function pd(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = hr,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = E_(t);
  return Ja(o, r, (d) => {
    d.repeat && mn(i) || u(d) && n(d);
  }, s);
}
function hd() {
  const e = M(!1), t = Ue();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function A_(e) {
  const t = hd();
  return S(() => (t.value, !!e()));
}
function D_(e, t, n = {}) {
  const { window: a = hr, ...o } = n;
  let r;
  const s = A_(() => a && "MutationObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const p = mn(e), h = (Array.isArray(p) ? p : [p]).map(Ct).filter(w_);
    return new Set(h);
  }), d = te(
    () => u.value,
    (p) => {
      i(), s.value && p.size && (r = new MutationObserver(t), p.forEach((h) => r.observe(h, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), f = () => {
    i(), d();
  };
  return ma(f), {
    isSupported: s,
    stop: f,
    takeRecords: c
  };
}
function dv(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: a = void 0,
    window: o = hr
  } = t, r = M(!1), s = a ? 1e3 / a : null;
  let i = 0, u = null;
  function d(p) {
    if (!r.value || !o)
      return;
    i || (i = p);
    const h = p - i;
    if (s && h < s) {
      u = o.requestAnimationFrame(d);
      return;
    }
    i = p, e({ delta: h, timestamp: p }), u = o.requestAnimationFrame(d);
  }
  function c() {
    !r.value && o && (r.value = !0, i = 0, u = o.requestAnimationFrame(d));
  }
  function f() {
    r.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return n && c(), ma(f), {
    isActive: lo(r),
    pause: f,
    resume: c
  };
}
function M_(e) {
  return JSON.parse(JSON.stringify(e));
}
function De(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = Ue(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => i ? typeof i == "function" ? i(C) : M_(C) : C, $ = () => __(e[t]) ? b(e[t]) : f, k = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = $(), E = M(C);
    let T = !1;
    return te(
      () => e[t],
      (D) => {
        T || (T = !0, E.value = b(D), re(() => T = !1));
      }
    ), te(
      E,
      (D) => {
        !T && (D !== e[t] || c) && k(D);
      },
      { deep: c }
    ), E;
  } else
    return S({
      get() {
        return $();
      },
      set(C) {
        k(C);
      }
    });
}
function mi(e) {
  return e ? e.flatMap((t) => t.type === le ? mi(t.children) : [t]) : [];
}
function We() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const B_ = ["INPUT", "TEXTAREA"];
function cv(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && B_.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
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
  ], $ = h || v, k = f || p;
  if (!m && !b && (!$ && !k || o === "vertical" && k || o === "horizontal" && $))
    return null;
  const C = n ? Array.from(n.querySelectorAll(r)) : s;
  if (!C.length)
    return null;
  d && e.preventDefault();
  let E = null;
  return k || $ ? E = fv(C, t, {
    goForward: $ ? v : u === "ltr" ? f : p,
    loop: i
  }) : m ? E = C.at(0) || null : b && (E = C.at(-1) || null), c && (E == null || E.focus()), E;
}
function fv(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const s = (r + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? fv(
    e,
    i,
    n,
    a
  ) : i : null;
}
function il(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Kl(e, t, n = ".", a) {
  if (!il(t))
    return Kl(e, {}, n);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (Array.isArray(s) && Array.isArray(o[r]) ? o[r] = [...s, ...o[r]] : il(s) && il(o[r]) ? o[r] = Kl(
      s,
      o[r],
      (n ? `${n}.` : "") + r.toString()
    ) : o[r] = s);
  }
  return o;
}
function O_(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => Kl(n, a, ""), {})
  );
}
const P_ = O_(), [gi, f5] = ge("ConfigProvider");
let I_ = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", R_ = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += I_[Math.random() * 64 | 0];
  return t;
};
const F_ = iv(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), n = S(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), a = gi({
    scrollBody: M(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", pf && (o == null || o()), t.value = void 0;
  };
  return te(n, (s, i) => {
    var u;
    if (!tn)
      return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, f = (u = a.scrollBody) != null && u.value ? typeof a.scrollBody.value == "object" ? P_({
      padding: a.scrollBody.value.padding === !0 ? d : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? d : a.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof f.padding == "number" ? `${f.padding}px` : String(f.padding), document.body.style.marginRight = typeof f.margin == "number" ? `${f.margin}px` : String(f.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), pf && (o = Ja(
      document,
      "touchmove",
      (p) => V_(p),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function vr(e) {
  const t = R_(6), n = F_();
  n.value.set(t, e ?? !1);
  const a = S({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return S_(() => {
    n.value.delete(t);
  }), a;
}
function pv(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : pv(n);
  }
}
function V_(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && pv(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const N_ = "data-radix-vue-collection-item";
function co(e, t = N_) {
  const n = Symbol();
  return { createCollection: (a) => {
    const o = M([]);
    function r() {
      const s = Ct(a);
      return s ? o.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return i0(() => {
      o.value = [];
    }), ue(r), l0(r), te(() => a == null ? void 0 : a.value, r, { immediate: !0 }), Dt(n, o), o;
  }, injectCollection: () => Kn(n, M([])) };
}
function hv(e) {
  const t = M(e);
  function n() {
    return t.value;
  }
  function a(m) {
    t.value = m;
  }
  function o(m, b) {
    return new zt(t.value, b).format(m);
  }
  function r(m, b = !0) {
    return cb(m) && b ? o(wt(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(wt(m), {
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
    const m = _s(gn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((b) => ({ label: i(wt(m.set({ month: b }))), value: b }));
  }
  function d(m, b = {}) {
    return new zt(t.value, { year: "numeric", ...b }).format(m);
  }
  function c(m, b) {
    return nd(m) ? new zt(t.value, {
      ...b,
      timeZone: m.timeZone
    }).formatToParts(wt(m)) : new zt(t.value, b).formatToParts(wt(m));
  }
  function f(m, b = "narrow") {
    return new zt(t.value, { weekday: b }).format(m);
  }
  function p(m) {
    var b;
    return ((b = new zt(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m).find(($) => $.type === "dayPeriod")) == null ? void 0 : b.value) === "PM" ? "PM" : "AM";
  }
  const h = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function v(m, b, $ = {}) {
    const k = { ...h, ...$ }, C = c(m, k).find((E) => E.type === b);
    return C ? C.value : "";
  }
  return {
    setLocale: a,
    getLocale: n,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: s,
    toParts: c,
    custom: o,
    part: v,
    dayPeriod: p,
    selectedDate: r,
    dayOfWeek: f,
    getMonths: u
  };
}
function nn(e) {
  const t = gi({
    dir: M("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ga(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[hh(Ka(o))] = (...r) => e(o, ...r);
  }), a;
}
let ll = 0;
function vd() {
  xe((e) => {
    if (!tn)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? hf()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? hf()
    ), ll++, e(() => {
      ll === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ll--;
    });
  });
}
function hf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function mr(e) {
  return S(() => {
    var t;
    return mn(e) ? !!((t = Ct(e)) != null && t.closest("form")) : !0;
  });
}
function ye(e) {
  const t = Ue(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (o[r] = s), o;
  }, {}), a = Lu(e);
  return S(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      o[Ka(s)] = r[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function pe(e, t) {
  const n = ye(e), a = t ? ga(t) : {};
  return S(() => ({
    ...n.value,
    ...a
  }));
}
function j() {
  const e = Ue(), t = M(), n = S(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ct(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(a).length > 0)
    for (const s in a)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => a[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function r(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = o);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
function L_(e, t) {
  const n = uv(!1, 300), a = M(null), o = y_();
  function r() {
    a.value = null, n.value = !1;
  }
  function s(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, f = z_(c, d.getBoundingClientRect()), p = H_(c, f), h = U_(u.getBoundingClientRect()), v = K_([...p, ...h]);
    a.value = v, n.value = !0;
  }
  return xe((i) => {
    if (e.value && t.value) {
      const u = (c) => s(c, t.value), d = (c) => s(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, f;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (f = t.value) == null || f.removeEventListener("pointerleave", d);
      });
    }
  }), xe((i) => {
    var u;
    if (a.value) {
      const d = (c) => {
        var f, p;
        if (!a.value)
          return;
        const h = c.target, v = { x: c.clientX, y: c.clientY }, m = ((f = e.value) == null ? void 0 : f.contains(h)) || ((p = t.value) == null ? void 0 : p.contains(h)), b = !W_(v, a.value), $ = !!h.closest("[data-grace-area-trigger]");
        m ? r() : (b || $) && (r(), o.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function z_(e, t) {
  const n = Math.abs(t.top - e.y), a = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), r = Math.abs(t.left - e.x);
  switch (Math.min(n, a, o, r)) {
    case r:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function H_(e, t, n = 5) {
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
function U_(e) {
  const { top: t, right: n, bottom: a, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: o, y: a }
  ];
}
function W_(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function K_(e) {
  const t = e.slice();
  return t.sort((n, a) => n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0), j_(t);
}
function j_(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], s = t[t.length - 2];
      if ((r.x - s.x) * (o.y - s.y) >= (r.y - s.y) * (o.x - s.x))
        t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let a = e.length - 1; a >= 0; a--) {
    const o = e[a];
    for (; n.length >= 2; ) {
      const r = n[n.length - 1], s = n[n.length - 2];
      if ((r.x - s.x) * (o.y - s.y) >= (r.y - s.y) * (o.x - s.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Y_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Aa = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Pr = {}, ul = 0, vv = function(e) {
  return e && (e.host || vv(e.parentNode));
}, q_ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = vv(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, G_ = function(e, t, n, a) {
  var o = q_(t, Array.isArray(e) ? e : [e]);
  Pr[n] || (Pr[n] = /* @__PURE__ */ new WeakMap());
  var r = Pr[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (Aa.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          Aa.set(p, m), r.set(p, b), s.push(p), m === 1 && v && Or.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", p, $);
        }
    });
  };
  return c(t), i.clear(), ul++, function() {
    s.forEach(function(f) {
      var p = Aa.get(f) - 1, h = r.get(f) - 1;
      Aa.set(f, p), r.set(f, h), p || (Or.has(f) || f.removeAttribute(a), Or.delete(f)), h || f.removeAttribute(n);
    }), ul--, ul || (Aa = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Pr = {});
  };
}, X_ = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = Y_(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), G_(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function gr(e) {
  let t;
  te(() => Ct(e), (n) => {
    n ? t = X_(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let J_ = 0;
function He(e, t = "radix") {
  const n = gi({ useId: void 0 });
  return Oa.useId ? `${t}-${Oa.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++J_}`;
}
function mv(e) {
  const t = M(), n = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = Ct(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        t.value = { width: u, height: d };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
function Z_(e, t) {
  const n = M(e);
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
const Q_ = "data-item-text";
function md(e) {
  const t = uv("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, a) => {
      if (!(e != null && e.value) && !a)
        return;
      t.value = t.value + n;
      const o = (e == null ? void 0 : e.value) ?? a, r = We(), s = o.map((f) => {
        var p;
        return {
          ref: f,
          textValue: ((p = (f.querySelector(`[${Q_}]`) ?? f).textContent) == null ? void 0 : p.trim()) ?? ""
        };
      }), i = s.find((f) => f.ref === r), u = s.map((f) => f.textValue), d = t1(u, t.value, i == null ? void 0 : i.textValue), c = s.find((f) => f.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function e1(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function t1(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let r = e1(e, Math.max(o, 0));
  a.length === 1 && (r = r.filter((i) => i !== n));
  const s = r.find(
    (i) => i.toLowerCase().startsWith(a.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function gv() {
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
const gd = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var a, o;
      if (!n.default)
        return null;
      const r = mi(n.default()), s = r.findIndex((c) => c.type !== zu);
      if (s === -1)
        return r;
      const i = r[s];
      (a = i.props) == null || delete a.ref;
      const u = i.props ? B(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const d = vh(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[s] = d, r);
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
    return typeof a == "string" && ["area", "img", "input"].includes(a) ? () => tt(a, t) : a !== "template" ? () => tt(e.as, t, { default: n.default }) : () => tt(gd, t, { default: n.default });
  }
});
function fo() {
  const e = M(), t = S(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : Ct(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [yv, n1] = ge("CollapsibleRoot"), a1 = /* @__PURE__ */ _({
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
    const a = e, o = De(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = De(a, "disabled");
    return n1({
      contentId: "",
      disabled: r,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), j(), (s, i) => (g(), w(l(W), {
      as: s.as,
      "as-child": a.asChild,
      "data-state": l(o) ? "open" : "closed",
      "data-disabled": l(r) ? "" : void 0
    }, {
      default: y(() => [
        x(s.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), o1 = /* @__PURE__ */ _({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = yv();
    return (a, o) => {
      var r, s;
      return g(), w(l(W), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": l(n).contentId,
        "aria-expanded": l(n).open.value,
        "data-state": l(n).open.value ? "open" : "closed",
        "data-disabled": (r = l(n).disabled) != null && r.value ? "" : void 0,
        disabled: (s = l(n).disabled) == null ? void 0 : s.value,
        onClick: l(n).onOpenToggle
      }, {
        default: y(() => [
          x(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function r1(e, t) {
  var n;
  const a = M({}), o = M("none"), r = M(e), s = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? hr, { state: d, dispatch: c } = Z_(s, {
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
    var $;
    if (tn) {
      const k = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      ($ = t.value) == null || $.dispatchEvent(k);
    }
  };
  te(
    e,
    async (b, $) => {
      var k;
      const C = $ !== b;
      if (await re(), C) {
        const E = o.value, T = Ir(t.value);
        b ? (c("MOUNT"), f("enter"), T === "none" && f("after-enter")) : T === "none" || ((k = a.value) == null ? void 0 : k.display) === "none" ? (c("UNMOUNT"), f("leave"), f("after-leave")) : $ && E !== T ? (c("ANIMATION_OUT"), f("leave")) : (c("UNMOUNT"), f("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (b) => {
    const $ = Ir(t.value), k = $.includes(
      b.animationName
    ), C = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && k && (f(`after-${C}`), c("ANIMATION_END"), !r.value)) {
      const E = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var T;
        ((T = t.value) == null ? void 0 : T.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = E);
      });
    }
    b.target === t.value && $ === "none" && c("ANIMATION_END");
  }, h = (b) => {
    b.target === t.value && (o.value = Ir(t.value));
  }, v = te(
    t,
    (b, $) => {
      b ? (a.value = getComputedStyle(b), b.addEventListener("animationstart", h), b.addEventListener("animationcancel", p), b.addEventListener("animationend", p)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), $ == null || $.removeEventListener("animationstart", h), $ == null || $.removeEventListener("animationcancel", p), $ == null || $.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), m = te(d, () => {
    const b = Ir(t.value);
    o.value = d.value === "mounted" ? b : "none";
  });
  return Ke(() => {
    v(), m();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Ir(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const mt = _({
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
    const { present: o, forceMount: r } = me(e), s = M(), { isPresent: i } = r1(o, s);
    n({ present: i });
    let u = t.default({ present: i });
    u = mi(u || []);
    const d = Ue();
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
    return () => r.value || o.value || i.value ? tt(t.default({ present: i })[0], {
      ref: (c) => {
        const f = Ct(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
}), s1 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = yv();
    n.contentId || (n.contentId = He(void 0, "radix-vue-collapsible-content"));
    const a = M(), { forwardRef: o, currentElement: r } = j(), s = M(0), i = M(0), u = S(() => n.open.value), d = M(u.value), c = M();
    return te(
      () => {
        var f;
        return [u.value, (f = a.value) == null ? void 0 : f.present];
      },
      async () => {
        await re();
        const f = r.value;
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
    ), ue(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (f, p) => (g(), w(l(mt), {
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
            ref: l(o),
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
                (m = a.value) != null && m.present ? x(f.$slots, "default", { key: 0 }) : se("", !0)
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
function bv({ type: e, defaultValue: t, modelValue: n }) {
  const a = n || t;
  if (ns(e) && ns(n) && ns(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (n !== void 0 && t !== void 0 && typeof n != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${n}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${e === "single" ? "- a string" : e === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const o = n !== void 0 || t !== void 0;
  if (e && o) {
    const r = Array.isArray(n) || Array.isArray(t), s = n !== void 0 ? "modelValue" : "defaultValue", i = s === "modelValue" ? typeof n : typeof t;
    if (e === "single" && r)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "multiple";
    if (e === "multiple" && !r)
      return console.error(`Invalid prop \`${s}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${s} prop.`), "single";
  }
  return o ? Array.isArray(a) ? "multiple" : "single" : e;
}
function i1({ type: e, defaultValue: t, modelValue: n }) {
  return e || bv({ type: e, defaultValue: t, modelValue: n });
}
function l1({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function u1(e, t) {
  const n = M(i1(e)), a = De(e, "modelValue", t, {
    defaultValue: l1(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const s = bv(e);
      n.value !== s && (n.value = s);
    },
    { immediate: !0 }
  );
  function o(s) {
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
  const r = S(() => n.value === "single");
  return {
    modelValue: a,
    type: n,
    changeModelValue: o,
    isSingle: r
  };
}
const [yi, d1] = ge("AccordionRoot"), c1 = /* @__PURE__ */ _({
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
    const n = e, a = t, { dir: o, disabled: r } = me(n), s = nn(o), { modelValue: i, changeModelValue: u, isSingle: d } = u1(n, a), { forwardRef: c, currentElement: f } = j();
    return d1({
      disabled: r,
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
        x(p.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [yd, f1] = ge("AccordionItem"), p1 = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = yi(), o = S(
      () => a.isSingle.value ? n.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(n.value)
    ), r = S(() => a.disabled.value || n.disabled), s = S(() => r.value ? "" : void 0), i = S(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: s });
    const { currentRef: u, currentElement: d } = j();
    f1({
      open: o,
      dataState: i,
      disabled: r,
      dataDisabled: s,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: S(() => n.value)
    });
    function c(f) {
      var p;
      const h = f.target;
      if (Array.from(((p = a.parentElement.value) == null ? void 0 : p.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === h) === -1)
        return null;
      cv(
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
    return (f, p) => (g(), w(l(a1), {
      "data-orientation": l(a).orientation,
      "data-disabled": s.value,
      "data-state": i.value,
      disabled: r.value,
      open: o.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: qe(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        x(f.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), h1 = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = yi(), a = yd();
    return j(), (o, r) => (g(), w(l(s1), {
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
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), v1 = /* @__PURE__ */ _({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = yi(), a = yd();
    return j(), (o, r) => (g(), w(l(W), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": l(n).orientation,
      "data-state": l(a).dataState.value,
      "data-disabled": l(a).dataDisabled.value
    }, {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), m1 = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = yi(), a = yd();
    a.triggerId || (a.triggerId = He(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const r = n.isSingle.value && a.open.value && !n.collapsible;
      a.disabled.value || r || n.changeModelValue(a.value.value);
    }
    return (r, s) => (g(), w(l(o1), {
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
      onClick: o
    }, {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [an, g1] = ge("DialogRoot"), _v = /* @__PURE__ */ _({
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
    }), o = M(), r = M(), { modal: s } = me(n);
    return g1({
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
      triggerElement: o,
      contentElement: r
    }), (i, u) => x(i.$slots, "default", { open: l(a) });
  }
}), wv = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = an(), { forwardRef: a, currentElement: o } = j();
    return n.contentId || (n.contentId = He(void 0, "radix-vue-dialog-content")), ue(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (g(), w(l(W), B(t, {
      ref: l(a),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), yr = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = hd();
    return (n, a) => l(t) || n.forceMount ? (g(), w(pa, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled"])) : se("", !0);
  }
}), bd = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(yr), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), y1 = "dismissableLayer.pointerDownOutside", b1 = "dismissableLayer.focusOutside";
function xv(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && a === n || o.indexOf(a) < o.indexOf(n));
}
function _1(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), r = M(() => {
  });
  return xe((s) => {
    if (!tn)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (xv(t.value, c)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let f = function() {
            cd(
              y1,
              e,
              p
            );
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (a.removeEventListener("click", r.value), r.value = f, a.addEventListener("click", r.value, {
            once: !0
          })) : f();
        } else
          a.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      a.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(u), a.removeEventListener("pointerdown", i), a.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function w1(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return xe((r) => {
    if (!tn)
      return;
    const s = async (i) => {
      t != null && t.value && (await re(), !(!t.value || xv(t.value, i.target)) && i.target && !o.value && cd(
        b1,
        e,
        { originalEvent: i }
      ));
    };
    a.addEventListener("focusin", s), r(() => a.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const St = Ln({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), po = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = j(), s = S(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = S(() => St.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => St.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const v = Array.from(i.value), [m] = [...St.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = _1(async (v) => {
      const m = [...St.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await re(), v.defaultPrevented || a("dismiss"));
    }, r), p = w1((v) => {
      [...St.branches].some(
        (m) => m == null ? void 0 : m.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    pd("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return xe((v) => {
      r.value && (n.disableOutsidePointerEvents && (St.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), St.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && St.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), xe((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), St.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, m) => (g(), w(l(W), {
      ref: l(o),
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
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), x1 = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = j();
    return ue(() => {
      St.branches.add(a.value);
    }), Ke(() => {
      St.branches.delete(a.value);
    }), (o, r) => (g(), w(l(W), B({ ref: l(n) }, t), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dl = "focusScope.autoFocusOnMount", cl = "focusScope.autoFocusOnUnmount", vf = { bubbles: !1, cancelable: !0 };
function as(e, { select: t = !1 } = {}) {
  const n = We();
  for (const a of e)
    if (On(a, { select: t }), We() !== n)
      return !0;
}
function C1(e) {
  const t = _d(e), n = mf(t, e), a = mf(t.reverse(), e);
  return [n, a];
}
function _d(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function mf(e, t) {
  for (const n of e)
    if (!$1(n, { upTo: t }))
      return n;
}
function $1(e, { upTo: t }) {
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
function k1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function On(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = We();
    e.focus({ preventScroll: !0 }), e !== n && k1(e) && t && e.select();
  }
}
const S1 = b_(() => M([]));
function T1() {
  const e = S1();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = gf(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = gf(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function gf(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function E1(e) {
  return e.filter((t) => t.tagName !== "A");
}
const bi = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: o, currentElement: r } = j(), s = M(null), i = T1(), u = Ln({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!tn)
        return;
      const f = r.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (u.paused || !f)
          return;
        const $ = b.target;
        f.contains($) ? s.value = $ : On(s.value, { select: !0 });
      }
      function h(b) {
        if (u.paused || !f)
          return;
        const $ = b.relatedTarget;
        $ !== null && (f.contains($) || On(s.value, { select: !0 }));
      }
      function v(b) {
        f.contains(s.value) || On(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const m = new MutationObserver(v);
      f && m.observe(f, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), m.disconnect();
      });
    }), xe(async (c) => {
      const f = r.value;
      if (await re(), !f)
        return;
      i.add(u);
      const p = We();
      if (!f.contains(p)) {
        const h = new CustomEvent(dl, vf);
        f.addEventListener(dl, (v) => a("mountAutoFocus", v)), f.dispatchEvent(h), h.defaultPrevented || (as(E1(_d(f)), {
          select: !0
        }), We() === p && On(f));
      }
      c(() => {
        f.removeEventListener(dl, (m) => a("mountAutoFocus", m));
        const h = new CustomEvent(cl, vf), v = (m) => {
          a("unmountAutoFocus", m);
        };
        f.addEventListener(cl, v), f.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || On(p ?? document.body, { select: !0 }), f.removeEventListener(cl, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = We();
      if (f && p) {
        const h = c.currentTarget, [v, m] = C1(h);
        v && m ? !c.shiftKey && p === m ? (c.preventDefault(), n.loop && On(v, { select: !0 })) : c.shiftKey && p === v && (c.preventDefault(), n.loop && On(m, { select: !0 })) : p === h && c.preventDefault();
      }
    }
    return (c, f) => (g(), w(l(W), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), A1 = "menu.itemSelect", jl = ["Enter", " "], D1 = ["ArrowDown", "PageUp", "Home"], Cv = ["ArrowUp", "PageDown", "End"], M1 = [...D1, ...Cv], B1 = {
  ltr: [...jl, "ArrowRight"],
  rtl: [...jl, "ArrowLeft"]
}, O1 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function wd(e) {
  return e ? "open" : "closed";
}
function Ms(e) {
  return e === "indeterminate";
}
function xd(e) {
  return Ms(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Yl(e) {
  const t = We();
  for (const n of e)
    if (n === t || (n.focus(), We() !== t))
      return;
}
function P1(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function I1(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return P1(n, t);
}
function Zo(e) {
  return e.pointerType === "mouse";
}
const R1 = "DialogTitle", F1 = "DialogContent";
function V1({
  titleName: e = R1,
  contentName: t = F1,
  componentLink: n = "dialog.html#title",
  titleId: a,
  descriptionId: o,
  contentElement: r
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ue(() => {
    var u;
    document.getElementById(a) || console.warn(s);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && d && (document.getElementById(o) || console.warn(i));
  });
}
const $v = /* @__PURE__ */ _({
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
    const n = e, a = t, o = an(), { forwardRef: r, currentElement: s } = j();
    return o.titleId || (o.titleId = He(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = He(void 0, "radix-vue-dialog-description")), ue(() => {
      o.contentElement = s, We() !== document.body && (o.triggerElement.value = We());
    }), process.env.NODE_ENV !== "production" && V1({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, u) => (g(), w(l(bi), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        O(l(po), B({
          id: l(o).contentId,
          ref: l(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(wd)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => a("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => a("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => a("pointerDownOutside", d))
        }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), N1 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = an(), r = ga(a), { forwardRef: s, currentElement: i } = j();
    return gr(i), (u, d) => (g(), w($v, B({ ...n, ...l(r) }, {
      ref: l(s),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        c.defaultPrevented || (c.preventDefault(), (f = l(o).triggerElement.value) == null || f.focus());
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
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), L1 = /* @__PURE__ */ _({
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
    const n = e, a = ga(t);
    j();
    const o = an(), r = M(!1), s = M(!1);
    return (i, u) => (g(), w($v, B({ ...n, ...l(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c;
        d.defaultPrevented || (r.value || (c = l(o).triggerElement.value) == null || c.focus(), d.preventDefault()), r.value = !1, s.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var c;
        d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = d.target;
        (c = l(o).triggerElement.value) != null && c.contains(f) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cd = /* @__PURE__ */ _({
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
    const n = e, a = t, o = an(), r = ga(a), { forwardRef: s } = j();
    return (i, u) => (g(), w(l(mt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(N1, B({
          key: 0,
          ref: l(s)
        }, { ...n, ...l(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(L1, B({
          key: 1,
          ref: l(s)
        }, { ...n, ...l(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), z1 = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = an();
    return vr(!0), j(), (n, a) => (g(), w(l(W), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), $d = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = an(), { forwardRef: n } = j();
    return (a, o) => {
      var r;
      return (r = l(t)) != null && r.modal.value ? (g(), w(l(mt), {
        key: 0,
        present: a.forceMount || l(t).open.value
      }, {
        default: y(() => [
          O(z1, B(a.$attrs, {
            ref: l(n),
            as: a.as,
            "as-child": a.asChild
          }), {
            default: y(() => [
              x(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : se("", !0);
    };
  }
}), br = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = an();
    return (a, o) => (g(), w(l(W), B(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), kv = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = an();
    return j(), (a, o) => (g(), w(l(W), B(t, {
      id: l(n).titleId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Sv = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    j();
    const n = an();
    return (a, o) => (g(), w(l(W), B(t, {
      id: l(n).descriptionId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function H1(e) {
  function t(a) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => Ye(o, a)) : e.date.value ? Ye(e.date.value, a) : !1;
  }
  const n = S(
    () => {
      var a, o, r, s;
      if (Array.isArray(e.date.value)) {
        if (!e.date.value.length)
          return !1;
        for (const i of e.date.value)
          if ((a = e.isDateDisabled) != null && a.call(e, i) || (o = e.isDateUnavailable) != null && o.call(e, i))
            return !0;
      } else {
        if (!e.date.value)
          return !1;
        if ((r = e.isDateDisabled) != null && r.call(e, e.date.value) || (s = e.isDateUnavailable) != null && s.call(e, e.date.value))
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
function U1(e, t) {
  const n = t(e), a = n.compare(e), o = {};
  return a >= 7 && (o.day = 1), a >= yn(e) && (o.month = 1), n.set({ ...o });
}
function W1(e, t) {
  const n = t(e), a = e.compare(n), o = {};
  return a >= 7 && (o.day = 35), a >= yn(e) && (o.month = 13), n.set({ ...o });
}
function K1(e, t) {
  return t(e);
}
function j1(e, t) {
  return t(e);
}
function Tv(e) {
  const t = hv(e.locale.value), n = S(() => {
    const m = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (m.era = "short"), m;
  }), a = M(qn({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = S(() => a.value.map((m) => m.value));
  function r(m) {
    return !o.value.some((b) => Rc(m, b));
  }
  const s = (m = "month", b) => {
    if (!e.maxValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = a.value[a.value.length - 1].value;
    if (b || e.nextPage.value) {
      const C = U1($, b || e.nextPage.value);
      return Ro(C, e.maxValue.value);
    }
    if (m === "year") {
      const C = $.add({ years: 1 }).set({ day: 1, month: 1 });
      return Ro(C, e.maxValue.value);
    }
    const k = $.add({ months: 1 }).set({ day: 1 });
    return Ro(k, e.maxValue.value);
  }, i = (m = "month", b) => {
    if (!e.minValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = a.value[0].value;
    if (b || e.prevPage.value) {
      const C = W1($, b || e.prevPage.value);
      return Vn(C, e.minValue.value);
    }
    if (m === "year") {
      const C = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Vn(C, e.minValue.value);
    }
    const k = $.subtract({ months: 1 }).set({ day: 35 });
    return Vn(k, e.minValue.value);
  };
  function u(m) {
    var b;
    return !!((b = e.isDateDisabled) != null && b.call(e, m) || e.disabled.value || e.maxValue.value && Ro(m, e.maxValue.value) || e.minValue.value && Vn(m, e.minValue.value));
  }
  const d = (m) => {
    var b;
    return !!((b = e.isDateUnavailable) != null && b.call(e, m));
  }, c = S(() => a.value.length ? a.value[0].rows[0].map((m) => t.dayOfWeek(wt(m), e.weekdayFormat.value)) : []), f = (m = "month", b) => {
    const $ = a.value[0].value;
    if (b || e.nextPage.value) {
      const E = K1($, b || e.nextPage.value), T = qn({
        dateObj: E,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = T;
      const D = {};
      if (!b) {
        const A = T[0].value.compare($);
        A >= yn($) && (D.day = 1), A >= 365 && (D.month = 1);
      }
      e.placeholder.value = T[0].value.set({ ...D });
      return;
    }
    const k = m === "month" ? $.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.add({ years: 1 }), C = qn({
      dateObj: k,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
  }, p = (m = "month", b) => {
    const $ = a.value[0].value;
    if (b || e.prevPage.value) {
      const E = j1($, b || e.prevPage.value), T = qn({
        dateObj: E,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = T;
      const D = {};
      if (!b) {
        const A = $.compare(T[0].value);
        A >= yn($) && (D.day = 1), A >= 365 && (D.month = 1);
      }
      e.placeholder.value = T[0].value.set({ ...D });
      return;
    }
    const k = m === "month" ? $.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), C = qn({
      dateObj: k,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
  };
  te(e.placeholder, (m) => {
    o.value.some((b) => Rc(b, m)) || (a.value = qn({
      dateObj: m,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), te([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    a.value = qn({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const h = S(() => {
    if (!a.value.length)
      return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), a.value.length === 1) {
      const T = a.value[0].value;
      return `${t.fullMonthAndYear(wt(T), n.value)}`;
    }
    const m = wt(a.value[0].value), b = wt(a.value[a.value.length - 1].value), $ = t.fullMonth(m, n.value), k = t.fullMonth(b, n.value), C = t.fullYear(m, n.value), E = t.fullYear(b, n.value);
    return C === E ? `${$} - ${k} ${E}` : `${$} ${C} - ${k} ${E}`;
  }), v = S(() => `${e.calendarLabel.value ?? "Event Date"}, ${h.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: s,
    isPrevButtonDisabled: i,
    grid: a,
    weekdays: c,
    visibleView: o,
    isOutsideVisibleView: r,
    formatter: t,
    nextPage: f,
    prevPage: p,
    headingValue: h,
    fullCalendarLabel: v
  };
}
const Y1 = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, q1 = {
  role: "heading",
  "aria-level": "2"
}, [ho, G1] = ge("CalendarRoot"), Ev = /* @__PURE__ */ _({
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
      locale: o,
      disabled: r,
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
      isDateDisabled: $,
      isDateUnavailable: k,
      calendarLabel: C,
      defaultValue: E,
      nextPage: T,
      prevPage: D,
      dir: A
    } = me(n), { primitiveElement: N, currentElement: R } = fo(), P = nn(A), I = De(n, "modelValue", a, {
      defaultValue: E.value,
      passive: n.modelValue === void 0
    }), V = rv({
      defaultPlaceholder: n.placeholder,
      defaultValue: I.value,
      locale: n.locale
    }), Y = De(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? V.copy(),
      passive: n.placeholder === void 0
    });
    function z(q) {
      Y.value = q.copy();
    }
    const {
      fullCalendarLabel: H,
      headingValue: ee,
      isDateDisabled: ie,
      isDateUnavailable: be,
      isNextButtonDisabled: G,
      isPrevButtonDisabled: ce,
      weekdays: he,
      isOutsideVisibleView: Je,
      nextPage: at,
      prevPage: dt,
      formatter: gt,
      grid: Nt
    } = Tv({
      locale: o,
      placeholder: Y,
      weekStartsOn: d,
      fixedWeeks: f,
      numberOfMonths: m,
      minValue: h,
      maxValue: v,
      disabled: r,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: $.value,
      isDateUnavailable: k.value,
      calendarLabel: C,
      nextPage: T,
      prevPage: D
    }), {
      isInvalid: Q,
      isDateSelected: oe
    } = H1({
      date: I,
      isDateDisabled: ie,
      isDateUnavailable: be
    });
    te(I, (q) => {
      if (Array.isArray(q) && q.length) {
        const ne = q[q.length - 1];
        ne && !Ht(Y.value, ne) && z(ne);
      } else !Array.isArray(q) && q && !Ht(Y.value, q) && z(q);
    });
    function U(q) {
      if (p.value) {
        if (!I.value)
          I.value = [q.copy()];
        else if (Array.isArray(I.value)) {
          if (I.value.findIndex((ne) => Ye(ne, q)) === -1)
            I.value = [...I.value, q];
          else if (!b.value) {
            const ne = I.value.filter((K) => !Ye(K, q));
            if (!ne.length) {
              Y.value = q.copy(), I.value = void 0;
              return;
            }
            I.value = ne.map((K) => K.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = q.copy();
          return;
        }
        !b.value && Ht(I.value, q) ? (Y.value = q.copy(), I.value = void 0) : I.value = q.copy();
      }
    }
    return ue(() => {
      i.value && sv(R.value);
    }), G1({
      isDateUnavailable: be,
      dir: P,
      isDateDisabled: ie,
      locale: o,
      formatter: gt,
      modelValue: I,
      placeholder: Y,
      disabled: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: f,
      multiple: p,
      numberOfMonths: m,
      readonly: s,
      preventDeselect: b,
      fullCalendarLabel: H,
      headingValue: ee,
      isInvalid: Q,
      isDateSelected: oe,
      isNextButtonDisabled: G,
      isPrevButtonDisabled: ce,
      isOutsideVisibleView: Je,
      nextPage: at,
      prevPage: dt,
      parentElement: R,
      onPlaceholderChange: z,
      onDateChange: U
    }), (q, ne) => (g(), w(l(W), {
      ref_key: "primitiveElement",
      ref: N,
      as: q.as,
      "as-child": q.asChild,
      role: "application",
      "aria-label": l(H),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(r) ? "" : void 0,
      "data-invalid": l(Q) ? "" : void 0,
      dir: l(P)
    }, {
      default: y(() => [
        x(q.$slots, "default", {
          date: l(Y),
          grid: l(Nt),
          weekDays: l(he),
          weekStartsOn: l(d),
          locale: l(o),
          fixedWeeks: l(f)
        }),
        _e("div", Y1, [
          _e("div", q1, de(l(H)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), X1 = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J1 = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = ho();
    return (a, o) => (g(), w(l(W), B(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        x(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          ae(de(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Z1 = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = ho(), a = S(() => n.disabled.value ? !0 : void 0), o = S(() => n.readonly.value ? !0 : void 0);
    return (r, s) => (g(), w(l(W), B(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": a.value,
      "data-readonly": o.value && "",
      "data-disabled": a.value && ""
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Q1 = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = ho();
    return (n, a) => {
      var o, r;
      return g(), w(l(W), {
        as: n.as,
        "as-child": n.asChild,
        role: "gridcell",
        "aria-selected": l(t).isDateSelected(n.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(n.date) || ((r = (o = l(t)).isDateUnavailable) == null ? void 0 : r.call(o, n.date)),
        "data-disabled": l(t).isDateDisabled(n.date) ? "" : void 0
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), ew = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tw = /* @__PURE__ */ _({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = ho();
    return (o, r) => (g(), w(l(W), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).nextPage(t.step, t.nextPage))
    }, {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), nw = /* @__PURE__ */ _({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = ho();
    return (o, r) => (g(), w(l(W), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).prevPage(t.step, t.prevPage))
    }, {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), aw = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ow = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rw = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sw = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = gv(), a = ho(), { primitiveElement: o, currentElement: r } = fo(), s = S(() => t.day.day.toLocaleString(a.locale.value)), i = S(() => a.formatter.custom(wt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = S(() => a.isDateDisabled(t.day)), d = S(
      () => {
        var C;
        return (C = a.isDateUnavailable) == null ? void 0 : C.call(a, t.day);
      }
    ), c = S(() => bh(t.day, gn())), f = S(() => !Yu(t.day, t.month)), p = S(
      () => a.isOutsideVisibleView(t.day)
    ), h = S(() => !a.disabled.value && Ye(t.day, a.placeholder.value)), v = S(() => a.isDateSelected(t.day)), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function b(C) {
      var E;
      a.readonly.value || a.isDateDisabled(C) || (E = a.isDateUnavailable) != null && E.call(a, C) || a.onDateChange(C);
    }
    function $() {
      b(t.day);
    }
    function k(C) {
      C.preventDefault(), C.stopPropagation();
      const E = a.parentElement.value, T = E ? Array.from(E.querySelectorAll(m)) : [];
      let D = T.indexOf(r.value);
      const A = 7, N = a.dir.value === "rtl" ? -1 : 1;
      switch (C.code) {
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
      if (D >= 0 && D < T.length) {
        T[D].focus();
        return;
      }
      if (D < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), re(() => {
          const R = E ? Array.from(E.querySelectorAll(m)) : [];
          if (!a.pagedNavigation.value) {
            const P = yn(a.placeholder.value);
            R[P - Math.abs(D)].focus();
            return;
          }
          R[R.length - Math.abs(D)].focus();
        });
        return;
      }
      if (D >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), re(() => {
          const R = E ? Array.from(E.querySelectorAll(m)) : [];
          if (!a.pagedNavigation.value) {
            const P = yn(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            R[R.length - P + D - T.length].focus();
            return;
          }
          R[D - T.length].focus();
        });
      }
    }
    return (C, E) => (g(), w(l(W), B({
      ref_key: "primitiveElement",
      ref: o
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": u.value || d.value ? !0 : void 0,
      "data-selected": v.value ? !0 : void 0,
      "data-value": C.day.toString(),
      "data-disabled": u.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": f.value ? "" : void 0,
      "data-outside-visible-view": p.value ? "" : void 0,
      "data-focused": h.value ? "" : void 0,
      tabindex: h.value ? 0 : f.value || u.value ? void 0 : -1,
      onClick: $,
      onKeydown: [
        qe(k, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = qe(Pe(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: y(() => [
        x(C.$slots, "default", { dayValue: s.value }, () => [
          ae(de(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Bs(e) {
  return e === "indeterminate";
}
function Av(e) {
  return Bs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const iw = ["value", "checked", "name", "disabled", "required"], [lw, uw] = ge("CheckboxRoot"), dw = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: o } = me(n), r = De(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { forwardRef: s, currentElement: i } = j(), u = mr(i), d = S(() => {
      var c;
      return n.id && i.value ? (c = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return uw({
      disabled: o,
      state: r
    }), (c, f) => (g(), L(le, null, [
      O(l(W), B(c.$attrs, {
        id: c.id,
        ref: l(s),
        role: "checkbox",
        "as-child": n.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(Bs)(l(r)) ? "mixed" : l(r),
        "aria-required": n.required,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": l(Av)(l(r)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: qe(Pe(() => {
        }, ["prevent"]), ["enter"]),
        onClick: f[0] || (f[0] = (p) => r.value = l(Bs)(l(r)) ? !0 : !l(r))
      }), {
        default: y(() => [
          x(c.$slots, "default", { checked: l(r) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(u) ? (g(), L("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: c.value,
        checked: !!l(r),
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
      }, null, 8, iw)) : se("", !0)
    ], 64));
  }
}), cw = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = j(), n = lw();
    return (a, o) => (g(), w(l(mt), {
      present: a.forceMount || l(Bs)(l(n).state.value) || l(n).state.value === !0
    }, {
      default: y(() => [
        O(l(W), B({
          ref: l(t),
          "data-state": l(Av)(l(n).state.value),
          "data-disabled": l(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Dv, fw] = ge("PopperRoot"), vo = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return fw({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => x(n.$slots, "default");
  }
}), _i = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = j(), o = Dv();
    return xe(() => {
      o.onAnchorChange(t.element ?? a.value);
    }), (r, s) => (g(), w(l(W), {
      ref: l(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function pw(e) {
  return e !== null;
}
function hw(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, a, o;
      const { placement: r, rects: s, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [f, p] = ql(r), h = { start: "0%", center: "50%", end: "100%" }[p], v = (((a = i.arrow) == null ? void 0 : a.x) ?? 0) + d / 2, m = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let b = "", $ = "";
      return f === "bottom" ? (b = u ? h : `${v}px`, $ = `${-c}px`) : f === "top" ? (b = u ? h : `${v}px`, $ = `${s.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, $ = u ? h : `${m}px`) : f === "left" && (b = `${s.floating.width + c}px`, $ = u ? h : `${m}px`), { data: { x: b, y: $ } };
    }
  };
}
function ql(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Mv = {
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
}, [p5, vw] = ge("PopperContent"), Za = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Uu({
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
    ...Mv
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Dv(), { forwardRef: r, currentElement: s } = j(), i = M(), u = M(), { width: d, height: c } = mv(u), f = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = S(() => ({
      padding: p.value,
      boundary: h.value.filter(pw),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = g_(() => [
      Jh({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && As({
        ...v.value
      }),
      n.avoidCollisions && Zh({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? tv() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && As({
        ...v.value
      }),
      Qh({
        ...v.value,
        apply: ({ elements: P, rects: I, availableWidth: V, availableHeight: Y }) => {
          const { width: z, height: H } = I.reference, ee = P.floating.style;
          ee.setProperty(
            "--radix-popper-available-width",
            `${V}px`
          ), ee.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), ee.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), ee.setProperty(
            "--radix-popper-anchor-height",
            `${H}px`
          );
        }
      }),
      u.value && nv({ element: u.value, padding: n.arrowPadding }),
      hw({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && ev({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: $, isPositioned: k, middlewareData: C } = ov(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...P) => Xh(...P, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), E = S(
      () => ql($.value)[0]
    ), T = S(
      () => ql($.value)[1]
    );
    Wu(() => {
      k.value && a("placed");
    });
    const D = S(
      () => {
        var P;
        return ((P = C.value.arrow) == null ? void 0 : P.centerOffset) !== 0;
      }
    ), A = M("");
    xe(() => {
      s.value && (A.value = window.getComputedStyle(s.value).zIndex);
    });
    const N = S(() => {
      var P;
      return ((P = C.value.arrow) == null ? void 0 : P.x) ?? 0;
    }), R = S(() => {
      var P;
      return ((P = C.value.arrow) == null ? void 0 : P.y) ?? 0;
    });
    return vw({
      placedSide: E,
      onArrowChange: (P) => u.value = P,
      arrowX: N,
      arrowY: R,
      shouldHideArrow: D
    }), (P, I) => {
      var V, Y, z;
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
            (V = l(C).transformOrigin) == null ? void 0 : V.x,
            (Y = l(C).transformOrigin) == null ? void 0 : Y.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = l(C).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        O(l(W), B({ ref: l(r) }, P.$attrs, {
          "as-child": n.asChild,
          as: P.as,
          "data-side": E.value,
          "data-align": T.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(k) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            x(P.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), _r = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return j(), (t, n) => (g(), w(l(W), {
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), mw = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([r, s]) => ({ name: `[${o}][${t.name}][${r}]`, value: s })) : { name: `[${t.name}][${o}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({ name: `[${t.name}][${a}]`, value: o })) : []);
    return (a, o) => (g(!0), L(le, null, Ae(n.value, (r) => (g(), w(_r, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: a.required,
      disabled: a.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), gw = "data-radix-vue-collection-item", [kd, yw] = ge("CollectionProvider");
function Sd(e = gw) {
  const t = M(/* @__PURE__ */ new Map()), n = M(), a = yw({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: o } = Ed(a), r = S(() => Array.from(a.itemMap.value.values())), s = S(() => a.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: s };
}
const Td = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = kd(), { primitiveElement: a, currentElement: o } = fo();
    return te(o, () => {
      n.collectionRef.value = o.value;
    }), () => tt(gd, { ref: a }, t);
  }
}), wi = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const a = kd(), { primitiveElement: o, currentElement: r } = fo();
    return xe((s) => {
      if (r.value) {
        const i = mh(r.value);
        a.itemMap.value.set(i, { ref: r.value, value: e.value }), s(() => a.itemMap.value.delete(i));
      }
    }), () => tt(gd, { ...n, [a.attrName]: "", ref: o }, t);
  }
});
function Ed(e) {
  const t = e ?? kd();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const a = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (o, r) => a.indexOf(o.ref) - a.indexOf(r.ref)
    );
  } };
}
const [mo, bw] = ge("ComboboxRoot"), _w = /* @__PURE__ */ _({
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
    const n = e, a = t, { multiple: o, disabled: r, dir: s } = me(n), i = nn(s), u = De(n, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = De(n, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? o.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), f = De(n, "selectedValue", a, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function p(G) {
      var ce, he;
      c.value = G, await re(), G ? (d.value && (Array.isArray(d.value) && o.value ? f.value = (ce = C().find((Je) => {
        var at, dt;
        return ((dt = (at = Je.ref) == null ? void 0 : at.dataset) == null ? void 0 : dt.state) === "checked";
      })) == null ? void 0 : ce.value : f.value = d.value), await re(), (he = m.value) == null || he.focus(), Y()) : (v.value = !1, n.resetSearchTermOnBlur && N("blur"));
    }
    function h(G) {
      if (Array.isArray(d.value) && o.value) {
        const ce = d.value.findIndex((Je) => Zn(Je, G)), he = [...d.value];
        ce === -1 ? he.push(G) : he.splice(ce, 1), d.value = he;
      } else
        d.value = G, p(!1);
    }
    const v = M(!1), m = M(), b = M(), { forwardRef: $, currentElement: k } = j(), { getItems: C, reactiveItems: E, itemMapSize: T } = Sd("data-radix-vue-combobox-item"), D = M([]);
    te(() => T.value, () => {
      D.value = C().map((G) => G.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const A = S(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(D.value, u.value);
        const G = D.value.filter((ce) => typeof ce == "string");
        if (G.length)
          return G.filter((ce) => {
            var he;
            return ce.toLowerCase().includes((he = u.value) == null ? void 0 : he.toLowerCase());
          });
      }
      return D.value;
    });
    function N(G) {
      const ce = G === "blur" || G === "select" && n.resetSearchTermOnSelect;
      !o.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ce && (u.value = "") : ce && (u.value = "");
    }
    const R = S(() => A.value.findIndex((G) => Zn(G, f.value))), P = S(() => {
      var G;
      return (G = E.value.find((ce) => Zn(ce.value, f.value))) == null ? void 0 : G.ref;
    }), I = S(() => JSON.stringify(d.value));
    te(I, async () => {
      await re(), await re(), N("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [A.value.length, u.value.length], async ([G, ce], [he, Je]) => {
      await re(), await re(), G && (Je > ce || R.value === -1) && (f.value = A.value[0]);
    });
    const V = mr(k);
    function Y() {
      var G;
      P.value instanceof Element && ((G = P.value) == null || G.scrollIntoView({ block: "nearest" }));
    }
    function z() {
      P.value instanceof Element && P.value.focus && P.value.focus();
    }
    const H = M(!1);
    function ee() {
      H.value = !0;
    }
    function ie() {
      requestAnimationFrame(() => {
        H.value = !1;
      });
    }
    async function be(G) {
      var ce;
      A.value.length && f.value && P.value instanceof Element && (G.preventDefault(), G.stopPropagation(), H.value || (ce = P.value) == null || ce.click());
    }
    return bw({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: h,
      isUserInputted: v,
      multiple: o,
      disabled: r,
      open: c,
      onOpenChange: p,
      filteredOptions: A,
      contentId: "",
      inputElement: m,
      selectedElement: P,
      onInputElementChange: (G) => m.value = G,
      onInputNavigation: async (G) => {
        const ce = R.value;
        ce === 0 && G === "up" || ce === A.value.length - 1 && G === "down" || (ce === -1 && A.value.length || G === "home" ? f.value = A.value[0] : G === "end" ? f.value = A.value[A.value.length - 1] : f.value = A.value[G === "up" ? ce - 1 : ce + 1], await re(), Y(), z(), re(() => {
          var he;
          return (he = m.value) == null ? void 0 : he.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: be,
      onCompositionEnd: ie,
      onCompositionStart: ee,
      selectedValue: f,
      onSelectedValueChange: (G) => f.value = G,
      parentElement: k,
      contentElement: b,
      onContentElementChange: (G) => b.value = G
    }), (G, ce) => (g(), w(l(vo), null, {
      default: y(() => [
        O(l(W), B({
          ref: l($),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: G.as,
          "as-child": G.asChild,
          dir: l(i)
        }, G.$attrs), {
          default: y(() => [
            x(G.$slots, "default", {
              open: l(c),
              modelValue: l(d)
            }),
            l(V) && n.name ? (g(), w(l(mw), {
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
}), ww = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = mo(), { forwardRef: a, currentElement: o } = j();
    ue(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = S(() => t.disabled || n.disabled.value || !1), s = M();
    ph(() => {
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
      disabled: r.value,
      value: l(n).searchTerm.value,
      "aria-expanded": l(n).open.value,
      "aria-controls": l(n).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": s.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        qe(Pe(i, ["prevent"]), ["down", "up"]),
        qe(l(n).onInputEnter, ["enter"]),
        qe(Pe(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: l(n).onCompositionStart,
      onCompositionend: l(n).onCompositionEnd
    }, {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Bv, xw] = ge("ComboboxGroup"), Cw = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: a } = j(), o = He(void 0, "radix-vue-combobox-group"), r = mo(), s = M(!1);
    function i() {
      if (!a.value)
        return;
      const u = a.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      s.value = !!u.length;
    }
    return D_(a, () => {
      re(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      re(() => {
        i();
      });
    }, { immediate: !0 }), xw({
      id: o
    }), (u, d) => ha((g(), w(l(W), B(t, {
      ref_key: "currentRef",
      ref: n,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [di, s.value]
    ]);
  }
}), $w = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Bv({ id: "" });
    return (a, o) => (g(), w(l(W), B(t, {
      id: l(n).id
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [h5, kw] = ge("ComboboxContent"), Sw = /* @__PURE__ */ _({
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
    const n = e, a = t, { position: o } = me(n), r = mo();
    vr(n.bodyLock);
    const { forwardRef: s, currentElement: i } = j();
    gr(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = ye(u.value);
    function c(p) {
      r.onSelectedValueChange("");
    }
    ue(() => {
      r.onContentElementChange(i.value);
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
    return kw({ position: o }), (p, h) => (g(), w(l(Td), null, {
      default: y(() => [
        p.dismissable ? (g(), w(l(po), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": p.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (v) => l(r).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (v) => {
            var m;
            (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("focusOutside", v);
          }),
          onInteractOutside: h[2] || (h[2] = (v) => a("interactOutside", v)),
          onEscapeKeyDown: h[3] || (h[3] = (v) => a("escapeKeyDown", v)),
          onPointerDownOutside: h[4] || (h[4] = (v) => {
            var m;
            (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (g(), w(it(l(o) === "popper" ? l(Za) : l(W)), B({ ...p.$attrs, ...l(d) }, {
              id: l(r).contentId,
              ref: l(s),
              role: "listbox",
              "data-state": l(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...l(o) === "popper" ? f : {}
              },
              onPointerleave: c
            }), {
              default: y(() => [
                x(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (g(), w(it(l(o) === "popper" ? l(Za) : l(W)), B({ key: 1 }, { ...p.$attrs, ...u.value }, {
          id: l(r).contentId,
          ref: l(s),
          role: "listbox",
          "data-state": l(r).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...l(o) === "popper" ? f : {}
          },
          onPointerleave: c
        }), {
          default: y(() => [
            x(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Tw = /* @__PURE__ */ _({
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
    const n = pe(e, t), { forwardRef: a } = j(), o = mo();
    return o.contentId || (o.contentId = He(void 0, "radix-vue-combobox-content")), (r, s) => (g(), w(l(mt), {
      present: r.forceMount || l(o).open.value
    }, {
      default: y(() => [
        O(Sw, B({ ...l(n), ...r.$attrs }, { ref: l(a) }), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ew = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = mo(), a = S(() => n.filteredOptions.value.length === 0);
    return (o, r) => a.value ? (g(), w(l(W), J(B({ key: 0 }, t)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("No options")
        ])
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
});
function Aw(e) {
  const t = gi({
    nonce: M()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [v5, Dw] = ge("ComboboxItem"), Mw = "combobox.select", Bw = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = me(n), r = mo();
    Bv({ id: "", options: M([]) });
    const { forwardRef: s } = j(), i = S(
      () => {
        var m, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (m = r.modelValue.value) == null ? void 0 : m.some(($) => Zn($, n.value)) : Zn((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = S(() => Zn(r.selectedValue.value, n.value)), d = He(void 0, "radix-vue-combobox-item"), c = He(void 0, "radix-vue-combobox-option"), f = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((m) => Zn(m, n.value)) : !0);
    async function p(m) {
      a("select", m), !(m != null && m.defaultPrevented) && !o.value && m && r.onValueChange(n.value);
    }
    function h(m) {
      if (!m)
        return;
      const b = { originalEvent: m, value: n.value };
      cd(Mw, p, b);
    }
    async function v(m) {
      await re(), !m.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Dw({
      isSelected: i
    }), (m, b) => (g(), w(l(wi), { value: m.value }, {
      default: y(() => [
        ha(O(l(W), {
          id: l(c),
          ref: l(s),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": l(o) || void 0,
          "data-disabled": l(o) ? "" : void 0,
          as: m.as,
          "as-child": m.asChild,
          "data-hidden": f.value ? void 0 : !0,
          onClick: h,
          onPointermove: v
        }, {
          default: y(() => [
            x(m.$slots, "default", {}, () => [
              ae(de(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [di, f.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Ow = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), B(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ov = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(_i), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Pw() {
  const e = M(!1);
  return ue(() => {
    Ja("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Ja(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Iw = iv(Pw), [ya, Pv] = ge(["MenuRoot", "MenuSub"], "MenuContext"), [wr, Rw] = ge("MenuRoot"), Fw = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o, dir: r } = me(n), s = nn(r), i = De(n, "open", a), u = M(), d = Iw();
    return Pv({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Rw({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: o
    }), (c, f) => (g(), w(l(vo), null, {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Vw = "rovingFocusGroup.onEntryFocus", Nw = { bubbles: !1, cancelable: !0 }, Lw = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zw(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Hw(e, t, n) {
  const a = zw(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Lw[a];
}
function Iv(e, t = !1) {
  const n = We();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), We() !== n))
      return;
}
function Uw(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [Ww, Kw] = ge("RovingFocusGroup"), Rv = /* @__PURE__ */ _({
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
    const a = e, o = n, { loop: r, orientation: s, dir: i } = me(a), u = nn(i), d = De(a, "currentTabStopId", o, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), c = M(!1), f = M(!1), p = M(0), { getItems: h } = Sd();
    function v(b) {
      const $ = !f.value;
      if (b.currentTarget && b.target === b.currentTarget && $ && !c.value) {
        const k = new CustomEvent(Vw, Nw);
        if (b.currentTarget.dispatchEvent(k), o("entryFocus", k), !k.defaultPrevented) {
          const C = h().map((A) => A.ref).filter((A) => A.dataset.disabled !== ""), E = C.find((A) => A.getAttribute("data-active") === "true"), T = C.find(
            (A) => A.id === d.value
          ), D = [E, T, ...C].filter(
            Boolean
          );
          Iv(D, a.preventScrollOnEntryFocus);
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
    }), Kw({
      loop: r,
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
    }), (b, $) => (g(), w(l(Td), null, {
      default: y(() => [
        O(l(W), {
          tabindex: c.value || p.value === 0 ? -1 : 0,
          "data-orientation": l(s),
          as: b.as,
          "as-child": b.asChild,
          dir: l(u),
          style: { outline: "none" },
          onMousedown: $[0] || ($[0] = (k) => f.value = !0),
          onMouseup: m,
          onFocus: v,
          onBlur: $[1] || ($[1] = (k) => c.value = !1)
        }, {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), jw = /* @__PURE__ */ _({
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
    const t = e, n = Ww(), a = S(() => t.tabStopId || He()), o = S(
      () => n.currentTabStopId.value === a.value
    ), { getItems: r } = Ed();
    ue(() => {
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
      const u = Hw(
        i,
        n.orientation.value,
        n.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...r().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const c = d.indexOf(
            i.currentTarget
          );
          d = n.loop.value ? Uw(d, c + 1) : d.slice(c + 1);
        }
        re(() => Iv(d));
      }
    }
    return (i, u) => (g(), w(l(wi), null, {
      default: y(() => [
        O(l(W), {
          tabindex: o.value ? 0 : -1,
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
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Ad, Yw] = ge("MenuContent"), Dd = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Uu({
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
    ...Mv
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = ya(), r = wr(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = me(n);
    vd(), vr(i.value);
    const d = M(""), c = M(0), f = M(0), p = M(null), h = M("right"), v = M(0), m = M(null), { createCollection: b } = co(), { forwardRef: $, currentElement: k } = j(), C = b(k);
    te(k, (P) => {
      o.onContentChange(P);
    });
    const { handleTypeaheadSearch: E } = md(C);
    Ke(() => {
      window.clearTimeout(c.value);
    });
    function T(P) {
      var I, V;
      return h.value === ((I = p.value) == null ? void 0 : I.side) && I1(P, (V = p.value) == null ? void 0 : V.area);
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
      const I = P.target.closest("[data-radix-menu-content]") === P.currentTarget, V = P.ctrlKey || P.altKey || P.metaKey, Y = P.key.length === 1, z = cv(
        P,
        We(),
        k.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (z)
        return z == null ? void 0 : z.focus();
      if (P.code === "Space" || (I && (P.key === "Tab" && P.preventDefault(), !V && Y && E(P.key)), P.target !== k.value) || !M1.includes(P.key))
        return;
      P.preventDefault();
      const H = C.value;
      Cv.includes(P.key) && H.reverse(), Yl(H);
    }
    function N(P) {
      var I, V;
      (V = (I = P == null ? void 0 : P.currentTarget) == null ? void 0 : I.contains) != null && V.call(I, P.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function R(P) {
      var I;
      if (!Zo(P))
        return;
      const V = P.target, Y = v.value !== P.clientX;
      if ((I = P == null ? void 0 : P.currentTarget) != null && I.contains(V) && Y) {
        const z = P.clientX > v.value ? "right" : "left";
        h.value = z, v.value = P.clientX;
      }
    }
    return Yw({
      onItemEnter: (P) => !!T(P),
      onItemLeave: (P) => {
        var I;
        T(P) || ((I = k.value) == null || I.focus(), m.value = null);
      },
      onTriggerLeave: (P) => !!T(P),
      searchRef: d,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (P) => {
        p.value = P;
      }
    }), (P, I) => (g(), w(l(bi), {
      "as-child": "",
      trapped: l(s),
      onMountAutoFocus: D,
      onUnmountAutoFocus: I[7] || (I[7] = (V) => a("closeAutoFocus", V))
    }, {
      default: y(() => [
        O(l(po), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: I[2] || (I[2] = (V) => a("escapeKeyDown", V)),
          onPointerDownOutside: I[3] || (I[3] = (V) => a("pointerDownOutside", V)),
          onFocusOutside: I[4] || (I[4] = (V) => a("focusOutside", V)),
          onInteractOutside: I[5] || (I[5] = (V) => a("interactOutside", V)),
          onDismiss: I[6] || (I[6] = (V) => a("dismiss"))
        }, {
          default: y(() => [
            O(l(Rv), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (V) => m.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: l(r).dir.value,
              loop: l(u),
              onEntryFocus: I[1] || (I[1] = (V) => {
                a("entryFocus", V), l(r).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: y(() => [
                O(l(Za), {
                  ref: l($),
                  role: "menu",
                  as: P.as,
                  "as-child": P.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(wd)(l(o).open.value),
                  dir: l(r).dir.value,
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
                  onPointermove: R
                }, {
                  default: y(() => [
                    x(P.$slots, "default")
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
}), Fv = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ad(), { forwardRef: a } = j(), o = M(!1);
    async function r(i) {
      if (!i.defaultPrevented && Zo(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await re(), !i.defaultPrevented && Zo(i) && n.onItemLeave(i);
    }
    return (i, u) => (g(), w(l(wi), {
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
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: r,
          onPointerleave: s,
          onFocus: u[0] || (u[0] = async (d) => {
            await re(), !(d.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await re(), !d.defaultPrevented && (o.value = !1);
          })
        }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Md = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = j(), s = wr(), i = Ad(), u = M(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const f = new CustomEvent(A1, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", f), await re(), f.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (c, f) => (g(), w(Fv, B(n, {
      ref: l(o),
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
        c.disabled || h && p.key === " " || l(jl).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [qw, Vv] = ge(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Gw = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = qw({
      checked: M(!1)
    });
    return (n, a) => (g(), w(l(mt), {
      present: n.forceMount || l(Ms)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: y(() => [
        O(l(W), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(xd)(l(t).checked.value)
        }, {
          default: y(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Xw = /* @__PURE__ */ _({
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
    const n = e, a = t, o = De(n, "checked", a);
    return Vv({ checked: o }), (r, s) => (g(), w(Md, B({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(Ms)(l(o)) ? "mixed" : l(o),
      "data-state": l(xd)(l(o)),
      onSelect: s[0] || (s[0] = async (i) => {
        a("select", i), l(Ms)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: y(() => [
        x(r.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Jw = /* @__PURE__ */ _({
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
    const n = e, a = t, o = pe(n, a), r = ya(), { forwardRef: s, currentElement: i } = j();
    return gr(i), (u, d) => (g(), w(Dd, B(l(o), {
      ref: l(s),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": l(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => l(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Pe((c) => a("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Zw = /* @__PURE__ */ _({
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
    const n = pe(e, t), a = ya();
    return (o, r) => (g(), w(Dd, B(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qw = /* @__PURE__ */ _({
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
    const n = pe(e, t), a = ya(), o = wr();
    return (r, s) => (g(), w(l(mt), {
      present: r.forceMount || l(a).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(Jw, J(B({ key: 0 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(Zw, J(B({ key: 1 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nv = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B({ role: "group" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ex = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tx = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(yr), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [nx, ax] = ge("MenuRadioGroup"), ox = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "modelValue", t);
    return ax({
      modelValue: a,
      onValueChange: (o) => {
        a.value = o;
      }
    }), (o, r) => (g(), w(Nv, J(Z(n)), {
      default: y(() => [
        x(o.$slots, "default", { modelValue: l(a) })
      ]),
      _: 3
    }, 16));
  }
}), rx = /* @__PURE__ */ _({
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
    const n = e, a = t, { value: o } = me(n), r = nx(), s = S(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Vv({ checked: s }), (i, u) => (g(), w(Md, B({ role: "menuitemradio" }, n, {
      "aria-checked": s.value,
      "data-state": l(xd)(s.value),
      onSelect: u[0] || (u[0] = async (d) => {
        a("select", d), l(r).onValueChange(l(o));
      })
    }), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), sx = /* @__PURE__ */ _({
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
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Lv, ix] = ge("MenuSub"), lx = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = De(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), o = ya(), r = M(), s = M();
    return xe((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (a.value = !1), i(() => a.value = !1);
    }), Pv({
      open: a,
      onOpenChange: (i) => {
        a.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), ix({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (g(), w(l(vo), null, {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ux = /* @__PURE__ */ _({
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
    const n = pe(e, t), a = ya(), o = wr(), r = Lv(), { forwardRef: s, currentElement: i } = j();
    return r.contentId || (r.contentId = He(void 0, "radix-vue-menu-sub-content")), (u, d) => (g(), w(l(mt), {
      present: u.forceMount || l(a).open.value
    }, {
      default: y(() => [
        O(Dd, B(l(n), {
          id: l(r).contentId,
          ref: l(s),
          "aria-labelledby": l(r).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Pe((c) => {
            var f;
            l(o).isUsingKeyboardRef.value && ((f = l(i)) == null || f.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Pe(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== l(r).trigger.value && l(a).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            l(o).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var f, p;
            const h = (f = c.currentTarget) == null ? void 0 : f.contains(c.target), v = l(O1)[l(o).dir.value].includes(c.key);
            h && v && (l(a).onOpenChange(!1), (p = l(r).trigger.value) == null || p.focus(), c.preventDefault());
          })
        }), {
          default: y(() => [
            x(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), dx = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ya(), a = wr(), o = Lv(), r = Ad(), s = M(null);
    o.triggerId || (o.triggerId = He(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Ke(() => {
      i();
    });
    function u(f) {
      !Zo(f) || r.onItemEnter(f) || !t.disabled && !n.open.value && !s.value && (r.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(f) {
      var p, h;
      if (!Zo(f))
        return;
      i();
      const v = (p = n.content.value) == null ? void 0 : p.getBoundingClientRect();
      if (v != null && v.width) {
        const m = (h = n.content.value) == null ? void 0 : h.dataset.side, b = m === "right", $ = b ? -5 : 5, k = v[b ? "left" : "right"], C = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + $, y: f.clientY },
            { x: k, y: v.top },
            { x: C, y: v.top },
            { x: C, y: v.bottom },
            { x: k, y: v.bottom }
          ],
          side: m
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(f))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function c(f) {
      var p;
      const h = r.searchRef.value !== "";
      t.disabled || h && f.key === " " || B1[a.dir.value].includes(f.key) && (n.onOpenChange(!0), await re(), (p = n.content.value) == null || p.focus(), f.preventDefault());
    }
    return (f, p) => (g(), w(Ov, { "as-child": "" }, {
      default: y(() => [
        O(Fv, B(t, {
          id: l(o).triggerId,
          ref: (h) => {
            var v;
            (v = l(o)) == null || v.onTriggerChange(h == null ? void 0 : h.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(wd)(l(n).open.value),
          onClick: p[0] || (p[0] = async (h) => {
            t.disabled || h.defaultPrevented || (h.currentTarget.focus(), l(n).open.value || l(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: y(() => [
            x(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [zv, cx] = ge("DropdownMenuRoot"), fx = /* @__PURE__ */ _({
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
    j();
    const o = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = M(), { modal: s, dir: i } = me(n), u = nn(i);
    return cx({
      open: o,
      onOpenChange: (d) => {
        o.value = d;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: r,
      contentId: "",
      modal: s,
      dir: u
    }), (d, c) => (g(), w(l(Fw), {
      open: l(o),
      "onUpdate:open": c[0] || (c[0] = (f) => lt(o) ? o.value = f : null),
      dir: l(u),
      modal: l(s)
    }, {
      default: y(() => [
        x(d.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), px = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = zv(), { forwardRef: a, currentElement: o } = j();
    return ue(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = He(void 0, "radix-vue-dropdown-menu-trigger")), (r, s) => (g(), w(l(Ov), { "as-child": "" }, {
      default: y(() => [
        O(l(W), {
          id: l(n).triggerId,
          ref: l(a),
          type: r.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).open.value ? l(n).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": l(n).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = l(n)) == null || u.onOpenToggle(), await re(), l(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = qe(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && l(n).onOpenToggle(), i.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), hx = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(tx), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vx = /* @__PURE__ */ _({
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
    const n = pe(e, t);
    j();
    const a = zv(), o = M(!1);
    function r(s) {
      s.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = a.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, s.preventDefault());
    }
    return a.contentId || (a.contentId = He(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var u;
      return g(), w(l(Qw), B(l(n), {
        id: l(a).contentId,
        "aria-labelledby": (u = l(a)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: r,
        onInteractOutside: i[0] || (i[0] = (d) => {
          var c;
          if (d.defaultPrevented) return;
          const f = d.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, h = f.button === 2 || p;
          (!l(a).modal.value || h) && (o.value = !0), (c = l(a).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          x(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Hv = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = ga(t);
    return j(), (o, r) => (g(), w(l(Md), J(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mx = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(Nv), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gx = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(sx), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yx = /* @__PURE__ */ _({
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
    const n = e, a = ga(t);
    return j(), (o, r) => (g(), w(l(Xw), J(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uv = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(Gw), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bx = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(ex), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _x = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = ga(t);
    return j(), (o, r) => (g(), w(l(ox), J(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wx = /* @__PURE__ */ _({
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
    const n = pe(e, t);
    return j(), (a, o) => (g(), w(l(rx), J(Z(l(n))), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xx = /* @__PURE__ */ _({
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
    return j(), (o, r) => (g(), w(l(lx), {
      open: l(a),
      "onUpdate:open": r[0] || (r[0] = (s) => lt(a) ? a.value = s : null)
    }, {
      default: y(() => [
        x(o.$slots, "default", { open: l(a) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Cx = /* @__PURE__ */ _({
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
    const n = pe(e, t);
    return j(), (a, o) => (g(), w(l(ux), B(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $x = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(dx), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kx = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), B(t, {
      onMousedown: a[0] || (a[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [go, Sx] = ge("PaginationRoot"), m5 = /* @__PURE__ */ _({
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
    const n = e, a = t, { siblingCount: o, disabled: r, showEdges: s } = me(n);
    j();
    const i = De(n, "page", a, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = S(() => Math.max(1, Math.ceil(n.total / n.itemsPerPage)));
    return Sx({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: o,
      disabled: r,
      showEdges: s
    }), (d, c) => (g(), w(l(W), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: y(() => [
        x(d.$slots, "default", {
          page: l(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Tx = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), B(t, { "data-type": "ellipsis" }), {
      default: y(() => [
        x(n.$slots, "default", {}, () => [
          ae("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Ex = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = go();
    j();
    const a = S(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (g(), w(l(W), B(t, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(1))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Ax = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = go();
    j();
    const a = S(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (g(), w(l(W), B(t, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(l(n).pageCount.value))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function Dn(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (a, o) => o + e);
}
function Dx(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Rr = "ellipsis";
function Mx(e, t, n, a) {
  const o = t, r = Math.max(e - n, 1), s = Math.min(e + n, o);
  if (a) {
    const i = Math.min(2 * n + 5, t) - 2, u = r > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(r - 1) > 2, d = s < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - s) > 2;
    if (!u && d)
      return [...Dn(1, i), Rr, o];
    if (u && !d) {
      const c = Dn(o - i + 1, o);
      return [1, Rr, ...c];
    }
    if (u && d) {
      const c = Dn(r, s);
      return [1, Rr, ...c, Rr, o];
    }
    return Dn(1, o);
  } else {
    const i = n * 2 + 1;
    return t < i ? Dn(1, o) : e <= n + 1 ? Dn(1, i) : t - e <= n ? Dn(t - i + 1, o) : Dn(r, s);
  }
}
const g5 = /* @__PURE__ */ _({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = go(), a = S(() => Dx(
      Mx(
        n.page.value,
        n.pageCount.value,
        n.siblingCount.value,
        n.showEdges.value
      )
    ));
    return (o, r) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(o.$slots, "default", { items: a.value })
      ]),
      _: 3
    }, 16));
  }
}), y5 = /* @__PURE__ */ _({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = go(), a = S(() => n.page.value === t.value), o = S(() => n.disabled.value);
    return (r, s) => (g(), w(l(W), B(t, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": a.value ? "page" : void 0,
      "data-selected": a.value ? "true" : void 0,
      disabled: o.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (i) => !o.value && l(n).onPageChange(r.value))
    }), {
      default: y(() => [
        x(r.$slots, "default", {}, () => [
          ae(de(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Bx = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = go(), a = S(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (g(), w(l(W), B(t, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(l(n).page.value + 1))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Ox = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = go(), a = S(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (g(), w(l(W), B(t, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (s) => !a.value && l(n).onPageChange(l(n).page.value - 1))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [xr, Px] = ge("PopoverRoot"), Ix = /* @__PURE__ */ _({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o } = me(n), r = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = M(), i = M(!1);
    return Px({
      contentId: "",
      modal: o,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: s,
      hasCustomAnchor: i
    }), (u, d) => (g(), w(l(vo), null, {
      default: y(() => [
        x(u.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }));
  }
}), Rx = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = xr(), { forwardRef: a, currentElement: o } = j();
    return ue(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (g(), w(it(l(n).hasCustomAnchor.value ? l(W) : l(_i)), { "as-child": "" }, {
      default: y(() => [
        O(l(W), {
          ref: l(a),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).contentId,
          "data-state": l(n).open.value ? "open" : "closed",
          as: r.as,
          "as-child": t.asChild,
          onClick: l(n).onOpenToggle
        }, {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Fx = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(yr), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wv = /* @__PURE__ */ _({
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
    const n = e, a = t, o = ye(n), { forwardRef: r } = j(), s = xr();
    return vd(), (i, u) => (g(), w(l(bi), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        O(l(po), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => a("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => a("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => a("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => l(s).onOpenChange(!1))
        }, {
          default: y(() => [
            O(l(Za), B(l(o), {
              id: l(s).contentId,
              ref: l(r),
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
}), Vx = /* @__PURE__ */ _({
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
    const n = e, a = t, o = xr(), r = M(!1);
    vr(!0);
    const s = pe(n, a), { forwardRef: i, currentElement: u } = j();
    return gr(u), (d, c) => (g(), w(Wv, B(l(s), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Pe(
        (f) => {
          var p;
          a("closeAutoFocus", f), r.value || (p = l(o).triggerElement.value) == null || p.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        a("pointerDownOutside", f);
        const p = f.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || h;
        r.value = v;
      }),
      onFocusOutside: c[2] || (c[2] = Pe(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Nx = /* @__PURE__ */ _({
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
    const n = e, a = t, o = xr(), r = M(!1), s = M(!1), i = pe(n, a);
    return (u, d) => (g(), w(Wv, B(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f;
        a("closeAutoFocus", c), c.defaultPrevented || (r.value || (f = l(o).triggerElement.value) == null || f.focus(), c.preventDefault()), r.value = !1, s.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var f;
        a("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const p = c.target;
        (f = l(o).triggerElement.value) != null && f.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lx = /* @__PURE__ */ _({
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
    const n = e, a = t, o = xr(), r = pe(n, a), { forwardRef: s } = j();
    return o.contentId || (o.contentId = He(void 0, "radix-vue-popover-content")), (i, u) => (g(), w(l(mt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(Vx, B({ key: 0 }, l(r), { ref: l(s) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(Nx, B({ key: 1 }, l(r), { ref: l(s) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function zx(e) {
  const t = S(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), n = S(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), a = S(
    () => t.value || n.value ? !1 : !!(e.start.value && e.end.value && Vn(e.end.value, e.start.value))
  ), o = (u) => e.start.value ? Ye(e.start.value, u) : !1, r = (u) => e.end.value ? Ye(e.end.value, u) : !1, s = (u) => e.start.value && Ye(e.start.value, u) || e.end.value && Ye(e.end.value, u) ? !0 : e.end.value && e.start.value ? vb(u, e.start.value, e.end.value) : !1, i = S(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const u = Vn(e.start.value, e.focusedValue.value), d = u ? e.start.value : e.focusedValue.value, c = u ? e.focusedValue.value : e.start.value;
    return Ye(d, c) ? {
      start: d,
      end: c
    } : yb(d, c, e.isDateUnavailable, e.isDateDisabled) ? {
      start: d,
      end: c
    } : null;
  });
  return {
    isInvalid: a,
    isSelected: s,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: r,
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Ye(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Ye(i.value.end, u)
  };
}
const Hx = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Ux = {
  role: "heading",
  "aria-level": "2"
}, [yo, Wx] = ge("RangeCalendarRoot"), Kx = /* @__PURE__ */ _({
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
      disabled: o,
      readonly: r,
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
      minValue: $,
      locale: k,
      dir: C,
      nextPage: E,
      prevPage: T
    } = me(n), { primitiveElement: D, currentElement: A } = fo(), N = nn(C), R = M(), P = M(), I = De(n, "modelValue", a, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), V = rv({
      defaultPlaceholder: n.placeholder,
      defaultValue: I.value.start,
      locale: n.locale
    }), Y = M(I.value.start), z = M(I.value.end), H = De(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? V.copy(),
      passive: n.placeholder === void 0
    });
    function ee(fe) {
      H.value = fe.copy();
    }
    const {
      fullCalendarLabel: ie,
      headingValue: be,
      isDateDisabled: G,
      isDateUnavailable: ce,
      isNextButtonDisabled: he,
      isPrevButtonDisabled: Je,
      grid: at,
      weekdays: dt,
      isOutsideVisibleView: gt,
      nextPage: Nt,
      prevPage: Q,
      formatter: oe
    } = Tv({
      locale: k,
      placeholder: H,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: f,
      minValue: $,
      maxValue: b,
      disabled: o,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: v.value,
      isDateUnavailable: h.value,
      calendarLabel: m,
      nextPage: E,
      prevPage: T
    }), {
      isInvalid: U,
      isSelected: q,
      highlightedRange: ne,
      isSelectionStart: K,
      isSelectionEnd: Re,
      isHighlightedStart: we,
      isHighlightedEnd: nt
    } = zx({
      start: Y,
      end: z,
      isDateDisabled: G,
      isDateUnavailable: ce,
      focusedValue: P
    });
    return te(I, (fe) => {
      var Le, Ze, Zi, Oc;
      (!fe || !fe.start || Y.value && !Ht(fe.start, Y.value)) && (Y.value = (Ze = (Le = fe == null ? void 0 : fe.start) == null ? void 0 : Le.copy) == null ? void 0 : Ze.call(Le)), (!fe || !fe.end || z.value && !Ht(fe.end, z.value)) && (z.value = (Oc = (Zi = fe == null ? void 0 : fe.end) == null ? void 0 : Zi.copy) == null ? void 0 : Oc.call(Zi));
    }), te(Y, (fe) => {
      fe && !Ht(fe, H.value) && ee(fe), a("update:startValue", fe);
    }), te([Y, z], ([fe, Le]) => {
      const Ze = I.value;
      if (!(Ze && Ze.start && Ze.end && fe && Le && Ht(Ze.start, fe) && Ht(Ze.end, Le)))
        if (fe && Le) {
          if (Ze.start && Ze.end && Ht(Ze.start, fe) && Ht(Ze.end, Le))
            return;
          Vn(Le, fe) ? I.value = {
            start: Le.copy(),
            end: fe.copy()
          } : I.value = {
            start: fe.copy(),
            end: Le.copy()
          };
        } else Ze.start && Ze.end && (I.value = {
          start: fe == null ? void 0 : fe.copy(),
          end: void 0
        });
    }), Wx({
      isDateUnavailable: ce,
      startValue: Y,
      endValue: z,
      formatter: oe,
      modelValue: I,
      placeholder: H,
      disabled: o,
      initialFocus: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: f,
      readonly: r,
      preventDeselect: p,
      fullCalendarLabel: ie,
      headingValue: be,
      isInvalid: U,
      isDateDisabled: G,
      highlightedRange: ne,
      focusedValue: P,
      lastPressedDateValue: R,
      isSelected: q,
      isSelectionEnd: Re,
      isSelectionStart: K,
      isNextButtonDisabled: he,
      isPrevButtonDisabled: Je,
      isOutsideVisibleView: gt,
      nextPage: Nt,
      prevPage: Q,
      parentElement: A,
      onPlaceholderChange: ee,
      locale: k,
      dir: N,
      isHighlightedStart: we,
      isHighlightedEnd: nt
    }), ue(() => {
      s.value && sv(A.value);
    }), (fe, Le) => (g(), w(l(W), {
      ref_key: "primitiveElement",
      ref: D,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": l(ie),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(U) ? "" : void 0,
      dir: l(N)
    }, {
      default: y(() => [
        _e("div", Hx, [
          _e("div", Ux, de(l(ie)), 1)
        ]),
        x(fe.$slots, "default", {
          date: l(H),
          grid: l(at),
          weekDays: l(dt),
          weekStartsOn: l(u),
          locale: l(k),
          fixedWeeks: l(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), jx = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yx = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = yo();
    return (a, o) => (g(), w(l(W), B(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        x(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          ae(de(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), qx = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = yo(), a = S(() => n.disabled.value ? !0 : void 0), o = S(() => n.readonly.value ? !0 : void 0);
    return (r, s) => (g(), w(l(W), B(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": a.value,
      "data-readonly": o.value && "",
      "data-disabled": a.value && ""
    }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Gx = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = yo();
    return (n, a) => {
      var o, r;
      return g(), w(l(W), {
        as: n.as,
        "as-child": n.asChild,
        role: "gridcell",
        "aria-selected": l(t).isSelected(n.date) ? !0 : void 0,
        "aria-disabled": l(t).isDateDisabled(n.date) || ((r = (o = l(t)).isDateUnavailable) == null ? void 0 : r.call(o, n.date)),
        "data-disabled": l(t).isDateDisabled(n.date) ? "" : void 0
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Xx = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jx = /* @__PURE__ */ _({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = yo();
    return (o, r) => (g(), w(l(W), B(t, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).nextPage(t.step, t.nextPage))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Zx = /* @__PURE__ */ _({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = yo();
    return (o, r) => (g(), w(l(W), B(t, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": n.value || void 0,
      "data-disabled": n.value || void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (s) => l(a).prevPage(t.step, t.prevPage))
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Qx = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eC = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tC = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nC = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = yo(), a = gv(), { primitiveElement: o, currentElement: r } = fo(), s = S(() => n.formatter.custom(wt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = S(() => n.isDateDisabled(t.day)), u = S(() => {
      var R;
      return (R = n.isDateUnavailable) == null ? void 0 : R.call(n, t.day);
    }), d = S(() => n.isSelected(t.day)), c = S(() => n.isSelectionStart(t.day)), f = S(() => n.isSelectionEnd(t.day)), p = S(() => n.isHighlightedStart(t.day)), h = S(() => n.isHighlightedEnd(t.day)), v = S(() => n.highlightedRange.value ? hb(t.day, n.highlightedRange.value.start, n.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", b = S(() => bh(t.day, gn())), $ = S(() => !Yu(t.day, t.month)), k = S(
      () => n.isOutsideVisibleView(t.day)
    ), C = S(() => t.day.day.toLocaleString(n.locale.value)), E = S(() => !n.disabled.value && Ye(t.day, n.placeholder.value));
    function T(R, P) {
      var I;
      if (!n.readonly.value && !(n.isDateDisabled(P) || (I = n.isDateUnavailable) != null && I.call(n, P))) {
        if (n.lastPressedDateValue.value = P.copy(), n.startValue.value && n.highlightedRange.value === null) {
          if (Ye(P, n.startValue.value) && !n.preventDeselect.value && !n.endValue.value) {
            n.startValue.value = void 0, n.onPlaceholderChange(P);
            return;
          } else if (!n.endValue.value) {
            R.preventDefault(), n.lastPressedDateValue.value && Ye(n.lastPressedDateValue.value, P) && (n.startValue.value = P.copy());
            return;
          }
        }
        if (n.startValue.value && n.endValue.value && Ye(n.endValue.value, P) && !n.preventDeselect.value) {
          n.startValue.value = void 0, n.endValue.value = void 0, n.onPlaceholderChange(P);
          return;
        }
        n.startValue.value ? n.endValue.value ? n.endValue.value && n.startValue.value && (n.endValue.value = void 0, n.startValue.value = P.copy()) : n.endValue.value = P.copy() : n.startValue.value = P.copy();
      }
    }
    function D(R) {
      T(R, t.day);
    }
    function A() {
      var R;
      n.isDateDisabled(t.day) || (R = n.isDateUnavailable) != null && R.call(n, t.day) || (n.focusedValue.value = t.day.copy());
    }
    function N(R) {
      R.preventDefault(), R.stopPropagation();
      const P = n.parentElement.value, I = P ? Array.from(P.querySelectorAll(m)) : [];
      let V = I.indexOf(r.value);
      const Y = 7, z = n.dir.value === "rtl" ? -1 : 1;
      switch (R.code) {
        case a.ARROW_RIGHT:
          V += z;
          break;
        case a.ARROW_LEFT:
          V -= z;
          break;
        case a.ARROW_UP:
          V -= Y;
          break;
        case a.ARROW_DOWN:
          V += Y;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          T(R, t.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < I.length) {
        I[V].focus();
        return;
      }
      if (V < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), re(() => {
          const H = P ? Array.from(P.querySelectorAll(m)) : [];
          if (!n.pagedNavigation.value) {
            const ee = yn(n.placeholder.value);
            H[ee - Math.abs(V)].focus();
            return;
          }
          H[H.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= I.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), re(() => {
          const H = P ? Array.from(P.querySelectorAll(m)) : [];
          if (!n.pagedNavigation.value) {
            const ee = yn(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            H[H.length - ee + V - I.length].focus();
            return;
          }
          H[V - I.length].focus();
        });
      }
    }
    return (R, P) => (g(), w(l(W), B({
      ref_key: "primitiveElement",
      ref: o
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
      "data-value": R.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": b.value ? "" : void 0,
      "data-outside-view": $.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : $.value || i.value ? void 0 : -1,
      onClick: D,
      onFocusin: A,
      onMouseenter: A,
      onKeydown: qe(N, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: y(() => [
        x(R.$slots, "default", { dayValue: C.value }, () => [
          ae(de(C.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), aC = ["default-value"], oC = /* @__PURE__ */ _({
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
    const t = e, { value: n } = me(t), a = M();
    return (o, r) => (g(), w(l(_r), { "as-child": "" }, {
      default: y(() => [
        ha(_e("select", B({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (s) => lt(n) ? n.value = s : null),
          "default-value": l(n)
        }), [
          x(o.$slots, "default")
        ], 16, aC), [
          [s0, l(n)]
        ])
      ]),
      _: 3
    }));
  }
}), rC = {
  key: 0,
  value: ""
}, [ba, Kv] = ge("SelectRoot"), [sC, iC] = ge("SelectRoot"), lC = /* @__PURE__ */ _({
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
    const n = e, a = t, o = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = M(), i = M(), u = M({
      x: 0,
      y: 0
    }), d = M(!1), { required: c, disabled: f, dir: p } = me(n), h = nn(p);
    Kv({
      triggerElement: s,
      onTriggerChange: ($) => {
        s.value = $;
      },
      valueElement: i,
      onValueElementChange: ($) => {
        i.value = $;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: ($) => {
        d.value = $;
      },
      contentId: "",
      modelValue: o,
      onValueChange: ($) => {
        o.value = $;
      },
      open: r,
      required: c,
      onOpenChange: ($) => {
        r.value = $;
      },
      dir: h,
      triggerPointerDownPosRef: u,
      disabled: f
    });
    const v = mr(s), m = M(/* @__PURE__ */ new Set()), b = S(() => Array.from(m.value).map(($) => {
      var k;
      return (k = $.props) == null ? void 0 : k.value;
    }).join(";"));
    return iC({
      onNativeOptionAdd: ($) => {
        m.value.add($);
      },
      onNativeOptionRemove: ($) => {
        m.value.delete($);
      }
    }), ($, k) => (g(), w(l(vo), null, {
      default: y(() => [
        x($.$slots, "default", {
          modelValue: l(o),
          open: l(r)
        }),
        l(v) ? (g(), w(oC, B({ key: b.value }, $.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(c),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: l(f),
          value: l(o),
          onChange: k[0] || (k[0] = (C) => o.value = C.target.value)
        }), {
          default: y(() => [
            l(o) === void 0 ? (g(), L("option", rC)) : se("", !0),
            (g(!0), L(le, null, Ae(Array.from(m.value), (C) => (g(), w(it(C), B({ ref_for: !0 }, C.props, {
              key: C.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : se("", !0)
      ]),
      _: 3
    }));
  }
}), uC = [" ", "Enter", "ArrowUp", "ArrowDown"], dC = [" ", "Enter"], Tt = 10;
function jv(e) {
  return e === "" || ns(e);
}
const cC = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ba(), a = S(() => {
      var h;
      return ((h = n.disabled) == null ? void 0 : h.value) || t.disabled;
    }), { forwardRef: o, currentElement: r } = j();
    n.contentId || (n.contentId = He(void 0, "radix-vue-select-content")), ue(() => {
      n.triggerElement = r;
    });
    const { injectCollection: s } = co(), i = s(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = md(i);
    function f() {
      a.value || (n.onOpenChange(!0), c());
    }
    function p(h) {
      f(), n.triggerPointerDownPosRef.value = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      };
    }
    return (h, v) => (g(), w(l(_i), { "as-child": "" }, {
      default: y(() => {
        var m, b, $, k;
        return [
          O(l(W), {
            ref: l(o),
            role: "combobox",
            type: h.as === "button" ? "button" : void 0,
            "aria-controls": l(n).contentId,
            "aria-expanded": l(n).open.value || !1,
            "aria-required": (m = l(n).required) == null ? void 0 : m.value,
            "aria-autocomplete": "none",
            disabled: a.value,
            dir: (b = l(n)) == null ? void 0 : b.dir.value,
            "data-state": ($ = l(n)) != null && $.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": l(jv)((k = l(n).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": h.asChild,
            as: h.as,
            onClick: v[0] || (v[0] = (C) => {
              var E;
              (E = C == null ? void 0 : C.currentTarget) == null || E.focus();
            }),
            onPointerdown: v[1] || (v[1] = (C) => {
              if (C.pointerType === "touch")
                return C.preventDefault();
              const E = C.target;
              E.hasPointerCapture(C.pointerId) && E.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && (p(C), C.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Pe(
              (C) => {
                C.pointerType === "touch" && p(C);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (C) => {
              const E = l(u) !== "";
              !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && E && C.key === " " || (l(d)(C.key), l(uC).includes(C.key) && (f(), C.preventDefault()));
            })
          }, {
            default: y(() => [
              x(h.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), fC = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(yr), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bd, pC] = ge("SelectItemAlignedPosition"), hC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { injectCollection: o } = co(), r = ba(), s = _a(), i = o(), u = M(!1), d = M(!0), c = M(), { forwardRef: f, currentElement: p } = j(), { viewport: h, selectedItem: v, selectedItemText: m, focusSelectedItem: b } = s;
    function $() {
      if (r.triggerElement.value && r.valueElement.value && c.value && p.value && h != null && h.value && v != null && v.value && m != null && m.value) {
        const E = r.triggerElement.value.getBoundingClientRect(), T = p.value.getBoundingClientRect(), D = r.valueElement.value.getBoundingClientRect(), A = m.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const Q = A.left - T.left, oe = D.left - Q, U = E.left - oe, q = E.width + U, ne = Math.max(q, T.width), K = window.innerWidth - Tt, Re = Ds(oe, Tt, Math.max(Tt, K - ne));
          c.value.style.minWidth = `${q}px`, c.value.style.left = `${Re}px`;
        } else {
          const Q = T.right - A.right, oe = window.innerWidth - D.right - Q, U = window.innerWidth - E.right - oe, q = E.width + U, ne = Math.max(q, T.width), K = window.innerWidth - Tt, Re = Ds(
            oe,
            Tt,
            Math.max(Tt, K - ne)
          );
          c.value.style.minWidth = `${q}px`, c.value.style.right = `${Re}px`;
        }
        const N = i.value, R = window.innerHeight - Tt * 2, P = h.value.scrollHeight, I = window.getComputedStyle(p.value), V = Number.parseInt(
          I.borderTopWidth,
          10
        ), Y = Number.parseInt(I.paddingTop, 10), z = Number.parseInt(
          I.borderBottomWidth,
          10
        ), H = Number.parseInt(
          I.paddingBottom,
          10
        ), ee = V + Y + P + H + z, ie = Math.min(
          v.value.offsetHeight * 5,
          ee
        ), be = window.getComputedStyle(h.value), G = Number.parseInt(be.paddingTop, 10), ce = Number.parseInt(
          be.paddingBottom,
          10
        ), he = E.top + E.height / 2 - Tt, Je = R - he, at = v.value.offsetHeight / 2, dt = v.value.offsetTop + at, gt = V + Y + dt, Nt = ee - gt;
        if (gt <= he) {
          const Q = v.value === N[N.length - 1];
          c.value.style.bottom = "0px";
          const oe = p.value.clientHeight - h.value.offsetTop - h.value.offsetHeight, U = Math.max(
            Je,
            at + (Q ? ce : 0) + oe + z
          ), q = gt + U;
          c.value.style.height = `${q}px`;
        } else {
          const Q = v.value === N[0];
          c.value.style.top = "0px";
          const oe = Math.max(
            he,
            V + h.value.offsetTop + (Q ? G : 0) + at
          ) + Nt;
          c.value.style.height = `${oe}px`, h.value.scrollTop = gt - he + h.value.offsetTop;
        }
        c.value.style.margin = `${Tt}px 0`, c.value.style.minHeight = `${ie}px`, c.value.style.maxHeight = `${R}px`, a("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = M("");
    ue(async () => {
      await re(), $(), p.value && (k.value = window.getComputedStyle(p.value).zIndex);
    });
    function C(E) {
      E && d.value === !0 && ($(), b == null || b(), d.value = !1);
    }
    return pC({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: C
    }), (E, T) => (g(), L("div", {
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
      }, { ...E.$attrs, ...n }), {
        default: y(() => [
          x(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), vC = /* @__PURE__ */ _({
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
    const t = ye(e);
    return (n, a) => (g(), w(l(Za), B(l(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bo = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [_a, mC] = ge("SelectContent"), gC = /* @__PURE__ */ _({
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
    const n = e, a = t, o = ba();
    vd(), vr(n.bodyLock);
    const { createCollection: r } = co(), s = M();
    gr(s);
    const i = r(s), { search: u, handleTypeaheadSearch: d } = md(i), c = M(), f = M(), p = M(), h = M(!1), v = M(!1);
    function m() {
      f.value && s.value && Yl([f.value, s.value]);
    }
    te(h, () => {
      m();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: $ } = o;
    xe((T) => {
      if (!s.value)
        return;
      let D = { x: 0, y: 0 };
      const A = (R) => {
        var P, I;
        D = {
          x: Math.abs(
            Math.round(R.pageX) - (((P = $.value) == null ? void 0 : P.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((I = $.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, N = (R) => {
        var P;
        R.pointerType !== "touch" && (D.x <= 10 && D.y <= 10 ? R.preventDefault() : (P = s.value) != null && P.contains(R.target) || b(!1), document.removeEventListener("pointermove", A), $.value = null);
      };
      $.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", N, {
        capture: !0,
        once: !0
      })), T(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", N, {
          capture: !0
        });
      });
    });
    function k(T) {
      const D = T.ctrlKey || T.altKey || T.metaKey;
      if (T.key === "Tab" && T.preventDefault(), !D && T.key.length === 1 && d(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) {
        let A = i.value;
        if (["ArrowUp", "End"].includes(T.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key)) {
          const N = T.target, R = A.indexOf(N);
          A = A.slice(R + 1);
        }
        setTimeout(() => Yl(A)), T.preventDefault();
      }
    }
    const C = S(() => n.position === "popper" ? n : {}), E = ye(C.value);
    return mC({
      content: s,
      viewport: c,
      onViewportChange: (T) => {
        c.value = T;
      },
      itemRefCallback: (T, D, A) => {
        var N, R;
        const P = !v.value && !A;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === D || P) && (f.value = T, P && (v.value = !0));
      },
      selectedItem: f,
      selectedItemText: p,
      onItemLeave: () => {
        var T;
        (T = s.value) == null || T.focus();
      },
      itemTextRefCallback: (T, D, A) => {
        var N, R;
        const P = !v.value && !A;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === D || P) && (p.value = T);
      },
      focusSelectedItem: m,
      position: n.position,
      isPositioned: h,
      searchRef: u
    }), (T, D) => (g(), w(l(bi), {
      "as-child": "",
      onMountAutoFocus: D[6] || (D[6] = Pe(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: D[7] || (D[7] = (A) => {
        var N;
        a("closeAutoFocus", A), !A.defaultPrevented && ((N = l(o).triggerElement.value) == null || N.focus({ preventScroll: !0 }), A.preventDefault());
      })
    }, {
      default: y(() => [
        O(l(po), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: D[2] || (D[2] = Pe(() => {
          }, ["prevent"])),
          onDismiss: D[3] || (D[3] = (A) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: D[4] || (D[4] = (A) => a("escapeKeyDown", A)),
          onPointerDownOutside: D[5] || (D[5] = (A) => a("pointerDownOutside", A))
        }, {
          default: y(() => [
            (g(), w(it(
              T.position === "popper" ? vC : hC
            ), B({ ...T.$attrs, ...l(E) }, {
              id: l(o).contentId,
              ref: (A) => {
                s.value = l(Ct)(A);
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
              onContextmenu: D[0] || (D[0] = Pe(() => {
              }, ["prevent"])),
              onPlaced: D[1] || (D[1] = (A) => h.value = !0),
              onKeydown: k
            }), {
              default: y(() => [
                x(T.$slots, "default")
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
}), yC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Kv(e.context), (t, n) => x(t.$slots, "default");
  }
}), bC = { key: 1 }, _C = /* @__PURE__ */ _({
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
    const n = e, a = pe(n, t), o = ba(), r = M();
    ue(() => {
      r.value = new DocumentFragment();
    });
    const s = M(), i = S(() => n.forceMount || o.open.value);
    return (u, d) => {
      var c;
      return i.value ? (g(), w(l(mt), {
        key: 0,
        ref_key: "presenceRef",
        ref: s,
        present: !0
      }, {
        default: y(() => [
          O(gC, J(Z({ ...l(a), ...u.$attrs })), {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = s.value) != null && c.present) && r.value ? (g(), L("div", bC, [
        (g(), w(pa, { to: r.value }, [
          O(yC, { context: l(o) }, {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : se("", !0);
    };
  }
}), wC = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), B({ "aria-hidden": "true" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Yv, xC] = ge("SelectItem"), CC = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = me(t), a = ba(), o = _a(bo), { forwardRef: r, currentElement: s } = j(), i = S(() => {
      var m;
      return ((m = a.modelValue) == null ? void 0 : m.value) === t.value;
    }), u = M(!1), d = M(t.textValue ?? ""), c = He(void 0, "radix-vue-select-item-text");
    async function f(m) {
      await re(), !(m != null && m.defaultPrevented) && (n.value || (a.onValueChange(t.value), a.onOpenChange(!1)));
    }
    async function p(m) {
      var b;
      await re(), !m.defaultPrevented && (n.value ? (b = o.onItemLeave) == null || b.call(o) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function h(m) {
      var b;
      await re(), !m.defaultPrevented && m.currentTarget === We() && ((b = o.onItemLeave) == null || b.call(o));
    }
    async function v(m) {
      var b;
      await re(), !(m.defaultPrevented || ((b = o.searchRef) == null ? void 0 : b.value) !== "" && m.key === " ") && (dC.includes(m.key) && f(), m.key === " " && m.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ue(() => {
      s.value && o.itemRefCallback(
        s.value,
        t.value,
        t.disabled
      );
    }), xC({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (m) => {
        d.value = ((d.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, b) => (g(), w(l(W), {
      ref: l(r),
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
      onFocus: b[0] || (b[0] = ($) => u.value = !0),
      onBlur: b[1] || (b[1] = ($) => u.value = !1),
      onPointerup: f,
      onPointerdown: b[2] || (b[2] = ($) => {
        $.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = Pe(() => {
      }, ["prevent", "stop"])),
      onPointermove: p,
      onPointerleave: h,
      onKeydown: v
    }, {
      default: y(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), $C = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Yv();
    return (a, o) => l(n).isSelected.value ? (g(), w(l(W), B({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
}), [kC, SC] = ge("SelectGroup"), TC = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = He(void 0, "radix-vue-select-group");
    return SC({ id: n }), (a, o) => (g(), w(l(W), B({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), EC = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = kC({ id: "" });
    return (a, o) => (g(), w(l(W), B(t, {
      id: l(n).id
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), qv = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ba(), a = _a(bo), o = sC(), r = Yv(), { forwardRef: s, currentElement: i } = j(), u = S(() => {
      var d;
      return tt("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return ue(() => {
      i.value && (r.onItemTextChange(i.value), a.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), ui(() => {
      o.onNativeOptionRemove(u.value);
    }), (d, c) => (g(), L(le, null, [
      O(l(W), B({
        id: l(r).textId,
        ref: l(s)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(r).isSelected.value && l(n).valueElement.value && !l(n).valueElementHasChildren.value ? (g(), w(pa, {
        key: 0,
        to: l(n).valueElement.value
      }, [
        x(d.$slots, "default")
      ], 8, ["to"])) : se("", !0)
    ], 64));
  }
}), AC = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = me(t), a = Aw(n), o = _a(bo), r = o.position === "item-aligned" ? Bd() : void 0, { forwardRef: s, currentElement: i } = j();
    ue(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = M(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: h } = r ?? {};
      if (p != null && p.value && h != null && h.value) {
        const v = Math.abs(u.value - f.scrollTop);
        if (v > 0) {
          const m = window.innerHeight - Tt * 2, b = Number.parseFloat(
            h.value.style.minHeight
          ), $ = Number.parseFloat(h.value.style.height), k = Math.max(b, $);
          if (k < m) {
            const C = k + v, E = Math.min(m, C), T = C - E;
            h.value.style.height = `${E}px`, h.value.style.bottom === "0px" && (f.scrollTop = T > 0 ? T : 0, h.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (c, f) => (g(), L(le, null, [
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
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      O(l(W), {
        as: "style",
        nonce: l(a)
      }, {
        default: y(() => [
          ae(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Gv = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: a } = co(), o = a(), r = _a(bo), s = M(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    xe(() => {
      const c = o.value.find(
        (f) => f === We()
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
      (c = r.onItemLeave) == null || c.call(r), s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return ui(() => i()), (c, f) => {
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
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), DC = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = _a(bo), n = t.position === "item-aligned" ? Bd() : void 0, { forwardRef: a, currentElement: o } = j(), r = M(!1);
    return xe((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), s(() => c.removeEventListener("scroll", d));
      }
    }), te(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, i) => r.value ? (g(), w(Gv, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = l(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : se("", !0);
  }
}), MC = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = _a(bo), n = t.position === "item-aligned" ? Bd() : void 0, { forwardRef: a, currentElement: o } = j(), r = M(!1);
    return xe((s) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const f = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < f;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), s(() => c.removeEventListener("scroll", d));
      }
    }), te(o, () => {
      o.value && (n == null || n.onScrollButtonChange(o.value));
    }), (s, i) => r.value ? (g(), w(Gv, {
      key: 0,
      ref: l(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = l(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : se("", !0);
  }
}), BC = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = j(), a = ba(), o = fh();
    return o0(() => {
      var r;
      const s = !!mi((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
      a.onValueElementHasChildrenChange(s);
    }), ue(() => {
      a.valueElement = n;
    }), (r, s) => (g(), w(l(W), {
      ref: l(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          l(jv)((i = l(a).modelValue) == null ? void 0 : i.value) ? (g(), L(le, { key: 0 }, [
            ae(de(r.placeholder), 1)
          ], 64)) : x(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), OC = /* @__PURE__ */ _({
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
        x(t.$slots, "default", {}, () => [
          ae("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), PC = /* @__PURE__ */ _({
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
    const o = S(
      () => a(t.orientation) ? t.orientation : "horizontal"
    ), r = S(
      () => o.value === "vertical" ? t.orientation : void 0
    ), s = S(
      () => t.decorative ? { role: "none" } : { "aria-orientation": r.value, role: "separator" }
    );
    return (i, u) => (g(), w(l(W), B({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, s.value), {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), IC = /* @__PURE__ */ _({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(PC, J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function RC(e = [], t, n) {
  const a = [...e];
  return a[n] = t, a.sort((o, r) => o - r);
}
function Xv(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Ds(a, 0, 100);
}
function FC(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function VC(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((o) => Math.abs(o - t)), a = Math.min(...n);
  return n.indexOf(a);
}
function NC(e, t, n) {
  const a = e / 2, o = Od([0, 50], [0, a]);
  return (a - o(t) * n) * n;
}
function LC(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function zC(e, t) {
  if (t > 0) {
    const n = LC(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Od(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (n - e[0]);
  };
}
function HC(e) {
  return (String(e).split(".")[1] || "").length;
}
function UC(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Jv = ["PageUp", "PageDown"], Zv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Qv = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [em, tm] = ge(["SliderVertical", "SliderHorizontal"]), nm = /* @__PURE__ */ _({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = xi();
    return (r, s) => (g(), w(l(W), B({ "data-slider-impl": "" }, n, {
      onKeydown: s[0] || (s[0] = (i) => {
        i.key === "Home" ? (a("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (a("endKeyDown", i), i.preventDefault()) : l(Jv).concat(l(Zv)).includes(i.key) && (a("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: s[1] || (s[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), l(o).thumbElements.value.includes(u) ? u.focus() : a("slideStart", i);
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
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), WC = /* @__PURE__ */ _({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, dir: s, inverted: i } = me(n), { forwardRef: u, currentElement: d } = j(), c = M(), f = S(() => (s == null ? void 0 : s.value) === "ltr" && !i.value || (s == null ? void 0 : s.value) !== "ltr" && i.value);
    function p(h) {
      const v = c.value || d.value.getBoundingClientRect(), m = [0, v.width], b = f.value ? [r.value, o.value] : [o.value, r.value], $ = Od(m, b);
      return c.value = v, $(h - v.left);
    }
    return tm({
      startEdge: f.value ? "left" : "right",
      endEdge: f.value ? "right" : "left",
      direction: f.value ? 1 : -1,
      size: "width"
    }), (h, v) => (g(), w(nm, {
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
        const b = f.value ? "from-left" : "from-right", $ = l(Qv)[b].includes(m.key);
        a("stepKeyDown", m, $ ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (m) => a("endKeyDown", m)),
      onHomeKeyDown: v[5] || (v[5] = (m) => a("homeKeyDown", m))
    }, {
      default: y(() => [
        x(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), KC = /* @__PURE__ */ _({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, inverted: s } = me(n), { forwardRef: i, currentElement: u } = j(), d = M(), c = S(() => !s.value);
    function f(p) {
      const h = d.value || u.value.getBoundingClientRect(), v = [0, h.height], m = c.value ? [o.value, r.value] : [r.value, o.value], b = Od(v, m);
      return d.value = h, b(p - h.top);
    }
    return tm({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (p, h) => (g(), w(nm, {
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
        const m = c.value ? "from-bottom" : "from-top", b = l(Qv)[m].includes(v.key);
        a("stepKeyDown", v, b ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (v) => a("endKeyDown", v)),
      onHomeKeyDown: h[5] || (h[5] = (v) => a("homeKeyDown", v))
    }, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), jC = ["value", "name", "disabled", "step"], [xi, YC] = ge("SliderRoot"), qC = /* @__PURE__ */ _({
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
    const n = e, a = t, { min: o, max: r, step: s, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = me(n), f = nn(c), { forwardRef: p, currentElement: h } = j(), v = mr(h);
    Sd();
    const m = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = M(0), $ = M(m.value);
    function k(A) {
      const N = VC(m.value, A);
      T(A, N);
    }
    function C(A) {
      T(A, b.value);
    }
    function E() {
      const A = $.value[b.value];
      m.value[b.value] !== A && a("valueCommit", Zr(m.value));
    }
    function T(A, N, { commit: R } = { commit: !1 }) {
      var P;
      const I = HC(s.value), V = UC(Math.round((A - o.value) / s.value) * s.value + o.value, I), Y = Ds(V, o.value, r.value), z = RC(m.value, Y, N);
      if (zC(z, i.value * s.value)) {
        b.value = z.indexOf(Y);
        const H = String(z) !== String(m.value);
        H && R && a("valueCommit", z), H && ((P = D.value[b.value]) == null || P.focus(), m.value = z);
      }
    }
    const D = M([]);
    return YC({
      modelValue: m,
      valueIndexToChangeRef: b,
      thumbElements: D,
      orientation: u,
      min: o,
      max: r,
      disabled: d
    }), (A, N) => (g(), L(le, null, [
      O(l(Td), null, {
        default: y(() => [
          (g(), w(it(l(u) === "horizontal" ? WC : KC), B(A.$attrs, {
            ref: l(p),
            "as-child": A.asChild,
            as: A.as,
            min: l(o),
            max: l(r),
            dir: l(f),
            inverted: A.inverted,
            "aria-disabled": l(d),
            "data-disabled": l(d) ? "" : void 0,
            onPointerdown: N[0] || (N[0] = () => {
              l(d) || ($.value = l(m));
            }),
            onSlideStart: N[1] || (N[1] = (R) => !l(d) && k(R)),
            onSlideMove: N[2] || (N[2] = (R) => !l(d) && C(R)),
            onSlideEnd: N[3] || (N[3] = (R) => !l(d) && E()),
            onHomeKeyDown: N[4] || (N[4] = (R) => !l(d) && T(l(o), 0, { commit: !0 })),
            onEndKeyDown: N[5] || (N[5] = (R) => !l(d) && T(l(r), l(m).length - 1, { commit: !0 })),
            onStepKeyDown: N[6] || (N[6] = (R, P) => {
              if (!l(d)) {
                const I = l(Jv).includes(R.key) || R.shiftKey && l(Zv).includes(R.key) ? 10 : 1, V = b.value, Y = l(m)[V], z = l(s) * I * P;
                T(Y + z, V, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              x(A.$slots, "default", { modelValue: l(m) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(v) ? (g(!0), L(le, { key: 0 }, Ae(l(m), (R, P) => (g(), L("input", {
        key: P,
        value: R,
        type: "number",
        style: { display: "none" },
        name: A.name ? A.name + (l(m).length > 1 ? "[]" : "") : void 0,
        disabled: l(d),
        step: l(s)
      }, null, 8, jC))), 128)) : se("", !0)
    ], 64));
  }
}), GC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = xi(), a = em(), { forwardRef: o, currentElement: r } = j(), s = S(() => {
      var h, v;
      return (v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v[t.index];
    }), i = S(() => s.value === void 0 ? 0 : Xv(s.value, n.min.value ?? 0, n.max.value ?? 100)), u = S(() => {
      var h, v;
      return FC(t.index, ((v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v.length) ?? 0);
    }), d = mv(r), c = S(() => d[a.size].value), f = S(() => c.value ? NC(c.value, i.value, a.direction) : 0), p = hd();
    return ue(() => {
      n.thumbElements.value.push(r.value);
    }), Ke(() => {
      const h = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(h, 1);
    }), (h, v) => (g(), w(l(wi), null, {
      default: y(() => [
        O(l(W), B(h.$attrs, {
          ref: l(o),
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
            x(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), XC = /* @__PURE__ */ _({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = Ed(), { forwardRef: a, currentElement: o } = j(), r = S(() => o.value ? n().findIndex((s) => s.ref === o.value) : -1);
    return (s, i) => (g(), w(GC, B({ ref: l(a) }, t, { index: r.value }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), JC = /* @__PURE__ */ _({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = xi();
    return j(), (n, a) => (g(), w(l(W), {
      "as-child": n.asChild,
      as: n.as,
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), ZC = /* @__PURE__ */ _({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = xi(), n = em();
    j();
    const a = S(() => {
      var s, i;
      return (i = (s = t.modelValue) == null ? void 0 : s.value) == null ? void 0 : i.map(
        (u) => Xv(u, t.min.value, t.max.value)
      );
    }), o = S(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), r = S(() => 100 - Math.max(...a.value));
    return (s, i) => (g(), w(l(W), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": s.asChild,
      as: s.as,
      style: Qt({
        [l(n).startEdge]: `${o.value}%`,
        [l(n).endEdge]: `${r.value}%`
      })
    }, {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function QC() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
QC();
const e$ = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [t$, n$] = ge("SwitchRoot"), a$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: o } = me(n), r = De(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function s() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = j(), d = mr(u), c = S(() => {
      var f;
      return n.id && u.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return n$({
      checked: r,
      toggleCheck: s,
      disabled: o
    }), (f, p) => (g(), L(le, null, [
      O(l(W), B(f.$attrs, {
        id: f.id,
        ref: l(i),
        role: "switch",
        type: f.as === "button" ? "button" : void 0,
        value: f.value,
        "aria-label": f.$attrs["aria-label"] || c.value,
        "aria-checked": l(r),
        "aria-required": f.required,
        "data-state": l(r) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        "as-child": f.asChild,
        as: f.as,
        disabled: l(o),
        onClick: s,
        onKeydown: qe(Pe(s, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          x(f.$slots, "default", { checked: l(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(d) ? (g(), L("input", {
        key: 0,
        type: "checkbox",
        name: f.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: l(o),
        required: f.required,
        value: f.value,
        checked: !!l(r),
        "data-state": l(r) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, e$)) : se("", !0)
    ], 64));
  }
}), o$ = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = t$();
    return j(), (n, a) => {
      var o;
      return g(), w(l(W), {
        "data-state": (o = l(t).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Pd, r$] = ge("TabsRoot"), s$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { orientation: o, dir: r } = me(n), s = nn(r);
    j();
    const i = De(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = M();
    return r$({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: o,
      dir: s,
      activationMode: n.activationMode,
      baseId: He(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (g(), w(l(W), {
      dir: l(s),
      "data-orientation": l(o),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        x(d.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), i$ = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = me(t), { forwardRef: a, currentElement: o } = j(), r = Pd();
    return r.tabsList = o, (s, i) => (g(), w(l(Rv), {
      "as-child": "",
      orientation: l(r).orientation.value,
      dir: l(r).dir.value,
      loop: l(n)
    }, {
      default: y(() => [
        O(l(W), {
          ref: l(a),
          role: "tablist",
          "as-child": s.asChild,
          as: s.as,
          "aria-orientation": l(r).orientation.value
        }, {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function am(e, t) {
  return `${e}-trigger-${t}`;
}
function om(e, t) {
  return `${e}-content-${t}`;
}
const l$ = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), a = Pd(), o = S(() => am(a.baseId, t.value)), r = S(() => om(a.baseId, t.value)), s = S(() => t.value === a.modelValue.value), i = M(s.value);
    return ue(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (g(), w(l(mt), {
      present: s.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        O(l(W), {
          id: r.value,
          ref: l(n),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": s.value ? "active" : "inactive",
          "data-orientation": l(a).orientation.value,
          "aria-labelledby": o.value,
          hidden: !c.value,
          tabindex: "0",
          style: Qt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || s.value ? x(u.$slots, "default", { key: 0 }) : se("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), u$ = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), a = Pd(), o = S(() => am(a.baseId, t.value)), r = S(() => om(a.baseId, t.value)), s = S(() => t.value === a.modelValue.value);
    return (i, u) => (g(), w(l(jw), {
      "as-child": "",
      focusable: !i.disabled,
      active: s.value
    }, {
      default: y(() => [
        O(l(W), {
          id: o.value,
          ref: l(n),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": s.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": s.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": l(a).orientation.value,
          onMousedown: u[0] || (u[0] = Pe((d) => {
            !i.disabled && d.ctrlKey === !1 ? l(a).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = qe((d) => l(a).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = l(a).activationMode !== "manual";
            !s.value && !i.disabled && d && l(a).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [Ci, d$] = ge("ToastProvider"), c$ = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: a, swipeDirection: o, swipeThreshold: r } = me(t), s = M(), i = M(0), u = M(!1), d = M(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return d$({
      label: n,
      duration: a,
      swipeDirection: o,
      swipeThreshold: r,
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
    }), (c, f) => x(c.$slots, "default");
  }
}), f$ = "toast.swipeStart", p$ = "toast.swipeMove", h$ = "toast.swipeCancel", v$ = "toast.swipeEnd", Gl = "toast.viewportPause", Xl = "toast.viewportResume";
function Fr(e, t, n) {
  const a = n.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function yf(e, t, n = 0) {
  const a = Math.abs(e.x), o = Math.abs(e.y), r = a > o;
  return t === "left" || t === "right" ? r && a > n : !r && o > n;
}
function m$(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function rm(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), m$(n)) {
      const a = n.ariaHidden || n.hidden || n.style.display === "none", o = n.dataset.radixToastAnnounceExclude === "";
      if (!a)
        if (o) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...rm(n));
    }
  }), t;
}
const g$ = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Ci(), n = T_(1e3), a = M(!1);
    return dv(() => {
      a.value = !0;
    }), (o, r) => l(n) || a.value ? (g(), w(l(_r), { key: 0 }, {
      default: y(() => [
        ae(de(l(t).label.value) + " ", 1),
        x(o.$slots, "default")
      ]),
      _: 3
    })) : se("", !0);
  }
}), [y$, b$] = ge("ToastRoot"), _$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: o, currentElement: r } = j(), s = Ci(), i = M(null), u = M(null), d = S(
      () => typeof n.duration == "number" ? n.duration : s.duration.value
    ), c = M(0), f = M(d.value), p = M(0), h = M(d.value), v = dv(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - c.value;
      h.value = Math.max(f.value - k, 0);
    }, { fpsLimit: 60 });
    function m(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || tn && (window.clearTimeout(p.value), c.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(b, k));
    }
    function b() {
      var k, C;
      (k = r.value) != null && k.contains(We()) && ((C = s.viewport.value) == null || C.focus()), s.isClosePausedRef.value = !1, a("close");
    }
    const $ = S(() => r.value ? rm(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return xe((k) => {
      const C = s.viewport.value;
      if (C) {
        const E = () => {
          m(f.value), v.resume(), a("resume");
        }, T = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
          f.value = f.value - D, window.clearTimeout(p.value), v.pause(), a("pause");
        };
        return C.addEventListener(Gl, T), C.addEventListener(Xl, E), () => {
          C.removeEventListener(Gl, T), C.removeEventListener(Xl, E);
        };
      }
    }), te(() => [n.open, d.value], () => {
      f.value = d.value, n.open && !s.isClosePausedRef.value && m(d.value);
    }, { immediate: !0 }), pd("Escape", (k) => {
      a("escapeKeyDown", k), k.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), ue(() => {
      s.onToastAdd();
    }), Ke(() => {
      s.onToastRemove();
    }), b$({ onClose: b }), (k, C) => (g(), L(le, null, [
      $.value ? (g(), w(g$, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          ae(de($.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : se("", !0),
      l(s).viewport.value ? (g(), w(pa, {
        key: 1,
        to: l(s).viewport.value
      }, [
        O(l(W), B({
          ref: l(o),
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
          onPointerdown: C[0] || (C[0] = Pe((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: C[1] || (C[1] = (E) => {
            if (!i.value) return;
            const T = E.clientX - i.value.x, D = E.clientY - i.value.y, A = !!u.value, N = ["left", "right"].includes(l(s).swipeDirection.value), R = ["left", "up"].includes(l(s).swipeDirection.value) ? Math.min : Math.max, P = N ? R(0, T) : 0, I = N ? 0 : R(0, D), V = E.pointerType === "touch" ? 10 : 2, Y = { x: P, y: I }, z = { originalEvent: E, delta: Y };
            A ? (u.value = Y, l(Fr)(l(p$), (H) => a("swipeMove", H), z)) : l(yf)(Y, l(s).swipeDirection.value, V) ? (u.value = Y, l(Fr)(l(f$), (H) => a("swipeStart", H), z), E.target.setPointerCapture(E.pointerId)) : (Math.abs(T) > V || Math.abs(D) > V) && (i.value = null);
          }),
          onPointerup: C[2] || (C[2] = (E) => {
            const T = u.value, D = E.target;
            if (D.hasPointerCapture(E.pointerId) && D.releasePointerCapture(E.pointerId), u.value = null, i.value = null, T) {
              const A = E.currentTarget, N = { originalEvent: E, delta: T };
              l(yf)(T, l(s).swipeDirection.value, l(s).swipeThreshold.value) ? l(Fr)(l(v$), (R) => a("swipeEnd", R), N) : l(Fr)(l(h$), (R) => a("swipeCancel", R), N), A == null || A.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            x(k.$slots, "default", {
              remaining: h.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : se("", !0)
    ], 64));
  }
}), w$ = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: o } = j(), r = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, i) => (g(), w(l(mt), {
      present: s.forceMount || l(r)
    }, {
      default: y(() => [
        O(_$, B({
          ref: l(o),
          open: l(r),
          type: s.type,
          as: s.as,
          "as-child": s.asChild,
          duration: s.duration
        }, s.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = !1),
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
            f.setAttribute("data-swipe", "end"), f.style.removeProperty("--radix-toast-swipe-move-x"), f.style.removeProperty("--radix-toast-swipe-move-y"), f.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), f.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), r.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: d }) => [
            x(s.$slots, "default", {
              remaining: u,
              duration: d,
              open: l(r)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), sm = /* @__PURE__ */ _({
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), im = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = y$(), { forwardRef: a } = j();
    return (o, r) => (g(), w(sm, { "as-child": "" }, {
      default: y(() => [
        O(l(W), B(t, {
          ref: l(a),
          type: o.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (s) => l(n).onClose())
        }), {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), x$ = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = j();
    return (n, a) => n.altText ? (g(), w(sm, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        O(im, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : se("", !0);
  }
}), bf = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, a = Ci();
    return (o, r) => (g(), w(l(_r), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (s) => {
        var i;
        const u = s.relatedTarget;
        !((i = l(a).viewport.value) != null && i.contains(u)) && n("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), C$ = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: a } = me(t), { forwardRef: o, currentElement: r } = j(), { createCollection: s } = co(), i = s(r), u = Ci(), d = S(() => u.toastCount.value > 0), c = M(), f = M(), p = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    pd(n.value, () => {
      r.value.focus();
    }), ue(() => {
      u.onViewportChange(r.value);
    }), xe((v) => {
      const m = r.value;
      if (d.value && m) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const T = new CustomEvent(Gl);
            m.dispatchEvent(T), u.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (u.isClosePausedRef.value) {
            const T = new CustomEvent(Xl);
            m.dispatchEvent(T), u.isClosePausedRef.value = !1;
          }
        }, k = (T) => {
          !m.contains(T.relatedTarget) && $();
        }, C = () => {
          m.contains(We()) || $();
        }, E = (T) => {
          var D, A, N;
          const R = T.altKey || T.ctrlKey || T.metaKey;
          if (T.key === "Tab" && !R) {
            const P = We(), I = T.shiftKey;
            if (T.target === m && I) {
              (D = c.value) == null || D.focus();
              return;
            }
            const V = h({ tabbingDirection: I ? "backwards" : "forwards" }), Y = V.findIndex((z) => z === P);
            as(V.slice(Y + 1)) ? T.preventDefault() : I ? (A = c.value) == null || A.focus() : (N = f.value) == null || N.focus();
          }
        };
        m.addEventListener("focusin", b), m.addEventListener("focusout", k), m.addEventListener("pointermove", b), m.addEventListener("pointerleave", C), m.addEventListener("keydown", E), window.addEventListener("blur", b), window.addEventListener("focus", $), v(() => {
          m.removeEventListener("focusin", b), m.removeEventListener("focusout", k), m.removeEventListener("pointermove", b), m.removeEventListener("pointerleave", C), m.removeEventListener("keydown", E), window.removeEventListener("blur", b), window.removeEventListener("focus", $);
        });
      }
    });
    function h({ tabbingDirection: v }) {
      const m = i.value.map((b) => {
        const $ = [b, ..._d(b)];
        return v === "forwards" ? $ : $.reverse();
      });
      return (v === "forwards" ? m.reverse() : m).flat();
    }
    return (v, m) => (g(), w(l(x1), {
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
        d.value ? (g(), w(bf, {
          key: 0,
          ref: (b) => {
            c.value = l(Ct)(b);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const b = h({
              tabbingDirection: "forwards"
            });
            l(as)(b);
          })
        }, null, 512)) : se("", !0),
        O(l(W), B({
          ref: l(o),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: y(() => [
            x(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (g(), w(bf, {
          key: 1,
          ref: (b) => {
            f.value = l(Ct)(b);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const b = h({
              tabbingDirection: "backwards"
            });
            l(as)(b);
          })
        }, null, 512)) : se("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), $$ = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k$ = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = "tooltip.open", [Id, S$] = ge("TooltipProvider"), um = /* @__PURE__ */ _({
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
    const t = e, { delayDuration: n, skipDelayDuration: a, disableHoverableContent: o, disableClosingTrigger: r, ignoreNonKeyboardFocus: s, disabled: i } = me(t);
    j();
    const u = M(!0), d = M(!1), { start: c, stop: f } = fd(() => {
      u.value = !0;
    }, a, { immediate: !1 });
    return S$({
      isOpenDelayed: u,
      delayDuration: n,
      onOpen() {
        f(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: o,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: s
    }), (p, h) => x(p.$slots, "default");
  }
}), [$i, T$] = ge("TooltipRoot"), E$ = /* @__PURE__ */ _({
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
    j();
    const o = Id(), r = S(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = S(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = S(() => n.disabled ?? o.disabled.value), u = S(() => n.delayDuration ?? o.delayDuration.value), d = S(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = De(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(c, (C) => {
      o.onClose && (C ? (o.onOpen(), document.dispatchEvent(new CustomEvent(lm))) : o.onClose());
    });
    const f = M(!1), p = M(), h = S(() => c.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: m } = fd(() => {
      f.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      m(), f.value = !1, c.value = !0;
    }
    function $() {
      m(), c.value = !1;
    }
    function k() {
      v();
    }
    return T$({
      contentId: "",
      open: c,
      stateAttribute: h,
      trigger: p,
      onTriggerChange(C) {
        p.value = C;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? k() : b();
      },
      onTriggerLeave() {
        r.value ? $() : m();
      },
      onOpen: b,
      onClose: $,
      disableHoverableContent: r,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (C, E) => (g(), w(l(vo), null, {
      default: y(() => [
        x(C.$slots, "default", { open: l(c) })
      ]),
      _: 3
    }));
  }
}), A$ = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $i(), a = Id();
    n.contentId || (n.contentId = He(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = j(), s = M(!1), i = M(!1), u = S(() => n.disabled.value ? {} : {
      click: m,
      focus: h,
      pointermove: f,
      pointerleave: p,
      pointerdown: c,
      blur: v
    });
    ue(() => {
      n.onTriggerChange(r.value);
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
      var $, k;
      s.value || n.ignoreNonKeyboardFocus.value && !((k = ($ = b.target).matches) != null && k.call($, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function m() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, $) => (g(), w(l(_i), { "as-child": "" }, {
      default: y(() => [
        O(l(W), B({
          ref: l(o),
          "aria-describedby": l(n).open.value ? l(n).contentId : void 0,
          "data-state": l(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, r0(u.value)), {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), dm = /* @__PURE__ */ _({
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
    const n = e, a = t, o = $i(), { forwardRef: r } = j(), s = fh(), i = S(() => {
      var c;
      return (c = s.default) == null ? void 0 : c.call(s);
    }), u = S(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let f = "";
      function p(h) {
        typeof h.children == "string" && h.type !== zu ? f += h.children : Array.isArray(h.children) && h.children.forEach((v) => p(v));
      }
      return (c = i.value) == null || c.forEach((h) => p(h)), f;
    }), d = S(() => {
      const { ariaLabel: c, ...f } = n;
      return f;
    });
    return ue(() => {
      Ja(window, "scroll", (c) => {
        const f = c.target;
        f != null && f.contains(o.trigger.value) && o.onClose();
      }), Ja(window, lm, o.onClose);
    }), (c, f) => (g(), w(l(po), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => a("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var h;
        l(o).disableClosingTrigger.value && (h = l(o).trigger.value) != null && h.contains(p.target) && p.preventDefault(), a("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = Pe(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => l(o).onClose())
    }, {
      default: y(() => [
        O(l(Za), B({
          ref: l(r),
          "data-state": l(o).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            x(c.$slots, "default"),
            O(l(_r), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                ae(de(u.value), 1)
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
}), D$ = /* @__PURE__ */ _({
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
    const t = ye(e), { forwardRef: n, currentElement: a } = j(), { trigger: o, onClose: r } = $i(), s = Id(), { isPointerInTransit: i, onPointerExit: u } = L_(o, a);
    return s.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (g(), w(dm, B({ ref: l(n) }, l(t)), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M$ = /* @__PURE__ */ _({
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
    const n = e, a = t, o = $i(), r = pe(n, a), { forwardRef: s } = j();
    return (i, u) => (g(), w(l(mt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        (g(), w(it(l(o).disableHoverableContent.value ? dm : D$), B({ ref: l(s) }, l(r)), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), B$ = /* @__PURE__ */ _({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(yr), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), b5 = /* @__PURE__ */ _({
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
    const o = pe(e, t);
    return (r, s) => (g(), w(l(c1), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function cm(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = cm(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function fm() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = cm(e)) && (a && (a += " "), a += t);
  return a;
}
const Rd = "-", O$ = (e) => {
  const t = I$(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Rd);
      return i[0] === "" && i.length !== 1 && i.shift(), pm(i, t) || P$(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const u = n[s] || [];
      return i && a[s] ? [...u, ...a[s]] : u;
    }
  };
}, pm = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), o = a ? pm(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const r = e.join(Rd);
  return (s = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : s.classGroupId;
}, _f = /^\[(.+)\]$/, P$ = (e) => {
  if (_f.test(e)) {
    const t = _f.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, I$ = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return F$(Object.entries(e.classGroups), n).forEach(([r, s]) => {
    Jl(s, a, r, t);
  }), a;
}, Jl = (e, t, n, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? t : wf(t, o);
      r.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (R$(o)) {
        Jl(o(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([r, s]) => {
      Jl(s, wf(t, r), n, a);
    });
  });
}, wf = (e, t) => {
  let n = e;
  return t.split(Rd).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, R$ = (e) => e.isThemeGetter, F$ = (e, t) => t ? e.map(([n, a]) => {
  const o = a.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([s, i]) => [t + s, i])) : r);
  return [n, o];
}) : e, V$ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (r, s) => {
    n.set(r, s), t++, t > e && (t = 0, a = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let s = n.get(r);
      if (s !== void 0)
        return s;
      if ((s = a.get(r)) !== void 0)
        return o(r, s), s;
    },
    set(r, s) {
      n.has(r) ? n.set(r, s) : o(r, s);
    }
  };
}, hm = "!", N$ = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, a = t.length === 1, o = t[0], r = t.length, s = (i) => {
    const u = [];
    let d = 0, c = 0, f;
    for (let b = 0; b < i.length; b++) {
      let $ = i[b];
      if (d === 0) {
        if ($ === o && (a || i.slice(b, b + r) === t)) {
          u.push(i.slice(c, b)), c = b + r;
          continue;
        }
        if ($ === "/") {
          f = b;
          continue;
        }
      }
      $ === "[" ? d++ : $ === "]" && d--;
    }
    const p = u.length === 0 ? i : i.substring(c), h = p.startsWith(hm), v = h ? p.substring(1) : p, m = f && f > c ? f - c : void 0;
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
}, L$ = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, z$ = (e) => ({
  cache: V$(e.cacheSize),
  parseClassName: N$(e),
  ...O$(e)
}), H$ = /\s+/, U$ = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, r = [], s = e.trim().split(H$);
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
    const b = L$(c).join(":"), $ = f ? b + hm : b, k = $ + m;
    if (r.includes(k))
      continue;
    r.push(k);
    const C = o(m, v);
    for (let E = 0; E < C.length; ++E) {
      const T = C[E];
      r.push($ + T);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function W$() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = vm(t)) && (a && (a += " "), a += n);
  return a;
}
const vm = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = vm(e[a])) && (n && (n += " "), n += t);
  return n;
};
function K$(e, ...t) {
  let n, a, o, r = s;
  function s(u) {
    const d = t.reduce((c, f) => f(c), e());
    return n = z$(d), a = n.cache.get, o = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = a(u);
    if (d)
      return d;
    const c = U$(u, n);
    return o(u, c), c;
  }
  return function() {
    return r(W$.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, mm = /^\[(?:([a-z-]+):)?(.+)\]$/i, j$ = /^\d+\/\d+$/, Y$ = /* @__PURE__ */ new Set(["px", "full", "screen"]), q$ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, G$ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, X$ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, J$ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Z$ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rn = (e) => Na(e) || Y$.has(e) || j$.test(e), Mn = (e) => _o(e, "length", s2), Na = (e) => !!e && !Number.isNaN(Number(e)), fl = (e) => _o(e, "number", Na), So = (e) => !!e && Number.isInteger(Number(e)), Q$ = (e) => e.endsWith("%") && Na(e.slice(0, -1)), ve = (e) => mm.test(e), Bn = (e) => q$.test(e), e2 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), t2 = (e) => _o(e, e2, gm), n2 = (e) => _o(e, "position", gm), a2 = /* @__PURE__ */ new Set(["image", "url"]), o2 = (e) => _o(e, a2, l2), r2 = (e) => _o(e, "", i2), To = () => !0, _o = (e, t, n) => {
  const a = mm.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, s2 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  G$.test(e) && !X$.test(e)
), gm = () => !1, i2 = (e) => J$.test(e), l2 = (e) => Z$.test(e), u2 = () => {
  const e = Be("colors"), t = Be("spacing"), n = Be("blur"), a = Be("brightness"), o = Be("borderColor"), r = Be("borderRadius"), s = Be("borderSpacing"), i = Be("borderWidth"), u = Be("contrast"), d = Be("grayscale"), c = Be("hueRotate"), f = Be("invert"), p = Be("gap"), h = Be("gradientColorStops"), v = Be("gradientColorStopPositions"), m = Be("inset"), b = Be("margin"), $ = Be("opacity"), k = Be("padding"), C = Be("saturate"), E = Be("scale"), T = Be("sepia"), D = Be("skew"), A = Be("space"), N = Be("translate"), R = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", ve, t], V = () => [ve, t], Y = () => ["", rn, Mn], z = () => ["auto", Na, ve], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", ve], ce = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], he = () => [Na, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [To],
      spacing: [rn, Mn],
      blur: ["none", "", Bn, ve],
      brightness: he(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Bn, ve],
      borderSpacing: V(),
      borderWidth: Y(),
      contrast: he(),
      grayscale: G(),
      hueRotate: he(),
      invert: G(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Q$, Mn],
      inset: I(),
      margin: I(),
      opacity: he(),
      padding: V(),
      saturate: he(),
      scale: he(),
      sepia: G(),
      skew: he(),
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
        columns: [Bn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ce()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ce()
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
        object: [...H(), ve]
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
        z: ["auto", So, ve]
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
        order: ["first", "last", "none", So, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [To]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", So, ve]
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
        "grid-rows": [To]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [So, ve]
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
        justify: ["normal", ...be()]
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
        content: ["normal", ...be(), "baseline"]
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
        "place-content": [...be(), "baseline"]
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
          screen: [Bn]
        }, Bn]
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
        text: ["base", Bn, Mn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", fl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [To]
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
        "line-clamp": ["none", Na, fl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rn, ve]
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", rn, Mn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", rn, ve]
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
        indent: V()
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
        bg: [...H(), n2]
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
        bg: ["auto", "cover", "contain", t2]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, o2]
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
        "divide-opacity": [$]
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
        "outline-offset": [rn, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [rn, Mn]
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
        "ring-offset": [rn, Mn]
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
        shadow: ["", "inner", "none", Bn, r2]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [To]
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
        "drop-shadow": ["", "none", Bn, ve]
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
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
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
        "backdrop-opacity": [$]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
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
        duration: he()
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
        delay: he()
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
        rotate: [So, ve]
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
        stroke: [rn, Mn, fl]
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
}, d2 = /* @__PURE__ */ K$(u2);
function F(...e) {
  return d2(fm(e));
}
const _5 = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(h1), B(n.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: y(() => [
        _e("div", {
          class: X(l(F)("pb-4 pt-0", t.class))
        }, [
          x(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), w5 = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(p1), B(l(a), {
      class: l(F)("border-accordion-border border-b", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
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
const c2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vr = {
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
const f2 = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: a, iconNode: o, name: r, class: s, ...i }, { slots: u }) => tt(
  "svg",
  {
    ...Vr,
    width: e || Vr.width,
    height: e || Vr.height,
    stroke: a || Vr.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${c2(r ?? "icon")}`],
    ...i
  },
  [...o.map((d) => tt(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = (e, t) => (n, { slots: a }) => tt(
  f2,
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
const p2 = Ge("CalendarIcon", [
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
const Fd = Ge("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ki = Ge("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h2 = Ge("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vd = Ge("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = Ge("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = Ge("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = Ge("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = Ge("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = Ge("EllipsisIcon", [
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
const b2 = Ge("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _2 = Ge("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = Ge("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = Ge("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = Ge("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $2 = Ge("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k2 = Ge("SunIcon", [
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
const Si = Ge("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), x5 = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(v1), { class: "flex" }, {
      default: y(() => [
        O(l(m1), B(n.value, {
          class: l(F)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            x(a.$slots, "default"),
            x(a.$slots, "icon", {}, () => [
              O(l(ki), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), xf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Cf = fm, kn = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return Cf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: r } = t, s = Object.keys(o).map((d) => {
    const c = n == null ? void 0 : n[d], f = r == null ? void 0 : r[d];
    if (c === null) return null;
    const p = xf(c) || xf(f);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [f, p] = c;
    return p === void 0 || (d[f] = p), d;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((d, c) => {
    let { class: f, className: p, ...h } = c;
    return Object.entries(h).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...r,
        ...i
      }[m]) : {
        ...r,
        ...i
      }[m] === b;
    }) ? [
      ...d,
      f,
      p
    ] : d;
  }, []);
  return Cf(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, C5 = /* @__PURE__ */ _({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert",
      class: X(l(F)(l(S2)({ variant: n.variant }), t.class)),
      role: "alert"
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), $5 = /* @__PURE__ */ _({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert-description",
      class: X(l(F)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), k5 = /* @__PURE__ */ _({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert-title",
      class: X(l(F)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), S2 = kn(
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
function Nd(e) {
  return e ? e.flatMap((t) => t.type === le ? Nd(t.children) : [t]) : [];
}
const Zl = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default)
        return null;
      const a = Nd(n.default()), o = a.findIndex((d) => d.type !== zu);
      if (o === -1)
        return a;
      const r = a[o];
      (u = r.props) == null || delete u.ref;
      const s = r.props ? B(t, r.props) : t, i = vh({ ...r, props: {} }, s);
      return a.length === 1 ? i : (a[o] = i, a);
    };
  }
}), T2 = ["area", "img", "input"], Te = _({
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
    return typeof a == "string" && T2.includes(a) ? () => tt(a, t) : a !== "template" ? () => tt(e.as, t, { default: n.default }) : () => tt(Zl, t, { default: n.default });
  }
}), bm = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (g(), w(l(Te), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
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
      default: y(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function E2(e, t) {
  var n;
  const a = vn();
  return xe(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), lo(a);
}
function Cr(e) {
  return ii() ? (li(e), !0) : !1;
}
function os() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const s = () => t(r);
      return Cr(s), {
        off: s
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((s) => s(...r))),
    clear: () => {
      e.clear();
    }
  };
}
function A2(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, a || (a = Ku(!0), n = a.run(() => e(...r))), Cr(o), n);
}
function D2(e) {
  if (!lt(e))
    return Ln(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return l(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return lt(e.value[a]) && !lt(o) ? e.value[a].value = o : e.value[a] = o, !0;
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
  return Ln(t);
}
function M2(e) {
  return D2(S(e));
}
function B2(e, ...t) {
  const n = t.flat(), a = n[0];
  return M2(() => Object.fromEntries(typeof a == "function" ? Object.entries(me(e)).filter(([o, r]) => !a(Me(r), o)) : Object.entries(me(e)).filter((o) => !n.includes(o[0]))));
}
const Jt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const O2 = (e) => typeof e < "u", P2 = Object.prototype.toString, I2 = (e) => P2.call(e) === "[object Object]", $f = () => {
}, kf = /* @__PURE__ */ R2();
function R2() {
  var e, t;
  return Jt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function F2(e, t) {
  function n(...a) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(r);
    });
  }
  return n;
}
function V2(e, t = {}) {
  let n, a, o = $f;
  const r = (u) => {
    clearTimeout(u), o(), o = $f;
  };
  let s;
  return (u) => {
    const d = Me(e), c = Me(t.maxWait);
    return n && r(n), d <= 0 || c !== void 0 && c <= 0 ? (a && (r(a), a = null), Promise.resolve(u())) : new Promise((f, p) => {
      o = t.rejectOnCancel ? p : f, s = u, c && !a && (a = setTimeout(() => {
        n && r(n), a = null, f(s());
      }, c)), n = setTimeout(() => {
        a && r(a), a = null, f(u());
      }, d);
    });
  };
}
function N2(e) {
  return Ue();
}
function pl(e) {
  return Array.isArray(e) ? e : [e];
}
function Ti(e, t = 1e4) {
  return Hu((n, a) => {
    let o = Me(e), r;
    const s = () => setTimeout(() => {
      o = Me(e), a();
    }, Me(t));
    return Cr(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, a(), clearTimeout(r), r = s();
      }
    };
  });
}
function L2(e, t = 200, n = {}) {
  return F2(
    V2(t, n),
    e
  );
}
const z2 = Me;
function H2(e, t) {
  N2() && ui(e, t);
}
function U2(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ei = Jt ? window : void 0;
function Zt(e) {
  var t;
  const n = Me(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function _m(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = S(() => {
    const i = pl(Me(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = U2(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => Zt(d))) != null ? u : [Ei].filter((d) => d != null),
        pl(Me(o.value ? e[1] : e[0])),
        pl(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Me(o.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const f = I2(c) ? { ...c } : c;
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
    r(), n();
  };
  return Cr(n), s;
}
function wm() {
  const e = vn(!1), t = Ue();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function W2(e) {
  const t = wm();
  return S(() => (t.value, !!e()));
}
function K2(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function j2(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ei,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = K2(t);
  return _m(o, r, (c) => {
    c.repeat && Me(i) || u(c) && n(c);
  }, s);
}
function Y2(e) {
  return JSON.parse(JSON.stringify(e));
}
function Os(e, t, n = {}) {
  const { window: a = Ei, ...o } = n;
  let r;
  const s = W2(() => a && "ResizeObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const f = Me(e);
    return Array.isArray(f) ? f.map((p) => Zt(p)) : [Zt(f)];
  }), d = te(
    u,
    (f) => {
      if (i(), s.value && a) {
        r = new ResizeObserver(t);
        for (const p of f)
          p && r.observe(p, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return Cr(c), {
    isSupported: s,
    stop: c
  };
}
function Qa(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = Ue(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => i ? typeof i == "function" ? i(C) : Y2(C) : C, $ = () => O2(e[t]) ? b(e[t]) : f, k = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = $(), E = M(C);
    let T = !1;
    return te(
      () => e[t],
      (D) => {
        T || (T = !0, E.value = b(D), re(() => T = !1));
      }
    ), te(
      E,
      (D) => {
        !T && (D !== e[t] || c) && k(D);
      },
      { deep: c }
    ), E;
  } else
    return S({
      get() {
        return $();
      },
      set(C) {
        k(C);
      }
    });
}
function $t(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(s) => {
    const i = Kn(a, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (Dt(a, s), s)];
}
function Sf(e) {
  return typeof e == "string" ? `'${e}'` : new q2().serialize(e);
}
const q2 = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      Ic(this, t, /* @__PURE__ */ new Map());
    }
    compare(a, o) {
      const r = typeof a, s = typeof o;
      return r === "string" && s === "string" ? a.localeCompare(o) : r === "number" && s === "number" ? a - o : String.prototype.localeCompare.call(this.serialize(a, !0), this.serialize(o, !0));
    }
    serialize(a, o) {
      if (a === null) return "null";
      switch (typeof a) {
        case "string":
          return o ? a : `'${a}'`;
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
      const o = Object.prototype.toString.call(a);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), a);
      const r = a.constructor, s = r === Object || r === void 0 ? "" : r.name;
      if (s !== "" && globalThis[s] === r) return this.serializeBuiltInType(s, a);
      if (typeof a.toJSON == "function") {
        const i = a.toJSON();
        return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(s, Object.entries(a));
    }
    serializeBuiltInType(a, o) {
      const r = this["$" + a];
      if (r) return r.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(a, o.entries());
      throw new Error(`Cannot serialize ${a}`);
    }
    serializeObjectEntries(a, o) {
      const r = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let s = `${a}{`;
      for (let i = 0; i < r.length; i++) {
        const [u, d] = r[i];
        s += `${this.serialize(u, !0)}:${this.serialize(d)}`, i < r.length - 1 && (s += ",");
      }
      return s + "}";
    }
    $object(a) {
      let o = $o(this, t).get(a);
      return o === void 0 && ($o(this, t).set(a, `#${$o(this, t).size}`), o = this.serializeObject(a), $o(this, t).set(a, o)), o;
    }
    $function(a) {
      const o = Function.prototype.toString.call(a);
      return o.slice(-15) === "[native code] }" ? `${a.name || ""}()[native]` : `${a.name}(${a.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(a) {
      let o = "[";
      for (let r = 0; r < a.length; r++) o += this.serialize(a[r]), r < a.length - 1 && (o += ",");
      return o + "]";
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
      return `Set${this.$Array(Array.from(a).sort((o, r) => this.compare(o, r)))}`;
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
function Ql(e, t) {
  return e === t || Sf(e) === Sf(t);
}
const [Ai, S5] = $t("ConfigProvider");
function Ld(e) {
  const t = Ai({
    dir: M("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Oe() {
  const e = Ue(), t = M(), n = S(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Zt(t);
  }), a = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(a).length > 0)
    for (const s in a)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => a[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function r(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = o);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
const G2 = ["INPUT", "TEXTAREA"];
function xm(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && G2.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-reka-collection-item]",
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
  ], $ = h || v, k = f || p;
  if (!m && !b && (!$ && !k || o === "vertical" && k || o === "horizontal" && $))
    return null;
  const C = s;
  if (!C.length)
    return null;
  d && e.preventDefault();
  let E = null;
  return k || $ ? E = Cm(C, t, {
    goForward: $ ? v : u === "ltr" ? f : p,
    loop: i
  }) : m ? E = C.at(0) || null : b && (E = C.at(-1) || null), c && (E == null || E.focus()), E;
}
function Cm(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const s = (r + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Cm(
    e,
    i,
    n,
    a
  ) : i : null;
}
let X2 = 0;
function jn(e, t = "reka") {
  var a;
  if (e)
    return e;
  const n = Ai({ useId: void 0 });
  return Object.hasOwn(Oa, "useId") ? `${t}-${(a = Oa.useId) == null ? void 0 : a.call(Oa)}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++X2}`;
}
function J2(e, t) {
  const n = M(e);
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
function Z2(e, t) {
  var b;
  const n = M({}), a = M("none"), o = M(e), r = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Ei, { state: u, dispatch: d } = J2(r, {
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
  }), c = ($) => {
    var k;
    if (Jt) {
      const C = new CustomEvent($, { bubbles: !1, cancelable: !1 });
      (k = t.value) == null || k.dispatchEvent(C);
    }
  };
  te(
    e,
    async ($, k) => {
      var E;
      const C = k !== $;
      if (await re(), C) {
        const T = a.value, D = Nr(t.value);
        $ ? (d("MOUNT"), c("enter"), D === "none" && c("after-enter")) : D === "none" || D === "undefined" || ((E = n.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : k && T !== D ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = ($) => {
    const k = Nr(t.value), C = k.includes(
      $.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if ($.target === t.value && C && (c(`after-${E}`), d("ANIMATION_END"), !o.value)) {
      const T = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var D;
        ((D = t.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = T);
      });
    }
    $.target === t.value && k === "none" && d("ANIMATION_END");
  }, p = ($) => {
    $.target === t.value && (a.value = Nr(t.value));
  }, h = te(
    t,
    ($, k) => {
      $ ? (n.value = getComputedStyle($), $.addEventListener("animationstart", p), $.addEventListener("animationcancel", f), $.addEventListener("animationend", f)) : (d("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), k == null || k.removeEventListener("animationstart", p), k == null || k.removeEventListener("animationcancel", f), k == null || k.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), v = te(u, () => {
    const $ = Nr(t.value);
    a.value = u.value === "mounted" ? $ : "none";
  });
  return Ke(() => {
    h(), v();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Nr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Di = _({
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
    var d;
    const { present: a, forceMount: o } = me(e), r = M(), { isPresent: s } = Z2(a, r);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = Nd(i || []);
    const u = Ue();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
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
    return () => o.value || a.value || s.value ? tt(t.default({ present: s.value })[0], {
      ref: (c) => {
        const f = Zt(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? r.value = f.firstElementChild : r.value = f), f;
      }
    }) : null;
  }
});
function Q2(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[hh(Ka(o))] = (...r) => e(o, ...r);
  }), a;
}
function na() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function zd(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
const ek = "dismissableLayer.pointerDownOutside", tk = "dismissableLayer.focusOutside";
function $m(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (a === n || o.indexOf(a) < o.indexOf(n)));
}
function nk(e, t, n = !0) {
  var s;
  const a = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1), r = M(() => {
  });
  return xe((i) => {
    if (!Jt || !Me(n))
      return;
    const u = async (c) => {
      const f = c.target;
      if (!(!(t != null && t.value) || !f)) {
        if ($m(t.value, f)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            zd(
              ek,
              e,
              h
            );
          };
          const h = { originalEvent: c };
          c.pointerType === "touch" ? (a.removeEventListener("click", r.value), r.value = p, a.addEventListener("click", r.value, {
            once: !0
          })) : p();
        } else
          a.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      a.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(d), a.removeEventListener("pointerdown", u), a.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => {
      Me(n) && (o.value = !0);
    }
  };
}
function ak(e, t, n = !0) {
  var r;
  const a = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = M(!1);
  return xe((s) => {
    if (!Jt || !Me(n))
      return;
    const i = async (u) => {
      if (!(t != null && t.value))
        return;
      await re(), await re();
      const d = u.target;
      !t.value || !d || $m(t.value, d) || u.target && !o.value && zd(
        tk,
        e,
        { originalEvent: u }
      );
    };
    a.addEventListener("focusin", i), s(() => a.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Me(n) && (o.value = !0);
    },
    onBlurCapture: () => {
      Me(n) && (o.value = !1);
    }
  };
}
const sn = Ln({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), km = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = Oe(), s = S(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = S(() => sn.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => sn.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const v = Array.from(i.value), [m] = [...sn.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = nk(async (v) => {
      const m = [...sn.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await re(), v.defaultPrevented || a("dismiss"));
    }, r), p = ak((v) => {
      [...sn.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    j2("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return xe((v) => {
      r.value && (n.disableOutsidePointerEvents && (sn.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), sn.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && sn.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), xe((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), sn.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, m) => (g(), w(l(Te), {
      ref: l(o),
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
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var ok = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Da = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), zr = {}, hl = 0, Sm = function(e) {
  return e && (e.host || Sm(e.parentNode));
}, rk = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = Sm(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, sk = function(e, t, n, a) {
  var o = rk(t, Array.isArray(e) ? e : [e]);
  zr[n] || (zr[n] = /* @__PURE__ */ new WeakMap());
  var r = zr[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (Da.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          Da.set(p, m), r.set(p, b), s.push(p), m === 1 && v && Lr.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", p, $);
        }
    });
  };
  return c(t), i.clear(), hl++, function() {
    s.forEach(function(f) {
      var p = Da.get(f) - 1, h = r.get(f) - 1;
      Da.set(f, p), r.set(f, h), p || (Lr.has(f) || f.removeAttribute(a), Lr.delete(f)), h || f.removeAttribute(n);
    }), hl--, hl || (Da = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), zr = {});
  };
}, ik = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = ok(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live], script"))), sk(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function lk(e) {
  let t;
  te(() => Zt(e), (n) => {
    n ? t = ik(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
function vl(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function eu(e, t, n = ".", a) {
  if (!vl(t))
    return eu(e, {}, n, a);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (a && a(o, r, s, n) || (Array.isArray(s) && Array.isArray(o[r]) ? o[r] = [...s, ...o[r]] : vl(s) && vl(o[r]) ? o[r] = eu(
      s,
      o[r],
      (n ? `${n}.` : "") + r.toString(),
      a
    ) : o[r] = s));
  }
  return o;
}
function uk(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => eu(n, a, "", e), {})
  );
}
const dk = uk(), ck = A2(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), n = S(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), a = Ai({
    scrollBody: M(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", kf && (o == null || o()), t.value = void 0;
  };
  return te(n, (s, i) => {
    var f;
    if (!Jt)
      return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (f = a.scrollBody) != null && f.value ? typeof a.scrollBody.value == "object" ? dk({
      padding: a.scrollBody.value.padding === !0 ? u : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? u : a.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), kf && (o = _m(
      document,
      "touchmove",
      (p) => pk(p),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function fk(e) {
  const t = Math.random().toString(36).substring(2, 7), n = ck();
  n.value.set(t, e ?? !1);
  const a = S({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return H2(() => {
    n.value.delete(t);
  }), a;
}
function Tm(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Tm(n);
  }
}
function pk(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Tm(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const hk = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = wm();
    return (n, a) => l(t) || n.forceMount ? (g(), w(pa, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : se("", !0);
  }
});
function wa(e) {
  const t = Ue(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (o[r] = s), o;
  }, {}), a = Lu(e);
  return S(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      o[Ka(s)] = r[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function Sn(e, t) {
  const n = wa(e), a = t ? Q2(t) : {};
  return S(() => ({
    ...n.value,
    ...a
  }));
}
const [Em, vk] = $t("AvatarRoot"), mk = /* @__PURE__ */ _({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return Oe(), vk({
      imageLoadingStatus: M("idle")
    }), (t, n) => (g(), w(l(Te), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), gk = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Em();
    Oe();
    const a = M(t.delayMs === void 0);
    return xe((o) => {
      if (t.delayMs && Jt) {
        const r = window.setTimeout(() => {
          a.value = !0;
        }, t.delayMs);
        o(() => {
          window.clearTimeout(r);
        });
      }
    }), (o, r) => a.value && l(n).imageLoadingStatus.value !== "loaded" ? (g(), w(l(Te), {
      key: 0,
      "as-child": o.asChild,
      as: o.as
    }, {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : se("", !0);
  }
});
function Tf(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function yk(e, { referrerPolicy: t, crossOrigin: n } = {}) {
  const a = M(!1), o = M(null), r = S(() => a.value ? (!o.value && Jt && (o.value = new window.Image()), o.value) : null), s = M(Tf(r.value, e.value)), i = (u) => () => {
    a.value && (s.value = u);
  };
  return ue(() => {
    a.value = !0, xe((u) => {
      const d = r.value;
      if (!d)
        return;
      s.value = Tf(d, e.value);
      const c = i("loaded"), f = i("error");
      d.addEventListener("load", c), d.addEventListener("error", f), t != null && t.value && (d.referrerPolicy = t.value), typeof (n == null ? void 0 : n.value) == "string" && (d.crossOrigin = n.value), u(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", f);
      });
    });
  }), Ke(() => {
    a.value = !1;
  }), s;
}
const bk = /* @__PURE__ */ _({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, a = t, { src: o, referrerPolicy: r, crossOrigin: s } = me(n);
    Oe();
    const i = Em(), u = yk(o, { referrerPolicy: r, crossOrigin: s });
    return te(
      u,
      (d) => {
        a("loadingStatusChange", d), d !== "idle" && (i.imageLoadingStatus.value = d);
      },
      { immediate: !0 }
    ), (d, c) => ha((g(), w(l(Te), {
      role: "img",
      "as-child": d.asChild,
      as: d.as,
      src: l(o),
      "referrer-policy": l(r)
    }, {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [di, l(u) === "loaded"]
    ]);
  }
});
function Un() {
  const e = M(), t = S(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : Zt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function _k() {
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
function wk(e) {
  return S(() => {
    var t;
    return z2(e) ? !!((t = Zt(e)) != null && t.closest("form")) : !0;
  });
}
const Ef = "data-reka-collection-item";
function Yn(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, a = `${t}CollectionProvider`;
  let o;
  if (n) {
    const c = M(/* @__PURE__ */ new Map());
    o = {
      collectionRef: M(),
      itemMap: c
    }, Dt(a, o);
  } else
    o = Kn(a);
  const r = (c = !1) => {
    const f = o.collectionRef.value;
    if (!f)
      return [];
    const p = Array.from(f.querySelectorAll(`[${Ef}]`)), v = Array.from(o.itemMap.value.values()).sort(
      (m, b) => p.indexOf(m.ref) - p.indexOf(b.ref)
    );
    return c ? v : v.filter((m) => m.ref.dataset.disabled !== "");
  }, s = _({
    name: "CollectionSlot",
    setup(c, { slots: f }) {
      const { primitiveElement: p, currentElement: h } = Un();
      return te(h, () => {
        o.collectionRef.value = h.value;
      }), () => tt(Zl, { ref: p }, f);
    }
  }), i = _({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(c, { slots: f, attrs: p }) {
      const { primitiveElement: h, currentElement: v } = Un();
      return xe((m) => {
        if (v.value) {
          const b = mh(v.value);
          o.itemMap.value.set(b, { ref: v.value, value: c.value }), m(() => o.itemMap.value.delete(b));
        }
      }), () => tt(Zl, { ...p, [Ef]: "", ref: h }, f);
    }
  }), u = S(() => Array.from(o.itemMap.value.values())), d = S(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: s, CollectionItem: i };
}
const xk = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ck(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $k(e, t, n) {
  const a = Ck(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return xk[a];
}
const Af = /* @__PURE__ */ _({
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
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: a } = Un(), o = S(() => t.checked ?? t.value);
    return te(o, (r, s) => {
      if (!a.value)
        return;
      const i = a.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== s) {
        const f = new Event("input", { bubbles: !0 }), p = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(f), i.dispatchEvent(p);
      }
    }), (r, s) => (g(), w(bm, B({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), kk = /* @__PURE__ */ _({
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
  setup(e) {
    const t = e, n = S(
      () => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required
    ), a = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, r) => typeof o == "object" ? Object.entries(o).map(([s, i]) => ({ name: `[${t.name}][${r}][${s}]`, value: i })) : { name: `[${t.name}][${r}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, r]) => ({ name: `[${t.name}][${o}]`, value: r })) : []);
    return (o, r) => n.value ? (g(), w(Af, B({ key: o.name }, { ...t, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (g(!0), L(le, { key: 1 }, Ae(a.value, (s) => (g(), w(Af, B({
      key: s.name,
      ref_for: !0
    }, { ...t, ...o.$attrs }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Am, Sk] = $t("PopperRoot"), Tk = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return Sk({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => x(n.$slots, "default");
  }
}), Ek = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Oe(), o = Am();
    return Wu(() => {
      o.onAnchorChange(t.reference ?? a.value);
    }), (r, s) => (g(), w(l(Te), {
      ref: l(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ak = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const { forwardRef: t } = Oe();
    return (n, a) => (g(), w(l(Ek), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [
        O(l(Te), B({
          ref: l(t),
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: y(() => [
            x(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
});
function Dk(e) {
  return e !== null;
}
function Mk(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, $, k;
      const { placement: n, rects: a, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [d, c] = tu(n), f = { start: "0%", center: "50%", end: "100%" }[c], p = ((($ = o.arrow) == null ? void 0 : $.x) ?? 0) + i / 2, h = (((k = o.arrow) == null ? void 0 : k.y) ?? 0) + u / 2;
      let v = "", m = "";
      return d === "bottom" ? (v = s ? f : `${p}px`, m = `${-u}px`) : d === "top" ? (v = s ? f : `${p}px`, m = `${a.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, m = s ? f : `${h}px`) : d === "left" && (v = `${a.floating.width + u}px`, m = s ? f : `${h}px`), { data: { x: v, y: m } };
    }
  };
}
function tu(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function Bk(e) {
  const t = M(), n = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = Zt(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        t.value = { width: u, height: d };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: a
  };
}
const Ok = {
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
}, [T5, Pk] = $t("PopperContent"), Ik = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Uu({
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
    ...Ok
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Am(), { forwardRef: r, currentElement: s } = Oe(), i = M(), u = M(), { width: d, height: c } = Bk(u), f = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = S(() => ({
      padding: p.value,
      boundary: h.value.filter(Dk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = E2(() => [
      Jh({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && As({
        ...v.value
      }),
      n.avoidCollisions && Zh({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? tv() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && As({
        ...v.value
      }),
      Qh({
        ...v.value,
        apply: ({ elements: I, rects: V, availableWidth: Y, availableHeight: z }) => {
          const { width: H, height: ee } = V.reference, ie = I.floating.style;
          ie.setProperty(
            "--reka-popper-available-width",
            `${Y}px`
          ), ie.setProperty(
            "--reka-popper-available-height",
            `${z}px`
          ), ie.setProperty(
            "--reka-popper-anchor-width",
            `${H}px`
          ), ie.setProperty(
            "--reka-popper-anchor-height",
            `${ee}px`
          );
        }
      }),
      u.value && nv({ element: u.value, padding: n.arrowPadding }),
      Mk({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && ev({ strategy: "referenceHidden", ...v.value })
    ]), b = S(() => n.reference ?? o.anchor.value), { floatingStyles: $, placement: k, isPositioned: C, middlewareData: E } = ov(
      b,
      i,
      {
        strategy: n.positionStrategy,
        placement: f,
        whileElementsMounted: (...I) => Xh(...I, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), T = S(
      () => tu(k.value)[0]
    ), D = S(
      () => tu(k.value)[1]
    );
    Wu(() => {
      C.value && a("placed");
    });
    const A = S(
      () => {
        var I;
        return ((I = E.value.arrow) == null ? void 0 : I.centerOffset) !== 0;
      }
    ), N = M("");
    xe(() => {
      s.value && (N.value = window.getComputedStyle(s.value).zIndex);
    });
    const R = S(() => {
      var I;
      return ((I = E.value.arrow) == null ? void 0 : I.x) ?? 0;
    }), P = S(() => {
      var I;
      return ((I = E.value.arrow) == null ? void 0 : I.y) ?? 0;
    });
    return Pk({
      placedSide: T,
      onArrowChange: (I) => u.value = I,
      arrowX: R,
      arrowY: P,
      shouldHideArrow: A
    }), (I, V) => {
      var Y, z, H;
      return g(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: Qt({
          ...l($),
          transform: l(C) ? l($).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N.value,
          "--reka-popper-transform-origin": [
            (Y = l(E).transformOrigin) == null ? void 0 : Y.x,
            (z = l(E).transformOrigin) == null ? void 0 : z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = l(E).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        O(l(Te), B({ ref: l(r) }, I.$attrs, {
          "as-child": n.asChild,
          as: I.as,
          "data-side": T.value,
          "data-align": D.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(C) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            x(I.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Rk(e) {
  const t = S(() => l(e)), n = S(() => new Intl.Collator("en", { usage: "search", ...t.value }));
  return {
    startsWith: (s, i) => i.length === 0 ? !0 : (s = s.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(s.slice(0, i.length), i) === 0),
    endsWith: (s, i) => i.length === 0 ? !0 : (s = s.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(s.slice(-i.length), i) === 0),
    contains: (s, i) => {
      if (i.length === 0)
        return !0;
      s = s.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const d = i.length;
      for (; u + d <= s.length; u++) {
        const c = s.slice(u, u + d);
        if (n.value.compare(i, c) === 0)
          return !0;
      }
      return !1;
    }
  };
}
function Fk(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => Uo(a, t, n)) : Uo(e, t, n);
}
function Uo(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Ql(e, t);
}
function Vk(e) {
  const t = Ti("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, r) => {
      t.value = t.value + o;
      {
        const s = na(), i = r.map((p) => {
          var h, v;
          return {
            ...p,
            textValue: ((h = p.value) == null ? void 0 : h.textValue) ?? ((v = p.ref.textContent) == null ? void 0 : v.trim()) ?? ""
          };
        }), u = i.find((p) => p.ref === s), d = i.map((p) => p.textValue), c = Lk(d, t.value, u == null ? void 0 : u.textValue), f = i.find((p) => p.textValue === c);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Nk(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function Lk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let s = Nk(e, Math.max(r, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const u = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function zk(e, t, n) {
  const a = e.findIndex((i) => Ql(i, t)), o = e.findIndex((i) => Ql(i, n));
  if (a === -1 || o === -1)
    return [];
  const [r, s] = [a, o].sort((i, u) => i - u);
  return e.slice(r, s + 1);
}
const [Mi, Hk] = $t("ListboxRoot"), Uk = /* @__PURE__ */ _({
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
  setup(e, { expose: t, emit: n }) {
    const a = e, o = n, { multiple: r, highlightOnHover: s, orientation: i, disabled: u, selectionBehavior: d, dir: c } = me(a), { getItems: f } = Yn({ isProvider: !0 }), { handleTypeaheadSearch: p } = Vk(), { primitiveElement: h, currentElement: v } = Un(), m = _k(), b = Ld(c), $ = wk(v), k = M(), C = M(!1), E = M(!0), T = Qa(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (r.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    });
    function D(Q) {
      if (C.value = !0, a.multiple) {
        const oe = Array.isArray(T.value) ? [...T.value] : [], U = oe.findIndex((q) => Uo(q, Q, a.by));
        a.selectionBehavior === "toggle" ? (U === -1 ? oe.push(Q) : oe.splice(U, 1), T.value = oe) : (T.value = [Q], k.value = Q);
      } else
        a.selectionBehavior === "toggle" && Uo(T.value, Q, a.by) ? T.value = void 0 : T.value = Q;
      setTimeout(() => {
        C.value = !1;
      }, 1);
    }
    const A = M(null), N = M(null), R = M(!1), P = M(!1), I = os(), V = os(), Y = os();
    function z() {
      return f().map((Q) => Q.ref).filter((Q) => Q.dataset.disabled !== "");
    }
    function H(Q, oe = !0) {
      if (!Q)
        return;
      A.value = Q, E.value && A.value.focus(), oe && A.value.scrollIntoView({ block: "nearest" });
      const U = f().find((q) => q.ref === Q);
      o("highlight", U);
    }
    function ee(Q) {
      if (R.value)
        Y.trigger(Q);
      else {
        const oe = f().find((U) => Uo(U.value, Q, a.by));
        oe && (A.value = oe.ref, H(oe.ref));
      }
    }
    function ie(Q) {
      A.value && A.value.isConnected && (Q.preventDefault(), Q.stopPropagation(), P.value || A.value.click());
    }
    function be(Q) {
      if (E.value) {
        if (C.value = !0, R.value)
          V.trigger(Q);
        else {
          const oe = Q.altKey || Q.ctrlKey || Q.metaKey;
          if (oe && Q.key === "a" && r.value) {
            const U = f(), q = U.map((ne) => ne.value);
            T.value = [...q], Q.preventDefault(), H(U[U.length - 1].ref);
          } else if (!oe) {
            const U = p(Q.key, f());
            U && H(U);
          }
        }
        setTimeout(() => {
          C.value = !1;
        }, 1);
      }
    }
    function G() {
      P.value = !0;
    }
    function ce() {
      requestAnimationFrame(() => {
        P.value = !1;
      });
    }
    function he() {
      re(() => {
        const Q = new KeyboardEvent("keydown", { key: "PageUp" });
        dt(Q);
      });
    }
    function Je(Q) {
      const oe = A.value;
      oe != null && oe.isConnected && (N.value = oe), A.value = null, o("leave", Q);
    }
    function at(Q) {
      var U, q;
      const oe = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((U = Q.currentTarget) == null || U.dispatchEvent(oe), o("entryFocus", oe), !oe.defaultPrevented)
        if (N.value)
          H(N.value);
        else {
          const ne = (q = z()) == null ? void 0 : q[0];
          H(ne);
        }
    }
    function dt(Q) {
      const oe = $k(Q, i.value, b.value);
      if (!oe)
        return;
      let U = z();
      if (A.value) {
        if (oe === "last")
          U.reverse();
        else if (oe === "prev" || oe === "next") {
          oe === "prev" && U.reverse();
          const q = U.indexOf(A.value);
          U = U.slice(q + 1);
        }
        gt(Q, U[0]);
      }
      if (U.length) {
        const q = !A.value && oe === "prev" ? U.length - 1 : 0;
        H(U[q]);
      }
      if (R.value)
        return V.trigger(Q);
    }
    function gt(Q, oe) {
      var q;
      if (!(R.value || a.selectionBehavior !== "replace" || !r.value || !Array.isArray(T.value) || (Q.altKey || Q.ctrlKey || Q.metaKey) && !Q.shiftKey) && Q.shiftKey) {
        const ne = f().filter((we) => we.ref.dataset.disabled !== "");
        let K = (q = ne.find((we) => we.ref === oe)) == null ? void 0 : q.value;
        if (Q.key === m.END ? K = ne[ne.length - 1].value : Q.key === m.HOME && (K = ne[0].value), !K || !k.value)
          return;
        const Re = zk(ne.map((we) => we.value), k.value, K);
        T.value = Re;
      }
    }
    async function Nt(Q) {
      if (await re(), R.value)
        I.trigger(Q);
      else {
        const oe = z(), U = oe.find((q) => q.dataset.state === "checked");
        U ? H(U) : oe.length && H(oe[0]);
      }
    }
    return te(T, () => {
      C.value || re(() => {
        Nt();
      });
    }, { immediate: !0, deep: !0 }), t({
      highlightedElement: A,
      highlightItem: ee,
      highlightFirstItem: he,
      highlightSelected: Nt,
      getItems: f
    }), Hk({
      modelValue: T,
      // @ts-expect-error ignoring
      onValueChange: D,
      multiple: r,
      orientation: i,
      dir: b,
      disabled: u,
      highlightOnHover: s,
      highlightedElement: A,
      isVirtual: R,
      virtualFocusHook: I,
      virtualKeydownHook: V,
      virtualHighlightHook: Y,
      by: a.by,
      firstValue: k,
      selectionBehavior: d,
      focusable: E,
      onLeave: Je,
      onEnter: at,
      changeHighlight: H,
      onKeydownEnter: ie,
      onKeydownNavigation: dt,
      onKeydownTypeAhead: be,
      onCompositionStart: G,
      onCompositionEnd: ce,
      highlightFirstItem: he
    }), (Q, oe) => (g(), w(l(Te), {
      ref_key: "primitiveElement",
      ref: h,
      as: Q.as,
      "as-child": Q.asChild,
      dir: l(b),
      "data-disabled": l(u) ? "" : void 0,
      onPointerleave: Je,
      onFocusout: oe[0] || (oe[0] = async (U) => {
        const q = U.relatedTarget || U.target;
        await re(), A.value && l(v) && !l(v).contains(q) && Je(U);
      })
    }, {
      default: y(() => [
        x(Q.$slots, "default", { modelValue: l(T) }),
        l($) && Q.name ? (g(), w(l(kk), {
          key: 0,
          name: Q.name,
          value: l(T),
          disabled: l(u),
          required: Q.required
        }, null, 8, ["name", "value", "disabled", "required"])) : se("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), [Tn, Wk] = $t("ComboboxRoot"), Kk = /* @__PURE__ */ _({
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
  setup(e, { expose: t, emit: n }) {
    var V, Y, z;
    const a = e, o = n, { primitiveElement: r, currentElement: s } = Un(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, dir: f } = me(a), p = Ld(f), h = Qa(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (i.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), v = Qa(a, "open", o, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    async function m(H) {
      var ee, ie;
      v.value = H, R.value = "", H ? (await re(), (ee = r.value) == null || ee.highlightSelected(), $.value = !0) : $.value = !1, (ie = C.value) == null || ie.focus(), setTimeout(() => {
        !H && a.resetSearchTermOnBlur && b.trigger();
      }, 1);
    }
    const b = os(), $ = M(!1), k = M(!1), C = M(), E = M(), T = S(() => {
      var H;
      return ((H = r.value) == null ? void 0 : H.highlightedElement) ?? void 0;
    }), D = M(/* @__PURE__ */ new Map()), A = M(/* @__PURE__ */ new Map()), { contains: N } = Rk({ sensitivity: "base" }), R = M(""), P = S((H) => {
      if (!R.value || a.ignoreFilter || k.value)
        return {
          count: D.value.size,
          items: (H == null ? void 0 : H.items) ?? /* @__PURE__ */ new Map(),
          groups: (H == null ? void 0 : H.groups) ?? new Set(A.value.keys())
        };
      let ee = 0;
      const ie = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Set();
      for (const [G, ce] of D.value) {
        const he = N(ce, R.value);
        ie.set(G, he ? 1 : 0), he && ee++;
      }
      for (const [G, ce] of A.value)
        for (const he of ce)
          if (ie.get(he) > 0) {
            be.add(G);
            break;
          }
      return {
        count: ee,
        items: ie,
        groups: be
      };
    }), I = Ue();
    return ue(() => {
      var H, ee, ie;
      I != null && I.exposed && (I.exposed.highlightItem = (H = r.value) == null ? void 0 : H.highlightItem, I.exposed.highlightFirstItem = (ee = r.value) == null ? void 0 : ee.highlightFirstItem, I.exposed.highlightSelected = (ie = r.value) == null ? void 0 : ie.highlightSelected);
    }), t({
      filtered: P,
      highlightedElement: T,
      highlightItem: (V = r.value) == null ? void 0 : V.highlightItem,
      highlightFirstItem: (Y = r.value) == null ? void 0 : Y.highlightFirstItem,
      highlightSelected: (z = r.value) == null ? void 0 : z.highlightSelected
    }), Wk({
      modelValue: h,
      multiple: i,
      disabled: u,
      open: v,
      onOpenChange: m,
      contentId: "",
      isUserInputted: $,
      isVirtual: k,
      inputElement: C,
      highlightedElement: T,
      onInputElementChange: (H) => C.value = H,
      triggerElement: E,
      onTriggerElementChange: (H) => E.value = H,
      parentElement: s,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: b.on,
      allItems: D,
      allGroups: A,
      filterSearch: R,
      filterState: P,
      ignoreFilter: d
    }), (H, ee) => (g(), w(l(Tk), null, {
      default: y(() => [
        O(l(Uk), B({
          ref_key: "primitiveElement",
          ref: r
        }, H.$attrs, {
          modelValue: l(h),
          "onUpdate:modelValue": ee[0] || (ee[0] = (ie) => lt(h) ? h.value = ie : null),
          style: {
            pointerEvents: l(v) ? "auto" : void 0
          },
          as: H.as,
          "as-child": H.asChild,
          dir: l(p),
          multiple: l(i),
          name: H.name,
          required: H.required,
          disabled: l(u),
          "highlight-on-hover": !0,
          by: a.by,
          onHighlight: ee[1] || (ee[1] = (ie) => o("highlight", ie))
        }), {
          default: y(() => [
            x(H.$slots, "default", {
              open: l(v),
              modelValue: l(h)
            })
          ]),
          _: 3
        }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])
      ]),
      _: 3
    }));
  }
}), jk = /* @__PURE__ */ _({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const { CollectionSlot: t } = Yn(), n = Mi(), a = Ti(!1, 10);
    return (o, r) => (g(), w(l(t), null, {
      default: y(() => [
        O(l(Te), {
          role: "listbox",
          as: o.as,
          "as-child": o.asChild,
          tabindex: l(n).focusable.value ? l(n).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": l(n).orientation.value,
          "aria-multiselectable": !!l(n).multiple.value,
          "data-orientation": l(n).orientation.value,
          onMousedown: r[0] || (r[0] = Pe((s) => a.value = !0, ["left"])),
          onFocus: r[1] || (r[1] = (s) => {
            l(a) || l(n).onEnter(s);
          }),
          onKeydown: [
            r[2] || (r[2] = qe(Pe((s) => {
              l(n).focusable.value && l(n).onKeydownNavigation(s);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            qe(l(n).onKeydownEnter, ["enter"]),
            l(n).onKeydownTypeAhead
          ]
        }, {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), [E5, Yk] = $t("ComboboxContent"), qk = /* @__PURE__ */ _({
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
  setup(e, { emit: t }) {
    const n = e, a = t, { position: o } = me(n), r = Tn(), { forwardRef: s, currentElement: i } = Oe();
    fk(n.bodyLock), lk(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = wa(u.value), c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    Yk({ position: o });
    const f = M(!1);
    return ue(() => {
      r.inputElement.value && (f.value = i.value.contains(r.inputElement.value), f.value && r.inputElement.value.focus());
    }), Ke(() => {
      var p;
      f.value && ((p = r.triggerElement.value) == null || p.focus());
    }), (p, h) => (g(), w(l(jk), { "as-child": "" }, {
      default: y(() => [
        O(l(km), {
          "as-child": "",
          "disable-outside-pointer-events": p.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (v) => l(r).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (v) => {
            var m;
            (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("focusOutside", v);
          }),
          onInteractOutside: h[2] || (h[2] = (v) => a("interactOutside", v)),
          onEscapeKeyDown: h[3] || (h[3] = (v) => a("escapeKeyDown", v)),
          onPointerDownOutside: h[4] || (h[4] = (v) => {
            var m;
            (m = l(r).parentElement.value) != null && m.contains(v.target) && v.preventDefault(), a("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (g(), w(it(l(o) === "popper" ? l(Ik) : l(Te)), B({ ...p.$attrs, ...l(d) }, {
              id: l(r).contentId,
              ref: l(s),
              "data-state": l(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...l(o) === "popper" ? c : {}
              }
            }), {
              default: y(() => [
                x(p.$slots, "default")
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
}), A5 = /* @__PURE__ */ _({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = Tn();
    function a() {
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus());
    }
    return (o, r) => (g(), w(l(Te), B({
      type: o.as === "button" ? "button" : void 0
    }, t, {
      tabindex: "-1",
      onClick: a
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Gk = /* @__PURE__ */ _({
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
  setup(e, { emit: t }) {
    const o = Sn(e, t), { forwardRef: r } = Oe(), s = Tn();
    return s.contentId || (s.contentId = jn(void 0, "reka-combobox-content")), (i, u) => (g(), w(l(Di), {
      present: i.forceMount || l(s).open.value
    }, {
      default: y(() => [
        O(qk, B({ ...l(o), ...i.$attrs }, { ref: l(r) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Xk = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Tn(), a = S(
      () => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0
    );
    return (o, r) => a.value ? (g(), w(l(Te), J(B({ key: 0 }, t)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          r[0] || (r[0] = ae("No options"))
        ])
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
}), [D5, Jk] = $t("ListboxGroup"), Zk = /* @__PURE__ */ _({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = jn(void 0, "reka-listbox-group");
    return Jk({ id: n }), (a, o) => (g(), w(l(Te), B({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), [Dm, Qk] = $t("ComboboxGroup"), eS = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = jn(void 0, "reka-combobox-group"), a = Tn(), o = S(() => a.ignoreFilter.value ? !0 : a.filterSearch.value ? a.filterState.value.groups.has(n) : !0), r = Qk({
      id: n,
      labelId: ""
    });
    return ue(() => {
      a.allGroups.value.has(n) || a.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ke(() => {
      a.allGroups.value.delete(n);
    }), (s, i) => (g(), w(l(Zk), B({
      id: l(n),
      "aria-labelledby": l(r).labelId
    }, t, {
      hidden: o.value ? void 0 : !0
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "hidden"]));
  }
}), tS = /* @__PURE__ */ _({
  __name: "ListboxFilter",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Qa(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = Mi(), { primitiveElement: s, currentElement: i } = Un(), u = S(() => n.disabled || r.disabled.value || !1), d = M();
    return ph(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), ue(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ke(() => {
      r.focusable.value = !0;
    }), (c, f) => (g(), w(l(Te), {
      ref_key: "primitiveElement",
      ref: s,
      as: c.as,
      "as-child": c.asChild,
      value: l(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": d.value,
      type: "text",
      onKeydown: [
        qe(Pe(l(r).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        qe(l(r).onKeydownEnter, ["enter"])
      ],
      onInput: f[0] || (f[0] = (p) => {
        o.value = p.target.value, l(r).highlightFirstItem();
      }),
      onCompositionstart: l(r).onCompositionStart,
      onCompositionend: l(r).onCompositionEnd
    }, {
      default: y(() => [
        x(c.$slots, "default", { modelValue: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), nS = /* @__PURE__ */ _({
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
  setup(e, { emit: t }) {
    const n = e, a = t, o = Tn(), r = Mi(), { primitiveElement: s, currentElement: i } = Un(), u = Qa(n, "modelValue", a, {
      passive: n.modelValue === void 0
    });
    ue(() => {
      i.value && o.onInputElementChange(i.value);
    });
    function d(p) {
      o.open.value || o.onOpenChange(!0);
    }
    function c(p) {
      const h = p.target;
      o.open.value ? o.filterSearch.value = h.value : (o.onOpenChange(!0), re(() => {
        h.value && (o.filterSearch.value = h.value, r.highlightFirstItem());
      }));
    }
    function f() {
      const p = o.modelValue.value;
      n.displayValue ? u.value = n.displayValue(p) : !o.multiple.value && p && !Array.isArray(p) && typeof p != "object" ? u.value = p.toString() : u.value = "", re(() => {
        u.value = u.value;
      });
    }
    return o.onResetSearchTerm(() => {
      f();
    }), te(o.modelValue, async () => {
      !o.isUserInputted.value && o.resetSearchTermOnSelect.value && f();
    }, { immediate: !0, deep: !0 }), te(o.filterState, () => {
      o.isVirtual.value || r.highlightFirstItem();
    }), (p, h) => (g(), w(l(tS), {
      ref_key: "primitiveElement",
      ref: s,
      modelValue: l(u),
      "onUpdate:modelValue": h[0] || (h[0] = (v) => lt(u) ? u.value = v : null),
      as: p.as,
      "as-child": p.asChild,
      "auto-focus": p.autoFocus,
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: qe(Pe(d, ["prevent"]), ["down", "up"])
    }, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
  }
}), aS = "listbox.select", [oS, rS] = $t("ListboxItem"), sS = /* @__PURE__ */ _({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = jn(void 0, "reka-listbox-item"), { CollectionItem: r } = Yn(), { forwardRef: s, currentElement: i } = Oe(), u = Mi(), d = S(() => i.value === u.highlightedElement.value), c = S(() => Fk(u.modelValue.value, n.value, u.by)), f = S(() => u.disabled.value || n.disabled);
    async function p(v) {
      a("select", v), !(v != null && v.defaultPrevented) && !f.value && v && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function h(v) {
      const m = { originalEvent: v, value: n.value };
      zd(aS, p, m);
    }
    return rS({
      isSelected: c
    }), (v, m) => (g(), w(l(r), { value: v.value }, {
      default: y(() => [
        u0([d.value, c.value], () => O(l(Te), B({ id: l(o) }, v.$attrs, {
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
          onKeydown: qe(Pe(h, ["prevent"]), ["space"]),
          onPointermove: m[0] || (m[0] = (b) => {
            l(u).highlightedElement.value !== l(i) && (l(u).highlightOnHover.value ? l(u).changeHighlight(l(i), !1) : l(u).focusable.value || l(u).changeHighlight(l(i), !1));
          })
        }), {
          default: y(() => [
            x(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), m, 1)
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), iS = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = jn(void 0, "reka-combobox-item"), r = Tn(), s = Dm(null), { primitiveElement: i, currentElement: u } = Un();
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    const d = S(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value)
        return !0;
      {
        const c = r.filterState.value.items.get(o);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return ue(() => {
      var f;
      r.allItems.value.set(o, n.textValue || u.value.textContent || u.value.innerText);
      const c = s == null ? void 0 : s.id;
      c && (r.allGroups.value.has(c) ? (f = r.allGroups.value.get(c)) == null || f.add(o) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([o])));
    }), Ke(() => {
      r.allItems.value.delete(o);
    }), (c, f) => d.value ? (g(), w(l(sS), B({ key: 0 }, n, {
      id: l(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: l(r).disabled.value || c.disabled,
      onSelect: f[0] || (f[0] = (p) => {
        a("select", p), !p.defaultPrevented && !l(r).multiple.value && !c.disabled && !l(r).disabled.value && (p.preventDefault(), l(r).onOpenChange(!1), l(r).modelValue.value = n.value);
      })
    }), {
      default: y(() => [
        x(c.$slots, "default", {}, () => [
          ae(de(c.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "disabled"])) : se("", !0);
  }
}), lS = /* @__PURE__ */ _({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = oS();
    return (a, o) => l(n).isSelected.value ? (g(), w(l(Te), B({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
}), M5 = /* @__PURE__ */ _({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(lS), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uS = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = Dm({ id: "", labelId: "" });
    return n.labelId || (n.labelId = jn(void 0, "reka-combobox-group-label")), (a, o) => (g(), w(l(Te), B(t, {
      id: l(n).labelId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), dS = /* @__PURE__ */ _({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(hk), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cS = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return Oe(), (n, a) => (g(), w(l(Te), B(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B5 = /* @__PURE__ */ _({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Oe(), o = Tn(), r = S(() => t.disabled || o.disabled.value || !1);
    return ue(() => {
      a.value && o.onTriggerElementChange(a.value);
    }), (s, i) => (g(), w(l(Te), B(t, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "data-state": l(o).open.value ? "open" : "closed",
      disabled: r.value,
      "data-disabled": r.value ? "" : void 0,
      "aria-disabled": r.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => l(o).onOpenChange(!l(o).open.value))
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
function fS(e) {
  const t = Ai({
    nonce: M()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const pS = /* @__PURE__ */ _({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = Oe(), { nonce: a } = me(t), o = fS(a), r = Tn();
    return (s, i) => (g(), L(le, null, [
      O(l(Te), B({ ...s.$attrs, ...t }, {
        ref: l(n),
        "data-reka-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: l(r).isVirtual.value ? void 0 : 1,
          overflow: "auto"
        }
      }), {
        default: y(() => [
          x(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      O(l(Te), {
        as: "style",
        nonce: l(o)
      }, {
        default: y(() => i[0] || (i[0] = [
          ae(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function Bi(e) {
  return e ? "open" : "closed";
}
function Mm(e, t) {
  return `${e}-trigger-${t}`;
}
function Hd(e, t) {
  return `${e}-content-${t}`;
}
const hS = "navigationMenu.linkSelect", rs = "navigationMenu.rootContentDismiss";
function nu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Bm(e) {
  const t = na();
  return e.some((n) => n === t ? !0 : (n.focus(), na() !== t));
}
function vS(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Om(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const [xa, mS] = $t(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), gS = /* @__PURE__ */ _({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: void 0 },
    defaultValue: {},
    dir: {},
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    disableClickTrigger: { type: Boolean, default: !1 },
    disableHoverTrigger: { type: Boolean, default: !1 },
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Qa(n, "modelValue", t, {
      defaultValue: n.defaultValue ?? "",
      passive: n.modelValue === void 0
    }), r = M(""), { forwardRef: s, currentElement: i } = Oe(), u = M(), d = M(), c = M(), { getItems: f, CollectionSlot: p } = Yn({ key: "NavigationMenu", isProvider: !0 }), { delayDuration: h, skipDelayDuration: v, dir: m, disableClickTrigger: b, disableHoverTrigger: $, unmountOnHide: k } = me(n), C = Ld(m), E = Ti(!1, v), T = S(() => o.value !== "" || E.value ? 150 : h.value), D = L2((A) => {
      typeof A == "string" && (r.value = o.value, o.value = A);
    }, T);
    return xe(() => {
      if (!o.value)
        return;
      const A = f().map((N) => N.ref);
      c.value = A.find(
        (N) => N.id.includes(o.value)
      );
    }), mS({
      isRootMenu: !0,
      modelValue: o,
      previousValue: r,
      baseId: jn(void 0, "reka-navigation-menu"),
      disableClickTrigger: b,
      disableHoverTrigger: $,
      dir: C,
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
        E.value = !0, D("");
      },
      onContentEnter: () => {
        D();
      },
      onContentLeave: () => {
        n.disablePointerLeaveClose || D("");
      },
      onItemSelect: (A) => {
        r.value = o.value, o.value = A;
      },
      onItemDismiss: () => {
        r.value = o.value, o.value = "";
      }
    }), (A, N) => (g(), w(l(p), null, {
      default: y(() => [
        O(l(Te), {
          ref: l(s),
          "aria-label": "Main",
          as: A.as,
          "as-child": A.asChild,
          "data-orientation": A.orientation,
          dir: l(C),
          "data-reka-navigation-menu": ""
        }, {
          default: y(() => [
            x(A.$slots, "default", { modelValue: l(o) })
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-orientation", "dir"])
      ]),
      _: 3
    }));
  }
}), [Ud, yS] = $t("NavigationMenuItem"), bS = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(e) {
    const t = e;
    Oe();
    const { getItems: n } = Yn({ key: "NavigationMenu" }), a = xa(), o = jn(t.value), r = M(), s = M(), i = Hd(a.baseId, o);
    let u = () => ({});
    const d = M(!1);
    async function c(v = "start") {
      const m = document.getElementById(i);
      if (m) {
        u();
        const b = nu(m);
        b.length && Bm(v === "start" ? b : b.reverse());
      }
    }
    function f() {
      const v = document.getElementById(i);
      if (v) {
        const m = nu(v);
        m.length && (u = vS(m));
      }
    }
    yS({
      value: o,
      contentId: i,
      triggerRef: r,
      focusProxyRef: s,
      wasEscapeCloseRef: d,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function p() {
      var v;
      a.onItemDismiss(), (v = r.value) == null || v.focus();
    }
    function h(v) {
      const m = na();
      if (v.keyCode === 32 || v.key === "Enter")
        if (a.modelValue.value === o) {
          p(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      const b = n().filter(
        (k) => {
          var C;
          return (C = k.ref.parentElement) == null ? void 0 : C.hasAttribute("data-menu-item");
        }
      ).map((k) => k.ref);
      if (!b.includes(m))
        return;
      const $ = xm(v, m, void 0, {
        itemsArray: b,
        loop: !1
      });
      $ && ($ == null || $.focus()), v.preventDefault(), v.stopPropagation();
    }
    return (v, m) => (g(), w(l(Te), {
      "as-child": v.asChild,
      as: v.as,
      "data-menu-item": "",
      onKeydown: qe(h, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: y(() => [
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), _S = /* @__PURE__ */ _({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getItems: o } = Yn({ key: "NavigationMenu" }), { forwardRef: r, currentElement: s } = Oe(), i = xa(), u = Ud(), d = Mm(i.baseId, u.value), c = Hd(i.baseId, u.value), f = M(null), p = S(() => {
      const k = o().map((N) => N.ref.id.split("trigger-")[1]);
      i.dir.value === "rtl" && k.reverse();
      const C = k.indexOf(i.modelValue.value), E = k.indexOf(i.previousValue.value), T = u.value === i.modelValue.value, D = E === k.indexOf(u.value);
      if (!T && !D)
        return f.value;
      const A = (() => {
        if (C !== E) {
          if (T && E !== -1)
            return C > E ? "from-end" : "from-start";
          if (D && C !== -1)
            return C > E ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = A, A;
    });
    function h(k) {
      var E, T;
      if (a("focusOutside", k), a("interactOutside", k), k.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && k.preventDefault(), !k.defaultPrevented) {
        u.onContentFocusOutside();
        const D = k.target;
        (T = (E = i.rootNavigationMenu) == null ? void 0 : E.value) != null && T.contains(D) && k.preventDefault();
      }
    }
    function v(k) {
      var C;
      if (a("pointerDownOutside", k), !k.defaultPrevented) {
        const E = k.target, T = o().some(
          (A) => A.ref.contains(E)
        ), D = i.isRootMenu && ((C = i.viewport.value) == null ? void 0 : C.contains(E));
        (T || D || !i.isRootMenu) && k.preventDefault();
      }
    }
    xe((k) => {
      const C = s.value;
      if (i.isRootMenu && C) {
        const E = () => {
          var T;
          i.onItemDismiss(), u.onRootContentClose(), C.contains(na()) && ((T = u.triggerRef.value) == null || T.focus());
        };
        C.addEventListener(rs, E), k(
          () => C.removeEventListener(rs, E)
        );
      }
    });
    function m(k) {
      var C, E;
      a("escapeKeyDown", k), k.defaultPrevented || (i.onItemDismiss(), (E = (C = u.triggerRef) == null ? void 0 : C.value) == null || E.focus(), u.wasEscapeCloseRef.value = !0);
    }
    function b(k) {
      var A;
      if (k.target.closest("[data-reka-navigation-menu]") !== i.rootNavigationMenu.value)
        return;
      const C = k.altKey || k.ctrlKey || k.metaKey, E = k.key === "Tab" && !C, T = nu(k.currentTarget);
      if (E) {
        const N = na(), R = T.findIndex(
          (V) => V === N
        ), I = k.shiftKey ? T.slice(0, R).reverse() : T.slice(R + 1, T.length);
        if (Bm(I))
          k.preventDefault();
        else {
          (A = u.focusProxyRef.value) == null || A.focus();
          return;
        }
      }
      const D = xm(
        k,
        na(),
        void 0,
        { itemsArray: T, loop: !1, enableIgnoredElement: !0 }
      );
      D == null || D.focus();
    }
    function $() {
      var C;
      const k = new Event(rs, {
        bubbles: !0,
        cancelable: !0
      });
      (C = s.value) == null || C.dispatchEvent(k);
    }
    return (k, C) => (g(), w(l(km), B({
      id: l(c),
      ref: l(r),
      "aria-labelledby": l(d),
      "data-motion": p.value,
      "data-state": l(Bi)(l(i).modelValue.value === l(u).value),
      "data-orientation": l(i).orientation
    }, n, {
      onKeydown: b,
      onEscapeKeyDown: m,
      onPointerDownOutside: v,
      onFocusOutside: h,
      onDismiss: $
    }), {
      default: y(() => [
        x(k.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), wS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Sn(B2(n, "forceMount"), a), { forwardRef: r } = Oe(), s = xa(), i = Ud(), u = S(() => i.value === s.modelValue.value), d = S(() => s.viewport.value && !s.modelValue.value && s.previousValue.value ? s.previousValue.value === i.value : !1);
    return (c, f) => (g(), w(pa, {
      to: l(Jt) && l(s).viewport.value ? l(s).viewport.value : "body",
      disabled: l(Jt) && l(s).viewport.value ? !l(s).viewport.value : !0
    }, [
      O(l(Di), {
        present: c.forceMount || u.value || d.value,
        "force-mount": !l(s).unmountOnHide.value
      }, {
        default: y(({ present: p }) => [
          O(_S, B({
            ref: l(r),
            "data-state": l(Bi)(u.value),
            style: {
              pointerEvents: !u.value && l(s).isRootMenu ? "none" : void 0
            }
          }, { ...c.$attrs, ...l(o) }, {
            hidden: !p,
            onPointerenter: f[0] || (f[0] = (h) => l(s).onContentEnter(l(i).value)),
            onPointerleave: f[1] || (f[1] = (h) => l(Om)(() => l(s).onContentLeave())(h)),
            onPointerDownOutside: f[2] || (f[2] = (h) => a("pointerDownOutside", h)),
            onFocusOutside: f[3] || (f[3] = (h) => a("focusOutside", h)),
            onInteractOutside: f[4] || (f[4] = (h) => a("interactOutside", h))
          }), {
            default: y(() => [
              x(c.$slots, "default")
            ]),
            _: 2
          }, 1040, ["data-state", "style", "hidden"])
        ]),
        _: 3
      }, 8, ["present", "force-mount"])
    ], 8, ["to", "disabled"]));
  }
}), xS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = Oe(), a = xa(), o = M(), r = S(() => a.orientation === "horizontal"), s = S(() => !!a.modelValue.value), { activeTrigger: i } = a;
    function u() {
      i.value && (o.value = {
        size: r.value ? i.value.offsetWidth : i.value.offsetHeight,
        position: r.value ? i.value.offsetLeft : i.value.offsetTop
      });
    }
    return xe(() => {
      a.modelValue.value && u();
    }), Os(i, u), Os(a.indicatorTrack, u), (d, c) => l(a).indicatorTrack.value ? (g(), w(pa, {
      key: 0,
      to: l(a).indicatorTrack.value
    }, [
      O(l(Di), {
        present: d.forceMount || s.value
      }, {
        default: y(() => [
          O(l(Te), B({
            ref: l(n),
            "aria-hidden": "true",
            "data-state": s.value ? "visible" : "hidden",
            "data-orientation": l(a).orientation,
            "as-child": t.asChild,
            as: d.as,
            style: {
              ...o.value ? {
                "--reka-navigation-menu-indicator-size": `${o.value.size}px`,
                "--reka-navigation-menu-indicator-position": `${o.value.position}px`
              } : {}
            }
          }, d.$attrs), {
            default: y(() => [
              x(d.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : se("", !0);
  }
}), CS = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { CollectionItem: o } = Yn({ key: "NavigationMenu" });
    Oe();
    async function r(s) {
      var u;
      const i = new CustomEvent(hS, {
        bubbles: !0,
        cancelable: !0,
        detail: {
          originalEvent: s
        }
      });
      if (a("select", i), !i.defaultPrevented && !s.metaKey) {
        const d = new CustomEvent(
          rs,
          {
            bubbles: !0,
            cancelable: !0
          }
        );
        (u = s.target) == null || u.dispatchEvent(d);
      }
    }
    return (s, i) => (g(), w(l(o), null, {
      default: y(() => [
        O(l(Te), {
          as: s.as,
          "data-active": s.active ? "" : void 0,
          "aria-current": s.active ? "page" : void 0,
          "as-child": n.asChild,
          onClick: r
        }, {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "data-active", "aria-current", "as-child"])
      ]),
      _: 3
    }));
  }
}), $S = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(e) {
    const t = e, n = xa(), { forwardRef: a, currentElement: o } = Oe();
    return ue(() => {
      n.onIndicatorTrackChange(o.value);
    }), (r, s) => (g(), w(l(Te), {
      ref: l(a),
      style: { position: "relative" }
    }, {
      default: y(() => [
        O(l(Te), B(r.$attrs, {
          "as-child": t.asChild,
          as: r.as,
          "data-orientation": l(n).orientation
        }), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
}), kS = ["aria-owns"], SS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = xa(), a = Ud(), { CollectionItem: o } = Yn({ key: "NavigationMenu" }), { forwardRef: r, currentElement: s } = Oe(), i = M(""), u = M(""), d = Ti(!1, 300), c = M(!1), f = S(() => a.value === n.modelValue.value);
    ue(() => {
      a.triggerRef = s, i.value = Mm(n.baseId, a.value), u.value = Hd(n.baseId, a.value);
    });
    function p() {
      n.disableHoverTrigger.value || (c.value = !1, a.wasEscapeCloseRef.value = !1);
    }
    function h(C) {
      if (!n.disableHoverTrigger.value && C.pointerType === "mouse") {
        if (t.disabled || c.value || a.wasEscapeCloseRef.value || d.value)
          return;
        n.onTriggerEnter(a.value), d.value = !0;
      }
    }
    function v(C) {
      if (!n.disableHoverTrigger.value && C.pointerType === "mouse") {
        if (t.disabled)
          return;
        n.onTriggerLeave(), d.value = !1;
      }
    }
    function m(C) {
      C.pointerType === "mouse" && n.disableClickTrigger.value || d.value || (f.value ? n.onItemSelect("") : n.onItemSelect(a.value), c.value = f.value);
    }
    function b(C) {
      const T = { horizontal: "ArrowDown", vertical: n.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[n.orientation];
      f.value && C.key === T && (a.onEntryKeyDown(), C.preventDefault(), C.stopPropagation());
    }
    function $(C) {
      a.focusProxyRef.value = Zt(C);
    }
    function k(C) {
      const E = document.getElementById(a.contentId), T = C.relatedTarget, D = T === s.value, A = E == null ? void 0 : E.contains(T);
      (D || !A) && a.onFocusProxyEnter(D ? "start" : "end");
    }
    return (C, E) => (g(), L(le, null, [
      O(l(o), null, {
        default: y(() => [
          O(l(Te), B({
            id: i.value,
            ref: l(r),
            disabled: C.disabled,
            "data-disabled": C.disabled ? "" : void 0,
            "data-state": l(Bi)(f.value),
            "data-navigation-menu-trigger": "",
            "aria-expanded": f.value,
            "aria-controls": u.value,
            "as-child": t.asChild,
            as: C.as
          }, C.$attrs, {
            onPointerenter: p,
            onPointermove: h,
            onPointerleave: v,
            onClick: m,
            onKeydown: b
          }), {
            default: y(() => [
              x(C.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"])
        ]),
        _: 3
      }),
      f.value ? (g(), L(le, { key: 0 }, [
        O(l(bm), {
          ref: $,
          "aria-hidden": "true",
          tabindex: 0,
          onFocus: k
        }),
        l(n).viewport ? (g(), L("span", {
          key: 0,
          "aria-owns": u.value
        }, null, 8, kS)) : se("", !0)
      ], 64)) : se("", !0)
    ], 64));
  }
}), TS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: { default: "center" },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    var h;
    const t = e, { forwardRef: n, currentElement: a } = Oe(), o = xa(), { activeTrigger: r, rootNavigationMenu: s, modelValue: i } = o, u = M(), d = M(), c = S(() => !!o.modelValue.value);
    te(a, () => {
      o.onViewportChange(a.value);
    });
    const f = M();
    te([i, c], () => {
      a.value && requestAnimationFrame(() => {
        var m;
        const v = (m = a.value) == null ? void 0 : m.querySelector("[data-state=open]");
        f.value = v;
      });
    }, { immediate: !0, flush: "post" });
    function p() {
      if (f.value && r.value && s.value) {
        const v = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, b = s.value.getBoundingClientRect(), $ = r.value.getBoundingClientRect(), { offsetWidth: k, offsetHeight: C } = f.value, E = $.left - b.left, T = $.top - b.top;
        let D = null, A = null;
        switch (t.align) {
          case "start":
            D = E, A = T;
            break;
          case "end":
            D = E - k + $.width, A = T - C + $.height;
            break;
          default:
            D = E - k / 2 + $.width / 2, A = T - C / 2 + $.height / 2;
        }
        const N = 10;
        D + b.left < N && (D = N - b.left);
        const R = D + b.left + k;
        R > v - N && (D -= R - v + N, D < N - b.left && (D = N - b.left)), A + b.top < N && (A = N - b.top);
        const P = A + b.top + C;
        P > m - N && (A -= P - m + N, A < N - b.top && (A = N - b.top)), D = Math.round(D), A = Math.round(A), d.value = {
          left: D,
          top: A
        };
      }
    }
    return Os(f, () => {
      f.value && (u.value = {
        width: f.value.offsetWidth,
        height: f.value.offsetHeight
      }, p());
    }), Os([(h = globalThis.document) == null ? void 0 : h.body, s], () => {
      p();
    }), (v, m) => (g(), w(l(Di), {
      present: v.forceMount || c.value,
      "force-mount": !l(o).unmountOnHide.value,
      onAfterLeave: m[2] || (m[2] = () => {
        u.value = void 0, d.value = void 0;
      })
    }, {
      default: y(({ present: b }) => {
        var $, k, C, E;
        return [
          O(l(Te), B(v.$attrs, {
            ref: l(n),
            as: v.as,
            "as-child": v.asChild,
            "data-state": l(Bi)(c.value),
            "data-orientation": l(o).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !c.value && l(o).isRootMenu ? "none" : void 0,
              "--reka-navigation-menu-viewport-width": u.value ? `${($ = u.value) == null ? void 0 : $.width}px` : void 0,
              "--reka-navigation-menu-viewport-height": u.value ? `${(k = u.value) == null ? void 0 : k.height}px` : void 0,
              "--reka-navigation-menu-viewport-left": d.value ? `${(C = d.value) == null ? void 0 : C.left}px` : void 0,
              "--reka-navigation-menu-viewport-top": d.value ? `${(E = d.value) == null ? void 0 : E.top}px` : void 0
            },
            hidden: !b,
            onPointerenter: m[0] || (m[0] = (T) => l(o).onContentEnter(l(o).modelValue.value)),
            onPointerleave: m[1] || (m[1] = (T) => l(Om)(() => l(o).onContentLeave())(T))
          }), {
            default: y(() => [
              x(v.$slots, "default")
            ]),
            _: 2
          }, 1040, ["as", "as-child", "data-state", "data-orientation", "style", "hidden"])
        ];
      }),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), O5 = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(mk), {
      "data-slot": "avatar",
      class: X(l(F)("relative flex size-8 shrink-0 overflow-hidden rounded-full", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function ES(e) {
  return ii() ? (li(e), !0) : !1;
}
const ml = /* @__PURE__ */ new WeakMap(), AS = (...e) => {
  var t;
  const n = e[0], a = (t = Ue()) == null ? void 0 : t.proxy;
  if (a == null && !gh())
    throw new Error("injectLocal must be called in setup");
  return a && ml.has(a) && n in ml.get(a) ? ml.get(a)[n] : Kn(...e);
};
function DS(e) {
  if (!lt(e))
    return Ln(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return l(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return lt(e.value[a]) && !lt(o) ? e.value[a].value = o : e.value[a] = o, !0;
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
  return Ln(t);
}
function MS(e) {
  return DS(S(e));
}
function En(e, ...t) {
  const n = t.flat(), a = n[0];
  return MS(() => Object.fromEntries(typeof a == "function" ? Object.entries(me(e)).filter(([o, r]) => !a(Me(r), o)) : Object.entries(me(e)).filter((o) => !n.includes(o[0]))));
}
const BS = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const OS = (e) => typeof e < "u", PS = Object.prototype.toString, IS = (e) => PS.call(e) === "[object Object]", RS = () => {
};
function Pm(...e) {
  if (e.length !== 1)
    return Lu(...e);
  const t = e[0];
  return typeof t == "function" ? lo(Hu(() => ({ get: t, set: RS }))) : M(t);
}
function FS(e, t) {
  function n(...a) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(r);
    });
  }
  return n;
}
const Im = (e) => e();
function VS(e = Im, t = {}) {
  const {
    initialState: n = "active"
  } = t, a = Pm(n === "active");
  function o() {
    a.value = !1;
  }
  function r() {
    a.value = !0;
  }
  const s = (...i) => {
    a.value && e(...i);
  };
  return { isActive: lo(a), pause: o, resume: r, eventFilter: s };
}
function Df(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function gl(e) {
  return Array.isArray(e) ? e : [e];
}
function NS(e) {
  return Ue();
}
function LS(e, t, n = {}) {
  const {
    eventFilter: a = Im,
    ...o
  } = n;
  return te(
    e,
    FS(
      a,
      t
    ),
    o
  );
}
function zS(e, t, n = {}) {
  const {
    eventFilter: a,
    initialState: o = "active",
    ...r
  } = n, { eventFilter: s, pause: i, resume: u, isActive: d } = VS(a, { initialState: o });
  return { stop: LS(
    e,
    t,
    {
      ...r,
      eventFilter: s
    }
  ), pause: i, resume: u, isActive: d };
}
function Rm(e, t = !0, n) {
  NS() ? ue(e, n) : t ? e() : re(e);
}
function HS(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Qo = BS ? window : void 0;
function Fm(e) {
  var t;
  const n = Me(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ps(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = S(() => {
    const i = gl(Me(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = HS(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => Fm(d))) != null ? u : [Qo].filter((d) => d != null),
        gl(Me(o.value ? e[1] : e[0])),
        gl(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Me(o.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const f = IS(c) ? { ...c } : c;
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
    r(), n();
  };
  return ES(n), s;
}
function US() {
  const e = vn(!1), t = Ue();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function WS(e) {
  const t = US();
  return S(() => (t.value, !!e()));
}
const KS = Symbol("vueuse-ssr-width");
function jS() {
  const e = gh() ? AS(KS, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Vm(e, t = {}) {
  const { window: n = Qo, ssrWidth: a = jS() } = t, o = WS(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), r = vn(typeof a == "number"), s = vn(), i = vn(!1), u = (d) => {
    i.value = d.matches;
  };
  return xe(() => {
    if (r.value) {
      r.value = !o.value;
      const d = Me(e).split(",");
      i.value = d.some((c) => {
        const f = c.includes("not all"), p = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let v = !!(p || h);
        return p && v && (v = a >= Df(p[1])), h && v && (v = a <= Df(h[1])), f ? !v : v;
      });
      return;
    }
    o.value && (s.value = n.matchMedia(Me(e)), i.value = s.value.matches);
  }), Ps(s, "change", u, { passive: !0 }), S(() => i.value);
}
function YS(e) {
  return JSON.parse(JSON.stringify(e));
}
const Hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ur = "__vueuse_ssr_handlers__", qS = /* @__PURE__ */ GS();
function GS() {
  return Ur in Hr || (Hr[Ur] = Hr[Ur] || {}), Hr[Ur];
}
function Nm(e, t) {
  return qS[e] || t;
}
function XS(e) {
  return Vm("(prefers-color-scheme: dark)", e);
}
function JS(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const ZS = {
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
}, Mf = "vueuse-storage";
function QS(e, t, n, a = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: s = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: c,
    window: f = Qo,
    eventFilter: p,
    onError: h = (z) => {
      console.error(z);
    },
    initOnMounted: v
  } = a, m = (c ? vn : M)(typeof t == "function" ? t() : t), b = S(() => Me(e));
  if (!n)
    try {
      n = Nm("getDefaultStorage", () => {
        var z;
        return (z = Qo) == null ? void 0 : z.localStorage;
      })();
    } catch (z) {
      h(z);
    }
  if (!n)
    return m;
  const $ = Me(t), k = JS($), C = (o = a.serializer) != null ? o : ZS[k], { pause: E, resume: T } = zS(
    m,
    () => P(m.value),
    { flush: r, deep: s, eventFilter: p }
  );
  te(b, () => V(), { flush: r });
  let D = !1;
  const A = (z) => {
    v && !D || V(z);
  }, N = (z) => {
    v && !D || Y(z);
  };
  f && i && (n instanceof Storage ? Ps(f, "storage", A, { passive: !0 }) : Ps(f, Mf, N)), v ? Rm(() => {
    D = !0, V();
  }) : V();
  function R(z, H) {
    if (f) {
      const ee = {
        key: b.value,
        oldValue: z,
        newValue: H,
        storageArea: n
      };
      f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", ee) : new CustomEvent(Mf, {
        detail: ee
      }));
    }
  }
  function P(z) {
    try {
      const H = n.getItem(b.value);
      if (z == null)
        R(H, null), n.removeItem(b.value);
      else {
        const ee = C.write(z);
        H !== ee && (n.setItem(b.value, ee), R(H, ee));
      }
    } catch (H) {
      h(H);
    }
  }
  function I(z) {
    const H = z ? z.newValue : n.getItem(b.value);
    if (H == null)
      return u && $ != null && n.setItem(b.value, C.write($)), $;
    if (!z && d) {
      const ee = C.read(H);
      return typeof d == "function" ? d(ee, $) : k === "object" && !Array.isArray(ee) ? { ...$, ...ee } : ee;
    } else return typeof H != "string" ? H : C.read(H);
  }
  function V(z) {
    if (!(z && z.storageArea !== n)) {
      if (z && z.key == null) {
        m.value = $;
        return;
      }
      if (!(z && z.key !== b.value)) {
        E();
        try {
          (z == null ? void 0 : z.newValue) !== C.write(m.value) && (m.value = I(z));
        } catch (H) {
          h(H);
        } finally {
          z ? re(T) : T();
        }
      }
    }
  }
  function Y(z) {
    V(z.detail);
  }
  return m;
}
const eT = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function tT(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: a = "auto",
    window: o = Qo,
    storage: r,
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
  }, p = XS({ window: o }), h = S(() => p.value ? "dark" : "light"), v = u || (s == null ? Pm(a) : QS(s, a, r, { window: o, listenToStorageChanges: i })), m = S(() => v.value === "auto" ? h.value : v.value), b = Nm(
    "updateHTMLAttrs",
    (E, T, D) => {
      const A = typeof E == "string" ? o == null ? void 0 : o.document.querySelector(E) : Fm(E);
      if (!A)
        return;
      const N = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
      let P = null;
      if (T === "class") {
        const V = D.split(/\s/g);
        Object.values(f).flatMap((Y) => (Y || "").split(/\s/g)).filter(Boolean).forEach((Y) => {
          V.includes(Y) ? N.add(Y) : R.add(Y);
        });
      } else
        P = { key: T, value: D };
      if (N.size === 0 && R.size === 0 && P === null)
        return;
      let I;
      c && (I = o.document.createElement("style"), I.appendChild(document.createTextNode(eT)), o.document.head.appendChild(I));
      for (const V of N)
        A.classList.add(V);
      for (const V of R)
        A.classList.remove(V);
      P && A.setAttribute(P.key, P.value), c && (o.getComputedStyle(I).opacity, document.head.removeChild(I));
    }
  );
  function $(E) {
    var T;
    b(t, n, (T = f[E]) != null ? T : E);
  }
  function k(E) {
    e.onChanged ? e.onChanged(E, $) : $(E);
  }
  te(m, k, { flush: "post", immediate: !0 }), Rm(() => k(m.value));
  const C = S({
    get() {
      return d ? v.value : m.value;
    },
    set(E) {
      v.value = E;
    }
  });
  return Object.assign(C, { store: v, system: h, state: m });
}
function nT(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = ""
  } = e, a = tT({
    ...e,
    onChanged: (s, i) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, s === "dark", i, s) : i(s);
    },
    modes: {
      dark: t,
      light: n
    }
  }), o = S(() => a.system.value);
  return S({
    get() {
      return a.value === "dark";
    },
    set(s) {
      const i = s ? "dark" : "light";
      o.value === i ? a.value = "auto" : a.value = i;
    }
  });
}
function Wd(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = Ue(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => i ? typeof i == "function" ? i(C) : YS(C) : C, $ = () => OS(e[t]) ? b(e[t]) : f, k = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = $(), E = M(C);
    let T = !1;
    return te(
      () => e[t],
      (D) => {
        T || (T = !0, E.value = b(D), re(() => T = !1));
      }
    ), te(
      E,
      (D) => {
        !T && (D !== e[t] || c) && k(D);
      },
      { deep: c }
    ), E;
  } else
    return S({
      get() {
        return $();
      },
      set(C) {
        k(C);
      }
    });
}
const P5 = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = En(t, "class");
    return (a, o) => (g(), w(l(gk), B({ "data-slot": "avatar-fallback" }, l(n), {
      class: l(F)("bg-muted flex size-full items-center justify-center rounded-full", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I5 = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(bk), B({ "data-slot": "avatar-image" }, t, { class: "aspect-square size-full" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R5 = /* @__PURE__ */ _({
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
      class: X(l(F)(l(aT)({ variant: n.variant, type: n.type, size: n.size }), t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), aT = kn(
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
), F5 = /* @__PURE__ */ _({
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
      x(n.$slots, "default")
    ], 2));
  }
}), V5 = /* @__PURE__ */ _({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: X(l(F)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      x(n.$slots, "default", {}, () => [
        O(l(ym), { class: "h-4 w-4" })
      ]),
      a[0] || (a[0] = _e("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), N5 = /* @__PURE__ */ _({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      class: X(l(F)("inline-flex items-center gap-1.5", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), L5 = /* @__PURE__ */ _({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), {
      as: n.as,
      "as-child": n.asChild,
      class: X(l(F)("hover:text-foreground transition-colors", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), z5 = /* @__PURE__ */ _({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ol", {
      class: X(
        l(F)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), H5 = /* @__PURE__ */ _({
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
      class: X(l(F)("text-foreground font-normal", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), U5 = /* @__PURE__ */ _({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: X(l(F)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      x(n.$slots, "default", {}, () => [
        O(l(Vd))
      ])
    ], 2));
  }
}), An = /* @__PURE__ */ _({
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
      as: n.as,
      "as-child": n.asChild,
      class: X(l(F)(l(Ca)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default"),
        n.loading ? (g(), w(l(b2), {
          key: 0,
          class: X(l(oT)({ size: n.size }))
        }, null, 8, ["class"])) : se("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), oT = kn("animate-spin", {
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
}), Ca = kn(
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
), W5 = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(
        l(F)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), K5 = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(F)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), j5 = /* @__PURE__ */ _({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("h3", {
      class: X(l(F)("text-2xl font-semibold leading-none tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Y5 = /* @__PURE__ */ _({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("p", {
      class: X(l(F)("text-muted-foreground text-sm", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), q5 = /* @__PURE__ */ _({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(F)("p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), G5 = /* @__PURE__ */ _({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(F)("flex items-center p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), X5 = /* @__PURE__ */ _({
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
  setup(e, { emit: t }) {
    const o = Sn(e, t);
    return (r, s) => (g(), w(l(Kk), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J5 = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = wa(n);
    return (o, r) => (g(), w(l(Ak), B(l(a), {
      class: l(F)("w-[200px]", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z5 = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Xk), B(n.value, {
      class: l(F)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q5 = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(eS), B(n.value, {
      class: l(F)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", t.class)
    }), {
      default: y(() => [
        a.heading ? (g(), w(l(uS), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            ae(de(a.heading), 1)
          ]),
          _: 1
        })) : se("", !0),
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = Sn(o, a);
    return (s, i) => (g(), w(l(nS), B(l(r), {
      class: l(F)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = Sn(o, a);
    return (s, i) => (g(), w(l(iS), B(l(r), {
      class: l(F)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n6 = /* @__PURE__ */ _({
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
  setup(e, { emit: t }) {
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = Sn(o, a);
    return (s, i) => (g(), w(l(dS), null, {
      default: y(() => [
        O(l(Gk), B(l(r), {
          class: l(F)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n.class)
        }), {
          default: y(() => [
            O(l(pS), null, {
              default: y(() => [
                x(s.$slots, "default")
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
}), a6 = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(cS), B(n.value, {
      class: l(F)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rT = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, o6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(Ev), B({
      class: l(F)("p-3", n.class)
    }, l(r)), {
      default: y(({ grid: u, weekDays: d }) => [
        O(l(jm), null, {
          default: y(() => [
            O(l(iT)),
            O(l(Ym)),
            O(l(sT))
          ]),
          _: 1
        }),
        _e("div", rT, [
          (g(!0), L(le, null, Ae(u, (c) => (g(), w(l(Hm), {
            key: c.value.toString()
          }, {
            default: y(() => [
              O(l(Wm), null, {
                default: y(() => [
                  O(l(Is), null, {
                    default: y(() => [
                      (g(!0), L(le, null, Ae(d, (f) => (g(), w(l(Km), { key: f }, {
                        default: y(() => [
                          ae(de(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(Um), null, {
                default: y(() => [
                  (g(!0), L(le, null, Ae(c.rows, (f, p) => (g(), w(l(Is), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(le, null, Ae(f, (h) => (g(), w(l(Lm), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l(zm), {
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
}), Lm = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Q1), B({
      class: l(F)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zm = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(sw), B({
      class: l(F)(
        l(Ca)({ variant: "ghost" }),
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
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hm = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Z1), B({
      class: l(F)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Um = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(ow), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wm = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(aw), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Is = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(rw), B({
      class: l(F)("flex", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Km = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(ew), B({
      class: l(F)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jm = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(X1), B({
      class: l(F)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ym = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(J1), B({
      class: l(F)("text-text text-sm font-medium", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        x(o.$slots, "default", { headingValue: s }, () => [
          ae(de(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sT = /* @__PURE__ */ _({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(tw), B({
      class: l(F)(
        l(Ca)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => r[0] || (r[0] = [
        ae(" > ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), iT = /* @__PURE__ */ _({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(nw), B({
      class: l(F)(
        l(Ca)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => r[0] || (r[0] = [
        ae(" < ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), au = /* @__PURE__ */ _({
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
    const o = pe(e, t);
    return (r, s) => (g(), w(l(lC), J(Z(l(o))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), ou = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(BC), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ru = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(cC), B(l(a), {
      class: l(F)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(OC), { "as-child": "" }, {
          default: y(() => [
            O(l(ki), {
              class: X(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), su = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(fC), null, {
      default: y(() => [
        O(l(_C), B({ ...l(r), ...s.$attrs }, {
          class: l(F)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            s.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            O(l(uT)),
            O(l(AC), {
              class: X(
                l(F)(
                  "p-1",
                  s.position === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
                )
              )
            }, {
              default: y(() => [
                x(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            O(l(dT))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), r6 = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(TC), B({
      class: l(F)("w-full p-1", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lT = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, iu = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(CC), B(l(a), {
      class: l(F)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: y(() => [
        _e("span", lT, [
          O(l($C), null, {
            default: y(() => [
              O(l(Fd), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        O(l(qv), null, {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s6 = /* @__PURE__ */ _({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(qv), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i6 = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(EC), {
      class: X(l(F)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), l6 = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(wC), B(n.value, {
      class: l(F)("bg-muted -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), uT = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(DC), B(l(a), {
      class: l(F)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(v2), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dT = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(MC), B(l(a), {
      class: l(F)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(ki), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cT = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, fT = /* @__PURE__ */ _({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return _s(gn());
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
    const n = e, a = t, o = S(() => {
      const { class: u, placeholder: d, ...c } = n;
      return c;
    }), r = Wd(n, "modelValue", a, {
      passive: !0,
      defaultValue: _s(gn())
    }), s = pe(o, a), i = hv("en");
    return (u, d) => (g(), w(l(Ev), B({
      placeholder: l(r),
      "onUpdate:placeholder": d[2] || (d[2] = (c) => lt(r) ? r.value = c : null)
    }, l(s), {
      class: l(F)("rounded-md border p-3", n.class)
    }), {
      default: y(({ date: c, grid: f, weekDays: p }) => [
        O(l(jm), null, {
          default: y(() => [
            O(l(Ym), { class: "flex w-full items-center justify-between gap-2" }, {
              default: y(() => [
                O(l(au), {
                  "default-value": l(r).month.toString(),
                  "onUpdate:modelValue": d[0] || (d[0] = (h) => {
                    var v;
                    !h || !l(r) || Number(h) !== ((v = l(r)) == null ? void 0 : v.month) && (r.value = l(r).set({
                      month: Number(h)
                    }));
                  })
                }, {
                  default: y(() => [
                    O(l(ru), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: y(() => [
                        O(l(ou), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    O(l(su), { class: "max-h-[200px]" }, {
                      default: y(() => [
                        (g(!0), L(le, null, Ae(l(_b)({ dateObj: c }), (h) => (g(), w(l(iu), {
                          key: h.toString(),
                          value: h.month.toString()
                        }, {
                          default: y(() => [
                            ae(de(l(i).custom(l(wt)(h), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                O(l(au), {
                  "default-value": l(r).year.toString(),
                  "onUpdate:modelValue": d[1] || (d[1] = (h) => {
                    var v;
                    !h || !l(r) || Number(h) !== ((v = l(r)) == null ? void 0 : v.year) && (r.value = l(r).set({
                      year: Number(h)
                    }));
                  })
                }, {
                  default: y(() => [
                    O(l(ru), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: y(() => [
                        O(l(ou), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    O(l(su), { class: "max-h-[200px]" }, {
                      default: y(() => [
                        (g(!0), L(le, null, Ae(l(bb)({ dateObj: c, startIndex: -100, endIndex: 10 }), (h) => (g(), w(l(iu), {
                          key: h.toString(),
                          value: h.year.toString()
                        }, {
                          default: y(() => [
                            ae(de(h.year), 1)
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
        _e("div", cT, [
          (g(!0), L(le, null, Ae(f, (h) => (g(), w(l(Hm), {
            key: h.value.toString()
          }, {
            default: y(() => [
              O(l(Wm), null, {
                default: y(() => [
                  O(l(Is), null, {
                    default: y(() => [
                      (g(!0), L(le, null, Ae(p, (v) => (g(), w(l(Km), { key: v }, {
                        default: y(() => [
                          ae(de(v), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(Um), { class: "grid" }, {
                default: y(() => [
                  (g(!0), L(le, null, Ae(h.rows, (v, m) => (g(), w(l(Is), {
                    key: `weekDate-${m}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(le, null, Ae(v, (b) => (g(), w(l(Lm), {
                        key: b.toString(),
                        date: b
                      }, {
                        default: y(() => [
                          O(l(zm), {
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
}), pT = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(_w), B(l(r), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        n.class
      ]
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qm = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(_v), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u6 = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(br), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hT = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(wv), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vT = /* @__PURE__ */ _({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(F)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), mT = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(kv), B(l(a), {
      class: l(F)("text-heading text-2xl font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gT = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Sv), B(l(a), {
      class: l(F)("text-sub-text text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gm = /* @__PURE__ */ _({
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
    const n = t, a = e, o = S(() => {
      const { class: s, ...i } = a;
      return i;
    }), r = pe(o, n);
    return (s, i) => (g(), w(l(bd), null, {
      default: y(() => [
        O(l($d), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(Cd), B(l(r), {
          class: l(F)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            a.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default"),
            O(l(br), {
              onClick: i[0] || (i[0] = (u) => n("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: y(() => [
                O(l(Si), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = _e("span", { class: "sr-only" }, "Close", -1))
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
}), d6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(bd), null, {
      default: y(() => [
        O(l($d), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: y(() => [
            O(l(Cd), B({
              class: l(F)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                n.class
              )
            }, l(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, c = d.target;
                (d.offsetX > c.clientWidth || d.offsetY > c.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                x(s.$slots, "default"),
                O(l(br), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: y(() => [
                    O(l(Si), { class: "size-4" }),
                    i[1] || (i[1] = _e("span", { class: "sr-only" }, "Close", -1))
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
}), yT = /* @__PURE__ */ _({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(
        l(F)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), c6 = /* @__PURE__ */ _({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(qm), J(Z(l(o))), {
      default: y(() => [
        O(l(Gm), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            O(pT, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
                x(r.$slots, "default")
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
}), f6 = /* @__PURE__ */ _({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Ew), B(n.value, {
      class: l(F)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p6 = /* @__PURE__ */ _({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Cw), B(n.value, {
      class: l(F)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: y(() => [
        a.heading ? (g(), w(l($w), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: y(() => [
            ae(de(a.heading), 1)
          ]),
          _: 1
        })) : se("", !0),
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bT = { class: "flex items-center border-b px-3" }, h6 = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), L("div", bT, [
      O(l($2), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      O(l(ww), B({ ...l(a), ...o.$attrs }, {
        "auto-focus": "",
        class: l(F)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), v6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(Bw), B(l(r), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _T = { role: "presentation" }, m6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(Tw), B(l(r), {
      class: l(F)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        _e("div", _T, [
          x(s.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g6 = /* @__PURE__ */ _({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Ow), B(n.value, {
      class: l(F)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y6 = /* @__PURE__ */ _({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: X(l(F)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), [wT, xT] = p0("DraggableRoot"), b6 = /* @__PURE__ */ _({
  __name: "DraggableArea",
  props: {
    class: {},
    data: {}
  },
  emits: ["drop"],
  setup(e, { emit: t }) {
    const n = e, a = $T();
    xT(a);
    const o = t, r = (u) => o("drop", u), s = (u) => {
      u.preventDefault(), a.draggedToArea.value = n.data;
    }, i = () => a.draggedFromArea.value = n.data;
    return (u, d) => (g(), L("div", {
      class: X(n.class),
      onDrop: r,
      onDragstart: i,
      onDragover: s
    }, [
      x(u.$slots, "default")
    ], 34));
  }
}), _6 = /* @__PURE__ */ _({
  __name: "DraggableItem",
  props: {
    class: {},
    data: {},
    index: {}
  },
  emits: ["dragstart", "dragend", "dragover"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = wT(), r = (u) => {
      o.draggableItem.value = n.data, a("dragstart", {
        event: u,
        data: n.data
      });
    }, s = () => {
      o.draggableIndex.value = n.index, a("dragover", n.index);
    }, i = (u) => {
      o.draggableItem.value = null, o.draggableIndex.value = null, a("dragend", u);
    };
    return (u, d) => (g(), L("div", {
      class: X(n.class),
      draggable: "true",
      onDragstart: r,
      onDragend: i,
      onDragover: s
    }, [
      x(u.$slots, "default", { item: u.data })
    ], 34));
  }
}), Xm = M(null), Jm = M(null), Zm = M(null), Qm = M(null), CT = () => {
  Xm.value = null, Jm.value = null, Zm.value = null, Qm.value = null;
};
function $T() {
  return {
    draggedFromArea: Xm,
    draggedToArea: Jm,
    draggableItem: Zm,
    draggableIndex: Qm,
    resetDraggable: CT
  };
}
const kT = /* @__PURE__ */ _({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(fx), J(Z(l(o))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), ST = /* @__PURE__ */ _({
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
        l(F)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          n.inset && "pl-8",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), TT = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = ye(e);
    return (a, o) => (g(), w(l(px), B({ class: "outline-hidden" }, l(n)), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ET = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(hx), null, {
      default: y(() => [
        O(l(vx), B(l(r), {
          class: l(F)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default")
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
    return (n, a) => (g(), w(l(mx), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), x6 = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(_x), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C6 = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Hv), B(l(a), {
      class: l(F)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        o.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AT = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(ST, {
      class: X(t.class)
    }, {
      default: y(() => [
        O(l(Hv), B(l(a), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), DT = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, $6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(yx), B(l(r), {
      class: l(F)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _e("span", DT, [
          O(l(Uv), null, {
            default: y(() => [
              O(l(Fd), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MT = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, k6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(wx), B(l(r), {
      class: l(F)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _e("span", MT, [
          O(l(Uv), null, {
            default: y(() => [
              O(l(y2), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S6 = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: X(l(F)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), T6 = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(gx), B(n.value, {
      class: l(F)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), E6 = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(bx), B(l(a), {
      class: l(F)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A6 = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(xx), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D6 = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l($x), B(l(a), {
      class: l(F)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(Vd), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(Cx), B(l(r), {
      class: l(F)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B6 = /* @__PURE__ */ _({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty",
      class: X(l(F)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), O6 = /* @__PURE__ */ _({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-content",
      class: X(l(F)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), P6 = /* @__PURE__ */ _({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("p", {
      "data-slot": "empty-description",
      class: X(l(F)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.class
      ))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), I6 = /* @__PURE__ */ _({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-header",
      class: X(l(F)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.class
      ))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), BT = ["data-variant"], R6 = /* @__PURE__ */ _({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-icon",
      "data-variant": n.variant,
      class: X(l(F)(l(OT)({ variant: n.variant }), t.class))
    }, [
      x(n.$slots, "default")
    ], 10, BT));
  }
}), F6 = /* @__PURE__ */ _({
  __name: "EmptyTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "empty-title",
      class: X(l(F)("text-lg font-medium tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), OT = kn(
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
), PT = { class: "text-xs text-slate-600 dark:text-slate-300" }, IT = /* @__PURE__ */ _({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", PT, "Characters: " + de(t.count), 1));
  }
}), $r = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, RT = {}, FT = { class: "text-sm text-slate-400 dark:text-slate-500" };
function VT(e, t) {
  return g(), L("div", FT, [
    x(e.$slots, "default")
  ]);
}
const NT = /* @__PURE__ */ $r(RT, [["render", VT]]), LT = { class: "text-sm text-red-600 dark:text-red-400" }, zT = /* @__PURE__ */ _({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => ha((g(), L("div", null, [
      _e("p", LT, de(t.error), 1)
    ], 512)), [
      [di, t.error]
    ]);
  }
}), HT = {}, UT = { class: "w-full space-y-4 p-1.5" };
function WT(e, t) {
  return g(), L("div", UT, [
    x(e.$slots, "default")
  ]);
}
const V6 = /* @__PURE__ */ $r(HT, [["render", WT]]), KT = {}, jT = { class: "my-4" };
function YT(e, t) {
  return g(), L("div", jT, [
    x(e.$slots, "default")
  ]);
}
const qT = /* @__PURE__ */ $r(KT, [["render", YT]]), GT = { class: "grid gap-4 md:grid-cols-2" }, N6 = /* @__PURE__ */ _({
  __name: "FormGrid",
  setup(e) {
    return (t, n) => (g(), w(qT, null, {
      default: y(() => [
        _e("div", GT, [
          x(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Kd = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    id: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(kx), B(n.value, {
      class: l(F)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XT = { class: "relative" }, JT = {
  name: "Base",
  inheritAttrs: !1
}, wo = /* @__PURE__ */ _({
  ...JT,
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
        t.label && t.showLabel ? (g(), w(l(Kd), {
          key: 0,
          id: t.id
        }, {
          default: y(() => [
            ae(de(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : se("", !0),
        _e("div", XT, [
          x(t.$slots, "default"),
          t.showCharacterCount ? (g(), w(l(IT), {
            key: 0,
            count: (a = t.modelValue) == null ? void 0 : a.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : se("", !0)
        ]),
        O(l(NT), { class: "mt-[2px]" }, {
          default: y(() => [
            ae(de(t.description), 1)
          ]),
          _: 1
        }),
        O(l(zT), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
}), ZT = { class: "flex gap-2" }, L6 = /* @__PURE__ */ _({
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
    const n = t, o = M(e.modelValue);
    return te(o, (r) => {
      n("update:modelValue", r);
    }), (r, s) => (g(), w(l(wo), J(Z(r.$props)), {
      default: y(() => [
        _e("div", ZT, [
          O(l(dw), {
            id: r.id,
            checked: o.value,
            "onUpdate:checked": s[0] || (s[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: y(() => [
              O(l(cw), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: y(() => [
                  O(l(Fd), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          r.text ? (g(), w(l(Kd), {
            key: 0,
            id: r.id,
            class: "my-auto"
          }, {
            default: y(() => [
              ae(de(r.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : se("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), QT = /* @__PURE__ */ _({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(Ix), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eE = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Rx), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tE = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(Fx), null, {
      default: y(() => [
        O(l(Lx), B({ ...l(r), ...s.$attrs }, {
          class: l(F)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            n.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), z6 = /* @__PURE__ */ _({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = new zt("en-US", {
      dateStyle: "long"
    }), r = M(a.modelValue);
    return te(r, () => {
      n("update:modelValue", r.value);
    }), ue(() => {
      if (a.defaultValue)
        r.value = a.defaultValue;
      else if (r.value === null) {
        const s = /* @__PURE__ */ new Date();
        r.value = new Ne(
          s.getFullYear(),
          s.getMonth() + 1,
          s.getDate()
        );
      }
    }), (s, i) => (g(), w(l(wo), J(Z(s.$props)), {
      default: y(() => [
        O(l(QT), null, {
          default: y(() => [
            O(l(eE), { "as-child": "" }, {
              default: y(() => [
                O(l(An), {
                  variant: "outline",
                  class: X(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: y(() => [
                    O(l(p2), { class: "mr-2 size-4" }),
                    ae(" " + de(r.value ? l(o).format(r.value.toDate(l(gn)())) : s.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            O(l(tE), { class: "w-auto p-0" }, {
              default: y(() => [
                O(l(fT), {
                  modelValue: r.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u),
                  "default-value": s.defaultValue,
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
}), nE = { class: "space-y-2" }, aE = { class: "flex items-center gap-2" }, oE = ["src"], rE = ["accept"], H6 = /* @__PURE__ */ _({
  __name: "ImageUpload",
  props: /* @__PURE__ */ bs({
    defaultImage: {},
    label: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = M(null), a = M(t.defaultImage ?? null), o = (i) => {
      var c;
      const d = (c = i.target.files) == null ? void 0 : c[0];
      d && (a.value = URL.createObjectURL(d), console.log(d), s.value = d);
    }, r = () => {
      var i;
      (i = n.value) == null || i.click();
    }, s = ju(e, "modelValue");
    return Dt("container", "md"), (i, u) => (g(), L("div", nE, [
      O(l(Kd), null, {
        default: y(() => [
          ae(de(i.label), 1)
        ]),
        _: 1
      }),
      _e("div", aE, [
        x(i.$slots, "image", { curImage: a.value }, () => [
          a.value ? (g(), L("img", {
            key: 0,
            src: a.value,
            alt: "Uploaded preview",
            class: "size-32 rounded shadow"
          }, null, 8, oE)) : se("", !0)
        ]),
        O(l(An), {
          onClick: Pe(r, ["prevent"]),
          variant: "outline"
        }, {
          default: y(() => u[0] || (u[0] = [
            ae("Upload")
          ])),
          _: 1,
          __: [0]
        }),
        _e("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: i.accept,
          onChange: o,
          class: "hidden"
        }, null, 40, rE)
      ])
    ]));
  }
}), sE = ["disabled", "placeholder", "required", "type"], iE = /* @__PURE__ */ _({
  __name: "Input",
  props: /* @__PURE__ */ bs({
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
    const t = ju(e, "modelValue");
    return (n, a) => (g(), w(l(wo), J(Z(n.$props)), {
      default: y(() => [
        ha(_e("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
          disabled: n.disabled,
          placeholder: n.placeholder,
          required: n.required,
          type: n.type,
          class: X(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !n.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": n.error
          }])
        }, null, 10, sE), [
          [d0, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), U6 = /* @__PURE__ */ _({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = S(() => a.placeholder ?? "Select an option..."), r = M(
      a.modelValue ? a.options.find((s) => s === a.modelValue) : null
    );
    return te(r, () => {
      n("update:modelValue", r.value);
    }), (s, i) => (g(), w(l(wo), J(Z(s.$props)), {
      default: y(() => [
        O(l(au), {
          modelValue: r.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u)
        }, {
          default: y(({ open: u }) => [
            O(l(ru), { open: u }, {
              default: y(() => [
                O(l(ou), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            O(l(su), null, {
              default: y(() => [
                (g(!0), L(le, null, Ae(s.options, (d) => (g(), w(l(iu), { value: d }, {
                  default: y(() => [
                    ae(de(d), 1)
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
}), lE = ["placeholder"], W6 = /* @__PURE__ */ _({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Wd(e, "modelValue", t, {
      passive: !0
    });
    return (r, s) => (g(), w(l(wo), J(Z(r.$props)), {
      default: y(() => [
        ha(_e("textarea", {
          "onUpdate:modelValue": s[0] || (s[0] = (i) => lt(o) ? o.value = i : null),
          placeholder: r.placeholder,
          class: X(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !r.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": r.error
          }])
        }, null, 10, lE), [
          [c0, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), uE = /* @__PURE__ */ _({
  __name: "Toggle",
  props: /* @__PURE__ */ bs({
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
  emits: /* @__PURE__ */ bs(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = t, a = e, o = ju(e, "modelValue");
    te(o, () => {
      n("update:modelValue", o.value);
    });
    const r = S(() => {
      const { class: i, ...u } = a;
      return u;
    }), s = pe(r, n);
    return (i, u) => (g(), w(l(wo), J(Z(i.$props)), {
      default: y(() => [
        O(l(a$), B({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (d) => o.value = d)
        }, l(s), {
          class: l(F)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            a.class
          )
        }), {
          default: y(({ checked: d }) => [
            O(l(o$), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: y(() => [
                d ? x(i.$slots, "checked", { key: 0 }) : se("", !0),
                d ? se("", !0) : x(i.$slots, "not-checked", { key: 1 })
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
});
var lu = "http://www.w3.org/1999/xhtml";
const Bf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: lu,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Oi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Bf.hasOwnProperty(t) ? { space: Bf[t], local: e } : e;
}
function dE(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === lu && t.documentElement.namespaceURI === lu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function cE(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function eg(e) {
  var t = Oi(e);
  return (t.local ? cE : dE)(t);
}
function fE() {
}
function jd(e) {
  return e == null ? fE : function() {
    return this.querySelector(e);
  };
}
function pE(e) {
  typeof e != "function" && (e = jd(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = new Array(s), u, d, c = 0; c < s; ++c)
      (u = r[c]) && (d = e.call(u, u.__data__, c, r)) && ("__data__" in u && (d.__data__ = u.__data__), i[c] = d);
  return new vt(a, this._parents);
}
function hE(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function vE() {
  return [];
}
function tg(e) {
  return e == null ? vE : function() {
    return this.querySelectorAll(e);
  };
}
function mE(e) {
  return function() {
    return hE(e.apply(this, arguments));
  };
}
function gE(e) {
  typeof e == "function" ? e = mE(e) : e = tg(e);
  for (var t = this._groups, n = t.length, a = [], o = [], r = 0; r < n; ++r)
    for (var s = t[r], i = s.length, u, d = 0; d < i; ++d)
      (u = s[d]) && (a.push(e.call(u, u.__data__, d, s)), o.push(u));
  return new vt(a, o);
}
function ng(e) {
  return function() {
    return this.matches(e);
  };
}
function ag(e) {
  return function(t) {
    return t.matches(e);
  };
}
var yE = Array.prototype.find;
function bE(e) {
  return function() {
    return yE.call(this.children, e);
  };
}
function _E() {
  return this.firstElementChild;
}
function wE(e) {
  return this.select(e == null ? _E : bE(typeof e == "function" ? e : ag(e)));
}
var xE = Array.prototype.filter;
function CE() {
  return Array.from(this.children);
}
function $E(e) {
  return function() {
    return xE.call(this.children, e);
  };
}
function kE(e) {
  return this.selectAll(e == null ? CE : $E(typeof e == "function" ? e : ag(e)));
}
function SE(e) {
  typeof e != "function" && (e = ng(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = [], u, d = 0; d < s; ++d)
      (u = r[d]) && e.call(u, u.__data__, d, r) && i.push(u);
  return new vt(a, this._parents);
}
function og(e) {
  return new Array(e.length);
}
function TE() {
  return new vt(this._enter || this._groups.map(og), this._parents);
}
function Rs(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Rs.prototype = {
  constructor: Rs,
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
function EE(e) {
  return function() {
    return e;
  };
}
function AE(e, t, n, a, o, r) {
  for (var s = 0, i, u = t.length, d = r.length; s < d; ++s)
    (i = t[s]) ? (i.__data__ = r[s], a[s] = i) : n[s] = new Rs(e, r[s]);
  for (; s < u; ++s)
    (i = t[s]) && (o[s] = i);
}
function DE(e, t, n, a, o, r, s) {
  var i, u, d = /* @__PURE__ */ new Map(), c = t.length, f = r.length, p = new Array(c), h;
  for (i = 0; i < c; ++i)
    (u = t[i]) && (p[i] = h = s.call(u, u.__data__, i, t) + "", d.has(h) ? o[i] = u : d.set(h, u));
  for (i = 0; i < f; ++i)
    h = s.call(e, r[i], i, r) + "", (u = d.get(h)) ? (a[i] = u, u.__data__ = r[i], d.delete(h)) : n[i] = new Rs(e, r[i]);
  for (i = 0; i < c; ++i)
    (u = t[i]) && d.get(p[i]) === u && (o[i] = u);
}
function ME(e) {
  return e.__data__;
}
function BE(e, t) {
  if (!arguments.length) return Array.from(this, ME);
  var n = t ? DE : AE, a = this._parents, o = this._groups;
  typeof e != "function" && (e = EE(e));
  for (var r = o.length, s = new Array(r), i = new Array(r), u = new Array(r), d = 0; d < r; ++d) {
    var c = a[d], f = o[d], p = f.length, h = OE(e.call(c, c && c.__data__, d, a)), v = h.length, m = i[d] = new Array(v), b = s[d] = new Array(v), $ = u[d] = new Array(p);
    n(c, f, m, b, $, h, t);
    for (var k = 0, C = 0, E, T; k < v; ++k)
      if (E = m[k]) {
        for (k >= C && (C = k + 1); !(T = b[C]) && ++C < v; ) ;
        E._next = T || null;
      }
  }
  return s = new vt(s, a), s._enter = i, s._exit = u, s;
}
function OE(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function PE() {
  return new vt(this._exit || this._groups.map(og), this._parents);
}
function IE(e, t, n) {
  var a = this.enter(), o = this, r = this.exit();
  return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? r.remove() : n(r), a && o ? a.merge(o).order() : o;
}
function RE(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, a = t._groups, o = n.length, r = a.length, s = Math.min(o, r), i = new Array(o), u = 0; u < s; ++u)
    for (var d = n[u], c = a[u], f = d.length, p = i[u] = new Array(f), h, v = 0; v < f; ++v)
      (h = d[v] || c[v]) && (p[v] = h);
  for (; u < o; ++u)
    i[u] = n[u];
  return new vt(i, this._parents);
}
function FE() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var a = e[t], o = a.length - 1, r = a[o], s; --o >= 0; )
      (s = a[o]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function VE(e) {
  e || (e = NE);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, a = n.length, o = new Array(a), r = 0; r < a; ++r) {
    for (var s = n[r], i = s.length, u = o[r] = new Array(i), d, c = 0; c < i; ++c)
      (d = s[c]) && (u[c] = d);
    u.sort(t);
  }
  return new vt(o, this._parents).order();
}
function NE(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function LE() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function zE() {
  return Array.from(this);
}
function HE() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length; o < r; ++o) {
      var s = a[o];
      if (s) return s;
    }
  return null;
}
function UE() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function WE() {
  return !this.node();
}
function KE(e) {
  for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
    for (var o = t[n], r = 0, s = o.length, i; r < s; ++r)
      (i = o[r]) && e.call(i, i.__data__, r, o);
  return this;
}
function jE(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function YE(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function qE(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function GE(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function XE(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function JE(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ZE(e, t) {
  var n = Oi(e);
  if (arguments.length < 2) {
    var a = this.node();
    return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n);
  }
  return this.each((t == null ? n.local ? YE : jE : typeof t == "function" ? n.local ? JE : XE : n.local ? GE : qE)(n, t));
}
function rg(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function QE(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function eA(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function tA(e, t, n) {
  return function() {
    var a = t.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, n);
  };
}
function nA(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? QE : typeof t == "function" ? tA : eA)(e, t, n ?? "")) : eo(this.node(), e);
}
function eo(e, t) {
  return e.style.getPropertyValue(t) || rg(e).getComputedStyle(e, null).getPropertyValue(t);
}
function aA(e) {
  return function() {
    delete this[e];
  };
}
function oA(e, t) {
  return function() {
    this[e] = t;
  };
}
function rA(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function sA(e, t) {
  return arguments.length > 1 ? this.each((t == null ? aA : typeof t == "function" ? rA : oA)(e, t)) : this.node()[e];
}
function sg(e) {
  return e.trim().split(/^|\s+/);
}
function Yd(e) {
  return e.classList || new ig(e);
}
function ig(e) {
  this._node = e, this._names = sg(e.getAttribute("class") || "");
}
ig.prototype = {
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
function lg(e, t) {
  for (var n = Yd(e), a = -1, o = t.length; ++a < o; ) n.add(t[a]);
}
function ug(e, t) {
  for (var n = Yd(e), a = -1, o = t.length; ++a < o; ) n.remove(t[a]);
}
function iA(e) {
  return function() {
    lg(this, e);
  };
}
function lA(e) {
  return function() {
    ug(this, e);
  };
}
function uA(e, t) {
  return function() {
    (t.apply(this, arguments) ? lg : ug)(this, e);
  };
}
function dA(e, t) {
  var n = sg(e + "");
  if (arguments.length < 2) {
    for (var a = Yd(this.node()), o = -1, r = n.length; ++o < r; ) if (!a.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? uA : t ? iA : lA)(n, t));
}
function cA() {
  this.textContent = "";
}
function fA(e) {
  return function() {
    this.textContent = e;
  };
}
function pA(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hA(e) {
  return arguments.length ? this.each(e == null ? cA : (typeof e == "function" ? pA : fA)(e)) : this.node().textContent;
}
function vA() {
  this.innerHTML = "";
}
function mA(e) {
  return function() {
    this.innerHTML = e;
  };
}
function gA(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function yA(e) {
  return arguments.length ? this.each(e == null ? vA : (typeof e == "function" ? gA : mA)(e)) : this.node().innerHTML;
}
function bA() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _A() {
  return this.each(bA);
}
function wA() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xA() {
  return this.each(wA);
}
function CA(e) {
  var t = typeof e == "function" ? e : eg(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function $A() {
  return null;
}
function kA(e, t) {
  var n = typeof e == "function" ? e : eg(e), a = t == null ? $A : typeof t == "function" ? t : jd(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function SA() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function TA() {
  return this.each(SA);
}
function EA() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function AA() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function DA(e) {
  return this.select(e ? AA : EA);
}
function MA(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function BA(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function OA(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", a = t.indexOf(".");
    return a >= 0 && (n = t.slice(a + 1), t = t.slice(0, a)), { type: t, name: n };
  });
}
function PA(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, a = -1, o = t.length, r; n < o; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++a] = r;
      ++a ? t.length = a : delete this.__on;
    }
  };
}
function IA(e, t, n) {
  return function() {
    var a = this.__on, o, r = BA(t);
    if (a) {
      for (var s = 0, i = a.length; s < i; ++s)
        if ((o = a[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = r, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), o = { type: e.type, name: e.name, value: t, listener: r, options: n }, a ? a.push(o) : this.__on = [o];
  };
}
function RA(e, t, n) {
  var a = OA(e + ""), o, r = a.length, s;
  if (arguments.length < 2) {
    var i = this.node().__on;
    if (i) {
      for (var u = 0, d = i.length, c; u < d; ++u)
        for (o = 0, c = i[u]; o < r; ++o)
          if ((s = a[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (i = t ? IA : PA, o = 0; o < r; ++o) this.each(i(a[o], t, n));
  return this;
}
function dg(e, t, n) {
  var a = rg(e), o = a.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = a.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function FA(e, t) {
  return function() {
    return dg(this, e, t);
  };
}
function VA(e, t) {
  return function() {
    return dg(this, e, t.apply(this, arguments));
  };
}
function NA(e, t) {
  return this.each((typeof t == "function" ? VA : FA)(e, t));
}
function* LA() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length, s; o < r; ++o)
      (s = a[o]) && (yield s);
}
var cg = [null];
function vt(e, t) {
  this._groups = e, this._parents = t;
}
function kr() {
  return new vt([[document.documentElement]], cg);
}
function zA() {
  return this;
}
vt.prototype = kr.prototype = {
  constructor: vt,
  select: pE,
  selectAll: gE,
  selectChild: wE,
  selectChildren: kE,
  filter: SE,
  data: BE,
  enter: TE,
  exit: PE,
  join: IE,
  merge: RE,
  selection: zA,
  order: FE,
  sort: VE,
  call: LE,
  nodes: zE,
  node: HE,
  size: UE,
  empty: WE,
  each: KE,
  attr: ZE,
  style: nA,
  property: sA,
  classed: dA,
  text: hA,
  html: yA,
  raise: _A,
  lower: xA,
  append: CA,
  insert: kA,
  remove: TA,
  clone: DA,
  datum: MA,
  on: RA,
  dispatch: NA,
  [Symbol.iterator]: LA
};
function Bt(e) {
  return typeof e == "string" ? new vt([[document.querySelector(e)]], [document.documentElement]) : new vt([[e]], cg);
}
var Wo;
(function(e) {
  e[e.SVG = 0] = "SVG", e[e.HTML = 1] = "HTML";
})(Wo || (Wo = {}));
var to;
(function(e) {
  e.Fit = "fit", e.Extend = "extend", e.FitWidth = "fit_width";
})(to || (to = {}));
function Ko(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function HA(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function qd(e) {
  let t, n, a;
  e.length !== 2 ? (t = Ko, n = (i, u) => Ko(e(i), u), a = (i, u) => e(i) - u) : (t = e === Ko || e === HA ? e : UA, n = e, a = e);
  function o(i, u, d = 0, c = i.length) {
    if (d < c) {
      if (t(u, u) !== 0) return c;
      do {
        const f = d + c >>> 1;
        n(i[f], u) < 0 ? d = f + 1 : c = f;
      } while (d < c);
    }
    return d;
  }
  function r(i, u, d = 0, c = i.length) {
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
    const f = o(i, u, d, c - 1);
    return f > d && a(i[f - 1], u) > -a(i[f], u) ? f - 1 : f;
  }
  return { left: o, center: s, right: r };
}
function UA() {
  return 0;
}
function fg(e) {
  return e === null ? NaN : +e;
}
const WA = qd(Ko), Pi = WA.right;
qd(fg).center;
function KA(e, t) {
  let n, a;
  for (const o of e)
    o != null && (n === void 0 ? o >= o && (n = a = o) : (n > o && (n = o), a < o && (a = o)));
  return [n, a];
}
class Of extends Map {
  constructor(t, n = qA) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Pf(this, t));
  }
  has(t) {
    return super.has(Pf(this, t));
  }
  set(t, n) {
    return super.set(jA(this, t), n);
  }
  delete(t) {
    return super.delete(YA(this, t));
  }
}
function Pf({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function jA({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function YA({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function qA(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const GA = Math.sqrt(50), XA = Math.sqrt(10), JA = Math.sqrt(2);
function Fs(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), r = a / Math.pow(10, o), s = r >= GA ? 10 : r >= XA ? 5 : r >= JA ? 2 : 1;
  let i, u, d;
  return o < 0 ? (d = Math.pow(10, -o) / s, i = Math.round(e * d), u = Math.round(t * d), i / d < e && ++i, u / d > t && --u, d = -d) : (d = Math.pow(10, o) * s, i = Math.round(e / d), u = Math.round(t / d), i * d < e && ++i, u * d > t && --u), u < i && 0.5 <= n && n < 2 ? Fs(e, t, n * 2) : [i, u, d];
}
function uu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, r, s] = a ? Fs(t, e, n) : Fs(e, t, n);
  if (!(r >= o)) return [];
  const i = r - o + 1, u = new Array(i);
  if (a)
    if (s < 0) for (let d = 0; d < i; ++d) u[d] = (r - d) / -s;
    else for (let d = 0; d < i; ++d) u[d] = (r - d) * s;
  else if (s < 0) for (let d = 0; d < i; ++d) u[d] = (o + d) / -s;
  else for (let d = 0; d < i; ++d) u[d] = (o + d) * s;
  return u;
}
function du(e, t, n) {
  return t = +t, e = +e, n = +n, Fs(e, t, n)[2];
}
function cu(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? du(t, e, n) : du(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function If(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (n < o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function Rf(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (n > o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function ZA(e, t, n = fg) {
  if (!(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[a - 1], a - 1, e);
    var a, o = (a - 1) * t, r = Math.floor(o), s = +n(e[r], r, e), i = +n(e[r + 1], r + 1, e);
    return s + (i - s) * (o - r);
  }
}
function* QA(e) {
  for (const t of e)
    yield* t;
}
function eD(e) {
  return Array.from(QA(e));
}
function tD(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, r = new Array(o); ++a < o; )
    r[a] = e + a * n;
  return r;
}
function nD(e, t) {
  let n = 0;
  if (t === void 0)
    for (let a of e)
      (a = +a) && (n += a);
  else {
    let a = -1;
    for (let o of e)
      (o = +t(o, ++a, e)) && (n += o);
  }
  return n;
}
function aD(e, t, n) {
  var a = {}, o = a.noTrailing, r = o === void 0 ? !1 : o, s = a.noLeading, i = s === void 0 ? !1 : s, u = a.debounceMode, d = u === void 0 ? void 0 : u, c, f = !1, p = 0;
  function h() {
    c && clearTimeout(c);
  }
  function v(b) {
    var $ = b || {}, k = $.upcomingOnly, C = k === void 0 ? !1 : k;
    h(), f = !C;
  }
  function m() {
    for (var b = arguments.length, $ = new Array(b), k = 0; k < b; k++)
      $[k] = arguments[k];
    var C = this, E = Date.now() - p;
    if (f)
      return;
    function T() {
      p = Date.now(), t.apply(C, $);
    }
    function D() {
      c = void 0;
    }
    !i && d && !c && T(), h(), d === void 0 && E > e ? i ? (p = Date.now(), r || (c = setTimeout(d ? D : T, e))) : T() : r !== !0 && (c = setTimeout(d ? D : T, d === void 0 ? e - E : e));
  }
  return m.cancel = v, m;
}
const La = (e) => typeof e == "number", pg = (e) => typeof e == "function", Gd = (e) => Array.isArray(e), oD = (e) => e instanceof Object, Vs = (e) => e.constructor.name !== "Function" && e.constructor.name !== "Object", Ff = (e) => oD(e) && !Gd(e) && !pg(e) && !Vs(e), er = (e, t, n = [], a = /* @__PURE__ */ new Set()) => {
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length)
      return !1;
    if (a.has(e))
      return !0;
    a.add(e);
    for (let o = 0; o < e.length; o++)
      if (!er(e[o], t[o], n, a))
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
    const o = Object.keys(e).filter((s) => !n.includes(s)), r = Object.keys(t).filter((s) => !n.includes(s));
    if (o.length !== r.length)
      return !1;
    if (a.has(e))
      return !0;
    a.add(e);
    for (const s of o)
      if (!er(e[s], t[s], n, a))
        return !1;
    return !0;
  }
  return e === t;
}, fu = (e) => e.flat(), Ns = (e, t = /* @__PURE__ */ new Map()) => {
  if (typeof e != "object" || e === null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Array) {
    const n = [];
    t.set(e, n);
    for (const a of e)
      n.push(t.has(a) ? t.get(a) : Ns(a, t));
    return n;
  }
  if (Vs(e))
    return e;
  if (e instanceof Object) {
    const n = {};
    t.set(e, n);
    const a = e;
    return Object.keys(e).reduce((o, r) => (o[r] = t.has(a[r]) ? t.get(a[r]) : Ns(a[r], t), o), n), n;
  }
  return e;
}, no = (e, t, n = /* @__PURE__ */ new Map()) => {
  if (!e || !t || e === t)
    return e;
  const a = Vs(e) ? e : Ns(e);
  return n.has(t) ? n.get(t) : (n.set(t, a), Object.keys(t).forEach((o) => {
    o === "__proto__" || o === "constructor" || (Ff(e[o]) && Ff(t[o]) ? a[o] = no(e[o], t[o], n) : Vs(t) ? a[o] = t : a[o] = Ns(t[o]));
  }), a);
}, Vf = (e, t, n) => aD(t, e);
function Xd(e, t, n) {
  return pg(t) ? t(e, n) : t;
}
function Jd(e, t, n) {
  return Xd(e, t, n);
}
function tr(e, t, n) {
  return Xd(e, t, n);
}
function Eo(e) {
  return e.filter((t) => t && !La(t));
}
function Pa(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function rD(e, ...t) {
  return e ? Rf(e, (a, o) => Rf(t, (r) => tr(a, r, o))) : void 0;
}
function sD(e, ...t) {
  return e ? If(e, (a, o) => If(t, (r) => tr(a, r, o))) : void 0;
}
function yl(e, ...t) {
  return [rD(e, ...t), sD(e, ...t)];
}
function iD(e, t, n) {
  return e.filter((o, r) => {
    const s = tr(o, n, r);
    return s >= t[0] && s <= t[1];
  });
}
var aa = [], lD = function() {
  return aa.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, uD = function() {
  return aa.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Nf = "ResizeObserver loop completed with undelivered notifications.", dD = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Nf
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Nf), window.dispatchEvent(e);
}, nr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(nr || (nr = {}));
var oa = function(e) {
  return Object.freeze(e);
}, cD = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, oa(this);
  }
  return e;
}(), hg = function() {
  function e(t, n, a, o) {
    return this.x = t, this.y = n, this.width = a, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, oa(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, o = t.top, r = t.right, s = t.bottom, i = t.left, u = t.width, d = t.height;
    return { x: n, y: a, top: o, right: r, bottom: s, left: i, width: u, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Zd = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, vg = function(e) {
  if (Zd(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var o = e, r = o.offsetWidth, s = o.offsetHeight;
  return !(r || s || e.getClientRects().length);
}, Lf = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, fD = function(e) {
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
}, jo = typeof window < "u" ? window : {}, Wr = /* @__PURE__ */ new WeakMap(), zf = /auto|scroll/, pD = /^tb|vertical/, hD = /msie|trident/i.test(jo.navigator && jo.navigator.userAgent), Lt = function(e) {
  return parseFloat(e || "0");
}, za = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new cD((n ? t : e) || 0, (n ? e : t) || 0);
}, Hf = oa({
  devicePixelContentBoxSize: za(),
  borderBoxSize: za(),
  contentBoxSize: za(),
  contentRect: new hg(0, 0, 0, 0)
}), mg = function(e, t) {
  if (t === void 0 && (t = !1), Wr.has(e) && !t)
    return Wr.get(e);
  if (vg(e))
    return Wr.set(e, Hf), Hf;
  var n = getComputedStyle(e), a = Zd(e) && e.ownerSVGElement && e.getBBox(), o = !hD && n.boxSizing === "border-box", r = pD.test(n.writingMode || ""), s = !a && zf.test(n.overflowY || ""), i = !a && zf.test(n.overflowX || ""), u = a ? 0 : Lt(n.paddingTop), d = a ? 0 : Lt(n.paddingRight), c = a ? 0 : Lt(n.paddingBottom), f = a ? 0 : Lt(n.paddingLeft), p = a ? 0 : Lt(n.borderTopWidth), h = a ? 0 : Lt(n.borderRightWidth), v = a ? 0 : Lt(n.borderBottomWidth), m = a ? 0 : Lt(n.borderLeftWidth), b = f + d, $ = u + c, k = m + h, C = p + v, E = i ? e.offsetHeight - C - e.clientHeight : 0, T = s ? e.offsetWidth - k - e.clientWidth : 0, D = o ? b + k : 0, A = o ? $ + C : 0, N = a ? a.width : Lt(n.width) - D - T, R = a ? a.height : Lt(n.height) - A - E, P = N + b + T + k, I = R + $ + E + C, V = oa({
    devicePixelContentBoxSize: za(Math.round(N * devicePixelRatio), Math.round(R * devicePixelRatio), r),
    borderBoxSize: za(P, I, r),
    contentBoxSize: za(N, R, r),
    contentRect: new hg(f, u, N, R)
  });
  return Wr.set(e, V), V;
}, gg = function(e, t, n) {
  var a = mg(e, n), o = a.borderBoxSize, r = a.contentBoxSize, s = a.devicePixelContentBoxSize;
  switch (t) {
    case nr.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case nr.BORDER_BOX:
      return o;
    default:
      return r;
  }
}, vD = /* @__PURE__ */ function() {
  function e(t) {
    var n = mg(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = oa([n.borderBoxSize]), this.contentBoxSize = oa([n.contentBoxSize]), this.devicePixelContentBoxSize = oa([n.devicePixelContentBoxSize]);
  }
  return e;
}(), yg = function(e) {
  if (vg(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, mD = function() {
  var e = 1 / 0, t = [];
  aa.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var i = [];
      s.activeTargets.forEach(function(d) {
        var c = new vD(d.target), f = yg(d.target);
        i.push(c), d.lastReportedSize = gg(d.target, d.observedBox), f < e && (e = f);
      }), t.push(function() {
        s.callback.call(s.observer, i, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var o = a[n];
    o();
  }
  return e;
}, Uf = function(e) {
  aa.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (yg(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, gD = function() {
  var e = 0;
  for (Uf(e); lD(); )
    e = mD(), Uf(e);
  return uD() && dD(), e > 0;
}, bl, bg = [], yD = function() {
  return bg.splice(0).forEach(function(e) {
    return e();
  });
}, bD = function(e) {
  if (!bl) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return yD();
    }).observe(n, a), bl = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  bg.push(e), bl();
}, _D = function(e) {
  bD(function() {
    requestAnimationFrame(e);
  });
}, ss = 0, wD = function() {
  return !!ss;
}, xD = 250, CD = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Wf = [
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
], Kf = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, _l = !1, $D = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = xD), !_l) {
      _l = !0;
      var a = Kf(t);
      _D(function() {
        var o = !1;
        try {
          o = gD();
        } finally {
          if (_l = !1, t = a - Kf(), !wD())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, CD);
    };
    document.body ? n() : jo.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Wf.forEach(function(n) {
      return jo.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Wf.forEach(function(n) {
      return jo.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), pu = new $D(), jf = function(e) {
  !ss && e > 0 && pu.start(), ss += e, !ss && pu.stop();
}, kD = function(e) {
  return !Zd(e) && !fD(e) && getComputedStyle(e).display === "inline";
}, SD = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || nr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = gg(this.target, this.observedBox, !0);
    return kD(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), TD = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Kr = /* @__PURE__ */ new WeakMap(), Yf = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, jr = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new TD(t, n);
    Kr.set(t, a);
  }, e.observe = function(t, n, a) {
    var o = Kr.get(t), r = o.observationTargets.length === 0;
    Yf(o.observationTargets, n) < 0 && (r && aa.push(o), o.observationTargets.push(new SD(n, a && a.box)), jf(1), pu.schedule());
  }, e.unobserve = function(t, n) {
    var a = Kr.get(t), o = Yf(a.observationTargets, n), r = a.observationTargets.length === 1;
    o >= 0 && (r && aa.splice(aa.indexOf(a), 1), a.observationTargets.splice(o, 1), jf(-1));
  }, e.disconnect = function(t) {
    var n = this, a = Kr.get(t);
    a.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), ED = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    jr.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lf(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    jr.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lf(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    jr.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    jr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const AD = globalThis.ResizeObserver || ED, _g = {
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
  sizing: to.Fit,
  width: void 0,
  height: void 0,
  svgDefs: void 0,
  ariaLabel: void 0
};
class ar {
  constructor(t) {
    this._defaultConfig = _g, this._isFirstRender = !0, this._renderAnimationFrameId = null, this._container = t;
    const n = Bt(this._container);
    n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", ar.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", !0), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
  }
  updateContainer(t) {
    var n;
    this.prevConfig = this.config, this.config = no(this._defaultConfig, t), (t == null ? void 0 : t.svgDefs) !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.svgDefs) && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(t.svgDefs));
  }
  // The `_preRender` step should be used to perform some actions before rendering.
  // For example, calculating scales, setting component sizes, etc ...
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _preRender() {
  }
  // The `_render` step should be used to perform the actual rendering
  _render(t) {
    const { config: n } = this;
    Bt(this._container).attr("aria-label", n.ariaLabel), this._isFirstRender = !1;
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
    return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || ar.DEFAULT_CONTAINER_HEIGHT;
  }
  get width() {
    return Pa(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    return Pa(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Number.POSITIVE_INFINITY);
  }
  _removeAllChildren() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
  }
  _onResize() {
    const { config: t } = this;
    (t.sizing === to.Fit || t.sizing === to.FitWidth) && this.render(0);
  }
  _setUpResizeObserver() {
    if (this._resizeObserver)
      return;
    const t = this._container.getBoundingClientRect();
    this._containerSize = { width: t.width, height: t.height }, this._resizeObserver = new AD((n, a) => {
      cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
        const o = this._container.getBoundingClientRect(), r = { width: o.width, height: o.height };
        !er(this._containerSize, r) && r.width && r.height && (this._containerSize = r, this._onResize());
      });
    }), this._resizeObserver.observe(this._container);
  }
  destroy() {
    var t;
    cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (t = this._resizeObserver) === null || t === void 0 || t.disconnect(), this.svg.remove();
  }
}
ar.DEFAULT_CONTAINER_HEIGHT = 300;
function DD(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function MD(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var BD = /* @__PURE__ */ function() {
  function e(n) {
    var a = this;
    this._insertTag = function(o) {
      var r;
      a.tags.length === 0 ? a.insertionPoint ? r = a.insertionPoint.nextSibling : a.prepend ? r = a.container.firstChild : r = a.before : r = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(o, r), a.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(MD(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var r = DD(o);
      try {
        r.insertRule(a, r.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(a));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(a) {
      var o;
      return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), et = "-ms-", Ls = "-moz-", ke = "-webkit-", wg = "comm", Qd = "rule", ec = "decl", OD = "@import", xg = "@keyframes", PD = "@layer", ID = Math.abs, Ii = String.fromCharCode, RD = Object.assign;
function FD(e, t) {
  return Qe(e, 0) ^ 45 ? (((t << 2 ^ Qe(e, 0)) << 2 ^ Qe(e, 1)) << 2 ^ Qe(e, 2)) << 2 ^ Qe(e, 3) : 0;
}
function Cg(e) {
  return e.trim();
}
function VD(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Se(e, t, n) {
  return e.replace(t, n);
}
function hu(e, t) {
  return e.indexOf(t);
}
function Qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function or(e, t, n) {
  return e.slice(t, n);
}
function Wt(e) {
  return e.length;
}
function tc(e) {
  return e.length;
}
function Yr(e, t) {
  return t.push(e), e;
}
function ND(e, t) {
  return e.map(t).join("");
}
var Ri = 1, ao = 1, $g = 0, ut = 0, ze = 0, xo = "";
function Fi(e, t, n, a, o, r, s) {
  return { value: e, root: t, parent: n, type: a, props: o, children: r, line: Ri, column: ao, length: s, return: "" };
}
function Ao(e, t) {
  return RD(Fi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function LD() {
  return ze;
}
function zD() {
  return ze = ut > 0 ? Qe(xo, --ut) : 0, ao--, ze === 10 && (ao = 1, Ri--), ze;
}
function ht() {
  return ze = ut < $g ? Qe(xo, ut++) : 0, ao++, ze === 10 && (ao = 1, Ri++), ze;
}
function qt() {
  return Qe(xo, ut);
}
function is() {
  return ut;
}
function Sr(e, t) {
  return or(xo, e, t);
}
function rr(e) {
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
function kg(e) {
  return Ri = ao = 1, $g = Wt(xo = e), ut = 0, [];
}
function Sg(e) {
  return xo = "", e;
}
function ls(e) {
  return Cg(Sr(ut - 1, vu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function HD(e) {
  for (; (ze = qt()) && ze < 33; )
    ht();
  return rr(e) > 2 || rr(ze) > 3 ? "" : " ";
}
function UD(e, t) {
  for (; --t && ht() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return Sr(e, is() + (t < 6 && qt() == 32 && ht() == 32));
}
function vu(e) {
  for (; ht(); )
    switch (ze) {
      case e:
        return ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && vu(ze);
        break;
      case 40:
        e === 41 && vu(e);
        break;
      case 92:
        ht();
        break;
    }
  return ut;
}
function WD(e, t) {
  for (; ht() && e + ze !== 57; )
    if (e + ze === 84 && qt() === 47)
      break;
  return "/*" + Sr(t, ut - 1) + "*" + Ii(e === 47 ? e : ht());
}
function KD(e) {
  for (; !rr(qt()); )
    ht();
  return Sr(e, ut);
}
function jD(e) {
  return Sg(us("", null, null, null, [""], e = kg(e), 0, [0], e));
}
function us(e, t, n, a, o, r, s, i, u) {
  for (var d = 0, c = 0, f = s, p = 0, h = 0, v = 0, m = 1, b = 1, $ = 1, k = 0, C = "", E = o, T = r, D = a, A = C; b; )
    switch (v = k, k = ht()) {
      case 40:
        if (v != 108 && Qe(A, f - 1) == 58) {
          hu(A += Se(ls(k), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += ls(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += HD(v);
        break;
      case 92:
        A += UD(is() - 1, 7);
        continue;
      case 47:
        switch (qt()) {
          case 42:
          case 47:
            Yr(YD(WD(ht(), is()), t, n), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * m:
        i[d++] = Wt(A) * $;
      case 125 * m:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            $ == -1 && (A = Se(A, /\f/g, "")), h > 0 && Wt(A) - f && Yr(h > 32 ? Gf(A + ";", a, n, f - 1) : Gf(Se(A, " ", "") + ";", a, n, f - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (Yr(D = qf(A, t, n, d, c, o, i, C, E = [], T = [], f), r), k === 123)
              if (c === 0)
                us(A, t, D, D, E, r, f, i, T);
              else
                switch (p === 99 && Qe(A, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    us(e, D, D, a && Yr(qf(e, D, D, 0, 0, o, i, C, o, E = [], f), T), o, T, f, i, a ? E : T);
                    break;
                  default:
                    us(A, D, D, D, [""], T, 0, i, T);
                }
        }
        d = c = h = 0, m = $ = 1, C = A = "", f = s;
        break;
      case 58:
        f = 1 + Wt(A), h = v;
      default:
        if (m < 1) {
          if (k == 123)
            --m;
          else if (k == 125 && m++ == 0 && zD() == 125)
            continue;
        }
        switch (A += Ii(k), k * m) {
          case 38:
            $ = c > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            i[d++] = (Wt(A) - 1) * $, $ = 1;
            break;
          case 64:
            qt() === 45 && (A += ls(ht())), p = qt(), c = f = Wt(C = A += KD(is())), k++;
            break;
          case 45:
            v === 45 && Wt(A) == 2 && (m = 0);
        }
    }
  return r;
}
function qf(e, t, n, a, o, r, s, i, u, d, c) {
  for (var f = o - 1, p = o === 0 ? r : [""], h = tc(p), v = 0, m = 0, b = 0; v < a; ++v)
    for (var $ = 0, k = or(e, f + 1, f = ID(m = s[v])), C = e; $ < h; ++$)
      (C = Cg(m > 0 ? p[$] + " " + k : Se(k, /&\f/g, p[$]))) && (u[b++] = C);
  return Fi(e, t, n, o === 0 ? Qd : i, u, d, c);
}
function YD(e, t, n) {
  return Fi(e, t, n, wg, Ii(LD()), or(e, 2, -2), 0);
}
function Gf(e, t, n, a) {
  return Fi(e, t, n, ec, or(e, 0, a), or(e, a + 1, -1), a);
}
function Ha(e, t) {
  for (var n = "", a = tc(e), o = 0; o < a; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function qD(e, t, n, a) {
  switch (e.type) {
    case PD:
      if (e.children.length) break;
    case OD:
    case ec:
      return e.return = e.return || e.value;
    case wg:
      return "";
    case xg:
      return e.return = e.value + "{" + Ha(e.children, a) + "}";
    case Qd:
      e.value = e.props.join(",");
  }
  return Wt(n = Ha(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function GD(e) {
  var t = tc(e);
  return function(n, a, o, r) {
    for (var s = "", i = 0; i < t; i++)
      s += e[i](n, a, o, r) || "";
    return s;
  };
}
function XD(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function JD(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ZD = function(t, n, a) {
  for (var o = 0, r = 0; o = r, r = qt(), o === 38 && r === 12 && (n[a] = 1), !rr(r); )
    ht();
  return Sr(t, ut);
}, QD = function(t, n) {
  var a = -1, o = 44;
  do
    switch (rr(o)) {
      case 0:
        o === 38 && qt() === 12 && (n[a] = 1), t[a] += ZD(ut - 1, n, a);
        break;
      case 2:
        t[a] += ls(o);
        break;
      case 4:
        if (o === 44) {
          t[++a] = qt() === 58 ? "&\f" : "", n[a] = t[a].length;
          break;
        }
      default:
        t[a] += Ii(o);
    }
  while (o = ht());
  return t;
}, eM = function(t, n) {
  return Sg(QD(kg(t), n));
}, Xf = /* @__PURE__ */ new WeakMap(), tM = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, a = t.parent, o = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xf.get(a)) && !o) {
      Xf.set(t, !0);
      for (var r = [], s = eM(n, r), i = a.props, u = 0, d = 0; u < s.length; u++)
        for (var c = 0; c < i.length; c++, d++)
          t.props[d] = r[u] ? s[u].replace(/&\f/g, i[c]) : i[c] + " " + s[u];
    }
  }
}, nM = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Tg(e, t) {
  switch (FD(e, t)) {
    case 5103:
      return ke + "print-" + e + e;
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
      return ke + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ke + e + Ls + e + et + e + e;
    case 6828:
    case 4268:
      return ke + e + et + e + e;
    case 6165:
      return ke + e + et + "flex-" + e + e;
    case 5187:
      return ke + e + Se(e, /(\w+).+(:[^]+)/, ke + "box-$1$2" + et + "flex-$1$2") + e;
    case 5443:
      return ke + e + et + "flex-item-" + Se(e, /flex-|-self/, "") + e;
    case 4675:
      return ke + e + et + "flex-line-pack" + Se(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ke + e + et + Se(e, "shrink", "negative") + e;
    case 5292:
      return ke + e + et + Se(e, "basis", "preferred-size") + e;
    case 6060:
      return ke + "box-" + Se(e, "-grow", "") + ke + e + et + Se(e, "grow", "positive") + e;
    case 4554:
      return ke + Se(e, /([^-])(transform)/g, "$1" + ke + "$2") + e;
    case 6187:
      return Se(Se(Se(e, /(zoom-|grab)/, ke + "$1"), /(image-set)/, ke + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Se(e, /(image-set\([^]*)/, ke + "$1$`$1");
    case 4968:
      return Se(Se(e, /(.+:)(flex-)?(.*)/, ke + "box-pack:$3" + et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ke + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Se(e, /(.+)-inline(.+)/, ke + "$1$2") + e;
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
      if (Wt(e) - 1 - t > 6) switch (Qe(e, t + 1)) {
        case 109:
          if (Qe(e, t + 4) !== 45) break;
        case 102:
          return Se(e, /(.+:)(.+)-([^]+)/, "$1" + ke + "$2-$3$1" + Ls + (Qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~hu(e, "stretch") ? Tg(Se(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Qe(e, t + 1) !== 115) break;
    case 6444:
      switch (Qe(e, Wt(e) - 3 - (~hu(e, "!important") && 10))) {
        case 107:
          return Se(e, ":", ":" + ke) + e;
        case 101:
          return Se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ke + (Qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ke + "$2$3$1" + et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Qe(e, t + 11)) {
        case 114:
          return ke + e + et + Se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ke + e + et + Se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ke + e + et + Se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ke + e + et + e + e;
  }
  return e;
}
var aM = function(t, n, a, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ec:
      t.return = Tg(t.value, t.length);
      break;
    case xg:
      return Ha([Ao(t, {
        value: Se(t.value, "@", "@" + ke)
      })], o);
    case Qd:
      if (t.length) return ND(t.props, function(r) {
        switch (VD(r, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ha([Ao(t, {
              props: [Se(r, /:(read-\w+)/, ":" + Ls + "$1")]
            })], o);
          case "::placeholder":
            return Ha([Ao(t, {
              props: [Se(r, /:(plac\w+)/, ":" + ke + "input-$1")]
            }), Ao(t, {
              props: [Se(r, /:(plac\w+)/, ":" + Ls + "$1")]
            }), Ao(t, {
              props: [Se(r, /:(plac\w+)/, et + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, oM = [aM], rM = function(t) {
  var n = t.key;
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(m) {
      var b = m.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || oM, r = {}, s, i = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var b = m.getAttribute("data-emotion").split(" "), $ = 1; $ < b.length; $++)
        r[b[$]] = !0;
      i.push(m);
    }
  );
  var u, d = [tM, nM];
  {
    var c, f = [qD, XD(function(m) {
      c.insert(m);
    })], p = GD(d.concat(o, f)), h = function(b) {
      return Ha(jD(b), p);
    };
    u = function(b, $, k, C) {
      c = k, h(b ? b + "{" + $.styles + "}" : $.styles), C && (v.inserted[$.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new BD({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: r,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(i), v;
};
function sM(e) {
  for (var t = 0, n, a = 0, o = e.length; o >= 4; ++a, o -= 4)
    n = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
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
var iM = {
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
}, lM = /[A-Z]|^ms/g, uM = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Eg = function(t) {
  return t.charCodeAt(1) === 45;
}, Jf = function(t) {
  return t != null && typeof t != "boolean";
}, wl = /* @__PURE__ */ JD(function(e) {
  return Eg(e) ? e : e.replace(lM, "-$&").toLowerCase();
}), Zf = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(uM, function(a, o, r) {
          return Nn = {
            name: o,
            styles: r,
            next: Nn
          }, o;
        });
  }
  return iM[t] !== 1 && !Eg(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function zs(e, t, n) {
  if (n == null)
    return "";
  var a = n;
  if (a.__emotion_styles !== void 0)
    return a;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return Nn = {
          name: o.name,
          styles: o.styles,
          next: Nn
        }, o.name;
      var r = n;
      if (r.styles !== void 0) {
        var s = r.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Nn = {
              name: s.name,
              styles: s.styles,
              next: Nn
            }, s = s.next;
        var i = r.styles + ";";
        return i;
      }
      return dM(e, t, n);
    }
  }
  var u = n;
  if (t == null)
    return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function dM(e, t, n) {
  var a = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      a += zs(e, t, n[o]) + ";";
  else
    for (var r in n) {
      var s = n[r];
      if (typeof s != "object") {
        var i = s;
        t != null && t[i] !== void 0 ? a += r + "{" + t[i] + "}" : Jf(i) && (a += wl(r) + ":" + Zf(r, i) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var u = 0; u < s.length; u++)
          Jf(s[u]) && (a += wl(r) + ":" + Zf(r, s[u]) + ";");
      else {
        var d = zs(e, t, s);
        switch (r) {
          case "animation":
          case "animationName": {
            a += wl(r) + ":" + d + ";";
            break;
          }
          default:
            a += r + "{" + d + "}";
        }
      }
    }
  return a;
}
var Qf = /label:\s*([^\s;{]+)\s*(;|$)/g, Nn;
function xl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, o = "";
  Nn = void 0;
  var r = e[0];
  if (r == null || r.raw === void 0)
    a = !1, o += zs(n, t, r);
  else {
    var s = r;
    o += s[0];
  }
  for (var i = 1; i < e.length; i++)
    if (o += zs(n, t, e[i]), a) {
      var u = r;
      o += u[i];
    }
  Qf.lastIndex = 0;
  for (var d = "", c; (c = Qf.exec(o)) !== null; )
    d += "-" + c[1];
  var f = sM(o) + d;
  return {
    name: f,
    styles: o,
    next: Nn
  };
}
function Ag(e, t, n) {
  var a = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (a += o + " ");
  }), a;
}
var cM = function(t, n, a) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, fM = function(t, n, a) {
  cM(t, n);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var r = n;
    do
      t.insert(n === r ? "." + o : "", r, t.sheet, !0), r = r.next;
    while (r !== void 0);
  }
};
function ep(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function tp(e, t, n) {
  var a = [], o = Ag(e, a, n);
  return a.length < 2 ? n : o + t(a);
}
var pM = function(t) {
  var n = rM(t);
  n.sheet.speedy = function(i) {
    this.isSpeedy = i;
  }, n.compat = !0;
  var a = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = xl(d, n.registered, void 0);
    return fM(n, f), n.key + "-" + f.name;
  }, o = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = xl(d, n.registered), p = "animation-" + f.name;
    return ep(n, {
      name: f.name,
      styles: "@keyframes " + p + "{" + f.styles + "}"
    }), p;
  }, r = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = xl(d, n.registered);
    ep(n, f);
  }, s = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    return tp(n.registered, a, hM(d));
  };
  return {
    css: a,
    cx: s,
    injectGlobal: r,
    keyframes: o,
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
    getRegisteredStyles: Ag.bind(null, n.registered),
    merge: tp.bind(null, n.registered, a)
  };
}, hM = function e(t) {
  for (var n = "", a = 0; a < t.length; a++) {
    var o = t[a];
    if (o != null) {
      var r = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            r = e(o);
          else {
            r = "";
            for (var s in o)
              o[s] && s && (r && (r += " "), r += s);
          }
          break;
        }
        default:
          r = o;
      }
      r && (n && (n += " "), n += r);
    }
  }
  return n;
}, Dg = pM({
  key: "css"
}), Vi = Dg.injectGlobal, Fe = Dg.css, vM = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mM(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gM = function(t, n) {
  n || (n = [0, ""]), t = String(t);
  var a = parseFloat(t, 10);
  return n[0] = a, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
}, Mg = gM, Do = Bg("in", document.body);
function mu(e, t) {
  var n = Mg(getComputedStyle(e).getPropertyValue(t));
  return n[0] * Og(n[1], e);
}
function Bg(e, t) {
  var n = document.createElement("div");
  n.style.height = "128" + e, t.appendChild(n);
  var a = mu(n, "height") / 128;
  return t.removeChild(n), a;
}
function Og(e, t) {
  if (!e) return null;
  switch (t = t || document.body, e = (e + "" || "px").trim().toLowerCase(), (t === window || t === document) && (t = document.body), e) {
    case "%":
      return t.clientHeight / 100;
    case "ch":
    case "ex":
      return Bg(e, t);
    case "em":
      return mu(t, "font-size");
    case "rem":
      return mu(document.body, "font-size");
    case "vw":
      return window.innerWidth / 100;
    case "vh":
      return window.innerHeight / 100;
    case "vmin":
      return Math.min(window.innerWidth, window.innerHeight) / 100;
    case "vmax":
      return Math.max(window.innerWidth, window.innerHeight) / 100;
    case "in":
      return Do;
    case "cm":
      return Do / 2.54;
    case "mm":
      return Do / 25.4;
    case "pt":
      return Do / 72;
    case "pc":
      return Do / 6;
    case "px":
      return 1;
  }
  var n = Mg(e);
  if (!isNaN(n[0]) && n[1]) {
    var a = Og(n[1], t);
    return typeof a == "number" ? n[0] * a : null;
  }
  return null;
}
function Pg() {
  const e = () => Math.floor((1 + crypto.getRandomValues(new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}
function yM(e, t) {
  const n = e.substr(4, e.length - 5);
  return getComputedStyle(t).getPropertyValue(n);
}
function bM(e, t, n = 0) {
  const [a, o, r, s] = [
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
  return !(o < c || u < s || r < i || d < a);
}
function nc(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ig(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Tr() {
}
var sr = 0.7, Hs = 1 / sr, Ua = "\\s*([+-]?\\d+)\\s*", ir = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _M = /^#([0-9a-f]{3,8})$/, wM = new RegExp(`^rgb\\(${Ua},${Ua},${Ua}\\)$`), xM = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), CM = new RegExp(`^rgba\\(${Ua},${Ua},${Ua},${ir}\\)$`), $M = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${ir}\\)$`), kM = new RegExp(`^hsl\\(${ir},${Gt},${Gt}\\)$`), SM = new RegExp(`^hsla\\(${ir},${Gt},${Gt},${ir}\\)$`), np = {
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
nc(Tr, ca, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ap,
  // Deprecated! Use color.formatHex.
  formatHex: ap,
  formatHex8: TM,
  formatHsl: EM,
  formatRgb: op,
  toString: op
});
function ap() {
  return this.rgb().formatHex();
}
function TM() {
  return this.rgb().formatHex8();
}
function EM() {
  return Rg(this).formatHsl();
}
function op() {
  return this.rgb().formatRgb();
}
function ca(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = _M.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? rp(t) : n === 3 ? new rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? qr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? qr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = wM.exec(e)) ? new rt(t[1], t[2], t[3], 1) : (t = xM.exec(e)) ? new rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = CM.exec(e)) ? qr(t[1], t[2], t[3], t[4]) : (t = $M.exec(e)) ? qr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = kM.exec(e)) ? lp(t[1], t[2] / 100, t[3] / 100, 1) : (t = SM.exec(e)) ? lp(t[1], t[2] / 100, t[3] / 100, t[4]) : np.hasOwnProperty(e) ? rp(np[e]) : e === "transparent" ? new rt(NaN, NaN, NaN, 0) : null;
}
function rp(e) {
  return new rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function qr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new rt(e, t, n, a);
}
function AM(e) {
  return e instanceof Tr || (e = ca(e)), e ? (e = e.rgb(), new rt(e.r, e.g, e.b, e.opacity)) : new rt();
}
function gu(e, t, n, a) {
  return arguments.length === 1 ? AM(e) : new rt(e, t, n, a ?? 1);
}
function rt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
nc(rt, gu, Ig(Tr, {
  brighter(e) {
    return e = e == null ? Hs : Math.pow(Hs, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? sr : Math.pow(sr, e), new rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new rt(ra(this.r), ra(this.g), ra(this.b), Us(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: sp,
  // Deprecated! Use color.formatHex.
  formatHex: sp,
  formatHex8: DM,
  formatRgb: ip,
  toString: ip
}));
function sp() {
  return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}`;
}
function DM() {
  return `#${Qn(this.r)}${Qn(this.g)}${Qn(this.b)}${Qn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ip() {
  const e = Us(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ra(this.r)}, ${ra(this.g)}, ${ra(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Us(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ra(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Qn(e) {
  return e = ra(e), (e < 16 ? "0" : "") + e.toString(16);
}
function lp(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, n, a);
}
function Rg(e) {
  if (e instanceof Mt) return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tr || (e = ca(e)), !e) return new Mt();
  if (e instanceof Mt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), r = Math.max(t, n, a), s = NaN, i = r - o, u = (r + o) / 2;
  return i ? (t === r ? s = (n - a) / i + (n < a) * 6 : n === r ? s = (a - t) / i + 2 : s = (t - n) / i + 4, i /= u < 0.5 ? r + o : 2 - r - o, s *= 60) : i = u > 0 && u < 1 ? 0 : s, new Mt(s, i, u, e.opacity);
}
function ac(e, t, n, a) {
  return arguments.length === 1 ? Rg(e) : new Mt(e, t, n, a ?? 1);
}
function Mt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
nc(Mt, ac, Ig(Tr, {
  brighter(e) {
    return e = e == null ? Hs : Math.pow(Hs, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? sr : Math.pow(sr, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new rt(
      Cl(e >= 240 ? e - 240 : e + 120, o, a),
      Cl(e, o, a),
      Cl(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Mt(up(this.h), Gr(this.s), Gr(this.l), Us(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Us(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${up(this.h)}, ${Gr(this.s) * 100}%, ${Gr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function up(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Gr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Cl(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Fo = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || ["#4D8CFD", "#FF6B7E", "#F4B83E", "#A6CC74", "#00C19A", "#6859BE"], MM = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || ["#4D8CFD", "#FF6B7E", "#FFC16D", "#A6CC74", "#00C19A", "#7887E0"], In = (e) => `--vis-${La(e) ? `color${e % Fo.length}` : e}`;
function BM(e, t = 0.4) {
  const n = ac(e);
  return n.l = n.l * (1 + t), n.formatHex();
}
function OM(e, t = 0.4, n = 0.6) {
  const a = ac(e);
  return a.s = a.s * (1 - n), a.l = a.l * (1 - t), a.formatHex();
}
const lr = 10, yu = [
  { id: "stripes-diagonal", svg: '<path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000"/>' },
  { id: "dots", svg: '<path d="m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3" fill"#000"/>' },
  { id: "stripes-vertical", svg: '<path d="M 5,-1 L5,11" stroke="#000"/>' },
  { id: "crosshatch", svg: '<path d="M0 0L10 10ZM10 0L0 10Z" stroke="#000"/>' },
  { id: "waves", svg: '<path d="M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z" fill="#000"/>' },
  { id: "circles", svg: '<circle cx="5" cy="5" r="3" stroke="#000" fill="#fff"/>' }
], bu = [
  { id: "circle", marker: '<circle cx="5" cy="5" r="5"/>', dashArray: [] },
  { id: "triangle", marker: '<path d="M5,0 L10,9 L0,9Z">', dashArray: [9, 1] },
  { id: "diamond", marker: '<path d="M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z">', dashArray: [2] },
  { id: "arrow", marker: '<path d="M4 0 0 0 6 5 0 10 4 10 10 5Z">', dashArray: [2, 3, 8, 3] },
  { id: "square", marker: '<rect x="1" y="1" width="8" height="8"/>', dashArray: [6] },
  { id: "star", marker: '<path d="m2 9 3-9 3 9L0 3h10Z"/>', dashArray: [1, 6] }
];
function Rn(e) {
  return `vis-${`pattern-${e.svg ? "fill" : "marker"}`}-${e.id}`;
}
const PM = (e) => `<mask id="${Rn(e)}">
    <pattern id="${e.id}" viewBox="0 0 10 10" width="${lr}" height="${lr}" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${e.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${e.id})"/>
  </mask>`, IM = (e, t) => `<marker id="${Rn(e)}"
    fill="var(${In(t)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="${lr}"
    markerHeight="${lr}">
    ${e.marker}
  </marker>`;
function RM() {
  const e = yu.map(PM).concat(bu.map(IM)).join(""), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.style.position = "fixed", t.style.zIndex = "-99999999", t.innerHTML = `<defs>${e}</defs>`, document.body.appendChild(t);
}
typeof window < "u" && RM();
const Fg = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || 0.5, Vg = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT) || [" ", "-", ".", ","], Ng = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT) || "-", dp = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || {
  text: "",
  fontSize: 12,
  fontFamily: "var(--vis-font-family)",
  lineHeight: 1.25,
  marginTop: 0,
  marginBottom: 0
};
Vi`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${Fg};
    --vis-color-main: var(${In(0)});
    --vis-color-main-light: ${BM(Fo[0])};
    --vis-color-main-dark: ${OM(Fo[0])};
    --vis-color-grey: #2a2a2a;
    ${Fo.map((e, t) => `${In(t)}: ${e};`)}
    ${MM.map((e, t) => `--vis-dark-color${t}: ${e};`)}
    ${yu.map((e, t) => `
      --${Rn(e)}: url(#${Rn(e)});
      --vis-pattern-fill${t}: var(--${Rn(e)});
    `)}
    ${bu.map((e, t) => {
  var n;
  return `
      --${Rn(e)}: url(#${Rn(e)});
      --vis-pattern-marker${t}: var(--${Rn(e)});
      --vis-pattern-dasharray${t}: ${(n = e.dashArray) === null || n === void 0 ? void 0 : n.join(" ")};
    `;
})}

    body.theme-dark {
      ${Fo.map((e, t) => `${In(t)}: var(--vis-dark-color${t});`)}
    }

    body.theme-patterns {
      ${yu.map((e, t) => `path[style*="fill: var(${In(t)})"]  {
        mask: var(--vis-pattern-fill${t});
      }`)}
      ${bu.map((e, t) => `
      path[stroke="var(${In(t)})"]:not([style*="fill"]),
      path[style*="stroke: var(${In(t)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${t});
        stroke-dasharray: var(--vis-pattern-dasharray${t});
      }
    `)}
}
`;
function FM(e = window == null ? void 0 : window.document.body) {
  return e ? +yM("var(--vis-font-wh-ratio)", e) : Fg;
}
var VM = { value: () => {
} };
function Lg() {
  for (var e = 0, t = arguments.length, n = {}, a; e < t; ++e) {
    if (!(a = arguments[e] + "") || a in n || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    n[a] = [];
  }
  return new ds(n);
}
function ds(e) {
  this._ = e;
}
function NM(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var a = "", o = n.indexOf(".");
    if (o >= 0 && (a = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: a };
  });
}
ds.prototype = Lg.prototype = {
  constructor: ds,
  on: function(e, t) {
    var n = this._, a = NM(e + "", n), o, r = -1, s = a.length;
    if (arguments.length < 2) {
      for (; ++r < s; ) if ((o = (e = a[r]).type) && (o = LM(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++r < s; )
      if (o = (e = a[r]).type) n[o] = cp(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = cp(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ds(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), a = 0, o, r; a < o; ++a) n[a] = arguments[a + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (r = this._[e], a = 0, o = r.length; a < o; ++a) r[a].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var a = this._[e], o = 0, r = a.length; o < r; ++o) a[o].value.apply(t, n);
  }
};
function LM(e, t) {
  for (var n = 0, a = e.length, o; n < a; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function cp(e, t, n) {
  for (var a = 0, o = e.length; a < o; ++a)
    if (e[a].name === t) {
      e[a] = VM, e = e.slice(0, a).concat(e.slice(a + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var oo = 0, Vo = 0, Mo = 0, zg = 1e3, Ws, No, Ks = 0, fa = 0, Ni = 0, ur = typeof performance == "object" && performance.now ? performance : Date, Hg = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function oc() {
  return fa || (Hg(zM), fa = ur.now() + Ni);
}
function zM() {
  fa = 0;
}
function js() {
  this._call = this._time = this._next = null;
}
js.prototype = Ug.prototype = {
  constructor: js,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? oc() : +n) + (t == null ? 0 : +t), !this._next && No !== this && (No ? No._next = this : Ws = this, No = this), this._call = e, this._time = n, _u();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, _u());
  }
};
function Ug(e, t, n) {
  var a = new js();
  return a.restart(e, t, n), a;
}
function HM() {
  oc(), ++oo;
  for (var e = Ws, t; e; )
    (t = fa - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --oo;
}
function fp() {
  fa = (Ks = ur.now()) + Ni, oo = Vo = 0;
  try {
    HM();
  } finally {
    oo = 0, WM(), fa = 0;
  }
}
function UM() {
  var e = ur.now(), t = e - Ks;
  t > zg && (Ni -= t, Ks = e);
}
function WM() {
  for (var e, t = Ws, n, a = 1 / 0; t; )
    t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ws = n);
  No = e, _u(a);
}
function _u(e) {
  if (!oo) {
    Vo && (Vo = clearTimeout(Vo));
    var t = e - fa;
    t > 24 ? (e < 1 / 0 && (Vo = setTimeout(fp, e - ur.now() - Ni)), Mo && (Mo = clearInterval(Mo))) : (Mo || (Ks = ur.now(), Mo = setInterval(UM, zg)), oo = 1, Hg(fp));
  }
}
function pp(e, t, n) {
  var a = new js();
  return t = t == null ? 0 : +t, a.restart((o) => {
    a.stop(), e(o + t);
  }, t, n), a;
}
var KM = Lg("start", "end", "cancel", "interrupt"), jM = [], Wg = 0, hp = 1, wu = 2, cs = 3, vp = 4, xu = 5, fs = 6;
function Li(e, t, n, a, o, r) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  YM(e, n, {
    name: t,
    index: a,
    // For context during callback.
    group: o,
    // For context during callback.
    on: KM,
    tween: jM,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: Wg
  });
}
function rc(e, t) {
  var n = Rt(e, t);
  if (n.state > Wg) throw new Error("too late; already scheduled");
  return n;
}
function on(e, t) {
  var n = Rt(e, t);
  if (n.state > cs) throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function YM(e, t, n) {
  var a = e.__transition, o;
  a[t] = n, n.timer = Ug(r, 0, n.time);
  function r(d) {
    n.state = hp, n.timer.restart(s, n.delay, n.time), n.delay <= d && s(d - n.delay);
  }
  function s(d) {
    var c, f, p, h;
    if (n.state !== hp) return u();
    for (c in a)
      if (h = a[c], h.name === n.name) {
        if (h.state === cs) return pp(s);
        h.state === vp ? (h.state = fs, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete a[c]) : +c < t && (h.state = fs, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete a[c]);
      }
    if (pp(function() {
      n.state === cs && (n.state = vp, n.timer.restart(i, n.delay, n.time), i(d));
    }), n.state = wu, n.on.call("start", e, e.__data__, n.index, n.group), n.state === wu) {
      for (n.state = cs, o = new Array(p = n.tween.length), c = 0, f = -1; c < p; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function i(d) {
    for (var c = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(u), n.state = xu, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, c);
    n.state === xu && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = fs, n.timer.stop(), delete a[t];
    for (var d in a) return;
    delete e.__transition;
  }
}
function sc(e, t) {
  var n = e.__transition, a, o, r = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((a = n[s]).name !== t) {
        r = !1;
        continue;
      }
      o = a.state > wu && a.state < xu, a.state = fs, a.timer.stop(), a.on.call(o ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete n[s];
    }
    r && delete e.__transition;
  }
}
function qM(e) {
  return this.each(function() {
    sc(this, e);
  });
}
const ic = (e) => () => e;
function GM(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function XM(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function JM(e) {
  return (e = +e) == 1 ? Kg : function(t, n) {
    return n - t ? XM(t, n, e) : ic(isNaN(t) ? n : t);
  };
}
function Kg(e, t) {
  var n = t - e;
  return n ? GM(e, n) : ic(isNaN(e) ? t : e);
}
const Ys = function e(t) {
  var n = JM(t);
  function a(o, r) {
    var s = n((o = gu(o)).r, (r = gu(r)).r), i = n(o.g, r.g), u = n(o.b, r.b), d = Kg(o.opacity, r.opacity);
    return function(c) {
      return o.r = s(c), o.g = i(c), o.b = u(c), o.opacity = d(c), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function ZM(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(r) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - r) + t[o] * r;
    return a;
  };
}
function QM(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function e3(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), r = new Array(n), s;
  for (s = 0; s < a; ++s) o[s] = Co(e[s], t[s]);
  for (; s < n; ++s) r[s] = t[s];
  return function(i) {
    for (s = 0; s < a; ++s) r[s] = o[s](i);
    return r;
  };
}
function t3(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Et(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function n3(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Co(e[o], t[o]) : a[o] = t[o];
  return function(r) {
    for (o in n) a[o] = n[o](r);
    return a;
  };
}
var Cu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $l = new RegExp(Cu.source, "g");
function a3(e) {
  return function() {
    return e;
  };
}
function o3(e) {
  return function(t) {
    return e(t) + "";
  };
}
function jg(e, t) {
  var n = Cu.lastIndex = $l.lastIndex = 0, a, o, r, s = -1, i = [], u = [];
  for (e = e + "", t = t + ""; (a = Cu.exec(e)) && (o = $l.exec(t)); )
    (r = o.index) > n && (r = t.slice(n, r), i[s] ? i[s] += r : i[++s] = r), (a = a[0]) === (o = o[0]) ? i[s] ? i[s] += o : i[++s] = o : (i[++s] = null, u.push({ i: s, x: Et(a, o) })), n = $l.lastIndex;
  return n < t.length && (r = t.slice(n), i[s] ? i[s] += r : i[++s] = r), i.length < 2 ? u[0] ? o3(u[0].x) : a3(t) : (t = u.length, function(d) {
    for (var c = 0, f; c < t; ++c) i[(f = u[c]).i] = f.x(d);
    return i.join("");
  });
}
function Co(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? ic(t) : (n === "number" ? Et : n === "string" ? (a = ca(t)) ? (t = a, Ys) : jg : t instanceof ca ? Ys : t instanceof Date ? t3 : QM(t) ? ZM : Array.isArray(t) ? e3 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? n3 : Et)(e, t);
}
function lc(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var mp = 180 / Math.PI, $u = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Yg(e, t, n, a, o, r) {
  var s, i, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * a) && (n -= e * u, a -= t * u), (i = Math.sqrt(n * n + a * a)) && (n /= i, a /= i, u /= i), e * a < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: r,
    rotate: Math.atan2(t, e) * mp,
    skewX: Math.atan(u) * mp,
    scaleX: s,
    scaleY: i
  };
}
var Xr;
function r3(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? $u : Yg(t.a, t.b, t.c, t.d, t.e, t.f);
}
function s3(e) {
  return e == null || (Xr || (Xr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xr.setAttribute("transform", e), !(e = Xr.transform.baseVal.consolidate())) ? $u : (e = e.matrix, Yg(e.a, e.b, e.c, e.d, e.e, e.f));
}
function qg(e, t, n, a) {
  function o(d) {
    return d.length ? d.pop() + " " : "";
  }
  function r(d, c, f, p, h, v) {
    if (d !== f || c !== p) {
      var m = h.push("translate(", null, t, null, n);
      v.push({ i: m - 4, x: Et(d, f) }, { i: m - 2, x: Et(c, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(d, c, f, p) {
    d !== c ? (d - c > 180 ? c += 360 : c - d > 180 && (d += 360), p.push({ i: f.push(o(f) + "rotate(", null, a) - 2, x: Et(d, c) })) : c && f.push(o(f) + "rotate(" + c + a);
  }
  function i(d, c, f, p) {
    d !== c ? p.push({ i: f.push(o(f) + "skewX(", null, a) - 2, x: Et(d, c) }) : c && f.push(o(f) + "skewX(" + c + a);
  }
  function u(d, c, f, p, h, v) {
    if (d !== f || c !== p) {
      var m = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: m - 4, x: Et(d, f) }, { i: m - 2, x: Et(c, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(d, c) {
    var f = [], p = [];
    return d = e(d), c = e(c), r(d.translateX, d.translateY, c.translateX, c.translateY, f, p), s(d.rotate, c.rotate, f, p), i(d.skewX, c.skewX, f, p), u(d.scaleX, d.scaleY, c.scaleX, c.scaleY, f, p), d = c = null, function(h) {
      for (var v = -1, m = p.length, b; ++v < m; ) f[(b = p[v]).i] = b.x(h);
      return f.join("");
    };
  };
}
var i3 = qg(r3, "px, ", "px)", "deg)"), l3 = qg(s3, ", ", ")", ")");
function u3(e, t) {
  t === void 0 && (t = e, e = Co);
  for (var n = 0, a = t.length - 1, o = t[0], r = new Array(a < 0 ? 0 : a); n < a; ) r[n] = e(o, o = t[++n]);
  return function(s) {
    var i = Math.max(0, Math.min(a - 1, Math.floor(s *= a)));
    return r[i](s - i);
  };
}
function d3(e, t) {
  var n, a;
  return function() {
    var o = on(this, e), r = o.tween;
    if (r !== n) {
      a = n = r;
      for (var s = 0, i = a.length; s < i; ++s)
        if (a[s].name === t) {
          a = a.slice(), a.splice(s, 1);
          break;
        }
    }
    o.tween = a;
  };
}
function c3(e, t, n) {
  var a, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var r = on(this, e), s = r.tween;
    if (s !== a) {
      o = (a = s).slice();
      for (var i = { name: t, value: n }, u = 0, d = o.length; u < d; ++u)
        if (o[u].name === t) {
          o[u] = i;
          break;
        }
      u === d && o.push(i);
    }
    r.tween = o;
  };
}
function f3(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var a = Rt(this.node(), n).tween, o = 0, r = a.length, s; o < r; ++o)
      if ((s = a[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? d3 : c3)(n, e, t));
}
function uc(e, t, n) {
  var a = e._id;
  return e.each(function() {
    var o = on(this, a);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Rt(o, a).value[t];
  };
}
function Gg(e, t) {
  var n;
  return (typeof t == "number" ? Et : t instanceof ca ? Ys : (n = ca(t)) ? (t = n, Ys) : jg)(e, t);
}
function p3(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function h3(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function v3(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function m3(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function g3(e, t, n) {
  var a, o, r;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = i + "", s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i)));
  };
}
function y3(e, t, n) {
  var a, o, r;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = i + "", s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i)));
  };
}
function b3(e, t) {
  var n = Oi(e), a = n === "transform" ? l3 : Gg;
  return this.attrTween(e, typeof t == "function" ? (n.local ? y3 : g3)(n, a, uc(this, "attr." + e, t)) : t == null ? (n.local ? h3 : p3)(n) : (n.local ? m3 : v3)(n, a, t));
}
function _3(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function w3(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function x3(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && w3(e, r)), n;
  }
  return o._value = t, o;
}
function C3(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && _3(e, r)), n;
  }
  return o._value = t, o;
}
function $3(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var a = Oi(e);
  return this.tween(n, (a.local ? x3 : C3)(a, t));
}
function k3(e, t) {
  return function() {
    rc(this, e).delay = +t.apply(this, arguments);
  };
}
function S3(e, t) {
  return t = +t, function() {
    rc(this, e).delay = t;
  };
}
function T3(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? k3 : S3)(t, e)) : Rt(this.node(), t).delay;
}
function E3(e, t) {
  return function() {
    on(this, e).duration = +t.apply(this, arguments);
  };
}
function A3(e, t) {
  return t = +t, function() {
    on(this, e).duration = t;
  };
}
function D3(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? E3 : A3)(t, e)) : Rt(this.node(), t).duration;
}
function M3(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    on(this, e).ease = t;
  };
}
function B3(e) {
  var t = this._id;
  return arguments.length ? this.each(M3(t, e)) : Rt(this.node(), t).ease;
}
function O3(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    on(this, e).ease = n;
  };
}
function P3(e) {
  if (typeof e != "function") throw new Error();
  return this.each(O3(this._id, e));
}
function I3(e) {
  typeof e != "function" && (e = ng(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = [], u, d = 0; d < s; ++d)
      (u = r[d]) && e.call(u, u.__data__, d, r) && i.push(u);
  return new wn(a, this._parents, this._name, this._id);
}
function R3(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, a = t.length, o = n.length, r = Math.min(a, o), s = new Array(a), i = 0; i < r; ++i)
    for (var u = t[i], d = n[i], c = u.length, f = s[i] = new Array(c), p, h = 0; h < c; ++h)
      (p = u[h] || d[h]) && (f[h] = p);
  for (; i < a; ++i)
    s[i] = t[i];
  return new wn(s, this._parents, this._name, this._id);
}
function F3(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function V3(e, t, n) {
  var a, o, r = F3(t) ? rc : on;
  return function() {
    var s = r(this, e), i = s.on;
    i !== a && (o = (a = i).copy()).on(t, n), s.on = o;
  };
}
function N3(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Rt(this.node(), n).on.on(e) : this.each(V3(n, e, t));
}
function L3(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function z3() {
  return this.on("end.remove", L3(this._id));
}
function H3(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = jd(e));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var i = a[s], u = i.length, d = r[s] = new Array(u), c, f, p = 0; p < u; ++p)
      (c = i[p]) && (f = e.call(c, c.__data__, p, i)) && ("__data__" in c && (f.__data__ = c.__data__), d[p] = f, Li(d[p], t, n, p, d, Rt(c, n)));
  return new wn(r, this._parents, t, n);
}
function U3(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = tg(e));
  for (var a = this._groups, o = a.length, r = [], s = [], i = 0; i < o; ++i)
    for (var u = a[i], d = u.length, c, f = 0; f < d; ++f)
      if (c = u[f]) {
        for (var p = e.call(c, c.__data__, f, u), h, v = Rt(c, n), m = 0, b = p.length; m < b; ++m)
          (h = p[m]) && Li(h, t, n, m, p, v);
        r.push(p), s.push(c);
      }
  return new wn(r, s, t, n);
}
var W3 = kr.prototype.constructor;
function K3() {
  return new W3(this._groups, this._parents);
}
function j3(e, t) {
  var n, a, o;
  return function() {
    var r = eo(this, e), s = (this.style.removeProperty(e), eo(this, e));
    return r === s ? null : r === n && s === a ? o : o = t(n = r, a = s);
  };
}
function Xg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Y3(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = eo(this, e);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function q3(e, t, n) {
  var a, o, r;
  return function() {
    var s = eo(this, e), i = n(this), u = i + "";
    return i == null && (u = i = (this.style.removeProperty(e), eo(this, e))), s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i));
  };
}
function G3(e, t) {
  var n, a, o, r = "style." + t, s = "end." + r, i;
  return function() {
    var u = on(this, e), d = u.on, c = u.value[r] == null ? i || (i = Xg(t)) : void 0;
    (d !== n || o !== c) && (a = (n = d).copy()).on(s, o = c), u.on = a;
  };
}
function X3(e, t, n) {
  var a = (e += "") == "transform" ? i3 : Gg;
  return t == null ? this.styleTween(e, j3(e, a)).on("end.style." + e, Xg(e)) : typeof t == "function" ? this.styleTween(e, q3(e, a, uc(this, "style." + e, t))).each(G3(this._id, e)) : this.styleTween(e, Y3(e, a, t), n).on("end.style." + e, null);
}
function J3(e, t, n) {
  return function(a) {
    this.style.setProperty(e, t.call(this, a), n);
  };
}
function Z3(e, t, n) {
  var a, o;
  function r() {
    var s = t.apply(this, arguments);
    return s !== o && (a = (o = s) && J3(e, s, n)), a;
  }
  return r._value = t, r;
}
function Q3(e, t, n) {
  var a = "style." + (e += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (t == null) return this.tween(a, null);
  if (typeof t != "function") throw new Error();
  return this.tween(a, Z3(e, t, n ?? ""));
}
function eB(e) {
  return function() {
    this.textContent = e;
  };
}
function tB(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function nB(e) {
  return this.tween("text", typeof e == "function" ? tB(uc(this, "text", e)) : eB(e == null ? "" : e + ""));
}
function aB(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function oB(e) {
  var t, n;
  function a() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && aB(o)), t;
  }
  return a._value = e, a;
}
function rB(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, oB(e));
}
function sB() {
  for (var e = this._name, t = this._id, n = Jg(), a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var s = a[r], i = s.length, u, d = 0; d < i; ++d)
      if (u = s[d]) {
        var c = Rt(u, t);
        Li(u, e, n, d, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new wn(a, this._parents, e, n);
}
function iB() {
  var e, t, n = this, a = n._id, o = n.size();
  return new Promise(function(r, s) {
    var i = { value: s }, u = { value: function() {
      --o === 0 && r();
    } };
    n.each(function() {
      var d = on(this, a), c = d.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(i), t._.interrupt.push(i), t._.end.push(u)), d.on = t;
    }), o === 0 && r();
  });
}
var lB = 0;
function wn(e, t, n, a) {
  this._groups = e, this._parents = t, this._name = n, this._id = a;
}
function Jg() {
  return ++lB;
}
var ln = kr.prototype;
wn.prototype = {
  constructor: wn,
  select: H3,
  selectAll: U3,
  selectChild: ln.selectChild,
  selectChildren: ln.selectChildren,
  filter: I3,
  merge: R3,
  selection: K3,
  transition: sB,
  call: ln.call,
  nodes: ln.nodes,
  node: ln.node,
  size: ln.size,
  empty: ln.empty,
  each: ln.each,
  on: N3,
  attr: b3,
  attrTween: $3,
  style: X3,
  styleTween: Q3,
  text: nB,
  textTween: rB,
  remove: z3,
  tween: f3,
  delay: T3,
  duration: D3,
  ease: B3,
  easeVarying: P3,
  end: iB,
  [Symbol.iterator]: ln[Symbol.iterator]
};
function uB(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var dB = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: uB
};
function cB(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function fB(e) {
  var t, n;
  e instanceof wn ? (t = e._id, e = e._name) : (t = Jg(), (n = dB).time = oc(), e = e == null ? null : e + "");
  for (var a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var s = a[r], i = s.length, u, d = 0; d < i; ++d)
      (u = s[d]) && Li(u, e, t, d, s, n || cB(u, t));
  return new wn(a, this._parents, e, t);
}
kr.prototype.interrupt = qM;
kr.prototype.transition = fB;
function ea(e, t, n) {
  return e.nodes().forEach((a) => sc(a)), t ? e.transition().duration(t) : e;
}
class dc {
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
var Ee;
(function(e) {
  e.X = "x", e.Y = "y";
})(Ee || (Ee = {}));
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
function Zg(e, t) {
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
const gp = Symbol("implicit");
function cc() {
  var e = new Of(), t = [], n = [], a = gp;
  function o(r) {
    let s = e.get(r);
    if (s === void 0) {
      if (a !== gp) return a;
      e.set(r, s = t.push(r) - 1);
    }
    return n[s % n.length];
  }
  return o.domain = function(r) {
    if (!arguments.length) return t.slice();
    t = [], e = new Of();
    for (const s of r)
      e.has(s) || e.set(s, t.push(s) - 1);
    return o;
  }, o.range = function(r) {
    return arguments.length ? (n = Array.from(r), o) : n.slice();
  }, o.unknown = function(r) {
    return arguments.length ? (a = r, o) : a;
  }, o.copy = function() {
    return cc(t, n).unknown(a);
  }, Ft.apply(o, arguments), o;
}
function fc() {
  var e = cc().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, r, s, i = !1, u = 0, d = 0, c = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = o < a, v = h ? o : a, m = h ? a : o;
    r = (m - v) / Math.max(1, p - u + d * 2), i && (r = Math.floor(r)), v += (m - v - r * (p - u)) * c, s = r * (1 - u), i && (v = Math.round(v), s = Math.round(s));
    var b = tD(p).map(function($) {
      return v + r * $;
    });
    return n(h ? b.reverse() : b);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([a, o] = p, a = +a, o = +o, f()) : [a, o];
  }, e.rangeRound = function(p) {
    return [a, o] = p, a = +a, o = +o, i = !0, f();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return r;
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
    return fc(t(), [a, o]).round(i).paddingInner(u).paddingOuter(d).align(c);
  }, Ft.apply(f(), arguments);
}
function Qg(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Qg(t());
  }, e;
}
function pB() {
  return Qg(fc.apply(null, arguments).paddingInner(1));
}
function hB(e) {
  return function() {
    return e;
  };
}
function ku(e) {
  return +e;
}
var yp = [0, 1];
function st(e) {
  return e;
}
function Su(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : hB(isNaN(t) ? NaN : 0.5);
}
function vB(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function mB(e, t, n) {
  var a = e[0], o = e[1], r = t[0], s = t[1];
  return o < a ? (a = Su(o, a), r = n(s, r)) : (a = Su(a, o), r = n(r, s)), function(i) {
    return r(a(i));
  };
}
function gB(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), r = new Array(a), s = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < a; )
    o[s] = Su(e[s], e[s + 1]), r[s] = n(t[s], t[s + 1]);
  return function(i) {
    var u = Pi(e, i, 1, a) - 1;
    return r[u](o[u](i));
  };
}
function Er(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function zi() {
  var e = yp, t = yp, n = Co, a, o, r, s = st, i, u, d;
  function c() {
    var p = Math.min(e.length, t.length);
    return s !== st && (s = vB(e[0], e[p - 1])), i = p > 2 ? gB : mB, u = d = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? r : (u || (u = i(e.map(a), t, n)))(a(s(p)));
  }
  return f.invert = function(p) {
    return s(o((d || (d = i(t, e.map(a), Et)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, ku), c()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), c()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), n = lc, c();
  }, f.clamp = function(p) {
    return arguments.length ? (s = p ? !0 : st, c()) : s !== st;
  }, f.interpolate = function(p) {
    return arguments.length ? (n = p, c()) : n;
  }, f.unknown = function(p) {
    return arguments.length ? (r = p, f) : r;
  }, function(p, h) {
    return a = p, o = h, c();
  };
}
function ey() {
  return zi()(st, st);
}
function yB(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function qs(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function ro(e) {
  return e = qs(Math.abs(e)), e ? e[1] : NaN;
}
function bB(e, t) {
  return function(n, a) {
    for (var o = n.length, r = [], s = 0, i = e[0], u = 0; o > 0 && i > 0 && (u + i + 1 > a && (i = Math.max(1, a - u)), r.push(n.substring(o -= i, o + i)), !((u += i + 1) > a)); )
      i = e[s = (s + 1) % e.length];
    return r.reverse().join(t);
  };
}
function _B(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var wB = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function dr(e) {
  if (!(t = wB.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new pc({
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
dr.prototype = pc.prototype;
function pc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
pc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function xB(e) {
  e: for (var t = e.length, n = 1, a = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        a = o = n;
        break;
      case "0":
        a === 0 && (a = n), o = n;
        break;
      default:
        if (!+e[n]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var ty;
function CB(e, t) {
  var n = qs(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], r = o - (ty = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = a.length;
  return r === s ? a : r > s ? a + new Array(r - s + 1).join("0") : r > 0 ? a.slice(0, r) + "." + a.slice(r) : "0." + new Array(1 - r).join("0") + qs(e, Math.max(0, t + r - 1))[0];
}
function bp(e, t) {
  var n = qs(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const _p = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: yB,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => bp(e * 100, t),
  r: bp,
  s: CB,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function wp(e) {
  return e;
}
var xp = Array.prototype.map, Cp = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $B(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? wp : bB(xp.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? wp : _B(xp.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", i = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = dr(f);
    var p = f.fill, h = f.align, v = f.sign, m = f.symbol, b = f.zero, $ = f.width, k = f.comma, C = f.precision, E = f.trim, T = f.type;
    T === "n" ? (k = !0, T = "g") : _p[T] || (C === void 0 && (C = 12), E = !0, T = "g"), (b || p === "0" && h === "=") && (b = !0, p = "0", h = "=");
    var D = m === "$" ? n : m === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", A = m === "$" ? a : /[%p]/.test(T) ? s : "", N = _p[T], R = /[defgprs%]/.test(T);
    C = C === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function P(I) {
      var V = D, Y = A, z, H, ee;
      if (T === "c")
        Y = N(I) + Y, I = "";
      else {
        I = +I;
        var ie = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? u : N(Math.abs(I), C), E && (I = xB(I)), ie && +I == 0 && v !== "+" && (ie = !1), V = (ie ? v === "(" ? v : i : v === "-" || v === "(" ? "" : v) + V, Y = (T === "s" ? Cp[8 + ty / 3] : "") + Y + (ie && v === "(" ? ")" : ""), R) {
          for (z = -1, H = I.length; ++z < H; )
            if (ee = I.charCodeAt(z), 48 > ee || ee > 57) {
              Y = (ee === 46 ? o + I.slice(z + 1) : I.slice(z)) + Y, I = I.slice(0, z);
              break;
            }
        }
      }
      k && !b && (I = t(I, 1 / 0));
      var be = V.length + I.length + Y.length, G = be < $ ? new Array($ - be + 1).join(p) : "";
      switch (k && b && (I = t(G + I, G.length ? $ - Y.length : 1 / 0), G = ""), h) {
        case "<":
          I = V + I + Y + G;
          break;
        case "=":
          I = V + G + I + Y;
          break;
        case "^":
          I = G.slice(0, be = G.length >> 1) + V + I + Y + G.slice(be);
          break;
        default:
          I = G + V + I + Y;
          break;
      }
      return r(I);
    }
    return P.toString = function() {
      return f + "";
    }, P;
  }
  function c(f, p) {
    var h = d((f = dr(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(ro(p) / 3))) * 3, m = Math.pow(10, -v), b = Cp[8 + v / 3];
    return function($) {
      return h(m * $) + b;
    };
  }
  return {
    format: d,
    formatPrefix: c
  };
}
var Jr, hc, ny;
kB({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function kB(e) {
  return Jr = $B(e), hc = Jr.format, ny = Jr.formatPrefix, Jr;
}
function SB(e) {
  return Math.max(0, -ro(Math.abs(e)));
}
function TB(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ro(t) / 3))) * 3 - ro(Math.abs(e)));
}
function EB(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ro(t) - ro(e)) + 1;
}
function AB(e, t, n, a) {
  var o = cu(e, t, n), r;
  switch (a = dr(a ?? ",f"), a.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(r = TB(o, s)) && (a.precision = r), ny(a, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(r = EB(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = r - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(r = SB(o)) && (a.precision = r - (a.type === "%") * 2);
      break;
    }
  }
  return hc(a);
}
function $a(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return uu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return AB(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, r = a.length - 1, s = a[o], i = a[r], u, d, c = 10;
    for (i < s && (d = s, s = i, i = d, d = o, o = r, r = d); c-- > 0; ) {
      if (d = du(s, i, n), d === u)
        return a[o] = s, a[r] = i, t(a);
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
function ay() {
  var e = ey();
  return e.copy = function() {
    return Er(e, ay());
  }, Ft.apply(e, arguments), $a(e);
}
function oy(e) {
  var t;
  function n(a) {
    return a == null || isNaN(a = +a) ? t : a;
  }
  return n.invert = n, n.domain = n.range = function(a) {
    return arguments.length ? (e = Array.from(a, ku), n) : e.slice();
  }, n.unknown = function(a) {
    return arguments.length ? (t = a, n) : t;
  }, n.copy = function() {
    return oy(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ku) : [0, 1], $a(n);
}
function ry(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], r = e[a], s;
  return r < o && (s = n, n = a, a = s, s = o, o = r, r = s), e[n] = t.floor(o), e[a] = t.ceil(r), e;
}
function $p(e) {
  return Math.log(e);
}
function kp(e) {
  return Math.exp(e);
}
function DB(e) {
  return -Math.log(-e);
}
function MB(e) {
  return -Math.exp(-e);
}
function BB(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function OB(e) {
  return e === 10 ? BB : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function PB(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Sp(e) {
  return (t, n) => -e(-t, n);
}
function IB(e) {
  const t = e($p, kp), n = t.domain;
  let a = 10, o, r;
  function s() {
    return o = PB(a), r = OB(a), n()[0] < 0 ? (o = Sp(o), r = Sp(r), e(DB, MB)) : e($p, kp), t;
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
    let p = o(d), h = o(c), v, m;
    const b = i == null ? 10 : +i;
    let $ = [];
    if (!(a % 1) && h - p < b) {
      if (p = Math.floor(p), h = Math.ceil(h), d > 0) {
        for (; p <= h; ++p)
          for (v = 1; v < a; ++v)
            if (m = p < 0 ? v / r(-p) : v * r(p), !(m < d)) {
              if (m > c) break;
              $.push(m);
            }
      } else for (; p <= h; ++p)
        for (v = a - 1; v >= 1; --v)
          if (m = p > 0 ? v / r(-p) : v * r(p), !(m < d)) {
            if (m > c) break;
            $.push(m);
          }
      $.length * 2 < b && ($ = uu(d, c, b));
    } else
      $ = uu(p, h, Math.min(h - p, b)).map(r);
    return f ? $.reverse() : $;
  }, t.tickFormat = (i, u) => {
    if (i == null && (i = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = dr(u)).precision == null && (u.trim = !0), u = hc(u)), i === 1 / 0) return u;
    const d = Math.max(1, a * i / t.ticks().length);
    return (c) => {
      let f = c / r(Math.round(o(c)));
      return f * a < a - 0.5 && (f *= a), f <= d ? u(c) : "";
    };
  }, t.nice = () => n(ry(n(), {
    floor: (i) => r(Math.floor(o(i))),
    ceil: (i) => r(Math.ceil(o(i)))
  })), t;
}
function sy() {
  const e = IB(zi()).domain([1, 10]);
  return e.copy = () => Er(e, sy()).base(e.base()), Ft.apply(e, arguments), e;
}
function Tp(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Ep(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function RB(e) {
  var t = 1, n = e(Tp(t), Ep(t));
  return n.constant = function(a) {
    return arguments.length ? e(Tp(t = +a), Ep(t)) : t;
  }, $a(n);
}
function iy() {
  var e = RB(zi());
  return e.copy = function() {
    return Er(e, iy()).constant(e.constant());
  }, Ft.apply(e, arguments);
}
function Ap(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function FB(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function VB(e) {
  return e < 0 ? -e * e : e * e;
}
function NB(e) {
  var t = e(st, st), n = 1;
  function a() {
    return n === 1 ? e(st, st) : n === 0.5 ? e(FB, VB) : e(Ap(n), Ap(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, a()) : n;
  }, $a(t);
}
function vc() {
  var e = NB(zi());
  return e.copy = function() {
    return Er(e, vc()).exponent(e.exponent());
  }, Ft.apply(e, arguments), e;
}
function LB() {
  return vc.apply(null, arguments).exponent(0.5);
}
function ly() {
  var e = [], t = [], n = [], a;
  function o() {
    var s = 0, i = Math.max(1, t.length);
    for (n = new Array(i - 1); ++s < i; ) n[s - 1] = ZA(e, s / i);
    return r;
  }
  function r(s) {
    return s == null || isNaN(s = +s) ? a : t[Pi(n, s)];
  }
  return r.invertExtent = function(s) {
    var i = t.indexOf(s);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? n[i - 1] : e[0],
      i < n.length ? n[i] : e[e.length - 1]
    ];
  }, r.domain = function(s) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of s) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Ko), o();
  }, r.range = function(s) {
    return arguments.length ? (t = Array.from(s), o()) : t.slice();
  }, r.unknown = function(s) {
    return arguments.length ? (a = s, r) : a;
  }, r.quantiles = function() {
    return n.slice();
  }, r.copy = function() {
    return ly().domain(e).range(t).unknown(a);
  }, Ft.apply(r, arguments);
}
function uy() {
  var e = 0, t = 1, n = 1, a = [0.5], o = [0, 1], r;
  function s(u) {
    return u != null && u <= u ? o[Pi(a, u, 0, n)] : r;
  }
  function i() {
    var u = -1;
    for (a = new Array(n); ++u < n; ) a[u] = ((u + 1) * t - (u - n) * e) / (n + 1);
    return s;
  }
  return s.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, i()) : [e, t];
  }, s.range = function(u) {
    return arguments.length ? (n = (o = Array.from(u)).length - 1, i()) : o.slice();
  }, s.invertExtent = function(u) {
    var d = o.indexOf(u);
    return d < 0 ? [NaN, NaN] : d < 1 ? [e, a[0]] : d >= n ? [a[n - 1], t] : [a[d - 1], a[d]];
  }, s.unknown = function(u) {
    return arguments.length && (r = u), s;
  }, s.thresholds = function() {
    return a.slice();
  }, s.copy = function() {
    return uy().domain([e, t]).range(o).unknown(r);
  }, Ft.apply($a(s), arguments);
}
function dy() {
  var e = [0.5], t = [0, 1], n, a = 1;
  function o(r) {
    return r != null && r <= r ? t[Pi(e, r, 0, a)] : n;
  }
  return o.domain = function(r) {
    return arguments.length ? (e = Array.from(r), a = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(r) {
    return arguments.length ? (t = Array.from(r), a = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(r) {
    var s = t.indexOf(r);
    return [e[s - 1], e[s]];
  }, o.unknown = function(r) {
    return arguments.length ? (n = r, o) : n;
  }, o.copy = function() {
    return dy().domain(e).range(t).unknown(n);
  }, Ft.apply(o, arguments);
}
const kl = /* @__PURE__ */ new Date(), Sl = /* @__PURE__ */ new Date();
function je(e, t, n, a) {
  function o(r) {
    return e(r = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r)), r;
  }
  return o.floor = (r) => (e(r = /* @__PURE__ */ new Date(+r)), r), o.ceil = (r) => (e(r = new Date(r - 1)), t(r, 1), e(r), r), o.round = (r) => {
    const s = o(r), i = o.ceil(r);
    return r - s < i - r ? s : i;
  }, o.offset = (r, s) => (t(r = /* @__PURE__ */ new Date(+r), s == null ? 1 : Math.floor(s)), r), o.range = (r, s, i) => {
    const u = [];
    if (r = o.ceil(r), i = i == null ? 1 : Math.floor(i), !(r < s) || !(i > 0)) return u;
    let d;
    do
      u.push(d = /* @__PURE__ */ new Date(+r)), t(r, i), e(r);
    while (d < r && r < s);
    return u;
  }, o.filter = (r) => je((s) => {
    if (s >= s) for (; e(s), !r(s); ) s.setTime(s - 1);
  }, (s, i) => {
    if (s >= s)
      if (i < 0) for (; ++i <= 0; )
        for (; t(s, -1), !r(s); )
          ;
      else for (; --i >= 0; )
        for (; t(s, 1), !r(s); )
          ;
  }), n && (o.count = (r, s) => (kl.setTime(+r), Sl.setTime(+s), e(kl), e(Sl), Math.floor(n(kl, Sl))), o.every = (r) => (r = Math.floor(r), !isFinite(r) || !(r > 0) ? null : r > 1 ? o.filter(a ? (s) => a(s) % r === 0 : (s) => o.count(0, s) % r === 0) : o)), o;
}
const Gs = je(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Gs.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? je((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Gs);
Gs.range;
const fn = 1e3, xt = fn * 60, pn = xt * 60, xn = pn * 24, mc = xn * 7, Dp = xn * 30, Tl = xn * 365, ta = je((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * fn);
}, (e, t) => (t - e) / fn, (e) => e.getUTCSeconds());
ta.range;
const gc = je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * fn);
}, (e, t) => {
  e.setTime(+e + t * xt);
}, (e, t) => (t - e) / xt, (e) => e.getMinutes());
gc.range;
const yc = je((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * xt);
}, (e, t) => (t - e) / xt, (e) => e.getUTCMinutes());
yc.range;
const bc = je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * fn - e.getMinutes() * xt);
}, (e, t) => {
  e.setTime(+e + t * pn);
}, (e, t) => (t - e) / pn, (e) => e.getHours());
bc.range;
const _c = je((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * pn);
}, (e, t) => (t - e) / pn, (e) => e.getUTCHours());
_c.range;
const Ar = je(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * xt) / xn,
  (e) => e.getDate() - 1
);
Ar.range;
const Hi = je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xn, (e) => e.getUTCDate() - 1);
Hi.range;
const cy = je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xn, (e) => Math.floor(e / xn));
cy.range;
function ka(e) {
  return je((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * xt) / mc);
}
const Ui = ka(0), Xs = ka(1), zB = ka(2), HB = ka(3), so = ka(4), UB = ka(5), WB = ka(6);
Ui.range;
Xs.range;
zB.range;
HB.range;
so.range;
UB.range;
WB.range;
function Sa(e) {
  return je((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / mc);
}
const Wi = Sa(0), Js = Sa(1), KB = Sa(2), jB = Sa(3), io = Sa(4), YB = Sa(5), qB = Sa(6);
Wi.range;
Js.range;
KB.range;
jB.range;
io.range;
YB.range;
qB.range;
const wc = je((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
wc.range;
const xc = je((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
xc.range;
const Cn = je((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Cn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : je((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Cn.range;
const $n = je((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
$n.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : je((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
$n.range;
function fy(e, t, n, a, o, r) {
  const s = [
    [ta, 1, fn],
    [ta, 5, 5 * fn],
    [ta, 15, 15 * fn],
    [ta, 30, 30 * fn],
    [r, 1, xt],
    [r, 5, 5 * xt],
    [r, 15, 15 * xt],
    [r, 30, 30 * xt],
    [o, 1, pn],
    [o, 3, 3 * pn],
    [o, 6, 6 * pn],
    [o, 12, 12 * pn],
    [a, 1, xn],
    [a, 2, 2 * xn],
    [n, 1, mc],
    [t, 1, Dp],
    [t, 3, 3 * Dp],
    [e, 1, Tl]
  ];
  function i(d, c, f) {
    const p = c < d;
    p && ([d, c] = [c, d]);
    const h = f && typeof f.range == "function" ? f : u(d, c, f), v = h ? h.range(d, +c + 1) : [];
    return p ? v.reverse() : v;
  }
  function u(d, c, f) {
    const p = Math.abs(c - d) / f, h = qd(([, , b]) => b).right(s, p);
    if (h === s.length) return e.every(cu(d / Tl, c / Tl, f));
    if (h === 0) return Gs.every(Math.max(cu(d, c, f), 1));
    const [v, m] = s[p / s[h - 1][2] < s[h][2] / p ? h - 1 : h];
    return v.every(m);
  }
  return [i, u];
}
const [GB, XB] = fy($n, xc, Wi, cy, _c, yc), [JB, ZB] = fy(Cn, wc, Ui, Ar, bc, gc);
function El(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Al(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Bo(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function QB(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, r = e.days, s = e.shortDays, i = e.months, u = e.shortMonths, d = Oo(o), c = Po(o), f = Oo(r), p = Po(r), h = Oo(s), v = Po(s), m = Oo(i), b = Po(i), $ = Oo(u), k = Po(u), C = {
    a: ie,
    A: be,
    b: G,
    B: ce,
    c: null,
    d: Rp,
    e: Rp,
    f: xO,
    g: BO,
    G: PO,
    H: bO,
    I: _O,
    j: wO,
    L: py,
    m: CO,
    M: $O,
    p: he,
    q: Je,
    Q: Np,
    s: Lp,
    S: kO,
    u: SO,
    U: TO,
    V: EO,
    w: AO,
    W: DO,
    x: null,
    X: null,
    y: MO,
    Y: OO,
    Z: IO,
    "%": Vp
  }, E = {
    a: at,
    A: dt,
    b: gt,
    B: Nt,
    c: null,
    d: Fp,
    e: Fp,
    f: NO,
    g: GO,
    G: JO,
    H: RO,
    I: FO,
    j: VO,
    L: vy,
    m: LO,
    M: zO,
    p: Q,
    q: oe,
    Q: Np,
    s: Lp,
    S: HO,
    u: UO,
    U: WO,
    V: KO,
    w: jO,
    W: YO,
    x: null,
    X: null,
    y: qO,
    Y: XO,
    Z: ZO,
    "%": Vp
  }, T = {
    a: P,
    A: I,
    b: V,
    B: Y,
    c: z,
    d: Pp,
    e: Pp,
    f: vO,
    g: Op,
    G: Bp,
    H: Ip,
    I: Ip,
    j: cO,
    L: hO,
    m: dO,
    M: fO,
    p: R,
    q: uO,
    Q: gO,
    s: yO,
    S: pO,
    u: oO,
    U: rO,
    V: sO,
    w: aO,
    W: iO,
    x: H,
    X: ee,
    y: Op,
    Y: Bp,
    Z: lO,
    "%": mO
  };
  C.x = D(n, C), C.X = D(a, C), C.c = D(t, C), E.x = D(n, E), E.X = D(a, E), E.c = D(t, E);
  function D(U, q) {
    return function(ne) {
      var K = [], Re = -1, we = 0, nt = U.length, fe, Le, Ze;
      for (ne instanceof Date || (ne = /* @__PURE__ */ new Date(+ne)); ++Re < nt; )
        U.charCodeAt(Re) === 37 && (K.push(U.slice(we, Re)), (Le = Mp[fe = U.charAt(++Re)]) != null ? fe = U.charAt(++Re) : Le = fe === "e" ? " " : "0", (Ze = q[fe]) && (fe = Ze(ne, Le)), K.push(fe), we = Re + 1);
      return K.push(U.slice(we, Re)), K.join("");
    };
  }
  function A(U, q) {
    return function(ne) {
      var K = Bo(1900, void 0, 1), Re = N(K, U, ne += "", 0), we, nt;
      if (Re != ne.length) return null;
      if ("Q" in K) return new Date(K.Q);
      if ("s" in K) return new Date(K.s * 1e3 + ("L" in K ? K.L : 0));
      if (q && !("Z" in K) && (K.Z = 0), "p" in K && (K.H = K.H % 12 + K.p * 12), K.m === void 0 && (K.m = "q" in K ? K.q : 0), "V" in K) {
        if (K.V < 1 || K.V > 53) return null;
        "w" in K || (K.w = 1), "Z" in K ? (we = Al(Bo(K.y, 0, 1)), nt = we.getUTCDay(), we = nt > 4 || nt === 0 ? Js.ceil(we) : Js(we), we = Hi.offset(we, (K.V - 1) * 7), K.y = we.getUTCFullYear(), K.m = we.getUTCMonth(), K.d = we.getUTCDate() + (K.w + 6) % 7) : (we = El(Bo(K.y, 0, 1)), nt = we.getDay(), we = nt > 4 || nt === 0 ? Xs.ceil(we) : Xs(we), we = Ar.offset(we, (K.V - 1) * 7), K.y = we.getFullYear(), K.m = we.getMonth(), K.d = we.getDate() + (K.w + 6) % 7);
      } else ("W" in K || "U" in K) && ("w" in K || (K.w = "u" in K ? K.u % 7 : "W" in K ? 1 : 0), nt = "Z" in K ? Al(Bo(K.y, 0, 1)).getUTCDay() : El(Bo(K.y, 0, 1)).getDay(), K.m = 0, K.d = "W" in K ? (K.w + 6) % 7 + K.W * 7 - (nt + 5) % 7 : K.w + K.U * 7 - (nt + 6) % 7);
      return "Z" in K ? (K.H += K.Z / 100 | 0, K.M += K.Z % 100, Al(K)) : El(K);
    };
  }
  function N(U, q, ne, K) {
    for (var Re = 0, we = q.length, nt = ne.length, fe, Le; Re < we; ) {
      if (K >= nt) return -1;
      if (fe = q.charCodeAt(Re++), fe === 37) {
        if (fe = q.charAt(Re++), Le = T[fe in Mp ? q.charAt(Re++) : fe], !Le || (K = Le(U, ne, K)) < 0) return -1;
      } else if (fe != ne.charCodeAt(K++))
        return -1;
    }
    return K;
  }
  function R(U, q, ne) {
    var K = d.exec(q.slice(ne));
    return K ? (U.p = c.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function P(U, q, ne) {
    var K = h.exec(q.slice(ne));
    return K ? (U.w = v.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function I(U, q, ne) {
    var K = f.exec(q.slice(ne));
    return K ? (U.w = p.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function V(U, q, ne) {
    var K = $.exec(q.slice(ne));
    return K ? (U.m = k.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function Y(U, q, ne) {
    var K = m.exec(q.slice(ne));
    return K ? (U.m = b.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function z(U, q, ne) {
    return N(U, t, q, ne);
  }
  function H(U, q, ne) {
    return N(U, n, q, ne);
  }
  function ee(U, q, ne) {
    return N(U, a, q, ne);
  }
  function ie(U) {
    return s[U.getDay()];
  }
  function be(U) {
    return r[U.getDay()];
  }
  function G(U) {
    return u[U.getMonth()];
  }
  function ce(U) {
    return i[U.getMonth()];
  }
  function he(U) {
    return o[+(U.getHours() >= 12)];
  }
  function Je(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function at(U) {
    return s[U.getUTCDay()];
  }
  function dt(U) {
    return r[U.getUTCDay()];
  }
  function gt(U) {
    return u[U.getUTCMonth()];
  }
  function Nt(U) {
    return i[U.getUTCMonth()];
  }
  function Q(U) {
    return o[+(U.getUTCHours() >= 12)];
  }
  function oe(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var q = D(U += "", C);
      return q.toString = function() {
        return U;
      }, q;
    },
    parse: function(U) {
      var q = A(U += "", !1);
      return q.toString = function() {
        return U;
      }, q;
    },
    utcFormat: function(U) {
      var q = D(U += "", E);
      return q.toString = function() {
        return U;
      }, q;
    },
    utcParse: function(U) {
      var q = A(U += "", !0);
      return q.toString = function() {
        return U;
      }, q;
    }
  };
}
var Mp = { "-": "", _: " ", 0: "0" }, Xe = /^\s*\d+/, eO = /^%/, tO = /[\\^$*+?|[\]().{}]/g;
function $e(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", r = o.length;
  return a + (r < n ? new Array(n - r + 1).join(t) + o : o);
}
function nO(e) {
  return e.replace(tO, "\\$&");
}
function Oo(e) {
  return new RegExp("^(?:" + e.map(nO).join("|") + ")", "i");
}
function Po(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function aO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function oO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function rO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function sO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function iO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Bp(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Op(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function lO(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function uO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function dO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Pp(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function cO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ip(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function fO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function pO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function hO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function vO(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function mO(e, t, n) {
  var a = eO.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function gO(e, t, n) {
  var a = Xe.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function yO(e, t, n) {
  var a = Xe.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Rp(e, t) {
  return $e(e.getDate(), t, 2);
}
function bO(e, t) {
  return $e(e.getHours(), t, 2);
}
function _O(e, t) {
  return $e(e.getHours() % 12 || 12, t, 2);
}
function wO(e, t) {
  return $e(1 + Ar.count(Cn(e), e), t, 3);
}
function py(e, t) {
  return $e(e.getMilliseconds(), t, 3);
}
function xO(e, t) {
  return py(e, t) + "000";
}
function CO(e, t) {
  return $e(e.getMonth() + 1, t, 2);
}
function $O(e, t) {
  return $e(e.getMinutes(), t, 2);
}
function kO(e, t) {
  return $e(e.getSeconds(), t, 2);
}
function SO(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function TO(e, t) {
  return $e(Ui.count(Cn(e) - 1, e), t, 2);
}
function hy(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? so(e) : so.ceil(e);
}
function EO(e, t) {
  return e = hy(e), $e(so.count(Cn(e), e) + (Cn(e).getDay() === 4), t, 2);
}
function AO(e) {
  return e.getDay();
}
function DO(e, t) {
  return $e(Xs.count(Cn(e) - 1, e), t, 2);
}
function MO(e, t) {
  return $e(e.getFullYear() % 100, t, 2);
}
function BO(e, t) {
  return e = hy(e), $e(e.getFullYear() % 100, t, 2);
}
function OO(e, t) {
  return $e(e.getFullYear() % 1e4, t, 4);
}
function PO(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? so(e) : so.ceil(e), $e(e.getFullYear() % 1e4, t, 4);
}
function IO(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + $e(t / 60 | 0, "0", 2) + $e(t % 60, "0", 2);
}
function Fp(e, t) {
  return $e(e.getUTCDate(), t, 2);
}
function RO(e, t) {
  return $e(e.getUTCHours(), t, 2);
}
function FO(e, t) {
  return $e(e.getUTCHours() % 12 || 12, t, 2);
}
function VO(e, t) {
  return $e(1 + Hi.count($n(e), e), t, 3);
}
function vy(e, t) {
  return $e(e.getUTCMilliseconds(), t, 3);
}
function NO(e, t) {
  return vy(e, t) + "000";
}
function LO(e, t) {
  return $e(e.getUTCMonth() + 1, t, 2);
}
function zO(e, t) {
  return $e(e.getUTCMinutes(), t, 2);
}
function HO(e, t) {
  return $e(e.getUTCSeconds(), t, 2);
}
function UO(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function WO(e, t) {
  return $e(Wi.count($n(e) - 1, e), t, 2);
}
function my(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? io(e) : io.ceil(e);
}
function KO(e, t) {
  return e = my(e), $e(io.count($n(e), e) + ($n(e).getUTCDay() === 4), t, 2);
}
function jO(e) {
  return e.getUTCDay();
}
function YO(e, t) {
  return $e(Js.count($n(e) - 1, e), t, 2);
}
function qO(e, t) {
  return $e(e.getUTCFullYear() % 100, t, 2);
}
function GO(e, t) {
  return e = my(e), $e(e.getUTCFullYear() % 100, t, 2);
}
function XO(e, t) {
  return $e(e.getUTCFullYear() % 1e4, t, 4);
}
function JO(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? io(e) : io.ceil(e), $e(e.getUTCFullYear() % 1e4, t, 4);
}
function ZO() {
  return "+0000";
}
function Vp() {
  return "%";
}
function Np(e) {
  return +e;
}
function Lp(e) {
  return Math.floor(+e / 1e3);
}
var Ma, gy, yy;
QO({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function QO(e) {
  return Ma = QB(e), gy = Ma.format, Ma.parse, yy = Ma.utcFormat, Ma.utcParse, Ma;
}
function eP(e) {
  return new Date(e);
}
function tP(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Cc(e, t, n, a, o, r, s, i, u, d) {
  var c = ey(), f = c.invert, p = c.domain, h = d(".%L"), v = d(":%S"), m = d("%I:%M"), b = d("%I %p"), $ = d("%a %d"), k = d("%b %d"), C = d("%B"), E = d("%Y");
  function T(D) {
    return (u(D) < D ? h : i(D) < D ? v : s(D) < D ? m : r(D) < D ? b : a(D) < D ? o(D) < D ? $ : k : n(D) < D ? C : E)(D);
  }
  return c.invert = function(D) {
    return new Date(f(D));
  }, c.domain = function(D) {
    return arguments.length ? p(Array.from(D, tP)) : p().map(eP);
  }, c.ticks = function(D) {
    var A = p();
    return e(A[0], A[A.length - 1], D ?? 10);
  }, c.tickFormat = function(D, A) {
    return A == null ? T : d(A);
  }, c.nice = function(D) {
    var A = p();
    return (!D || typeof D.range != "function") && (D = t(A[0], A[A.length - 1], D ?? 10)), D ? p(ry(A, D)) : c;
  }, c.copy = function() {
    return Er(c, Cc(e, t, n, a, o, r, s, i, u, d));
  }, c;
}
function nP() {
  return Ft.apply(Cc(JB, ZB, Cn, wc, Ui, Ar, bc, gc, ta, gy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function aP() {
  return Ft.apply(Cc(GB, XB, $n, xc, Wi, Hi, _c, yc, ta, yy).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function oP() {
  var e = 0, t = 1, n, a, o, r, s = st, i = !1, u;
  function d(f) {
    return f == null || isNaN(f = +f) ? u : s(o === 0 ? 0.5 : (f = (r(f) - n) * o, i ? Math.max(0, Math.min(1, f)) : f));
  }
  d.domain = function(f) {
    return arguments.length ? ([e, t] = f, n = r(e = +e), a = r(t = +t), o = n === a ? 0 : 1 / (a - n), d) : [e, t];
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
  return d.range = c(Co), d.rangeRound = c(lc), d.unknown = function(f) {
    return arguments.length ? (u = f, d) : u;
  }, function(f) {
    return r = f, n = f(e), a = f(t), o = n === a ? 0 : 1 / (a - n), d;
  };
}
function by(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function _y() {
  var e = $a(oP()(st));
  return e.copy = function() {
    return by(e, _y());
  }, Zg.apply(e, arguments);
}
function rP() {
  var e = 0, t = 0.5, n = 1, a = 1, o, r, s, i, u, d = st, c, f = !1, p;
  function h(m) {
    return isNaN(m = +m) ? p : (m = 0.5 + ((m = +c(m)) - r) * (a * m < a * r ? i : u), d(f ? Math.max(0, Math.min(1, m)) : m));
  }
  h.domain = function(m) {
    return arguments.length ? ([e, t, n] = m, o = c(e = +e), r = c(t = +t), s = c(n = +n), i = o === r ? 0 : 0.5 / (r - o), u = r === s ? 0 : 0.5 / (s - r), a = r < o ? -1 : 1, h) : [e, t, n];
  }, h.clamp = function(m) {
    return arguments.length ? (f = !!m, h) : f;
  }, h.interpolator = function(m) {
    return arguments.length ? (d = m, h) : d;
  };
  function v(m) {
    return function(b) {
      var $, k, C;
      return arguments.length ? ([$, k, C] = b, d = u3(m, [$, k, C]), h) : [d(0), d(0.5), d(1)];
    };
  }
  return h.range = v(Co), h.rangeRound = v(lc), h.unknown = function(m) {
    return arguments.length ? (p = m, h) : p;
  }, function(m) {
    return c = m, o = m(e), r = m(t), s = m(n), i = o === r ? 0 : 0.5 / (r - o), u = r === s ? 0 : 0.5 / (s - r), a = r < o ? -1 : 1, h;
  };
}
function wy() {
  var e = $a(rP()(st));
  return e.copy = function() {
    return by(e, wy());
  }, Zg.apply(e, arguments);
}
const zp = {
  scaleLinear: ay,
  scalePow: vc,
  scaleSqrt: LB,
  scaleLog: sy,
  scaleSymlog: iy,
  scaleIdentity: oy,
  scaleTime: nP,
  scaleUtc: aP,
  scaleSequential: _y,
  scaleDiverging: wy,
  scaleQuantize: uy,
  scaleQuantile: ly,
  scaleThreshold: dy,
  scaleOrdinal: cc,
  scaleBand: fc,
  scalePoint: pB
};
var Ve;
(function(e) {
  e.X = "x", e.Y = "y";
})(Ve || (Ve = {}));
var sa;
(function(e) {
  e.West = "west", e.East = "east", e.North = "north", e.South = "south";
})(sa || (sa = {}));
const sP = Object.assign(Object.assign({}, _g), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: !0, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: sa.North, preventEmptyDomain: null, scaleByDomain: !1 });
class iP extends ar {
  constructor(t, n, a) {
    var o, r;
    super(t), this._defaultConfig = sP, this.datamodel = new dc(), this.config = this._defaultConfig, this._clipPathId = Pg(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = !0, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
    const s = "saturate", i = window.location.href.replace(window.location.hash, "");
    this.svg.attr("class", Fe`
      --highlight-filter-id: url(${i}#${s}); // defining a css variable
    `), this._svgDefs.append("filter").attr("id", s).attr("filterUnits", "objectBoundingBox").html('<feColorMatrix type="saturate" in="SourceGraphic" values="1.35"/>'), n && this.updateContainer(n, !0), a && this.setData(a, !0), (this.config.xAxis || this.config.yAxis || !((o = this.components) === null || o === void 0) && o.some((u) => u.datamodel.data)) && this.render(), (r = document.fonts) === null || r === void 0 || r.ready.then(() => {
      this._firstRender || this._renderAxes(0);
    });
  }
  get components() {
    return this.config.components;
  }
  // Overriding ContainerCore default get width method to work with axis auto margin
  get width() {
    const t = this._getMargin();
    return Pa(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  // Overriding ContainerCore default get height method to work with axis auto margin
  get height() {
    const t = this._getMargin();
    return Pa(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var a, o, r, s;
    const { components: i, config: u } = this;
    t && (this.datamodel.data = t, i.forEach((d) => {
      d.setData(t);
    }), (a = u.crosshair) === null || a === void 0 || a.setData(t), (o = u.xAxis) === null || o === void 0 || o.setData(t), (r = u.yAxis) === null || r === void 0 || r.setData(t), (s = u.tooltip) === null || s === void 0 || s.hide(), n || this.render());
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, !0), t.xAxis && (this.config.xAxis.config.type = Ee.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = Ee.Y, this.element.appendChild(t.yAxis.element));
    for (const s of this.components)
      this.element.appendChild(s.element);
    const a = t.tooltip;
    a && (a.hasContainer() || a.setContainer(this._container), a.setComponents(this.components));
    const o = t.crosshair;
    o && (o.setContainer(this.svg), o.tooltip = a, this.element.appendChild(o.element));
    const r = t.annotations;
    r && this.element.appendChild(r.element), this.element.appendChild(this._clipPath.node()), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), n || this.render();
  }
  updateComponents(t, n) {
    const { config: a } = this;
    this.components.forEach((o, r) => {
      t[r] && o.setConfig(t[r]);
    }), this._updateScales(...this.components, a.xAxis, a.yAxis, a.crosshair), n || this.render();
  }
  update(t, n, a) {
    a && (this.datamodel.data = a), t && this.updateContainer(t, !0), n && this.updateComponents(n, !0), this.render();
  }
  _preRender() {
    const { config: t } = this;
    super._preRender(), t.autoMargin && this._setAutoMargin();
    const n = Eo([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]);
    for (const a of n)
      a.setSize(this.width, this.height, this.containerWidth, this.containerHeight);
    this._updateScales(...this.components, t.xAxis, t.yAxis, t.crosshair);
  }
  _render(t) {
    var n, a, o, r, s;
    const { config: i } = this;
    super._render();
    const u = this._getMargin();
    for (const f of this.components)
      f.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", f.clippable ? `url(#${this._clipPathId})` : null).style("-webkit-clip-path", f.clippable ? `url(#${this._clipPathId})` : null), f.render(t);
    this._renderAxes(this._firstRender ? 0 : t);
    const d = 2;
    this._clipPath.select("rect").attr("x", -d).attr("y", -d).attr("width", this.width + 2 * d).attr("height", this.height + 2 * d), (n = i.tooltip) === null || n === void 0 || n.update();
    const c = i.crosshair;
    if (c) {
      const f = this.components.filter((m) => !m.stacked).map((m) => m.config.y), p = this.components.filter((m) => m.stacked).map((m) => m.config.y), h = (a = this.components.find((m) => m.config.baseline)) === null || a === void 0 ? void 0 : a.config, v = h == null ? void 0 : h.baseline;
      c.accessors = {
        x: (o = this.components[0]) === null || o === void 0 ? void 0 : o.config.x,
        y: fu(f),
        yStacked: fu(p),
        baseline: v
      }, c.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), c.hide();
    }
    (r = i.annotations) === null || r === void 0 || r.g.attr("transform", `translate(${u.left},${u.top})`), (s = i.annotations) === null || s === void 0 || s.render(), this._firstRender = !1;
  }
  _updateScales(...t) {
    const n = Eo(t || this.components);
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
    const a = t.filter((o) => !o.config.excludeFromDomainCalculation);
    Object.values(Ve).forEach((o) => {
      var r, s, i, u, d, c, f, p;
      const [h, v] = KA(eD(a.map((T) => T.getDataExtent(o, n.scaleByDomain)))), m = o === Ve.Y ? n.yDomain : n.xDomain, b = o === Ve.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, $ = o === Ve.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, k = (s = (r = m == null ? void 0 : m[0]) !== null && r !== void 0 ? r : h) !== null && s !== void 0 ? s : 0, C = (u = (i = m == null ? void 0 : m[1]) !== null && i !== void 0 ? i : v) !== null && u !== void 0 ? u : 1, E = [
        Pa(k, (d = b == null ? void 0 : b[0]) !== null && d !== void 0 ? d : Number.NEGATIVE_INFINITY, (c = b == null ? void 0 : b[1]) !== null && c !== void 0 ? c : Number.POSITIVE_INFINITY),
        Pa(C, (f = $ == null ? void 0 : $[0]) !== null && f !== void 0 ? f : Number.NEGATIVE_INFINITY, (p = $ == null ? void 0 : $[1]) !== null && p !== void 0 ? p : Number.POSITIVE_INFINITY)
      ];
      if (E[0] === E[1]) {
        const T = a.some((D) => {
          var A;
          return ((A = D.datamodel.data) === null || A === void 0 ? void 0 : A.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!T || o === Ve.Y)) && (E[1] = E[0] + 1);
      }
      t.forEach((T) => T.setScaleDomain(o, E));
    });
  }
  _updateScalesRange(...t) {
    var n, a, o, r, s, i;
    const { config: u } = this;
    if (!t)
      return;
    const d = u.yDirection === sa.South, c = [(n = u.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((a = u.padding.right) !== null && a !== void 0 ? a : 0)], f = [this.height - ((o = u.padding.bottom) !== null && o !== void 0 ? o : 0), (r = u.padding.top) !== null && r !== void 0 ? r : 0];
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
    const { config: { xAxis: n, yAxis: a } } = this, o = this._getMargin();
    Eo([n, a]).forEach((s) => {
      const i = s.getOffset(o);
      s.g.attr("transform", `translate(${i.left},${i.top})`), s.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, a = Eo([...this.components, t, n]);
    this._setScales(...a), this._updateScalesDomain(...a);
    const o = this._firstRender ? 2 : 1;
    for (let r = 0; r < o; r += 1) {
      const s = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...a), Eo([t, n]).forEach((u) => {
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
    const { components: t, config: { tooltip: n, crosshair: a, annotations: o, xAxis: r, yAxis: s } } = this;
    super.destroy();
    for (const i of t)
      i == null || i.destroy();
    n == null || n.destroy(), a == null || a.destroy(), o == null || o.destroy(), r == null || r.destroy(), s == null || s.destroy();
  }
}
const xy = {
  duration: 600,
  events: {},
  attributes: {}
};
class lP {
  constructor(t = Wo.SVG) {
    var n, a;
    this.type = Wo.SVG, this.datamodel = new dc(), this.sizing = to.Fit, this.events = {}, this._defaultConfig = xy, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._setUpComponentEventsThrottled = Vf(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = Vf(this._setCustomAttributes, 500), t === Wo.SVG ? this.element = document.createElementNS("http://www.w3.org/2000/svg", "g") : this.element = document.createElement("div"), this.uid = Pg(), this.g = Bt(this.element);
    const o = (a = (n = this.constructor) === null || n === void 0 ? void 0 : n.selectors) === null || a === void 0 ? void 0 : a.root;
    o && this.g.attr("class", o);
  }
  setConfig(t) {
    this.prevConfig = this.config, this.config = no(this._defaultConfig, t);
  }
  setData(t) {
    this.datamodel.data = t;
  }
  setSize(t, n, a, o) {
    isFinite(t) && (this._width = t), isFinite(n) && (this._height = n), isFinite(a) && (this._containerWidth = a), isFinite(o) && (this._containerHeight = o);
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
      Object.keys(t[a]).forEach((o) => {
        const r = this.g.selectAll(`.${a}`);
        r.on(o + n, (s, i) => {
          const u = r.nodes(), d = u.indexOf(s.currentTarget), c = t[a][o];
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
class uP extends dc {
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
const $c = Object.assign(Object.assign({}, xy), { x: void 0, y: void 0, id: (e, t) => {
  var n;
  return (n = e.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e) => e.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: !1 });
class Cy extends lP {
  constructor() {
    super(...arguments), this.datamodel = new uP(), this.clippable = !0, this.stacked = !1, this._defaultConfig = $c, this._xScale = zp.scaleLinear(), this._yScale = zp.scaleLinear();
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
    var a, o;
    t === Ve.X && ((a = this._xScale) === null || a === void 0 || a.domain(n)), t === Ve.Y && ((o = this._yScale) === null || o === void 0 || o.domain(n));
  }
  setScaleRange(t, n) {
    var a, o;
    t === Ve.X && ((a = this._xScale) === null || a === void 0 || a.range(n)), t === Ve.Y && ((o = this._yScale) === null || o === void 0 || o.range(n));
  }
  setScale(t, n) {
    n && t === Ve.X && (this._xScale = n), n && t === Ve.Y && (this._yScale = n);
  }
  getDataExtent(t, n) {
    const { config: a, datamodel: o } = this;
    switch (t) {
      case Ve.X:
        return this.getXDataExtent();
      case Ve.Y:
        return this.getYDataExtent(n);
      default:
        return yl(o.data, a[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return yl(n.data, t.x);
  }
  getYDataExtent(t) {
    const { config: n, datamodel: a } = this, o = t ? iD(a.data, this.xScale.domain(), n.x) : a.data, r = Gd(n.y) ? n.y : [n.y];
    return yl(o, ...r);
  }
}
var Ce;
(function(e) {
  e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e.Center = "center", e.Auto = "auto";
})(Ce || (Ce = {}));
var Hp;
(function(e) {
  e.Absolute = "absolute", e.Fixed = "fixed";
})(Hp || (Hp = {}));
var Up;
(function(e) {
  e.Inside = "inside", e.Outside = "outside";
})(Up || (Up = {}));
var Wp;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(Wp || (Wp = {}));
function Kt(e) {
  return function() {
    return e;
  };
}
const $y = Math.cos, Zs = Math.sin, Vt = Math.sqrt, Kp = 1e-12, Qs = Math.PI, Ki = 2 * Qs, Tu = Math.PI, Eu = 2 * Tu, Gn = 1e-6, dP = Eu - Gn;
function ky(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function cP(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ky;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, r = a.length; o < r; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class fP {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ky : cP(t);
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
  quadraticCurveTo(t, n, a, o) {
    this._append`Q${+t},${+n},${this._x1 = +a},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, a, o, r, s) {
    this._append`C${+t},${+n},${+a},${+o},${this._x1 = +r},${this._y1 = +s}`;
  }
  arcTo(t, n, a, o, r) {
    if (t = +t, n = +n, a = +a, o = +o, r = +r, r < 0) throw new Error(`negative radius: ${r}`);
    let s = this._x1, i = this._y1, u = a - t, d = o - n, c = s - t, f = i - n, p = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Gn) if (!(Math.abs(f * u - d * c) > Gn) || !r)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = a - s, v = o - i, m = u * u + d * d, b = h * h + v * v, $ = Math.sqrt(m), k = Math.sqrt(p), C = r * Math.tan((Tu - Math.acos((m + p - b) / (2 * $ * k))) / 2), E = C / k, T = C / $;
      Math.abs(E - 1) > Gn && this._append`L${t + E * c},${n + E * f}`, this._append`A${r},${r},0,0,${+(f * h > c * v)},${this._x1 = t + T * u},${this._y1 = n + T * d}`;
    }
  }
  arc(t, n, a, o, r, s) {
    if (t = +t, n = +n, a = +a, s = !!s, a < 0) throw new Error(`negative radius: ${a}`);
    let i = a * Math.cos(o), u = a * Math.sin(o), d = t + i, c = n + u, f = 1 ^ s, p = s ? o - r : r - o;
    this._x1 === null ? this._append`M${d},${c}` : (Math.abs(this._x1 - d) > Gn || Math.abs(this._y1 - c) > Gn) && this._append`L${d},${c}`, a && (p < 0 && (p = p % Eu + Eu), p > dP ? this._append`A${a},${a},0,1,${f},${t - i},${n - u}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = c}` : p > Gn && this._append`A${a},${a},0,${+(p >= Tu)},${f},${this._x1 = t + a * Math.cos(r)},${this._y1 = n + a * Math.sin(r)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Sy(e) {
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
  }, () => new fP(t);
}
function pP(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ty(e) {
  this._context = e;
}
Ty.prototype = {
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
function Ey(e) {
  return new Ty(e);
}
function hP(e) {
  return e[0];
}
function vP(e) {
  return e[1];
}
function mP(e, t) {
  var n = Kt(!0), a = null, o = Ey, r = null, s = Sy(i);
  e = typeof e == "function" ? e : e === void 0 ? hP : Kt(e), t = typeof t == "function" ? t : t === void 0 ? vP : Kt(t);
  function i(u) {
    var d, c = (u = pP(u)).length, f, p = !1, h;
    for (a == null && (r = o(h = s())), d = 0; d <= c; ++d)
      !(d < c && n(f = u[d], d, u)) === p && ((p = !p) ? r.lineStart() : r.lineEnd()), p && r.point(+e(f, d, u), +t(f, d, u));
    if (h) return r = null, h + "" || null;
  }
  return i.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Kt(+u), i) : e;
  }, i.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Kt(+u), i) : t;
  }, i.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Kt(!!u), i) : n;
  }, i.curve = function(u) {
    return arguments.length ? (o = u, a != null && (r = o(a)), i) : o;
  }, i.context = function(u) {
    return arguments.length ? (u == null ? a = r = null : r = o(a = u), i) : a;
  }, i;
}
const Ay = {
  draw(e, t) {
    const n = Vt(t / Qs);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Ki);
  }
}, gP = {
  draw(e, t) {
    const n = Vt(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, Dy = Vt(1 / 3), yP = Dy * 2, bP = {
  draw(e, t) {
    const n = Vt(t / yP), a = n * Dy;
    e.moveTo(0, -n), e.lineTo(a, 0), e.lineTo(0, n), e.lineTo(-a, 0), e.closePath();
  }
}, _P = {
  draw(e, t) {
    const n = Vt(t), a = -n / 2;
    e.rect(a, a, n, n);
  }
}, wP = 0.8908130915292852, My = Zs(Qs / 10) / Zs(7 * Qs / 10), xP = Zs(Ki / 10) * My, CP = -$y(Ki / 10) * My, $P = {
  draw(e, t) {
    const n = Vt(t * wP), a = xP * n, o = CP * n;
    e.moveTo(0, -n), e.lineTo(a, o);
    for (let r = 1; r < 5; ++r) {
      const s = Ki * r / 5, i = $y(s), u = Zs(s);
      e.lineTo(u * n, -i * n), e.lineTo(i * a - u * o, u * a + i * o);
    }
    e.closePath();
  }
}, Dl = Vt(3), kP = {
  draw(e, t) {
    const n = -Vt(t / (Dl * 3));
    e.moveTo(0, n * 2), e.lineTo(-Dl * n, -n), e.lineTo(Dl * n, -n), e.closePath();
  }
}, yt = -0.5, bt = Vt(3) / 2, Au = 1 / Vt(12), SP = (Au / 2 + 1) * 3, TP = {
  draw(e, t) {
    const n = Vt(t / SP), a = n / 2, o = n * Au, r = a, s = n * Au + n, i = -r, u = s;
    e.moveTo(a, o), e.lineTo(r, s), e.lineTo(i, u), e.lineTo(yt * a - bt * o, bt * a + yt * o), e.lineTo(yt * r - bt * s, bt * r + yt * s), e.lineTo(yt * i - bt * u, bt * i + yt * u), e.lineTo(yt * a + bt * o, yt * o - bt * a), e.lineTo(yt * r + bt * s, yt * s - bt * r), e.lineTo(yt * i + bt * u, yt * u - bt * i), e.closePath();
  }
};
function EP(e, t) {
  let n = null, a = Sy(o);
  e = typeof e == "function" ? e : Kt(e || Ay), t = typeof t == "function" ? t : Kt(t === void 0 ? 64 : +t);
  function o() {
    let r;
    if (n || (n = r = a()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r) return n = null, r + "" || null;
  }
  return o.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : Kt(r), o) : e;
  }, o.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : Kt(+r), o) : t;
  }, o.context = function(r) {
    return arguments.length ? (n = r ?? null, o) : n;
  }, o;
}
function Wn() {
}
function ei(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function ji(e) {
  this._context = e;
}
ji.prototype = {
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
        ei(this, this._x1, this._y1);
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
        ei(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function AP(e) {
  return new ji(e);
}
function By(e) {
  this._context = e;
}
By.prototype = {
  areaStart: Wn,
  areaEnd: Wn,
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
        ei(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function DP(e) {
  return new By(e);
}
function Oy(e) {
  this._context = e;
}
Oy.prototype = {
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
        ei(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function MP(e) {
  return new Oy(e);
}
function Py(e, t) {
  this._basis = new ji(e), this._beta = t;
}
Py.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], o = t[0], r = e[n] - a, s = t[n] - o, i = -1, u; ++i <= n; )
        u = i / n, this._basis.point(
          this._beta * e[i] + (1 - this._beta) * (a + u * r),
          this._beta * t[i] + (1 - this._beta) * (o + u * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const BP = function e(t) {
  function n(a) {
    return t === 1 ? new ji(a) : new Py(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function ti(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function kc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
kc.prototype = {
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
        ti(this, this._x1, this._y1);
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
        ti(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const OP = function e(t) {
  function n(a) {
    return new kc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Sc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Sc.prototype = {
  areaStart: Wn,
  areaEnd: Wn,
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
        ti(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const PP = function e(t) {
  function n(a) {
    return new Sc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Tc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Tc.prototype = {
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
        ti(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const IP = function e(t) {
  function n(a) {
    return new Tc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Ec(e, t, n) {
  var a = e._x1, o = e._y1, r = e._x2, s = e._y2;
  if (e._l01_a > Kp) {
    var i = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * i - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, o = (o * i - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > Kp) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, c = 3 * e._l23_a * (e._l23_a + e._l12_a);
    r = (r * d + e._x1 * e._l23_2a - t * e._l12_2a) / c, s = (s * d + e._y1 * e._l23_2a - n * e._l12_2a) / c;
  }
  e._context.bezierCurveTo(a, o, r, s, e._x2, e._y2);
}
function Iy(e, t) {
  this._context = e, this._alpha = t;
}
Iy.prototype = {
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
        Ec(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const RP = function e(t) {
  function n(a) {
    return t ? new Iy(a, t) : new kc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Ry(e, t) {
  this._context = e, this._alpha = t;
}
Ry.prototype = {
  areaStart: Wn,
  areaEnd: Wn,
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
        Ec(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const FP = function e(t) {
  function n(a) {
    return t ? new Ry(a, t) : new Sc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Fy(e, t) {
  this._context = e, this._alpha = t;
}
Fy.prototype = {
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
        Ec(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const VP = function e(t) {
  function n(a) {
    return t ? new Fy(a, t) : new Tc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Vy(e) {
  this._context = e;
}
Vy.prototype = {
  areaStart: Wn,
  areaEnd: Wn,
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
function NP(e) {
  return new Vy(e);
}
function jp(e) {
  return e < 0 ? -1 : 1;
}
function Yp(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, r = (e._y1 - e._y0) / (a || o < 0 && -0), s = (n - e._y1) / (o || a < 0 && -0), i = (r * o + s * a) / (a + o);
  return (jp(r) + jp(s)) * Math.min(Math.abs(r), Math.abs(s), 0.5 * Math.abs(i)) || 0;
}
function qp(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Ml(e, t, n) {
  var a = e._x0, o = e._y0, r = e._x1, s = e._y1, i = (r - a) / 3;
  e._context.bezierCurveTo(a + i, o + i * t, r - i, s - i * n, r, s);
}
function ni(e) {
  this._context = e;
}
ni.prototype = {
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
        Ml(this, this._t0, qp(this, this._t0));
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
          this._point = 3, Ml(this, qp(this, n = Yp(this, e, t)), n);
          break;
        default:
          Ml(this, this._t0, n = Yp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Ny(e) {
  this._context = new Ly(e);
}
(Ny.prototype = Object.create(ni.prototype)).point = function(e, t) {
  ni.prototype.point.call(this, t, e);
};
function Ly(e) {
  this._context = e;
}
Ly.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, a, o, r) {
    this._context.bezierCurveTo(t, e, a, n, r, o);
  }
};
function LP(e) {
  return new ni(e);
}
function zP(e) {
  return new Ny(e);
}
function zy(e) {
  this._context = e;
}
zy.prototype = {
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
        for (var a = Gp(e), o = Gp(t), r = 0, s = 1; s < n; ++r, ++s)
          this._context.bezierCurveTo(a[0][r], o[0][r], a[1][r], o[1][r], e[s], t[s]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Gp(e) {
  var t, n = e.length - 1, a, o = new Array(n), r = new Array(n), s = new Array(n);
  for (o[0] = 0, r[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) o[t] = 1, r[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) a = o[t] / r[t - 1], r[t] -= a, s[t] -= a * s[t - 1];
  for (o[n - 1] = s[n - 1] / r[n - 1], t = n - 2; t >= 0; --t) o[t] = (s[t] - o[t + 1]) / r[t];
  for (r[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) r[t] = 2 * e[t + 1] - o[t + 1];
  return [o, r];
}
function HP(e) {
  return new zy(e);
}
function Yi(e, t) {
  this._context = e, this._t = t;
}
Yi.prototype = {
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
function UP(e) {
  return new Yi(e, 0.5);
}
function WP(e) {
  return new Yi(e, 0);
}
function KP(e) {
  return new Yi(e, 1);
}
function Xp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function jP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xp(Object(n), !0).forEach(function(a) {
      YP(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xp(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Yo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yo = function(t) {
    return typeof t;
  } : Yo = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yo(e);
}
function YP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ai() {
  return ai = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
function qP(e, t) {
  if (e) {
    if (typeof e == "string") return Jp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jp(e, t);
  }
}
function Jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Hy(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = qP(e)) || t) {
      n && (e = n);
      var a = 0, o = function() {
      };
      return {
        s: o,
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
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r = !0, s = !1, i;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var u = n.next();
      return r = u.done, u;
    },
    e: function(u) {
      s = !0, i = u;
    },
    f: function() {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function GP(e, t) {
  var n = [], a = [];
  function o(r, s) {
    if (r.length === 1)
      n.push(r[0]), a.push(r[0]);
    else {
      for (var i = Array(r.length - 1), u = 0; u < i.length; u++)
        u === 0 && n.push(r[0]), u === i.length - 1 && a.push(r[u + 1]), i[u] = [(1 - s) * r[u][0] + s * r[u + 1][0], (1 - s) * r[u][1] + s * r[u + 1][1]];
      o(i, s);
    }
  }
  return e.length && o(e, t), {
    left: n,
    right: a.reverse()
  };
}
function XP(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function JP(e, t) {
  t = t || 2;
  for (var n = [], a = e, o = 1 / t, r = 0; r < t - 1; r++) {
    var s = o / (1 - o * r), i = GP(a, s);
    n.push(i.left), a = i.right;
  }
  return n.push(a), n;
}
function ZP(e, t, n) {
  var a = [[e.x, e.y]];
  return t.x1 != null && a.push([t.x1, t.y1]), t.x2 != null && a.push([t.x2, t.y2]), a.push([t.x, t.y]), JP(a, n).map(XP);
}
var QP = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, Wa = {
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
Object.keys(Wa).forEach(function(e) {
  Wa[e.toLowerCase()] = Wa[e];
});
function Du(e, t) {
  for (var n = Array(e), a = 0; a < e; a++)
    n[a] = t;
  return n;
}
function eI(e) {
  return "".concat(e.type).concat(Wa[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function tI(e, t) {
  var n = {
    x1: "x",
    y1: "y",
    x2: "x",
    y2: "y"
  }, a = ["xAxisRotation", "largeArcFlag", "sweepFlag"];
  if (e.type !== t.type && t.type.toUpperCase() !== "M") {
    var o = {};
    Object.keys(t).forEach(function(r) {
      var s = t[r], i = e[r];
      i === void 0 && (a.includes(r) ? i = s : (i === void 0 && n[r] && (i = e[n[r]]), i === void 0 && (i = 0))), o[r] = i;
    }), o.type = t.type, e = o;
  }
  return e;
}
function nI(e, t, n) {
  var a = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    a = a.concat(ZP(e, t, n));
  else {
    var o = ai({}, e);
    o.type === "M" && (o.type = "L"), a = a.concat(Du(n - 1).map(function() {
      return o;
    })), a.push(t);
  }
  return a;
}
function Zp(e, t, n) {
  var a = e.length - 1, o = t.length - 1, r = a / o, s = Du(o).reduce(function(u, d, c) {
    var f = Math.floor(r * c);
    if (n && f < e.length - 1 && n(e[f], e[f + 1])) {
      var p = r * c % 1 < 0.5;
      u[f] && (p ? f > 0 ? f -= 1 : f < e.length - 1 && (f += 1) : f < e.length - 1 ? f += 1 : f > 0 && (f -= 1));
    }
    return u[f] = (u[f] || 0) + 1, u;
  }, []), i = s.reduce(function(u, d, c) {
    if (c === e.length - 1) {
      var f = Du(d, ai({}, e[e.length - 1]));
      return f[0].type === "M" && f.forEach(function(p) {
        p.type = "L";
      }), u.concat(f);
    }
    return u.concat(nI(e[c], e[c + 1], d));
  }, []);
  return i.unshift(e[0]), i;
}
function Qp(e) {
  for (var t = (e || "").match(QP) || [], n = [], a, o, r = 0; r < t.length; ++r)
    if (a = Wa[t[r]], a) {
      o = {
        type: t[r]
      };
      for (var s = 0; s < a.length; ++s)
        o[a[s]] = +t[r + s + 1];
      r += a.length, n.push(o);
    }
  return n;
}
function aI(e, t, n) {
  var a = e == null ? [] : e.slice(), o = t == null ? [] : t.slice(), r = Yo(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, s = r.excludeSegment, i = r.snapEndsToInput;
  if (!a.length && !o.length)
    return function() {
      return [];
    };
  var u = (a.length === 0 || a[a.length - 1].type === "Z") && (o.length === 0 || o[o.length - 1].type === "Z");
  a.length > 0 && a[a.length - 1].type === "Z" && a.pop(), o.length > 0 && o[o.length - 1].type === "Z" && o.pop(), a.length ? o.length || o.push(a[0]) : a.push(o[0]);
  var d = Math.abs(o.length - a.length);
  d !== 0 && (o.length > a.length ? a = Zp(a, o, s) : o.length < a.length && (o = Zp(o, a, s))), a = a.map(function(f, p) {
    return tI(f, o[p]);
  });
  var c = a.map(function(f) {
    return jP({}, f);
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
      var v = a[h], m = o[h], b = c[h], $ = Hy(Wa[b.type]), k;
      try {
        for ($.s(); !(k = $.n()).done; ) {
          var C = k.value;
          b[C] = (1 - p) * v[C] + p * m[C], (C === "largeArcFlag" || C === "sweepFlag") && (b[C] = Math.round(b[C]));
        }
      } catch (E) {
        $.e(E);
      } finally {
        $.f();
      }
    }
    return c;
  };
}
function oI(e, t, n) {
  var a = Qp(e), o = Qp(t), r = Yo(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, s = r.excludeSegment, i = r.snapEndsToInput;
  if (!a.length && !o.length)
    return function() {
      return "";
    };
  var u = aI(a, o, {
    excludeSegment: s,
    snapEndsToInput: i
  });
  return function(c) {
    if (c === 1 && i)
      return t ?? "";
    var f = u(c), p = "", h = Hy(f), v;
    try {
      for (h.s(); !(v = h.n()).done; ) {
        var m = v.value;
        p += eI(m);
      }
    } catch (b) {
      h.e(b);
    } finally {
      h.f();
    }
    return p;
  };
}
function ps(e, t, n, a) {
  return Array.isArray(t) && isFinite(n) ? t[n % t.length] : Jd(e, t, n) || (La(n) ? `var(${In(n)})` : null);
}
var Ie;
(function(e) {
  e.Basis = "basis", e.BasisClosed = "basisClosed", e.BasisOpen = "basisOpen", e.Bundle = "bundle", e.Cardinal = "cardinal", e.CardinalClosed = "cardinalClosed", e.CardinalOpen = "cardinalOpen", e.CatmullRom = "catmullRom", e.CatmullRomClosed = "catmullRomClosed", e.CatmullRomOpen = "catmullRomOpen", e.Linear = "linear", e.LinearClosed = "linearClosed", e.MonotoneX = "monotoneX", e.MonotoneY = "monotoneY", e.Natural = "natural", e.Step = "step", e.StepAfter = "stepAfter", e.StepBefore = "stepBefore";
})(Ie || (Ie = {}));
const eh = {
  [Ie.Basis]: AP,
  [Ie.BasisClosed]: DP,
  [Ie.BasisOpen]: MP,
  [Ie.Bundle]: BP,
  [Ie.Cardinal]: OP,
  [Ie.CardinalClosed]: PP,
  [Ie.CardinalOpen]: IP,
  [Ie.CatmullRom]: RP,
  [Ie.CatmullRomClosed]: FP,
  [Ie.CatmullRomOpen]: VP,
  [Ie.Linear]: Ey,
  [Ie.LinearClosed]: NP,
  [Ie.MonotoneX]: LP,
  [Ie.MonotoneY]: zP,
  [Ie.Natural]: HP,
  [Ie.Step]: UP,
  [Ie.StepAfter]: KP,
  [Ie.StepBefore]: WP
}, rI = Object.assign(Object.assign({}, $c), { curveType: Ie.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: !1, cursor: null, interpolateMissingData: !1 }), sI = Vi`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, iI = Fe`
  label: line-component;
`, Lo = Fe`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, Mu = Fe`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, Bu = Fe`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, Ou = Fe`
  opacity: 0.2;
`, Pu = Fe`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, lI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dim: Ou,
  globalStyles: sI,
  interpolatedPath: Pu,
  line: Lo,
  linePath: Mu,
  lineSelectionHelper: Bu,
  root: iI
}, Symbol.toStringTag, { value: "Module" }));
class qi extends Cy {
  constructor(t) {
    super(), this._defaultConfig = rI, this.config = this._defaultConfig, this.curve = eh[Ie.MonotoneX], this.events = {
      [qi.selectors.line]: {
        mouseover: this._highlight.bind(this),
        mouseleave: this._resetHighlight.bind(this)
      }
    }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), o = (this.yScale.range()[0] > this.yScale.range()[1] ? sa.North : sa.South) === sa.South, r = t > 3, s = t >= 10;
    return {
      top: !s && (!o && n[1] === 0 || o && n[0] === 0) ? 0 : t / 2,
      bottom: !s && (!o && n[0] === 0 || o && n[1] === 0) ? 0 : t / 2,
      left: r ? t / 2 : 0,
      right: r ? t / 2 : 0
    };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: a } } = this, o = La(t) ? t : n.duration;
    this.curve = eh[n.curveType], this.lineGen = mP().x((f) => f.x).y((f) => f.y).defined((f) => f.defined).curve(this.curve);
    const r = Gd(n.y) ? n.y : [n.y], s = a.map((f, p) => this.xScale(tr(f, n.x, p))), i = r.map((f) => {
      const p = a.map(($, k) => {
        const C = tr($, f, k), E = (La(C) || C === null) && isFinite(C) ? C : n.fallbackValue, T = n.interpolateMissingData ? (La(C) || C === null) && isFinite(C) : isFinite(E);
        return {
          x: s[k],
          y: this.yScale(E ?? 0),
          defined: T,
          value: E
        };
      }), h = p.reduce(($, k) => k.defined || $, !1);
      let v = !1;
      const m = p.reduce(($, k, C) => {
        !k.defined && isFinite(n.fallbackValue) && $.push(Object.assign(Object.assign({}, k), { defined: !0 })), !k.defined && !v && (v = !0);
        const E = C > 0 && !p[C - 1].defined || C < p.length - 1 && !p[C + 1].defined;
        return k.defined && E && (v || $.push(Object.assign(Object.assign({}, k), { defined: !1 })), $.push(k), v = !1), $;
      }, []), b = h && p.some(($) => $.value !== null);
      return {
        values: p,
        defined: h,
        gaps: m,
        visible: b
      };
    }), u = this.g.selectAll(`.${Lo}`).data(i), d = u.enter().append("g").attr("class", Lo);
    d.append("path").attr("class", Mu).attr("stroke", (f, p) => ps(a, n.color, p)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), d.append("path").attr("class", Bu).attr("d", this._emptyPath()), d.append("path").attr("class", Pu).attr("d", this._emptyPath()).style("opacity", 0);
    const c = d.merge(u);
    c.style("cursor", (f, p) => Jd(a, n.cursor, p)), c.each((f, p, h) => {
      var v;
      const m = Bt(h[p]), b = m.select(`.${Mu}`), $ = m.select(`.${Bu}`), k = m.select(`.${Pu}`), C = f.visible, E = Xd(a, n.lineDashArray, p), T = ea(b, o).attr("stroke", ps(a, n.color, p)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", C ? 1 : 0).style("stroke-dasharray", (v = E == null ? void 0 : E.join(" ")) !== null && v !== void 0 ? v : null), D = f.values.some((N) => !N.defined), A = this.lineGen(f.values);
      if (o && !D) {
        const N = b.attr("d") || this._emptyPath(), R = A || this._emptyPath();
        T.attrTween("d", () => oI(N, R));
      } else f.visible && T.attr("d", A);
      $.attr("d", A).attr("visibility", C ? null : "hidden"), D && n.interpolateMissingData ? ea(k, o).attr("d", this.lineGen(f.gaps)).attr("stroke", ps(a, n.color, p)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : k.transition().duration(o).style("opacity", 0);
    }), ea(u.exit(), o).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${Lo}`).classed(Ou, (a) => a !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${Lo}`).classed(Ou, !1);
  }
}
qi.selectors = lI;
function uI(e) {
  return e;
}
var hs = 1, vs = 2, Iu = 3, zo = 4, th = 1e-6;
function dI(e) {
  return "translate(" + e + ",0)";
}
function cI(e) {
  return "translate(0," + e + ")";
}
function fI(e) {
  return (t) => +e(t);
}
function pI(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function hI() {
  return !this.__axis;
}
function Gi(e, t) {
  var n = [], a = null, o = null, r = 6, s = 6, i = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, d = e === hs || e === zo ? -1 : 1, c = e === zo || e === vs ? "x" : "y", f = e === hs || e === Iu ? dI : cI;
  function p(h) {
    var v = a ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = o ?? (t.tickFormat ? t.tickFormat.apply(t, n) : uI), b = Math.max(r, 0) + i, $ = t.range(), k = +$[0] + u, C = +$[$.length - 1] + u, E = (t.bandwidth ? pI : fI)(t.copy(), u), T = h.selection ? h.selection() : h, D = T.selectAll(".domain").data([null]), A = T.selectAll(".tick").data(v, t).order(), N = A.exit(), R = A.enter().append("g").attr("class", "tick"), P = A.select("line"), I = A.select("text");
    D = D.merge(D.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(R), P = P.merge(R.append("line").attr("stroke", "currentColor").attr(c + "2", d * r)), I = I.merge(R.append("text").attr("fill", "currentColor").attr(c, d * b).attr("dy", e === hs ? "0em" : e === Iu ? "0.71em" : "0.32em")), h !== T && (D = D.transition(h), A = A.transition(h), P = P.transition(h), I = I.transition(h), N = N.transition(h).attr("opacity", th).attr("transform", function(V) {
      return isFinite(V = E(V)) ? f(V + u) : this.getAttribute("transform");
    }), R.attr("opacity", th).attr("transform", function(V) {
      var Y = this.parentNode.__axis;
      return f((Y && isFinite(Y = Y(V)) ? Y : E(V)) + u);
    })), N.remove(), D.attr("d", e === zo || e === vs ? s ? "M" + d * s + "," + k + "H" + u + "V" + C + "H" + d * s : "M" + u + "," + k + "V" + C : s ? "M" + k + "," + d * s + "V" + u + "H" + C + "V" + d * s : "M" + k + "," + u + "H" + C), A.attr("opacity", 1).attr("transform", function(V) {
      return f(E(V) + u);
    }), P.attr(c + "2", d * r), I.attr(c, d * b).text(m), T.filter(hI).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === vs ? "start" : e === zo ? "end" : "middle"), T.each(function() {
      this.__axis = E;
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
    return arguments.length ? (o = h, p) : o;
  }, p.tickSize = function(h) {
    return arguments.length ? (r = s = +h, p) : r;
  }, p.tickSizeInner = function(h) {
    return arguments.length ? (r = +h, p) : r;
  }, p.tickSizeOuter = function(h) {
    return arguments.length ? (s = +h, p) : s;
  }, p.tickPadding = function(h) {
    return arguments.length ? (i = +h, p) : i;
  }, p.offset = function(h) {
    return arguments.length ? (u = +h, p) : u;
  }, p;
}
function nh(e) {
  return Gi(hs, e);
}
function ah(e) {
  return Gi(vs, e);
}
function oh(e) {
  return Gi(Iu, e);
}
function rh(e) {
  return Gi(zo, e);
}
var ia;
(function(e) {
  e.Start = "start", e.Middle = "middle", e.End = "end";
})(ia || (ia = {}));
var la;
(function(e) {
  e.Top = "top", e.Middle = "middle", e.Bottom = "bottom";
})(la || (la = {}));
var oi;
(function(e) {
  e.Wrap = "wrap", e.Trim = "trim";
})(oi || (oi = {}));
var At;
(function(e) {
  e.Left = "left", e.Center = "center", e.Right = "right";
})(At || (At = {}));
var Uy = { exports: {} };
(function(e) {
  (function(t) {
    if (typeof n != "function") {
      var n = function(v) {
        return v;
      };
      n.nonNative = !0;
    }
    const a = n("plaintext"), o = n("html"), r = n("comment"), s = /<(\w*)>/g, i = /<\/?([^\s\/>]+)/;
    function u(v, m, b) {
      v = v || "", m = m || [], b = b || "";
      let $ = c(m, b);
      return f(v, $);
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
      let b = m.allowable_tags, $ = m.tag_replacement, k = m.state, C = m.tag_buffer, E = m.depth, T = m.in_quote_char, D = "";
      for (let A = 0, N = v.length; A < N; A++) {
        let R = v[A];
        if (k === a)
          switch (R) {
            case "<":
              k = o, C += R;
              break;
            default:
              D += R;
              break;
          }
        else if (k === o)
          switch (R) {
            case "<":
              if (T)
                break;
              E++;
              break;
            case ">":
              if (T)
                break;
              if (E) {
                E--;
                break;
              }
              T = "", k = a, C += ">", b.has(h(C)) ? D += C : D += $, C = "";
              break;
            case '"':
            case "'":
              R === T ? T = "" : T = T || R, C += R;
              break;
            case "-":
              C === "<!-" && (k = r), C += R;
              break;
            case " ":
            case `
`:
              if (C === "<") {
                k = a, D += "< ", C = "";
                break;
              }
              C += R;
              break;
            default:
              C += R;
              break;
          }
        else if (k === r)
          switch (R) {
            case ">":
              C.slice(-2) == "--" && (k = a), C = "";
              break;
            default:
              C += R;
              break;
          }
      }
      return m.state = k, m.tag_buffer = C, m.depth = E, m.in_quote_char = T, D;
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
  })(vM);
})(Uy);
var vI = Uy.exports;
const mI = /* @__PURE__ */ mM(vI);
function gI(e) {
  switch (e) {
    case At.Center:
      return "middle";
    case At.Right:
      return "end";
    case At.Left:
    default:
      return "start";
  }
}
function yI(e) {
  var t;
  return (t = e.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)) === null || t === void 0 ? void 0 : t.filter(Boolean).map((n) => n.toLowerCase()).join("-");
}
function bI(e) {
  return e.replace(/['"]/g, "&#39;").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}
function _I(e, t = 15) {
  return e ? e.length > t ? `…${e.substr(e.length - t, t)}` : e : "";
}
function wI(e, t = 15) {
  if (!e)
    return "";
  const n = Math.floor((t - 3) / 2);
  return e.length > t ? `${e.substr(0, n)}…${e.substr(-n, n)}` : e;
}
function xI(e, t = 15) {
  return e ? e.length > t ? `${e.substr(0, t)}…` : e : "";
}
function CI(e, t = 15, n = ia.Middle) {
  if (!e)
    return "";
  let a = xI(e, t);
  return n === ia.Start ? a = _I(e, t) : n === ia.Middle && (a = wI(e, t)), a;
}
function $I(e, t = [" "]) {
  let n = [e];
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    n.forEach((r, s) => {
      const i = r.split(o), u = i.map((d, c) => `${d}${c === i.length - 1 ? "" : o}`);
      n[s] = u;
    }), n = fu(n);
  }
  return n;
}
function kI(e, t, n, a, o, r) {
  var s;
  t === void 0 && (t = 50), n === void 0 && (n = ia.Middle), o === void 0 && (o = +((s = window.getComputedStyle(e.node())) === null || s === void 0 ? void 0 : s.fontSize) || 0);
  const i = e.text(), u = i.length, d = o * u * r, f = Math.ceil(u * t / (1.1 * d));
  return f < u ? (e.text(CI(i, f, n)), !0) : !1;
}
function ms(e, t, n = FM()) {
  return e.length * t * n || 0;
}
function gs(e, t, n) {
  const a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), r = document.createElementNS(a, "text");
  r.textContent = e, r.setAttribute("font-size", `${n}`), r.setAttribute("font-family", t), o.appendChild(r), document.body.appendChild(o);
  const s = r.getComputedTextLength();
  return document.body.removeChild(o), s;
}
function SI(e, t = void 0, n = !0, a = Vg, o = !1) {
  const r = `${e.text}`;
  if (!r)
    return [];
  const s = Array.isArray(a) ? a : [a];
  return r.split(`
`).map((u) => {
    const d = [];
    if (!t)
      return [u];
    const c = $I(u, s);
    let f = "";
    for (let p = 0; p < c.length; p += 1) {
      (n ? ms(f + c[p], e.fontSize, e.fontWidthToHeightRatio) : gs(f + c[p], e.fontFamily, e.fontSize)) < t || p === 0 ? f += c[p] : (d.push(f.trim()), f = c[p]);
      const v = 2;
      if (o)
        for (; f.trim().length > v && (n ? ms(f, e.fontSize, e.fontWidthToHeightRatio) : gs(f, e.fontFamily, e.fontSize)) > t; ) {
          let b = f.trim().length - v;
          for (; b > 0; ) {
            const $ = `${f.substring(0, b)}${Ng}`;
            if ((n ? ms($, e.fontSize, e.fontWidthToHeightRatio) : gs($, e.fontFamily, e.fontSize)) <= t || b === 1) {
              d.push($.trim()), f = f.substring(b);
              break;
            }
            b--;
          }
        }
    }
    return f && d.push(f.trim()), d;
  }).flat();
}
function TI(e, t = void 0, n = void 0, a = !0, o = Vg, r = !1) {
  const s = Array.isArray(e) ? e.map((f) => no(dp, f)) : [no(dp, e)], i = s.map((f) => SI(f, t, a, o, r)), u = s[0];
  let d = -u.fontSize * (u.lineHeight - 1);
  const c = [];
  return s.forEach((f, p) => {
    var h;
    let v = i[p];
    const m = p > 0 ? c[p - 1] : void 0, b = m ? m.marginBottom : 0, $ = f.marginTop, k = Math.max(b, $);
    d += k;
    const C = f.fontSize * f.lineHeight;
    let E = 0;
    for (let T = 0; T < v.length; T += 1) {
      let D = v[T];
      d += C;
      const A = `${D} …`, N = a ? ms(A, f.fontSize, f.fontWidthToHeightRatio) : gs(A, f.fontFamily, f.fontSize);
      if (E = Math.max(N, E), n && d + C > n && T !== v.length - 1) {
        D.charAt(D.length - 1) === Ng && (D = D.substr(0, v[T].length - 1)), N < t ? v[T] = A : v[T] = `${v[T].substr(0, v[T].length - 2)}…`, v = v.slice(0, T + 1);
        break;
      }
    }
    c.push(Object.assign(Object.assign({}, f), { _lines: v, _estimatedHeight: d - ((m == null ? void 0 : m._estimatedHeight) || 0), _maxWidth: Math.max(E, (h = m == null ? void 0 : m._maxWidth) !== null && h !== void 0 ? h : 0) }));
  }), c;
}
function EI(e, t = 0, n) {
  return e.map((a, o) => {
    const r = o > 0 ? e[o - 1] : void 0, s = r ? r.marginBottom / r.fontSize : 0, i = a.marginTop / a.fontSize, u = Math.max(s, i), d = {
      fontSize: a.fontSize,
      fontFamily: a.fontFamily,
      fontWeight: a.fontWeight,
      fill: a.color,
      y: o === 0 && n
    };
    return `<tspan xmlns="http://www.w3.org/2000/svg" ${Object.entries(d).filter(([f, p]) => p).map(([f, p]) => `${yI(f)}="${bI(p.toString())}"`).join(" ")}>${a._lines.map((f, p) => {
      let h;
      return o === 0 && p === 0 ? h = 0.8 + u : p === 0 ? h = u + a.lineHeight : h = a.lineHeight, `<tspan x="${t}" dy="${h}em">${f.length ? f : " "}</tspan>`;
    }).join("")}</tspan>`;
  });
}
function AI(e) {
  return nD(e, (t) => t._estimatedHeight);
}
const DI = ["text", "tspan", "textPath", "altGlyph", "altGlyphDef", "altGlyphItem", "glyphRef", "textRef", "textArea"];
function MI(e, t, n, a) {
  var o, r;
  const s = TI(t, n.width, void 0, n.fastMode, n.separator, n.wordBreak), i = (o = n.x) !== null && o !== void 0 ? o : +e.getAttribute("x"), u = (r = n.y) !== null && r !== void 0 ? r : +e.getAttribute("y"), d = i ?? 0;
  let c = u ?? 0;
  if (n.textAlign && e.setAttribute("text-anchor", gI(n.textAlign)), n.verticalAlign && n.verticalAlign !== la.Top) {
    const f = AI(s), p = n.verticalAlign === la.Middle ? -f / 2 : n.verticalAlign === la.Bottom ? -f : 0;
    c += p;
  }
  n.textRotationAngle ? e.setAttribute("transform", `rotate(${n.textRotationAngle === 0 || n.textRotationAngle ? n.textRotationAngle : 0} ${d} ${c})`) : e.removeAttribute("transform");
  {
    const f = new DOMParser();
    e.textContent = "", s.forEach((p) => {
      const h = EI([p], d, c).join(""), v = mI(h, DI), m = f.parseFromString(v, "image/svg+xml").firstChild;
      e.appendChild(m);
    });
  }
}
const BI = Object.assign(Object.assign({}, $c), { position: void 0, type: void 0, label: void 0, labelFontSize: null, gridLine: !0, tickLine: !0, domainLine: !0, numTicks: void 0, minMaxTicksOnly: !1, minMaxTicksOnlyWhenWidthIsLess: 250, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: !1, tickTextTrimType: ia.Middle, tickTextFitMode: oi.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: !0, tickPadding: 8, tickTextHideOverlapping: void 0 }), Wy = Fe`
  label: axis-component;
`, OI = Vi`
  :root {
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-axis-font-family: */
    --vis-axis-tick-color: #e8e9ef;
    /* --vis-axis-domain-color: // Undefined by default to allow fallback to var(--vis-axis-tick-color) */
    --vis-axis-grid-color: #e8e9ef;
    --vis-axis-label-color: #6c778c;
    --vis-axis-tick-label-color: #6c778c;
    --vis-axis-tick-label-font-size: 12px;
    --vis-axis-tick-label-cursor: default;
    --vis-axis-tick-label-text-decoration: none;
    --vis-axis-label-font-size: 14px;
    --vis-axis-tick-line-width: 1px;
    --vis-axis-tick-label-hide-transition: opacity 400ms ease-in-out;
    --vis-axis-grid-line-width: 1px;
    /* --vis-axis-domain-line-width: // Undefined by default to allow fallback to var(--vis-axis-grid-line-width) */

    --vis-dark-axis-tick-color: #6c778c;
    /* --vis-dark-axis-domain-color: // Undefined by default to allow fallback to var(--vis-dark-axis-tick-color) */
    --vis-dark-axis-tick-label-color: #e8e9ef;
    --vis-dark-axis-grid-color: #6c778c;
    --vis-dark-axis-label-color: #fefefe;
  }

  body.theme-dark ${`.${Wy}`} {
    --vis-axis-tick-color: var(--vis-dark-axis-tick-color);
    --vis-axis-domain-color: var(--vis-dark-axis-domain-color);
    --vis-axis-tick-label-color: var(--vis-dark-axis-tick-label-color);
    --vis-axis-grid-color: var(--vis-dark-axis-grid-color);
    --vis-axis-label-color: var(--vis-dark-axis-label-color);
  }
`, Ac = Fe`
  label: hide-tick-line;
`, Dc = Fe`
  label: hide-domain;
`, Ky = Fe`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
  }

  &${`.${Ac}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${Dc}`} {
    .domain {
      opacity: 0;
    }
  }
`, jy = Fe`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
  }
`, Yy = Fe`
  label: tick;

  stroke: none;
  font-size: var(--vis-axis-tick-label-font-size);

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
`, Ru = Fe`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, qy = Fe`
  label: tick-label;
`, Gy = Fe`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, PI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  axis: Ky,
  globalStyles: OI,
  grid: jy,
  hideDomain: Dc,
  hideTickLine: Ac,
  label: Ru,
  root: Wy,
  tick: Yy,
  tickLabel: qy,
  tickLabelHideable: Gy
}, Symbol.toStringTag, { value: "Module" }));
class Xy extends Cy {
  constructor(t) {
    super(), this._defaultConfig = BI, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", jy);
  }
  /** Renders axis to an invisible grouped to calculate automatic chart margins */
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === Ee.X ? Ce.Bottom : Ce.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: a } } = this;
    switch (n) {
      case Ee.X: {
        const r = this._axisSizeBBox.x + this._axisSizeBBox.width, s = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, i = r - this._width > 1 ? r - this._width : 0;
        switch (a) {
          case Ce.Top:
            return { top: t.height, left: s, right: i };
          case Ce.Bottom:
          default:
            return { bottom: t.height, left: s, right: i };
        }
      }
      case Ee.Y: {
        const o = t.height > this._height ? (t.height - this._height) / 2 : 0, r = o, s = o;
        switch (a) {
          case Ce.Right:
            return { right: t.width, top: r, bottom: s };
          case Ce.Left:
          default:
            return { left: t.width, top: r, bottom: s };
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
      case Ee.X:
        switch (a) {
          case Ce.Top:
            return { top: t.top, left: t.left };
          case Ce.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case Ee.Y:
        switch (a) {
          case Ce.Right:
            return { top: t.top, left: t.left + this._width };
          case Ce.Left:
          default:
            return { top: t.top, left: t.left };
        }
    }
  }
  _render(t = this.config.duration, n = this.axisGroup) {
    const { config: a } = this;
    if (this._renderAxis(n, t), this._renderAxisLabel(n), a.gridLine) {
      const o = this._buildGrid().tickFormat(() => "");
      o.tickValues(this._getConfiguredTickValues()), this.gridGroup.selectAll("*").interrupt(), ea(this.gridGroup, t).call(o).style("opacity", 1);
    } else
      ea(this.gridGroup, t).style("opacity", 0);
    a.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: a } } = this, o = this._getNumTicks();
    switch (t) {
      case Ee.X:
        switch (n) {
          case Ce.Top:
            return nh(this.xScale).ticks(o).tickPadding(a);
          case Ce.Bottom:
          default:
            return oh(this.xScale).ticks(o).tickPadding(a);
        }
      case Ee.Y:
        switch (n) {
          case Ce.Right:
            return ah(this.yScale).ticks(o).tickPadding(a);
          case Ce.Left:
          default:
            return rh(this.yScale).ticks(o).tickPadding(a);
        }
    }
  }
  _buildGrid() {
    const { config: { type: t, position: n } } = this, a = this._getNumTicks();
    switch (t) {
      case Ee.X:
        switch (n) {
          case Ce.Top:
            return nh(this.xScale).ticks(a * 2).tickSize(-this._height).tickSizeOuter(0);
          case Ce.Bottom:
          default:
            return oh(this.xScale).ticks(a * 2).tickSize(-this._height).tickSizeOuter(0);
        }
      case Ee.Y:
        switch (n) {
          case Ce.Right:
            return ah(this.yScale).ticks(a * 2).tickSize(-this._width).tickSizeOuter(0);
          case Ce.Left:
          default:
            return rh(this.yScale).ticks(a * 2).tickSize(-this._width).tickSizeOuter(0);
        }
    }
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: a } = this, o = this._buildAxis(), r = this._getConfiguredTickValues() || o.scale().ticks(this._getNumTicks());
    o.tickValues(r), t.selectAll("*").interrupt(), ea(t, n).call(o);
    const s = t.selectAll("g.tick");
    s.classed(Yy, !0).style("font-size", a.tickTextFontSize);
    const i = t.selectAll("g.tick > text").filter((u) => r.some((d) => er(u, d))).classed(qy, !0).classed(Gy, !!a.tickTextHideOverlapping).style("fill", a.tickTextColor);
    if (i.nodes().forEach((u) => sc(u)), i.each((u, d, c) => {
      var f, p;
      let h = (p = (f = a.tickFormat) === null || f === void 0 ? void 0 : f.call(a, u, d, r)) !== null && p !== void 0 ? p : `${u}`;
      const v = c[d], m = a.tickTextWidth || (a.type === Ee.X ? this._containerWidth / (s.size() + 1) : this._containerWidth / 5), b = getComputedStyle(v), $ = Number.parseFloat(b.fontSize), k = b.fontFamily, C = {
        verticalAlign: a.type === Ee.X ? la.Top : la.Middle,
        width: m,
        textRotationAngle: a.tickTextAngle,
        separator: a.tickTextSeparator,
        wordBreak: a.tickTextForceWordBreak
      };
      if (a.tickTextFitMode === oi.Trim) {
        const T = Bt(v).text(h);
        kI(T, m, a.tickTextTrimType, !0, $, 0.58), h = Bt(v).text();
      }
      MI(v, { text: h, fontFamily: k, fontSize: $ }, C);
    }), t.classed(Ky, !0).classed(Ac, !a.tickLine).classed(Dc, !a.domainLine), a.fullSize) {
      const u = this._getFullDomainPath(0);
      ea(t.select(".domain"), n).attr("d", u);
    }
  }
  _resolveTickLabelOverlap(t = this.axisGroup) {
    const { config: n } = this, a = t.selectAll("g.tick > text");
    if (!n.tickTextHideOverlapping) {
      a.style("opacity", null);
      return;
    }
    cancelAnimationFrame(this._collideTickLabelsAnimFrameId), this._collideTickLabelsAnimFrameId = requestAnimationFrame(() => {
      this._collideTickLabels(a);
    });
  }
  _collideTickLabels(t) {
    t.each((a, o, r) => {
      const s = r[o];
      s._visible = !0;
    });
    const n = 3;
    for (let a = 0; a < n; a += 1)
      t.each((o, r, s) => {
        const i = s[r];
        if (!i._visible)
          return;
        const d = i.getBoundingClientRect();
        for (let c = r + 1; c < s.length; c += 1) {
          if (r === c)
            continue;
          const f = s[c];
          if (f._visible) {
            const h = f.getBoundingClientRect();
            if (bM(d, h, -5)) {
              f._visible = !1;
              break;
            }
          }
        }
      });
    t.each((a, o, r) => {
      const s = r[o];
      Bt(s).style("opacity", s._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n)
      return n;
    if (t === Ee.X) {
      const a = this.xScale.range(), o = a[1] - a[0];
      return Math.floor(o / 175);
    }
    if (t === Ee.Y) {
      const a = this.yScale.range(), o = Math.abs(a[0] - a[1]);
      return Math.pow(o, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === Ee.X ? this.xScale : this.yScale, a = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((o) => o >= a[0] && o <= a[1]) : t.minMaxTicksOnly || t.type === Ee.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess ? a : null;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case Ee.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case Ee.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: a, label: o, labelMargin: r, labelFontSize: s } = this.config;
    t.selectAll(`.${Ru}`).remove();
    const i = this.getPosition(), { width: u, height: d } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), c = a === Ee.X ? this._width / 2 : Math.pow(-1, +(i === Ce.Left)) * u, f = a === Ee.X ? Math.pow(-1, +(i === Ce.Top)) * d : this._height / 2, p = a === Ee.X ? 0 : Math.pow(-1, +(i === Ce.Left)) * r, h = a === Ee.X ? Math.pow(-1, +(i === Ce.Top)) * r : 0, v = a === Ee.Y ? -90 : 0;
    t.append("text").attr("class", Ru).text(o).attr("dy", `${this._getLabelDY()}em`).attr("transform", `translate(${c + p},${f + h}) rotate(${v})`).style("font-size", s).style("fill", this.config.labelColor);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case Ee.X:
        switch (n) {
          case Ce.Top:
            return 0;
          case Ce.Bottom:
          default:
            return 0.75;
        }
      case Ee.Y:
        switch (n) {
          case Ce.Right:
            return 0.75;
          case Ce.Left:
          default:
            return -0.25;
        }
    }
  }
  _alignTickLabels() {
    const { config: { type: t, tickTextAlign: n, tickTextAngle: a, position: o } } = this, r = this.g.selectAll("g.tick > text"), s = this._getTickTextAnchor(n), i = t === Ee.X ? 0 : this._getYTickTextTranslate(n, o), u = a ? `translate(${i},0) rotate(${a})` : `translate(${i},0)`;
    r.attr("transform", u).attr("text-anchor", s);
  }
  _getTickTextAnchor(t) {
    switch (t) {
      case At.Left:
        return "start";
      case At.Right:
        return "end";
      case At.Center:
        return "middle";
      default:
        return null;
    }
  }
  _getYTickTextTranslate(t, n = Ce.Left) {
    const o = this._axisRawBBox.width - 9;
    switch (t) {
      case At.Left:
        return n === Ce.Left ? o * -1 : 0;
      case At.Right:
        return n === Ce.Left ? 0 : o;
      case At.Center:
        return n === Ce.Left ? o * -0.5 : o * 0.5;
      default:
        return 0;
    }
  }
}
Xy.selectors = PI;
var Ut;
(function(e) {
  e.Circle = "circle", e.Cross = "cross", e.Diamond = "diamond", e.Square = "square", e.Star = "star", e.Triangle = "triangle", e.Wye = "wye";
})(Ut || (Ut = {}));
const II = {
  [Ut.Circle]: Ay,
  [Ut.Cross]: gP,
  [Ut.Diamond]: bP,
  [Ut.Square]: _P,
  [Ut.Star]: $P,
  [Ut.Triangle]: kP,
  [Ut.Wye]: TP
}, ct = Object.assign(Object.assign({}, Ut), { Line: "line" });
var ri;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(ri || (ri = {}));
const RI = {
  items: [],
  labelClassName: "",
  onLegendItemClick: void 0,
  labelFontSize: null,
  labelMaxWidth: null,
  bulletSize: null,
  bulletShape: (e) => {
    var t;
    return (t = e.shape) !== null && t !== void 0 ? t : ct.Circle;
  },
  orientation: ri.Horizontal,
  renderIntoProvidedDomNode: !1
}, Bl = lr * 3, FI = {
  [ct.Circle]: Math.PI / 4,
  [ct.Cross]: 5 / 9,
  [ct.Diamond]: Math.sqrt(3) / 6,
  [ct.Square]: 1,
  [ct.Star]: 0.3,
  [ct.Triangle]: Math.sqrt(3) / 4,
  [ct.Wye]: 5 / 11
};
function VI(e) {
  e.each((t, n, a) => {
    Bt(a[n]).append("svg").attr("width", "100%").attr("height", "100%").append("path");
  });
}
function NI(e, t, n) {
  e.each((a, o, r) => {
    const s = Jd(a, t.bulletShape, o), i = ps(a, n, o), u = Bl, d = s === ct.Line ? Bl / 2.5 : Bl, f = Bt(r[o]).select("svg").attr("viewBox", `0 0 ${u} ${d}`).select("path").attr("stroke", i), p = a.inactive ? "var(--vis-legend-bullet-inactive-opacity)" : 1;
    if (s === ct.Line)
      f.attr("d", `M0,${d / 2} L${u / 2},${d / 2} L${u},${d / 2}`).attr("transform", null).style("opacity", p).style("stroke-width", "3px").style("fill", null).style("fill-opacity", null).style("marker-start", "none").style("marker-end", "none");
    else {
      const h = EP().type(II[s]).size(u * d * FI[s]), v = (u - 2) / u;
      let m = d / 2;
      switch (s) {
        case ct.Triangle:
          m += d / 8;
          break;
        case ct.Star:
          m += d / 16;
          break;
        case ct.Wye:
          m -= d / 16;
          break;
      }
      f.attr("d", h).attr("transform", `translate(${u / 2}, ${Math.round(m)}) scale(${v})`).style("stroke-width", "1px").style("opacity", null).style("fill", i).style("fill-opacity", p);
    }
  });
}
const Mc = Fe`
  label: bullet-legend-component;
`, LI = Vi`
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

  body.theme-dark ${`.${Mc}`} {
    --vis-legend-label-color: var(--vis-dark-legend-label-color);
  }

  body.theme-patterns {
    --vis-legend-bullet-size: 14px;
  }
`, ys = Fe`
  label: legendItem;
  display: inline-flex;
  align-items: center;
  font-family: var(--vis-legend-font-family, var(--vis-font-family));
  margin-right: var(--vis-legend-item-spacing);
  white-space: nowrap;
  cursor: default;
  user-select: none;
  max-width: min-content;
`, Jy = Fe`
  label: legendItemVertical;
  display: flex;
  margin-top: var(--vis-legend-vertical-item-spacing);
`, Zy = Fe`
  cursor: pointer;
`, Fu = Fe`
  label: legendItemLabel;
  font-size: var(--vis-legend-label-font-size);
  display: inline-block;
  vertical-align: middle;
  color: var(--vis-legend-label-color);
  max-width: var(--vis-legend-label-max-width);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`, Vu = Fe`
  flex: 0 0 auto;
  label: legendItemBullet;
  margin-right: var(--vis-legend-bullet-label-spacing);
  height: var(--vis-legend-bullet-size);
  width: var(--vis-legend-bullet-size);

  svg {
    display: block;
  }
`, zI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bullet: Vu,
  clickable: Zy,
  item: ys,
  itemVertical: Jy,
  label: Fu,
  root: Mc,
  variables: LI
}, Symbol.toStringTag, { value: "Module" }));
class Qy {
  constructor(t, n) {
    this._defaultConfig = RI, this.config = this._defaultConfig, this._colorAccessor = (a) => a.color, this._container = t, this.div = n != null && n.renderIntoProvidedDomNode ? Bt(this._container) : Bt(this._container).append("div"), this.div.classed(Mc, !0), this.element = this.div.node(), n && this.update(n);
  }
  update(t) {
    this.prevConfig = this.config, this.config = no(this._defaultConfig, t), this.render();
  }
  render() {
    const { config: t } = this, n = this.div.selectAll(`.${ys}`).data(t.items), a = n.enter().append("div").on("click", this._onItemClick.bind(this)), o = a.merge(n);
    o.attr("class", (r) => {
      var s;
      return `${ys} ${(s = r.className) !== null && s !== void 0 ? s : ""}`;
    }).classed(Jy, t.orientation === ri.Vertical).classed(Zy, (r) => !!t.onLegendItemClick && this._isItemClickable(r)).attr("title", (r) => r.name).style("display", (r) => r.hidden ? "none" : null), a.append("span").attr("class", Vu).call(VI), o.select(`.${Vu}`).style("width", t.bulletSize).style("height", t.bulletSize).style("box-sizing", "content-box").call(NI, this.config, this._colorAccessor), a.append("span").attr("class", Fu).classed(t.labelClassName, !0).style("max-width", t.labelMaxWidth).style("font-size", t.labelFontSize), o.select(`.${Fu}`).text((r) => r.name), n.exit().remove();
  }
  _isItemClickable(t) {
    return t.pointer === void 0 ? !0 : t.pointer;
  }
  _onItemClick(t, n) {
    const { config: { onLegendItemClick: a } } = this, r = this.div.selectAll(`.${ys}`).nodes().indexOf(t.currentTarget);
    a && a(n, r);
  }
  destroy() {
    this.element !== this._container && this.div.remove();
  }
}
Qy.selectors = zI;
const e0 = Symbol("componentAccessorKey"), HI = Symbol("tooltipAccessorKey"), UI = Symbol("crosshairAccessorKey"), t0 = Symbol("axisAccessorKey"), WI = Symbol("annotationsAccessorKey");
function Bc(e, t) {
  return er(e, t);
}
function Xi(e) {
  const t = Ue(), n = t.attrs;
  return S(() => {
    const a = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((r) => {
      a[Ka(r)] = e[Ka(r)];
    }), { ...a, ...n };
  });
}
const KI = /* @__PURE__ */ _({
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
    const n = e, { data: a } = me(n), o = Xi(n), r = M(), s = Ln({
      components: [],
      annotations: void 0,
      crosshair: void 0,
      tooltip: void 0,
      xAxis: void 0,
      yAxis: void 0
    }), i = M();
    return te(a, () => {
      r.value && r.value.setData(a.value, !0);
    }), xe(() => {
      var u;
      s.components.map((d) => d.config), (u = r.value) == null || u.updateContainer({ ...Zr(o.value), ...Zr(s) });
    }), ue(() => {
      i.value && (r.value = new iP(i.value, { ...Zr(s) }, a.value));
    }), Ke(() => {
      var u;
      return (u = r.value) == null ? void 0 : u.destroy();
    }), Dt(e0, {
      data: a,
      update: (u) => s.components = [...s.components, u],
      destroy: () => {
        var u;
        return s.components = (u = s.components) == null ? void 0 : u.filter((d) => !d.isDestroyed());
      }
    }), Dt(t0, {
      data: a,
      update: (u) => s[`${u.config.type}Axis`] = u,
      destroy: (u) => {
        s[`${u}Axis`] = void 0;
      }
    }), Dt(UI, {
      data: a,
      update: (u) => s.crosshair = u,
      destroy: () => {
        s.crosshair = void 0;
      }
    }), Dt(HI, {
      data: a,
      update: (u) => s.tooltip = u,
      destroy: () => {
        s.tooltip = void 0;
      }
    }), Dt(WI, {
      data: a,
      update: (u) => s.annotations = u,
      destroy: () => {
        s.annotations = void 0;
      }
    }), t({
      component: r
    }), (u, d) => (g(), L("div", {
      "data-vis-xy-container": "",
      ref_key: "elRef",
      ref: i,
      class: "unovis-xy-container"
    }, [
      x(u.$slots, "default")
    ], 512));
  }
}), jI = { "data-vis-axis": "" }, n0 = /* @__PURE__ */ _({
  __name: "index",
  props: {
    position: {},
    type: {},
    fullSize: { type: Boolean },
    label: {},
    labelFontSize: {},
    labelMargin: {},
    labelColor: {},
    gridLine: { type: Boolean },
    tickLine: { type: Boolean },
    domainLine: { type: Boolean },
    minMaxTicksOnly: { type: Boolean },
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
    const n = Kn(t0), a = e, o = S(() => n.data.value ?? a.data), r = Xi(a), s = M();
    return ue(() => {
      re(() => {
        var i;
        s.value = new Xy(r.value), (i = s.value) == null || i.setData(o.value), n.update(s.value);
      });
    }), Ke(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy(a.type);
    }), te(r, (i, u) => {
      var d;
      Bc(i, u) || (d = s.value) == null || d.setConfig(r.value);
    }), te(o, () => {
      var i;
      (i = s.value) == null || i.setData(o.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", jI));
  }
}), YI = { "data-vis-component": "" }, qI = /* @__PURE__ */ _({
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
    const n = Kn(e0), a = e, o = S(() => n.data.value ?? a.data), r = Xi(a), s = M();
    return ue(() => {
      re(() => {
        var i;
        s.value = new qi(r.value), (i = s.value) == null || i.setData(o.value), n.update(s.value);
      });
    }), Ke(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy();
    }), te(r, (i, u) => {
      var d;
      Bc(i, u) || (d = s.value) == null || d.setConfig(r.value);
    }), te(o, () => {
      var i;
      (i = s.value) == null || i.setData(o.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", YI));
  }
}), GI = /* @__PURE__ */ _({
  __name: "index",
  props: {
    items: {},
    labelClassName: {},
    onLegendItemClick: { type: Function },
    labelFontSize: {},
    labelMaxWidth: {},
    bulletSize: {},
    bulletShape: {},
    orientation: {},
    renderIntoProvidedDomNode: { type: Boolean },
    data: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    S(() => n.data);
    const a = Xi(n), o = M(), r = M();
    return ue(() => {
      re(() => {
        r.value && (o.value = new Qy(r.value, { ...a.value, renderIntoProvidedDomNode: !0 }));
      });
    }), Ke(() => {
      var s;
      (s = o.value) == null || s.destroy();
    }), te(a, (s, i) => {
      var u;
      Bc(s, i) || (u = o.value) == null || u.update(a.value);
    }), t({
      component: o
    }), (s, i) => (g(), L("div", {
      "data-vis-bullet-legend": "",
      ref_key: "elRef",
      ref: r
    }, null, 512));
  }
});
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".unovis-xy-container,.unovis-single-container{display:block;position:relative;width:100%}[data-vis-leaflet-map],[data-vis-leaflet-flow-map]{display:block;position:relative}[data-vis-bullet-legend]{display:block}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const XI = /* @__PURE__ */ _({
  __name: "XAxis",
  props: {
    position: {},
    y: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(n0), B({ type: "x" }, t), null, 16));
  }
}), JI = /* @__PURE__ */ _({
  __name: "YAxis",
  props: {
    position: {},
    x: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(n0), B({ type: "y" }, t), null, 16));
  }
}), ZI = /* @__PURE__ */ _({
  __name: "ChartProvider",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(KI), { data: t.data }, {
      default: y(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data"]));
  }
}), QI = /* @__PURE__ */ _({
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
    const t = e, n = ["#007aff", "#ff9500", "#34c759", "#ff3b30", "#af52de"], a = t.lines.map((s) => s.y), o = (s, i) => {
      var u;
      return ((u = t.lines[i]) == null ? void 0 : u.color) ?? n[i % n.length];
    }, r = (s, i) => {
      var u;
      return ((u = t.lines[i]) == null ? void 0 : u.dashArray) ?? void 0;
    };
    return (s, i) => (g(), w(l(qI), {
      x: s.x,
      y: l(a),
      color: o,
      lineDashArray: r,
      curveType: s.curveType ?? l(Ie).Basis,
      lineWidth: s.lineWidth ?? 2,
      fallbackValue: s.fallbackValue,
      interpolateMissingData: s.interpolateMissingData
    }, null, 8, ["x", "y", "curveType", "lineWidth", "fallbackValue", "interpolateMissingData"]));
  }
}), eR = { class: "size-full" }, K6 = /* @__PURE__ */ _({
  __name: "LineChart",
  props: {
    data: {},
    index: {},
    categories: {},
    colours: {},
    items: {}
  },
  setup(e) {
    const t = e, n = (o) => o[t.index], a = t.categories.map((o, r) => ({
      y: (s) => s[o],
      color: t.colours[r]
      // todo: how can we dynamically apply other props to pass per line?
    }));
    return (o, r) => (g(), L("div", eR, [
      O(l(ZI), { data: o.data }, {
        default: y(() => [
          O(l(XI), {
            label: "X Axis",
            position: "bottom"
          }),
          O(l(JI), {
            label: "Y Axis",
            position: "left"
          }),
          O(l(QI), {
            x: n,
            lines: l(a),
            lineWidth: 3,
            interpolateMissingData: "",
            fallbackValue: null
          }, null, 8, ["lines"])
        ]),
        _: 1
      }, 8, ["data"]),
      o.items ? (g(), w(l(tR), {
        key: 0,
        items: o.items
      }, null, 8, ["items"])) : se("", !0)
    ]));
  }
}), tR = /* @__PURE__ */ _({
  __name: "Legend",
  props: {
    items: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(GI), J(Z(t.$props)), null, 16));
  }
}), nR = { class: "my-auto text-slate-400 dark:text-slate-100" }, j6 = /* @__PURE__ */ _({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", nR, " Showing " + de(t.min) + " to " + de(t.max) + " of " + de(t.total) + " results ", 1));
  }
}), Y6 = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Tx), B(n.value, {
      class: l(F)("text-text flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          O(l(ym))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q6 = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Ex), J(Z(n.value)), {
      default: y(() => [
        O(l(An), {
          class: X(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(m2) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), G6 = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Ax), J(Z(n.value)), {
      default: y(() => [
        O(l(An), {
          class: X(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(g2) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), X6 = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Bx), J(Z(n.value)), {
      default: y(() => [
        O(l(An), {
          class: X(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(Vd) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), J6 = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Ox), J(Z(n.value)), {
      default: y(() => [
        O(l(An), {
          class: X(l(F)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(h2) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Z6 = /* @__PURE__ */ _({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = nT({
      selector: "html"
    });
    return (n, a) => (g(), w(uE, {
      modelValue: l(t),
      "onUpdate:modelValue": a[0] || (a[0] = (o) => lt(t) ? t.value = o : null)
    }, {
      checked: y(() => [
        O(l(_2), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": y(() => [
        O(l(k2), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Q6 = /* @__PURE__ */ _({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, n = M(t.setOpenTo), a = () => {
      n.value = !n.value;
    };
    return (o, r) => (g(), L(le, null, [
      O(l(cr), {
        onClick: a,
        class: X(t.class)
      }, {
        default: y(() => [
          (g(!0), L(le, null, Ae(o.headers, (s) => (g(), w(l(si), {
            key: s.value
          }, {
            default: y(() => [
              o.$slots[`cell_header_${s.value}`] ? x(o.$slots, `cell_header_${s.value}`, {
                key: 0,
                item: o.row,
                open: n.value
              }) : (g(), L(le, { key: 1 }, [
                ae(de(o.row[s.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (g(), w(l(Nu), { key: 0 }, {
            default: y(() => [
              x(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : se("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      n.value ? (g(!0), L(le, { key: 0 }, Ae(o.subRows, (s, i) => (g(), w(l(cr), { key: i }, {
        default: y(() => [
          (g(!0), L(le, null, Ae(o.headers, (u) => (g(), w(l(si), {
            key: u.value
          }, {
            default: y(() => [
              o.$slots[`subrow_cell_${u.value}`] ? x(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: s,
                open: n.value
              }) : (g(), L(le, { key: 1 }, [
                ae(de("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (g(), w(l(Nu), { key: 0 }, {
            default: y(() => [
              x(o.$slots, "sub_row_actions", {
                item: o.row,
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
}), aR = { class: "relative w-full overflow-auto" }, oR = /* @__PURE__ */ _({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", aR, [
      _e("table", {
        class: X(l(F)("w-full caption-bottom text-sm", t.class))
      }, [
        x(n.$slots, "default")
      ], 2)
    ]));
  }
}), rR = /* @__PURE__ */ _({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tbody", {
      class: X(l(F)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), si = /* @__PURE__ */ _({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: X(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), sR = /* @__PURE__ */ _({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("th", {
      class: X(
        l(F)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), iR = /* @__PURE__ */ _({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("thead", {
      class: X(l(F)("[&_tr]:border-b", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), eF = /* @__PURE__ */ _({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tfoot", {
      class: X(
        l(F)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 last:[&>tr]:border-b-0",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), cr = /* @__PURE__ */ _({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tr", {
      class: X(
        l(F)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Nu = /* @__PURE__ */ _({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: X(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), lR = /* @__PURE__ */ _({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("caption", {
      class: X(l(F)("text-sub-text mt-4 text-sm", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), uR = { class: "flex items-center justify-center py-10" }, tF = /* @__PURE__ */ _({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(cr, null, {
      default: y(() => [
        O(si, B({
          class: l(F)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, n.value), {
          default: y(() => [
            _e("div", uR, [
              x(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), nF = /* @__PURE__ */ _({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (g(), w(l(oR), null, {
      default: y(() => [
        t.caption ? (g(), w(l(lR), { key: 0 }, {
          default: y(() => [
            ae(de(t.caption), 1)
          ]),
          _: 1
        })) : se("", !0),
        O(l(iR), null, {
          default: y(() => [
            O(l(cr), null, {
              default: y(() => [
                (g(!0), L(le, null, Ae(t.headers, (a, o) => (g(), w(l(sR), null, {
                  default: y(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? x(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(le, { key: 1 }, [
                      ae(de(a.name), 1)
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
        O(l(rR), null, {
          default: y(() => [
            (g(!0), L(le, null, Ae(t.rows, (a, o) => (g(), w(l(cr), { key: o }, {
              default: y(() => [
                (g(!0), L(le, null, Ae(t.headers, (r) => (g(), w(l(si), {
                  key: r.value
                }, {
                  default: y(() => [
                    t.$slots[`cell_${r.value}`] ? x(t.$slots, `cell_${r.value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(le, { key: 1 }, [
                      ae(de(a[r.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (g(), w(l(Nu), { key: 0 }, {
                  default: y(() => [
                    x(t.$slots, "row_actions", { item: a })
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
}), dR = { class: "text-text" }, aF = /* @__PURE__ */ _({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, a = () => n("close");
    return (o, r) => (g(), w(l(qm), { open: o.open }, {
      default: y(() => [
        O(l(hT), { "as-child": "" }, {
          default: y(() => [
            x(o.$slots, "trigger")
          ]),
          _: 3
        }),
        O(l(Gm), {
          onClose: a,
          onEscapeKeyDown: a,
          onPointerDownOutside: a,
          class: X("max-w-" + o.size)
        }, {
          default: y(() => [
            O(l(vT), null, {
              default: y(() => [
                O(l(mT), null, {
                  default: y(() => {
                    var s;
                    return [
                      o.$slots.title ? x(o.$slots, "title", { key: 0 }) : (s = o.headerData) != null && s.title ? (g(), L(le, { key: 1 }, [
                        ae(de(o.headerData.title), 1)
                      ], 64)) : se("", !0)
                    ];
                  }),
                  _: 3
                }),
                O(l(gT), null, {
                  default: y(() => {
                    var s;
                    return [
                      o.$slots.description ? x(o.$slots, "description", { key: 0 }) : (s = o.headerData) != null && s.description ? (g(), L(le, { key: 1 }, [
                        ae(de(o.headerData.description), 1)
                      ], 64)) : se("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            _e("div", dR, [
              o.$slots.content ? x(o.$slots, "content", { key: 0 }) : x(o.$slots, "default", { key: 1 })
            ]),
            O(l(yT), null, {
              default: y(() => [
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
}), cR = /* @__PURE__ */ _({
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
    const o = pe(e, t);
    return (r, s) => (g(), w(l(s$), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oF = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(u$), B(l(a), {
      class: l(F)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-xs dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fR = /* @__PURE__ */ _({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      var o;
      return g(), w(it((o = n.tab) != null && o.is ? n.tab.is : "a"), {
        href: n.tab.href,
        class: X([
          n.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(F)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: y(() => {
          var r;
          return [
            (r = n.tab) != null && r.icon ? (g(), w(it(n.tab.icon), {
              key: 0,
              class: "size-5"
            })) : se("", !0),
            ae(" " + de(n.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), sh = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(i$), B(n.value, {
      class: l(F)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rF = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(l$), B({
      class: l(F)(
        "ring-offset-whit mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        t.class
      )
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pR = {}, hR = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function vR(e, t) {
  return g(), L("div", hR, [
    x(e.$slots, "default")
  ]);
}
const mR = /* @__PURE__ */ $r(pR, [["render", vR]]), sF = /* @__PURE__ */ _({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, n = S(
      () => t.tabs.find((a) => a.active)
    );
    return (a, o) => (g(), w(l(cR), null, {
      default: y(() => [
        O(l(sh), { class: "hidden gap-2 md:block" }, {
          default: y(() => [
            (g(!0), L(le, null, Ae(a.tabs, (r) => (g(), w(l(fR), {
              key: r.name,
              tab: r
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        O(l(sh), { class: "flex md:hidden" }, {
          default: y(() => [
            O(l(kT), null, {
              default: y(() => [
                O(l(TT), { "as-child": "" }, {
                  default: y(() => [
                    O(l(An), { variant: "secondary" }, {
                      default: y(() => {
                        var r;
                        return [
                          ae(de(((r = n.value) == null ? void 0 : r.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                O(l(ET), { class: "w-full" }, {
                  default: y(() => [
                    (g(!0), L(le, null, Ae(a.tabs, (r) => (g(), w(l(AT), B({
                      key: r.name
                    }, { ref_for: !0 }, r), {
                      default: y(() => [
                        ae(de(r.name), 1)
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
        O(l(mR), null, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), gR = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, yR = /* @__PURE__ */ _({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = En(t, "class"), a = wa(n);
    return (o, r) => (g(), L("div", gR, [
      O(l(TS), B({ "data-slot": "navigation-menu-viewport" }, l(a), {
        class: l(F)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)]",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), iF = /* @__PURE__ */ _({
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
    const n = e, a = t, o = En(n, "class", "viewport"), r = Sn(o, a);
    return (s, i) => (g(), w(l(gS), B({
      "data-slot": "navigation-menu",
      "data-viewport": s.viewport
    }, l(r), {
      class: l(F)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default"),
        s.viewport ? (g(), w(yR, { key: 0 })) : se("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), lF = /* @__PURE__ */ _({
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
    const n = e, a = t, o = En(n, "class"), r = Sn(o, a);
    return (s, i) => (g(), w(l(wS), B({ "data-slot": "navigation-menu-content" }, l(r), {
      class: l(F)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uF = /* @__PURE__ */ _({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = En(t, "class"), a = wa(n);
    return (o, r) => (g(), w(l(xS), B({ "data-slot": "navigation-menu-indicator" }, l(a), {
      class: l(F)("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", t.class)
    }), {
      default: y(() => r[0] || (r[0] = [
        _e("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), dF = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = En(t, "class");
    return (a, o) => (g(), w(l(bS), B({ "data-slot": "navigation-menu-item" }, l(n), {
      class: l(F)("relative", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cF = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = En(n, "class"), r = Sn(o, a);
    return (s, i) => (g(), w(l(CS), B({ "data-slot": "navigation-menu-link" }, l(r), {
      class: l(F)("'data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4'", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fF = /* @__PURE__ */ _({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = En(t, "class"), a = wa(n);
    return (o, r) => (g(), w(l($S), B({ "data-slot": "navigation-menu-list" }, l(a), {
      class: l(F)(
        "group flex flex-1 list-none items-center justify-center gap-1",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pF = /* @__PURE__ */ _({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = En(t, "class"), a = wa(n);
    return (o, r) => (g(), w(l(SS), B({ "data-slot": "navigation-menu-trigger" }, l(a), {
      class: l(F)(l(bR)(), "group", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(ki), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bR = kn(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), _R = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, hF = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(Kx), B({
      class: l(F)("p-3", n.class)
    }, l(r)), {
      default: y(({ grid: u, weekDays: d }) => [
        O(l(TR), null, {
          default: y(() => [
            O(l(DR)),
            O(l(ER)),
            O(l(AR))
          ]),
          _: 1
        }),
        _e("div", _R, [
          (g(!0), L(le, null, Ae(u, (c) => (g(), w(l(CR), {
            key: c.value.toString()
          }, {
            default: y(() => [
              O(l(kR), null, {
                default: y(() => [
                  O(l(ih), null, {
                    default: y(() => [
                      (g(!0), L(le, null, Ae(d, (f) => (g(), w(l(SR), { key: f }, {
                        default: y(() => [
                          ae(de(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l($R), null, {
                default: y(() => [
                  (g(!0), L(le, null, Ae(c.rows, (f, p) => (g(), w(l(ih), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(le, null, Ae(f, (h) => (g(), w(l(wR), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l(xR), {
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
}), wR = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Gx), B({
      class: l(F)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xR = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(nC), B({
      class: l(F)(
        l(Ca)({ variant: "ghost" }),
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
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), CR = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(qx), B({
      class: l(F)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $R = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(eC), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kR = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Qx), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ih = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(tC), B({
      class: l(F)("mt-2 flex w-full", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), SR = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Xx), B({
      class: l(F)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), TR = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(jx), B({
      class: l(F)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ER = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Yx), B({
      class: l(F)("text-text text-sm font-medium", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        x(o.$slots, "default", { headingValue: s }, () => [
          ae(de(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AR = /* @__PURE__ */ _({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Jx), B({
      class: l(F)(
        l(Ca)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(x2), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), DR = /* @__PURE__ */ _({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = ye(n);
    return (o, r) => (g(), w(l(Zx), B({
      class: l(F)(
        l(Ca)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(w2), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MR = /* @__PURE__ */ _({
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
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(IC), B(n.value, {
      class: l(F)(
        "bg-border relative shrink-0",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: y(() => [
        t.label ? (g(), L("span", {
          key: 0,
          class: X(
            l(F)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              t.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, de(t.label), 3)) : se("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), BR = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(_v), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vF = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(br), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), OR = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, side: i, ...u } = n;
      return u;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(bd), null, {
      default: y(() => [
        O(l($d), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(Cd), B({
          class: l(F)(l(PR)({ side: s.side }), n.class)
        }, { ...l(r), ...s.$attrs }), {
          default: y(() => [
            x(s.$slots, "default"),
            O(l(br), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: y(() => [
                O(l(Si), { class: "text-muted-foreground h-4 w-4" })
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
}), mF = /* @__PURE__ */ _({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(Sv), B({
      class: l(F)("text-muted-foreground text-sm", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gF = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(F)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), yF = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(F)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), bF = /* @__PURE__ */ _({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(kv), B({
      class: l(F)("text-foreground text-lg font-semibold", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _F = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(wv), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), PR = kn(
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
), IR = "sidebar:state", RR = 60 * 60 * 24 * 7, FR = "16rem", VR = "18rem", NR = "3rem", LR = "b", [Ji, zR] = ge("Sidebar"), HR = { class: "flex h-full w-full flex-col" }, UR = ["data-state", "data-collapsible", "data-variant", "data-side"], WR = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, wF = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a, openMobile: o, setOpenMobile: r } = Ji();
    return (s, i) => s.collapsible === "none" ? (g(), L("div", B({
      key: 0,
      class: l(F)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, s.$attrs), [
      x(s.$slots, "default")
    ], 16)) : l(n) ? (g(), w(l(BR), B({
      key: 1,
      open: l(o)
    }, s.$attrs, { "onUpdate:open": l(r) }), {
      default: y(() => [
        O(l(OR), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: s.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Qt({
            "--sidebar-width": l(VR)
          })
        }, {
          default: y(() => [
            _e("div", HR, [
              x(s.$slots, "default", { state: l(a) })
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
      "data-collapsible": l(a) === "collapsed" ? s.collapsible : "",
      "data-variant": s.variant,
      "data-side": s.side
    }, [
      _e("div", {
        class: X(
          l(F)(
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            s.variant === "floating" || s.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      _e("div", B({
        class: l(F)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          s.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          s.variant === "floating" || s.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, s.$attrs), [
        _e("div", WR, [
          x(s.$slots, "default", { state: l(a) })
        ])
      ], 16)
    ], 8, UR));
  }
}), xF = /* @__PURE__ */ _({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "content",
      class: X(
        l(F)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), CF = /* @__PURE__ */ _({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "footer",
      class: X(l(F)("flex flex-col gap-2 p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), $F = /* @__PURE__ */ _({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group",
      class: X(l(F)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), kF = /* @__PURE__ */ _({
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
      as: n.as,
      "as-child": n.asChild,
      class: X(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), SF = /* @__PURE__ */ _({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group-content",
      class: X(l(F)("w-full text-sm", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), TF = /* @__PURE__ */ _({
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
      as: n.as,
      "as-child": n.asChild,
      class: X(
        l(F)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), EF = /* @__PURE__ */ _({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "header",
      class: X(l(F)("flex flex-col gap-2 p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), AF = /* @__PURE__ */ _({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(iE, {
      "data-sidebar": "input",
      class: X(
        l(F)(
          "focus-visible:ring-sidebar-ring bg-background h-8 w-full shadow-none focus-visible:ring-2",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), DF = /* @__PURE__ */ _({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("main", {
      class: X(
        l(F)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), MF = /* @__PURE__ */ _({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu",
      class: X(l(F)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), BF = /* @__PURE__ */ _({
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
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground text-sidebar-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          n.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          t.class
        )
      ),
      as: n.as,
      "as-child": n.asChild
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), OF = /* @__PURE__ */ _({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "menu-badge",
      class: X(
        l(F)(
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
      x(n.$slots, "default")
    ], 2));
  }
}), KR = /* @__PURE__ */ _({
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
    const o = pe(e, t);
    return (r, s) => (g(), w(l(E$), J(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jR = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(B$), null, {
      default: y(() => [
        O(l(M$), B({ ...l(r), ...s.$attrs }, {
          class: l(F)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            n.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), PF = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(um), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), YR = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(A$), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lh = /* @__PURE__ */ _({
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
      "data-size": n.size,
      "data-active": n.isActive,
      class: l(F)(l(XR)({ variant: n.variant, size: n.size }), t.class),
      as: n.as,
      "as-child": n.asChild
    }, n.$attrs), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), IF = /* @__PURE__ */ _({
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
    const t = e, { isMobile: n, state: a } = Ji(), o = S(() => {
      const { tooltip: r, ...s } = t;
      return s;
    });
    return (r, s) => r.tooltip ? (g(), w(l(KR), { key: 1 }, {
      default: y(() => [
        O(l(YR), { "as-child": "" }, {
          default: y(() => [
            O(lh, J(Z({ ...o.value, ...r.$attrs })), {
              default: y(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        O(l(jR), {
          side: "right",
          align: "center",
          hidden: l(a) !== "collapsed" || l(n)
        }, {
          default: y(() => [
            typeof r.tooltip == "string" ? (g(), L(le, { key: 0 }, [
              ae(de(r.tooltip), 1)
            ], 64)) : (g(), w(it(r.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), w(lh, J(B({ key: 0 }, { ...o.value, ...r.$attrs })), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RF = /* @__PURE__ */ _({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      "data-sidebar": "menu-item",
      class: X(l(F)("group/menu-item relative", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), uh = /* @__PURE__ */ _({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: X(l(F)("bg-skeleton animate-pulse rounded-md", t.class))
    }, null, 2));
  }
}), FF = /* @__PURE__ */ _({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (a, o) => (g(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: X(l(F)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      a.showIcon ? (g(), w(uh, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : se("", !0),
      O(uh, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Qt({ "--skeleton-width": n.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), VF = /* @__PURE__ */ _({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu-badge",
      class: X(
        l(F)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), NF = /* @__PURE__ */ _({
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
      as: n.as,
      "as-child": n.asChild,
      "data-size": n.size,
      "data-active": n.isActive,
      class: X(
        l(F)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          n.size === "sm" && "text-xs",
          n.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), qR = {};
function GR(e, t) {
  return g(), L("li", null, [
    x(e.$slots, "default")
  ]);
}
const LF = /* @__PURE__ */ $r(qR, [["render", GR]]), zF = /* @__PURE__ */ _({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Vm("(max-width: 768px)"), r = M(!1), s = Wd(n, "open", a, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function i(f) {
      s.value = f, document.cookie = `${IR}=${s.value}; path=/; max-age=${RR}`;
    }
    function u(f) {
      r.value = f;
    }
    function d() {
      return o.value ? u(!r.value) : i(!s.value);
    }
    Ps("keydown", (f) => {
      f.key === LR && (f.metaKey || f.ctrlKey) && (f.preventDefault(), d());
    });
    const c = S(() => s.value ? "expanded" : "collapsed");
    return zR({
      state: c,
      open: s,
      setOpen: i,
      isMobile: o,
      openMobile: r,
      setOpenMobile: u,
      toggleSidebar: d
    }), (f, p) => (g(), w(l(um), { "delay-duration": 0 }, {
      default: y(() => [
        _e("div", B({
          style: {
            "--sidebar-width": l(FR),
            "--sidebar-width-icon": l(NR)
          },
          class: l(F)(
            "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-auto",
            n.class
          )
        }, f.$attrs), [
          x(f.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), HF = /* @__PURE__ */ _({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = Ji();
    return (a, o) => (g(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: X(
        l(F)(
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
      (...r) => l(n) && l(n)(...r))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), UF = /* @__PURE__ */ _({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(MR, {
      "data-sidebar": "separator",
      class: X(l(F)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), WF = /* @__PURE__ */ _({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = Ji();
    return (a, o) => (g(), w(An, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: X(l(F)("h-7 w-7", t.class)),
      onClick: l(n)
    }, {
      default: y(() => [
        O(l(C2)),
        o[0] || (o[0] = _e("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), XR = kn(
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
), KF = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(qC), B({
      class: l(F)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        n.class
      )
    }, l(r)), {
      default: y(() => [
        O(l(JC), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: y(() => [
            O(l(ZC), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (g(!0), L(le, null, Ae(s.modelValue, (u, d) => (g(), w(l(XC), {
          key: d,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), JR = 5, ZR = 5e6, hn = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Ol = 0;
function QR() {
  return Ol = (Ol + 1) % Number.MAX_VALUE, Ol.toString();
}
const Pl = /* @__PURE__ */ new Map();
function dh(e) {
  if (Pl.has(e)) return;
  const t = setTimeout(() => {
    Pl.delete(e), qo({
      type: hn.REMOVE_TOAST,
      toastId: e
    });
  }, ZR);
  Pl.set(e, t);
}
const kt = M({
  toasts: []
});
function qo(e) {
  switch (e.type) {
    case hn.ADD_TOAST:
      kt.value.toasts = [e.toast, ...kt.value.toasts].slice(0, JR);
      break;
    case hn.UPDATE_TOAST:
      kt.value.toasts = kt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case hn.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? dh(t) : kt.value.toasts.forEach((n) => {
        dh(n.id);
      }), kt.value.toasts = kt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case hn.REMOVE_TOAST:
      e.toastId === void 0 ? kt.value.toasts = [] : kt.value.toasts = kt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function e5() {
  return {
    toasts: S(() => kt.value.toasts),
    toast: t5,
    dismiss: (e) => qo({ type: hn.DISMISS_TOAST, toastId: e })
  };
}
function t5(e) {
  const t = QR(), n = (o) => qo({
    type: hn.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), a = () => qo({ type: hn.DISMISS_TOAST, toastId: t });
  return qo({
    type: hn.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || a();
      }
    }
  }), {
    id: t,
    dismiss: a,
    update: n
  };
}
const n5 = { class: "flex gap-3" }, a5 = { class: "grid gap-1" }, jF = /* @__PURE__ */ _({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = e5();
    return (n, a) => (g(), w(l(l5), null, {
      default: y(() => [
        (g(!0), L(le, null, Ae(l(t), (o) => (g(), w(l(o5), B({
          key: o.id
        }, { ref_for: !0 }, o, { class: "my-1" }), {
          default: y(() => [
            _e("div", n5, [
              (g(), w(it(o.icon), {
                class: X(l(F)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              _e("div", a5, [
                o.title ? (g(), w(l(i5), { key: 0 }, {
                  default: y(() => [
                    ae(de(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : se("", !0),
                o.description ? (g(), L(le, { key: 1 }, [
                  f0(o.description) ? (g(), w(l(ch), { key: 0 }, {
                    default: y(() => [
                      (g(), w(it(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (g(), w(l(ch), { key: 1 }, {
                    default: y(() => [
                      ae(de(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : se("", !0),
                O(l(s5))
              ]),
              (g(), w(it(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        O(l(r5))
      ]),
      _: 1
    }));
  }
}), o5 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = S(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = pe(o, a);
    return (s, i) => (g(), w(l(w$), B(l(r), {
      class: l(F)(l(u5)({ variant: s.variant }), n.class),
      "onUpdate:open": s.onOpenChange
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), r5 = /* @__PURE__ */ _({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(C$), B(n.value, {
      class: l(F)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), YF = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(x$), J(Z(n.value)), {
      default: y(() => [
        O(l(An), {
          variant: a.variant,
          class: X(t.class)
        }, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), s5 = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(im), B(n.value, {
      class: l(F)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        O(l(Si), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), i5 = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l($$), B(n.value, {
      class: l(F)("text-sm font-semibold", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ch = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...o } = t;
      return o;
    });
    return (a, o) => (g(), w(l(k$), B({
      class: l(F)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l5 = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(c$), J(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u5 = kn(
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
  b5 as Accordion,
  _5 as AccordionContent,
  w5 as AccordionItem,
  x5 as AccordionTrigger,
  C5 as Alert,
  $5 as AlertDescription,
  k5 as AlertTitle,
  O5 as Avatar,
  P5 as AvatarFallback,
  I5 as AvatarImage,
  R5 as Badge,
  wo as Base,
  ST as BaseDropdownMenuItem,
  F5 as Breadcrumb,
  V5 as BreadcrumbEllipsis,
  N5 as BreadcrumbItem,
  L5 as BreadcrumbLink,
  z5 as BreadcrumbList,
  H5 as BreadcrumbPage,
  U5 as BreadcrumbSeparator,
  An as Button,
  o6 as Calendar,
  Lm as CalendarCell,
  zm as CalendarCellTrigger,
  Hm as CalendarGrid,
  Um as CalendarGridBody,
  Wm as CalendarGridHead,
  Is as CalendarGridRow,
  Km as CalendarHeadCell,
  jm as CalendarHeader,
  Ym as CalendarHeading,
  sT as CalendarNextButton,
  iT as CalendarPrevButton,
  fT as CalendarWithSelect,
  W5 as Card,
  q5 as CardContent,
  Y5 as CardDescription,
  G5 as CardFooter,
  K5 as CardHeader,
  j5 as CardTitle,
  IT as CharacterCount,
  ZI as ChartProvider,
  L6 as Checkbox,
  Q6 as CollapsibleTableRow,
  X5 as Combobox,
  J5 as ComboboxAnchor,
  A5 as ComboboxCancel,
  Z5 as ComboboxEmpty,
  Q5 as ComboboxGroup,
  e6 as ComboboxInput,
  t6 as ComboboxItem,
  M5 as ComboboxItemIndicator,
  n6 as ComboboxList,
  a6 as ComboboxSeparator,
  B5 as ComboboxTrigger,
  pT as Command,
  c6 as CommandDialog,
  f6 as CommandEmpty,
  p6 as CommandGroup,
  h6 as CommandInput,
  v6 as CommandItem,
  m6 as CommandList,
  g6 as CommandSeparator,
  y6 as CommandShortcut,
  z6 as DatePicker,
  NT as Description,
  qm as Dialog,
  u6 as DialogClose,
  Gm as DialogContent,
  gT as DialogDescription,
  yT as DialogFooter,
  vT as DialogHeader,
  d6 as DialogScrollContent,
  mT as DialogTitle,
  hT as DialogTrigger,
  b6 as DraggableArea,
  _6 as DraggableItem,
  kT as DropdownMenu,
  $6 as DropdownMenuCheckboxItem,
  ET as DropdownMenuContent,
  w6 as DropdownMenuGroup,
  C6 as DropdownMenuItem,
  E6 as DropdownMenuLabel,
  AT as DropdownMenuLink,
  hx as DropdownMenuPortal,
  x6 as DropdownMenuRadioGroup,
  k6 as DropdownMenuRadioItem,
  T6 as DropdownMenuSeparator,
  S6 as DropdownMenuShortcut,
  A6 as DropdownMenuSub,
  M6 as DropdownMenuSubContent,
  D6 as DropdownMenuSubTrigger,
  TT as DropdownMenuTrigger,
  B6 as Empty,
  O6 as EmptyContent,
  P6 as EmptyDescription,
  I6 as EmptyHeader,
  R6 as EmptyMedia,
  F6 as EmptyTitle,
  zT as Error,
  V6 as Form,
  qT as FormElement,
  N6 as FormGrid,
  H6 as ImageUpload,
  iE as Input,
  Kd as Label,
  tR as Legend,
  QI as Line,
  K6 as LineChart,
  nF as LumuixDatatable,
  aF as LumuixModal,
  Z6 as LumuixModeToggle,
  sF as LumuixTabs,
  iF as NavigationMenu,
  lF as NavigationMenuContent,
  uF as NavigationMenuIndicator,
  dF as NavigationMenuItem,
  cF as NavigationMenuLink,
  fF as NavigationMenuList,
  pF as NavigationMenuTrigger,
  yR as NavigationMenuViewport,
  m5 as Pagination,
  j6 as PaginationDetails,
  Y6 as PaginationEllipsis,
  q6 as PaginationFirst,
  G6 as PaginationLast,
  g5 as PaginationList,
  y5 as PaginationListItem,
  X6 as PaginationNext,
  J6 as PaginationPrev,
  QT as Popover,
  tE as PopoverContent,
  eE as PopoverTrigger,
  hF as RangeCalendar,
  wR as RangeCalendarCell,
  xR as RangeCalendarCellTrigger,
  CR as RangeCalendarGrid,
  $R as RangeCalendarGridBody,
  kR as RangeCalendarGridHead,
  ih as RangeCalendarGridRow,
  SR as RangeCalendarHeadCell,
  TR as RangeCalendarHeader,
  ER as RangeCalendarHeading,
  AR as RangeCalendarNextButton,
  DR as RangeCalendarPrevButton,
  U6 as Select,
  su as SelectContent,
  r6 as SelectGroup,
  iu as SelectItem,
  s6 as SelectItemText,
  i6 as SelectLabel,
  au as SelectRoot,
  dT as SelectScrollDownButton,
  uT as SelectScrollUpButton,
  l6 as SelectSeparator,
  ru as SelectTrigger,
  ou as SelectValue,
  MR as Separator,
  BR as Sheet,
  vF as SheetClose,
  OR as SheetContent,
  mF as SheetDescription,
  gF as SheetFooter,
  yF as SheetHeader,
  bF as SheetTitle,
  _F as SheetTrigger,
  wF as Sidebar,
  xF as SidebarContent,
  CF as SidebarFooter,
  $F as SidebarGroup,
  kF as SidebarGroupAction,
  SF as SidebarGroupContent,
  TF as SidebarGroupLabel,
  EF as SidebarHeader,
  AF as SidebarInput,
  DF as SidebarInset,
  MF as SidebarMenu,
  BF as SidebarMenuAction,
  OF as SidebarMenuBadge,
  IF as SidebarMenuButton,
  RF as SidebarMenuItem,
  FF as SidebarMenuSkeleton,
  VF as SidebarMenuSub,
  NF as SidebarMenuSubButton,
  LF as SidebarMenuSubItem,
  zF as SidebarProvider,
  HF as SidebarRail,
  UF as SidebarSeparator,
  WF as SidebarTrigger,
  uh as Skeleton,
  KF as Slider,
  mR as TabBaseContent,
  oR as Table,
  rR as TableBody,
  lR as TableCaption,
  si as TableCell,
  tF as TableEmpty,
  eF as TableFooter,
  sR as TableHead,
  iR as TableHeader,
  cr as TableRow,
  Nu as TableRowAction,
  rF as TabsContent,
  fR as TabsItem,
  sh as TabsList,
  cR as TabsRoot,
  oF as TabsTrigger,
  W6 as TextArea,
  o5 as Toast,
  YF as ToastAction,
  s5 as ToastClose,
  ch as ToastDescription,
  l5 as ToastProvider,
  i5 as ToastTitle,
  r5 as ToastViewport,
  jF as Toaster,
  uE as Toggle,
  KR as Tooltip,
  jR as TooltipContent,
  PF as TooltipProvider,
  YR as TooltipTrigger,
  XI as XAxis,
  JI as YAxis,
  S2 as alertVariants,
  aT as badgeVariants,
  Ca as buttonVariants,
  p0 as createContext,
  OT as emptyMediaVariants,
  bR as navigationMenuTriggerStyle,
  PR as sheetVariants,
  XR as sidebarMenuButtonVariants,
  oT as spinnerSize,
  t5 as toast,
  u5 as toastVariants,
  $T as useDraggable,
  Ji as useSidebar,
  e5 as useToast
};
