var Pl = (t) => {
  throw TypeError(t);
};
var ud = (t, e, a) => e.has(t) || Pl("Cannot " + a);
var La = (t, e, a) => (ud(t, e, "read from private field"), a ? a.call(t) : e.get(t)), Ol = (t, e, a) => e.has(t) ? Pl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a);
import * as da from "vue";
import { computed as C, ref as O, shallowRef as _t, watch as X, getCurrentScope as eo, onScopeDispose as to, shallowReadonly as sa, unref as l, defineComponent as b, toRefs as he, createBlock as _, openBlock as v, withCtx as f, renderSlot as w, getCurrentInstance as Pe, toRef as Cs, camelize as ao, withKeys as Te, h as Ie, onMounted as ce, createElementVNode as me, toDisplayString as le, normalizeProps as H, guardReactiveProps as G, createTextVNode as Z, mergeProps as D, withModifiers as $e, createCommentVNode as se, createElementBlock as L, Fragment as ne, renderList as be, resolveDynamicComponent as Ne, createVNode as P, useSlots as Pr, onBeforeMount as dd, Teleport as tn, watchEffect as we, onBeforeUnmount as no, nextTick as ae, withDirectives as Ca, vShow as $s, watchSyncEffect as Or, isRef as zt, inject as an, provide as oo, toHandlers as cd, normalizeStyle as ut, toHandlerKey as Ar, Comment as Bs, cloneVNode as Mr, vModelSelect as pd, onBeforeUpdate as fd, onUpdated as vd, markRaw as Tr, onUnmounted as ze, readonly as $a, toRaw as md, reactive as so, customRef as ks, mergeDefaults as Ss, watchPostEffect as Ds, effectScope as Es, normalizeClass as q, toValue as Se, withMemo as hd, hasInjectionContext as Ir, mergeModels as Yo, useModel as Vr, vModelDynamic as gd, vModelText as yd, isVNode as bd } from "vue";
function ca(t, e) {
  return t - e * Math.floor(t / e);
}
const Rr = 1721426;
function jt(t, e, a, n) {
  e = nn(t, e);
  let o = e - 1, s = -2;
  return a <= 2 ? s = 0 : Vt(e) && (s = -1), Rr - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function Vt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function nn(t, e) {
  return t === "BC" ? 1 - e : e;
}
function lo(t) {
  let e = "AD";
  return t <= 0 && (e = "BC", t = 1 - t), [
    e,
    t
  ];
}
const _d = {
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
    let a = e, n = a - Rr, o = Math.floor(n / 146097), s = ca(n, 146097), r = Math.floor(s / 36524), i = ca(s, 36524), u = Math.floor(i / 1461), c = ca(i, 1461), d = Math.floor(c / 365), p = o * 400 + r * 100 + u * 4 + d + (r !== 4 && d !== 4 ? 1 : 0), [g, m] = lo(p), h = a - jt(g, m, 1, 1), y = 2;
    a < jt(g, m, 3, 1) ? y = 0 : Vt(m) && (y = 1);
    let x = Math.floor(((h + y) * 12 + 373) / 367), $ = a - jt(g, m, x, 1) + 1;
    return new Be(g, m, x, $);
  }
  toJulianDay(e) {
    return jt(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return _d[Vt(e.year) ? "leapyear" : "standard"][e.month - 1];
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
const wd = {
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
function Oe(t, e) {
  return e = Le(e, t.calendar), t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Ps(t, e) {
  return e = Le(e, t.calendar), t = qa(t), e = qa(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function lt(t, e) {
  return Os(t.calendar, e.calendar) && Oe(t, e);
}
function Al(t, e) {
  return Os(t.calendar, e.calendar) && Ps(t, e);
}
function Os(t, e) {
  var a, n, o, s;
  return (s = (o = (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && o !== void 0 ? o : (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && s !== void 0 ? s : t.identifier === e.identifier;
}
function Fr(t, e) {
  return Oe(t, Fn(e));
}
function Lr(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = Bd(e), s = Math.ceil(n + 1 - o) % 7;
  return s < 0 && (s += 7), s;
}
function xd(t) {
  return gt(Date.now(), t);
}
function Fn(t) {
  return Dd(xd(t));
}
function Nr(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Cd(t, e) {
  return Ml(t) - Ml(e);
}
function Ml(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let So = null;
function Ct() {
  return So == null && (So = new Intl.DateTimeFormat().resolvedOptions().timeZone), So;
}
function qa(t) {
  return t.subtract({
    days: t.day - 1
  });
}
function Tl(t) {
  return t.add({
    days: t.calendar.getDaysInMonth(t) - t.day
  });
}
const Il = /* @__PURE__ */ new Map();
function $d(t) {
  if (Intl.Locale) {
    let a = Il.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Il.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function Bd(t) {
  let e = $d(t);
  return e && wd[e] || 0;
}
function ha(t) {
  t = Le(t, new tt());
  let e = nn(t.era, t.year);
  return zr(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function zr(t, e, a, n, o, s, r) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, r), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function Jo(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === Ct()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: r, second: i } = Wr(t, e);
  return zr(a, n, o, s, r, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const Vl = /* @__PURE__ */ new Map();
function Wr(t, e) {
  let a = Vl.get(e);
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
  }), Vl.set(e, a));
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
const Rl = 864e5;
function kd(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => Sd(t, e, s));
}
function Sd(t, e, a) {
  let n = Wr(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function ht(t, e, a = "compatible") {
  let n = ga(t);
  if (e === "UTC") return ha(n);
  if (e === Ct() && a === "compatible") {
    n = Le(n, new tt());
    let u = /* @__PURE__ */ new Date(), c = nn(n.era, n.year);
    return u.setFullYear(c, n.month - 1, n.day), u.setHours(n.hour, n.minute, n.second, n.millisecond), u.getTime();
  }
  let o = ha(n), s = Jo(o - Rl, e), r = Jo(o + Rl, e), i = kd(n, e, o - s, o - r);
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
function Kr(t, e, a = "compatible") {
  return new Date(ht(t, e, a));
}
function gt(t, e) {
  let a = Jo(t, e), n = new Date(t + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, r = n.getUTCDate(), i = n.getUTCHours(), u = n.getUTCMinutes(), c = n.getUTCSeconds(), d = n.getUTCMilliseconds();
  return new ba(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, s, r, e, a, i, u, c, d);
}
function Dd(t) {
  return new Be(t.calendar, t.era, t.year, t.month, t.day);
}
function ga(t, e) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: s } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: s } = e), new ya(t.calendar, t.era, t.year, t.month, t.day, a, n, o, s);
}
function Le(t, e) {
  if (Os(t.calendar, e)) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, qt(n), n;
}
function Ed(t, e, a) {
  if (t instanceof ba)
    return t.timeZone === e ? t : Od(t, e);
  let n = ht(t, e, a);
  return gt(n, e);
}
function Pd(t) {
  let e = ha(t) - t.offset;
  return new Date(e);
}
function Od(t, e) {
  let a = ha(t) - t.offset;
  return Le(gt(a, e), t.calendar);
}
const Na = 36e5;
function ro(t, e) {
  let a = t.copy(), n = "hour" in a ? Id(a, e) : 0;
  Qo(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, Xo(a), Ur(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, Ad(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var s, r;
    let u = (s = (r = a.calendar).isInverseEra) === null || s === void 0 ? void 0 : s.call(r, a);
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
function Ad(t) {
  for (; t.day < 1; )
    t.month--, Xo(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, Xo(t);
}
function Ur(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function qt(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), Ur(t);
}
function Hr(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function jr(t, e) {
  return ro(t, Hr(e));
}
function As(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), qt(a), a;
}
function Ln(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), Td(a), a;
}
function Md(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = gn(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = gn(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = gn(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = gn(t.hour, 24), e;
}
function Td(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function gn(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function Id(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, Md(t);
}
function Ms(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "era": {
      let i = t.calendar.getEras(), u = i.indexOf(t.era);
      if (u < 0) throw new Error("Invalid era: " + t.era);
      u = yt(u, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[u], qt(o);
      break;
    }
    case "year":
      var s, r;
      !((s = (r = o.calendar).isInverseEra) === null || s === void 0) && s.call(r, o) && (a = -a), o.year = yt(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
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
function Gr(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let s = t.hour, r = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let u = s >= 12;
        r = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = yt(s, a, r, i, n == null ? void 0 : n.round);
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
    let s = Math.abs(e);
    e > 0 ? t = Math.ceil(t / s) * s : t = Math.floor(t / s) * s, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function qr(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = ro(ga(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = ht(o, t.timeZone);
  } else
    a = ha(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = gt(a, t.timeZone);
  return Le(n, t.calendar);
}
function Vd(t, e) {
  return qr(t, Hr(e));
}
function Rd(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let h = t.hour >= 12;
        o = h ? 12 : 0, s = h ? 23 : 11;
      }
      let r = ga(t), i = Le(Ln(r, {
        hour: o
      }), new tt()), u = [
        ht(i, t.timeZone, "earlier"),
        ht(i, t.timeZone, "later")
      ].filter((h) => gt(h, t.timeZone).day === i.day)[0], c = Le(Ln(r, {
        hour: s
      }), new tt()), d = [
        ht(c, t.timeZone, "earlier"),
        ht(c, t.timeZone, "later")
      ].filter((h) => gt(h, t.timeZone).day === c.day).pop(), p = ha(t) - t.offset, g = Math.floor(p / Na), m = p % Na;
      return p = yt(g, a, Math.floor(u / Na), Math.floor(d / Na), n == null ? void 0 : n.round) * Na + m, Le(gt(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Gr(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Ms(ga(t), e, a, n), s = ht(o, t.timeZone);
      return Le(gt(s, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function Fd(t, e, a) {
  let n = ga(t), o = Ln(As(n, e), e);
  if (o.compare(n) === 0) return t;
  let s = ht(o, t.timeZone, a);
  return Le(gt(s, t.timeZone), t.calendar);
}
function Ld(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function Yr(t) {
  let e = Le(t, new tt()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function Jr(t) {
  return `${Yr(t)}T${Ld(t)}`;
}
function Nd(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function zd(t) {
  return `${Jr(t)}${Nd(t.offset)}[${t.timeZone}]`;
}
function Wd(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ts(t, e, a) {
  Wd(t, e), e.set(t, a);
}
function Is(t) {
  let e = typeof t[0] == "object" ? t.shift() : new tt(), a;
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
var Kd = /* @__PURE__ */ new WeakMap();
class Be {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Be(this.calendar, this.era, this.year, this.month, this.day) : new Be(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(e) {
    return ro(this, e);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(e) {
    return jr(this, e);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return As(this, e);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Ms(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(e) {
    return Kr(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Yr(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return Nr(this, e);
  }
  constructor(...e) {
    Ts(this, Kd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Is(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, qt(this);
  }
}
var Ud = /* @__PURE__ */ new WeakMap();
class ya {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ya(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new ya(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return ro(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return jr(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return As(Ln(this, e), e);
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
        return Ms(this, e, a, n);
      default:
        return Gr(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return Kr(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Jr(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = Nr(this, e);
    return a === 0 ? Cd(this, ga(e)) : a;
  }
  constructor(...e) {
    Ts(this, Ud, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Is(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, qt(this);
  }
}
var Hd = /* @__PURE__ */ new WeakMap();
class ba {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ba(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new ba(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return qr(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Vd(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return Fd(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Rd(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Pd(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return zd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Ed(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Ts(this, Hd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, r] = Is(e), i = e.shift(), u = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = r, this.timeZone = i, this.offset = u, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, qt(this);
  }
}
const pa = [
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
], jd = [
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
], An = [
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
function Fl(t) {
  const e = pa.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? pa.length - 1 : e === 0 ? 0 : e - 1;
}
function Do(t) {
  let e = An[It.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new Be(t.year + e, t.month, t.day);
}
class Gd extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fl(a);
    return new Be(this, It[n], a.year - An[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Do(e));
  }
  balanceDate(e) {
    let a = Do(e), n = Fl(a);
    It[n] !== e.era && (e.era = It[n], e.year = a.year - An[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = It.indexOf(e.era), n = jd[a];
    if (n != null) {
      let [o, s, r] = n, i = o - An[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(s, e.month), e.month === s && (e.day = Math.min(r, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, s] = pa[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(s, e.day));
    }
  }
  getEras() {
    return It;
  }
  getYearsInEra(e) {
    let a = It.indexOf(e.era), n = pa[a], o = pa[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let s = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && s++, s;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Do(e));
  }
  getMinimumMonthInYear(e) {
    let a = Ll(e);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let a = Ll(e);
    return a && e.month === a[1] ? a[2] : 1;
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese";
  }
}
function Ll(t) {
  if (t.year === 1) {
    let e = It.indexOf(t.era);
    return pa[e];
  }
}
const Qr = -543;
class qd extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = nn(a.era, a.year);
    return new Be(this, n - Qr, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Nl(e));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Nl(e));
  }
  balanceDate() {
  }
  constructor(...e) {
    super(...e), this.identifier = "buddhist";
  }
}
function Nl(t) {
  let [e, a] = lo(t.year + Qr);
  return new Be(e, a, t.month, t.day);
}
const Nn = 1911;
function Xr(t) {
  return t.era === "minguo" ? t.year + Nn : 1 - t.year + Nn;
}
function zl(t) {
  let e = t - Nn;
  return e > 0 ? [
    "minguo",
    e
  ] : [
    "before_minguo",
    1 - e
  ];
}
class Yd extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = nn(a.era, a.year), [o, s] = zl(n);
    return new Be(this, o, s, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Wl(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = zl(Xr(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Wl(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - Nn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function Wl(t) {
  let [e, a] = lo(Xr(t));
  return new Be(e, a, t.month, t.day);
}
const Kl = 1948320, Ul = [
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
class Jd {
  fromJulianDay(e) {
    let a = e - Kl, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), s = a - o, r = s < 216 ? Math.floor(s / 31) : Math.floor((s - 6) / 30), i = s - Ul[r] + 1;
    return new Be(this, n, r + 1, i);
  }
  toJulianDay(e) {
    let a = Kl - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += Ul[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || ca(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Eo = 78, Hl = 80;
class Qd extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Eo, o = e - jt(a.era, a.year, 1, 1), s;
    o < Hl ? (n--, s = Vt(a.year - 1) ? 31 : 30, o += s + 155 + 90 + 10) : (s = Vt(a.year) ? 31 : 30, o -= Hl);
    let r, i;
    if (o < s)
      r = 1, i = o + 1;
    else {
      let u = o - s;
      u < 155 ? (r = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, r = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new Be(this, n, r, i);
  }
  toJulianDay(e) {
    let a = e.year + Eo, [n, o] = lo(a), s, r;
    return Vt(o) ? (s = 31, r = jt(n, o, 3, 21)) : (s = 30, r = jt(n, o, 3, 22)), e.month === 1 ? r + e.day - 1 : (r += s + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (r += (e.month - 7) * 30), r += e.day - 1, r);
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
const zn = 1948440, jl = 1948439, qe = 1300, la = 1600, Xd = 460322;
function Wn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function Zr(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + Wn(e, n, 1, 1))) / 29.5) + 1), s = a - Wn(e, n, o, 1) + 1;
  return new Be(t, n, o, s);
}
function Gl(t) {
  return (14 + 11 * t) % 30 < 11;
}
class Vs {
  fromJulianDay(e) {
    return Zr(this, zn, e);
  }
  toJulianDay(e) {
    return Wn(zn, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = 29 + e.month % 2;
    return e.month === 12 && Gl(e.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return Gl(e.year) ? 355 : 354;
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
class Zd extends Vs {
  fromJulianDay(e) {
    return Zr(this, jl, e);
  }
  toJulianDay(e) {
    return Wn(jl, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const ec = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Zo, fa;
function Mn(t) {
  return Xd + fa[t - qe];
}
function Ka(t, e) {
  let a = t - qe, n = 1 << 11 - (e - 1);
  return Zo[a] & n ? 30 : 29;
}
function ql(t, e) {
  let a = Mn(t);
  for (let n = 1; n < e; n++) a += Ka(t, n);
  return a;
}
function Yl(t) {
  return fa[t + 1 - qe] - fa[t - qe];
}
class tc extends Vs {
  fromJulianDay(e) {
    let a = e - zn, n = Mn(qe), o = Mn(la);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let s = qe - 1, r = 1, i = 1;
      for (; i > 0; ) {
        s++, i = a - Mn(s) + 1;
        let u = Yl(s);
        if (i === u) {
          r = 12;
          break;
        } else if (i < u) {
          let c = Ka(s, r);
          for (r = 1; i > c; )
            i -= c, r++, c = Ka(s, r);
          break;
        }
      }
      return new Be(this, s, r, a - ql(s, r) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < qe || e.year > la ? super.toJulianDay(e) : zn + ql(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < qe || e.year > la ? super.getDaysInMonth(e) : Ka(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < qe || e.year > la ? super.getDaysInYear(e) : Yl(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Zo || (Zo = new Uint16Array(Uint8Array.from(atob(ec), (e) => e.charCodeAt(0)).buffer)), !fa) {
      fa = new Uint32Array(la - qe + 1);
      let e = 0;
      for (let a = qe; a <= la; a++) {
        fa[a - qe] = e;
        for (let n = 1; n <= 12; n++) e += Ka(a, n);
      }
    }
  }
}
const Jl = 347997, ei = 1080, ti = 24 * ei, ac = 29, nc = 12 * ei + 793, oc = ac * ti + nc;
function Ht(t) {
  return ca(t * 7 + 1, 19) < 7;
}
function Tn(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return ca(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function sc(t) {
  let e = Tn(t - 1), a = Tn(t);
  return Tn(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function Ha(t) {
  return Tn(t) + sc(t);
}
function ai(t) {
  return Ha(t + 1) - Ha(t);
}
function lc(t) {
  let e = ai(t);
  switch (e > 380 && (e -= 30), e) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function yn(t, e) {
  if (e >= 6 && !Ht(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = lc(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? Ht(t) ? 30 : 0 : 30;
}
class rc {
  fromJulianDay(e) {
    let a = e - Jl, n = a * ti / oc, o = Math.floor((19 * n + 234) / 235) + 1, s = Ha(o), r = Math.floor(a - s);
    for (; r < 1; )
      o--, s = Ha(o), r = Math.floor(a - s);
    let i = 1, u = 0;
    for (; u < r; )
      u += yn(o, i), i++;
    i--, u -= yn(o, i);
    let c = r - u;
    return new Be(this, o, i, c);
  }
  toJulianDay(e) {
    let a = Ha(e.year);
    for (let n = 1; n < e.month; n++) a += yn(e.year, n);
    return a + e.day + Jl;
  }
  getDaysInMonth(e) {
    return yn(e.year, e.month);
  }
  getMonthsInYear(e) {
    return Ht(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return ai(e.year);
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
const es = 1723856, Ql = 1824665, ts = 5500;
function Kn(t, e, a, n) {
  return t + 365 * e + Math.floor(e / 4) + 30 * (a - 1) + n - 1;
}
function Rs(t, e) {
  let a = Math.floor(4 * (e - t) / 1461), n = 1 + Math.floor((e - Kn(t, a, 1, 1)) / 30), o = e + 1 - Kn(t, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function ni(t) {
  return Math.floor(t % 4 / 3);
}
function oi(t, e) {
  return e % 13 !== 0 ? 30 : ni(t) + 5;
}
class Fs {
  fromJulianDay(e) {
    let [a, n, o] = Rs(es, e), s = "AM";
    return a <= 0 && (s = "AA", a += ts), new Be(this, s, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "AA" && (a -= ts), Kn(es, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    return oi(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + ni(e.year);
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
class ic extends Fs {
  fromJulianDay(e) {
    let [a, n, o] = Rs(es, e);
    return a += ts, new Be(this, "AA", a, n, o);
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
class uc extends Fs {
  fromJulianDay(e) {
    let [a, n, o] = Rs(Ql, e), s = "CE";
    return a <= 0 && (s = "BCE", a = 1 - a), new Be(this, s, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), Kn(Ql, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), oi(a, e.month);
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
function dc(t) {
  switch (t) {
    case "buddhist":
      return new qd();
    case "ethiopic":
      return new Fs();
    case "ethioaa":
      return new ic();
    case "coptic":
      return new uc();
    case "hebrew":
      return new rc();
    case "indian":
      return new Qd();
    case "islamic-civil":
      return new Vs();
    case "islamic-tbla":
      return new Zd();
    case "islamic-umalqura":
      return new tc();
    case "japanese":
      return new Gd();
    case "persian":
      return new Jd();
    case "roc":
      return new Yd();
    case "gregory":
    default:
      return new tt();
  }
}
let Po = /* @__PURE__ */ new Map();
class st {
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
    return fc() && (this.resolvedHourCycle || (this.resolvedHourCycle = vc(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
  }
  constructor(e, a = {}) {
    this.formatter = si(e, a), this.options = a;
  }
}
const cc = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function si(t, e = {}) {
  if (typeof e.hour12 == "boolean" && pc()) {
    e = {
      ...e
    };
    let o = cc[String(e.hour12)][t.split("-")[0]], s = e.hour12 ? "h12" : "h23";
    e.hourCycle = o ?? s, delete e.hour12;
  }
  let a = t + (e ? Object.entries(e).sort((o, s) => o[0] < s[0] ? -1 : 1).join() : "");
  if (Po.has(a)) return Po.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return Po.set(a, n), n;
}
let Oo = null;
function pc() {
  return Oo == null && (Oo = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Oo;
}
let Ao = null;
function fc() {
  return Ao == null && (Ao = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Ao;
}
function vc(t, e) {
  if (!e.timeStyle && !e.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = si(t, {
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
function mc(t, e) {
  const a = [];
  for (let n = 0; n < t.length; n += e)
    a.push(t.slice(n, n + e));
  return a;
}
function Ye(t, e = Ct()) {
  return Ls(t) ? t.toDate() : t.toDate(e);
}
function hc(t) {
  return t instanceof ya;
}
function Ls(t) {
  return t instanceof ba;
}
function gc(t) {
  return hc(t) || Ls(t);
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
function yc(t, e) {
  return t.compare(e) <= 0;
}
function bc(t, e) {
  return t.compare(e) >= 0;
}
function _c(t, e, a) {
  return bc(t, e) && yc(t, a);
}
function wc(t, e, a) {
  return Ua(t, e) && Rt(t, a);
}
function xc(t, e, a) {
  const n = Lr(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function Cc(t, e, a) {
  const n = Lr(t, a), o = e === 0 ? 6 : e - 1;
  return n === o ? t : n > o ? t.add({ days: 7 - n + o }) : t.add({ days: o - n });
}
function $c(t, e, a, n) {
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
function Xl(t, e) {
  const a = [];
  let n = t.add({ days: 1 });
  const o = e;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function Mo(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, s = $t(e), r = Array.from({ length: s }, (x, $) => e.set({ day: $ + 1 })), i = qa(e), u = Tl(e), c = xc(i, a, o), d = Cc(u, a, o), p = Xl(c.subtract({ days: 1 }), i), g = Xl(u, d.add({ days: 1 })), m = p.length + r.length + g.length;
  if (n && m < 42) {
    const x = 42 - m;
    let $ = g[g.length - 1];
    $ || ($ = Tl(e));
    const k = Array.from({ length: x }, (B, E) => {
      const S = E + 1;
      return $.add({ days: S });
    });
    g.push(...k);
  }
  const h = p.concat(r, g), y = mc(h, 7);
  return {
    value: e,
    cells: h,
    rows: y
  };
}
function Bc(t) {
  const { dateObj: e, startIndex: a, endIndex: n } = t, o = Array.from({ length: Math.abs(a ?? 0) + n }, (s, r) => r <= Math.abs(a ?? 0) ? e.subtract({ years: r }).set({ day: 1, month: 1 }) : e.add({ years: r - n }).set({ day: 1, month: 1 }));
  return o.sort((s, r) => s.year - r.year), o;
}
function kc(t) {
  const { dateObj: e, numberOfMonths: a = 1, pagedNavigation: n = !1 } = t;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, s) => qa(e.set({ month: s * a + 1 }))) : Array.from({ length: 12 }, (o, s) => qa(e.set({ month: s + 1 })));
}
function Ut(t) {
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
  for (let s = 1; s < e; s++) {
    const r = a.add({ months: s });
    o.push(
      Mo({
        ...n,
        dateObj: r
      })
    );
  }
  return o;
}
const Sc = ["top", "right", "bottom", "left"], Ft = Math.min, We = Math.max, Un = Math.round, bn = Math.floor, rt = (t) => ({
  x: t,
  y: t
}), Dc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ec = {
  start: "end",
  end: "start"
};
function as(t, e, a) {
  return We(t, Ft(e, a));
}
function Bt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function kt(t) {
  return t.split("-")[0];
}
function Ba(t) {
  return t.split("-")[1];
}
function Ns(t) {
  return t === "x" ? "y" : "x";
}
function zs(t) {
  return t === "y" ? "height" : "width";
}
function wt(t) {
  return ["top", "bottom"].includes(kt(t)) ? "y" : "x";
}
function Ws(t) {
  return Ns(wt(t));
}
function Pc(t, e, a) {
  a === void 0 && (a = !1);
  const n = Ba(t), o = Ws(t), s = zs(o);
  let r = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = Hn(r)), [r, Hn(r)];
}
function Oc(t) {
  const e = Hn(t);
  return [ns(t), e, ns(e)];
}
function ns(t) {
  return t.replace(/start|end/g, (e) => Ec[e]);
}
function Ac(t, e, a) {
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
function Mc(t, e, a, n) {
  const o = Ba(t);
  let s = Ac(kt(t), a === "start", n);
  return o && (s = s.map((r) => r + "-" + o), e && (s = s.concat(s.map(ns)))), s;
}
function Hn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Dc[e]);
}
function Tc(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function li(t) {
  return typeof t != "number" ? Tc(t) : {
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
function Zl(t, e, a) {
  let {
    reference: n,
    floating: o
  } = t;
  const s = wt(e), r = Ws(e), i = zs(r), u = kt(e), c = s === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[i] / 2 - o[i] / 2;
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
  switch (Ba(e)) {
    case "start":
      m[r] -= g * (a && c ? -1 : 1);
      break;
    case "end":
      m[r] += g * (a && c ? -1 : 1);
      break;
  }
  return m;
}
const Ic = async (t, e, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: r
  } = a, i = s.filter(Boolean), u = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: p
  } = Zl(c, n, u), g = n, m = {}, h = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: x,
      fn: $
    } = i[y], {
      x: k,
      y: B,
      data: E,
      reset: S
    } = await $({
      x: d,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: r,
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
    }, S && h <= 50 && (h++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (c = S.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : S.rects), {
      x: d,
      y: p
    } = Zl(c, g, u)), y = -1);
  }
  return {
    x: d,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function Ya(t, e) {
  var a;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: r,
    elements: i,
    strategy: u
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = Bt(e, t), h = li(m), x = i[g ? p === "floating" ? "reference" : "floating" : p], $ = jn(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(x))) == null || a ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: u
  })), k = p === "floating" ? {
    x: n,
    y: o,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, B = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), E = await (s.isElement == null ? void 0 : s.isElement(B)) ? await (s.getScale == null ? void 0 : s.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = jn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: B,
    strategy: u
  }) : k);
  return {
    top: ($.top - S.top + h.top) / E.y,
    bottom: (S.bottom - $.bottom + h.bottom) / E.y,
    left: ($.left - S.left + h.left) / E.x,
    right: (S.right - $.right + h.right) / E.x
  };
}
const Vc = (t) => ({
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
      middlewareData: u
    } = e, {
      element: c,
      padding: d = 0
    } = Bt(t, e) || {};
    if (c == null)
      return {};
    const p = li(d), g = {
      x: a,
      y: n
    }, m = Ws(o), h = zs(m), y = await r.getDimensions(c), x = m === "y", $ = x ? "top" : "left", k = x ? "bottom" : "right", B = x ? "clientHeight" : "clientWidth", E = s.reference[h] + s.reference[m] - g[m] - s.floating[h], S = g[m] - s.reference[m], I = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let M = I ? I[B] : 0;
    (!M || !await (r.isElement == null ? void 0 : r.isElement(I))) && (M = i.floating[B] || s.floating[h]);
    const U = E / 2 - S / 2, R = M / 2 - y[h] / 2 - 1, A = Ft(p[$], R), T = Ft(p[k], R), F = A, j = M - y[h] - T, W = M / 2 - y[h] / 2 + U, z = as(F, W, j), Q = !u.arrow && Ba(o) != null && W !== z && s.reference[h] / 2 - (W < F ? A : T) - y[h] / 2 < 0, ie = Q ? W < F ? W - F : W - j : 0;
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
}), Rc = function(t) {
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
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const $ = kt(o), k = wt(i), B = kt(i) === i, E = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), S = g || (B || !y ? [Hn(i)] : Oc(i)), I = h !== "none";
      !g && I && S.push(...Mc(i, y, h, E));
      const M = [i, ...S], U = await Ya(e, x), R = [];
      let A = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && R.push(U[$]), p) {
        const z = Pc(o, r, E);
        R.push(U[z[0]], U[z[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: R
      }], !R.every((z) => z <= 0)) {
        var T, F;
        const z = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1, Q = M[z];
        if (Q) {
          var j;
          const ye = p === "alignment" ? k !== wt(Q) : !1, Y = ((j = A[0]) == null ? void 0 : j.overflows[0]) > 0;
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
                  const oe = wt(Y.placement);
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
function er(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function tr(t) {
  return Sc.some((e) => t[e] >= 0);
}
const Fc = function(t) {
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
          const s = await Ya(e, {
            ...o,
            elementContext: "reference"
          }), r = er(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: tr(r)
            }
          };
        }
        case "escaped": {
          const s = await Ya(e, {
            ...o,
            altBoundary: !0
          }), r = er(s, a.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: tr(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Lc(t, e) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = t, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), r = kt(a), i = Ba(a), u = wt(a) === "y", c = ["left", "top"].includes(r) ? -1 : 1, d = s && u ? -1 : 1, p = Bt(e, t);
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
const Nc = function(t) {
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
      } = e, u = await Lc(e, t);
      return r === ((a = i.offset) == null ? void 0 : a.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: r
        }
      };
    }
  };
}, zc = function(t) {
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
      }, d = await Ya(e, u), p = wt(kt(o)), g = Ns(p);
      let m = c[g], h = c[p];
      if (s) {
        const x = g === "y" ? "top" : "left", $ = g === "y" ? "bottom" : "right", k = m + d[x], B = m - d[$];
        m = as(k, m, B);
      }
      if (r) {
        const x = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", k = h + d[x], B = h - d[$];
        h = as(k, h, B);
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
            [g]: s,
            [p]: r
          }
        }
      };
    }
  };
}, Wc = function(t) {
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
        mainAxis: u = !0,
        crossAxis: c = !0
      } = Bt(t, e), d = {
        x: a,
        y: n
      }, p = wt(o), g = Ns(p);
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
        const B = g === "y" ? "height" : "width", E = s.reference[g] - s.floating[B] + x.mainAxis, S = s.reference[g] + s.reference[B] - x.mainAxis;
        m < E ? m = E : m > S && (m = S);
      }
      if (c) {
        var $, k;
        const B = g === "y" ? "width" : "height", E = ["top", "left"].includes(kt(o)), S = s.reference[p] - s.floating[B] + (E && (($ = r.offset) == null ? void 0 : $[p]) || 0) + (E ? 0 : x.crossAxis), I = s.reference[p] + s.reference[B] + (E ? 0 : ((k = r.offset) == null ? void 0 : k[p]) || 0) - (E ? x.crossAxis : 0);
        h < S ? h = S : h > I && (h = I);
      }
      return {
        [g]: m,
        [p]: h
      };
    }
  };
}, Kc = function(t) {
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
        apply: u = () => {
        },
        ...c
      } = Bt(t, e), d = await Ya(e, c), p = kt(o), g = Ba(o), m = wt(o) === "y", {
        width: h,
        height: y
      } = s.floating;
      let x, $;
      p === "top" || p === "bottom" ? (x = p, $ = g === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = p, x = g === "end" ? "top" : "bottom");
      const k = y - d.top - d.bottom, B = h - d.left - d.right, E = Ft(y - d[x], k), S = Ft(h - d[$], B), I = !e.middlewareData.shift;
      let M = E, U = S;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (U = B), (n = e.middlewareData.shift) != null && n.enabled.y && (M = k), I && !g) {
        const A = We(d.left, 0), T = We(d.right, 0), F = We(d.top, 0), j = We(d.bottom, 0);
        m ? U = h - 2 * (A !== 0 || T !== 0 ? A + T : We(d.left, d.right)) : M = y - 2 * (F !== 0 || j !== 0 ? F + j : We(d.top, d.bottom));
      }
      await u({
        ...e,
        availableWidth: U,
        availableHeight: M
      });
      const R = await r.getDimensions(i.floating);
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
  return Ks(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ke(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function dt(t) {
  var e;
  return (e = (Ks(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ks(t) {
  return io() ? t instanceof Node || t instanceof Ke(t).Node : !1;
}
function at(t) {
  return io() ? t instanceof Element || t instanceof Ke(t).Element : !1;
}
function it(t) {
  return io() ? t instanceof HTMLElement || t instanceof Ke(t).HTMLElement : !1;
}
function ar(t) {
  return !io() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ke(t).ShadowRoot;
}
function on(t) {
  const {
    overflow: e,
    overflowX: a,
    overflowY: n,
    display: o
  } = nt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + a) && !["inline", "contents"].includes(o);
}
function Uc(t) {
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
function Us(t) {
  const e = Hs(), a = at(t) ? nt(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Hc(t) {
  let e = Lt(t);
  for (; it(e) && !_a(e); ) {
    if (Us(e))
      return e;
    if (uo(e))
      return null;
    e = Lt(e);
  }
  return null;
}
function Hs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function _a(t) {
  return ["html", "body", "#document"].includes(Jt(t));
}
function nt(t) {
  return Ke(t).getComputedStyle(t);
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
    ar(t) && t.host || // Fallback.
    dt(t)
  );
  return ar(e) ? e.host : e;
}
function ri(t) {
  const e = Lt(t);
  return _a(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : it(e) && on(e) ? e : ri(e);
}
function Ja(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = ri(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = Ke(o);
  if (s) {
    const i = os(r);
    return e.concat(r, r.visualViewport || [], on(o) ? o : [], i && a ? Ja(i) : []);
  }
  return e.concat(o, Ja(o, [], a));
}
function os(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ii(t) {
  const e = nt(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = it(t), s = o ? t.offsetWidth : a, r = o ? t.offsetHeight : n, i = Un(a) !== s || Un(n) !== r;
  return i && (a = s, n = r), {
    width: a,
    height: n,
    $: i
  };
}
function js(t) {
  return at(t) ? t : t.contextElement;
}
function va(t) {
  const e = js(t);
  if (!it(e))
    return rt(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = ii(e);
  let r = (s ? Un(a.width) : a.width) / n, i = (s ? Un(a.height) : a.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: r,
    y: i
  };
}
const jc = /* @__PURE__ */ rt(0);
function ui(t) {
  const e = Ke(t);
  return !Hs() || !e.visualViewport ? jc : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Gc(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== Ke(t) ? !1 : e;
}
function Yt(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), s = js(t);
  let r = rt(1);
  e && (n ? at(n) && (r = va(n)) : r = va(t));
  const i = Gc(s, a, n) ? ui(s) : rt(0);
  let u = (o.left + i.x) / r.x, c = (o.top + i.y) / r.y, d = o.width / r.x, p = o.height / r.y;
  if (s) {
    const g = Ke(s), m = n && at(n) ? Ke(n) : n;
    let h = g, y = os(h);
    for (; y && n && m !== h; ) {
      const x = va(y), $ = y.getBoundingClientRect(), k = nt(y), B = $.left + (y.clientLeft + parseFloat(k.paddingLeft)) * x.x, E = $.top + (y.clientTop + parseFloat(k.paddingTop)) * x.y;
      u *= x.x, c *= x.y, d *= x.x, p *= x.y, u += B, c += E, h = Ke(y), y = os(h);
    }
  }
  return jn({
    width: d,
    height: p,
    x: u,
    y: c
  });
}
function Gs(t, e) {
  const a = co(t).scrollLeft;
  return e ? e.left + a : Yt(dt(t)).left + a;
}
function di(t, e, a) {
  a === void 0 && (a = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    Gs(t, n)
  )), s = n.top + e.scrollTop;
  return {
    x: o,
    y: s
  };
}
function qc(t) {
  let {
    elements: e,
    rect: a,
    offsetParent: n,
    strategy: o
  } = t;
  const s = o === "fixed", r = dt(n), i = e ? uo(e.floating) : !1;
  if (n === r || i && s)
    return a;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = rt(1);
  const d = rt(0), p = it(n);
  if ((p || !p && !s) && ((Jt(n) !== "body" || on(r)) && (u = co(n)), it(n))) {
    const m = Yt(n);
    c = va(n), d.x = m.x + n.clientLeft, d.y = m.y + n.clientTop;
  }
  const g = r && !p && !s ? di(r, u, !0) : rt(0);
  return {
    width: a.width * c.x,
    height: a.height * c.y,
    x: a.x * c.x - u.scrollLeft * c.x + d.x + g.x,
    y: a.y * c.y - u.scrollTop * c.y + d.y + g.y
  };
}
function Yc(t) {
  return Array.from(t.getClientRects());
}
function Jc(t) {
  const e = dt(t), a = co(t), n = t.ownerDocument.body, o = We(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), s = We(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -a.scrollLeft + Gs(t);
  const i = -a.scrollTop;
  return nt(n).direction === "rtl" && (r += We(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: i
  };
}
function Qc(t, e) {
  const a = Ke(t), n = dt(t), o = a.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, i = 0, u = 0;
  if (o) {
    s = o.width, r = o.height;
    const c = Hs();
    (!c || c && e === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i,
    y: u
  };
}
function Xc(t, e) {
  const a = Yt(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, s = it(t) ? va(t) : rt(1), r = t.clientWidth * s.x, i = t.clientHeight * s.y, u = o * s.x, c = n * s.y;
  return {
    width: r,
    height: i,
    x: u,
    y: c
  };
}
function nr(t, e, a) {
  let n;
  if (e === "viewport")
    n = Qc(t, a);
  else if (e === "document")
    n = Jc(dt(t));
  else if (at(e))
    n = Xc(e, a);
  else {
    const o = ui(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return jn(n);
}
function ci(t, e) {
  const a = Lt(t);
  return a === e || !at(a) || _a(a) ? !1 : nt(a).position === "fixed" || ci(a, e);
}
function Zc(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = Ja(t, [], !1).filter((i) => at(i) && Jt(i) !== "body"), o = null;
  const s = nt(t).position === "fixed";
  let r = s ? Lt(t) : t;
  for (; at(r) && !_a(r); ) {
    const i = nt(r), u = Us(r);
    !u && i.position === "fixed" && (o = null), (s ? !u && !o : !u && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || on(r) && !u && ci(t, r)) ? n = n.filter((d) => d !== r) : o = i, r = Lt(r);
  }
  return e.set(t, n), n;
}
function ep(t) {
  let {
    element: e,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = t;
  const r = [...a === "clippingAncestors" ? uo(e) ? [] : Zc(e, this._c) : [].concat(a), n], i = r[0], u = r.reduce((c, d) => {
    const p = nr(e, d, o);
    return c.top = We(p.top, c.top), c.right = Ft(p.right, c.right), c.bottom = Ft(p.bottom, c.bottom), c.left = We(p.left, c.left), c;
  }, nr(e, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function tp(t) {
  const {
    width: e,
    height: a
  } = ii(t);
  return {
    width: e,
    height: a
  };
}
function ap(t, e, a) {
  const n = it(e), o = dt(e), s = a === "fixed", r = Yt(t, !0, s, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = rt(0);
  function c() {
    u.x = Gs(o);
  }
  if (n || !n && !s)
    if ((Jt(e) !== "body" || on(o)) && (i = co(e)), n) {
      const m = Yt(e, !0, s, e);
      u.x = m.x + e.clientLeft, u.y = m.y + e.clientTop;
    } else o && c();
  s && !n && o && c();
  const d = o && !n && !s ? di(o, i) : rt(0), p = r.left + i.scrollLeft - u.x - d.x, g = r.top + i.scrollTop - u.y - d.y;
  return {
    x: p,
    y: g,
    width: r.width,
    height: r.height
  };
}
function To(t) {
  return nt(t).position === "static";
}
function or(t, e) {
  if (!it(t) || nt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return dt(t) === a && (a = a.ownerDocument.body), a;
}
function pi(t, e) {
  const a = Ke(t);
  if (uo(t))
    return a;
  if (!it(t)) {
    let o = Lt(t);
    for (; o && !_a(o); ) {
      if (at(o) && !To(o))
        return o;
      o = Lt(o);
    }
    return a;
  }
  let n = or(t, e);
  for (; n && Uc(n) && To(n); )
    n = or(n, e);
  return n && _a(n) && To(n) && !Us(n) ? a : n || Hc(t) || a;
}
const np = async function(t) {
  const e = this.getOffsetParent || pi, a = this.getDimensions, n = await a(t.floating);
  return {
    reference: ap(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function op(t) {
  return nt(t).direction === "rtl";
}
const sp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qc,
  getDocumentElement: dt,
  getClippingRect: ep,
  getOffsetParent: pi,
  getElementRects: np,
  getClientRects: Yc,
  getDimensions: tp,
  getScale: va,
  isElement: at,
  isRTL: op
};
function fi(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function lp(t, e) {
  let a = null, n;
  const o = dt(t);
  function s() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function r(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), s();
    const c = t.getBoundingClientRect(), {
      left: d,
      top: p,
      width: g,
      height: m
    } = c;
    if (i || e(), !g || !m)
      return;
    const h = bn(p), y = bn(o.clientWidth - (d + g)), x = bn(o.clientHeight - (p + m)), $ = bn(d), B = {
      rootMargin: -h + "px " + -y + "px " + -x + "px " + -$ + "px",
      threshold: We(0, Ft(1, u)) || 1
    };
    let E = !0;
    function S(I) {
      const M = I[0].intersectionRatio;
      if (M !== u) {
        if (!E)
          return r();
        M ? r(!1, M) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !fi(c, t.getBoundingClientRect()) && r(), E = !1;
    }
    try {
      a = new IntersectionObserver(S, {
        ...B,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(S, B);
    }
    a.observe(t);
  }
  return r(!0), s;
}
function vi(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = js(t), d = o || s ? [...c ? Ja(c) : [], ...Ja(e)] : [];
  d.forEach(($) => {
    o && $.addEventListener("scroll", a, {
      passive: !0
    }), s && $.addEventListener("resize", a);
  });
  const p = c && i ? lp(c, a) : null;
  let g = -1, m = null;
  r && (m = new ResizeObserver(($) => {
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
    y && !fi(y, $) && a(), y = $, h = requestAnimationFrame(x);
  }
  return a(), () => {
    var $;
    d.forEach((k) => {
      o && k.removeEventListener("scroll", a), s && k.removeEventListener("resize", a);
    }), p == null || p(), ($ = m) == null || $.disconnect(), m = null, u && cancelAnimationFrame(h);
  };
}
const mi = Nc, hi = zc, Gn = Rc, gi = Kc, yi = Fc, rp = Vc, bi = Wc, ip = (t, e, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: sp,
    ...a
  }, s = {
    ...o.platform,
    _c: n
  };
  return Ic(t, e, {
    ...o,
    platform: s
  });
};
function up(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function ss(t) {
  if (up(t)) {
    const e = t.$el;
    return Ks(e) && Jt(e) === "#comment" ? null : e;
  }
  return t;
}
function ua(t) {
  return typeof t == "function" ? t() : l(t);
}
function _i(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = ss(ua(t.element));
      return a == null ? {} : rp({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function wi(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sr(t, e) {
  const a = wi(t);
  return Math.round(e * a) / a;
}
function xi(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = C(() => {
    var M;
    return (M = ua(a.open)) != null ? M : !0;
  }), s = C(() => ua(a.middleware)), r = C(() => {
    var M;
    return (M = ua(a.placement)) != null ? M : "bottom";
  }), i = C(() => {
    var M;
    return (M = ua(a.strategy)) != null ? M : "absolute";
  }), u = C(() => {
    var M;
    return (M = ua(a.transform)) != null ? M : !0;
  }), c = C(() => ss(t.value)), d = C(() => ss(e.value)), p = O(0), g = O(0), m = O(i.value), h = O(r.value), y = _t({}), x = O(!1), $ = C(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return M;
    const U = sr(d.value, p.value), R = sr(d.value, g.value);
    return u.value ? {
      ...M,
      transform: "translate(" + U + "px, " + R + "px)",
      ...wi(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: U + "px",
      top: R + "px"
    };
  });
  let k;
  function B() {
    if (c.value == null || d.value == null)
      return;
    const M = o.value;
    ip(c.value, d.value, {
      middleware: s.value,
      placement: r.value,
      strategy: i.value
    }).then((U) => {
      p.value = U.x, g.value = U.y, m.value = U.strategy, h.value = U.placement, y.value = U.middlewareData, x.value = M !== !1;
    });
  }
  function E() {
    typeof k == "function" && (k(), k = void 0);
  }
  function S() {
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
  return X([s, r, i, o], B, {
    flush: "sync"
  }), X([c, d], S, {
    flush: "sync"
  }), X(o, I, {
    flush: "sync"
  }), eo() && to(E), {
    x: sa(p),
    y: sa(g),
    strategy: sa(m),
    placement: sa(h),
    middlewareData: sa(y),
    isPositioned: sa(x),
    floatingStyles: $,
    update: B
  };
}
function pe(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(o) => {
    const s = an(n, o);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (o) => (oo(n, o), o)];
}
function qs(t, e, a) {
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
function dp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var cp = function t(e, a) {
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
const Gt = /* @__PURE__ */ dp(cp);
function In(t) {
  return t == null;
}
function Ci(t) {
  const { defaultValue: e, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = t;
  if (Array.isArray(e) && e.length)
    return e.at(-1).copy();
  if (e && !Array.isArray(e))
    return e.copy();
  if (a)
    return a.copy();
  const s = /* @__PURE__ */ new Date(), r = s.getFullYear(), i = s.getMonth() + 1, u = s.getDate(), c = ["hour", "minute", "second"], d = new st(o), p = dc(d.resolvedOptions().calendar);
  return c.includes(n ?? "day") ? Le(new ya(r, i, u, 0, 0, 0), p) : Le(new Be(r, i, u), p);
}
function $i(t) {
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
function pp(t, e) {
  var a;
  const n = _t();
  return we(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), $a(n);
}
function Qt(t) {
  return eo() ? (to(t), !0) : !1;
}
function fp() {
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
function vp(t) {
  let e = !1, a;
  const n = Es(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function Bi(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (e += 1, a || (n = Es(!0), a = n.run(() => t(...s))), Qt(o), a);
}
function xt(t) {
  return typeof t == "function" ? t() : l(t);
}
const ct = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const mp = (t) => typeof t < "u", hp = (t) => t != null, gp = Object.prototype.toString, yp = (t) => gp.call(t) === "[object Object]", ki = () => {
}, lr = /* @__PURE__ */ bp();
function bp() {
  var t, e;
  return ct && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function _p(t) {
  return Pe();
}
function Si(t, e = 1e4) {
  return ks((a, n) => {
    let o = xt(t), s;
    const r = () => setTimeout(() => {
      o = xt(t), n();
    }, xt(e));
    return Qt(() => {
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
function wp(t, e) {
  _p() && no(t, e);
}
function Ys(t, e, a = {}) {
  const {
    immediate: n = !0
  } = a, o = O(!1);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    o.value = !1, r();
  }
  function u(...c) {
    r(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, t(...c);
    }, xt(e));
  }
  return n && (o.value = !0, ct && u()), Qt(i), {
    isPending: $a(o),
    start: u,
    stop: i
  };
}
function xp(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = Ys(
    n ?? ki,
    t,
    e
  ), s = C(() => !o.isPending.value);
  return a ? {
    ready: s,
    ...o
  } : s;
}
function Je(t) {
  var e;
  const a = xt(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const sn = ct ? window : void 0;
function wa(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = sn) : [e, a, n, o] = t, !e)
    return ki;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, p, g, m) => (d.addEventListener(p, g, m), () => d.removeEventListener(p, g, m)), u = X(
    () => [Je(e), xt(o)],
    ([d, p]) => {
      if (r(), !d)
        return;
      const g = yp(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((h) => i(d, m, h, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), r();
  };
  return Qt(c), c;
}
function Cp(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Js(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = sn,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, u = Cp(e);
  return wa(o, s, (c) => {
    c.repeat && xt(i) || u(c) && a(c);
  }, r);
}
function Qs() {
  const t = O(!1), e = Pe();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function $p(t) {
  const e = Qs();
  return C(() => (e.value, !!t()));
}
function Bp(t, e, a = {}) {
  const { window: n = sn, ...o } = a;
  let s;
  const r = $p(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = C(() => {
    const g = xt(t), m = (Array.isArray(g) ? g : [g]).map(Je).filter(hp);
    return new Set(m);
  }), c = X(
    () => u.value,
    (g) => {
      i(), r.value && g.size && (s = new MutationObserver(e), g.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), c();
  };
  return Qt(p), {
    isSupported: r,
    stop: p,
    takeRecords: d
  };
}
function Di(t, e = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = sn
  } = e, s = O(!1), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function c(g) {
    if (!s.value || !o)
      return;
    i || (i = g);
    const m = g - i;
    if (r && m < r) {
      u = o.requestAnimationFrame(c);
      return;
    }
    i = g, t({ delta: m, timestamp: g }), u = o.requestAnimationFrame(c);
  }
  function d() {
    !s.value && o && (s.value = !0, i = 0, u = o.requestAnimationFrame(c));
  }
  function p() {
    s.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return a && d(), Qt(p), {
    isActive: $a(s),
    pause: p,
    resume: d
  };
}
function kp(t) {
  return JSON.parse(JSON.stringify(t));
}
function _e(t, e, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Pe(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : kp(B) : B, $ = () => mp(t[e]) ? x(t[e]) : p, k = (B) => {
    g ? g(B) && h(y, B) : h(y, B);
  };
  if (u) {
    const B = $(), E = O(B);
    let S = !1;
    return X(
      () => t[e],
      (I) => {
        S || (S = !0, E.value = x(I), ae(() => S = !1));
      }
    ), X(
      E,
      (I) => {
        !S && (I !== t[e] || d) && k(I);
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
const Sp = ["INPUT", "TEXTAREA"];
function Ei(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && Sp.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
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
  const B = a ? Array.from(a.querySelectorAll(s)) : r;
  if (!B.length)
    return null;
  c && t.preventDefault();
  let E = null;
  return k || $ ? E = Pi(B, e, {
    goForward: $ ? h : u === "ltr" ? p : g,
    loop: i
  }) : y ? E = B.at(0) || null : x && (E = B.at(-1) || null), d && (E == null || E.focus()), E;
}
function Pi(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= t.length))
    return null;
  const r = (s + t.length) % t.length, i = t[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Pi(
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
function ls(t, e, a = ".", n) {
  if (!Io(e))
    return ls(t, {}, a);
  const o = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = t[s];
    r != null && (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : Io(r) && Io(o[s]) ? o[s] = ls(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = r);
  }
  return o;
}
function Dp(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => ls(a, n, ""), {})
  );
}
const Ep = Dp(), [fo, Nw] = pe("ConfigProvider");
let Pp = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Op = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += Pp[Math.random() * 64 | 0];
  return e;
};
const Ap = Bi(() => {
  const t = O(/* @__PURE__ */ new Map()), e = O(), a = C(() => {
    for (const r of t.value.values())
      if (r)
        return !0;
    return !1;
  }), n = fo({
    scrollBody: O(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", lr && (o == null || o()), e.value = void 0;
  };
  return X(a, (r, i) => {
    var u;
    if (!ct)
      return;
    if (!r) {
      i && s();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, d = { padding: c, margin: 0 }, p = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? Ep({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), lr && (o = wa(
      document,
      "touchmove",
      (g) => Mp(g),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function ln(t) {
  const e = Op(6), a = Ap();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return wp(() => {
    a.value.delete(e);
  }), n;
}
function Oi(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Oi(a);
  }
}
function Mp(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Oi(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const Tp = "data-radix-vue-collection-item";
function ka(t, e = Tp) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = O([]);
    function s() {
      const r = Je(n);
      return r ? o.value = Array.from(
        r.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return fd(() => {
      o.value = [];
    }), ce(s), vd(s), X(() => n == null ? void 0 : n.value, s, { immediate: !0 }), oo(a, o), o;
  }, injectCollection: () => an(a, O([])) };
}
function Ai(t) {
  const e = O(t);
  function a() {
    return e.value;
  }
  function n(y) {
    e.value = y;
  }
  function o(y, x) {
    return new st(e.value, x).format(y);
  }
  function s(y, x = !0) {
    return gc(y) && x ? o(Ye(y), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ye(y), {
      dateStyle: "long"
    });
  }
  function r(y, x = {}) {
    return new st(e.value, { month: "long", year: "numeric", ...x }).format(y);
  }
  function i(y, x = {}) {
    return new st(e.value, { month: "long", ...x }).format(y);
  }
  function u() {
    const y = Fn(Ct());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Ye(y.set({ month: x }))), value: x }));
  }
  function c(y, x = {}) {
    return new st(e.value, { year: "numeric", ...x }).format(y);
  }
  function d(y, x) {
    return Ls(y) ? new st(e.value, {
      ...x,
      timeZone: y.timeZone
    }).formatToParts(Ye(y)) : new st(e.value, x).formatToParts(Ye(y));
  }
  function p(y, x = "narrow") {
    return new st(e.value, { weekday: x }).format(y);
  }
  function g(y) {
    var x;
    return ((x = new st(e.value, {
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
    fullMonthAndYear: r,
    toParts: d,
    custom: o,
    part: h,
    dayPeriod: g,
    selectedDate: s,
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
  const e = Pe(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ar(ao(o))] = (...s) => t(o, ...s);
  }), n;
}
let Vo = 0;
function Xs() {
  we((t) => {
    if (!ct)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? rr()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? rr()
    ), Vo++, t(() => {
      Vo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Vo--;
    });
  });
}
function rr() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function rn(t) {
  return C(() => {
    var e;
    return xt(t) ? !!((e = Je(t)) != null && e.closest("form")) : !0;
  });
}
function fe(t) {
  const e = Pe(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, s) => {
    const r = (e == null ? void 0 : e.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = Cs(t);
  return C(() => {
    const o = {}, s = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      o[ao(r)] = s[r];
    }), Object.keys({ ...a, ...o }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function ue(t, e) {
  const a = fe(t), n = e ? Xt(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function K() {
  const t = Pe(), e = O(), a = C(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : Je(e);
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
    e.value = r, r && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r instanceof Element ? r : r.$el
    }), t.exposed = o);
  }
  return { forwardRef: s, currentRef: e, currentElement: a };
}
function Ip(t, e) {
  const a = Si(!1, 300), n = O(null), o = fp();
  function s() {
    n.value = null, a.value = !1;
  }
  function r(i, u) {
    const c = i.currentTarget, d = { x: i.clientX, y: i.clientY }, p = Vp(d, c.getBoundingClientRect()), g = Rp(d, p), m = Fp(u.getBoundingClientRect()), h = Np([...g, ...m]);
    n.value = h, a.value = !0;
  }
  return we((i) => {
    if (t.value && e.value) {
      const u = (d) => r(d, e.value), c = (d) => r(d, t.value);
      t.value.addEventListener("pointerleave", u), e.value.addEventListener("pointerleave", c), i(() => {
        var d, p;
        (d = t.value) == null || d.removeEventListener("pointerleave", u), (p = e.value) == null || p.removeEventListener("pointerleave", c);
      });
    }
  }), we((i) => {
    var u;
    if (n.value) {
      const c = (d) => {
        var p, g;
        if (!n.value)
          return;
        const m = d.target, h = { x: d.clientX, y: d.clientY }, y = ((p = t.value) == null ? void 0 : p.contains(m)) || ((g = e.value) == null ? void 0 : g.contains(m)), x = !Lp(h, n.value), $ = !!m.closest("[data-grace-area-trigger]");
        y ? s() : (x || $) && (s(), o.trigger());
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
function Vp(t, e) {
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
function Rp(t, e, a = 5) {
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
function Fp(t) {
  const { top: e, right: a, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: a, y: e },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function Lp(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
    const i = e[s].x, u = e[s].y, c = e[r].x, d = e[r].y;
    u > n != d > n && a < (c - i) * (n - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function Np(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), zp(e);
}
function zp(t) {
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
var Wp = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, ra = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), wn = {}, Ro = 0, Mi = function(t) {
  return t && (t.host || Mi(t.parentNode));
}, Kp = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Mi(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Up = function(t, e, a, n) {
  var o = Kp(e, Array.isArray(t) ? t : [t]);
  wn[a] || (wn[a] = /* @__PURE__ */ new WeakMap());
  var s = wn[a], r = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        d(g);
      else
        try {
          var m = g.getAttribute(n), h = m !== null && m !== "false", y = (ra.get(g) || 0) + 1, x = (s.get(g) || 0) + 1;
          ra.set(g, y), s.set(g, x), r.push(g), y === 1 && h && _n.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return d(e), i.clear(), Ro++, function() {
    r.forEach(function(p) {
      var g = ra.get(p) - 1, m = s.get(p) - 1;
      ra.set(p, g), s.set(p, m), g || (_n.has(p) || p.removeAttribute(n), _n.delete(p)), m || p.removeAttribute(a);
    }), Ro--, Ro || (ra = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), wn = {});
  };
}, Hp = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Wp(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Up(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function un(t) {
  let e;
  X(() => Je(t), (a) => {
    a ? e = Hp(a) : e && e();
  }), ze(() => {
    e && e();
  });
}
let jp = 0;
function ke(t, e = "radix") {
  const a = fo({ useId: void 0 });
  return da.useId ? `${e}-${da.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++jp}`;
}
function Ti(t) {
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
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, c;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          u = p.inlineSize, c = p.blockSize;
        } else
          u = o.offsetWidth, c = o.offsetHeight;
        e.value = { width: u, height: c };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function Gp(t, e) {
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
const qp = "data-item-text";
function Zs(t) {
  const e = Si("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (a, n) => {
      if (!(t != null && t.value) && !n)
        return;
      e.value = e.value + a;
      const o = (t == null ? void 0 : t.value) ?? n, s = De(), r = o.map((p) => {
        var g;
        return {
          ref: p,
          textValue: ((g = (p.querySelector(`[${qp}]`) ?? p).textContent) == null ? void 0 : g.trim()) ?? ""
        };
      }), i = r.find((p) => p.ref === s), u = r.map((p) => p.textValue), c = Jp(u, e.value, i == null ? void 0 : i.textValue), d = r.find((p) => p.textValue === c);
      return d && d.ref.focus(), d == null ? void 0 : d.ref;
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function Yp(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function Jp(t, e, a) {
  const n = e.length > 1 && Array.from(e).every((i) => i === e[0]) ? e[0] : e, o = a ? t.indexOf(a) : -1;
  let s = Yp(t, Math.max(o, 0));
  n.length === 1 && (s = s.filter((i) => i !== a));
  const r = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return r !== a ? r : void 0;
}
function Ii() {
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
const el = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = po(a.default()), r = s.findIndex((d) => d.type !== Bs);
      if (r === -1)
        return s;
      const i = s[r];
      (n = i.props) == null || delete n.ref;
      const u = i.props ? D(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Mr(i, u);
      for (const d in u)
        d.startsWith("on") && (c.props || (c.props = {}), c.props[d] = u[d]);
      return s.length === 1 ? c : (s[r] = c, s);
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ie(n, e) : n !== "template" ? () => Ie(t.as, e, { default: a.default }) : () => Ie(el, e, { default: a.default });
  }
});
function Sa() {
  const t = O(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : Je(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
const [Vi, Qp] = pe("CollapsibleRoot"), Xp = /* @__PURE__ */ b({
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
    const n = t, o = _e(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = _e(n, "disabled");
    return Qp({
      contentId: "",
      disabled: s,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), e({ open: o }), K(), (r, i) => (v(), _(l(N), {
      as: r.as,
      "as-child": n.asChild,
      "data-state": l(o) ? "open" : "closed",
      "data-disabled": l(s) ? "" : void 0
    }, {
      default: f(() => [
        w(r.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Zp = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    K();
    const a = Vi();
    return (n, o) => {
      var s, r;
      return v(), _(l(N), {
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
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function ef(t, e) {
  var a;
  const n = O({}), o = O("none"), s = O(t), r = t.value ? "mounted" : "unmounted";
  let i;
  const u = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? sn, { state: c, dispatch: d } = Gp(r, {
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
        const E = o.value, S = xn(e.value);
        x ? (d("MOUNT"), p("enter"), S === "none" && p("after-enter")) : S === "none" || ((k = n.value) == null ? void 0 : k.display) === "none" ? (d("UNMOUNT"), p("leave"), p("after-leave")) : $ && E !== S ? (d("ANIMATION_OUT"), p("leave")) : (d("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const g = (x) => {
    const $ = xn(e.value), k = $.includes(
      x.animationName
    ), B = c.value === "mounted" ? "enter" : "leave";
    if (x.target === e.value && k && (p(`after-${B}`), d("ANIMATION_END"), !s.value)) {
      const E = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var S;
        ((S = e.value) == null ? void 0 : S.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = E);
      });
    }
    x.target === e.value && $ === "none" && d("ANIMATION_END");
  }, m = (x) => {
    x.target === e.value && (o.value = xn(e.value));
  }, h = X(
    e,
    (x, $) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", g), x.addEventListener("animationend", g)) : (d("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), $ == null || $.removeEventListener("animationstart", m), $ == null || $.removeEventListener("animationcancel", g), $ == null || $.removeEventListener("animationend", g));
    },
    { immediate: !0 }
  ), y = X(c, () => {
    const x = xn(e.value);
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
function xn(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const Ue = b({
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
    const { present: o, forceMount: s } = he(t), r = O(), { isPresent: i } = ef(o, r);
    a({ present: i });
    let u = e.default({ present: i });
    u = po(u || []);
    const c = Pe();
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
    return () => s.value || o.value || i.value ? Ie(e.default({ present: i })[0], {
      ref: (d) => {
        const p = Je(d);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), tf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Vi();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-collapsible-content"));
    const n = O(), { forwardRef: o, currentElement: s } = K(), r = O(0), i = O(0), u = C(() => a.open.value), c = O(u.value), d = O();
    return X(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await ae();
        const p = s.value;
        if (!p)
          return;
        d.value = d.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const g = p.getBoundingClientRect();
        i.value = g.height, r.value = g.width, c.value || (p.style.transitionDuration = d.value.transitionDuration, p.style.animationName = d.value.animationName);
      },
      {
        immediate: !0
      }
    ), ce(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), (p, g) => (v(), _(l(Ue), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || l(a).open.value,
      "force-mount": !0
    }, {
      default: f(() => {
        var m, h;
        return [
          P(l(N), D(p.$attrs, {
            id: l(a).contentId,
            ref: l(o),
            "as-child": e.asChild,
            as: p.as,
            "data-state": l(a).open.value ? "open" : "closed",
            "data-disabled": (m = l(a).disabled) != null && m.value ? "" : void 0,
            hidden: !((h = n.value) != null && h.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: f(() => {
              var y;
              return [
                (y = n.value) != null && y.present ? w(p.$slots, "default", { key: 0 }) : se("", !0)
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
function Ri({ type: t, defaultValue: e, modelValue: a }) {
  const n = a || e;
  if (In(t) && In(a) && In(e))
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
function af({ type: t, defaultValue: e, modelValue: a }) {
  return t || Ri({ type: t, defaultValue: e, modelValue: a });
}
function nf({ type: t, defaultValue: e }) {
  return e !== void 0 ? e : t === "single" ? void 0 : [];
}
function of(t, e) {
  const a = O(af(t)), n = _e(t, "modelValue", e, {
    defaultValue: nf(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  X(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const r = Ri(t);
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
        const u = i.findIndex((c) => c === r);
        i.splice(u, 1);
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
const [vo, sf] = pe("AccordionRoot"), lf = /* @__PURE__ */ b({
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
    const a = t, n = e, { dir: o, disabled: s } = he(a), r = pt(o), { modelValue: i, changeModelValue: u, isSingle: c } = of(a, n), { forwardRef: d, currentElement: p } = K();
    return sf({
      disabled: s,
      direction: r,
      orientation: a.orientation,
      parentElement: p,
      isSingle: c,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (g, m) => (v(), _(l(N), {
      ref: l(d),
      "as-child": g.asChild,
      as: g.as
    }, {
      default: f(() => [
        w(g.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [tl, rf] = pe("AccordionItem"), uf = /* @__PURE__ */ b({
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
    ), s = C(() => n.disabled.value || a.disabled), r = C(() => s.value ? "" : void 0), i = C(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    e({ open: o, dataDisabled: r });
    const { currentRef: u, currentElement: c } = K();
    rf({
      open: o,
      dataState: i,
      disabled: s,
      dataDisabled: r,
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
      Ei(
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
    return (p, g) => (v(), _(l(Xp), {
      "data-orientation": l(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Te(d, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: f(() => [
        w(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), df = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = vo(), n = tl();
    return K(), (o, s) => (v(), _(l(tf), {
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
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), cf = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(t) {
    const e = t, a = vo(), n = tl();
    return K(), (o, s) => (v(), _(l(N), {
      as: e.as,
      "as-child": e.asChild,
      "data-orientation": l(a).orientation,
      "data-state": l(n).dataState.value,
      "data-disabled": l(n).dataDisabled.value
    }, {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), pf = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = vo(), n = tl();
    n.triggerId || (n.triggerId = ke(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const s = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || s || a.changeModelValue(n.value.value);
    }
    return (s, r) => (v(), _(l(Zp), {
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
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [ft, ff] = pe("DialogRoot"), Fi = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = _e(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = O(), s = O(), { modal: r } = he(a);
    return ff({
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
    }), (i, u) => w(i.$slots, "default", { open: l(n) });
  }
}), Li = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ft(), { forwardRef: n, currentElement: o } = K();
    return a.contentId || (a.contentId = ke(void 0, "radix-vue-dialog-content")), ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), _(l(N), D(e, {
      ref: l(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(a).open.value || !1,
      "aria-controls": l(a).open.value ? l(a).contentId : void 0,
      "data-state": l(a).open.value ? "open" : "closed",
      onClick: l(a).onOpenToggle
    }), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), dn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = Qs();
    return (a, n) => l(e) || a.forceMount ? (v(), _(tn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled"])) : se("", !0);
  }
}), al = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(dn), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vf = "dismissableLayer.pointerDownOutside", mf = "dismissableLayer.focusOutside";
function Ni(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function hf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1), s = O(() => {
  });
  return we((r) => {
    if (!ct)
      return;
    const i = async (c) => {
      const d = c.target;
      if (e != null && e.value) {
        if (Ni(e.value, d)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            qs(
              vf,
              t,
              g
            );
          };
          const g = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", s.value), s.value = p, n.addEventListener("click", s.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", s.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    r(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", i), n.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function gf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1);
  return we((s) => {
    if (!ct)
      return;
    const r = async (i) => {
      e != null && e.value && (await ae(), !(!e.value || Ni(e.value, i.target)) && i.target && !o.value && qs(
        mf,
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
const Ze = so({
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
    const a = t, n = e, { forwardRef: o, currentElement: s } = K(), r = C(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => Ze.layersRoot), u = C(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = C(() => Ze.layersWithOutsidePointerEventsDisabled.size > 0), d = C(() => {
      const h = Array.from(i.value), [y] = [...Ze.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(y);
      return u.value >= x;
    }), p = hf(async (h) => {
      const y = [...Ze.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !d.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ae(), h.defaultPrevented || n("dismiss"));
    }, s), g = gf((h) => {
      [...Ze.branches].some(
        (y) => y == null ? void 0 : y.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, s);
    Js("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return we((h) => {
      s.value && (a.disableOutsidePointerEvents && (Ze.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ze.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), h(() => {
        a.disableOutsidePointerEvents && Ze.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), we((h) => {
      h(() => {
        s.value && (i.value.delete(s.value), Ze.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (h, y) => (v(), _(l(N), {
      ref: l(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: ut({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(g).onFocusCapture,
      onBlurCapture: l(g).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: f(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), yf = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = K();
    return ce(() => {
      Ze.branches.add(n.value);
    }), ze(() => {
      Ze.branches.delete(n.value);
    }), (o, s) => (v(), _(l(N), D({ ref: l(a) }, e), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fo = "focusScope.autoFocusOnMount", Lo = "focusScope.autoFocusOnUnmount", ir = { bubbles: !1, cancelable: !0 };
function Vn(t, { select: e = !1 } = {}) {
  const a = De();
  for (const n of t)
    if (Tt(n, { select: e }), De() !== a)
      return !0;
}
function bf(t) {
  const e = nl(t), a = ur(e, t), n = ur(e.reverse(), t);
  return [a, n];
}
function nl(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function ur(t, e) {
  for (const a of t)
    if (!_f(a, { upTo: e }))
      return a;
}
function _f(t, { upTo: e }) {
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
function wf(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Tt(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const a = De();
    t.focus({ preventScroll: !0 }), t !== a && wf(t) && e && t.select();
  }
}
const xf = vp(() => O([]));
function Cf() {
  const t = xf();
  return {
    add(e) {
      const a = t.value[0];
      e !== a && (a == null || a.pause()), t.value = dr(t.value, e), t.value.unshift(e);
    },
    remove(e) {
      var a;
      t.value = dr(t.value, e), (a = t.value[0]) == null || a.resume();
    }
  };
}
function dr(t, e) {
  const a = [...t], n = a.indexOf(e);
  return n !== -1 && a.splice(n, 1), a;
}
function $f(t) {
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
    const a = t, n = e, { currentRef: o, currentElement: s } = K(), r = O(null), i = Cf(), u = so({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    we((d) => {
      if (!ct)
        return;
      const p = s.value;
      if (!a.trapped)
        return;
      function g(x) {
        if (u.paused || !p)
          return;
        const $ = x.target;
        p.contains($) ? r.value = $ : Tt(r.value, { select: !0 });
      }
      function m(x) {
        if (u.paused || !p)
          return;
        const $ = x.relatedTarget;
        $ !== null && (p.contains($) || Tt(r.value, { select: !0 }));
      }
      function h(x) {
        p.contains(r.value) || Tt(p);
      }
      document.addEventListener("focusin", g), document.addEventListener("focusout", m);
      const y = new MutationObserver(h);
      p && y.observe(p, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", m), y.disconnect();
      });
    }), we(async (d) => {
      const p = s.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const g = De();
      if (!p.contains(g)) {
        const m = new CustomEvent(Fo, ir);
        p.addEventListener(Fo, (h) => n("mountAutoFocus", h)), p.dispatchEvent(m), m.defaultPrevented || (Vn($f(nl(p)), {
          select: !0
        }), De() === g && Tt(p));
      }
      d(() => {
        p.removeEventListener(Fo, (y) => n("mountAutoFocus", y));
        const m = new CustomEvent(Lo, ir), h = (y) => {
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
        const m = d.currentTarget, [h, y] = bf(m);
        h && y ? !d.shiftKey && g === y ? (d.preventDefault(), a.loop && Tt(h, { select: !0 })) : d.shiftKey && g === h && (d.preventDefault(), a.loop && Tt(y, { select: !0 })) : g === m && d.preventDefault();
      }
    }
    return (d, p) => (v(), _(l(N), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Bf = "menu.itemSelect", rs = ["Enter", " "], kf = ["ArrowDown", "PageUp", "Home"], zi = ["ArrowUp", "PageDown", "End"], Sf = [...kf, ...zi], Df = {
  ltr: [...rs, "ArrowRight"],
  rtl: [...rs, "ArrowLeft"]
}, Ef = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function ol(t) {
  return t ? "open" : "closed";
}
function Yn(t) {
  return t === "indeterminate";
}
function sl(t) {
  return Yn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function is(t) {
  const e = De();
  for (const a of t)
    if (a === e || (a.focus(), De() !== e))
      return;
}
function Pf(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
    const i = e[s].x, u = e[s].y, c = e[r].x, d = e[r].y;
    u > n != d > n && a < (c - i) * (n - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function Of(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return Pf(a, e);
}
function Qa(t) {
  return t.pointerType === "mouse";
}
const Af = "DialogTitle", Mf = "DialogContent";
function Tf({
  titleName: t = Af,
  contentName: e = Mf,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: s
}) {
  const r = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  ce(() => {
    var u;
    document.getElementById(n) || console.warn(r);
    const c = (u = s.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  });
}
const Wi = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ft(), { forwardRef: s, currentElement: r } = K();
    return o.titleId || (o.titleId = ke(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ke(void 0, "radix-vue-dialog-description")), ce(() => {
      o.contentElement = r, De() !== document.body && (o.triggerElement.value = De());
    }), process.env.NODE_ENV !== "production" && Tf({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: r
    }), (i, u) => (v(), _(l(mo), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(l(Da), D({
          id: l(o).contentId,
          ref: l(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(o).descriptionId,
          "aria-labelledby": l(o).titleId,
          "data-state": l(ol)(l(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (c) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[2] || (u[2] = (c) => n("focusOutside", c)),
          onInteractOutside: u[3] || (u[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: u[4] || (u[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), If = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ft(), s = Xt(n), { forwardRef: r, currentElement: i } = K();
    return un(i), (u, c) => (v(), _(Wi, D({ ...a, ...l(s) }, {
      ref: l(r),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        d.defaultPrevented || (d.preventDefault(), (p = l(o).triggerElement.value) == null || p.focus());
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
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Vf = /* @__PURE__ */ b({
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
    K();
    const o = ft(), s = O(!1), r = O(!1);
    return (i, u) => (v(), _(Wi, D({ ...a, ...l(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var d;
        c.defaultPrevented || (s.value || (d = l(o).triggerElement.value) == null || d.focus(), c.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        var d;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = c.target;
        (d = l(o).triggerElement.value) != null && d.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ll = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ft(), s = Xt(n), { forwardRef: r } = K();
    return (i, u) => (v(), _(l(Ue), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), _(If, D({
          key: 0,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), _(Vf, D({
          key: 1,
          ref: l(r)
        }, { ...a, ...l(s), ...i.$attrs }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rf = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ft();
    return ln(!0), K(), (a, n) => (v(), _(l(N), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": l(e).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), rl = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ft(), { forwardRef: a } = K();
    return (n, o) => {
      var s;
      return (s = l(e)) != null && s.modal.value ? (v(), _(l(Ue), {
        key: 0,
        present: n.forceMount || l(e).open.value
      }, {
        default: f(() => [
          P(Rf, D(n.$attrs, {
            ref: l(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: f(() => [
              w(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : se("", !0);
    };
  }
}), cn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    K();
    const a = ft();
    return (n, o) => (v(), _(l(N), D(e, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => l(a).onOpenChange(!1))
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Ki = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(t) {
    const e = t, a = ft();
    return K(), (n, o) => (v(), _(l(N), D(e, {
      id: l(a).titleId
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ui = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(t) {
    const e = t;
    K();
    const a = ft();
    return (n, o) => (v(), _(l(N), D(e, {
      id: l(a).descriptionId
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Ff(t) {
  function e(n) {
    return Array.isArray(t.date.value) ? t.date.value.some((o) => Oe(o, n)) : t.date.value ? Oe(t.date.value, n) : !1;
  }
  const a = C(
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
function Lf(t, e) {
  const a = e(t), n = a.compare(t), o = {};
  return n >= 7 && (o.day = 1), n >= $t(t) && (o.month = 1), a.set({ ...o });
}
function Nf(t, e) {
  const a = e(t), n = t.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= $t(t) && (o.month = 13), a.set({ ...o });
}
function zf(t, e) {
  return e(t);
}
function Wf(t, e) {
  return e(t);
}
function Hi(t) {
  const e = Ai(t.locale.value), a = C(() => {
    const y = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (y.era = "short"), y;
  }), n = O(Ut({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = C(() => n.value.map((y) => y.value));
  function s(y) {
    return !o.value.some((x) => Al(y, x));
  }
  const r = (y = "month", x) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const $ = n.value[n.value.length - 1].value;
    if (x || t.nextPage.value) {
      const B = Lf($, x || t.nextPage.value);
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
      const B = Nf($, x || t.prevPage.value);
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
      const E = zf($, x || t.nextPage.value), S = Ut({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = S;
      const I = {};
      if (!x) {
        const M = S[0].value.compare($);
        M >= $t($) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      t.placeholder.value = S[0].value.set({ ...I });
      return;
    }
    const k = y === "month" ? $.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.add({ years: 1 }), B = Ut({
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
      const E = Wf($, x || t.prevPage.value), S = Ut({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = S;
      const I = {};
      if (!x) {
        const M = $.compare(S[0].value);
        M >= $t($) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      t.placeholder.value = S[0].value.set({ ...I });
      return;
    }
    const k = y === "month" ? $.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), B = Ut({
      dateObj: k,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = B, t.placeholder.value = B[0].value.set({ day: 1 });
  };
  X(t.placeholder, (y) => {
    o.value.some((x) => Al(x, y)) || (n.value = Ut({
      dateObj: y,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    }));
  }), X([t.locale, t.weekStartsOn, t.fixedWeeks, t.numberOfMonths], () => {
    n.value = Ut({
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
      const S = n.value[0].value;
      return `${e.fullMonthAndYear(Ye(S), a.value)}`;
    }
    const y = Ye(n.value[0].value), x = Ye(n.value[n.value.length - 1].value), $ = e.fullMonth(y, a.value), k = e.fullMonth(x, a.value), B = e.fullYear(y, a.value), E = e.fullYear(x, a.value);
    return B === E ? `${$} - ${k} ${E}` : `${$} ${B} - ${k} ${E}`;
  }), h = C(() => `${t.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: c,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: d,
    visibleView: o,
    isOutsideVisibleView: s,
    formatter: e,
    nextPage: p,
    prevPage: g,
    headingValue: m,
    fullCalendarLabel: h
  };
}
const Kf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Uf = {
  role: "heading",
  "aria-level": "2"
}, [Ea, Hf] = pe("CalendarRoot"), ji = /* @__PURE__ */ b({
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
      nextPage: S,
      prevPage: I,
      dir: M
    } = he(a), { primitiveElement: U, currentElement: R } = Sa(), A = pt(M), T = _e(a, "modelValue", n, {
      defaultValue: E.value,
      passive: a.modelValue === void 0
    }), F = Ci({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value,
      locale: a.locale
    }), j = _e(a, "placeholder", n, {
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
    } = Hi({
      locale: o,
      placeholder: j,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: y,
      minValue: m,
      maxValue: h,
      disabled: s,
      weekdayFormat: d,
      pagedNavigation: u,
      isDateDisabled: $.value,
      isDateUnavailable: k.value,
      calendarLabel: B,
      nextPage: S,
      prevPage: I
    }), {
      isInvalid: J,
      isDateSelected: te
    } = Ff({
      date: T,
      isDateDisabled: ie,
      isDateUnavailable: ye
    });
    X(T, (ee) => {
      if (Array.isArray(ee) && ee.length) {
        const xe = ee[ee.length - 1];
        xe && !lt(j.value, xe) && W(xe);
      } else !Array.isArray(ee) && ee && !lt(j.value, ee) && W(ee);
    });
    function re(ee) {
      if (g.value) {
        if (!T.value)
          T.value = [ee.copy()];
        else if (Array.isArray(T.value)) {
          if (T.value.findIndex((xe) => Oe(xe, ee)) === -1)
            T.value = [...T.value, ee];
          else if (!x.value) {
            const xe = T.value.filter((Re) => !Oe(Re, ee));
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
        !x.value && lt(T.value, ee) ? (j.value = ee.copy(), T.value = void 0) : T.value = ee.copy();
      }
    }
    return ce(() => {
      i.value && $i(R.value);
    }), Hf({
      isDateUnavailable: ye,
      dir: A,
      isDateDisabled: ie,
      locale: o,
      formatter: ot,
      modelValue: T,
      placeholder: j,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: c,
      weekdayFormat: d,
      fixedWeeks: p,
      multiple: g,
      numberOfMonths: y,
      readonly: r,
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
      onDateChange: re
    }), (ee, xe) => (v(), _(l(N), {
      ref_key: "primitiveElement",
      ref: U,
      as: ee.as,
      "as-child": ee.asChild,
      role: "application",
      "aria-label": l(z),
      "data-readonly": l(r) ? "" : void 0,
      "data-disabled": l(s) ? "" : void 0,
      "data-invalid": l(J) ? "" : void 0,
      dir: l(A)
    }, {
      default: f(() => [
        w(ee.$slots, "default", {
          date: l(j),
          grid: l(Pt),
          weekDays: l(ve),
          weekStartsOn: l(c),
          locale: l(o),
          fixedWeeks: l(p)
        }),
        me("div", Kf, [
          me("div", Uf, le(l(z)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), jf = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gf = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ea();
    return (n, o) => (v(), _(l(N), D(e, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Z(le(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), qf = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Ea(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), _(l(N), D(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Yf = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Ea();
    return (a, n) => {
      var o, s;
      return v(), _(l(N), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(e).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(e).isDateDisabled(a.date) || ((s = (o = l(e)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Jf = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qf = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Ea();
    return (o, s) => (v(), _(l(N), {
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
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Xf = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Ea();
    return (o, s) => (v(), _(l(N), {
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
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Zf = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), D(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ev = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tv = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), av = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ii(), n = Ea(), { primitiveElement: o, currentElement: s } = Sa(), r = C(() => e.day.day.toLocaleString(n.locale.value)), i = C(() => n.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = C(() => n.isDateDisabled(e.day)), c = C(
      () => {
        var B;
        return (B = n.isDateUnavailable) == null ? void 0 : B.call(n, e.day);
      }
    ), d = C(() => Fr(e.day, Ct())), p = C(() => !Ps(e.day, e.month)), g = C(
      () => n.isOutsideVisibleView(e.day)
    ), m = C(() => !n.disabled.value && Oe(e.day, n.placeholder.value)), h = C(() => n.isDateSelected(e.day)), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x(B) {
      var E;
      n.readonly.value || n.isDateDisabled(B) || (E = n.isDateUnavailable) != null && E.call(n, B) || n.onDateChange(B);
    }
    function $() {
      x(e.day);
    }
    function k(B) {
      B.preventDefault(), B.stopPropagation();
      const E = n.parentElement.value, S = E ? Array.from(E.querySelectorAll(y)) : [];
      let I = S.indexOf(s.value);
      const M = 7, U = n.dir.value === "rtl" ? -1 : 1;
      switch (B.code) {
        case a.ARROW_RIGHT:
          I += U;
          break;
        case a.ARROW_LEFT:
          I -= U;
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
      if (I >= 0 && I < S.length) {
        S[I].focus();
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
      if (I >= S.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ae(() => {
          const R = E ? Array.from(E.querySelectorAll(y)) : [];
          if (!n.pagedNavigation.value) {
            const A = $t(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            R[R.length - A + I - S.length].focus();
            return;
          }
          R[I - S.length].focus();
        });
      }
    }
    return (B, E) => (v(), _(l(N), D({
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
        Te(k, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = Te($e(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        w(B.$slots, "default", { dayValue: r.value }, () => [
          Z(le(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Jn(t) {
  return t === "indeterminate";
}
function Gi(t) {
  return Jn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const nv = ["value", "checked", "name", "disabled", "required"], [ov, sv] = pe("CheckboxRoot"), lv = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = he(a), s = _e(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: r, currentElement: i } = K(), u = rn(i), c = C(() => {
      var d;
      return a.id && i.value ? (d = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return sv({
      disabled: o,
      state: s
    }), (d, p) => (v(), L(ne, null, [
      P(l(N), D(d.$attrs, {
        id: d.id,
        ref: l(r),
        role: "checkbox",
        "as-child": a.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": l(Jn)(l(s)) ? "mixed" : l(s),
        "aria-required": a.required,
        "aria-label": d.$attrs["aria-label"] || c.value,
        "data-state": l(Gi)(l(s)),
        "data-disabled": l(o) ? "" : void 0,
        disabled: l(o),
        onKeydown: Te($e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (g) => s.value = l(Jn)(l(s)) ? !0 : !l(s))
      }), {
        default: f(() => [
          w(d.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      l(u) ? (v(), L("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: d.value,
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
      }, null, 8, nv)) : se("", !0)
    ], 64));
  }
}), rv = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = K(), a = ov();
    return (n, o) => (v(), _(l(Ue), {
      present: n.forceMount || l(Jn)(l(a).state.value) || l(a).state.value === !0
    }, {
      default: f(() => [
        P(l(N), D({
          ref: l(e),
          "data-state": l(Gi)(l(a).state.value),
          "data-disabled": l(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: f(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [qi, iv] = pe("PopperRoot"), Pa = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = O();
    return iv({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), ho = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = K(), o = qi();
    return we(() => {
      o.onAnchorChange(e.element ?? n.value);
    }), (s, r) => (v(), _(l(N), {
      ref: l(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function uv(t) {
  return t !== null;
}
function dv(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var a, n, o;
      const { placement: s, rects: r, middlewareData: i } = e, u = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = u ? 0 : t.arrowWidth, d = u ? 0 : t.arrowHeight, [p, g] = us(s), m = { start: "0%", center: "50%", end: "100%" }[g], h = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, y = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + d / 2;
      let x = "", $ = "";
      return p === "bottom" ? (x = u ? m : `${h}px`, $ = `${-d}px`) : p === "top" ? (x = u ? m : `${h}px`, $ = `${r.floating.height + d}px`) : p === "right" ? (x = `${-d}px`, $ = u ? m : `${y}px`) : p === "left" && (x = `${r.floating.width + d}px`, $ = u ? m : `${y}px`), { data: { x, y: $ } };
    }
  };
}
function us(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
const Yi = {
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
}, [zw, cv] = pe("PopperContent"), xa = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ss({
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
    ...Yi
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = qi(), { forwardRef: s, currentElement: r } = K(), i = O(), u = O(), { width: c, height: d } = Ti(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: g.value,
      boundary: m.value.filter(uv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = pp(() => [
      mi({
        mainAxis: a.sideOffset + d.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      a.avoidCollisions && hi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? bi() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      gi({
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
      u.value && _i({ element: u.value, padding: a.arrowPadding }),
      dv({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      a.hideWhenDetached && yi({ strategy: "referenceHidden", ...h.value })
    ]), { floatingStyles: x, placement: $, isPositioned: k, middlewareData: B } = xi(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => vi(...A, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), E = C(
      () => us($.value)[0]
    ), S = C(
      () => us($.value)[1]
    );
    Ds(() => {
      k.value && n("placed");
    });
    const I = C(
      () => {
        var A;
        return ((A = B.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), M = O("");
    we(() => {
      r.value && (M.value = window.getComputedStyle(r.value).zIndex);
    });
    const U = C(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), R = C(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return cv({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: U,
      arrowY: R,
      shouldHideArrow: I
    }), (A, T) => {
      var F, j, W;
      return v(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: ut({
          ...l(x),
          transform: l(k) ? l(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (F = l(B).transformOrigin) == null ? void 0 : F.x,
            (j = l(B).transformOrigin) == null ? void 0 : j.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((W = l(B).hide) == null ? void 0 : W.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(l(N), D({ ref: l(s) }, A.$attrs, {
          "as-child": a.asChild,
          as: A.as,
          "data-side": E.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(k) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            w(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), pn = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return K(), (e, a) => (v(), _(l(N), {
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
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), pv = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${o}][${e.name}][${s}]`, value: r })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), L(ne, null, be(a.value, (s) => (v(), _(pn, {
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
}), fv = "data-radix-vue-collection-item", [il, vv] = pe("CollectionProvider");
function ul(t = fv) {
  const e = O(/* @__PURE__ */ new Map()), a = O(), n = vv({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = cl(n), s = C(() => Array.from(n.itemMap.value.values())), r = C(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: r };
}
const dl = b({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = il(), { primitiveElement: n, currentElement: o } = Sa();
    return X(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ie(el, { ref: n }, e);
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
    const n = il(), { primitiveElement: o, currentElement: s } = Sa();
    return we((r) => {
      if (s.value) {
        const i = Tr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: t.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => Ie(el, { ...a, [n.attrName]: "", ref: o }, e);
  }
});
function cl(t) {
  const e = t ?? il();
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
const [Oa, mv] = pe("ComboboxRoot"), hv = /* @__PURE__ */ b({
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
    const a = t, n = e, { multiple: o, disabled: s, dir: r } = he(a), i = pt(r), u = _e(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), c = _e(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), d = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = _e(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function g(Y) {
      var oe, ve;
      d.value = Y, await ae(), Y ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (oe = B().find((Ve) => {
        var je, Qe;
        return ((Qe = (je = Ve.ref) == null ? void 0 : je.dataset) == null ? void 0 : Qe.state) === "checked";
      })) == null ? void 0 : oe.value : p.value = c.value), await ae(), (ve = y.value) == null || ve.focus(), j()) : (h.value = !1, a.resetSearchTermOnBlur && U("blur"));
    }
    function m(Y) {
      if (Array.isArray(c.value) && o.value) {
        const oe = c.value.findIndex((Ve) => Gt(Ve, Y)), ve = [...c.value];
        oe === -1 ? ve.push(Y) : ve.splice(oe, 1), c.value = ve;
      } else
        c.value = Y, g(!1);
    }
    const h = O(!1), y = O(), x = O(), { forwardRef: $, currentElement: k } = K(), { getItems: B, reactiveItems: E, itemMapSize: S } = ul("data-radix-vue-combobox-item"), I = O([]);
    X(() => S.value, () => {
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
    function U(Y) {
      const oe = Y === "blur" || Y === "select" && a.resetSearchTermOnSelect;
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? u.value = a.displayValue(c.value) : typeof c.value != "object" ? u.value = c.value.toString() : oe && (u.value = "") : oe && (u.value = "");
    }
    const R = C(() => M.value.findIndex((Y) => Gt(Y, p.value))), A = C(() => {
      var Y;
      return (Y = E.value.find((oe) => Gt(oe.value, p.value))) == null ? void 0 : Y.ref;
    }), T = C(() => JSON.stringify(c.value));
    X(T, async () => {
      await ae(), await ae(), U("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), X(() => [M.value.length, u.value.length], async ([Y, oe], [ve, Ve]) => {
      await ae(), await ae(), Y && (Ve > oe || R.value === -1) && (p.value = M.value[0]);
    });
    const F = rn(k);
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
    return mv({
      searchTerm: u,
      modelValue: c,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: h,
      multiple: o,
      disabled: s,
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
    }), (Y, oe) => (v(), _(l(Pa), null, {
      default: f(() => [
        P(l(N), D({
          ref: l($),
          style: {
            pointerEvents: l(d) ? "auto" : void 0
          },
          as: Y.as,
          "as-child": Y.asChild,
          dir: l(i)
        }, Y.$attrs), {
          default: f(() => [
            w(Y.$slots, "default", {
              open: l(d),
              modelValue: l(c)
            }),
            l(F) && a.name ? (v(), _(l(pv), {
              key: 0,
              name: a.name,
              value: l(c)
            }, null, 8, ["name", "value"])) : se("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), gv = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(t) {
    const e = t, a = Oa(), { forwardRef: n, currentElement: o } = K();
    ce(() => {
      const d = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      d && (a.onInputElementChange(d), setTimeout(() => {
        e.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const s = C(() => e.disabled || a.disabled.value || !1), r = O();
    Or(() => {
      var d;
      return r.value = (d = a.selectedElement.value) == null ? void 0 : d.id;
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
    return (d, p) => (v(), _(l(N), {
      ref: l(n),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
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
        Te($e(i, ["prevent"]), ["down", "up"]),
        Te(l(a).onInputEnter, ["enter"]),
        Te($e(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: l(a).onCompositionStart,
      onCompositionend: l(a).onCompositionEnd
    }, {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Ji, yv] = pe("ComboboxGroup"), bv = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { currentRef: a, currentElement: n } = K(), o = ke(void 0, "radix-vue-combobox-group"), s = Oa(), r = O(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return Bp(n, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), X(() => s.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), yv({
      id: o
    }), (u, c) => Ca((v(), _(l(N), D(e, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": l(o)
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [$s, r.value]
    ]);
  }
}), _v = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    K();
    const a = Ji({ id: "" });
    return (n, o) => (v(), _(l(N), D(e, {
      id: l(a).id
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Ww, wv] = pe("ComboboxContent"), xv = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = he(a), s = Oa();
    ln(a.bodyLock);
    const { forwardRef: r, currentElement: i } = K();
    un(s.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), c = fe(u.value);
    function d(g) {
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
    return wv({ position: o }), (g, m) => (v(), _(l(dl), null, {
      default: f(() => [
        g.dismissable ? (v(), _(l(Da), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => l(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = l(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = l(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: f(() => [
            (v(), _(Ne(l(o) === "popper" ? l(xa) : l(N)), D({ ...g.$attrs, ...l(c) }, {
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
              onPointerleave: d
            }), {
              default: f(() => [
                w(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), _(Ne(l(o) === "popper" ? l(xa) : l(N)), D({ key: 1 }, { ...g.$attrs, ...u.value }, {
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
          onPointerleave: d
        }), {
          default: f(() => [
            w(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Cv = /* @__PURE__ */ b({
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
    const a = ue(t, e), { forwardRef: n } = K(), o = Oa();
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-combobox-content")), (s, r) => (v(), _(l(Ue), {
      present: s.forceMount || l(o).open.value
    }, {
      default: f(() => [
        P(xv, D({ ...l(a), ...s.$attrs }, { ref: l(n) }), {
          default: f(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $v = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    K();
    const a = Oa(), n = C(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (v(), _(l(N), H(D({ key: 0 }, e)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("No options")
        ])
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
});
function Bv(t) {
  const e = fo({
    nonce: O()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [Kw, kv] = pe("ComboboxItem"), Sv = "combobox.select", Dv = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = he(a), s = Oa();
    Ji({ id: "", options: O([]) });
    const { forwardRef: r } = K(), i = C(
      () => {
        var y, x;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (y = s.modelValue.value) == null ? void 0 : y.some(($) => Gt($, a.value)) : Gt((x = s.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), u = C(() => Gt(s.selectedValue.value, a.value)), c = ke(void 0, "radix-vue-combobox-item"), d = ke(void 0, "radix-vue-combobox-option"), p = C(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((y) => Gt(y, a.value)) : !0);
    async function g(y) {
      n("select", y), !(y != null && y.defaultPrevented) && !o.value && y && s.onValueChange(a.value);
    }
    function m(y) {
      if (!y)
        return;
      const x = { originalEvent: y, value: a.value };
      qs(Sv, g, x);
    }
    async function h(y) {
      await ae(), !y.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return kv({
      isSelected: i
    }), (y, x) => (v(), _(l(go), { value: y.value }, {
      default: f(() => [
        Ca(P(l(N), {
          id: l(d),
          ref: l(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": l(c),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": l(o) || void 0,
          "data-disabled": l(o) ? "" : void 0,
          as: y.as,
          "as-child": y.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: h
        }, {
          default: f(() => [
            w(y.$slots, "default", {}, () => [
              Z(le(y.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [$s, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Ev = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(N), D(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qi = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(ho), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Pv() {
  const t = O(!1);
  return ce(() => {
    wa("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), wa(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const Ov = Bi(Pv), [Zt, Xi] = pe(["MenuRoot", "MenuSub"], "MenuContext"), [fn, Av] = pe("MenuRoot"), Mv = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: s } = he(a), r = pt(s), i = _e(a, "open", n), u = O(), c = Ov();
    return Xi({
      open: i,
      onOpenChange: (d) => {
        i.value = d;
      },
      content: u,
      onContentChange: (d) => {
        u.value = d;
      }
    }), Av({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: r,
      modal: o
    }), (d, p) => (v(), _(l(Pa), null, {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Tv = "rovingFocusGroup.onEntryFocus", Iv = { bubbles: !1, cancelable: !0 }, Vv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Rv(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function Fv(t, e, a) {
  const n = Rv(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Vv[n];
}
function Zi(t, e = !1) {
  const a = De();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), De() !== a))
      return;
}
function Lv(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [Nv, zv] = pe("RovingFocusGroup"), eu = /* @__PURE__ */ b({
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
    const n = t, o = a, { loop: s, orientation: r, dir: i } = he(n), u = pt(i), c = _e(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), d = O(!1), p = O(!1), g = O(0), { getItems: m } = ul();
    function h(x) {
      const $ = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && $ && !d.value) {
        const k = new CustomEvent(Tv, Iv);
        if (x.currentTarget.dispatchEvent(k), o("entryFocus", k), !k.defaultPrevented) {
          const B = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), E = B.find((M) => M.getAttribute("data-active") === "true"), S = B.find(
            (M) => M.id === c.value
          ), I = [E, S, ...B].filter(
            Boolean
          );
          Zi(I, n.preventScrollOnEntryFocus);
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
    }), zv({
      loop: s,
      dir: u,
      orientation: r,
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
    }), (x, $) => (v(), _(l(dl), null, {
      default: f(() => [
        P(l(N), {
          tabindex: d.value || g.value === 0 ? -1 : 0,
          "data-orientation": l(r),
          as: x.as,
          "as-child": x.asChild,
          dir: l(u),
          style: { outline: "none" },
          onMousedown: $[0] || ($[0] = (k) => p.value = !0),
          onMouseup: y,
          onFocus: h,
          onBlur: $[1] || ($[1] = (k) => d.value = !1)
        }, {
          default: f(() => [
            w(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Wv = /* @__PURE__ */ b({
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
    const e = t, a = Nv(), n = C(() => e.tabStopId || ke()), o = C(
      () => a.currentTabStopId.value === n.value
    ), { getItems: s } = cl();
    ce(() => {
      e.focusable && a.onFocusableItemAdd();
    }), ze(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Fv(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !e.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let c = [...s().map((d) => d.ref).filter((d) => d.dataset.disabled !== "")];
        if (u === "last")
          c.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && c.reverse();
          const d = c.indexOf(
            i.currentTarget
          );
          c = a.loop.value ? Lv(c, d + 1) : c.slice(d + 1);
        }
        ae(() => Zi(c));
      }
    }
    return (i, u) => (v(), _(l(go), null, {
      default: f(() => [
        P(l(N), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": l(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (c) => {
            i.focusable ? l(a).onItemFocus(n.value) : c.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (c) => l(a).onItemFocus(n.value)),
          onKeydown: r
        }, {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [pl, Kv] = pe("MenuContent"), fl = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ss({
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
    ...Yi
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Zt(), s = fn(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = he(a);
    Xs(), ln(i.value);
    const c = O(""), d = O(0), p = O(0), g = O(null), m = O("right"), h = O(0), y = O(null), { createCollection: x } = ka(), { forwardRef: $, currentElement: k } = K(), B = x(k);
    X(k, (A) => {
      o.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = Zs(B);
    ze(() => {
      window.clearTimeout(d.value);
    });
    function S(A) {
      var T, F;
      return m.value === ((T = g.value) == null ? void 0 : T.side) && Of(A, (F = g.value) == null ? void 0 : F.area);
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
      const T = A.target.closest("[data-radix-menu-content]") === A.currentTarget, F = A.ctrlKey || A.altKey || A.metaKey, j = A.key.length === 1, W = Ei(
        A,
        De(),
        k.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (W)
        return W == null ? void 0 : W.focus();
      if (A.code === "Space" || (T && (A.key === "Tab" && A.preventDefault(), !F && j && E(A.key)), A.target !== k.value) || !Sf.includes(A.key))
        return;
      A.preventDefault();
      const z = B.value;
      zi.includes(A.key) && z.reverse(), is(z);
    }
    function U(A) {
      var T, F;
      (F = (T = A == null ? void 0 : A.currentTarget) == null ? void 0 : T.contains) != null && F.call(T, A.target) || (window.clearTimeout(d.value), c.value = "");
    }
    function R(A) {
      var T;
      if (!Qa(A))
        return;
      const F = A.target, j = h.value !== A.clientX;
      if ((T = A == null ? void 0 : A.currentTarget) != null && T.contains(F) && j) {
        const W = A.clientX > h.value ? "right" : "left";
        m.value = W, h.value = A.clientX;
      }
    }
    return Kv({
      onItemEnter: (A) => !!S(A),
      onItemLeave: (A) => {
        var T;
        S(A) || ((T = k.value) == null || T.focus(), y.value = null);
      },
      onTriggerLeave: (A) => !!S(A),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        g.value = A;
      }
    }), (A, T) => (v(), _(l(mo), {
      "as-child": "",
      trapped: l(r),
      onMountAutoFocus: I,
      onUnmountAutoFocus: T[7] || (T[7] = (F) => n("closeAutoFocus", F))
    }, {
      default: f(() => [
        P(l(Da), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: T[2] || (T[2] = (F) => n("escapeKeyDown", F)),
          onPointerDownOutside: T[3] || (T[3] = (F) => n("pointerDownOutside", F)),
          onFocusOutside: T[4] || (T[4] = (F) => n("focusOutside", F)),
          onInteractOutside: T[5] || (T[5] = (F) => n("interactOutside", F)),
          onDismiss: T[6] || (T[6] = (F) => n("dismiss"))
        }, {
          default: f(() => [
            P(l(eu), {
              "current-tab-stop-id": y.value,
              "onUpdate:currentTabStopId": T[0] || (T[0] = (F) => y.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: l(s).dir.value,
              loop: l(u),
              onEntryFocus: T[1] || (T[1] = (F) => {
                n("entryFocus", F), l(s).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: f(() => [
                P(l(xa), {
                  ref: l($),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(ol)(l(o).open.value),
                  dir: l(s).dir.value,
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
                  onBlur: U,
                  onPointermove: R
                }, {
                  default: f(() => [
                    w(A.$slots, "default")
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
}), tu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = pl(), { forwardRef: n } = K(), o = O(!1);
    async function s(i) {
      if (!i.defaultPrevented && Qa(i)) {
        if (e.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await ae(), !i.defaultPrevented && Qa(i) && a.onItemLeave(i);
    }
    return (i, u) => (v(), _(l(go), {
      value: { textValue: i.textValue }
    }, {
      default: f(() => [
        P(l(N), D({
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
          onFocus: u[0] || (u[0] = async (c) => {
            await ae(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (c) => {
            await ae(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), vl = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = K(), r = fn(), i = pl(), u = O(!1);
    async function c() {
      const d = s.value;
      if (!a.disabled && d) {
        const p = new CustomEvent(Bf, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ae(), p.defaultPrevented ? u.value = !1 : r.onClose();
      }
    }
    return (d, p) => (v(), _(tu, D(a, {
      ref: l(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (g) => {
        var m;
        await ae(), !g.defaultPrevented && (u.value || (m = g.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (g) => {
        const m = l(i).searchRef.value !== "";
        d.disabled || m && g.key === " " || l(rs).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Uv, au] = pe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Hv = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Uv({
      checked: O(!1)
    });
    return (a, n) => (v(), _(l(Ue), {
      present: a.forceMount || l(Yn)(l(e).checked.value) || l(e).checked.value === !0
    }, {
      default: f(() => [
        P(l(N), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": l(sl)(l(e).checked.value)
        }, {
          default: f(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), jv = /* @__PURE__ */ b({
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
    const a = t, n = e, o = _e(a, "checked", n);
    return au({ checked: o }), (s, r) => (v(), _(vl, D({ role: "menuitemcheckbox" }, a, {
      "aria-checked": l(Yn)(l(o)) ? "mixed" : l(o),
      "data-state": l(sl)(l(o)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), l(Yn)(l(o)) ? o.value = !0 : o.value = !l(o);
      })
    }), {
      default: f(() => [
        w(s.$slots, "default", { checked: l(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Gv = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ue(a, n), s = Zt(), { forwardRef: r, currentElement: i } = K();
    return un(i), (u, c) => (v(), _(fl, D(l(o), {
      ref: l(r),
      "trap-focus": l(s).open.value,
      "disable-outside-pointer-events": l(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (d) => l(s).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = $e((d) => n("focusOutside", d), ["prevent"]))
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), qv = /* @__PURE__ */ b({
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
    return (o, s) => (v(), _(fl, D(l(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (r) => l(n).onOpenChange(!1))
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yv = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = Zt(), o = fn();
    return (s, r) => (v(), _(l(Ue), {
      present: s.forceMount || l(n).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), _(Gv, H(D({ key: 0 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), _(qv, H(D({ key: 1 }, { ...s.$attrs, ...l(a) })), {
          default: f(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), nu = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), D({ role: "group" }, e), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jv = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(dn), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Xv, Zv] = pe("MenuRadioGroup"), em = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = _e(a, "modelValue", e);
    return Zv({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, s) => (v(), _(nu, H(G(a)), {
      default: f(() => [
        w(o.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ b({
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
    const a = t, n = e, { value: o } = he(a), s = Xv(), r = C(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return au({ checked: r }), (i, u) => (v(), _(vl, D({ role: "menuitemradio" }, a, {
      "aria-checked": r.value,
      "data-state": l(sl)(r.value),
      onSelect: u[0] || (u[0] = async (c) => {
        n("select", c), l(s).onValueChange(l(o));
      })
    }), {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), am = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), D(e, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ou, nm] = pe("MenuSub"), om = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = _e(a, "open", e, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = Zt(), s = O(), r = O();
    return we((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Xi({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: r,
      onContentChange: (i) => {
        r.value = i;
      }
    }), nm({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, u) => (v(), _(l(Pa), null, {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), sm = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = Zt(), o = fn(), s = ou(), { forwardRef: r, currentElement: i } = K();
    return s.contentId || (s.contentId = ke(void 0, "radix-vue-menu-sub-content")), (u, c) => (v(), _(l(Ue), {
      present: u.forceMount || l(n).open.value
    }, {
      default: f(() => [
        P(fl, D(l(a), {
          id: l(s).contentId,
          ref: l(r),
          "aria-labelledby": l(s).triggerId,
          align: "start",
          side: l(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = $e((d) => {
            var p;
            l(o).isUsingKeyboardRef.value && ((p = l(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = $e(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (d) => {
            d.defaultPrevented || d.target !== l(s).trigger.value && l(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (d) => {
            l(o).onClose(), d.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (d) => {
            var p, g;
            const m = (p = d.currentTarget) == null ? void 0 : p.contains(d.target), h = l(Ef)[l(o).dir.value].includes(d.key);
            m && h && (l(n).onOpenChange(!1), (g = l(s).trigger.value) == null || g.focus(), d.preventDefault());
          })
        }), {
          default: f(() => [
            w(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), lm = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Zt(), n = fn(), o = ou(), s = pl(), r = O(null);
    o.triggerId || (o.triggerId = ke(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    ze(() => {
      i();
    });
    function u(p) {
      !Qa(p) || s.onItemEnter(p) || !e.disabled && !a.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function c(p) {
      var g, m;
      if (!Qa(p))
        return;
      i();
      const h = (g = a.content.value) == null ? void 0 : g.getBoundingClientRect();
      if (h != null && h.width) {
        const y = (m = a.content.value) == null ? void 0 : m.dataset.side, x = y === "right", $ = x ? -5 : 5, k = h[x ? "left" : "right"], B = h[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
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
    async function d(p) {
      var g;
      const m = s.searchRef.value !== "";
      e.disabled || m && p.key === " " || Df[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ae(), (g = a.content.value) == null || g.focus(), p.preventDefault());
    }
    return (p, g) => (v(), _(Qi, { "as-child": "" }, {
      default: f(() => [
        P(tu, D(e, {
          id: l(o).triggerId,
          ref: (m) => {
            var h;
            (h = l(o)) == null || h.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(a).open.value,
          "aria-controls": l(o).contentId,
          "data-state": l(ol)(l(a).open.value),
          onClick: g[0] || (g[0] = async (m) => {
            e.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(a).open.value || l(a).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: c,
          onKeydown: d
        }), {
          default: f(() => [
            w(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [su, rm] = pe("DropdownMenuRoot"), im = /* @__PURE__ */ b({
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
    K();
    const o = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = O(), { modal: r, dir: i } = he(a), u = pt(i);
    return rm({
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
      dir: u
    }), (c, d) => (v(), _(l(Mv), {
      open: l(o),
      "onUpdate:open": d[0] || (d[0] = (p) => zt(o) ? o.value = p : null),
      dir: l(u),
      modal: l(r)
    }, {
      default: f(() => [
        w(c.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), um = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = su(), { forwardRef: n, currentElement: o } = K();
    return ce(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ke(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (v(), _(l(Qi), { "as-child": "" }, {
      default: f(() => [
        P(l(N), {
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
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = l(a)) == null || u.onOpenToggle(), await ae(), l(a).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = Te(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && l(a).onOpenToggle(), i.key === "ArrowDown" && l(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: f(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), dm = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Qv), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ b({
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
    K();
    const n = su(), o = O(!1);
    function s(r) {
      r.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, r.preventDefault());
    }
    return n.contentId || (n.contentId = ke(void 0, "radix-vue-dropdown-menu-content")), (r, i) => {
      var u;
      return v(), _(l(Yv), D(l(a), {
        id: l(n).contentId,
        "aria-labelledby": (u = l(n)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: s,
        onInteractOutside: i[0] || (i[0] = (c) => {
          var d;
          if (c.defaultPrevented) return;
          const p = c.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || g;
          (!l(n).modal.value || m) && (o.value = !0), (d = l(n).triggerElement.value) != null && d.contains(c.target) && c.preventDefault();
        })
      }), {
        default: f(() => [
          w(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), lu = /* @__PURE__ */ b({
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
    return K(), (o, s) => (v(), _(l(vl), H(G({ ...a, ...l(n) })), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(nu), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(am), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ b({
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
    return K(), (o, s) => (v(), _(l(jv), H(G({ ...a, ...l(n) })), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ru = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(Hv), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(Jv), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = Xt(e);
    return K(), (o, s) => (v(), _(l(em), H(G({ ...a, ...l(n) })), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ b({
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
    return K(), (n, o) => (v(), _(l(tm), H(G(l(a))), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = _e(a, "open", e, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return K(), (o, s) => (v(), _(l(om), {
      open: l(n),
      "onUpdate:open": s[0] || (s[0] = (r) => zt(n) ? n.value = r : null)
    }, {
      default: f(() => [
        w(o.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), bm = /* @__PURE__ */ b({
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
    return K(), (n, o) => (v(), _(l(sm), D(l(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(lm), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wm = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(N), D(e, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Aa, xm] = pe("PaginationRoot"), Uw = /* @__PURE__ */ b({
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
    const a = t, n = e, { siblingCount: o, disabled: s, showEdges: r } = he(a);
    K();
    const i = _e(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), u = C(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return xm({
      page: i,
      onPageChange(c) {
        i.value = c;
      },
      pageCount: u,
      siblingCount: o,
      disabled: s,
      showEdges: r
    }), (c, d) => (v(), _(l(N), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: f(() => [
        w(c.$slots, "default", {
          page: l(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Cm = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(N), D(e, { "data-type": "ellipsis" }), {
      default: f(() => [
        w(a.$slots, "default", {}, () => [
          Z("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), $m = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Aa();
    K();
    const n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), _(l(N), D(e, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(1))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Bm = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Aa();
    K();
    const n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), _(l(N), D(e, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).pageCount.value))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
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
function km(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const Cn = "ellipsis";
function Sm(t, e, a, n) {
  const o = e, s = Math.max(t - a, 1), r = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, u = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, c = r < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - r) > 2;
    if (!u && c)
      return [...Ot(1, i), Cn, o];
    if (u && !c) {
      const d = Ot(o - i + 1, o);
      return [1, Cn, ...d];
    }
    if (u && c) {
      const d = Ot(s, r);
      return [1, Cn, ...d, Cn, o];
    }
    return Ot(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? Ot(1, o) : t <= a + 1 ? Ot(1, i) : e - t <= a ? Ot(e - i + 1, o) : Ot(s, r);
  }
}
const Hw = /* @__PURE__ */ b({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    K();
    const a = Aa(), n = C(() => km(
      Sm(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), jw = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    K();
    const a = Aa(), n = C(() => a.page.value === e.value), o = C(() => a.disabled.value);
    return (s, r) => (v(), _(l(N), D(e, {
      "data-type": "page",
      "aria-label": `Page ${s.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o.value,
      type: s.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (i) => !o.value && l(a).onPageChange(s.value))
    }), {
      default: f(() => [
        w(s.$slots, "default", {}, () => [
          Z(le(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Dm = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    K();
    const a = Aa(), n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (v(), _(l(N), D(e, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).page.value + 1))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Em = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    K();
    const a = Aa(), n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (v(), _(l(N), D(e, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (r) => !n.value && l(a).onPageChange(l(a).page.value - 1))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [vn, Pm] = pe("PopoverRoot"), Om = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o } = he(a), s = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = O(), i = O(!1);
    return Pm({
      contentId: "",
      modal: o,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (u, c) => (v(), _(l(Pa), null, {
      default: f(() => [
        w(u.$slots, "default", { open: l(s) })
      ]),
      _: 3
    }));
  }
}), Am = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = vn(), { forwardRef: n, currentElement: o } = K();
    return ce(() => {
      a.triggerElement.value = o.value;
    }), (s, r) => (v(), _(Ne(l(a).hasCustomAnchor.value ? l(N) : l(ho)), { "as-child": "" }, {
      default: f(() => [
        P(l(N), {
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
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Mm = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(dn), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iu = /* @__PURE__ */ b({
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
    const a = t, n = e, o = fe(a), { forwardRef: s } = K(), r = vn();
    return Xs(), (i, u) => (v(), _(l(mo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: f(() => [
        P(l(Da), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: u[1] || (u[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: u[2] || (u[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[3] || (u[3] = (c) => n("focusOutside", c)),
          onDismiss: u[4] || (u[4] = (c) => l(r).onOpenChange(!1))
        }, {
          default: f(() => [
            P(l(xa), D(l(o), {
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
                w(i.$slots, "default")
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
}), Tm = /* @__PURE__ */ b({
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
    const a = t, n = e, o = vn(), s = O(!1);
    ln(!0);
    const r = ue(a, n), { forwardRef: i, currentElement: u } = K();
    return un(u), (c, d) => (v(), _(iu, D(l(r), {
      ref: l(i),
      "trap-focus": l(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = $e(
        (p) => {
          var g;
          n("closeAutoFocus", p), s.value || (g = l(o).triggerElement.value) == null || g.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        n("pointerDownOutside", p);
        const g = p.detail.originalEvent, m = g.button === 0 && g.ctrlKey === !0, h = g.button === 2 || m;
        s.value = h;
      }),
      onFocusOutside: d[2] || (d[2] = $e(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Im = /* @__PURE__ */ b({
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
    const a = t, n = e, o = vn(), s = O(!1), r = O(!1), i = ue(a, n);
    return (u, c) => (v(), _(iu, D(l(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        n("closeAutoFocus", d), d.defaultPrevented || (s.value || (p = l(o).triggerElement.value) == null || p.focus(), d.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (d) => {
        var p;
        n("interactOutside", d), d.defaultPrevented || (s.value = !0, d.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const g = d.target;
        (p = l(o).triggerElement.value) != null && p.contains(g) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && r.value && d.preventDefault();
      })
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vm = /* @__PURE__ */ b({
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
    const a = t, n = e, o = vn(), s = ue(a, n), { forwardRef: r } = K();
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-popover-content")), (i, u) => (v(), _(l(Ue), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        l(o).modal.value ? (v(), _(Tm, D({ key: 0 }, l(s), { ref: l(r) }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), _(Im, D({ key: 1 }, l(s), { ref: l(r) }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Rm(t) {
  const e = C(() => t.start.value ? !!t.isDateDisabled(t.start.value) : !1), a = C(() => t.end.value ? !!t.isDateDisabled(t.end.value) : !1), n = C(
    () => e.value || a.value ? !1 : !!(t.start.value && t.end.value && Rt(t.end.value, t.start.value))
  ), o = (u) => t.start.value ? Oe(t.start.value, u) : !1, s = (u) => t.end.value ? Oe(t.end.value, u) : !1, r = (u) => t.start.value && Oe(t.start.value, u) || t.end.value && Oe(t.end.value, u) ? !0 : t.end.value && t.start.value ? wc(u, t.start.value, t.end.value) : !1, i = C(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const u = Rt(t.start.value, t.focusedValue.value), c = u ? t.start.value : t.focusedValue.value, d = u ? t.focusedValue.value : t.start.value;
    return Oe(c, d) ? {
      start: c,
      end: d
    } : $c(c, d, t.isDateUnavailable, t.isDateDisabled) ? {
      start: c,
      end: d
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: s,
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Oe(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Oe(i.value.end, u)
  };
}
const Fm = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Lm = {
  role: "heading",
  "aria-level": "2"
}, [Ma, Nm] = pe("RangeCalendarRoot"), zm = /* @__PURE__ */ b({
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
      prevPage: S
    } = he(a), { primitiveElement: I, currentElement: M } = Sa(), U = pt(B), R = O(), A = O(), T = _e(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), F = Ci({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value.start,
      locale: a.locale
    }), j = O(T.value.start), W = O(T.value.end), z = _e(a, "placeholder", n, {
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
    } = Hi({
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
      prevPage: S
    }), {
      isInvalid: re,
      isSelected: ee,
      highlightedRange: xe,
      isSelectionStart: Re,
      isSelectionEnd: Wt,
      isHighlightedStart: Kt,
      isHighlightedEnd: id
    } = Rm({
      start: j,
      end: W,
      isDateDisabled: Y,
      isDateUnavailable: oe,
      focusedValue: A
    });
    return X(T, (ge) => {
      var Ge, Fe, ko, El;
      (!ge || !ge.start || j.value && !lt(ge.start, j.value)) && (j.value = (Fe = (Ge = ge == null ? void 0 : ge.start) == null ? void 0 : Ge.copy) == null ? void 0 : Fe.call(Ge)), (!ge || !ge.end || W.value && !lt(ge.end, W.value)) && (W.value = (El = (ko = ge == null ? void 0 : ge.end) == null ? void 0 : ko.copy) == null ? void 0 : El.call(ko));
    }), X(j, (ge) => {
      ge && !lt(ge, z.value) && Q(ge), n("update:startValue", ge);
    }), X([j, W], ([ge, Ge]) => {
      const Fe = T.value;
      if (!(Fe && Fe.start && Fe.end && ge && Ge && lt(Fe.start, ge) && lt(Fe.end, Ge)))
        if (ge && Ge) {
          if (Fe.start && Fe.end && lt(Fe.start, ge) && lt(Fe.end, Ge))
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
    }), Nm({
      isDateUnavailable: oe,
      startValue: j,
      endValue: W,
      formatter: te,
      modelValue: T,
      placeholder: z,
      disabled: o,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: c,
      fixedWeeks: d,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: g,
      fullCalendarLabel: ie,
      headingValue: ye,
      isInvalid: re,
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
      dir: U,
      isHighlightedStart: Kt,
      isHighlightedEnd: id
    }), ce(() => {
      r.value && $i(M.value);
    }), (ge, Ge) => (v(), _(l(N), {
      ref_key: "primitiveElement",
      ref: I,
      as: ge.as,
      "as-child": ge.asChild,
      role: "application",
      "aria-label": l(ie),
      "data-readonly": l(s) ? "" : void 0,
      "data-disabled": l(o) ? "" : void 0,
      "data-invalid": l(re) ? "" : void 0,
      dir: l(U)
    }, {
      default: f(() => [
        me("div", Fm, [
          me("div", Lm, le(l(ie)), 1)
        ]),
        w(ge.$slots, "default", {
          date: l(z),
          grid: l(je),
          weekDays: l(Qe),
          weekStartsOn: l(u),
          locale: l(k),
          fixedWeeks: l(d)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Wm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Km = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ma();
    return (n, o) => (v(), _(l(N), D(e, {
      "data-disabled": l(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: l(a).headingValue.value
        }, () => [
          Z(le(l(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Um = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Ma(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (s, r) => (v(), _(l(N), D(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Hm = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Ma();
    return (a, n) => {
      var o, s;
      return v(), _(l(N), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": l(e).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": l(e).isDateDisabled(a.date) || ((s = (o = l(e)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": l(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), jm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ b({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Ma();
    return (o, s) => (v(), _(l(N), D(e, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).nextPage(e.step, e.nextPage))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), qm = /* @__PURE__ */ b({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Ma();
    return (o, s) => (v(), _(l(N), D(e, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (r) => l(n).prevPage(e.step, e.prevPage))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Ym = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), D(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jm = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xm = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ma(), n = Ii(), { primitiveElement: o, currentElement: s } = Sa(), r = C(() => a.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = C(() => a.isDateDisabled(e.day)), u = C(() => {
      var R;
      return (R = a.isDateUnavailable) == null ? void 0 : R.call(a, e.day);
    }), c = C(() => a.isSelected(e.day)), d = C(() => a.isSelectionStart(e.day)), p = C(() => a.isSelectionEnd(e.day)), g = C(() => a.isHighlightedStart(e.day)), m = C(() => a.isHighlightedEnd(e.day)), h = C(() => a.highlightedRange.value ? _c(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = C(() => Fr(e.day, Ct())), $ = C(() => !Ps(e.day, e.month)), k = C(
      () => a.isOutsideVisibleView(e.day)
    ), B = C(() => e.day.day.toLocaleString(a.locale.value)), E = C(() => !a.disabled.value && Oe(e.day, a.placeholder.value));
    function S(R, A) {
      var T;
      if (!a.readonly.value && !(a.isDateDisabled(A) || (T = a.isDateUnavailable) != null && T.call(a, A))) {
        if (a.lastPressedDateValue.value = A.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Oe(A, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(A);
            return;
          } else if (!a.endValue.value) {
            R.preventDefault(), a.lastPressedDateValue.value && Oe(a.lastPressedDateValue.value, A) && (a.startValue.value = A.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && Oe(a.endValue.value, A) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(A);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = A.copy()) : a.endValue.value = A.copy() : a.startValue.value = A.copy();
      }
    }
    function I(R) {
      S(R, e.day);
    }
    function M() {
      var R;
      a.isDateDisabled(e.day) || (R = a.isDateUnavailable) != null && R.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function U(R) {
      R.preventDefault(), R.stopPropagation();
      const A = a.parentElement.value, T = A ? Array.from(A.querySelectorAll(y)) : [];
      let F = T.indexOf(s.value);
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
          S(R, e.day);
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
    return (R, A) => (v(), _(l(N), D({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": r.value,
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
      onKeydown: Te(U, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        w(R.$slots, "default", { dayValue: B.value }, () => [
          Z(le(B.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), Zm = ["default-value"], eh = /* @__PURE__ */ b({
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
    return (o, s) => (v(), _(l(pn), { "as-child": "" }, {
      default: f(() => [
        Ca(me("select", D({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => zt(a) ? a.value = r : null),
          "default-value": l(a)
        }), [
          w(o.$slots, "default")
        ], 16, Zm), [
          [pd, l(a)]
        ])
      ]),
      _: 3
    }));
  }
}), th = {
  key: 0,
  value: ""
}, [ea, uu] = pe("SelectRoot"), [ah, nh] = pe("SelectRoot"), oh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = _e(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), s = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = O(), i = O(), u = O({
      x: 0,
      y: 0
    }), c = O(!1), { required: d, disabled: p, dir: g } = he(a), m = pt(g);
    uu({
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
      required: d,
      onOpenChange: ($) => {
        s.value = $;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const h = rn(r), y = O(/* @__PURE__ */ new Set()), x = C(() => Array.from(y.value).map(($) => {
      var k;
      return (k = $.props) == null ? void 0 : k.value;
    }).join(";"));
    return nh({
      onNativeOptionAdd: ($) => {
        y.value.add($);
      },
      onNativeOptionRemove: ($) => {
        y.value.delete($);
      }
    }), ($, k) => (v(), _(l(Pa), null, {
      default: f(() => [
        w($.$slots, "default", {
          modelValue: l(o),
          open: l(s)
        }),
        l(h) ? (v(), _(eh, D({ key: x.value }, $.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: l(d),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: l(p),
          value: l(o),
          onChange: k[0] || (k[0] = (B) => o.value = B.target.value)
        }), {
          default: f(() => [
            l(o) === void 0 ? (v(), L("option", th)) : se("", !0),
            (v(!0), L(ne, null, be(Array.from(y.value), (B) => (v(), _(Ne(B), D({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : se("", !0)
      ]),
      _: 3
    }));
  }
}), sh = [" ", "Enter", "ArrowUp", "ArrowDown"], lh = [" ", "Enter"], et = 10;
function du(t) {
  return t === "" || In(t);
}
const rh = /* @__PURE__ */ b({
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
    }), { forwardRef: o, currentElement: s } = K();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-select-content")), ce(() => {
      a.triggerElement = s;
    });
    const { injectCollection: r } = ka(), i = r(), { search: u, handleTypeaheadSearch: c, resetTypeahead: d } = Zs(i);
    function p() {
      n.value || (a.onOpenChange(!0), d());
    }
    function g(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, h) => (v(), _(l(ho), { "as-child": "" }, {
      default: f(() => {
        var y, x, $, k;
        return [
          P(l(N), {
            ref: l(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": l(a).contentId,
            "aria-expanded": l(a).open.value || !1,
            "aria-required": (y = l(a).required) == null ? void 0 : y.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = l(a)) == null ? void 0 : x.dir.value,
            "data-state": ($ = l(a)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": l(du)((k = l(a).modelValue) == null ? void 0 : k.value) ? "" : void 0,
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
              const E = l(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && E && B.key === " " || (l(c)(B.key), l(sh).includes(B.key) && (p(), B.preventDefault()));
            })
          }, {
            default: f(() => [
              w(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), ih = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(dn), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ml, uh] = pe("SelectItemAlignedPosition"), dh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = ka(), s = ea(), r = ta(), i = o(), u = O(!1), c = O(!0), d = O(), { forwardRef: p, currentElement: g } = K(), { viewport: m, selectedItem: h, selectedItemText: y, focusSelectedItem: x } = r;
    function $() {
      if (s.triggerElement.value && s.valueElement.value && d.value && g.value && m != null && m.value && h != null && h.value && y != null && y.value) {
        const E = s.triggerElement.value.getBoundingClientRect(), S = g.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), M = y.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const J = M.left - S.left, te = I.left - J, re = E.left - te, ee = E.width + re, xe = Math.max(ee, S.width), Re = window.innerWidth - et, Wt = qn(te, et, Math.max(et, Re - xe));
          d.value.style.minWidth = `${ee}px`, d.value.style.left = `${Wt}px`;
        } else {
          const J = S.right - M.right, te = window.innerWidth - I.right - J, re = window.innerWidth - E.right - te, ee = E.width + re, xe = Math.max(ee, S.width), Re = window.innerWidth - et, Wt = qn(
            te,
            et,
            Math.max(et, Re - xe)
          );
          d.value.style.minWidth = `${ee}px`, d.value.style.right = `${Wt}px`;
        }
        const U = i.value, R = window.innerHeight - et * 2, A = m.value.scrollHeight, T = window.getComputedStyle(g.value), F = Number.parseInt(
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
          const J = h.value === U[U.length - 1];
          d.value.style.bottom = "0px";
          const te = g.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, re = Math.max(
            Ve,
            je + (J ? oe : 0) + te + W
          ), ee = ot + re;
          d.value.style.height = `${ee}px`;
        } else {
          const J = h.value === U[0];
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
    return uh({
      contentWrapper: d,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (E, S) => (v(), L("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: ut({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      P(l(N), D({
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
          w(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), ch = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(l(xa), D(l(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ta = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [ta, ph] = pe("SelectContent"), fh = /* @__PURE__ */ b({
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
    Xs(), ln(a.bodyLock);
    const { createCollection: s } = ka(), r = O();
    un(r);
    const i = s(r), { search: u, handleTypeaheadSearch: c } = Zs(i), d = O(), p = O(), g = O(), m = O(!1), h = O(!1);
    function y() {
      p.value && r.value && is([p.value, r.value]);
    }
    X(m, () => {
      y();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: $ } = o;
    we((S) => {
      if (!r.value)
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
      }, U = (R) => {
        var A;
        R.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? R.preventDefault() : (A = r.value) != null && A.contains(R.target) || x(!1), document.removeEventListener("pointermove", M), $.value = null);
      };
      $.value !== null && (document.addEventListener("pointermove", M), document.addEventListener("pointerup", U, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", U, {
          capture: !0
        });
      });
    });
    function k(S) {
      const I = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !I && S.key.length === 1 && c(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const U = S.target, R = M.indexOf(U);
          M = M.slice(R + 1);
        }
        setTimeout(() => is(M)), S.preventDefault();
      }
    }
    const B = C(() => a.position === "popper" ? a : {}), E = fe(B.value);
    return ph({
      content: r,
      viewport: d,
      onViewportChange: (S) => {
        d.value = S;
      },
      itemRefCallback: (S, I, M) => {
        var U, R;
        const A = !h.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === I || A) && (p.value = S, A && (h.value = !0));
      },
      selectedItem: p,
      selectedItemText: g,
      onItemLeave: () => {
        var S;
        (S = r.value) == null || S.focus();
      },
      itemTextRefCallback: (S, I, M) => {
        var U, R;
        const A = !h.value && !M;
        (((U = o.modelValue) == null ? void 0 : U.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === I || A) && (g.value = S);
      },
      focusSelectedItem: y,
      position: a.position,
      isPositioned: m,
      searchRef: u
    }), (S, I) => (v(), _(l(mo), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = $e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (M) => {
        var U;
        n("closeAutoFocus", M), !M.defaultPrevented && ((U = l(o).triggerElement.value) == null || U.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: f(() => [
        P(l(Da), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = $e(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (M) => l(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: I[5] || (I[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: f(() => [
            (v(), _(Ne(
              S.position === "popper" ? ch : dh
            ), D({ ...S.$attrs, ...l(E) }, {
              id: l(o).contentId,
              ref: (M) => {
                r.value = l(Je)(M);
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
              onContextmenu: I[0] || (I[0] = $e(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (M) => m.value = !0),
              onKeydown: k
            }), {
              default: f(() => [
                w(S.$slots, "default")
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
}), vh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(t) {
    return uu(t.context), (e, a) => w(e.$slots, "default");
  }
}), mh = { key: 1 }, hh = /* @__PURE__ */ b({
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
    const a = t, n = ue(a, e), o = ea(), s = O();
    ce(() => {
      s.value = new DocumentFragment();
    });
    const r = O(), i = C(() => a.forceMount || o.open.value);
    return (u, c) => {
      var d;
      return i.value ? (v(), _(l(Ue), {
        key: 0,
        ref_key: "presenceRef",
        ref: r,
        present: !0
      }, {
        default: f(() => [
          P(fh, H(G({ ...l(n), ...u.$attrs })), {
            default: f(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = r.value) != null && d.present) && s.value ? (v(), L("div", mh, [
        (v(), _(tn, { to: s.value }, [
          P(vh, { context: l(o) }, {
            default: f(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : se("", !0);
    };
  }
}), gh = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), D({ "aria-hidden": "true" }, e), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [cu, yh] = pe("SelectItem"), bh = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { disabled: a } = he(e), n = ea(), o = ta(Ta), { forwardRef: s, currentElement: r } = K(), i = C(() => {
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
      await ae(), !(y.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && y.key === " ") && (lh.includes(y.key) && p(), y.key === " " && y.preventDefault());
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ce(() => {
      r.value && o.itemRefCallback(
        r.value,
        e.value,
        e.disabled
      );
    }), yh({
      value: e.value,
      disabled: a,
      textId: d,
      isSelected: i,
      onItemTextChange: (y) => {
        c.value = ((c.value || (y == null ? void 0 : y.textContent)) ?? "").trim();
      }
    }), (y, x) => (v(), _(l(N), {
      ref: l(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": l(d),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": l(a) || void 0,
      "data-disabled": l(a) ? "" : void 0,
      tabindex: l(a) ? void 0 : -1,
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
        w(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), _h = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = cu();
    return (n, o) => l(a).isSelected.value ? (v(), _(l(N), D({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
}), [wh, xh] = pe("SelectGroup"), Ch = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = ke(void 0, "radix-vue-select-group");
    return xh({ id: a }), (n, o) => (v(), _(l(N), D({ role: "group" }, e, { "aria-labelledby": l(a) }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), $h = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = wh({ id: "" });
    return (n, o) => (v(), _(l(N), D(e, {
      id: l(a).id
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), pu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = ea(), n = ta(Ta), o = ah(), s = cu(), { forwardRef: r, currentElement: i } = K(), u = C(() => {
      var c;
      return Ie("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return ce(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), no(() => {
      o.onNativeOptionRemove(u.value);
    }), (c, d) => (v(), L(ne, null, [
      P(l(N), D({
        id: l(s).textId,
        ref: l(r)
      }, { ...e, ...c.$attrs }, { "data-item-text": "" }), {
        default: f(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      l(s).isSelected.value && l(a).valueElement.value && !l(a).valueElementHasChildren.value ? (v(), _(tn, {
        key: 0,
        to: l(a).valueElement.value
      }, [
        w(c.$slots, "default")
      ], 8, ["to"])) : se("", !0)
    ], 64));
  }
}), Bh = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = he(e), n = Bv(a), o = ta(Ta), s = o.position === "item-aligned" ? ml() : void 0, { forwardRef: r, currentElement: i } = K();
    ce(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = O(0);
    function c(d) {
      const p = d.currentTarget, { shouldExpandOnScrollRef: g, contentWrapper: m } = s ?? {};
      if (g != null && g.value && m != null && m.value) {
        const h = Math.abs(u.value - p.scrollTop);
        if (h > 0) {
          const y = window.innerHeight - et * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), $ = Number.parseFloat(m.value.style.height), k = Math.max(x, $);
          if (k < y) {
            const B = k + h, E = Math.min(y, B), S = B - E;
            m.value.style.height = `${E}px`, m.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (d, p) => (v(), L(ne, null, [
      P(l(N), D({
        ref: l(r),
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
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(l(N), {
        as: "style",
        nonce: l(n)
      }, {
        default: f(() => [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), fu = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(t, { emit: e }) {
    const a = e, { injectCollection: n } = ka(), o = n(), s = ta(Ta), r = O(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    we(() => {
      const d = o.value.find(
        (p) => p === De()
      );
      d == null || d.scrollIntoView({ block: "nearest" });
    });
    function u() {
      r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function c() {
      var d;
      (d = s.onItemLeave) == null || d.call(s), r.value === null && (r.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return no(() => i()), (d, p) => {
      var g;
      return v(), _(l(N), D({
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
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), kh = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ta(Ta), a = e.position === "item-aligned" ? ml() : void 0, { forwardRef: n, currentElement: o } = K(), s = O(!1);
    return we((r) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let c = function() {
          s.value = d.scrollTop > 0;
        };
        const d = e.viewport.value;
        c(), d.addEventListener("scroll", c), r(() => d.removeEventListener("scroll", c));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), _(fu, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = l(e);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : se("", !0);
  }
}), Sh = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ta(Ta), a = e.position === "item-aligned" ? ml() : void 0, { forwardRef: n, currentElement: o } = K(), s = O(!1);
    return we((r) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let c = function() {
          const p = d.scrollHeight - d.clientHeight;
          s.value = Math.ceil(d.scrollTop) < p;
        };
        const d = e.viewport.value;
        c(), d.addEventListener("scroll", c), r(() => d.removeEventListener("scroll", c));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (r, i) => s.value ? (v(), _(fu, {
      key: 0,
      ref: l(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = l(e);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : se("", !0);
  }
}), Dh = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = K(), n = ea(), o = Pr();
    return dd(() => {
      var s;
      const r = !!po((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(r);
    }), ce(() => {
      n.valueElement = a;
    }), (s, r) => (v(), _(l(N), {
      ref: l(e),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          l(du)((i = l(n).modelValue) == null ? void 0 : i.value) ? (v(), L(ne, { key: 0 }, [
            Z(le(s.placeholder), 1)
          ], 64)) : w(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Eh = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (v(), _(l(N), {
      "aria-hidden": "true",
      as: e.as,
      "as-child": e.asChild
    }, {
      default: f(() => [
        w(e.$slots, "default", {}, () => [
          Z("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ph = /* @__PURE__ */ b({
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
    ), s = C(
      () => o.value === "vertical" ? e.orientation : void 0
    ), r = C(
      () => e.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (v(), _(l(N), D({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, r.value), {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Oh = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(Ph, H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ah(t = [], e, a) {
  const n = [...t];
  return n[a] = e, n.sort((o, s) => o - s);
}
function vu(t, e, a) {
  const n = 100 / (a - e) * (t - e);
  return qn(n, 0, 100);
}
function Mh(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function Th(t, e) {
  if (t.length === 1)
    return 0;
  const a = t.map((o) => Math.abs(o - e)), n = Math.min(...a);
  return a.indexOf(n);
}
function Ih(t, e, a) {
  const n = t / 2, o = hl([0, 50], [0, n]);
  return (n - o(e) * a) * a;
}
function Vh(t) {
  return t.slice(0, -1).map((e, a) => t[a + 1] - e);
}
function Rh(t, e) {
  if (e > 0) {
    const a = Vh(t);
    return Math.min(...a) >= e;
  }
  return !0;
}
function hl(t, e) {
  return (a) => {
    if (t[0] === t[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (a - t[0]);
  };
}
function Fh(t) {
  return (String(t).split(".")[1] || "").length;
}
function Lh(t, e) {
  const a = 10 ** e;
  return Math.round(t * a) / a;
}
const mu = ["PageUp", "PageDown"], hu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], gu = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [yu, bu] = pe(["SliderVertical", "SliderHorizontal"]), _u = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = yo();
    return (s, r) => (v(), _(l(N), D({ "data-slider-impl": "" }, a, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : l(mu).concat(l(hu)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: r[1] || (r[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), l(o).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: r[2] || (r[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: r[3] || (r[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nh = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: s, dir: r, inverted: i } = he(a), { forwardRef: u, currentElement: c } = K(), d = O(), p = C(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function g(m) {
      const h = d.value || c.value.getBoundingClientRect(), y = [0, h.width], x = p.value ? [s.value, o.value] : [o.value, s.value], $ = hl(y, x);
      return d.value = h, $(m - h.left);
    }
    return bu({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, h) => (v(), _(_u, {
      ref: l(u),
      dir: l(r),
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
        const x = p.value ? "from-left" : "from-right", $ = l(gu)[x].includes(y.key);
        n("stepKeyDown", y, $ ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (y) => n("endKeyDown", y)),
      onHomeKeyDown: h[5] || (h[5] = (y) => n("homeKeyDown", y))
    }, {
      default: f(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), zh = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: s, inverted: r } = he(a), { forwardRef: i, currentElement: u } = K(), c = O(), d = C(() => !r.value);
    function p(g) {
      const m = c.value || u.value.getBoundingClientRect(), h = [0, m.height], y = d.value ? [o.value, s.value] : [s.value, o.value], x = hl(h, y);
      return c.value = m, x(g - m.top);
    }
    return bu({
      startEdge: d.value ? "bottom" : "top",
      endEdge: d.value ? "top" : "bottom",
      size: "height",
      direction: d.value ? 1 : -1
    }), (g, m) => (v(), _(_u, {
      ref: l(i),
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
        const y = d.value ? "from-bottom" : "from-top", x = l(gu)[y].includes(h.key);
        n("stepKeyDown", h, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: m[5] || (m[5] = (h) => n("homeKeyDown", h))
    }, {
      default: f(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Wh = ["value", "name", "disabled", "step"], [yo, Kh] = pe("SliderRoot"), Uh = /* @__PURE__ */ b({
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
    const a = t, n = e, { min: o, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: c, dir: d } = he(a), p = pt(d), { forwardRef: g, currentElement: m } = K(), h = rn(m);
    ul();
    const y = _e(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = O(0), $ = O(y.value);
    function k(M) {
      const U = Th(y.value, M);
      S(M, U);
    }
    function B(M) {
      S(M, x.value);
    }
    function E() {
      const M = $.value[x.value];
      y.value[x.value] !== M && n("valueCommit", md(y.value));
    }
    function S(M, U, { commit: R } = { commit: !1 }) {
      var A;
      const T = Fh(r.value), F = Lh(Math.round((M - o.value) / r.value) * r.value + o.value, T), j = qn(F, o.value, s.value), W = Ah(y.value, j, U);
      if (Rh(W, i.value * r.value)) {
        x.value = W.indexOf(j);
        const z = String(W) !== String(y.value);
        z && R && n("valueCommit", W), z && ((A = I.value[x.value]) == null || A.focus(), y.value = W);
      }
    }
    const I = O([]);
    return Kh({
      modelValue: y,
      valueIndexToChangeRef: x,
      thumbElements: I,
      orientation: u,
      min: o,
      max: s,
      disabled: c
    }), (M, U) => (v(), L(ne, null, [
      P(l(dl), null, {
        default: f(() => [
          (v(), _(Ne(l(u) === "horizontal" ? Nh : zh), D(M.$attrs, {
            ref: l(g),
            "as-child": M.asChild,
            as: M.as,
            min: l(o),
            max: l(s),
            dir: l(p),
            inverted: M.inverted,
            "aria-disabled": l(c),
            "data-disabled": l(c) ? "" : void 0,
            onPointerdown: U[0] || (U[0] = () => {
              l(c) || ($.value = l(y));
            }),
            onSlideStart: U[1] || (U[1] = (R) => !l(c) && k(R)),
            onSlideMove: U[2] || (U[2] = (R) => !l(c) && B(R)),
            onSlideEnd: U[3] || (U[3] = (R) => !l(c) && E()),
            onHomeKeyDown: U[4] || (U[4] = (R) => !l(c) && S(l(o), 0, { commit: !0 })),
            onEndKeyDown: U[5] || (U[5] = (R) => !l(c) && S(l(s), l(y).length - 1, { commit: !0 })),
            onStepKeyDown: U[6] || (U[6] = (R, A) => {
              if (!l(c)) {
                const T = l(mu).includes(R.key) || R.shiftKey && l(hu).includes(R.key) ? 10 : 1, F = x.value, j = l(y)[F], W = l(r) * T * A;
                S(j + W, F, { commit: !0 });
              }
            })
          }), {
            default: f(() => [
              w(M.$slots, "default", { modelValue: l(y) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      l(h) ? (v(!0), L(ne, { key: 0 }, be(l(y), (R, A) => (v(), L("input", {
        key: A,
        value: R,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (l(y).length > 1 ? "[]" : "") : void 0,
        disabled: l(c),
        step: l(r)
      }, null, 8, Wh))), 128)) : se("", !0)
    ], 64));
  }
}), Hh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = yo(), n = yu(), { forwardRef: o, currentElement: s } = K(), r = C(() => {
      var m, h;
      return (h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h[e.index];
    }), i = C(() => r.value === void 0 ? 0 : vu(r.value, a.min.value ?? 0, a.max.value ?? 100)), u = C(() => {
      var m, h;
      return Mh(e.index, ((h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h.length) ?? 0);
    }), c = Ti(s), d = C(() => c[n.size].value), p = C(() => d.value ? Ih(d.value, i.value, n.direction) : 0), g = Qs();
    return ce(() => {
      a.thumbElements.value.push(s.value);
    }), ze(() => {
      const m = a.thumbElements.value.findIndex((h) => h === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, h) => (v(), _(l(go), null, {
      default: f(() => [
        P(l(N), D(m.$attrs, {
          ref: l(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: l(a).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
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
            display: !l(g) && r.value === void 0 ? "none" : void 0
          },
          onFocus: h[0] || (h[0] = () => {
            l(a).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: f(() => [
            w(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), jh = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = cl(), { forwardRef: n, currentElement: o } = K(), s = C(() => o.value ? a().findIndex((r) => r.ref === o.value) : -1);
    return (r, i) => (v(), _(Hh, D({ ref: l(n) }, e, { index: s.value }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Gh = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = yo();
    return K(), (a, n) => (v(), _(l(N), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": l(e).disabled.value ? "" : void 0,
      "data-orientation": l(e).orientation.value
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), qh = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = yo(), a = yu();
    K();
    const n = C(() => {
      var r, i;
      return (i = (r = e.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => vu(u, e.min.value, e.max.value)
      );
    }), o = C(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = C(() => 100 - Math.max(...n.value));
    return (r, i) => (v(), _(l(N), {
      "data-disabled": l(e).disabled.value ? "" : void 0,
      "data-orientation": l(e).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: ut({
        [l(a).startEdge]: `${o.value}%`,
        [l(a).endEdge]: `${s.value}%`
      })
    }, {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function Yh() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Yh();
const Jh = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Qh, Xh] = pe("SwitchRoot"), Zh = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = he(a), s = _e(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function r() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = K(), c = rn(u), d = C(() => {
      var p;
      return a.id && u.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Xh({
      checked: s,
      toggleCheck: r,
      disabled: o
    }), (p, g) => (v(), L(ne, null, [
      P(l(N), D(p.$attrs, {
        id: p.id,
        ref: l(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "aria-checked": l(s),
        "aria-required": p.required,
        "data-state": l(s) ? "checked" : "unchecked",
        "data-disabled": l(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: l(o),
        onClick: r,
        onKeydown: Te($e(r, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          w(p.$slots, "default", { checked: l(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (v(), L("input", {
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
      }, null, 8, Jh)) : se("", !0)
    ], 64));
  }
}), eg = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Qh();
    return K(), (a, n) => {
      var o;
      return v(), _(l(N), {
        "data-state": (o = l(e).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": l(e).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: f(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [gl, tg] = pe("TabsRoot"), ag = /* @__PURE__ */ b({
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
    const a = t, n = e, { orientation: o, dir: s } = he(a), r = pt(s);
    K();
    const i = _e(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), u = O();
    return tg({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: r,
      activationMode: a.activationMode,
      baseId: ke(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (c, d) => (v(), _(l(N), {
      dir: l(r),
      "data-orientation": l(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: f(() => [
        w(c.$slots, "default", { modelValue: l(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), ng = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { loop: a } = he(e), { forwardRef: n, currentElement: o } = K(), s = gl();
    return s.tabsList = o, (r, i) => (v(), _(l(eu), {
      "as-child": "",
      orientation: l(s).orientation.value,
      dir: l(s).dir.value,
      loop: l(a)
    }, {
      default: f(() => [
        P(l(N), {
          ref: l(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": l(s).orientation.value
        }, {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function wu(t, e) {
  return `${t}-trigger-${e}`;
}
function xu(t, e) {
  return `${t}-content-${e}`;
}
const og = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = K(), n = gl(), o = C(() => wu(n.baseId, e.value)), s = C(() => xu(n.baseId, e.value)), r = C(() => e.value === n.modelValue.value), i = O(r.value);
    return ce(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, c) => (v(), _(l(Ue), {
      present: r.value,
      "force-mount": ""
    }, {
      default: f(({ present: d }) => [
        P(l(N), {
          id: s.value,
          ref: l(a),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": l(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !d.value,
          tabindex: "0",
          style: ut({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            u.forceMount || r.value ? w(u.$slots, "default", { key: 0 }) : se("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), sg = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a } = K(), n = gl(), o = C(() => wu(n.baseId, e.value)), s = C(() => xu(n.baseId, e.value)), r = C(() => e.value === n.modelValue.value);
    return (i, u) => (v(), _(l(Wv), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: f(() => [
        P(l(N), {
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
          onMousedown: u[0] || (u[0] = $e((c) => {
            !i.disabled && c.ctrlKey === !1 ? l(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Te((c) => l(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const c = l(n).activationMode !== "manual";
            !r.value && !i.disabled && c && l(n).changeModelValue(i.value);
          })
        }, {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [bo, lg] = pe("ToastProvider"), rg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = he(e), r = O(), i = O(0), u = O(!1), c = O(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const d = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(d);
    }
    return lg({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(d) {
        r.value = d;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: c
    }), (d, p) => w(d.$slots, "default");
  }
}), ig = "toast.swipeStart", ug = "toast.swipeMove", dg = "toast.swipeCancel", cg = "toast.swipeEnd", ds = "toast.viewportPause", cs = "toast.viewportResume";
function $n(t, e, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function cr(t, e, a = 0) {
  const n = Math.abs(t.x), o = Math.abs(t.y), s = n > o;
  return e === "left" || e === "right" ? s && n > a : !s && o > a;
}
function pg(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function Cu(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && e.push(a.textContent), pg(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const s = a.dataset.radixToastAnnounceAlt;
          s && e.push(s);
        } else
          e.push(...Cu(a));
    }
  }), e;
}
const fg = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(t) {
    const e = bo(), a = xp(1e3), n = O(!1);
    return Di(() => {
      n.value = !0;
    }), (o, s) => l(a) || n.value ? (v(), _(l(pn), { key: 0 }, {
      default: f(() => [
        Z(le(l(e).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : se("", !0);
  }
}), [vg, mg] = pe("ToastRoot"), hg = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o, currentElement: s } = K(), r = bo(), i = O(null), u = O(null), c = C(
      () => typeof a.duration == "number" ? a.duration : r.duration.value
    ), d = O(0), p = O(c.value), g = O(0), m = O(c.value), h = Di(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - d.value;
      m.value = Math.max(p.value - k, 0);
    }, { fpsLimit: 60 });
    function y(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || ct && (window.clearTimeout(g.value), d.value = (/* @__PURE__ */ new Date()).getTime(), g.value = window.setTimeout(x, k));
    }
    function x() {
      var k, B;
      (k = s.value) != null && k.contains(De()) && ((B = r.viewport.value) == null || B.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const $ = C(() => s.value ? Cu(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return we((k) => {
      const B = r.viewport.value;
      if (B) {
        const E = () => {
          y(p.value), h.resume(), n("resume");
        }, S = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - d.value;
          p.value = p.value - I, window.clearTimeout(g.value), h.pause(), n("pause");
        };
        return B.addEventListener(ds, S), B.addEventListener(cs, E), () => {
          B.removeEventListener(ds, S), B.removeEventListener(cs, E);
        };
      }
    }), X(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !r.isClosePausedRef.value && y(c.value);
    }, { immediate: !0 }), Js("Escape", (k) => {
      n("escapeKeyDown", k), k.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ce(() => {
      r.onToastAdd();
    }), ze(() => {
      r.onToastRemove();
    }), mg({ onClose: x }), (k, B) => (v(), L(ne, null, [
      $.value ? (v(), _(fg, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: f(() => [
          Z(le($.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : se("", !0),
      l(r).viewport.value ? (v(), _(tn, {
        key: 1,
        to: l(r).viewport.value
      }, [
        P(l(N), D({
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
          "data-swipe-direction": l(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = $e((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (E) => {
            if (!i.value) return;
            const S = E.clientX - i.value.x, I = E.clientY - i.value.y, M = !!u.value, U = ["left", "right"].includes(l(r).swipeDirection.value), R = ["left", "up"].includes(l(r).swipeDirection.value) ? Math.min : Math.max, A = U ? R(0, S) : 0, T = U ? 0 : R(0, I), F = E.pointerType === "touch" ? 10 : 2, j = { x: A, y: T }, W = { originalEvent: E, delta: j };
            M ? (u.value = j, l($n)(l(ug), (z) => n("swipeMove", z), W)) : l(cr)(j, l(r).swipeDirection.value, F) ? (u.value = j, l($n)(l(ig), (z) => n("swipeStart", z), W), E.target.setPointerCapture(E.pointerId)) : (Math.abs(S) > F || Math.abs(I) > F) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (E) => {
            const S = u.value, I = E.target;
            if (I.hasPointerCapture(E.pointerId) && I.releasePointerCapture(E.pointerId), u.value = null, i.value = null, S) {
              const M = E.currentTarget, U = { originalEvent: E, delta: S };
              l(cr)(S, l(r).swipeDirection.value, l(r).swipeThreshold.value) ? l($n)(l(cg), (R) => n("swipeEnd", R), U) : l($n)(l(dg), (R) => n("swipeCancel", R), U), M == null || M.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            w(k.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : se("", !0)
    ], 64));
  }
}), gg = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o } = K(), s = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (r, i) => (v(), _(l(Ue), {
      present: r.forceMount || l(s)
    }, {
      default: f(() => [
        P(hg, D({
          ref: l(o),
          open: l(s),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = !1),
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
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), s.value = !1;
          })
        }), {
          default: f(({ remaining: u, duration: c }) => [
            w(r.$slots, "default", {
              remaining: u,
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
}), $u = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    return (e, a) => (v(), _(l(N), {
      as: e.as,
      "as-child": e.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": e.altText || void 0
    }, {
      default: f(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Bu = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = vg(), { forwardRef: n } = K();
    return (o, s) => (v(), _($u, { "as-child": "" }, {
      default: f(() => [
        P(l(N), D(e, {
          ref: l(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => l(a).onClose())
        }), {
          default: f(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), yg = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    if (!t.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = K();
    return (a, n) => a.altText ? (v(), _($u, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        P(Bu, {
          ref: l(e),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: f(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : se("", !0);
  }
}), pr = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(t, { emit: e }) {
    const a = e, n = bo();
    return (o, s) => (v(), _(l(pn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var i;
        const u = r.relatedTarget;
        !((i = l(n).viewport.value) != null && i.contains(u)) && a("focusFromOutsideViewport");
      })
    }, {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), bg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(t) {
    const e = t, { hotkey: a, label: n } = he(e), { forwardRef: o, currentElement: s } = K(), { createCollection: r } = ka(), i = r(s), u = bo(), c = C(() => u.toastCount.value > 0), d = O(), p = O(), g = C(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Js(a.value, () => {
      s.value.focus();
    }), ce(() => {
      u.onViewportChange(s.value);
    }), we((h) => {
      const y = s.value;
      if (c.value && y) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const S = new CustomEvent(ds);
            y.dispatchEvent(S), u.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (u.isClosePausedRef.value) {
            const S = new CustomEvent(cs);
            y.dispatchEvent(S), u.isClosePausedRef.value = !1;
          }
        }, k = (S) => {
          !y.contains(S.relatedTarget) && $();
        }, B = () => {
          y.contains(De()) || $();
        }, E = (S) => {
          var I, M, U;
          const R = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !R) {
            const A = De(), T = S.shiftKey;
            if (S.target === y && T) {
              (I = d.value) == null || I.focus();
              return;
            }
            const F = m({ tabbingDirection: T ? "backwards" : "forwards" }), j = F.findIndex((W) => W === A);
            Vn(F.slice(j + 1)) ? S.preventDefault() : T ? (M = d.value) == null || M.focus() : (U = p.value) == null || U.focus();
          }
        };
        y.addEventListener("focusin", x), y.addEventListener("focusout", k), y.addEventListener("pointermove", x), y.addEventListener("pointerleave", B), y.addEventListener("keydown", E), window.addEventListener("blur", x), window.addEventListener("focus", $), h(() => {
          y.removeEventListener("focusin", x), y.removeEventListener("focusout", k), y.removeEventListener("pointermove", x), y.removeEventListener("pointerleave", B), y.removeEventListener("keydown", E), window.removeEventListener("blur", x), window.removeEventListener("focus", $);
        });
      }
    });
    function m({ tabbingDirection: h }) {
      const y = i.value.map((x) => {
        const $ = [x, ...nl(x)];
        return h === "forwards" ? $ : $.reverse();
      });
      return (h === "forwards" ? y.reverse() : y).flat();
    }
    return (h, y) => (v(), _(l(yf), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", g.value) : l(n)(g.value),
      tabindex: "-1",
      style: ut({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        c.value ? (v(), _(pr, {
          key: 0,
          ref: (x) => {
            d.value = l(Je)(x);
          },
          onFocusFromOutsideViewport: y[0] || (y[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            l(Vn)(x);
          })
        }, null, 512)) : se("", !0),
        P(l(N), D({
          ref: l(o),
          tabindex: "-1",
          as: h.as,
          "as-child": h.asChild
        }, h.$attrs), {
          default: f(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (v(), _(pr, {
          key: 1,
          ref: (x) => {
            p.value = l(Je)(x);
          },
          onFocusFromOutsideViewport: y[1] || (y[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            l(Vn)(x);
          })
        }, null, 512)) : se("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), _g = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wg = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return K(), (a, n) => (v(), _(l(N), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ku = "tooltip.open", [yl, xg] = pe("TooltipProvider"), Su = /* @__PURE__ */ b({
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
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = he(e);
    K();
    const u = O(!0), c = O(!1), { start: d, stop: p } = Ys(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return xg({
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
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (g, m) => w(g.$slots, "default");
  }
}), [_o, Cg] = pe("TooltipRoot"), $g = /* @__PURE__ */ b({
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
    K();
    const o = yl(), s = C(() => a.disableHoverableContent ?? o.disableHoverableContent.value), r = C(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = C(() => a.disabled ?? o.disabled.value), u = C(() => a.delayDuration ?? o.delayDuration.value), c = C(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), d = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    X(d, (B) => {
      o.onClose && (B ? (o.onOpen(), document.dispatchEvent(new CustomEvent(ku))) : o.onClose());
    });
    const p = O(!1), g = O(), m = C(() => d.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: y } = Ys(() => {
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
    return Cg({
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
        s.value ? $() : y();
      },
      onOpen: x,
      onClose: $,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: c
    }), (B, E) => (v(), _(l(Pa), null, {
      default: f(() => [
        w(B.$slots, "default", { open: l(d) })
      ]),
      _: 3
    }));
  }
}), Bg = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = _o(), n = yl();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = K(), r = O(!1), i = O(!1), u = C(() => a.disabled.value ? {} : {
      click: y,
      focus: m,
      pointermove: p,
      pointerleave: g,
      pointerdown: d,
      blur: h
    });
    ce(() => {
      a.onTriggerChange(s.value);
    });
    function c() {
      setTimeout(() => {
        r.value = !1;
      }, 1);
    }
    function d() {
      r.value = !0, document.addEventListener("pointerup", c, { once: !0 });
    }
    function p(x) {
      x.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (a.onTriggerEnter(), i.value = !0);
    }
    function g() {
      a.onTriggerLeave(), i.value = !1;
    }
    function m(x) {
      var $, k;
      r.value || a.ignoreNonKeyboardFocus.value && !((k = ($ = x.target).matches) != null && k.call($, ":focus-visible")) || a.onOpen();
    }
    function h() {
      a.onClose();
    }
    function y() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, $) => (v(), _(l(ho), { "as-child": "" }, {
      default: f(() => [
        P(l(N), D({
          ref: l(o),
          "aria-describedby": l(a).open.value ? l(a).contentId : void 0,
          "data-state": l(a).stateAttribute.value,
          as: x.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, cd(u.value)), {
          default: f(() => [
            w(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Du = /* @__PURE__ */ b({
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
    const a = t, n = e, o = _o(), { forwardRef: s } = K(), r = Pr(), i = C(() => {
      var d;
      return (d = r.default) == null ? void 0 : d.call(r);
    }), u = C(() => {
      var d;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function g(m) {
        typeof m.children == "string" && m.type !== Bs ? p += m.children : Array.isArray(m.children) && m.children.forEach((h) => g(h));
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
      }), wa(window, ku, o.onClose);
    }), (d, p) => (v(), _(l(Da), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (g) => n("escapeKeyDown", g)),
      onPointerDownOutside: p[1] || (p[1] = (g) => {
        var m;
        l(o).disableClosingTrigger.value && (m = l(o).trigger.value) != null && m.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
      }),
      onFocusOutside: p[2] || (p[2] = $e(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (g) => l(o).onClose())
    }, {
      default: f(() => [
        P(l(xa), D({
          ref: l(s),
          "data-state": l(o).stateAttribute.value
        }, { ...d.$attrs, ...c.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: f(() => [
            w(d.$slots, "default"),
            P(l(pn), {
              id: l(o).contentId,
              role: "tooltip"
            }, {
              default: f(() => [
                Z(le(u.value), 1)
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
}), kg = /* @__PURE__ */ b({
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
    const e = fe(t), { forwardRef: a, currentElement: n } = K(), { trigger: o, onClose: s } = _o(), r = yl(), { isPointerInTransit: i, onPointerExit: u } = Ip(o, n);
    return r.isPointerInTransitRef = i, u(() => {
      s();
    }), (c, d) => (v(), _(Du, D({ ref: l(a) }, l(e)), {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sg = /* @__PURE__ */ b({
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
    const a = t, n = e, o = _o(), s = ue(a, n), { forwardRef: r } = K();
    return (i, u) => (v(), _(l(Ue), {
      present: i.forceMount || l(o).open.value
    }, {
      default: f(() => [
        (v(), _(Ne(l(o).disableHoverableContent.value ? Du : kg), D({ ref: l(r) }, l(s)), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Dg = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(dn), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gw = /* @__PURE__ */ b({
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
    return (s, r) => (v(), _(l(lf), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Eu(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = Eu(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Pu() {
  for (var t, e, a = 0, n = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = Eu(t)) && (n && (n += " "), n += e);
  return n;
}
const bl = "-", Eg = (t) => {
  const e = Og(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (r) => {
      const i = r.split(bl);
      return i[0] === "" && i.length !== 1 && i.shift(), Ou(i, e) || Pg(r);
    },
    getConflictingClassGroupIds: (r, i) => {
      const u = a[r] || [];
      return i && n[r] ? [...u, ...n[r]] : u;
    }
  };
}, Ou = (t, e) => {
  var r;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? Ou(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const s = t.join(bl);
  return (r = e.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : r.classGroupId;
}, fr = /^\[(.+)\]$/, Pg = (t) => {
  if (fr.test(t)) {
    const e = fr.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Og = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Mg(Object.entries(t.classGroups), a).forEach(([s, r]) => {
    ps(r, n, s, e);
  }), n;
}, ps = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? e : vr(e, o);
      s.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Ag(o)) {
        ps(o(n), e, a, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([s, r]) => {
      ps(r, vr(e, s), a, n);
    });
  });
}, vr = (t, e) => {
  let a = t;
  return e.split(bl).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Ag = (t) => t.isThemeGetter, Mg = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([r, i]) => [e + r, i])) : s);
  return [a, o];
}) : t, Tg = (t) => {
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
}, Au = "!", Ig = (t) => {
  const {
    separator: e,
    experimentalParseClassName: a
  } = t, n = e.length === 1, o = e[0], s = e.length, r = (i) => {
    const u = [];
    let c = 0, d = 0, p;
    for (let x = 0; x < i.length; x++) {
      let $ = i[x];
      if (c === 0) {
        if ($ === o && (n || i.slice(x, x + s) === e)) {
          u.push(i.slice(d, x)), d = x + s;
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
    parseClassName: r
  }) : r;
}, Vg = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...a.sort(), n), a = []) : a.push(n);
  }), e.push(...a.sort()), e;
}, Rg = (t) => ({
  cache: Tg(t.cacheSize),
  parseClassName: Ig(t),
  ...Eg(t)
}), Fg = /\s+/, Lg = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, s = [], r = t.trim().split(Fg);
  let i = "";
  for (let u = r.length - 1; u >= 0; u -= 1) {
    const c = r[u], {
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
    const x = Vg(d).join(":"), $ = p ? x + Au : x, k = $ + y;
    if (s.includes(k))
      continue;
    s.push(k);
    const B = o(y, h);
    for (let E = 0; E < B.length; ++E) {
      const S = B[E];
      s.push($ + S);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ng() {
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
function zg(t, ...e) {
  let a, n, o, s = r;
  function r(u) {
    const c = e.reduce((d, p) => p(d), t());
    return a = Rg(c), n = a.cache.get, o = a.cache.set, s = i, i(u);
  }
  function i(u) {
    const c = n(u);
    if (c)
      return c;
    const d = Lg(u, a);
    return o(u, d), d;
  }
  return function() {
    return s(Ng.apply(null, arguments));
  };
}
const Ce = (t) => {
  const e = (a) => a[t] || [];
  return e.isThemeGetter = !0, e;
}, Tu = /^\[(?:([a-z-]+):)?(.+)\]$/i, Wg = /^\d+\/\d+$/, Kg = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ug = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vt = (t) => ma(t) || Kg.has(t) || Wg.test(t), At = (t) => Ia(t, "length", ay), ma = (t) => !!t && !Number.isNaN(Number(t)), No = (t) => Ia(t, "number", ma), za = (t) => !!t && Number.isInteger(Number(t)), Yg = (t) => t.endsWith("%") && ma(t.slice(0, -1)), de = (t) => Tu.test(t), Mt = (t) => Ug.test(t), Jg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Qg = (t) => Ia(t, Jg, Iu), Xg = (t) => Ia(t, "position", Iu), Zg = /* @__PURE__ */ new Set(["image", "url"]), ey = (t) => Ia(t, Zg, oy), ty = (t) => Ia(t, "", ny), Wa = () => !0, Ia = (t, e, a) => {
  const n = Tu.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, ay = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hg.test(t) && !jg.test(t)
), Iu = () => !1, ny = (t) => Gg.test(t), oy = (t) => qg.test(t), sy = () => {
  const t = Ce("colors"), e = Ce("spacing"), a = Ce("blur"), n = Ce("brightness"), o = Ce("borderColor"), s = Ce("borderRadius"), r = Ce("borderSpacing"), i = Ce("borderWidth"), u = Ce("contrast"), c = Ce("grayscale"), d = Ce("hueRotate"), p = Ce("invert"), g = Ce("gap"), m = Ce("gradientColorStops"), h = Ce("gradientColorStopPositions"), y = Ce("inset"), x = Ce("margin"), $ = Ce("opacity"), k = Ce("padding"), B = Ce("saturate"), E = Ce("scale"), S = Ce("sepia"), I = Ce("skew"), M = Ce("space"), U = Ce("translate"), R = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", de, e], F = () => [de, e], j = () => ["", vt, At], W = () => ["auto", ma, de], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Q = () => ["solid", "dashed", "dotted", "double", "none"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", de], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ve = () => [ma, de];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Wa],
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
      gradientColorStopPositions: [Yg, At],
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
        z: ["auto", za, de]
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
        order: ["first", "last", "none", za, de]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Wa]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", za, de]
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
        "grid-rows": [Wa]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [za, de]
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
        font: [Wa]
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
        "line-clamp": ["none", ma, No]
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
        bg: [...z(), Xg]
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
        bg: ["auto", "cover", "contain", Qg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ey]
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
        shadow: ["", "inner", "none", Mt, ty]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Wa]
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
        rotate: [za, de]
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
}, ly = /* @__PURE__ */ zg(sy);
function V(...t) {
  return ly(Pu(t));
}
const qw = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(df), D(a.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: f(() => [
        me("div", {
          class: q(l(V)("pb-4 pt-0", e.class))
        }, [
          w(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Yw = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(uf), D(l(n), {
      class: l(V)("border-accordion-border border-b", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
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
const ry = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bn = {
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
const iy = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: r, ...i }, { slots: u }) => Ie(
  "svg",
  {
    ...Bn,
    width: t || Bn.width,
    height: t || Bn.height,
    stroke: n || Bn.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${ry(s ?? "icon")}`],
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
const Ae = (t, e) => (a, { slots: n }) => Ie(
  iy,
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
const uy = Ae("CalendarIcon", [
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
const _l = Ae("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = Ae("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = Ae("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = Ae("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = Ae("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = Ae("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = Ae("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = Ae("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vu = Ae("EllipsisIcon", [
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
const my = Ae("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = Ae("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = Ae("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = Ae("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = Ae("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = Ae("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = Ae("SunIcon", [
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
const wo = Ae("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Jw = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(cf), { class: "flex" }, {
      default: f(() => [
        P(l(pf), D(a.value, {
          class: l(V)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: f(() => [
            w(n.$slots, "default"),
            w(n.$slots, "icon", {}, () => [
              P(l(wl), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), mr = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, hr = Pu, Va = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return hr(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = e, r = Object.keys(o).map((c) => {
    const d = a == null ? void 0 : a[c], p = s == null ? void 0 : s[c];
    if (d === null) return null;
    const g = mr(d) || mr(p);
    return o[c][g];
  }), i = a && Object.entries(a).reduce((c, d) => {
    let [p, g] = d;
    return g === void 0 || (c[p] = g), c;
  }, {}), u = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: p, className: g, ...m } = d;
    return Object.entries(m).every((h) => {
      let [y, x] = h;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...i
      }[y]) : {
        ...s,
        ...i
      }[y] === x;
    }) ? [
      ...c,
      p,
      g
    ] : c;
  }, []);
  return hr(t, r, u, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Qw = /* @__PURE__ */ b({
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
      class: q(l(V)(l(xy)({ variant: a.variant, type: a.type, size: a.size }), e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), xy = Va(
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
), Xw = /* @__PURE__ */ b({
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
      w(a.$slots, "default")
    ], 2));
  }
}), Zw = /* @__PURE__ */ b({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: q(l(V)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        P(l(Vu), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = me("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), e1 = /* @__PURE__ */ b({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("li", {
      class: q(l(V)("inline-flex items-center gap-1.5", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), t1 = /* @__PURE__ */ b({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), {
      as: a.as,
      "as-child": a.asChild,
      class: q(l(V)("hover:text-foreground transition-colors", e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), a1 = /* @__PURE__ */ b({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("ol", {
      class: q(
        l(V)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), n1 = /* @__PURE__ */ b({
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
      class: q(l(V)("text-foreground font-normal", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), o1 = /* @__PURE__ */ b({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: q(l(V)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        P(l(xl))
      ])
    ], 2));
  }
}), St = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(l(N), {
      as: a.as,
      "as-child": a.asChild,
      class: q(l(V)(l(aa)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default"),
        a.loading ? (v(), _(l(my), {
          key: 0,
          class: q(l(Cy)({ size: a.size }))
        }, null, 8, ["class"])) : se("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Cy = Va("animate-spin", {
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
}), aa = Va(
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
), s1 = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(
        l(V)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), l1 = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(l(V)("flex flex-col gap-y-1.5 p-6", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), r1 = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("h3", {
      class: q(l(V)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), i1 = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("p", {
      class: q(l(V)("text-muted-foreground text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), u1 = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(l(V)("p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), d1 = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(l(V)("flex items-center p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
});
function Cl(t) {
  return t ? t.flatMap((e) => e.type === ne ? Cl(e.children) : [e]) : [];
}
const fs = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var u;
      if (!a.default)
        return null;
      const n = Cl(a.default()), o = n.findIndex((c) => c.type !== Bs);
      if (o === -1)
        return n;
      const s = n[o];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? D(e, s.props) : e, i = Mr({ ...s, props: {} }, r);
      return n.length === 1 ? i : (n[o] = i, n);
    };
  }
}), $y = ["area", "img", "input"], Ee = b({
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
    return typeof n == "string" && $y.includes(n) ? () => Ie(n, e) : n !== "template" ? () => Ie(t.as, e, { default: a.default }) : () => Ie(fs, e, { default: a.default });
  }
}), By = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (v(), _(l(Ee), {
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
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function ky(t, e) {
  var a;
  const n = _t();
  return we(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), $a(n);
}
function xo(t) {
  return eo() ? (to(t), !0) : !1;
}
function Rn() {
  const t = /* @__PURE__ */ new Set(), e = (s) => {
    t.delete(s);
  };
  return {
    on: (s) => {
      t.add(s);
      const r = () => e(s);
      return xo(r), {
        off: r
      };
    },
    off: e,
    trigger: (...s) => Promise.all(Array.from(t).map((r) => r(...s))),
    clear: () => {
      t.clear();
    }
  };
}
function Sy(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (e += 1, n || (n = Es(!0), a = n.run(() => t(...s))), xo(o), a);
}
const Ra = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Dy = (t) => typeof t < "u", Ey = Object.prototype.toString, Py = (t) => Ey.call(t) === "[object Object]", gr = /* @__PURE__ */ Oy();
function Oy() {
  var t, e;
  return Ra && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ay(t) {
  return Pe();
}
function zo(t) {
  return Array.isArray(t) ? t : [t];
}
function Ru(t, e = 1e4) {
  return ks((a, n) => {
    let o = Se(t), s;
    const r = () => setTimeout(() => {
      o = Se(t), n();
    }, Se(e));
    return xo(() => {
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
const My = Se;
function Ty(t, e) {
  Ay() && no(t, e);
}
function Iy(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const $l = Ra ? window : void 0;
function na(t) {
  var e;
  const a = Se(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Fu(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, c, d) => (i.addEventListener(u, c, d), () => i.removeEventListener(u, c, d)), o = C(() => {
    const i = zo(Se(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), s = Iy(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((c) => na(c))) != null ? u : [$l].filter((c) => c != null),
        zo(Se(o.value ? t[1] : t[0])),
        zo(l(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Se(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, c, d]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(c != null && c.length))
        return;
      const p = Py(d) ? { ...d } : d;
      e.push(
        ...i.flatMap(
          (g) => u.flatMap(
            (m) => c.map((h) => n(g, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), r = () => {
    s(), a();
  };
  return xo(a), r;
}
function Vy() {
  const t = _t(!1), e = Pe();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function Ry(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Fy(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = $l,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, u = Ry(e);
  return Fu(o, s, (d) => {
    d.repeat && Se(i) || u(d) && a(d);
  }, r);
}
function Ly(t) {
  return JSON.parse(JSON.stringify(t));
}
function Xa(t, e, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Pe(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : Ly(B) : B, $ = () => Dy(t[e]) ? x(t[e]) : p, k = (B) => {
    g ? g(B) && h(y, B) : h(y, B);
  };
  if (u) {
    const B = $(), E = O(B);
    let S = !1;
    return X(
      () => t[e],
      (I) => {
        S || (S = !0, E.value = x(I), ae(() => S = !1));
      }
    ), X(
      E,
      (I) => {
        !S && (I !== t[e] || d) && k(I);
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
function Dt(t, e) {
  const a = typeof t == "string" ? `${t}Context` : e, n = Symbol(a);
  return [(r) => {
    const i = an(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (r) => (oo(n, r), r)];
}
function yr(t) {
  return typeof t == "string" ? `'${t}'` : new Ny().serialize(t);
}
const Ny = /* @__PURE__ */ function() {
  var e;
  class t {
    constructor() {
      Ol(this, e, /* @__PURE__ */ new Map());
    }
    compare(n, o) {
      const s = typeof n, r = typeof o;
      return s === "string" && r === "string" ? n.localeCompare(o) : s === "number" && r === "number" ? n - o : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(o, !0));
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
      const s = n.constructor, r = s === Object || s === void 0 ? "" : s.name;
      if (r !== "" && globalThis[r] === s) return this.serializeBuiltInType(r, n);
      if (typeof n.toJSON == "function") {
        const i = n.toJSON();
        return r + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(r, Object.entries(n));
    }
    serializeBuiltInType(n, o) {
      const s = this["$" + n];
      if (s) return s.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(n, o.entries());
      throw new Error(`Cannot serialize ${n}`);
    }
    serializeObjectEntries(n, o) {
      const s = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let r = `${n}{`;
      for (let i = 0; i < s.length; i++) {
        const [u, c] = s[i];
        r += `${this.serialize(u, !0)}:${this.serialize(c)}`, i < s.length - 1 && (r += ",");
      }
      return r + "}";
    }
    $object(n) {
      let o = La(this, e).get(n);
      return o === void 0 && (La(this, e).set(n, `#${La(this, e).size}`), o = this.serializeObject(n), La(this, e).set(n, o)), o;
    }
    $function(n) {
      const o = Function.prototype.toString.call(n);
      return o.slice(-15) === "[native code] }" ? `${n.name || ""}()[native]` : `${n.name}(${n.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(n) {
      let o = "[";
      for (let s = 0; s < n.length; s++) o += this.serialize(n[s]), s < n.length - 1 && (o += ",");
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
      return `Set${this.$Array(Array.from(n).sort((o, s) => this.compare(o, s)))}`;
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
function vs(t, e) {
  return t === e || yr(t) === yr(e);
}
const [Co, c1] = Dt("ConfigProvider");
function Lu(t) {
  const e = Co({
    dir: O("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function He() {
  const t = Pe(), e = O(), a = C(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : na(e);
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
    e.value = r, r && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r instanceof Element ? r : r.$el
    }), t.exposed = o);
  }
  return { forwardRef: s, currentRef: e, currentElement: a };
}
let zy = 0;
function Fa(t, e = "reka") {
  var n;
  const a = Co({ useId: void 0 });
  return Object.hasOwn(da, "useId") ? `${e}-${(n = da.useId) == null ? void 0 : n.call(da)}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++zy}`;
}
function Wy(t, e) {
  const a = O(t);
  function n(s) {
    return e[a.value][s] ?? a.value;
  }
  return {
    state: a,
    dispatch: (s) => {
      a.value = n(s);
    }
  };
}
function Ky(t, e) {
  var x;
  const a = O({}), n = O("none"), o = O(t), s = t.value ? "mounted" : "unmounted";
  let r;
  const i = ((x = e.value) == null ? void 0 : x.ownerDocument.defaultView) ?? $l, { state: u, dispatch: c } = Wy(s, {
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
    if (Ra) {
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
        const S = n.value, I = kn(e.value);
        $ ? (c("MOUNT"), d("enter"), I === "none" && d("after-enter")) : I === "none" || I === "undefined" || ((E = a.value) == null ? void 0 : E.display) === "none" ? (c("UNMOUNT"), d("leave"), d("after-leave")) : k && S !== I ? (c("ANIMATION_OUT"), d("leave")) : (c("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = ($) => {
    const k = kn(e.value), B = k.includes(
      $.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if ($.target === e.value && B && (d(`after-${E}`), c("ANIMATION_END"), !o.value)) {
      const S = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", r = i == null ? void 0 : i.setTimeout(() => {
        var I;
        ((I = e.value) == null ? void 0 : I.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = S);
      });
    }
    $.target === e.value && k === "none" && c("ANIMATION_END");
  }, g = ($) => {
    $.target === e.value && (n.value = kn(e.value));
  }, m = X(
    e,
    ($, k) => {
      $ ? (a.value = getComputedStyle($), $.addEventListener("animationstart", g), $.addEventListener("animationcancel", p), $.addEventListener("animationend", p)) : (c("ANIMATION_END"), r !== void 0 && (i == null || i.clearTimeout(r)), k == null || k.removeEventListener("animationstart", g), k == null || k.removeEventListener("animationcancel", p), k == null || k.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), h = X(u, () => {
    const $ = kn(e.value);
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
function kn(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const Uy = b({
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
    const { present: n, forceMount: o } = he(t), s = O(), { isPresent: r } = Ky(n, s);
    a({ present: r });
    let i = e.default({ present: r.value });
    i = Cl(i || []);
    const u = Pe();
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
    return () => o.value || n.value || r.value ? Ie(e.default({ present: r.value })[0], {
      ref: (d) => {
        const p = na(d);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? s.value = p.firstElementChild : s.value = p), p;
      }
    }) : null;
  }
});
function Hy(t) {
  const e = Pe(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ar(ao(o))] = (...s) => t(o, ...s);
  }), n;
}
function Bl(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
const jy = "dismissableLayer.pointerDownOutside", Gy = "dismissableLayer.focusOutside";
function Nu(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && (n === a || o.indexOf(n) < o.indexOf(a)));
}
function qy(t, e, a = !0) {
  var r;
  const n = ((r = e == null ? void 0 : e.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1), s = O(() => {
  });
  return we((i) => {
    if (!Ra || !Se(a))
      return;
    const u = async (d) => {
      const p = d.target;
      if (!(!(e != null && e.value) || !p)) {
        if (Nu(e.value, p)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let g = function() {
            Bl(
              jy,
              t,
              m
            );
          };
          const m = { originalEvent: d };
          d.pointerType === "touch" ? (n.removeEventListener("click", s.value), s.value = g, n.addEventListener("click", s.value, {
            once: !0
          })) : g();
        } else
          n.removeEventListener("click", s.value);
        o.value = !1;
      }
    }, c = window.setTimeout(() => {
      n.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(c), n.removeEventListener("pointerdown", u), n.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => {
      Se(a) && (o.value = !0);
    }
  };
}
function Yy(t, e) {
  var o;
  const a = ((o = e == null ? void 0 : e.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = O(!1);
  return we((s) => {
    if (!Ra)
      return;
    const r = async (i) => {
      if (!(e != null && e.value))
        return;
      await ae(), await ae();
      const u = i.target;
      !e.value || !u || Nu(e.value, u) || i.target && !n.value && Bl(
        Gy,
        t,
        { originalEvent: i }
      );
    };
    a.addEventListener("focusin", r), s(() => a.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => n.value = !0,
    onBlurCapture: () => n.value = !1
  };
}
const mt = so({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Jy = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = He(), r = C(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => mt.layersRoot), u = C(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = C(() => mt.layersWithOutsidePointerEventsDisabled.size > 0), d = C(() => {
      const h = Array.from(i.value), [y] = [...mt.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(y);
      return u.value >= x;
    }), p = qy(async (h) => {
      const y = [...mt.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !d.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ae(), h.defaultPrevented || n("dismiss"));
    }, s), g = Yy((h) => {
      [...mt.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, s);
    Fy("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return we((h) => {
      s.value && (a.disableOutsidePointerEvents && (mt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), mt.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), h(() => {
        a.disableOutsidePointerEvents && mt.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = m);
      }));
    }), we((h) => {
      h(() => {
        s.value && (i.value.delete(s.value), mt.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (h, y) => (v(), _(l(Ee), {
      ref: l(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: ut({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(g).onFocusCapture,
      onBlurCapture: l(g).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: f(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function Qy() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
var Xy = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, ia = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), Dn = {}, Wo = 0, zu = function(t) {
  return t && (t.host || zu(t.parentNode));
}, Zy = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = zu(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, eb = function(t, e, a, n) {
  var o = Zy(e, Array.isArray(t) ? t : [t]);
  Dn[a] || (Dn[a] = /* @__PURE__ */ new WeakMap());
  var s = Dn[a], r = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        d(g);
      else
        try {
          var m = g.getAttribute(n), h = m !== null && m !== "false", y = (ia.get(g) || 0) + 1, x = (s.get(g) || 0) + 1;
          ia.set(g, y), s.set(g, x), r.push(g), y === 1 && h && Sn.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return d(e), i.clear(), Wo++, function() {
    r.forEach(function(p) {
      var g = ia.get(p) - 1, m = s.get(p) - 1;
      ia.set(p, g), s.set(p, m), g || (Sn.has(p) || p.removeAttribute(n), Sn.delete(p)), m || p.removeAttribute(a);
    }), Wo--, Wo || (ia = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), Dn = {});
  };
}, tb = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Xy(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), eb(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function ab(t) {
  let e;
  X(() => na(t), (a) => {
    a ? e = tb(a) : e && e();
  }), ze(() => {
    e && e();
  });
}
function Ko(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function ms(t, e, a = ".", n) {
  if (!Ko(e))
    return ms(t, {}, a, n);
  const o = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = t[s];
    r != null && (n && n(o, s, r, a) || (Array.isArray(r) && Array.isArray(o[s]) ? o[s] = [...r, ...o[s]] : Ko(r) && Ko(o[s]) ? o[s] = ms(
      r,
      o[s],
      (a ? `${a}.` : "") + s.toString(),
      n
    ) : o[s] = r));
  }
  return o;
}
function nb(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => ms(a, n, "", t), {})
  );
}
const ob = nb(), sb = Sy(() => {
  const t = O(/* @__PURE__ */ new Map()), e = O(), a = C(() => {
    for (const r of t.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Co({
    scrollBody: O(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", gr && (o == null || o()), e.value = void 0;
  };
  return X(a, (r, i) => {
    var p;
    if (!Ra)
      return;
    if (!r) {
      i && s();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, d = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? ob({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), gr && (o = Fu(
      document,
      "touchmove",
      (g) => rb(g),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function lb(t) {
  const e = Math.random().toString(36).substring(2, 7), a = sb();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return Ty(() => {
    a.value.delete(e);
  }), n;
}
function Wu(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Wu(a);
  }
}
function rb(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Wu(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const ib = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = Vy();
    return (a, n) => l(e) || a.forceMount ? (v(), _(tn, {
      key: 0,
      to: a.to,
      disabled: a.disabled,
      defer: a.defer
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : se("", !0);
  }
});
function kl(t) {
  const e = Pe(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, s) => {
    const r = (e == null ? void 0 : e.type.props[s]).default;
    return r !== void 0 && (o[s] = r), o;
  }, {}), n = Cs(t);
  return C(() => {
    const o = he(n.value), s = {}, r = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(r).forEach((i) => {
      s[ao(i)] = r[i];
    }), Object.keys({ ...a, ...s }).reduce((i, u) => {
      var d;
      const c = (d = o[u]) == null ? void 0 : d.value;
      return c !== void 0 && (i[u] = c), i;
    }, {});
  });
}
function mn(t, e) {
  const a = kl(t), n = e ? Hy(e) : {};
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
function ub() {
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
function db(t) {
  return C(() => {
    var e;
    return My(t) ? !!((e = na(t)) != null && e.closest("form")) : !0;
  });
}
const br = "data-reka-collection-item";
function Sl(t = {}) {
  const { key: e = "", isProvider: a = !1 } = t, n = `${e}CollectionProvider`;
  let o;
  if (a) {
    const d = O(/* @__PURE__ */ new Map());
    o = {
      collectionRef: O(),
      itemMap: d
    }, oo(n, o);
  } else
    o = an(n);
  const s = (d = !1) => {
    const p = o.collectionRef.value;
    if (!p)
      return [];
    const g = Array.from(p.querySelectorAll(`[${br}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (y, x) => g.indexOf(y.ref) - g.indexOf(x.ref)
    );
    return d ? h : h.filter((y) => y.ref.dataset.disabled !== "");
  }, r = b({
    name: "CollectionSlot",
    setup(d, { slots: p }) {
      const { primitiveElement: g, currentElement: m } = Nt();
      return X(m, () => {
        o.collectionRef.value = m.value;
      }), () => Ie(fs, { ref: g }, p);
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
      return we((y) => {
        if (h.value) {
          const x = Tr(h.value);
          o.itemMap.value.set(x, { ref: h.value, value: d.value }), y(() => o.itemMap.value.delete(x));
        }
      }), () => Ie(fs, { ...g, [br]: "", ref: m }, p);
    }
  }), u = C(() => Array.from(o.itemMap.value.values())), c = C(() => o.itemMap.value.size);
  return { getItems: s, reactiveItems: u, itemMapSize: c, CollectionSlot: r, CollectionItem: i };
}
const cb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function pb(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function fb(t, e, a) {
  const n = pb(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return cb[n];
}
const _r = /* @__PURE__ */ b({
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
    return X(o, (s, r) => {
      if (!n.value)
        return;
      const i = n.value, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "value").set;
      if (d && s !== r) {
        const p = new Event("input", { bubbles: !0 }), g = new Event("change", { bubbles: !0 });
        d.call(i, s), i.dispatchEvent(p), i.dispatchEvent(g);
      }
    }), (s, r) => (v(), _(By, D({
      ref_key: "primitiveElement",
      ref: a
    }, { ...e, ...s.$attrs }, { as: "input" }), null, 16));
  }
}), vb = /* @__PURE__ */ b({
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
    ), n = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((o, s) => typeof o == "object" ? Object.entries(o).map(([r, i]) => ({ name: `[${e.name}][${s}][${r}]`, value: i })) : { name: `[${e.name}][${s}]`, value: o }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([o, s]) => ({ name: `[${e.name}][${o}]`, value: s })) : []);
    return (o, s) => a.value ? (v(), _(_r, D({ key: o.name }, { ...e, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (v(!0), L(ne, { key: 1 }, be(n.value, (r) => (v(), _(_r, D({
      key: r.name,
      ref_for: !0
    }, { ...e, ...o.$attrs }, {
      name: r.name,
      value: r.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Ku, mb] = Dt("PopperRoot"), hb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = O();
    return mb({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), gb = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = He(), o = Ku();
    return Ds(() => {
      o.onAnchorChange(e.reference ?? n.value);
    }), (s, r) => (v(), _(l(Ee), {
      ref: l(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), yb = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { forwardRef: e } = He();
    return (a, n) => (v(), _(l(gb), {
      "as-child": "",
      reference: a.reference
    }, {
      default: f(() => [
        P(l(Ee), D({
          ref: l(e),
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: f(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
});
function bb(t) {
  return t !== null;
}
function _b(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var x, $, k;
      const { placement: a, rects: n, middlewareData: o } = e, r = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = r ? 0 : t.arrowWidth, u = r ? 0 : t.arrowHeight, [c, d] = hs(a), p = { start: "0%", center: "50%", end: "100%" }[d], g = ((($ = o.arrow) == null ? void 0 : $.x) ?? 0) + i / 2, m = (((k = o.arrow) == null ? void 0 : k.y) ?? 0) + u / 2;
      let h = "", y = "";
      return c === "bottom" ? (h = r ? p : `${g}px`, y = `${-u}px`) : c === "top" ? (h = r ? p : `${g}px`, y = `${n.floating.height + u}px`) : c === "right" ? (h = `${-u}px`, y = r ? p : `${m}px`) : c === "left" && (h = `${n.floating.width + u}px`, y = r ? p : `${m}px`), { data: { x: h, y } };
    }
  };
}
function hs(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
function wb(t) {
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
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, c;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          u = p.inlineSize, c = p.blockSize;
        } else
          u = o.offsetWidth, c = o.offsetHeight;
        e.value = { width: u, height: c };
      });
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
const xb = {
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
}, [p1, Cb] = Dt("PopperContent"), $b = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ss({
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
    ...xb
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ku(), { forwardRef: s, currentElement: r } = He(), i = O(), u = O(), { width: c, height: d } = wb(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: g.value,
      boundary: m.value.filter(bb),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = ky(() => [
      mi({
        mainAxis: a.sideOffset + d.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      a.avoidCollisions && hi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? bi() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && Gn({
        ...h.value
      }),
      gi({
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
      u.value && _i({ element: u.value, padding: a.arrowPadding }),
      _b({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      a.hideWhenDetached && yi({ strategy: "referenceHidden", ...h.value })
    ]), x = C(() => a.reference ?? o.anchor.value), { floatingStyles: $, placement: k, isPositioned: B, middlewareData: E } = xi(
      x,
      i,
      {
        strategy: a.positionStrategy,
        placement: p,
        whileElementsMounted: (...T) => vi(...T, {
          layoutShift: !a.disableUpdateOnLayoutShift,
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), S = C(
      () => hs(k.value)[0]
    ), I = C(
      () => hs(k.value)[1]
    );
    Ds(() => {
      B.value && n("placed");
    });
    const M = C(
      () => {
        var T;
        return ((T = E.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), U = O("");
    we(() => {
      r.value && (U.value = window.getComputedStyle(r.value).zIndex);
    });
    const R = C(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), A = C(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Cb({
      placedSide: S,
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
          ...l($),
          transform: l(B) ? l($).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U.value,
          "--reka-popper-transform-origin": [
            (j = l(E).transformOrigin) == null ? void 0 : j.x,
            (W = l(E).transformOrigin) == null ? void 0 : W.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = l(E).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(l(Ee), D({ ref: l(s) }, T.$attrs, {
          "as-child": a.asChild,
          as: T.as,
          "data-side": S.value,
          "data-align": I.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(B) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            w(T.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Bb(t) {
  const e = C(() => l(t)), a = C(() => new Intl.Collator("en", { usage: "search", ...e.value }));
  return {
    startsWith: (r, i) => i.length === 0 ? !0 : (r = r.normalize("NFC"), i = i.normalize("NFC"), a.value.compare(r.slice(0, i.length), i) === 0),
    endsWith: (r, i) => i.length === 0 ? !0 : (r = r.normalize("NFC"), i = i.normalize("NFC"), a.value.compare(r.slice(-i.length), i) === 0),
    contains: (r, i) => {
      if (i.length === 0)
        return !0;
      r = r.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const c = i.length;
      for (; u + c <= r.length; u++) {
        const d = r.slice(u, u + c);
        if (a.value.compare(i, d) === 0)
          return !0;
      }
      return !1;
    }
  };
}
function kb(t, e, a) {
  return t === void 0 ? !1 : Array.isArray(t) ? t.some((n) => ja(n, e, a)) : ja(t, e, a);
}
function ja(t, e, a) {
  return t === void 0 || e === void 0 ? !1 : typeof t == "string" ? t === e : typeof a == "function" ? a(t, e) : typeof a == "string" ? (t == null ? void 0 : t[a]) === (e == null ? void 0 : e[a]) : vs(t, e);
}
function Sb(t) {
  const e = Ru("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (o, s) => {
      e.value = e.value + o;
      {
        const r = Qy(), i = s.map((g) => {
          var m, h;
          return {
            ...g,
            textValue: ((m = g.value) == null ? void 0 : m.textValue) ?? ((h = g.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), u = i.find((g) => g.ref === r), c = i.map((g) => g.textValue), d = Eb(c, e.value, u == null ? void 0 : u.textValue), p = i.find((g) => g.textValue === d);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function Db(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function Eb(t, e, a) {
  const o = e.length > 1 && Array.from(e).every((c) => c === e[0]) ? e[0] : e, s = a ? t.indexOf(a) : -1;
  let r = Db(t, Math.max(s, 0));
  o.length === 1 && (r = r.filter((c) => c !== a));
  const u = r.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== a ? u : void 0;
}
function Pb(t, e, a) {
  const n = t.findIndex((i) => vs(i, e)), o = t.findIndex((i) => vs(i, a));
  if (n === -1 || o === -1)
    return [];
  const [s, r] = [n, o].sort((i, u) => i - u);
  return t.slice(s, r + 1);
}
const [$o, Ob] = Dt("ListboxRoot"), Ab = /* @__PURE__ */ b({
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
    const n = t, o = a, { multiple: s, highlightOnHover: r, orientation: i, disabled: u, selectionBehavior: c, dir: d } = he(n), { getItems: p } = Sl({ isProvider: !0 }), { handleTypeaheadSearch: g } = Sb(), { primitiveElement: m, currentElement: h } = Nt(), y = ub(), x = Lu(d), $ = db(h), k = O(), B = O(!1), E = O(!0), S = Xa(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    });
    function I(J) {
      if (B.value = !0, n.multiple) {
        const te = Array.isArray(S.value) ? [...S.value] : [], re = te.findIndex((ee) => ja(ee, J, n.by));
        n.selectionBehavior === "toggle" ? (re === -1 ? te.push(J) : te.splice(re, 1), S.value = te) : (S.value = [J], k.value = J);
      } else
        n.selectionBehavior === "toggle" && ja(S.value, J, n.by) ? S.value = void 0 : S.value = J;
      setTimeout(() => {
        B.value = !1;
      }, 1);
    }
    const M = O(null), U = O(null), R = O(!1), A = O(!1), T = Rn(), F = Rn(), j = Rn();
    function W() {
      return p().map((J) => J.ref).filter((J) => J.dataset.disabled !== "");
    }
    function z(J, te = !0) {
      if (!J)
        return;
      M.value = J, E.value && M.value.focus(), te && M.value.scrollIntoView({ block: "nearest" });
      const re = p().find((ee) => ee.ref === J);
      o("highlight", re);
    }
    function Q(J) {
      if (R.value)
        j.trigger(J);
      else {
        const te = p().find((re) => ja(re.value, J, n.by));
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
          if (te && J.key === "a" && s.value) {
            const re = p(), ee = re.map((xe) => xe.value);
            S.value = [...ee], J.preventDefault(), z(re[re.length - 1].ref);
          } else if (!te) {
            const re = g(J.key, p());
            re && z(re);
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
      te != null && te.isConnected && (U.value = te), M.value = null, o("leave", J);
    }
    function je(J) {
      var re, ee;
      const te = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((re = J.currentTarget) == null || re.dispatchEvent(te), o("entryFocus", te), !te.defaultPrevented)
        if (U.value)
          z(U.value);
        else {
          const xe = (ee = W()) == null ? void 0 : ee[0];
          z(xe);
        }
    }
    function Qe(J) {
      const te = fb(J, i.value, x.value);
      if (!te)
        return;
      let re = W();
      if (M.value) {
        if (te === "last")
          re.reverse();
        else if (te === "prev" || te === "next") {
          te === "prev" && re.reverse();
          const ee = re.indexOf(M.value);
          re = re.slice(ee + 1);
        }
        ot(J, re[0]);
      }
      if (re.length) {
        const ee = !M.value && te === "prev" ? re.length - 1 : 0;
        z(re[ee]);
      }
      if (R.value)
        return F.trigger(J);
    }
    function ot(J, te) {
      var ee;
      if (!(R.value || n.selectionBehavior !== "replace" || !s.value || !Array.isArray(S.value) || (J.altKey || J.ctrlKey || J.metaKey) && !J.shiftKey) && J.shiftKey) {
        const xe = p().filter((Kt) => Kt.ref.dataset.disabled !== "");
        let Re = (ee = xe.find((Kt) => Kt.ref === te)) == null ? void 0 : ee.value;
        if (J.key === y.END ? Re = xe[xe.length - 1].value : J.key === y.HOME && (Re = xe[0].value), !Re || !k.value)
          return;
        const Wt = Pb(xe.map((Kt) => Kt.value), k.value, Re);
        S.value = Wt;
      }
    }
    async function Pt(J) {
      if (await ae(), R.value)
        T.trigger(J);
      else {
        const te = W(), re = te.find((ee) => ee.dataset.state === "checked");
        re ? z(re) : te.length && z(te[0]);
      }
    }
    return X(S, () => {
      B.value || ae(() => {
        Pt();
      });
    }, { immediate: !0, deep: !0 }), e({
      highlightedElement: M,
      highlightItem: Q,
      highlightFirstItem: ve,
      highlightSelected: Pt,
      getItems: p
    }), Ob({
      modelValue: S,
      // @ts-expect-error ignoring
      onValueChange: I,
      multiple: s,
      orientation: i,
      dir: x,
      disabled: u,
      highlightOnHover: r,
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
    }), (J, te) => (v(), _(l(Ee), {
      ref_key: "primitiveElement",
      ref: m,
      as: J.as,
      "as-child": J.asChild,
      dir: l(x),
      "data-disabled": l(u) ? "" : void 0,
      onPointerleave: Ve,
      onFocusout: te[0] || (te[0] = async (re) => {
        const ee = re.relatedTarget || re.target;
        await ae(), M.value && l(h) && !l(h).contains(ee) && Ve(re);
      })
    }, {
      default: f(() => [
        w(J.$slots, "default", { modelValue: l(S) }),
        l($) && J.name ? (v(), _(l(vb), {
          key: 0,
          name: J.name,
          value: l(S),
          disabled: l(u),
          required: J.required
        }, null, 8, ["name", "value", "disabled", "required"])) : se("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), [Et, Mb] = Dt("ComboboxRoot"), Tb = /* @__PURE__ */ b({
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
    const n = t, o = a, { primitiveElement: s, currentElement: r } = Nt(), { multiple: i, disabled: u, ignoreFilter: c, resetSearchTermOnSelect: d, dir: p } = he(n), g = Lu(p), m = Xa(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), h = Xa(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    async function y(z) {
      var Q, ie;
      h.value = z, R.search = "", z ? (await ae(), (Q = s.value) == null || Q.highlightSelected(), $.value = !0) : $.value = !1, (ie = B.value) == null || ie.focus(), setTimeout(() => {
        !z && n.resetSearchTermOnBlur && x.trigger();
      }, 1);
    }
    const x = Rn(), $ = O(!1), k = O(!1), B = O(), E = O(), S = C(() => {
      var z;
      return ((z = s.value) == null ? void 0 : z.highlightedElement) ?? void 0;
    }), I = O(/* @__PURE__ */ new Map()), M = O(/* @__PURE__ */ new Map()), { contains: U } = Bb({ sensitivity: "base" }), R = so({
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
        const ye = U(ie, R.search);
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
    const T = Pe();
    return ce(() => {
      var z, Q, ie;
      T != null && T.exposed && (T.exposed.highlightItem = (z = s.value) == null ? void 0 : z.highlightItem, T.exposed.highlightFirstItem = (Q = s.value) == null ? void 0 : Q.highlightFirstItem, T.exposed.highlightSelected = (ie = s.value) == null ? void 0 : ie.highlightSelected);
    }), e({
      filtered: C(() => R.filtered),
      highlightedElement: S,
      highlightItem: (F = s.value) == null ? void 0 : F.highlightItem,
      highlightFirstItem: (j = s.value) == null ? void 0 : j.highlightFirstItem,
      highlightSelected: (W = s.value) == null ? void 0 : W.highlightSelected
    }), Mb({
      modelValue: m,
      multiple: i,
      disabled: u,
      open: h,
      onOpenChange: y,
      contentId: "",
      isUserInputted: $,
      isVirtual: k,
      inputElement: B,
      highlightedElement: S,
      onInputElementChange: (z) => B.value = z,
      triggerElement: E,
      onTriggerElementChange: (z) => E.value = z,
      parentElement: r,
      resetSearchTermOnSelect: d,
      onResetSearchTerm: x.on,
      allItems: I,
      allGroups: M,
      filterState: R,
      ignoreFilter: c
    }), (z, Q) => (v(), _(l(hb), null, {
      default: f(() => [
        P(l(Ab), D({
          ref_key: "primitiveElement",
          ref: s
        }, z.$attrs, {
          modelValue: l(m),
          "onUpdate:modelValue": Q[0] || (Q[0] = (ie) => zt(m) ? m.value = ie : null),
          style: {
            pointerEvents: l(h) ? "auto" : void 0
          },
          as: z.as,
          "as-child": z.asChild,
          dir: l(g),
          multiple: l(i),
          name: z.name,
          required: z.required,
          disabled: l(u),
          "highlight-on-hover": !0,
          by: n.by,
          onHighlight: Q[1] || (Q[1] = (ie) => o("highlight", ie))
        }), {
          default: f(() => [
            w(z.$slots, "default", {
              open: l(h),
              modelValue: l(m)
            })
          ]),
          _: 3
        }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])
      ]),
      _: 3
    }));
  }
}), Ib = /* @__PURE__ */ b({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { CollectionSlot: e } = Sl(), a = $o(), n = Ru(!1, 10);
    return (o, s) => (v(), _(l(e), null, {
      default: f(() => [
        P(l(Ee), {
          role: "listbox",
          as: o.as,
          "as-child": o.asChild,
          tabindex: l(a).focusable.value ? l(a).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": l(a).orientation.value,
          "aria-multiselectable": !!l(a).multiple.value,
          "data-orientation": l(a).orientation.value,
          onMousedown: s[0] || (s[0] = $e((r) => n.value = !0, ["left"])),
          onFocus: s[1] || (s[1] = (r) => {
            l(n) || l(a).onEnter(r);
          }),
          onKeydown: [
            s[2] || (s[2] = Te($e((r) => {
              l(a).focusable.value && l(a).onKeydownNavigation(r);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            Te(l(a).onKeydownEnter, ["enter"]),
            l(a).onKeydownTypeAhead
          ]
        }, {
          default: f(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), [f1, Vb] = Dt("ComboboxContent"), Rb = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = he(a), s = Et(), { forwardRef: r, currentElement: i } = He();
    lb(a.bodyLock), ab(s.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), c = kl(u.value), d = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    Vb({ position: o });
    const p = O(!1);
    return ce(() => {
      s.inputElement.value && (p.value = i.value.contains(s.inputElement.value), p.value && s.inputElement.value.focus());
    }), ze(() => {
      var g;
      p.value && ((g = s.triggerElement.value) == null || g.focus());
    }), (g, m) => (v(), _(l(Ib), { "as-child": "" }, {
      default: f(() => [
        P(l(Jy), {
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => l(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = l(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = l(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: f(() => [
            (v(), _(Ne(l(o) === "popper" ? l($b) : l(Ee)), D({ ...g.$attrs, ...l(c) }, {
              id: l(s).contentId,
              ref: l(r),
              "data-state": l(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...l(o) === "popper" ? d : {}
              }
            }), {
              default: f(() => [
                w(g.$slots, "default")
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
}), v1 = /* @__PURE__ */ b({
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
    return (o, s) => (v(), _(l(Ee), D({
      type: o.as === "button" ? "button" : void 0
    }, e, {
      tabindex: "-1",
      onClick: n
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Fb = /* @__PURE__ */ b({
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
    const o = mn(t, e), { forwardRef: s } = He(), r = Et();
    return r.contentId || (r.contentId = Fa(void 0, "reka-combobox-content")), (i, u) => (v(), _(l(Uy), {
      present: i.forceMount || l(r).open.value
    }, {
      default: f(() => [
        P(Rb, D({ ...l(o), ...i.$attrs }, { ref: l(s) }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Lb = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Et(), n = C(
      () => a.ignoreFilter.value ? a.allItems.value.size === 0 : !!a.filterState.search && a.filterState.filtered.count === 0
    );
    return (o, s) => n.value ? (v(), _(l(Ee), H(D({ key: 0 }, e)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          s[0] || (s[0] = Z("No options"))
        ])
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
}), [m1, Nb] = Dt("ListboxGroup"), zb = /* @__PURE__ */ b({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Fa(void 0, "reka-listbox-group");
    return Nb({ id: a }), (n, o) => (v(), _(l(Ee), D({ role: "group" }, e, { "aria-labelledby": l(a) }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), [Uu, Wb] = Dt("ComboboxGroup"), Kb = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Fa(void 0, "reka-combobox-group"), n = Et(), o = C(() => n.ignoreFilter.value ? !0 : n.filterState.search ? n.filterState.filtered.groups.has(a) : !0), s = Wb({
      id: a,
      labelId: ""
    });
    return ce(() => {
      n.allGroups.value.has(a) || n.allGroups.value.set(a, /* @__PURE__ */ new Set());
    }), ze(() => {
      n.allGroups.value.delete(a);
    }), (r, i) => (v(), _(l(zb), D({
      id: l(a),
      "aria-labelledby": l(s).labelId
    }, e, {
      hidden: o.value ? void 0 : !0
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "hidden"]));
  }
}), Ub = /* @__PURE__ */ b({
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
    const a = t, o = Xa(a, "modelValue", e, {
      defaultValue: "",
      passive: a.modelValue === void 0
    }), s = $o(), { primitiveElement: r, currentElement: i } = Nt(), u = C(() => a.disabled || s.disabled.value || !1), c = O();
    return Or(() => {
      var d;
      return c.value = (d = s.highlightedElement.value) == null ? void 0 : d.id;
    }), ce(() => {
      s.focusable.value = !1, setTimeout(() => {
        var d;
        a.autoFocus && ((d = i.value) == null || d.focus());
      }, 1);
    }), ze(() => {
      s.focusable.value = !0;
    }), (d, p) => (v(), _(l(Ee), {
      ref_key: "primitiveElement",
      ref: r,
      as: d.as,
      "as-child": d.asChild,
      value: l(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": c.value,
      type: "text",
      onKeydown: [
        Te($e(l(s).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        Te(l(s).onKeydownEnter, ["enter"])
      ],
      onInput: p[0] || (p[0] = (g) => {
        o.value = g.target.value, l(s).highlightFirstItem(g);
      }),
      onCompositionstart: l(s).onCompositionStart,
      onCompositionend: l(s).onCompositionEnd
    }, {
      default: f(() => [
        w(d.$slots, "default", { modelValue: l(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), Hb = /* @__PURE__ */ b({
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
    const a = t, n = e, o = Et(), s = $o(), { primitiveElement: r, currentElement: i } = Nt(), u = Xa(a, "modelValue", n, {
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
        m.value && (o.filterState.search = m.value, s.highlightFirstItem(g));
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
    ), (g, m) => (v(), _(l(Ub), {
      ref_key: "primitiveElement",
      ref: r,
      modelValue: l(u),
      "onUpdate:modelValue": m[0] || (m[0] = (h) => zt(u) ? u.value = h : null),
      as: g.as,
      "as-child": g.asChild,
      "auto-focus": g.autoFocus,
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: Te($e(c, ["prevent"]), ["down", "up"])
    }, {
      default: f(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
  }
}), jb = "listbox.select", [Gb, qb] = Dt("ListboxItem"), Yb = /* @__PURE__ */ b({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Fa(void 0, "reka-listbox-item"), { CollectionItem: s } = Sl(), { forwardRef: r, currentElement: i } = He(), u = $o(), c = C(() => i.value === u.highlightedElement.value), d = C(() => kb(u.modelValue.value, a.value, u.by)), p = C(() => u.disabled.value || a.disabled);
    async function g(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !p.value && h && (u.onValueChange(a.value), u.changeHighlight(i.value));
    }
    function m(h) {
      const y = { originalEvent: h, value: a.value };
      Bl(jb, g, y);
    }
    return qb({
      isSelected: d
    }), (h, y) => (v(), _(l(s), { value: h.value }, {
      default: f(() => [
        hd([c.value, d.value], () => P(l(Ee), D({ id: l(o) }, h.$attrs, {
          ref: l(r),
          role: "option",
          tabindex: l(u).focusable.value ? c.value ? "0" : "-1" : -1,
          "aria-selected": d.value,
          as: h.as,
          "as-child": h.asChild,
          disabled: p.value ? "" : void 0,
          "data-disabled": p.value ? "" : void 0,
          "data-highlighted": c.value ? "" : void 0,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: m,
          onKeydown: Te($e(m, ["prevent"]), ["space"]),
          onPointermove: y[0] || (y[0] = (x) => {
            l(u).highlightedElement.value !== l(i) && (l(u).highlightOnHover.value ? l(u).changeHighlight(l(i), !1) : l(u).focusable.value || l(u).changeHighlight(l(i), !1));
          })
        }), {
          default: f(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), y, 1)
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Jb = /* @__PURE__ */ b({
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
    const a = t, n = e, o = Fa(void 0, "reka-combobox-item"), s = Et(), r = Uu(null), { primitiveElement: i, currentElement: u } = Nt();
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    const c = C(() => {
      if (s.isVirtual.value || s.ignoreFilter.value || !s.filterState.search)
        return !0;
      {
        const d = s.filterState.filtered.items.get(o);
        return d === void 0 ? !0 : d > 0;
      }
    });
    return ce(() => {
      var p;
      s.allItems.value.set(o, a.textValue || u.value.textContent || u.value.innerText);
      const d = r == null ? void 0 : r.id;
      d && (s.allGroups.value.has(d) ? (p = s.allGroups.value.get(d)) == null || p.add(o) : s.allGroups.value.set(d, /* @__PURE__ */ new Set([o])));
    }), ze(() => {
      s.allItems.value.delete(o);
    }), (d, p) => c.value ? (v(), _(l(Yb), D({ key: 0 }, a, {
      id: l(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: l(s).disabled.value || d.disabled,
      onSelect: p[0] || (p[0] = (g) => {
        n("select", g), !g.defaultPrevented && !l(s).multiple.value && !d.disabled && !l(s).disabled.value && (g.preventDefault(), l(s).onOpenChange(!1), l(s).modelValue.value = a.value);
      })
    }), {
      default: f(() => [
        w(d.$slots, "default", {}, () => [
          Z(le(d.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "disabled"])) : se("", !0);
  }
}), Qb = /* @__PURE__ */ b({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    He();
    const a = Gb();
    return (n, o) => l(a).isSelected.value ? (v(), _(l(Ee), D({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : se("", !0);
  }
}), h1 = /* @__PURE__ */ b({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Qb), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xb = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    He();
    const a = Uu({ id: "", labelId: "" });
    return a.labelId || (a.labelId = Fa(void 0, "reka-combobox-group-label")), (n, o) => (v(), _(l(Ee), D(e, {
      id: l(a).labelId
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Zb = /* @__PURE__ */ b({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(ib), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e0 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return He(), (a, n) => (v(), _(l(Ee), D(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), g1 = /* @__PURE__ */ b({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = He(), o = Et(), s = C(() => e.disabled || o.disabled.value || !1);
    return ce(() => {
      n.value && o.onTriggerElementChange(n.value);
    }), (r, i) => (v(), _(l(Ee), D(e, {
      ref: l(a),
      type: r.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": l(o).open.value,
      "aria-controls": l(o).contentId,
      "data-state": l(o).open.value ? "open" : "closed",
      disabled: s.value,
      "data-disabled": s.value ? "" : void 0,
      "aria-disabled": s.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => l(o).onOpenChange(!l(o).open.value))
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
function t0(t) {
  const e = Co({
    nonce: O()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const a0 = /* @__PURE__ */ b({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = He(), { nonce: n } = he(e), o = t0(n), s = Et();
    return (r, i) => (v(), L(ne, null, [
      P(l(Ee), D({ ...r.$attrs, ...e }, {
        ref: l(a),
        "data-reka-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: l(s).isVirtual.value ? void 0 : 1,
          overflow: "auto"
        }
      }), {
        default: f(() => [
          w(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      P(l(Ee), {
        as: "style",
        nonce: l(o)
      }, {
        default: f(() => i[0] || (i[0] = [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), y1 = /* @__PURE__ */ b({
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
    const o = mn(t, e);
    return (s, r) => (v(), _(l(Tb), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), b1 = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = kl(a);
    return (o, s) => (v(), _(l(yb), D(l(n), {
      class: l(V)("w-[200px]", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Lb), D(a.value, {
      class: l(V)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), w1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Kb), D(a.value, {
      class: l(V)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e.class)
    }), {
      default: f(() => [
        n.heading ? (v(), _(l(Xb), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: f(() => [
            Z(le(n.heading), 1)
          ]),
          _: 1
        })) : se("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = mn(o, n);
    return (r, i) => (v(), _(l(Hb), D(l(s), {
      class: l(V)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", a.class)
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), C1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = mn(o, n);
    return (r, i) => (v(), _(l(Jb), D(l(s), {
      class: l(V)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", a.class)
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = mn(o, n);
    return (r, i) => (v(), _(l(Zb), null, {
      default: f(() => [
        P(l(Fb), D(l(s), {
          class: l(V)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a.class)
        }), {
          default: f(() => [
            P(l(a0), null, {
              default: f(() => [
                w(r.$slots, "default")
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
}), B1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(e0), D(a.value, {
      class: l(V)("-mx-1 h-px bg-border", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n0 = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, k1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(ji), D({
      class: l(V)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: u, weekDays: c }) => [
        P(l(Qu), null, {
          default: f(() => [
            P(l(s0)),
            P(l(Xu)),
            P(l(o0))
          ]),
          _: 1
        }),
        me("div", n0, [
          (v(!0), L(ne, null, be(u, (d) => (v(), _(l(Gu), {
            key: d.value.toString()
          }, {
            default: f(() => [
              P(l(Yu), null, {
                default: f(() => [
                  P(l(Qn), null, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(c, (p) => (v(), _(l(Ju), { key: p }, {
                        default: f(() => [
                          Z(le(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(l(qu), null, {
                default: f(() => [
                  (v(!0), L(ne, null, be(d.rows, (p, g) => (v(), _(l(Qn), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(p, (m) => (v(), _(l(Hu), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(l(ju), {
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
}), Hu = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Yf), D({
      class: l(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ju = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(av), D({
      class: l(V)(
        l(aa)({ variant: "ghost" }),
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
        e.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gu = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(qf), D({
      class: l(V)("w-full border-collapse space-y-1", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qu = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(ev), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yu = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Zf), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(tv), D({
      class: l(V)("flex", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ju = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Jf), D({
      class: l(V)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qu = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(jf), D({
      class: l(V)("relative flex w-full items-center justify-between pt-1", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xu = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Gf), D({
      class: l(V)("text-text text-sm font-medium", e.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        w(o.$slots, "default", { headingValue: r }, () => [
          Z(le(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o0 = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Qf), D({
      class: l(V)(
        l(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        Z(" > ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), s0 = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Xf), D({
      class: l(V)(
        l(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => s[0] || (s[0] = [
        Z(" < ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
});
function l0(t) {
  return eo() ? (to(t), !0) : !1;
}
const Uo = /* @__PURE__ */ new WeakMap(), r0 = (...t) => {
  var e;
  const a = t[0], n = (e = Pe()) == null ? void 0 : e.proxy;
  if (n == null && !Ir())
    throw new Error("injectLocal must be called in setup");
  return n && Uo.has(n) && a in Uo.get(n) ? Uo.get(n)[a] : an(...t);
}, i0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const u0 = (t) => typeof t < "u", d0 = Object.prototype.toString, c0 = (t) => d0.call(t) === "[object Object]", p0 = () => {
};
function Zu(...t) {
  if (t.length !== 1)
    return Cs(...t);
  const e = t[0];
  return typeof e == "function" ? $a(ks(() => ({ get: e, set: p0 }))) : O(e);
}
function f0(t, e) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const ed = (t) => t();
function v0(t = ed, e = {}) {
  const {
    initialState: a = "active"
  } = e, n = Zu(a === "active");
  function o() {
    n.value = !1;
  }
  function s() {
    n.value = !0;
  }
  const r = (...i) => {
    n.value && t(...i);
  };
  return { isActive: $a(n), pause: o, resume: s, eventFilter: r };
}
function wr(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function Ho(t) {
  return Array.isArray(t) ? t : [t];
}
function m0(t) {
  return Pe();
}
function h0(t, e, a = {}) {
  const {
    eventFilter: n = ed,
    ...o
  } = a;
  return X(
    t,
    f0(
      n,
      e
    ),
    o
  );
}
function g0(t, e, a = {}) {
  const {
    eventFilter: n,
    initialState: o = "active",
    ...s
  } = a, { eventFilter: r, pause: i, resume: u, isActive: c } = v0(n, { initialState: o });
  return { stop: h0(
    t,
    e,
    {
      ...s,
      eventFilter: r
    }
  ), pause: i, resume: u, isActive: c };
}
function td(t, e = !0, a) {
  m0() ? ce(t, a) : e ? t() : ae(t);
}
function y0(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const Za = i0 ? window : void 0;
function ad(t) {
  var e;
  const a = Se(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Xn(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, c, d) => (i.addEventListener(u, c, d), () => i.removeEventListener(u, c, d)), o = C(() => {
    const i = Ho(Se(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), s = y0(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((c) => ad(c))) != null ? u : [Za].filter((c) => c != null),
        Ho(Se(o.value ? t[1] : t[0])),
        Ho(l(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Se(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, c, d]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(c != null && c.length))
        return;
      const p = c0(d) ? { ...d } : d;
      e.push(
        ...i.flatMap(
          (g) => u.flatMap(
            (m) => c.map((h) => n(g, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), r = () => {
    s(), a();
  };
  return l0(a), r;
}
function b0() {
  const t = _t(!1), e = Pe();
  return e && ce(() => {
    t.value = !0;
  }, e), t;
}
function _0(t) {
  const e = b0();
  return C(() => (e.value, !!t()));
}
const w0 = Symbol("vueuse-ssr-width");
function x0() {
  const t = Ir() ? r0(w0, null) : null;
  return typeof t == "number" ? t : void 0;
}
function nd(t, e = {}) {
  const { window: a = Za, ssrWidth: n = x0() } = e, o = _0(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = _t(typeof n == "number"), r = _t(), i = _t(!1), u = (c) => {
    i.value = c.matches;
  };
  return we(() => {
    if (s.value) {
      s.value = !o.value;
      const c = Se(t).split(",");
      i.value = c.some((d) => {
        const p = d.includes("not all"), g = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(g || m);
        return g && h && (h = n >= wr(g[1])), m && h && (h = n <= wr(m[1])), p ? !h : h;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(Se(t)), i.value = r.value.matches);
  }), Xn(r, "change", u, { passive: !0 }), C(() => i.value);
}
function C0(t) {
  return JSON.parse(JSON.stringify(t));
}
const En = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pn = "__vueuse_ssr_handlers__", $0 = /* @__PURE__ */ B0();
function B0() {
  return Pn in En || (En[Pn] = En[Pn] || {}), En[Pn];
}
function od(t, e) {
  return $0[t] || e;
}
function k0(t) {
  return nd("(prefers-color-scheme: dark)", t);
}
function S0(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const D0 = {
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
}, xr = "vueuse-storage";
function E0(t, e, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: r = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: p = Za,
    eventFilter: g,
    onError: m = (W) => {
      console.error(W);
    },
    initOnMounted: h
  } = n, y = (d ? _t : O)(typeof e == "function" ? e() : e), x = C(() => Se(t));
  if (!a)
    try {
      a = od("getDefaultStorage", () => {
        var W;
        return (W = Za) == null ? void 0 : W.localStorage;
      })();
    } catch (W) {
      m(W);
    }
  if (!a)
    return y;
  const $ = Se(e), k = S0($), B = (o = n.serializer) != null ? o : D0[k], { pause: E, resume: S } = g0(
    y,
    () => A(y.value),
    { flush: s, deep: r, eventFilter: g }
  );
  X(x, () => F(), { flush: s });
  let I = !1;
  const M = (W) => {
    h && !I || F(W);
  }, U = (W) => {
    h && !I || j(W);
  };
  p && i && (a instanceof Storage ? Xn(p, "storage", M, { passive: !0 }) : Xn(p, xr, U)), h ? td(() => {
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
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", Q) : new CustomEvent(xr, {
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
          W ? ae(S) : S();
        }
      }
    }
  }
  function j(W) {
    F(W.detail);
  }
  return y;
}
const P0 = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function O0(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Za,
    storage: s,
    storageKey: r = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: u,
    emitAuto: c,
    disableTransition: d = !0
  } = t, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...t.modes || {}
  }, g = k0({ window: o }), m = C(() => g.value ? "dark" : "light"), h = u || (r == null ? Zu(n) : E0(r, n, s, { window: o, listenToStorageChanges: i })), y = C(() => h.value === "auto" ? m.value : h.value), x = od(
    "updateHTMLAttrs",
    (E, S, I) => {
      const M = typeof E == "string" ? o == null ? void 0 : o.document.querySelector(E) : ad(E);
      if (!M)
        return;
      const U = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
      let A = null;
      if (S === "class") {
        const F = I.split(/\s/g);
        Object.values(p).flatMap((j) => (j || "").split(/\s/g)).filter(Boolean).forEach((j) => {
          F.includes(j) ? U.add(j) : R.add(j);
        });
      } else
        A = { key: S, value: I };
      if (U.size === 0 && R.size === 0 && A === null)
        return;
      let T;
      d && (T = o.document.createElement("style"), T.appendChild(document.createTextNode(P0)), o.document.head.appendChild(T));
      for (const F of U)
        M.classList.add(F);
      for (const F of R)
        M.classList.remove(F);
      A && M.setAttribute(A.key, A.value), d && (o.getComputedStyle(T).opacity, document.head.removeChild(T));
    }
  );
  function $(E) {
    var S;
    x(e, a, (S = p[E]) != null ? S : E);
  }
  function k(E) {
    t.onChanged ? t.onChanged(E, $) : $(E);
  }
  X(y, k, { flush: "post", immediate: !0 }), td(() => k(y.value));
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
function A0(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = ""
  } = t, n = O0({
    ...t,
    onChanged: (r, i) => {
      var u;
      t.onChanged ? (u = t.onChanged) == null || u.call(t, r === "dark", i, r) : i(r);
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
    set(r) {
      const i = r ? "dark" : "light";
      o.value === i ? n.value = "auto" : n.value = i;
    }
  });
}
function Dl(t, e, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Pe(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((r = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (B) => i ? typeof i == "function" ? i(B) : C0(B) : B, $ = () => u0(t[e]) ? x(t[e]) : p, k = (B) => {
    g ? g(B) && h(y, B) : h(y, B);
  };
  if (u) {
    const B = $(), E = O(B);
    let S = !1;
    return X(
      () => t[e],
      (I) => {
        S || (S = !0, E.value = x(I), ae(() => S = !1));
      }
    ), X(
      E,
      (I) => {
        !S && (I !== t[e] || d) && k(I);
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
const gs = /* @__PURE__ */ b({
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
    return (s, r) => (v(), _(l(oh), H(G(l(o))), {
      default: f(({ open: i }) => [
        w(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), ys = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Dh), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bs = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(rh), D(l(n), {
      class: l(V)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        P(l(Eh), { "as-child": "" }, {
          default: f(() => [
            P(l(wl), {
              class: q(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _s = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(ih), null, {
      default: f(() => [
        P(l(hh), D({ ...l(s), ...r.$attrs }, {
          class: l(V)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            r.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            P(l(T0)),
            P(l(Bh), {
              class: q(
                l(V)(
                  "p-1",
                  r.position === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
                )
              )
            }, {
              default: f(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            P(l(I0))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), S1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Ch), D({
      class: l(V)("w-full p-1", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, ws = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(bh), D(l(n), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: f(() => [
        me("span", M0, [
          P(l(_h), null, {
            default: f(() => [
              P(l(_l), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        P(l(pu), null, {
          default: f(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D1 = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(pu), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E1 = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l($h), {
      class: q(l(V)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), P1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(gh), D(a.value, {
      class: l(V)("bg-muted -mx-1 my-1 h-px", e.class)
    }), null, 16, ["class"]));
  }
}), T0 = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(kh), D(l(n), {
      class: l(V)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          P(l(cy), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I0 = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Sh), D(l(n), {
      class: l(V)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          P(l(wl), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V0 = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, R0 = /* @__PURE__ */ b({
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
    }), s = Dl(a, "modelValue", n, {
      passive: !0,
      defaultValue: Fn(Ct())
    }), r = ue(o, n), i = Ai("en");
    return (u, c) => (v(), _(l(ji), D({
      placeholder: l(s),
      "onUpdate:placeholder": c[2] || (c[2] = (d) => zt(s) ? s.value = d : null)
    }, l(r), {
      class: l(V)("rounded-md border p-3", a.class)
    }), {
      default: f(({ date: d, grid: p, weekDays: g }) => [
        P(l(Qu), null, {
          default: f(() => [
            P(l(Xu), { class: "flex w-full items-center justify-between gap-2" }, {
              default: f(() => [
                P(l(gs), {
                  "default-value": l(s).month.toString(),
                  "onUpdate:modelValue": c[0] || (c[0] = (m) => {
                    var h;
                    !m || !l(s) || Number(m) !== ((h = l(s)) == null ? void 0 : h.month) && (s.value = l(s).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    P(l(bs), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: f(() => [
                        P(l(ys), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    P(l(_s), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), L(ne, null, be(l(kc)({ dateObj: d }), (m) => (v(), _(l(ws), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: f(() => [
                            Z(le(l(i).custom(l(Ye)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                P(l(gs), {
                  "default-value": l(s).year.toString(),
                  "onUpdate:modelValue": c[1] || (c[1] = (m) => {
                    var h;
                    !m || !l(s) || Number(m) !== ((h = l(s)) == null ? void 0 : h.year) && (s.value = l(s).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    P(l(bs), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: f(() => [
                        P(l(ys), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    P(l(_s), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), L(ne, null, be(l(Bc)({ dateObj: d, startIndex: -100, endIndex: 10 }), (m) => (v(), _(l(ws), {
                          key: m.toString(),
                          value: m.year.toString()
                        }, {
                          default: f(() => [
                            Z(le(m.year), 1)
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
        me("div", V0, [
          (v(!0), L(ne, null, be(p, (m) => (v(), _(l(Gu), {
            key: m.value.toString()
          }, {
            default: f(() => [
              P(l(Yu), null, {
                default: f(() => [
                  P(l(Qn), null, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(g, (h) => (v(), _(l(Ju), { key: h }, {
                        default: f(() => [
                          Z(le(h), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(l(qu), { class: "grid" }, {
                default: f(() => [
                  (v(!0), L(ne, null, be(m.rows, (h, y) => (v(), _(l(Qn), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(h, (x) => (v(), _(l(Hu), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: f(() => [
                          P(l(ju), {
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
}), F0 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(hv), D(l(s), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        w(r.$slots, "default")
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
    return (s, r) => (v(), _(l(Fi), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O1 = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(cn), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), L0 = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Li), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N0 = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(l(V)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), z0 = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Ki), D(l(n), {
      class: l(V)("text-heading text-2xl font-semibold leading-none tracking-tight", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W0 = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Ui), D(l(n), {
      class: l(V)("text-sub-text text-sm", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
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
      const { class: r, ...i } = n;
      return i;
    }), s = ue(o, a);
    return (r, i) => (v(), _(l(al), null, {
      default: f(() => [
        P(l(rl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(l(ll), D(l(s), {
          class: l(V)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            n.class
          )
        }), {
          default: f(() => [
            w(r.$slots, "default"),
            P(l(cn), {
              onClick: i[0] || (i[0] = (u) => a("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                P(l(wo), { class: "size-4 dark:text-slate-300" }),
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
}), A1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(al), null, {
      default: f(() => [
        P(l(rl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            P(l(ll), D({
              class: l(V)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                a.class
              )
            }, l(s), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: f(() => [
                w(r.$slots, "default"),
                P(l(cn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    P(l(wo), { class: "size-4" }),
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
}), K0 = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(
        l(V)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), M1 = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (s, r) => (v(), _(l(sd), H(G(l(o))), {
      default: f(() => [
        P(l(ld), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            P(F0, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
                w(s.$slots, "default")
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
}), T1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l($v), D(a.value, {
      class: l(V)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(bv), D(a.value, {
      class: l(V)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), _(l(_v), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Z(le(n.heading), 1)
          ]),
          _: 1
        })) : se("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U0 = { class: "flex items-center border-b px-3" }, V1 = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), L("div", U0, [
      P(l(_y), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(l(gv), D({ ...l(n), ...o.$attrs }, {
        "auto-focus": "",
        class: l(V)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), R1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(Dv), D(l(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H0 = { role: "presentation" }, F1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(Cv), D(l(s), {
      class: l(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        me("div", H0, [
          w(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Ev), D(a.value, {
      class: l(V)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N1 = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("span", {
      class: q(l(V)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), j0 = /* @__PURE__ */ b({
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
    return (s, r) => (v(), _(l(im), H(G(l(o))), {
      default: f(({ open: i }) => [
        w(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), G0 = /* @__PURE__ */ b({
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
        l(V)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), q0 = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = fe(t);
    return (n, o) => (v(), _(l(um), D({ class: "outline-hidden" }, l(a)), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y0 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(dm), null, {
      default: f(() => [
        P(l(cm), D(l(s), {
          class: l(V)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), z1 = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(pm), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W1 = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (s, r) => (v(), _(l(hm), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K1 = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(lu), D(l(n), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        o.inset && "pl-8",
        e.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J0 = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(G0, {
      class: q(e.class)
    }, {
      default: f(() => [
        P(l(lu), D(l(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: f(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Q0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, U1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(vm), D(l(s), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        me("span", Q0, [
          P(l(ru), null, {
            default: f(() => [
              P(l(_l), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, H1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(gm), D(l(s), {
      class: l(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        me("span", X0, [
          P(l(ru), null, {
            default: f(() => [
              P(l(vy), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j1 = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("span", {
      class: q(l(V)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), G1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(fm), D(a.value, {
      class: l(V)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), q1 = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(mm), D(l(n), {
      class: l(V)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y1 = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (s, r) => (v(), _(l(ym), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J1 = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(_m), D(l(n), {
      class: l(V)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        e.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        P(l(xl), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q1 = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(bm), D(l(s), {
      class: l(V)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z0 = { class: "text-xs text-slate-600 dark:text-slate-300" }, e_ = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (v(), L("div", Z0, "Characters: " + le(e.count), 1));
  }
}), hn = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, t_ = {}, a_ = { class: "text-sm text-slate-400 dark:text-slate-500" };
function n_(t, e) {
  return v(), L("div", a_, [
    w(t.$slots, "default")
  ]);
}
const o_ = /* @__PURE__ */ hn(t_, [["render", n_]]), s_ = { class: "text-sm text-red-600 dark:text-red-400" }, l_ = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => Ca((v(), L("div", null, [
      me("p", s_, le(e.error), 1)
    ], 512)), [
      [$s, e.error]
    ]);
  }
}), r_ = {}, i_ = { class: "w-full space-y-4 p-1.5" };
function u_(t, e) {
  return v(), L("div", i_, [
    w(t.$slots, "default")
  ]);
}
const X1 = /* @__PURE__ */ hn(r_, [["render", u_]]), d_ = {}, c_ = { class: "my-4" };
function p_(t, e) {
  return v(), L("div", c_, [
    w(t.$slots, "default")
  ]);
}
const f_ = /* @__PURE__ */ hn(d_, [["render", p_]]), v_ = { class: "grid gap-4 md:grid-cols-2" }, Z1 = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (v(), _(f_, null, {
      default: f(() => [
        me("div", v_, [
          w(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), rd = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(wm), D(a.value, {
      class: l(V)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        e.class
      )
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m_ = { class: "relative" }, h_ = {
  name: "Base",
  inheritAttrs: !1
}, oa = /* @__PURE__ */ b({
  ...h_,
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
        e.label && e.showLabel ? (v(), _(l(rd), {
          key: 0,
          id: e.id
        }, {
          default: f(() => [
            Z(le(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : se("", !0),
        me("div", m_, [
          w(e.$slots, "default"),
          e.showCharacterCount ? (v(), _(l(e_), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : se("", !0)
        ]),
        P(l(o_), { class: "mt-[2px]" }, {
          default: f(() => [
            Z(le(e.description), 1)
          ]),
          _: 1
        }),
        P(l(l_), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), g_ = { class: "flex gap-2" }, ex = /* @__PURE__ */ b({
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
    return X(o, (s) => {
      a("update:modelValue", s);
    }), (s, r) => (v(), _(l(oa), H(G(s.$props)), {
      default: f(() => [
        me("div", g_, [
          P(l(lv), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": r[0] || (r[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: f(() => [
              P(l(rv), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  P(l(_l), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (v(), _(l(rd), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: f(() => [
              Z(le(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : se("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), y_ = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (s, r) => (v(), _(l(Om), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), b_ = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Am), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), __ = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(Mm), null, {
      default: f(() => [
        P(l(Vm), D({ ...l(s), ...r.$attrs }, {
          class: l(V)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), tx = /* @__PURE__ */ b({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = new st("en-US", {
      dateStyle: "long"
    }), s = O(n.modelValue);
    return X(s, () => {
      a("update:modelValue", s.value);
    }), ce(() => {
      if (n.defaultValue)
        s.value = n.defaultValue;
      else if (s.value === null) {
        const r = /* @__PURE__ */ new Date();
        s.value = new Be(
          r.getFullYear(),
          r.getMonth() + 1,
          r.getDate()
        );
      }
    }), (r, i) => (v(), _(l(oa), H(G(r.$props)), {
      default: f(() => [
        P(l(y_), null, {
          default: f(() => [
            P(l(b_), { "as-child": "" }, {
              default: f(() => [
                P(l(St), {
                  variant: "outline",
                  class: q(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: f(() => [
                    P(l(uy), { class: "mr-2 size-4" }),
                    Z(" " + le(s.value ? l(o).format(s.value.toDate(l(Ct)())) : r.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            P(l(__), { class: "w-auto p-0" }, {
              default: f(() => [
                P(l(R0), {
                  modelValue: s.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u),
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
var Me = [];
for (var jo = 0; jo < 256; ++jo)
  Me.push((jo + 256).toString(16).slice(1));
function w_(t, e = 0) {
  return (Me[t[e + 0]] + Me[t[e + 1]] + Me[t[e + 2]] + Me[t[e + 3]] + "-" + Me[t[e + 4]] + Me[t[e + 5]] + "-" + Me[t[e + 6]] + Me[t[e + 7]] + "-" + Me[t[e + 8]] + Me[t[e + 9]] + "-" + Me[t[e + 10]] + Me[t[e + 11]] + Me[t[e + 12]] + Me[t[e + 13]] + Me[t[e + 14]] + Me[t[e + 15]]).toLowerCase();
}
var On, x_ = new Uint8Array(16);
function C_() {
  if (!On && (On = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !On))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return On(x_);
}
var $_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Cr = {
  randomUUID: $_
};
function B_(t, e, a) {
  if (Cr.randomUUID && !t)
    return Cr.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || C_)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, w_(n);
}
const k_ = { class: "flex items-center space-x-2" }, S_ = ["src"], D_ = ["accept"], ax = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + B_(), s = C(() => i.value ? URL.createObjectURL(i.value) : null), r = a.currentImage ? a.currentImage : a.defaultImage, i = C({
      get: () => a.modelValue,
      set: (d) => n("update:modelValue", d)
    }), u = (d) => {
      i.value = d.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (d, p) => (v(), _(l(oa), H(G(d.$props)), {
      default: f(() => [
        me("div", k_, [
          w(d.$slots, "image", {
            newImage: s.value,
            curImage: l(r)
          }, () => [
            me("img", {
              src: s.value ?? l(r),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, S_)
          ]),
          me("input", {
            id: o,
            accept: d.accept,
            hidden: "",
            type: "file",
            onInput: u
          }, null, 40, D_),
          P(l(St), {
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
}), E_ = ["disabled", "placeholder", "required", "type"], P_ = /* @__PURE__ */ b({
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
    const e = Vr(t, "modelValue");
    return (a, n) => (v(), _(l(oa), H(G(a.$props)), {
      default: f(() => [
        Ca(me("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: q(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, E_), [
          [gd, e.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), nx = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = C(() => n.placeholder ?? "Select an option..."), s = O(
      n.modelValue ? n.options.find((r) => r === n.modelValue) : null
    );
    return X(s, () => {
      a("update:modelValue", s.value);
    }), (r, i) => (v(), _(l(oa), H(G(r.$props)), {
      default: f(() => [
        P(l(gs), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
        }, {
          default: f(({ open: u }) => [
            P(l(bs), { open: u }, {
              default: f(() => [
                P(l(ys), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            P(l(_s), null, {
              default: f(() => [
                (v(!0), L(ne, null, be(r.options, (c) => (v(), _(l(ws), { value: c }, {
                  default: f(() => [
                    Z(le(c), 1)
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
}), O_ = ["placeholder"], ox = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = Dl(t, "modelValue", e, {
      passive: !0
    });
    return (s, r) => (v(), _(l(oa), H(G(s.$props)), {
      default: f(() => [
        Ca(me("textarea", {
          "onUpdate:modelValue": r[0] || (r[0] = (i) => zt(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: q(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, O_), [
          [yd, l(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), A_ = /* @__PURE__ */ b({
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
    const a = e, n = t, o = Vr(t, "modelValue");
    X(o, () => {
      a("update:modelValue", o.value);
    });
    const s = C(() => {
      const { class: i, ...u } = n;
      return u;
    }), r = ue(s, a);
    return (i, u) => (v(), _(l(oa), H(G(i.$props)), {
      default: f(() => [
        P(l(Zh), D({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (c) => o.value = c)
        }, l(r), {
          class: l(V)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        }), {
          default: f(({ checked: c }) => [
            P(l(eg), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                c ? w(i.$slots, "checked", { key: 0 }) : se("", !0),
                c ? se("", !0) : w(i.$slots, "not-checked", { key: 1 })
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
}), M_ = { class: "my-auto text-slate-400 dark:text-slate-100" }, sx = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (v(), L("div", M_, " Showing " + le(e.min) + " to " + le(e.max) + " of " + le(e.total) + " results ", 1));
  }
}), lx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Cm), D(a.value, {
      class: l(V)("text-text flex size-9 items-center justify-center", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default", {}, () => [
          P(l(Vu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l($m), H(G(a.value)), {
      default: f(() => [
        P(l(St), {
          class: q(l(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: l(py) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), ix = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Bm), H(G(a.value)), {
      default: f(() => [
        P(l(St), {
          class: q(l(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: l(fy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), ux = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Dm), H(G(a.value)), {
      default: f(() => [
        P(l(St), {
          class: q(l(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: l(xl) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), dx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Em), H(G(a.value)), {
      default: f(() => [
        P(l(St), {
          class: q(l(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: l(dy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), cx = /* @__PURE__ */ b({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = A0({
      selector: "html"
    });
    return (a, n) => (v(), _(A_, {
      modelValue: l(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => zt(e) ? e.value = o : null)
    }, {
      checked: f(() => [
        P(l(hy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": f(() => [
        P(l(wy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), px = /* @__PURE__ */ b({
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
    return (o, s) => (v(), L(ne, null, [
      P(l(en), {
        onClick: n,
        class: q(e.class)
      }, {
        default: f(() => [
          (v(!0), L(ne, null, be(o.headers, (r) => (v(), _(l(Zn), {
            key: r.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${r.value}`] ? w(o.$slots, `cell_header_${r.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), L(ne, { key: 1 }, [
                Z(le(o.row[r.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), _(l(xs), { key: 0 }, {
            default: f(() => [
              w(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : se("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), L(ne, { key: 0 }, be(o.subRows, (r, i) => (v(), _(l(en), { key: i }, {
        default: f(() => [
          (v(!0), L(ne, null, be(o.headers, (u) => (v(), _(l(Zn), {
            key: u.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${u.value}`] ? w(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: r,
                open: a.value
              }) : (v(), L(ne, { key: 1 }, [
                Z(le("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), _(l(xs), { key: 0 }, {
            default: f(() => [
              w(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : se("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : se("", !0)
    ], 64));
  }
}), T_ = { class: "relative w-full overflow-auto" }, I_ = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", T_, [
      me("table", {
        class: q(l(V)("w-full caption-bottom text-sm", e.class))
      }, [
        w(a.$slots, "default")
      ], 2)
    ]));
  }
}), V_ = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("tbody", {
      class: q(l(V)("[&_tr:last-child]:border-0", e.class))
    }, [
      w(a.$slots, "default")
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
      w(a.$slots, "default")
    ], 2));
  }
}), R_ = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("th", {
      class: q(
        l(V)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), F_ = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("thead", {
      class: q(l(V)("[&_tr]:border-b", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), fx = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("tfoot", {
      class: q(
        l(V)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 last:[&>tr]:border-b-0",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), en = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("tr", {
      class: q(
        l(V)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), xs = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("td", {
      class: q(["w-32 p-4 text-center align-middle dark:text-slate-300", e.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), L_ = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("caption", {
      class: q(l(V)("text-sub-text mt-4 text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), N_ = { class: "flex items-center justify-center py-10" }, vx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(en, null, {
      default: f(() => [
        P(Zn, D({
          class: l(V)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: f(() => [
            me("div", N_, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), mx = /* @__PURE__ */ b({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (v(), _(l(I_), null, {
      default: f(() => [
        e.caption ? (v(), _(l(L_), { key: 0 }, {
          default: f(() => [
            Z(le(e.caption), 1)
          ]),
          _: 1
        })) : se("", !0),
        P(l(F_), null, {
          default: f(() => [
            P(l(en), null, {
              default: f(() => [
                (v(!0), L(ne, null, be(e.headers, (n, o) => (v(), _(l(R_), null, {
                  default: f(() => [
                    e.$slots[`header_${e.headers[o].value}`] ? w(e.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), L(ne, { key: 1 }, [
                      Z(le(n.name), 1)
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
        P(l(V_), null, {
          default: f(() => [
            (v(!0), L(ne, null, be(e.rows, (n, o) => (v(), _(l(en), { key: o }, {
              default: f(() => [
                (v(!0), L(ne, null, be(e.headers, (s) => (v(), _(l(Zn), {
                  key: s.value
                }, {
                  default: f(() => [
                    e.$slots[`cell_${s.value}`] ? w(e.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), L(ne, { key: 1 }, [
                      Z(le(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (v(), _(l(xs), { key: 0 }, {
                  default: f(() => [
                    w(e.$slots, "row_actions", { item: n })
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
}), z_ = { class: "text-text" }, hx = /* @__PURE__ */ b({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, s) => (v(), _(l(sd), { open: o.open }, {
      default: f(() => [
        P(l(L0), { "as-child": "" }, {
          default: f(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(l(ld), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: q("max-w-" + o.size)
        }, {
          default: f(() => [
            P(l(N0), null, {
              default: f(() => [
                P(l(z0), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.title ? w(o.$slots, "title", { key: 0 }) : (r = o.headerData) != null && r.title ? (v(), L(ne, { key: 1 }, [
                        Z(le(o.headerData.title), 1)
                      ], 64)) : se("", !0)
                    ];
                  }),
                  _: 3
                }),
                P(l(W0), null, {
                  default: f(() => {
                    var r;
                    return [
                      o.$slots.description ? w(o.$slots, "description", { key: 0 }) : (r = o.headerData) != null && r.description ? (v(), L(ne, { key: 1 }, [
                        Z(le(o.headerData.description), 1)
                      ], 64)) : se("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            me("div", z_, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            P(l(K0), null, {
              default: f(() => [
                w(o.$slots, "footer")
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
}), W_ = /* @__PURE__ */ b({
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
    return (s, r) => (v(), _(l(ag), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gx = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(sg), D(l(n), {
      class: l(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-xs dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        e.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K_ = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => {
      var o;
      return v(), _(Ne((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: q([
          a.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          l(V)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            e.class
          )
        ])
      }, {
        default: f(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (v(), _(Ne(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : se("", !0),
            Z(" " + le(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), $r = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(ng), D(a.value, {
      class: l(V)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(og), D({
      class: l(V)(
        "ring-offset-whit mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        e.class
      )
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U_ = {}, H_ = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function j_(t, e) {
  return v(), L("div", H_, [
    w(t.$slots, "default")
  ]);
}
const G_ = /* @__PURE__ */ hn(U_, [["render", j_]]), bx = /* @__PURE__ */ b({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = C(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), _(l(W_), null, {
      default: f(() => [
        P(l($r), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), L(ne, null, be(n.tabs, (s) => (v(), _(l(K_), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        P(l($r), { class: "flex md:hidden" }, {
          default: f(() => [
            P(l(j0), null, {
              default: f(() => [
                P(l(q0), { "as-child": "" }, {
                  default: f(() => [
                    P(l(St), { variant: "secondary" }, {
                      default: f(() => {
                        var s;
                        return [
                          Z(le(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                P(l(Y0), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), L(ne, null, be(n.tabs, (s) => (v(), _(l(J0), D({
                      key: s.name,
                      ref_for: !0
                    }, s), {
                      default: f(() => [
                        Z(le(s.name), 1)
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
        P(l(G_), null, {
          default: f(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), q_ = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, _x = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(zm), D({
      class: l(V)("p-3", a.class)
    }, l(s)), {
      default: f(({ grid: u, weekDays: c }) => [
        P(l(tw), null, {
          default: f(() => [
            P(l(ow)),
            P(l(aw)),
            P(l(nw))
          ]),
          _: 1
        }),
        me("div", q_, [
          (v(!0), L(ne, null, be(u, (d) => (v(), _(l(Q_), {
            key: d.value.toString()
          }, {
            default: f(() => [
              P(l(Z_), null, {
                default: f(() => [
                  P(l(Br), null, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(c, (p) => (v(), _(l(ew), { key: p }, {
                        default: f(() => [
                          Z(le(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              P(l(X_), null, {
                default: f(() => [
                  (v(!0), L(ne, null, be(d.rows, (p, g) => (v(), _(l(Br), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), L(ne, null, be(p, (m) => (v(), _(l(Y_), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          P(l(J_), {
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
}), Y_ = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Hm), D({
      class: l(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J_ = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Xm), D({
      class: l(V)(
        l(aa)({ variant: "ghost" }),
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
        e.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Um), D({
      class: l(V)("w-full border-collapse space-y-1", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Jm), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Ym), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Br = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Qm), D({
      class: l(V)("mt-2 flex w-full", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ew = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(jm), D({
      class: l(V)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Wm), D({
      class: l(V)("relative flex w-full items-center justify-between pt-1", e.class)
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Km), D({
      class: l(V)("text-text text-sm font-medium", e.class)
    }, l(n)), {
      default: f(({ headingValue: r }) => [
        w(o.$slots, "default", { headingValue: r }, () => [
          Z(le(r), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nw = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(Gm), D({
      class: l(V)(
        l(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          P(l(yy), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ow = /* @__PURE__ */ b({
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
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (v(), _(l(qm), D({
      class: l(V)(
        l(aa)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, l(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          P(l(gy), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sw = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Oh), D(a.value, {
      class: l(V)(
        "bg-border relative shrink-0",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: f(() => [
        e.label ? (v(), L("span", {
          key: 0,
          class: q(
            l(V)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              e.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, le(e.label), 3)) : se("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), lw = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (s, r) => (v(), _(l(Fi), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wx = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(cn), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rw = /* @__PURE__ */ b({
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
      const { class: r, side: i, ...u } = a;
      return u;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(al), null, {
      default: f(() => [
        P(l(rl), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(l(ll), D({
          class: l(V)(l(iw)({ side: r.side }), a.class)
        }, { ...l(s), ...r.$attrs }), {
          default: f(() => [
            w(r.$slots, "default"),
            P(l(cn), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: f(() => [
                P(l(wo), { class: "text-muted-foreground h-4 w-4" })
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
}), xx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Ui), D({
      class: l(V)("text-muted-foreground text-sm", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cx = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(l(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), $x = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(l(V)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Bx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Ki), D({
      class: l(V)("text-foreground text-lg font-semibold", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kx = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Li), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iw = Va(
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
), uw = "sidebar:state", dw = 60 * 60 * 24 * 7, cw = "16rem", pw = "18rem", fw = "3rem", vw = "b", [Bo, mw] = pe("Sidebar"), hw = { class: "flex h-full w-full flex-col" }, gw = ["data-state", "data-collapsible", "data-variant", "data-side"], yw = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Sx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(t) {
    const e = t, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = Bo();
    return (r, i) => r.collapsible === "none" ? (v(), L("div", D({
      key: 0,
      class: l(V)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", e.class)
    }, r.$attrs), [
      w(r.$slots, "default")
    ], 16)) : l(a) ? (v(), _(l(lw), D({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: f(() => [
        P(l(rw), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: r.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: ut({
            "--sidebar-width": l(pw)
          })
        }, {
          default: f(() => [
            me("div", hw, [
              w(r.$slots, "default", { state: l(n) })
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
      me("div", {
        class: q(
          l(V)(
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            r.variant === "floating" || r.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      me("div", D({
        class: l(V)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          r.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          r.variant === "floating" || r.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          e.class
        )
      }, r.$attrs), [
        me("div", yw, [
          w(r.$slots, "default", { state: l(n) })
        ])
      ], 16)
    ], 8, gw));
  }
}), Dx = /* @__PURE__ */ b({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "content",
      class: q(
        l(V)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ex = /* @__PURE__ */ b({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "footer",
      class: q(l(V)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Px = /* @__PURE__ */ b({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "group",
      class: q(l(V)("relative flex w-full min-w-0 flex-col p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ox = /* @__PURE__ */ b({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: q(
        l(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "group-content",
      class: q(l(V)("w-full text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Mx = /* @__PURE__ */ b({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: q(
        l(V)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          e.class
        )
      )
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Tx = /* @__PURE__ */ b({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "header",
      class: q(l(V)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ix = /* @__PURE__ */ b({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(P_, {
      "data-sidebar": "input",
      class: q(
        l(V)(
          "focus-visible:ring-sidebar-ring bg-background h-8 w-full shadow-none focus-visible:ring-2",
          e.class
        )
      )
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vx = /* @__PURE__ */ b({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("main", {
      class: q(
        l(V)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Rx = /* @__PURE__ */ b({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("ul", {
      "data-sidebar": "menu",
      class: q(l(V)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Fx = /* @__PURE__ */ b({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(N), {
      "data-sidebar": "menu-action",
      class: q(
        l(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground text-sidebar-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
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
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), Lx = /* @__PURE__ */ b({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      "data-sidebar": "menu-badge",
      class: q(
        l(V)(
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
      w(a.$slots, "default")
    ], 2));
  }
}), bw = /* @__PURE__ */ b({
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
    return (s, r) => (v(), _(l($g), H(G(l(o))), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _w = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(Dg), null, {
      default: f(() => [
        P(l(Sg), D({ ...l(s), ...r.$attrs }, {
          class: l(V)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Nx = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(l(Su), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ww = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(Bg), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kr = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(l(N), D({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: l(V)(l($w)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), zx = /* @__PURE__ */ b({
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
      const { tooltip: s, ...r } = e;
      return r;
    });
    return (s, r) => s.tooltip ? (v(), _(l(bw), { key: 1 }, {
      default: f(() => [
        P(l(ww), { "as-child": "" }, {
          default: f(() => [
            P(kr, H(G({ ...o.value, ...s.$attrs })), {
              default: f(() => [
                w(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        P(l(_w), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: f(() => [
            typeof s.tooltip == "string" ? (v(), L(ne, { key: 0 }, [
              Z(le(s.tooltip), 1)
            ], 64)) : (v(), _(Ne(s.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (v(), _(kr, H(D({ key: 0 }, { ...o.value, ...s.$attrs })), {
      default: f(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wx = /* @__PURE__ */ b({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("li", {
      "data-sidebar": "menu-item",
      class: q(l(V)("group/menu-item relative", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Sr = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("div", {
      class: q(l(V)("bg-skeleton animate-pulse rounded-md", e.class))
    }, null, 2));
  }
}), Kx = /* @__PURE__ */ b({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (v(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: q(l(V)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (v(), _(Sr, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : se("", !0),
      P(Sr, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: ut({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), Ux = /* @__PURE__ */ b({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), L("ul", {
      "data-sidebar": "menu-badge",
      class: q(
        l(V)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Hx = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(l(N), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: q(
        l(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          a.size === "sm" && "text-xs",
          a.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), xw = {};
function Cw(t, e) {
  return v(), L("li", null, [
    w(t.$slots, "default")
  ]);
}
const jx = /* @__PURE__ */ hn(xw, [["render", Cw]]), Gx = /* @__PURE__ */ b({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = nd("(max-width: 768px)"), s = O(!1), r = Dl(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      r.value = p, document.cookie = `${uw}=${r.value}; path=/; max-age=${dw}`;
    }
    function u(p) {
      s.value = p;
    }
    function c() {
      return o.value ? u(!s.value) : i(!r.value);
    }
    Xn("keydown", (p) => {
      p.key === vw && (p.metaKey || p.ctrlKey) && (p.preventDefault(), c());
    });
    const d = C(() => r.value ? "expanded" : "collapsed");
    return mw({
      state: d,
      open: r,
      setOpen: i,
      isMobile: o,
      openMobile: s,
      setOpenMobile: u,
      toggleSidebar: c
    }), (p, g) => (v(), _(l(Su), { "delay-duration": 0 }, {
      default: f(() => [
        me("div", D({
          style: {
            "--sidebar-width": l(cw),
            "--sidebar-width-icon": l(fw)
          },
          class: l(V)(
            "group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-auto",
            a.class
          )
        }, p.$attrs), [
          w(p.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), qx = /* @__PURE__ */ b({
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
        l(V)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          e.class
        )
      ),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...s) => l(a) && l(a)(...s))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Yx = /* @__PURE__ */ b({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(sw, {
      "data-sidebar": "separator",
      class: q(l(V)("bg-sidebar-border mx-2 w-auto", e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Jx = /* @__PURE__ */ b({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Bo();
    return (n, o) => (v(), _(St, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: q(l(V)("h-7 w-7", e.class)),
      onClick: l(a)
    }, {
      default: f(() => [
        P(l(by)),
        o[0] || (o[0] = me("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), $w = Va(
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
), Qx = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(Uh), D({
      class: l(V)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, l(s)), {
      default: f(() => [
        P(l(Gh), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            P(l(qh), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), L(ne, null, be(r.modelValue, (u, c) => (v(), _(l(jh), {
          key: c,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Bw = 5, kw = 5e6, bt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Go = 0;
function Sw() {
  return Go = (Go + 1) % Number.MAX_VALUE, Go.toString();
}
const qo = /* @__PURE__ */ new Map();
function Dr(t) {
  if (qo.has(t)) return;
  const e = setTimeout(() => {
    qo.delete(t), Ga({
      type: bt.REMOVE_TOAST,
      toastId: t
    });
  }, kw);
  qo.set(t, e);
}
const Xe = O({
  toasts: []
});
function Ga(t) {
  switch (t.type) {
    case bt.ADD_TOAST:
      Xe.value.toasts = [t.toast, ...Xe.value.toasts].slice(0, Bw);
      break;
    case bt.UPDATE_TOAST:
      Xe.value.toasts = Xe.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case bt.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? Dr(e) : Xe.value.toasts.forEach((a) => {
        Dr(a.id);
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
function Dw() {
  return {
    toasts: C(() => Xe.value.toasts),
    toast: Ew,
    dismiss: (t) => Ga({ type: bt.DISMISS_TOAST, toastId: t })
  };
}
function Ew(t) {
  const e = Sw(), a = (o) => Ga({
    type: bt.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => Ga({ type: bt.DISMISS_TOAST, toastId: e });
  return Ga({
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
const Pw = { class: "flex gap-3" }, Ow = { class: "grid gap-1" }, Xx = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = Dw();
    return (a, n) => (v(), _(l(Vw), null, {
      default: f(() => [
        (v(!0), L(ne, null, be(l(e), (o) => (v(), _(l(Aw), D({
          key: o.id,
          ref_for: !0
        }, o, { class: "my-1" }), {
          default: f(() => [
            me("div", Pw, [
              (v(), _(Ne(o.icon), {
                class: q(l(V)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              me("div", Ow, [
                o.title ? (v(), _(l(Iw), { key: 0 }, {
                  default: f(() => [
                    Z(le(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : se("", !0),
                o.description ? (v(), L(ne, { key: 1 }, [
                  bd(o.description) ? (v(), _(l(Er), { key: 0 }, {
                    default: f(() => [
                      (v(), _(Ne(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), _(l(Er), { key: 1 }, {
                    default: f(() => [
                      Z(le(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : se("", !0),
                P(l(Tw))
              ]),
              (v(), _(Ne(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        P(l(Mw))
      ]),
      _: 1
    }));
  }
}), Aw = /* @__PURE__ */ b({
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
      const { class: r, ...i } = a;
      return i;
    }), s = ue(o, n);
    return (r, i) => (v(), _(l(gg), D(l(s), {
      class: l(V)(l(Rw)({ variant: r.variant }), a.class),
      "onUpdate:open": r.onOpenChange
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Mw = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(bg), D(a.value, {
      class: l(V)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), Zx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(yg), H(G(a.value)), {
      default: f(() => [
        P(l(St), {
          variant: n.variant,
          class: q(e.class)
        }, {
          default: f(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), Tw = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(Bu), D(a.value, {
      class: l(V)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        e.class
      )
    }), {
      default: f(() => [
        P(l(wo), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Iw = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(_g), D(a.value, {
      class: l(V)("text-sm font-semibold", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Er = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(l(wg), D({
      class: l(V)("text-sm opacity-90", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vw = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(l(rg), H(G(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rw = Va(
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
  Gw as Accordion,
  qw as AccordionContent,
  Yw as AccordionItem,
  Jw as AccordionTrigger,
  Qw as Badge,
  oa as Base,
  G0 as BaseDropdownMenuItem,
  Xw as Breadcrumb,
  Zw as BreadcrumbEllipsis,
  e1 as BreadcrumbItem,
  t1 as BreadcrumbLink,
  a1 as BreadcrumbList,
  n1 as BreadcrumbPage,
  o1 as BreadcrumbSeparator,
  St as Button,
  k1 as Calendar,
  Hu as CalendarCell,
  ju as CalendarCellTrigger,
  Gu as CalendarGrid,
  qu as CalendarGridBody,
  Yu as CalendarGridHead,
  Qn as CalendarGridRow,
  Ju as CalendarHeadCell,
  Qu as CalendarHeader,
  Xu as CalendarHeading,
  o0 as CalendarNextButton,
  s0 as CalendarPrevButton,
  R0 as CalendarWithSelect,
  s1 as Card,
  u1 as CardContent,
  i1 as CardDescription,
  d1 as CardFooter,
  l1 as CardHeader,
  r1 as CardTitle,
  e_ as CharacterCount,
  ex as Checkbox,
  px as CollapsibleTableRow,
  y1 as Combobox,
  b1 as ComboboxAnchor,
  v1 as ComboboxCancel,
  _1 as ComboboxEmpty,
  w1 as ComboboxGroup,
  x1 as ComboboxInput,
  C1 as ComboboxItem,
  h1 as ComboboxItemIndicator,
  $1 as ComboboxList,
  B1 as ComboboxSeparator,
  g1 as ComboboxTrigger,
  F0 as Command,
  M1 as CommandDialog,
  T1 as CommandEmpty,
  I1 as CommandGroup,
  V1 as CommandInput,
  R1 as CommandItem,
  F1 as CommandList,
  L1 as CommandSeparator,
  N1 as CommandShortcut,
  tx as DatePicker,
  o_ as Description,
  sd as Dialog,
  O1 as DialogClose,
  ld as DialogContent,
  W0 as DialogDescription,
  K0 as DialogFooter,
  N0 as DialogHeader,
  A1 as DialogScrollContent,
  z0 as DialogTitle,
  L0 as DialogTrigger,
  j0 as DropdownMenu,
  U1 as DropdownMenuCheckboxItem,
  Y0 as DropdownMenuContent,
  z1 as DropdownMenuGroup,
  K1 as DropdownMenuItem,
  q1 as DropdownMenuLabel,
  J0 as DropdownMenuLink,
  dm as DropdownMenuPortal,
  W1 as DropdownMenuRadioGroup,
  H1 as DropdownMenuRadioItem,
  G1 as DropdownMenuSeparator,
  j1 as DropdownMenuShortcut,
  Y1 as DropdownMenuSub,
  Q1 as DropdownMenuSubContent,
  J1 as DropdownMenuSubTrigger,
  q0 as DropdownMenuTrigger,
  l_ as Error,
  X1 as Form,
  f_ as FormElement,
  Z1 as FormGrid,
  ax as ImageUpload,
  P_ as Input,
  rd as Label,
  mx as LumuixDatatable,
  hx as LumuixModal,
  cx as LumuixModeToggle,
  bx as LumuixTabs,
  Uw as Pagination,
  sx as PaginationDetails,
  lx as PaginationEllipsis,
  rx as PaginationFirst,
  ix as PaginationLast,
  Hw as PaginationList,
  jw as PaginationListItem,
  ux as PaginationNext,
  dx as PaginationPrev,
  y_ as Popover,
  __ as PopoverContent,
  b_ as PopoverTrigger,
  _x as RangeCalendar,
  Y_ as RangeCalendarCell,
  J_ as RangeCalendarCellTrigger,
  Q_ as RangeCalendarGrid,
  X_ as RangeCalendarGridBody,
  Z_ as RangeCalendarGridHead,
  Br as RangeCalendarGridRow,
  ew as RangeCalendarHeadCell,
  tw as RangeCalendarHeader,
  aw as RangeCalendarHeading,
  nw as RangeCalendarNextButton,
  ow as RangeCalendarPrevButton,
  nx as Select,
  _s as SelectContent,
  S1 as SelectGroup,
  ws as SelectItem,
  D1 as SelectItemText,
  E1 as SelectLabel,
  gs as SelectRoot,
  I0 as SelectScrollDownButton,
  T0 as SelectScrollUpButton,
  P1 as SelectSeparator,
  bs as SelectTrigger,
  ys as SelectValue,
  sw as Separator,
  lw as Sheet,
  wx as SheetClose,
  rw as SheetContent,
  xx as SheetDescription,
  Cx as SheetFooter,
  $x as SheetHeader,
  Bx as SheetTitle,
  kx as SheetTrigger,
  Sx as Sidebar,
  Dx as SidebarContent,
  Ex as SidebarFooter,
  Px as SidebarGroup,
  Ox as SidebarGroupAction,
  Ax as SidebarGroupContent,
  Mx as SidebarGroupLabel,
  Tx as SidebarHeader,
  Ix as SidebarInput,
  Vx as SidebarInset,
  Rx as SidebarMenu,
  Fx as SidebarMenuAction,
  Lx as SidebarMenuBadge,
  zx as SidebarMenuButton,
  Wx as SidebarMenuItem,
  Kx as SidebarMenuSkeleton,
  Ux as SidebarMenuSub,
  Hx as SidebarMenuSubButton,
  jx as SidebarMenuSubItem,
  Gx as SidebarProvider,
  qx as SidebarRail,
  Yx as SidebarSeparator,
  Jx as SidebarTrigger,
  Sr as Skeleton,
  Qx as Slider,
  G_ as TabBaseContent,
  I_ as Table,
  V_ as TableBody,
  L_ as TableCaption,
  Zn as TableCell,
  vx as TableEmpty,
  fx as TableFooter,
  R_ as TableHead,
  F_ as TableHeader,
  en as TableRow,
  xs as TableRowAction,
  yx as TabsContent,
  K_ as TabsItem,
  $r as TabsList,
  W_ as TabsRoot,
  gx as TabsTrigger,
  ox as TextArea,
  Aw as Toast,
  Zx as ToastAction,
  Tw as ToastClose,
  Er as ToastDescription,
  Vw as ToastProvider,
  Iw as ToastTitle,
  Mw as ToastViewport,
  Xx as Toaster,
  A_ as Toggle,
  bw as Tooltip,
  _w as TooltipContent,
  Nx as TooltipProvider,
  ww as TooltipTrigger,
  xy as badgeVariants,
  aa as buttonVariants,
  iw as sheetVariants,
  $w as sidebarMenuButtonVariants,
  Cy as spinnerSize,
  Ew as toast,
  Rw as toastVariants,
  Bo as useSidebar,
  Dw as useToast
};
