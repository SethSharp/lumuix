var gc = (e) => {
  throw TypeError(e);
};
var Oy = (e, t, n) => t.has(e) || gc("Cannot " + n);
var bo = (e, t, n) => (Oy(e, t, "read from private field"), n ? n.call(e) : t.get(e)), yc = (e, t, n) => t.has(e) ? gc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as Ma from "vue";
import { computed as S, ref as B, shallowRef as un, watch as te, getCurrentScope as Zs, onScopeDispose as Qs, shallowReadonly as Ca, unref as l, defineComponent as _, toRefs as me, createBlock as w, openBlock as g, withCtx as y, renderSlot as x, getCurrentInstance as He, toRef as Su, camelize as Ha, withKeys as je, h as tt, onMounted as ue, createElementVNode as _e, toDisplayString as ce, normalizeProps as X, guardReactiveProps as Z, createTextVNode as ae, mergeProps as D, withModifiers as Ie, createCommentVNode as ie, createElementBlock as L, Fragment as le, renderList as Ee, resolveDynamicComponent as lt, createVNode as O, useSlots as Xp, onBeforeMount as Py, Teleport as ia, watchEffect as xe, onBeforeUnmount as ei, nextTick as se, withDirectives as la, vShow as ti, watchSyncEffect as Jp, isRef as ut, inject as ua, provide as tn, toHandlers as Iy, normalizeStyle as jt, toHandlerKey as Zp, Comment as Tu, cloneVNode as Qp, vModelSelect as Ry, onBeforeUpdate as Fy, onUpdated as Vy, markRaw as eh, onUnmounted as Ye, readonly as oo, toRaw as Gr, reactive as On, customRef as Au, mergeDefaults as Eu, watchPostEffect as Mu, effectScope as Du, normalizeClass as J, toValue as De, withMemo as Ny, hasInjectionContext as th, mergeModels as Cl, useModel as nh, vModelDynamic as Ly, vModelText as zy, isVNode as Hy } from "vue";
function Ba(e, t) {
  return e - t * Math.floor(e / t);
}
const ah = 1721426;
function Wn(e, t, n, a) {
  t = ir(e, t);
  let o = t - 1, r = -2;
  return n <= 2 ? r = 0 : Mn(t) && (r = -1), ah - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * n - 362) / 12 + r + a);
}
function Mn(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function ir(e, t) {
  return e === "BC" ? 1 - t : t;
}
function ni(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const Uy = {
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
class Et {
  fromJulianDay(t) {
    let n = t, a = n - ah, o = Math.floor(a / 146097), r = Ba(a, 146097), s = Math.floor(r / 36524), i = Ba(r, 36524), u = Math.floor(i / 1461), d = Ba(i, 1461), c = Math.floor(d / 365), f = o * 400 + s * 100 + u * 4 + c + (s !== 4 && c !== 4 ? 1 : 0), [p, h] = ni(f), v = n - Wn(p, h, 1, 1), m = 2;
    n < Wn(p, h, 3, 1) ? m = 0 : Mn(h) && (m = 1);
    let b = Math.floor(((v + m) * 12 + 373) / 367), $ = n - Wn(p, h, b, 1) + 1;
    return new Ve(p, h, b, $);
  }
  toJulianDay(t) {
    return Wn(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Uy[Mn(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return Mn(t.year) ? 366 : 365;
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
const Wy = {
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
function Ke(e, t) {
  return t = rt(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Bu(e, t) {
  return t = rt(t, e.calendar), e = Wo(e), t = Wo(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Ft(e, t) {
  return Ou(e.calendar, t.calendar) && Ke(e, t);
}
function bc(e, t) {
  return Ou(e.calendar, t.calendar) && Bu(e, t);
}
function Ou(e, t) {
  var n, a, o, r;
  return (r = (o = (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && o !== void 0 ? o : (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && r !== void 0 ? r : e.identifier === t.identifier;
}
function oh(e, t) {
  return Ke(e, ps(t));
}
function rh(e, t, n) {
  let a = e.calendar.toJulianDay(e), o = Gy(t), r = Math.ceil(a + 1 - o) % 7;
  return r < 0 && (r += 7), r;
}
function Ky(e) {
  return an(Date.now(), e);
}
function ps(e) {
  return Jy(Ky(e));
}
function sh(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function jy(e, t) {
  return _c(e) - _c(t);
}
function _c(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let zi = null;
function cn() {
  return zi == null && (zi = new Intl.DateTimeFormat().resolvedOptions().timeZone), zi;
}
function Wo(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function wc(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const xc = /* @__PURE__ */ new Map();
function Yy(e) {
  if (Intl.Locale) {
    let n = xc.get(e);
    return n || (n = new Intl.Locale(e).maximize().region, n && xc.set(e, n)), n;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function Gy(e) {
  let t = Yy(e);
  return t && Wy[t] || 0;
}
function Ua(e) {
  e = rt(e, new Et());
  let t = ir(e.era, e.year);
  return ih(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function ih(e, t, n, a, o, r, s) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(a, o, r, s), i.setUTCFullYear(e, t - 1, n), i.getTime();
}
function $l(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === cn()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: n, month: a, day: o, hour: r, minute: s, second: i } = lh(e, t);
  return ih(n, a, o, r, s, i, 0) - Math.floor(e / 1e3) * 1e3;
}
const Cc = /* @__PURE__ */ new Map();
function lh(e, t) {
  let n = Cc.get(t);
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
  }), Cc.set(t, n));
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
const $c = 864e5;
function qy(e, t, n, a) {
  return (n === a ? [
    n
  ] : [
    n,
    a
  ]).filter((r) => Xy(e, t, r));
}
function Xy(e, t, n) {
  let a = lh(n, t);
  return e.year === a.year && e.month === a.month && e.day === a.day && e.hour === a.hour && e.minute === a.minute && e.second === a.second;
}
function nn(e, t, n = "compatible") {
  let a = Wa(e);
  if (t === "UTC") return Ua(a);
  if (t === cn() && n === "compatible") {
    a = rt(a, new Et());
    let u = /* @__PURE__ */ new Date(), d = ir(a.era, a.year);
    return u.setFullYear(d, a.month - 1, a.day), u.setHours(a.hour, a.minute, a.second, a.millisecond), u.getTime();
  }
  let o = Ua(a), r = $l(o - $c, t), s = $l(o + $c, t), i = qy(a, t, o - r, o - s);
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
function uh(e, t, n = "compatible") {
  return new Date(nn(e, t, n));
}
function an(e, t) {
  let n = $l(e, t), a = new Date(e + n), o = a.getUTCFullYear(), r = a.getUTCMonth() + 1, s = a.getUTCDate(), i = a.getUTCHours(), u = a.getUTCMinutes(), d = a.getUTCSeconds(), c = a.getUTCMilliseconds();
  return new ja(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, r, s, t, n, i, u, d, c);
}
function Jy(e) {
  return new Ve(e.calendar, e.era, e.year, e.month, e.day);
}
function Wa(e, t) {
  let n = 0, a = 0, o = 0, r = 0;
  if ("timeZone" in e) ({ hour: n, minute: a, second: o, millisecond: r } = e);
  else if ("hour" in e && !t) return e;
  return t && ({ hour: n, minute: a, second: o, millisecond: r } = t), new Ka(e.calendar, e.era, e.year, e.month, e.day, n, a, o, r);
}
function rt(e, t) {
  if (Ou(e.calendar, t)) return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)), a = e.copy();
  return a.calendar = t, a.era = n.era, a.year = n.year, a.month = n.month, a.day = n.day, aa(a), a;
}
function Zy(e, t, n) {
  if (e instanceof ja)
    return e.timeZone === t ? e : e0(e, t);
  let a = nn(e, t, n);
  return an(a, t);
}
function Qy(e) {
  let t = Ua(e) - e.offset;
  return new Date(t);
}
function e0(e, t) {
  let n = Ua(e) - e.offset;
  return rt(an(n, t), e.calendar);
}
const _o = 36e5;
function ai(e, t) {
  let n = e.copy(), a = "hour" in n ? o0(n, t) : 0;
  kl(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Sl(n), dh(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += a, t0(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
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
function kl(e, t) {
  var n, a;
  !((n = (a = e.calendar).isInverseEra) === null || n === void 0) && n.call(a, e) && (t = -t), e.year += t;
}
function Sl(e) {
  for (; e.month < 1; )
    kl(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, kl(e, 1);
}
function t0(e) {
  for (; e.day < 1; )
    e.month--, Sl(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Sl(e);
}
function dh(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function aa(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), dh(e);
}
function ch(e) {
  let t = {};
  for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
  return t;
}
function fh(e, t) {
  return ai(e, ch(t));
}
function Pu(e, t) {
  let n = e.copy();
  return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), aa(n), n;
}
function hs(e, t) {
  let n = e.copy();
  return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), a0(n), n;
}
function n0(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = kr(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = kr(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = kr(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = kr(e.hour, 24), t;
}
function a0(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function kr(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n;
}
function o0(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, n0(e);
}
function Iu(e, t, n, a) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let i = e.calendar.getEras(), u = i.indexOf(e.era);
      if (u < 0) throw new Error("Invalid era: " + e.era);
      u = on(u, n, 0, i.length - 1, a == null ? void 0 : a.round), o.era = i[u], aa(o);
      break;
    }
    case "year":
      var r, s;
      !((r = (s = o.calendar).isInverseEra) === null || r === void 0) && r.call(s, o) && (n = -n), o.year = on(e.year, n, -1 / 0, 9999, a == null ? void 0 : a.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = on(e.month, n, 1, e.calendar.getMonthsInYear(e), a == null ? void 0 : a.round);
      break;
    case "day":
      o.day = on(e.day, n, 1, e.calendar.getDaysInMonth(e), a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), aa(o), o;
}
function ph(e, t, n, a) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let r = e.hour, s = 0, i = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let u = r >= 12;
        s = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = on(r, n, s, i, a == null ? void 0 : a.round);
      break;
    }
    case "minute":
      o.minute = on(e.minute, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "second":
      o.second = on(e.second, n, 0, 59, a == null ? void 0 : a.round);
      break;
    case "millisecond":
      o.millisecond = on(e.millisecond, n, 0, 999, a == null ? void 0 : a.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return o;
}
function on(e, t, n, a, o = !1) {
  if (o) {
    e += Math.sign(t), e < n && (e = a);
    let r = Math.abs(t);
    t > 0 ? e = Math.ceil(e / r) * r : e = Math.floor(e / r) * r, e > a && (e = n);
  } else
    e += t, e < n ? e = a - (n - e - 1) : e > a && (e = n + (e - a - 1));
  return e;
}
function hh(e, t) {
  let n;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let o = ai(Wa(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    n = nn(o, e.timeZone);
  } else
    n = Ua(e) - e.offset;
  n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5;
  let a = an(n, e.timeZone);
  return rt(a, e.calendar);
}
function r0(e, t) {
  return hh(e, ch(t));
}
function s0(e, t, n, a) {
  switch (t) {
    case "hour": {
      let o = 0, r = 23;
      if ((a == null ? void 0 : a.hourCycle) === 12) {
        let v = e.hour >= 12;
        o = v ? 12 : 0, r = v ? 23 : 11;
      }
      let s = Wa(e), i = rt(hs(s, {
        hour: o
      }), new Et()), u = [
        nn(i, e.timeZone, "earlier"),
        nn(i, e.timeZone, "later")
      ].filter((v) => an(v, e.timeZone).day === i.day)[0], d = rt(hs(s, {
        hour: r
      }), new Et()), c = [
        nn(d, e.timeZone, "earlier"),
        nn(d, e.timeZone, "later")
      ].filter((v) => an(v, e.timeZone).day === d.day).pop(), f = Ua(e) - e.offset, p = Math.floor(f / _o), h = f % _o;
      return f = on(p, n, Math.floor(u / _o), Math.floor(c / _o), a == null ? void 0 : a.round) * _o + h, rt(an(f, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return ph(e, t, n, a);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Iu(Wa(e), t, n, a), r = nn(o, e.timeZone);
      return rt(an(r, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function i0(e, t, n) {
  let a = Wa(e), o = hs(Pu(a, t), t);
  if (o.compare(a) === 0) return e;
  let r = nn(o, e.timeZone, n);
  return rt(an(r, e.timeZone), e.calendar);
}
function l0(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function vh(e) {
  let t = rt(e, new Et()), n;
  return t.era === "BC" ? n = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : n = String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function mh(e) {
  return `${vh(e)}T${l0(e)}`;
}
function u0(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let n = Math.floor(e / 36e5), a = e % 36e5 / 6e4;
  return `${t}${String(n).padStart(2, "0")}:${String(a).padStart(2, "0")}`;
}
function d0(e) {
  return `${mh(e)}${u0(e.offset)}[${e.timeZone}]`;
}
function c0(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ru(e, t, n) {
  c0(e, t), t.set(e, n);
}
function Fu(e) {
  let t = typeof e[0] == "object" ? e.shift() : new Et(), n;
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
var f0 = /* @__PURE__ */ new WeakMap();
class Ve {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ve(this.calendar, this.era, this.year, this.month, this.day) : new Ve(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return ai(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return fh(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Pu(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return Iu(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return uh(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return vh(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return sh(this, t);
  }
  constructor(...t) {
    Ru(this, f0, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Fu(t);
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, aa(this);
  }
}
var p0 = /* @__PURE__ */ new WeakMap();
class Ka {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Ka(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Ka(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return ai(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return fh(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Pu(hs(this, t), t);
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
        return Iu(this, t, n, a);
      default:
        return ph(this, t, n, a);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, n) {
    return uh(this, t, n);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return mh(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let n = sh(this, t);
    return n === 0 ? jy(this, Wa(t)) : n;
  }
  constructor(...t) {
    Ru(this, p0, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Fu(t);
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, aa(this);
  }
}
var h0 = /* @__PURE__ */ new WeakMap();
class ja {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ja(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new ja(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return hh(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return r0(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, n) {
    return i0(this, t, n);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, n, a) {
    return s0(this, t, n, a);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Qy(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return d0(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - Zy(t, this.timeZone).toDate().getTime();
  }
  constructor(...t) {
    Ru(this, h0, {
      writable: !0,
      value: void 0
    });
    let [n, a, o, r, s] = Fu(t), i = t.shift(), u = t.shift();
    this.calendar = n, this.era = a, this.year = o, this.month = r, this.day = s, this.timeZone = i, this.offset = u, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, aa(this);
  }
}
const Oa = [
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
], v0 = [
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
], qr = [
  1867,
  1911,
  1925,
  1988,
  2018
], Tn = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function kc(e) {
  const t = Oa.findIndex(([n, a, o]) => e.year < n || e.year === n && e.month < a || e.year === n && e.month === a && e.day < o);
  return t === -1 ? Oa.length - 1 : t === 0 ? 0 : t - 1;
}
function Hi(e) {
  let t = qr[Tn.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new Ve(e.year + t, e.month, e.day);
}
class m0 extends Et {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = kc(n);
    return new Ve(this, Tn[a], n.year - qr[a], n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Hi(t));
  }
  balanceDate(t) {
    let n = Hi(t), a = kc(n);
    Tn[a] !== t.era && (t.era = Tn[a], t.year = n.year - qr[a]), this.constrainDate(t);
  }
  constrainDate(t) {
    let n = Tn.indexOf(t.era), a = v0[n];
    if (a != null) {
      let [o, r, s] = a, i = o - qr[n];
      t.year = Math.max(1, Math.min(i, t.year)), t.year === i && (t.month = Math.min(r, t.month), t.month === r && (t.day = Math.min(s, t.day)));
    }
    if (t.year === 1 && n >= 0) {
      let [, o, r] = Oa[n];
      t.month = Math.max(o, t.month), t.month === o && (t.day = Math.max(r, t.day));
    }
  }
  getEras() {
    return Tn;
  }
  getYearsInEra(t) {
    let n = Tn.indexOf(t.era), a = Oa[n], o = Oa[n + 1];
    if (o == null)
      return 9999 - a[0] + 1;
    let r = o[0] - a[0];
    return (t.month < o[1] || t.month === o[1] && t.day < o[2]) && r++, r;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Hi(t));
  }
  getMinimumMonthInYear(t) {
    let n = Sc(t);
    return n ? n[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let n = Sc(t);
    return n && t.month === n[1] ? n[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function Sc(e) {
  if (e.year === 1) {
    let t = Tn.indexOf(e.era);
    return Oa[t];
  }
}
const gh = -543;
class g0 extends Et {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = ir(n.era, n.year);
    return new Ve(this, a - gh, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Tc(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Tc(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Tc(e) {
  let [t, n] = ni(e.year + gh);
  return new Ve(t, n, e.month, e.day);
}
const vs = 1911;
function yh(e) {
  return e.era === "minguo" ? e.year + vs : 1 - e.year + vs;
}
function Ac(e) {
  let t = e - vs;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class y0 extends Et {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = ir(n.era, n.year), [o, r] = Ac(a);
    return new Ve(this, o, r, n.month, n.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Ec(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [n, a] = Ac(yh(t));
    t.era = n, t.year = a;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Ec(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - vs;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Ec(e) {
  let [t, n] = ni(yh(e));
  return new Ve(t, n, e.month, e.day);
}
const Mc = 1948320, Dc = [
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
class b0 {
  fromJulianDay(t) {
    let n = t - Mc, a = 1 + Math.floor((33 * n + 3) / 12053), o = 365 * (a - 1) + Math.floor((8 * a + 21) / 33), r = n - o, s = r < 216 ? Math.floor(r / 31) : Math.floor((r - 6) / 30), i = r - Dc[s] + 1;
    return new Ve(this, a, s + 1, i);
  }
  toJulianDay(t) {
    let n = Mc - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return n += Dc[t.month - 1], n += t.day, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || Ba(25 * t.year + 11, 33) < 8 ? 30 : 29;
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
const Ui = 78, Bc = 80;
class _0 extends Et {
  fromJulianDay(t) {
    let n = super.fromJulianDay(t), a = n.year - Ui, o = t - Wn(n.era, n.year, 1, 1), r;
    o < Bc ? (a--, r = Mn(n.year - 1) ? 31 : 30, o += r + 155 + 90 + 10) : (r = Mn(n.year) ? 31 : 30, o -= Bc);
    let s, i;
    if (o < r)
      s = 1, i = o + 1;
    else {
      let u = o - r;
      u < 155 ? (s = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, s = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new Ve(this, a, s, i);
  }
  toJulianDay(t) {
    let n = t.year + Ui, [a, o] = ni(n), r, s;
    return Mn(o) ? (r = 31, s = Wn(a, o, 3, 21)) : (r = 30, s = Wn(a, o, 3, 22)), t.month === 1 ? s + t.day - 1 : (s += r + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (s += (t.month - 7) * 30), s += t.day - 1, s);
  }
  getDaysInMonth(t) {
    return t.month === 1 && Mn(t.year + Ui) || t.month >= 2 && t.month <= 6 ? 31 : 30;
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
const ms = 1948440, Oc = 1948439, yt = 1300, $a = 1600, w0 = 460322;
function gs(e, t, n, a) {
  return a + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function bh(e, t, n) {
  let a = Math.floor((30 * (n - t) + 10646) / 10631), o = Math.min(12, Math.ceil((n - (29 + gs(t, a, 1, 1))) / 29.5) + 1), r = n - gs(t, a, o, 1) + 1;
  return new Ve(e, a, o, r);
}
function Pc(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Vu {
  fromJulianDay(t) {
    return bh(this, ms, t);
  }
  toJulianDay(t) {
    return gs(ms, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = 29 + t.month % 2;
    return t.month === 12 && Pc(t.year) && n++, n;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Pc(t.year) ? 355 : 354;
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
class x0 extends Vu {
  fromJulianDay(t) {
    return bh(this, Oc, t);
  }
  toJulianDay(t) {
    return gs(Oc, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const C0 = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Tl, Pa;
function Xr(e) {
  return w0 + Pa[e - yt];
}
function Mo(e, t) {
  let n = e - yt, a = 1 << 11 - (t - 1);
  return Tl[n] & a ? 30 : 29;
}
function Ic(e, t) {
  let n = Xr(e);
  for (let a = 1; a < t; a++) n += Mo(e, a);
  return n;
}
function Rc(e) {
  return Pa[e + 1 - yt] - Pa[e - yt];
}
class $0 extends Vu {
  fromJulianDay(t) {
    let n = t - ms, a = Xr(yt), o = Xr($a);
    if (n < a || n > o) return super.fromJulianDay(t);
    {
      let r = yt - 1, s = 1, i = 1;
      for (; i > 0; ) {
        r++, i = n - Xr(r) + 1;
        let u = Rc(r);
        if (i === u) {
          s = 12;
          break;
        } else if (i < u) {
          let d = Mo(r, s);
          for (s = 1; i > d; )
            i -= d, s++, d = Mo(r, s);
          break;
        }
      }
      return new Ve(this, r, s, n - Ic(r, s) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < yt || t.year > $a ? super.toJulianDay(t) : ms + Ic(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < yt || t.year > $a ? super.getDaysInMonth(t) : Mo(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < yt || t.year > $a ? super.getDaysInYear(t) : Rc(t.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Tl || (Tl = new Uint16Array(Uint8Array.from(atob(C0), (t) => t.charCodeAt(0)).buffer)), !Pa) {
      Pa = new Uint32Array($a - yt + 1);
      let t = 0;
      for (let n = yt; n <= $a; n++) {
        Pa[n - yt] = t;
        for (let a = 1; a <= 12; a++) t += Mo(n, a);
      }
    }
  }
}
const Fc = 347997, _h = 1080, wh = 24 * _h, k0 = 29, S0 = 12 * _h + 793, T0 = k0 * wh + S0;
function Un(e) {
  return Ba(e * 7 + 1, 19) < 7;
}
function Jr(e) {
  let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, a = t * 29 + Math.floor(n / 25920);
  return Ba(3 * (a + 1), 7) < 3 && (a += 1), a;
}
function A0(e) {
  let t = Jr(e - 1), n = Jr(e);
  return Jr(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0;
}
function Fo(e) {
  return Jr(e) + A0(e);
}
function xh(e) {
  return Fo(e + 1) - Fo(e);
}
function E0(e) {
  let t = xh(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function Sr(e, t) {
  if (t >= 6 && !Un(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let n = E0(e);
  return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Un(e) ? 30 : 0 : 30;
}
class M0 {
  fromJulianDay(t) {
    let n = t - Fc, a = n * wh / T0, o = Math.floor((19 * a + 234) / 235) + 1, r = Fo(o), s = Math.floor(n - r);
    for (; s < 1; )
      o--, r = Fo(o), s = Math.floor(n - r);
    let i = 1, u = 0;
    for (; u < s; )
      u += Sr(o, i), i++;
    i--, u -= Sr(o, i);
    let d = s - u;
    return new Ve(this, o, i, d);
  }
  toJulianDay(t) {
    let n = Fo(t.year);
    for (let a = 1; a < t.month; a++) n += Sr(t.year, a);
    return n + t.day + Fc;
  }
  getDaysInMonth(t) {
    return Sr(t.year, t.month);
  }
  getMonthsInYear(t) {
    return Un(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return xh(t.year);
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
    n.year !== t.year && (Un(n.year) && !Un(t.year) && n.month > 6 ? t.month-- : !Un(n.year) && Un(t.year) && n.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Al = 1723856, Vc = 1824665, El = 5500;
function ys(e, t, n, a) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + a - 1;
}
function Nu(e, t) {
  let n = Math.floor(4 * (t - e) / 1461), a = 1 + Math.floor((t - ys(e, n, 1, 1)) / 30), o = t + 1 - ys(e, n, a, 1);
  return [
    n,
    a,
    o
  ];
}
function Ch(e) {
  return Math.floor(e % 4 / 3);
}
function $h(e, t) {
  return t % 13 !== 0 ? 30 : Ch(e) + 5;
}
class Lu {
  fromJulianDay(t) {
    let [n, a, o] = Nu(Al, t), r = "AM";
    return n <= 0 && (r = "AA", n += El), new Ve(this, r, n, a, o);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "AA" && (n -= El), ys(Al, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    return $h(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + Ch(t.year);
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
class D0 extends Lu {
  fromJulianDay(t) {
    let [n, a, o] = Nu(Al, t);
    return n += El, new Ve(this, "AA", n, a, o);
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
class B0 extends Lu {
  fromJulianDay(t) {
    let [n, a, o] = Nu(Vc, t), r = "CE";
    return n <= 0 && (r = "BCE", n = 1 - n), new Ve(this, r, n, a, o);
  }
  toJulianDay(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), ys(Vc, n, t.month, t.day);
  }
  getDaysInMonth(t) {
    let n = t.year;
    return t.era === "BCE" && (n = 1 - n), $h(n, t.month);
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
function O0(e) {
  switch (e) {
    case "buddhist":
      return new g0();
    case "ethiopic":
      return new Lu();
    case "ethioaa":
      return new D0();
    case "coptic":
      return new B0();
    case "hebrew":
      return new M0();
    case "indian":
      return new _0();
    case "islamic-civil":
      return new Vu();
    case "islamic-tbla":
      return new x0();
    case "islamic-umalqura":
      return new $0();
    case "japanese":
      return new m0();
    case "persian":
      return new b0();
    case "roc":
      return new y0();
    case "gregory":
    default:
      return new Et();
  }
}
let Wi = /* @__PURE__ */ new Map();
class Rt {
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
    return R0() && (this.resolvedHourCycle || (this.resolvedHourCycle = F0(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = kh(t, n), this.options = n;
  }
}
const P0 = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function kh(e, t = {}) {
  if (typeof t.hour12 == "boolean" && I0()) {
    t = {
      ...t
    };
    let o = P0[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
    t.hourCycle = o ?? r, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((o, r) => o[0] < r[0] ? -1 : 1).join() : "");
  if (Wi.has(n)) return Wi.get(n);
  let a = new Intl.DateTimeFormat(e, t);
  return Wi.set(n, a), a;
}
let Ki = null;
function I0() {
  return Ki == null && (Ki = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Ki;
}
let ji = null;
function R0() {
  return ji == null && (ji = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), ji;
}
function F0(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = kh(e, {
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
function V0(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a += t)
    n.push(e.slice(a, a + t));
  return n;
}
function bt(e, t = cn()) {
  return zu(e) ? e.toDate() : e.toDate(t);
}
function N0(e) {
  return e instanceof Ka;
}
function zu(e) {
  return e instanceof ja;
}
function L0(e) {
  return N0(e) || zu(e);
}
function fn(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), n = e.getMonth() + 1;
    return new Date(t, n, 0).getDate();
  } else
    return e.set({ day: 100 }).day;
}
function Dn(e, t) {
  return e.compare(t) < 0;
}
function Do(e, t) {
  return e.compare(t) > 0;
}
function z0(e, t) {
  return e.compare(t) <= 0;
}
function H0(e, t) {
  return e.compare(t) >= 0;
}
function U0(e, t, n) {
  return H0(e, t) && z0(e, n);
}
function W0(e, t, n) {
  return Do(e, t) && Dn(e, n);
}
function K0(e, t, n) {
  const a = rh(e, n);
  return t > a ? e.subtract({ days: a + 7 - t }) : t === a ? e : e.subtract({ days: a - t });
}
function j0(e, t, n) {
  const a = rh(e, n), o = t === 0 ? 6 : t - 1;
  return a === o ? e : a > o ? e.add({ days: 7 - a + o }) : e.add({ days: o - a });
}
function Y0(e, t, n, a) {
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
function Nc(e, t) {
  const n = [];
  let a = e.add({ days: 1 });
  const o = t;
  for (; a.compare(o) < 0; )
    n.push(a), a = a.add({ days: 1 });
  return n;
}
function Yi(e) {
  const { dateObj: t, weekStartsOn: n, fixedWeeks: a, locale: o } = e, r = fn(t), s = Array.from({ length: r }, (b, $) => t.set({ day: $ + 1 })), i = Wo(t), u = wc(t), d = K0(i, n, o), c = j0(u, n, o), f = Nc(d.subtract({ days: 1 }), i), p = Nc(u, c.add({ days: 1 })), h = f.length + s.length + p.length;
  if (a && h < 42) {
    const b = 42 - h;
    let $ = p[p.length - 1];
    $ || ($ = wc(t));
    const k = Array.from({ length: b }, (C, A) => {
      const T = A + 1;
      return $.add({ days: T });
    });
    p.push(...k);
  }
  const v = f.concat(s, p), m = V0(v, 7);
  return {
    value: t,
    cells: v,
    rows: m
  };
}
function G0(e) {
  const { dateObj: t, startIndex: n, endIndex: a } = e, o = Array.from({ length: Math.abs(n ?? 0) + a }, (r, s) => s <= Math.abs(n ?? 0) ? t.subtract({ years: s }).set({ day: 1, month: 1 }) : t.add({ years: s - a }).set({ day: 1, month: 1 }));
  return o.sort((r, s) => r.year - s.year), o;
}
function q0(e) {
  const { dateObj: t, numberOfMonths: n = 1, pagedNavigation: a = !1 } = e;
  return n && a ? Array.from({ length: Math.floor(12 / n) }, (o, r) => Wo(t.set({ month: r * n + 1 }))) : Array.from({ length: 12 }, (o, r) => Wo(t.set({ month: r + 1 })));
}
function zn(e) {
  const { numberOfMonths: t, dateObj: n, ...a } = e, o = [];
  if (!t || t === 1)
    return o.push(
      Yi({
        ...a,
        dateObj: n
      })
    ), o;
  o.push(
    Yi({
      ...a,
      dateObj: n
    })
  );
  for (let r = 1; r < t; r++) {
    const s = n.add({ months: r });
    o.push(
      Yi({
        ...a,
        dateObj: s
      })
    );
  }
  return o;
}
const X0 = ["top", "right", "bottom", "left"], Pn = Math.min, ft = Math.max, bs = Math.round, Tr = Math.floor, Lt = (e) => ({
  x: e,
  y: e
}), J0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Z0 = {
  start: "end",
  end: "start"
};
function Ml(e, t, n) {
  return ft(e, Pn(t, n));
}
function pn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hn(e) {
  return e.split("-")[0];
}
function ro(e) {
  return e.split("-")[1];
}
function Hu(e) {
  return e === "x" ? "y" : "x";
}
function Uu(e) {
  return e === "y" ? "height" : "width";
}
const Q0 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Nt(e) {
  return Q0.has(hn(e)) ? "y" : "x";
}
function Wu(e) {
  return Hu(Nt(e));
}
function eb(e, t, n) {
  n === void 0 && (n = !1);
  const a = ro(e), o = Wu(e), r = Uu(o);
  let s = o === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = _s(s)), [s, _s(s)];
}
function tb(e) {
  const t = _s(e);
  return [Dl(e), t, Dl(t)];
}
function Dl(e) {
  return e.replace(/start|end/g, (t) => Z0[t]);
}
const Lc = ["left", "right"], zc = ["right", "left"], nb = ["top", "bottom"], ab = ["bottom", "top"];
function ob(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? zc : Lc : t ? Lc : zc;
    case "left":
    case "right":
      return t ? nb : ab;
    default:
      return [];
  }
}
function rb(e, t, n, a) {
  const o = ro(e);
  let r = ob(hn(e), n === "start", a);
  return o && (r = r.map((s) => s + "-" + o), t && (r = r.concat(r.map(Dl)))), r;
}
function _s(e) {
  return e.replace(/left|right|bottom|top/g, (t) => J0[t]);
}
function sb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Sh(e) {
  return typeof e != "number" ? sb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ws(e) {
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
function Hc(e, t, n) {
  let {
    reference: a,
    floating: o
  } = e;
  const r = Nt(t), s = Wu(t), i = Uu(s), u = hn(t), d = r === "y", c = a.x + a.width / 2 - o.width / 2, f = a.y + a.height / 2 - o.height / 2, p = a[i] / 2 - o[i] / 2;
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
  switch (ro(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const ib = async (e, t, n) => {
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
  } = Hc(d, a, u), p = a, h = {}, v = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: b,
      fn: $
    } = i[m], {
      x: k,
      y: C,
      data: A,
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
        ...A
      }
    }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (d = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: c,
      y: f
    } = Hc(d, p, u)), m = -1);
  }
  return {
    x: c,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Ko(e, t) {
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
  } = pn(t, e), v = Sh(h), b = i[p ? f === "floating" ? "reference" : "floating" : f], $ = ws(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), k = f === "floating" ? {
    x: a,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), A = await (r.isElement == null ? void 0 : r.isElement(C)) ? await (r.getScale == null ? void 0 : r.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = ws(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: C,
    strategy: u
  }) : k);
  return {
    top: ($.top - T.top + v.top) / A.y,
    bottom: (T.bottom - $.bottom + v.bottom) / A.y,
    left: ($.left - T.left + v.left) / A.x,
    right: (T.right - $.right + v.right) / A.x
  };
}
const lb = (e) => ({
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
    } = pn(e, t) || {};
    if (d == null)
      return {};
    const f = Sh(c), p = {
      x: n,
      y: a
    }, h = Wu(o), v = Uu(h), m = await s.getDimensions(d), b = h === "y", $ = b ? "top" : "left", k = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", A = r.reference[v] + r.reference[h] - p[h] - r.floating[v], T = p[h] - r.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let E = M ? M[C] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(M))) && (E = i.floating[C] || r.floating[v]);
    const N = A / 2 - T / 2, R = E / 2 - m[v] / 2 - 1, P = Pn(f[$], R), I = Pn(f[k], R), F = P, Y = E - m[v] - I, z = E / 2 - m[v] / 2 + N, H = Ml(F, z, Y), ee = !u.arrow && ro(o) != null && z !== H && r.reference[v] / 2 - (z < F ? P : I) - m[v] / 2 < 0, re = ee ? z < F ? z - F : z - Y : 0;
    return {
      [h]: p[h] + re,
      data: {
        [h]: H,
        centerOffset: z - H - re,
        ...ee && {
          alignmentOffset: re
        }
      },
      reset: ee
    };
  }
}), ub = function(e) {
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
      } = pn(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const $ = hn(o), k = Nt(i), C = hn(i) === i, A = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), T = p || (C || !m ? [_s(i)] : tb(i)), M = v !== "none";
      !p && M && T.push(...rb(i, m, v, A));
      const E = [i, ...T], N = await Ko(t, b), R = [];
      let P = ((a = r.flip) == null ? void 0 : a.overflows) || [];
      if (c && R.push(N[$]), f) {
        const z = eb(o, s, A);
        R.push(N[z[0]], N[z[1]]);
      }
      if (P = [...P, {
        placement: o,
        overflows: R
      }], !R.every((z) => z <= 0)) {
        var I, F;
        const z = (((I = r.flip) == null ? void 0 : I.index) || 0) + 1, H = E[z];
        if (H && (!(f === "alignment" ? k !== Nt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((be) => be.overflows[0] > 0 && Nt(be.placement) === k)))
          return {
            data: {
              index: z,
              overflows: P
            },
            reset: {
              placement: H
            }
          };
        let ee = (F = P.filter((re) => re.overflows[0] <= 0).sort((re, be) => re.overflows[1] - be.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!ee)
          switch (h) {
            case "bestFit": {
              var Y;
              const re = (Y = P.filter((be) => {
                if (M) {
                  const q = Nt(be.placement);
                  return q === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((be) => [be.placement, be.overflows.filter((q) => q > 0).reduce((q, de) => q + de, 0)]).sort((be, q) => be[1] - q[1])[0]) == null ? void 0 : Y[0];
              re && (ee = re);
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
function Uc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Wc(e) {
  return X0.some((t) => e[t] >= 0);
}
const db = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = pn(e, t);
      switch (a) {
        case "referenceHidden": {
          const r = await Ko(t, {
            ...o,
            elementContext: "reference"
          }), s = Uc(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Wc(s)
            }
          };
        }
        case "escaped": {
          const r = await Ko(t, {
            ...o,
            altBoundary: !0
          }), s = Uc(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Wc(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Th = /* @__PURE__ */ new Set(["left", "top"]);
async function cb(e, t) {
  const {
    placement: n,
    platform: a,
    elements: o
  } = e, r = await (a.isRTL == null ? void 0 : a.isRTL(o.floating)), s = hn(n), i = ro(n), u = Nt(n) === "y", d = Th.has(s) ? -1 : 1, c = r && u ? -1 : 1, f = pn(t, e);
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
const fb = function(e) {
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
      } = t, u = await cb(t, e);
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
}, pb = function(e) {
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
      } = pn(e, t), d = {
        x: n,
        y: a
      }, c = await Ko(t, u), f = Nt(hn(o)), p = Hu(f);
      let h = d[p], v = d[f];
      if (r) {
        const b = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", k = h + c[b], C = h - c[$];
        h = Ml(k, h, C);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", k = v + c[b], C = v - c[$];
        v = Ml(k, v, C);
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
}, hb = function(e) {
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
      } = pn(e, t), c = {
        x: n,
        y: a
      }, f = Nt(o), p = Hu(f);
      let h = c[p], v = c[f];
      const m = pn(i, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const C = p === "y" ? "height" : "width", A = r.reference[p] - r.floating[C] + b.mainAxis, T = r.reference[p] + r.reference[C] - b.mainAxis;
        h < A ? h = A : h > T && (h = T);
      }
      if (d) {
        var $, k;
        const C = p === "y" ? "width" : "height", A = Th.has(hn(o)), T = r.reference[f] - r.floating[C] + (A && (($ = s.offset) == null ? void 0 : $[f]) || 0) + (A ? 0 : b.crossAxis), M = r.reference[f] + r.reference[C] + (A ? 0 : ((k = s.offset) == null ? void 0 : k[f]) || 0) - (A ? b.crossAxis : 0);
        v < T ? v = T : v > M && (v = M);
      }
      return {
        [p]: h,
        [f]: v
      };
    }
  };
}, vb = function(e) {
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
      } = pn(e, t), c = await Ko(t, d), f = hn(o), p = ro(o), h = Nt(o) === "y", {
        width: v,
        height: m
      } = r.floating;
      let b, $;
      f === "top" || f === "bottom" ? (b = f, $ = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = f, b = p === "end" ? "top" : "bottom");
      const k = m - c.top - c.bottom, C = v - c.left - c.right, A = Pn(m - c[b], k), T = Pn(v - c[$], C), M = !t.middlewareData.shift;
      let E = A, N = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = C), (a = t.middlewareData.shift) != null && a.enabled.y && (E = k), M && !p) {
        const P = ft(c.left, 0), I = ft(c.right, 0), F = ft(c.top, 0), Y = ft(c.bottom, 0);
        h ? N = v - 2 * (P !== 0 || I !== 0 ? P + I : ft(c.left, c.right)) : E = m - 2 * (F !== 0 || Y !== 0 ? F + Y : ft(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: N,
        availableHeight: E
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
function oi() {
  return typeof window < "u";
}
function da(e) {
  return Ku(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
  var t;
  return (t = (Ku(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ku(e) {
  return oi() ? e instanceof Node || e instanceof pt(e).Node : !1;
}
function Mt(e) {
  return oi() ? e instanceof Element || e instanceof pt(e).Element : !1;
}
function Ut(e) {
  return oi() ? e instanceof HTMLElement || e instanceof pt(e).HTMLElement : !1;
}
function Kc(e) {
  return !oi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
const mb = /* @__PURE__ */ new Set(["inline", "contents"]);
function lr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: a,
    display: o
  } = Dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !mb.has(o);
}
const gb = /* @__PURE__ */ new Set(["table", "td", "th"]);
function yb(e) {
  return gb.has(da(e));
}
const bb = [":popover-open", ":modal"];
function ri(e) {
  return bb.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const _b = ["transform", "translate", "scale", "rotate", "perspective"], wb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], xb = ["paint", "layout", "strict", "content"];
function ju(e) {
  const t = Yu(), n = Mt(e) ? Dt(e) : e;
  return _b.some((a) => n[a] ? n[a] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || wb.some((a) => (n.willChange || "").includes(a)) || xb.some((a) => (n.contain || "").includes(a));
}
function Cb(e) {
  let t = In(e);
  for (; Ut(t) && !Ya(t); ) {
    if (ju(t))
      return t;
    if (ri(t))
      return null;
    t = In(t);
  }
  return null;
}
function Yu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const $b = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ya(e) {
  return $b.has(da(e));
}
function Dt(e) {
  return pt(e).getComputedStyle(e);
}
function si(e) {
  return Mt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function In(e) {
  if (da(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Kc(e) && e.host || // Fallback.
    Yt(e)
  );
  return Kc(t) ? t.host : t;
}
function Ah(e) {
  const t = In(e);
  return Ya(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ut(t) && lr(t) ? t : Ah(t);
}
function jo(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ah(e), r = o === ((a = e.ownerDocument) == null ? void 0 : a.body), s = pt(o);
  if (r) {
    const i = Bl(s);
    return t.concat(s, s.visualViewport || [], lr(o) ? o : [], i && n ? jo(i) : []);
  }
  return t.concat(o, jo(o, [], n));
}
function Bl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Eh(e) {
  const t = Dt(e);
  let n = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const o = Ut(e), r = o ? e.offsetWidth : n, s = o ? e.offsetHeight : a, i = bs(n) !== r || bs(a) !== s;
  return i && (n = r, a = s), {
    width: n,
    height: a,
    $: i
  };
}
function Gu(e) {
  return Mt(e) ? e : e.contextElement;
}
function Ia(e) {
  const t = Gu(e);
  if (!Ut(t))
    return Lt(1);
  const n = t.getBoundingClientRect(), {
    width: a,
    height: o,
    $: r
  } = Eh(t);
  let s = (r ? bs(n.width) : n.width) / a, i = (r ? bs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const kb = /* @__PURE__ */ Lt(0);
function Mh(e) {
  const t = pt(e);
  return !Yu() || !t.visualViewport ? kb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Sb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== pt(e) ? !1 : t;
}
function oa(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = Gu(e);
  let s = Lt(1);
  t && (a ? Mt(a) && (s = Ia(a)) : s = Ia(e));
  const i = Sb(r, n, a) ? Mh(r) : Lt(0);
  let u = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (r) {
    const p = pt(r), h = a && Mt(a) ? pt(a) : a;
    let v = p, m = Bl(v);
    for (; m && a && h !== v; ) {
      const b = Ia(m), $ = m.getBoundingClientRect(), k = Dt(m), C = $.left + (m.clientLeft + parseFloat(k.paddingLeft)) * b.x, A = $.top + (m.clientTop + parseFloat(k.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, f *= b.y, u += C, d += A, v = pt(m), m = Bl(v);
    }
  }
  return ws({
    width: c,
    height: f,
    x: u,
    y: d
  });
}
function qu(e, t) {
  const n = si(e).scrollLeft;
  return t ? t.left + n : oa(Yt(e)).left + n;
}
function Dh(e, t, n) {
  n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = a.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    qu(e, a)
  )), r = a.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Tb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: a,
    strategy: o
  } = e;
  const r = o === "fixed", s = Yt(a), i = t ? ri(t.floating) : !1;
  if (a === s || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Lt(1);
  const c = Lt(0), f = Ut(a);
  if ((f || !f && !r) && ((da(a) !== "body" || lr(s)) && (u = si(a)), Ut(a))) {
    const h = oa(a);
    d = Ia(a), c.x = h.x + a.clientLeft, c.y = h.y + a.clientTop;
  }
  const p = s && !f && !r ? Dh(s, u, !0) : Lt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + p.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + p.y
  };
}
function Ab(e) {
  return Array.from(e.getClientRects());
}
function Eb(e) {
  const t = Yt(e), n = si(e), a = e.ownerDocument.body, o = ft(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), r = ft(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -n.scrollLeft + qu(e);
  const i = -n.scrollTop;
  return Dt(a).direction === "rtl" && (s += ft(t.clientWidth, a.clientWidth) - o), {
    width: o,
    height: r,
    x: s,
    y: i
  };
}
function Mb(e, t) {
  const n = pt(e), a = Yt(e), o = n.visualViewport;
  let r = a.clientWidth, s = a.clientHeight, i = 0, u = 0;
  if (o) {
    r = o.width, s = o.height;
    const d = Yu();
    (!d || d && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: i,
    y: u
  };
}
const Db = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Bb(e, t) {
  const n = oa(e, !0, t === "fixed"), a = n.top + e.clientTop, o = n.left + e.clientLeft, r = Ut(e) ? Ia(e) : Lt(1), s = e.clientWidth * r.x, i = e.clientHeight * r.y, u = o * r.x, d = a * r.y;
  return {
    width: s,
    height: i,
    x: u,
    y: d
  };
}
function jc(e, t, n) {
  let a;
  if (t === "viewport")
    a = Mb(e, n);
  else if (t === "document")
    a = Eb(Yt(e));
  else if (Mt(t))
    a = Bb(t, n);
  else {
    const o = Mh(e);
    a = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ws(a);
}
function Bh(e, t) {
  const n = In(e);
  return n === t || !Mt(n) || Ya(n) ? !1 : Dt(n).position === "fixed" || Bh(n, t);
}
function Ob(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let a = jo(e, [], !1).filter((i) => Mt(i) && da(i) !== "body"), o = null;
  const r = Dt(e).position === "fixed";
  let s = r ? In(e) : e;
  for (; Mt(s) && !Ya(s); ) {
    const i = Dt(s), u = ju(s);
    !u && i.position === "fixed" && (o = null), (r ? !u && !o : !u && i.position === "static" && !!o && Db.has(o.position) || lr(s) && !u && Bh(e, s)) ? a = a.filter((c) => c !== s) : o = i, s = In(s);
  }
  return t.set(e, a), a;
}
function Pb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: a,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ri(t) ? [] : Ob(t, this._c) : [].concat(n), a], i = s[0], u = s.reduce((d, c) => {
    const f = jc(t, c, o);
    return d.top = ft(f.top, d.top), d.right = Pn(f.right, d.right), d.bottom = Pn(f.bottom, d.bottom), d.left = ft(f.left, d.left), d;
  }, jc(t, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Ib(e) {
  const {
    width: t,
    height: n
  } = Eh(e);
  return {
    width: t,
    height: n
  };
}
function Rb(e, t, n) {
  const a = Ut(t), o = Yt(t), r = n === "fixed", s = oa(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Lt(0);
  function d() {
    u.x = qu(o);
  }
  if (a || !a && !r)
    if ((da(t) !== "body" || lr(o)) && (i = si(t)), a) {
      const h = oa(t, !0, r, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else o && d();
  r && !a && o && d();
  const c = o && !a && !r ? Dh(o, i) : Lt(0), f = s.left + i.scrollLeft - u.x - c.x, p = s.top + i.scrollTop - u.y - c.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Gi(e) {
  return Dt(e).position === "static";
}
function Yc(e, t) {
  if (!Ut(e) || Dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Yt(e) === n && (n = n.ownerDocument.body), n;
}
function Oh(e, t) {
  const n = pt(e);
  if (ri(e))
    return n;
  if (!Ut(e)) {
    let o = In(e);
    for (; o && !Ya(o); ) {
      if (Mt(o) && !Gi(o))
        return o;
      o = In(o);
    }
    return n;
  }
  let a = Yc(e, t);
  for (; a && yb(a) && Gi(a); )
    a = Yc(a, t);
  return a && Ya(a) && Gi(a) && !ju(a) ? n : a || Cb(e) || n;
}
const Fb = async function(e) {
  const t = this.getOffsetParent || Oh, n = this.getDimensions, a = await n(e.floating);
  return {
    reference: Rb(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function Vb(e) {
  return Dt(e).direction === "rtl";
}
const Nb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Tb,
  getDocumentElement: Yt,
  getClippingRect: Pb,
  getOffsetParent: Oh,
  getElementRects: Fb,
  getClientRects: Ab,
  getDimensions: Ib,
  getScale: Ia,
  isElement: Mt,
  isRTL: Vb
};
function Ph(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Lb(e, t) {
  let n = null, a;
  const o = Yt(e);
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
    const v = Tr(f), m = Tr(o.clientWidth - (c + p)), b = Tr(o.clientHeight - (f + h)), $ = Tr(c), C = {
      rootMargin: -v + "px " + -m + "px " + -b + "px " + -$ + "px",
      threshold: ft(0, Pn(1, u)) || 1
    };
    let A = !0;
    function T(M) {
      const E = M[0].intersectionRatio;
      if (E !== u) {
        if (!A)
          return s();
        E ? s(!1, E) : a = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Ph(d, e.getBoundingClientRect()) && s(), A = !1;
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
function Ih(e, t, n, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = a, d = Gu(e), c = o || r ? [...d ? jo(d) : [], ...jo(t)] : [];
  c.forEach(($) => {
    o && $.addEventListener("scroll", n, {
      passive: !0
    }), r && $.addEventListener("resize", n);
  });
  const f = d && i ? Lb(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver(($) => {
    let [k] = $;
    k && k.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = h) == null || C.observe(t);
    })), n();
  }), d && !u && h.observe(d), h.observe(t));
  let v, m = u ? oa(e) : null;
  u && b();
  function b() {
    const $ = oa(e);
    m && !Ph(m, $) && n(), m = $, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var $;
    c.forEach((k) => {
      o && k.removeEventListener("scroll", n), r && k.removeEventListener("resize", n);
    }), f == null || f(), ($ = h) == null || $.disconnect(), h = null, u && cancelAnimationFrame(v);
  };
}
const Rh = fb, Fh = pb, xs = ub, Vh = vb, Nh = db, zb = lb, Lh = hb, Hb = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), o = {
    platform: Nb,
    ...n
  }, r = {
    ...o.platform,
    _c: a
  };
  return ib(e, t, {
    ...o,
    platform: r
  });
};
function Ub(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ol(e) {
  if (Ub(e)) {
    const t = e.$el;
    return Ku(t) && da(t) === "#comment" ? null : t;
  }
  return e;
}
function Ea(e) {
  return typeof e == "function" ? e() : l(e);
}
function zh(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ol(Ea(e.element));
      return n == null ? {} : zb({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Hh(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gc(e, t) {
  const n = Hh(e);
  return Math.round(t * n) / n;
}
function Uh(e, t, n) {
  n === void 0 && (n = {});
  const a = n.whileElementsMounted, o = S(() => {
    var E;
    return (E = Ea(n.open)) != null ? E : !0;
  }), r = S(() => Ea(n.middleware)), s = S(() => {
    var E;
    return (E = Ea(n.placement)) != null ? E : "bottom";
  }), i = S(() => {
    var E;
    return (E = Ea(n.strategy)) != null ? E : "absolute";
  }), u = S(() => {
    var E;
    return (E = Ea(n.transform)) != null ? E : !0;
  }), d = S(() => Ol(e.value)), c = S(() => Ol(t.value)), f = B(0), p = B(0), h = B(i.value), v = B(s.value), m = un({}), b = B(!1), $ = S(() => {
    const E = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return E;
    const N = Gc(c.value, f.value), R = Gc(c.value, p.value);
    return u.value ? {
      ...E,
      transform: "translate(" + N + "px, " + R + "px)",
      ...Hh(c.value) >= 1.5 && {
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
    const E = o.value;
    Hb(d.value, c.value, {
      middleware: r.value,
      placement: s.value,
      strategy: i.value
    }).then((N) => {
      f.value = N.x, p.value = N.y, h.value = N.strategy, v.value = N.placement, m.value = N.middlewareData, b.value = E !== !1;
    });
  }
  function A() {
    typeof k == "function" && (k(), k = void 0);
  }
  function T() {
    if (A(), a === void 0) {
      C();
      return;
    }
    if (d.value != null && c.value != null) {
      k = a(d.value, c.value, C);
      return;
    }
  }
  function M() {
    o.value || (b.value = !1);
  }
  return te([r, s, i, o], C, {
    flush: "sync"
  }), te([d, c], T, {
    flush: "sync"
  }), te(o, M, {
    flush: "sync"
  }), Zs() && Qs(A), {
    x: Ca(f),
    y: Ca(p),
    strategy: Ca(h),
    placement: Ca(v),
    middlewareData: Ca(m),
    isPositioned: Ca(b),
    floatingStyles: $,
    update: C
  };
}
function ge(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(o) => {
    const r = ua(a, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (tn(a, o), o)];
}
function Xu(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function Cs(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function Wb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kb = function e(t, n) {
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
const Kn = /* @__PURE__ */ Wb(Kb);
function Zr(e) {
  return e == null;
}
function Wh(e) {
  const { defaultValue: t, defaultPlaceholder: n, granularity: a = "day", locale: o = "en" } = e;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (n)
    return n.copy();
  const r = /* @__PURE__ */ new Date(), s = r.getFullYear(), i = r.getMonth() + 1, u = r.getDate(), d = ["hour", "minute", "second"], c = new Rt(o), f = O0(c.resolvedOptions().calendar);
  return d.includes(a ?? "day") ? rt(new Ka(s, i, u, 0, 0, 0), f) : rt(new Ve(s, i, u), f);
}
function Kh(e) {
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
function jb(e, t) {
  var n;
  const a = un();
  return xe(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), oo(a);
}
function ca(e) {
  return Zs() ? (Qs(e), !0) : !1;
}
function Yb() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const a = () => t(n);
      return ca(a), {
        off: a
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((a) => a(...n)))
  };
}
function Gb(e) {
  let t = !1, n;
  const a = Du(!0);
  return (...o) => (t || (n = a.run(() => e(...o)), t = !0), n);
}
function jh(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, n || (a = Du(!0), n = a.run(() => e(...r))), ca(o), n);
}
function dn(e) {
  return typeof e == "function" ? e() : l(e);
}
const Gt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qb = (e) => typeof e < "u", Xb = (e) => e != null, Jb = Object.prototype.toString, Zb = (e) => Jb.call(e) === "[object Object]", Yh = () => {
}, qc = /* @__PURE__ */ Qb();
function Qb() {
  var e, t;
  return Gt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function e_(e) {
  return He();
}
function Gh(e, t = 1e4) {
  return Au((n, a) => {
    let o = dn(e), r;
    const s = () => setTimeout(() => {
      o = dn(e), a();
    }, dn(t));
    return ca(() => {
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
function t_(e, t) {
  e_() && ei(e, t);
}
function Ju(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, o = B(!1);
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
    }, dn(t));
  }
  return a && (o.value = !0, Gt && u()), ca(i), {
    isPending: oo(o),
    start: u,
    stop: i
  };
}
function n_(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: a
  } = t, o = Ju(
    a ?? Yh,
    e,
    t
  ), r = S(() => !o.isPending.value);
  return n ? {
    ready: r,
    ...o
  } : r;
}
function wt(e) {
  var t;
  const n = dn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ur = Gt ? window : void 0;
function Ga(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = ur) : [t, n, a, o] = e, !t)
    return Yh;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], s = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, f, p, h) => (c.addEventListener(f, p, h), () => c.removeEventListener(f, p, h)), u = te(
    () => [wt(t), dn(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const p = Zb(f) ? { ...f } : f;
      r.push(
        ...n.flatMap((h) => a.map((v) => i(c, h, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return ca(d), d;
}
function a_(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Zu(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = ur,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = a_(t);
  return Ga(o, r, (d) => {
    d.repeat && dn(i) || u(d) && n(d);
  }, s);
}
function Qu() {
  const e = B(!1), t = He();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function o_(e) {
  const t = Qu();
  return S(() => (t.value, !!e()));
}
function r_(e, t, n = {}) {
  const { window: a = ur, ...o } = n;
  let r;
  const s = o_(() => a && "MutationObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const p = dn(e), h = (Array.isArray(p) ? p : [p]).map(wt).filter(Xb);
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
  return ca(f), {
    isSupported: s,
    stop: f,
    takeRecords: c
  };
}
function qh(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: a = void 0,
    window: o = ur
  } = t, r = B(!1), s = a ? 1e3 / a : null;
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
  return n && c(), ca(f), {
    isActive: oo(r),
    pause: f,
    resume: c
  };
}
function s_(e) {
  return JSON.parse(JSON.stringify(e));
}
function Me(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = He(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => i ? typeof i == "function" ? i(C) : s_(C) : C, $ = () => qb(e[t]) ? b(e[t]) : f, k = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = $(), A = B(C);
    let T = !1;
    return te(
      () => e[t],
      (M) => {
        T || (T = !0, A.value = b(M), se(() => T = !1));
      }
    ), te(
      A,
      (M) => {
        !T && (M !== e[t] || c) && k(M);
      },
      { deep: c }
    ), A;
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
function ii(e) {
  return e ? e.flatMap((t) => t.type === le ? ii(t.children) : [t]) : [];
}
function Ue() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const i_ = ["INPUT", "TEXTAREA"];
function Xh(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && i_.includes(t.nodeName))
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
  let A = null;
  return k || $ ? A = Jh(C, t, {
    goForward: $ ? v : u === "ltr" ? f : p,
    loop: i
  }) : m ? A = C.at(0) || null : b && (A = C.at(-1) || null), c && (A == null || A.focus()), A;
}
function Jh(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const s = (r + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Jh(
    e,
    i,
    n,
    a
  ) : i : null;
}
function qi(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Pl(e, t, n = ".", a) {
  if (!qi(t))
    return Pl(e, {}, n);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (Array.isArray(s) && Array.isArray(o[r]) ? o[r] = [...s, ...o[r]] : qi(s) && qi(o[r]) ? o[r] = Pl(
      s,
      o[r],
      (n ? `${n}.` : "") + r.toString()
    ) : o[r] = s);
  }
  return o;
}
function l_(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => Pl(n, a, ""), {})
  );
}
const u_ = l_(), [li, hR] = ge("ConfigProvider");
let d_ = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", c_ = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += d_[Math.random() * 64 | 0];
  return t;
};
const f_ = jh(() => {
  const e = B(/* @__PURE__ */ new Map()), t = B(), n = S(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), a = li({
    scrollBody: B(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", qc && (o == null || o()), t.value = void 0;
  };
  return te(n, (s, i) => {
    var u;
    if (!Gt)
      return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, f = (u = a.scrollBody) != null && u.value ? typeof a.scrollBody.value == "object" ? u_({
      padding: a.scrollBody.value.padding === !0 ? d : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? d : a.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof f.padding == "number" ? `${f.padding}px` : String(f.padding), document.body.style.marginRight = typeof f.margin == "number" ? `${f.margin}px` : String(f.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), qc && (o = Ga(
      document,
      "touchmove",
      (p) => p_(p),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function dr(e) {
  const t = c_(6), n = f_();
  n.value.set(t, e ?? !1);
  const a = S({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return t_(() => {
    n.value.delete(t);
  }), a;
}
function Zh(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Zh(n);
  }
}
function p_(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Zh(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const h_ = "data-radix-vue-collection-item";
function so(e, t = h_) {
  const n = Symbol();
  return { createCollection: (a) => {
    const o = B([]);
    function r() {
      const s = wt(a);
      return s ? o.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Fy(() => {
      o.value = [];
    }), ue(r), Vy(r), te(() => a == null ? void 0 : a.value, r, { immediate: !0 }), tn(n, o), o;
  }, injectCollection: () => ua(n, B([])) };
}
function Qh(e) {
  const t = B(e);
  function n() {
    return t.value;
  }
  function a(m) {
    t.value = m;
  }
  function o(m, b) {
    return new Rt(t.value, b).format(m);
  }
  function r(m, b = !0) {
    return L0(m) && b ? o(bt(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(bt(m), {
      dateStyle: "long"
    });
  }
  function s(m, b = {}) {
    return new Rt(t.value, { month: "long", year: "numeric", ...b }).format(m);
  }
  function i(m, b = {}) {
    return new Rt(t.value, { month: "long", ...b }).format(m);
  }
  function u() {
    const m = ps(cn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((b) => ({ label: i(bt(m.set({ month: b }))), value: b }));
  }
  function d(m, b = {}) {
    return new Rt(t.value, { year: "numeric", ...b }).format(m);
  }
  function c(m, b) {
    return zu(m) ? new Rt(t.value, {
      ...b,
      timeZone: m.timeZone
    }).formatToParts(bt(m)) : new Rt(t.value, b).formatToParts(bt(m));
  }
  function f(m, b = "narrow") {
    return new Rt(t.value, { weekday: b }).format(m);
  }
  function p(m) {
    var b;
    return ((b = new Rt(t.value, {
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
    const k = { ...h, ...$ }, C = c(m, k).find((A) => A.type === b);
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
function qt(e) {
  const t = li({
    dir: B("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function fa(e) {
  const t = He(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[Zp(Ha(o))] = (...r) => e(o, ...r);
  }), a;
}
let Xi = 0;
function ed() {
  xe((e) => {
    if (!Gt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Xc()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Xc()
    ), Xi++, e(() => {
      Xi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Xi--;
    });
  });
}
function Xc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function cr(e) {
  return S(() => {
    var t;
    return dn(e) ? !!((t = wt(e)) != null && t.closest("form")) : !0;
  });
}
function ye(e) {
  const t = He(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (o[r] = s), o;
  }, {}), a = Su(e);
  return S(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      o[Ha(s)] = r[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function pe(e, t) {
  const n = ye(e), a = t ? fa(t) : {};
  return S(() => ({
    ...n.value,
    ...a
  }));
}
function j() {
  const e = He(), t = B(), n = S(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : wt(t);
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
function v_(e, t) {
  const n = Gh(!1, 300), a = B(null), o = Yb();
  function r() {
    a.value = null, n.value = !1;
  }
  function s(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, f = m_(c, d.getBoundingClientRect()), p = g_(c, f), h = y_(u.getBoundingClientRect()), v = __([...p, ...h]);
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
        const h = c.target, v = { x: c.clientX, y: c.clientY }, m = ((f = e.value) == null ? void 0 : f.contains(h)) || ((p = t.value) == null ? void 0 : p.contains(h)), b = !b_(v, a.value), $ = !!h.closest("[data-grace-area-trigger]");
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
function m_(e, t) {
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
function g_(e, t, n = 5) {
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
function y_(e) {
  const { top: t, right: n, bottom: a, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: o, y: a }
  ];
}
function b_(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function __(e) {
  const t = e.slice();
  return t.sort((n, a) => n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0), w_(t);
}
function w_(e) {
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
var x_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ka = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Er = {}, Ji = 0, ev = function(e) {
  return e && (e.host || ev(e.parentNode));
}, C_ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = ev(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $_ = function(e, t, n, a) {
  var o = C_(t, Array.isArray(e) ? e : [e]);
  Er[n] || (Er[n] = /* @__PURE__ */ new WeakMap());
  var r = Er[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (ka.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          ka.set(p, m), r.set(p, b), s.push(p), m === 1 && v && Ar.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", p, $);
        }
    });
  };
  return c(t), i.clear(), Ji++, function() {
    s.forEach(function(f) {
      var p = ka.get(f) - 1, h = r.get(f) - 1;
      ka.set(f, p), r.set(f, h), p || (Ar.has(f) || f.removeAttribute(a), Ar.delete(f)), h || f.removeAttribute(n);
    }), Ji--, Ji || (ka = /* @__PURE__ */ new WeakMap(), ka = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Er = {});
  };
}, k_ = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = x_(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), $_(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function fr(e) {
  let t;
  te(() => wt(e), (n) => {
    n ? t = k_(n) : t && t();
  }), Ye(() => {
    t && t();
  });
}
let S_ = 0;
function ze(e, t = "radix") {
  const n = li({ useId: void 0 });
  return Ma.useId ? `${t}-${Ma.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++S_}`;
}
function tv(e) {
  const t = B(), n = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = wt(e);
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
function T_(e, t) {
  const n = B(e);
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
const A_ = "data-item-text";
function td(e) {
  const t = Gh("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, a) => {
      if (!(e != null && e.value) && !a)
        return;
      t.value = t.value + n;
      const o = (e == null ? void 0 : e.value) ?? a, r = Ue(), s = o.map((f) => {
        var p;
        return {
          ref: f,
          textValue: ((p = (f.querySelector(`[${A_}]`) ?? f).textContent) == null ? void 0 : p.trim()) ?? ""
        };
      }), i = s.find((f) => f.ref === r), u = s.map((f) => f.textValue), d = M_(u, t.value, i == null ? void 0 : i.textValue), c = s.find((f) => f.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function E_(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function M_(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let r = E_(e, Math.max(o, 0));
  a.length === 1 && (r = r.filter((i) => i !== n));
  const s = r.find(
    (i) => i.toLowerCase().startsWith(a.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function nv() {
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
const nd = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var a, o;
      if (!n.default)
        return null;
      const r = ii(n.default()), s = r.findIndex((c) => c.type !== Tu);
      if (s === -1)
        return r;
      const i = r[s];
      (a = i.props) == null || delete a.ref;
      const u = i.props ? D(t, i.props) : t;
      t.class && (o = i.props) != null && o.class && delete i.props.class;
      const d = Qp(i, u);
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
    return typeof a == "string" && ["area", "img", "input"].includes(a) ? () => tt(a, t) : a !== "template" ? () => tt(e.as, t, { default: n.default }) : () => tt(nd, t, { default: n.default });
  }
});
function io() {
  const e = B(), t = S(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : wt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [av, D_] = ge("CollapsibleRoot"), B_ = /* @__PURE__ */ _({
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
    const a = e, o = Me(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = Me(a, "disabled");
    return D_({
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
}), O_ = /* @__PURE__ */ _({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = av();
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
function P_(e, t) {
  var n;
  const a = B({}), o = B("none"), r = B(e), s = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? ur, { state: d, dispatch: c } = T_(s, {
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
    if (Gt) {
      const k = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      ($ = t.value) == null || $.dispatchEvent(k);
    }
  };
  te(
    e,
    async (b, $) => {
      var k;
      const C = $ !== b;
      if (await se(), C) {
        const A = o.value, T = Mr(t.value);
        b ? (c("MOUNT"), f("enter"), T === "none" && f("after-enter")) : T === "none" || ((k = a.value) == null ? void 0 : k.display) === "none" ? (c("UNMOUNT"), f("leave"), f("after-leave")) : $ && A !== T ? (c("ANIMATION_OUT"), f("leave")) : (c("UNMOUNT"), f("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (b) => {
    const $ = Mr(t.value), k = $.includes(
      b.animationName
    ), C = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && k && (f(`after-${C}`), c("ANIMATION_END"), !r.value)) {
      const A = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var T;
        ((T = t.value) == null ? void 0 : T.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = A);
      });
    }
    b.target === t.value && $ === "none" && c("ANIMATION_END");
  }, h = (b) => {
    b.target === t.value && (o.value = Mr(t.value));
  }, v = te(
    t,
    (b, $) => {
      b ? (a.value = getComputedStyle(b), b.addEventListener("animationstart", h), b.addEventListener("animationcancel", p), b.addEventListener("animationend", p)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), $ == null || $.removeEventListener("animationstart", h), $ == null || $.removeEventListener("animationcancel", p), $ == null || $.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), m = te(d, () => {
    const b = Mr(t.value);
    o.value = d.value === "mounted" ? b : "none";
  });
  return Ye(() => {
    v(), m();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Mr(e) {
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
    const { present: o, forceMount: r } = me(e), s = B(), { isPresent: i } = P_(o, s);
    n({ present: i });
    let u = t.default({ present: i });
    u = ii(u || []);
    const d = He();
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
        const f = wt(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
}), I_ = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = av();
    n.contentId || (n.contentId = ze(void 0, "radix-vue-collapsible-content"));
    const a = B(), { forwardRef: o, currentElement: r } = j(), s = B(0), i = B(0), u = S(() => n.open.value), d = B(u.value), c = B();
    return te(
      () => {
        var f;
        return [u.value, (f = a.value) == null ? void 0 : f.present];
      },
      async () => {
        await se();
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
          O(l(W), D(f.$attrs, {
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
                (m = a.value) != null && m.present ? x(f.$slots, "default", { key: 0 }) : ie("", !0)
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
function ov({ type: e, defaultValue: t, modelValue: n }) {
  const a = n || t;
  if (Zr(e) && Zr(n) && Zr(t))
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
function R_({ type: e, defaultValue: t, modelValue: n }) {
  return e || ov({ type: e, defaultValue: t, modelValue: n });
}
function F_({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function V_(e, t) {
  const n = B(R_(e)), a = Me(e, "modelValue", t, {
    defaultValue: F_(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const s = ov(e);
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
const [ui, N_] = ge("AccordionRoot"), L_ = /* @__PURE__ */ _({
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
    const n = e, a = t, { dir: o, disabled: r } = me(n), s = qt(o), { modelValue: i, changeModelValue: u, isSingle: d } = V_(n, a), { forwardRef: c, currentElement: f } = j();
    return N_({
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
}), [ad, z_] = ge("AccordionItem"), H_ = /* @__PURE__ */ _({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, a = ui(), o = S(
      () => a.isSingle.value ? n.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(n.value)
    ), r = S(() => a.disabled.value || n.disabled), s = S(() => r.value ? "" : void 0), i = S(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: o, dataDisabled: s });
    const { currentRef: u, currentElement: d } = j();
    z_({
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
      Xh(
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
    return (f, p) => (g(), w(l(B_), {
      "data-orientation": l(a).orientation,
      "data-disabled": s.value,
      "data-state": i.value,
      disabled: r.value,
      open: o.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: je(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        x(f.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), U_ = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ui(), a = ad();
    return j(), (o, r) => (g(), w(l(I_), {
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
}), W_ = /* @__PURE__ */ _({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = ui(), a = ad();
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
}), K_ = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ui(), a = ad();
    a.triggerId || (a.triggerId = ze(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const r = n.isSingle.value && a.open.value && !n.collapsible;
      a.disabled.value || r || n.changeModelValue(a.value.value);
    }
    return (r, s) => (g(), w(l(O_), {
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
}), [Xt, j_] = ge("DialogRoot"), rv = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = Me(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), o = B(), r = B(), { modal: s } = me(n);
    return j_({
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
}), sv = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Xt(), { forwardRef: a, currentElement: o } = j();
    return n.contentId || (n.contentId = ze(void 0, "radix-vue-dialog-content")), ue(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (g(), w(l(W), D(t, {
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
}), pr = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Qu();
    return (n, a) => l(t) || n.forceMount ? (g(), w(ia, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ie("", !0);
  }
}), od = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pr), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y_ = "dismissableLayer.pointerDownOutside", G_ = "dismissableLayer.focusOutside";
function iv(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && a === n || o.indexOf(a) < o.indexOf(n));
}
function q_(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = B(!1), r = B(() => {
  });
  return xe((s) => {
    if (!Gt)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (iv(t.value, c)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let f = function() {
            Xu(
              Y_,
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
function X_(e, t) {
  var n;
  const a = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = B(!1);
  return xe((r) => {
    if (!Gt)
      return;
    const s = async (i) => {
      t != null && t.value && (await se(), !(!t.value || iv(t.value, i.target)) && i.target && !o.value && Xu(
        G_,
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
const $t = On({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lo = /* @__PURE__ */ _({
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
    ), i = S(() => $t.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => $t.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const v = Array.from(i.value), [m] = [...$t.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = q_(async (v) => {
      const m = [...$t.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await se(), v.defaultPrevented || a("dismiss"));
    }, r), p = X_((v) => {
      [...$t.branches].some(
        (m) => m == null ? void 0 : m.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    Zu("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return xe((v) => {
      r.value && (n.disableOutsidePointerEvents && ($t.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), $t.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && $t.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), xe((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), $t.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, m) => (g(), w(l(W), {
      ref: l(o),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: jt({
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
}), J_ = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = j();
    return ue(() => {
      $t.branches.add(a.value);
    }), Ye(() => {
      $t.branches.delete(a.value);
    }), (o, r) => (g(), w(l(W), D({ ref: l(n) }, t), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zi = "focusScope.autoFocusOnMount", Qi = "focusScope.autoFocusOnUnmount", Jc = { bubbles: !1, cancelable: !0 };
function Qr(e, { select: t = !1 } = {}) {
  const n = Ue();
  for (const a of e)
    if (Sn(a, { select: t }), Ue() !== n)
      return !0;
}
function Z_(e) {
  const t = rd(e), n = Zc(t, e), a = Zc(t.reverse(), e);
  return [n, a];
}
function rd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zc(e, t) {
  for (const n of e)
    if (!Q_(n, { upTo: t }))
      return n;
}
function Q_(e, { upTo: t }) {
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
function e1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ue();
    e.focus({ preventScroll: !0 }), e !== n && e1(e) && t && e.select();
  }
}
const t1 = Gb(() => B([]));
function n1() {
  const e = t1();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Qc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Qc(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Qc(e, t) {
  const n = [...e], a = n.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
function a1(e) {
  return e.filter((t) => t.tagName !== "A");
}
const di = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, a = t, { currentRef: o, currentElement: r } = j(), s = B(null), i = n1(), u = On({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!Gt)
        return;
      const f = r.value;
      if (!n.trapped)
        return;
      function p(b) {
        if (u.paused || !f)
          return;
        const $ = b.target;
        f.contains($) ? s.value = $ : Sn(s.value, { select: !0 });
      }
      function h(b) {
        if (u.paused || !f)
          return;
        const $ = b.relatedTarget;
        $ !== null && (f.contains($) || Sn(s.value, { select: !0 }));
      }
      function v(b) {
        f.contains(s.value) || Sn(f);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const m = new MutationObserver(v);
      f && m.observe(f, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), m.disconnect();
      });
    }), xe(async (c) => {
      const f = r.value;
      if (await se(), !f)
        return;
      i.add(u);
      const p = Ue();
      if (!f.contains(p)) {
        const h = new CustomEvent(Zi, Jc);
        f.addEventListener(Zi, (v) => a("mountAutoFocus", v)), f.dispatchEvent(h), h.defaultPrevented || (Qr(a1(rd(f)), {
          select: !0
        }), Ue() === p && Sn(f));
      }
      c(() => {
        f.removeEventListener(Zi, (m) => a("mountAutoFocus", m));
        const h = new CustomEvent(Qi, Jc), v = (m) => {
          a("unmountAutoFocus", m);
        };
        f.addEventListener(Qi, v), f.dispatchEvent(h), setTimeout(() => {
          h.defaultPrevented || Sn(p ?? document.body, { select: !0 }), f.removeEventListener(Qi, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, p = Ue();
      if (f && p) {
        const h = c.currentTarget, [v, m] = Z_(h);
        v && m ? !c.shiftKey && p === m ? (c.preventDefault(), n.loop && Sn(v, { select: !0 })) : c.shiftKey && p === v && (c.preventDefault(), n.loop && Sn(m, { select: !0 })) : p === h && c.preventDefault();
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
}), o1 = "menu.itemSelect", Il = ["Enter", " "], r1 = ["ArrowDown", "PageUp", "Home"], lv = ["ArrowUp", "PageDown", "End"], s1 = [...r1, ...lv], i1 = {
  ltr: [...Il, "ArrowRight"],
  rtl: [...Il, "ArrowLeft"]
}, l1 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function sd(e) {
  return e ? "open" : "closed";
}
function $s(e) {
  return e === "indeterminate";
}
function id(e) {
  return $s(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Rl(e) {
  const t = Ue();
  for (const n of e)
    if (n === t || (n.focus(), Ue() !== t))
      return;
}
function u1(e, t) {
  const { x: n, y: a } = e;
  let o = !1;
  for (let r = 0, s = t.length - 1; r < t.length; s = r++) {
    const i = t[r].x, u = t[r].y, d = t[s].x, c = t[s].y;
    u > a != c > a && n < (d - i) * (a - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function d1(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return u1(n, t);
}
function Yo(e) {
  return e.pointerType === "mouse";
}
const c1 = "DialogTitle", f1 = "DialogContent";
function p1({
  titleName: e = c1,
  contentName: t = f1,
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
const uv = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Xt(), { forwardRef: r, currentElement: s } = j();
    return o.titleId || (o.titleId = ze(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ze(void 0, "radix-vue-dialog-description")), ue(() => {
      o.contentElement = s, Ue() !== document.body && (o.triggerElement.value = Ue());
    }), process.env.NODE_ENV !== "production" && p1({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, u) => (g(), w(l(di), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        O(l(lo), D({
          id: l(o).contentId,
          ref: l(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(sd)(l(o).open.value)
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
}), h1 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Xt(), r = fa(a), { forwardRef: s, currentElement: i } = j();
    return fr(i), (u, d) => (g(), w(uv, D({ ...n, ...l(r) }, {
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
}), v1 = /* @__PURE__ */ _({
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
    const n = e, a = fa(t);
    j();
    const o = Xt(), r = B(!1), s = B(!1);
    return (i, u) => (g(), w(uv, D({ ...n, ...l(a) }, {
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
}), ld = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Xt(), r = fa(a), { forwardRef: s } = j();
    return (i, u) => (g(), w(l(mt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(h1, D({
          key: 0,
          ref: l(s)
        }, { ...n, ...l(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(v1, D({
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
}), m1 = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Xt();
    return dr(!0), j(), (n, a) => (g(), w(l(W), {
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
}), ud = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Xt(), { forwardRef: n } = j();
    return (a, o) => {
      var r;
      return (r = l(t)) != null && r.modal.value ? (g(), w(l(mt), {
        key: 0,
        present: a.forceMount || l(t).open.value
      }, {
        default: y(() => [
          O(m1, D(a.$attrs, {
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
      }, 8, ["present"])) : ie("", !0);
    };
  }
}), hr = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Xt();
    return (a, o) => (g(), w(l(W), D(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), dv = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Xt();
    return j(), (a, o) => (g(), w(l(W), D(t, {
      id: l(n).titleId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), cv = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    j();
    const n = Xt();
    return (a, o) => (g(), w(l(W), D(t, {
      id: l(n).descriptionId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function g1(e) {
  function t(a) {
    return Array.isArray(e.date.value) ? e.date.value.some((o) => Ke(o, a)) : e.date.value ? Ke(e.date.value, a) : !1;
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
function y1(e, t) {
  const n = t(e), a = n.compare(e), o = {};
  return a >= 7 && (o.day = 1), a >= fn(e) && (o.month = 1), n.set({ ...o });
}
function b1(e, t) {
  const n = t(e), a = e.compare(n), o = {};
  return a >= 7 && (o.day = 35), a >= fn(e) && (o.month = 13), n.set({ ...o });
}
function _1(e, t) {
  return t(e);
}
function w1(e, t) {
  return t(e);
}
function fv(e) {
  const t = Qh(e.locale.value), n = S(() => {
    const m = {
      calendar: e.placeholder.value.calendar.identifier
    };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (m.era = "short"), m;
  }), a = B(zn({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), o = S(() => a.value.map((m) => m.value));
  function r(m) {
    return !o.value.some((b) => bc(m, b));
  }
  const s = (m = "month", b) => {
    if (!e.maxValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = a.value[a.value.length - 1].value;
    if (b || e.nextPage.value) {
      const C = y1($, b || e.nextPage.value);
      return Do(C, e.maxValue.value);
    }
    if (m === "year") {
      const C = $.add({ years: 1 }).set({ day: 1, month: 1 });
      return Do(C, e.maxValue.value);
    }
    const k = $.add({ months: 1 }).set({ day: 1 });
    return Do(k, e.maxValue.value);
  }, i = (m = "month", b) => {
    if (!e.minValue.value || !a.value.length)
      return !1;
    if (e.disabled.value)
      return !0;
    const $ = a.value[0].value;
    if (b || e.prevPage.value) {
      const C = b1($, b || e.prevPage.value);
      return Dn(C, e.minValue.value);
    }
    if (m === "year") {
      const C = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Dn(C, e.minValue.value);
    }
    const k = $.subtract({ months: 1 }).set({ day: 35 });
    return Dn(k, e.minValue.value);
  };
  function u(m) {
    var b;
    return !!((b = e.isDateDisabled) != null && b.call(e, m) || e.disabled.value || e.maxValue.value && Do(m, e.maxValue.value) || e.minValue.value && Dn(m, e.minValue.value));
  }
  const d = (m) => {
    var b;
    return !!((b = e.isDateUnavailable) != null && b.call(e, m));
  }, c = S(() => a.value.length ? a.value[0].rows[0].map((m) => t.dayOfWeek(bt(m), e.weekdayFormat.value)) : []), f = (m = "month", b) => {
    const $ = a.value[0].value;
    if (b || e.nextPage.value) {
      const A = _1($, b || e.nextPage.value), T = zn({
        dateObj: A,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = T;
      const M = {};
      if (!b) {
        const E = T[0].value.compare($);
        E >= fn($) && (M.day = 1), E >= 365 && (M.month = 1);
      }
      e.placeholder.value = T[0].value.set({ ...M });
      return;
    }
    const k = m === "month" ? $.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.add({ years: 1 }), C = zn({
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
      const A = w1($, b || e.prevPage.value), T = zn({
        dateObj: A,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = T;
      const M = {};
      if (!b) {
        const E = $.compare(T[0].value);
        E >= fn($) && (M.day = 1), E >= 365 && (M.month = 1);
      }
      e.placeholder.value = T[0].value.set({ ...M });
      return;
    }
    const k = m === "month" ? $.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), C = zn({
      dateObj: k,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = C, e.placeholder.value = C[0].value.set({ day: 1 });
  };
  te(e.placeholder, (m) => {
    o.value.some((b) => bc(b, m)) || (a.value = zn({
      dateObj: m,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), te([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
    a.value = zn({
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
      return `${t.fullMonthAndYear(bt(T), n.value)}`;
    }
    const m = bt(a.value[0].value), b = bt(a.value[a.value.length - 1].value), $ = t.fullMonth(m, n.value), k = t.fullMonth(b, n.value), C = t.fullYear(m, n.value), A = t.fullYear(b, n.value);
    return C === A ? `${$} - ${k} ${A}` : `${$} ${C} - ${k} ${A}`;
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
const x1 = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, C1 = {
  role: "heading",
  "aria-level": "2"
}, [uo, $1] = ge("CalendarRoot"), pv = /* @__PURE__ */ _({
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
      defaultValue: A,
      nextPage: T,
      prevPage: M,
      dir: E
    } = me(n), { primitiveElement: N, currentElement: R } = io(), P = qt(E), I = Me(n, "modelValue", a, {
      defaultValue: A.value,
      passive: n.modelValue === void 0
    }), F = Wh({
      defaultPlaceholder: n.placeholder,
      defaultValue: I.value,
      locale: n.locale
    }), Y = Me(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? F.copy(),
      passive: n.placeholder === void 0
    });
    function z(G) {
      Y.value = G.copy();
    }
    const {
      fullCalendarLabel: H,
      headingValue: ee,
      isDateDisabled: re,
      isDateUnavailable: be,
      isNextButtonDisabled: q,
      isPrevButtonDisabled: de,
      weekdays: he,
      isOutsideVisibleView: Xe,
      nextPage: ot,
      prevPage: ct,
      formatter: gt,
      grid: Pt
    } = fv({
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
      prevPage: M
    }), {
      isInvalid: Q,
      isDateSelected: oe
    } = g1({
      date: I,
      isDateDisabled: re,
      isDateUnavailable: be
    });
    te(I, (G) => {
      if (Array.isArray(G) && G.length) {
        const ne = G[G.length - 1];
        ne && !Ft(Y.value, ne) && z(ne);
      } else !Array.isArray(G) && G && !Ft(Y.value, G) && z(G);
    });
    function U(G) {
      if (p.value) {
        if (!I.value)
          I.value = [G.copy()];
        else if (Array.isArray(I.value)) {
          if (I.value.findIndex((ne) => Ke(ne, G)) === -1)
            I.value = [...I.value, G];
          else if (!b.value) {
            const ne = I.value.filter((K) => !Ke(K, G));
            if (!ne.length) {
              Y.value = G.copy(), I.value = void 0;
              return;
            }
            I.value = ne.map((K) => K.copy());
          }
        }
      } else {
        if (!I.value) {
          I.value = G.copy();
          return;
        }
        !b.value && Ft(I.value, G) ? (Y.value = G.copy(), I.value = void 0) : I.value = G.copy();
      }
    }
    return ue(() => {
      i.value && Kh(R.value);
    }), $1({
      isDateUnavailable: be,
      dir: P,
      isDateDisabled: re,
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
      isNextButtonDisabled: q,
      isPrevButtonDisabled: de,
      isOutsideVisibleView: Xe,
      nextPage: ot,
      prevPage: ct,
      parentElement: R,
      onPlaceholderChange: z,
      onDateChange: U
    }), (G, ne) => (g(), w(l(W), {
      ref_key: "primitiveElement",
      ref: N,
      as: G.as,
      "as-child": G.asChild,
      role: "application",
      "aria-label": l(H),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(r) ? "" : void 0,
      "data-invalid": l(Q) ? "" : void 0,
      dir: l(P)
    }, {
      default: y(() => [
        x(G.$slots, "default", {
          date: l(Y),
          grid: l(Pt),
          weekDays: l(he),
          weekStartsOn: l(d),
          locale: l(o),
          fixedWeeks: l(f)
        }),
        _e("div", x1, [
          _e("div", C1, ce(l(H)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), k1 = /* @__PURE__ */ _({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), S1 = /* @__PURE__ */ _({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = uo();
    return (a, o) => (g(), w(l(W), D(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        x(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          ae(ce(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), T1 = /* @__PURE__ */ _({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = uo(), a = S(() => n.disabled.value ? !0 : void 0), o = S(() => n.readonly.value ? !0 : void 0);
    return (r, s) => (g(), w(l(W), D(t, {
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
}), A1 = /* @__PURE__ */ _({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(e) {
    const t = uo();
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
}), E1 = /* @__PURE__ */ _({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M1 = /* @__PURE__ */ _({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = uo();
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
}), D1 = /* @__PURE__ */ _({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = uo();
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
}), B1 = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O1 = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P1 = /* @__PURE__ */ _({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I1 = /* @__PURE__ */ _({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = nv(), a = uo(), { primitiveElement: o, currentElement: r } = io(), s = S(() => t.day.day.toLocaleString(a.locale.value)), i = S(() => a.formatter.custom(bt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = S(() => a.isDateDisabled(t.day)), d = S(
      () => {
        var C;
        return (C = a.isDateUnavailable) == null ? void 0 : C.call(a, t.day);
      }
    ), c = S(() => oh(t.day, cn())), f = S(() => !Bu(t.day, t.month)), p = S(
      () => a.isOutsideVisibleView(t.day)
    ), h = S(() => !a.disabled.value && Ke(t.day, a.placeholder.value)), v = S(() => a.isDateSelected(t.day)), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function b(C) {
      var A;
      a.readonly.value || a.isDateDisabled(C) || (A = a.isDateUnavailable) != null && A.call(a, C) || a.onDateChange(C);
    }
    function $() {
      b(t.day);
    }
    function k(C) {
      C.preventDefault(), C.stopPropagation();
      const A = a.parentElement.value, T = A ? Array.from(A.querySelectorAll(m)) : [];
      let M = T.indexOf(r.value);
      const E = 7, N = a.dir.value === "rtl" ? -1 : 1;
      switch (C.code) {
        case n.ARROW_RIGHT:
          M += N;
          break;
        case n.ARROW_LEFT:
          M -= N;
          break;
        case n.ARROW_UP:
          M -= E;
          break;
        case n.ARROW_DOWN:
          M += E;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          b(t.day);
          return;
        default:
          return;
      }
      if (M >= 0 && M < T.length) {
        T[M].focus();
        return;
      }
      if (M < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), se(() => {
          const R = A ? Array.from(A.querySelectorAll(m)) : [];
          if (!a.pagedNavigation.value) {
            const P = fn(a.placeholder.value);
            R[P - Math.abs(M)].focus();
            return;
          }
          R[R.length - Math.abs(M)].focus();
        });
        return;
      }
      if (M >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), se(() => {
          const R = A ? Array.from(A.querySelectorAll(m)) : [];
          if (!a.pagedNavigation.value) {
            const P = fn(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            R[R.length - P + M - T.length].focus();
            return;
          }
          R[M - T.length].focus();
        });
      }
    }
    return (C, A) => (g(), w(l(W), D({
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
        je(k, ["up", "down", "left", "right", "space", "enter"]),
        A[0] || (A[0] = je(Ie(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: y(() => [
        x(C.$slots, "default", { dayValue: s.value }, () => [
          ae(ce(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function ks(e) {
  return e === "indeterminate";
}
function hv(e) {
  return ks(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const R1 = ["value", "checked", "name", "disabled", "required"], [F1, V1] = ge("CheckboxRoot"), N1 = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: o } = me(n), r = Me(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { forwardRef: s, currentElement: i } = j(), u = cr(i), d = S(() => {
      var c;
      return n.id && i.value ? (c = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return V1({
      disabled: o,
      state: r
    }), (c, f) => (g(), L(le, null, [
      O(l(W), D(c.$attrs, {
        id: c.id,
        ref: l(s),
        role: "checkbox",
        "as-child": n.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": l(ks)(l(r)) ? "mixed" : l(r),
        "aria-required": n.required,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": l(hv)(l(r)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: je(Ie(() => {
        }, ["prevent"]), ["enter"]),
        onClick: f[0] || (f[0] = (p) => r.value = l(ks)(l(r)) ? !0 : !l(r))
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
      }, null, 8, R1)) : ie("", !0)
    ], 64));
  }
}), L1 = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = j(), n = F1();
    return (a, o) => (g(), w(l(mt), {
      present: a.forceMount || l(ks)(l(n).state.value) || l(n).state.value === !0
    }, {
      default: y(() => [
        O(l(W), D({
          ref: l(t),
          "data-state": l(hv)(l(n).state.value),
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
}), [vv, z1] = ge("PopperRoot"), co = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = B();
    return z1({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => x(n.$slots, "default");
  }
}), ci = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = j(), o = vv();
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
function H1(e) {
  return e !== null;
}
function U1(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, a, o;
      const { placement: r, rects: s, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [f, p] = Fl(r), h = { start: "0%", center: "50%", end: "100%" }[p], v = (((a = i.arrow) == null ? void 0 : a.x) ?? 0) + d / 2, m = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let b = "", $ = "";
      return f === "bottom" ? (b = u ? h : `${v}px`, $ = `${-c}px`) : f === "top" ? (b = u ? h : `${v}px`, $ = `${s.floating.height + c}px`) : f === "right" ? (b = `${-c}px`, $ = u ? h : `${m}px`) : f === "left" && (b = `${s.floating.width + c}px`, $ = u ? h : `${m}px`), { data: { x: b, y: $ } };
    }
  };
}
function Fl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const mv = {
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
}, [vR, W1] = ge("PopperContent"), qa = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Eu({
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
    ...mv
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = vv(), { forwardRef: r, currentElement: s } = j(), i = B(), u = B(), { width: d, height: c } = tv(u), f = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = S(() => ({
      padding: p.value,
      boundary: h.value.filter(H1),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = jb(() => [
      Rh({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && xs({
        ...v.value
      }),
      n.avoidCollisions && Fh({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Lh() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && xs({
        ...v.value
      }),
      Vh({
        ...v.value,
        apply: ({ elements: P, rects: I, availableWidth: F, availableHeight: Y }) => {
          const { width: z, height: H } = I.reference, ee = P.floating.style;
          ee.setProperty(
            "--radix-popper-available-width",
            `${F}px`
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
      u.value && zh({ element: u.value, padding: n.arrowPadding }),
      U1({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Nh({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: $, isPositioned: k, middlewareData: C } = Uh(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...P) => Ih(...P, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), A = S(
      () => Fl($.value)[0]
    ), T = S(
      () => Fl($.value)[1]
    );
    Mu(() => {
      k.value && a("placed");
    });
    const M = S(
      () => {
        var P;
        return ((P = C.value.arrow) == null ? void 0 : P.centerOffset) !== 0;
      }
    ), E = B("");
    xe(() => {
      s.value && (E.value = window.getComputedStyle(s.value).zIndex);
    });
    const N = S(() => {
      var P;
      return ((P = C.value.arrow) == null ? void 0 : P.x) ?? 0;
    }), R = S(() => {
      var P;
      return ((P = C.value.arrow) == null ? void 0 : P.y) ?? 0;
    });
    return W1({
      placedSide: A,
      onArrowChange: (P) => u.value = P,
      arrowX: N,
      arrowY: R,
      shouldHideArrow: M
    }), (P, I) => {
      var F, Y, z;
      return g(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: jt({
          ...l(b),
          transform: l(k) ? l(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: E.value,
          "--radix-popper-transform-origin": [
            (F = l(C).transformOrigin) == null ? void 0 : F.x,
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
        O(l(W), D({ ref: l(r) }, P.$attrs, {
          "as-child": n.asChild,
          as: P.as,
          "data-side": A.value,
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
}), vr = /* @__PURE__ */ _({
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
}), K1 = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([r, s]) => ({ name: `[${o}][${t.name}][${r}]`, value: s })) : { name: `[${t.name}][${o}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({ name: `[${t.name}][${a}]`, value: o })) : []);
    return (a, o) => (g(!0), L(le, null, Ee(n.value, (r) => (g(), w(vr, {
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
}), j1 = "data-radix-vue-collection-item", [dd, Y1] = ge("CollectionProvider");
function cd(e = j1) {
  const t = B(/* @__PURE__ */ new Map()), n = B(), a = Y1({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: o } = pd(a), r = S(() => Array.from(a.itemMap.value.values())), s = S(() => a.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: s };
}
const fd = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = dd(), { primitiveElement: a, currentElement: o } = io();
    return te(o, () => {
      n.collectionRef.value = o.value;
    }), () => tt(nd, { ref: a }, t);
  }
}), fi = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const a = dd(), { primitiveElement: o, currentElement: r } = io();
    return xe((s) => {
      if (r.value) {
        const i = eh(r.value);
        a.itemMap.value.set(i, { ref: r.value, value: e.value }), s(() => a.itemMap.value.delete(i));
      }
    }), () => tt(nd, { ...n, [a.attrName]: "", ref: o }, t);
  }
});
function pd(e) {
  const t = e ?? dd();
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
const [fo, G1] = ge("ComboboxRoot"), q1 = /* @__PURE__ */ _({
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
    const n = e, a = t, { multiple: o, disabled: r, dir: s } = me(n), i = qt(s), u = Me(n, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = Me(n, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? o.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Me(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), f = Me(n, "selectedValue", a, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function p(q) {
      var de, he;
      c.value = q, await se(), q ? (d.value && (Array.isArray(d.value) && o.value ? f.value = (de = C().find((Xe) => {
        var ot, ct;
        return ((ct = (ot = Xe.ref) == null ? void 0 : ot.dataset) == null ? void 0 : ct.state) === "checked";
      })) == null ? void 0 : de.value : f.value = d.value), await se(), (he = m.value) == null || he.focus(), Y()) : (v.value = !1, n.resetSearchTermOnBlur && N("blur"));
    }
    function h(q) {
      if (Array.isArray(d.value) && o.value) {
        const de = d.value.findIndex((Xe) => Kn(Xe, q)), he = [...d.value];
        de === -1 ? he.push(q) : he.splice(de, 1), d.value = he;
      } else
        d.value = q, p(!1);
    }
    const v = B(!1), m = B(), b = B(), { forwardRef: $, currentElement: k } = j(), { getItems: C, reactiveItems: A, itemMapSize: T } = cd("data-radix-vue-combobox-item"), M = B([]);
    te(() => T.value, () => {
      M.value = C().map((q) => q.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const E = S(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(M.value, u.value);
        const q = M.value.filter((de) => typeof de == "string");
        if (q.length)
          return q.filter((de) => {
            var he;
            return de.toLowerCase().includes((he = u.value) == null ? void 0 : he.toLowerCase());
          });
      }
      return M.value;
    });
    function N(q) {
      const de = q === "blur" || q === "select" && n.resetSearchTermOnSelect;
      !o.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : de && (u.value = "") : de && (u.value = "");
    }
    const R = S(() => E.value.findIndex((q) => Kn(q, f.value))), P = S(() => {
      var q;
      return (q = A.value.find((de) => Kn(de.value, f.value))) == null ? void 0 : q.ref;
    }), I = S(() => JSON.stringify(d.value));
    te(I, async () => {
      await se(), await se(), N("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [E.value.length, u.value.length], async ([q, de], [he, Xe]) => {
      await se(), await se(), q && (Xe > de || R.value === -1) && (f.value = E.value[0]);
    });
    const F = cr(k);
    function Y() {
      var q;
      P.value instanceof Element && ((q = P.value) == null || q.scrollIntoView({ block: "nearest" }));
    }
    function z() {
      P.value instanceof Element && P.value.focus && P.value.focus();
    }
    const H = B(!1);
    function ee() {
      H.value = !0;
    }
    function re() {
      requestAnimationFrame(() => {
        H.value = !1;
      });
    }
    async function be(q) {
      var de;
      E.value.length && f.value && P.value instanceof Element && (q.preventDefault(), q.stopPropagation(), H.value || (de = P.value) == null || de.click());
    }
    return G1({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: h,
      isUserInputted: v,
      multiple: o,
      disabled: r,
      open: c,
      onOpenChange: p,
      filteredOptions: E,
      contentId: "",
      inputElement: m,
      selectedElement: P,
      onInputElementChange: (q) => m.value = q,
      onInputNavigation: async (q) => {
        const de = R.value;
        de === 0 && q === "up" || de === E.value.length - 1 && q === "down" || (de === -1 && E.value.length || q === "home" ? f.value = E.value[0] : q === "end" ? f.value = E.value[E.value.length - 1] : f.value = E.value[q === "up" ? de - 1 : de + 1], await se(), Y(), z(), se(() => {
          var he;
          return (he = m.value) == null ? void 0 : he.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: be,
      onCompositionEnd: re,
      onCompositionStart: ee,
      selectedValue: f,
      onSelectedValueChange: (q) => f.value = q,
      parentElement: k,
      contentElement: b,
      onContentElementChange: (q) => b.value = q
    }), (q, de) => (g(), w(l(co), null, {
      default: y(() => [
        O(l(W), D({
          ref: l($),
          style: {
            pointerEvents: l(c) ? "auto" : void 0
          },
          as: q.as,
          "as-child": q.asChild,
          dir: l(i)
        }, q.$attrs), {
          default: y(() => [
            x(q.$slots, "default", {
              open: l(c),
              modelValue: l(d)
            }),
            l(F) && n.name ? (g(), w(l(K1), {
              key: 0,
              name: n.name,
              value: l(d)
            }, null, 8, ["name", "value"])) : ie("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), X1 = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = fo(), { forwardRef: a, currentElement: o } = j();
    ue(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = S(() => t.disabled || n.disabled.value || !1), s = B();
    Jp(() => {
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
        je(Ie(i, ["prevent"]), ["down", "up"]),
        je(l(n).onInputEnter, ["enter"]),
        je(Ie(u, ["prevent"]), ["home", "end"])
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
}), [gv, J1] = ge("ComboboxGroup"), Z1 = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: a } = j(), o = ze(void 0, "radix-vue-combobox-group"), r = fo(), s = B(!1);
    function i() {
      if (!a.value)
        return;
      const u = a.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      s.value = !!u.length;
    }
    return r_(a, () => {
      se(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      se(() => {
        i();
      });
    }, { immediate: !0 }), J1({
      id: o
    }), (u, d) => la((g(), w(l(W), D(t, {
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
      [ti, s.value]
    ]);
  }
}), Q1 = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    j();
    const n = gv({ id: "" });
    return (a, o) => (g(), w(l(W), D(t, {
      id: l(n).id
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [mR, ew] = ge("ComboboxContent"), tw = /* @__PURE__ */ _({
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
    const n = e, a = t, { position: o } = me(n), r = fo();
    dr(n.bodyLock);
    const { forwardRef: s, currentElement: i } = j();
    fr(r.parentElement);
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
    return ew({ position: o }), (p, h) => (g(), w(l(fd), null, {
      default: y(() => [
        p.dismissable ? (g(), w(l(lo), {
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
            (g(), w(lt(l(o) === "popper" ? l(qa) : l(W)), D({ ...p.$attrs, ...l(d) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (g(), w(lt(l(o) === "popper" ? l(qa) : l(W)), D({ key: 1 }, { ...p.$attrs, ...u.value }, {
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
}), nw = /* @__PURE__ */ _({
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
    const n = pe(e, t), { forwardRef: a } = j(), o = fo();
    return o.contentId || (o.contentId = ze(void 0, "radix-vue-combobox-content")), (r, s) => (g(), w(l(mt), {
      present: r.forceMount || l(o).open.value
    }, {
      default: y(() => [
        O(tw, D({ ...l(n), ...r.$attrs }, { ref: l(a) }), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), aw = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = fo(), a = S(() => n.filteredOptions.value.length === 0);
    return (o, r) => a.value ? (g(), w(l(W), X(D({ key: 0 }, t)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          ae("No options")
        ])
      ]),
      _: 3
    }, 16)) : ie("", !0);
  }
});
function ow(e) {
  const t = li({
    nonce: B()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [gR, rw] = ge("ComboboxItem"), sw = "combobox.select", iw = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { disabled: o } = me(n), r = fo();
    gv({ id: "", options: B([]) });
    const { forwardRef: s } = j(), i = S(
      () => {
        var m, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (m = r.modelValue.value) == null ? void 0 : m.some(($) => Kn($, n.value)) : Kn((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = S(() => Kn(r.selectedValue.value, n.value)), d = ze(void 0, "radix-vue-combobox-item"), c = ze(void 0, "radix-vue-combobox-option"), f = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((m) => Kn(m, n.value)) : !0);
    async function p(m) {
      a("select", m), !(m != null && m.defaultPrevented) && !o.value && m && r.onValueChange(n.value);
    }
    function h(m) {
      if (!m)
        return;
      const b = { originalEvent: m, value: n.value };
      Xu(sw, p, b);
    }
    async function v(m) {
      await se(), !m.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return rw({
      isSelected: i
    }), (m, b) => (g(), w(l(fi), { value: m.value }, {
      default: y(() => [
        la(O(l(W), {
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
              ae(ce(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [ti, f.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), lw = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yv = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(ci), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function uw() {
  const e = B(!1);
  return ue(() => {
    Ga("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Ga(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const dw = jh(uw), [pa, bv] = ge(["MenuRoot", "MenuSub"], "MenuContext"), [mr, cw] = ge("MenuRoot"), fw = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o, dir: r } = me(n), s = qt(r), i = Me(n, "open", a), u = B(), d = dw();
    return bv({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), cw({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: o
    }), (c, f) => (g(), w(l(co), null, {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), pw = "rovingFocusGroup.onEntryFocus", hw = { bubbles: !1, cancelable: !0 }, vw = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function mw(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function gw(e, t, n) {
  const a = mw(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return vw[a];
}
function _v(e, t = !1) {
  const n = Ue();
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), Ue() !== n))
      return;
}
function yw(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
const [bw, _w] = ge("RovingFocusGroup"), wv = /* @__PURE__ */ _({
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
    const a = e, o = n, { loop: r, orientation: s, dir: i } = me(a), u = qt(i), d = Me(a, "currentTabStopId", o, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), c = B(!1), f = B(!1), p = B(0), { getItems: h } = cd();
    function v(b) {
      const $ = !f.value;
      if (b.currentTarget && b.target === b.currentTarget && $ && !c.value) {
        const k = new CustomEvent(pw, hw);
        if (b.currentTarget.dispatchEvent(k), o("entryFocus", k), !k.defaultPrevented) {
          const C = h().map((E) => E.ref).filter((E) => E.dataset.disabled !== ""), A = C.find((E) => E.getAttribute("data-active") === "true"), T = C.find(
            (E) => E.id === d.value
          ), M = [A, T, ...C].filter(
            Boolean
          );
          _v(M, a.preventScrollOnEntryFocus);
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
    }), _w({
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
    }), (b, $) => (g(), w(l(fd), null, {
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
}), ww = /* @__PURE__ */ _({
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
    const t = e, n = bw(), a = S(() => t.tabStopId || ze()), o = S(
      () => n.currentTabStopId.value === a.value
    ), { getItems: r } = pd();
    ue(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ye(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function s(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = gw(
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
          d = n.loop.value ? yw(d, c + 1) : d.slice(c + 1);
        }
        se(() => _v(d));
      }
    }
    return (i, u) => (g(), w(l(fi), null, {
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
}), [hd, xw] = ge("MenuContent"), vd = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Eu({
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
    ...mv
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = pa(), r = mr(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = me(n);
    ed(), dr(i.value);
    const d = B(""), c = B(0), f = B(0), p = B(null), h = B("right"), v = B(0), m = B(null), { createCollection: b } = so(), { forwardRef: $, currentElement: k } = j(), C = b(k);
    te(k, (P) => {
      o.onContentChange(P);
    });
    const { handleTypeaheadSearch: A } = td(C);
    Ye(() => {
      window.clearTimeout(c.value);
    });
    function T(P) {
      var I, F;
      return h.value === ((I = p.value) == null ? void 0 : I.side) && d1(P, (F = p.value) == null ? void 0 : F.area);
    }
    async function M(P) {
      var I;
      a("openAutoFocus", P), !P.defaultPrevented && (P.preventDefault(), (I = k.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function E(P) {
      if (P.defaultPrevented)
        return;
      const I = P.target.closest("[data-radix-menu-content]") === P.currentTarget, F = P.ctrlKey || P.altKey || P.metaKey, Y = P.key.length === 1, z = Xh(
        P,
        Ue(),
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
      if (P.code === "Space" || (I && (P.key === "Tab" && P.preventDefault(), !F && Y && A(P.key)), P.target !== k.value) || !s1.includes(P.key))
        return;
      P.preventDefault();
      const H = C.value;
      lv.includes(P.key) && H.reverse(), Rl(H);
    }
    function N(P) {
      var I, F;
      (F = (I = P == null ? void 0 : P.currentTarget) == null ? void 0 : I.contains) != null && F.call(I, P.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function R(P) {
      var I;
      if (!Yo(P))
        return;
      const F = P.target, Y = v.value !== P.clientX;
      if ((I = P == null ? void 0 : P.currentTarget) != null && I.contains(F) && Y) {
        const z = P.clientX > v.value ? "right" : "left";
        h.value = z, v.value = P.clientX;
      }
    }
    return xw({
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
    }), (P, I) => (g(), w(l(di), {
      "as-child": "",
      trapped: l(s),
      onMountAutoFocus: M,
      onUnmountAutoFocus: I[7] || (I[7] = (F) => a("closeAutoFocus", F))
    }, {
      default: y(() => [
        O(l(lo), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: I[2] || (I[2] = (F) => a("escapeKeyDown", F)),
          onPointerDownOutside: I[3] || (I[3] = (F) => a("pointerDownOutside", F)),
          onFocusOutside: I[4] || (I[4] = (F) => a("focusOutside", F)),
          onInteractOutside: I[5] || (I[5] = (F) => a("interactOutside", F)),
          onDismiss: I[6] || (I[6] = (F) => a("dismiss"))
        }, {
          default: y(() => [
            O(l(wv), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = (F) => m.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: l(r).dir.value,
              loop: l(u),
              onEntryFocus: I[1] || (I[1] = (F) => {
                a("entryFocus", F), l(r).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: y(() => [
                O(l(qa), {
                  ref: l($),
                  role: "menu",
                  as: P.as,
                  "as-child": P.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(sd)(l(o).open.value),
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
                  onKeydown: E,
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
}), xv = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = hd(), { forwardRef: a } = j(), o = B(!1);
    async function r(i) {
      if (!i.defaultPrevented && Yo(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await se(), !i.defaultPrevented && Yo(i) && n.onItemLeave(i);
    }
    return (i, u) => (g(), w(l(fi), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        O(l(W), D({
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
            await se(), !(d.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await se(), !d.defaultPrevented && (o.value = !1);
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
}), md = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { forwardRef: o, currentElement: r } = j(), s = mr(), i = hd(), u = B(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const f = new CustomEvent(o1, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", f), await se(), f.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (c, f) => (g(), w(xv, D(n, {
      ref: l(o),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        u.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (p) => {
        var h;
        await se(), !p.defaultPrevented && (u.value || (h = p.currentTarget) == null || h.click());
      }),
      onKeydown: f[2] || (f[2] = async (p) => {
        const h = l(i).searchRef.value !== "";
        c.disabled || h && p.key === " " || l(Il).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Cw, Cv] = ge(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), $w = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Cw({
      checked: B(!1)
    });
    return (n, a) => (g(), w(l(mt), {
      present: n.forceMount || l($s)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: y(() => [
        O(l(W), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(id)(l(t).checked.value)
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
}), kw = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Me(n, "checked", a);
    return Cv({ checked: o }), (r, s) => (g(), w(md, D({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l($s)(l(o)) ? "mixed" : l(o),
      "data-state": l(id)(l(o)),
      onSelect: s[0] || (s[0] = async (i) => {
        a("select", i), l($s)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: y(() => [
        x(r.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Sw = /* @__PURE__ */ _({
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
    const n = e, a = t, o = pe(n, a), r = pa(), { forwardRef: s, currentElement: i } = j();
    return fr(i), (u, d) => (g(), w(vd, D(l(o), {
      ref: l(s),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": l(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => l(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ie((c) => a("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Tw = /* @__PURE__ */ _({
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
    const n = pe(e, t), a = pa();
    return (o, r) => (g(), w(vd, D(l(n), {
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
}), Aw = /* @__PURE__ */ _({
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
    const n = pe(e, t), a = pa(), o = mr();
    return (r, s) => (g(), w(l(mt), {
      present: r.forceMount || l(a).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(Sw, X(D({ key: 0 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(Tw, X(D({ key: 1 }, { ...r.$attrs, ...l(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $v = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), D({ role: "group" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ew = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mw = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pr), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Dw, Bw] = ge("MenuRadioGroup"), Ow = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Me(n, "modelValue", t);
    return Bw({
      modelValue: a,
      onValueChange: (o) => {
        a.value = o;
      }
    }), (o, r) => (g(), w($v, X(Z(n)), {
      default: y(() => [
        x(o.$slots, "default", { modelValue: l(a) })
      ]),
      _: 3
    }, 16));
  }
}), Pw = /* @__PURE__ */ _({
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
    const n = e, a = t, { value: o } = me(n), r = Dw(), s = S(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return Cv({ checked: s }), (i, u) => (g(), w(md, D({ role: "menuitemradio" }, n, {
      "aria-checked": s.value,
      "data-state": l(id)(s.value),
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
}), Iw = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), D(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kv, Rw] = ge("MenuSub"), Fw = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = Me(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), o = pa(), r = B(), s = B();
    return xe((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (a.value = !1), i(() => a.value = !1);
    }), bv({
      open: a,
      onOpenChange: (i) => {
        a.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), Rw({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (g(), w(l(co), null, {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Vw = /* @__PURE__ */ _({
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
    const n = pe(e, t), a = pa(), o = mr(), r = kv(), { forwardRef: s, currentElement: i } = j();
    return r.contentId || (r.contentId = ze(void 0, "radix-vue-menu-sub-content")), (u, d) => (g(), w(l(mt), {
      present: u.forceMount || l(a).open.value
    }, {
      default: y(() => [
        O(vd, D(l(n), {
          id: l(r).contentId,
          ref: l(s),
          "aria-labelledby": l(r).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Ie((c) => {
            var f;
            l(o).isUsingKeyboardRef.value && ((f = l(i)) == null || f.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Ie(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== l(r).trigger.value && l(a).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            l(o).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var f, p;
            const h = (f = c.currentTarget) == null ? void 0 : f.contains(c.target), v = l(l1)[l(o).dir.value].includes(c.key);
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
}), Nw = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = pa(), a = mr(), o = kv(), r = hd(), s = B(null);
    o.triggerId || (o.triggerId = ze(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    Ye(() => {
      i();
    });
    function u(f) {
      !Yo(f) || r.onItemEnter(f) || !t.disabled && !n.open.value && !s.value && (r.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(f) {
      var p, h;
      if (!Yo(f))
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
      t.disabled || h && f.key === " " || i1[a.dir.value].includes(f.key) && (n.onOpenChange(!0), await se(), (p = n.content.value) == null || p.focus(), f.preventDefault());
    }
    return (f, p) => (g(), w(yv, { "as-child": "" }, {
      default: y(() => [
        O(xv, D(t, {
          id: l(o).triggerId,
          ref: (h) => {
            var v;
            (v = l(o)) == null || v.onTriggerChange(h == null ? void 0 : h.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(sd)(l(n).open.value),
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
}), [Sv, Lw] = ge("DropdownMenuRoot"), zw = /* @__PURE__ */ _({
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
    const o = Me(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = B(), { modal: s, dir: i } = me(n), u = qt(i);
    return Lw({
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
    }), (d, c) => (g(), w(l(fw), {
      open: l(o),
      "onUpdate:open": c[0] || (c[0] = (f) => ut(o) ? o.value = f : null),
      dir: l(u),
      modal: l(s)
    }, {
      default: y(() => [
        x(d.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Hw = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Sv(), { forwardRef: a, currentElement: o } = j();
    return ue(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = ze(void 0, "radix-vue-dropdown-menu-trigger")), (r, s) => (g(), w(l(yv), { "as-child": "" }, {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = l(n)) == null || u.onOpenToggle(), await se(), l(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = je(
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
}), Uw = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Mw), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ww = /* @__PURE__ */ _({
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
    const a = Sv(), o = B(!1);
    function r(s) {
      s.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = a.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, s.preventDefault());
    }
    return a.contentId || (a.contentId = ze(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var u;
      return g(), w(l(Aw), D(l(n), {
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
}), Tv = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = fa(t);
    return j(), (o, r) => (g(), w(l(md), X(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kw = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l($v), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jw = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(Iw), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yw = /* @__PURE__ */ _({
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
    const n = e, a = fa(t);
    return j(), (o, r) => (g(), w(l(kw), X(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Av = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l($w), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gw = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(Ew), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qw = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = fa(t);
    return j(), (o, r) => (g(), w(l(Ow), X(Z({ ...n, ...l(a) })), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xw = /* @__PURE__ */ _({
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
    return j(), (a, o) => (g(), w(l(Pw), X(Z(l(n))), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jw = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = Me(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return j(), (o, r) => (g(), w(l(Fw), {
      open: l(a),
      "onUpdate:open": r[0] || (r[0] = (s) => ut(a) ? a.value = s : null)
    }, {
      default: y(() => [
        x(o.$slots, "default", { open: l(a) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Zw = /* @__PURE__ */ _({
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
    return j(), (a, o) => (g(), w(l(Vw), D(l(n), { style: {
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
}), Qw = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(Nw), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ex = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), D(t, {
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
}), [po, tx] = ge("PaginationRoot"), yR = /* @__PURE__ */ _({
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
    const i = Me(n, "page", a, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = S(() => Math.max(1, Math.ceil(n.total / n.itemsPerPage)));
    return tx({
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
}), nx = /* @__PURE__ */ _({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), D(t, { "data-type": "ellipsis" }), {
      default: y(() => [
        x(n.$slots, "default", {}, () => [
          ae("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), ax = /* @__PURE__ */ _({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = po();
    j();
    const a = S(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (g(), w(l(W), D(t, {
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
}), ox = /* @__PURE__ */ _({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = po();
    j();
    const a = S(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (g(), w(l(W), D(t, {
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
function Cn(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (a, o) => o + e);
}
function rx(e) {
  return e.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Dr = "ellipsis";
function sx(e, t, n, a) {
  const o = t, r = Math.max(e - n, 1), s = Math.min(e + n, o);
  if (a) {
    const i = Math.min(2 * n + 5, t) - 2, u = r > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(r - 1) > 2, d = s < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - s) > 2;
    if (!u && d)
      return [...Cn(1, i), Dr, o];
    if (u && !d) {
      const c = Cn(o - i + 1, o);
      return [1, Dr, ...c];
    }
    if (u && d) {
      const c = Cn(r, s);
      return [1, Dr, ...c, Dr, o];
    }
    return Cn(1, o);
  } else {
    const i = n * 2 + 1;
    return t < i ? Cn(1, o) : e <= n + 1 ? Cn(1, i) : t - e <= n ? Cn(t - i + 1, o) : Cn(r, s);
  }
}
const bR = /* @__PURE__ */ _({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    j();
    const n = po(), a = S(() => rx(
      sx(
        n.page.value,
        n.pageCount.value,
        n.siblingCount.value,
        n.showEdges.value
      )
    ));
    return (o, r) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(o.$slots, "default", { items: a.value })
      ]),
      _: 3
    }, 16));
  }
}), _R = /* @__PURE__ */ _({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = po(), a = S(() => n.page.value === t.value), o = S(() => n.disabled.value);
    return (r, s) => (g(), w(l(W), D(t, {
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
          ae(ce(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), ix = /* @__PURE__ */ _({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = po(), a = S(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (o, r) => (g(), w(l(W), D(t, {
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
}), lx = /* @__PURE__ */ _({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    j();
    const n = po(), a = S(() => n.page.value === 1 || n.disabled.value);
    return (o, r) => (g(), w(l(W), D(t, {
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
}), [gr, ux] = ge("PopoverRoot"), dx = /* @__PURE__ */ _({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, { modal: o } = me(n), r = Me(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = B(), i = B(!1);
    return ux({
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
    }), (u, d) => (g(), w(l(co), null, {
      default: y(() => [
        x(u.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }));
  }
}), cx = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = gr(), { forwardRef: a, currentElement: o } = j();
    return ue(() => {
      n.triggerElement.value = o.value;
    }), (r, s) => (g(), w(lt(l(n).hasCustomAnchor.value ? l(W) : l(ci)), { "as-child": "" }, {
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
}), fx = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pr), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ _({
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
    const n = e, a = t, o = ye(n), { forwardRef: r } = j(), s = gr();
    return ed(), (i, u) => (g(), w(l(di), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: y(() => [
        O(l(lo), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => a("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => a("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => a("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => l(s).onOpenChange(!1))
        }, {
          default: y(() => [
            O(l(qa), D(l(o), {
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
}), px = /* @__PURE__ */ _({
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
    const n = e, a = t, o = gr(), r = B(!1);
    dr(!0);
    const s = pe(n, a), { forwardRef: i, currentElement: u } = j();
    return fr(u), (d, c) => (g(), w(Ev, D(l(s), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ie(
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
      onFocusOutside: c[2] || (c[2] = Ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), hx = /* @__PURE__ */ _({
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
    const n = e, a = t, o = gr(), r = B(!1), s = B(!1), i = pe(n, a);
    return (u, d) => (g(), w(Ev, D(l(i), {
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
}), vx = /* @__PURE__ */ _({
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
    const n = e, a = t, o = gr(), r = pe(n, a), { forwardRef: s } = j();
    return o.contentId || (o.contentId = ze(void 0, "radix-vue-popover-content")), (i, u) => (g(), w(l(mt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(o).modal.value ? (g(), w(px, D({ key: 0 }, l(r), { ref: l(s) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (g(), w(hx, D({ key: 1 }, l(r), { ref: l(s) }), {
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
function mx(e) {
  const t = S(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), n = S(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), a = S(
    () => t.value || n.value ? !1 : !!(e.start.value && e.end.value && Dn(e.end.value, e.start.value))
  ), o = (u) => e.start.value ? Ke(e.start.value, u) : !1, r = (u) => e.end.value ? Ke(e.end.value, u) : !1, s = (u) => e.start.value && Ke(e.start.value, u) || e.end.value && Ke(e.end.value, u) ? !0 : e.end.value && e.start.value ? W0(u, e.start.value, e.end.value) : !1, i = S(() => {
    if (e.start.value && e.end.value || !e.start.value || !e.focusedValue.value)
      return null;
    const u = Dn(e.start.value, e.focusedValue.value), d = u ? e.start.value : e.focusedValue.value, c = u ? e.focusedValue.value : e.start.value;
    return Ke(d, c) ? {
      start: d,
      end: c
    } : Y0(d, c, e.isDateUnavailable, e.isDateDisabled) ? {
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
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Ke(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Ke(i.value.end, u)
  };
}
const gx = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, yx = {
  role: "heading",
  "aria-level": "2"
}, [ho, bx] = ge("RangeCalendarRoot"), _x = /* @__PURE__ */ _({
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
      nextPage: A,
      prevPage: T
    } = me(n), { primitiveElement: M, currentElement: E } = io(), N = qt(C), R = B(), P = B(), I = Me(n, "modelValue", a, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), F = Wh({
      defaultPlaceholder: n.placeholder,
      defaultValue: I.value.start,
      locale: n.locale
    }), Y = B(I.value.start), z = B(I.value.end), H = Me(n, "placeholder", a, {
      defaultValue: n.defaultPlaceholder ?? F.copy(),
      passive: n.placeholder === void 0
    });
    function ee(fe) {
      H.value = fe.copy();
    }
    const {
      fullCalendarLabel: re,
      headingValue: be,
      isDateDisabled: q,
      isDateUnavailable: de,
      isNextButtonDisabled: he,
      isPrevButtonDisabled: Xe,
      grid: ot,
      weekdays: ct,
      isOutsideVisibleView: gt,
      nextPage: Pt,
      prevPage: Q,
      formatter: oe
    } = fv({
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
      nextPage: A,
      prevPage: T
    }), {
      isInvalid: U,
      isSelected: G,
      highlightedRange: ne,
      isSelectionStart: K,
      isSelectionEnd: Re,
      isHighlightedStart: we,
      isHighlightedEnd: at
    } = mx({
      start: Y,
      end: z,
      isDateDisabled: q,
      isDateUnavailable: de,
      focusedValue: P
    });
    return te(I, (fe) => {
      var Ne, Je, Li, mc;
      (!fe || !fe.start || Y.value && !Ft(fe.start, Y.value)) && (Y.value = (Je = (Ne = fe == null ? void 0 : fe.start) == null ? void 0 : Ne.copy) == null ? void 0 : Je.call(Ne)), (!fe || !fe.end || z.value && !Ft(fe.end, z.value)) && (z.value = (mc = (Li = fe == null ? void 0 : fe.end) == null ? void 0 : Li.copy) == null ? void 0 : mc.call(Li));
    }), te(Y, (fe) => {
      fe && !Ft(fe, H.value) && ee(fe), a("update:startValue", fe);
    }), te([Y, z], ([fe, Ne]) => {
      const Je = I.value;
      if (!(Je && Je.start && Je.end && fe && Ne && Ft(Je.start, fe) && Ft(Je.end, Ne)))
        if (fe && Ne) {
          if (Je.start && Je.end && Ft(Je.start, fe) && Ft(Je.end, Ne))
            return;
          Dn(Ne, fe) ? I.value = {
            start: Ne.copy(),
            end: fe.copy()
          } : I.value = {
            start: fe.copy(),
            end: Ne.copy()
          };
        } else Je.start && Je.end && (I.value = {
          start: fe == null ? void 0 : fe.copy(),
          end: void 0
        });
    }), bx({
      isDateUnavailable: de,
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
      fullCalendarLabel: re,
      headingValue: be,
      isInvalid: U,
      isDateDisabled: q,
      highlightedRange: ne,
      focusedValue: P,
      lastPressedDateValue: R,
      isSelected: G,
      isSelectionEnd: Re,
      isSelectionStart: K,
      isNextButtonDisabled: he,
      isPrevButtonDisabled: Xe,
      isOutsideVisibleView: gt,
      nextPage: Pt,
      prevPage: Q,
      parentElement: E,
      onPlaceholderChange: ee,
      locale: k,
      dir: N,
      isHighlightedStart: we,
      isHighlightedEnd: at
    }), ue(() => {
      s.value && Kh(E.value);
    }), (fe, Ne) => (g(), w(l(W), {
      ref_key: "primitiveElement",
      ref: M,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": l(re),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(U) ? "" : void 0,
      dir: l(N)
    }, {
      default: y(() => [
        _e("div", gx, [
          _e("div", yx, ce(l(re)), 1)
        ]),
        x(fe.$slots, "default", {
          date: l(H),
          grid: l(ot),
          weekDays: l(ct),
          weekStartsOn: l(u),
          locale: l(k),
          fixedWeeks: l(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), wx = /* @__PURE__ */ _({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xx = /* @__PURE__ */ _({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = ho();
    return (a, o) => (g(), w(l(W), D(t, {
      "data-disabled": l(n).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        x(a.$slots, "default", {
          headingValue: l(n).headingValue.value
        }, () => [
          ae(ce(l(n).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Cx = /* @__PURE__ */ _({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(e) {
    const t = e, n = ho(), a = S(() => n.disabled.value ? !0 : void 0), o = S(() => n.readonly.value ? !0 : void 0);
    return (r, s) => (g(), w(l(W), D(t, {
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
}), $x = /* @__PURE__ */ _({
  __name: "RangeCalendarCell",
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
}), kx = /* @__PURE__ */ _({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sx = /* @__PURE__ */ _({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isNextButtonDisabled(t.step, t.nextPage)), a = ho();
    return (o, r) => (g(), w(l(W), D(t, {
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
}), Tx = /* @__PURE__ */ _({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = S(() => a.disabled.value || a.isPrevButtonDisabled(t.step, t.prevPage)), a = ho();
    return (o, r) => (g(), w(l(W), D(t, {
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
}), Ax = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ex = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mx = /* @__PURE__ */ _({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dx = /* @__PURE__ */ _({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = ho(), a = nv(), { primitiveElement: o, currentElement: r } = io(), s = S(() => n.formatter.custom(bt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = S(() => n.isDateDisabled(t.day)), u = S(() => {
      var R;
      return (R = n.isDateUnavailable) == null ? void 0 : R.call(n, t.day);
    }), d = S(() => n.isSelected(t.day)), c = S(() => n.isSelectionStart(t.day)), f = S(() => n.isSelectionEnd(t.day)), p = S(() => n.isHighlightedStart(t.day)), h = S(() => n.isHighlightedEnd(t.day)), v = S(() => n.highlightedRange.value ? U0(t.day, n.highlightedRange.value.start, n.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", b = S(() => oh(t.day, cn())), $ = S(() => !Bu(t.day, t.month)), k = S(
      () => n.isOutsideVisibleView(t.day)
    ), C = S(() => t.day.day.toLocaleString(n.locale.value)), A = S(() => !n.disabled.value && Ke(t.day, n.placeholder.value));
    function T(R, P) {
      var I;
      if (!n.readonly.value && !(n.isDateDisabled(P) || (I = n.isDateUnavailable) != null && I.call(n, P))) {
        if (n.lastPressedDateValue.value = P.copy(), n.startValue.value && n.highlightedRange.value === null) {
          if (Ke(P, n.startValue.value) && !n.preventDeselect.value && !n.endValue.value) {
            n.startValue.value = void 0, n.onPlaceholderChange(P);
            return;
          } else if (!n.endValue.value) {
            R.preventDefault(), n.lastPressedDateValue.value && Ke(n.lastPressedDateValue.value, P) && (n.startValue.value = P.copy());
            return;
          }
        }
        if (n.startValue.value && n.endValue.value && Ke(n.endValue.value, P) && !n.preventDeselect.value) {
          n.startValue.value = void 0, n.endValue.value = void 0, n.onPlaceholderChange(P);
          return;
        }
        n.startValue.value ? n.endValue.value ? n.endValue.value && n.startValue.value && (n.endValue.value = void 0, n.startValue.value = P.copy()) : n.endValue.value = P.copy() : n.startValue.value = P.copy();
      }
    }
    function M(R) {
      T(R, t.day);
    }
    function E() {
      var R;
      n.isDateDisabled(t.day) || (R = n.isDateUnavailable) != null && R.call(n, t.day) || (n.focusedValue.value = t.day.copy());
    }
    function N(R) {
      R.preventDefault(), R.stopPropagation();
      const P = n.parentElement.value, I = P ? Array.from(P.querySelectorAll(m)) : [];
      let F = I.indexOf(r.value);
      const Y = 7, z = n.dir.value === "rtl" ? -1 : 1;
      switch (R.code) {
        case a.ARROW_RIGHT:
          F += z;
          break;
        case a.ARROW_LEFT:
          F -= z;
          break;
        case a.ARROW_UP:
          F -= Y;
          break;
        case a.ARROW_DOWN:
          F += Y;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          T(R, t.day);
          return;
        default:
          return;
      }
      if (F >= 0 && F < I.length) {
        I[F].focus();
        return;
      }
      if (F < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), se(() => {
          const H = P ? Array.from(P.querySelectorAll(m)) : [];
          if (!n.pagedNavigation.value) {
            const ee = fn(n.placeholder.value);
            H[ee - Math.abs(F)].focus();
            return;
          }
          H[H.length - Math.abs(F)].focus();
        });
        return;
      }
      if (F >= I.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), se(() => {
          const H = P ? Array.from(P.querySelectorAll(m)) : [];
          if (!n.pagedNavigation.value) {
            const ee = fn(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            H[H.length - ee + F - I.length].focus();
            return;
          }
          H[F - I.length].focus();
        });
      }
    }
    return (R, P) => (g(), w(l(W), D({
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
      "data-focused": A.value ? "" : void 0,
      tabindex: A.value ? 0 : $.value || i.value ? void 0 : -1,
      onClick: M,
      onFocusin: E,
      onMouseenter: E,
      onKeydown: je(N, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: y(() => [
        x(R.$slots, "default", { dayValue: C.value }, () => [
          ae(ce(C.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), Bx = ["default-value"], Ox = /* @__PURE__ */ _({
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
    const t = e, { value: n } = me(t), a = B();
    return (o, r) => (g(), w(l(vr), { "as-child": "" }, {
      default: y(() => [
        la(_e("select", D({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (s) => ut(n) ? n.value = s : null),
          "default-value": l(n)
        }), [
          x(o.$slots, "default")
        ], 16, Bx), [
          [Ry, l(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Px = {
  key: 0,
  value: ""
}, [ha, Mv] = ge("SelectRoot"), [Ix, Rx] = ge("SelectRoot"), Fx = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Me(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = Me(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = B(), i = B(), u = B({
      x: 0,
      y: 0
    }), d = B(!1), { required: c, disabled: f, dir: p } = me(n), h = qt(p);
    Mv({
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
    const v = cr(s), m = B(/* @__PURE__ */ new Set()), b = S(() => Array.from(m.value).map(($) => {
      var k;
      return (k = $.props) == null ? void 0 : k.value;
    }).join(";"));
    return Rx({
      onNativeOptionAdd: ($) => {
        m.value.add($);
      },
      onNativeOptionRemove: ($) => {
        m.value.delete($);
      }
    }), ($, k) => (g(), w(l(co), null, {
      default: y(() => [
        x($.$slots, "default", {
          modelValue: l(o),
          open: l(r)
        }),
        l(v) ? (g(), w(Ox, D({ key: b.value }, $.$attrs, {
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
            l(o) === void 0 ? (g(), L("option", Px)) : ie("", !0),
            (g(!0), L(le, null, Ee(Array.from(m.value), (C) => (g(), w(lt(C), D({ ref_for: !0 }, C.props, {
              key: C.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ie("", !0)
      ]),
      _: 3
    }));
  }
}), Vx = [" ", "Enter", "ArrowUp", "ArrowDown"], Nx = [" ", "Enter"], kt = 10;
function Dv(e) {
  return e === "" || Zr(e);
}
const Lx = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ha(), a = S(() => {
      var h;
      return ((h = n.disabled) == null ? void 0 : h.value) || t.disabled;
    }), { forwardRef: o, currentElement: r } = j();
    n.contentId || (n.contentId = ze(void 0, "radix-vue-select-content")), ue(() => {
      n.triggerElement = r;
    });
    const { injectCollection: s } = so(), i = s(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = td(i);
    function f() {
      a.value || (n.onOpenChange(!0), c());
    }
    function p(h) {
      f(), n.triggerPointerDownPosRef.value = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      };
    }
    return (h, v) => (g(), w(l(ci), { "as-child": "" }, {
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
            "data-placeholder": l(Dv)((k = l(n).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": h.asChild,
            as: h.as,
            onClick: v[0] || (v[0] = (C) => {
              var A;
              (A = C == null ? void 0 : C.currentTarget) == null || A.focus();
            }),
            onPointerdown: v[1] || (v[1] = (C) => {
              if (C.pointerType === "touch")
                return C.preventDefault();
              const A = C.target;
              A.hasPointerCapture(C.pointerId) && A.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && (p(C), C.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Ie(
              (C) => {
                C.pointerType === "touch" && p(C);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (C) => {
              const A = l(u) !== "";
              !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && A && C.key === " " || (l(d)(C.key), l(Vx).includes(C.key) && (f(), C.preventDefault()));
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
}), zx = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pr), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [gd, Hx] = ge("SelectItemAlignedPosition"), Ux = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { injectCollection: o } = so(), r = ha(), s = va(), i = o(), u = B(!1), d = B(!0), c = B(), { forwardRef: f, currentElement: p } = j(), { viewport: h, selectedItem: v, selectedItemText: m, focusSelectedItem: b } = s;
    function $() {
      if (r.triggerElement.value && r.valueElement.value && c.value && p.value && h != null && h.value && v != null && v.value && m != null && m.value) {
        const A = r.triggerElement.value.getBoundingClientRect(), T = p.value.getBoundingClientRect(), M = r.valueElement.value.getBoundingClientRect(), E = m.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const Q = E.left - T.left, oe = M.left - Q, U = A.left - oe, G = A.width + U, ne = Math.max(G, T.width), K = window.innerWidth - kt, Re = Cs(oe, kt, Math.max(kt, K - ne));
          c.value.style.minWidth = `${G}px`, c.value.style.left = `${Re}px`;
        } else {
          const Q = T.right - E.right, oe = window.innerWidth - M.right - Q, U = window.innerWidth - A.right - oe, G = A.width + U, ne = Math.max(G, T.width), K = window.innerWidth - kt, Re = Cs(
            oe,
            kt,
            Math.max(kt, K - ne)
          );
          c.value.style.minWidth = `${G}px`, c.value.style.right = `${Re}px`;
        }
        const N = i.value, R = window.innerHeight - kt * 2, P = h.value.scrollHeight, I = window.getComputedStyle(p.value), F = Number.parseInt(
          I.borderTopWidth,
          10
        ), Y = Number.parseInt(I.paddingTop, 10), z = Number.parseInt(
          I.borderBottomWidth,
          10
        ), H = Number.parseInt(
          I.paddingBottom,
          10
        ), ee = F + Y + P + H + z, re = Math.min(
          v.value.offsetHeight * 5,
          ee
        ), be = window.getComputedStyle(h.value), q = Number.parseInt(be.paddingTop, 10), de = Number.parseInt(
          be.paddingBottom,
          10
        ), he = A.top + A.height / 2 - kt, Xe = R - he, ot = v.value.offsetHeight / 2, ct = v.value.offsetTop + ot, gt = F + Y + ct, Pt = ee - gt;
        if (gt <= he) {
          const Q = v.value === N[N.length - 1];
          c.value.style.bottom = "0px";
          const oe = p.value.clientHeight - h.value.offsetTop - h.value.offsetHeight, U = Math.max(
            Xe,
            ot + (Q ? de : 0) + oe + z
          ), G = gt + U;
          c.value.style.height = `${G}px`;
        } else {
          const Q = v.value === N[0];
          c.value.style.top = "0px";
          const oe = Math.max(
            he,
            F + h.value.offsetTop + (Q ? q : 0) + ot
          ) + Pt;
          c.value.style.height = `${oe}px`, h.value.scrollTop = gt - he + h.value.offsetTop;
        }
        c.value.style.margin = `${kt}px 0`, c.value.style.minHeight = `${re}px`, c.value.style.maxHeight = `${R}px`, a("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = B("");
    ue(async () => {
      await se(), $(), p.value && (k.value = window.getComputedStyle(p.value).zIndex);
    });
    function C(A) {
      A && d.value === !0 && ($(), b == null || b(), d.value = !1);
    }
    return Hx({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: C
    }), (A, T) => (g(), L("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: jt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      O(l(W), D({
        ref: l(f),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...A.$attrs, ...n }), {
        default: y(() => [
          x(A.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Wx = /* @__PURE__ */ _({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: kt },
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
    return (n, a) => (g(), w(l(qa), D(l(t), { style: {
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
}), vo = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [va, Kx] = ge("SelectContent"), jx = /* @__PURE__ */ _({
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
    const n = e, a = t, o = ha();
    ed(), dr(n.bodyLock);
    const { createCollection: r } = so(), s = B();
    fr(s);
    const i = r(s), { search: u, handleTypeaheadSearch: d } = td(i), c = B(), f = B(), p = B(), h = B(!1), v = B(!1);
    function m() {
      f.value && s.value && Rl([f.value, s.value]);
    }
    te(h, () => {
      m();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: $ } = o;
    xe((T) => {
      if (!s.value)
        return;
      let M = { x: 0, y: 0 };
      const E = (R) => {
        var P, I;
        M = {
          x: Math.abs(
            Math.round(R.pageX) - (((P = $.value) == null ? void 0 : P.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((I = $.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, N = (R) => {
        var P;
        R.pointerType !== "touch" && (M.x <= 10 && M.y <= 10 ? R.preventDefault() : (P = s.value) != null && P.contains(R.target) || b(!1), document.removeEventListener("pointermove", E), $.value = null);
      };
      $.value !== null && (document.addEventListener("pointermove", E), document.addEventListener("pointerup", N, {
        capture: !0,
        once: !0
      })), T(() => {
        document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", N, {
          capture: !0
        });
      });
    });
    function k(T) {
      const M = T.ctrlKey || T.altKey || T.metaKey;
      if (T.key === "Tab" && T.preventDefault(), !M && T.key.length === 1 && d(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) {
        let E = i.value;
        if (["ArrowUp", "End"].includes(T.key) && (E = E.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key)) {
          const N = T.target, R = E.indexOf(N);
          E = E.slice(R + 1);
        }
        setTimeout(() => Rl(E)), T.preventDefault();
      }
    }
    const C = S(() => n.position === "popper" ? n : {}), A = ye(C.value);
    return Kx({
      content: s,
      viewport: c,
      onViewportChange: (T) => {
        c.value = T;
      },
      itemRefCallback: (T, M, E) => {
        var N, R;
        const P = !v.value && !E;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === M || P) && (f.value = T, P && (v.value = !0));
      },
      selectedItem: f,
      selectedItemText: p,
      onItemLeave: () => {
        var T;
        (T = s.value) == null || T.focus();
      },
      itemTextRefCallback: (T, M, E) => {
        var N, R;
        const P = !v.value && !E;
        (((N = o.modelValue) == null ? void 0 : N.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === M || P) && (p.value = T);
      },
      focusSelectedItem: m,
      position: n.position,
      isPositioned: h,
      searchRef: u
    }), (T, M) => (g(), w(l(di), {
      "as-child": "",
      onMountAutoFocus: M[6] || (M[6] = Ie(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: M[7] || (M[7] = (E) => {
        var N;
        a("closeAutoFocus", E), !E.defaultPrevented && ((N = l(o).triggerElement.value) == null || N.focus({ preventScroll: !0 }), E.preventDefault());
      })
    }, {
      default: y(() => [
        O(l(lo), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: M[2] || (M[2] = Ie(() => {
          }, ["prevent"])),
          onDismiss: M[3] || (M[3] = (E) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: M[4] || (M[4] = (E) => a("escapeKeyDown", E)),
          onPointerDownOutside: M[5] || (M[5] = (E) => a("pointerDownOutside", E))
        }, {
          default: y(() => [
            (g(), w(lt(
              T.position === "popper" ? Wx : Ux
            ), D({ ...T.$attrs, ...l(A) }, {
              id: l(o).contentId,
              ref: (E) => {
                s.value = l(wt)(E);
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
              onContextmenu: M[0] || (M[0] = Ie(() => {
              }, ["prevent"])),
              onPlaced: M[1] || (M[1] = (E) => h.value = !0),
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
}), Yx = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Mv(e.context), (t, n) => x(t.$slots, "default");
  }
}), Gx = { key: 1 }, qx = /* @__PURE__ */ _({
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
    const n = e, a = pe(n, t), o = ha(), r = B();
    ue(() => {
      r.value = new DocumentFragment();
    });
    const s = B(), i = S(() => n.forceMount || o.open.value);
    return (u, d) => {
      var c;
      return i.value ? (g(), w(l(mt), {
        key: 0,
        ref_key: "presenceRef",
        ref: s,
        present: !0
      }, {
        default: y(() => [
          O(jx, X(Z({ ...l(a), ...u.$attrs })), {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = s.value) != null && c.present) && r.value ? (g(), L("div", Gx, [
        (g(), w(ia, { to: r.value }, [
          O(Yx, { context: l(o) }, {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ie("", !0);
    };
  }
}), Xx = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(W), D({ "aria-hidden": "true" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bv, Jx] = ge("SelectItem"), Zx = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = me(t), a = ha(), o = va(vo), { forwardRef: r, currentElement: s } = j(), i = S(() => {
      var m;
      return ((m = a.modelValue) == null ? void 0 : m.value) === t.value;
    }), u = B(!1), d = B(t.textValue ?? ""), c = ze(void 0, "radix-vue-select-item-text");
    async function f(m) {
      await se(), !(m != null && m.defaultPrevented) && (n.value || (a.onValueChange(t.value), a.onOpenChange(!1)));
    }
    async function p(m) {
      var b;
      await se(), !m.defaultPrevented && (n.value ? (b = o.onItemLeave) == null || b.call(o) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function h(m) {
      var b;
      await se(), !m.defaultPrevented && m.currentTarget === Ue() && ((b = o.onItemLeave) == null || b.call(o));
    }
    async function v(m) {
      var b;
      await se(), !(m.defaultPrevented || ((b = o.searchRef) == null ? void 0 : b.value) !== "" && m.key === " ") && (Nx.includes(m.key) && f(), m.key === " " && m.preventDefault());
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
    }), Jx({
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
      onTouchend: b[3] || (b[3] = Ie(() => {
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
}), Qx = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Bv();
    return (a, o) => l(n).isSelected.value ? (g(), w(l(W), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : ie("", !0);
  }
}), [eC, tC] = ge("SelectGroup"), nC = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ze(void 0, "radix-vue-select-group");
    return tC({ id: n }), (a, o) => (g(), w(l(W), D({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), aC = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = eC({ id: "" });
    return (a, o) => (g(), w(l(W), D(t, {
      id: l(n).id
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ov = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ha(), a = va(vo), o = Ix(), r = Bv(), { forwardRef: s, currentElement: i } = j(), u = S(() => {
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
    }), ei(() => {
      o.onNativeOptionRemove(u.value);
    }), (d, c) => (g(), L(le, null, [
      O(l(W), D({
        id: l(r).textId,
        ref: l(s)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(r).isSelected.value && l(n).valueElement.value && !l(n).valueElementHasChildren.value ? (g(), w(ia, {
        key: 0,
        to: l(n).valueElement.value
      }, [
        x(d.$slots, "default")
      ], 8, ["to"])) : ie("", !0)
    ], 64));
  }
}), oC = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = me(t), a = ow(n), o = va(vo), r = o.position === "item-aligned" ? gd() : void 0, { forwardRef: s, currentElement: i } = j();
    ue(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = B(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: h } = r ?? {};
      if (p != null && p.value && h != null && h.value) {
        const v = Math.abs(u.value - f.scrollTop);
        if (v > 0) {
          const m = window.innerHeight - kt * 2, b = Number.parseFloat(
            h.value.style.minHeight
          ), $ = Number.parseFloat(h.value.style.height), k = Math.max(b, $);
          if (k < m) {
            const C = k + v, A = Math.min(m, C), T = C - A;
            h.value.style.height = `${A}px`, h.value.style.bottom === "0px" && (f.scrollTop = T > 0 ? T : 0, h.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f.scrollTop;
    }
    return (c, f) => (g(), L(le, null, [
      O(l(W), D({
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
}), Pv = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: a } = so(), o = a(), r = va(vo), s = B(null);
    function i() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    xe(() => {
      const c = o.value.find(
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
      (c = r.onItemLeave) == null || c.call(r), s.value === null && (s.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return ei(() => i()), (c, f) => {
      var p;
      return g(), w(l(W), D({
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
}), rC = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = va(vo), n = t.position === "item-aligned" ? gd() : void 0, { forwardRef: a, currentElement: o } = j(), r = B(!1);
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
    }), (s, i) => r.value ? (g(), w(Pv, {
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
    }, 512)) : ie("", !0);
  }
}), sC = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = va(vo), n = t.position === "item-aligned" ? gd() : void 0, { forwardRef: a, currentElement: o } = j(), r = B(!1);
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
    }), (s, i) => r.value ? (g(), w(Pv, {
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
    }, 512)) : ie("", !0);
  }
}), iC = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = j(), a = ha(), o = Xp();
    return Py(() => {
      var r;
      const s = !!ii((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
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
          l(Dv)((i = l(a).modelValue) == null ? void 0 : i.value) ? (g(), L(le, { key: 0 }, [
            ae(ce(r.placeholder), 1)
          ], 64)) : x(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), lC = /* @__PURE__ */ _({
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
}), uC = /* @__PURE__ */ _({
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
    return (i, u) => (g(), w(l(W), D({
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
}), dC = /* @__PURE__ */ _({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(uC, X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function cC(e = [], t, n) {
  const a = [...e];
  return a[n] = t, a.sort((o, r) => o - r);
}
function Iv(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Cs(a, 0, 100);
}
function fC(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function pC(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((o) => Math.abs(o - t)), a = Math.min(...n);
  return n.indexOf(a);
}
function hC(e, t, n) {
  const a = e / 2, o = yd([0, 50], [0, a]);
  return (a - o(t) * n) * n;
}
function vC(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function mC(e, t) {
  if (t > 0) {
    const n = vC(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function yd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + a * (n - e[0]);
  };
}
function gC(e) {
  return (String(e).split(".")[1] || "").length;
}
function yC(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Rv = ["PageUp", "PageDown"], Fv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Vv = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Nv, Lv] = ge(["SliderVertical", "SliderHorizontal"]), zv = /* @__PURE__ */ _({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = pi();
    return (r, s) => (g(), w(l(W), D({ "data-slider-impl": "" }, n, {
      onKeydown: s[0] || (s[0] = (i) => {
        i.key === "Home" ? (a("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (a("endKeyDown", i), i.preventDefault()) : l(Rv).concat(l(Fv)).includes(i.key) && (a("stepKeyDown", i), i.preventDefault());
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
}), bC = /* @__PURE__ */ _({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, dir: s, inverted: i } = me(n), { forwardRef: u, currentElement: d } = j(), c = B(), f = S(() => (s == null ? void 0 : s.value) === "ltr" && !i.value || (s == null ? void 0 : s.value) !== "ltr" && i.value);
    function p(h) {
      const v = c.value || d.value.getBoundingClientRect(), m = [0, v.width], b = f.value ? [r.value, o.value] : [o.value, r.value], $ = yd(m, b);
      return c.value = v, $(h - v.left);
    }
    return Lv({
      startEdge: f.value ? "left" : "right",
      endEdge: f.value ? "right" : "left",
      direction: f.value ? 1 : -1,
      size: "width"
    }), (h, v) => (g(), w(zv, {
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
        const b = f.value ? "from-left" : "from-right", $ = l(Vv)[b].includes(m.key);
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
}), _C = /* @__PURE__ */ _({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, a = t, { max: o, min: r, inverted: s } = me(n), { forwardRef: i, currentElement: u } = j(), d = B(), c = S(() => !s.value);
    function f(p) {
      const h = d.value || u.value.getBoundingClientRect(), v = [0, h.height], m = c.value ? [o.value, r.value] : [r.value, o.value], b = yd(v, m);
      return d.value = h, b(p - h.top);
    }
    return Lv({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (p, h) => (g(), w(zv, {
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
        const m = c.value ? "from-bottom" : "from-top", b = l(Vv)[m].includes(v.key);
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
}), wC = ["value", "name", "disabled", "step"], [pi, xC] = ge("SliderRoot"), CC = /* @__PURE__ */ _({
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
    const n = e, a = t, { min: o, max: r, step: s, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = me(n), f = qt(c), { forwardRef: p, currentElement: h } = j(), v = cr(h);
    cd();
    const m = Me(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = B(0), $ = B(m.value);
    function k(E) {
      const N = pC(m.value, E);
      T(E, N);
    }
    function C(E) {
      T(E, b.value);
    }
    function A() {
      const E = $.value[b.value];
      m.value[b.value] !== E && a("valueCommit", Gr(m.value));
    }
    function T(E, N, { commit: R } = { commit: !1 }) {
      var P;
      const I = gC(s.value), F = yC(Math.round((E - o.value) / s.value) * s.value + o.value, I), Y = Cs(F, o.value, r.value), z = cC(m.value, Y, N);
      if (mC(z, i.value * s.value)) {
        b.value = z.indexOf(Y);
        const H = String(z) !== String(m.value);
        H && R && a("valueCommit", z), H && ((P = M.value[b.value]) == null || P.focus(), m.value = z);
      }
    }
    const M = B([]);
    return xC({
      modelValue: m,
      valueIndexToChangeRef: b,
      thumbElements: M,
      orientation: u,
      min: o,
      max: r,
      disabled: d
    }), (E, N) => (g(), L(le, null, [
      O(l(fd), null, {
        default: y(() => [
          (g(), w(lt(l(u) === "horizontal" ? bC : _C), D(E.$attrs, {
            ref: l(p),
            "as-child": E.asChild,
            as: E.as,
            min: l(o),
            max: l(r),
            dir: l(f),
            inverted: E.inverted,
            "aria-disabled": l(d),
            "data-disabled": l(d) ? "" : void 0,
            onPointerdown: N[0] || (N[0] = () => {
              l(d) || ($.value = l(m));
            }),
            onSlideStart: N[1] || (N[1] = (R) => !l(d) && k(R)),
            onSlideMove: N[2] || (N[2] = (R) => !l(d) && C(R)),
            onSlideEnd: N[3] || (N[3] = (R) => !l(d) && A()),
            onHomeKeyDown: N[4] || (N[4] = (R) => !l(d) && T(l(o), 0, { commit: !0 })),
            onEndKeyDown: N[5] || (N[5] = (R) => !l(d) && T(l(r), l(m).length - 1, { commit: !0 })),
            onStepKeyDown: N[6] || (N[6] = (R, P) => {
              if (!l(d)) {
                const I = l(Rv).includes(R.key) || R.shiftKey && l(Fv).includes(R.key) ? 10 : 1, F = b.value, Y = l(m)[F], z = l(s) * I * P;
                T(Y + z, F, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              x(E.$slots, "default", { modelValue: l(m) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(v) ? (g(!0), L(le, { key: 0 }, Ee(l(m), (R, P) => (g(), L("input", {
        key: P,
        value: R,
        type: "number",
        style: { display: "none" },
        name: E.name ? E.name + (l(m).length > 1 ? "[]" : "") : void 0,
        disabled: l(d),
        step: l(s)
      }, null, 8, wC))), 128)) : ie("", !0)
    ], 64));
  }
}), $C = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = pi(), a = Nv(), { forwardRef: o, currentElement: r } = j(), s = S(() => {
      var h, v;
      return (v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v[t.index];
    }), i = S(() => s.value === void 0 ? 0 : Iv(s.value, n.min.value ?? 0, n.max.value ?? 100)), u = S(() => {
      var h, v;
      return fC(t.index, ((v = (h = n.modelValue) == null ? void 0 : h.value) == null ? void 0 : v.length) ?? 0);
    }), d = tv(r), c = S(() => d[a.size].value), f = S(() => c.value ? hC(c.value, i.value, a.direction) : 0), p = Qu();
    return ue(() => {
      n.thumbElements.value.push(r.value);
    }), Ye(() => {
      const h = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(h, 1);
    }), (h, v) => (g(), w(l(fi), null, {
      default: y(() => [
        O(l(W), D(h.$attrs, {
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
}), kC = /* @__PURE__ */ _({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = pd(), { forwardRef: a, currentElement: o } = j(), r = S(() => o.value ? n().findIndex((s) => s.ref === o.value) : -1);
    return (s, i) => (g(), w($C, D({ ref: l(a) }, t, { index: r.value }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), SC = /* @__PURE__ */ _({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = pi();
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
}), TC = /* @__PURE__ */ _({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = pi(), n = Nv();
    j();
    const a = S(() => {
      var s, i;
      return (i = (s = t.modelValue) == null ? void 0 : s.value) == null ? void 0 : i.map(
        (u) => Iv(u, t.min.value, t.max.value)
      );
    }), o = S(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), r = S(() => 100 - Math.max(...a.value));
    return (s, i) => (g(), w(l(W), {
      "data-disabled": l(t).disabled.value ? "" : void 0,
      "data-orientation": l(t).orientation.value,
      "as-child": s.asChild,
      as: s.as,
      style: jt({
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
function AC() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
AC();
const EC = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [MC, DC] = ge("SwitchRoot"), BC = /* @__PURE__ */ _({
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
    const n = e, a = t, { disabled: o } = me(n), r = Me(n, "checked", a, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function s() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = j(), d = cr(u), c = S(() => {
      var f;
      return n.id && u.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return DC({
      checked: r,
      toggleCheck: s,
      disabled: o
    }), (f, p) => (g(), L(le, null, [
      O(l(W), D(f.$attrs, {
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
        onKeydown: je(Ie(s, ["prevent"]), ["enter"])
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
      }, null, 8, EC)) : ie("", !0)
    ], 64));
  }
}), OC = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = MC();
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
}), [bd, PC] = ge("TabsRoot"), IC = /* @__PURE__ */ _({
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
    const n = e, a = t, { orientation: o, dir: r } = me(n), s = qt(r);
    j();
    const i = Me(n, "modelValue", a, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = B();
    return PC({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: o,
      dir: s,
      activationMode: n.activationMode,
      baseId: ze(void 0, "radix-vue-tabs"),
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
}), RC = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = me(t), { forwardRef: a, currentElement: o } = j(), r = bd();
    return r.tabsList = o, (s, i) => (g(), w(l(wv), {
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
function Hv(e, t) {
  return `${e}-trigger-${t}`;
}
function Uv(e, t) {
  return `${e}-content-${t}`;
}
const FC = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), a = bd(), o = S(() => Hv(a.baseId, t.value)), r = S(() => Uv(a.baseId, t.value)), s = S(() => t.value === a.modelValue.value), i = B(s.value);
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
          style: jt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || s.value ? x(u.$slots, "default", { key: 0 }) : ie("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), VC = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = j(), a = bd(), o = S(() => Hv(a.baseId, t.value)), r = S(() => Uv(a.baseId, t.value)), s = S(() => t.value === a.modelValue.value);
    return (i, u) => (g(), w(l(ww), {
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
          onMousedown: u[0] || (u[0] = Ie((d) => {
            !i.disabled && d.ctrlKey === !1 ? l(a).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = je((d) => l(a).changeModelValue(i.value), ["enter", "space"])),
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
}), [hi, NC] = ge("ToastProvider"), LC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: a, swipeDirection: o, swipeThreshold: r } = me(t), s = B(), i = B(0), u = B(!1), d = B(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return NC({
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
}), zC = "toast.swipeStart", HC = "toast.swipeMove", UC = "toast.swipeCancel", WC = "toast.swipeEnd", Vl = "toast.viewportPause", Nl = "toast.viewportResume";
function Br(e, t, n) {
  const a = n.originalEvent.currentTarget, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
function ef(e, t, n = 0) {
  const a = Math.abs(e.x), o = Math.abs(e.y), r = a > o;
  return t === "left" || t === "right" ? r && a > n : !r && o > n;
}
function KC(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Wv(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), KC(n)) {
      const a = n.ariaHidden || n.hidden || n.style.display === "none", o = n.dataset.radixToastAnnounceExclude === "";
      if (!a)
        if (o) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Wv(n));
    }
  }), t;
}
const jC = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = hi(), n = n_(1e3), a = B(!1);
    return qh(() => {
      a.value = !0;
    }), (o, r) => l(n) || a.value ? (g(), w(l(vr), { key: 0 }, {
      default: y(() => [
        ae(ce(l(t).label.value) + " ", 1),
        x(o.$slots, "default")
      ]),
      _: 3
    })) : ie("", !0);
  }
}), [YC, GC] = ge("ToastRoot"), qC = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: o, currentElement: r } = j(), s = hi(), i = B(null), u = B(null), d = S(
      () => typeof n.duration == "number" ? n.duration : s.duration.value
    ), c = B(0), f = B(d.value), p = B(0), h = B(d.value), v = qh(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - c.value;
      h.value = Math.max(f.value - k, 0);
    }, { fpsLimit: 60 });
    function m(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || Gt && (window.clearTimeout(p.value), c.value = (/* @__PURE__ */ new Date()).getTime(), p.value = window.setTimeout(b, k));
    }
    function b() {
      var k, C;
      (k = r.value) != null && k.contains(Ue()) && ((C = s.viewport.value) == null || C.focus()), s.isClosePausedRef.value = !1, a("close");
    }
    const $ = S(() => r.value ? Wv(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return xe((k) => {
      const C = s.viewport.value;
      if (C) {
        const A = () => {
          m(f.value), v.resume(), a("resume");
        }, T = () => {
          const M = (/* @__PURE__ */ new Date()).getTime() - c.value;
          f.value = f.value - M, window.clearTimeout(p.value), v.pause(), a("pause");
        };
        return C.addEventListener(Vl, T), C.addEventListener(Nl, A), () => {
          C.removeEventListener(Vl, T), C.removeEventListener(Nl, A);
        };
      }
    }), te(() => [n.open, d.value], () => {
      f.value = d.value, n.open && !s.isClosePausedRef.value && m(d.value);
    }, { immediate: !0 }), Zu("Escape", (k) => {
      a("escapeKeyDown", k), k.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), ue(() => {
      s.onToastAdd();
    }), Ye(() => {
      s.onToastRemove();
    }), GC({ onClose: b }), (k, C) => (g(), L(le, null, [
      $.value ? (g(), w(jC, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          ae(ce($.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ie("", !0),
      l(s).viewport.value ? (g(), w(ia, {
        key: 1,
        to: l(s).viewport.value
      }, [
        O(l(W), D({
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
          onPointerdown: C[0] || (C[0] = Ie((A) => {
            i.value = { x: A.clientX, y: A.clientY };
          }, ["left"])),
          onPointermove: C[1] || (C[1] = (A) => {
            if (!i.value) return;
            const T = A.clientX - i.value.x, M = A.clientY - i.value.y, E = !!u.value, N = ["left", "right"].includes(l(s).swipeDirection.value), R = ["left", "up"].includes(l(s).swipeDirection.value) ? Math.min : Math.max, P = N ? R(0, T) : 0, I = N ? 0 : R(0, M), F = A.pointerType === "touch" ? 10 : 2, Y = { x: P, y: I }, z = { originalEvent: A, delta: Y };
            E ? (u.value = Y, l(Br)(l(HC), (H) => a("swipeMove", H), z)) : l(ef)(Y, l(s).swipeDirection.value, F) ? (u.value = Y, l(Br)(l(zC), (H) => a("swipeStart", H), z), A.target.setPointerCapture(A.pointerId)) : (Math.abs(T) > F || Math.abs(M) > F) && (i.value = null);
          }),
          onPointerup: C[2] || (C[2] = (A) => {
            const T = u.value, M = A.target;
            if (M.hasPointerCapture(A.pointerId) && M.releasePointerCapture(A.pointerId), u.value = null, i.value = null, T) {
              const E = A.currentTarget, N = { originalEvent: A, delta: T };
              l(ef)(T, l(s).swipeDirection.value, l(s).swipeThreshold.value) ? l(Br)(l(WC), (R) => a("swipeEnd", R), N) : l(Br)(l(UC), (R) => a("swipeCancel", R), N), E == null || E.addEventListener("click", (R) => R.preventDefault(), {
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
      ], 8, ["to"])) : ie("", !0)
    ], 64));
  }
}), XC = /* @__PURE__ */ _({
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
    const n = e, a = t, { forwardRef: o } = j(), r = Me(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (s, i) => (g(), w(l(mt), {
      present: s.forceMount || l(r)
    }, {
      default: y(() => [
        O(qC, D({
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
}), Kv = /* @__PURE__ */ _({
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
}), jv = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = YC(), { forwardRef: a } = j();
    return (o, r) => (g(), w(Kv, { "as-child": "" }, {
      default: y(() => [
        O(l(W), D(t, {
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
}), JC = /* @__PURE__ */ _({
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
    return (n, a) => n.altText ? (g(), w(Kv, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        O(jv, {
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
    }, 8, ["alt-text"])) : ie("", !0);
  }
}), tf = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, a = hi();
    return (o, r) => (g(), w(l(vr), {
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
}), ZC = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: a } = me(t), { forwardRef: o, currentElement: r } = j(), { createCollection: s } = so(), i = s(r), u = hi(), d = S(() => u.toastCount.value > 0), c = B(), f = B(), p = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Zu(n.value, () => {
      r.value.focus();
    }), ue(() => {
      u.onViewportChange(r.value);
    }), xe((v) => {
      const m = r.value;
      if (d.value && m) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const T = new CustomEvent(Vl);
            m.dispatchEvent(T), u.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (u.isClosePausedRef.value) {
            const T = new CustomEvent(Nl);
            m.dispatchEvent(T), u.isClosePausedRef.value = !1;
          }
        }, k = (T) => {
          !m.contains(T.relatedTarget) && $();
        }, C = () => {
          m.contains(Ue()) || $();
        }, A = (T) => {
          var M, E, N;
          const R = T.altKey || T.ctrlKey || T.metaKey;
          if (T.key === "Tab" && !R) {
            const P = Ue(), I = T.shiftKey;
            if (T.target === m && I) {
              (M = c.value) == null || M.focus();
              return;
            }
            const F = h({ tabbingDirection: I ? "backwards" : "forwards" }), Y = F.findIndex((z) => z === P);
            Qr(F.slice(Y + 1)) ? T.preventDefault() : I ? (E = c.value) == null || E.focus() : (N = f.value) == null || N.focus();
          }
        };
        m.addEventListener("focusin", b), m.addEventListener("focusout", k), m.addEventListener("pointermove", b), m.addEventListener("pointerleave", C), m.addEventListener("keydown", A), window.addEventListener("blur", b), window.addEventListener("focus", $), v(() => {
          m.removeEventListener("focusin", b), m.removeEventListener("focusout", k), m.removeEventListener("pointermove", b), m.removeEventListener("pointerleave", C), m.removeEventListener("keydown", A), window.removeEventListener("blur", b), window.removeEventListener("focus", $);
        });
      }
    });
    function h({ tabbingDirection: v }) {
      const m = i.value.map((b) => {
        const $ = [b, ...rd(b)];
        return v === "forwards" ? $ : $.reverse();
      });
      return (v === "forwards" ? m.reverse() : m).flat();
    }
    return (v, m) => (g(), w(l(J_), {
      role: "region",
      "aria-label": typeof l(a) == "string" ? l(a).replace("{hotkey}", p.value) : l(a)(p.value),
      tabindex: "-1",
      style: jt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (g(), w(tf, {
          key: 0,
          ref: (b) => {
            c.value = l(wt)(b);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const b = h({
              tabbingDirection: "forwards"
            });
            l(Qr)(b);
          })
        }, null, 512)) : ie("", !0),
        O(l(W), D({
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
        d.value ? (g(), w(tf, {
          key: 1,
          ref: (b) => {
            f.value = l(wt)(b);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const b = h({
              tabbingDirection: "backwards"
            });
            l(Qr)(b);
          })
        }, null, 512)) : ie("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), QC = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e$ = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return j(), (n, a) => (g(), w(l(W), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yv = "tooltip.open", [_d, t$] = ge("TooltipProvider"), Gv = /* @__PURE__ */ _({
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
    const u = B(!0), d = B(!1), { start: c, stop: f } = Ju(() => {
      u.value = !0;
    }, a, { immediate: !1 });
    return t$({
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
}), [vi, n$] = ge("TooltipRoot"), a$ = /* @__PURE__ */ _({
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
    const o = _d(), r = S(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = S(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = S(() => n.disabled ?? o.disabled.value), u = S(() => n.delayDuration ?? o.delayDuration.value), d = S(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = Me(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(c, (C) => {
      o.onClose && (C ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Yv))) : o.onClose());
    });
    const f = B(!1), p = B(), h = S(() => c.value ? f.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: m } = Ju(() => {
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
    return n$({
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
    }), (C, A) => (g(), w(l(co), null, {
      default: y(() => [
        x(C.$slots, "default", { open: l(c) })
      ]),
      _: 3
    }));
  }
}), o$ = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = vi(), a = _d();
    n.contentId || (n.contentId = ze(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = j(), s = B(!1), i = B(!1), u = S(() => n.disabled.value ? {} : {
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
    return (b, $) => (g(), w(l(ci), { "as-child": "" }, {
      default: y(() => [
        O(l(W), D({
          ref: l(o),
          "aria-describedby": l(n).open.value ? l(n).contentId : void 0,
          "data-state": l(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Iy(u.value)), {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), qv = /* @__PURE__ */ _({
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
    const n = e, a = t, o = vi(), { forwardRef: r } = j(), s = Xp(), i = S(() => {
      var c;
      return (c = s.default) == null ? void 0 : c.call(s);
    }), u = S(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let f = "";
      function p(h) {
        typeof h.children == "string" && h.type !== Tu ? f += h.children : Array.isArray(h.children) && h.children.forEach((v) => p(v));
      }
      return (c = i.value) == null || c.forEach((h) => p(h)), f;
    }), d = S(() => {
      const { ariaLabel: c, ...f } = n;
      return f;
    });
    return ue(() => {
      Ga(window, "scroll", (c) => {
        const f = c.target;
        f != null && f.contains(o.trigger.value) && o.onClose();
      }), Ga(window, Yv, o.onClose);
    }), (c, f) => (g(), w(l(lo), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: f[0] || (f[0] = (p) => a("escapeKeyDown", p)),
      onPointerDownOutside: f[1] || (f[1] = (p) => {
        var h;
        l(o).disableClosingTrigger.value && (h = l(o).trigger.value) != null && h.contains(p.target) && p.preventDefault(), a("pointerDownOutside", p);
      }),
      onFocusOutside: f[2] || (f[2] = Ie(() => {
      }, ["prevent"])),
      onDismiss: f[3] || (f[3] = (p) => l(o).onClose())
    }, {
      default: y(() => [
        O(l(qa), D({
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
            O(l(vr), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                ae(ce(u.value), 1)
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
}), r$ = /* @__PURE__ */ _({
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
    const t = ye(e), { forwardRef: n, currentElement: a } = j(), { trigger: o, onClose: r } = vi(), s = _d(), { isPointerInTransit: i, onPointerExit: u } = v_(o, a);
    return s.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (g(), w(qv, D({ ref: l(n) }, l(t)), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s$ = /* @__PURE__ */ _({
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
    const n = e, a = t, o = vi(), r = pe(n, a), { forwardRef: s } = j();
    return (i, u) => (g(), w(l(mt), {
      present: i.forceMount || l(o).open.value
    }, {
      default: y(() => [
        (g(), w(lt(l(o).disableHoverableContent.value ? qv : r$), D({ ref: l(s) }, l(r)), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), i$ = /* @__PURE__ */ _({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(pr), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wR = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l(L_), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Xv(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Xv(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Jv() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Xv(e)) && (a && (a += " "), a += t);
  return a;
}
const wd = "-", l$ = (e) => {
  const t = d$(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(wd);
      return i[0] === "" && i.length !== 1 && i.shift(), Zv(i, t) || u$(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const u = n[s] || [];
      return i && a[s] ? [...u, ...a[s]] : u;
    }
  };
}, Zv = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), o = a ? Zv(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const r = e.join(wd);
  return (s = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : s.classGroupId;
}, nf = /^\[(.+)\]$/, u$ = (e) => {
  if (nf.test(e)) {
    const t = nf.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, d$ = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return f$(Object.entries(e.classGroups), n).forEach(([r, s]) => {
    Ll(s, a, r, t);
  }), a;
}, Ll = (e, t, n, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? t : af(t, o);
      r.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (c$(o)) {
        Ll(o(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([r, s]) => {
      Ll(s, af(t, r), n, a);
    });
  });
}, af = (e, t) => {
  let n = e;
  return t.split(wd).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, c$ = (e) => e.isThemeGetter, f$ = (e, t) => t ? e.map(([n, a]) => {
  const o = a.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([s, i]) => [t + s, i])) : r);
  return [n, o];
}) : e, p$ = (e) => {
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
}, Qv = "!", h$ = (e) => {
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
    const p = u.length === 0 ? i : i.substring(c), h = p.startsWith(Qv), v = h ? p.substring(1) : p, m = f && f > c ? f - c : void 0;
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
}, v$ = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...n.sort(), a), n = []) : n.push(a);
  }), t.push(...n.sort()), t;
}, m$ = (e) => ({
  cache: p$(e.cacheSize),
  parseClassName: h$(e),
  ...l$(e)
}), g$ = /\s+/, y$ = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, r = [], s = e.trim().split(g$);
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
    const b = v$(c).join(":"), $ = f ? b + Qv : b, k = $ + m;
    if (r.includes(k))
      continue;
    r.push(k);
    const C = o(m, v);
    for (let A = 0; A < C.length; ++A) {
      const T = C[A];
      r.push($ + T);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function b$() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = em(t)) && (a && (a += " "), a += n);
  return a;
}
const em = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = em(e[a])) && (n && (n += " "), n += t);
  return n;
};
function _$(e, ...t) {
  let n, a, o, r = s;
  function s(u) {
    const d = t.reduce((c, f) => f(c), e());
    return n = m$(d), a = n.cache.get, o = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = a(u);
    if (d)
      return d;
    const c = y$(u, n);
    return o(u, c), c;
  }
  return function() {
    return r(b$.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, tm = /^\[(?:([a-z-]+):)?(.+)\]$/i, w$ = /^\d+\/\d+$/, x$ = /* @__PURE__ */ new Set(["px", "full", "screen"]), C$ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $$ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, k$ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, S$ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, T$ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Zt = (e) => Ra(e) || x$.has(e) || w$.test(e), $n = (e) => mo(e, "length", I$), Ra = (e) => !!e && !Number.isNaN(Number(e)), el = (e) => mo(e, "number", Ra), wo = (e) => !!e && Number.isInteger(Number(e)), A$ = (e) => e.endsWith("%") && Ra(e.slice(0, -1)), ve = (e) => tm.test(e), kn = (e) => C$.test(e), E$ = /* @__PURE__ */ new Set(["length", "size", "percentage"]), M$ = (e) => mo(e, E$, nm), D$ = (e) => mo(e, "position", nm), B$ = /* @__PURE__ */ new Set(["image", "url"]), O$ = (e) => mo(e, B$, F$), P$ = (e) => mo(e, "", R$), xo = () => !0, mo = (e, t, n) => {
  const a = tm.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : n(a[2]) : !1;
}, I$ = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $$.test(e) && !k$.test(e)
), nm = () => !1, R$ = (e) => S$.test(e), F$ = (e) => T$.test(e), V$ = () => {
  const e = Be("colors"), t = Be("spacing"), n = Be("blur"), a = Be("brightness"), o = Be("borderColor"), r = Be("borderRadius"), s = Be("borderSpacing"), i = Be("borderWidth"), u = Be("contrast"), d = Be("grayscale"), c = Be("hueRotate"), f = Be("invert"), p = Be("gap"), h = Be("gradientColorStops"), v = Be("gradientColorStopPositions"), m = Be("inset"), b = Be("margin"), $ = Be("opacity"), k = Be("padding"), C = Be("saturate"), A = Be("scale"), T = Be("sepia"), M = Be("skew"), E = Be("space"), N = Be("translate"), R = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", ve, t], F = () => [ve, t], Y = () => ["", Zt, $n], z = () => ["auto", Ra, ve], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", ve], de = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], he = () => [Ra, ve];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [xo],
      spacing: [Zt, $n],
      blur: ["none", "", kn, ve],
      brightness: he(),
      borderColor: [e],
      borderRadius: ["none", "", "full", kn, ve],
      borderSpacing: F(),
      borderWidth: Y(),
      contrast: he(),
      grayscale: q(),
      hueRotate: he(),
      invert: q(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [A$, $n],
      inset: I(),
      margin: I(),
      opacity: he(),
      padding: F(),
      saturate: he(),
      scale: he(),
      sepia: q(),
      skew: he(),
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
        columns: [kn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": de()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": de()
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
        z: ["auto", wo, ve]
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
        order: ["first", "last", "none", wo, ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [xo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wo, ve]
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
        "grid-rows": [xo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wo, ve]
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
        "space-x": [E]
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
        "space-y": [E]
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
          screen: [kn]
        }, kn]
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
        text: ["base", kn, $n]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", el]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xo]
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
        "line-clamp": ["none", Ra, el]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Zt, ve]
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
        decoration: ["auto", "from-font", Zt, $n]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Zt, ve]
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
        indent: F()
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
        bg: [...H(), D$]
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
        bg: ["auto", "cover", "contain", M$]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, O$]
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
        "outline-offset": [Zt, ve]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Zt, $n]
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
        "ring-offset": [Zt, $n]
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
        shadow: ["", "inner", "none", kn, P$]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [xo]
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
        "mix-blend": [...re(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        "drop-shadow": ["", "none", kn, ve]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [wo, ve]
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
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
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
        stroke: [Zt, $n, el]
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
}, N$ = /* @__PURE__ */ _$(V$);
function V(...e) {
  return N$(Jv(e));
}
const xR = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(U_), D(n.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: y(() => [
        _e("div", {
          class: J(l(V)("pb-4 pt-0", t.class))
        }, [
          x(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), CR = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(H_), D(l(a), {
      class: l(V)("border-accordion-border border-b", t.class)
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
const L$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Or = {
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
const z$ = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: a, iconNode: o, name: r, class: s, ...i }, { slots: u }) => tt(
  "svg",
  {
    ...Or,
    width: e || Or.width,
    height: e || Or.height,
    stroke: a || Or.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${L$(r ?? "icon")}`],
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
  z$,
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
const H$ = Ge("CalendarIcon", [
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
const xd = Ge("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mi = Ge("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U$ = Ge("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = Ge("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W$ = Ge("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K$ = Ge("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j$ = Ge("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y$ = Ge("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = Ge("EllipsisIcon", [
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
const G$ = Ge("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q$ = Ge("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X$ = Ge("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J$ = Ge("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z$ = Ge("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q$ = Ge("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e2 = Ge("SunIcon", [
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
const gi = Ge("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), $R = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(W_), { class: "flex" }, {
      default: y(() => [
        O(l(K_), D(n.value, {
          class: l(V)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            x(a.$slots, "default"),
            x(a.$slots, "icon", {}, () => [
              O(l(mi), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), of = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, rf = Jv, Vn = (e, t) => (n) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return rf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: r } = t, s = Object.keys(o).map((d) => {
    const c = n == null ? void 0 : n[d], f = r == null ? void 0 : r[d];
    if (c === null) return null;
    const p = of(c) || of(f);
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
  return rf(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, kR = /* @__PURE__ */ _({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert",
      class: J(l(V)(l(t2)({ variant: n.variant }), t.class)),
      role: "alert"
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), SR = /* @__PURE__ */ _({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert-description",
      class: J(l(V)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), TR = /* @__PURE__ */ _({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-slot": "alert-title",
      class: J(l(V)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), t2 = Vn(
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
function $d(e) {
  return e ? e.flatMap((t) => t.type === le ? $d(t.children) : [t]) : [];
}
const zl = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default)
        return null;
      const a = $d(n.default()), o = a.findIndex((d) => d.type !== Tu);
      if (o === -1)
        return a;
      const r = a[o];
      (u = r.props) == null || delete u.ref;
      const s = r.props ? D(t, r.props) : t, i = Qp({ ...r, props: {} }, s);
      return a.length === 1 ? i : (a[o] = i, a);
    };
  }
}), n2 = ["area", "img", "input"], Te = _({
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
    return typeof a == "string" && n2.includes(a) ? () => tt(a, t) : a !== "template" ? () => tt(e.as, t, { default: n.default }) : () => tt(zl, t, { default: n.default });
  }
}), om = /* @__PURE__ */ _({
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
function a2(e, t) {
  var n;
  const a = un();
  return xe(() => {
    a.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), oo(a);
}
function yr(e) {
  return Zs() ? (Qs(e), !0) : !1;
}
function es() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const s = () => t(r);
      return yr(s), {
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
function o2(e) {
  let t = 0, n, a;
  const o = () => {
    t -= 1, a && t <= 0 && (a.stop(), n = void 0, a = void 0);
  };
  return (...r) => (t += 1, a || (a = Du(!0), n = a.run(() => e(...r))), yr(o), n);
}
function r2(e) {
  if (!ut(e))
    return On(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return l(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return ut(e.value[a]) && !ut(o) ? e.value[a].value = o : e.value[a] = o, !0;
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
  return On(t);
}
function s2(e) {
  return r2(S(e));
}
function i2(e, ...t) {
  const n = t.flat(), a = n[0];
  return s2(() => Object.fromEntries(typeof a == "function" ? Object.entries(me(e)).filter(([o, r]) => !a(De(r), o)) : Object.entries(me(e)).filter((o) => !n.includes(o[0]))));
}
const Wt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const l2 = (e) => typeof e < "u", u2 = Object.prototype.toString, d2 = (e) => u2.call(e) === "[object Object]", sf = () => {
}, lf = /* @__PURE__ */ c2();
function c2() {
  var e, t;
  return Wt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function f2(e, t) {
  function n(...a) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(r);
    });
  }
  return n;
}
function p2(e, t = {}) {
  let n, a, o = sf;
  const r = (u) => {
    clearTimeout(u), o(), o = sf;
  };
  let s;
  return (u) => {
    const d = De(e), c = De(t.maxWait);
    return n && r(n), d <= 0 || c !== void 0 && c <= 0 ? (a && (r(a), a = null), Promise.resolve(u())) : new Promise((f, p) => {
      o = t.rejectOnCancel ? p : f, s = u, c && !a && (a = setTimeout(() => {
        n && r(n), a = null, f(s());
      }, c)), n = setTimeout(() => {
        a && r(a), a = null, f(u());
      }, d);
    });
  };
}
function h2(e) {
  return He();
}
function tl(e) {
  return Array.isArray(e) ? e : [e];
}
function yi(e, t = 1e4) {
  return Au((n, a) => {
    let o = De(e), r;
    const s = () => setTimeout(() => {
      o = De(e), a();
    }, De(t));
    return yr(() => {
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
function v2(e, t = 200, n = {}) {
  return f2(
    p2(t, n),
    e
  );
}
const m2 = De;
function g2(e, t) {
  h2() && ei(e, t);
}
function y2(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const bi = Wt ? window : void 0;
function Kt(e) {
  var t;
  const n = De(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function rm(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = S(() => {
    const i = tl(De(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = y2(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => Kt(d))) != null ? u : [bi].filter((d) => d != null),
        tl(De(o.value ? e[1] : e[0])),
        tl(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        De(o.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const f = d2(c) ? { ...c } : c;
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
  return yr(n), s;
}
function sm() {
  const e = un(!1), t = He();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function b2(e) {
  const t = sm();
  return S(() => (t.value, !!e()));
}
function _2(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function w2(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = bi,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = a, u = _2(t);
  return rm(o, r, (c) => {
    c.repeat && De(i) || u(c) && n(c);
  }, s);
}
function x2(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ss(e, t, n = {}) {
  const { window: a = bi, ...o } = n;
  let r;
  const s = b2(() => a && "ResizeObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const f = De(e);
    return Array.isArray(f) ? f.map((p) => Kt(p)) : [Kt(f)];
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
  return yr(c), {
    isSupported: s,
    stop: c
  };
}
function Xa(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = He(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => i ? typeof i == "function" ? i(C) : x2(C) : C, $ = () => l2(e[t]) ? b(e[t]) : f, k = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = $(), A = B(C);
    let T = !1;
    return te(
      () => e[t],
      (M) => {
        T || (T = !0, A.value = b(M), se(() => T = !1));
      }
    ), te(
      A,
      (M) => {
        !T && (M !== e[t] || c) && k(M);
      },
      { deep: c }
    ), A;
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
function xt(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(n);
  return [(s) => {
    const i = ua(a, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (tn(a, s), s)];
}
function uf(e) {
  return typeof e == "string" ? `'${e}'` : new C2().serialize(e);
}
const C2 = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      yc(this, t, /* @__PURE__ */ new Map());
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
      let o = bo(this, t).get(a);
      return o === void 0 && (bo(this, t).set(a, `#${bo(this, t).size}`), o = this.serializeObject(a), bo(this, t).set(a, o)), o;
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
function Hl(e, t) {
  return e === t || uf(e) === uf(t);
}
const [_i, AR] = xt("ConfigProvider");
function kd(e) {
  const t = _i({
    dir: B("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Oe() {
  const e = He(), t = B(), n = S(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Kt(t);
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
const $2 = ["INPUT", "TEXTAREA"];
function im(e, t, n, a = {}) {
  if (!t || a.enableIgnoredElement && $2.includes(t.nodeName))
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
  let A = null;
  return k || $ ? A = lm(C, t, {
    goForward: $ ? v : u === "ltr" ? f : p,
    loop: i
  }) : m ? A = C.at(0) || null : b && (A = C.at(-1) || null), c && (A == null || A.focus()), A;
}
function lm(e, t, n, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), r = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const s = (r + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? lm(
    e,
    i,
    n,
    a
  ) : i : null;
}
let k2 = 0;
function Nn(e, t = "reka") {
  var a;
  if (e)
    return e;
  const n = _i({ useId: void 0 });
  return Object.hasOwn(Ma, "useId") ? `${t}-${(a = Ma.useId) == null ? void 0 : a.call(Ma)}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++k2}`;
}
function S2(e, t) {
  const n = B(e);
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
function T2(e, t) {
  var b;
  const n = B({}), a = B("none"), o = B(e), r = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? bi, { state: u, dispatch: d } = S2(r, {
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
    if (Wt) {
      const C = new CustomEvent($, { bubbles: !1, cancelable: !1 });
      (k = t.value) == null || k.dispatchEvent(C);
    }
  };
  te(
    e,
    async ($, k) => {
      var A;
      const C = k !== $;
      if (await se(), C) {
        const T = a.value, M = Pr(t.value);
        $ ? (d("MOUNT"), c("enter"), M === "none" && c("after-enter")) : M === "none" || M === "undefined" || ((A = n.value) == null ? void 0 : A.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : k && T !== M ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = ($) => {
    const k = Pr(t.value), C = k.includes(
      $.animationName
    ), A = u.value === "mounted" ? "enter" : "leave";
    if ($.target === t.value && C && (c(`after-${A}`), d("ANIMATION_END"), !o.value)) {
      const T = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var M;
        ((M = t.value) == null ? void 0 : M.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = T);
      });
    }
    $.target === t.value && k === "none" && d("ANIMATION_END");
  }, p = ($) => {
    $.target === t.value && (a.value = Pr(t.value));
  }, h = te(
    t,
    ($, k) => {
      $ ? (n.value = getComputedStyle($), $.addEventListener("animationstart", p), $.addEventListener("animationcancel", f), $.addEventListener("animationend", f)) : (d("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), k == null || k.removeEventListener("animationstart", p), k == null || k.removeEventListener("animationcancel", f), k == null || k.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), v = te(u, () => {
    const $ = Pr(t.value);
    a.value = u.value === "mounted" ? $ : "none";
  });
  return Ye(() => {
    h(), v();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Pr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const wi = _({
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
    const { present: a, forceMount: o } = me(e), r = B(), { isPresent: s } = T2(a, r);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = $d(i || []);
    const u = He();
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
        const f = Kt(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-reka-popper-content-wrapper") ? r.value = f.firstElementChild : r.value = f), f;
      }
    }) : null;
  }
});
function A2(e) {
  const t = He(), n = t == null ? void 0 : t.type.emits, a = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    a[Zp(Ha(o))] = (...r) => e(o, ...r);
  }), a;
}
function qn() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Sd(e, t, n) {
  const a = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(o);
}
const E2 = "dismissableLayer.pointerDownOutside", M2 = "dismissableLayer.focusOutside";
function um(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), a = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (a === n || o.indexOf(a) < o.indexOf(n)));
}
function D2(e, t, n = !0) {
  var s;
  const a = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = B(!1), r = B(() => {
  });
  return xe((i) => {
    if (!Wt || !De(n))
      return;
    const u = async (c) => {
      const f = c.target;
      if (!(!(t != null && t.value) || !f)) {
        if (um(t.value, f)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            Sd(
              E2,
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
      De(n) && (o.value = !0);
    }
  };
}
function B2(e, t, n = !0) {
  var r;
  const a = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = B(!1);
  return xe((s) => {
    if (!Wt || !De(n))
      return;
    const i = async (u) => {
      if (!(t != null && t.value))
        return;
      await se(), await se();
      const d = u.target;
      !t.value || !d || um(t.value, d) || u.target && !o.value && Sd(
        M2,
        e,
        { originalEvent: u }
      );
    };
    a.addEventListener("focusin", i), s(() => a.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      De(n) && (o.value = !0);
    },
    onBlurCapture: () => {
      De(n) && (o.value = !1);
    }
  };
}
const Qt = On({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), dm = /* @__PURE__ */ _({
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
    ), i = S(() => Qt.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => Qt.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const v = Array.from(i.value), [m] = [...Qt.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m);
      return u.value >= b;
    }), f = D2(async (v) => {
      const m = [...Qt.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || m || (a("pointerDownOutside", v), a("interactOutside", v), await se(), v.defaultPrevented || a("dismiss"));
    }, r), p = B2((v) => {
      [...Qt.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      ) || (a("focusOutside", v), a("interactOutside", v), v.defaultPrevented || a("dismiss"));
    }, r);
    w2("Escape", (v) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", v), v.defaultPrevented || a("dismiss"));
    });
    let h;
    return xe((v) => {
      r.value && (n.disableOutsidePointerEvents && (Qt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), Qt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && Qt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), xe((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), Qt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, m) => (g(), w(l(Te), {
      ref: l(o),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: jt({
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
var O2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Sa = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Rr = {}, nl = 0, cm = function(e) {
  return e && (e.host || cm(e.parentNode));
}, P2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var a = cm(n);
    return a && e.contains(a) ? a : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, I2 = function(e, t, n, a) {
  var o = P2(t, Array.isArray(e) ? e : [e]);
  Rr[n] || (Rr[n] = /* @__PURE__ */ new WeakMap());
  var r = Rr[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var c = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        c(p);
      else
        try {
          var h = p.getAttribute(a), v = h !== null && h !== "false", m = (Sa.get(p) || 0) + 1, b = (r.get(p) || 0) + 1;
          Sa.set(p, m), r.set(p, b), s.push(p), m === 1 && v && Ir.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(a, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", p, $);
        }
    });
  };
  return c(t), i.clear(), nl++, function() {
    s.forEach(function(f) {
      var p = Sa.get(f) - 1, h = r.get(f) - 1;
      Sa.set(f, p), r.set(f, h), p || (Ir.has(f) || f.removeAttribute(a), Ir.delete(f)), h || f.removeAttribute(n);
    }), nl--, nl || (Sa = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Rr = {});
  };
}, R2 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), o = O2(e);
  return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live], script"))), I2(a, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function F2(e) {
  let t;
  te(() => Kt(e), (n) => {
    n ? t = R2(n) : t && t();
  }), Ye(() => {
    t && t();
  });
}
function al(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ul(e, t, n = ".", a) {
  if (!al(t))
    return Ul(e, {}, n, a);
  const o = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (a && a(o, r, s, n) || (Array.isArray(s) && Array.isArray(o[r]) ? o[r] = [...s, ...o[r]] : al(s) && al(o[r]) ? o[r] = Ul(
      s,
      o[r],
      (n ? `${n}.` : "") + r.toString(),
      a
    ) : o[r] = s));
  }
  return o;
}
function V2(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, a) => Ul(n, a, "", e), {})
  );
}
const N2 = V2(), L2 = o2(() => {
  const e = B(/* @__PURE__ */ new Map()), t = B(), n = S(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), a = _i({
    scrollBody: B(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", lf && (o == null || o()), t.value = void 0;
  };
  return te(n, (s, i) => {
    var f;
    if (!Wt)
      return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (f = a.scrollBody) != null && f.value ? typeof a.scrollBody.value == "object" ? N2({
      padding: a.scrollBody.value.padding === !0 ? u : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? u : a.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), lf && (o = rm(
      document,
      "touchmove",
      (p) => H2(p),
      { passive: !1 }
    )), se(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function z2(e) {
  const t = Math.random().toString(36).substring(2, 7), n = L2();
  n.value.set(t, e ?? !1);
  const a = S({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return g2(() => {
    n.value.delete(t);
  }), a;
}
function fm(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : fm(n);
  }
}
function H2(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && fm(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const U2 = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = sm();
    return (n, a) => l(t) || n.forceMount ? (g(), w(ia, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : ie("", !0);
  }
});
function ma(e) {
  const t = He(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (o[r] = s), o;
  }, {}), a = Su(e);
  return S(() => {
    const o = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      o[Ha(s)] = r[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (a.value[i] !== void 0 && (s[i] = a.value[i]), s), {});
  });
}
function bn(e, t) {
  const n = ma(e), a = t ? A2(t) : {};
  return S(() => ({
    ...n.value,
    ...a
  }));
}
const [pm, W2] = xt("AvatarRoot"), K2 = /* @__PURE__ */ _({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return Oe(), W2({
      imageLoadingStatus: B("idle")
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
}), j2 = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = pm();
    Oe();
    const a = B(t.delayMs === void 0);
    return xe((o) => {
      if (t.delayMs && Wt) {
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
    }, 8, ["as-child", "as"])) : ie("", !0);
  }
});
function df(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Y2(e, { referrerPolicy: t, crossOrigin: n } = {}) {
  const a = B(!1), o = B(null), r = S(() => a.value ? (!o.value && Wt && (o.value = new window.Image()), o.value) : null), s = B(df(r.value, e.value)), i = (u) => () => {
    a.value && (s.value = u);
  };
  return ue(() => {
    a.value = !0, xe((u) => {
      const d = r.value;
      if (!d)
        return;
      s.value = df(d, e.value);
      const c = i("loaded"), f = i("error");
      d.addEventListener("load", c), d.addEventListener("error", f), t != null && t.value && (d.referrerPolicy = t.value), typeof (n == null ? void 0 : n.value) == "string" && (d.crossOrigin = n.value), u(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", f);
      });
    });
  }), Ye(() => {
    a.value = !1;
  }), s;
}
const G2 = /* @__PURE__ */ _({
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
    const i = pm(), u = Y2(o, { referrerPolicy: r, crossOrigin: s });
    return te(
      u,
      (d) => {
        a("loadingStatusChange", d), d !== "idle" && (i.imageLoadingStatus.value = d);
      },
      { immediate: !0 }
    ), (d, c) => la((g(), w(l(Te), {
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
      [ti, l(u) === "loaded"]
    ]);
  }
});
function Rn() {
  const e = B(), t = S(() => {
    var n, a;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (a = e.value) == null ? void 0 : a.$el.nextElementSibling : Kt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function q2() {
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
function X2(e) {
  return S(() => {
    var t;
    return m2(e) ? !!((t = Kt(e)) != null && t.closest("form")) : !0;
  });
}
const cf = "data-reka-collection-item";
function Ln(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, a = `${t}CollectionProvider`;
  let o;
  if (n) {
    const c = B(/* @__PURE__ */ new Map());
    o = {
      collectionRef: B(),
      itemMap: c
    }, tn(a, o);
  } else
    o = ua(a);
  const r = (c = !1) => {
    const f = o.collectionRef.value;
    if (!f)
      return [];
    const p = Array.from(f.querySelectorAll(`[${cf}]`)), v = Array.from(o.itemMap.value.values()).sort(
      (m, b) => p.indexOf(m.ref) - p.indexOf(b.ref)
    );
    return c ? v : v.filter((m) => m.ref.dataset.disabled !== "");
  }, s = _({
    name: "CollectionSlot",
    setup(c, { slots: f }) {
      const { primitiveElement: p, currentElement: h } = Rn();
      return te(h, () => {
        o.collectionRef.value = h.value;
      }), () => tt(zl, { ref: p }, f);
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
      const { primitiveElement: h, currentElement: v } = Rn();
      return xe((m) => {
        if (v.value) {
          const b = eh(v.value);
          o.itemMap.value.set(b, { ref: v.value, value: c.value }), m(() => o.itemMap.value.delete(b));
        }
      }), () => tt(zl, { ...p, [cf]: "", ref: h }, f);
    }
  }), u = S(() => Array.from(o.itemMap.value.values())), d = S(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: s, CollectionItem: i };
}
const J2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Z2(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Q2(e, t, n) {
  const a = Z2(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return J2[a];
}
const ff = /* @__PURE__ */ _({
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
    const t = e, { primitiveElement: n, currentElement: a } = Rn(), o = S(() => t.checked ?? t.value);
    return te(o, (r, s) => {
      if (!a.value)
        return;
      const i = a.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== s) {
        const f = new Event("input", { bubbles: !0 }), p = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(f), i.dispatchEvent(p);
      }
    }), (r, s) => (g(), w(om, D({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), ek = /* @__PURE__ */ _({
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
    return (o, r) => n.value ? (g(), w(ff, D({ key: o.name }, { ...t, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (g(!0), L(le, { key: 1 }, Ee(a.value, (s) => (g(), w(ff, D({
      key: s.name,
      ref_for: !0
    }, { ...t, ...o.$attrs }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [hm, tk] = xt("PopperRoot"), nk = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = B();
    return tk({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, a) => x(n.$slots, "default");
  }
}), ak = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Oe(), o = hm();
    return Mu(() => {
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
}), ok = /* @__PURE__ */ _({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const { forwardRef: t } = Oe();
    return (n, a) => (g(), w(l(ak), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [
        O(l(Te), D({
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
function rk(e) {
  return e !== null;
}
function sk(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, $, k;
      const { placement: n, rects: a, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [d, c] = Wl(n), f = { start: "0%", center: "50%", end: "100%" }[c], p = ((($ = o.arrow) == null ? void 0 : $.x) ?? 0) + i / 2, h = (((k = o.arrow) == null ? void 0 : k.y) ?? 0) + u / 2;
      let v = "", m = "";
      return d === "bottom" ? (v = s ? f : `${p}px`, m = `${-u}px`) : d === "top" ? (v = s ? f : `${p}px`, m = `${a.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, m = s ? f : `${h}px`) : d === "left" && (v = `${a.floating.width + u}px`, m = s ? f : `${h}px`), { data: { x: v, y: m } };
    }
  };
}
function Wl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function ik(e) {
  const t = B(), n = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), a = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = Kt(e);
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
const lk = {
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
}, [ER, uk] = xt("PopperContent"), dk = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Eu({
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
    ...lk
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = hm(), { forwardRef: r, currentElement: s } = Oe(), i = B(), u = B(), { width: d, height: c } = ik(u), f = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), p = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = S(() => ({
      padding: p.value,
      boundary: h.value.filter(rk),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = a2(() => [
      Rh({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && xs({
        ...v.value
      }),
      n.avoidCollisions && Fh({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Lh() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && xs({
        ...v.value
      }),
      Vh({
        ...v.value,
        apply: ({ elements: I, rects: F, availableWidth: Y, availableHeight: z }) => {
          const { width: H, height: ee } = F.reference, re = I.floating.style;
          re.setProperty(
            "--reka-popper-available-width",
            `${Y}px`
          ), re.setProperty(
            "--reka-popper-available-height",
            `${z}px`
          ), re.setProperty(
            "--reka-popper-anchor-width",
            `${H}px`
          ), re.setProperty(
            "--reka-popper-anchor-height",
            `${ee}px`
          );
        }
      }),
      u.value && zh({ element: u.value, padding: n.arrowPadding }),
      sk({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Nh({ strategy: "referenceHidden", ...v.value })
    ]), b = S(() => n.reference ?? o.anchor.value), { floatingStyles: $, placement: k, isPositioned: C, middlewareData: A } = Uh(
      b,
      i,
      {
        strategy: n.positionStrategy,
        placement: f,
        whileElementsMounted: (...I) => Ih(...I, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), T = S(
      () => Wl(k.value)[0]
    ), M = S(
      () => Wl(k.value)[1]
    );
    Mu(() => {
      C.value && a("placed");
    });
    const E = S(
      () => {
        var I;
        return ((I = A.value.arrow) == null ? void 0 : I.centerOffset) !== 0;
      }
    ), N = B("");
    xe(() => {
      s.value && (N.value = window.getComputedStyle(s.value).zIndex);
    });
    const R = S(() => {
      var I;
      return ((I = A.value.arrow) == null ? void 0 : I.x) ?? 0;
    }), P = S(() => {
      var I;
      return ((I = A.value.arrow) == null ? void 0 : I.y) ?? 0;
    });
    return uk({
      placedSide: T,
      onArrowChange: (I) => u.value = I,
      arrowX: R,
      arrowY: P,
      shouldHideArrow: E
    }), (I, F) => {
      var Y, z, H;
      return g(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: jt({
          ...l($),
          transform: l(C) ? l($).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N.value,
          "--reka-popper-transform-origin": [
            (Y = l(A).transformOrigin) == null ? void 0 : Y.x,
            (z = l(A).transformOrigin) == null ? void 0 : z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = l(A).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        O(l(Te), D({ ref: l(r) }, I.$attrs, {
          "as-child": n.asChild,
          as: I.as,
          "data-side": T.value,
          "data-align": M.value,
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
function ck(e) {
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
function fk(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => Vo(a, t, n)) : Vo(e, t, n);
}
function Vo(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Hl(e, t);
}
function pk(e) {
  const t = yi("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, r) => {
      t.value = t.value + o;
      {
        const s = qn(), i = r.map((p) => {
          var h, v;
          return {
            ...p,
            textValue: ((h = p.value) == null ? void 0 : h.textValue) ?? ((v = p.ref.textContent) == null ? void 0 : v.trim()) ?? ""
          };
        }), u = i.find((p) => p.ref === s), d = i.map((p) => p.textValue), c = vk(d, t.value, u == null ? void 0 : u.textValue), f = i.find((p) => p.textValue === c);
        return f && f.ref.focus(), f == null ? void 0 : f.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function hk(e, t) {
  return e.map((n, a) => e[(t + a) % e.length]);
}
function vk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let s = hk(e, Math.max(r, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const u = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function mk(e, t, n) {
  const a = e.findIndex((i) => Hl(i, t)), o = e.findIndex((i) => Hl(i, n));
  if (a === -1 || o === -1)
    return [];
  const [r, s] = [a, o].sort((i, u) => i - u);
  return e.slice(r, s + 1);
}
const [xi, gk] = xt("ListboxRoot"), yk = /* @__PURE__ */ _({
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
    const a = e, o = n, { multiple: r, highlightOnHover: s, orientation: i, disabled: u, selectionBehavior: d, dir: c } = me(a), { getItems: f } = Ln({ isProvider: !0 }), { handleTypeaheadSearch: p } = pk(), { primitiveElement: h, currentElement: v } = Rn(), m = q2(), b = kd(c), $ = X2(v), k = B(), C = B(!1), A = B(!0), T = Xa(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (r.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    });
    function M(Q) {
      if (C.value = !0, a.multiple) {
        const oe = Array.isArray(T.value) ? [...T.value] : [], U = oe.findIndex((G) => Vo(G, Q, a.by));
        a.selectionBehavior === "toggle" ? (U === -1 ? oe.push(Q) : oe.splice(U, 1), T.value = oe) : (T.value = [Q], k.value = Q);
      } else
        a.selectionBehavior === "toggle" && Vo(T.value, Q, a.by) ? T.value = void 0 : T.value = Q;
      setTimeout(() => {
        C.value = !1;
      }, 1);
    }
    const E = B(null), N = B(null), R = B(!1), P = B(!1), I = es(), F = es(), Y = es();
    function z() {
      return f().map((Q) => Q.ref).filter((Q) => Q.dataset.disabled !== "");
    }
    function H(Q, oe = !0) {
      if (!Q)
        return;
      E.value = Q, A.value && E.value.focus(), oe && E.value.scrollIntoView({ block: "nearest" });
      const U = f().find((G) => G.ref === Q);
      o("highlight", U);
    }
    function ee(Q) {
      if (R.value)
        Y.trigger(Q);
      else {
        const oe = f().find((U) => Vo(U.value, Q, a.by));
        oe && (E.value = oe.ref, H(oe.ref));
      }
    }
    function re(Q) {
      E.value && E.value.isConnected && (Q.preventDefault(), Q.stopPropagation(), P.value || E.value.click());
    }
    function be(Q) {
      if (A.value) {
        if (C.value = !0, R.value)
          F.trigger(Q);
        else {
          const oe = Q.altKey || Q.ctrlKey || Q.metaKey;
          if (oe && Q.key === "a" && r.value) {
            const U = f(), G = U.map((ne) => ne.value);
            T.value = [...G], Q.preventDefault(), H(U[U.length - 1].ref);
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
    function q() {
      P.value = !0;
    }
    function de() {
      requestAnimationFrame(() => {
        P.value = !1;
      });
    }
    function he() {
      se(() => {
        const Q = new KeyboardEvent("keydown", { key: "PageUp" });
        ct(Q);
      });
    }
    function Xe(Q) {
      const oe = E.value;
      oe != null && oe.isConnected && (N.value = oe), E.value = null, o("leave", Q);
    }
    function ot(Q) {
      var U, G;
      const oe = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((U = Q.currentTarget) == null || U.dispatchEvent(oe), o("entryFocus", oe), !oe.defaultPrevented)
        if (N.value)
          H(N.value);
        else {
          const ne = (G = z()) == null ? void 0 : G[0];
          H(ne);
        }
    }
    function ct(Q) {
      const oe = Q2(Q, i.value, b.value);
      if (!oe)
        return;
      let U = z();
      if (E.value) {
        if (oe === "last")
          U.reverse();
        else if (oe === "prev" || oe === "next") {
          oe === "prev" && U.reverse();
          const G = U.indexOf(E.value);
          U = U.slice(G + 1);
        }
        gt(Q, U[0]);
      }
      if (U.length) {
        const G = !E.value && oe === "prev" ? U.length - 1 : 0;
        H(U[G]);
      }
      if (R.value)
        return F.trigger(Q);
    }
    function gt(Q, oe) {
      var G;
      if (!(R.value || a.selectionBehavior !== "replace" || !r.value || !Array.isArray(T.value) || (Q.altKey || Q.ctrlKey || Q.metaKey) && !Q.shiftKey) && Q.shiftKey) {
        const ne = f().filter((we) => we.ref.dataset.disabled !== "");
        let K = (G = ne.find((we) => we.ref === oe)) == null ? void 0 : G.value;
        if (Q.key === m.END ? K = ne[ne.length - 1].value : Q.key === m.HOME && (K = ne[0].value), !K || !k.value)
          return;
        const Re = mk(ne.map((we) => we.value), k.value, K);
        T.value = Re;
      }
    }
    async function Pt(Q) {
      if (await se(), R.value)
        I.trigger(Q);
      else {
        const oe = z(), U = oe.find((G) => G.dataset.state === "checked");
        U ? H(U) : oe.length && H(oe[0]);
      }
    }
    return te(T, () => {
      C.value || se(() => {
        Pt();
      });
    }, { immediate: !0, deep: !0 }), t({
      highlightedElement: E,
      highlightItem: ee,
      highlightFirstItem: he,
      highlightSelected: Pt,
      getItems: f
    }), gk({
      modelValue: T,
      // @ts-expect-error ignoring
      onValueChange: M,
      multiple: r,
      orientation: i,
      dir: b,
      disabled: u,
      highlightOnHover: s,
      highlightedElement: E,
      isVirtual: R,
      virtualFocusHook: I,
      virtualKeydownHook: F,
      virtualHighlightHook: Y,
      by: a.by,
      firstValue: k,
      selectionBehavior: d,
      focusable: A,
      onLeave: Xe,
      onEnter: ot,
      changeHighlight: H,
      onKeydownEnter: re,
      onKeydownNavigation: ct,
      onKeydownTypeAhead: be,
      onCompositionStart: q,
      onCompositionEnd: de,
      highlightFirstItem: he
    }), (Q, oe) => (g(), w(l(Te), {
      ref_key: "primitiveElement",
      ref: h,
      as: Q.as,
      "as-child": Q.asChild,
      dir: l(b),
      "data-disabled": l(u) ? "" : void 0,
      onPointerleave: Xe,
      onFocusout: oe[0] || (oe[0] = async (U) => {
        const G = U.relatedTarget || U.target;
        await se(), E.value && l(v) && !l(v).contains(G) && Xe(U);
      })
    }, {
      default: y(() => [
        x(Q.$slots, "default", { modelValue: l(T) }),
        l($) && Q.name ? (g(), w(l(ek), {
          key: 0,
          name: Q.name,
          value: l(T),
          disabled: l(u),
          required: Q.required
        }, null, 8, ["name", "value", "disabled", "required"])) : ie("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), [_n, bk] = xt("ComboboxRoot"), _k = /* @__PURE__ */ _({
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
    var F, Y, z;
    const a = e, o = n, { primitiveElement: r, currentElement: s } = Rn(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, dir: f } = me(a), p = kd(f), h = Xa(a, "modelValue", o, {
      defaultValue: a.defaultValue ?? (i.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), v = Xa(a, "open", o, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    async function m(H) {
      var ee, re;
      v.value = H, R.value = "", H ? (await se(), (ee = r.value) == null || ee.highlightSelected(), $.value = !0) : $.value = !1, (re = C.value) == null || re.focus(), setTimeout(() => {
        !H && a.resetSearchTermOnBlur && b.trigger();
      }, 1);
    }
    const b = es(), $ = B(!1), k = B(!1), C = B(), A = B(), T = S(() => {
      var H;
      return ((H = r.value) == null ? void 0 : H.highlightedElement) ?? void 0;
    }), M = B(/* @__PURE__ */ new Map()), E = B(/* @__PURE__ */ new Map()), { contains: N } = ck({ sensitivity: "base" }), R = B(""), P = S((H) => {
      if (!R.value || a.ignoreFilter || k.value)
        return {
          count: M.value.size,
          items: (H == null ? void 0 : H.items) ?? /* @__PURE__ */ new Map(),
          groups: (H == null ? void 0 : H.groups) ?? new Set(E.value.keys())
        };
      let ee = 0;
      const re = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Set();
      for (const [q, de] of M.value) {
        const he = N(de, R.value);
        re.set(q, he ? 1 : 0), he && ee++;
      }
      for (const [q, de] of E.value)
        for (const he of de)
          if (re.get(he) > 0) {
            be.add(q);
            break;
          }
      return {
        count: ee,
        items: re,
        groups: be
      };
    }), I = He();
    return ue(() => {
      var H, ee, re;
      I != null && I.exposed && (I.exposed.highlightItem = (H = r.value) == null ? void 0 : H.highlightItem, I.exposed.highlightFirstItem = (ee = r.value) == null ? void 0 : ee.highlightFirstItem, I.exposed.highlightSelected = (re = r.value) == null ? void 0 : re.highlightSelected);
    }), t({
      filtered: P,
      highlightedElement: T,
      highlightItem: (F = r.value) == null ? void 0 : F.highlightItem,
      highlightFirstItem: (Y = r.value) == null ? void 0 : Y.highlightFirstItem,
      highlightSelected: (z = r.value) == null ? void 0 : z.highlightSelected
    }), bk({
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
      triggerElement: A,
      onTriggerElementChange: (H) => A.value = H,
      parentElement: s,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: b.on,
      allItems: M,
      allGroups: E,
      filterSearch: R,
      filterState: P,
      ignoreFilter: d
    }), (H, ee) => (g(), w(l(nk), null, {
      default: y(() => [
        O(l(yk), D({
          ref_key: "primitiveElement",
          ref: r
        }, H.$attrs, {
          modelValue: l(h),
          "onUpdate:modelValue": ee[0] || (ee[0] = (re) => ut(h) ? h.value = re : null),
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
          onHighlight: ee[1] || (ee[1] = (re) => o("highlight", re))
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
}), wk = /* @__PURE__ */ _({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const { CollectionSlot: t } = Ln(), n = xi(), a = yi(!1, 10);
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
          onMousedown: r[0] || (r[0] = Ie((s) => a.value = !0, ["left"])),
          onFocus: r[1] || (r[1] = (s) => {
            l(a) || l(n).onEnter(s);
          }),
          onKeydown: [
            r[2] || (r[2] = je(Ie((s) => {
              l(n).focusable.value && l(n).onKeydownNavigation(s);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            je(l(n).onKeydownEnter, ["enter"]),
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
}), [MR, xk] = xt("ComboboxContent"), Ck = /* @__PURE__ */ _({
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
    const n = e, a = t, { position: o } = me(n), r = _n(), { forwardRef: s, currentElement: i } = Oe();
    z2(n.bodyLock), F2(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = ma(u.value), c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    xk({ position: o });
    const f = B(!1);
    return ue(() => {
      r.inputElement.value && (f.value = i.value.contains(r.inputElement.value), f.value && r.inputElement.value.focus());
    }), Ye(() => {
      var p;
      f.value && ((p = r.triggerElement.value) == null || p.focus());
    }), (p, h) => (g(), w(l(wk), { "as-child": "" }, {
      default: y(() => [
        O(l(dm), {
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
            (g(), w(lt(l(o) === "popper" ? l(dk) : l(Te)), D({ ...p.$attrs, ...l(d) }, {
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
}), DR = /* @__PURE__ */ _({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = _n();
    function a() {
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus());
    }
    return (o, r) => (g(), w(l(Te), D({
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
}), $k = /* @__PURE__ */ _({
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
    const o = bn(e, t), { forwardRef: r } = Oe(), s = _n();
    return s.contentId || (s.contentId = Nn(void 0, "reka-combobox-content")), (i, u) => (g(), w(l(wi), {
      present: i.forceMount || l(s).open.value
    }, {
      default: y(() => [
        O(Ck, D({ ...l(o), ...i.$attrs }, { ref: l(r) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kk = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = _n(), a = S(
      () => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0
    );
    return (o, r) => a.value ? (g(), w(l(Te), X(D({ key: 0 }, t)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          r[0] || (r[0] = ae("No options"))
        ])
      ]),
      _: 3
    }, 16)) : ie("", !0);
  }
}), [BR, Sk] = xt("ListboxGroup"), Tk = /* @__PURE__ */ _({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Nn(void 0, "reka-listbox-group");
    return Sk({ id: n }), (a, o) => (g(), w(l(Te), D({ role: "group" }, t, { "aria-labelledby": l(n) }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), [vm, Ak] = xt("ComboboxGroup"), Ek = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Nn(void 0, "reka-combobox-group"), a = _n(), o = S(() => a.ignoreFilter.value ? !0 : a.filterSearch.value ? a.filterState.value.groups.has(n) : !0), r = Ak({
      id: n,
      labelId: ""
    });
    return ue(() => {
      a.allGroups.value.has(n) || a.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ye(() => {
      a.allGroups.value.delete(n);
    }), (s, i) => (g(), w(l(Tk), D({
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
}), Mk = /* @__PURE__ */ _({
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
    const n = e, o = Xa(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = xi(), { primitiveElement: s, currentElement: i } = Rn(), u = S(() => n.disabled || r.disabled.value || !1), d = B();
    return Jp(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), ue(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ye(() => {
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
        je(Ie(l(r).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        je(l(r).onKeydownEnter, ["enter"])
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
}), Dk = /* @__PURE__ */ _({
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
    const n = e, a = t, o = _n(), r = xi(), { primitiveElement: s, currentElement: i } = Rn(), u = Xa(n, "modelValue", a, {
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
      o.open.value ? o.filterSearch.value = h.value : (o.onOpenChange(!0), se(() => {
        h.value && (o.filterSearch.value = h.value, r.highlightFirstItem());
      }));
    }
    function f() {
      const p = o.modelValue.value;
      n.displayValue ? u.value = n.displayValue(p) : !o.multiple.value && p && !Array.isArray(p) && typeof p != "object" ? u.value = p.toString() : u.value = "", se(() => {
        u.value = u.value;
      });
    }
    return o.onResetSearchTerm(() => {
      f();
    }), te(o.modelValue, async () => {
      !o.isUserInputted.value && o.resetSearchTermOnSelect.value && f();
    }, { immediate: !0, deep: !0 }), te(o.filterState, () => {
      o.isVirtual.value || r.highlightFirstItem();
    }), (p, h) => (g(), w(l(Mk), {
      ref_key: "primitiveElement",
      ref: s,
      modelValue: l(u),
      "onUpdate:modelValue": h[0] || (h[0] = (v) => ut(u) ? u.value = v : null),
      as: p.as,
      "as-child": p.asChild,
      "auto-focus": p.autoFocus,
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: je(Ie(d, ["prevent"]), ["down", "up"])
    }, {
      default: y(() => [
        x(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
  }
}), Bk = "listbox.select", [Ok, Pk] = xt("ListboxItem"), Ik = /* @__PURE__ */ _({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Nn(void 0, "reka-listbox-item"), { CollectionItem: r } = Ln(), { forwardRef: s, currentElement: i } = Oe(), u = xi(), d = S(() => i.value === u.highlightedElement.value), c = S(() => fk(u.modelValue.value, n.value, u.by)), f = S(() => u.disabled.value || n.disabled);
    async function p(v) {
      a("select", v), !(v != null && v.defaultPrevented) && !f.value && v && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function h(v) {
      const m = { originalEvent: v, value: n.value };
      Sd(Bk, p, m);
    }
    return Pk({
      isSelected: c
    }), (v, m) => (g(), w(l(r), { value: v.value }, {
      default: y(() => [
        Ny([d.value, c.value], () => O(l(Te), D({ id: l(o) }, v.$attrs, {
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
          onKeydown: je(Ie(h, ["prevent"]), ["space"]),
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
}), Rk = /* @__PURE__ */ _({
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
    const n = e, a = t, o = Nn(void 0, "reka-combobox-item"), r = _n(), s = vm(null), { primitiveElement: i, currentElement: u } = Rn();
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
    }), Ye(() => {
      r.allItems.value.delete(o);
    }), (c, f) => d.value ? (g(), w(l(Ik), D({ key: 0 }, n, {
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
          ae(ce(c.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "disabled"])) : ie("", !0);
  }
}), Fk = /* @__PURE__ */ _({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = Ok();
    return (a, o) => l(n).isSelected.value ? (g(), w(l(Te), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : ie("", !0);
  }
}), OR = /* @__PURE__ */ _({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Fk), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vk = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    Oe();
    const n = vm({ id: "", labelId: "" });
    return n.labelId || (n.labelId = Nn(void 0, "reka-combobox-group-label")), (a, o) => (g(), w(l(Te), D(t, {
      id: l(n).labelId
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Nk = /* @__PURE__ */ _({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(U2), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lk = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return Oe(), (n, a) => (g(), w(l(Te), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), PR = /* @__PURE__ */ _({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: a } = Oe(), o = _n(), r = S(() => t.disabled || o.disabled.value || !1);
    return ue(() => {
      a.value && o.onTriggerElementChange(a.value);
    }), (s, i) => (g(), w(l(Te), D(t, {
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
function zk(e) {
  const t = _i({
    nonce: B()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const Hk = /* @__PURE__ */ _({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = Oe(), { nonce: a } = me(t), o = zk(a), r = _n();
    return (s, i) => (g(), L(le, null, [
      O(l(Te), D({ ...s.$attrs, ...t }, {
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
function Ci(e) {
  return e ? "open" : "closed";
}
function mm(e, t) {
  return `${e}-trigger-${t}`;
}
function Td(e, t) {
  return `${e}-content-${t}`;
}
const Uk = "navigationMenu.linkSelect", ts = "navigationMenu.rootContentDismiss";
function Kl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const o = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || o ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function gm(e) {
  const t = qn();
  return e.some((n) => n === t ? !0 : (n.focus(), qn() !== t));
}
function Wk(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function ym(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const [ga, Kk] = xt(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), jk = /* @__PURE__ */ _({
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
    const n = e, o = Xa(n, "modelValue", t, {
      defaultValue: n.defaultValue ?? "",
      passive: n.modelValue === void 0
    }), r = B(""), { forwardRef: s, currentElement: i } = Oe(), u = B(), d = B(), c = B(), { getItems: f, CollectionSlot: p } = Ln({ key: "NavigationMenu", isProvider: !0 }), { delayDuration: h, skipDelayDuration: v, dir: m, disableClickTrigger: b, disableHoverTrigger: $, unmountOnHide: k } = me(n), C = kd(m), A = yi(!1, v), T = S(() => o.value !== "" || A.value ? 150 : h.value), M = v2((E) => {
      typeof E == "string" && (r.value = o.value, o.value = E);
    }, T);
    return xe(() => {
      if (!o.value)
        return;
      const E = f().map((N) => N.ref);
      c.value = E.find(
        (N) => N.id.includes(o.value)
      );
    }), Kk({
      isRootMenu: !0,
      modelValue: o,
      previousValue: r,
      baseId: Nn(void 0, "reka-navigation-menu"),
      disableClickTrigger: b,
      disableHoverTrigger: $,
      dir: C,
      unmountOnHide: k,
      orientation: n.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      activeTrigger: c,
      onIndicatorTrackChange: (E) => {
        u.value = E;
      },
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      onTriggerEnter: (E) => {
        M(E);
      },
      onTriggerLeave: () => {
        A.value = !0, M("");
      },
      onContentEnter: () => {
        M();
      },
      onContentLeave: () => {
        n.disablePointerLeaveClose || M("");
      },
      onItemSelect: (E) => {
        r.value = o.value, o.value = E;
      },
      onItemDismiss: () => {
        r.value = o.value, o.value = "";
      }
    }), (E, N) => (g(), w(l(p), null, {
      default: y(() => [
        O(l(Te), {
          ref: l(s),
          "aria-label": "Main",
          as: E.as,
          "as-child": E.asChild,
          "data-orientation": E.orientation,
          dir: l(C),
          "data-reka-navigation-menu": ""
        }, {
          default: y(() => [
            x(E.$slots, "default", { modelValue: l(o) })
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-orientation", "dir"])
      ]),
      _: 3
    }));
  }
}), [Ad, Yk] = xt("NavigationMenuItem"), Gk = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(e) {
    const t = e;
    Oe();
    const { getItems: n } = Ln({ key: "NavigationMenu" }), a = ga(), o = Nn(t.value), r = B(), s = B(), i = Td(a.baseId, o);
    let u = () => ({});
    const d = B(!1);
    async function c(v = "start") {
      const m = document.getElementById(i);
      if (m) {
        u();
        const b = Kl(m);
        b.length && gm(v === "start" ? b : b.reverse());
      }
    }
    function f() {
      const v = document.getElementById(i);
      if (v) {
        const m = Kl(v);
        m.length && (u = Wk(m));
      }
    }
    Yk({
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
      const m = qn();
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
      const $ = im(v, m, void 0, {
        itemsArray: b,
        loop: !1
      });
      $ && ($ == null || $.focus()), v.preventDefault(), v.stopPropagation();
    }
    return (v, m) => (g(), w(l(Te), {
      "as-child": v.asChild,
      as: v.as,
      "data-menu-item": "",
      onKeydown: je(h, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: y(() => [
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), qk = /* @__PURE__ */ _({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getItems: o } = Ln({ key: "NavigationMenu" }), { forwardRef: r, currentElement: s } = Oe(), i = ga(), u = Ad(), d = mm(i.baseId, u.value), c = Td(i.baseId, u.value), f = B(null), p = S(() => {
      const k = o().map((N) => N.ref.id.split("trigger-")[1]);
      i.dir.value === "rtl" && k.reverse();
      const C = k.indexOf(i.modelValue.value), A = k.indexOf(i.previousValue.value), T = u.value === i.modelValue.value, M = A === k.indexOf(u.value);
      if (!T && !M)
        return f.value;
      const E = (() => {
        if (C !== A) {
          if (T && A !== -1)
            return C > A ? "from-end" : "from-start";
          if (M && C !== -1)
            return C > A ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = E, E;
    });
    function h(k) {
      var A, T;
      if (a("focusOutside", k), a("interactOutside", k), k.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && k.preventDefault(), !k.defaultPrevented) {
        u.onContentFocusOutside();
        const M = k.target;
        (T = (A = i.rootNavigationMenu) == null ? void 0 : A.value) != null && T.contains(M) && k.preventDefault();
      }
    }
    function v(k) {
      var C;
      if (a("pointerDownOutside", k), !k.defaultPrevented) {
        const A = k.target, T = o().some(
          (E) => E.ref.contains(A)
        ), M = i.isRootMenu && ((C = i.viewport.value) == null ? void 0 : C.contains(A));
        (T || M || !i.isRootMenu) && k.preventDefault();
      }
    }
    xe((k) => {
      const C = s.value;
      if (i.isRootMenu && C) {
        const A = () => {
          var T;
          i.onItemDismiss(), u.onRootContentClose(), C.contains(qn()) && ((T = u.triggerRef.value) == null || T.focus());
        };
        C.addEventListener(ts, A), k(
          () => C.removeEventListener(ts, A)
        );
      }
    });
    function m(k) {
      var C, A;
      a("escapeKeyDown", k), k.defaultPrevented || (i.onItemDismiss(), (A = (C = u.triggerRef) == null ? void 0 : C.value) == null || A.focus(), u.wasEscapeCloseRef.value = !0);
    }
    function b(k) {
      var E;
      if (k.target.closest("[data-reka-navigation-menu]") !== i.rootNavigationMenu.value)
        return;
      const C = k.altKey || k.ctrlKey || k.metaKey, A = k.key === "Tab" && !C, T = Kl(k.currentTarget);
      if (A) {
        const N = qn(), R = T.findIndex(
          (F) => F === N
        ), I = k.shiftKey ? T.slice(0, R).reverse() : T.slice(R + 1, T.length);
        if (gm(I))
          k.preventDefault();
        else {
          (E = u.focusProxyRef.value) == null || E.focus();
          return;
        }
      }
      const M = im(
        k,
        qn(),
        void 0,
        { itemsArray: T, loop: !1, enableIgnoredElement: !0 }
      );
      M == null || M.focus();
    }
    function $() {
      var C;
      const k = new Event(ts, {
        bubbles: !0,
        cancelable: !0
      });
      (C = s.value) == null || C.dispatchEvent(k);
    }
    return (k, C) => (g(), w(l(dm), D({
      id: l(c),
      ref: l(r),
      "aria-labelledby": l(d),
      "data-motion": p.value,
      "data-state": l(Ci)(l(i).modelValue.value === l(u).value),
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
}), Xk = /* @__PURE__ */ _({
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
    const n = e, a = t, o = bn(i2(n, "forceMount"), a), { forwardRef: r } = Oe(), s = ga(), i = Ad(), u = S(() => i.value === s.modelValue.value), d = S(() => s.viewport.value && !s.modelValue.value && s.previousValue.value ? s.previousValue.value === i.value : !1);
    return (c, f) => (g(), w(ia, {
      to: l(Wt) && l(s).viewport.value ? l(s).viewport.value : "body",
      disabled: l(Wt) && l(s).viewport.value ? !l(s).viewport.value : !0
    }, [
      O(l(wi), {
        present: c.forceMount || u.value || d.value,
        "force-mount": !l(s).unmountOnHide.value
      }, {
        default: y(({ present: p }) => [
          O(qk, D({
            ref: l(r),
            "data-state": l(Ci)(u.value),
            style: {
              pointerEvents: !u.value && l(s).isRootMenu ? "none" : void 0
            }
          }, { ...c.$attrs, ...l(o) }, {
            hidden: !p,
            onPointerenter: f[0] || (f[0] = (h) => l(s).onContentEnter(l(i).value)),
            onPointerleave: f[1] || (f[1] = (h) => l(ym)(() => l(s).onContentLeave())(h)),
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
}), Jk = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = Oe(), a = ga(), o = B(), r = S(() => a.orientation === "horizontal"), s = S(() => !!a.modelValue.value), { activeTrigger: i } = a;
    function u() {
      i.value && (o.value = {
        size: r.value ? i.value.offsetWidth : i.value.offsetHeight,
        position: r.value ? i.value.offsetLeft : i.value.offsetTop
      });
    }
    return xe(() => {
      a.modelValue.value && u();
    }), Ss(i, u), Ss(a.indicatorTrack, u), (d, c) => l(a).indicatorTrack.value ? (g(), w(ia, {
      key: 0,
      to: l(a).indicatorTrack.value
    }, [
      O(l(wi), {
        present: d.forceMount || s.value
      }, {
        default: y(() => [
          O(l(Te), D({
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
    ], 8, ["to"])) : ie("", !0);
  }
}), Zk = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, { CollectionItem: o } = Ln({ key: "NavigationMenu" });
    Oe();
    async function r(s) {
      var u;
      const i = new CustomEvent(Uk, {
        bubbles: !0,
        cancelable: !0,
        detail: {
          originalEvent: s
        }
      });
      if (a("select", i), !i.defaultPrevented && !s.metaKey) {
        const d = new CustomEvent(
          ts,
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
}), Qk = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(e) {
    const t = e, n = ga(), { forwardRef: a, currentElement: o } = Oe();
    return ue(() => {
      n.onIndicatorTrackChange(o.value);
    }), (r, s) => (g(), w(l(Te), {
      ref: l(a),
      style: { position: "relative" }
    }, {
      default: y(() => [
        O(l(Te), D(r.$attrs, {
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
}), eS = ["aria-owns"], tS = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ga(), a = Ad(), { CollectionItem: o } = Ln({ key: "NavigationMenu" }), { forwardRef: r, currentElement: s } = Oe(), i = B(""), u = B(""), d = yi(!1, 300), c = B(!1), f = S(() => a.value === n.modelValue.value);
    ue(() => {
      a.triggerRef = s, i.value = mm(n.baseId, a.value), u.value = Td(n.baseId, a.value);
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
      a.focusProxyRef.value = Kt(C);
    }
    function k(C) {
      const A = document.getElementById(a.contentId), T = C.relatedTarget, M = T === s.value, E = A == null ? void 0 : A.contains(T);
      (M || !E) && a.onFocusProxyEnter(M ? "start" : "end");
    }
    return (C, A) => (g(), L(le, null, [
      O(l(o), null, {
        default: y(() => [
          O(l(Te), D({
            id: i.value,
            ref: l(r),
            disabled: C.disabled,
            "data-disabled": C.disabled ? "" : void 0,
            "data-state": l(Ci)(f.value),
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
        O(l(om), {
          ref: $,
          "aria-hidden": "true",
          tabindex: 0,
          onFocus: k
        }),
        l(n).viewport ? (g(), L("span", {
          key: 0,
          "aria-owns": u.value
        }, null, 8, eS)) : ie("", !0)
      ], 64)) : ie("", !0)
    ], 64));
  }
}), nS = /* @__PURE__ */ _({
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
    const t = e, { forwardRef: n, currentElement: a } = Oe(), o = ga(), { activeTrigger: r, rootNavigationMenu: s, modelValue: i } = o, u = B(), d = B(), c = S(() => !!o.modelValue.value);
    te(a, () => {
      o.onViewportChange(a.value);
    });
    const f = B();
    te([i, c], () => {
      a.value && requestAnimationFrame(() => {
        var m;
        const v = (m = a.value) == null ? void 0 : m.querySelector("[data-state=open]");
        f.value = v;
      });
    }, { immediate: !0, flush: "post" });
    function p() {
      if (f.value && r.value && s.value) {
        const v = document.documentElement.offsetWidth, m = document.documentElement.offsetHeight, b = s.value.getBoundingClientRect(), $ = r.value.getBoundingClientRect(), { offsetWidth: k, offsetHeight: C } = f.value, A = $.left - b.left, T = $.top - b.top;
        let M = null, E = null;
        switch (t.align) {
          case "start":
            M = A, E = T;
            break;
          case "end":
            M = A - k + $.width, E = T - C + $.height;
            break;
          default:
            M = A - k / 2 + $.width / 2, E = T - C / 2 + $.height / 2;
        }
        const N = 10;
        M + b.left < N && (M = N - b.left);
        const R = M + b.left + k;
        R > v - N && (M -= R - v + N, M < N - b.left && (M = N - b.left)), E + b.top < N && (E = N - b.top);
        const P = E + b.top + C;
        P > m - N && (E -= P - m + N, E < N - b.top && (E = N - b.top)), M = Math.round(M), E = Math.round(E), d.value = {
          left: M,
          top: E
        };
      }
    }
    return Ss(f, () => {
      f.value && (u.value = {
        width: f.value.offsetWidth,
        height: f.value.offsetHeight
      }, p());
    }), Ss([(h = globalThis.document) == null ? void 0 : h.body, s], () => {
      p();
    }), (v, m) => (g(), w(l(wi), {
      present: v.forceMount || c.value,
      "force-mount": !l(o).unmountOnHide.value,
      onAfterLeave: m[2] || (m[2] = () => {
        u.value = void 0, d.value = void 0;
      })
    }, {
      default: y(({ present: b }) => {
        var $, k, C, A;
        return [
          O(l(Te), D(v.$attrs, {
            ref: l(n),
            as: v.as,
            "as-child": v.asChild,
            "data-state": l(Ci)(c.value),
            "data-orientation": l(o).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !c.value && l(o).isRootMenu ? "none" : void 0,
              "--reka-navigation-menu-viewport-width": u.value ? `${($ = u.value) == null ? void 0 : $.width}px` : void 0,
              "--reka-navigation-menu-viewport-height": u.value ? `${(k = u.value) == null ? void 0 : k.height}px` : void 0,
              "--reka-navigation-menu-viewport-left": d.value ? `${(C = d.value) == null ? void 0 : C.left}px` : void 0,
              "--reka-navigation-menu-viewport-top": d.value ? `${(A = d.value) == null ? void 0 : A.top}px` : void 0
            },
            hidden: !b,
            onPointerenter: m[0] || (m[0] = (T) => l(o).onContentEnter(l(o).modelValue.value)),
            onPointerleave: m[1] || (m[1] = (T) => l(ym)(() => l(o).onContentLeave())(T))
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
}), IR = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(K2), {
      "data-slot": "avatar",
      class: J(l(V)("relative flex size-8 shrink-0 overflow-hidden rounded-full", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function aS(e) {
  return Zs() ? (Qs(e), !0) : !1;
}
const ol = /* @__PURE__ */ new WeakMap(), oS = (...e) => {
  var t;
  const n = e[0], a = (t = He()) == null ? void 0 : t.proxy;
  if (a == null && !th())
    throw new Error("injectLocal must be called in setup");
  return a && ol.has(a) && n in ol.get(a) ? ol.get(a)[n] : ua(...e);
};
function rS(e) {
  if (!ut(e))
    return On(e);
  const t = new Proxy({}, {
    get(n, a, o) {
      return l(Reflect.get(e.value, a, o));
    },
    set(n, a, o) {
      return ut(e.value[a]) && !ut(o) ? e.value[a].value = o : e.value[a] = o, !0;
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
  return On(t);
}
function sS(e) {
  return rS(S(e));
}
function wn(e, ...t) {
  const n = t.flat(), a = n[0];
  return sS(() => Object.fromEntries(typeof a == "function" ? Object.entries(me(e)).filter(([o, r]) => !a(De(r), o)) : Object.entries(me(e)).filter((o) => !n.includes(o[0]))));
}
const iS = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const lS = (e) => typeof e < "u", uS = Object.prototype.toString, dS = (e) => uS.call(e) === "[object Object]", cS = () => {
};
function bm(...e) {
  if (e.length !== 1)
    return Su(...e);
  const t = e[0];
  return typeof t == "function" ? oo(Au(() => ({ get: t, set: cS }))) : B(t);
}
function fS(e, t) {
  function n(...a) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(o).catch(r);
    });
  }
  return n;
}
const _m = (e) => e();
function pS(e = _m, t = {}) {
  const {
    initialState: n = "active"
  } = t, a = bm(n === "active");
  function o() {
    a.value = !1;
  }
  function r() {
    a.value = !0;
  }
  const s = (...i) => {
    a.value && e(...i);
  };
  return { isActive: oo(a), pause: o, resume: r, eventFilter: s };
}
function pf(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function rl(e) {
  return Array.isArray(e) ? e : [e];
}
function hS(e) {
  return He();
}
function vS(e, t, n = {}) {
  const {
    eventFilter: a = _m,
    ...o
  } = n;
  return te(
    e,
    fS(
      a,
      t
    ),
    o
  );
}
function mS(e, t, n = {}) {
  const {
    eventFilter: a,
    initialState: o = "active",
    ...r
  } = n, { eventFilter: s, pause: i, resume: u, isActive: d } = pS(a, { initialState: o });
  return { stop: vS(
    e,
    t,
    {
      ...r,
      eventFilter: s
    }
  ), pause: i, resume: u, isActive: d };
}
function wm(e, t = !0, n) {
  hS() ? ue(e, n) : t ? e() : se(e);
}
function gS(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Go = iS ? window : void 0;
function xm(e) {
  var t;
  const n = De(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ts(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, a = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = S(() => {
    const i = rl(De(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = gS(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => xm(d))) != null ? u : [Go].filter((d) => d != null),
        rl(De(o.value ? e[1] : e[0])),
        rl(l(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        De(o.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const f = dS(c) ? { ...c } : c;
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
  return aS(n), s;
}
function yS() {
  const e = un(!1), t = He();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function bS(e) {
  const t = yS();
  return S(() => (t.value, !!e()));
}
const _S = Symbol("vueuse-ssr-width");
function wS() {
  const e = th() ? oS(_S, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Cm(e, t = {}) {
  const { window: n = Go, ssrWidth: a = wS() } = t, o = bS(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), r = un(typeof a == "number"), s = un(), i = un(!1), u = (d) => {
    i.value = d.matches;
  };
  return xe(() => {
    if (r.value) {
      r.value = !o.value;
      const d = De(e).split(",");
      i.value = d.some((c) => {
        const f = c.includes("not all"), p = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let v = !!(p || h);
        return p && v && (v = a >= pf(p[1])), h && v && (v = a <= pf(h[1])), f ? !v : v;
      });
      return;
    }
    o.value && (s.value = n.matchMedia(De(e)), i.value = s.value.matches);
  }), Ts(s, "change", u, { passive: !0 }), S(() => i.value);
}
function xS(e) {
  return JSON.parse(JSON.stringify(e));
}
const Fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vr = "__vueuse_ssr_handlers__", CS = /* @__PURE__ */ $S();
function $S() {
  return Vr in Fr || (Fr[Vr] = Fr[Vr] || {}), Fr[Vr];
}
function $m(e, t) {
  return CS[e] || t;
}
function kS(e) {
  return Cm("(prefers-color-scheme: dark)", e);
}
function SS(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const TS = {
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
}, hf = "vueuse-storage";
function AS(e, t, n, a = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: s = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: c,
    window: f = Go,
    eventFilter: p,
    onError: h = (z) => {
      console.error(z);
    },
    initOnMounted: v
  } = a, m = (c ? un : B)(typeof t == "function" ? t() : t), b = S(() => De(e));
  if (!n)
    try {
      n = $m("getDefaultStorage", () => {
        var z;
        return (z = Go) == null ? void 0 : z.localStorage;
      })();
    } catch (z) {
      h(z);
    }
  if (!n)
    return m;
  const $ = De(t), k = SS($), C = (o = a.serializer) != null ? o : TS[k], { pause: A, resume: T } = mS(
    m,
    () => P(m.value),
    { flush: r, deep: s, eventFilter: p }
  );
  te(b, () => F(), { flush: r });
  let M = !1;
  const E = (z) => {
    v && !M || F(z);
  }, N = (z) => {
    v && !M || Y(z);
  };
  f && i && (n instanceof Storage ? Ts(f, "storage", E, { passive: !0 }) : Ts(f, hf, N)), v ? wm(() => {
    M = !0, F();
  }) : F();
  function R(z, H) {
    if (f) {
      const ee = {
        key: b.value,
        oldValue: z,
        newValue: H,
        storageArea: n
      };
      f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", ee) : new CustomEvent(hf, {
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
  function F(z) {
    if (!(z && z.storageArea !== n)) {
      if (z && z.key == null) {
        m.value = $;
        return;
      }
      if (!(z && z.key !== b.value)) {
        A();
        try {
          (z == null ? void 0 : z.newValue) !== C.write(m.value) && (m.value = I(z));
        } catch (H) {
          h(H);
        } finally {
          z ? se(T) : T();
        }
      }
    }
  }
  function Y(z) {
    F(z.detail);
  }
  return m;
}
const ES = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function MS(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: a = "auto",
    window: o = Go,
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
  }, p = kS({ window: o }), h = S(() => p.value ? "dark" : "light"), v = u || (s == null ? bm(a) : AS(s, a, r, { window: o, listenToStorageChanges: i })), m = S(() => v.value === "auto" ? h.value : v.value), b = $m(
    "updateHTMLAttrs",
    (A, T, M) => {
      const E = typeof A == "string" ? o == null ? void 0 : o.document.querySelector(A) : xm(A);
      if (!E)
        return;
      const N = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
      let P = null;
      if (T === "class") {
        const F = M.split(/\s/g);
        Object.values(f).flatMap((Y) => (Y || "").split(/\s/g)).filter(Boolean).forEach((Y) => {
          F.includes(Y) ? N.add(Y) : R.add(Y);
        });
      } else
        P = { key: T, value: M };
      if (N.size === 0 && R.size === 0 && P === null)
        return;
      let I;
      c && (I = o.document.createElement("style"), I.appendChild(document.createTextNode(ES)), o.document.head.appendChild(I));
      for (const F of N)
        E.classList.add(F);
      for (const F of R)
        E.classList.remove(F);
      P && E.setAttribute(P.key, P.value), c && (o.getComputedStyle(I).opacity, document.head.removeChild(I));
    }
  );
  function $(A) {
    var T;
    b(t, n, (T = f[A]) != null ? T : A);
  }
  function k(A) {
    e.onChanged ? e.onChanged(A, $) : $(A);
  }
  te(m, k, { flush: "post", immediate: !0 }), wm(() => k(m.value));
  const C = S({
    get() {
      return d ? v.value : m.value;
    },
    set(A) {
      v.value = A;
    }
  });
  return Object.assign(C, { store: v, system: h, state: m });
}
function DS(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = ""
  } = e, a = MS({
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
function Ed(e, t, n, a = {}) {
  var o, r, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: f,
    shouldEmit: p
  } = a, h = He(), v = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (r = h == null ? void 0 : h.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const b = (C) => i ? typeof i == "function" ? i(C) : xS(C) : C, $ = () => lS(e[t]) ? b(e[t]) : f, k = (C) => {
    p ? p(C) && v(m, C) : v(m, C);
  };
  if (u) {
    const C = $(), A = B(C);
    let T = !1;
    return te(
      () => e[t],
      (M) => {
        T || (T = !0, A.value = b(M), se(() => T = !1));
      }
    ), te(
      A,
      (M) => {
        !T && (M !== e[t] || c) && k(M);
      },
      { deep: c }
    ), A;
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
const RR = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = wn(t, "class");
    return (a, o) => (g(), w(l(j2), D({ "data-slot": "avatar-fallback" }, l(n), {
      class: l(V)("bg-muted flex size-full items-center justify-center rounded-full", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), FR = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(G2), D({ "data-slot": "avatar-image" }, t, { class: "aspect-square size-full" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), VR = /* @__PURE__ */ _({
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
      class: J(l(V)(l(BS)({ variant: n.variant, type: n.type, size: n.size }), t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), BS = Vn(
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
), NR = /* @__PURE__ */ _({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("nav", {
      "aria-label": "breadcrumb",
      class: J(t.class)
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), LR = /* @__PURE__ */ _({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: J(l(V)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      x(n.$slots, "default", {}, () => [
        O(l(am), { class: "h-4 w-4" })
      ]),
      a[0] || (a[0] = _e("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), zR = /* @__PURE__ */ _({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      class: J(l(V)("inline-flex items-center gap-1.5", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), HR = /* @__PURE__ */ _({
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
      class: J(l(V)("hover:text-foreground transition-colors", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), UR = /* @__PURE__ */ _({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ol", {
      class: J(
        l(V)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), WR = /* @__PURE__ */ _({
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
      class: J(l(V)("text-foreground font-normal", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), KR = /* @__PURE__ */ _({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: J(l(V)("[&>svg]:h-3.5 [&>svg]:w-3.5", t.class))
    }, [
      x(n.$slots, "default", {}, () => [
        O(l(Cd))
      ])
    ], 2));
  }
}), xn = /* @__PURE__ */ _({
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
      class: J(l(V)(l(ya)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default"),
        n.loading ? (g(), w(l(G$), {
          key: 0,
          class: J(l(OS)({ size: n.size }))
        }, null, 8, ["class"])) : ie("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), OS = Vn("animate-spin", {
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
}), ya = Vn(
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
), jR = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(
        l(V)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), YR = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(l(V)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), GR = /* @__PURE__ */ _({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("h3", {
      class: J(l(V)("text-2xl font-semibold leading-none tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), qR = /* @__PURE__ */ _({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("p", {
      class: J(l(V)("text-muted-foreground text-sm", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), XR = /* @__PURE__ */ _({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(l(V)("p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), JR = /* @__PURE__ */ _({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(l(V)("flex items-center p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ZR = /* @__PURE__ */ _({
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
    const o = bn(e, t);
    return (r, s) => (g(), w(l(_k), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), QR = /* @__PURE__ */ _({
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
    }), a = ma(n);
    return (o, r) => (g(), w(l(ok), D(l(a), {
      class: l(V)("w-[200px]", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(kk), D(n.value, {
      class: l(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(Ek), D(n.value, {
      class: l(V)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", t.class)
    }), {
      default: y(() => [
        a.heading ? (g(), w(l(Vk), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            ae(ce(a.heading), 1)
          ]),
          _: 1
        })) : ie("", !0),
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n5 = /* @__PURE__ */ _({
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
    }), r = bn(o, a);
    return (s, i) => (g(), w(l(Dk), D(l(r), {
      class: l(V)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a5 = /* @__PURE__ */ _({
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
    }), r = bn(o, a);
    return (s, i) => (g(), w(l(Rk), D(l(r), {
      class: l(V)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o5 = /* @__PURE__ */ _({
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
    }), r = bn(o, a);
    return (s, i) => (g(), w(l(Nk), null, {
      default: y(() => [
        O(l($k), D(l(r), {
          class: l(V)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n.class)
        }), {
          default: y(() => [
            O(l(Hk), null, {
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
}), r5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(Lk), D(n.value, {
      class: l(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), PS = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, s5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(pv), D({
      class: l(V)("p-3", n.class)
    }, l(r)), {
      default: y(({ grid: u, weekDays: d }) => [
        O(l(Dm), null, {
          default: y(() => [
            O(l(RS)),
            O(l(Bm)),
            O(l(IS))
          ]),
          _: 1
        }),
        _e("div", PS, [
          (g(!0), L(le, null, Ee(u, (c) => (g(), w(l(Tm), {
            key: c.value.toString()
          }, {
            default: y(() => [
              O(l(Em), null, {
                default: y(() => [
                  O(l(As), null, {
                    default: y(() => [
                      (g(!0), L(le, null, Ee(d, (f) => (g(), w(l(Mm), { key: f }, {
                        default: y(() => [
                          ae(ce(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(Am), null, {
                default: y(() => [
                  (g(!0), L(le, null, Ee(c.rows, (f, p) => (g(), w(l(As), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(le, null, Ee(f, (h) => (g(), w(l(km), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l(Sm), {
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
}), km = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(A1), D({
      class: l(V)(
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
}), Sm = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(I1), D({
      class: l(V)(
        l(ya)({ variant: "ghost" }),
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
}), Tm = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(T1), D({
      class: l(V)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Am = /* @__PURE__ */ _({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(O1), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Em = /* @__PURE__ */ _({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(B1), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), As = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(P1), D({
      class: l(V)("flex", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mm = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(E1), D({
      class: l(V)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dm = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(k1), D({
      class: l(V)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(S1), D({
      class: l(V)("text-text text-sm font-medium", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        x(o.$slots, "default", { headingValue: s }, () => [
          ae(ce(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), IS = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(M1), D({
      class: l(V)(
        l(ya)({ variant: "outline" }),
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
}), RS = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(D1), D({
      class: l(V)(
        l(ya)({ variant: "outline" }),
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
}), jl = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l(Fx), X(Z(l(o))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Yl = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(iC), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gl = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Lx), D(l(a), {
      class: l(V)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(lC), { "as-child": "" }, {
          default: y(() => [
            O(l(mi), {
              class: J(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ql = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(zx), null, {
      default: y(() => [
        O(l(qx), D({ ...l(r), ...s.$attrs }, {
          class: l(V)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            s.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            O(l(VS)),
            O(l(oC), {
              class: J(
                l(V)(
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
            O(l(NS))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), i5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(nC), D({
      class: l(V)("w-full p-1", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), FS = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Xl = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Zx), D(l(a), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        t.class
      )
    }), {
      default: y(() => [
        _e("span", FS, [
          O(l(Qx), null, {
            default: y(() => [
              O(l(xd), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        O(l(Ov), null, {
          default: y(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l5 = /* @__PURE__ */ _({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Ov), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), u5 = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(aC), {
      class: J(l(V)("py-1.5 pl-8 pr-2 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), d5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(Xx), D(n.value, {
      class: l(V)("bg-muted -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), VS = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(rC), D(l(a), {
      class: l(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(W$), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), NS = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(sC), D(l(a), {
      class: l(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(mi), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LS = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, zS = /* @__PURE__ */ _({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return ps(cn());
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
    }), r = Ed(n, "modelValue", a, {
      passive: !0,
      defaultValue: ps(cn())
    }), s = pe(o, a), i = Qh("en");
    return (u, d) => (g(), w(l(pv), D({
      placeholder: l(r),
      "onUpdate:placeholder": d[2] || (d[2] = (c) => ut(r) ? r.value = c : null)
    }, l(s), {
      class: l(V)("rounded-md border p-3", n.class)
    }), {
      default: y(({ date: c, grid: f, weekDays: p }) => [
        O(l(Dm), null, {
          default: y(() => [
            O(l(Bm), { class: "flex w-full items-center justify-between gap-2" }, {
              default: y(() => [
                O(l(jl), {
                  "default-value": l(r).month.toString(),
                  "onUpdate:modelValue": d[0] || (d[0] = (h) => {
                    var v;
                    !h || !l(r) || Number(h) !== ((v = l(r)) == null ? void 0 : v.month) && (r.value = l(r).set({
                      month: Number(h)
                    }));
                  })
                }, {
                  default: y(() => [
                    O(l(Gl), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: y(() => [
                        O(l(Yl), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    O(l(ql), { class: "max-h-[200px]" }, {
                      default: y(() => [
                        (g(!0), L(le, null, Ee(l(q0)({ dateObj: c }), (h) => (g(), w(l(Xl), {
                          key: h.toString(),
                          value: h.month.toString()
                        }, {
                          default: y(() => [
                            ae(ce(l(i).custom(l(bt)(h), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                O(l(jl), {
                  "default-value": l(r).year.toString(),
                  "onUpdate:modelValue": d[1] || (d[1] = (h) => {
                    var v;
                    !h || !l(r) || Number(h) !== ((v = l(r)) == null ? void 0 : v.year) && (r.value = l(r).set({
                      year: Number(h)
                    }));
                  })
                }, {
                  default: y(() => [
                    O(l(Gl), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: y(() => [
                        O(l(Yl), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    O(l(ql), { class: "max-h-[200px]" }, {
                      default: y(() => [
                        (g(!0), L(le, null, Ee(l(G0)({ dateObj: c, startIndex: -100, endIndex: 10 }), (h) => (g(), w(l(Xl), {
                          key: h.toString(),
                          value: h.year.toString()
                        }, {
                          default: y(() => [
                            ae(ce(h.year), 1)
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
        _e("div", LS, [
          (g(!0), L(le, null, Ee(f, (h) => (g(), w(l(Tm), {
            key: h.value.toString()
          }, {
            default: y(() => [
              O(l(Em), null, {
                default: y(() => [
                  O(l(As), null, {
                    default: y(() => [
                      (g(!0), L(le, null, Ee(p, (v) => (g(), w(l(Mm), { key: v }, {
                        default: y(() => [
                          ae(ce(v), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(Am), { class: "grid" }, {
                default: y(() => [
                  (g(!0), L(le, null, Ee(h.rows, (v, m) => (g(), w(l(As), {
                    key: `weekDate-${m}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(le, null, Ee(v, (b) => (g(), w(l(km), {
                        key: b.toString(),
                        date: b
                      }, {
                        default: y(() => [
                          O(l(Sm), {
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
}), HS = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(q1), D(l(r), {
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
}), Om = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(rv), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), c5 = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(hr), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), US = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(sv), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), WS = /* @__PURE__ */ _({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(l(V)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), KS = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(dv), D(l(a), {
      class: l(V)("text-heading text-2xl font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jS = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(cv), D(l(a), {
      class: l(V)("text-sub-text text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pm = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(od), null, {
      default: y(() => [
        O(l(ud), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(ld), D(l(r), {
          class: l(V)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            a.class
          )
        }), {
          default: y(() => [
            x(s.$slots, "default"),
            O(l(hr), {
              onClick: i[0] || (i[0] = (u) => n("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: y(() => [
                O(l(gi), { class: "size-4 dark:text-slate-300" }),
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
}), f5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(od), null, {
      default: y(() => [
        O(l(ud), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: y(() => [
            O(l(ld), D({
              class: l(V)(
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
                O(l(hr), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: y(() => [
                    O(l(gi), { class: "size-4" }),
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
}), YS = /* @__PURE__ */ _({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(
        l(V)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), p5 = /* @__PURE__ */ _({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(Om), X(Z(l(o))), {
      default: y(() => [
        O(l(Pm), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            O(HS, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), h5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(aw), D(n.value, {
      class: l(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(Z1), D(n.value, {
      class: l(V)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        t.class
      )
    }), {
      default: y(() => [
        a.heading ? (g(), w(l(Q1), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: y(() => [
            ae(ce(a.heading), 1)
          ]),
          _: 1
        })) : ie("", !0),
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), GS = { class: "flex items-center border-b px-3" }, m5 = /* @__PURE__ */ _({
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
    return (o, r) => (g(), L("div", GS, [
      O(l(Q$), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      O(l(X1), D({ ...l(a), ...o.$attrs }, {
        "auto-focus": "",
        class: l(V)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), g5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(iw), D(l(r), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qS = { role: "presentation" }, y5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(nw), D(l(r), {
      class: l(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        _e("div", qS, [
          x(s.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(lw), D(n.value, {
      class: l(V)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _5 = /* @__PURE__ */ _({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: J(l(V)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), XS = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l(zw), X(Z(l(o))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), JS = /* @__PURE__ */ _({
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
      class: J(
        l(V)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          n.inset && "pl-8",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ZS = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = ye(e);
    return (a, o) => (g(), w(l(Hw), D({ class: "outline-hidden" }, l(n)), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), QS = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(Uw), null, {
      default: y(() => [
        O(l(Ww), D(l(r), {
          class: l(V)(
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
}), w5 = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Kw), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), x5 = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(qw), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C5 = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Tv), D(l(a), {
      class: l(V)(
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
}), eT = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(JS, {
      class: J(t.class)
    }, {
      default: y(() => [
        O(l(Tv), D(l(a), {
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
}), tT = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, $5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(Yw), D(l(r), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _e("span", tT, [
          O(l(Av), null, {
            default: y(() => [
              O(l(xd), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nT = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, k5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(Xw), D(l(r), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _e("span", nT, [
          O(l(Av), null, {
            default: y(() => [
              O(l(Y$), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S5 = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("span", {
      class: J(l(V)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), T5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(jw), D(n.value, {
      class: l(V)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", t.class)
    }), null, 16, ["class"]));
  }
}), A5 = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Gw), D(l(a), {
      class: l(V)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E5 = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(Jw), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M5 = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Qw), D(l(a), {
      class: l(V)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        t.class
      )
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(Cd), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(Zw), D(l(r), {
      class: l(V)(
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
}), aT = { class: "text-xs text-slate-600 dark:text-slate-300" }, oT = /* @__PURE__ */ _({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", aT, "Characters: " + ce(t.count), 1));
  }
}), br = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, rT = {}, sT = { class: "text-sm text-slate-400 dark:text-slate-500" };
function iT(e, t) {
  return g(), L("div", sT, [
    x(e.$slots, "default")
  ]);
}
const lT = /* @__PURE__ */ br(rT, [["render", iT]]), uT = { class: "text-sm text-red-600 dark:text-red-400" }, dT = /* @__PURE__ */ _({
  __name: "Error",
  props: {
    error: {}
  },
  setup(e) {
    return (t, n) => la((g(), L("div", null, [
      _e("p", uT, ce(t.error), 1)
    ], 512)), [
      [ti, t.error]
    ]);
  }
}), cT = {}, fT = { class: "w-full space-y-4 p-1.5" };
function pT(e, t) {
  return g(), L("div", fT, [
    x(e.$slots, "default")
  ]);
}
const B5 = /* @__PURE__ */ br(cT, [["render", pT]]), hT = {}, vT = { class: "my-4" };
function mT(e, t) {
  return g(), L("div", vT, [
    x(e.$slots, "default")
  ]);
}
const gT = /* @__PURE__ */ br(hT, [["render", mT]]), yT = { class: "grid gap-4 md:grid-cols-2" }, O5 = /* @__PURE__ */ _({
  __name: "FormGrid",
  setup(e) {
    return (t, n) => (g(), w(gT, null, {
      default: y(() => [
        _e("div", yT, [
          x(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Im = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(ex), D(n.value, {
      class: l(V)(
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
}), bT = { class: "relative" }, _T = {
  name: "Base",
  inheritAttrs: !1
}, ba = /* @__PURE__ */ _({
  ..._T,
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
        t.label && t.showLabel ? (g(), w(l(Im), {
          key: 0,
          id: t.id
        }, {
          default: y(() => [
            ae(ce(t.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : ie("", !0),
        _e("div", bT, [
          x(t.$slots, "default"),
          t.showCharacterCount ? (g(), w(l(oT), {
            key: 0,
            count: (a = t.modelValue) == null ? void 0 : a.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : ie("", !0)
        ]),
        O(l(lT), { class: "mt-[2px]" }, {
          default: y(() => [
            ae(ce(t.description), 1)
          ]),
          _: 1
        }),
        O(l(dT), { error: t.error }, null, 8, ["error"])
      ]);
    };
  }
}), wT = { class: "flex gap-2" }, P5 = /* @__PURE__ */ _({
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
    const n = t, o = B(e.modelValue);
    return te(o, (r) => {
      n("update:modelValue", r);
    }), (r, s) => (g(), w(l(ba), X(Z(r.$props)), {
      default: y(() => [
        _e("div", wT, [
          O(l(N1), {
            id: r.id,
            checked: o.value,
            "onUpdate:checked": s[0] || (s[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: y(() => [
              O(l(L1), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: y(() => [
                  O(l(xd), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          r.text ? (g(), w(l(Im), {
            key: 0,
            id: r.id,
            class: "my-auto"
          }, {
            default: y(() => [
              ae(ce(r.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : ie("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), xT = /* @__PURE__ */ _({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(dx), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), CT = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(cx), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $T = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(fx), null, {
      default: y(() => [
        O(l(vx), D({ ...l(r), ...s.$attrs }, {
          class: l(V)(
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
}), I5 = /* @__PURE__ */ _({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = new Rt("en-US", {
      dateStyle: "long"
    }), r = B(a.modelValue);
    return te(r, () => {
      n("update:modelValue", r.value);
    }), ue(() => {
      if (a.defaultValue)
        r.value = a.defaultValue;
      else if (r.value === null) {
        const s = /* @__PURE__ */ new Date();
        r.value = new Ve(
          s.getFullYear(),
          s.getMonth() + 1,
          s.getDate()
        );
      }
    }), (s, i) => (g(), w(l(ba), X(Z(s.$props)), {
      default: y(() => [
        O(l(xT), null, {
          default: y(() => [
            O(l(CT), { "as-child": "" }, {
              default: y(() => [
                O(l(xn), {
                  variant: "outline",
                  class: J(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: y(() => [
                    O(l(H$), { class: "mr-2 size-4" }),
                    ae(" " + ce(r.value ? l(o).format(r.value.toDate(l(cn)())) : s.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            O(l($T), { class: "w-auto p-0" }, {
              default: y(() => [
                O(l(zS), {
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
});
var Ze = [];
for (var sl = 0; sl < 256; ++sl)
  Ze.push((sl + 256).toString(16).slice(1));
function kT(e, t = 0) {
  return (Ze[e[t + 0]] + Ze[e[t + 1]] + Ze[e[t + 2]] + Ze[e[t + 3]] + "-" + Ze[e[t + 4]] + Ze[e[t + 5]] + "-" + Ze[e[t + 6]] + Ze[e[t + 7]] + "-" + Ze[e[t + 8]] + Ze[e[t + 9]] + "-" + Ze[e[t + 10]] + Ze[e[t + 11]] + Ze[e[t + 12]] + Ze[e[t + 13]] + Ze[e[t + 14]] + Ze[e[t + 15]]).toLowerCase();
}
var Nr, ST = new Uint8Array(16);
function TT() {
  if (!Nr && (Nr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Nr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Nr(ST);
}
var AT = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const vf = {
  randomUUID: AT
};
function ET(e, t, n) {
  if (vf.randomUUID && !e)
    return vf.randomUUID();
  e = e || {};
  var a = e.random || (e.rng || TT)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, kT(a);
}
const MT = { class: "flex items-center space-x-2" }, DT = ["src"], BT = ["accept"], R5 = /* @__PURE__ */ _({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = "file-upload-" + ET(), r = S(() => i.value ? URL.createObjectURL(i.value) : null), s = n.currentImage ? n.currentImage : n.defaultImage, i = S({
      get: () => n.modelValue,
      set: (c) => a("update:modelValue", c)
    }), u = (c) => {
      i.value = c.target.files[0];
    }, d = () => document.getElementById(o).click();
    return (c, f) => (g(), w(l(ba), X(Z(c.$props)), {
      default: y(() => [
        _e("div", MT, [
          x(c.$slots, "image", {
            newImage: r.value,
            curImage: l(s)
          }, () => [
            _e("img", {
              src: r.value ?? l(s),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, DT)
          ]),
          _e("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: u
          }, null, 40, BT),
          O(l(xn), {
            variant: "outline",
            onClick: d
          }, {
            default: y(() => f[0] || (f[0] = [
              ae(" Upload ")
            ])),
            _: 1,
            __: [0]
          })
        ])
      ]),
      _: 3
    }, 16));
  }
}), OT = ["disabled", "placeholder", "required", "type"], PT = /* @__PURE__ */ _({
  __name: "Input",
  props: /* @__PURE__ */ Cl({
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
    const t = nh(e, "modelValue");
    return (n, a) => (g(), w(l(ba), X(Z(n.$props)), {
      default: y(() => [
        la(_e("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
          disabled: n.disabled,
          placeholder: n.placeholder,
          required: n.required,
          type: n.type,
          class: J(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !n.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": n.error
          }])
        }, null, 10, OT), [
          [Ly, t.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), F5 = /* @__PURE__ */ _({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, a = e, o = S(() => a.placeholder ?? "Select an option..."), r = B(
      a.modelValue ? a.options.find((s) => s === a.modelValue) : null
    );
    return te(r, () => {
      n("update:modelValue", r.value);
    }), (s, i) => (g(), w(l(ba), X(Z(s.$props)), {
      default: y(() => [
        O(l(jl), {
          modelValue: r.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u)
        }, {
          default: y(({ open: u }) => [
            O(l(Gl), { open: u }, {
              default: y(() => [
                O(l(Yl), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            O(l(ql), null, {
              default: y(() => [
                (g(!0), L(le, null, Ee(s.options, (d) => (g(), w(l(Xl), { value: d }, {
                  default: y(() => [
                    ae(ce(d), 1)
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
}), IT = ["placeholder"], V5 = /* @__PURE__ */ _({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = Ed(e, "modelValue", t, {
      passive: !0
    });
    return (r, s) => (g(), w(l(ba), X(Z(r.$props)), {
      default: y(() => [
        la(_e("textarea", {
          "onUpdate:modelValue": s[0] || (s[0] = (i) => ut(o) ? o.value = i : null),
          placeholder: r.placeholder,
          class: J(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !r.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": r.error
          }])
        }, null, 10, IT), [
          [zy, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), RT = /* @__PURE__ */ _({
  __name: "Toggle",
  props: /* @__PURE__ */ Cl({
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
  emits: /* @__PURE__ */ Cl(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = t, a = e, o = nh(e, "modelValue");
    te(o, () => {
      n("update:modelValue", o.value);
    });
    const r = S(() => {
      const { class: i, ...u } = a;
      return u;
    }), s = pe(r, n);
    return (i, u) => (g(), w(l(ba), X(Z(i.$props)), {
      default: y(() => [
        O(l(BC), D({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (d) => o.value = d)
        }, l(s), {
          class: l(V)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            a.class
          )
        }), {
          default: y(({ checked: d }) => [
            O(l(OC), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: y(() => [
                d ? x(i.$slots, "checked", { key: 0 }) : ie("", !0),
                d ? ie("", !0) : x(i.$slots, "not-checked", { key: 1 })
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
var Jl = "http://www.w3.org/1999/xhtml";
const mf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Jl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function $i(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), mf.hasOwnProperty(t) ? { space: mf[t], local: e } : e;
}
function FT(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Jl && t.documentElement.namespaceURI === Jl ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function VT(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Rm(e) {
  var t = $i(e);
  return (t.local ? VT : FT)(t);
}
function NT() {
}
function Md(e) {
  return e == null ? NT : function() {
    return this.querySelector(e);
  };
}
function LT(e) {
  typeof e != "function" && (e = Md(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = new Array(s), u, d, c = 0; c < s; ++c)
      (u = r[c]) && (d = e.call(u, u.__data__, c, r)) && ("__data__" in u && (d.__data__ = u.__data__), i[c] = d);
  return new vt(a, this._parents);
}
function zT(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function HT() {
  return [];
}
function Fm(e) {
  return e == null ? HT : function() {
    return this.querySelectorAll(e);
  };
}
function UT(e) {
  return function() {
    return zT(e.apply(this, arguments));
  };
}
function WT(e) {
  typeof e == "function" ? e = UT(e) : e = Fm(e);
  for (var t = this._groups, n = t.length, a = [], o = [], r = 0; r < n; ++r)
    for (var s = t[r], i = s.length, u, d = 0; d < i; ++d)
      (u = s[d]) && (a.push(e.call(u, u.__data__, d, s)), o.push(u));
  return new vt(a, o);
}
function Vm(e) {
  return function() {
    return this.matches(e);
  };
}
function Nm(e) {
  return function(t) {
    return t.matches(e);
  };
}
var KT = Array.prototype.find;
function jT(e) {
  return function() {
    return KT.call(this.children, e);
  };
}
function YT() {
  return this.firstElementChild;
}
function GT(e) {
  return this.select(e == null ? YT : jT(typeof e == "function" ? e : Nm(e)));
}
var qT = Array.prototype.filter;
function XT() {
  return Array.from(this.children);
}
function JT(e) {
  return function() {
    return qT.call(this.children, e);
  };
}
function ZT(e) {
  return this.selectAll(e == null ? XT : JT(typeof e == "function" ? e : Nm(e)));
}
function QT(e) {
  typeof e != "function" && (e = Vm(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = [], u, d = 0; d < s; ++d)
      (u = r[d]) && e.call(u, u.__data__, d, r) && i.push(u);
  return new vt(a, this._parents);
}
function Lm(e) {
  return new Array(e.length);
}
function eA() {
  return new vt(this._enter || this._groups.map(Lm), this._parents);
}
function Es(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Es.prototype = {
  constructor: Es,
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
function tA(e) {
  return function() {
    return e;
  };
}
function nA(e, t, n, a, o, r) {
  for (var s = 0, i, u = t.length, d = r.length; s < d; ++s)
    (i = t[s]) ? (i.__data__ = r[s], a[s] = i) : n[s] = new Es(e, r[s]);
  for (; s < u; ++s)
    (i = t[s]) && (o[s] = i);
}
function aA(e, t, n, a, o, r, s) {
  var i, u, d = /* @__PURE__ */ new Map(), c = t.length, f = r.length, p = new Array(c), h;
  for (i = 0; i < c; ++i)
    (u = t[i]) && (p[i] = h = s.call(u, u.__data__, i, t) + "", d.has(h) ? o[i] = u : d.set(h, u));
  for (i = 0; i < f; ++i)
    h = s.call(e, r[i], i, r) + "", (u = d.get(h)) ? (a[i] = u, u.__data__ = r[i], d.delete(h)) : n[i] = new Es(e, r[i]);
  for (i = 0; i < c; ++i)
    (u = t[i]) && d.get(p[i]) === u && (o[i] = u);
}
function oA(e) {
  return e.__data__;
}
function rA(e, t) {
  if (!arguments.length) return Array.from(this, oA);
  var n = t ? aA : nA, a = this._parents, o = this._groups;
  typeof e != "function" && (e = tA(e));
  for (var r = o.length, s = new Array(r), i = new Array(r), u = new Array(r), d = 0; d < r; ++d) {
    var c = a[d], f = o[d], p = f.length, h = sA(e.call(c, c && c.__data__, d, a)), v = h.length, m = i[d] = new Array(v), b = s[d] = new Array(v), $ = u[d] = new Array(p);
    n(c, f, m, b, $, h, t);
    for (var k = 0, C = 0, A, T; k < v; ++k)
      if (A = m[k]) {
        for (k >= C && (C = k + 1); !(T = b[C]) && ++C < v; ) ;
        A._next = T || null;
      }
  }
  return s = new vt(s, a), s._enter = i, s._exit = u, s;
}
function sA(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function iA() {
  return new vt(this._exit || this._groups.map(Lm), this._parents);
}
function lA(e, t, n) {
  var a = this.enter(), o = this, r = this.exit();
  return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? r.remove() : n(r), a && o ? a.merge(o).order() : o;
}
function uA(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, a = t._groups, o = n.length, r = a.length, s = Math.min(o, r), i = new Array(o), u = 0; u < s; ++u)
    for (var d = n[u], c = a[u], f = d.length, p = i[u] = new Array(f), h, v = 0; v < f; ++v)
      (h = d[v] || c[v]) && (p[v] = h);
  for (; u < o; ++u)
    i[u] = n[u];
  return new vt(i, this._parents);
}
function dA() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var a = e[t], o = a.length - 1, r = a[o], s; --o >= 0; )
      (s = a[o]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function cA(e) {
  e || (e = fA);
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
function fA(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function pA() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function hA() {
  return Array.from(this);
}
function vA() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length; o < r; ++o) {
      var s = a[o];
      if (s) return s;
    }
  return null;
}
function mA() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function gA() {
  return !this.node();
}
function yA(e) {
  for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
    for (var o = t[n], r = 0, s = o.length, i; r < s; ++r)
      (i = o[r]) && e.call(i, i.__data__, r, o);
  return this;
}
function bA(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _A(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wA(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function xA(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function CA(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function $A(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function kA(e, t) {
  var n = $i(e);
  if (arguments.length < 2) {
    var a = this.node();
    return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n);
  }
  return this.each((t == null ? n.local ? _A : bA : typeof t == "function" ? n.local ? $A : CA : n.local ? xA : wA)(n, t));
}
function zm(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function SA(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function TA(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function AA(e, t, n) {
  return function() {
    var a = t.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, n);
  };
}
function EA(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? SA : typeof t == "function" ? AA : TA)(e, t, n ?? "")) : Ja(this.node(), e);
}
function Ja(e, t) {
  return e.style.getPropertyValue(t) || zm(e).getComputedStyle(e, null).getPropertyValue(t);
}
function MA(e) {
  return function() {
    delete this[e];
  };
}
function DA(e, t) {
  return function() {
    this[e] = t;
  };
}
function BA(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function OA(e, t) {
  return arguments.length > 1 ? this.each((t == null ? MA : typeof t == "function" ? BA : DA)(e, t)) : this.node()[e];
}
function Hm(e) {
  return e.trim().split(/^|\s+/);
}
function Dd(e) {
  return e.classList || new Um(e);
}
function Um(e) {
  this._node = e, this._names = Hm(e.getAttribute("class") || "");
}
Um.prototype = {
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
function Wm(e, t) {
  for (var n = Dd(e), a = -1, o = t.length; ++a < o; ) n.add(t[a]);
}
function Km(e, t) {
  for (var n = Dd(e), a = -1, o = t.length; ++a < o; ) n.remove(t[a]);
}
function PA(e) {
  return function() {
    Wm(this, e);
  };
}
function IA(e) {
  return function() {
    Km(this, e);
  };
}
function RA(e, t) {
  return function() {
    (t.apply(this, arguments) ? Wm : Km)(this, e);
  };
}
function FA(e, t) {
  var n = Hm(e + "");
  if (arguments.length < 2) {
    for (var a = Dd(this.node()), o = -1, r = n.length; ++o < r; ) if (!a.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? RA : t ? PA : IA)(n, t));
}
function VA() {
  this.textContent = "";
}
function NA(e) {
  return function() {
    this.textContent = e;
  };
}
function LA(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function zA(e) {
  return arguments.length ? this.each(e == null ? VA : (typeof e == "function" ? LA : NA)(e)) : this.node().textContent;
}
function HA() {
  this.innerHTML = "";
}
function UA(e) {
  return function() {
    this.innerHTML = e;
  };
}
function WA(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function KA(e) {
  return arguments.length ? this.each(e == null ? HA : (typeof e == "function" ? WA : UA)(e)) : this.node().innerHTML;
}
function jA() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function YA() {
  return this.each(jA);
}
function GA() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function qA() {
  return this.each(GA);
}
function XA(e) {
  var t = typeof e == "function" ? e : Rm(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function JA() {
  return null;
}
function ZA(e, t) {
  var n = typeof e == "function" ? e : Rm(e), a = t == null ? JA : typeof t == "function" ? t : Md(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function QA() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function eE() {
  return this.each(QA);
}
function tE() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function nE() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function aE(e) {
  return this.select(e ? nE : tE);
}
function oE(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function rE(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function sE(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", a = t.indexOf(".");
    return a >= 0 && (n = t.slice(a + 1), t = t.slice(0, a)), { type: t, name: n };
  });
}
function iE(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, a = -1, o = t.length, r; n < o; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++a] = r;
      ++a ? t.length = a : delete this.__on;
    }
  };
}
function lE(e, t, n) {
  return function() {
    var a = this.__on, o, r = rE(t);
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
function uE(e, t, n) {
  var a = sE(e + ""), o, r = a.length, s;
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
  for (i = t ? lE : iE, o = 0; o < r; ++o) this.each(i(a[o], t, n));
  return this;
}
function jm(e, t, n) {
  var a = zm(e), o = a.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = a.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function dE(e, t) {
  return function() {
    return jm(this, e, t);
  };
}
function cE(e, t) {
  return function() {
    return jm(this, e, t.apply(this, arguments));
  };
}
function fE(e, t) {
  return this.each((typeof t == "function" ? cE : dE)(e, t));
}
function* pE() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], o = 0, r = a.length, s; o < r; ++o)
      (s = a[o]) && (yield s);
}
var Ym = [null];
function vt(e, t) {
  this._groups = e, this._parents = t;
}
function _r() {
  return new vt([[document.documentElement]], Ym);
}
function hE() {
  return this;
}
vt.prototype = _r.prototype = {
  constructor: vt,
  select: LT,
  selectAll: WT,
  selectChild: GT,
  selectChildren: ZT,
  filter: QT,
  data: rA,
  enter: eA,
  exit: iA,
  join: lA,
  merge: uA,
  selection: hE,
  order: dA,
  sort: cA,
  call: pA,
  nodes: hA,
  node: vA,
  size: mA,
  empty: gA,
  each: yA,
  attr: kA,
  style: EA,
  property: OA,
  classed: FA,
  text: zA,
  html: KA,
  raise: YA,
  lower: qA,
  append: XA,
  insert: ZA,
  remove: eE,
  clone: aE,
  datum: oE,
  on: uE,
  dispatch: fE,
  [Symbol.iterator]: pE
};
function Xn(e) {
  return typeof e == "string" ? new vt([[document.querySelector(e)]], [document.documentElement]) : new vt([[e]], Ym);
}
var No;
(function(e) {
  e[e.SVG = 0] = "SVG", e[e.HTML = 1] = "HTML";
})(No || (No = {}));
var Za;
(function(e) {
  e.Fit = "fit", e.Extend = "extend", e.FitWidth = "fit_width";
})(Za || (Za = {}));
function Lo(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Bd(e) {
  let t, n, a;
  e.length !== 2 ? (t = Lo, n = (i, u) => Lo(e(i), u), a = (i, u) => e(i) - u) : (t = e === Lo || e === vE ? e : mE, n = e, a = e);
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
function mE() {
  return 0;
}
function Gm(e) {
  return e === null ? NaN : +e;
}
const gE = Bd(Lo), ki = gE.right;
Bd(Gm).center;
function yE(e, t) {
  let n, a;
  for (const o of e)
    o != null && (n === void 0 ? o >= o && (n = a = o) : (n > o && (n = o), a < o && (a = o)));
  return [n, a];
}
class gf extends Map {
  constructor(t, n = wE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(yf(this, t));
  }
  has(t) {
    return super.has(yf(this, t));
  }
  set(t, n) {
    return super.set(bE(this, t), n);
  }
  delete(t) {
    return super.delete(_E(this, t));
  }
}
function yf({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function bE({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function _E({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function wE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const xE = Math.sqrt(50), CE = Math.sqrt(10), $E = Math.sqrt(2);
function Ms(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), r = a / Math.pow(10, o), s = r >= xE ? 10 : r >= CE ? 5 : r >= $E ? 2 : 1;
  let i, u, d;
  return o < 0 ? (d = Math.pow(10, -o) / s, i = Math.round(e * d), u = Math.round(t * d), i / d < e && ++i, u / d > t && --u, d = -d) : (d = Math.pow(10, o) * s, i = Math.round(e / d), u = Math.round(t / d), i * d < e && ++i, u * d > t && --u), u < i && 0.5 <= n && n < 2 ? Ms(e, t, n * 2) : [i, u, d];
}
function Zl(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, r, s] = a ? Ms(t, e, n) : Ms(e, t, n);
  if (!(r >= o)) return [];
  const i = r - o + 1, u = new Array(i);
  if (a)
    if (s < 0) for (let d = 0; d < i; ++d) u[d] = (r - d) / -s;
    else for (let d = 0; d < i; ++d) u[d] = (r - d) * s;
  else if (s < 0) for (let d = 0; d < i; ++d) u[d] = (o + d) / -s;
  else for (let d = 0; d < i; ++d) u[d] = (o + d) * s;
  return u;
}
function Ql(e, t, n) {
  return t = +t, e = +e, n = +n, Ms(e, t, n)[2];
}
function eu(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? Ql(t, e, n) : Ql(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function bf(e, t) {
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
function _f(e, t) {
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
function kE(e, t, n = Gm) {
  if (!(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[a - 1], a - 1, e);
    var a, o = (a - 1) * t, r = Math.floor(o), s = +n(e[r], r, e), i = +n(e[r + 1], r + 1, e);
    return s + (i - s) * (o - r);
  }
}
function* SE(e) {
  for (const t of e)
    yield* t;
}
function TE(e) {
  return Array.from(SE(e));
}
function AE(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, r = new Array(o); ++a < o; )
    r[a] = e + a * n;
  return r;
}
function EE(e, t) {
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
function ME(e, t, n) {
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
    var C = this, A = Date.now() - p;
    if (f)
      return;
    function T() {
      p = Date.now(), t.apply(C, $);
    }
    function M() {
      c = void 0;
    }
    !i && d && !c && T(), h(), d === void 0 && A > e ? i ? (p = Date.now(), r || (c = setTimeout(d ? M : T, e))) : T() : r !== !0 && (c = setTimeout(d ? M : T, d === void 0 ? e - A : e));
  }
  return m.cancel = v, m;
}
const Fa = (e) => typeof e == "number", qm = (e) => typeof e == "function", Od = (e) => Array.isArray(e), DE = (e) => e instanceof Object, Ds = (e) => e.constructor.name !== "Function" && e.constructor.name !== "Object", wf = (e) => DE(e) && !Od(e) && !qm(e) && !Ds(e), qo = (e, t, n = [], a = /* @__PURE__ */ new Set()) => {
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length)
      return !1;
    if (a.has(e))
      return !0;
    a.add(e);
    for (let o = 0; o < e.length; o++)
      if (!qo(e[o], t[o], n, a))
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
      if (!qo(e[s], t[s], n, a))
        return !1;
    return !0;
  }
  return e === t;
}, tu = (e) => e.flat(), Bs = (e, t = /* @__PURE__ */ new Map()) => {
  if (typeof e != "object" || e === null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Array) {
    const n = [];
    t.set(e, n);
    for (const a of e)
      n.push(t.has(a) ? t.get(a) : Bs(a, t));
    return n;
  }
  if (Ds(e))
    return e;
  if (e instanceof Object) {
    const n = {};
    t.set(e, n);
    const a = e;
    return Object.keys(e).reduce((o, r) => (o[r] = t.has(a[r]) ? t.get(a[r]) : Bs(a[r], t), o), n), n;
  }
  return e;
}, Xo = (e, t, n = /* @__PURE__ */ new Map()) => {
  if (!e || !t || e === t)
    return e;
  const a = Ds(e) ? e : Bs(e);
  return n.has(t) ? n.get(t) : (n.set(t, a), Object.keys(t).forEach((o) => {
    o === "__proto__" || o === "constructor" || (wf(e[o]) && wf(t[o]) ? a[o] = Xo(e[o], t[o], n) : Ds(t) ? a[o] = t : a[o] = Bs(t[o]));
  }), a);
}, xf = (e, t, n) => ME(t, e);
function Pd(e, t, n) {
  return qm(t) ? t(e, n) : t;
}
function Xm(e, t, n) {
  return Pd(e, t, n);
}
function Jo(e, t, n) {
  return Pd(e, t, n);
}
function Co(e) {
  return e.filter((t) => t && !Fa(t));
}
function Da(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function BE(e, ...t) {
  return e ? _f(e, (a, o) => _f(t, (r) => Jo(a, r, o))) : void 0;
}
function OE(e, ...t) {
  return e ? bf(e, (a, o) => bf(t, (r) => Jo(a, r, o))) : void 0;
}
function il(e, ...t) {
  return [BE(e, ...t), OE(e, ...t)];
}
function PE(e, t, n) {
  return e.filter((o, r) => {
    const s = Jo(o, n, r);
    return s >= t[0] && s <= t[1];
  });
}
var Jn = [], IE = function() {
  return Jn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, RE = function() {
  return Jn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Cf = "ResizeObserver loop completed with undelivered notifications.", FE = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Cf
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Cf), window.dispatchEvent(e);
}, Zo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Zo || (Zo = {}));
var Zn = function(e) {
  return Object.freeze(e);
}, VE = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Zn(this);
  }
  return e;
}(), Jm = function() {
  function e(t, n, a, o) {
    return this.x = t, this.y = n, this.width = a, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Zn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, o = t.top, r = t.right, s = t.bottom, i = t.left, u = t.width, d = t.height;
    return { x: n, y: a, top: o, right: r, bottom: s, left: i, width: u, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Id = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Zm = function(e) {
  if (Id(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var o = e, r = o.offsetWidth, s = o.offsetHeight;
  return !(r || s || e.getClientRects().length);
}, $f = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, NE = function(e) {
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
}, zo = typeof window < "u" ? window : {}, Lr = /* @__PURE__ */ new WeakMap(), kf = /auto|scroll/, LE = /^tb|vertical/, zE = /msie|trident/i.test(zo.navigator && zo.navigator.userAgent), It = function(e) {
  return parseFloat(e || "0");
}, Va = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new VE((n ? t : e) || 0, (n ? e : t) || 0);
}, Sf = Zn({
  devicePixelContentBoxSize: Va(),
  borderBoxSize: Va(),
  contentBoxSize: Va(),
  contentRect: new Jm(0, 0, 0, 0)
}), Qm = function(e, t) {
  if (t === void 0 && (t = !1), Lr.has(e) && !t)
    return Lr.get(e);
  if (Zm(e))
    return Lr.set(e, Sf), Sf;
  var n = getComputedStyle(e), a = Id(e) && e.ownerSVGElement && e.getBBox(), o = !zE && n.boxSizing === "border-box", r = LE.test(n.writingMode || ""), s = !a && kf.test(n.overflowY || ""), i = !a && kf.test(n.overflowX || ""), u = a ? 0 : It(n.paddingTop), d = a ? 0 : It(n.paddingRight), c = a ? 0 : It(n.paddingBottom), f = a ? 0 : It(n.paddingLeft), p = a ? 0 : It(n.borderTopWidth), h = a ? 0 : It(n.borderRightWidth), v = a ? 0 : It(n.borderBottomWidth), m = a ? 0 : It(n.borderLeftWidth), b = f + d, $ = u + c, k = m + h, C = p + v, A = i ? e.offsetHeight - C - e.clientHeight : 0, T = s ? e.offsetWidth - k - e.clientWidth : 0, M = o ? b + k : 0, E = o ? $ + C : 0, N = a ? a.width : It(n.width) - M - T, R = a ? a.height : It(n.height) - E - A, P = N + b + T + k, I = R + $ + A + C, F = Zn({
    devicePixelContentBoxSize: Va(Math.round(N * devicePixelRatio), Math.round(R * devicePixelRatio), r),
    borderBoxSize: Va(P, I, r),
    contentBoxSize: Va(N, R, r),
    contentRect: new Jm(f, u, N, R)
  });
  return Lr.set(e, F), F;
}, eg = function(e, t, n) {
  var a = Qm(e, n), o = a.borderBoxSize, r = a.contentBoxSize, s = a.devicePixelContentBoxSize;
  switch (t) {
    case Zo.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case Zo.BORDER_BOX:
      return o;
    default:
      return r;
  }
}, HE = /* @__PURE__ */ function() {
  function e(t) {
    var n = Qm(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Zn([n.borderBoxSize]), this.contentBoxSize = Zn([n.contentBoxSize]), this.devicePixelContentBoxSize = Zn([n.devicePixelContentBoxSize]);
  }
  return e;
}(), tg = function(e) {
  if (Zm(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, UE = function() {
  var e = 1 / 0, t = [];
  Jn.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var i = [];
      s.activeTargets.forEach(function(d) {
        var c = new HE(d.target), f = tg(d.target);
        i.push(c), d.lastReportedSize = eg(d.target, d.observedBox), f < e && (e = f);
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
}, Tf = function(e) {
  Jn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (tg(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, WE = function() {
  var e = 0;
  for (Tf(e); IE(); )
    e = UE(), Tf(e);
  return RE() && FE(), e > 0;
}, ll, ng = [], KE = function() {
  return ng.splice(0).forEach(function(e) {
    return e();
  });
}, jE = function(e) {
  if (!ll) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return KE();
    }).observe(n, a), ll = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  ng.push(e), ll();
}, YE = function(e) {
  jE(function() {
    requestAnimationFrame(e);
  });
}, ns = 0, GE = function() {
  return !!ns;
}, qE = 250, XE = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Af = [
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
], Ef = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, ul = !1, JE = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = qE), !ul) {
      ul = !0;
      var a = Ef(t);
      YE(function() {
        var o = !1;
        try {
          o = WE();
        } finally {
          if (ul = !1, t = a - Ef(), !GE())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, XE);
    };
    document.body ? n() : zo.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Af.forEach(function(n) {
      return zo.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Af.forEach(function(n) {
      return zo.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), nu = new JE(), Mf = function(e) {
  !ns && e > 0 && nu.start(), ns += e, !ns && nu.stop();
}, ZE = function(e) {
  return !Id(e) && !NE(e) && getComputedStyle(e).display === "inline";
}, QE = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || Zo.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = eg(this.target, this.observedBox, !0);
    return ZE(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), eM = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), zr = /* @__PURE__ */ new WeakMap(), Df = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Hr = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new eM(t, n);
    zr.set(t, a);
  }, e.observe = function(t, n, a) {
    var o = zr.get(t), r = o.observationTargets.length === 0;
    Df(o.observationTargets, n) < 0 && (r && Jn.push(o), o.observationTargets.push(new QE(n, a && a.box)), Mf(1), nu.schedule());
  }, e.unobserve = function(t, n) {
    var a = zr.get(t), o = Df(a.observationTargets, n), r = a.observationTargets.length === 1;
    o >= 0 && (r && Jn.splice(Jn.indexOf(a), 1), a.observationTargets.splice(o, 1), Mf(-1));
  }, e.disconnect = function(t) {
    var n = this, a = zr.get(t);
    a.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), tM = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Hr.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!$f(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Hr.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!$f(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Hr.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Hr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const nM = globalThis.ResizeObserver || tM, ag = {
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
  sizing: Za.Fit,
  width: void 0,
  height: void 0,
  svgDefs: void 0,
  ariaLabel: void 0
};
class Qo {
  constructor(t) {
    this._defaultConfig = ag, this._isFirstRender = !0, this._renderAnimationFrameId = null, this._container = t;
    const n = Xn(this._container);
    n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", Qo.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", !0), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
  }
  updateContainer(t) {
    var n;
    this.prevConfig = this.config, this.config = Xo(this._defaultConfig, t), (t == null ? void 0 : t.svgDefs) !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.svgDefs) && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(t.svgDefs));
  }
  // The `_preRender` step should be used to perform some actions before rendering.
  // For example, calculating scales, setting component sizes, etc ...
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _preRender() {
  }
  // The `_render` step should be used to perform the actual rendering
  _render(t) {
    const { config: n } = this;
    Xn(this._container).attr("aria-label", n.ariaLabel), this._isFirstRender = !1;
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
    return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || Qo.DEFAULT_CONTAINER_HEIGHT;
  }
  get width() {
    return Da(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    return Da(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Number.POSITIVE_INFINITY);
  }
  _removeAllChildren() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
  }
  _onResize() {
    const { config: t } = this;
    (t.sizing === Za.Fit || t.sizing === Za.FitWidth) && this.render(0);
  }
  _setUpResizeObserver() {
    if (this._resizeObserver)
      return;
    const t = this._container.getBoundingClientRect();
    this._containerSize = { width: t.width, height: t.height }, this._resizeObserver = new nM((n, a) => {
      cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
        const o = this._container.getBoundingClientRect(), r = { width: o.width, height: o.height };
        !qo(this._containerSize, r) && r.width && r.height && (this._containerSize = r, this._onResize());
      });
    }), this._resizeObserver.observe(this._container);
  }
  destroy() {
    var t;
    cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (t = this._resizeObserver) === null || t === void 0 || t.disconnect(), this.svg.remove();
  }
}
Qo.DEFAULT_CONTAINER_HEIGHT = 300;
function aM(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function oM(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var rM = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(oM(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var r = aM(o);
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
}(), et = "-ms-", Os = "-moz-", ke = "-webkit-", og = "comm", Rd = "rule", Fd = "decl", sM = "@import", rg = "@keyframes", iM = "@layer", lM = Math.abs, Si = String.fromCharCode, uM = Object.assign;
function dM(e, t) {
  return Qe(e, 0) ^ 45 ? (((t << 2 ^ Qe(e, 0)) << 2 ^ Qe(e, 1)) << 2 ^ Qe(e, 2)) << 2 ^ Qe(e, 3) : 0;
}
function sg(e) {
  return e.trim();
}
function cM(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Se(e, t, n) {
  return e.replace(t, n);
}
function au(e, t) {
  return e.indexOf(t);
}
function Qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function er(e, t, n) {
  return e.slice(t, n);
}
function Vt(e) {
  return e.length;
}
function Vd(e) {
  return e.length;
}
function Ur(e, t) {
  return t.push(e), e;
}
function fM(e, t) {
  return e.map(t).join("");
}
var Ti = 1, Qa = 1, ig = 0, dt = 0, Le = 0, go = "";
function Ai(e, t, n, a, o, r, s) {
  return { value: e, root: t, parent: n, type: a, props: o, children: r, line: Ti, column: Qa, length: s, return: "" };
}
function $o(e, t) {
  return uM(Ai("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function pM() {
  return Le;
}
function hM() {
  return Le = dt > 0 ? Qe(go, --dt) : 0, Qa--, Le === 10 && (Qa = 1, Ti--), Le;
}
function ht() {
  return Le = dt < ig ? Qe(go, dt++) : 0, Qa++, Le === 10 && (Qa = 1, Ti++), Le;
}
function zt() {
  return Qe(go, dt);
}
function as() {
  return dt;
}
function wr(e, t) {
  return er(go, e, t);
}
function tr(e) {
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
function lg(e) {
  return Ti = Qa = 1, ig = Vt(go = e), dt = 0, [];
}
function ug(e) {
  return go = "", e;
}
function os(e) {
  return sg(wr(dt - 1, ou(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vM(e) {
  for (; (Le = zt()) && Le < 33; )
    ht();
  return tr(e) > 2 || tr(Le) > 3 ? "" : " ";
}
function mM(e, t) {
  for (; --t && ht() && !(Le < 48 || Le > 102 || Le > 57 && Le < 65 || Le > 70 && Le < 97); )
    ;
  return wr(e, as() + (t < 6 && zt() == 32 && ht() == 32));
}
function ou(e) {
  for (; ht(); )
    switch (Le) {
      case e:
        return dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ou(Le);
        break;
      case 40:
        e === 41 && ou(e);
        break;
      case 92:
        ht();
        break;
    }
  return dt;
}
function gM(e, t) {
  for (; ht() && e + Le !== 57; )
    if (e + Le === 84 && zt() === 47)
      break;
  return "/*" + wr(t, dt - 1) + "*" + Si(e === 47 ? e : ht());
}
function yM(e) {
  for (; !tr(zt()); )
    ht();
  return wr(e, dt);
}
function bM(e) {
  return ug(rs("", null, null, null, [""], e = lg(e), 0, [0], e));
}
function rs(e, t, n, a, o, r, s, i, u) {
  for (var d = 0, c = 0, f = s, p = 0, h = 0, v = 0, m = 1, b = 1, $ = 1, k = 0, C = "", A = o, T = r, M = a, E = C; b; )
    switch (v = k, k = ht()) {
      case 40:
        if (v != 108 && Qe(E, f - 1) == 58) {
          au(E += Se(os(k), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += os(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += vM(v);
        break;
      case 92:
        E += mM(as() - 1, 7);
        continue;
      case 47:
        switch (zt()) {
          case 42:
          case 47:
            Ur(_M(gM(ht(), as()), t, n), u);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * m:
        i[d++] = Vt(E) * $;
      case 125 * m:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            $ == -1 && (E = Se(E, /\f/g, "")), h > 0 && Vt(E) - f && Ur(h > 32 ? Of(E + ";", a, n, f - 1) : Of(Se(E, " ", "") + ";", a, n, f - 2), u);
            break;
          case 59:
            E += ";";
          default:
            if (Ur(M = Bf(E, t, n, d, c, o, i, C, A = [], T = [], f), r), k === 123)
              if (c === 0)
                rs(E, t, M, M, A, r, f, i, T);
              else
                switch (p === 99 && Qe(E, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rs(e, M, M, a && Ur(Bf(e, M, M, 0, 0, o, i, C, o, A = [], f), T), o, T, f, i, a ? A : T);
                    break;
                  default:
                    rs(E, M, M, M, [""], T, 0, i, T);
                }
        }
        d = c = h = 0, m = $ = 1, C = E = "", f = s;
        break;
      case 58:
        f = 1 + Vt(E), h = v;
      default:
        if (m < 1) {
          if (k == 123)
            --m;
          else if (k == 125 && m++ == 0 && hM() == 125)
            continue;
        }
        switch (E += Si(k), k * m) {
          case 38:
            $ = c > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            i[d++] = (Vt(E) - 1) * $, $ = 1;
            break;
          case 64:
            zt() === 45 && (E += os(ht())), p = zt(), c = f = Vt(C = E += yM(as())), k++;
            break;
          case 45:
            v === 45 && Vt(E) == 2 && (m = 0);
        }
    }
  return r;
}
function Bf(e, t, n, a, o, r, s, i, u, d, c) {
  for (var f = o - 1, p = o === 0 ? r : [""], h = Vd(p), v = 0, m = 0, b = 0; v < a; ++v)
    for (var $ = 0, k = er(e, f + 1, f = lM(m = s[v])), C = e; $ < h; ++$)
      (C = sg(m > 0 ? p[$] + " " + k : Se(k, /&\f/g, p[$]))) && (u[b++] = C);
  return Ai(e, t, n, o === 0 ? Rd : i, u, d, c);
}
function _M(e, t, n) {
  return Ai(e, t, n, og, Si(pM()), er(e, 2, -2), 0);
}
function Of(e, t, n, a) {
  return Ai(e, t, n, Fd, er(e, 0, a), er(e, a + 1, -1), a);
}
function Na(e, t) {
  for (var n = "", a = Vd(e), o = 0; o < a; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function wM(e, t, n, a) {
  switch (e.type) {
    case iM:
      if (e.children.length) break;
    case sM:
    case Fd:
      return e.return = e.return || e.value;
    case og:
      return "";
    case rg:
      return e.return = e.value + "{" + Na(e.children, a) + "}";
    case Rd:
      e.value = e.props.join(",");
  }
  return Vt(n = Na(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function xM(e) {
  var t = Vd(e);
  return function(n, a, o, r) {
    for (var s = "", i = 0; i < t; i++)
      s += e[i](n, a, o, r) || "";
    return s;
  };
}
function CM(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function $M(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var kM = function(t, n, a) {
  for (var o = 0, r = 0; o = r, r = zt(), o === 38 && r === 12 && (n[a] = 1), !tr(r); )
    ht();
  return wr(t, dt);
}, SM = function(t, n) {
  var a = -1, o = 44;
  do
    switch (tr(o)) {
      case 0:
        o === 38 && zt() === 12 && (n[a] = 1), t[a] += kM(dt - 1, n, a);
        break;
      case 2:
        t[a] += os(o);
        break;
      case 4:
        if (o === 44) {
          t[++a] = zt() === 58 ? "&\f" : "", n[a] = t[a].length;
          break;
        }
      default:
        t[a] += Si(o);
    }
  while (o = ht());
  return t;
}, TM = function(t, n) {
  return ug(SM(lg(t), n));
}, Pf = /* @__PURE__ */ new WeakMap(), AM = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, a = t.parent, o = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Pf.get(a)) && !o) {
      Pf.set(t, !0);
      for (var r = [], s = TM(n, r), i = a.props, u = 0, d = 0; u < s.length; u++)
        for (var c = 0; c < i.length; c++, d++)
          t.props[d] = r[u] ? s[u].replace(/&\f/g, i[c]) : i[c] + " " + s[u];
    }
  }
}, EM = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function dg(e, t) {
  switch (dM(e, t)) {
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
      return ke + e + Os + e + et + e + e;
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
      if (Vt(e) - 1 - t > 6) switch (Qe(e, t + 1)) {
        case 109:
          if (Qe(e, t + 4) !== 45) break;
        case 102:
          return Se(e, /(.+:)(.+)-([^]+)/, "$1" + ke + "$2-$3$1" + Os + (Qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~au(e, "stretch") ? dg(Se(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Qe(e, t + 1) !== 115) break;
    case 6444:
      switch (Qe(e, Vt(e) - 3 - (~au(e, "!important") && 10))) {
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
var MM = function(t, n, a, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Fd:
      t.return = dg(t.value, t.length);
      break;
    case rg:
      return Na([$o(t, {
        value: Se(t.value, "@", "@" + ke)
      })], o);
    case Rd:
      if (t.length) return fM(t.props, function(r) {
        switch (cM(r, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Na([$o(t, {
              props: [Se(r, /:(read-\w+)/, ":" + Os + "$1")]
            })], o);
          case "::placeholder":
            return Na([$o(t, {
              props: [Se(r, /:(plac\w+)/, ":" + ke + "input-$1")]
            }), $o(t, {
              props: [Se(r, /:(plac\w+)/, ":" + Os + "$1")]
            }), $o(t, {
              props: [Se(r, /:(plac\w+)/, et + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, DM = [MM], BM = function(t) {
  var n = t.key;
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(m) {
      var b = m.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || DM, r = {}, s, i = [];
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
  var u, d = [AM, EM];
  {
    var c, f = [wM, CM(function(m) {
      c.insert(m);
    })], p = xM(d.concat(o, f)), h = function(b) {
      return Na(bM(b), p);
    };
    u = function(b, $, k, C) {
      c = k, h(b ? b + "{" + $.styles + "}" : $.styles), C && (v.inserted[$.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new rM({
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
function OM(e) {
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
var PM = {
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
}, IM = /[A-Z]|^ms/g, RM = /_EMO_([^_]+?)_([^]*?)_EMO_/g, cg = function(t) {
  return t.charCodeAt(1) === 45;
}, If = function(t) {
  return t != null && typeof t != "boolean";
}, dl = /* @__PURE__ */ $M(function(e) {
  return cg(e) ? e : e.replace(IM, "-$&").toLowerCase();
}), Rf = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(RM, function(a, o, r) {
          return Bn = {
            name: o,
            styles: r,
            next: Bn
          }, o;
        });
  }
  return PM[t] !== 1 && !cg(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ps(e, t, n) {
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
        return Bn = {
          name: o.name,
          styles: o.styles,
          next: Bn
        }, o.name;
      var r = n;
      if (r.styles !== void 0) {
        var s = r.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Bn = {
              name: s.name,
              styles: s.styles,
              next: Bn
            }, s = s.next;
        var i = r.styles + ";";
        return i;
      }
      return FM(e, t, n);
    }
  }
  var u = n;
  if (t == null)
    return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function FM(e, t, n) {
  var a = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      a += Ps(e, t, n[o]) + ";";
  else
    for (var r in n) {
      var s = n[r];
      if (typeof s != "object") {
        var i = s;
        t != null && t[i] !== void 0 ? a += r + "{" + t[i] + "}" : If(i) && (a += dl(r) + ":" + Rf(r, i) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var u = 0; u < s.length; u++)
          If(s[u]) && (a += dl(r) + ":" + Rf(r, s[u]) + ";");
      else {
        var d = Ps(e, t, s);
        switch (r) {
          case "animation":
          case "animationName": {
            a += dl(r) + ":" + d + ";";
            break;
          }
          default:
            a += r + "{" + d + "}";
        }
      }
    }
  return a;
}
var Ff = /label:\s*([^\s;{]+)\s*(;|$)/g, Bn;
function cl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, o = "";
  Bn = void 0;
  var r = e[0];
  if (r == null || r.raw === void 0)
    a = !1, o += Ps(n, t, r);
  else {
    var s = r;
    o += s[0];
  }
  for (var i = 1; i < e.length; i++)
    if (o += Ps(n, t, e[i]), a) {
      var u = r;
      o += u[i];
    }
  Ff.lastIndex = 0;
  for (var d = "", c; (c = Ff.exec(o)) !== null; )
    d += "-" + c[1];
  var f = OM(o) + d;
  return {
    name: f,
    styles: o,
    next: Bn
  };
}
function fg(e, t, n) {
  var a = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (a += o + " ");
  }), a;
}
var VM = function(t, n, a) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, NM = function(t, n, a) {
  VM(t, n);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var r = n;
    do
      t.insert(n === r ? "." + o : "", r, t.sheet, !0), r = r.next;
    while (r !== void 0);
  }
};
function Vf(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function Nf(e, t, n) {
  var a = [], o = fg(e, a, n);
  return a.length < 2 ? n : o + t(a);
}
var LM = function(t) {
  var n = BM(t);
  n.sheet.speedy = function(i) {
    this.isSpeedy = i;
  }, n.compat = !0;
  var a = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = cl(d, n.registered, void 0);
    return NM(n, f), n.key + "-" + f.name;
  }, o = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = cl(d, n.registered), p = "animation-" + f.name;
    return Vf(n, {
      name: f.name,
      styles: "@keyframes " + p + "{" + f.styles + "}"
    }), p;
  }, r = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    var f = cl(d, n.registered);
    Vf(n, f);
  }, s = function() {
    for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
      d[c] = arguments[c];
    return Nf(n.registered, a, zM(d));
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
    getRegisteredStyles: fg.bind(null, n.registered),
    merge: Nf.bind(null, n.registered, a)
  };
}, zM = function e(t) {
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
}, pg = LM({
  key: "css"
}), Nd = pg.injectGlobal, nt = pg.css, HM = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function UM(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var WM = function(t, n) {
  n || (n = [0, ""]), t = String(t);
  var a = parseFloat(t, 10);
  return n[0] = a, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
}, hg = WM, ko = vg("in", document.body);
function ru(e, t) {
  var n = hg(getComputedStyle(e).getPropertyValue(t));
  return n[0] * mg(n[1], e);
}
function vg(e, t) {
  var n = document.createElement("div");
  n.style.height = "128" + e, t.appendChild(n);
  var a = ru(n, "height") / 128;
  return t.removeChild(n), a;
}
function mg(e, t) {
  if (!e) return null;
  switch (t = t || document.body, e = (e + "" || "px").trim().toLowerCase(), (t === window || t === document) && (t = document.body), e) {
    case "%":
      return t.clientHeight / 100;
    case "ch":
    case "ex":
      return vg(e, t);
    case "em":
      return ru(t, "font-size");
    case "rem":
      return ru(document.body, "font-size");
    case "vw":
      return window.innerWidth / 100;
    case "vh":
      return window.innerHeight / 100;
    case "vmin":
      return Math.min(window.innerWidth, window.innerHeight) / 100;
    case "vmax":
      return Math.max(window.innerWidth, window.innerHeight) / 100;
    case "in":
      return ko;
    case "cm":
      return ko / 2.54;
    case "mm":
      return ko / 25.4;
    case "pt":
      return ko / 72;
    case "pc":
      return ko / 6;
    case "px":
      return 1;
  }
  var n = hg(e);
  if (!isNaN(n[0]) && n[1]) {
    var a = mg(n[1], t);
    return typeof a == "number" ? n[0] * a : null;
  }
  return null;
}
function gg() {
  const e = () => Math.floor((1 + crypto.getRandomValues(new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}
function KM(e, t) {
  const n = e.substr(4, e.length - 5);
  return getComputedStyle(t).getPropertyValue(n);
}
function jM(e, t, n = 0) {
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
function Ld(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function yg(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function xr() {
}
var nr = 0.7, Is = 1 / nr, La = "\\s*([+-]?\\d+)\\s*", ar = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ht = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", YM = /^#([0-9a-f]{3,8})$/, GM = new RegExp(`^rgb\\(${La},${La},${La}\\)$`), qM = new RegExp(`^rgb\\(${Ht},${Ht},${Ht}\\)$`), XM = new RegExp(`^rgba\\(${La},${La},${La},${ar}\\)$`), JM = new RegExp(`^rgba\\(${Ht},${Ht},${Ht},${ar}\\)$`), ZM = new RegExp(`^hsl\\(${ar},${Ht},${Ht}\\)$`), QM = new RegExp(`^hsla\\(${ar},${Ht},${Ht},${ar}\\)$`), Lf = {
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
Ld(xr, ra, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: zf,
  // Deprecated! Use color.formatHex.
  formatHex: zf,
  formatHex8: eD,
  formatHsl: tD,
  formatRgb: Hf,
  toString: Hf
});
function zf() {
  return this.rgb().formatHex();
}
function eD() {
  return this.rgb().formatHex8();
}
function tD() {
  return bg(this).formatHsl();
}
function Hf() {
  return this.rgb().formatRgb();
}
function ra(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = YM.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Uf(t) : n === 3 ? new st(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Wr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Wr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = GM.exec(e)) ? new st(t[1], t[2], t[3], 1) : (t = qM.exec(e)) ? new st(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = XM.exec(e)) ? Wr(t[1], t[2], t[3], t[4]) : (t = JM.exec(e)) ? Wr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ZM.exec(e)) ? jf(t[1], t[2] / 100, t[3] / 100, 1) : (t = QM.exec(e)) ? jf(t[1], t[2] / 100, t[3] / 100, t[4]) : Lf.hasOwnProperty(e) ? Uf(Lf[e]) : e === "transparent" ? new st(NaN, NaN, NaN, 0) : null;
}
function Uf(e) {
  return new st(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Wr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new st(e, t, n, a);
}
function nD(e) {
  return e instanceof xr || (e = ra(e)), e ? (e = e.rgb(), new st(e.r, e.g, e.b, e.opacity)) : new st();
}
function su(e, t, n, a) {
  return arguments.length === 1 ? nD(e) : new st(e, t, n, a ?? 1);
}
function st(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Ld(st, su, yg(xr, {
  brighter(e) {
    return e = e == null ? Is : Math.pow(Is, e), new st(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nr : Math.pow(nr, e), new st(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new st(Qn(this.r), Qn(this.g), Qn(this.b), Rs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Wf,
  // Deprecated! Use color.formatHex.
  formatHex: Wf,
  formatHex8: aD,
  formatRgb: Kf,
  toString: Kf
}));
function Wf() {
  return `#${jn(this.r)}${jn(this.g)}${jn(this.b)}`;
}
function aD() {
  return `#${jn(this.r)}${jn(this.g)}${jn(this.b)}${jn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Kf() {
  const e = Rs(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qn(this.r)}, ${Qn(this.g)}, ${Qn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Rs(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function jn(e) {
  return e = Qn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jf(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new At(e, t, n, a);
}
function bg(e) {
  if (e instanceof At) return new At(e.h, e.s, e.l, e.opacity);
  if (e instanceof xr || (e = ra(e)), !e) return new At();
  if (e instanceof At) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), r = Math.max(t, n, a), s = NaN, i = r - o, u = (r + o) / 2;
  return i ? (t === r ? s = (n - a) / i + (n < a) * 6 : n === r ? s = (a - t) / i + 2 : s = (t - n) / i + 4, i /= u < 0.5 ? r + o : 2 - r - o, s *= 60) : i = u > 0 && u < 1 ? 0 : s, new At(s, i, u, e.opacity);
}
function zd(e, t, n, a) {
  return arguments.length === 1 ? bg(e) : new At(e, t, n, a ?? 1);
}
function At(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Ld(At, zd, yg(xr, {
  brighter(e) {
    return e = e == null ? Is : Math.pow(Is, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? nr : Math.pow(nr, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new st(
      fl(e >= 240 ? e - 240 : e + 120, o, a),
      fl(e, o, a),
      fl(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new At(Yf(this.h), Kr(this.s), Kr(this.l), Rs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Rs(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Yf(this.h)}, ${Kr(this.s) * 100}%, ${Kr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Yf(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Kr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fl(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Bo = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || ["#4D8CFD", "#FF6B7E", "#F4B83E", "#A6CC74", "#00C19A", "#6859BE"], oD = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || ["#4D8CFD", "#FF6B7E", "#FFC16D", "#A6CC74", "#00C19A", "#7887E0"], An = (e) => `--vis-${Fa(e) ? `color${e % Bo.length}` : e}`;
function rD(e, t = 0.4) {
  const n = zd(e);
  return n.l = n.l * (1 + t), n.formatHex();
}
function sD(e, t = 0.4, n = 0.6) {
  const a = zd(e);
  return a.s = a.s * (1 - n), a.l = a.l * (1 - t), a.formatHex();
}
const Fs = 10, iu = [
  { id: "stripes-diagonal", svg: '<path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000"/>' },
  { id: "dots", svg: '<path d="m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3" fill"#000"/>' },
  { id: "stripes-vertical", svg: '<path d="M 5,-1 L5,11" stroke="#000"/>' },
  { id: "crosshatch", svg: '<path d="M0 0L10 10ZM10 0L0 10Z" stroke="#000"/>' },
  { id: "waves", svg: '<path d="M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z" fill="#000"/>' },
  { id: "circles", svg: '<circle cx="5" cy="5" r="3" stroke="#000" fill="#fff"/>' }
], lu = [
  { id: "circle", marker: '<circle cx="5" cy="5" r="5"/>', dashArray: [] },
  { id: "triangle", marker: '<path d="M5,0 L10,9 L0,9Z">', dashArray: [9, 1] },
  { id: "diamond", marker: '<path d="M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z">', dashArray: [2] },
  { id: "arrow", marker: '<path d="M4 0 0 0 6 5 0 10 4 10 10 5Z">', dashArray: [2, 3, 8, 3] },
  { id: "square", marker: '<rect x="1" y="1" width="8" height="8"/>', dashArray: [6] },
  { id: "star", marker: '<path d="m2 9 3-9 3 9L0 3h10Z"/>', dashArray: [1, 6] }
];
function En(e) {
  return `vis-${`pattern-${e.svg ? "fill" : "marker"}`}-${e.id}`;
}
const iD = (e) => `<mask id="${En(e)}">
    <pattern id="${e.id}" viewBox="0 0 10 10" width="${Fs}" height="${Fs}" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${e.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${e.id})"/>
  </mask>`, lD = (e, t) => `<marker id="${En(e)}"
    fill="var(${An(t)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="${Fs}"
    markerHeight="${Fs}">
    ${e.marker}
  </marker>`;
function uD() {
  const e = iu.map(iD).concat(lu.map(lD)).join(""), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.style.position = "fixed", t.style.zIndex = "-99999999", t.innerHTML = `<defs>${e}</defs>`, document.body.appendChild(t);
}
typeof window < "u" && uD();
const _g = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || 0.5, wg = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT) || [" ", "-", ".", ","], xg = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT) || "-", Gf = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || {
  text: "",
  fontSize: 12,
  fontFamily: "var(--vis-font-family)",
  lineHeight: 1.25,
  marginTop: 0,
  marginBottom: 0
};
Nd`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${_g};
    --vis-color-main: var(${An(0)});
    --vis-color-main-light: ${rD(Bo[0])};
    --vis-color-main-dark: ${sD(Bo[0])};
    --vis-color-grey: #2a2a2a;
    ${Bo.map((e, t) => `${An(t)}: ${e};`)}
    ${oD.map((e, t) => `--vis-dark-color${t}: ${e};`)}
    ${iu.map((e, t) => `
      --${En(e)}: url(#${En(e)});
      --vis-pattern-fill${t}: var(--${En(e)});
    `)}
    ${lu.map((e, t) => {
  var n;
  return `
      --${En(e)}: url(#${En(e)});
      --vis-pattern-marker${t}: var(--${En(e)});
      --vis-pattern-dasharray${t}: ${(n = e.dashArray) === null || n === void 0 ? void 0 : n.join(" ")};
    `;
})}

    body.theme-dark {
      ${Bo.map((e, t) => `${An(t)}: var(--vis-dark-color${t});`)}
    }

    body.theme-patterns {
      ${iu.map((e, t) => `path[style*="fill: var(${An(t)})"]  {
        mask: var(--vis-pattern-fill${t});
      }`)}
      ${lu.map((e, t) => `
      path[stroke="var(${An(t)})"]:not([style*="fill"]),
      path[style*="stroke: var(${An(t)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${t});
        stroke-dasharray: var(--vis-pattern-dasharray${t});
      }
    `)}
}
`;
function dD(e = window == null ? void 0 : window.document.body) {
  return e ? +KM("var(--vis-font-wh-ratio)", e) : _g;
}
var cD = { value: () => {
} };
function Cg() {
  for (var e = 0, t = arguments.length, n = {}, a; e < t; ++e) {
    if (!(a = arguments[e] + "") || a in n || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    n[a] = [];
  }
  return new ss(n);
}
function ss(e) {
  this._ = e;
}
function fD(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var a = "", o = n.indexOf(".");
    if (o >= 0 && (a = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: a };
  });
}
ss.prototype = Cg.prototype = {
  constructor: ss,
  on: function(e, t) {
    var n = this._, a = fD(e + "", n), o, r = -1, s = a.length;
    if (arguments.length < 2) {
      for (; ++r < s; ) if ((o = (e = a[r]).type) && (o = pD(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++r < s; )
      if (o = (e = a[r]).type) n[o] = qf(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = qf(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ss(e);
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
function pD(e, t) {
  for (var n = 0, a = e.length, o; n < a; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function qf(e, t, n) {
  for (var a = 0, o = e.length; a < o; ++a)
    if (e[a].name === t) {
      e[a] = cD, e = e.slice(0, a).concat(e.slice(a + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var eo = 0, Oo = 0, So = 0, $g = 1e3, Vs, Po, Ns = 0, sa = 0, Ei = 0, or = typeof performance == "object" && performance.now ? performance : Date, kg = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hd() {
  return sa || (kg(hD), sa = or.now() + Ei);
}
function hD() {
  sa = 0;
}
function Ls() {
  this._call = this._time = this._next = null;
}
Ls.prototype = Sg.prototype = {
  constructor: Ls,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Hd() : +n) + (t == null ? 0 : +t), !this._next && Po !== this && (Po ? Po._next = this : Vs = this, Po = this), this._call = e, this._time = n, uu();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, uu());
  }
};
function Sg(e, t, n) {
  var a = new Ls();
  return a.restart(e, t, n), a;
}
function vD() {
  Hd(), ++eo;
  for (var e = Vs, t; e; )
    (t = sa - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --eo;
}
function Xf() {
  sa = (Ns = or.now()) + Ei, eo = Oo = 0;
  try {
    vD();
  } finally {
    eo = 0, gD(), sa = 0;
  }
}
function mD() {
  var e = or.now(), t = e - Ns;
  t > $g && (Ei -= t, Ns = e);
}
function gD() {
  for (var e, t = Vs, n, a = 1 / 0; t; )
    t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Vs = n);
  Po = e, uu(a);
}
function uu(e) {
  if (!eo) {
    Oo && (Oo = clearTimeout(Oo));
    var t = e - sa;
    t > 24 ? (e < 1 / 0 && (Oo = setTimeout(Xf, e - or.now() - Ei)), So && (So = clearInterval(So))) : (So || (Ns = or.now(), So = setInterval(mD, $g)), eo = 1, kg(Xf));
  }
}
function Jf(e, t, n) {
  var a = new Ls();
  return t = t == null ? 0 : +t, a.restart((o) => {
    a.stop(), e(o + t);
  }, t, n), a;
}
var yD = Cg("start", "end", "cancel", "interrupt"), bD = [], Tg = 0, Zf = 1, du = 2, is = 3, Qf = 4, cu = 5, ls = 6;
function Mi(e, t, n, a, o, r) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  _D(e, n, {
    name: t,
    index: a,
    // For context during callback.
    group: o,
    // For context during callback.
    on: yD,
    tween: bD,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: Tg
  });
}
function Ud(e, t) {
  var n = Bt(e, t);
  if (n.state > Tg) throw new Error("too late; already scheduled");
  return n;
}
function Jt(e, t) {
  var n = Bt(e, t);
  if (n.state > is) throw new Error("too late; already running");
  return n;
}
function Bt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function _D(e, t, n) {
  var a = e.__transition, o;
  a[t] = n, n.timer = Sg(r, 0, n.time);
  function r(d) {
    n.state = Zf, n.timer.restart(s, n.delay, n.time), n.delay <= d && s(d - n.delay);
  }
  function s(d) {
    var c, f, p, h;
    if (n.state !== Zf) return u();
    for (c in a)
      if (h = a[c], h.name === n.name) {
        if (h.state === is) return Jf(s);
        h.state === Qf ? (h.state = ls, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete a[c]) : +c < t && (h.state = ls, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete a[c]);
      }
    if (Jf(function() {
      n.state === is && (n.state = Qf, n.timer.restart(i, n.delay, n.time), i(d));
    }), n.state = du, n.on.call("start", e, e.__data__, n.index, n.group), n.state === du) {
      for (n.state = is, o = new Array(p = n.tween.length), c = 0, f = -1; c < p; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function i(d) {
    for (var c = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(u), n.state = cu, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, c);
    n.state === cu && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = ls, n.timer.stop(), delete a[t];
    for (var d in a) return;
    delete e.__transition;
  }
}
function Wd(e, t) {
  var n = e.__transition, a, o, r = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((a = n[s]).name !== t) {
        r = !1;
        continue;
      }
      o = a.state > du && a.state < cu, a.state = ls, a.timer.stop(), a.on.call(o ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete n[s];
    }
    r && delete e.__transition;
  }
}
function wD(e) {
  return this.each(function() {
    Wd(this, e);
  });
}
const Kd = (e) => () => e;
function xD(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function CD(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function $D(e) {
  return (e = +e) == 1 ? Ag : function(t, n) {
    return n - t ? CD(t, n, e) : Kd(isNaN(t) ? n : t);
  };
}
function Ag(e, t) {
  var n = t - e;
  return n ? xD(e, n) : Kd(isNaN(e) ? t : e);
}
const zs = function e(t) {
  var n = $D(t);
  function a(o, r) {
    var s = n((o = su(o)).r, (r = su(r)).r), i = n(o.g, r.g), u = n(o.b, r.b), d = Ag(o.opacity, r.opacity);
    return function(c) {
      return o.r = s(c), o.g = i(c), o.b = u(c), o.opacity = d(c), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function kD(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(r) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - r) + t[o] * r;
    return a;
  };
}
function SD(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function TD(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), r = new Array(n), s;
  for (s = 0; s < a; ++s) o[s] = yo(e[s], t[s]);
  for (; s < n; ++s) r[s] = t[s];
  return function(i) {
    for (s = 0; s < a; ++s) r[s] = o[s](i);
    return r;
  };
}
function AD(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function St(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function ED(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = yo(e[o], t[o]) : a[o] = t[o];
  return function(r) {
    for (o in n) a[o] = n[o](r);
    return a;
  };
}
var fu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pl = new RegExp(fu.source, "g");
function MD(e) {
  return function() {
    return e;
  };
}
function DD(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Eg(e, t) {
  var n = fu.lastIndex = pl.lastIndex = 0, a, o, r, s = -1, i = [], u = [];
  for (e = e + "", t = t + ""; (a = fu.exec(e)) && (o = pl.exec(t)); )
    (r = o.index) > n && (r = t.slice(n, r), i[s] ? i[s] += r : i[++s] = r), (a = a[0]) === (o = o[0]) ? i[s] ? i[s] += o : i[++s] = o : (i[++s] = null, u.push({ i: s, x: St(a, o) })), n = pl.lastIndex;
  return n < t.length && (r = t.slice(n), i[s] ? i[s] += r : i[++s] = r), i.length < 2 ? u[0] ? DD(u[0].x) : MD(t) : (t = u.length, function(d) {
    for (var c = 0, f; c < t; ++c) i[(f = u[c]).i] = f.x(d);
    return i.join("");
  });
}
function yo(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Kd(t) : (n === "number" ? St : n === "string" ? (a = ra(t)) ? (t = a, zs) : Eg : t instanceof ra ? zs : t instanceof Date ? AD : SD(t) ? kD : Array.isArray(t) ? TD : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ED : St)(e, t);
}
function jd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var ep = 180 / Math.PI, pu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Mg(e, t, n, a, o, r) {
  var s, i, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * a) && (n -= e * u, a -= t * u), (i = Math.sqrt(n * n + a * a)) && (n /= i, a /= i, u /= i), e * a < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: r,
    rotate: Math.atan2(t, e) * ep,
    skewX: Math.atan(u) * ep,
    scaleX: s,
    scaleY: i
  };
}
var jr;
function BD(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? pu : Mg(t.a, t.b, t.c, t.d, t.e, t.f);
}
function OD(e) {
  return e == null || (jr || (jr = document.createElementNS("http://www.w3.org/2000/svg", "g")), jr.setAttribute("transform", e), !(e = jr.transform.baseVal.consolidate())) ? pu : (e = e.matrix, Mg(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Dg(e, t, n, a) {
  function o(d) {
    return d.length ? d.pop() + " " : "";
  }
  function r(d, c, f, p, h, v) {
    if (d !== f || c !== p) {
      var m = h.push("translate(", null, t, null, n);
      v.push({ i: m - 4, x: St(d, f) }, { i: m - 2, x: St(c, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(d, c, f, p) {
    d !== c ? (d - c > 180 ? c += 360 : c - d > 180 && (d += 360), p.push({ i: f.push(o(f) + "rotate(", null, a) - 2, x: St(d, c) })) : c && f.push(o(f) + "rotate(" + c + a);
  }
  function i(d, c, f, p) {
    d !== c ? p.push({ i: f.push(o(f) + "skewX(", null, a) - 2, x: St(d, c) }) : c && f.push(o(f) + "skewX(" + c + a);
  }
  function u(d, c, f, p, h, v) {
    if (d !== f || c !== p) {
      var m = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: m - 4, x: St(d, f) }, { i: m - 2, x: St(c, p) });
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
var PD = Dg(BD, "px, ", "px)", "deg)"), ID = Dg(OD, ", ", ")", ")");
function RD(e, t) {
  t === void 0 && (t = e, e = yo);
  for (var n = 0, a = t.length - 1, o = t[0], r = new Array(a < 0 ? 0 : a); n < a; ) r[n] = e(o, o = t[++n]);
  return function(s) {
    var i = Math.max(0, Math.min(a - 1, Math.floor(s *= a)));
    return r[i](s - i);
  };
}
function FD(e, t) {
  var n, a;
  return function() {
    var o = Jt(this, e), r = o.tween;
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
function VD(e, t, n) {
  var a, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var r = Jt(this, e), s = r.tween;
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
function ND(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var a = Bt(this.node(), n).tween, o = 0, r = a.length, s; o < r; ++o)
      if ((s = a[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? FD : VD)(n, e, t));
}
function Yd(e, t, n) {
  var a = e._id;
  return e.each(function() {
    var o = Jt(this, a);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Bt(o, a).value[t];
  };
}
function Bg(e, t) {
  var n;
  return (typeof t == "number" ? St : t instanceof ra ? zs : (n = ra(t)) ? (t = n, zs) : Eg)(e, t);
}
function LD(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function zD(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function HD(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function UD(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function WD(e, t, n) {
  var a, o, r;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = i + "", s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i)));
  };
}
function KD(e, t, n) {
  var a, o, r;
  return function() {
    var s, i = n(this), u;
    return i == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = i + "", s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i)));
  };
}
function jD(e, t) {
  var n = $i(e), a = n === "transform" ? ID : Bg;
  return this.attrTween(e, typeof t == "function" ? (n.local ? KD : WD)(n, a, Yd(this, "attr." + e, t)) : t == null ? (n.local ? zD : LD)(n) : (n.local ? UD : HD)(n, a, t));
}
function YD(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function GD(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function qD(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && GD(e, r)), n;
  }
  return o._value = t, o;
}
function XD(e, t) {
  var n, a;
  function o() {
    var r = t.apply(this, arguments);
    return r !== a && (n = (a = r) && YD(e, r)), n;
  }
  return o._value = t, o;
}
function JD(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var a = $i(e);
  return this.tween(n, (a.local ? qD : XD)(a, t));
}
function ZD(e, t) {
  return function() {
    Ud(this, e).delay = +t.apply(this, arguments);
  };
}
function QD(e, t) {
  return t = +t, function() {
    Ud(this, e).delay = t;
  };
}
function e3(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ZD : QD)(t, e)) : Bt(this.node(), t).delay;
}
function t3(e, t) {
  return function() {
    Jt(this, e).duration = +t.apply(this, arguments);
  };
}
function n3(e, t) {
  return t = +t, function() {
    Jt(this, e).duration = t;
  };
}
function a3(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? t3 : n3)(t, e)) : Bt(this.node(), t).duration;
}
function o3(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Jt(this, e).ease = t;
  };
}
function r3(e) {
  var t = this._id;
  return arguments.length ? this.each(o3(t, e)) : Bt(this.node(), t).ease;
}
function s3(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Jt(this, e).ease = n;
  };
}
function i3(e) {
  if (typeof e != "function") throw new Error();
  return this.each(s3(this._id, e));
}
function l3(e) {
  typeof e != "function" && (e = Vm(e));
  for (var t = this._groups, n = t.length, a = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, i = a[o] = [], u, d = 0; d < s; ++d)
      (u = r[d]) && e.call(u, u.__data__, d, r) && i.push(u);
  return new vn(a, this._parents, this._name, this._id);
}
function u3(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, a = t.length, o = n.length, r = Math.min(a, o), s = new Array(a), i = 0; i < r; ++i)
    for (var u = t[i], d = n[i], c = u.length, f = s[i] = new Array(c), p, h = 0; h < c; ++h)
      (p = u[h] || d[h]) && (f[h] = p);
  for (; i < a; ++i)
    s[i] = t[i];
  return new vn(s, this._parents, this._name, this._id);
}
function d3(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function c3(e, t, n) {
  var a, o, r = d3(t) ? Ud : Jt;
  return function() {
    var s = r(this, e), i = s.on;
    i !== a && (o = (a = i).copy()).on(t, n), s.on = o;
  };
}
function f3(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Bt(this.node(), n).on.on(e) : this.each(c3(n, e, t));
}
function p3(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function h3() {
  return this.on("end.remove", p3(this._id));
}
function v3(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Md(e));
  for (var a = this._groups, o = a.length, r = new Array(o), s = 0; s < o; ++s)
    for (var i = a[s], u = i.length, d = r[s] = new Array(u), c, f, p = 0; p < u; ++p)
      (c = i[p]) && (f = e.call(c, c.__data__, p, i)) && ("__data__" in c && (f.__data__ = c.__data__), d[p] = f, Mi(d[p], t, n, p, d, Bt(c, n)));
  return new vn(r, this._parents, t, n);
}
function m3(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Fm(e));
  for (var a = this._groups, o = a.length, r = [], s = [], i = 0; i < o; ++i)
    for (var u = a[i], d = u.length, c, f = 0; f < d; ++f)
      if (c = u[f]) {
        for (var p = e.call(c, c.__data__, f, u), h, v = Bt(c, n), m = 0, b = p.length; m < b; ++m)
          (h = p[m]) && Mi(h, t, n, m, p, v);
        r.push(p), s.push(c);
      }
  return new vn(r, s, t, n);
}
var g3 = _r.prototype.constructor;
function y3() {
  return new g3(this._groups, this._parents);
}
function b3(e, t) {
  var n, a, o;
  return function() {
    var r = Ja(this, e), s = (this.style.removeProperty(e), Ja(this, e));
    return r === s ? null : r === n && s === a ? o : o = t(n = r, a = s);
  };
}
function Og(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function _3(e, t, n) {
  var a, o = n + "", r;
  return function() {
    var s = Ja(this, e);
    return s === o ? null : s === a ? r : r = t(a = s, n);
  };
}
function w3(e, t, n) {
  var a, o, r;
  return function() {
    var s = Ja(this, e), i = n(this), u = i + "";
    return i == null && (u = i = (this.style.removeProperty(e), Ja(this, e))), s === u ? null : s === a && u === o ? r : (o = u, r = t(a = s, i));
  };
}
function x3(e, t) {
  var n, a, o, r = "style." + t, s = "end." + r, i;
  return function() {
    var u = Jt(this, e), d = u.on, c = u.value[r] == null ? i || (i = Og(t)) : void 0;
    (d !== n || o !== c) && (a = (n = d).copy()).on(s, o = c), u.on = a;
  };
}
function C3(e, t, n) {
  var a = (e += "") == "transform" ? PD : Bg;
  return t == null ? this.styleTween(e, b3(e, a)).on("end.style." + e, Og(e)) : typeof t == "function" ? this.styleTween(e, w3(e, a, Yd(this, "style." + e, t))).each(x3(this._id, e)) : this.styleTween(e, _3(e, a, t), n).on("end.style." + e, null);
}
function $3(e, t, n) {
  return function(a) {
    this.style.setProperty(e, t.call(this, a), n);
  };
}
function k3(e, t, n) {
  var a, o;
  function r() {
    var s = t.apply(this, arguments);
    return s !== o && (a = (o = s) && $3(e, s, n)), a;
  }
  return r._value = t, r;
}
function S3(e, t, n) {
  var a = "style." + (e += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (t == null) return this.tween(a, null);
  if (typeof t != "function") throw new Error();
  return this.tween(a, k3(e, t, n ?? ""));
}
function T3(e) {
  return function() {
    this.textContent = e;
  };
}
function A3(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function E3(e) {
  return this.tween("text", typeof e == "function" ? A3(Yd(this, "text", e)) : T3(e == null ? "" : e + ""));
}
function M3(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function D3(e) {
  var t, n;
  function a() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && M3(o)), t;
  }
  return a._value = e, a;
}
function B3(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, D3(e));
}
function O3() {
  for (var e = this._name, t = this._id, n = Pg(), a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var s = a[r], i = s.length, u, d = 0; d < i; ++d)
      if (u = s[d]) {
        var c = Bt(u, t);
        Mi(u, e, n, d, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new vn(a, this._parents, e, n);
}
function P3() {
  var e, t, n = this, a = n._id, o = n.size();
  return new Promise(function(r, s) {
    var i = { value: s }, u = { value: function() {
      --o === 0 && r();
    } };
    n.each(function() {
      var d = Jt(this, a), c = d.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(i), t._.interrupt.push(i), t._.end.push(u)), d.on = t;
    }), o === 0 && r();
  });
}
var I3 = 0;
function vn(e, t, n, a) {
  this._groups = e, this._parents = t, this._name = n, this._id = a;
}
function Pg() {
  return ++I3;
}
var en = _r.prototype;
vn.prototype = {
  constructor: vn,
  select: v3,
  selectAll: m3,
  selectChild: en.selectChild,
  selectChildren: en.selectChildren,
  filter: l3,
  merge: u3,
  selection: y3,
  transition: O3,
  call: en.call,
  nodes: en.nodes,
  node: en.node,
  size: en.size,
  empty: en.empty,
  each: en.each,
  on: f3,
  attr: jD,
  attrTween: JD,
  style: C3,
  styleTween: S3,
  text: E3,
  textTween: B3,
  remove: h3,
  tween: ND,
  delay: e3,
  duration: a3,
  ease: r3,
  easeVarying: i3,
  end: P3,
  [Symbol.iterator]: en[Symbol.iterator]
};
function R3(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var F3 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: R3
};
function V3(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function N3(e) {
  var t, n;
  e instanceof vn ? (t = e._id, e = e._name) : (t = Pg(), (n = F3).time = Hd(), e = e == null ? null : e + "");
  for (var a = this._groups, o = a.length, r = 0; r < o; ++r)
    for (var s = a[r], i = s.length, u, d = 0; d < i; ++d)
      (u = s[d]) && Mi(u, e, t, d, s, n || V3(u, t));
  return new vn(a, this._parents, e, t);
}
_r.prototype.interrupt = wD;
_r.prototype.transition = N3;
function Yn(e, t, n) {
  return e.nodes().forEach((a) => Wd(a)), t ? e.transition().duration(t) : e;
}
class Gd {
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
var Ae;
(function(e) {
  e.X = "x", e.Y = "y";
})(Ae || (Ae = {}));
function Ot(e, t) {
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
function Ig(e, t) {
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
const tp = Symbol("implicit");
function qd() {
  var e = new gf(), t = [], n = [], a = tp;
  function o(r) {
    let s = e.get(r);
    if (s === void 0) {
      if (a !== tp) return a;
      e.set(r, s = t.push(r) - 1);
    }
    return n[s % n.length];
  }
  return o.domain = function(r) {
    if (!arguments.length) return t.slice();
    t = [], e = new gf();
    for (const s of r)
      e.has(s) || e.set(s, t.push(s) - 1);
    return o;
  }, o.range = function(r) {
    return arguments.length ? (n = Array.from(r), o) : n.slice();
  }, o.unknown = function(r) {
    return arguments.length ? (a = r, o) : a;
  }, o.copy = function() {
    return qd(t, n).unknown(a);
  }, Ot.apply(o, arguments), o;
}
function Xd() {
  var e = qd().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, r, s, i = !1, u = 0, d = 0, c = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = o < a, v = h ? o : a, m = h ? a : o;
    r = (m - v) / Math.max(1, p - u + d * 2), i && (r = Math.floor(r)), v += (m - v - r * (p - u)) * c, s = r * (1 - u), i && (v = Math.round(v), s = Math.round(s));
    var b = AE(p).map(function($) {
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
    return Xd(t(), [a, o]).round(i).paddingInner(u).paddingOuter(d).align(c);
  }, Ot.apply(f(), arguments);
}
function Rg(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Rg(t());
  }, e;
}
function L3() {
  return Rg(Xd.apply(null, arguments).paddingInner(1));
}
function z3(e) {
  return function() {
    return e;
  };
}
function hu(e) {
  return +e;
}
var np = [0, 1];
function it(e) {
  return e;
}
function vu(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : z3(isNaN(t) ? NaN : 0.5);
}
function H3(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function U3(e, t, n) {
  var a = e[0], o = e[1], r = t[0], s = t[1];
  return o < a ? (a = vu(o, a), r = n(s, r)) : (a = vu(a, o), r = n(r, s)), function(i) {
    return r(a(i));
  };
}
function W3(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), r = new Array(a), s = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < a; )
    o[s] = vu(e[s], e[s + 1]), r[s] = n(t[s], t[s + 1]);
  return function(i) {
    var u = ki(e, i, 1, a) - 1;
    return r[u](o[u](i));
  };
}
function Cr(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Di() {
  var e = np, t = np, n = yo, a, o, r, s = it, i, u, d;
  function c() {
    var p = Math.min(e.length, t.length);
    return s !== it && (s = H3(e[0], e[p - 1])), i = p > 2 ? W3 : U3, u = d = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? r : (u || (u = i(e.map(a), t, n)))(a(s(p)));
  }
  return f.invert = function(p) {
    return s(o((d || (d = i(t, e.map(a), St)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, hu), c()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), c()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), n = jd, c();
  }, f.clamp = function(p) {
    return arguments.length ? (s = p ? !0 : it, c()) : s !== it;
  }, f.interpolate = function(p) {
    return arguments.length ? (n = p, c()) : n;
  }, f.unknown = function(p) {
    return arguments.length ? (r = p, f) : r;
  }, function(p, h) {
    return a = p, o = h, c();
  };
}
function Fg() {
  return Di()(it, it);
}
function K3(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Hs(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function to(e) {
  return e = Hs(Math.abs(e)), e ? e[1] : NaN;
}
function j3(e, t) {
  return function(n, a) {
    for (var o = n.length, r = [], s = 0, i = e[0], u = 0; o > 0 && i > 0 && (u + i + 1 > a && (i = Math.max(1, a - u)), r.push(n.substring(o -= i, o + i)), !((u += i + 1) > a)); )
      i = e[s = (s + 1) % e.length];
    return r.reverse().join(t);
  };
}
function Y3(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var G3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function rr(e) {
  if (!(t = G3.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Jd({
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
rr.prototype = Jd.prototype;
function Jd(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Jd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function q3(e) {
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
var Vg;
function X3(e, t) {
  var n = Hs(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], r = o - (Vg = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = a.length;
  return r === s ? a : r > s ? a + new Array(r - s + 1).join("0") : r > 0 ? a.slice(0, r) + "." + a.slice(r) : "0." + new Array(1 - r).join("0") + Hs(e, Math.max(0, t + r - 1))[0];
}
function ap(e, t) {
  var n = Hs(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const op = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: K3,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ap(e * 100, t),
  r: ap,
  s: X3,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function rp(e) {
  return e;
}
var sp = Array.prototype.map, ip = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function J3(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? rp : j3(sp.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? rp : Y3(sp.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", i = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = rr(f);
    var p = f.fill, h = f.align, v = f.sign, m = f.symbol, b = f.zero, $ = f.width, k = f.comma, C = f.precision, A = f.trim, T = f.type;
    T === "n" ? (k = !0, T = "g") : op[T] || (C === void 0 && (C = 12), A = !0, T = "g"), (b || p === "0" && h === "=") && (b = !0, p = "0", h = "=");
    var M = m === "$" ? n : m === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", E = m === "$" ? a : /[%p]/.test(T) ? s : "", N = op[T], R = /[defgprs%]/.test(T);
    C = C === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function P(I) {
      var F = M, Y = E, z, H, ee;
      if (T === "c")
        Y = N(I) + Y, I = "";
      else {
        I = +I;
        var re = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? u : N(Math.abs(I), C), A && (I = q3(I)), re && +I == 0 && v !== "+" && (re = !1), F = (re ? v === "(" ? v : i : v === "-" || v === "(" ? "" : v) + F, Y = (T === "s" ? ip[8 + Vg / 3] : "") + Y + (re && v === "(" ? ")" : ""), R) {
          for (z = -1, H = I.length; ++z < H; )
            if (ee = I.charCodeAt(z), 48 > ee || ee > 57) {
              Y = (ee === 46 ? o + I.slice(z + 1) : I.slice(z)) + Y, I = I.slice(0, z);
              break;
            }
        }
      }
      k && !b && (I = t(I, 1 / 0));
      var be = F.length + I.length + Y.length, q = be < $ ? new Array($ - be + 1).join(p) : "";
      switch (k && b && (I = t(q + I, q.length ? $ - Y.length : 1 / 0), q = ""), h) {
        case "<":
          I = F + I + Y + q;
          break;
        case "=":
          I = F + q + I + Y;
          break;
        case "^":
          I = q.slice(0, be = q.length >> 1) + F + I + Y + q.slice(be);
          break;
        default:
          I = q + F + I + Y;
          break;
      }
      return r(I);
    }
    return P.toString = function() {
      return f + "";
    }, P;
  }
  function c(f, p) {
    var h = d((f = rr(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(to(p) / 3))) * 3, m = Math.pow(10, -v), b = ip[8 + v / 3];
    return function($) {
      return h(m * $) + b;
    };
  }
  return {
    format: d,
    formatPrefix: c
  };
}
var Yr, Zd, Ng;
Z3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Z3(e) {
  return Yr = J3(e), Zd = Yr.format, Ng = Yr.formatPrefix, Yr;
}
function Q3(e) {
  return Math.max(0, -to(Math.abs(e)));
}
function eB(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(to(t) / 3))) * 3 - to(Math.abs(e)));
}
function tB(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, to(t) - to(e)) + 1;
}
function nB(e, t, n, a) {
  var o = eu(e, t, n), r;
  switch (a = rr(a ?? ",f"), a.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(r = eB(o, s)) && (a.precision = r), Ng(a, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(r = tB(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = r - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(r = Q3(o)) && (a.precision = r - (a.type === "%") * 2);
      break;
    }
  }
  return Zd(a);
}
function _a(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Zl(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return nB(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, r = a.length - 1, s = a[o], i = a[r], u, d, c = 10;
    for (i < s && (d = s, s = i, i = d, d = o, o = r, r = d); c-- > 0; ) {
      if (d = Ql(s, i, n), d === u)
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
function Lg() {
  var e = Fg();
  return e.copy = function() {
    return Cr(e, Lg());
  }, Ot.apply(e, arguments), _a(e);
}
function zg(e) {
  var t;
  function n(a) {
    return a == null || isNaN(a = +a) ? t : a;
  }
  return n.invert = n, n.domain = n.range = function(a) {
    return arguments.length ? (e = Array.from(a, hu), n) : e.slice();
  }, n.unknown = function(a) {
    return arguments.length ? (t = a, n) : t;
  }, n.copy = function() {
    return zg(e).unknown(t);
  }, e = arguments.length ? Array.from(e, hu) : [0, 1], _a(n);
}
function Hg(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], r = e[a], s;
  return r < o && (s = n, n = a, a = s, s = o, o = r, r = s), e[n] = t.floor(o), e[a] = t.ceil(r), e;
}
function lp(e) {
  return Math.log(e);
}
function up(e) {
  return Math.exp(e);
}
function aB(e) {
  return -Math.log(-e);
}
function oB(e) {
  return -Math.exp(-e);
}
function rB(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function sB(e) {
  return e === 10 ? rB : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function iB(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function dp(e) {
  return (t, n) => -e(-t, n);
}
function lB(e) {
  const t = e(lp, up), n = t.domain;
  let a = 10, o, r;
  function s() {
    return o = iB(a), r = sB(a), n()[0] < 0 ? (o = dp(o), r = dp(r), e(aB, oB)) : e(lp, up), t;
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
      $.length * 2 < b && ($ = Zl(d, c, b));
    } else
      $ = Zl(p, h, Math.min(h - p, b)).map(r);
    return f ? $.reverse() : $;
  }, t.tickFormat = (i, u) => {
    if (i == null && (i = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = rr(u)).precision == null && (u.trim = !0), u = Zd(u)), i === 1 / 0) return u;
    const d = Math.max(1, a * i / t.ticks().length);
    return (c) => {
      let f = c / r(Math.round(o(c)));
      return f * a < a - 0.5 && (f *= a), f <= d ? u(c) : "";
    };
  }, t.nice = () => n(Hg(n(), {
    floor: (i) => r(Math.floor(o(i))),
    ceil: (i) => r(Math.ceil(o(i)))
  })), t;
}
function Ug() {
  const e = lB(Di()).domain([1, 10]);
  return e.copy = () => Cr(e, Ug()).base(e.base()), Ot.apply(e, arguments), e;
}
function cp(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function fp(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function uB(e) {
  var t = 1, n = e(cp(t), fp(t));
  return n.constant = function(a) {
    return arguments.length ? e(cp(t = +a), fp(t)) : t;
  }, _a(n);
}
function Wg() {
  var e = uB(Di());
  return e.copy = function() {
    return Cr(e, Wg()).constant(e.constant());
  }, Ot.apply(e, arguments);
}
function pp(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function dB(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function cB(e) {
  return e < 0 ? -e * e : e * e;
}
function fB(e) {
  var t = e(it, it), n = 1;
  function a() {
    return n === 1 ? e(it, it) : n === 0.5 ? e(dB, cB) : e(pp(n), pp(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, a()) : n;
  }, _a(t);
}
function Qd() {
  var e = fB(Di());
  return e.copy = function() {
    return Cr(e, Qd()).exponent(e.exponent());
  }, Ot.apply(e, arguments), e;
}
function pB() {
  return Qd.apply(null, arguments).exponent(0.5);
}
function Kg() {
  var e = [], t = [], n = [], a;
  function o() {
    var s = 0, i = Math.max(1, t.length);
    for (n = new Array(i - 1); ++s < i; ) n[s - 1] = kE(e, s / i);
    return r;
  }
  function r(s) {
    return s == null || isNaN(s = +s) ? a : t[ki(n, s)];
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
    return e.sort(Lo), o();
  }, r.range = function(s) {
    return arguments.length ? (t = Array.from(s), o()) : t.slice();
  }, r.unknown = function(s) {
    return arguments.length ? (a = s, r) : a;
  }, r.quantiles = function() {
    return n.slice();
  }, r.copy = function() {
    return Kg().domain(e).range(t).unknown(a);
  }, Ot.apply(r, arguments);
}
function jg() {
  var e = 0, t = 1, n = 1, a = [0.5], o = [0, 1], r;
  function s(u) {
    return u != null && u <= u ? o[ki(a, u, 0, n)] : r;
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
    return jg().domain([e, t]).range(o).unknown(r);
  }, Ot.apply(_a(s), arguments);
}
function Yg() {
  var e = [0.5], t = [0, 1], n, a = 1;
  function o(r) {
    return r != null && r <= r ? t[ki(e, r, 0, a)] : n;
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
    return Yg().domain(e).range(t).unknown(n);
  }, Ot.apply(o, arguments);
}
const hl = /* @__PURE__ */ new Date(), vl = /* @__PURE__ */ new Date();
function We(e, t, n, a) {
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
  }, o.filter = (r) => We((s) => {
    if (s >= s) for (; e(s), !r(s); ) s.setTime(s - 1);
  }, (s, i) => {
    if (s >= s)
      if (i < 0) for (; ++i <= 0; )
        for (; t(s, -1), !r(s); )
          ;
      else for (; --i >= 0; )
        for (; t(s, 1), !r(s); )
          ;
  }), n && (o.count = (r, s) => (hl.setTime(+r), vl.setTime(+s), e(hl), e(vl), Math.floor(n(hl, vl))), o.every = (r) => (r = Math.floor(r), !isFinite(r) || !(r > 0) ? null : r > 1 ? o.filter(a ? (s) => a(s) % r === 0 : (s) => o.count(0, s) % r === 0) : o)), o;
}
const Us = We(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Us.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? We((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Us);
Us.range;
const rn = 1e3, _t = rn * 60, sn = _t * 60, mn = sn * 24, ec = mn * 7, hp = mn * 30, ml = mn * 365, Gn = We((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * rn);
}, (e, t) => (t - e) / rn, (e) => e.getUTCSeconds());
Gn.range;
const tc = We((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * rn);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getMinutes());
tc.range;
const nc = We((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * _t);
}, (e, t) => (t - e) / _t, (e) => e.getUTCMinutes());
nc.range;
const ac = We((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * rn - e.getMinutes() * _t);
}, (e, t) => {
  e.setTime(+e + t * sn);
}, (e, t) => (t - e) / sn, (e) => e.getHours());
ac.range;
const oc = We((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * sn);
}, (e, t) => (t - e) / sn, (e) => e.getUTCHours());
oc.range;
const $r = We(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * _t) / mn,
  (e) => e.getDate() - 1
);
$r.range;
const Bi = We((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / mn, (e) => e.getUTCDate() - 1);
Bi.range;
const Gg = We((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / mn, (e) => Math.floor(e / mn));
Gg.range;
function wa(e) {
  return We((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * _t) / ec);
}
const Oi = wa(0), Ws = wa(1), hB = wa(2), vB = wa(3), no = wa(4), mB = wa(5), gB = wa(6);
Oi.range;
Ws.range;
hB.range;
vB.range;
no.range;
mB.range;
gB.range;
function xa(e) {
  return We((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / ec);
}
const Pi = xa(0), Ks = xa(1), yB = xa(2), bB = xa(3), ao = xa(4), _B = xa(5), wB = xa(6);
Pi.range;
Ks.range;
yB.range;
bB.range;
ao.range;
_B.range;
wB.range;
const rc = We((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
rc.range;
const sc = We((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
sc.range;
const gn = We((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
gn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : We((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
gn.range;
const yn = We((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
yn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : We((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
yn.range;
function qg(e, t, n, a, o, r) {
  const s = [
    [Gn, 1, rn],
    [Gn, 5, 5 * rn],
    [Gn, 15, 15 * rn],
    [Gn, 30, 30 * rn],
    [r, 1, _t],
    [r, 5, 5 * _t],
    [r, 15, 15 * _t],
    [r, 30, 30 * _t],
    [o, 1, sn],
    [o, 3, 3 * sn],
    [o, 6, 6 * sn],
    [o, 12, 12 * sn],
    [a, 1, mn],
    [a, 2, 2 * mn],
    [n, 1, ec],
    [t, 1, hp],
    [t, 3, 3 * hp],
    [e, 1, ml]
  ];
  function i(d, c, f) {
    const p = c < d;
    p && ([d, c] = [c, d]);
    const h = f && typeof f.range == "function" ? f : u(d, c, f), v = h ? h.range(d, +c + 1) : [];
    return p ? v.reverse() : v;
  }
  function u(d, c, f) {
    const p = Math.abs(c - d) / f, h = Bd(([, , b]) => b).right(s, p);
    if (h === s.length) return e.every(eu(d / ml, c / ml, f));
    if (h === 0) return Us.every(Math.max(eu(d, c, f), 1));
    const [v, m] = s[p / s[h - 1][2] < s[h][2] / p ? h - 1 : h];
    return v.every(m);
  }
  return [i, u];
}
const [xB, CB] = qg(yn, sc, Pi, Gg, oc, nc), [$B, kB] = qg(gn, rc, Oi, $r, ac, tc);
function gl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function yl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function To(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function SB(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, r = e.days, s = e.shortDays, i = e.months, u = e.shortMonths, d = Ao(o), c = Eo(o), f = Ao(r), p = Eo(r), h = Ao(s), v = Eo(s), m = Ao(i), b = Eo(i), $ = Ao(u), k = Eo(u), C = {
    a: re,
    A: be,
    b: q,
    B: de,
    c: null,
    d: _p,
    e: _p,
    f: qB,
    g: rO,
    G: iO,
    H: jB,
    I: YB,
    j: GB,
    L: Xg,
    m: XB,
    M: JB,
    p: he,
    q: Xe,
    Q: Cp,
    s: $p,
    S: ZB,
    u: QB,
    U: eO,
    V: tO,
    w: nO,
    W: aO,
    x: null,
    X: null,
    y: oO,
    Y: sO,
    Z: lO,
    "%": xp
  }, A = {
    a: ot,
    A: ct,
    b: gt,
    B: Pt,
    c: null,
    d: wp,
    e: wp,
    f: fO,
    g: xO,
    G: $O,
    H: uO,
    I: dO,
    j: cO,
    L: Zg,
    m: pO,
    M: hO,
    p: Q,
    q: oe,
    Q: Cp,
    s: $p,
    S: vO,
    u: mO,
    U: gO,
    V: yO,
    w: bO,
    W: _O,
    x: null,
    X: null,
    y: wO,
    Y: CO,
    Z: kO,
    "%": xp
  }, T = {
    a: P,
    A: I,
    b: F,
    B: Y,
    c: z,
    d: yp,
    e: yp,
    f: HB,
    g: gp,
    G: mp,
    H: bp,
    I: bp,
    j: VB,
    L: zB,
    m: FB,
    M: NB,
    p: R,
    q: RB,
    Q: WB,
    s: KB,
    S: LB,
    u: DB,
    U: BB,
    V: OB,
    w: MB,
    W: PB,
    x: H,
    X: ee,
    y: gp,
    Y: mp,
    Z: IB,
    "%": UB
  };
  C.x = M(n, C), C.X = M(a, C), C.c = M(t, C), A.x = M(n, A), A.X = M(a, A), A.c = M(t, A);
  function M(U, G) {
    return function(ne) {
      var K = [], Re = -1, we = 0, at = U.length, fe, Ne, Je;
      for (ne instanceof Date || (ne = /* @__PURE__ */ new Date(+ne)); ++Re < at; )
        U.charCodeAt(Re) === 37 && (K.push(U.slice(we, Re)), (Ne = vp[fe = U.charAt(++Re)]) != null ? fe = U.charAt(++Re) : Ne = fe === "e" ? " " : "0", (Je = G[fe]) && (fe = Je(ne, Ne)), K.push(fe), we = Re + 1);
      return K.push(U.slice(we, Re)), K.join("");
    };
  }
  function E(U, G) {
    return function(ne) {
      var K = To(1900, void 0, 1), Re = N(K, U, ne += "", 0), we, at;
      if (Re != ne.length) return null;
      if ("Q" in K) return new Date(K.Q);
      if ("s" in K) return new Date(K.s * 1e3 + ("L" in K ? K.L : 0));
      if (G && !("Z" in K) && (K.Z = 0), "p" in K && (K.H = K.H % 12 + K.p * 12), K.m === void 0 && (K.m = "q" in K ? K.q : 0), "V" in K) {
        if (K.V < 1 || K.V > 53) return null;
        "w" in K || (K.w = 1), "Z" in K ? (we = yl(To(K.y, 0, 1)), at = we.getUTCDay(), we = at > 4 || at === 0 ? Ks.ceil(we) : Ks(we), we = Bi.offset(we, (K.V - 1) * 7), K.y = we.getUTCFullYear(), K.m = we.getUTCMonth(), K.d = we.getUTCDate() + (K.w + 6) % 7) : (we = gl(To(K.y, 0, 1)), at = we.getDay(), we = at > 4 || at === 0 ? Ws.ceil(we) : Ws(we), we = $r.offset(we, (K.V - 1) * 7), K.y = we.getFullYear(), K.m = we.getMonth(), K.d = we.getDate() + (K.w + 6) % 7);
      } else ("W" in K || "U" in K) && ("w" in K || (K.w = "u" in K ? K.u % 7 : "W" in K ? 1 : 0), at = "Z" in K ? yl(To(K.y, 0, 1)).getUTCDay() : gl(To(K.y, 0, 1)).getDay(), K.m = 0, K.d = "W" in K ? (K.w + 6) % 7 + K.W * 7 - (at + 5) % 7 : K.w + K.U * 7 - (at + 6) % 7);
      return "Z" in K ? (K.H += K.Z / 100 | 0, K.M += K.Z % 100, yl(K)) : gl(K);
    };
  }
  function N(U, G, ne, K) {
    for (var Re = 0, we = G.length, at = ne.length, fe, Ne; Re < we; ) {
      if (K >= at) return -1;
      if (fe = G.charCodeAt(Re++), fe === 37) {
        if (fe = G.charAt(Re++), Ne = T[fe in vp ? G.charAt(Re++) : fe], !Ne || (K = Ne(U, ne, K)) < 0) return -1;
      } else if (fe != ne.charCodeAt(K++))
        return -1;
    }
    return K;
  }
  function R(U, G, ne) {
    var K = d.exec(G.slice(ne));
    return K ? (U.p = c.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function P(U, G, ne) {
    var K = h.exec(G.slice(ne));
    return K ? (U.w = v.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function I(U, G, ne) {
    var K = f.exec(G.slice(ne));
    return K ? (U.w = p.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function F(U, G, ne) {
    var K = $.exec(G.slice(ne));
    return K ? (U.m = k.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function Y(U, G, ne) {
    var K = m.exec(G.slice(ne));
    return K ? (U.m = b.get(K[0].toLowerCase()), ne + K[0].length) : -1;
  }
  function z(U, G, ne) {
    return N(U, t, G, ne);
  }
  function H(U, G, ne) {
    return N(U, n, G, ne);
  }
  function ee(U, G, ne) {
    return N(U, a, G, ne);
  }
  function re(U) {
    return s[U.getDay()];
  }
  function be(U) {
    return r[U.getDay()];
  }
  function q(U) {
    return u[U.getMonth()];
  }
  function de(U) {
    return i[U.getMonth()];
  }
  function he(U) {
    return o[+(U.getHours() >= 12)];
  }
  function Xe(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function ot(U) {
    return s[U.getUTCDay()];
  }
  function ct(U) {
    return r[U.getUTCDay()];
  }
  function gt(U) {
    return u[U.getUTCMonth()];
  }
  function Pt(U) {
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
      var G = M(U += "", C);
      return G.toString = function() {
        return U;
      }, G;
    },
    parse: function(U) {
      var G = E(U += "", !1);
      return G.toString = function() {
        return U;
      }, G;
    },
    utcFormat: function(U) {
      var G = M(U += "", A);
      return G.toString = function() {
        return U;
      }, G;
    },
    utcParse: function(U) {
      var G = E(U += "", !0);
      return G.toString = function() {
        return U;
      }, G;
    }
  };
}
var vp = { "-": "", _: " ", 0: "0" }, qe = /^\s*\d+/, TB = /^%/, AB = /[\\^$*+?|[\]().{}]/g;
function $e(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", r = o.length;
  return a + (r < n ? new Array(n - r + 1).join(t) + o : o);
}
function EB(e) {
  return e.replace(AB, "\\$&");
}
function Ao(e) {
  return new RegExp("^(?:" + e.map(EB).join("|") + ")", "i");
}
function Eo(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function MB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function DB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function BB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function OB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function PB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function mp(e, t, n) {
  var a = qe.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function gp(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function IB(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function RB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function FB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function yp(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function VB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function bp(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function NB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function LB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function zB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function HB(e, t, n) {
  var a = qe.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function UB(e, t, n) {
  var a = TB.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function WB(e, t, n) {
  var a = qe.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function KB(e, t, n) {
  var a = qe.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function _p(e, t) {
  return $e(e.getDate(), t, 2);
}
function jB(e, t) {
  return $e(e.getHours(), t, 2);
}
function YB(e, t) {
  return $e(e.getHours() % 12 || 12, t, 2);
}
function GB(e, t) {
  return $e(1 + $r.count(gn(e), e), t, 3);
}
function Xg(e, t) {
  return $e(e.getMilliseconds(), t, 3);
}
function qB(e, t) {
  return Xg(e, t) + "000";
}
function XB(e, t) {
  return $e(e.getMonth() + 1, t, 2);
}
function JB(e, t) {
  return $e(e.getMinutes(), t, 2);
}
function ZB(e, t) {
  return $e(e.getSeconds(), t, 2);
}
function QB(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function eO(e, t) {
  return $e(Oi.count(gn(e) - 1, e), t, 2);
}
function Jg(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? no(e) : no.ceil(e);
}
function tO(e, t) {
  return e = Jg(e), $e(no.count(gn(e), e) + (gn(e).getDay() === 4), t, 2);
}
function nO(e) {
  return e.getDay();
}
function aO(e, t) {
  return $e(Ws.count(gn(e) - 1, e), t, 2);
}
function oO(e, t) {
  return $e(e.getFullYear() % 100, t, 2);
}
function rO(e, t) {
  return e = Jg(e), $e(e.getFullYear() % 100, t, 2);
}
function sO(e, t) {
  return $e(e.getFullYear() % 1e4, t, 4);
}
function iO(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? no(e) : no.ceil(e), $e(e.getFullYear() % 1e4, t, 4);
}
function lO(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + $e(t / 60 | 0, "0", 2) + $e(t % 60, "0", 2);
}
function wp(e, t) {
  return $e(e.getUTCDate(), t, 2);
}
function uO(e, t) {
  return $e(e.getUTCHours(), t, 2);
}
function dO(e, t) {
  return $e(e.getUTCHours() % 12 || 12, t, 2);
}
function cO(e, t) {
  return $e(1 + Bi.count(yn(e), e), t, 3);
}
function Zg(e, t) {
  return $e(e.getUTCMilliseconds(), t, 3);
}
function fO(e, t) {
  return Zg(e, t) + "000";
}
function pO(e, t) {
  return $e(e.getUTCMonth() + 1, t, 2);
}
function hO(e, t) {
  return $e(e.getUTCMinutes(), t, 2);
}
function vO(e, t) {
  return $e(e.getUTCSeconds(), t, 2);
}
function mO(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function gO(e, t) {
  return $e(Pi.count(yn(e) - 1, e), t, 2);
}
function Qg(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ao(e) : ao.ceil(e);
}
function yO(e, t) {
  return e = Qg(e), $e(ao.count(yn(e), e) + (yn(e).getUTCDay() === 4), t, 2);
}
function bO(e) {
  return e.getUTCDay();
}
function _O(e, t) {
  return $e(Ks.count(yn(e) - 1, e), t, 2);
}
function wO(e, t) {
  return $e(e.getUTCFullYear() % 100, t, 2);
}
function xO(e, t) {
  return e = Qg(e), $e(e.getUTCFullYear() % 100, t, 2);
}
function CO(e, t) {
  return $e(e.getUTCFullYear() % 1e4, t, 4);
}
function $O(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? ao(e) : ao.ceil(e), $e(e.getUTCFullYear() % 1e4, t, 4);
}
function kO() {
  return "+0000";
}
function xp() {
  return "%";
}
function Cp(e) {
  return +e;
}
function $p(e) {
  return Math.floor(+e / 1e3);
}
var Ta, ey, ty;
SO({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function SO(e) {
  return Ta = SB(e), ey = Ta.format, Ta.parse, ty = Ta.utcFormat, Ta.utcParse, Ta;
}
function TO(e) {
  return new Date(e);
}
function AO(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ic(e, t, n, a, o, r, s, i, u, d) {
  var c = Fg(), f = c.invert, p = c.domain, h = d(".%L"), v = d(":%S"), m = d("%I:%M"), b = d("%I %p"), $ = d("%a %d"), k = d("%b %d"), C = d("%B"), A = d("%Y");
  function T(M) {
    return (u(M) < M ? h : i(M) < M ? v : s(M) < M ? m : r(M) < M ? b : a(M) < M ? o(M) < M ? $ : k : n(M) < M ? C : A)(M);
  }
  return c.invert = function(M) {
    return new Date(f(M));
  }, c.domain = function(M) {
    return arguments.length ? p(Array.from(M, AO)) : p().map(TO);
  }, c.ticks = function(M) {
    var E = p();
    return e(E[0], E[E.length - 1], M ?? 10);
  }, c.tickFormat = function(M, E) {
    return E == null ? T : d(E);
  }, c.nice = function(M) {
    var E = p();
    return (!M || typeof M.range != "function") && (M = t(E[0], E[E.length - 1], M ?? 10)), M ? p(Hg(E, M)) : c;
  }, c.copy = function() {
    return Cr(c, ic(e, t, n, a, o, r, s, i, u, d));
  }, c;
}
function EO() {
  return Ot.apply(ic($B, kB, gn, rc, Oi, $r, ac, tc, Gn, ey).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function MO() {
  return Ot.apply(ic(xB, CB, yn, sc, Pi, Bi, oc, nc, Gn, ty).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function DO() {
  var e = 0, t = 1, n, a, o, r, s = it, i = !1, u;
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
  return d.range = c(yo), d.rangeRound = c(jd), d.unknown = function(f) {
    return arguments.length ? (u = f, d) : u;
  }, function(f) {
    return r = f, n = f(e), a = f(t), o = n === a ? 0 : 1 / (a - n), d;
  };
}
function ny(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function ay() {
  var e = _a(DO()(it));
  return e.copy = function() {
    return ny(e, ay());
  }, Ig.apply(e, arguments);
}
function BO() {
  var e = 0, t = 0.5, n = 1, a = 1, o, r, s, i, u, d = it, c, f = !1, p;
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
      return arguments.length ? ([$, k, C] = b, d = RD(m, [$, k, C]), h) : [d(0), d(0.5), d(1)];
    };
  }
  return h.range = v(yo), h.rangeRound = v(jd), h.unknown = function(m) {
    return arguments.length ? (p = m, h) : p;
  }, function(m) {
    return c = m, o = m(e), r = m(t), s = m(n), i = o === r ? 0 : 0.5 / (r - o), u = r === s ? 0 : 0.5 / (s - r), a = r < o ? -1 : 1, h;
  };
}
function oy() {
  var e = _a(BO()(it));
  return e.copy = function() {
    return ny(e, oy());
  }, Ig.apply(e, arguments);
}
const kp = {
  scaleLinear: Lg,
  scalePow: Qd,
  scaleSqrt: pB,
  scaleLog: Ug,
  scaleSymlog: Wg,
  scaleIdentity: zg,
  scaleTime: EO,
  scaleUtc: MO,
  scaleSequential: ay,
  scaleDiverging: oy,
  scaleQuantize: jg,
  scaleQuantile: Kg,
  scaleThreshold: Yg,
  scaleOrdinal: qd,
  scaleBand: Xd,
  scalePoint: L3
};
var Fe;
(function(e) {
  e.X = "x", e.Y = "y";
})(Fe || (Fe = {}));
var ea;
(function(e) {
  e.West = "west", e.East = "east", e.North = "north", e.South = "south";
})(ea || (ea = {}));
const OO = Object.assign(Object.assign({}, ag), { components: [], tooltip: void 0, crosshair: void 0, annotations: void 0, xAxis: void 0, yAxis: void 0, autoMargin: !0, xScale: void 0, xDomain: void 0, xDomainMinConstraint: void 0, xDomainMaxConstraint: void 0, xRange: void 0, yScale: void 0, yDomain: void 0, yDomainMinConstraint: void 0, yDomainMaxConstraint: void 0, yRange: void 0, yDirection: ea.North, preventEmptyDomain: null, scaleByDomain: !1 });
class PO extends Qo {
  constructor(t, n, a) {
    var o, r;
    super(t), this._defaultConfig = OO, this.datamodel = new Gd(), this.config = this._defaultConfig, this._clipPathId = gg(), this._axisMargin = { top: 0, bottom: 0, left: 0, right: 0 }, this._firstRender = !0, this._clipPath = this.svg.append("clipPath").attr("id", this._clipPathId), this._clipPath.append("rect");
    const s = "saturate", i = window.location.href.replace(window.location.hash, "");
    this.svg.attr("class", nt`
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
    return Da(this.containerWidth - t.left - t.right, 0, Number.POSITIVE_INFINITY);
  }
  // Overriding ContainerCore default get height method to work with axis auto margin
  get height() {
    const t = this._getMargin();
    return Da(this.containerHeight - t.top - t.bottom, 0, Number.POSITIVE_INFINITY);
  }
  setData(t, n) {
    var a, o, r, s;
    const { components: i, config: u } = this;
    t && (this.datamodel.data = t, i.forEach((d) => {
      d.setData(t);
    }), (a = u.crosshair) === null || a === void 0 || a.setData(t), (o = u.xAxis) === null || o === void 0 || o.setData(t), (r = u.yAxis) === null || r === void 0 || r.setData(t), (s = u.tooltip) === null || s === void 0 || s.hide(), n || this.render());
  }
  updateContainer(t, n) {
    super.updateContainer(t), this._removeAllChildren(), this.setData(this.datamodel.data, !0), t.xAxis && (this.config.xAxis.config.type = Ae.X, this.element.appendChild(t.xAxis.element)), t.yAxis && (this.config.yAxis.config.type = Ae.Y, this.element.appendChild(t.yAxis.element));
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
    const n = Co([...this.components, t.xAxis, t.yAxis, t.crosshair, t.annotations]);
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
        y: tu(f),
        yStacked: tu(p),
        baseline: v
      }, c.g.attr("transform", `translate(${u.left},${u.top})`).style("clip-path", `url(#${this._clipPathId})`).style("-webkit-clip-path", `url(#${this._clipPathId})`), c.hide();
    }
    (r = i.annotations) === null || r === void 0 || r.g.attr("transform", `translate(${u.left},${u.top})`), (s = i.annotations) === null || s === void 0 || s.render(), this._firstRender = !1;
  }
  _updateScales(...t) {
    const n = Co(t || this.components);
    this._setScales(...n), this._updateScalesDomain(...n), this._updateScalesRange(...n);
  }
  _setScales(...t) {
    const { config: n } = this;
    t && (n.xScale && t.forEach((a) => a.setScale(Fe.X, n.xScale)), n.yScale && t.forEach((a) => a.setScale(Fe.Y, n.yScale)));
  }
  _updateScalesDomain(...t) {
    const { config: n } = this;
    if (!t)
      return;
    const a = t.filter((o) => !o.config.excludeFromDomainCalculation);
    Object.values(Fe).forEach((o) => {
      var r, s, i, u, d, c, f, p;
      const [h, v] = yE(TE(a.map((T) => T.getDataExtent(o, n.scaleByDomain)))), m = o === Fe.Y ? n.yDomain : n.xDomain, b = o === Fe.Y ? n.yDomainMinConstraint : n.xDomainMinConstraint, $ = o === Fe.Y ? n.yDomainMaxConstraint : n.xDomainMaxConstraint, k = (s = (r = m == null ? void 0 : m[0]) !== null && r !== void 0 ? r : h) !== null && s !== void 0 ? s : 0, C = (u = (i = m == null ? void 0 : m[1]) !== null && i !== void 0 ? i : v) !== null && u !== void 0 ? u : 1, A = [
        Da(k, (d = b == null ? void 0 : b[0]) !== null && d !== void 0 ? d : Number.NEGATIVE_INFINITY, (c = b == null ? void 0 : b[1]) !== null && c !== void 0 ? c : Number.POSITIVE_INFINITY),
        Da(C, (f = $ == null ? void 0 : $[0]) !== null && f !== void 0 ? f : Number.NEGATIVE_INFINITY, (p = $ == null ? void 0 : $[1]) !== null && p !== void 0 ? p : Number.POSITIVE_INFINITY)
      ];
      if (A[0] === A[1]) {
        const T = a.some((M) => {
          var E;
          return ((E = M.datamodel.data) === null || E === void 0 ? void 0 : E.length) > 0;
        });
        (n.preventEmptyDomain || n.preventEmptyDomain === null && (!T || o === Fe.Y)) && (A[1] = A[0] + 1);
      }
      t.forEach((T) => T.setScaleDomain(o, A));
    });
  }
  _updateScalesRange(...t) {
    var n, a, o, r, s, i;
    const { config: u } = this;
    if (!t)
      return;
    const d = u.yDirection === ea.South, c = [(n = u.padding.left) !== null && n !== void 0 ? n : 0, this.width - ((a = u.padding.right) !== null && a !== void 0 ? a : 0)], f = [this.height - ((o = u.padding.bottom) !== null && o !== void 0 ? o : 0), (r = u.padding.top) !== null && r !== void 0 ? r : 0];
    d && f.reverse();
    for (const h of t)
      h.setSize(this.width, this.height, this.containerWidth, this.containerHeight), h.setScaleRange(Fe.X, (s = u.xRange) !== null && s !== void 0 ? s : c), h.setScaleRange(Fe.Y, (i = u.yRange) !== null && i !== void 0 ? i : f);
    const p = t.map((h) => h.bleed).reduce((h, v) => {
      for (const m of Object.keys(h)) {
        const b = m;
        h[b] < v[b] && (h[b] = v[b]);
      }
      return h;
    }, { top: 0, bottom: 0, left: 0, right: 0 });
    for (const h of t)
      h.setScaleRange(Fe.X, [c[0] + p.left, c[1] - p.right]), h.setScaleRange(
        Fe.Y,
        d ? [f[0] + p.top, f[1] - p.bottom] : [f[0] - p.bottom, f[1] + p.top]
        // if Y axis is directed upwards
      );
  }
  _renderAxes(t) {
    const { config: { xAxis: n, yAxis: a } } = this, o = this._getMargin();
    Co([n, a]).forEach((s) => {
      const i = s.getOffset(o);
      s.g.attr("transform", `translate(${i.left},${i.top})`), s.render(t);
    });
  }
  _setAutoMargin() {
    const { config: { xAxis: t, yAxis: n } } = this, a = Co([...this.components, t, n]);
    this._setScales(...a), this._updateScalesDomain(...a);
    const o = this._firstRender ? 2 : 1;
    for (let r = 0; r < o; r += 1) {
      const s = { top: 0, bottom: 0, left: 0, right: 0 };
      this._updateScalesRange(...a), Co([t, n]).forEach((u) => {
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
const ry = {
  duration: 600,
  events: {},
  attributes: {}
};
class IO {
  constructor(t = No.SVG) {
    var n, a;
    this.type = No.SVG, this.datamodel = new Gd(), this.sizing = Za.Fit, this.events = {}, this._defaultConfig = ry, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._setUpComponentEventsThrottled = xf(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = xf(this._setCustomAttributes, 500), t === No.SVG ? this.element = document.createElementNS("http://www.w3.org/2000/svg", "g") : this.element = document.createElement("div"), this.uid = gg(), this.g = Xn(this.element);
    const o = (a = (n = this.constructor) === null || n === void 0 ? void 0 : n.selectors) === null || a === void 0 ? void 0 : a.root;
    o && this.g.attr("class", o);
  }
  setConfig(t) {
    this.prevConfig = this.config, this.config = Xo(this._defaultConfig, t);
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
class RO extends Gd {
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
const lc = Object.assign(Object.assign({}, ry), { x: void 0, y: void 0, id: (e, t) => {
  var n;
  return (n = e.id) !== null && n !== void 0 ? n : `${t}`;
}, color: (e) => e.color, xScale: void 0, yScale: void 0, excludeFromDomainCalculation: !1 });
class sy extends IO {
  constructor() {
    super(...arguments), this.datamodel = new RO(), this.clippable = !0, this.stacked = !1, this._defaultConfig = lc, this._xScale = kp.scaleLinear(), this._yScale = kp.scaleLinear();
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
    t === Fe.X && ((a = this._xScale) === null || a === void 0 || a.domain(n)), t === Fe.Y && ((o = this._yScale) === null || o === void 0 || o.domain(n));
  }
  setScaleRange(t, n) {
    var a, o;
    t === Fe.X && ((a = this._xScale) === null || a === void 0 || a.range(n)), t === Fe.Y && ((o = this._yScale) === null || o === void 0 || o.range(n));
  }
  setScale(t, n) {
    n && t === Fe.X && (this._xScale = n), n && t === Fe.Y && (this._yScale = n);
  }
  getDataExtent(t, n) {
    const { config: a, datamodel: o } = this;
    switch (t) {
      case Fe.X:
        return this.getXDataExtent();
      case Fe.Y:
        return this.getYDataExtent(n);
      default:
        return il(o.data, a[t]);
    }
  }
  getXDataExtent() {
    const { config: t, datamodel: n } = this;
    return il(n.data, t.x);
  }
  getYDataExtent(t) {
    const { config: n, datamodel: a } = this, o = t ? PE(a.data, this.xScale.domain(), n.x) : a.data, r = Od(n.y) ? n.y : [n.y];
    return il(o, ...r);
  }
}
var Ce;
(function(e) {
  e.Top = "top", e.Bottom = "bottom", e.Left = "left", e.Right = "right", e.Center = "center", e.Auto = "auto";
})(Ce || (Ce = {}));
var Sp;
(function(e) {
  e.Absolute = "absolute", e.Fixed = "fixed";
})(Sp || (Sp = {}));
var Tp;
(function(e) {
  e.Inside = "inside", e.Outside = "outside";
})(Tp || (Tp = {}));
var Ap;
(function(e) {
  e.Horizontal = "horizontal", e.Vertical = "vertical";
})(Ap || (Ap = {}));
function Aa(e) {
  return function() {
    return e;
  };
}
const Ep = 1e-12, mu = Math.PI, gu = 2 * mu, Hn = 1e-6, FO = gu - Hn;
function iy(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function VO(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return iy;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, r = a.length; o < r; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class NO {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? iy : VO(t);
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
    else if (p > Hn) if (!(Math.abs(f * u - d * c) > Hn) || !r)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = a - s, v = o - i, m = u * u + d * d, b = h * h + v * v, $ = Math.sqrt(m), k = Math.sqrt(p), C = r * Math.tan((mu - Math.acos((m + p - b) / (2 * $ * k))) / 2), A = C / k, T = C / $;
      Math.abs(A - 1) > Hn && this._append`L${t + A * c},${n + A * f}`, this._append`A${r},${r},0,0,${+(f * h > c * v)},${this._x1 = t + T * u},${this._y1 = n + T * d}`;
    }
  }
  arc(t, n, a, o, r, s) {
    if (t = +t, n = +n, a = +a, s = !!s, a < 0) throw new Error(`negative radius: ${a}`);
    let i = a * Math.cos(o), u = a * Math.sin(o), d = t + i, c = n + u, f = 1 ^ s, p = s ? o - r : r - o;
    this._x1 === null ? this._append`M${d},${c}` : (Math.abs(this._x1 - d) > Hn || Math.abs(this._y1 - c) > Hn) && this._append`L${d},${c}`, a && (p < 0 && (p = p % gu + gu), p > FO ? this._append`A${a},${a},0,1,${f},${t - i},${n - u}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = c}` : p > Hn && this._append`A${a},${a},0,${+(p >= mu)},${f},${this._x1 = t + a * Math.cos(r)},${this._y1 = n + a * Math.sin(r)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function LO(e) {
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
  }, () => new NO(t);
}
function zO(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ly(e) {
  this._context = e;
}
ly.prototype = {
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
function uy(e) {
  return new ly(e);
}
function HO(e) {
  return e[0];
}
function UO(e) {
  return e[1];
}
function WO(e, t) {
  var n = Aa(!0), a = null, o = uy, r = null, s = LO(i);
  e = typeof e == "function" ? e : e === void 0 ? HO : Aa(e), t = typeof t == "function" ? t : t === void 0 ? UO : Aa(t);
  function i(u) {
    var d, c = (u = zO(u)).length, f, p = !1, h;
    for (a == null && (r = o(h = s())), d = 0; d <= c; ++d)
      !(d < c && n(f = u[d], d, u)) === p && ((p = !p) ? r.lineStart() : r.lineEnd()), p && r.point(+e(f, d, u), +t(f, d, u));
    if (h) return r = null, h + "" || null;
  }
  return i.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Aa(+u), i) : e;
  }, i.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Aa(+u), i) : t;
  }, i.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Aa(!!u), i) : n;
  }, i.curve = function(u) {
    return arguments.length ? (o = u, a != null && (r = o(a)), i) : o;
  }, i.context = function(u) {
    return arguments.length ? (u == null ? a = r = null : r = o(a = u), i) : a;
  }, i;
}
function Fn() {
}
function js(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Ii(e) {
  this._context = e;
}
Ii.prototype = {
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
        js(this, this._x1, this._y1);
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
        js(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function KO(e) {
  return new Ii(e);
}
function dy(e) {
  this._context = e;
}
dy.prototype = {
  areaStart: Fn,
  areaEnd: Fn,
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
        js(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function jO(e) {
  return new dy(e);
}
function cy(e) {
  this._context = e;
}
cy.prototype = {
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
        js(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function YO(e) {
  return new cy(e);
}
function fy(e, t) {
  this._basis = new Ii(e), this._beta = t;
}
fy.prototype = {
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
const GO = function e(t) {
  function n(a) {
    return t === 1 ? new Ii(a) : new fy(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function Ys(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function uc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
uc.prototype = {
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
        Ys(this, this._x1, this._y1);
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
        Ys(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const qO = function e(t) {
  function n(a) {
    return new uc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function dc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
dc.prototype = {
  areaStart: Fn,
  areaEnd: Fn,
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
        Ys(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const XO = function e(t) {
  function n(a) {
    return new dc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function cc(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
cc.prototype = {
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
        Ys(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const JO = function e(t) {
  function n(a) {
    return new cc(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function fc(e, t, n) {
  var a = e._x1, o = e._y1, r = e._x2, s = e._y2;
  if (e._l01_a > Ep) {
    var i = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * i - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, o = (o * i - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > Ep) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, c = 3 * e._l23_a * (e._l23_a + e._l12_a);
    r = (r * d + e._x1 * e._l23_2a - t * e._l12_2a) / c, s = (s * d + e._y1 * e._l23_2a - n * e._l12_2a) / c;
  }
  e._context.bezierCurveTo(a, o, r, s, e._x2, e._y2);
}
function py(e, t) {
  this._context = e, this._alpha = t;
}
py.prototype = {
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
        fc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ZO = function e(t) {
  function n(a) {
    return t ? new py(a, t) : new uc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function hy(e, t) {
  this._context = e, this._alpha = t;
}
hy.prototype = {
  areaStart: Fn,
  areaEnd: Fn,
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
        fc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const QO = function e(t) {
  function n(a) {
    return t ? new hy(a, t) : new dc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function vy(e, t) {
  this._context = e, this._alpha = t;
}
vy.prototype = {
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
        fc(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const eP = function e(t) {
  function n(a) {
    return t ? new vy(a, t) : new cc(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function my(e) {
  this._context = e;
}
my.prototype = {
  areaStart: Fn,
  areaEnd: Fn,
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
function tP(e) {
  return new my(e);
}
function Mp(e) {
  return e < 0 ? -1 : 1;
}
function Dp(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, r = (e._y1 - e._y0) / (a || o < 0 && -0), s = (n - e._y1) / (o || a < 0 && -0), i = (r * o + s * a) / (a + o);
  return (Mp(r) + Mp(s)) * Math.min(Math.abs(r), Math.abs(s), 0.5 * Math.abs(i)) || 0;
}
function Bp(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function bl(e, t, n) {
  var a = e._x0, o = e._y0, r = e._x1, s = e._y1, i = (r - a) / 3;
  e._context.bezierCurveTo(a + i, o + i * t, r - i, s - i * n, r, s);
}
function Gs(e) {
  this._context = e;
}
Gs.prototype = {
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
        bl(this, this._t0, Bp(this, this._t0));
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
          this._point = 3, bl(this, Bp(this, n = Dp(this, e, t)), n);
          break;
        default:
          bl(this, this._t0, n = Dp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function gy(e) {
  this._context = new yy(e);
}
(gy.prototype = Object.create(Gs.prototype)).point = function(e, t) {
  Gs.prototype.point.call(this, t, e);
};
function yy(e) {
  this._context = e;
}
yy.prototype = {
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
function nP(e) {
  return new Gs(e);
}
function aP(e) {
  return new gy(e);
}
function by(e) {
  this._context = e;
}
by.prototype = {
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
        for (var a = Op(e), o = Op(t), r = 0, s = 1; s < n; ++r, ++s)
          this._context.bezierCurveTo(a[0][r], o[0][r], a[1][r], o[1][r], e[s], t[s]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Op(e) {
  var t, n = e.length - 1, a, o = new Array(n), r = new Array(n), s = new Array(n);
  for (o[0] = 0, r[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) o[t] = 1, r[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) a = o[t] / r[t - 1], r[t] -= a, s[t] -= a * s[t - 1];
  for (o[n - 1] = s[n - 1] / r[n - 1], t = n - 2; t >= 0; --t) o[t] = (s[t] - o[t + 1]) / r[t];
  for (r[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) r[t] = 2 * e[t + 1] - o[t + 1];
  return [o, r];
}
function oP(e) {
  return new by(e);
}
function Ri(e, t) {
  this._context = e, this._t = t;
}
Ri.prototype = {
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
function rP(e) {
  return new Ri(e, 0.5);
}
function sP(e) {
  return new Ri(e, 0);
}
function iP(e) {
  return new Ri(e, 1);
}
function Pp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function lP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pp(Object(n), !0).forEach(function(a) {
      uP(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pp(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Ho(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ho = function(t) {
    return typeof t;
  } : Ho = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ho(e);
}
function uP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qs() {
  return qs = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qs.apply(this, arguments);
}
function dP(e, t) {
  if (e) {
    if (typeof e == "string") return Ip(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ip(e, t);
  }
}
function Ip(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function _y(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = dP(e)) || t) {
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
function cP(e, t) {
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
function fP(e) {
  var t = {};
  return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], e.length === 4 ? t.type = "C" : e.length === 3 ? t.type = "Q" : t.type = "L", t;
}
function pP(e, t) {
  t = t || 2;
  for (var n = [], a = e, o = 1 / t, r = 0; r < t - 1; r++) {
    var s = o / (1 - o * r), i = cP(a, s);
    n.push(i.left), a = i.right;
  }
  return n.push(a), n;
}
function hP(e, t, n) {
  var a = [[e.x, e.y]];
  return t.x1 != null && a.push([t.x1, t.y1]), t.x2 != null && a.push([t.x2, t.y2]), a.push([t.x, t.y]), pP(a, n).map(fP);
}
var vP = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, za = {
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
Object.keys(za).forEach(function(e) {
  za[e.toLowerCase()] = za[e];
});
function yu(e, t) {
  for (var n = Array(e), a = 0; a < e; a++)
    n[a] = t;
  return n;
}
function mP(e) {
  return "".concat(e.type).concat(za[e.type].map(function(t) {
    return e[t];
  }).join(","));
}
function gP(e, t) {
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
function yP(e, t, n) {
  var a = [];
  if (t.type === "L" || t.type === "Q" || t.type === "C")
    a = a.concat(hP(e, t, n));
  else {
    var o = qs({}, e);
    o.type === "M" && (o.type = "L"), a = a.concat(yu(n - 1).map(function() {
      return o;
    })), a.push(t);
  }
  return a;
}
function Rp(e, t, n) {
  var a = e.length - 1, o = t.length - 1, r = a / o, s = yu(o).reduce(function(u, d, c) {
    var f = Math.floor(r * c);
    if (n && f < e.length - 1 && n(e[f], e[f + 1])) {
      var p = r * c % 1 < 0.5;
      u[f] && (p ? f > 0 ? f -= 1 : f < e.length - 1 && (f += 1) : f < e.length - 1 ? f += 1 : f > 0 && (f -= 1));
    }
    return u[f] = (u[f] || 0) + 1, u;
  }, []), i = s.reduce(function(u, d, c) {
    if (c === e.length - 1) {
      var f = yu(d, qs({}, e[e.length - 1]));
      return f[0].type === "M" && f.forEach(function(p) {
        p.type = "L";
      }), u.concat(f);
    }
    return u.concat(yP(e[c], e[c + 1], d));
  }, []);
  return i.unshift(e[0]), i;
}
function Fp(e) {
  for (var t = (e || "").match(vP) || [], n = [], a, o, r = 0; r < t.length; ++r)
    if (a = za[t[r]], a) {
      o = {
        type: t[r]
      };
      for (var s = 0; s < a.length; ++s)
        o[a[s]] = +t[r + s + 1];
      r += a.length, n.push(o);
    }
  return n;
}
function bP(e, t, n) {
  var a = e == null ? [] : e.slice(), o = t == null ? [] : t.slice(), r = Ho(n) === "object" ? n : {
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
  d !== 0 && (o.length > a.length ? a = Rp(a, o, s) : o.length < a.length && (o = Rp(o, a, s))), a = a.map(function(f, p) {
    return gP(f, o[p]);
  });
  var c = a.map(function(f) {
    return lP({}, f);
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
      var v = a[h], m = o[h], b = c[h], $ = _y(za[b.type]), k;
      try {
        for ($.s(); !(k = $.n()).done; ) {
          var C = k.value;
          b[C] = (1 - p) * v[C] + p * m[C], (C === "largeArcFlag" || C === "sweepFlag") && (b[C] = Math.round(b[C]));
        }
      } catch (A) {
        $.e(A);
      } finally {
        $.f();
      }
    }
    return c;
  };
}
function _P(e, t, n) {
  var a = Fp(e), o = Fp(t), r = Ho(n) === "object" ? n : {
    excludeSegment: n,
    snapEndsToInput: !0
  }, s = r.excludeSegment, i = r.snapEndsToInput;
  if (!a.length && !o.length)
    return function() {
      return "";
    };
  var u = bP(a, o, {
    excludeSegment: s,
    snapEndsToInput: i
  });
  return function(c) {
    if (c === 1 && i)
      return t ?? "";
    var f = u(c), p = "", h = _y(f), v;
    try {
      for (h.s(); !(v = h.n()).done; ) {
        var m = v.value;
        p += mP(m);
      }
    } catch (b) {
      h.e(b);
    } finally {
      h.f();
    }
    return p;
  };
}
function _l(e, t, n, a) {
  return Array.isArray(t) && isFinite(n) ? t[n % t.length] : Xm(e, t, n) || (Fa(n) ? `var(${An(n)})` : null);
}
var Pe;
(function(e) {
  e.Basis = "basis", e.BasisClosed = "basisClosed", e.BasisOpen = "basisOpen", e.Bundle = "bundle", e.Cardinal = "cardinal", e.CardinalClosed = "cardinalClosed", e.CardinalOpen = "cardinalOpen", e.CatmullRom = "catmullRom", e.CatmullRomClosed = "catmullRomClosed", e.CatmullRomOpen = "catmullRomOpen", e.Linear = "linear", e.LinearClosed = "linearClosed", e.MonotoneX = "monotoneX", e.MonotoneY = "monotoneY", e.Natural = "natural", e.Step = "step", e.StepAfter = "stepAfter", e.StepBefore = "stepBefore";
})(Pe || (Pe = {}));
const Vp = {
  [Pe.Basis]: KO,
  [Pe.BasisClosed]: jO,
  [Pe.BasisOpen]: YO,
  [Pe.Bundle]: GO,
  [Pe.Cardinal]: qO,
  [Pe.CardinalClosed]: XO,
  [Pe.CardinalOpen]: JO,
  [Pe.CatmullRom]: ZO,
  [Pe.CatmullRomClosed]: QO,
  [Pe.CatmullRomOpen]: eP,
  [Pe.Linear]: uy,
  [Pe.LinearClosed]: tP,
  [Pe.MonotoneX]: nP,
  [Pe.MonotoneY]: aP,
  [Pe.Natural]: oP,
  [Pe.Step]: rP,
  [Pe.StepAfter]: iP,
  [Pe.StepBefore]: sP
}, wP = Object.assign(Object.assign({}, lc), { curveType: Pe.MonotoneX, lineWidth: 2, lineDashArray: void 0, fallbackValue: void 0, highlightOnHover: !1, cursor: null, interpolateMissingData: !1 }), xP = Nd`
  :root {
    --vis-line-cursor: default;
    --vis-line-stroke-dasharray: none;
    --vis-line-stroke-dashoffset: 0;

    --vis-line-gapfill-stroke-dasharray: 2 3;
    --vis-line-gapfill-stroke-opacity: 0.8;
    --vis-line-gapfill-stroke-dashoffset: 0;
  }
`, CP = nt`
  label: line-component;
`, Io = nt`
  label: line;
  transition: opacity 200ms;
  cursor: var(--vis-line-cursor);
`, bu = nt`
  label: linePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`, _u = nt`
  label: lineSelectionHelper;
  fill: none;
  stroke: rgba(0, 0, 0, 0);
  stroke-width: 8px;
`, wu = nt`
  opacity: 0.2;
`, xu = nt`
  label: interpolated-path;
  fill: none;
  stroke-dasharray: var(--vis-line-gapfill-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-gapfill-stroke-dashoffset);
  stroke-opacity: var(--vis-line-gapfill-stroke-opacity);
`, $P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dim: wu,
  globalStyles: xP,
  interpolatedPath: xu,
  line: Io,
  linePath: bu,
  lineSelectionHelper: _u,
  root: CP
}, Symbol.toStringTag, { value: "Module" }));
class Fi extends sy {
  constructor(t) {
    super(), this._defaultConfig = wP, this.config = this._defaultConfig, this.curve = Vp[Pe.MonotoneX], this.events = {
      [Fi.selectors.line]: {
        mouseover: this._highlight.bind(this),
        mouseleave: this._resetHighlight.bind(this)
      }
    }, t && this.setConfig(t);
  }
  get bleed() {
    const { config: { lineWidth: t } } = this, n = this.yScale.domain(), o = (this.yScale.range()[0] > this.yScale.range()[1] ? ea.North : ea.South) === ea.South, r = t > 3, s = t >= 10;
    return {
      top: !s && (!o && n[1] === 0 || o && n[0] === 0) ? 0 : t / 2,
      bottom: !s && (!o && n[0] === 0 || o && n[1] === 0) ? 0 : t / 2,
      left: r ? t / 2 : 0,
      right: r ? t / 2 : 0
    };
  }
  _render(t) {
    super._render(t);
    const { config: n, datamodel: { data: a } } = this, o = Fa(t) ? t : n.duration;
    this.curve = Vp[n.curveType], this.lineGen = WO().x((f) => f.x).y((f) => f.y).defined((f) => f.defined).curve(this.curve);
    const r = Od(n.y) ? n.y : [n.y], s = a.map((f, p) => this.xScale(Jo(f, n.x, p))), i = r.map((f) => {
      const p = a.map(($, k) => {
        const C = Jo($, f, k), A = (Fa(C) || C === null) && isFinite(C) ? C : n.fallbackValue, T = n.interpolateMissingData ? (Fa(C) || C === null) && isFinite(C) : isFinite(A);
        return {
          x: s[k],
          y: this.yScale(A ?? 0),
          defined: T,
          value: A
        };
      }), h = p.reduce(($, k) => k.defined || $, !1);
      let v = !1;
      const m = p.reduce(($, k, C) => {
        !k.defined && isFinite(n.fallbackValue) && $.push(Object.assign(Object.assign({}, k), { defined: !0 })), !k.defined && !v && (v = !0);
        const A = C > 0 && !p[C - 1].defined || C < p.length - 1 && !p[C + 1].defined;
        return k.defined && A && (v || $.push(Object.assign(Object.assign({}, k), { defined: !1 })), $.push(k), v = !1), $;
      }, []), b = h && p.some(($) => $.value !== null);
      return {
        values: p,
        defined: h,
        gaps: m,
        visible: b
      };
    }), u = this.g.selectAll(`.${Io}`).data(i), d = u.enter().append("g").attr("class", Io);
    d.append("path").attr("class", bu).attr("stroke", (f, p) => _l(a, n.color, p)).attr("stroke-opacity", 0).attr("stroke-width", n.lineWidth), d.append("path").attr("class", _u).attr("d", this._emptyPath()), d.append("path").attr("class", xu).attr("d", this._emptyPath()).style("opacity", 0);
    const c = d.merge(u);
    c.style("cursor", (f, p) => Xm(a, n.cursor, p)), c.each((f, p, h) => {
      var v;
      const m = Xn(h[p]), b = m.select(`.${bu}`), $ = m.select(`.${_u}`), k = m.select(`.${xu}`), C = f.visible, A = Pd(a, n.lineDashArray, p), T = Yn(b, o).attr("stroke", _l(a, n.color, p)).attr("stroke-width", n.lineWidth).attr("stroke-opacity", C ? 1 : 0).style("stroke-dasharray", (v = A == null ? void 0 : A.join(" ")) !== null && v !== void 0 ? v : null), M = f.values.some((N) => !N.defined), E = this.lineGen(f.values);
      if (o && !M) {
        const N = b.attr("d") || this._emptyPath(), R = E || this._emptyPath();
        T.attrTween("d", () => _P(N, R));
      } else f.visible && T.attr("d", E);
      $.attr("d", E).attr("visibility", C ? null : "hidden"), M && n.interpolateMissingData ? Yn(k, o).attr("d", this.lineGen(f.gaps)).attr("stroke", _l(a, n.color, p)).attr("stroke-width", n.lineWidth - 1).style("opacity", 1) : k.transition().duration(o).style("opacity", 0);
    }), Yn(u.exit(), o).style("opacity", 0).remove();
  }
  _emptyPath() {
    const t = this.xScale.range(), n = this.yScale.range();
    return `M${t[0]},${n[0]} L${t[1]},${n[0]}`;
  }
  _highlight(t) {
    const { config: n } = this;
    n.highlightOnHover && this.g.selectAll(`.${Io}`).classed(wu, (a) => a !== t);
  }
  _resetHighlight() {
    const { config: t } = this;
    t.highlightOnHover && this.g.selectAll(`.${Io}`).classed(wu, !1);
  }
}
Fi.selectors = $P;
function kP(e) {
  return e;
}
var us = 1, ds = 2, Cu = 3, Ro = 4, Np = 1e-6;
function SP(e) {
  return "translate(" + e + ",0)";
}
function TP(e) {
  return "translate(0," + e + ")";
}
function AP(e) {
  return (t) => +e(t);
}
function EP(e, t) {
  return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function MP() {
  return !this.__axis;
}
function Vi(e, t) {
  var n = [], a = null, o = null, r = 6, s = 6, i = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, d = e === us || e === Ro ? -1 : 1, c = e === Ro || e === ds ? "x" : "y", f = e === us || e === Cu ? SP : TP;
  function p(h) {
    var v = a ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = o ?? (t.tickFormat ? t.tickFormat.apply(t, n) : kP), b = Math.max(r, 0) + i, $ = t.range(), k = +$[0] + u, C = +$[$.length - 1] + u, A = (t.bandwidth ? EP : AP)(t.copy(), u), T = h.selection ? h.selection() : h, M = T.selectAll(".domain").data([null]), E = T.selectAll(".tick").data(v, t).order(), N = E.exit(), R = E.enter().append("g").attr("class", "tick"), P = E.select("line"), I = E.select("text");
    M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(R), P = P.merge(R.append("line").attr("stroke", "currentColor").attr(c + "2", d * r)), I = I.merge(R.append("text").attr("fill", "currentColor").attr(c, d * b).attr("dy", e === us ? "0em" : e === Cu ? "0.71em" : "0.32em")), h !== T && (M = M.transition(h), E = E.transition(h), P = P.transition(h), I = I.transition(h), N = N.transition(h).attr("opacity", Np).attr("transform", function(F) {
      return isFinite(F = A(F)) ? f(F + u) : this.getAttribute("transform");
    }), R.attr("opacity", Np).attr("transform", function(F) {
      var Y = this.parentNode.__axis;
      return f((Y && isFinite(Y = Y(F)) ? Y : A(F)) + u);
    })), N.remove(), M.attr("d", e === Ro || e === ds ? s ? "M" + d * s + "," + k + "H" + u + "V" + C + "H" + d * s : "M" + u + "," + k + "V" + C : s ? "M" + k + "," + d * s + "V" + u + "H" + C + "V" + d * s : "M" + k + "," + u + "H" + C), E.attr("opacity", 1).attr("transform", function(F) {
      return f(A(F) + u);
    }), P.attr(c + "2", d * r), I.attr(c, d * b).text(m), T.filter(MP).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === ds ? "start" : e === Ro ? "end" : "middle"), T.each(function() {
      this.__axis = A;
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
function Lp(e) {
  return Vi(us, e);
}
function zp(e) {
  return Vi(ds, e);
}
function Hp(e) {
  return Vi(Cu, e);
}
function Up(e) {
  return Vi(Ro, e);
}
var ta;
(function(e) {
  e.Start = "start", e.Middle = "middle", e.End = "end";
})(ta || (ta = {}));
var na;
(function(e) {
  e.Top = "top", e.Middle = "middle", e.Bottom = "bottom";
})(na || (na = {}));
var Xs;
(function(e) {
  e.Wrap = "wrap", e.Trim = "trim";
})(Xs || (Xs = {}));
var Tt;
(function(e) {
  e.Left = "left", e.Center = "center", e.Right = "right";
})(Tt || (Tt = {}));
var wy = { exports: {} };
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
      let b = m.allowable_tags, $ = m.tag_replacement, k = m.state, C = m.tag_buffer, A = m.depth, T = m.in_quote_char, M = "";
      for (let E = 0, N = v.length; E < N; E++) {
        let R = v[E];
        if (k === a)
          switch (R) {
            case "<":
              k = o, C += R;
              break;
            default:
              M += R;
              break;
          }
        else if (k === o)
          switch (R) {
            case "<":
              if (T)
                break;
              A++;
              break;
            case ">":
              if (T)
                break;
              if (A) {
                A--;
                break;
              }
              T = "", k = a, C += ">", b.has(h(C)) ? M += C : M += $, C = "";
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
                k = a, M += "< ", C = "";
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
      return m.state = k, m.tag_buffer = C, m.depth = A, m.in_quote_char = T, M;
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
  })(HM);
})(wy);
var DP = wy.exports;
const BP = /* @__PURE__ */ UM(DP);
function OP(e) {
  switch (e) {
    case Tt.Center:
      return "middle";
    case Tt.Right:
      return "end";
    case Tt.Left:
    default:
      return "start";
  }
}
function PP(e) {
  var t;
  return (t = e.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)) === null || t === void 0 ? void 0 : t.filter(Boolean).map((n) => n.toLowerCase()).join("-");
}
function IP(e) {
  return e.replace(/['"]/g, "&#39;").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}
function RP(e, t = 15) {
  return e ? e.length > t ? `…${e.substr(e.length - t, t)}` : e : "";
}
function FP(e, t = 15) {
  if (!e)
    return "";
  const n = Math.floor((t - 3) / 2);
  return e.length > t ? `${e.substr(0, n)}…${e.substr(-n, n)}` : e;
}
function VP(e, t = 15) {
  return e ? e.length > t ? `${e.substr(0, t)}…` : e : "";
}
function NP(e, t = 15, n = ta.Middle) {
  if (!e)
    return "";
  let a = VP(e, t);
  return n === ta.Start ? a = RP(e, t) : n === ta.Middle && (a = FP(e, t)), a;
}
function LP(e, t = [" "]) {
  let n = [e];
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    n.forEach((r, s) => {
      const i = r.split(o), u = i.map((d, c) => `${d}${c === i.length - 1 ? "" : o}`);
      n[s] = u;
    }), n = tu(n);
  }
  return n;
}
function zP(e, t, n, a, o, r) {
  var s;
  t === void 0 && (t = 50), n === void 0 && (n = ta.Middle), o === void 0 && (o = +((s = window.getComputedStyle(e.node())) === null || s === void 0 ? void 0 : s.fontSize) || 0);
  const i = e.text(), u = i.length, d = o * u * r, f = Math.ceil(u * t / (1.1 * d));
  return f < u ? (e.text(NP(i, f, n)), !0) : !1;
}
function cs(e, t, n = dD()) {
  return e.length * t * n || 0;
}
function fs(e, t, n) {
  const a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), r = document.createElementNS(a, "text");
  r.textContent = e, r.setAttribute("font-size", `${n}`), r.setAttribute("font-family", t), o.appendChild(r), document.body.appendChild(o);
  const s = r.getComputedTextLength();
  return document.body.removeChild(o), s;
}
function HP(e, t = void 0, n = !0, a = wg, o = !1) {
  const r = `${e.text}`;
  if (!r)
    return [];
  const s = Array.isArray(a) ? a : [a];
  return r.split(`
`).map((u) => {
    const d = [];
    if (!t)
      return [u];
    const c = LP(u, s);
    let f = "";
    for (let p = 0; p < c.length; p += 1) {
      (n ? cs(f + c[p], e.fontSize, e.fontWidthToHeightRatio) : fs(f + c[p], e.fontFamily, e.fontSize)) < t || p === 0 ? f += c[p] : (d.push(f.trim()), f = c[p]);
      const v = 2;
      if (o)
        for (; f.trim().length > v && (n ? cs(f, e.fontSize, e.fontWidthToHeightRatio) : fs(f, e.fontFamily, e.fontSize)) > t; ) {
          let b = f.trim().length - v;
          for (; b > 0; ) {
            const $ = `${f.substring(0, b)}${xg}`;
            if ((n ? cs($, e.fontSize, e.fontWidthToHeightRatio) : fs($, e.fontFamily, e.fontSize)) <= t || b === 1) {
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
function UP(e, t = void 0, n = void 0, a = !0, o = wg, r = !1) {
  const s = Array.isArray(e) ? e.map((f) => Xo(Gf, f)) : [Xo(Gf, e)], i = s.map((f) => HP(f, t, a, o, r)), u = s[0];
  let d = -u.fontSize * (u.lineHeight - 1);
  const c = [];
  return s.forEach((f, p) => {
    var h;
    let v = i[p];
    const m = p > 0 ? c[p - 1] : void 0, b = m ? m.marginBottom : 0, $ = f.marginTop, k = Math.max(b, $);
    d += k;
    const C = f.fontSize * f.lineHeight;
    let A = 0;
    for (let T = 0; T < v.length; T += 1) {
      let M = v[T];
      d += C;
      const E = `${M} …`, N = a ? cs(E, f.fontSize, f.fontWidthToHeightRatio) : fs(E, f.fontFamily, f.fontSize);
      if (A = Math.max(N, A), n && d + C > n && T !== v.length - 1) {
        M.charAt(M.length - 1) === xg && (M = M.substr(0, v[T].length - 1)), N < t ? v[T] = E : v[T] = `${v[T].substr(0, v[T].length - 2)}…`, v = v.slice(0, T + 1);
        break;
      }
    }
    c.push(Object.assign(Object.assign({}, f), { _lines: v, _estimatedHeight: d - ((m == null ? void 0 : m._estimatedHeight) || 0), _maxWidth: Math.max(A, (h = m == null ? void 0 : m._maxWidth) !== null && h !== void 0 ? h : 0) }));
  }), c;
}
function WP(e, t = 0, n) {
  return e.map((a, o) => {
    const r = o > 0 ? e[o - 1] : void 0, s = r ? r.marginBottom / r.fontSize : 0, i = a.marginTop / a.fontSize, u = Math.max(s, i), d = {
      fontSize: a.fontSize,
      fontFamily: a.fontFamily,
      fontWeight: a.fontWeight,
      fill: a.color,
      y: o === 0 && n
    };
    return `<tspan xmlns="http://www.w3.org/2000/svg" ${Object.entries(d).filter(([f, p]) => p).map(([f, p]) => `${PP(f)}="${IP(p.toString())}"`).join(" ")}>${a._lines.map((f, p) => {
      let h;
      return o === 0 && p === 0 ? h = 0.8 + u : p === 0 ? h = u + a.lineHeight : h = a.lineHeight, `<tspan x="${t}" dy="${h}em">${f.length ? f : " "}</tspan>`;
    }).join("")}</tspan>`;
  });
}
function KP(e) {
  return EE(e, (t) => t._estimatedHeight);
}
const jP = ["text", "tspan", "textPath", "altGlyph", "altGlyphDef", "altGlyphItem", "glyphRef", "textRef", "textArea"];
function YP(e, t, n, a) {
  var o, r;
  const s = UP(t, n.width, void 0, n.fastMode, n.separator, n.wordBreak), i = (o = n.x) !== null && o !== void 0 ? o : +e.getAttribute("x"), u = (r = n.y) !== null && r !== void 0 ? r : +e.getAttribute("y"), d = i ?? 0;
  let c = u ?? 0;
  if (n.textAlign && e.setAttribute("text-anchor", OP(n.textAlign)), n.verticalAlign && n.verticalAlign !== na.Top) {
    const f = KP(s), p = n.verticalAlign === na.Middle ? -f / 2 : n.verticalAlign === na.Bottom ? -f : 0;
    c += p;
  }
  n.textRotationAngle ? e.setAttribute("transform", `rotate(${n.textRotationAngle === 0 || n.textRotationAngle ? n.textRotationAngle : 0} ${d} ${c})`) : e.removeAttribute("transform");
  {
    const f = new DOMParser();
    e.textContent = "", s.forEach((p) => {
      const h = WP([p], d, c).join(""), v = BP(h, jP), m = f.parseFromString(v, "image/svg+xml").firstChild;
      e.appendChild(m);
    });
  }
}
const GP = Object.assign(Object.assign({}, lc), { position: void 0, type: void 0, label: void 0, labelFontSize: null, gridLine: !0, tickLine: !0, domainLine: !0, numTicks: void 0, minMaxTicksOnly: !1, minMaxTicksOnlyWhenWidthIsLess: 250, tickTextWidth: void 0, tickTextSeparator: void 0, tickTextForceWordBreak: !1, tickTextTrimType: ta.Middle, tickTextFitMode: Xs.Wrap, tickTextFontSize: null, tickTextAlign: void 0, tickTextColor: null, tickTextAngle: void 0, labelMargin: 8, labelColor: null, tickFormat: void 0, tickValues: void 0, fullSize: !0, tickPadding: 8, tickTextHideOverlapping: void 0 }), xy = nt`
  label: axis-component;
`, qP = Nd`
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

  body.theme-dark ${`.${xy}`} {
    --vis-axis-tick-color: var(--vis-dark-axis-tick-color);
    --vis-axis-domain-color: var(--vis-dark-axis-domain-color);
    --vis-axis-tick-label-color: var(--vis-dark-axis-tick-label-color);
    --vis-axis-grid-color: var(--vis-dark-axis-grid-color);
    --vis-axis-label-color: var(--vis-dark-axis-label-color);
  }
`, pc = nt`
  label: hide-tick-line;
`, hc = nt`
  label: hide-domain;
`, Cy = nt`
  label: axis;

  user-select: none;

  .domain {
    stroke: var(--vis-axis-domain-color, var(--vis-axis-tick-color));
    stroke-width: var(--vis-axis-domain-line-width, var(--vis-axis-grid-line-width));
  }

  &${`.${pc}`} {
    .tick > line {
      opacity: 0;
    }
  }

  &${`.${hc}`} {
    .domain {
      opacity: 0;
    }
  }
`, $y = nt`
  label: grid;

  .domain {
    opacity: 0;
  }

  line {
    stroke: var(--vis-axis-grid-color);
    stroke-width: var(--vis-axis-grid-line-width);
  }
`, ky = nt`
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
`, $u = nt`
  label: label;
  fill: var(--vis-axis-label-color);
  font-size: var(--vis-axis-label-font-size);
  font-family: var(--vis-axis-font-family, var(--vis-font-family));
  text-anchor: middle;
`, Sy = nt`
  label: tick-label;
`, Ty = nt`
  label: tick-label-hideable;
  opacity: 0;
  transition: var(--vis-axis-tick-label-hide-transition);
`, XP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  axis: Cy,
  globalStyles: qP,
  grid: $y,
  hideDomain: hc,
  hideTickLine: pc,
  label: $u,
  root: xy,
  tick: ky,
  tickLabel: Sy,
  tickLabelHideable: Ty
}, Symbol.toStringTag, { value: "Module" }));
class Ay extends sy {
  constructor(t) {
    super(), this._defaultConfig = GP, this.config = this._defaultConfig, this._defaultNumTicks = 3, this.events = {}, t && this.setConfig(t), this.axisGroup = this.g.append("g"), this.gridGroup = this.g.append("g").attr("class", $y);
  }
  /** Renders axis to an invisible grouped to calculate automatic chart margins */
  preRender() {
    const { config: t } = this, n = this.g.append("g").attr("opacity", 0);
    this._renderAxis(n, 0), this._axisRawBBox = n.node().getBBox(), t.tickTextAlign && this._alignTickLabels(), this._renderAxisLabel(n), this._axisSizeBBox = this._getAxisSize(n), this._requiredMargin = this._getRequiredMargin(this._axisSizeBBox), n.remove();
  }
  getPosition() {
    const { config: { type: t, position: n } } = this;
    return n ?? (t === Ae.X ? Ce.Bottom : Ce.Left);
  }
  _getAxisSize(t) {
    return t.node().getBBox();
  }
  _getRequiredMargin(t = this._axisSizeBBox) {
    const { config: { type: n, position: a } } = this;
    switch (n) {
      case Ae.X: {
        const r = this._axisSizeBBox.x + this._axisSizeBBox.width, s = this._axisSizeBBox.x < 0 ? Math.abs(this._axisSizeBBox.x) : 0, i = r - this._width > 1 ? r - this._width : 0;
        switch (a) {
          case Ce.Top:
            return { top: t.height, left: s, right: i };
          case Ce.Bottom:
          default:
            return { bottom: t.height, left: s, right: i };
        }
      }
      case Ae.Y: {
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
      case Ae.X:
        switch (a) {
          case Ce.Top:
            return { top: t.top, left: t.left };
          case Ce.Bottom:
          default:
            return { top: t.top + this._height, left: t.left };
        }
      case Ae.Y:
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
      o.tickValues(this._getConfiguredTickValues()), this.gridGroup.selectAll("*").interrupt(), Yn(this.gridGroup, t).call(o).style("opacity", 1);
    } else
      Yn(this.gridGroup, t).style("opacity", 0);
    a.tickTextAlign && this._alignTickLabels(), this._resolveTickLabelOverlap(n);
  }
  _buildAxis() {
    const { config: { type: t, position: n, tickPadding: a } } = this, o = this._getNumTicks();
    switch (t) {
      case Ae.X:
        switch (n) {
          case Ce.Top:
            return Lp(this.xScale).ticks(o).tickPadding(a);
          case Ce.Bottom:
          default:
            return Hp(this.xScale).ticks(o).tickPadding(a);
        }
      case Ae.Y:
        switch (n) {
          case Ce.Right:
            return zp(this.yScale).ticks(o).tickPadding(a);
          case Ce.Left:
          default:
            return Up(this.yScale).ticks(o).tickPadding(a);
        }
    }
  }
  _buildGrid() {
    const { config: { type: t, position: n } } = this, a = this._getNumTicks();
    switch (t) {
      case Ae.X:
        switch (n) {
          case Ce.Top:
            return Lp(this.xScale).ticks(a * 2).tickSize(-this._height).tickSizeOuter(0);
          case Ce.Bottom:
          default:
            return Hp(this.xScale).ticks(a * 2).tickSize(-this._height).tickSizeOuter(0);
        }
      case Ae.Y:
        switch (n) {
          case Ce.Right:
            return zp(this.yScale).ticks(a * 2).tickSize(-this._width).tickSizeOuter(0);
          case Ce.Left:
          default:
            return Up(this.yScale).ticks(a * 2).tickSize(-this._width).tickSizeOuter(0);
        }
    }
  }
  _renderAxis(t = this.axisGroup, n = this.config.duration) {
    const { config: a } = this, o = this._buildAxis(), r = this._getConfiguredTickValues() || o.scale().ticks(this._getNumTicks());
    o.tickValues(r), t.selectAll("*").interrupt(), Yn(t, n).call(o);
    const s = t.selectAll("g.tick");
    s.classed(ky, !0).style("font-size", a.tickTextFontSize);
    const i = t.selectAll("g.tick > text").filter((u) => r.some((d) => qo(u, d))).classed(Sy, !0).classed(Ty, !!a.tickTextHideOverlapping).style("fill", a.tickTextColor);
    if (i.nodes().forEach((u) => Wd(u)), i.each((u, d, c) => {
      var f, p;
      let h = (p = (f = a.tickFormat) === null || f === void 0 ? void 0 : f.call(a, u, d, r)) !== null && p !== void 0 ? p : `${u}`;
      const v = c[d], m = a.tickTextWidth || (a.type === Ae.X ? this._containerWidth / (s.size() + 1) : this._containerWidth / 5), b = getComputedStyle(v), $ = Number.parseFloat(b.fontSize), k = b.fontFamily, C = {
        verticalAlign: a.type === Ae.X ? na.Top : na.Middle,
        width: m,
        textRotationAngle: a.tickTextAngle,
        separator: a.tickTextSeparator,
        wordBreak: a.tickTextForceWordBreak
      };
      if (a.tickTextFitMode === Xs.Trim) {
        const T = Xn(v).text(h);
        zP(T, m, a.tickTextTrimType, !0, $, 0.58), h = Xn(v).text();
      }
      YP(v, { text: h, fontFamily: k, fontSize: $ }, C);
    }), t.classed(Cy, !0).classed(pc, !a.tickLine).classed(hc, !a.domainLine), a.fullSize) {
      const u = this._getFullDomainPath(0);
      Yn(t.select(".domain"), n).attr("d", u);
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
            if (jM(d, h, -5)) {
              f._visible = !1;
              break;
            }
          }
        }
      });
    t.each((a, o, r) => {
      const s = r[o];
      Xn(s).style("opacity", s._visible ? 1 : 0);
    });
  }
  _getNumTicks() {
    const { config: { type: t, numTicks: n } } = this;
    if (n)
      return n;
    if (t === Ae.X) {
      const a = this.xScale.range(), o = a[1] - a[0];
      return Math.floor(o / 175);
    }
    if (t === Ae.Y) {
      const a = this.yScale.range(), o = Math.abs(a[0] - a[1]);
      return Math.pow(o, 0.85) / 25;
    }
    return this._defaultNumTicks;
  }
  _getConfiguredTickValues() {
    const { config: t } = this, n = t.type === Ae.X ? this.xScale : this.yScale, a = n == null ? void 0 : n.domain();
    return t.tickValues ? t.tickValues.filter((o) => o >= a[0] && o <= a[1]) : t.minMaxTicksOnly || t.type === Ae.X && this._width < t.minMaxTicksOnlyWhenWidthIsLess ? a : null;
  }
  _getFullDomainPath(t = 0) {
    const { config: { type: n } } = this;
    switch (n) {
      case Ae.X:
        return `M0.5, ${t} V0.5 H${this._width + 0.5} V${t}`;
      case Ae.Y:
        return `M${-t}, ${this._height + 0.5} H0.5 V0.5 H${-t}`;
    }
  }
  _renderAxisLabel(t = this.axisGroup) {
    var n;
    const { type: a, label: o, labelMargin: r, labelFontSize: s } = this.config;
    t.selectAll(`.${$u}`).remove();
    const i = this.getPosition(), { width: u, height: d } = (n = this._axisRawBBox) !== null && n !== void 0 ? n : t.node().getBBox(), c = a === Ae.X ? this._width / 2 : Math.pow(-1, +(i === Ce.Left)) * u, f = a === Ae.X ? Math.pow(-1, +(i === Ce.Top)) * d : this._height / 2, p = a === Ae.X ? 0 : Math.pow(-1, +(i === Ce.Left)) * r, h = a === Ae.X ? Math.pow(-1, +(i === Ce.Top)) * r : 0, v = a === Ae.Y ? -90 : 0;
    t.append("text").attr("class", $u).text(o).attr("dy", `${this._getLabelDY()}em`).attr("transform", `translate(${c + p},${f + h}) rotate(${v})`).style("font-size", s).style("fill", this.config.labelColor);
  }
  _getLabelDY() {
    const { type: t, position: n } = this.config;
    switch (t) {
      case Ae.X:
        switch (n) {
          case Ce.Top:
            return 0;
          case Ce.Bottom:
          default:
            return 0.75;
        }
      case Ae.Y:
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
    const { config: { type: t, tickTextAlign: n, tickTextAngle: a, position: o } } = this, r = this.g.selectAll("g.tick > text"), s = this._getTickTextAnchor(n), i = t === Ae.X ? 0 : this._getYTickTextTranslate(n, o), u = a ? `translate(${i},0) rotate(${a})` : `translate(${i},0)`;
    r.attr("transform", u).attr("text-anchor", s);
  }
  _getTickTextAnchor(t) {
    switch (t) {
      case Tt.Left:
        return "start";
      case Tt.Right:
        return "end";
      case Tt.Center:
        return "middle";
      default:
        return null;
    }
  }
  _getYTickTextTranslate(t, n = Ce.Left) {
    const o = this._axisRawBBox.width - 9;
    switch (t) {
      case Tt.Left:
        return n === Ce.Left ? o * -1 : 0;
      case Tt.Right:
        return n === Ce.Left ? 0 : o;
      case Tt.Center:
        return n === Ce.Left ? o * -0.5 : o * 0.5;
      default:
        return 0;
    }
  }
}
Ay.selectors = XP;
const Ey = Symbol("componentAccessorKey"), JP = Symbol("tooltipAccessorKey"), ZP = Symbol("crosshairAccessorKey"), My = Symbol("axisAccessorKey"), QP = Symbol("annotationsAccessorKey");
function Dy(e, t) {
  return qo(e, t);
}
function vc(e) {
  const t = He(), n = t.attrs;
  return S(() => {
    const a = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((r) => {
      a[Ha(r)] = e[Ha(r)];
    }), { ...a, ...n };
  });
}
const eI = /* @__PURE__ */ _({
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
    const n = e, { data: a } = me(n), o = vc(n), r = B(), s = On({
      components: [],
      annotations: void 0,
      crosshair: void 0,
      tooltip: void 0,
      xAxis: void 0,
      yAxis: void 0
    }), i = B();
    return te(a, () => {
      r.value && r.value.setData(a.value, !0);
    }), xe(() => {
      var u;
      s.components.map((d) => d.config), (u = r.value) == null || u.updateContainer({ ...Gr(o.value), ...Gr(s) });
    }), ue(() => {
      i.value && (r.value = new PO(i.value, { ...Gr(s) }, a.value));
    }), Ye(() => {
      var u;
      return (u = r.value) == null ? void 0 : u.destroy();
    }), tn(Ey, {
      data: a,
      update: (u) => s.components = [...s.components, u],
      destroy: () => {
        var u;
        return s.components = (u = s.components) == null ? void 0 : u.filter((d) => !d.isDestroyed());
      }
    }), tn(My, {
      data: a,
      update: (u) => s[`${u.config.type}Axis`] = u,
      destroy: (u) => {
        s[`${u}Axis`] = void 0;
      }
    }), tn(ZP, {
      data: a,
      update: (u) => s.crosshair = u,
      destroy: () => {
        s.crosshair = void 0;
      }
    }), tn(JP, {
      data: a,
      update: (u) => s.tooltip = u,
      destroy: () => {
        s.tooltip = void 0;
      }
    }), tn(QP, {
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
}), tI = { "data-vis-axis": "" }, By = /* @__PURE__ */ _({
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
    const n = ua(My), a = e, o = S(() => n.data.value ?? a.data), r = vc(a), s = B();
    return ue(() => {
      se(() => {
        var i;
        s.value = new Ay(r.value), (i = s.value) == null || i.setData(o.value), n.update(s.value);
      });
    }), Ye(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy(a.type);
    }), te(r, (i, u) => {
      var d;
      Dy(i, u) || (d = s.value) == null || d.setConfig(r.value);
    }), te(o, () => {
      var i;
      (i = s.value) == null || i.setData(o.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", tI));
  }
}), nI = { "data-vis-component": "" }, aI = /* @__PURE__ */ _({
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
    const n = ua(Ey), a = e, o = S(() => n.data.value ?? a.data), r = vc(a), s = B();
    return ue(() => {
      se(() => {
        var i;
        s.value = new Fi(r.value), (i = s.value) == null || i.setData(o.value), n.update(s.value);
      });
    }), Ye(() => {
      var i;
      (i = s.value) == null || i.destroy(), n.destroy();
    }), te(r, (i, u) => {
      var d;
      Dy(i, u) || (d = s.value) == null || d.setConfig(r.value);
    }), te(o, () => {
      var i;
      (i = s.value) == null || i.setData(o.value);
    }), t({
      component: s
    }), (i, u) => (g(), L("div", nI));
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
const N5 = /* @__PURE__ */ _({
  __name: "XAxis",
  props: {
    position: {},
    y: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(By), D({ type: "x" }, t), null, 16));
  }
}), L5 = /* @__PURE__ */ _({
  __name: "YAxis",
  props: {
    position: {},
    x: {},
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(By), D({ type: "y" }, t), null, 16));
  }
}), z5 = /* @__PURE__ */ _({
  __name: "ChartProvider",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (g(), w(l(eI), { data: t.data }, {
      default: y(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data"]));
  }
}), H5 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(aI), {
      x: s.x,
      y: l(a),
      color: o,
      lineDashArray: r,
      curveType: s.curveType ?? l(Pe).MonotoneX,
      lineWidth: s.lineWidth ?? 2,
      fallbackValue: s.fallbackValue,
      interpolateMissingData: s.interpolateMissingData
    }, null, 8, ["x", "y", "curveType", "lineWidth", "fallbackValue", "interpolateMissingData"]));
  }
}), oI = { class: "my-auto text-slate-400 dark:text-slate-100" }, U5 = /* @__PURE__ */ _({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(e) {
    return (t, n) => (g(), L("div", oI, " Showing " + ce(t.min) + " to " + ce(t.max) + " of " + ce(t.total) + " results ", 1));
  }
}), W5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(nx), D(n.value, {
      class: l(V)("text-text flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          O(l(am))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(ax), X(Z(n.value)), {
      default: y(() => [
        O(l(xn), {
          class: J(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(K$) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), j5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(ox), X(Z(n.value)), {
      default: y(() => [
        O(l(xn), {
          class: J(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(j$) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Y5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(ix), X(Z(n.value)), {
      default: y(() => [
        O(l(xn), {
          class: J(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(Cd) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), G5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(lx), X(Z(n.value)), {
      default: y(() => [
        O(l(xn), {
          class: J(l(V)("size-10 p-0", t.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: y(() => [
            x(a.$slots, "default", { icon: l(U$) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), q5 = /* @__PURE__ */ _({
  __name: "LumuixModeToggle",
  setup(e) {
    const t = DS({
      selector: "html"
    });
    return (n, a) => (g(), w(RT, {
      modelValue: l(t),
      "onUpdate:modelValue": a[0] || (a[0] = (o) => ut(t) ? t.value = o : null)
    }, {
      checked: y(() => [
        O(l(q$), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": y(() => [
        O(l(e2), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), X5 = /* @__PURE__ */ _({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(e) {
    const t = e, n = B(t.setOpenTo), a = () => {
      n.value = !n.value;
    };
    return (o, r) => (g(), L(le, null, [
      O(l(sr), {
        onClick: a,
        class: J(t.class)
      }, {
        default: y(() => [
          (g(!0), L(le, null, Ee(o.headers, (s) => (g(), w(l(Js), {
            key: s.value
          }, {
            default: y(() => [
              o.$slots[`cell_header_${s.value}`] ? x(o.$slots, `cell_header_${s.value}`, {
                key: 0,
                item: o.row,
                open: n.value
              }) : (g(), L(le, { key: 1 }, [
                ae(ce(o.row[s.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (g(), w(l(ku), { key: 0 }, {
            default: y(() => [
              x(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : ie("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      n.value ? (g(!0), L(le, { key: 0 }, Ee(o.subRows, (s, i) => (g(), w(l(sr), { key: i }, {
        default: y(() => [
          (g(!0), L(le, null, Ee(o.headers, (u) => (g(), w(l(Js), {
            key: u.value
          }, {
            default: y(() => [
              o.$slots[`subrow_cell_${u.value}`] ? x(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: s,
                open: n.value
              }) : (g(), L(le, { key: 1 }, [
                ae(ce("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (g(), w(l(ku), { key: 0 }, {
            default: y(() => [
              x(o.$slots, "sub_row_actions", {
                item: o.row,
                open: n.value
              })
            ]),
            _: 3
          })) : ie("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : ie("", !0)
    ], 64));
  }
}), rI = { class: "relative w-full overflow-auto" }, sI = /* @__PURE__ */ _({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", rI, [
      _e("table", {
        class: J(l(V)("w-full caption-bottom text-sm", t.class))
      }, [
        x(n.$slots, "default")
      ], 2)
    ]));
  }
}), iI = /* @__PURE__ */ _({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tbody", {
      class: J(l(V)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Js = /* @__PURE__ */ _({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: J(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", t.class])
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), lI = /* @__PURE__ */ _({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("th", {
      class: J(
        l(V)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), uI = /* @__PURE__ */ _({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("thead", {
      class: J(l(V)("[&_tr]:border-b", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), J5 = /* @__PURE__ */ _({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tfoot", {
      class: J(
        l(V)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 last:[&>tr]:border-b-0",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), sr = /* @__PURE__ */ _({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("tr", {
      class: J(
        l(V)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ku = /* @__PURE__ */ _({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("td", {
      class: J(["w-32 p-4 text-center align-middle dark:text-slate-300", t.class])
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), dI = /* @__PURE__ */ _({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("caption", {
      class: J(l(V)("text-sub-text mt-4 text-sm", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), cI = { class: "flex items-center justify-center py-10" }, Z5 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(sr, null, {
      default: y(() => [
        O(Js, D({
          class: l(V)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            t.class
          )
        }, n.value), {
          default: y(() => [
            _e("div", cI, [
              x(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Q5 = /* @__PURE__ */ _({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (g(), w(l(sI), null, {
      default: y(() => [
        t.caption ? (g(), w(l(dI), { key: 0 }, {
          default: y(() => [
            ae(ce(t.caption), 1)
          ]),
          _: 1
        })) : ie("", !0),
        O(l(uI), null, {
          default: y(() => [
            O(l(sr), null, {
              default: y(() => [
                (g(!0), L(le, null, Ee(t.headers, (a, o) => (g(), w(l(lI), null, {
                  default: y(() => [
                    t.$slots[`header_${t.headers[o].value}`] ? x(t.$slots, `header_${t.headers[o].value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(le, { key: 1 }, [
                      ae(ce(a.name), 1)
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
        O(l(iI), null, {
          default: y(() => [
            (g(!0), L(le, null, Ee(t.rows, (a, o) => (g(), w(l(sr), { key: o }, {
              default: y(() => [
                (g(!0), L(le, null, Ee(t.headers, (r) => (g(), w(l(Js), {
                  key: r.value
                }, {
                  default: y(() => [
                    t.$slots[`cell_${r.value}`] ? x(t.$slots, `cell_${r.value}`, {
                      key: 0,
                      item: a
                    }) : (g(), L(le, { key: 1 }, [
                      ae(ce(a[r.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                t.$slots.row_actions ? (g(), w(l(ku), { key: 0 }, {
                  default: y(() => [
                    x(t.$slots, "row_actions", { item: a })
                  ]),
                  _: 2
                }, 1024)) : ie("", !0)
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
}), fI = { class: "text-text" }, e6 = /* @__PURE__ */ _({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, a = () => n("close");
    return (o, r) => (g(), w(l(Om), { open: o.open }, {
      default: y(() => [
        O(l(US), { "as-child": "" }, {
          default: y(() => [
            x(o.$slots, "trigger")
          ]),
          _: 3
        }),
        O(l(Pm), {
          onClose: a,
          onEscapeKeyDown: a,
          onPointerDownOutside: a,
          class: J("max-w-" + o.size)
        }, {
          default: y(() => [
            O(l(WS), null, {
              default: y(() => [
                O(l(KS), null, {
                  default: y(() => {
                    var s;
                    return [
                      o.$slots.title ? x(o.$slots, "title", { key: 0 }) : (s = o.headerData) != null && s.title ? (g(), L(le, { key: 1 }, [
                        ae(ce(o.headerData.title), 1)
                      ], 64)) : ie("", !0)
                    ];
                  }),
                  _: 3
                }),
                O(l(jS), null, {
                  default: y(() => {
                    var s;
                    return [
                      o.$slots.description ? x(o.$slots, "description", { key: 0 }) : (s = o.headerData) != null && s.description ? (g(), L(le, { key: 1 }, [
                        ae(ce(o.headerData.description), 1)
                      ], 64)) : ie("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            _e("div", fI, [
              o.$slots.content ? x(o.$slots, "content", { key: 0 }) : x(o.$slots, "default", { key: 1 })
            ]),
            O(l(YS), null, {
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
}), pI = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l(IC), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t6 = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(VC), D(l(a), {
      class: l(V)(
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
}), hI = /* @__PURE__ */ _({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => {
      var o;
      return g(), w(lt((o = n.tab) != null && o.is ? n.tab.is : "a"), {
        href: n.tab.href,
        class: J([
          n.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(V)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            t.class
          )
        ])
      }, {
        default: y(() => {
          var r;
          return [
            (r = n.tab) != null && r.icon ? (g(), w(lt(n.tab.icon), {
              key: 0,
              class: "size-5"
            })) : ie("", !0),
            ae(" " + ce(n.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), Wp = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(RC), D(n.value, {
      class: l(V)(
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
}), n6 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(FC), D({
      class: l(V)(
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
}), vI = {}, mI = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function gI(e, t) {
  return g(), L("div", mI, [
    x(e.$slots, "default")
  ]);
}
const yI = /* @__PURE__ */ br(vI, [["render", gI]]), a6 = /* @__PURE__ */ _({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, n = S(
      () => t.tabs.find((a) => a.active)
    );
    return (a, o) => (g(), w(l(pI), null, {
      default: y(() => [
        O(l(Wp), { class: "hidden gap-2 md:block" }, {
          default: y(() => [
            (g(!0), L(le, null, Ee(a.tabs, (r) => (g(), w(l(hI), {
              key: r.name,
              tab: r
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        O(l(Wp), { class: "flex md:hidden" }, {
          default: y(() => [
            O(l(XS), null, {
              default: y(() => [
                O(l(ZS), { "as-child": "" }, {
                  default: y(() => [
                    O(l(xn), { variant: "secondary" }, {
                      default: y(() => {
                        var r;
                        return [
                          ae(ce(((r = n.value) == null ? void 0 : r.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                O(l(QS), { class: "w-full" }, {
                  default: y(() => [
                    (g(!0), L(le, null, Ee(a.tabs, (r) => (g(), w(l(eT), D({
                      key: r.name
                    }, { ref_for: !0 }, r), {
                      default: y(() => [
                        ae(ce(r.name), 1)
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
        O(l(yI), null, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), bI = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, _I = /* @__PURE__ */ _({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = wn(t, "class"), a = ma(n);
    return (o, r) => (g(), L("div", bI, [
      O(l(nS), D({ "data-slot": "navigation-menu-viewport" }, l(a), {
        class: l(V)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)]",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), o6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = wn(n, "class", "viewport"), r = bn(o, a);
    return (s, i) => (g(), w(l(jk), D({
      "data-slot": "navigation-menu",
      "data-viewport": s.viewport
    }, l(r), {
      class: l(V)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default"),
        s.viewport ? (g(), w(_I, { key: 0 })) : ie("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), r6 = /* @__PURE__ */ _({
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
    const n = e, a = t, o = wn(n, "class"), r = bn(o, a);
    return (s, i) => (g(), w(l(Xk), D({ "data-slot": "navigation-menu-content" }, l(r), {
      class: l(V)(
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
}), s6 = /* @__PURE__ */ _({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = wn(t, "class"), a = ma(n);
    return (o, r) => (g(), w(l(Jk), D({ "data-slot": "navigation-menu-indicator" }, l(a), {
      class: l(V)("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", t.class)
    }), {
      default: y(() => r[0] || (r[0] = [
        _e("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), i6 = /* @__PURE__ */ _({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = wn(t, "class");
    return (a, o) => (g(), w(l(Gk), D({ "data-slot": "navigation-menu-item" }, l(n), {
      class: l(V)("relative", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l6 = /* @__PURE__ */ _({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = wn(n, "class"), r = bn(o, a);
    return (s, i) => (g(), w(l(Zk), D({ "data-slot": "navigation-menu-link" }, l(r), {
      class: l(V)("'data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4'", n.class)
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u6 = /* @__PURE__ */ _({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = wn(t, "class"), a = ma(n);
    return (o, r) => (g(), w(l(Qk), D({ "data-slot": "navigation-menu-list" }, l(a), {
      class: l(V)(
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
}), d6 = /* @__PURE__ */ _({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = wn(t, "class"), a = ma(n);
    return (o, r) => (g(), w(l(tS), D({ "data-slot": "navigation-menu-trigger" }, l(a), {
      class: l(V)(l(wI)(), "group", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default"),
        O(l(mi), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wI = Vn(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), xI = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, c6 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(_x), D({
      class: l(V)("p-3", n.class)
    }, l(r)), {
      default: y(({ grid: u, weekDays: d }) => [
        O(l(EI), null, {
          default: y(() => [
            O(l(BI)),
            O(l(MI)),
            O(l(DI))
          ]),
          _: 1
        }),
        _e("div", xI, [
          (g(!0), L(le, null, Ee(u, (c) => (g(), w(l(kI), {
            key: c.value.toString()
          }, {
            default: y(() => [
              O(l(TI), null, {
                default: y(() => [
                  O(l(Kp), null, {
                    default: y(() => [
                      (g(!0), L(le, null, Ee(d, (f) => (g(), w(l(AI), { key: f }, {
                        default: y(() => [
                          ae(ce(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              O(l(SI), null, {
                default: y(() => [
                  (g(!0), L(le, null, Ee(c.rows, (f, p) => (g(), w(l(Kp), {
                    key: `weekDate-${p}`,
                    class: "mt-2 w-full"
                  }, {
                    default: y(() => [
                      (g(!0), L(le, null, Ee(f, (h) => (g(), w(l(CI), {
                        key: h.toString(),
                        date: h
                      }, {
                        default: y(() => [
                          O(l($I), {
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
}), CI = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l($x), D({
      class: l(V)(
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
}), $I = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Dx), D({
      class: l(V)(
        l(ya)({ variant: "ghost" }),
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
}), kI = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Cx), D({
      class: l(V)("w-full border-collapse space-y-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), SI = /* @__PURE__ */ _({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Ex), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), TI = /* @__PURE__ */ _({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(Ax), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kp = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Mx), D({
      class: l(V)("mt-2 flex w-full", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AI = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(kx), D({
      class: l(V)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EI = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(wx), D({
      class: l(V)("relative flex w-full items-center justify-between pt-1", t.class)
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MI = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(xx), D({
      class: l(V)("text-text text-sm font-medium", t.class)
    }, l(a)), {
      default: y(({ headingValue: s }) => [
        x(o.$slots, "default", { headingValue: s }, () => [
          ae(ce(s), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), DI = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Sx), D({
      class: l(V)(
        l(ya)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(J$), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), BI = /* @__PURE__ */ _({
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
    return (o, r) => (g(), w(l(Tx), D({
      class: l(V)(
        l(ya)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, l(a)), {
      default: y(() => [
        x(o.$slots, "default", {}, () => [
          O(l(X$), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OI = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(dC), D(n.value, {
      class: l(V)(
        "bg-border relative shrink-0",
        t.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        t.class
      )
    }), {
      default: y(() => [
        t.label ? (g(), L("span", {
          key: 0,
          class: J(
            l(V)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              t.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, ce(t.label), 3)) : ie("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), PI = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = pe(e, t);
    return (r, s) => (g(), w(l(rv), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f6 = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(hr), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), II = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(od), null, {
      default: y(() => [
        O(l(ud), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        O(l(ld), D({
          class: l(V)(l(RI)({ side: s.side }), n.class)
        }, { ...l(r), ...s.$attrs }), {
          default: y(() => [
            x(s.$slots, "default"),
            O(l(hr), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: y(() => [
                O(l(gi), { class: "text-muted-foreground h-4 w-4" })
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
}), p6 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(cv), D({
      class: l(V)("text-muted-foreground text-sm", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h6 = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(l(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), v6 = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(l(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), m6 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(dv), D({
      class: l(V)("text-foreground text-lg font-semibold", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g6 = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(sv), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RI = Vn(
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
), FI = "sidebar:state", VI = 60 * 60 * 24 * 7, NI = "16rem", LI = "18rem", zI = "3rem", HI = "b", [Ni, UI] = ge("Sidebar"), WI = { class: "flex h-full w-full flex-col" }, KI = ["data-state", "data-collapsible", "data-variant", "data-side"], jI = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, y6 = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a, openMobile: o, setOpenMobile: r } = Ni();
    return (s, i) => s.collapsible === "none" ? (g(), L("div", D({
      key: 0,
      class: l(V)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, s.$attrs), [
      x(s.$slots, "default")
    ], 16)) : l(n) ? (g(), w(l(PI), D({
      key: 1,
      open: l(o)
    }, s.$attrs, { "onUpdate:open": l(r) }), {
      default: y(() => [
        O(l(II), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: s.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: jt({
            "--sidebar-width": l(LI)
          })
        }, {
          default: y(() => [
            _e("div", WI, [
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
        class: J(
          l(V)(
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            s.variant === "floating" || s.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      _e("div", D({
        class: l(V)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          s.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          s.variant === "floating" || s.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, s.$attrs), [
        _e("div", jI, [
          x(s.$slots, "default", { state: l(a) })
        ])
      ], 16)
    ], 8, KI));
  }
}), b6 = /* @__PURE__ */ _({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "content",
      class: J(
        l(V)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), _6 = /* @__PURE__ */ _({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "footer",
      class: J(l(V)("flex flex-col gap-2 p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), w6 = /* @__PURE__ */ _({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group",
      class: J(l(V)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), x6 = /* @__PURE__ */ _({
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
      class: J(
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
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), C6 = /* @__PURE__ */ _({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "group-content",
      class: J(l(V)("w-full text-sm", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), $6 = /* @__PURE__ */ _({
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
      class: J(
        l(V)(
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
}), k6 = /* @__PURE__ */ _({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "header",
      class: J(l(V)("flex flex-col gap-2 p-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), S6 = /* @__PURE__ */ _({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(PT, {
      "data-sidebar": "input",
      class: J(
        l(V)(
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
}), T6 = /* @__PURE__ */ _({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("main", {
      class: J(
        l(V)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), A6 = /* @__PURE__ */ _({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu",
      class: J(l(V)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), E6 = /* @__PURE__ */ _({
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
      class: J(
        l(V)(
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
}), M6 = /* @__PURE__ */ _({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      "data-sidebar": "menu-badge",
      class: J(
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
      x(n.$slots, "default")
    ], 2));
  }
}), YI = /* @__PURE__ */ _({
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
    return (r, s) => (g(), w(l(a$), X(Z(l(o))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), GI = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(i$), null, {
      default: y(() => [
        O(l(s$), D({ ...l(r), ...s.$attrs }, {
          class: l(V)(
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
}), D6 = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(Gv), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qI = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(o$), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jp = /* @__PURE__ */ _({
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
    return (n, a) => (g(), w(l(W), D({
      "data-sidebar": "menu-button",
      "data-size": n.size,
      "data-active": n.isActive,
      class: l(V)(l(ZI)({ variant: n.variant, size: n.size }), t.class),
      as: n.as,
      "as-child": n.asChild
    }, n.$attrs), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), B6 = /* @__PURE__ */ _({
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
    const t = e, { isMobile: n, state: a } = Ni(), o = S(() => {
      const { tooltip: r, ...s } = t;
      return s;
    });
    return (r, s) => r.tooltip ? (g(), w(l(YI), { key: 1 }, {
      default: y(() => [
        O(l(qI), { "as-child": "" }, {
          default: y(() => [
            O(jp, X(Z({ ...o.value, ...r.$attrs })), {
              default: y(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        O(l(GI), {
          side: "right",
          align: "center",
          hidden: l(a) !== "collapsed" || l(n)
        }, {
          default: y(() => [
            typeof r.tooltip == "string" ? (g(), L(le, { key: 0 }, [
              ae(ce(r.tooltip), 1)
            ], 64)) : (g(), w(lt(r.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), w(jp, X(D({ key: 0 }, { ...o.value, ...r.$attrs })), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O6 = /* @__PURE__ */ _({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("li", {
      "data-sidebar": "menu-item",
      class: J(l(V)("group/menu-item relative", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Yp = /* @__PURE__ */ _({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("div", {
      class: J(l(V)("bg-skeleton animate-pulse rounded-md", t.class))
    }, null, 2));
  }
}), P6 = /* @__PURE__ */ _({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (a, o) => (g(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: J(l(V)("flex h-8 items-center gap-2 rounded-md px-2", t.class))
    }, [
      a.showIcon ? (g(), w(Yp, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : ie("", !0),
      O(Yp, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: jt({ "--skeleton-width": n.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), I6 = /* @__PURE__ */ _({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), L("ul", {
      "data-sidebar": "menu-badge",
      class: J(
        l(V)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), R6 = /* @__PURE__ */ _({
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
      class: J(
        l(V)(
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
}), XI = {};
function JI(e, t) {
  return g(), L("li", null, [
    x(e.$slots, "default")
  ]);
}
const F6 = /* @__PURE__ */ br(XI, [["render", JI]]), V6 = /* @__PURE__ */ _({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = t, o = Cm("(max-width: 768px)"), r = B(!1), s = Ed(n, "open", a, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function i(f) {
      s.value = f, document.cookie = `${FI}=${s.value}; path=/; max-age=${VI}`;
    }
    function u(f) {
      r.value = f;
    }
    function d() {
      return o.value ? u(!r.value) : i(!s.value);
    }
    Ts("keydown", (f) => {
      f.key === HI && (f.metaKey || f.ctrlKey) && (f.preventDefault(), d());
    });
    const c = S(() => s.value ? "expanded" : "collapsed");
    return UI({
      state: c,
      open: s,
      setOpen: i,
      isMobile: o,
      openMobile: r,
      setOpenMobile: u,
      toggleSidebar: d
    }), (f, p) => (g(), w(l(Gv), { "delay-duration": 0 }, {
      default: y(() => [
        _e("div", D({
          style: {
            "--sidebar-width": l(NI),
            "--sidebar-width-icon": l(zI)
          },
          class: l(V)(
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
}), N6 = /* @__PURE__ */ _({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = Ni();
    return (a, o) => (g(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: J(
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
      onClick: o[0] || (o[0] = //@ts-ignore
      (...r) => l(n) && l(n)(...r))
    }, [
      x(a.$slots, "default")
    ], 2));
  }
}), L6 = /* @__PURE__ */ _({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(OI, {
      "data-sidebar": "separator",
      class: J(l(V)("bg-sidebar-border mx-2 w-auto", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), z6 = /* @__PURE__ */ _({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = Ni();
    return (a, o) => (g(), w(xn, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: J(l(V)("h-7 w-7", t.class)),
      onClick: l(n)
    }, {
      default: y(() => [
        O(l(Z$)),
        o[0] || (o[0] = _e("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), ZI = Vn(
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
), H6 = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(CC), D({
      class: l(V)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        n.class
      )
    }, l(r)), {
      default: y(() => [
        O(l(SC), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: y(() => [
            O(l(TC), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (g(!0), L(le, null, Ee(s.modelValue, (u, d) => (g(), w(l(kC), {
          key: d,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), QI = 5, eR = 5e6, ln = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let wl = 0;
function tR() {
  return wl = (wl + 1) % Number.MAX_VALUE, wl.toString();
}
const xl = /* @__PURE__ */ new Map();
function Gp(e) {
  if (xl.has(e)) return;
  const t = setTimeout(() => {
    xl.delete(e), Uo({
      type: ln.REMOVE_TOAST,
      toastId: e
    });
  }, eR);
  xl.set(e, t);
}
const Ct = B({
  toasts: []
});
function Uo(e) {
  switch (e.type) {
    case ln.ADD_TOAST:
      Ct.value.toasts = [e.toast, ...Ct.value.toasts].slice(0, QI);
      break;
    case ln.UPDATE_TOAST:
      Ct.value.toasts = Ct.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case ln.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Gp(t) : Ct.value.toasts.forEach((n) => {
        Gp(n.id);
      }), Ct.value.toasts = Ct.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case ln.REMOVE_TOAST:
      e.toastId === void 0 ? Ct.value.toasts = [] : Ct.value.toasts = Ct.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function nR() {
  return {
    toasts: S(() => Ct.value.toasts),
    toast: aR,
    dismiss: (e) => Uo({ type: ln.DISMISS_TOAST, toastId: e })
  };
}
function aR(e) {
  const t = tR(), n = (o) => Uo({
    type: ln.UPDATE_TOAST,
    toast: { ...o, id: t }
  }), a = () => Uo({ type: ln.DISMISS_TOAST, toastId: t });
  return Uo({
    type: ln.ADD_TOAST,
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
const oR = { class: "flex gap-3" }, rR = { class: "grid gap-1" }, U6 = /* @__PURE__ */ _({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = nR();
    return (n, a) => (g(), w(l(dR), null, {
      default: y(() => [
        (g(!0), L(le, null, Ee(l(t), (o) => (g(), w(l(sR), D({
          key: o.id
        }, { ref_for: !0 }, o, { class: "my-1" }), {
          default: y(() => [
            _e("div", oR, [
              (g(), w(lt(o.icon), {
                class: J(l(V)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              _e("div", rR, [
                o.title ? (g(), w(l(uR), { key: 0 }, {
                  default: y(() => [
                    ae(ce(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ie("", !0),
                o.description ? (g(), L(le, { key: 1 }, [
                  Hy(o.description) ? (g(), w(l(qp), { key: 0 }, {
                    default: y(() => [
                      (g(), w(lt(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (g(), w(l(qp), { key: 1 }, {
                    default: y(() => [
                      ae(ce(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ie("", !0),
                O(l(lR))
              ]),
              (g(), w(lt(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        O(l(iR))
      ]),
      _: 1
    }));
  }
}), sR = /* @__PURE__ */ _({
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
    return (s, i) => (g(), w(l(XC), D(l(r), {
      class: l(V)(l(cR)({ variant: s.variant }), n.class),
      "onUpdate:open": s.onOpenChange
    }), {
      default: y(() => [
        x(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), iR = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(ZC), D(n.value, {
      class: l(V)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), W6 = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(JC), X(Z(n.value)), {
      default: y(() => [
        O(l(xn), {
          variant: a.variant,
          class: J(t.class)
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
}), lR = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(jv), D(n.value, {
      class: l(V)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        O(l(gi), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), uR = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(QC), D(n.value, {
      class: l(V)("text-sm font-semibold", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qp = /* @__PURE__ */ _({
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
    return (a, o) => (g(), w(l(e$), D({
      class: l(V)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dR = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (g(), w(l(LC), X(Z(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cR = Vn(
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
  wR as Accordion,
  xR as AccordionContent,
  CR as AccordionItem,
  $R as AccordionTrigger,
  kR as Alert,
  SR as AlertDescription,
  TR as AlertTitle,
  IR as Avatar,
  RR as AvatarFallback,
  FR as AvatarImage,
  VR as Badge,
  ba as Base,
  JS as BaseDropdownMenuItem,
  NR as Breadcrumb,
  LR as BreadcrumbEllipsis,
  zR as BreadcrumbItem,
  HR as BreadcrumbLink,
  UR as BreadcrumbList,
  WR as BreadcrumbPage,
  KR as BreadcrumbSeparator,
  xn as Button,
  s5 as Calendar,
  km as CalendarCell,
  Sm as CalendarCellTrigger,
  Tm as CalendarGrid,
  Am as CalendarGridBody,
  Em as CalendarGridHead,
  As as CalendarGridRow,
  Mm as CalendarHeadCell,
  Dm as CalendarHeader,
  Bm as CalendarHeading,
  IS as CalendarNextButton,
  RS as CalendarPrevButton,
  zS as CalendarWithSelect,
  jR as Card,
  XR as CardContent,
  qR as CardDescription,
  JR as CardFooter,
  YR as CardHeader,
  GR as CardTitle,
  oT as CharacterCount,
  z5 as ChartProvider,
  P5 as Checkbox,
  X5 as CollapsibleTableRow,
  ZR as Combobox,
  QR as ComboboxAnchor,
  DR as ComboboxCancel,
  e5 as ComboboxEmpty,
  t5 as ComboboxGroup,
  n5 as ComboboxInput,
  a5 as ComboboxItem,
  OR as ComboboxItemIndicator,
  o5 as ComboboxList,
  r5 as ComboboxSeparator,
  PR as ComboboxTrigger,
  HS as Command,
  p5 as CommandDialog,
  h5 as CommandEmpty,
  v5 as CommandGroup,
  m5 as CommandInput,
  g5 as CommandItem,
  y5 as CommandList,
  b5 as CommandSeparator,
  _5 as CommandShortcut,
  I5 as DatePicker,
  lT as Description,
  Om as Dialog,
  c5 as DialogClose,
  Pm as DialogContent,
  jS as DialogDescription,
  YS as DialogFooter,
  WS as DialogHeader,
  f5 as DialogScrollContent,
  KS as DialogTitle,
  US as DialogTrigger,
  XS as DropdownMenu,
  $5 as DropdownMenuCheckboxItem,
  QS as DropdownMenuContent,
  w5 as DropdownMenuGroup,
  C5 as DropdownMenuItem,
  A5 as DropdownMenuLabel,
  eT as DropdownMenuLink,
  Uw as DropdownMenuPortal,
  x5 as DropdownMenuRadioGroup,
  k5 as DropdownMenuRadioItem,
  T5 as DropdownMenuSeparator,
  S5 as DropdownMenuShortcut,
  E5 as DropdownMenuSub,
  D5 as DropdownMenuSubContent,
  M5 as DropdownMenuSubTrigger,
  ZS as DropdownMenuTrigger,
  dT as Error,
  B5 as Form,
  gT as FormElement,
  O5 as FormGrid,
  R5 as ImageUpload,
  PT as Input,
  Im as Label,
  H5 as Line,
  Q5 as LumuixDatatable,
  e6 as LumuixModal,
  q5 as LumuixModeToggle,
  a6 as LumuixTabs,
  o6 as NavigationMenu,
  r6 as NavigationMenuContent,
  s6 as NavigationMenuIndicator,
  i6 as NavigationMenuItem,
  l6 as NavigationMenuLink,
  u6 as NavigationMenuList,
  d6 as NavigationMenuTrigger,
  _I as NavigationMenuViewport,
  yR as Pagination,
  U5 as PaginationDetails,
  W5 as PaginationEllipsis,
  K5 as PaginationFirst,
  j5 as PaginationLast,
  bR as PaginationList,
  _R as PaginationListItem,
  Y5 as PaginationNext,
  G5 as PaginationPrev,
  xT as Popover,
  $T as PopoverContent,
  CT as PopoverTrigger,
  c6 as RangeCalendar,
  CI as RangeCalendarCell,
  $I as RangeCalendarCellTrigger,
  kI as RangeCalendarGrid,
  SI as RangeCalendarGridBody,
  TI as RangeCalendarGridHead,
  Kp as RangeCalendarGridRow,
  AI as RangeCalendarHeadCell,
  EI as RangeCalendarHeader,
  MI as RangeCalendarHeading,
  DI as RangeCalendarNextButton,
  BI as RangeCalendarPrevButton,
  F5 as Select,
  ql as SelectContent,
  i5 as SelectGroup,
  Xl as SelectItem,
  l5 as SelectItemText,
  u5 as SelectLabel,
  jl as SelectRoot,
  NS as SelectScrollDownButton,
  VS as SelectScrollUpButton,
  d5 as SelectSeparator,
  Gl as SelectTrigger,
  Yl as SelectValue,
  OI as Separator,
  PI as Sheet,
  f6 as SheetClose,
  II as SheetContent,
  p6 as SheetDescription,
  h6 as SheetFooter,
  v6 as SheetHeader,
  m6 as SheetTitle,
  g6 as SheetTrigger,
  y6 as Sidebar,
  b6 as SidebarContent,
  _6 as SidebarFooter,
  w6 as SidebarGroup,
  x6 as SidebarGroupAction,
  C6 as SidebarGroupContent,
  $6 as SidebarGroupLabel,
  k6 as SidebarHeader,
  S6 as SidebarInput,
  T6 as SidebarInset,
  A6 as SidebarMenu,
  E6 as SidebarMenuAction,
  M6 as SidebarMenuBadge,
  B6 as SidebarMenuButton,
  O6 as SidebarMenuItem,
  P6 as SidebarMenuSkeleton,
  I6 as SidebarMenuSub,
  R6 as SidebarMenuSubButton,
  F6 as SidebarMenuSubItem,
  V6 as SidebarProvider,
  N6 as SidebarRail,
  L6 as SidebarSeparator,
  z6 as SidebarTrigger,
  Yp as Skeleton,
  H6 as Slider,
  yI as TabBaseContent,
  sI as Table,
  iI as TableBody,
  dI as TableCaption,
  Js as TableCell,
  Z5 as TableEmpty,
  J5 as TableFooter,
  lI as TableHead,
  uI as TableHeader,
  sr as TableRow,
  ku as TableRowAction,
  n6 as TabsContent,
  hI as TabsItem,
  Wp as TabsList,
  pI as TabsRoot,
  t6 as TabsTrigger,
  V5 as TextArea,
  sR as Toast,
  W6 as ToastAction,
  lR as ToastClose,
  qp as ToastDescription,
  dR as ToastProvider,
  uR as ToastTitle,
  iR as ToastViewport,
  U6 as Toaster,
  RT as Toggle,
  YI as Tooltip,
  GI as TooltipContent,
  D6 as TooltipProvider,
  qI as TooltipTrigger,
  N5 as XAxis,
  L5 as YAxis,
  t2 as alertVariants,
  BS as badgeVariants,
  ya as buttonVariants,
  wI as navigationMenuTriggerStyle,
  RI as sheetVariants,
  ZI as sidebarMenuButtonVariants,
  OS as spinnerSize,
  aR as toast,
  cR as toastVariants,
  Ni as useSidebar,
  nR as useToast
};
