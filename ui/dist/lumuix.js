var Er = (t) => {
  throw TypeError(t);
};
var ud = (t, e, a) => e.has(t) || Er("Cannot " + a);
var La = (t, e, a) => (ud(t, e, "read from private field"), a ? a.call(t) : e.get(t)), Pr = (t, e, a) => e.has(t) ? Er("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a);
import * as ca from "vue";
import { computed as C, ref as P, shallowRef as wt, watch as X, getCurrentScope as eo, onScopeDispose as to, shallowReadonly as ra, unref as r, defineComponent as b, toRefs as he, createBlock as _, openBlock as f, withCtx as v, renderSlot as w, getCurrentInstance as Ee, toRef as Cs, camelize as ao, withKeys as Te, h as Ie, onMounted as de, createElementVNode as ve, toDisplayString as re, normalizeProps as U, guardReactiveProps as q, createTextVNode as Z, mergeProps as O, withModifiers as $e, createCommentVNode as oe, createElementBlock as L, Fragment as ne, renderList as be, resolveDynamicComponent as Ne, createVNode as E, useSlots as El, onBeforeMount as dd, Teleport as tn, watchEffect as we, onBeforeUnmount as no, nextTick as ae, withDirectives as $a, vShow as $s, watchSyncEffect as Pl, isRef as jt, inject as an, provide as oo, toHandlers as cd, normalizeStyle as dt, toHandlerKey as Al, Comment as Ss, cloneVNode as Ml, vModelSelect as pd, onBeforeUpdate as fd, onUpdated as vd, markRaw as Tl, onUnmounted as je, readonly as Sa, toRaw as md, reactive as so, customRef as Bs, mergeDefaults as ks, watchPostEffect as Os, effectScope as Ds, normalizeClass as G, toValue as Se, withMemo as hd, hasInjectionContext as Il, mergeModels as Yo, useModel as Vl, vModelDynamic as gd, vModelText as yd, isVNode as bd } from "vue";
function pa(t, e) {
  return t - e * Math.floor(t / e);
}
const Rl = 1721426;
function Ht(t, e, a, n) {
  e = nn(t, e);
  let o = e - 1, s = -2;
  return a <= 2 ? s = 0 : Vt(e) && (s = -1), Rl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + s + n);
}
function Vt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function nn(t, e) {
  return t === "BC" ? 1 - e : e;
}
function ro(t) {
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
    let a = e, n = a - Rl, o = Math.floor(n / 146097), s = pa(n, 146097), l = Math.floor(s / 36524), i = pa(s, 36524), u = Math.floor(i / 1461), c = pa(i, 1461), d = Math.floor(c / 365), p = o * 400 + l * 100 + u * 4 + d + (l !== 4 && d !== 4 ? 1 : 0), [g, m] = ro(p), h = a - Ht(g, m, 1, 1), y = 2;
    a < Ht(g, m, 3, 1) ? y = 0 : Vt(m) && (y = 1);
    let x = Math.floor(((h + y) * 12 + 373) / 367), $ = a - Ht(g, m, x, 1) + 1;
    return new Be(g, m, x, $);
  }
  toJulianDay(e) {
    return Ht(e.era, e.year, e.month, e.day);
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
function Pe(t, e) {
  return e = Le(e, t.calendar), t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Es(t, e) {
  return e = Le(e, t.calendar), t = qa(t), e = qa(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function rt(t, e) {
  return Ps(t.calendar, e.calendar) && Pe(t, e);
}
function Ar(t, e) {
  return Ps(t.calendar, e.calendar) && Es(t, e);
}
function Ps(t, e) {
  var a, n, o, s;
  return (s = (o = (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && o !== void 0 ? o : (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && s !== void 0 ? s : t.identifier === e.identifier;
}
function Fl(t, e) {
  return Pe(t, Fn(e));
}
function Ll(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = Sd(e), s = Math.ceil(n + 1 - o) % 7;
  return s < 0 && (s += 7), s;
}
function xd(t) {
  return yt(Date.now(), t);
}
function Fn(t) {
  return Od(xd(t));
}
function Nl(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Cd(t, e) {
  return Mr(t) - Mr(e);
}
function Mr(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let ko = null;
function Ct() {
  return ko == null && (ko = new Intl.DateTimeFormat().resolvedOptions().timeZone), ko;
}
function qa(t) {
  return t.subtract({
    days: t.day - 1
  });
}
function Tr(t) {
  return t.add({
    days: t.calendar.getDaysInMonth(t) - t.day
  });
}
const Ir = /* @__PURE__ */ new Map();
function $d(t) {
  if (Intl.Locale) {
    let a = Ir.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Ir.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function Sd(t) {
  let e = $d(t);
  return e && wd[e] || 0;
}
function ga(t) {
  t = Le(t, new tt());
  let e = nn(t.era, t.year);
  return jl(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function jl(t, e, a, n, o, s, l) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, s, l), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function Jo(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === Ct()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: s, minute: l, second: i } = zl(t, e);
  return jl(a, n, o, s, l, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const Vr = /* @__PURE__ */ new Map();
function zl(t, e) {
  let a = Vr.get(e);
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
  }), Vr.set(e, a));
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
const Rr = 864e5;
function Bd(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((s) => kd(t, e, s));
}
function kd(t, e, a) {
  let n = zl(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function gt(t, e, a = "compatible") {
  let n = ya(t);
  if (e === "UTC") return ga(n);
  if (e === Ct() && a === "compatible") {
    n = Le(n, new tt());
    let u = /* @__PURE__ */ new Date(), c = nn(n.era, n.year);
    return u.setFullYear(c, n.month - 1, n.day), u.setHours(n.hour, n.minute, n.second, n.millisecond), u.getTime();
  }
  let o = ga(n), s = Jo(o - Rr, e), l = Jo(o + Rr, e), i = Bd(n, e, o - s, o - l);
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
      return Math.min(o - s, o - l);
    case "compatible":
    case "later":
      return Math.max(o - s, o - l);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Wl(t, e, a = "compatible") {
  return new Date(gt(t, e, a));
}
function yt(t, e) {
  let a = Jo(t, e), n = new Date(t + a), o = n.getUTCFullYear(), s = n.getUTCMonth() + 1, l = n.getUTCDate(), i = n.getUTCHours(), u = n.getUTCMinutes(), c = n.getUTCSeconds(), d = n.getUTCMilliseconds();
  return new _a(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, s, l, e, a, i, u, c, d);
}
function Od(t) {
  return new Be(t.calendar, t.era, t.year, t.month, t.day);
}
function ya(t, e) {
  let a = 0, n = 0, o = 0, s = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: s } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: s } = e), new ba(t.calendar, t.era, t.year, t.month, t.day, a, n, o, s);
}
function Le(t, e) {
  if (Ps(t.calendar, e)) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, qt(n), n;
}
function Dd(t, e, a) {
  if (t instanceof _a)
    return t.timeZone === e ? t : Pd(t, e);
  let n = gt(t, e, a);
  return yt(n, e);
}
function Ed(t) {
  let e = ga(t) - t.offset;
  return new Date(e);
}
function Pd(t, e) {
  let a = ga(t) - t.offset;
  return Le(yt(a, e), t.calendar);
}
const Na = 36e5;
function lo(t, e) {
  let a = t.copy(), n = "hour" in a ? Id(a, e) : 0;
  Qo(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, Xo(a), Kl(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, Ad(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var s, l;
    let u = (s = (l = a.calendar).isInverseEra) === null || s === void 0 ? void 0 : s.call(l, a);
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
function Kl(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function qt(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), Kl(t);
}
function Ul(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function Hl(t, e) {
  return lo(t, Ul(e));
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
      u = bt(u, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[u], qt(o);
      break;
    }
    case "year":
      var s, l;
      !((s = (l = o.calendar).isInverseEra) === null || s === void 0) && s.call(l, o) && (a = -a), o.year = bt(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
      break;
    case "month":
      o.month = bt(t.month, a, 1, t.calendar.getMonthsInYear(t), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = bt(t.day, a, 1, t.calendar.getDaysInMonth(t), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return t.calendar.balanceDate && t.calendar.balanceDate(o), qt(o), o;
}
function Gl(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let s = t.hour, l = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let u = s >= 12;
        l = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = bt(s, a, l, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = bt(t.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = bt(t.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = bt(t.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return o;
}
function bt(t, e, a, n, o = !1) {
  if (o) {
    t += Math.sign(e), t < a && (t = n);
    let s = Math.abs(e);
    e > 0 ? t = Math.ceil(t / s) * s : t = Math.floor(t / s) * s, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function ql(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = lo(ya(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = gt(o, t.timeZone);
  } else
    a = ga(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = yt(a, t.timeZone);
  return Le(n, t.calendar);
}
function Vd(t, e) {
  return ql(t, Ul(e));
}
function Rd(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, s = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let h = t.hour >= 12;
        o = h ? 12 : 0, s = h ? 23 : 11;
      }
      let l = ya(t), i = Le(Ln(l, {
        hour: o
      }), new tt()), u = [
        gt(i, t.timeZone, "earlier"),
        gt(i, t.timeZone, "later")
      ].filter((h) => yt(h, t.timeZone).day === i.day)[0], c = Le(Ln(l, {
        hour: s
      }), new tt()), d = [
        gt(c, t.timeZone, "earlier"),
        gt(c, t.timeZone, "later")
      ].filter((h) => yt(h, t.timeZone).day === c.day).pop(), p = ga(t) - t.offset, g = Math.floor(p / Na), m = p % Na;
      return p = bt(g, a, Math.floor(u / Na), Math.floor(d / Na), n == null ? void 0 : n.round) * Na + m, Le(yt(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return Gl(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Ms(ya(t), e, a, n), s = gt(o, t.timeZone);
      return Le(yt(s, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function Fd(t, e, a) {
  let n = ya(t), o = Ln(As(n, e), e);
  if (o.compare(n) === 0) return t;
  let s = gt(o, t.timeZone, a);
  return Le(yt(s, t.timeZone), t.calendar);
}
function Ld(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function Yl(t) {
  let e = Le(t, new tt()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function Jl(t) {
  return `${Yl(t)}T${Ld(t)}`;
}
function Nd(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function jd(t) {
  return `${Jl(t)}${Nd(t.offset)}[${t.timeZone}]`;
}
function zd(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ts(t, e, a) {
  zd(t, e), e.set(t, a);
}
function Is(t) {
  let e = typeof t[0] == "object" ? t.shift() : new tt(), a;
  if (typeof t[0] == "string") a = t.shift();
  else {
    let l = e.getEras();
    a = l[l.length - 1];
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
var Wd = /* @__PURE__ */ new WeakMap();
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
    return Hl(this, e);
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
    return Wl(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Yl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return Nl(this, e);
  }
  constructor(...e) {
    Ts(this, Wd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, l] = Is(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = l, qt(this);
  }
}
var Kd = /* @__PURE__ */ new WeakMap();
class ba {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ba(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new ba(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return lo(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Hl(this, e);
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
        return Gl(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return Wl(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Jl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = Nl(this, e);
    return a === 0 ? Cd(this, ya(e)) : a;
  }
  constructor(...e) {
    Ts(this, Kd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, l] = Is(e);
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = l, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, qt(this);
  }
}
var Ud = /* @__PURE__ */ new WeakMap();
class _a {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new _a(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new _a(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return ql(this, e);
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
    return Ed(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return jd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Dd(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Ts(this, Ud, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, s, l] = Is(e), i = e.shift(), u = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = s, this.day = l, this.timeZone = i, this.offset = u, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, qt(this);
  }
}
const fa = [
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
], Hd = [
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
function Fr(t) {
  const e = fa.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? fa.length - 1 : e === 0 ? 0 : e - 1;
}
function Oo(t) {
  let e = An[It.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new Be(t.year + e, t.month, t.day);
}
class Gd extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Fr(a);
    return new Be(this, It[n], a.year - An[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Oo(e));
  }
  balanceDate(e) {
    let a = Oo(e), n = Fr(a);
    It[n] !== e.era && (e.era = It[n], e.year = a.year - An[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = It.indexOf(e.era), n = Hd[a];
    if (n != null) {
      let [o, s, l] = n, i = o - An[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(s, e.month), e.month === s && (e.day = Math.min(l, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, s] = fa[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(s, e.day));
    }
  }
  getEras() {
    return It;
  }
  getYearsInEra(e) {
    let a = It.indexOf(e.era), n = fa[a], o = fa[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let s = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && s++, s;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Oo(e));
  }
  getMinimumMonthInYear(e) {
    let a = Lr(e);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let a = Lr(e);
    return a && e.month === a[1] ? a[2] : 1;
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese";
  }
}
function Lr(t) {
  if (t.year === 1) {
    let e = It.indexOf(t.era);
    return fa[e];
  }
}
const Ql = -543;
class qd extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = nn(a.era, a.year);
    return new Be(this, n - Ql, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Nr(e));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Nr(e));
  }
  balanceDate() {
  }
  constructor(...e) {
    super(...e), this.identifier = "buddhist";
  }
}
function Nr(t) {
  let [e, a] = ro(t.year + Ql);
  return new Be(e, a, t.month, t.day);
}
const Nn = 1911;
function Xl(t) {
  return t.era === "minguo" ? t.year + Nn : 1 - t.year + Nn;
}
function jr(t) {
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
    let a = super.fromJulianDay(e), n = nn(a.era, a.year), [o, s] = jr(n);
    return new Be(this, o, s, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(zr(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = jr(Xl(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(zr(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - Nn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function zr(t) {
  let [e, a] = ro(Xl(t));
  return new Be(e, a, t.month, t.day);
}
const Wr = 1948320, Kr = [
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
    let a = e - Wr, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), s = a - o, l = s < 216 ? Math.floor(s / 31) : Math.floor((s - 6) / 30), i = s - Kr[l] + 1;
    return new Be(this, n, l + 1, i);
  }
  toJulianDay(e) {
    let a = Wr - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += Kr[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || pa(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Do = 78, Ur = 80;
class Qd extends tt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Do, o = e - Ht(a.era, a.year, 1, 1), s;
    o < Ur ? (n--, s = Vt(a.year - 1) ? 31 : 30, o += s + 155 + 90 + 10) : (s = Vt(a.year) ? 31 : 30, o -= Ur);
    let l, i;
    if (o < s)
      l = 1, i = o + 1;
    else {
      let u = o - s;
      u < 155 ? (l = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new Be(this, n, l, i);
  }
  toJulianDay(e) {
    let a = e.year + Do, [n, o] = ro(a), s, l;
    return Vt(o) ? (s = 31, l = Ht(n, o, 3, 21)) : (s = 30, l = Ht(n, o, 3, 22)), e.month === 1 ? l + e.day - 1 : (l += s + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (l += (e.month - 7) * 30), l += e.day - 1, l);
  }
  getDaysInMonth(e) {
    return e.month === 1 && Vt(e.year + Do) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
const jn = 1948440, Hr = 1948439, qe = 1300, la = 1600, Xd = 460322;
function zn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function Zl(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + zn(e, n, 1, 1))) / 29.5) + 1), s = a - zn(e, n, o, 1) + 1;
  return new Be(t, n, o, s);
}
function Gr(t) {
  return (14 + 11 * t) % 30 < 11;
}
class Vs {
  fromJulianDay(e) {
    return Zl(this, jn, e);
  }
  toJulianDay(e) {
    return zn(jn, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = 29 + e.month % 2;
    return e.month === 12 && Gr(e.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return Gr(e.year) ? 355 : 354;
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
    return Zl(this, Hr, e);
  }
  toJulianDay(e) {
    return zn(Hr, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const ec = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Zo, va;
function Mn(t) {
  return Xd + va[t - qe];
}
function Wa(t, e) {
  let a = t - qe, n = 1 << 11 - (e - 1);
  return Zo[a] & n ? 30 : 29;
}
function qr(t, e) {
  let a = Mn(t);
  for (let n = 1; n < e; n++) a += Wa(t, n);
  return a;
}
function Yr(t) {
  return va[t + 1 - qe] - va[t - qe];
}
class tc extends Vs {
  fromJulianDay(e) {
    let a = e - jn, n = Mn(qe), o = Mn(la);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let s = qe - 1, l = 1, i = 1;
      for (; i > 0; ) {
        s++, i = a - Mn(s) + 1;
        let u = Yr(s);
        if (i === u) {
          l = 12;
          break;
        } else if (i < u) {
          let c = Wa(s, l);
          for (l = 1; i > c; )
            i -= c, l++, c = Wa(s, l);
          break;
        }
      }
      return new Be(this, s, l, a - qr(s, l) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < qe || e.year > la ? super.toJulianDay(e) : jn + qr(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < qe || e.year > la ? super.getDaysInMonth(e) : Wa(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < qe || e.year > la ? super.getDaysInYear(e) : Yr(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Zo || (Zo = new Uint16Array(Uint8Array.from(atob(ec), (e) => e.charCodeAt(0)).buffer)), !va) {
      va = new Uint32Array(la - qe + 1);
      let e = 0;
      for (let a = qe; a <= la; a++) {
        va[a - qe] = e;
        for (let n = 1; n <= 12; n++) e += Wa(a, n);
      }
    }
  }
}
const Jr = 347997, ei = 1080, ti = 24 * ei, ac = 29, nc = 12 * ei + 793, oc = ac * ti + nc;
function Ut(t) {
  return pa(t * 7 + 1, 19) < 7;
}
function Tn(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return pa(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function sc(t) {
  let e = Tn(t - 1), a = Tn(t);
  return Tn(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function Ua(t) {
  return Tn(t) + sc(t);
}
function ai(t) {
  return Ua(t + 1) - Ua(t);
}
function rc(t) {
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
  if (e >= 6 && !Ut(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = rc(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? Ut(t) ? 30 : 0 : 30;
}
class lc {
  fromJulianDay(e) {
    let a = e - Jr, n = a * ti / oc, o = Math.floor((19 * n + 234) / 235) + 1, s = Ua(o), l = Math.floor(a - s);
    for (; l < 1; )
      o--, s = Ua(o), l = Math.floor(a - s);
    let i = 1, u = 0;
    for (; u < l; )
      u += yn(o, i), i++;
    i--, u -= yn(o, i);
    let c = l - u;
    return new Be(this, o, i, c);
  }
  toJulianDay(e) {
    let a = Ua(e.year);
    for (let n = 1; n < e.month; n++) a += yn(e.year, n);
    return a + e.day + Jr;
  }
  getDaysInMonth(e) {
    return yn(e.year, e.month);
  }
  getMonthsInYear(e) {
    return Ut(e.year) ? 13 : 12;
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
    a.year !== e.year && (Ut(a.year) && !Ut(e.year) && a.month > 6 ? e.month-- : !Ut(a.year) && Ut(e.year) && a.month > 6 && e.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const es = 1723856, Qr = 1824665, ts = 5500;
function Wn(t, e, a, n) {
  return t + 365 * e + Math.floor(e / 4) + 30 * (a - 1) + n - 1;
}
function Rs(t, e) {
  let a = Math.floor(4 * (e - t) / 1461), n = 1 + Math.floor((e - Wn(t, a, 1, 1)) / 30), o = e + 1 - Wn(t, a, n, 1);
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
    return e.era === "AA" && (a -= ts), Wn(es, a, e.month, e.day);
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
    let [a, n, o] = Rs(Qr, e), s = "CE";
    return a <= 0 && (s = "BCE", a = 1 - a), new Be(this, s, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), Wn(Qr, a, e.month, e.day);
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
      return new lc();
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
let Eo = /* @__PURE__ */ new Map();
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
  if (Eo.has(a)) return Eo.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return Eo.set(a, n), n;
}
let Po = null;
function pc() {
  return Po == null && (Po = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Po;
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
  return t instanceof ba;
}
function Ls(t) {
  return t instanceof _a;
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
function Ka(t, e) {
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
  return Ka(t, e) && Rt(t, a);
}
function xc(t, e, a) {
  const n = Ll(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function Cc(t, e, a) {
  const n = Ll(t, a), o = e === 0 ? 6 : e - 1;
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
function Xr(t, e) {
  const a = [];
  let n = t.add({ days: 1 });
  const o = e;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function Mo(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, s = $t(e), l = Array.from({ length: s }, (x, $) => e.set({ day: $ + 1 })), i = qa(e), u = Tr(e), c = xc(i, a, o), d = Cc(u, a, o), p = Xr(c.subtract({ days: 1 }), i), g = Xr(u, d.add({ days: 1 })), m = p.length + l.length + g.length;
  if (n && m < 42) {
    const x = 42 - m;
    let $ = g[g.length - 1];
    $ || ($ = Tr(e));
    const B = Array.from({ length: x }, (S, D) => {
      const k = D + 1;
      return $.add({ days: k });
    });
    g.push(...B);
  }
  const h = p.concat(l, g), y = mc(h, 7);
  return {
    value: e,
    cells: h,
    rows: y
  };
}
function Sc(t) {
  const { dateObj: e, startIndex: a, endIndex: n } = t, o = Array.from({ length: Math.abs(a ?? 0) + n }, (s, l) => l <= Math.abs(a ?? 0) ? e.subtract({ years: l }).set({ day: 1, month: 1 }) : e.add({ years: l - n }).set({ day: 1, month: 1 }));
  return o.sort((s, l) => s.year - l.year), o;
}
function Bc(t) {
  const { dateObj: e, numberOfMonths: a = 1, pagedNavigation: n = !1 } = t;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, s) => qa(e.set({ month: s * a + 1 }))) : Array.from({ length: 12 }, (o, s) => qa(e.set({ month: s + 1 })));
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
  for (let s = 1; s < e; s++) {
    const l = a.add({ months: s });
    o.push(
      Mo({
        ...n,
        dateObj: l
      })
    );
  }
  return o;
}
const kc = ["top", "right", "bottom", "left"], Ft = Math.min, ze = Math.max, Kn = Math.round, bn = Math.floor, it = (t) => ({
  x: t,
  y: t
}), Oc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Dc = {
  start: "end",
  end: "start"
};
function as(t, e, a) {
  return ze(t, Ft(e, a));
}
function St(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Bt(t) {
  return t.split("-")[0];
}
function Ba(t) {
  return t.split("-")[1];
}
function Ns(t) {
  return t === "x" ? "y" : "x";
}
function js(t) {
  return t === "y" ? "height" : "width";
}
function lt(t) {
  return ["top", "bottom"].includes(Bt(t)) ? "y" : "x";
}
function zs(t) {
  return Ns(lt(t));
}
function Ec(t, e, a) {
  a === void 0 && (a = !1);
  const n = Ba(t), o = zs(t), s = js(o);
  let l = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (l = Un(l)), [l, Un(l)];
}
function Pc(t) {
  const e = Un(t);
  return [ns(t), e, ns(e)];
}
function ns(t) {
  return t.replace(/start|end/g, (e) => Dc[e]);
}
function Ac(t, e, a) {
  const n = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return a ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? s : l;
    default:
      return [];
  }
}
function Mc(t, e, a, n) {
  const o = Ba(t);
  let s = Ac(Bt(t), a === "start", n);
  return o && (s = s.map((l) => l + "-" + o), e && (s = s.concat(s.map(ns)))), s;
}
function Un(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Oc[e]);
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
function ri(t) {
  return typeof t != "number" ? Tc(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Hn(t) {
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
function Zr(t, e, a) {
  let {
    reference: n,
    floating: o
  } = t;
  const s = lt(e), l = zs(e), i = js(l), u = Bt(e), c = s === "y", d = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[i] / 2 - o[i] / 2;
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
      m[l] -= g * (a && c ? -1 : 1);
      break;
    case "end":
      m[l] += g * (a && c ? -1 : 1);
      break;
  }
  return m;
}
const Ic = async (t, e, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l
  } = a, i = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let c = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: p
  } = Zr(c, n, u), g = n, m = {}, h = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: x,
      fn: $
    } = i[y], {
      x: B,
      y: S,
      data: D,
      reset: k
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
    d = B ?? d, p = S ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...D
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (g = k.placement), k.rects && (c = k.rects === !0 ? await l.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : k.rects), {
      x: d,
      y: p
    } = Zr(c, g, u)), y = -1);
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
    rects: l,
    elements: i,
    strategy: u
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = St(e, t), h = ri(m), x = i[g ? p === "floating" ? "reference" : "floating" : p], $ = Hn(await s.getClippingRect({
    element: (a = await (s.isElement == null ? void 0 : s.isElement(x))) == null || a ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: u
  })), B = p === "floating" ? {
    x: n,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), D = await (s.isElement == null ? void 0 : s.isElement(S)) ? await (s.getScale == null ? void 0 : s.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Hn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: B,
    offsetParent: S,
    strategy: u
  }) : B);
  return {
    top: ($.top - k.top + h.top) / D.y,
    bottom: (k.bottom - $.bottom + h.bottom) / D.y,
    left: ($.left - k.left + h.left) / D.x,
    right: (k.right - $.right + h.right) / D.x
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
      platform: l,
      elements: i,
      middlewareData: u
    } = e, {
      element: c,
      padding: d = 0
    } = St(t, e) || {};
    if (c == null)
      return {};
    const p = ri(d), g = {
      x: a,
      y: n
    }, m = zs(o), h = js(m), y = await l.getDimensions(c), x = m === "y", $ = x ? "top" : "left", B = x ? "bottom" : "right", S = x ? "clientHeight" : "clientWidth", D = s.reference[h] + s.reference[m] - g[m] - s.floating[h], k = g[m] - s.reference[m], I = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
    let M = I ? I[S] : 0;
    (!M || !await (l.isElement == null ? void 0 : l.isElement(I))) && (M = i.floating[S] || s.floating[h]);
    const K = D / 2 - k / 2, R = M / 2 - y[h] / 2 - 1, A = Ft(p[$], R), T = Ft(p[B], R), F = A, H = M - y[h] - T, N = M / 2 - y[h] / 2 + K, z = as(F, N, H), Q = !u.arrow && Ba(o) != null && N !== z && s.reference[h] / 2 - (N < F ? A : T) - y[h] / 2 < 0, se = Q ? N < F ? N - F : N - H : 0;
    return {
      [m]: g[m] + se,
      data: {
        [m]: z,
        centerOffset: N - z - se,
        ...Q && {
          alignmentOffset: se
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
      } = St(t, e);
      if ((a = s.arrow) != null && a.alignmentOffset)
        return {};
      const $ = Bt(o), B = lt(i), S = Bt(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), k = g || (S || !y ? [Un(i)] : Pc(i)), I = h !== "none";
      !g && I && k.push(...Mc(i, y, h, D));
      const M = [i, ...k], K = await Ya(e, x), R = [];
      let A = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && R.push(K[$]), p) {
        const N = Ec(o, l, D);
        R.push(K[N[0]], K[N[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: R
      }], !R.every((N) => N <= 0)) {
        var T, F;
        const N = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1, z = M[N];
        if (z && (!(p === "alignment" ? B !== lt(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((ge) => ge.overflows[0] > 0 && lt(ge.placement) === B)))
          return {
            data: {
              index: N,
              overflows: A
            },
            reset: {
              placement: z
            }
          };
        let Q = (F = A.filter((se) => se.overflows[0] <= 0).sort((se, ge) => se.overflows[1] - ge.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!Q)
          switch (m) {
            case "bestFit": {
              var H;
              const se = (H = A.filter((ge) => {
                if (I) {
                  const J = lt(ge.placement);
                  return J === B || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((ge) => [ge.placement, ge.overflows.filter((J) => J > 0).reduce((J, ce) => J + ce, 0)]).sort((ge, J) => ge[1] - J[1])[0]) == null ? void 0 : H[0];
              se && (Q = se);
              break;
            }
            case "initialPlacement":
              Q = i;
              break;
          }
        if (o !== Q)
          return {
            reset: {
              placement: Q
            }
          };
      }
      return {};
    }
  };
};
function el(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function tl(t) {
  return kc.some((e) => t[e] >= 0);
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
      } = St(t, e);
      switch (n) {
        case "referenceHidden": {
          const s = await Ya(e, {
            ...o,
            elementContext: "reference"
          }), l = el(s, a.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: tl(l)
            }
          };
        }
        case "escaped": {
          const s = await Ya(e, {
            ...o,
            altBoundary: !0
          }), l = el(s, a.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: tl(l)
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
  } = t, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), l = Bt(a), i = Ba(a), u = lt(a) === "y", c = ["left", "top"].includes(l) ? -1 : 1, d = s && u ? -1 : 1, p = St(e, t);
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
        placement: l,
        middlewareData: i
      } = e, u = await Lc(e, t);
      return l === ((a = i.offset) == null ? void 0 : a.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, jc = function(t) {
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
        crossAxis: l = !1,
        limiter: i = {
          fn: (x) => {
            let {
              x: $,
              y: B
            } = x;
            return {
              x: $,
              y: B
            };
          }
        },
        ...u
      } = St(t, e), c = {
        x: a,
        y: n
      }, d = await Ya(e, u), p = lt(Bt(o)), g = Ns(p);
      let m = c[g], h = c[p];
      if (s) {
        const x = g === "y" ? "top" : "left", $ = g === "y" ? "bottom" : "right", B = m + d[x], S = m - d[$];
        m = as(B, m, S);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", B = h + d[x], S = h - d[$];
        h = as(B, h, S);
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
            [p]: l
          }
        }
      };
    }
  };
}, zc = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: s,
        middlewareData: l
      } = e, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = St(t, e), d = {
        x: a,
        y: n
      }, p = lt(o), g = Ns(p);
      let m = d[g], h = d[p];
      const y = St(i, e), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (u) {
        const S = g === "y" ? "height" : "width", D = s.reference[g] - s.floating[S] + x.mainAxis, k = s.reference[g] + s.reference[S] - x.mainAxis;
        m < D ? m = D : m > k && (m = k);
      }
      if (c) {
        var $, B;
        const S = g === "y" ? "width" : "height", D = ["top", "left"].includes(Bt(o)), k = s.reference[p] - s.floating[S] + (D && (($ = l.offset) == null ? void 0 : $[p]) || 0) + (D ? 0 : x.crossAxis), I = s.reference[p] + s.reference[S] + (D ? 0 : ((B = l.offset) == null ? void 0 : B[p]) || 0) - (D ? x.crossAxis : 0);
        h < k ? h = k : h > I && (h = I);
      }
      return {
        [g]: m,
        [p]: h
      };
    }
  };
}, Wc = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        rects: s,
        platform: l,
        elements: i
      } = e, {
        apply: u = () => {
        },
        ...c
      } = St(t, e), d = await Ya(e, c), p = Bt(o), g = Ba(o), m = lt(o) === "y", {
        width: h,
        height: y
      } = s.floating;
      let x, $;
      p === "top" || p === "bottom" ? (x = p, $ = g === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = p, x = g === "end" ? "top" : "bottom");
      const B = y - d.top - d.bottom, S = h - d.left - d.right, D = Ft(y - d[x], B), k = Ft(h - d[$], S), I = !e.middlewareData.shift;
      let M = D, K = k;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (K = S), (n = e.middlewareData.shift) != null && n.enabled.y && (M = B), I && !g) {
        const A = ze(d.left, 0), T = ze(d.right, 0), F = ze(d.top, 0), H = ze(d.bottom, 0);
        m ? K = h - 2 * (A !== 0 || T !== 0 ? A + T : ze(d.left, d.right)) : M = y - 2 * (F !== 0 || H !== 0 ? F + H : ze(d.top, d.bottom));
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
  return Ws(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function We(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ct(t) {
  var e;
  return (e = (Ws(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ws(t) {
  return io() ? t instanceof Node || t instanceof We(t).Node : !1;
}
function at(t) {
  return io() ? t instanceof Element || t instanceof We(t).Element : !1;
}
function ut(t) {
  return io() ? t instanceof HTMLElement || t instanceof We(t).HTMLElement : !1;
}
function al(t) {
  return !io() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof We(t).ShadowRoot;
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
function Kc(t) {
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
function Ks(t) {
  const e = Us(), a = at(t) ? nt(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Uc(t) {
  let e = Lt(t);
  for (; ut(e) && !wa(e); ) {
    if (Ks(e))
      return e;
    if (uo(e))
      return null;
    e = Lt(e);
  }
  return null;
}
function Us() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wa(t) {
  return ["html", "body", "#document"].includes(Jt(t));
}
function nt(t) {
  return We(t).getComputedStyle(t);
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
    al(t) && t.host || // Fallback.
    ct(t)
  );
  return al(e) ? e.host : e;
}
function li(t) {
  const e = Lt(t);
  return wa(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ut(e) && on(e) ? e : li(e);
}
function Ja(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = li(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), l = We(o);
  if (s) {
    const i = os(l);
    return e.concat(l, l.visualViewport || [], on(o) ? o : [], i && a ? Ja(i) : []);
  }
  return e.concat(o, Ja(o, [], a));
}
function os(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ii(t) {
  const e = nt(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = ut(t), s = o ? t.offsetWidth : a, l = o ? t.offsetHeight : n, i = Kn(a) !== s || Kn(n) !== l;
  return i && (a = s, n = l), {
    width: a,
    height: n,
    $: i
  };
}
function Hs(t) {
  return at(t) ? t : t.contextElement;
}
function ma(t) {
  const e = Hs(t);
  if (!ut(e))
    return it(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = ii(e);
  let l = (s ? Kn(a.width) : a.width) / n, i = (s ? Kn(a.height) : a.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Hc = /* @__PURE__ */ it(0);
function ui(t) {
  const e = We(t);
  return !Us() || !e.visualViewport ? Hc : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Gc(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== We(t) ? !1 : e;
}
function Yt(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), s = Hs(t);
  let l = it(1);
  e && (n ? at(n) && (l = ma(n)) : l = ma(t));
  const i = Gc(s, a, n) ? ui(s) : it(0);
  let u = (o.left + i.x) / l.x, c = (o.top + i.y) / l.y, d = o.width / l.x, p = o.height / l.y;
  if (s) {
    const g = We(s), m = n && at(n) ? We(n) : n;
    let h = g, y = os(h);
    for (; y && n && m !== h; ) {
      const x = ma(y), $ = y.getBoundingClientRect(), B = nt(y), S = $.left + (y.clientLeft + parseFloat(B.paddingLeft)) * x.x, D = $.top + (y.clientTop + parseFloat(B.paddingTop)) * x.y;
      u *= x.x, c *= x.y, d *= x.x, p *= x.y, u += S, c += D, h = We(y), y = os(h);
    }
  }
  return Hn({
    width: d,
    height: p,
    x: u,
    y: c
  });
}
function Gs(t, e) {
  const a = co(t).scrollLeft;
  return e ? e.left + a : Yt(ct(t)).left + a;
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
  const s = o === "fixed", l = ct(n), i = e ? uo(e.floating) : !1;
  if (n === l || i && s)
    return a;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = it(1);
  const d = it(0), p = ut(n);
  if ((p || !p && !s) && ((Jt(n) !== "body" || on(l)) && (u = co(n)), ut(n))) {
    const m = Yt(n);
    c = ma(n), d.x = m.x + n.clientLeft, d.y = m.y + n.clientTop;
  }
  const g = l && !p && !s ? di(l, u, !0) : it(0);
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
  const e = ct(t), a = co(t), n = t.ownerDocument.body, o = ze(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), s = ze(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -a.scrollLeft + Gs(t);
  const i = -a.scrollTop;
  return nt(n).direction === "rtl" && (l += ze(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: l,
    y: i
  };
}
function Qc(t, e) {
  const a = We(t), n = ct(t), o = a.visualViewport;
  let s = n.clientWidth, l = n.clientHeight, i = 0, u = 0;
  if (o) {
    s = o.width, l = o.height;
    const c = Us();
    (!c || c && e === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: i,
    y: u
  };
}
function Xc(t, e) {
  const a = Yt(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, s = ut(t) ? ma(t) : it(1), l = t.clientWidth * s.x, i = t.clientHeight * s.y, u = o * s.x, c = n * s.y;
  return {
    width: l,
    height: i,
    x: u,
    y: c
  };
}
function nl(t, e, a) {
  let n;
  if (e === "viewport")
    n = Qc(t, a);
  else if (e === "document")
    n = Jc(ct(t));
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
  return Hn(n);
}
function ci(t, e) {
  const a = Lt(t);
  return a === e || !at(a) || wa(a) ? !1 : nt(a).position === "fixed" || ci(a, e);
}
function Zc(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = Ja(t, [], !1).filter((i) => at(i) && Jt(i) !== "body"), o = null;
  const s = nt(t).position === "fixed";
  let l = s ? Lt(t) : t;
  for (; at(l) && !wa(l); ) {
    const i = nt(l), u = Ks(l);
    !u && i.position === "fixed" && (o = null), (s ? !u && !o : !u && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || on(l) && !u && ci(t, l)) ? n = n.filter((d) => d !== l) : o = i, l = Lt(l);
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
  const l = [...a === "clippingAncestors" ? uo(e) ? [] : Zc(e, this._c) : [].concat(a), n], i = l[0], u = l.reduce((c, d) => {
    const p = nl(e, d, o);
    return c.top = ze(p.top, c.top), c.right = Ft(p.right, c.right), c.bottom = Ft(p.bottom, c.bottom), c.left = ze(p.left, c.left), c;
  }, nl(e, i, o));
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
  const n = ut(e), o = ct(e), s = a === "fixed", l = Yt(t, !0, s, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = it(0);
  function c() {
    u.x = Gs(o);
  }
  if (n || !n && !s)
    if ((Jt(e) !== "body" || on(o)) && (i = co(e)), n) {
      const m = Yt(e, !0, s, e);
      u.x = m.x + e.clientLeft, u.y = m.y + e.clientTop;
    } else o && c();
  s && !n && o && c();
  const d = o && !n && !s ? di(o, i) : it(0), p = l.left + i.scrollLeft - u.x - d.x, g = l.top + i.scrollTop - u.y - d.y;
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
function ol(t, e) {
  if (!ut(t) || nt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return ct(t) === a && (a = a.ownerDocument.body), a;
}
function pi(t, e) {
  const a = We(t);
  if (uo(t))
    return a;
  if (!ut(t)) {
    let o = Lt(t);
    for (; o && !wa(o); ) {
      if (at(o) && !To(o))
        return o;
      o = Lt(o);
    }
    return a;
  }
  let n = ol(t, e);
  for (; n && Kc(n) && To(n); )
    n = ol(n, e);
  return n && wa(n) && To(n) && !Ks(n) ? a : n || Uc(t) || a;
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
  getDocumentElement: ct,
  getClippingRect: ep,
  getOffsetParent: pi,
  getElementRects: np,
  getClientRects: Yc,
  getDimensions: tp,
  getScale: ma,
  isElement: at,
  isRTL: op
};
function fi(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function rp(t, e) {
  let a = null, n;
  const o = ct(t);
  function s() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), s();
    const c = t.getBoundingClientRect(), {
      left: d,
      top: p,
      width: g,
      height: m
    } = c;
    if (i || e(), !g || !m)
      return;
    const h = bn(p), y = bn(o.clientWidth - (d + g)), x = bn(o.clientHeight - (p + m)), $ = bn(d), S = {
      rootMargin: -h + "px " + -y + "px " + -x + "px " + -$ + "px",
      threshold: ze(0, Ft(1, u)) || 1
    };
    let D = !0;
    function k(I) {
      const M = I[0].intersectionRatio;
      if (M !== u) {
        if (!D)
          return l();
        M ? l(!1, M) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !fi(c, t.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      a = new IntersectionObserver(k, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(k, S);
    }
    a.observe(t);
  }
  return l(!0), s;
}
function vi(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = Hs(t), d = o || s ? [...c ? Ja(c) : [], ...Ja(e)] : [];
  d.forEach(($) => {
    o && $.addEventListener("scroll", a, {
      passive: !0
    }), s && $.addEventListener("resize", a);
  });
  const p = c && i ? rp(c, a) : null;
  let g = -1, m = null;
  l && (m = new ResizeObserver(($) => {
    let [B] = $;
    B && B.target === c && m && (m.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var S;
      (S = m) == null || S.observe(e);
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
    d.forEach((B) => {
      o && B.removeEventListener("scroll", a), s && B.removeEventListener("resize", a);
    }), p == null || p(), ($ = m) == null || $.disconnect(), m = null, u && cancelAnimationFrame(h);
  };
}
const mi = Nc, hi = jc, Gn = Rc, gi = Wc, yi = Fc, lp = Vc, bi = zc, ip = (t, e, a) => {
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
    return Ws(e) && Jt(e) === "#comment" ? null : e;
  }
  return t;
}
function da(t) {
  return typeof t == "function" ? t() : r(t);
}
function _i(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = ss(da(t.element));
      return a == null ? {} : lp({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function wi(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sl(t, e) {
  const a = wi(t);
  return Math.round(e * a) / a;
}
function xi(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = C(() => {
    var M;
    return (M = da(a.open)) != null ? M : !0;
  }), s = C(() => da(a.middleware)), l = C(() => {
    var M;
    return (M = da(a.placement)) != null ? M : "bottom";
  }), i = C(() => {
    var M;
    return (M = da(a.strategy)) != null ? M : "absolute";
  }), u = C(() => {
    var M;
    return (M = da(a.transform)) != null ? M : !0;
  }), c = C(() => ss(t.value)), d = C(() => ss(e.value)), p = P(0), g = P(0), m = P(i.value), h = P(l.value), y = wt({}), x = P(!1), $ = C(() => {
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
      ...wi(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: K + "px",
      top: R + "px"
    };
  });
  let B;
  function S() {
    if (c.value == null || d.value == null)
      return;
    const M = o.value;
    ip(c.value, d.value, {
      middleware: s.value,
      placement: l.value,
      strategy: i.value
    }).then((K) => {
      p.value = K.x, g.value = K.y, m.value = K.strategy, h.value = K.placement, y.value = K.middlewareData, x.value = M !== !1;
    });
  }
  function D() {
    typeof B == "function" && (B(), B = void 0);
  }
  function k() {
    if (D(), n === void 0) {
      S();
      return;
    }
    if (c.value != null && d.value != null) {
      B = n(c.value, d.value, S);
      return;
    }
  }
  function I() {
    o.value || (x.value = !1);
  }
  return X([s, l, i, o], S, {
    flush: "sync"
  }), X([c, d], k, {
    flush: "sync"
  }), X(o, I, {
    flush: "sync"
  }), eo() && to(D), {
    x: ra(p),
    y: ra(g),
    strategy: ra(m),
    placement: ra(h),
    middlewareData: ra(y),
    isPositioned: ra(x),
    floatingStyles: $,
    update: S
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
      var l = s[o];
      if (!t(e[l], a[l])) return !1;
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
  const s = /* @__PURE__ */ new Date(), l = s.getFullYear(), i = s.getMonth() + 1, u = s.getDate(), c = ["hour", "minute", "second"], d = new st(o), p = dc(d.resolvedOptions().calendar);
  return c.includes(n ?? "day") ? Le(new ba(l, i, u, 0, 0, 0), p) : Le(new Be(l, i, u), p);
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
  const n = wt();
  return we(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Sa(n);
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
  const n = Ds(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function Si(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (e += 1, a || (n = Ds(!0), a = n.run(() => t(...s))), Qt(o), a);
}
function xt(t) {
  return typeof t == "function" ? t() : r(t);
}
const pt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const mp = (t) => typeof t < "u", hp = (t) => t != null, gp = Object.prototype.toString, yp = (t) => gp.call(t) === "[object Object]", Bi = () => {
}, rl = /* @__PURE__ */ bp();
function bp() {
  var t, e;
  return pt && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function _p(t) {
  return Ee();
}
function ki(t, e = 1e4) {
  return Bs((a, n) => {
    let o = xt(t), s;
    const l = () => setTimeout(() => {
      o = xt(t), n();
    }, xt(e));
    return Qt(() => {
      clearTimeout(s);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(s), s = l();
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
  } = a, o = P(!1);
  let s = null;
  function l() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    o.value = !1, l();
  }
  function u(...c) {
    l(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, t(...c);
    }, xt(e));
  }
  return n && (o.value = !0, pt && u()), Qt(i), {
    isPending: Sa(o),
    start: u,
    stop: i
  };
}
function xp(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = Ys(
    n ?? Bi,
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
const sn = pt ? window : void 0;
function xa(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = sn) : [e, a, n, o] = t, !e)
    return Bi;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const s = [], l = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, p, g, m) => (d.addEventListener(p, g, m), () => d.removeEventListener(p, g, m)), u = X(
    () => [Je(e), xt(o)],
    ([d, p]) => {
      if (l(), !d)
        return;
      const g = yp(p) ? { ...p } : p;
      s.push(
        ...a.flatMap((m) => n.map((h) => i(d, m, h, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), l();
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
    passive: l = !1,
    dedupe: i = !1
  } = n, u = Cp(e);
  return xa(o, s, (c) => {
    c.repeat && xt(i) || u(c) && a(c);
  }, l);
}
function Qs() {
  const t = P(!1), e = Ee();
  return e && de(() => {
    t.value = !0;
  }, e), t;
}
function $p(t) {
  const e = Qs();
  return C(() => (e.value, !!t()));
}
function Sp(t, e, a = {}) {
  const { window: n = sn, ...o } = a;
  let s;
  const l = $p(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = C(() => {
    const g = xt(t), m = (Array.isArray(g) ? g : [g]).map(Je).filter(hp);
    return new Set(m);
  }), c = X(
    () => u.value,
    (g) => {
      i(), l.value && g.size && (s = new MutationObserver(e), g.forEach((m) => s.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), c();
  };
  return Qt(p), {
    isSupported: l,
    stop: p,
    takeRecords: d
  };
}
function Oi(t, e = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = sn
  } = e, s = P(!1), l = n ? 1e3 / n : null;
  let i = 0, u = null;
  function c(g) {
    if (!s.value || !o)
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
    !s.value && o && (s.value = !0, i = 0, u = o.requestAnimationFrame(c));
  }
  function p() {
    s.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return a && d(), Qt(p), {
    isActive: Sa(s),
    pause: p,
    resume: d
  };
}
function Bp(t) {
  return JSON.parse(JSON.stringify(t));
}
function _e(t, e, a, n = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (S) => i ? typeof i == "function" ? i(S) : Bp(S) : S, $ = () => mp(t[e]) ? x(t[e]) : p, B = (S) => {
    g ? g(S) && h(y, S) : h(y, S);
  };
  if (u) {
    const S = $(), D = P(S);
    let k = !1;
    return X(
      () => t[e],
      (I) => {
        k || (k = !0, D.value = x(I), ae(() => k = !1));
      }
    ), X(
      D,
      (I) => {
        !k && (I !== t[e] || d) && B(I);
      },
      { deep: d }
    ), D;
  } else
    return C({
      get() {
        return $();
      },
      set(S) {
        B(S);
      }
    });
}
function po(t) {
  return t ? t.flatMap((e) => e.type === ne ? po(e.children) : [e]) : [];
}
function Oe() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const kp = ["INPUT", "TEXTAREA"];
function Di(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && kp.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
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
  ], $ = m || h, B = p || g;
  if (!y && !x && (!$ && !B || o === "vertical" && B || o === "horizontal" && $))
    return null;
  const S = a ? Array.from(a.querySelectorAll(s)) : l;
  if (!S.length)
    return null;
  c && t.preventDefault();
  let D = null;
  return B || $ ? D = Ei(S, e, {
    goForward: $ ? h : u === "ltr" ? p : g,
    loop: i
  }) : y ? D = S.at(0) || null : x && (D = S.at(-1) || null), d && (D == null || D.focus()), D;
}
function Ei(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), s = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (s < 0 || s >= t.length))
    return null;
  const l = (s + t.length) % t.length, i = t[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Ei(
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
function rs(t, e, a = ".", n) {
  if (!Io(e))
    return rs(t, {}, a);
  const o = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const l = t[s];
    l != null && (Array.isArray(l) && Array.isArray(o[s]) ? o[s] = [...l, ...o[s]] : Io(l) && Io(o[s]) ? o[s] = rs(
      l,
      o[s],
      (a ? `${a}.` : "") + s.toString()
    ) : o[s] = l);
  }
  return o;
}
function Op(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => rs(a, n, ""), {})
  );
}
const Dp = Op(), [fo, jw] = pe("ConfigProvider");
let Ep = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Pp = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += Ep[Math.random() * 64 | 0];
  return e;
};
const Ap = Si(() => {
  const t = P(/* @__PURE__ */ new Map()), e = P(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = fo({
    scrollBody: P(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", rl && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var u;
    if (!pt)
      return;
    if (!l) {
      i && s();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, d = { padding: c, margin: 0 }, p = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? Dp({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), rl && (o = xa(
      document,
      "touchmove",
      (g) => Mp(g),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function rn(t) {
  const e = Pp(6), a = Ap();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return wp(() => {
    a.value.delete(e);
  }), n;
}
function Pi(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Pi(a);
  }
}
function Mp(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Pi(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const Tp = "data-radix-vue-collection-item";
function ka(t, e = Tp) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = P([]);
    function s() {
      const l = Je(n);
      return l ? o.value = Array.from(
        l.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return fd(() => {
      o.value = [];
    }), de(s), vd(s), X(() => n == null ? void 0 : n.value, s, { immediate: !0 }), oo(a, o), o;
  }, injectCollection: () => an(a, P([])) };
}
function Ai(t) {
  const e = P(t);
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
  function l(y, x = {}) {
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
    const B = { ...m, ...$ }, S = d(y, B).find((D) => D.type === x);
    return S ? S.value : "";
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
    selectedDate: s,
    dayOfWeek: p,
    getMonths: u
  };
}
function ft(t) {
  const e = fo({
    dir: P("ltr")
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
    n[Al(ao(o))] = (...s) => t(o, ...s);
  }), n;
}
let Vo = 0;
function Xs() {
  we((t) => {
    if (!pt)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? ll()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? ll()
    ), Vo++, t(() => {
      Vo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Vo--;
    });
  });
}
function ll() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function ln(t) {
  return C(() => {
    var e;
    return xt(t) ? !!((e = Je(t)) != null && e.closest("form")) : !0;
  });
}
function fe(t) {
  const e = Ee(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, s) => {
    const l = (e == null ? void 0 : e.type.props[s]).default;
    return l !== void 0 && (o[s] = l), o;
  }, {}), n = Cs(t);
  return C(() => {
    const o = {}, s = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(s).forEach((l) => {
      o[ao(l)] = s[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function ie(t, e) {
  const a = fe(t), n = e ? Xt(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function W() {
  const t = Ee(), e = P(), a = C(() => {
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
  function s(l) {
    e.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), t.exposed = o);
  }
  return { forwardRef: s, currentRef: e, currentElement: a };
}
function Ip(t, e) {
  const a = ki(!1, 300), n = P(null), o = fp();
  function s() {
    n.value = null, a.value = !1;
  }
  function l(i, u) {
    const c = i.currentTarget, d = { x: i.clientX, y: i.clientY }, p = Vp(d, c.getBoundingClientRect()), g = Rp(d, p), m = Fp(u.getBoundingClientRect()), h = Np([...g, ...m]);
    n.value = h, a.value = !0;
  }
  return we((i) => {
    if (t.value && e.value) {
      const u = (d) => l(d, e.value), c = (d) => l(d, t.value);
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
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const i = e[s].x, u = e[s].y, c = e[l].x, d = e[l].y;
    u > n != d > n && a < (c - i) * (n - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function Np(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), jp(e);
}
function jp(t) {
  if (t.length <= 1)
    return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], l = e[e.length - 2];
      if ((s.x - l.x) * (o.y - l.y) >= (s.y - l.y) * (o.x - l.x))
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
      const s = a[a.length - 1], l = a[a.length - 2];
      if ((s.x - l.x) * (o.y - l.y) >= (s.y - l.y) * (o.x - l.x))
        a.pop();
      else break;
    }
    a.push(o);
  }
  return a.pop(), e.length === 1 && a.length === 1 && e[0].x === a[0].x && e[0].y === a[0].y ? e : e.concat(a);
}
var zp = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, ia = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), wn = {}, Ro = 0, Mi = function(t) {
  return t && (t.host || Mi(t.parentNode));
}, Wp = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Mi(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Kp = function(t, e, a, n) {
  var o = Wp(e, Array.isArray(t) ? t : [t]);
  wn[a] || (wn[a] = /* @__PURE__ */ new WeakMap());
  var s = wn[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(p) {
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
          ia.set(g, y), s.set(g, x), l.push(g), y === 1 && h && _n.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return d(e), i.clear(), Ro++, function() {
    l.forEach(function(p) {
      var g = ia.get(p) - 1, m = s.get(p) - 1;
      ia.set(p, g), s.set(p, m), g || (_n.has(p) || p.removeAttribute(n), _n.delete(p)), m || p.removeAttribute(a);
    }), Ro--, Ro || (ia = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), wn = {});
  };
}, Up = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = zp(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Kp(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function un(t) {
  let e;
  X(() => Je(t), (a) => {
    a ? e = Up(a) : e && e();
  }), je(() => {
    e && e();
  });
}
let Hp = 0;
function ke(t, e = "radix") {
  const a = fo({ useId: void 0 });
  return ca.useId ? `${e}-${ca.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++Hp}`;
}
function Ti(t) {
  const e = P(), a = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return de(() => {
    const o = Je(t);
    if (o) {
      e.value = { width: o.offsetWidth, height: o.offsetHeight };
      const s = new ResizeObserver((l) => {
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
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function Gp(t, e) {
  const a = P(t);
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
  const e = ki("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (a, n) => {
      if (!(t != null && t.value) && !n)
        return;
      e.value = e.value + a;
      const o = (t == null ? void 0 : t.value) ?? n, s = Oe(), l = o.map((p) => {
        var g;
        return {
          ref: p,
          textValue: ((g = (p.querySelector(`[${qp}]`) ?? p).textContent) == null ? void 0 : g.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === s), u = l.map((p) => p.textValue), c = Jp(u, e.value, i == null ? void 0 : i.textValue), d = l.find((p) => p.textValue === c);
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
  const l = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== a ? l : void 0;
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
const er = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const s = po(a.default()), l = s.findIndex((d) => d.type !== Ss);
      if (l === -1)
        return s;
      const i = s[l];
      (n = i.props) == null || delete n.ref;
      const u = i.props ? O(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const c = Ml(i, u);
      for (const d in u)
        d.startsWith("on") && (c.props || (c.props = {}), c.props[d] = u[d]);
      return s.length === 1 ? c : (s[l] = c, s);
    };
  }
}), j = b({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ie(n, e) : n !== "template" ? () => Ie(t.as, e, { default: a.default }) : () => Ie(er, e, { default: a.default });
  }
});
function Oa() {
  const t = P(), e = C(() => {
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
    }), e({ open: o }), W(), (l, i) => (f(), _(r(j), {
      as: l.as,
      "as-child": n.asChild,
      "data-state": r(o) ? "open" : "closed",
      "data-disabled": r(s) ? "" : void 0
    }, {
      default: v(() => [
        w(l.$slots, "default", { open: r(o) })
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
    W();
    const a = Vi();
    return (n, o) => {
      var s, l;
      return f(), _(r(j), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": e.asChild,
        "aria-controls": r(a).contentId,
        "aria-expanded": r(a).open.value,
        "data-state": r(a).open.value ? "open" : "closed",
        "data-disabled": (s = r(a).disabled) != null && s.value ? "" : void 0,
        disabled: (l = r(a).disabled) == null ? void 0 : l.value,
        onClick: r(a).onOpenToggle
      }, {
        default: v(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function ef(t, e) {
  var a;
  const n = P({}), o = P("none"), s = P(t), l = t.value ? "mounted" : "unmounted";
  let i;
  const u = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? sn, { state: c, dispatch: d } = Gp(l, {
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
    if (pt) {
      const B = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      ($ = e.value) == null || $.dispatchEvent(B);
    }
  };
  X(
    t,
    async (x, $) => {
      var B;
      const S = $ !== x;
      if (await ae(), S) {
        const D = o.value, k = xn(e.value);
        x ? (d("MOUNT"), p("enter"), k === "none" && p("after-enter")) : k === "none" || ((B = n.value) == null ? void 0 : B.display) === "none" ? (d("UNMOUNT"), p("leave"), p("after-leave")) : $ && D !== k ? (d("ANIMATION_OUT"), p("leave")) : (d("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const g = (x) => {
    const $ = xn(e.value), B = $.includes(
      x.animationName
    ), S = c.value === "mounted" ? "enter" : "leave";
    if (x.target === e.value && B && (p(`after-${S}`), d("ANIMATION_END"), !s.value)) {
      const D = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var k;
        ((k = e.value) == null ? void 0 : k.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = D);
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
  return je(() => {
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
    const { present: o, forceMount: s } = he(t), l = P(), { isPresent: i } = ef(o, l);
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
    return () => s.value || o.value || i.value ? Ie(e.default({ present: i })[0], {
      ref: (d) => {
        const p = Je(d);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
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
    const n = P(), { forwardRef: o, currentElement: s } = W(), l = P(0), i = P(0), u = C(() => a.open.value), c = P(u.value), d = P();
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
        i.value = g.height, l.value = g.width, c.value || (p.style.transitionDuration = d.value.transitionDuration, p.style.animationName = d.value.animationName);
      },
      {
        immediate: !0
      }
    ), de(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), (p, g) => (f(), _(r(Ke), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || r(a).open.value,
      "force-mount": !0
    }, {
      default: v(() => {
        var m, h;
        return [
          E(r(j), O(p.$attrs, {
            id: r(a).contentId,
            ref: r(o),
            "as-child": e.asChild,
            as: p.as,
            "data-state": r(a).open.value ? "open" : "closed",
            "data-disabled": (m = r(a).disabled) != null && m.value ? "" : void 0,
            hidden: !((h = n.value) != null && h.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: v(() => {
              var y;
              return [
                (y = n.value) != null && y.present ? w(p.$slots, "default", { key: 0 }) : oe("", !0)
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
    const s = Array.isArray(a) || Array.isArray(e), l = a !== void 0 ? "modelValue" : "defaultValue", i = l === "modelValue" ? typeof a : typeof e;
    if (t === "single" && s)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "multiple";
    if (t === "multiple" && !s)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "single";
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
  const a = P(af(t)), n = _e(t, "modelValue", e, {
    defaultValue: nf(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  X(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const l = Ri(t);
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
  const s = C(() => a.value === "single");
  return {
    modelValue: n,
    type: a,
    changeModelValue: o,
    isSingle: s
  };
}
const [vo, sf] = pe("AccordionRoot"), rf = /* @__PURE__ */ b({
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
    const a = t, n = e, { dir: o, disabled: s } = he(a), l = ft(o), { modelValue: i, changeModelValue: u, isSingle: c } = of(a, n), { forwardRef: d, currentElement: p } = W();
    return sf({
      disabled: s,
      direction: l,
      orientation: a.orientation,
      parentElement: p,
      isSingle: c,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (g, m) => (f(), _(r(j), {
      ref: r(d),
      "as-child": g.asChild,
      as: g.as
    }, {
      default: v(() => [
        w(g.$slots, "default", { modelValue: r(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [tr, lf] = pe("AccordionItem"), uf = /* @__PURE__ */ b({
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
    ), s = C(() => n.disabled.value || a.disabled), l = C(() => s.value ? "" : void 0), i = C(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    e({ open: o, dataDisabled: l });
    const { currentRef: u, currentElement: c } = W();
    lf({
      open: o,
      dataState: i,
      disabled: s,
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
      Di(
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
    return (p, g) => (f(), _(r(Xp), {
      "data-orientation": r(n).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: s.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Te(d, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: v(() => [
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
    const e = t, a = vo(), n = tr();
    return W(), (o, s) => (f(), _(r(tf), {
      role: "region",
      hidden: !r(n).open.value,
      "as-child": e.asChild,
      "force-mount": e.forceMount,
      "aria-labelledby": r(n).triggerId,
      "data-state": r(n).dataState.value,
      "data-disabled": r(n).dataDisabled.value,
      "data-orientation": r(a).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: v(() => [
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
    const e = t, a = vo(), n = tr();
    return W(), (o, s) => (f(), _(r(j), {
      as: e.as,
      "as-child": e.asChild,
      "data-orientation": r(a).orientation,
      "data-state": r(n).dataState.value,
      "data-disabled": r(n).dataDisabled.value
    }, {
      default: v(() => [
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
    const e = t, a = vo(), n = tr();
    n.triggerId || (n.triggerId = ke(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const s = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || s || a.changeModelValue(n.value.value);
    }
    return (s, l) => (f(), _(r(Zp), {
      id: r(n).triggerId,
      ref: r(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: e.as,
      "as-child": e.asChild,
      "aria-disabled": r(n).disabled.value || void 0,
      "aria-expanded": r(n).open.value || !1,
      "data-disabled": r(n).dataDisabled.value,
      "data-orientation": r(a).orientation,
      "data-state": r(n).dataState.value,
      disabled: r(n).disabled.value,
      onClick: o
    }, {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [vt, ff] = pe("DialogRoot"), Fi = /* @__PURE__ */ b({
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
    }), o = P(), s = P(), { modal: l } = he(a);
    return ff({
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
      contentElement: s
    }), (i, u) => w(i.$slots, "default", { open: r(n) });
  }
}), Li = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = vt(), { forwardRef: n, currentElement: o } = W();
    return a.contentId || (a.contentId = ke(void 0, "radix-vue-dialog-content")), de(() => {
      a.triggerElement.value = o.value;
    }), (s, l) => (f(), _(r(j), O(e, {
      ref: r(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": r(a).open.value || !1,
      "aria-controls": r(a).open.value ? r(a).contentId : void 0,
      "data-state": r(a).open.value ? "open" : "closed",
      onClick: r(a).onOpenToggle
    }), {
      default: v(() => [
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
    return (a, n) => r(e) || a.forceMount ? (f(), _(tn, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled"])) : oe("", !0);
  }
}), ar = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(dn), U(q(e)), {
      default: v(() => [
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
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1), s = P(() => {
  });
  return we((l) => {
    if (!pt)
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
    l(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", i), n.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function gf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1);
  return we((s) => {
    if (!pt)
      return;
    const l = async (i) => {
      e != null && e.value && (await ae(), !(!e.value || Ni(e.value, i.target)) && i.target && !o.value && qs(
        mf,
        t,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", l), s(() => n.removeEventListener("focusin", l));
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
    const a = t, n = e, { forwardRef: o, currentElement: s } = W(), l = C(
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
      s.value && (a.disableOutsidePointerEvents && (Ze.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ze.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), h(() => {
        a.disableOutsidePointerEvents && Ze.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), we((h) => {
      h(() => {
        s.value && (i.value.delete(s.value), Ze.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (h, y) => (f(), _(r(j), {
      ref: r(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: dt({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: r(g).onFocusCapture,
      onBlurCapture: r(g).onBlurCapture,
      onPointerdownCapture: r(p).onPointerDownCapture
    }, {
      default: v(() => [
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
    const e = t, { forwardRef: a, currentElement: n } = W();
    return de(() => {
      Ze.branches.add(n.value);
    }), je(() => {
      Ze.branches.delete(n.value);
    }), (o, s) => (f(), _(r(j), O({ ref: r(a) }, e), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fo = "focusScope.autoFocusOnMount", Lo = "focusScope.autoFocusOnUnmount", il = { bubbles: !1, cancelable: !0 };
function Vn(t, { select: e = !1 } = {}) {
  const a = Oe();
  for (const n of t)
    if (Tt(n, { select: e }), Oe() !== a)
      return !0;
}
function bf(t) {
  const e = nr(t), a = ul(e, t), n = ul(e.reverse(), t);
  return [a, n];
}
function nr(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function ul(t, e) {
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
    const a = Oe();
    t.focus({ preventScroll: !0 }), t !== a && wf(t) && e && t.select();
  }
}
const xf = vp(() => P([]));
function Cf() {
  const t = xf();
  return {
    add(e) {
      const a = t.value[0];
      e !== a && (a == null || a.pause()), t.value = dl(t.value, e), t.value.unshift(e);
    },
    remove(e) {
      var a;
      t.value = dl(t.value, e), (a = t.value[0]) == null || a.resume();
    }
  };
}
function dl(t, e) {
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
    const a = t, n = e, { currentRef: o, currentElement: s } = W(), l = P(null), i = Cf(), u = so({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    we((d) => {
      if (!pt)
        return;
      const p = s.value;
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
    }), we(async (d) => {
      const p = s.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const g = Oe();
      if (!p.contains(g)) {
        const m = new CustomEvent(Fo, il);
        p.addEventListener(Fo, (h) => n("mountAutoFocus", h)), p.dispatchEvent(m), m.defaultPrevented || (Vn($f(nr(p)), {
          select: !0
        }), Oe() === g && Tt(p));
      }
      d(() => {
        p.removeEventListener(Fo, (y) => n("mountAutoFocus", y));
        const m = new CustomEvent(Lo, il), h = (y) => {
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
      const p = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, g = Oe();
      if (p && g) {
        const m = d.currentTarget, [h, y] = bf(m);
        h && y ? !d.shiftKey && g === y ? (d.preventDefault(), a.loop && Tt(h, { select: !0 })) : d.shiftKey && g === h && (d.preventDefault(), a.loop && Tt(y, { select: !0 })) : g === m && d.preventDefault();
      }
    }
    return (d, p) => (f(), _(r(j), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Sf = "menu.itemSelect", ls = ["Enter", " "], Bf = ["ArrowDown", "PageUp", "Home"], ji = ["ArrowUp", "PageDown", "End"], kf = [...Bf, ...ji], Of = {
  ltr: [...ls, "ArrowRight"],
  rtl: [...ls, "ArrowLeft"]
}, Df = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function or(t) {
  return t ? "open" : "closed";
}
function Yn(t) {
  return t === "indeterminate";
}
function sr(t) {
  return Yn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function is(t) {
  const e = Oe();
  for (const a of t)
    if (a === e || (a.focus(), Oe() !== e))
      return;
}
function Ef(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const i = e[s].x, u = e[s].y, c = e[l].x, d = e[l].y;
    u > n != d > n && a < (c - i) * (n - u) / (d - u) + i && (o = !o);
  }
  return o;
}
function Pf(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return Ef(a, e);
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
  const l = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  de(() => {
    var u;
    document.getElementById(n) || console.warn(l);
    const c = (u = s.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && c && (document.getElementById(o) || console.warn(i));
  });
}
const zi = /* @__PURE__ */ b({
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
    const a = t, n = e, o = vt(), { forwardRef: s, currentElement: l } = W();
    return o.titleId || (o.titleId = ke(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = ke(void 0, "radix-vue-dialog-description")), de(() => {
      o.contentElement = l, Oe() !== document.body && (o.triggerElement.value = Oe());
    }), process.env.NODE_ENV !== "production" && Tf({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: l
    }), (i, u) => (f(), _(r(mo), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: v(() => [
        E(r(Da), O({
          id: r(o).contentId,
          ref: r(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": r(o).descriptionId,
          "aria-labelledby": r(o).titleId,
          "data-state": r(or)(r(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (c) => r(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[2] || (u[2] = (c) => n("focusOutside", c)),
          onInteractOutside: u[3] || (u[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: u[4] || (u[4] = (c) => n("pointerDownOutside", c))
        }), {
          default: v(() => [
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
    const a = t, n = e, o = vt(), s = Xt(n), { forwardRef: l, currentElement: i } = W();
    return un(i), (u, c) => (f(), _(zi, O({ ...a, ...r(s) }, {
      ref: r(l),
      "trap-focus": r(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        d.defaultPrevented || (d.preventDefault(), (p = r(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (d) => {
        const p = d.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && d.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (d) => {
        d.preventDefault();
      })
    }), {
      default: v(() => [
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
    W();
    const o = vt(), s = P(!1), l = P(!1);
    return (i, u) => (f(), _(zi, O({ ...a, ...r(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var d;
        c.defaultPrevented || (s.value || (d = r(o).triggerElement.value) == null || d.focus(), c.preventDefault()), s.value = !1, l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (c) => {
        var d;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const p = c.target;
        (d = r(o).triggerElement.value) != null && d.contains(p) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: v(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rr = /* @__PURE__ */ b({
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
    const a = t, n = e, o = vt(), s = Xt(n), { forwardRef: l } = W();
    return (i, u) => (f(), _(r(Ke), {
      present: i.forceMount || r(o).open.value
    }, {
      default: v(() => [
        r(o).modal.value ? (f(), _(If, O({
          key: 0,
          ref: r(l)
        }, { ...a, ...r(s), ...i.$attrs }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), _(Vf, O({
          key: 1,
          ref: r(l)
        }, { ...a, ...r(s), ...i.$attrs }), {
          default: v(() => [
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
    const e = vt();
    return rn(!0), W(), (a, n) => (f(), _(r(j), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": r(e).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), lr = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = vt(), { forwardRef: a } = W();
    return (n, o) => {
      var s;
      return (s = r(e)) != null && s.modal.value ? (f(), _(r(Ke), {
        key: 0,
        present: n.forceMount || r(e).open.value
      }, {
        default: v(() => [
          E(Rf, O(n.$attrs, {
            ref: r(a),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: v(() => [
              w(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : oe("", !0);
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
    W();
    const a = vt();
    return (n, o) => (f(), _(r(j), O(e, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (s) => r(a).onOpenChange(!1))
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Wi = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(t) {
    const e = t, a = vt();
    return W(), (n, o) => (f(), _(r(j), O(e, {
      id: r(a).titleId
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ki = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(t) {
    const e = t;
    W();
    const a = vt();
    return (n, o) => (f(), _(r(j), O(e, {
      id: r(a).descriptionId
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Ff(t) {
  function e(n) {
    return Array.isArray(t.date.value) ? t.date.value.some((o) => Pe(o, n)) : t.date.value ? Pe(t.date.value, n) : !1;
  }
  const a = C(
    () => {
      var n, o, s, l;
      if (Array.isArray(t.date.value)) {
        if (!t.date.value.length)
          return !1;
        for (const i of t.date.value)
          if ((n = t.isDateDisabled) != null && n.call(t, i) || (o = t.isDateUnavailable) != null && o.call(t, i))
            return !0;
      } else {
        if (!t.date.value)
          return !1;
        if ((s = t.isDateDisabled) != null && s.call(t, t.date.value) || (l = t.isDateUnavailable) != null && l.call(t, t.date.value))
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
function jf(t, e) {
  return e(t);
}
function zf(t, e) {
  return e(t);
}
function Ui(t) {
  const e = Ai(t.locale.value), a = C(() => {
    const y = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (y.era = "short"), y;
  }), n = P(Kt({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = C(() => n.value.map((y) => y.value));
  function s(y) {
    return !o.value.some((x) => Ar(y, x));
  }
  const l = (y = "month", x) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const $ = n.value[n.value.length - 1].value;
    if (x || t.nextPage.value) {
      const S = Lf($, x || t.nextPage.value);
      return Ka(S, t.maxValue.value);
    }
    if (y === "year") {
      const S = $.add({ years: 1 }).set({ day: 1, month: 1 });
      return Ka(S, t.maxValue.value);
    }
    const B = $.add({ months: 1 }).set({ day: 1 });
    return Ka(B, t.maxValue.value);
  }, i = (y = "month", x) => {
    if (!t.minValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const $ = n.value[0].value;
    if (x || t.prevPage.value) {
      const S = Nf($, x || t.prevPage.value);
      return Rt(S, t.minValue.value);
    }
    if (y === "year") {
      const S = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Rt(S, t.minValue.value);
    }
    const B = $.subtract({ months: 1 }).set({ day: 35 });
    return Rt(B, t.minValue.value);
  };
  function u(y) {
    var x;
    return !!((x = t.isDateDisabled) != null && x.call(t, y) || t.disabled.value || t.maxValue.value && Ka(y, t.maxValue.value) || t.minValue.value && Rt(y, t.minValue.value));
  }
  const c = (y) => {
    var x;
    return !!((x = t.isDateUnavailable) != null && x.call(t, y));
  }, d = C(() => n.value.length ? n.value[0].rows[0].map((y) => e.dayOfWeek(Ye(y), t.weekdayFormat.value)) : []), p = (y = "month", x) => {
    const $ = n.value[0].value;
    if (x || t.nextPage.value) {
      const D = jf($, x || t.nextPage.value), k = Kt({
        dateObj: D,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = k;
      const I = {};
      if (!x) {
        const M = k[0].value.compare($);
        M >= $t($) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      t.placeholder.value = k[0].value.set({ ...I });
      return;
    }
    const B = y === "month" ? $.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.add({ years: 1 }), S = Kt({
      dateObj: B,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = S, t.placeholder.value = S[0].value.set({ day: 1 });
  }, g = (y = "month", x) => {
    const $ = n.value[0].value;
    if (x || t.prevPage.value) {
      const D = zf($, x || t.prevPage.value), k = Kt({
        dateObj: D,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = k;
      const I = {};
      if (!x) {
        const M = $.compare(k[0].value);
        M >= $t($) && (I.day = 1), M >= 365 && (I.month = 1);
      }
      t.placeholder.value = k[0].value.set({ ...I });
      return;
    }
    const B = y === "month" ? $.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), S = Kt({
      dateObj: B,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = S, t.placeholder.value = S[0].value.set({ day: 1 });
  };
  X(t.placeholder, (y) => {
    o.value.some((x) => Ar(x, y)) || (n.value = Kt({
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
      const k = n.value[0].value;
      return `${e.fullMonthAndYear(Ye(k), a.value)}`;
    }
    const y = Ye(n.value[0].value), x = Ye(n.value[n.value.length - 1].value), $ = e.fullMonth(y, a.value), B = e.fullMonth(x, a.value), S = e.fullYear(y, a.value), D = e.fullYear(x, a.value);
    return S === D ? `${$} - ${B} ${D}` : `${$} ${S} - ${B} ${D}`;
  }), h = C(() => `${t.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: c,
    isNextButtonDisabled: l,
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
const Wf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Kf = {
  role: "heading",
  "aria-level": "2"
}, [Ea, Uf] = pe("CalendarRoot"), Hi = /* @__PURE__ */ b({
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
      isDateUnavailable: B,
      calendarLabel: S,
      defaultValue: D,
      nextPage: k,
      prevPage: I,
      dir: M
    } = he(a), { primitiveElement: K, currentElement: R } = Oa(), A = ft(M), T = _e(a, "modelValue", n, {
      defaultValue: D.value,
      passive: a.modelValue === void 0
    }), F = Ci({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value,
      locale: a.locale
    }), H = _e(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? F.copy(),
      passive: a.placeholder === void 0
    });
    function N(ee) {
      H.value = ee.copy();
    }
    const {
      fullCalendarLabel: z,
      headingValue: Q,
      isDateDisabled: se,
      isDateUnavailable: ge,
      isNextButtonDisabled: J,
      isPrevButtonDisabled: ce,
      weekdays: me,
      isOutsideVisibleView: Ve,
      nextPage: He,
      prevPage: Qe,
      formatter: ot,
      grid: Et
    } = Ui({
      locale: o,
      placeholder: H,
      weekStartsOn: c,
      fixedWeeks: p,
      numberOfMonths: y,
      minValue: m,
      maxValue: h,
      disabled: s,
      weekdayFormat: d,
      pagedNavigation: u,
      isDateDisabled: $.value,
      isDateUnavailable: B.value,
      calendarLabel: S,
      nextPage: k,
      prevPage: I
    }), {
      isInvalid: Y,
      isDateSelected: te
    } = Ff({
      date: T,
      isDateDisabled: se,
      isDateUnavailable: ge
    });
    X(T, (ee) => {
      if (Array.isArray(ee) && ee.length) {
        const xe = ee[ee.length - 1];
        xe && !rt(H.value, xe) && N(xe);
      } else !Array.isArray(ee) && ee && !rt(H.value, ee) && N(ee);
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
              H.value = ee.copy(), T.value = void 0;
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
        !x.value && rt(T.value, ee) ? (H.value = ee.copy(), T.value = void 0) : T.value = ee.copy();
      }
    }
    return de(() => {
      i.value && $i(R.value);
    }), Uf({
      isDateUnavailable: ge,
      dir: A,
      isDateDisabled: se,
      locale: o,
      formatter: ot,
      modelValue: T,
      placeholder: H,
      disabled: s,
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
      isInvalid: Y,
      isDateSelected: te,
      isNextButtonDisabled: J,
      isPrevButtonDisabled: ce,
      isOutsideVisibleView: Ve,
      nextPage: He,
      prevPage: Qe,
      parentElement: R,
      onPlaceholderChange: N,
      onDateChange: le
    }), (ee, xe) => (f(), _(r(j), {
      ref_key: "primitiveElement",
      ref: K,
      as: ee.as,
      "as-child": ee.asChild,
      role: "application",
      "aria-label": r(z),
      "data-readonly": r(l) ? "" : void 0,
      "data-disabled": r(s) ? "" : void 0,
      "data-invalid": r(Y) ? "" : void 0,
      dir: r(A)
    }, {
      default: v(() => [
        w(ee.$slots, "default", {
          date: r(H),
          grid: r(Et),
          weekDays: r(me),
          weekStartsOn: r(c),
          locale: r(o),
          fixedWeeks: r(p)
        }),
        ve("div", Wf, [
          ve("div", Kf, re(r(z)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Hf = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    return (n, o) => (f(), _(r(j), O(e, {
      "data-disabled": r(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        w(n.$slots, "default", {
          headingValue: r(a).headingValue.value
        }, () => [
          Z(re(r(a).headingValue.value), 1)
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
    return (s, l) => (f(), _(r(j), O(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
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
      return f(), _(r(j), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": r(e).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": r(e).isDateDisabled(a.date) || ((s = (o = r(e)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": r(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
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
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    return (o, s) => (f(), _(r(j), {
      as: e.as,
      "as-child": e.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => r(n).nextPage(e.step, e.nextPage))
    }, {
      default: v(() => [
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
    return (o, s) => (f(), _(r(j), {
      "aria-label": "Previous page",
      as: e.as,
      "as-child": e.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => r(n).prevPage(e.step, e.prevPage))
    }, {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    const e = t, a = Ii(), n = Ea(), { primitiveElement: o, currentElement: s } = Oa(), l = C(() => e.day.day.toLocaleString(n.locale.value)), i = C(() => n.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = C(() => n.isDateDisabled(e.day)), c = C(
      () => {
        var S;
        return (S = n.isDateUnavailable) == null ? void 0 : S.call(n, e.day);
      }
    ), d = C(() => Fl(e.day, Ct())), p = C(() => !Es(e.day, e.month)), g = C(
      () => n.isOutsideVisibleView(e.day)
    ), m = C(() => !n.disabled.value && Pe(e.day, n.placeholder.value)), h = C(() => n.isDateSelected(e.day)), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x(S) {
      var D;
      n.readonly.value || n.isDateDisabled(S) || (D = n.isDateUnavailable) != null && D.call(n, S) || n.onDateChange(S);
    }
    function $() {
      x(e.day);
    }
    function B(S) {
      S.preventDefault(), S.stopPropagation();
      const D = n.parentElement.value, k = D ? Array.from(D.querySelectorAll(y)) : [];
      let I = k.indexOf(s.value);
      const M = 7, K = n.dir.value === "rtl" ? -1 : 1;
      switch (S.code) {
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
      if (I >= 0 && I < k.length) {
        k[I].focus();
        return;
      }
      if (I < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), ae(() => {
          const R = D ? Array.from(D.querySelectorAll(y)) : [];
          if (!n.pagedNavigation.value) {
            const A = $t(n.placeholder.value);
            R[A - Math.abs(I)].focus();
            return;
          }
          R[R.length - Math.abs(I)].focus();
        });
        return;
      }
      if (I >= k.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ae(() => {
          const R = D ? Array.from(D.querySelectorAll(y)) : [];
          if (!n.pagedNavigation.value) {
            const A = $t(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            R[R.length - A + I - k.length].focus();
            return;
          }
          R[I - k.length].focus();
        });
      }
    }
    return (S, D) => (f(), _(r(j), O({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": u.value || c.value ? !0 : void 0,
      "data-selected": h.value ? !0 : void 0,
      "data-value": S.day.toString(),
      "data-disabled": u.value ? "" : void 0,
      "data-unavailable": c.value ? "" : void 0,
      "data-today": d.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": g.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: $,
      onKeydown: [
        Te(B, ["up", "down", "left", "right", "space", "enter"]),
        D[0] || (D[0] = Te($e(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: v(() => [
        w(S.$slots, "default", { dayValue: l.value }, () => [
          Z(re(l.value), 1)
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
const nv = ["value", "checked", "name", "disabled", "required"], [ov, sv] = pe("CheckboxRoot"), rv = /* @__PURE__ */ b({
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
    }), { forwardRef: l, currentElement: i } = W(), u = ln(i), c = C(() => {
      var d;
      return a.id && i.value ? (d = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return sv({
      disabled: o,
      state: s
    }), (d, p) => (f(), L(ne, null, [
      E(r(j), O(d.$attrs, {
        id: d.id,
        ref: r(l),
        role: "checkbox",
        "as-child": a.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": r(Jn)(r(s)) ? "mixed" : r(s),
        "aria-required": a.required,
        "aria-label": d.$attrs["aria-label"] || c.value,
        "data-state": r(Gi)(r(s)),
        "data-disabled": r(o) ? "" : void 0,
        disabled: r(o),
        onKeydown: Te($e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (g) => s.value = r(Jn)(r(s)) ? !0 : !r(s))
      }), {
        default: v(() => [
          w(d.$slots, "default", { checked: r(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      r(u) ? (f(), L("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: d.value,
        checked: !!r(s),
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
      }, null, 8, nv)) : oe("", !0)
    ], 64));
  }
}), lv = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = W(), a = ov();
    return (n, o) => (f(), _(r(Ke), {
      present: n.forceMount || r(Jn)(r(a).state.value) || r(a).state.value === !0
    }, {
      default: v(() => [
        E(r(j), O({
          ref: r(e),
          "data-state": r(Gi)(r(a).state.value),
          "data-disabled": r(a).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: v(() => [
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
    const e = P();
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
    const e = t, { forwardRef: a, currentElement: n } = W(), o = qi();
    return we(() => {
      o.onAnchorChange(e.element ?? n.value);
    }), (s, l) => (f(), _(r(j), {
      ref: r(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: v(() => [
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
      const { placement: s, rects: l, middlewareData: i } = e, u = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, c = u ? 0 : t.arrowWidth, d = u ? 0 : t.arrowHeight, [p, g] = us(s), m = { start: "0%", center: "50%", end: "100%" }[g], h = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, y = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + d / 2;
      let x = "", $ = "";
      return p === "bottom" ? (x = u ? m : `${h}px`, $ = `${-d}px`) : p === "top" ? (x = u ? m : `${h}px`, $ = `${l.floating.height + d}px`) : p === "right" ? (x = `${-d}px`, $ = u ? m : `${y}px`) : p === "left" && (x = `${l.floating.width + d}px`, $ = u ? m : `${y}px`), { data: { x, y: $ } };
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
}, [zw, cv] = pe("PopperContent"), Ca = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ ks({
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
    const a = t, n = e, o = qi(), { forwardRef: s, currentElement: l } = W(), i = P(), u = P(), { width: c, height: d } = Ti(u), p = C(
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
        apply: ({ elements: A, rects: T, availableWidth: F, availableHeight: H }) => {
          const { width: N, height: z } = T.reference, Q = A.floating.style;
          Q.setProperty(
            "--radix-popper-available-width",
            `${F}px`
          ), Q.setProperty(
            "--radix-popper-available-height",
            `${H}px`
          ), Q.setProperty(
            "--radix-popper-anchor-width",
            `${N}px`
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
    ]), { floatingStyles: x, placement: $, isPositioned: B, middlewareData: S } = xi(
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
    ), D = C(
      () => us($.value)[0]
    ), k = C(
      () => us($.value)[1]
    );
    Os(() => {
      B.value && n("placed");
    });
    const I = C(
      () => {
        var A;
        return ((A = S.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), M = P("");
    we(() => {
      l.value && (M.value = window.getComputedStyle(l.value).zIndex);
    });
    const K = C(() => {
      var A;
      return ((A = S.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), R = C(() => {
      var A;
      return ((A = S.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return cv({
      placedSide: D,
      onArrowChange: (A) => u.value = A,
      arrowX: K,
      arrowY: R,
      shouldHideArrow: I
    }), (A, T) => {
      var F, H, N;
      return f(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: dt({
          ...r(x),
          transform: r(B) ? r(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (F = r(S).transformOrigin) == null ? void 0 : F.x,
            (H = r(S).transformOrigin) == null ? void 0 : H.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((N = r(S).hide) == null ? void 0 : N.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        E(r(j), O({ ref: r(s) }, A.$attrs, {
          "as-child": a.asChild,
          as: A.as,
          "data-side": D.value,
          "data-align": k.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: r(B) ? void 0 : "none"
          }
        }), {
          default: v(() => [
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
    return W(), (e, a) => (f(), _(r(j), {
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
    const e = t, a = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([s, l]) => ({ name: `[${o}][${e.name}][${s}]`, value: l })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (f(!0), L(ne, null, be(a.value, (s) => (f(), _(pn, {
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
}), fv = "data-radix-vue-collection-item", [ir, vv] = pe("CollectionProvider");
function ur(t = fv) {
  const e = P(/* @__PURE__ */ new Map()), a = P(), n = vv({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = cr(n), s = C(() => Array.from(n.itemMap.value.values())), l = C(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: s, itemMapSize: l };
}
const dr = b({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = ir(), { primitiveElement: n, currentElement: o } = Oa();
    return X(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ie(er, { ref: n }, e);
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
    const n = ir(), { primitiveElement: o, currentElement: s } = Oa();
    return we((l) => {
      if (s.value) {
        const i = Tl(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: t.value }), l(() => n.itemMap.value.delete(i));
      }
    }), () => Ie(er, { ...a, [n.attrName]: "", ref: o }, e);
  }
});
function cr(t) {
  const e = t ?? ir();
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
const [Aa, mv] = pe("ComboboxRoot"), hv = /* @__PURE__ */ b({
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
    const a = t, n = e, { multiple: o, disabled: s, dir: l } = he(a), i = ft(l), u = _e(a, "searchTerm", n, {
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
    async function g(J) {
      var ce, me;
      d.value = J, await ae(), J ? (c.value && (Array.isArray(c.value) && o.value ? p.value = (ce = S().find((Ve) => {
        var He, Qe;
        return ((Qe = (He = Ve.ref) == null ? void 0 : He.dataset) == null ? void 0 : Qe.state) === "checked";
      })) == null ? void 0 : ce.value : p.value = c.value), await ae(), (me = y.value) == null || me.focus(), H()) : (h.value = !1, a.resetSearchTermOnBlur && K("blur"));
    }
    function m(J) {
      if (Array.isArray(c.value) && o.value) {
        const ce = c.value.findIndex((Ve) => Gt(Ve, J)), me = [...c.value];
        ce === -1 ? me.push(J) : me.splice(ce, 1), c.value = me;
      } else
        c.value = J, g(!1);
    }
    const h = P(!1), y = P(), x = P(), { forwardRef: $, currentElement: B } = W(), { getItems: S, reactiveItems: D, itemMapSize: k } = ur("data-radix-vue-combobox-item"), I = P([]);
    X(() => k.value, () => {
      I.value = S().map((J) => J.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = C(() => {
      if (h.value) {
        if (a.filterFunction)
          return a.filterFunction(I.value, u.value);
        const J = I.value.filter((ce) => typeof ce == "string");
        if (J.length)
          return J.filter((ce) => {
            var me;
            return ce.toLowerCase().includes((me = u.value) == null ? void 0 : me.toLowerCase());
          });
      }
      return I.value;
    });
    function K(J) {
      const ce = J === "blur" || J === "select" && a.resetSearchTermOnSelect;
      !o.value && c.value && !Array.isArray(c.value) ? a.displayValue ? u.value = a.displayValue(c.value) : typeof c.value != "object" ? u.value = c.value.toString() : ce && (u.value = "") : ce && (u.value = "");
    }
    const R = C(() => M.value.findIndex((J) => Gt(J, p.value))), A = C(() => {
      var J;
      return (J = D.value.find((ce) => Gt(ce.value, p.value))) == null ? void 0 : J.ref;
    }), T = C(() => JSON.stringify(c.value));
    X(T, async () => {
      await ae(), await ae(), K("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), X(() => [M.value.length, u.value.length], async ([J, ce], [me, Ve]) => {
      await ae(), await ae(), J && (Ve > ce || R.value === -1) && (p.value = M.value[0]);
    });
    const F = ln(B);
    function H() {
      var J;
      A.value instanceof Element && ((J = A.value) == null || J.scrollIntoView({ block: "nearest" }));
    }
    function N() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const z = P(!1);
    function Q() {
      z.value = !0;
    }
    function se() {
      requestAnimationFrame(() => {
        z.value = !1;
      });
    }
    async function ge(J) {
      var ce;
      M.value.length && p.value && A.value instanceof Element && (J.preventDefault(), J.stopPropagation(), z.value || (ce = A.value) == null || ce.click());
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
      onInputElementChange: (J) => y.value = J,
      onInputNavigation: async (J) => {
        const ce = R.value;
        ce === 0 && J === "up" || ce === M.value.length - 1 && J === "down" || (ce === -1 && M.value.length || J === "home" ? p.value = M.value[0] : J === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[J === "up" ? ce - 1 : ce + 1], await ae(), H(), N(), ae(() => {
          var me;
          return (me = y.value) == null ? void 0 : me.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ge,
      onCompositionEnd: se,
      onCompositionStart: Q,
      selectedValue: p,
      onSelectedValueChange: (J) => p.value = J,
      parentElement: B,
      contentElement: x,
      onContentElementChange: (J) => x.value = J
    }), (J, ce) => (f(), _(r(Pa), null, {
      default: v(() => [
        E(r(j), O({
          ref: r($),
          style: {
            pointerEvents: r(d) ? "auto" : void 0
          },
          as: J.as,
          "as-child": J.asChild,
          dir: r(i)
        }, J.$attrs), {
          default: v(() => [
            w(J.$slots, "default", {
              open: r(d),
              modelValue: r(c)
            }),
            r(F) && a.name ? (f(), _(r(pv), {
              key: 0,
              name: a.name,
              value: r(c)
            }, null, 8, ["name", "value"])) : oe("", !0)
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
    const e = t, a = Aa(), { forwardRef: n, currentElement: o } = W();
    de(() => {
      const d = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      d && (a.onInputElementChange(d), setTimeout(() => {
        e.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const s = C(() => e.disabled || a.disabled.value || !1), l = P();
    Pl(() => {
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
    return (d, p) => (f(), _(r(j), {
      ref: r(n),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: s.value,
      value: r(a).searchTerm.value,
      "aria-expanded": r(a).open.value,
      "aria-controls": r(a).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": l.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: [
        Te($e(i, ["prevent"]), ["down", "up"]),
        Te(r(a).onInputEnter, ["enter"]),
        Te($e(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: r(a).onCompositionStart,
      onCompositionend: r(a).onCompositionEnd
    }, {
      default: v(() => [
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
    const e = t, { currentRef: a, currentElement: n } = W(), o = ke(void 0, "radix-vue-combobox-group"), s = Aa(), l = P(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Sp(n, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), X(() => s.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), yv({
      id: o
    }), (u, c) => $a((f(), _(r(j), O(e, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": r(o)
    }), {
      default: v(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [$s, l.value]
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
    W();
    const a = Ji({ id: "" });
    return (n, o) => (f(), _(r(j), O(e, {
      id: r(a).id
    }), {
      default: v(() => [
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
    const a = t, n = e, { position: o } = he(a), s = Aa();
    rn(a.bodyLock);
    const { forwardRef: l, currentElement: i } = W();
    un(s.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), c = fe(u.value);
    function d(g) {
      s.onSelectedValueChange("");
    }
    de(() => {
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
    return wv({ position: o }), (g, m) => (f(), _(r(dr), null, {
      default: v(() => [
        g.dismissable ? (f(), _(r(Da), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => r(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = r(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = r(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: v(() => [
            (f(), _(Ne(r(o) === "popper" ? r(Ca) : r(j)), O({ ...g.$attrs, ...r(c) }, {
              id: r(s).contentId,
              ref: r(l),
              role: "listbox",
              "data-state": r(s).open.value ? "open" : "closed",
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
              default: v(() => [
                w(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), _(Ne(r(o) === "popper" ? r(Ca) : r(j)), O({ key: 1 }, { ...g.$attrs, ...u.value }, {
          id: r(s).contentId,
          ref: r(l),
          role: "listbox",
          "data-state": r(s).open.value ? "open" : "closed",
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
          default: v(() => [
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
    const a = ie(t, e), { forwardRef: n } = W(), o = Aa();
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-combobox-content")), (s, l) => (f(), _(r(Ke), {
      present: s.forceMount || r(o).open.value
    }, {
      default: v(() => [
        E(xv, O({ ...r(a), ...s.$attrs }, { ref: r(n) }), {
          default: v(() => [
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
    W();
    const a = Aa(), n = C(() => a.filteredOptions.value.length === 0);
    return (o, s) => n.value ? (f(), _(r(j), U(O({ key: 0 }, e)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("No options")
        ])
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
});
function Sv(t) {
  const e = fo({
    nonce: P()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [Kw, Bv] = pe("ComboboxItem"), kv = "combobox.select", Ov = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = he(a), s = Aa();
    Ji({ id: "", options: P([]) });
    const { forwardRef: l } = W(), i = C(
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
      qs(kv, g, x);
    }
    async function h(y) {
      await ae(), !y.defaultPrevented && s.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Bv({
      isSelected: i
    }), (y, x) => (f(), _(r(go), { value: y.value }, {
      default: v(() => [
        $a(E(r(j), {
          id: r(d),
          ref: r(l),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": r(c),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": r(o) || void 0,
          "data-disabled": r(o) ? "" : void 0,
          as: y.as,
          "as-child": y.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: h
        }, {
          default: v(() => [
            w(y.$slots, "default", {}, () => [
              Z(re(y.value), 1)
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
}), Dv = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(r(j), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(ho), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ev() {
  const t = P(!1);
  return de(() => {
    xa("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), xa(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const Pv = Si(Ev), [Zt, Xi] = pe(["MenuRoot", "MenuSub"], "MenuContext"), [fn, Av] = pe("MenuRoot"), Mv = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: s } = he(a), l = ft(s), i = _e(a, "open", n), u = P(), c = Pv();
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
      dir: l,
      modal: o
    }), (d, p) => (f(), _(r(Pa), null, {
      default: v(() => [
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
  const a = Oe();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), Oe() !== a))
      return;
}
function Lv(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [Nv, jv] = pe("RovingFocusGroup"), eu = /* @__PURE__ */ b({
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
    const n = t, o = a, { loop: s, orientation: l, dir: i } = he(n), u = ft(i), c = _e(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), d = P(!1), p = P(!1), g = P(0), { getItems: m } = ur();
    function h(x) {
      const $ = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && $ && !d.value) {
        const B = new CustomEvent(Tv, Iv);
        if (x.currentTarget.dispatchEvent(B), o("entryFocus", B), !B.defaultPrevented) {
          const S = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), D = S.find((M) => M.getAttribute("data-active") === "true"), k = S.find(
            (M) => M.id === c.value
          ), I = [D, k, ...S].filter(
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
    }), jv({
      loop: s,
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
    }), (x, $) => (f(), _(r(dr), null, {
      default: v(() => [
        E(r(j), {
          tabindex: d.value || g.value === 0 ? -1 : 0,
          "data-orientation": r(l),
          as: x.as,
          "as-child": x.asChild,
          dir: r(u),
          style: { outline: "none" },
          onMousedown: $[0] || ($[0] = (B) => p.value = !0),
          onMouseup: y,
          onFocus: h,
          onBlur: $[1] || ($[1] = (B) => d.value = !1)
        }, {
          default: v(() => [
            w(x.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), zv = /* @__PURE__ */ b({
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
    ), { getItems: s } = cr();
    de(() => {
      e.focusable && a.onFocusableItemAdd();
    }), je(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function l(i) {
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
    return (i, u) => (f(), _(r(go), null, {
      default: v(() => [
        E(r(j), {
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
          onKeydown: l
        }, {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [pr, Wv] = pe("MenuContent"), fr = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ ks({
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
    const a = t, n = e, o = Zt(), s = fn(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = he(a);
    Xs(), rn(i.value);
    const c = P(""), d = P(0), p = P(0), g = P(null), m = P("right"), h = P(0), y = P(null), { createCollection: x } = ka(), { forwardRef: $, currentElement: B } = W(), S = x(B);
    X(B, (A) => {
      o.onContentChange(A);
    });
    const { handleTypeaheadSearch: D } = Zs(S);
    je(() => {
      window.clearTimeout(d.value);
    });
    function k(A) {
      var T, F;
      return m.value === ((T = g.value) == null ? void 0 : T.side) && Pf(A, (F = g.value) == null ? void 0 : F.area);
    }
    async function I(A) {
      var T;
      n("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (T = B.value) == null || T.focus({
        preventScroll: !0
      }));
    }
    function M(A) {
      if (A.defaultPrevented)
        return;
      const T = A.target.closest("[data-radix-menu-content]") === A.currentTarget, F = A.ctrlKey || A.altKey || A.metaKey, H = A.key.length === 1, N = Di(
        A,
        Oe(),
        B.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (N)
        return N == null ? void 0 : N.focus();
      if (A.code === "Space" || (T && (A.key === "Tab" && A.preventDefault(), !F && H && D(A.key)), A.target !== B.value) || !kf.includes(A.key))
        return;
      A.preventDefault();
      const z = S.value;
      ji.includes(A.key) && z.reverse(), is(z);
    }
    function K(A) {
      var T, F;
      (F = (T = A == null ? void 0 : A.currentTarget) == null ? void 0 : T.contains) != null && F.call(T, A.target) || (window.clearTimeout(d.value), c.value = "");
    }
    function R(A) {
      var T;
      if (!Qa(A))
        return;
      const F = A.target, H = h.value !== A.clientX;
      if ((T = A == null ? void 0 : A.currentTarget) != null && T.contains(F) && H) {
        const N = A.clientX > h.value ? "right" : "left";
        m.value = N, h.value = A.clientX;
      }
    }
    return Wv({
      onItemEnter: (A) => !!k(A),
      onItemLeave: (A) => {
        var T;
        k(A) || ((T = B.value) == null || T.focus(), y.value = null);
      },
      onTriggerLeave: (A) => !!k(A),
      searchRef: c,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        g.value = A;
      }
    }), (A, T) => (f(), _(r(mo), {
      "as-child": "",
      trapped: r(l),
      onMountAutoFocus: I,
      onUnmountAutoFocus: T[7] || (T[7] = (F) => n("closeAutoFocus", F))
    }, {
      default: v(() => [
        E(r(Da), {
          "as-child": "",
          "disable-outside-pointer-events": r(i),
          onEscapeKeyDown: T[2] || (T[2] = (F) => n("escapeKeyDown", F)),
          onPointerDownOutside: T[3] || (T[3] = (F) => n("pointerDownOutside", F)),
          onFocusOutside: T[4] || (T[4] = (F) => n("focusOutside", F)),
          onInteractOutside: T[5] || (T[5] = (F) => n("interactOutside", F)),
          onDismiss: T[6] || (T[6] = (F) => n("dismiss"))
        }, {
          default: v(() => [
            E(r(eu), {
              "current-tab-stop-id": y.value,
              "onUpdate:currentTabStopId": T[0] || (T[0] = (F) => y.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: r(s).dir.value,
              loop: r(u),
              onEntryFocus: T[1] || (T[1] = (F) => {
                n("entryFocus", F), r(s).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: v(() => [
                E(r(Ca), {
                  ref: r($),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": r(or)(r(o).open.value),
                  dir: r(s).dir.value,
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
                  default: v(() => [
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
    const e = t, a = pr(), { forwardRef: n } = W(), o = P(!1);
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
    async function l(i) {
      await ae(), !i.defaultPrevented && Qa(i) && a.onItemLeave(i);
    }
    return (i, u) => (f(), _(r(go), {
      value: { textValue: i.textValue }
    }, {
      default: v(() => [
        E(r(j), O({
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
          onPointermove: s,
          onPointerleave: l,
          onFocus: u[0] || (u[0] = async (c) => {
            await ae(), !(c.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (c) => {
            await ae(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), vr = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = W(), l = fn(), i = pr(), u = P(!1);
    async function c() {
      const d = s.value;
      if (!a.disabled && d) {
        const p = new CustomEvent(Sf, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ae(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (d, p) => (f(), _(tu, O(a, {
      ref: r(o),
      onClick: c,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (g) => {
        var m;
        await ae(), !g.defaultPrevented && (u.value || (m = g.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (g) => {
        const m = r(i).searchRef.value !== "";
        d.disabled || m && g.key === " " || r(ls).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Kv, au] = pe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Uv = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Kv({
      checked: P(!1)
    });
    return (a, n) => (f(), _(r(Ke), {
      present: a.forceMount || r(Yn)(r(e).checked.value) || r(e).checked.value === !0
    }, {
      default: v(() => [
        E(r(j), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": r(sr)(r(e).checked.value)
        }, {
          default: v(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hv = /* @__PURE__ */ b({
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
    return au({ checked: o }), (s, l) => (f(), _(vr, O({ role: "menuitemcheckbox" }, a, {
      "aria-checked": r(Yn)(r(o)) ? "mixed" : r(o),
      "data-state": r(sr)(r(o)),
      onSelect: l[0] || (l[0] = async (i) => {
        n("select", i), r(Yn)(r(o)) ? o.value = !0 : o.value = !r(o);
      })
    }), {
      default: v(() => [
        w(s.$slots, "default", { checked: r(o) })
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
    const a = t, n = e, o = ie(a, n), s = Zt(), { forwardRef: l, currentElement: i } = W();
    return un(i), (u, c) => (f(), _(fr, O(r(o), {
      ref: r(l),
      "trap-focus": r(s).open.value,
      "disable-outside-pointer-events": r(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (d) => r(s).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = $e((d) => n("focusOutside", d), ["prevent"]))
    }), {
      default: v(() => [
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
    const a = ie(t, e), n = Zt();
    return (o, s) => (f(), _(fr, O(r(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (l) => r(n).onOpenChange(!1))
    }), {
      default: v(() => [
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
    const a = ie(t, e), n = Zt(), o = fn();
    return (s, l) => (f(), _(r(Ke), {
      present: s.forceMount || r(n).open.value
    }, {
      default: v(() => [
        r(o).modal.value ? (f(), _(Gv, U(O({ key: 0 }, { ...s.$attrs, ...r(a) })), {
          default: v(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), _(qv, U(O({ key: 1 }, { ...s.$attrs, ...r(a) })), {
          default: v(() => [
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
    return (a, n) => (f(), _(r(j), O({ role: "group" }, e), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(dn), U(q(e)), {
      default: v(() => [
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
    }), (o, s) => (f(), _(nu, U(q(a)), {
      default: v(() => [
        w(o.$slots, "default", { modelValue: r(n) })
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
    const a = t, n = e, { value: o } = he(a), s = Xv(), l = C(
      () => s.modelValue.value === (o == null ? void 0 : o.value)
    );
    return au({ checked: l }), (i, u) => (f(), _(vr, O({ role: "menuitemradio" }, a, {
      "aria-checked": l.value,
      "data-state": r(sr)(l.value),
      onSelect: u[0] || (u[0] = async (c) => {
        n("select", c), r(s).onValueChange(r(o));
      })
    }), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), O(e, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: v(() => [
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
    }), o = Zt(), s = P(), l = P();
    return we((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Xi({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), nm({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, u) => (f(), _(r(Pa), null, {
      default: v(() => [
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
    const a = ie(t, e), n = Zt(), o = fn(), s = ou(), { forwardRef: l, currentElement: i } = W();
    return s.contentId || (s.contentId = ke(void 0, "radix-vue-menu-sub-content")), (u, c) => (f(), _(r(Ke), {
      present: u.forceMount || r(n).open.value
    }, {
      default: v(() => [
        E(fr, O(r(a), {
          id: r(s).contentId,
          ref: r(l),
          "aria-labelledby": r(s).triggerId,
          align: "start",
          side: r(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = $e((d) => {
            var p;
            r(o).isUsingKeyboardRef.value && ((p = r(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = $e(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (d) => {
            d.defaultPrevented || d.target !== r(s).trigger.value && r(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (d) => {
            r(o).onClose(), d.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (d) => {
            var p, g;
            const m = (p = d.currentTarget) == null ? void 0 : p.contains(d.target), h = r(Df)[r(o).dir.value].includes(d.key);
            m && h && (r(n).onOpenChange(!1), (g = r(s).trigger.value) == null || g.focus(), d.preventDefault());
          })
        }), {
          default: v(() => [
            w(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rm = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Zt(), n = fn(), o = ou(), s = pr(), l = P(null);
    o.triggerId || (o.triggerId = ke(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    je(() => {
      i();
    });
    function u(p) {
      !Qa(p) || s.onItemEnter(p) || !e.disabled && !a.open.value && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
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
        const y = (m = a.content.value) == null ? void 0 : m.dataset.side, x = y === "right", $ = x ? -5 : 5, B = h[x ? "left" : "right"], S = h[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + $, y: p.clientY },
            { x: B, y: h.top },
            { x: S, y: h.top },
            { x: S, y: h.bottom },
            { x: B, y: h.bottom }
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
      e.disabled || m && p.key === " " || Of[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ae(), (g = a.content.value) == null || g.focus(), p.preventDefault());
    }
    return (p, g) => (f(), _(Qi, { "as-child": "" }, {
      default: v(() => [
        E(tu, O(e, {
          id: r(o).triggerId,
          ref: (m) => {
            var h;
            (h = r(o)) == null || h.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": r(a).open.value,
          "aria-controls": r(o).contentId,
          "data-state": r(or)(r(a).open.value),
          onClick: g[0] || (g[0] = async (m) => {
            e.disabled || m.defaultPrevented || (m.currentTarget.focus(), r(a).open.value || r(a).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: c,
          onKeydown: d
        }), {
          default: v(() => [
            w(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [su, lm] = pe("DropdownMenuRoot"), im = /* @__PURE__ */ b({
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
    W();
    const o = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), s = P(), { modal: l, dir: i } = he(a), u = ft(i);
    return lm({
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
      modal: l,
      dir: u
    }), (c, d) => (f(), _(r(Mv), {
      open: r(o),
      "onUpdate:open": d[0] || (d[0] = (p) => jt(o) ? o.value = p : null),
      dir: r(u),
      modal: r(l)
    }, {
      default: v(() => [
        w(c.$slots, "default", { open: r(o) })
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
    const e = t, a = su(), { forwardRef: n, currentElement: o } = W();
    return de(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = ke(void 0, "radix-vue-dropdown-menu-trigger")), (s, l) => (f(), _(r(Qi), { "as-child": "" }, {
      default: v(() => [
        E(r(j), {
          id: r(a).triggerId,
          ref: r(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": e.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": r(a).open.value,
          "aria-controls": r(a).open.value ? r(a).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": r(a).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = r(a)) == null || u.onOpenToggle(), await ae(), r(a).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Te(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && r(a).onOpenToggle(), i.key === "ArrowDown" && r(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: v(() => [
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
    return (a, n) => (f(), _(r(Qv), U(q(e)), {
      default: v(() => [
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
    const a = ie(t, e);
    W();
    const n = su(), o = P(!1);
    function s(l) {
      l.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = ke(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return f(), _(r(Yv), O(r(a), {
        id: r(n).contentId,
        "aria-labelledby": (u = r(n)) == null ? void 0 : u.triggerId,
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
          (!r(n).modal.value || m) && (o.value = !0), (d = r(n).triggerElement.value) != null && d.contains(c.target) && c.preventDefault();
        })
      }), {
        default: v(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ru = /* @__PURE__ */ b({
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
    return W(), (o, s) => (f(), _(r(vr), U(q({ ...a, ...r(n) })), {
      default: v(() => [
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
    return W(), (a, n) => (f(), _(r(nu), U(q(e)), {
      default: v(() => [
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
    return W(), (a, n) => (f(), _(r(am), U(q(e)), {
      default: v(() => [
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
    return W(), (o, s) => (f(), _(r(Hv), U(q({ ...a, ...r(n) })), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lu = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(r(Uv), U(q(e)), {
      default: v(() => [
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
    return W(), (a, n) => (f(), _(r(Jv), U(q(e)), {
      default: v(() => [
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
    return W(), (o, s) => (f(), _(r(em), U(q({ ...a, ...r(n) })), {
      default: v(() => [
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
    const a = ie(t, e);
    return W(), (n, o) => (f(), _(r(tm), U(q(r(a))), {
      default: v(() => [
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
    return W(), (o, s) => (f(), _(r(om), {
      open: r(n),
      "onUpdate:open": s[0] || (s[0] = (l) => jt(n) ? n.value = l : null)
    }, {
      default: v(() => [
        w(o.$slots, "default", { open: r(n) })
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
    const a = ie(t, e);
    return W(), (n, o) => (f(), _(r(sm), O(r(a), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
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
    return W(), (a, n) => (f(), _(r(rm), U(q(e)), {
      default: v(() => [
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
    return W(), (a, n) => (f(), _(r(j), O(e, {
      onMousedown: n[0] || (n[0] = (o) => {
        !o.defaultPrevented && o.detail > 1 && o.preventDefault();
      })
    }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ma, xm] = pe("PaginationRoot"), Uw = /* @__PURE__ */ b({
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
    const a = t, n = e, { siblingCount: o, disabled: s, showEdges: l } = he(a);
    W();
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
      showEdges: l
    }), (c, d) => (f(), _(r(j), {
      as: c.as,
      "as-child": c.asChild
    }, {
      default: v(() => [
        w(c.$slots, "default", {
          page: r(i),
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
    return W(), (a, n) => (f(), _(r(j), O(e, { "data-type": "ellipsis" }), {
      default: v(() => [
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
    const e = t, a = Ma();
    W();
    const n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (f(), _(r(j), O(e, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (l) => !n.value && r(a).onPageChange(1))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Sm = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ma();
    W();
    const n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (f(), _(r(j), O(e, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (l) => !n.value && r(a).onPageChange(r(a).pageCount.value))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function Pt(t, e) {
  const a = e - t + 1;
  return Array.from({ length: a }, (n, o) => o + t);
}
function Bm(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const Cn = "ellipsis";
function km(t, e, a, n) {
  const o = e, s = Math.max(t - a, 1), l = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, u = s > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(s - 1) > 2, c = l < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - l) > 2;
    if (!u && c)
      return [...Pt(1, i), Cn, o];
    if (u && !c) {
      const d = Pt(o - i + 1, o);
      return [1, Cn, ...d];
    }
    if (u && c) {
      const d = Pt(s, l);
      return [1, Cn, ...d, Cn, o];
    }
    return Pt(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? Pt(1, o) : t <= a + 1 ? Pt(1, i) : e - t <= a ? Pt(e - i + 1, o) : Pt(s, l);
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
    W();
    const a = Ma(), n = C(() => Bm(
      km(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, s) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
        w(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), Gw = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Ma(), n = C(() => a.page.value === e.value), o = C(() => a.disabled.value);
    return (s, l) => (f(), _(r(j), O(e, {
      "data-type": "page",
      "aria-label": `Page ${s.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o.value,
      type: s.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !o.value && r(a).onPageChange(s.value))
    }), {
      default: v(() => [
        w(s.$slots, "default", {}, () => [
          Z(re(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Om = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Ma(), n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, s) => (f(), _(r(j), O(e, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (l) => !n.value && r(a).onPageChange(r(a).page.value + 1))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Dm = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Ma(), n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, s) => (f(), _(r(j), O(e, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: s[0] || (s[0] = (l) => !n.value && r(a).onPageChange(r(a).page.value - 1))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [vn, Em] = pe("PopoverRoot"), Pm = /* @__PURE__ */ b({
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
    }), l = P(), i = P(!1);
    return Em({
      contentId: "",
      modal: o,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: l,
      hasCustomAnchor: i
    }), (u, c) => (f(), _(r(Pa), null, {
      default: v(() => [
        w(u.$slots, "default", { open: r(s) })
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
    const e = t, a = vn(), { forwardRef: n, currentElement: o } = W();
    return de(() => {
      a.triggerElement.value = o.value;
    }), (s, l) => (f(), _(Ne(r(a).hasCustomAnchor.value ? r(j) : r(ho)), { "as-child": "" }, {
      default: v(() => [
        E(r(j), {
          ref: r(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": r(a).open.value,
          "aria-controls": r(a).contentId,
          "data-state": r(a).open.value ? "open" : "closed",
          as: s.as,
          "as-child": e.asChild,
          onClick: r(a).onOpenToggle
        }, {
          default: v(() => [
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
    return (a, n) => (f(), _(r(dn), U(q(e)), {
      default: v(() => [
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
    const a = t, n = e, o = fe(a), { forwardRef: s } = W(), l = vn();
    return Xs(), (i, u) => (f(), _(r(mo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: u[6] || (u[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: v(() => [
        E(r(Da), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (c) => n("pointerDownOutside", c)),
          onInteractOutside: u[1] || (u[1] = (c) => n("interactOutside", c)),
          onEscapeKeyDown: u[2] || (u[2] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: u[3] || (u[3] = (c) => n("focusOutside", c)),
          onDismiss: u[4] || (u[4] = (c) => r(l).onOpenChange(!1))
        }, {
          default: v(() => [
            E(r(Ca), O(r(o), {
              id: r(l).contentId,
              ref: r(s),
              "data-state": r(l).open.value ? "open" : "closed",
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
    const a = t, n = e, o = vn(), s = P(!1);
    rn(!0);
    const l = ie(a, n), { forwardRef: i, currentElement: u } = W();
    return un(u), (c, d) => (f(), _(iu, O(r(l), {
      ref: r(i),
      "trap-focus": r(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = $e(
        (p) => {
          var g;
          n("closeAutoFocus", p), s.value || (g = r(o).triggerElement.value) == null || g.focus();
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
      default: v(() => [
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
    const a = t, n = e, o = vn(), s = P(!1), l = P(!1), i = ie(a, n);
    return (u, c) => (f(), _(iu, O(r(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var p;
        n("closeAutoFocus", d), d.defaultPrevented || (s.value || (p = r(o).triggerElement.value) == null || p.focus(), d.preventDefault()), s.value = !1, l.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (d) => {
        var p;
        n("interactOutside", d), d.defaultPrevented || (s.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const g = d.target;
        (p = r(o).triggerElement.value) != null && p.contains(g) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: v(() => [
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
    const a = t, n = e, o = vn(), s = ie(a, n), { forwardRef: l } = W();
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-popover-content")), (i, u) => (f(), _(r(Ke), {
      present: i.forceMount || r(o).open.value
    }, {
      default: v(() => [
        r(o).modal.value ? (f(), _(Tm, O({ key: 0 }, r(s), { ref: r(l) }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), _(Im, O({ key: 1 }, r(s), { ref: r(l) }), {
          default: v(() => [
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
  ), o = (u) => t.start.value ? Pe(t.start.value, u) : !1, s = (u) => t.end.value ? Pe(t.end.value, u) : !1, l = (u) => t.start.value && Pe(t.start.value, u) || t.end.value && Pe(t.end.value, u) ? !0 : t.end.value && t.start.value ? wc(u, t.start.value, t.end.value) : !1, i = C(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const u = Rt(t.start.value, t.focusedValue.value), c = u ? t.start.value : t.focusedValue.value, d = u ? t.focusedValue.value : t.start.value;
    return Pe(c, d) ? {
      start: c,
      end: d
    } : $c(c, d, t.isDateUnavailable, t.isDateDisabled) ? {
      start: c,
      end: d
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: l,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: s,
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Pe(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Pe(i.value.end, u)
  };
}
const Fm = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Lm = {
  role: "heading",
  "aria-level": "2"
}, [Ta, Nm] = pe("RangeCalendarRoot"), jm = /* @__PURE__ */ b({
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
      locale: B,
      dir: S,
      nextPage: D,
      prevPage: k
    } = he(a), { primitiveElement: I, currentElement: M } = Oa(), K = ft(S), R = P(), A = P(), T = _e(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), F = Ci({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value.start,
      locale: a.locale
    }), H = P(T.value.start), N = P(T.value.end), z = _e(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? F.copy(),
      passive: a.placeholder === void 0
    });
    function Q(ye) {
      z.value = ye.copy();
    }
    const {
      fullCalendarLabel: se,
      headingValue: ge,
      isDateDisabled: J,
      isDateUnavailable: ce,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: Ve,
      grid: He,
      weekdays: Qe,
      isOutsideVisibleView: ot,
      nextPage: Et,
      prevPage: Y,
      formatter: te
    } = Ui({
      locale: B,
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
      nextPage: D,
      prevPage: k
    }), {
      isInvalid: le,
      isSelected: ee,
      highlightedRange: xe,
      isSelectionStart: Re,
      isSelectionEnd: zt,
      isHighlightedStart: Wt,
      isHighlightedEnd: id
    } = Rm({
      start: H,
      end: N,
      isDateDisabled: J,
      isDateUnavailable: ce,
      focusedValue: A
    });
    return X(T, (ye) => {
      var Ge, Fe, Bo, Dr;
      (!ye || !ye.start || H.value && !rt(ye.start, H.value)) && (H.value = (Fe = (Ge = ye == null ? void 0 : ye.start) == null ? void 0 : Ge.copy) == null ? void 0 : Fe.call(Ge)), (!ye || !ye.end || N.value && !rt(ye.end, N.value)) && (N.value = (Dr = (Bo = ye == null ? void 0 : ye.end) == null ? void 0 : Bo.copy) == null ? void 0 : Dr.call(Bo));
    }), X(H, (ye) => {
      ye && !rt(ye, z.value) && Q(ye), n("update:startValue", ye);
    }), X([H, N], ([ye, Ge]) => {
      const Fe = T.value;
      if (!(Fe && Fe.start && Fe.end && ye && Ge && rt(Fe.start, ye) && rt(Fe.end, Ge)))
        if (ye && Ge) {
          if (Fe.start && Fe.end && rt(Fe.start, ye) && rt(Fe.end, Ge))
            return;
          Rt(Ge, ye) ? T.value = {
            start: Ge.copy(),
            end: ye.copy()
          } : T.value = {
            start: ye.copy(),
            end: Ge.copy()
          };
        } else Fe.start && Fe.end && (T.value = {
          start: ye == null ? void 0 : ye.copy(),
          end: void 0
        });
    }), Nm({
      isDateUnavailable: ce,
      startValue: H,
      endValue: N,
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
      readonly: s,
      preventDeselect: g,
      fullCalendarLabel: se,
      headingValue: ge,
      isInvalid: le,
      isDateDisabled: J,
      highlightedRange: xe,
      focusedValue: A,
      lastPressedDateValue: R,
      isSelected: ee,
      isSelectionEnd: zt,
      isSelectionStart: Re,
      isNextButtonDisabled: me,
      isPrevButtonDisabled: Ve,
      isOutsideVisibleView: ot,
      nextPage: Et,
      prevPage: Y,
      parentElement: M,
      onPlaceholderChange: Q,
      locale: B,
      dir: K,
      isHighlightedStart: Wt,
      isHighlightedEnd: id
    }), de(() => {
      l.value && $i(M.value);
    }), (ye, Ge) => (f(), _(r(j), {
      ref_key: "primitiveElement",
      ref: I,
      as: ye.as,
      "as-child": ye.asChild,
      role: "application",
      "aria-label": r(se),
      "data-readonly": r(s) ? "" : void 0,
      "data-disabled": r(o) ? "" : void 0,
      "data-invalid": r(le) ? "" : void 0,
      dir: r(K)
    }, {
      default: v(() => [
        ve("div", Fm, [
          ve("div", Lm, re(r(se)), 1)
        ]),
        w(ye.$slots, "default", {
          date: r(z),
          grid: r(He),
          weekDays: r(Qe),
          weekStartsOn: r(u),
          locale: r(B),
          fixedWeeks: r(d)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), zm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ta();
    return (n, o) => (f(), _(r(j), O(e, {
      "data-disabled": r(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        w(n.$slots, "default", {
          headingValue: r(a).headingValue.value
        }, () => [
          Z(re(r(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Km = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Ta(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (s, l) => (f(), _(r(j), O(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Um = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Ta();
    return (a, n) => {
      var o, s;
      return f(), _(r(j), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": r(e).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": r(e).isDateDisabled(a.date) || ((s = (o = r(e)).isDateUnavailable) == null ? void 0 : s.call(o, a.date)),
        "data-disabled": r(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Hm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Ta();
    return (o, s) => (f(), _(r(j), O(e, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => r(n).nextPage(e.step, e.nextPage))
    }), {
      default: v(() => [
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
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Ta();
    return (o, s) => (f(), _(r(j), O(e, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: s[0] || (s[0] = (l) => r(n).prevPage(e.step, e.prevPage))
    }), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    return (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    const e = t, a = Ta(), n = Ii(), { primitiveElement: o, currentElement: s } = Oa(), l = C(() => a.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = C(() => a.isDateDisabled(e.day)), u = C(() => {
      var R;
      return (R = a.isDateUnavailable) == null ? void 0 : R.call(a, e.day);
    }), c = C(() => a.isSelected(e.day)), d = C(() => a.isSelectionStart(e.day)), p = C(() => a.isSelectionEnd(e.day)), g = C(() => a.isHighlightedStart(e.day)), m = C(() => a.isHighlightedEnd(e.day)), h = C(() => a.highlightedRange.value ? _c(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = C(() => Fl(e.day, Ct())), $ = C(() => !Es(e.day, e.month)), B = C(
      () => a.isOutsideVisibleView(e.day)
    ), S = C(() => e.day.day.toLocaleString(a.locale.value)), D = C(() => !a.disabled.value && Pe(e.day, a.placeholder.value));
    function k(R, A) {
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
      k(R, e.day);
    }
    function M() {
      var R;
      a.isDateDisabled(e.day) || (R = a.isDateUnavailable) != null && R.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function K(R) {
      R.preventDefault(), R.stopPropagation();
      const A = a.parentElement.value, T = A ? Array.from(A.querySelectorAll(y)) : [];
      let F = T.indexOf(s.value);
      const H = 7, N = a.dir.value === "rtl" ? -1 : 1;
      switch (R.code) {
        case n.ARROW_RIGHT:
          F += N;
          break;
        case n.ARROW_LEFT:
          F -= N;
          break;
        case n.ARROW_UP:
          F -= H;
          break;
        case n.ARROW_DOWN:
          F += H;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          k(R, e.day);
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
    return (R, A) => (f(), _(r(j), O({
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
      "data-outside-visible-view": B.value ? "" : void 0,
      "data-value": R.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-view": $.value ? "" : void 0,
      "data-focused": D.value ? "" : void 0,
      tabindex: D.value ? 0 : $.value || i.value ? void 0 : -1,
      onClick: I,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: Te(K, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: v(() => [
        w(R.$slots, "default", { dayValue: S.value }, () => [
          Z(re(S.value), 1)
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
    const e = t, { value: a } = he(e), n = P();
    return (o, s) => (f(), _(r(pn), { "as-child": "" }, {
      default: v(() => [
        $a(ve("select", O({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => jt(a) ? a.value = l : null),
          "default-value": r(a)
        }), [
          w(o.$slots, "default")
        ], 16, Zm), [
          [pd, r(a)]
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
    }), l = P(), i = P(), u = P({
      x: 0,
      y: 0
    }), c = P(!1), { required: d, disabled: p, dir: g } = he(a), m = ft(g);
    uu({
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
      open: s,
      required: d,
      onOpenChange: ($) => {
        s.value = $;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const h = ln(l), y = P(/* @__PURE__ */ new Set()), x = C(() => Array.from(y.value).map(($) => {
      var B;
      return (B = $.props) == null ? void 0 : B.value;
    }).join(";"));
    return nh({
      onNativeOptionAdd: ($) => {
        y.value.add($);
      },
      onNativeOptionRemove: ($) => {
        y.value.delete($);
      }
    }), ($, B) => (f(), _(r(Pa), null, {
      default: v(() => [
        w($.$slots, "default", {
          modelValue: r(o),
          open: r(s)
        }),
        r(h) ? (f(), _(eh, O({ key: x.value }, $.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: r(d),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: r(p),
          value: r(o),
          onChange: B[0] || (B[0] = (S) => o.value = S.target.value)
        }), {
          default: v(() => [
            r(o) === void 0 ? (f(), L("option", th)) : oe("", !0),
            (f(!0), L(ne, null, be(Array.from(y.value), (S) => (f(), _(Ne(S), O({ ref_for: !0 }, S.props, {
              key: S.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : oe("", !0)
      ]),
      _: 3
    }));
  }
}), sh = [" ", "Enter", "ArrowUp", "ArrowDown"], rh = [" ", "Enter"], et = 10;
function du(t) {
  return t === "" || In(t);
}
const lh = /* @__PURE__ */ b({
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
    }), { forwardRef: o, currentElement: s } = W();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-select-content")), de(() => {
      a.triggerElement = s;
    });
    const { injectCollection: l } = ka(), i = l(), { search: u, handleTypeaheadSearch: c, resetTypeahead: d } = Zs(i);
    function p() {
      n.value || (a.onOpenChange(!0), d());
    }
    function g(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, h) => (f(), _(r(ho), { "as-child": "" }, {
      default: v(() => {
        var y, x, $, B;
        return [
          E(r(j), {
            ref: r(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": r(a).contentId,
            "aria-expanded": r(a).open.value || !1,
            "aria-required": (y = r(a).required) == null ? void 0 : y.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = r(a)) == null ? void 0 : x.dir.value,
            "data-state": ($ = r(a)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": r(du)((B = r(a).modelValue) == null ? void 0 : B.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: h[0] || (h[0] = (S) => {
              var D;
              (D = S == null ? void 0 : S.currentTarget) == null || D.focus();
            }),
            onPointerdown: h[1] || (h[1] = (S) => {
              if (S.pointerType === "touch")
                return S.preventDefault();
              const D = S.target;
              D.hasPointerCapture(S.pointerId) && D.releasePointerCapture(S.pointerId), S.button === 0 && S.ctrlKey === !1 && (g(S), S.preventDefault());
            }),
            onPointerup: h[2] || (h[2] = $e(
              (S) => {
                S.pointerType === "touch" && g(S);
              },
              ["prevent"]
            )),
            onKeydown: h[3] || (h[3] = (S) => {
              const D = r(u) !== "";
              !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && D && S.key === " " || (r(c)(S.key), r(sh).includes(S.key) && (p(), S.preventDefault()));
            })
          }, {
            default: v(() => [
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
    return (a, n) => (f(), _(r(dn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [mr, uh] = pe("SelectItemAlignedPosition"), dh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = ka(), s = ea(), l = ta(), i = o(), u = P(!1), c = P(!0), d = P(), { forwardRef: p, currentElement: g } = W(), { viewport: m, selectedItem: h, selectedItemText: y, focusSelectedItem: x } = l;
    function $() {
      if (s.triggerElement.value && s.valueElement.value && d.value && g.value && m != null && m.value && h != null && h.value && y != null && y.value) {
        const D = s.triggerElement.value.getBoundingClientRect(), k = g.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), M = y.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Y = M.left - k.left, te = I.left - Y, le = D.left - te, ee = D.width + le, xe = Math.max(ee, k.width), Re = window.innerWidth - et, zt = qn(te, et, Math.max(et, Re - xe));
          d.value.style.minWidth = `${ee}px`, d.value.style.left = `${zt}px`;
        } else {
          const Y = k.right - M.right, te = window.innerWidth - I.right - Y, le = window.innerWidth - D.right - te, ee = D.width + le, xe = Math.max(ee, k.width), Re = window.innerWidth - et, zt = qn(
            te,
            et,
            Math.max(et, Re - xe)
          );
          d.value.style.minWidth = `${ee}px`, d.value.style.right = `${zt}px`;
        }
        const K = i.value, R = window.innerHeight - et * 2, A = m.value.scrollHeight, T = window.getComputedStyle(g.value), F = Number.parseInt(
          T.borderTopWidth,
          10
        ), H = Number.parseInt(T.paddingTop, 10), N = Number.parseInt(
          T.borderBottomWidth,
          10
        ), z = Number.parseInt(
          T.paddingBottom,
          10
        ), Q = F + H + A + z + N, se = Math.min(
          h.value.offsetHeight * 5,
          Q
        ), ge = window.getComputedStyle(m.value), J = Number.parseInt(ge.paddingTop, 10), ce = Number.parseInt(
          ge.paddingBottom,
          10
        ), me = D.top + D.height / 2 - et, Ve = R - me, He = h.value.offsetHeight / 2, Qe = h.value.offsetTop + He, ot = F + H + Qe, Et = Q - ot;
        if (ot <= me) {
          const Y = h.value === K[K.length - 1];
          d.value.style.bottom = "0px";
          const te = g.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, le = Math.max(
            Ve,
            He + (Y ? ce : 0) + te + N
          ), ee = ot + le;
          d.value.style.height = `${ee}px`;
        } else {
          const Y = h.value === K[0];
          d.value.style.top = "0px";
          const te = Math.max(
            me,
            F + m.value.offsetTop + (Y ? J : 0) + He
          ) + Et;
          d.value.style.height = `${te}px`, m.value.scrollTop = ot - me + m.value.offsetTop;
        }
        d.value.style.margin = `${et}px 0`, d.value.style.minHeight = `${se}px`, d.value.style.maxHeight = `${R}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const B = P("");
    de(async () => {
      await ae(), $(), g.value && (B.value = window.getComputedStyle(g.value).zIndex);
    });
    function S(D) {
      D && c.value === !0 && ($(), x == null || x(), c.value = !1);
    }
    return uh({
      contentWrapper: d,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: S
    }), (D, k) => (f(), L("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: dt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: B.value
      })
    }, [
      E(r(j), O({
        ref: r(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...D.$attrs, ...a }), {
        default: v(() => [
          w(D.$slots, "default")
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
    return (a, n) => (f(), _(r(Ca), O(r(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ia = {
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
    Xs(), rn(a.bodyLock);
    const { createCollection: s } = ka(), l = P();
    un(l);
    const i = s(l), { search: u, handleTypeaheadSearch: c } = Zs(i), d = P(), p = P(), g = P(), m = P(!1), h = P(!1);
    function y() {
      p.value && l.value && is([p.value, l.value]);
    }
    X(m, () => {
      y();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: $ } = o;
    we((k) => {
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
      })), k(() => {
        document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", K, {
          capture: !0
        });
      });
    });
    function B(k) {
      const I = k.ctrlKey || k.altKey || k.metaKey;
      if (k.key === "Tab" && k.preventDefault(), !I && k.key.length === 1 && c(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(k.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
          const K = k.target, R = M.indexOf(K);
          M = M.slice(R + 1);
        }
        setTimeout(() => is(M)), k.preventDefault();
      }
    }
    const S = C(() => a.position === "popper" ? a : {}), D = fe(S.value);
    return ph({
      content: l,
      viewport: d,
      onViewportChange: (k) => {
        d.value = k;
      },
      itemRefCallback: (k, I, M) => {
        var K, R;
        const A = !h.value && !M;
        (((K = o.modelValue) == null ? void 0 : K.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === I || A) && (p.value = k, A && (h.value = !0));
      },
      selectedItem: p,
      selectedItemText: g,
      onItemLeave: () => {
        var k;
        (k = l.value) == null || k.focus();
      },
      itemTextRefCallback: (k, I, M) => {
        var K, R;
        const A = !h.value && !M;
        (((K = o.modelValue) == null ? void 0 : K.value) !== void 0 && ((R = o.modelValue) == null ? void 0 : R.value) === I || A) && (g.value = k);
      },
      focusSelectedItem: y,
      position: a.position,
      isPositioned: m,
      searchRef: u
    }), (k, I) => (f(), _(r(mo), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = $e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (M) => {
        var K;
        n("closeAutoFocus", M), !M.defaultPrevented && ((K = r(o).triggerElement.value) == null || K.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: v(() => [
        E(r(Da), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = $e(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (M) => r(o).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: I[5] || (I[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: v(() => [
            (f(), _(Ne(
              k.position === "popper" ? ch : dh
            ), O({ ...k.$attrs, ...r(D) }, {
              id: r(o).contentId,
              ref: (M) => {
                l.value = r(Je)(M);
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
              onContextmenu: I[0] || (I[0] = $e(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (M) => m.value = !0),
              onKeydown: B
            }), {
              default: v(() => [
                w(k.$slots, "default")
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
    const a = t, n = ie(a, e), o = ea(), s = P();
    de(() => {
      s.value = new DocumentFragment();
    });
    const l = P(), i = C(() => a.forceMount || o.open.value);
    return (u, c) => {
      var d;
      return i.value ? (f(), _(r(Ke), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: v(() => [
          E(fh, U(q({ ...r(n), ...u.$attrs })), {
            default: v(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = l.value) != null && d.present) && s.value ? (f(), L("div", mh, [
        (f(), _(tn, { to: s.value }, [
          E(vh, { context: r(o) }, {
            default: v(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : oe("", !0);
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
    return (a, n) => (f(), _(r(j), O({ "aria-hidden": "true" }, e), {
      default: v(() => [
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
    const e = t, { disabled: a } = he(e), n = ea(), o = ta(Ia), { forwardRef: s, currentElement: l } = W(), i = C(() => {
      var y;
      return ((y = n.modelValue) == null ? void 0 : y.value) === e.value;
    }), u = P(!1), c = P(e.textValue ?? ""), d = ke(void 0, "radix-vue-select-item-text");
    async function p(y) {
      await ae(), !(y != null && y.defaultPrevented) && (a.value || (n.onValueChange(e.value), n.onOpenChange(!1)));
    }
    async function g(y) {
      var x;
      await ae(), !y.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : y.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(y) {
      var x;
      await ae(), !y.defaultPrevented && y.currentTarget === Oe() && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function h(y) {
      var x;
      await ae(), !(y.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && y.key === " ") && (rh.includes(y.key) && p(), y.key === " " && y.preventDefault());
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return de(() => {
      l.value && o.itemRefCallback(
        l.value,
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
    }), (y, x) => (f(), _(r(j), {
      ref: r(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": r(d),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": r(a) || void 0,
      "data-disabled": r(a) ? "" : void 0,
      tabindex: r(a) ? void 0 : -1,
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
      default: v(() => [
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
    return (n, o) => r(a).isSelected.value ? (f(), _(r(j), O({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
}), [wh, xh] = pe("SelectGroup"), Ch = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = ke(void 0, "radix-vue-select-group");
    return xh({ id: a }), (n, o) => (f(), _(r(j), O({ role: "group" }, e, { "aria-labelledby": r(a) }), {
      default: v(() => [
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
    return (n, o) => (f(), _(r(j), O(e, {
      id: r(a).id
    }), {
      default: v(() => [
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
    const e = t, a = ea(), n = ta(Ia), o = ah(), s = cu(), { forwardRef: l, currentElement: i } = W(), u = C(() => {
      var c;
      return Ie("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (c = i.value) == null ? void 0 : c.textContent
      });
    });
    return de(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), no(() => {
      o.onNativeOptionRemove(u.value);
    }), (c, d) => (f(), L(ne, null, [
      E(r(j), O({
        id: r(s).textId,
        ref: r(l)
      }, { ...e, ...c.$attrs }, { "data-item-text": "" }), {
        default: v(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      r(s).isSelected.value && r(a).valueElement.value && !r(a).valueElementHasChildren.value ? (f(), _(tn, {
        key: 0,
        to: r(a).valueElement.value
      }, [
        w(c.$slots, "default")
      ], 8, ["to"])) : oe("", !0)
    ], 64));
  }
}), Sh = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = he(e), n = Sv(a), o = ta(Ia), s = o.position === "item-aligned" ? mr() : void 0, { forwardRef: l, currentElement: i } = W();
    de(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = P(0);
    function c(d) {
      const p = d.currentTarget, { shouldExpandOnScrollRef: g, contentWrapper: m } = s ?? {};
      if (g != null && g.value && m != null && m.value) {
        const h = Math.abs(u.value - p.scrollTop);
        if (h > 0) {
          const y = window.innerHeight - et * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), $ = Number.parseFloat(m.value.style.height), B = Math.max(x, $);
          if (B < y) {
            const S = B + h, D = Math.min(y, S), k = S - D;
            m.value.style.height = `${D}px`, m.value.style.bottom === "0px" && (p.scrollTop = k > 0 ? k : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (d, p) => (f(), L(ne, null, [
      E(r(j), O({
        ref: r(l),
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
        default: v(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      E(r(j), {
        as: "style",
        nonce: r(n)
      }, {
        default: v(() => [
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
    const a = e, { injectCollection: n } = ka(), o = n(), s = ta(Ia), l = P(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    we(() => {
      const d = o.value.find(
        (p) => p === Oe()
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
      (d = s.onItemLeave) == null || d.call(s), l.value === null && (l.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return no(() => i()), (d, p) => {
      var g;
      return f(), _(r(j), O({
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
        default: v(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Bh = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ta(Ia), a = e.position === "item-aligned" ? mr() : void 0, { forwardRef: n, currentElement: o } = W(), s = P(!1);
    return we((l) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let c = function() {
          s.value = d.scrollTop > 0;
        };
        const d = e.viewport.value;
        c(), d.addEventListener("scroll", c), l(() => d.removeEventListener("scroll", c));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (l, i) => s.value ? (f(), _(fu, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = r(e);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : oe("", !0);
  }
}), kh = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = ta(Ia), a = e.position === "item-aligned" ? mr() : void 0, { forwardRef: n, currentElement: o } = W(), s = P(!1);
    return we((l) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let c = function() {
          const p = d.scrollHeight - d.clientHeight;
          s.value = Math.ceil(d.scrollTop) < p;
        };
        const d = e.viewport.value;
        c(), d.addEventListener("scroll", c), l(() => d.removeEventListener("scroll", c));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (l, i) => s.value ? (f(), _(fu, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: c } = r(e);
        u != null && u.value && c != null && c.value && (u.value.scrollTop = u.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : oe("", !0);
  }
}), Oh = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = W(), n = ea(), o = El();
    return dd(() => {
      var s;
      const l = !!po((s = o == null ? void 0 : o.default) == null ? void 0 : s.call(o)).length;
      n.onValueElementHasChildrenChange(l);
    }), de(() => {
      n.valueElement = a;
    }), (s, l) => (f(), _(r(j), {
      ref: r(e),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: v(() => {
        var i;
        return [
          r(du)((i = r(n).modelValue) == null ? void 0 : i.value) ? (f(), L(ne, { key: 0 }, [
            Z(re(s.placeholder), 1)
          ], 64)) : w(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Dh = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (f(), _(r(j), {
      "aria-hidden": "true",
      as: e.as,
      "as-child": e.asChild
    }, {
      default: v(() => [
        w(e.$slots, "default", {}, () => [
          Z("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Eh = /* @__PURE__ */ b({
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
    ), l = C(
      () => e.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (f(), _(r(j), O({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, l.value), {
      default: v(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Ph = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(Eh, U(q(e)), {
      default: v(() => [
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
  const n = t / 2, o = hr([0, 50], [0, n]);
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
function hr(t, e) {
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
    return (s, l) => (f(), _(r(j), O({ "data-slider-impl": "" }, a, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : r(mu).concat(r(hu)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), r(o).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: l[2] || (l[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: l[3] || (l[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: v(() => [
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
    const a = t, n = e, { max: o, min: s, dir: l, inverted: i } = he(a), { forwardRef: u, currentElement: c } = W(), d = P(), p = C(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function g(m) {
      const h = d.value || c.value.getBoundingClientRect(), y = [0, h.width], x = p.value ? [s.value, o.value] : [o.value, s.value], $ = hr(y, x);
      return d.value = h, $(m - h.left);
    }
    return bu({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, h) => (f(), _(_u, {
      ref: r(u),
      dir: r(l),
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
        const x = p.value ? "from-left" : "from-right", $ = r(gu)[x].includes(y.key);
        n("stepKeyDown", y, $ ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (y) => n("endKeyDown", y)),
      onHomeKeyDown: h[5] || (h[5] = (y) => n("homeKeyDown", y))
    }, {
      default: v(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), jh = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: s, inverted: l } = he(a), { forwardRef: i, currentElement: u } = W(), c = P(), d = C(() => !l.value);
    function p(g) {
      const m = c.value || u.value.getBoundingClientRect(), h = [0, m.height], y = d.value ? [o.value, s.value] : [s.value, o.value], x = hr(h, y);
      return c.value = m, x(g - m.top);
    }
    return bu({
      startEdge: d.value ? "bottom" : "top",
      endEdge: d.value ? "top" : "bottom",
      size: "height",
      direction: d.value ? 1 : -1
    }), (g, m) => (f(), _(_u, {
      ref: r(i),
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
        const y = d.value ? "from-bottom" : "from-top", x = r(gu)[y].includes(h.key);
        n("stepKeyDown", h, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: m[5] || (m[5] = (h) => n("homeKeyDown", h))
    }, {
      default: v(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), zh = ["value", "name", "disabled", "step"], [yo, Wh] = pe("SliderRoot"), Kh = /* @__PURE__ */ b({
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
    const a = t, n = e, { min: o, max: s, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: c, dir: d } = he(a), p = ft(d), { forwardRef: g, currentElement: m } = W(), h = ln(m);
    ur();
    const y = _e(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = P(0), $ = P(y.value);
    function B(M) {
      const K = Th(y.value, M);
      k(M, K);
    }
    function S(M) {
      k(M, x.value);
    }
    function D() {
      const M = $.value[x.value];
      y.value[x.value] !== M && n("valueCommit", md(y.value));
    }
    function k(M, K, { commit: R } = { commit: !1 }) {
      var A;
      const T = Fh(l.value), F = Lh(Math.round((M - o.value) / l.value) * l.value + o.value, T), H = qn(F, o.value, s.value), N = Ah(y.value, H, K);
      if (Rh(N, i.value * l.value)) {
        x.value = N.indexOf(H);
        const z = String(N) !== String(y.value);
        z && R && n("valueCommit", N), z && ((A = I.value[x.value]) == null || A.focus(), y.value = N);
      }
    }
    const I = P([]);
    return Wh({
      modelValue: y,
      valueIndexToChangeRef: x,
      thumbElements: I,
      orientation: u,
      min: o,
      max: s,
      disabled: c
    }), (M, K) => (f(), L(ne, null, [
      E(r(dr), null, {
        default: v(() => [
          (f(), _(Ne(r(u) === "horizontal" ? Nh : jh), O(M.$attrs, {
            ref: r(g),
            "as-child": M.asChild,
            as: M.as,
            min: r(o),
            max: r(s),
            dir: r(p),
            inverted: M.inverted,
            "aria-disabled": r(c),
            "data-disabled": r(c) ? "" : void 0,
            onPointerdown: K[0] || (K[0] = () => {
              r(c) || ($.value = r(y));
            }),
            onSlideStart: K[1] || (K[1] = (R) => !r(c) && B(R)),
            onSlideMove: K[2] || (K[2] = (R) => !r(c) && S(R)),
            onSlideEnd: K[3] || (K[3] = (R) => !r(c) && D()),
            onHomeKeyDown: K[4] || (K[4] = (R) => !r(c) && k(r(o), 0, { commit: !0 })),
            onEndKeyDown: K[5] || (K[5] = (R) => !r(c) && k(r(s), r(y).length - 1, { commit: !0 })),
            onStepKeyDown: K[6] || (K[6] = (R, A) => {
              if (!r(c)) {
                const T = r(mu).includes(R.key) || R.shiftKey && r(hu).includes(R.key) ? 10 : 1, F = x.value, H = r(y)[F], N = r(l) * T * A;
                k(H + N, F, { commit: !0 });
              }
            })
          }), {
            default: v(() => [
              w(M.$slots, "default", { modelValue: r(y) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      r(h) ? (f(!0), L(ne, { key: 0 }, be(r(y), (R, A) => (f(), L("input", {
        key: A,
        value: R,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (r(y).length > 1 ? "[]" : "") : void 0,
        disabled: r(c),
        step: r(l)
      }, null, 8, zh))), 128)) : oe("", !0)
    ], 64));
  }
}), Uh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = yo(), n = yu(), { forwardRef: o, currentElement: s } = W(), l = C(() => {
      var m, h;
      return (h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h[e.index];
    }), i = C(() => l.value === void 0 ? 0 : vu(l.value, a.min.value ?? 0, a.max.value ?? 100)), u = C(() => {
      var m, h;
      return Mh(e.index, ((h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h.length) ?? 0);
    }), c = Ti(s), d = C(() => c[n.size].value), p = C(() => d.value ? Ih(d.value, i.value, n.direction) : 0), g = Qs();
    return de(() => {
      a.thumbElements.value.push(s.value);
    }), je(() => {
      const m = a.thumbElements.value.findIndex((h) => h === s.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, h) => (f(), _(r(go), null, {
      default: v(() => [
        E(r(j), O(m.$attrs, {
          ref: r(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: r(a).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": r(a).disabled.value ? "" : void 0,
          "data-orientation": r(a).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": r(a).min.value,
          "aria-valuemax": r(a).max.value,
          "aria-orientation": r(a).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [r(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !r(g) && l.value === void 0 ? "none" : void 0
          },
          onFocus: h[0] || (h[0] = () => {
            r(a).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: v(() => [
            w(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Hh = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = cr(), { forwardRef: n, currentElement: o } = W(), s = C(() => o.value ? a().findIndex((l) => l.ref === o.value) : -1);
    return (l, i) => (f(), _(Uh, O({ ref: r(n) }, e, { index: s.value }), {
      default: v(() => [
        w(l.$slots, "default")
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
    return W(), (a, n) => (f(), _(r(j), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": r(e).disabled.value ? "" : void 0,
      "data-orientation": r(e).orientation.value
    }, {
      default: v(() => [
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
    W();
    const n = C(() => {
      var l, i;
      return (i = (l = e.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => vu(u, e.min.value, e.max.value)
      );
    }), o = C(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = C(() => 100 - Math.max(...n.value));
    return (l, i) => (f(), _(r(j), {
      "data-disabled": r(e).disabled.value ? "" : void 0,
      "data-orientation": r(e).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: dt({
        [r(a).startEdge]: `${o.value}%`,
        [r(a).endEdge]: `${s.value}%`
      })
    }, {
      default: v(() => [
        w(l.$slots, "default")
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
    function l() {
      o.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = W(), c = ln(u), d = C(() => {
      var p;
      return a.id && u.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Xh({
      checked: s,
      toggleCheck: l,
      disabled: o
    }), (p, g) => (f(), L(ne, null, [
      E(r(j), O(p.$attrs, {
        id: p.id,
        ref: r(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "aria-checked": r(s),
        "aria-required": p.required,
        "data-state": r(s) ? "checked" : "unchecked",
        "data-disabled": r(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: r(o),
        onClick: l,
        onKeydown: Te($e(l, ["prevent"]), ["enter"])
      }), {
        default: v(() => [
          w(p.$slots, "default", { checked: r(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      r(c) ? (f(), L("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: r(o),
        required: p.required,
        value: p.value,
        checked: !!r(s),
        "data-state": r(s) ? "checked" : "unchecked",
        "data-disabled": r(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Jh)) : oe("", !0)
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
    return W(), (a, n) => {
      var o;
      return f(), _(r(j), {
        "data-state": (o = r(e).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": r(e).disabled.value ? "" : void 0,
        "as-child": a.asChild,
        as: a.as
      }, {
        default: v(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [gr, tg] = pe("TabsRoot"), ag = /* @__PURE__ */ b({
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
    const a = t, n = e, { orientation: o, dir: s } = he(a), l = ft(s);
    W();
    const i = _e(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), u = P();
    return tg({
      modelValue: i,
      changeModelValue: (c) => {
        i.value = c;
      },
      orientation: o,
      dir: l,
      activationMode: a.activationMode,
      baseId: ke(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (c, d) => (f(), _(r(j), {
      dir: r(l),
      "data-orientation": r(o),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: v(() => [
        w(c.$slots, "default", { modelValue: r(i) })
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
    const e = t, { loop: a } = he(e), { forwardRef: n, currentElement: o } = W(), s = gr();
    return s.tabsList = o, (l, i) => (f(), _(r(eu), {
      "as-child": "",
      orientation: r(s).orientation.value,
      dir: r(s).dir.value,
      loop: r(a)
    }, {
      default: v(() => [
        E(r(j), {
          ref: r(n),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": r(s).orientation.value
        }, {
          default: v(() => [
            w(l.$slots, "default")
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
    const e = t, { forwardRef: a } = W(), n = gr(), o = C(() => wu(n.baseId, e.value)), s = C(() => xu(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value), i = P(l.value);
    return de(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, c) => (f(), _(r(Ke), {
      present: l.value,
      "force-mount": ""
    }, {
      default: v(({ present: d }) => [
        E(r(j), {
          id: s.value,
          ref: r(a),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": r(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !d.value,
          tabindex: "0",
          style: dt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: v(() => [
            u.forceMount || l.value ? w(u.$slots, "default", { key: 0 }) : oe("", !0)
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
    const e = t, { forwardRef: a } = W(), n = gr(), o = C(() => wu(n.baseId, e.value)), s = C(() => xu(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value);
    return (i, u) => (f(), _(r(zv), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: v(() => [
        E(r(j), {
          id: o.value,
          ref: r(a),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": l.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": l.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": r(n).orientation.value,
          onMousedown: u[0] || (u[0] = $e((c) => {
            !i.disabled && c.ctrlKey === !1 ? r(n).changeModelValue(i.value) : c.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Te((c) => r(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const c = r(n).activationMode !== "manual";
            !l.value && !i.disabled && c && r(n).changeModelValue(i.value);
          })
        }, {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [bo, rg] = pe("ToastProvider"), lg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: s } = he(e), l = P(), i = P(0), u = P(!1), c = P(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const d = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(d);
    }
    return rg({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: s,
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
function cl(t, e, a = 0) {
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
    const e = bo(), a = xp(1e3), n = P(!1);
    return Oi(() => {
      n.value = !0;
    }), (o, s) => r(a) || n.value ? (f(), _(r(pn), { key: 0 }, {
      default: v(() => [
        Z(re(r(e).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : oe("", !0);
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
    const a = t, n = e, { forwardRef: o, currentElement: s } = W(), l = bo(), i = P(null), u = P(null), c = C(
      () => typeof a.duration == "number" ? a.duration : l.duration.value
    ), d = P(0), p = P(c.value), g = P(0), m = P(c.value), h = Oi(() => {
      const B = (/* @__PURE__ */ new Date()).getTime() - d.value;
      m.value = Math.max(p.value - B, 0);
    }, { fpsLimit: 60 });
    function y(B) {
      B <= 0 || B === Number.POSITIVE_INFINITY || pt && (window.clearTimeout(g.value), d.value = (/* @__PURE__ */ new Date()).getTime(), g.value = window.setTimeout(x, B));
    }
    function x() {
      var B, S;
      (B = s.value) != null && B.contains(Oe()) && ((S = l.viewport.value) == null || S.focus()), l.isClosePausedRef.value = !1, n("close");
    }
    const $ = C(() => s.value ? Cu(s.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const B = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(B);
    }
    return we((B) => {
      const S = l.viewport.value;
      if (S) {
        const D = () => {
          y(p.value), h.resume(), n("resume");
        }, k = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - d.value;
          p.value = p.value - I, window.clearTimeout(g.value), h.pause(), n("pause");
        };
        return S.addEventListener(ds, k), S.addEventListener(cs, D), () => {
          S.removeEventListener(ds, k), S.removeEventListener(cs, D);
        };
      }
    }), X(() => [a.open, c.value], () => {
      p.value = c.value, a.open && !l.isClosePausedRef.value && y(c.value);
    }, { immediate: !0 }), Js("Escape", (B) => {
      n("escapeKeyDown", B), B.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), de(() => {
      l.onToastAdd();
    }), je(() => {
      l.onToastRemove();
    }), mg({ onClose: x }), (B, S) => (f(), L(ne, null, [
      $.value ? (f(), _(fg, {
        key: 0,
        role: "alert",
        "aria-live": B.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: v(() => [
          Z(re($.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : oe("", !0),
      r(l).viewport.value ? (f(), _(tn, {
        key: 1,
        to: r(l).viewport.value
      }, [
        E(r(j), O({
          ref: r(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, B.$attrs, {
          as: B.as,
          "as-child": B.asChild,
          "data-state": B.open ? "open" : "closed",
          "data-swipe-direction": r(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: S[0] || (S[0] = $e((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: S[1] || (S[1] = (D) => {
            if (!i.value) return;
            const k = D.clientX - i.value.x, I = D.clientY - i.value.y, M = !!u.value, K = ["left", "right"].includes(r(l).swipeDirection.value), R = ["left", "up"].includes(r(l).swipeDirection.value) ? Math.min : Math.max, A = K ? R(0, k) : 0, T = K ? 0 : R(0, I), F = D.pointerType === "touch" ? 10 : 2, H = { x: A, y: T }, N = { originalEvent: D, delta: H };
            M ? (u.value = H, r($n)(r(ug), (z) => n("swipeMove", z), N)) : r(cl)(H, r(l).swipeDirection.value, F) ? (u.value = H, r($n)(r(ig), (z) => n("swipeStart", z), N), D.target.setPointerCapture(D.pointerId)) : (Math.abs(k) > F || Math.abs(I) > F) && (i.value = null);
          }),
          onPointerup: S[2] || (S[2] = (D) => {
            const k = u.value, I = D.target;
            if (I.hasPointerCapture(D.pointerId) && I.releasePointerCapture(D.pointerId), u.value = null, i.value = null, k) {
              const M = D.currentTarget, K = { originalEvent: D, delta: k };
              r(cl)(k, r(l).swipeDirection.value, r(l).swipeThreshold.value) ? r($n)(r(cg), (R) => n("swipeEnd", R), K) : r($n)(r(dg), (R) => n("swipeCancel", R), K), M == null || M.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: v(() => [
            w(B.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : oe("", !0)
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
    const a = t, n = e, { forwardRef: o } = W(), s = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (l, i) => (f(), _(r(Ke), {
      present: l.forceMount || r(s)
    }, {
      default: v(() => [
        E(hg, O({
          ref: r(o),
          open: r(s),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
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
          default: v(({ remaining: u, duration: c }) => [
            w(l.$slots, "default", {
              remaining: u,
              duration: c,
              open: r(s)
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
    return (e, a) => (f(), _(r(j), {
      as: e.as,
      "as-child": e.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": e.altText || void 0
    }, {
      default: v(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Su = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = vg(), { forwardRef: n } = W();
    return (o, s) => (f(), _($u, { "as-child": "" }, {
      default: v(() => [
        E(r(j), O(e, {
          ref: r(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (l) => r(a).onClose())
        }), {
          default: v(() => [
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
    const { forwardRef: e } = W();
    return (a, n) => a.altText ? (f(), _($u, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: v(() => [
        E(Su, {
          ref: r(e),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: v(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : oe("", !0);
  }
}), pl = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(t, { emit: e }) {
    const a = e, n = bo();
    return (o, s) => (f(), _(r(pn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (l) => {
        var i;
        const u = l.relatedTarget;
        !((i = r(n).viewport.value) != null && i.contains(u)) && a("focusFromOutsideViewport");
      })
    }, {
      default: v(() => [
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
    const e = t, { hotkey: a, label: n } = he(e), { forwardRef: o, currentElement: s } = W(), { createCollection: l } = ka(), i = l(s), u = bo(), c = C(() => u.toastCount.value > 0), d = P(), p = P(), g = C(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Js(a.value, () => {
      s.value.focus();
    }), de(() => {
      u.onViewportChange(s.value);
    }), we((h) => {
      const y = s.value;
      if (c.value && y) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const k = new CustomEvent(ds);
            y.dispatchEvent(k), u.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (u.isClosePausedRef.value) {
            const k = new CustomEvent(cs);
            y.dispatchEvent(k), u.isClosePausedRef.value = !1;
          }
        }, B = (k) => {
          !y.contains(k.relatedTarget) && $();
        }, S = () => {
          y.contains(Oe()) || $();
        }, D = (k) => {
          var I, M, K;
          const R = k.altKey || k.ctrlKey || k.metaKey;
          if (k.key === "Tab" && !R) {
            const A = Oe(), T = k.shiftKey;
            if (k.target === y && T) {
              (I = d.value) == null || I.focus();
              return;
            }
            const F = m({ tabbingDirection: T ? "backwards" : "forwards" }), H = F.findIndex((N) => N === A);
            Vn(F.slice(H + 1)) ? k.preventDefault() : T ? (M = d.value) == null || M.focus() : (K = p.value) == null || K.focus();
          }
        };
        y.addEventListener("focusin", x), y.addEventListener("focusout", B), y.addEventListener("pointermove", x), y.addEventListener("pointerleave", S), y.addEventListener("keydown", D), window.addEventListener("blur", x), window.addEventListener("focus", $), h(() => {
          y.removeEventListener("focusin", x), y.removeEventListener("focusout", B), y.removeEventListener("pointermove", x), y.removeEventListener("pointerleave", S), y.removeEventListener("keydown", D), window.removeEventListener("blur", x), window.removeEventListener("focus", $);
        });
      }
    });
    function m({ tabbingDirection: h }) {
      const y = i.value.map((x) => {
        const $ = [x, ...nr(x)];
        return h === "forwards" ? $ : $.reverse();
      });
      return (h === "forwards" ? y.reverse() : y).flat();
    }
    return (h, y) => (f(), _(r(yf), {
      role: "region",
      "aria-label": typeof r(n) == "string" ? r(n).replace("{hotkey}", g.value) : r(n)(g.value),
      tabindex: "-1",
      style: dt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: v(() => [
        c.value ? (f(), _(pl, {
          key: 0,
          ref: (x) => {
            d.value = r(Je)(x);
          },
          onFocusFromOutsideViewport: y[0] || (y[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            r(Vn)(x);
          })
        }, null, 512)) : oe("", !0),
        E(r(j), O({
          ref: r(o),
          tabindex: "-1",
          as: h.as,
          "as-child": h.asChild
        }, h.$attrs), {
          default: v(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (f(), _(pl, {
          key: 1,
          ref: (x) => {
            p.value = r(Je)(x);
          },
          onFocusFromOutsideViewport: y[1] || (y[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            r(Vn)(x);
          })
        }, null, 512)) : oe("", !0)
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
    return W(), (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
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
    return W(), (a, n) => (f(), _(r(j), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bu = "tooltip.open", [yr, xg] = pe("TooltipProvider"), ku = /* @__PURE__ */ b({
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
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: s, ignoreNonKeyboardFocus: l, disabled: i } = he(e);
    W();
    const u = P(!0), c = P(!1), { start: d, stop: p } = Ys(() => {
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
      ignoreNonKeyboardFocus: l
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
    W();
    const o = yr(), s = C(() => a.disableHoverableContent ?? o.disableHoverableContent.value), l = C(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = C(() => a.disabled ?? o.disabled.value), u = C(() => a.delayDuration ?? o.delayDuration.value), c = C(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), d = _e(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    X(d, (S) => {
      o.onClose && (S ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Bu))) : o.onClose());
    });
    const p = P(!1), g = P(), m = C(() => d.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: y } = Ys(() => {
      p.value = !0, d.value = !0;
    }, u, { immediate: !1 });
    function x() {
      y(), p.value = !1, d.value = !0;
    }
    function $() {
      y(), d.value = !1;
    }
    function B() {
      h();
    }
    return Cg({
      contentId: "",
      open: d,
      stateAttribute: m,
      trigger: g,
      onTriggerChange(S) {
        g.value = S;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? B() : x();
      },
      onTriggerLeave() {
        s.value ? $() : y();
      },
      onOpen: x,
      onClose: $,
      disableHoverableContent: s,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: c
    }), (S, D) => (f(), _(r(Pa), null, {
      default: v(() => [
        w(S.$slots, "default", { open: r(d) })
      ]),
      _: 3
    }));
  }
}), Sg = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = _o(), n = yr();
    a.contentId || (a.contentId = ke(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: s } = W(), l = P(!1), i = P(!1), u = C(() => a.disabled.value ? {} : {
      click: y,
      focus: m,
      pointermove: p,
      pointerleave: g,
      pointerdown: d,
      blur: h
    });
    de(() => {
      a.onTriggerChange(s.value);
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
      var $, B;
      l.value || a.ignoreNonKeyboardFocus.value && !((B = ($ = x.target).matches) != null && B.call($, ":focus-visible")) || a.onOpen();
    }
    function h() {
      a.onClose();
    }
    function y() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, $) => (f(), _(r(ho), { "as-child": "" }, {
      default: v(() => [
        E(r(j), O({
          ref: r(o),
          "aria-describedby": r(a).open.value ? r(a).contentId : void 0,
          "data-state": r(a).stateAttribute.value,
          as: x.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, cd(u.value)), {
          default: v(() => [
            w(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Ou = /* @__PURE__ */ b({
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
    const a = t, n = e, o = _o(), { forwardRef: s } = W(), l = El(), i = C(() => {
      var d;
      return (d = l.default) == null ? void 0 : d.call(l);
    }), u = C(() => {
      var d;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function g(m) {
        typeof m.children == "string" && m.type !== Ss ? p += m.children : Array.isArray(m.children) && m.children.forEach((h) => g(h));
      }
      return (d = i.value) == null || d.forEach((m) => g(m)), p;
    }), c = C(() => {
      const { ariaLabel: d, ...p } = a;
      return p;
    });
    return de(() => {
      xa(window, "scroll", (d) => {
        const p = d.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), xa(window, Bu, o.onClose);
    }), (d, p) => (f(), _(r(Da), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (g) => n("escapeKeyDown", g)),
      onPointerDownOutside: p[1] || (p[1] = (g) => {
        var m;
        r(o).disableClosingTrigger.value && (m = r(o).trigger.value) != null && m.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
      }),
      onFocusOutside: p[2] || (p[2] = $e(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (g) => r(o).onClose())
    }, {
      default: v(() => [
        E(r(Ca), O({
          ref: r(s),
          "data-state": r(o).stateAttribute.value
        }, { ...d.$attrs, ...c.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: v(() => [
            w(d.$slots, "default"),
            E(r(pn), {
              id: r(o).contentId,
              role: "tooltip"
            }, {
              default: v(() => [
                Z(re(u.value), 1)
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
}), Bg = /* @__PURE__ */ b({
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
    const e = fe(t), { forwardRef: a, currentElement: n } = W(), { trigger: o, onClose: s } = _o(), l = yr(), { isPointerInTransit: i, onPointerExit: u } = Ip(o, n);
    return l.isPointerInTransitRef = i, u(() => {
      s();
    }), (c, d) => (f(), _(Ou, O({ ref: r(a) }, r(e)), {
      default: v(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kg = /* @__PURE__ */ b({
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
    const a = t, n = e, o = _o(), s = ie(a, n), { forwardRef: l } = W();
    return (i, u) => (f(), _(r(Ke), {
      present: i.forceMount || r(o).open.value
    }, {
      default: v(() => [
        (f(), _(Ne(r(o).disableHoverableContent.value ? Ou : Bg), O({ ref: r(l) }, r(s)), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Og = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(dn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qw = /* @__PURE__ */ b({
  __name: "Accordion",
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ie(t, e);
    return (s, l) => (f(), _(r(rf), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Du(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = Du(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Eu() {
  for (var t, e, a = 0, n = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = Du(t)) && (n && (n += " "), n += e);
  return n;
}
const br = "-", Dg = (t) => {
  const e = Pg(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const i = l.split(br);
      return i[0] === "" && i.length !== 1 && i.shift(), Pu(i, e) || Eg(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = a[l] || [];
      return i && n[l] ? [...u, ...n[l]] : u;
    }
  };
}, Pu = (t, e) => {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? Pu(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const s = t.join(br);
  return (l = e.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : l.classGroupId;
}, fl = /^\[(.+)\]$/, Eg = (t) => {
  if (fl.test(t)) {
    const e = fl.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Pg = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Mg(Object.entries(t.classGroups), a).forEach(([s, l]) => {
    ps(l, n, s, e);
  }), n;
}, ps = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? e : vl(e, o);
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
    Object.entries(o).forEach(([s, l]) => {
      ps(l, vl(e, s), a, n);
    });
  });
}, vl = (t, e) => {
  let a = t;
  return e.split(br).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Ag = (t) => t.isThemeGetter, Mg = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([l, i]) => [e + l, i])) : s);
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
  const o = (s, l) => {
    a.set(s, l), e++, e > t && (e = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let l = a.get(s);
      if (l !== void 0)
        return l;
      if ((l = n.get(s)) !== void 0)
        return o(s, l), l;
    },
    set(s, l) {
      a.has(s) ? a.set(s, l) : o(s, l);
    }
  };
}, Au = "!", Ig = (t) => {
  const {
    separator: e,
    experimentalParseClassName: a
  } = t, n = e.length === 1, o = e[0], s = e.length, l = (i) => {
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
    parseClassName: l
  }) : l;
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
  ...Dg(t)
}), Fg = /\s+/, Lg = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, s = [], l = t.trim().split(Fg);
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
    const x = Vg(d).join(":"), $ = p ? x + Au : x, B = $ + y;
    if (s.includes(B))
      continue;
    s.push(B);
    const S = o(y, h);
    for (let D = 0; D < S.length; ++D) {
      const k = S[D];
      s.push($ + k);
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
function jg(t, ...e) {
  let a, n, o, s = l;
  function l(u) {
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
}, Tu = /^\[(?:([a-z-]+):)?(.+)\]$/i, zg = /^\d+\/\d+$/, Wg = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ug = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mt = (t) => ha(t) || Wg.has(t) || zg.test(t), At = (t) => Va(t, "length", ay), ha = (t) => !!t && !Number.isNaN(Number(t)), No = (t) => Va(t, "number", ha), ja = (t) => !!t && Number.isInteger(Number(t)), Yg = (t) => t.endsWith("%") && ha(t.slice(0, -1)), ue = (t) => Tu.test(t), Mt = (t) => Kg.test(t), Jg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Qg = (t) => Va(t, Jg, Iu), Xg = (t) => Va(t, "position", Iu), Zg = /* @__PURE__ */ new Set(["image", "url"]), ey = (t) => Va(t, Zg, oy), ty = (t) => Va(t, "", ny), za = () => !0, Va = (t, e, a) => {
  const n = Tu.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, ay = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ug.test(t) && !Hg.test(t)
), Iu = () => !1, ny = (t) => Gg.test(t), oy = (t) => qg.test(t), sy = () => {
  const t = Ce("colors"), e = Ce("spacing"), a = Ce("blur"), n = Ce("brightness"), o = Ce("borderColor"), s = Ce("borderRadius"), l = Ce("borderSpacing"), i = Ce("borderWidth"), u = Ce("contrast"), c = Ce("grayscale"), d = Ce("hueRotate"), p = Ce("invert"), g = Ce("gap"), m = Ce("gradientColorStops"), h = Ce("gradientColorStopPositions"), y = Ce("inset"), x = Ce("margin"), $ = Ce("opacity"), B = Ce("padding"), S = Ce("saturate"), D = Ce("scale"), k = Ce("sepia"), I = Ce("skew"), M = Ce("space"), K = Ce("translate"), R = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", ue, e], F = () => [ue, e], H = () => ["", mt, At], N = () => ["auto", ha, ue], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Q = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ge = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", ue], ce = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], me = () => [ha, ue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [za],
      spacing: [mt, At],
      blur: ["none", "", Mt, ue],
      brightness: me(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Mt, ue],
      borderSpacing: F(),
      borderWidth: H(),
      contrast: me(),
      grayscale: J(),
      hueRotate: me(),
      invert: J(),
      gap: F(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Yg, At],
      inset: T(),
      margin: T(),
      opacity: me(),
      padding: F(),
      saturate: me(),
      scale: me(),
      sepia: J(),
      skew: me(),
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
        aspect: ["auto", "square", "video", ue]
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
        object: [...z(), ue]
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
        z: ["auto", ja, ue]
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
        flex: ["1", "auto", "initial", "none", ue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ja, ue]
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
          span: ["full", ja, ue]
        }, ue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
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
          span: [ja, ue]
        }, ue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": ["auto", "min", "max", "fr", ue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ue]
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
        justify: ["normal", ...ge()]
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
        content: ["normal", ...ge(), "baseline"]
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
        "place-content": [...ge(), "baseline"]
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
        p: [B]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [B]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [B]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [B]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [B]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [B]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [B]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [B]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [B]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ue, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ue, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ue, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Mt]
        }, Mt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ue, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ue, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ue, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ue, e, "auto", "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ha, No]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mt, ue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ue]
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
        decoration: ["auto", "from-font", mt, At]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", mt, ue]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ue]
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
        content: ["none", ue]
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
        "outline-offset": [mt, ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [mt, At]
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
        ring: H()
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
        "ring-offset": [mt, At]
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
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Mt, ue]
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
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [k]
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
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [k]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: me()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: me()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ue]
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
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ja, ue]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ue]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ue]
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
        "will-change": ["auto", "scroll", "contents", "transform", ue]
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
        stroke: [mt, At, No]
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
}, ry = /* @__PURE__ */ jg(sy);
function V(...t) {
  return ry(Eu(t));
}
const Yw = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(df), O(a.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: v(() => [
        ve("div", {
          class: G(r(V)("pb-4 pt-0", e.class))
        }, [
          w(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Jw = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(uf), O(r(n), {
      class: r(V)("border-accordion-border border-b", e.class)
    }), {
      default: v(() => [
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
const ly = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sn = {
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
const iy = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: s, class: l, ...i }, { slots: u }) => Ie(
  "svg",
  {
    ...Sn,
    width: t || Sn.width,
    height: t || Sn.height,
    stroke: n || Sn.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${ly(s ?? "icon")}`],
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
const _r = Ae("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = Ae("ChevronDownIcon", [
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
const xr = Ae("ChevronRightIcon", [
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
]), Qw = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(cf), { class: "flex" }, {
      default: v(() => [
        E(r(pf), O(a.value, {
          class: r(V)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: v(() => [
            w(n.$slots, "default"),
            w(n.$slots, "icon", {}, () => [
              E(r(wr), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ml = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, hl = Eu, aa = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return hl(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: s } = e, l = Object.keys(o).map((c) => {
    const d = a == null ? void 0 : a[c], p = s == null ? void 0 : s[c];
    if (d === null) return null;
    const g = ml(d) || ml(p);
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
  return hl(t, l, u, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, Xw = /* @__PURE__ */ b({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-slot": "alert",
      class: G(r(V)(r(xy)({ variant: a.variant }), e.class)),
      role: "alert"
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Zw = /* @__PURE__ */ b({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-slot": "alert-description",
      class: G(r(V)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), e1 = /* @__PURE__ */ b({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-slot": "alert-title",
      class: G(r(V)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), xy = aa(
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
), t1 = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)(r(Cy)({ variant: a.variant, type: a.type, size: a.size }), e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Cy = aa(
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
), a1 = /* @__PURE__ */ b({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("nav", {
      "aria-label": "breadcrumb",
      class: G(e.class)
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), n1 = /* @__PURE__ */ b({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: G(r(V)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        E(r(Vu), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = ve("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), o1 = /* @__PURE__ */ b({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      class: G(r(V)("inline-flex items-center gap-1.5", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), s1 = /* @__PURE__ */ b({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "a" },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), {
      as: a.as,
      "as-child": a.asChild,
      class: G(r(V)("hover:text-foreground transition-colors", e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), r1 = /* @__PURE__ */ b({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ol", {
      class: G(
        r(V)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), l1 = /* @__PURE__ */ b({
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
      class: G(r(V)("text-foreground font-normal", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), i1 = /* @__PURE__ */ b({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: G(r(V)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        E(r(xr))
      ])
    ], 2));
  }
}), kt = /* @__PURE__ */ b({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    loading: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "button" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), {
      as: a.as,
      "as-child": a.asChild,
      class: G(r(V)(r(na)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default"),
        a.loading ? (f(), _(r(my), {
          key: 0,
          class: G(r($y)({ size: a.size }))
        }, null, 8, ["class"])) : oe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), $y = aa("animate-spin", {
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
}), na = aa(
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
), u1 = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(
        r(V)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), d1 = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)("flex flex-col gap-y-1.5 p-6", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), c1 = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("h3", {
      class: G(r(V)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), p1 = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("p", {
      class: G(r(V)("text-muted-foreground text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), f1 = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)("p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), v1 = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)("flex items-center p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
});
function Cr(t) {
  return t ? t.flatMap((e) => e.type === ne ? Cr(e.children) : [e]) : [];
}
const fs = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var u;
      if (!a.default)
        return null;
      const n = Cr(a.default()), o = n.findIndex((c) => c.type !== Ss);
      if (o === -1)
        return n;
      const s = n[o];
      (u = s.props) == null || delete u.ref;
      const l = s.props ? O(e, s.props) : e, i = Ml({ ...s, props: {} }, l);
      return n.length === 1 ? i : (n[o] = i, n);
    };
  }
}), Sy = ["area", "img", "input"], De = b({
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
    return typeof n == "string" && Sy.includes(n) ? () => Ie(n, e) : n !== "template" ? () => Ie(t.as, e, { default: a.default }) : () => Ie(fs, e, { default: a.default });
  }
}), By = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (f(), _(r(De), {
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
      default: v(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function ky(t, e) {
  var a;
  const n = wt();
  return we(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Sa(n);
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
      const l = () => e(s);
      return xo(l), {
        off: l
      };
    },
    off: e,
    trigger: (...s) => Promise.all(Array.from(t).map((l) => l(...s))),
    clear: () => {
      t.clear();
    }
  };
}
function Oy(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...s) => (e += 1, n || (n = Ds(!0), a = n.run(() => t(...s))), xo(o), a);
}
const Ra = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Dy = (t) => typeof t < "u", Ey = Object.prototype.toString, Py = (t) => Ey.call(t) === "[object Object]", gl = /* @__PURE__ */ Ay();
function Ay() {
  var t, e;
  return Ra && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function My(t) {
  return Ee();
}
function jo(t) {
  return Array.isArray(t) ? t : [t];
}
function Ru(t, e = 1e4) {
  return Bs((a, n) => {
    let o = Se(t), s;
    const l = () => setTimeout(() => {
      o = Se(t), n();
    }, Se(e));
    return xo(() => {
      clearTimeout(s);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(s), s = l();
      }
    };
  });
}
const Ty = Se;
function Iy(t, e) {
  My() && no(t, e);
}
function Vy(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const $r = Ra ? window : void 0;
function oa(t) {
  var e;
  const a = Se(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Fu(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, c, d) => (i.addEventListener(u, c, d), () => i.removeEventListener(u, c, d)), o = C(() => {
    const i = jo(Se(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), s = Vy(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((c) => oa(c))) != null ? u : [$r].filter((c) => c != null),
        jo(Se(o.value ? t[1] : t[0])),
        jo(r(o.value ? t[2] : t[1])),
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
  ), l = () => {
    s(), a();
  };
  return xo(a), l;
}
function Ry() {
  const t = wt(!1), e = Ee();
  return e && de(() => {
    t.value = !0;
  }, e), t;
}
function Fy(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Ly(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = $r,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = Fy(e);
  return Fu(o, s, (d) => {
    d.repeat && Se(i) || u(d) && a(d);
  }, l);
}
function Ny(t) {
  return JSON.parse(JSON.stringify(t));
}
function Xa(t, e, a, n = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (S) => i ? typeof i == "function" ? i(S) : Ny(S) : S, $ = () => Dy(t[e]) ? x(t[e]) : p, B = (S) => {
    g ? g(S) && h(y, S) : h(y, S);
  };
  if (u) {
    const S = $(), D = P(S);
    let k = !1;
    return X(
      () => t[e],
      (I) => {
        k || (k = !0, D.value = x(I), ae(() => k = !1));
      }
    ), X(
      D,
      (I) => {
        !k && (I !== t[e] || d) && B(I);
      },
      { deep: d }
    ), D;
  } else
    return C({
      get() {
        return $();
      },
      set(S) {
        B(S);
      }
    });
}
function Ot(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(l) => {
    const i = an(n, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (l) => (oo(n, l), l)];
}
function yl(t) {
  return typeof t == "string" ? `'${t}'` : new jy().serialize(t);
}
const jy = /* @__PURE__ */ function() {
  var e;
  class t {
    constructor() {
      Pr(this, e, /* @__PURE__ */ new Map());
    }
    compare(n, o) {
      const s = typeof n, l = typeof o;
      return s === "string" && l === "string" ? n.localeCompare(o) : s === "number" && l === "number" ? n - o : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(o, !0));
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
      const s = n.constructor, l = s === Object || s === void 0 ? "" : s.name;
      if (l !== "" && globalThis[l] === s) return this.serializeBuiltInType(l, n);
      if (typeof n.toJSON == "function") {
        const i = n.toJSON();
        return l + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(n));
    }
    serializeBuiltInType(n, o) {
      const s = this["$" + n];
      if (s) return s.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(n, o.entries());
      throw new Error(`Cannot serialize ${n}`);
    }
    serializeObjectEntries(n, o) {
      const s = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let l = `${n}{`;
      for (let i = 0; i < s.length; i++) {
        const [u, c] = s[i];
        l += `${this.serialize(u, !0)}:${this.serialize(c)}`, i < s.length - 1 && (l += ",");
      }
      return l + "}";
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
  return t === e || yl(t) === yl(e);
}
const [Co, m1] = Ot("ConfigProvider");
function Lu(t) {
  const e = Co({
    dir: P("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Ue() {
  const t = Ee(), e = P(), a = C(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = e.value) == null ? void 0 : l.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : oa(e);
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
  function s(l) {
    e.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), t.exposed = o);
  }
  return { forwardRef: s, currentRef: e, currentElement: a };
}
let zy = 0;
function Fa(t, e = "reka") {
  var n;
  const a = Co({ useId: void 0 });
  return Object.hasOwn(ca, "useId") ? `${e}-${(n = ca.useId) == null ? void 0 : n.call(ca)}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++zy}`;
}
function Wy(t, e) {
  const a = P(t);
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
  const a = P({}), n = P("none"), o = P(t), s = t.value ? "mounted" : "unmounted";
  let l;
  const i = ((x = e.value) == null ? void 0 : x.ownerDocument.defaultView) ?? $r, { state: u, dispatch: c } = Wy(s, {
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
    var B;
    if (Ra) {
      const S = new CustomEvent($, { bubbles: !1, cancelable: !1 });
      (B = e.value) == null || B.dispatchEvent(S);
    }
  };
  X(
    t,
    async ($, B) => {
      var D;
      const S = B !== $;
      if (await ae(), S) {
        const k = n.value, I = Bn(e.value);
        $ ? (c("MOUNT"), d("enter"), I === "none" && d("after-enter")) : I === "none" || I === "undefined" || ((D = a.value) == null ? void 0 : D.display) === "none" ? (c("UNMOUNT"), d("leave"), d("after-leave")) : B && k !== I ? (c("ANIMATION_OUT"), d("leave")) : (c("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = ($) => {
    const B = Bn(e.value), S = B.includes(
      $.animationName
    ), D = u.value === "mounted" ? "enter" : "leave";
    if ($.target === e.value && S && (d(`after-${D}`), c("ANIMATION_END"), !o.value)) {
      const k = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var I;
        ((I = e.value) == null ? void 0 : I.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = k);
      });
    }
    $.target === e.value && B === "none" && c("ANIMATION_END");
  }, g = ($) => {
    $.target === e.value && (n.value = Bn(e.value));
  }, m = X(
    e,
    ($, B) => {
      $ ? (a.value = getComputedStyle($), $.addEventListener("animationstart", g), $.addEventListener("animationcancel", p), $.addEventListener("animationend", p)) : (c("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), B == null || B.removeEventListener("animationstart", g), B == null || B.removeEventListener("animationcancel", p), B == null || B.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), h = X(u, () => {
    const $ = Bn(e.value);
    n.value = u.value === "mounted" ? $ : "none";
  });
  return je(() => {
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
    const { present: n, forceMount: o } = he(t), s = P(), { isPresent: l } = Ky(n, s);
    a({ present: l });
    let i = e.default({ present: l.value });
    i = Cr(i || []);
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
        const p = oa(d);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? s.value = p.firstElementChild : s.value = p), p;
      }
    }) : null;
  }
});
function Hy(t) {
  const e = Ee(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Al(ao(o))] = (...s) => t(o, ...s);
  }), n;
}
function Gy() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Sr(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
const qy = "dismissableLayer.pointerDownOutside", Yy = "dismissableLayer.focusOutside";
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
function Jy(t, e, a = !0) {
  var l;
  const n = ((l = e == null ? void 0 : e.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1), s = P(() => {
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
            Sr(
              qy,
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
function Qy(t, e, a = !0) {
  var s;
  const n = ((s = e == null ? void 0 : e.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1);
  return we((l) => {
    if (!Ra || !Se(a))
      return;
    const i = async (u) => {
      if (!(e != null && e.value))
        return;
      await ae(), await ae();
      const c = u.target;
      !e.value || !c || Nu(e.value, c) || u.target && !o.value && Sr(
        Yy,
        t,
        { originalEvent: u }
      );
    };
    n.addEventListener("focusin", i), l(() => n.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Se(a) && (o.value = !0);
    },
    onBlurCapture: () => {
      Se(a) && (o.value = !1);
    }
  };
}
const ht = so({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xy = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: s } = Ue(), l = C(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => ht.layersRoot), u = C(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), c = C(() => ht.layersWithOutsidePointerEventsDisabled.size > 0), d = C(() => {
      const h = Array.from(i.value), [y] = [...ht.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(y);
      return u.value >= x;
    }), p = Jy(async (h) => {
      const y = [...ht.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !d.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ae(), h.defaultPrevented || n("dismiss"));
    }, s), g = Qy((h) => {
      [...ht.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, s);
    Ly("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return we((h) => {
      s.value && (a.disableOutsidePointerEvents && (ht.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), ht.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), h(() => {
        a.disableOutsidePointerEvents && ht.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), we((h) => {
      h(() => {
        s.value && (i.value.delete(s.value), ht.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (h, y) => (f(), _(r(De), {
      ref: r(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: dt({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: r(g).onFocusCapture,
      onBlurCapture: r(g).onBlurCapture,
      onPointerdownCapture: r(p).onPointerDownCapture
    }, {
      default: v(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var Zy = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, ua = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), On = {}, zo = 0, ju = function(t) {
  return t && (t.host || ju(t.parentNode));
}, eb = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = ju(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, tb = function(t, e, a, n) {
  var o = eb(e, Array.isArray(t) ? t : [t]);
  On[a] || (On[a] = /* @__PURE__ */ new WeakMap());
  var s = On[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), c = function(p) {
    !p || i.has(p) || (i.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        d(g);
      else
        try {
          var m = g.getAttribute(n), h = m !== null && m !== "false", y = (ua.get(g) || 0) + 1, x = (s.get(g) || 0) + 1;
          ua.set(g, y), s.set(g, x), l.push(g), y === 1 && h && kn.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return d(e), i.clear(), zo++, function() {
    l.forEach(function(p) {
      var g = ua.get(p) - 1, m = s.get(p) - 1;
      ua.set(p, g), s.set(p, m), g || (kn.has(p) || p.removeAttribute(n), kn.delete(p)), m || p.removeAttribute(a);
    }), zo--, zo || (ua = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), On = {});
  };
}, ab = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Zy(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), tb(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function nb(t) {
  let e;
  X(() => oa(t), (a) => {
    a ? e = ab(a) : e && e();
  }), je(() => {
    e && e();
  });
}
function Wo(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function ms(t, e, a = ".", n) {
  if (!Wo(e))
    return ms(t, {}, a, n);
  const o = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const l = t[s];
    l != null && (n && n(o, s, l, a) || (Array.isArray(l) && Array.isArray(o[s]) ? o[s] = [...l, ...o[s]] : Wo(l) && Wo(o[s]) ? o[s] = ms(
      l,
      o[s],
      (a ? `${a}.` : "") + s.toString(),
      n
    ) : o[s] = l));
  }
  return o;
}
function ob(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => ms(a, n, "", t), {})
  );
}
const sb = ob(), rb = Oy(() => {
  const t = P(/* @__PURE__ */ new Map()), e = P(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = Co({
    scrollBody: P(!0)
  });
  let o = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", gl && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var p;
    if (!Ra)
      return;
    if (!l) {
      i && s();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, d = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? sb({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), gl && (o = Fu(
      document,
      "touchmove",
      (g) => ib(g),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function lb(t) {
  const e = Math.random().toString(36).substring(2, 7), a = rb();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return Iy(() => {
    a.value.delete(e);
  }), n;
}
function zu(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : zu(a);
  }
}
function ib(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && zu(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const ub = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = Ry();
    return (a, n) => r(e) || a.forceMount ? (f(), _(tn, {
      key: 0,
      to: a.to,
      disabled: a.disabled,
      defer: a.defer
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : oe("", !0);
  }
});
function Br(t) {
  const e = Ee(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, s) => {
    const l = (e == null ? void 0 : e.type.props[s]).default;
    return l !== void 0 && (o[s] = l), o;
  }, {}), n = Cs(t);
  return C(() => {
    const o = {}, s = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(s).forEach((l) => {
      o[ao(l)] = s[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function mn(t, e) {
  const a = Br(t), n = e ? Hy(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function Nt() {
  const t = P(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : oa(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
function db() {
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
function cb(t) {
  return C(() => {
    var e;
    return Ty(t) ? !!((e = oa(t)) != null && e.closest("form")) : !0;
  });
}
const bl = "data-reka-collection-item";
function kr(t = {}) {
  const { key: e = "", isProvider: a = !1 } = t, n = `${e}CollectionProvider`;
  let o;
  if (a) {
    const d = P(/* @__PURE__ */ new Map());
    o = {
      collectionRef: P(),
      itemMap: d
    }, oo(n, o);
  } else
    o = an(n);
  const s = (d = !1) => {
    const p = o.collectionRef.value;
    if (!p)
      return [];
    const g = Array.from(p.querySelectorAll(`[${bl}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (y, x) => g.indexOf(y.ref) - g.indexOf(x.ref)
    );
    return d ? h : h.filter((y) => y.ref.dataset.disabled !== "");
  }, l = b({
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
          const x = Tl(h.value);
          o.itemMap.value.set(x, { ref: h.value, value: d.value }), y(() => o.itemMap.value.delete(x));
        }
      }), () => Ie(fs, { ...g, [bl]: "", ref: m }, p);
    }
  }), u = C(() => Array.from(o.itemMap.value.values())), c = C(() => o.itemMap.value.size);
  return { getItems: s, reactiveItems: u, itemMapSize: c, CollectionSlot: l, CollectionItem: i };
}
const pb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function fb(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function vb(t, e, a) {
  const n = fb(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return pb[n];
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
    return X(o, (s, l) => {
      if (!n.value)
        return;
      const i = n.value, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "value").set;
      if (d && s !== l) {
        const p = new Event("input", { bubbles: !0 }), g = new Event("change", { bubbles: !0 });
        d.call(i, s), i.dispatchEvent(p), i.dispatchEvent(g);
      }
    }), (s, l) => (f(), _(By, O({
      ref_key: "primitiveElement",
      ref: a
    }, { ...e, ...s.$attrs }, { as: "input" }), null, 16));
  }
}), mb = /* @__PURE__ */ b({
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
    ), n = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((o, s) => typeof o == "object" ? Object.entries(o).map(([l, i]) => ({ name: `[${e.name}][${s}][${l}]`, value: i })) : { name: `[${e.name}][${s}]`, value: o }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([o, s]) => ({ name: `[${e.name}][${o}]`, value: s })) : []);
    return (o, s) => a.value ? (f(), _(_l, O({ key: o.name }, { ...e, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (f(!0), L(ne, { key: 1 }, be(n.value, (l) => (f(), _(_l, O({
      key: l.name,
      ref_for: !0
    }, { ...e, ...o.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Wu, hb] = Ot("PopperRoot"), gb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = P();
    return hb({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), yb = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = Ue(), o = Wu();
    return Os(() => {
      o.onAnchorChange(e.reference ?? n.value);
    }), (s, l) => (f(), _(r(De), {
      ref: r(a),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), bb = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { forwardRef: e } = Ue();
    return (a, n) => (f(), _(r(yb), {
      "as-child": "",
      reference: a.reference
    }, {
      default: v(() => [
        E(r(De), O({
          ref: r(e),
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: v(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
});
function _b(t) {
  return t !== null;
}
function wb(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var x, $, B;
      const { placement: a, rects: n, middlewareData: o } = e, l = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = l ? 0 : t.arrowWidth, u = l ? 0 : t.arrowHeight, [c, d] = hs(a), p = { start: "0%", center: "50%", end: "100%" }[d], g = ((($ = o.arrow) == null ? void 0 : $.x) ?? 0) + i / 2, m = (((B = o.arrow) == null ? void 0 : B.y) ?? 0) + u / 2;
      let h = "", y = "";
      return c === "bottom" ? (h = l ? p : `${g}px`, y = `${-u}px`) : c === "top" ? (h = l ? p : `${g}px`, y = `${n.floating.height + u}px`) : c === "right" ? (h = `${-u}px`, y = l ? p : `${m}px`) : c === "left" && (h = `${n.floating.width + u}px`, y = l ? p : `${m}px`), { data: { x: h, y } };
    }
  };
}
function hs(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
function xb(t) {
  const e = P(), a = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return de(() => {
    const o = oa(t);
    if (o) {
      e.value = { width: o.offsetWidth, height: o.offsetHeight };
      const s = new ResizeObserver((l) => {
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
      return s.observe(o, { box: "border-box" }), () => s.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
const Cb = {
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
}, [h1, $b] = Ot("PopperContent"), Sb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ ks({
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
    ...Cb
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Wu(), { forwardRef: s, currentElement: l } = Ue(), i = P(), u = P(), { width: c, height: d } = xb(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: g.value,
      boundary: m.value.filter(_b),
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
        apply: ({ elements: T, rects: F, availableWidth: H, availableHeight: N }) => {
          const { width: z, height: Q } = F.reference, se = T.floating.style;
          se.setProperty(
            "--reka-popper-available-width",
            `${H}px`
          ), se.setProperty(
            "--reka-popper-available-height",
            `${N}px`
          ), se.setProperty(
            "--reka-popper-anchor-width",
            `${z}px`
          ), se.setProperty(
            "--reka-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && _i({ element: u.value, padding: a.arrowPadding }),
      wb({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      a.hideWhenDetached && yi({ strategy: "referenceHidden", ...h.value })
    ]), x = C(() => a.reference ?? o.anchor.value), { floatingStyles: $, placement: B, isPositioned: S, middlewareData: D } = xi(
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
    ), k = C(
      () => hs(B.value)[0]
    ), I = C(
      () => hs(B.value)[1]
    );
    Os(() => {
      S.value && n("placed");
    });
    const M = C(
      () => {
        var T;
        return ((T = D.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), K = P("");
    we(() => {
      l.value && (K.value = window.getComputedStyle(l.value).zIndex);
    });
    const R = C(() => {
      var T;
      return ((T = D.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), A = C(() => {
      var T;
      return ((T = D.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return $b({
      placedSide: k,
      onArrowChange: (T) => u.value = T,
      arrowX: R,
      arrowY: A,
      shouldHideArrow: M
    }), (T, F) => {
      var H, N, z;
      return f(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: dt({
          ...r($),
          transform: r(S) ? r($).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K.value,
          "--reka-popper-transform-origin": [
            (H = r(D).transformOrigin) == null ? void 0 : H.x,
            (N = r(D).transformOrigin) == null ? void 0 : N.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = r(D).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        E(r(De), O({ ref: r(s) }, T.$attrs, {
          "as-child": a.asChild,
          as: T.as,
          "data-side": k.value,
          "data-align": I.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: r(S) ? void 0 : "none"
          }
        }), {
          default: v(() => [
            w(T.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Bb(t) {
  const e = C(() => r(t)), a = C(() => new Intl.Collator("en", { usage: "search", ...e.value }));
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
function kb(t, e, a) {
  return t === void 0 ? !1 : Array.isArray(t) ? t.some((n) => Ha(n, e, a)) : Ha(t, e, a);
}
function Ha(t, e, a) {
  return t === void 0 || e === void 0 ? !1 : typeof t == "string" ? t === e : typeof a == "function" ? a(t, e) : typeof a == "string" ? (t == null ? void 0 : t[a]) === (e == null ? void 0 : e[a]) : vs(t, e);
}
function Ob(t) {
  const e = Ru("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (o, s) => {
      e.value = e.value + o;
      {
        const l = Gy(), i = s.map((g) => {
          var m, h;
          return {
            ...g,
            textValue: ((m = g.value) == null ? void 0 : m.textValue) ?? ((h = g.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), u = i.find((g) => g.ref === l), c = i.map((g) => g.textValue), d = Eb(c, e.value, u == null ? void 0 : u.textValue), p = i.find((g) => g.textValue === d);
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
  let l = Db(t, Math.max(s, 0));
  o.length === 1 && (l = l.filter((c) => c !== a));
  const u = l.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== a ? u : void 0;
}
function Pb(t, e, a) {
  const n = t.findIndex((i) => vs(i, e)), o = t.findIndex((i) => vs(i, a));
  if (n === -1 || o === -1)
    return [];
  const [s, l] = [n, o].sort((i, u) => i - u);
  return t.slice(s, l + 1);
}
const [$o, Ab] = Ot("ListboxRoot"), Mb = /* @__PURE__ */ b({
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
    const n = t, o = a, { multiple: s, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: c, dir: d } = he(n), { getItems: p } = kr({ isProvider: !0 }), { handleTypeaheadSearch: g } = Ob(), { primitiveElement: m, currentElement: h } = Nt(), y = db(), x = Lu(d), $ = cb(h), B = P(), S = P(!1), D = P(!0), k = Xa(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    });
    function I(Y) {
      if (S.value = !0, n.multiple) {
        const te = Array.isArray(k.value) ? [...k.value] : [], le = te.findIndex((ee) => Ha(ee, Y, n.by));
        n.selectionBehavior === "toggle" ? (le === -1 ? te.push(Y) : te.splice(le, 1), k.value = te) : (k.value = [Y], B.value = Y);
      } else
        n.selectionBehavior === "toggle" && Ha(k.value, Y, n.by) ? k.value = void 0 : k.value = Y;
      setTimeout(() => {
        S.value = !1;
      }, 1);
    }
    const M = P(null), K = P(null), R = P(!1), A = P(!1), T = Rn(), F = Rn(), H = Rn();
    function N() {
      return p().map((Y) => Y.ref).filter((Y) => Y.dataset.disabled !== "");
    }
    function z(Y, te = !0) {
      if (!Y)
        return;
      M.value = Y, D.value && M.value.focus(), te && M.value.scrollIntoView({ block: "nearest" });
      const le = p().find((ee) => ee.ref === Y);
      o("highlight", le);
    }
    function Q(Y) {
      if (R.value)
        H.trigger(Y);
      else {
        const te = p().find((le) => Ha(le.value, Y, n.by));
        te && (M.value = te.ref, z(te.ref));
      }
    }
    function se(Y) {
      M.value && M.value.isConnected && (Y.preventDefault(), Y.stopPropagation(), A.value || M.value.click());
    }
    function ge(Y) {
      if (D.value) {
        if (S.value = !0, R.value)
          F.trigger(Y);
        else {
          const te = Y.altKey || Y.ctrlKey || Y.metaKey;
          if (te && Y.key === "a" && s.value) {
            const le = p(), ee = le.map((xe) => xe.value);
            k.value = [...ee], Y.preventDefault(), z(le[le.length - 1].ref);
          } else if (!te) {
            const le = g(Y.key, p());
            le && z(le);
          }
        }
        setTimeout(() => {
          S.value = !1;
        }, 1);
      }
    }
    function J() {
      A.value = !0;
    }
    function ce() {
      requestAnimationFrame(() => {
        A.value = !1;
      });
    }
    function me() {
      ae(() => {
        const Y = new KeyboardEvent("keydown", { key: "PageUp" });
        Qe(Y);
      });
    }
    function Ve(Y) {
      const te = M.value;
      te != null && te.isConnected && (K.value = te), M.value = null, o("leave", Y);
    }
    function He(Y) {
      var le, ee;
      const te = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((le = Y.currentTarget) == null || le.dispatchEvent(te), o("entryFocus", te), !te.defaultPrevented)
        if (K.value)
          z(K.value);
        else {
          const xe = (ee = N()) == null ? void 0 : ee[0];
          z(xe);
        }
    }
    function Qe(Y) {
      const te = vb(Y, i.value, x.value);
      if (!te)
        return;
      let le = N();
      if (M.value) {
        if (te === "last")
          le.reverse();
        else if (te === "prev" || te === "next") {
          te === "prev" && le.reverse();
          const ee = le.indexOf(M.value);
          le = le.slice(ee + 1);
        }
        ot(Y, le[0]);
      }
      if (le.length) {
        const ee = !M.value && te === "prev" ? le.length - 1 : 0;
        z(le[ee]);
      }
      if (R.value)
        return F.trigger(Y);
    }
    function ot(Y, te) {
      var ee;
      if (!(R.value || n.selectionBehavior !== "replace" || !s.value || !Array.isArray(k.value) || (Y.altKey || Y.ctrlKey || Y.metaKey) && !Y.shiftKey) && Y.shiftKey) {
        const xe = p().filter((Wt) => Wt.ref.dataset.disabled !== "");
        let Re = (ee = xe.find((Wt) => Wt.ref === te)) == null ? void 0 : ee.value;
        if (Y.key === y.END ? Re = xe[xe.length - 1].value : Y.key === y.HOME && (Re = xe[0].value), !Re || !B.value)
          return;
        const zt = Pb(xe.map((Wt) => Wt.value), B.value, Re);
        k.value = zt;
      }
    }
    async function Et(Y) {
      if (await ae(), R.value)
        T.trigger(Y);
      else {
        const te = N(), le = te.find((ee) => ee.dataset.state === "checked");
        le ? z(le) : te.length && z(te[0]);
      }
    }
    return X(k, () => {
      S.value || ae(() => {
        Et();
      });
    }, { immediate: !0, deep: !0 }), e({
      highlightedElement: M,
      highlightItem: Q,
      highlightFirstItem: me,
      highlightSelected: Et,
      getItems: p
    }), Ab({
      modelValue: k,
      // @ts-expect-error ignoring
      onValueChange: I,
      multiple: s,
      orientation: i,
      dir: x,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: M,
      isVirtual: R,
      virtualFocusHook: T,
      virtualKeydownHook: F,
      virtualHighlightHook: H,
      by: n.by,
      firstValue: B,
      selectionBehavior: c,
      focusable: D,
      onLeave: Ve,
      onEnter: He,
      changeHighlight: z,
      onKeydownEnter: se,
      onKeydownNavigation: Qe,
      onKeydownTypeAhead: ge,
      onCompositionStart: J,
      onCompositionEnd: ce,
      highlightFirstItem: me
    }), (Y, te) => (f(), _(r(De), {
      ref_key: "primitiveElement",
      ref: m,
      as: Y.as,
      "as-child": Y.asChild,
      dir: r(x),
      "data-disabled": r(u) ? "" : void 0,
      onPointerleave: Ve,
      onFocusout: te[0] || (te[0] = async (le) => {
        const ee = le.relatedTarget || le.target;
        await ae(), M.value && r(h) && !r(h).contains(ee) && Ve(le);
      })
    }, {
      default: v(() => [
        w(Y.$slots, "default", { modelValue: r(k) }),
        r($) && Y.name ? (f(), _(r(mb), {
          key: 0,
          name: Y.name,
          value: r(k),
          disabled: r(u),
          required: Y.required
        }, null, 8, ["name", "value", "disabled", "required"])) : oe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), [Dt, Tb] = Ot("ComboboxRoot"), Ib = /* @__PURE__ */ b({
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
    var F, H, N;
    const n = t, o = a, { primitiveElement: s, currentElement: l } = Nt(), { multiple: i, disabled: u, ignoreFilter: c, resetSearchTermOnSelect: d, dir: p } = he(n), g = Lu(p), m = Xa(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), h = Xa(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    async function y(z) {
      var Q, se;
      h.value = z, R.search = "", z ? (await ae(), (Q = s.value) == null || Q.highlightSelected(), $.value = !0) : $.value = !1, (se = S.value) == null || se.focus(), setTimeout(() => {
        !z && n.resetSearchTermOnBlur && x.trigger();
      }, 1);
    }
    const x = Rn(), $ = P(!1), B = P(!1), S = P(), D = P(), k = C(() => {
      var z;
      return ((z = s.value) == null ? void 0 : z.highlightedElement) ?? void 0;
    }), I = P(/* @__PURE__ */ new Map()), M = P(/* @__PURE__ */ new Map()), { contains: K } = Bb({ sensitivity: "base" }), R = so({
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
      if (!R.search || n.ignoreFilter || B.value) {
        R.filtered.count = I.value.size;
        return;
      }
      R.filtered.groups = /* @__PURE__ */ new Set();
      let z = 0;
      for (const [Q, se] of I.value) {
        const ge = K(se, R.search);
        R.filtered.items.set(Q, ge ? 1 : 0), ge && z++;
      }
      for (const [Q, se] of M.value)
        for (const ge of se)
          if (R.filtered.items.get(ge) > 0) {
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
    return de(() => {
      var z, Q, se;
      T != null && T.exposed && (T.exposed.highlightItem = (z = s.value) == null ? void 0 : z.highlightItem, T.exposed.highlightFirstItem = (Q = s.value) == null ? void 0 : Q.highlightFirstItem, T.exposed.highlightSelected = (se = s.value) == null ? void 0 : se.highlightSelected);
    }), e({
      filtered: C(() => R.filtered),
      highlightedElement: k,
      highlightItem: (F = s.value) == null ? void 0 : F.highlightItem,
      highlightFirstItem: (H = s.value) == null ? void 0 : H.highlightFirstItem,
      highlightSelected: (N = s.value) == null ? void 0 : N.highlightSelected
    }), Tb({
      modelValue: m,
      multiple: i,
      disabled: u,
      open: h,
      onOpenChange: y,
      contentId: "",
      isUserInputted: $,
      isVirtual: B,
      inputElement: S,
      highlightedElement: k,
      onInputElementChange: (z) => S.value = z,
      triggerElement: D,
      onTriggerElementChange: (z) => D.value = z,
      parentElement: l,
      resetSearchTermOnSelect: d,
      onResetSearchTerm: x.on,
      allItems: I,
      allGroups: M,
      filterState: R,
      ignoreFilter: c
    }), (z, Q) => (f(), _(r(gb), null, {
      default: v(() => [
        E(r(Mb), O({
          ref_key: "primitiveElement",
          ref: s
        }, z.$attrs, {
          modelValue: r(m),
          "onUpdate:modelValue": Q[0] || (Q[0] = (se) => jt(m) ? m.value = se : null),
          style: {
            pointerEvents: r(h) ? "auto" : void 0
          },
          as: z.as,
          "as-child": z.asChild,
          dir: r(g),
          multiple: r(i),
          name: z.name,
          required: z.required,
          disabled: r(u),
          "highlight-on-hover": !0,
          by: n.by,
          onHighlight: Q[1] || (Q[1] = (se) => o("highlight", se))
        }), {
          default: v(() => [
            w(z.$slots, "default", {
              open: r(h),
              modelValue: r(m)
            })
          ]),
          _: 3
        }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])
      ]),
      _: 3
    }));
  }
}), Vb = /* @__PURE__ */ b({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { CollectionSlot: e } = kr(), a = $o(), n = Ru(!1, 10);
    return (o, s) => (f(), _(r(e), null, {
      default: v(() => [
        E(r(De), {
          role: "listbox",
          as: o.as,
          "as-child": o.asChild,
          tabindex: r(a).focusable.value ? r(a).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": r(a).orientation.value,
          "aria-multiselectable": !!r(a).multiple.value,
          "data-orientation": r(a).orientation.value,
          onMousedown: s[0] || (s[0] = $e((l) => n.value = !0, ["left"])),
          onFocus: s[1] || (s[1] = (l) => {
            r(n) || r(a).onEnter(l);
          }),
          onKeydown: [
            s[2] || (s[2] = Te($e((l) => {
              r(a).focusable.value && r(a).onKeydownNavigation(l);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            Te(r(a).onKeydownEnter, ["enter"]),
            r(a).onKeydownTypeAhead
          ]
        }, {
          default: v(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), [g1, Rb] = Ot("ComboboxContent"), Fb = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = he(a), s = Dt(), { forwardRef: l, currentElement: i } = Ue();
    lb(a.bodyLock), nb(s.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), c = Br(u.value), d = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    Rb({ position: o });
    const p = P(!1);
    return de(() => {
      s.inputElement.value && (p.value = i.value.contains(s.inputElement.value), p.value && s.inputElement.value.focus());
    }), je(() => {
      var g;
      p.value && ((g = s.triggerElement.value) == null || g.focus());
    }), (g, m) => (f(), _(r(Vb), { "as-child": "" }, {
      default: v(() => [
        E(r(Xy), {
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => r(s).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = r(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = r(s).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: v(() => [
            (f(), _(Ne(r(o) === "popper" ? r(Sb) : r(De)), O({ ...g.$attrs, ...r(c) }, {
              id: r(s).contentId,
              ref: r(l),
              "data-state": r(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...r(o) === "popper" ? d : {}
              }
            }), {
              default: v(() => [
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
}), y1 = /* @__PURE__ */ b({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    Ue();
    const a = Dt();
    function n() {
      a.filterState.search = "", a.inputElement.value && (a.inputElement.value.value = "", a.inputElement.value.focus());
    }
    return (o, s) => (f(), _(r(De), O({
      type: o.as === "button" ? "button" : void 0
    }, e, {
      tabindex: "-1",
      onClick: n
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Lb = /* @__PURE__ */ b({
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
    const o = mn(t, e), { forwardRef: s } = Ue(), l = Dt();
    return l.contentId || (l.contentId = Fa(void 0, "reka-combobox-content")), (i, u) => (f(), _(r(Uy), {
      present: i.forceMount || r(l).open.value
    }, {
      default: v(() => [
        E(Fb, O({ ...r(o), ...i.$attrs }, { ref: r(s) }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nb = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Dt(), n = C(
      () => a.ignoreFilter.value ? a.allItems.value.size === 0 : !!a.filterState.search && a.filterState.filtered.count === 0
    );
    return (o, s) => n.value ? (f(), _(r(De), U(O({ key: 0 }, e)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          s[0] || (s[0] = Z("No options"))
        ])
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
}), [b1, jb] = Ot("ListboxGroup"), zb = /* @__PURE__ */ b({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Fa(void 0, "reka-listbox-group");
    return jb({ id: a }), (n, o) => (f(), _(r(De), O({ role: "group" }, e, { "aria-labelledby": r(a) }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), [Ku, Wb] = Ot("ComboboxGroup"), Kb = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Fa(void 0, "reka-combobox-group"), n = Dt(), o = C(() => n.ignoreFilter.value ? !0 : n.filterState.search ? n.filterState.filtered.groups.has(a) : !0), s = Wb({
      id: a,
      labelId: ""
    });
    return de(() => {
      n.allGroups.value.has(a) || n.allGroups.value.set(a, /* @__PURE__ */ new Set());
    }), je(() => {
      n.allGroups.value.delete(a);
    }), (l, i) => (f(), _(r(zb), O({
      id: r(a),
      "aria-labelledby": r(s).labelId
    }, e, {
      hidden: o.value ? void 0 : !0
    }), {
      default: v(() => [
        w(l.$slots, "default")
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
    }), s = $o(), { primitiveElement: l, currentElement: i } = Nt(), u = C(() => a.disabled || s.disabled.value || !1), c = P();
    return Pl(() => {
      var d;
      return c.value = (d = s.highlightedElement.value) == null ? void 0 : d.id;
    }), de(() => {
      s.focusable.value = !1, setTimeout(() => {
        var d;
        a.autoFocus && ((d = i.value) == null || d.focus());
      }, 1);
    }), je(() => {
      s.focusable.value = !0;
    }), (d, p) => (f(), _(r(De), {
      ref_key: "primitiveElement",
      ref: l,
      as: d.as,
      "as-child": d.asChild,
      value: r(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": c.value,
      type: "text",
      onKeydown: [
        Te($e(r(s).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        Te(r(s).onKeydownEnter, ["enter"])
      ],
      onInput: p[0] || (p[0] = (g) => {
        o.value = g.target.value, r(s).highlightFirstItem(g);
      }),
      onCompositionstart: r(s).onCompositionStart,
      onCompositionend: r(s).onCompositionEnd
    }, {
      default: v(() => [
        w(d.$slots, "default", { modelValue: r(o) })
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
    const a = t, n = e, o = Dt(), s = $o(), { primitiveElement: l, currentElement: i } = Nt(), u = Xa(a, "modelValue", n, {
      passive: a.modelValue === void 0
    });
    de(() => {
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
    ), (g, m) => (f(), _(r(Ub), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: r(u),
      "onUpdate:modelValue": m[0] || (m[0] = (h) => jt(u) ? u.value = h : null),
      as: g.as,
      "as-child": g.asChild,
      "auto-focus": g.autoFocus,
      "aria-expanded": r(o).open.value,
      "aria-controls": r(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: Te($e(c, ["prevent"]), ["down", "up"])
    }, {
      default: v(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
  }
}), Gb = "listbox.select", [qb, Yb] = Ot("ListboxItem"), Jb = /* @__PURE__ */ b({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Fa(void 0, "reka-listbox-item"), { CollectionItem: s } = kr(), { forwardRef: l, currentElement: i } = Ue(), u = $o(), c = C(() => i.value === u.highlightedElement.value), d = C(() => kb(u.modelValue.value, a.value, u.by)), p = C(() => u.disabled.value || a.disabled);
    async function g(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !p.value && h && (u.onValueChange(a.value), u.changeHighlight(i.value));
    }
    function m(h) {
      const y = { originalEvent: h, value: a.value };
      Sr(Gb, g, y);
    }
    return Yb({
      isSelected: d
    }), (h, y) => (f(), _(r(s), { value: h.value }, {
      default: v(() => [
        hd([c.value, d.value], () => E(r(De), O({ id: r(o) }, h.$attrs, {
          ref: r(l),
          role: "option",
          tabindex: r(u).focusable.value ? c.value ? "0" : "-1" : -1,
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
            r(u).highlightedElement.value !== r(i) && (r(u).highlightOnHover.value ? r(u).changeHighlight(r(i), !1) : r(u).focusable.value || r(u).changeHighlight(r(i), !1));
          })
        }), {
          default: v(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), y, 1)
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Qb = /* @__PURE__ */ b({
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
    const a = t, n = e, o = Fa(void 0, "reka-combobox-item"), s = Dt(), l = Ku(null), { primitiveElement: i, currentElement: u } = Nt();
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
    return de(() => {
      var p;
      s.allItems.value.set(o, a.textValue || u.value.textContent || u.value.innerText);
      const d = l == null ? void 0 : l.id;
      d && (s.allGroups.value.has(d) ? (p = s.allGroups.value.get(d)) == null || p.add(o) : s.allGroups.value.set(d, /* @__PURE__ */ new Set([o])));
    }), je(() => {
      s.allItems.value.delete(o);
    }), (d, p) => c.value ? (f(), _(r(Jb), O({ key: 0 }, a, {
      id: r(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: r(s).disabled.value || d.disabled,
      onSelect: p[0] || (p[0] = (g) => {
        n("select", g), !g.defaultPrevented && !r(s).multiple.value && !d.disabled && !r(s).disabled.value && (g.preventDefault(), r(s).onOpenChange(!1), r(s).modelValue.value = a.value);
      })
    }), {
      default: v(() => [
        w(d.$slots, "default", {}, () => [
          Z(re(d.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "disabled"])) : oe("", !0);
  }
}), Xb = /* @__PURE__ */ b({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    Ue();
    const a = qb();
    return (n, o) => r(a).isSelected.value ? (f(), _(r(De), O({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
}), _1 = /* @__PURE__ */ b({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Xb), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zb = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    Ue();
    const a = Ku({ id: "", labelId: "" });
    return a.labelId || (a.labelId = Fa(void 0, "reka-combobox-group-label")), (n, o) => (f(), _(r(De), O(e, {
      id: r(a).labelId
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), e0 = /* @__PURE__ */ b({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(ub), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t0 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return Ue(), (a, n) => (f(), _(r(De), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w1 = /* @__PURE__ */ b({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = Ue(), o = Dt(), s = C(() => e.disabled || o.disabled.value || !1);
    return de(() => {
      n.value && o.onTriggerElementChange(n.value);
    }), (l, i) => (f(), _(r(De), O(e, {
      ref: r(a),
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": r(o).open.value,
      "aria-controls": r(o).contentId,
      "data-state": r(o).open.value ? "open" : "closed",
      disabled: s.value,
      "data-disabled": s.value ? "" : void 0,
      "aria-disabled": s.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => r(o).onOpenChange(!r(o).open.value))
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
function a0(t) {
  const e = Co({
    nonce: P()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const n0 = /* @__PURE__ */ b({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = Ue(), { nonce: n } = he(e), o = a0(n), s = Dt();
    return (l, i) => (f(), L(ne, null, [
      E(r(De), O({ ...l.$attrs, ...e }, {
        ref: r(a),
        "data-reka-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: r(s).isVirtual.value ? void 0 : 1,
          overflow: "auto"
        }
      }), {
        default: v(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      E(r(De), {
        as: "style",
        nonce: r(o)
      }, {
        default: v(() => i[0] || (i[0] = [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), x1 = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(t, { emit: e }) {
    const o = mn(t, e);
    return (s, l) => (f(), _(r(Ib), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C1 = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = Br(a);
    return (o, s) => (f(), _(r(bb), O(r(n), {
      class: r(V)("w-[200px]", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $1 = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Nb), O(a.value, {
      class: r(V)("py-6 text-center text-sm", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S1 = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    heading: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Kb), O(a.value, {
      class: r(V)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e.class)
    }), {
      default: v(() => [
        n.heading ? (f(), _(r(Zb), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: v(() => [
            Z(re(n.heading), 1)
          ]),
          _: 1
        })) : oe("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), B1 = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = mn(o, n);
    return (l, i) => (f(), _(r(Hb), O(r(s), {
      class: r(V)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", a.class)
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k1 = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = mn(o, n);
    return (l, i) => (f(), _(r(Qb), O(r(s), {
      class: r(V)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", a.class)
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O1 = /* @__PURE__ */ b({
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
    }), s = mn(o, n);
    return (l, i) => (f(), _(r(e0), null, {
      default: v(() => [
        E(r(Lb), O(r(s), {
          class: r(V)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a.class)
        }), {
          default: v(() => [
            E(r(n0), null, {
              default: v(() => [
                w(l.$slots, "default")
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
}), D1 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(t0), O(a.value, {
      class: r(V)("-mx-1 h-px bg-border", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o0 = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, E1 = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(Hi), O({
      class: r(V)("p-3", a.class)
    }, r(s)), {
      default: v(({ grid: u, weekDays: c }) => [
        E(r(Qu), null, {
          default: v(() => [
            E(r(r0)),
            E(r(Xu)),
            E(r(s0))
          ]),
          _: 1
        }),
        ve("div", o0, [
          (f(!0), L(ne, null, be(u, (d) => (f(), _(r(Gu), {
            key: d.value.toString()
          }, {
            default: v(() => [
              E(r(Yu), null, {
                default: v(() => [
                  E(r(Qn), null, {
                    default: v(() => [
                      (f(!0), L(ne, null, be(c, (p) => (f(), _(r(Ju), { key: p }, {
                        default: v(() => [
                          Z(re(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              E(r(qu), null, {
                default: v(() => [
                  (f(!0), L(ne, null, be(d.rows, (p, g) => (f(), _(r(Qn), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(ne, null, be(p, (m) => (f(), _(r(Uu), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          E(r(Hu), {
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
}), Uu = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Yf), O({
      class: r(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        e.class
      )
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hu = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(av), O({
      class: r(V)(
        r(na)({ variant: "ghost" }),
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
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gu = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(qf), O({
      class: r(V)("w-full border-collapse space-y-1", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qu = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(ev), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yu = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Zf), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qn = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(tv), O({
      class: r(V)("flex", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ju = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Jf), O({
      class: r(V)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qu = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Hf), O({
      class: r(V)("relative flex w-full items-center justify-between pt-1", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xu = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Gf), O({
      class: r(V)("text-text text-sm font-medium", e.class)
    }, r(n)), {
      default: v(({ headingValue: l }) => [
        w(o.$slots, "default", { headingValue: l }, () => [
          Z(re(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s0 = /* @__PURE__ */ b({
  __name: "CalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Qf), O({
      class: r(V)(
        r(na)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, r(n)), {
      default: v(() => s[0] || (s[0] = [
        Z(" > ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), r0 = /* @__PURE__ */ b({
  __name: "CalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Xf), O({
      class: r(V)(
        r(na)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, r(n)), {
      default: v(() => s[0] || (s[0] = [
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
const Ko = /* @__PURE__ */ new WeakMap(), i0 = (...t) => {
  var e;
  const a = t[0], n = (e = Ee()) == null ? void 0 : e.proxy;
  if (n == null && !Il())
    throw new Error("injectLocal must be called in setup");
  return n && Ko.has(n) && a in Ko.get(n) ? Ko.get(n)[a] : an(...t);
}, u0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const d0 = (t) => typeof t < "u", c0 = Object.prototype.toString, p0 = (t) => c0.call(t) === "[object Object]", f0 = () => {
};
function Zu(...t) {
  if (t.length !== 1)
    return Cs(...t);
  const e = t[0];
  return typeof e == "function" ? Sa(Bs(() => ({ get: e, set: f0 }))) : P(e);
}
function v0(t, e) {
  function a(...n) {
    return new Promise((o, s) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return a;
}
const ed = (t) => t();
function m0(t = ed, e = {}) {
  const {
    initialState: a = "active"
  } = e, n = Zu(a === "active");
  function o() {
    n.value = !1;
  }
  function s() {
    n.value = !0;
  }
  const l = (...i) => {
    n.value && t(...i);
  };
  return { isActive: Sa(n), pause: o, resume: s, eventFilter: l };
}
function wl(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function Uo(t) {
  return Array.isArray(t) ? t : [t];
}
function h0(t) {
  return Ee();
}
function g0(t, e, a = {}) {
  const {
    eventFilter: n = ed,
    ...o
  } = a;
  return X(
    t,
    v0(
      n,
      e
    ),
    o
  );
}
function y0(t, e, a = {}) {
  const {
    eventFilter: n,
    initialState: o = "active",
    ...s
  } = a, { eventFilter: l, pause: i, resume: u, isActive: c } = m0(n, { initialState: o });
  return { stop: g0(
    t,
    e,
    {
      ...s,
      eventFilter: l
    }
  ), pause: i, resume: u, isActive: c };
}
function td(t, e = !0, a) {
  h0() ? de(t, a) : e ? t() : ae(t);
}
function b0(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const Za = u0 ? window : void 0;
function ad(t) {
  var e;
  const a = Se(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Xn(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, c, d) => (i.addEventListener(u, c, d), () => i.removeEventListener(u, c, d)), o = C(() => {
    const i = Uo(Se(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), s = b0(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((c) => ad(c))) != null ? u : [Za].filter((c) => c != null),
        Uo(Se(o.value ? t[1] : t[0])),
        Uo(r(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Se(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, c, d]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(c != null && c.length))
        return;
      const p = p0(d) ? { ...d } : d;
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
    s(), a();
  };
  return l0(a), l;
}
function _0() {
  const t = wt(!1), e = Ee();
  return e && de(() => {
    t.value = !0;
  }, e), t;
}
function w0(t) {
  const e = _0();
  return C(() => (e.value, !!t()));
}
const x0 = Symbol("vueuse-ssr-width");
function C0() {
  const t = Il() ? i0(x0, null) : null;
  return typeof t == "number" ? t : void 0;
}
function nd(t, e = {}) {
  const { window: a = Za, ssrWidth: n = C0() } = e, o = w0(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = wt(typeof n == "number"), l = wt(), i = wt(!1), u = (c) => {
    i.value = c.matches;
  };
  return we(() => {
    if (s.value) {
      s.value = !o.value;
      const c = Se(t).split(",");
      i.value = c.some((d) => {
        const p = d.includes("not all"), g = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(g || m);
        return g && h && (h = n >= wl(g[1])), m && h && (h = n <= wl(m[1])), p ? !h : h;
      });
      return;
    }
    o.value && (l.value = a.matchMedia(Se(t)), i.value = l.value.matches);
  }), Xn(l, "change", u, { passive: !0 }), C(() => i.value);
}
function $0(t) {
  return JSON.parse(JSON.stringify(t));
}
const Dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, En = "__vueuse_ssr_handlers__", S0 = /* @__PURE__ */ B0();
function B0() {
  return En in Dn || (Dn[En] = Dn[En] || {}), Dn[En];
}
function od(t, e) {
  return S0[t] || e;
}
function k0(t) {
  return nd("(prefers-color-scheme: dark)", t);
}
function O0(t) {
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
}, xl = "vueuse-storage";
function E0(t, e, a, n = {}) {
  var o;
  const {
    flush: s = "pre",
    deep: l = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: p = Za,
    eventFilter: g,
    onError: m = (N) => {
      console.error(N);
    },
    initOnMounted: h
  } = n, y = (d ? wt : P)(typeof e == "function" ? e() : e), x = C(() => Se(t));
  if (!a)
    try {
      a = od("getDefaultStorage", () => {
        var N;
        return (N = Za) == null ? void 0 : N.localStorage;
      })();
    } catch (N) {
      m(N);
    }
  if (!a)
    return y;
  const $ = Se(e), B = O0($), S = (o = n.serializer) != null ? o : D0[B], { pause: D, resume: k } = y0(
    y,
    () => A(y.value),
    { flush: s, deep: l, eventFilter: g }
  );
  X(x, () => F(), { flush: s });
  let I = !1;
  const M = (N) => {
    h && !I || F(N);
  }, K = (N) => {
    h && !I || H(N);
  };
  p && i && (a instanceof Storage ? Xn(p, "storage", M, { passive: !0 }) : Xn(p, xl, K)), h ? td(() => {
    I = !0, F();
  }) : F();
  function R(N, z) {
    if (p) {
      const Q = {
        key: x.value,
        oldValue: N,
        newValue: z,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", Q) : new CustomEvent(xl, {
        detail: Q
      }));
    }
  }
  function A(N) {
    try {
      const z = a.getItem(x.value);
      if (N == null)
        R(z, null), a.removeItem(x.value);
      else {
        const Q = S.write(N);
        z !== Q && (a.setItem(x.value, Q), R(z, Q));
      }
    } catch (z) {
      m(z);
    }
  }
  function T(N) {
    const z = N ? N.newValue : a.getItem(x.value);
    if (z == null)
      return u && $ != null && a.setItem(x.value, S.write($)), $;
    if (!N && c) {
      const Q = S.read(z);
      return typeof c == "function" ? c(Q, $) : B === "object" && !Array.isArray(Q) ? { ...$, ...Q } : Q;
    } else return typeof z != "string" ? z : S.read(z);
  }
  function F(N) {
    if (!(N && N.storageArea !== a)) {
      if (N && N.key == null) {
        y.value = $;
        return;
      }
      if (!(N && N.key !== x.value)) {
        D();
        try {
          (N == null ? void 0 : N.newValue) !== S.write(y.value) && (y.value = T(N));
        } catch (z) {
          m(z);
        } finally {
          N ? ae(k) : k();
        }
      }
    }
  }
  function H(N) {
    F(N.detail);
  }
  return y;
}
const P0 = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function A0(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = Za,
    storage: s,
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
  }, g = k0({ window: o }), m = C(() => g.value ? "dark" : "light"), h = u || (l == null ? Zu(n) : E0(l, n, s, { window: o, listenToStorageChanges: i })), y = C(() => h.value === "auto" ? m.value : h.value), x = od(
    "updateHTMLAttrs",
    (D, k, I) => {
      const M = typeof D == "string" ? o == null ? void 0 : o.document.querySelector(D) : ad(D);
      if (!M)
        return;
      const K = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
      let A = null;
      if (k === "class") {
        const F = I.split(/\s/g);
        Object.values(p).flatMap((H) => (H || "").split(/\s/g)).filter(Boolean).forEach((H) => {
          F.includes(H) ? K.add(H) : R.add(H);
        });
      } else
        A = { key: k, value: I };
      if (K.size === 0 && R.size === 0 && A === null)
        return;
      let T;
      d && (T = o.document.createElement("style"), T.appendChild(document.createTextNode(P0)), o.document.head.appendChild(T));
      for (const F of K)
        M.classList.add(F);
      for (const F of R)
        M.classList.remove(F);
      A && M.setAttribute(A.key, A.value), d && (o.getComputedStyle(T).opacity, document.head.removeChild(T));
    }
  );
  function $(D) {
    var k;
    x(e, a, (k = p[D]) != null ? k : D);
  }
  function B(D) {
    t.onChanged ? t.onChanged(D, $) : $(D);
  }
  X(y, B, { flush: "post", immediate: !0 }), td(() => B(y.value));
  const S = C({
    get() {
      return c ? h.value : y.value;
    },
    set(D) {
      h.value = D;
    }
  });
  return Object.assign(S, { store: h, system: m, state: y });
}
function M0(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = ""
  } = t, n = A0({
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
function Or(t, e, a, n = {}) {
  var o, s, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = c;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (S) => i ? typeof i == "function" ? i(S) : $0(S) : S, $ = () => d0(t[e]) ? x(t[e]) : p, B = (S) => {
    g ? g(S) && h(y, S) : h(y, S);
  };
  if (u) {
    const S = $(), D = P(S);
    let k = !1;
    return X(
      () => t[e],
      (I) => {
        k || (k = !0, D.value = x(I), ae(() => k = !1));
      }
    ), X(
      D,
      (I) => {
        !k && (I !== t[e] || d) && B(I);
      },
      { deep: d }
    ), D;
  } else
    return C({
      get() {
        return $();
      },
      set(S) {
        B(S);
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
    const o = ie(t, e);
    return (s, l) => (f(), _(r(oh), U(q(r(o))), {
      default: v(({ open: i }) => [
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
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Oh), U(q(e)), {
      default: v(() => [
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
    as: { type: [String, Object, Function] },
    class: {},
    open: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(lh), O(r(n), {
      class: r(V)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default"),
        E(r(Dh), { "as-child": "" }, {
          default: v(() => [
            E(r(wr), {
              class: G(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
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
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(ih), null, {
      default: v(() => [
        E(r(hh), O({ ...r(s), ...l.$attrs }, {
          class: r(V)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: v(() => [
            E(r(I0)),
            E(r(Sh), {
              class: G(
                r(V)(
                  "p-1",
                  l.position === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
                )
              )
            }, {
              default: v(() => [
                w(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            E(r(V0))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), P1 = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Ch), O({
      class: r(V)("w-full p-1", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, ws = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(bh), O(r(n), {
      class: r(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: v(() => [
        ve("span", T0, [
          E(r(_h), null, {
            default: v(() => [
              E(r(_r), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        E(r(pu), null, {
          default: v(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A1 = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(pu), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M1 = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r($h), {
      class: G(r(V)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), T1 = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(gh), O(a.value, {
      class: r(V)("bg-muted -mx-1 my-1 h-px", e.class)
    }), null, 16, ["class"]));
  }
}), I0 = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Bh), O(r(n), {
      class: r(V)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          E(r(cy), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V0 = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(kh), O(r(n), {
      class: r(V)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          E(r(wr), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R0 = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, F0 = /* @__PURE__ */ b({
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
    }), s = Or(a, "modelValue", n, {
      passive: !0,
      defaultValue: Fn(Ct())
    }), l = ie(o, n), i = Ai("en");
    return (u, c) => (f(), _(r(Hi), O({
      placeholder: r(s),
      "onUpdate:placeholder": c[2] || (c[2] = (d) => jt(s) ? s.value = d : null)
    }, r(l), {
      class: r(V)("rounded-md border p-3", a.class)
    }), {
      default: v(({ date: d, grid: p, weekDays: g }) => [
        E(r(Qu), null, {
          default: v(() => [
            E(r(Xu), { class: "flex w-full items-center justify-between gap-2" }, {
              default: v(() => [
                E(r(gs), {
                  "default-value": r(s).month.toString(),
                  "onUpdate:modelValue": c[0] || (c[0] = (m) => {
                    var h;
                    !m || !r(s) || Number(m) !== ((h = r(s)) == null ? void 0 : h.month) && (s.value = r(s).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: v(() => [
                    E(r(bs), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: v(() => [
                        E(r(ys), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    E(r(_s), { class: "max-h-[200px]" }, {
                      default: v(() => [
                        (f(!0), L(ne, null, be(r(Bc)({ dateObj: d }), (m) => (f(), _(r(ws), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: v(() => [
                            Z(re(r(i).custom(r(Ye)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                E(r(gs), {
                  "default-value": r(s).year.toString(),
                  "onUpdate:modelValue": c[1] || (c[1] = (m) => {
                    var h;
                    !m || !r(s) || Number(m) !== ((h = r(s)) == null ? void 0 : h.year) && (s.value = r(s).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: v(() => [
                    E(r(bs), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: v(() => [
                        E(r(ys), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    E(r(_s), { class: "max-h-[200px]" }, {
                      default: v(() => [
                        (f(!0), L(ne, null, be(r(Sc)({ dateObj: d, startIndex: -100, endIndex: 10 }), (m) => (f(), _(r(ws), {
                          key: m.toString(),
                          value: m.year.toString()
                        }, {
                          default: v(() => [
                            Z(re(m.year), 1)
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
        ve("div", R0, [
          (f(!0), L(ne, null, be(p, (m) => (f(), _(r(Gu), {
            key: m.value.toString()
          }, {
            default: v(() => [
              E(r(Yu), null, {
                default: v(() => [
                  E(r(Qn), null, {
                    default: v(() => [
                      (f(!0), L(ne, null, be(g, (h) => (f(), _(r(Ju), { key: h }, {
                        default: v(() => [
                          Z(re(h), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              E(r(qu), { class: "grid" }, {
                default: v(() => [
                  (f(!0), L(ne, null, be(m.rows, (h, y) => (f(), _(r(Qn), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(ne, null, be(h, (x) => (f(), _(r(Uu), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: v(() => [
                          E(r(Hu), {
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
}), L0 = /* @__PURE__ */ b({
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
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(hv), O(r(s), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: v(() => [
        w(l.$slots, "default")
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
    const o = ie(t, e);
    return (s, l) => (f(), _(r(Fi), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I1 = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(cn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N0 = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Li), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j0 = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), z0 = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Wi), O(r(n), {
      class: r(V)("text-heading text-2xl font-semibold leading-none tracking-tight", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W0 = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Ki), O(r(n), {
      class: r(V)("text-sub-text text-sm", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rd = /* @__PURE__ */ b({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus", "close"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = C(() => {
      const { class: l, ...i } = n;
      return i;
    }), s = ie(o, a);
    return (l, i) => (f(), _(r(ar), null, {
      default: v(() => [
        E(r(lr), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        E(r(rr), O(r(s), {
          class: r(V)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            n.class
          )
        }), {
          default: v(() => [
            w(l.$slots, "default"),
            E(r(cn), {
              onClick: i[0] || (i[0] = (u) => a("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: v(() => [
                E(r(wo), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = ve("span", { class: "sr-only" }, "Close", -1))
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
}), V1 = /* @__PURE__ */ b({
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(ar), null, {
      default: v(() => [
        E(r(lr), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: v(() => [
            E(r(rr), O({
              class: r(V)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                a.class
              )
            }, r(s), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: v(() => [
                w(l.$slots, "default"),
                E(r(cn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: v(() => [
                    E(r(wo), { class: "size-4" }),
                    i[1] || (i[1] = ve("span", { class: "sr-only" }, "Close", -1))
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
    return (a, n) => (f(), L("div", {
      class: G(
        r(V)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), R1 = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ie(t, e);
    return (s, l) => (f(), _(r(sd), U(q(r(o))), {
      default: v(() => [
        E(r(rd), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: v(() => [
            E(L0, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: v(() => [
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
}), F1 = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r($v), O(a.value, {
      class: r(V)("py-6 text-center text-sm", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L1 = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    heading: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(bv), O(a.value, {
      class: r(V)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: v(() => [
        n.heading ? (f(), _(r(_v), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: v(() => [
            Z(re(n.heading), 1)
          ]),
          _: 1
        })) : oe("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U0 = { class: "flex items-center border-b px-3" }, N1 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CommandInput",
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), L("div", U0, [
      E(r(_y), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      E(r(gv), O({ ...r(n), ...o.$attrs }, {
        "auto-focus": "",
        class: r(V)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(Ov), O(r(s), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H0 = { role: "presentation" }, z1 = /* @__PURE__ */ b({
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
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(Cv), O(r(s), {
      class: r(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: v(() => [
        ve("div", H0, [
          w(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W1 = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Dv), O(a.value, {
      class: r(V)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K1 = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      class: G(r(V)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), G0 = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ie(t, e);
    return (s, l) => (f(), _(r(im), U(q(r(o))), {
      default: v(({ open: i }) => [
        w(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), q0 = /* @__PURE__ */ b({
  __name: "BaseDropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(
        r(V)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Y0 = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const a = fe(t);
    return (n, o) => (f(), _(r(um), O({ class: "outline-hidden" }, r(a)), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J0 = /* @__PURE__ */ b({
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
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(dm), null, {
      default: v(() => [
        E(r(cm), O(r(s), {
          class: r(V)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), U1 = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(pm), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H1 = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ie(t, e);
    return (s, l) => (f(), _(r(hm), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), G1 = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(ru), O(r(n), {
      class: r(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        o.inset && "pl-8",
        e.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q0 = /* @__PURE__ */ b({
  __name: "DropdownMenuLink",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "a" },
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
    return (o, s) => (f(), _(q0, {
      class: G(e.class)
    }, {
      default: v(() => [
        E(r(ru), O(r(n), {
          as: o.as,
          href: o.href,
          class: "size-full"
        }), {
          default: v(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "href"])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), X0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, q1 = /* @__PURE__ */ b({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(vm), O(r(s), {
      class: r(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        ve("span", X0, [
          E(r(lu), null, {
            default: v(() => [
              E(r(_r), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Y1 = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(gm), O(r(s), {
      class: r(V)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        ve("span", Z0, [
          E(r(lu), null, {
            default: v(() => [
              E(r(vy), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J1 = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      class: G(r(V)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Q1 = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(fm), O(a.value, {
      class: r(V)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), X1 = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(mm), O(r(n), {
      class: r(V)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z1 = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ie(t, e);
    return (s, l) => (f(), _(r(ym), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ex = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(_m), O(r(n), {
      class: r(V)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        e.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default"),
        E(r(xr), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tx = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(bm), O(r(s), {
      class: r(V)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e_ = { class: "text-xs text-slate-600 dark:text-slate-300" }, t_ = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (f(), L("div", e_, "Characters: " + re(e.count), 1));
  }
}), hn = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, a_ = {}, n_ = { class: "text-sm text-slate-400 dark:text-slate-500" };
function o_(t, e) {
  return f(), L("div", n_, [
    w(t.$slots, "default")
  ]);
}
const s_ = /* @__PURE__ */ hn(a_, [["render", o_]]), r_ = { class: "text-sm text-red-600 dark:text-red-400" }, l_ = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => $a((f(), L("div", null, [
      ve("p", r_, re(e.error), 1)
    ], 512)), [
      [$s, e.error]
    ]);
  }
}), i_ = {}, u_ = { class: "w-full space-y-4 p-1.5" };
function d_(t, e) {
  return f(), L("div", u_, [
    w(t.$slots, "default")
  ]);
}
const ax = /* @__PURE__ */ hn(i_, [["render", d_]]), c_ = {}, p_ = { class: "my-4" };
function f_(t, e) {
  return f(), L("div", p_, [
    w(t.$slots, "default")
  ]);
}
const v_ = /* @__PURE__ */ hn(c_, [["render", f_]]), m_ = { class: "grid gap-4 md:grid-cols-2" }, nx = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (f(), _(v_, null, {
      default: v(() => [
        ve("div", m_, [
          w(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), ld = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    id: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(wm), O(a.value, {
      class: r(V)(
        "text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300",
        e.class
      )
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h_ = { class: "relative" }, g_ = {
  name: "Base",
  inheritAttrs: !1
}, sa = /* @__PURE__ */ b({
  ...g_,
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
        e.label && e.showLabel ? (f(), _(r(ld), {
          key: 0,
          id: e.id
        }, {
          default: v(() => [
            Z(re(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : oe("", !0),
        ve("div", h_, [
          w(e.$slots, "default"),
          e.showCharacterCount ? (f(), _(r(t_), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : oe("", !0)
        ]),
        E(r(s_), { class: "mt-[2px]" }, {
          default: v(() => [
            Z(re(e.description), 1)
          ]),
          _: 1
        }),
        E(r(l_), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), y_ = { class: "flex gap-2" }, ox = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] },
    modelValue: { type: [Boolean, null] },
    text: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, o = P(t.modelValue);
    return X(o, (s) => {
      a("update:modelValue", s);
    }), (s, l) => (f(), _(r(sa), U(q(s.$props)), {
      default: v(() => [
        ve("div", y_, [
          E(r(rv), {
            id: s.id,
            checked: o.value,
            "onUpdate:checked": l[0] || (l[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: v(() => [
              E(r(lv), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: v(() => [
                  E(r(_r), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          s.text ? (f(), _(r(ld), {
            key: 0,
            id: s.id,
            class: "my-auto"
          }, {
            default: v(() => [
              Z(re(s.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : oe("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), b_ = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ie(t, e);
    return (s, l) => (f(), _(r(Pm), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), __ = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Am), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w_ = /* @__PURE__ */ b({
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
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(Mm), null, {
      default: v(() => [
        E(r(Vm), O({ ...r(s), ...l.$attrs }, {
          class: r(V)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), sx = /* @__PURE__ */ b({
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
    }), s = P(n.modelValue);
    return X(s, () => {
      a("update:modelValue", s.value);
    }), de(() => {
      if (n.defaultValue)
        s.value = n.defaultValue;
      else if (s.value === null) {
        const l = /* @__PURE__ */ new Date();
        s.value = new Be(
          l.getFullYear(),
          l.getMonth() + 1,
          l.getDate()
        );
      }
    }), (l, i) => (f(), _(r(sa), U(q(l.$props)), {
      default: v(() => [
        E(r(b_), null, {
          default: v(() => [
            E(r(__), { "as-child": "" }, {
              default: v(() => [
                E(r(kt), {
                  variant: "outline",
                  class: G(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: v(() => [
                    E(r(uy), { class: "mr-2 size-4" }),
                    Z(" " + re(s.value ? r(o).format(s.value.toDate(r(Ct)())) : l.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            E(r(w_), { class: "w-auto p-0" }, {
              default: v(() => [
                E(r(F0), {
                  modelValue: s.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u),
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
var Me = [];
for (var Ho = 0; Ho < 256; ++Ho)
  Me.push((Ho + 256).toString(16).slice(1));
function x_(t, e = 0) {
  return (Me[t[e + 0]] + Me[t[e + 1]] + Me[t[e + 2]] + Me[t[e + 3]] + "-" + Me[t[e + 4]] + Me[t[e + 5]] + "-" + Me[t[e + 6]] + Me[t[e + 7]] + "-" + Me[t[e + 8]] + Me[t[e + 9]] + "-" + Me[t[e + 10]] + Me[t[e + 11]] + Me[t[e + 12]] + Me[t[e + 13]] + Me[t[e + 14]] + Me[t[e + 15]]).toLowerCase();
}
var Pn, C_ = new Uint8Array(16);
function $_() {
  if (!Pn && (Pn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Pn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Pn(C_);
}
var S_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Cl = {
  randomUUID: S_
};
function B_(t, e, a) {
  if (Cl.randomUUID && !t)
    return Cl.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || $_)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, x_(n);
}
const k_ = { class: "flex items-center space-x-2" }, O_ = ["src"], D_ = ["accept"], rx = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + B_(), s = C(() => i.value ? URL.createObjectURL(i.value) : null), l = a.currentImage ? a.currentImage : a.defaultImage, i = C({
      get: () => a.modelValue,
      set: (d) => n("update:modelValue", d)
    }), u = (d) => {
      i.value = d.target.files[0];
    }, c = () => document.getElementById(o).click();
    return (d, p) => (f(), _(r(sa), U(q(d.$props)), {
      default: v(() => [
        ve("div", k_, [
          w(d.$slots, "image", {
            newImage: s.value,
            curImage: r(l)
          }, () => [
            ve("img", {
              src: s.value ?? r(l),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, O_)
          ]),
          ve("input", {
            id: o,
            accept: d.accept,
            hidden: "",
            type: "file",
            onInput: u
          }, null, 40, D_),
          E(r(kt), {
            variant: "outline",
            onClick: c
          }, {
            default: v(() => p[0] || (p[0] = [
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
    const e = Vl(t, "modelValue");
    return (a, n) => (f(), _(r(sa), U(q(a.$props)), {
      default: v(() => [
        $a(ve("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: G(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
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
}), lx = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = C(() => n.placeholder ?? "Select an option..."), s = P(
      n.modelValue ? n.options.find((l) => l === n.modelValue) : null
    );
    return X(s, () => {
      a("update:modelValue", s.value);
    }), (l, i) => (f(), _(r(sa), U(q(l.$props)), {
      default: v(() => [
        E(r(gs), {
          modelValue: s.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
        }, {
          default: v(({ open: u }) => [
            E(r(bs), { open: u }, {
              default: v(() => [
                E(r(ys), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            E(r(_s), null, {
              default: v(() => [
                (f(!0), L(ne, null, be(l.options, (c) => (f(), _(r(ws), { value: c }, {
                  default: v(() => [
                    Z(re(c), 1)
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
}), A_ = ["placeholder"], ix = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = Or(t, "modelValue", e, {
      passive: !0
    });
    return (s, l) => (f(), _(r(sa), U(q(s.$props)), {
      default: v(() => [
        $a(ve("textarea", {
          "onUpdate:modelValue": l[0] || (l[0] = (i) => jt(o) ? o.value = i : null),
          placeholder: s.placeholder,
          class: G(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !s.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": s.error
          }])
        }, null, 10, A_), [
          [yd, r(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), M_ = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] },
    modelValue: { type: [Boolean, null] },
    class: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Yo(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = e, n = t, o = Vl(t, "modelValue");
    X(o, () => {
      a("update:modelValue", o.value);
    });
    const s = C(() => {
      const { class: i, ...u } = n;
      return u;
    }), l = ie(s, a);
    return (i, u) => (f(), _(r(sa), U(q(i.$props)), {
      default: v(() => [
        E(r(Zh), O({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (c) => o.value = c)
        }, r(l), {
          class: r(V)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        }), {
          default: v(({ checked: c }) => [
            E(r(eg), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: v(() => [
                c ? w(i.$slots, "checked", { key: 0 }) : oe("", !0),
                c ? oe("", !0) : w(i.$slots, "not-checked", { key: 1 })
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
}), T_ = { class: "my-auto text-slate-400 dark:text-slate-100" }, ux = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (f(), L("div", T_, " Showing " + re(e.min) + " to " + re(e.max) + " of " + re(e.total) + " results ", 1));
  }
}), dx = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Cm), O(a.value, {
      class: r(V)("text-text flex size-9 items-center justify-center", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default", {}, () => [
          E(r(Vu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(r($m), U(q(a.value)), {
      default: v(() => [
        E(r(kt), {
          class: G(r(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: r(py) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), px = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(r(Sm), U(q(a.value)), {
      default: v(() => [
        E(r(kt), {
          class: G(r(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: r(fy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), fx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(r(Om), U(q(a.value)), {
      default: v(() => [
        E(r(kt), {
          class: G(r(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: r(xr) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), vx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(r(Dm), U(q(a.value)), {
      default: v(() => [
        E(r(kt), {
          class: G(r(V)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: r(dy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), mx = /* @__PURE__ */ b({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = M0({
      selector: "html"
    });
    return (a, n) => (f(), _(M_, {
      modelValue: r(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => jt(e) ? e.value = o : null)
    }, {
      checked: v(() => [
        E(r(hy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": v(() => [
        E(r(wy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), hx = /* @__PURE__ */ b({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(t) {
    const e = t, a = P(e.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, s) => (f(), L(ne, null, [
      E(r(en), {
        onClick: n,
        class: G(e.class)
      }, {
        default: v(() => [
          (f(!0), L(ne, null, be(o.headers, (l) => (f(), _(r(Zn), {
            key: l.value
          }, {
            default: v(() => [
              o.$slots[`cell_header_${l.value}`] ? w(o.$slots, `cell_header_${l.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (f(), L(ne, { key: 1 }, [
                Z(re(o.row[l.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (f(), _(r(xs), { key: 0 }, {
            default: v(() => [
              w(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : oe("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (f(!0), L(ne, { key: 0 }, be(o.subRows, (l, i) => (f(), _(r(en), { key: i }, {
        default: v(() => [
          (f(!0), L(ne, null, be(o.headers, (u) => (f(), _(r(Zn), {
            key: u.value
          }, {
            default: v(() => [
              o.$slots[`subrow_cell_${u.value}`] ? w(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: l,
                open: a.value
              }) : (f(), L(ne, { key: 1 }, [
                Z(re("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (f(), _(r(xs), { key: 0 }, {
            default: v(() => [
              w(o.$slots, "sub_row_actions", {
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
}), I_ = { class: "relative w-full overflow-auto" }, V_ = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", I_, [
      ve("table", {
        class: G(r(V)("w-full caption-bottom text-sm", e.class))
      }, [
        w(a.$slots, "default")
      ], 2)
    ]));
  }
}), R_ = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tbody", {
      class: G(r(V)("[&_tr:last-child]:border-0", e.class))
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
    return (a, n) => (f(), L("td", {
      class: G(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", e.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), F_ = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("th", {
      class: G(
        r(V)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), L_ = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("thead", {
      class: G(r(V)("[&_tr]:border-b", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), gx = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tfoot", {
      class: G(
        r(V)(
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
    return (a, n) => (f(), L("tr", {
      class: G(
        r(V)(
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
    return (a, n) => (f(), L("td", {
      class: G(["w-32 p-4 text-center align-middle dark:text-slate-300", e.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), N_ = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("caption", {
      class: G(r(V)("text-sub-text mt-4 text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), j_ = { class: "flex items-center justify-center py-10" }, yx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(en, null, {
      default: v(() => [
        E(Zn, O({
          class: r(V)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: v(() => [
            ve("div", j_, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), bx = /* @__PURE__ */ b({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (f(), _(r(V_), null, {
      default: v(() => [
        e.caption ? (f(), _(r(N_), { key: 0 }, {
          default: v(() => [
            Z(re(e.caption), 1)
          ]),
          _: 1
        })) : oe("", !0),
        E(r(L_), null, {
          default: v(() => [
            E(r(en), null, {
              default: v(() => [
                (f(!0), L(ne, null, be(e.headers, (n, o) => (f(), _(r(F_), null, {
                  default: v(() => [
                    e.$slots[`header_${e.headers[o].value}`] ? w(e.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (f(), L(ne, { key: 1 }, [
                      Z(re(n.name), 1)
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
        E(r(R_), null, {
          default: v(() => [
            (f(!0), L(ne, null, be(e.rows, (n, o) => (f(), _(r(en), { key: o }, {
              default: v(() => [
                (f(!0), L(ne, null, be(e.headers, (s) => (f(), _(r(Zn), {
                  key: s.value
                }, {
                  default: v(() => [
                    e.$slots[`cell_${s.value}`] ? w(e.$slots, `cell_${s.value}`, {
                      key: 0,
                      item: n
                    }) : (f(), L(ne, { key: 1 }, [
                      Z(re(n[s.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (f(), _(r(xs), { key: 0 }, {
                  default: v(() => [
                    w(e.$slots, "row_actions", { item: n })
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
}), z_ = { class: "text-text" }, _x = /* @__PURE__ */ b({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, s) => (f(), _(r(sd), { open: o.open }, {
      default: v(() => [
        E(r(N0), { "as-child": "" }, {
          default: v(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        E(r(rd), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: G("max-w-" + o.size)
        }, {
          default: v(() => [
            E(r(j0), null, {
              default: v(() => [
                E(r(z0), null, {
                  default: v(() => {
                    var l;
                    return [
                      o.$slots.title ? w(o.$slots, "title", { key: 0 }) : (l = o.headerData) != null && l.title ? (f(), L(ne, { key: 1 }, [
                        Z(re(o.headerData.title), 1)
                      ], 64)) : oe("", !0)
                    ];
                  }),
                  _: 3
                }),
                E(r(W0), null, {
                  default: v(() => {
                    var l;
                    return [
                      o.$slots.description ? w(o.$slots, "description", { key: 0 }) : (l = o.headerData) != null && l.description ? (f(), L(ne, { key: 1 }, [
                        Z(re(o.headerData.description), 1)
                      ], 64)) : oe("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            ve("div", z_, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            E(r(K0), null, {
              default: v(() => [
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
    as: { type: [String, Object, Function] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ie(t, e);
    return (s, l) => (f(), _(r(ag), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wx = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(sg), O(r(n), {
      class: r(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-xs dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50",
        e.class
      )
    }), {
      default: v(() => [
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
      return f(), _(Ne((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: G([
          a.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          r(V)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            e.class
          )
        ])
      }, {
        default: v(() => {
          var s;
          return [
            (s = a.tab) != null && s.icon ? (f(), _(Ne(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : oe("", !0),
            Z(" " + re(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), $l = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(ng), O(a.value, {
      class: r(V)(
        "inline-flex h-auto items-center justify-center space-x-1 rounded-md bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
        e.class
      )
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xx = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(og), O({
      class: r(V)(
        "ring-offset-whit mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:text-slate-400 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        e.class
      )
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U_ = {}, H_ = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function G_(t, e) {
  return f(), L("div", H_, [
    w(t.$slots, "default")
  ]);
}
const q_ = /* @__PURE__ */ hn(U_, [["render", G_]]), Cx = /* @__PURE__ */ b({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = C(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (f(), _(r(W_), null, {
      default: v(() => [
        E(r($l), { class: "hidden gap-2 md:block" }, {
          default: v(() => [
            (f(!0), L(ne, null, be(n.tabs, (s) => (f(), _(r(K_), {
              key: s.name,
              tab: s
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        E(r($l), { class: "flex md:hidden" }, {
          default: v(() => [
            E(r(G0), null, {
              default: v(() => [
                E(r(Y0), { "as-child": "" }, {
                  default: v(() => [
                    E(r(kt), { variant: "secondary" }, {
                      default: v(() => {
                        var s;
                        return [
                          Z(re(((s = a.value) == null ? void 0 : s.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                E(r(J0), { class: "w-full" }, {
                  default: v(() => [
                    (f(!0), L(ne, null, be(n.tabs, (s) => (f(), _(r(Q0), O({
                      key: s.name
                    }, { ref_for: !0 }, s), {
                      default: v(() => [
                        Z(re(s.name), 1)
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
        E(r(q_), null, {
          default: v(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Y_ = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, $x = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(jm), O({
      class: r(V)("p-3", a.class)
    }, r(s)), {
      default: v(({ grid: u, weekDays: c }) => [
        E(r(aw), null, {
          default: v(() => [
            E(r(sw)),
            E(r(nw)),
            E(r(ow))
          ]),
          _: 1
        }),
        ve("div", Y_, [
          (f(!0), L(ne, null, be(u, (d) => (f(), _(r(X_), {
            key: d.value.toString()
          }, {
            default: v(() => [
              E(r(ew), null, {
                default: v(() => [
                  E(r(Sl), null, {
                    default: v(() => [
                      (f(!0), L(ne, null, be(c, (p) => (f(), _(r(tw), { key: p }, {
                        default: v(() => [
                          Z(re(p), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              E(r(Z_), null, {
                default: v(() => [
                  (f(!0), L(ne, null, be(d.rows, (p, g) => (f(), _(r(Sl), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(ne, null, be(p, (m) => (f(), _(r(J_), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          E(r(Q_), {
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
}), J_ = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Um), O({
      class: r(V)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        e.class
      )
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q_ = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Xm), O({
      class: r(V)(
        r(na)({ variant: "ghost" }),
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
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Km), O({
      class: r(V)("w-full border-collapse space-y-1", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z_ = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Jm), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ew = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Ym), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sl = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Qm), O({
      class: r(V)("mt-2 flex w-full", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Hm), O({
      class: r(V)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(zm), O({
      class: r(V)("relative flex w-full items-center justify-between pt-1", e.class)
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Wm), O({
      class: r(V)("text-text text-sm font-medium", e.class)
    }, r(n)), {
      default: v(({ headingValue: l }) => [
        w(o.$slots, "default", { headingValue: l }, () => [
          Z(re(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ow = /* @__PURE__ */ b({
  __name: "RangeCalendarNextButton",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(Gm), O({
      class: r(V)(
        r(na)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          E(r(yy), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sw = /* @__PURE__ */ b({
  __name: "RangeCalendarPrevButton",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...s } = e;
      return s;
    }), n = fe(a);
    return (o, s) => (f(), _(r(qm), O({
      class: r(V)(
        r(na)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, r(n)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          E(r(gy), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rw = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    label: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Ph), O(a.value, {
      class: r(V)(
        "bg-border relative shrink-0",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: v(() => [
        e.label ? (f(), L("span", {
          key: 0,
          class: G(
            r(V)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              e.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, re(e.label), 3)) : oe("", !0)
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
    const o = ie(t, e);
    return (s, l) => (f(), _(r(Fi), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sx = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(cn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iw = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, side: i, ...u } = a;
      return u;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(ar), null, {
      default: v(() => [
        E(r(lr), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        E(r(rr), O({
          class: r(V)(r(uw)({ side: l.side }), a.class)
        }, { ...r(s), ...l.$attrs }), {
          default: v(() => [
            w(l.$slots, "default"),
            E(r(cn), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: v(() => [
                E(r(wo), { class: "text-muted-foreground h-4 w-4" })
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
}), Bx = /* @__PURE__ */ b({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Ki), O({
      class: r(V)("text-muted-foreground text-sm", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kx = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ox = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Dx = /* @__PURE__ */ b({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Wi), O({
      class: r(V)("text-foreground text-lg font-semibold", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ex = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Li), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uw = aa(
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
), dw = "sidebar:state", cw = 60 * 60 * 24 * 7, pw = "16rem", fw = "18rem", vw = "3rem", mw = "b", [So, hw] = pe("Sidebar"), gw = { class: "flex h-full w-full flex-col" }, yw = ["data-state", "data-collapsible", "data-variant", "data-side"], bw = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Px = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(t) {
    const e = t, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = So();
    return (l, i) => l.collapsible === "none" ? (f(), L("div", O({
      key: 0,
      class: r(V)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", e.class)
    }, l.$attrs), [
      w(l.$slots, "default")
    ], 16)) : r(a) ? (f(), _(r(lw), O({
      key: 1,
      open: r(o)
    }, l.$attrs, { "onUpdate:open": r(s) }), {
      default: v(() => [
        E(r(iw), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: l.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: dt({
            "--sidebar-width": r(fw)
          })
        }, {
          default: v(() => [
            ve("div", gw, [
              w(l.$slots, "default", { state: r(n) })
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (f(), L("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": r(n),
      "data-collapsible": r(n) === "collapsed" ? l.collapsible : "",
      "data-variant": l.variant,
      "data-side": l.side
    }, [
      ve("div", {
        class: G(
          r(V)(
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            l.variant === "floating" || l.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      ve("div", O({
        class: r(V)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          l.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          l.variant === "floating" || l.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          e.class
        )
      }, l.$attrs), [
        ve("div", bw, [
          w(l.$slots, "default", { state: r(n) })
        ])
      ], 16)
    ], 8, yw));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "content",
      class: G(
        r(V)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Mx = /* @__PURE__ */ b({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "footer",
      class: G(r(V)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Tx = /* @__PURE__ */ b({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group",
      class: G(r(V)("relative flex w-full min-w-0 flex-col p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ix = /* @__PURE__ */ b({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: G(
        r(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Vx = /* @__PURE__ */ b({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group-content",
      class: G(r(V)("w-full text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Rx = /* @__PURE__ */ b({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: G(
        r(V)(
          "ring-sidebar-ring text-sidebar-foreground/70 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          e.class
        )
      )
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Fx = /* @__PURE__ */ b({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "header",
      class: G(r(V)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Lx = /* @__PURE__ */ b({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(P_, {
      "data-sidebar": "input",
      class: G(
        r(V)(
          "focus-visible:ring-sidebar-ring bg-background h-8 w-full shadow-none focus-visible:ring-2",
          e.class
        )
      )
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nx = /* @__PURE__ */ b({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("main", {
      class: G(
        r(V)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), jx = /* @__PURE__ */ b({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu",
      class: G(r(V)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), zx = /* @__PURE__ */ b({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), {
      "data-sidebar": "menu-action",
      class: G(
        r(V)(
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
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), Wx = /* @__PURE__ */ b({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "menu-badge",
      class: G(
        r(V)(
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
}), _w = /* @__PURE__ */ b({
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
    const o = ie(t, e);
    return (s, l) => (f(), _(r($g), U(q(r(o))), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ww = /* @__PURE__ */ b({
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
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(Og), null, {
      default: v(() => [
        E(r(kg), O({ ...r(s), ...l.$attrs }, {
          class: r(V)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            a.class
          )
        }), {
          default: v(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Kx = /* @__PURE__ */ b({
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
    return (a, n) => (f(), _(r(ku), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xw = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(Sg), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bl = /* @__PURE__ */ b({
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
    return (a, n) => (f(), _(r(j), O({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: r(V)(r(Sw)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Ux = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    as: {},
    variant: {},
    size: {},
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    tooltip: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t, { isMobile: a, state: n } = So(), o = C(() => {
      const { tooltip: s, ...l } = e;
      return l;
    });
    return (s, l) => s.tooltip ? (f(), _(r(_w), { key: 1 }, {
      default: v(() => [
        E(r(xw), { "as-child": "" }, {
          default: v(() => [
            E(Bl, U(q({ ...o.value, ...s.$attrs })), {
              default: v(() => [
                w(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(r(ww), {
          side: "right",
          align: "center",
          hidden: r(n) !== "collapsed" || r(a)
        }, {
          default: v(() => [
            typeof s.tooltip == "string" ? (f(), L(ne, { key: 0 }, [
              Z(re(s.tooltip), 1)
            ], 64)) : (f(), _(Ne(s.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (f(), _(Bl, U(O({ key: 0 }, { ...o.value, ...s.$attrs })), {
      default: v(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hx = /* @__PURE__ */ b({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      "data-sidebar": "menu-item",
      class: G(r(V)("group/menu-item relative", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), kl = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(r(V)("bg-skeleton animate-pulse rounded-md", e.class))
    }, null, 2));
  }
}), Gx = /* @__PURE__ */ b({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (f(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: G(r(V)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (f(), _(kl, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : oe("", !0),
      E(kl, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: dt({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), qx = /* @__PURE__ */ b({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu-badge",
      class: G(
        r(V)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Yx = /* @__PURE__ */ b({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(j), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: G(
        r(V)(
          "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground text-sidebar-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          a.size === "sm" && "text-xs",
          a.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), Cw = {};
function $w(t, e) {
  return f(), L("li", null, [
    w(t.$slots, "default")
  ]);
}
const Jx = /* @__PURE__ */ hn(Cw, [["render", $w]]), Qx = /* @__PURE__ */ b({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = nd("(max-width: 768px)"), s = P(!1), l = Or(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      l.value = p, document.cookie = `${dw}=${l.value}; path=/; max-age=${cw}`;
    }
    function u(p) {
      s.value = p;
    }
    function c() {
      return o.value ? u(!s.value) : i(!l.value);
    }
    Xn("keydown", (p) => {
      p.key === mw && (p.metaKey || p.ctrlKey) && (p.preventDefault(), c());
    });
    const d = C(() => l.value ? "expanded" : "collapsed");
    return hw({
      state: d,
      open: l,
      setOpen: i,
      isMobile: o,
      openMobile: s,
      setOpenMobile: u,
      toggleSidebar: c
    }), (p, g) => (f(), _(r(ku), { "delay-duration": 0 }, {
      default: v(() => [
        ve("div", O({
          style: {
            "--sidebar-width": r(pw),
            "--sidebar-width-icon": r(vw)
          },
          class: r(V)(
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
}), Xx = /* @__PURE__ */ b({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = So();
    return (n, o) => (f(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: G(
        r(V)(
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
      (...s) => r(a) && r(a)(...s))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), Zx = /* @__PURE__ */ b({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(rw, {
      "data-sidebar": "separator",
      class: G(r(V)("bg-sidebar-border mx-2 w-auto", e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), eC = /* @__PURE__ */ b({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = So();
    return (n, o) => (f(), _(kt, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: G(r(V)("h-7 w-7", e.class)),
      onClick: r(a)
    }, {
      default: v(() => [
        E(r(by)),
        o[0] || (o[0] = ve("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), Sw = aa(
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
), tC = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(Kh), O({
      class: r(V)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, r(s)), {
      default: v(() => [
        E(r(Gh), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: v(() => [
            E(r(qh), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (f(!0), L(ne, null, be(l.modelValue, (u, c) => (f(), _(r(Hh), {
          key: c,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Bw = 5, kw = 5e6, _t = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Go = 0;
function Ow() {
  return Go = (Go + 1) % Number.MAX_VALUE, Go.toString();
}
const qo = /* @__PURE__ */ new Map();
function Ol(t) {
  if (qo.has(t)) return;
  const e = setTimeout(() => {
    qo.delete(t), Ga({
      type: _t.REMOVE_TOAST,
      toastId: t
    });
  }, kw);
  qo.set(t, e);
}
const Xe = P({
  toasts: []
});
function Ga(t) {
  switch (t.type) {
    case _t.ADD_TOAST:
      Xe.value.toasts = [t.toast, ...Xe.value.toasts].slice(0, Bw);
      break;
    case _t.UPDATE_TOAST:
      Xe.value.toasts = Xe.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case _t.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? Ol(e) : Xe.value.toasts.forEach((a) => {
        Ol(a.id);
      }), Xe.value.toasts = Xe.value.toasts.map(
        (a) => a.id === e || e === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case _t.REMOVE_TOAST:
      t.toastId === void 0 ? Xe.value.toasts = [] : Xe.value.toasts = Xe.value.toasts.filter((e) => e.id !== t.toastId);
      break;
  }
}
function Dw() {
  return {
    toasts: C(() => Xe.value.toasts),
    toast: Ew,
    dismiss: (t) => Ga({ type: _t.DISMISS_TOAST, toastId: t })
  };
}
function Ew(t) {
  const e = Ow(), a = (o) => Ga({
    type: _t.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => Ga({ type: _t.DISMISS_TOAST, toastId: e });
  return Ga({
    type: _t.ADD_TOAST,
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
const Pw = { class: "flex gap-3" }, Aw = { class: "grid gap-1" }, aC = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = Dw();
    return (a, n) => (f(), _(r(Rw), null, {
      default: v(() => [
        (f(!0), L(ne, null, be(r(e), (o) => (f(), _(r(Mw), O({
          key: o.id
        }, { ref_for: !0 }, o, { class: "my-1" }), {
          default: v(() => [
            ve("div", Pw, [
              (f(), _(Ne(o.icon), {
                class: G(r(V)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              ve("div", Aw, [
                o.title ? (f(), _(r(Vw), { key: 0 }, {
                  default: v(() => [
                    Z(re(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : oe("", !0),
                o.description ? (f(), L(ne, { key: 1 }, [
                  bd(o.description) ? (f(), _(r(Dl), { key: 0 }, {
                    default: v(() => [
                      (f(), _(Ne(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (f(), _(r(Dl), { key: 1 }, {
                    default: v(() => [
                      Z(re(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : oe("", !0),
                E(r(Iw))
              ]),
              (f(), _(Ne(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        E(r(Tw))
      ]),
      _: 1
    }));
  }
}), Mw = /* @__PURE__ */ b({
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
    as: { type: [String, Object, Function] }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = C(() => {
      const { class: l, ...i } = a;
      return i;
    }), s = ie(o, n);
    return (l, i) => (f(), _(r(gg), O(r(s), {
      class: r(V)(r(Fw)({ variant: l.variant }), a.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Tw = /* @__PURE__ */ b({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(bg), O(a.value, {
      class: r(V)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), nC = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    variant: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(yg), U(q(a.value)), {
      default: v(() => [
        E(r(kt), {
          variant: n.variant,
          class: G(e.class)
        }, {
          default: v(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["variant", "class"])
      ]),
      _: 3
    }, 16));
  }
}), Iw = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(Su), O(a.value, {
      class: r(V)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        e.class
      )
    }), {
      default: v(() => [
        E(r(wo), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Vw = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(_g), O(a.value, {
      class: r(V)("text-sm font-semibold", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dl = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: n, ...o } = e;
      return o;
    });
    return (n, o) => (f(), _(r(wg), O({
      class: r(V)("text-sm opacity-90", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rw = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(r(lg), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fw = aa(
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
  qw as Accordion,
  Yw as AccordionContent,
  Jw as AccordionItem,
  Qw as AccordionTrigger,
  Xw as Alert,
  Zw as AlertDescription,
  e1 as AlertTitle,
  t1 as Badge,
  sa as Base,
  q0 as BaseDropdownMenuItem,
  a1 as Breadcrumb,
  n1 as BreadcrumbEllipsis,
  o1 as BreadcrumbItem,
  s1 as BreadcrumbLink,
  r1 as BreadcrumbList,
  l1 as BreadcrumbPage,
  i1 as BreadcrumbSeparator,
  kt as Button,
  E1 as Calendar,
  Uu as CalendarCell,
  Hu as CalendarCellTrigger,
  Gu as CalendarGrid,
  qu as CalendarGridBody,
  Yu as CalendarGridHead,
  Qn as CalendarGridRow,
  Ju as CalendarHeadCell,
  Qu as CalendarHeader,
  Xu as CalendarHeading,
  s0 as CalendarNextButton,
  r0 as CalendarPrevButton,
  F0 as CalendarWithSelect,
  u1 as Card,
  f1 as CardContent,
  p1 as CardDescription,
  v1 as CardFooter,
  d1 as CardHeader,
  c1 as CardTitle,
  t_ as CharacterCount,
  ox as Checkbox,
  hx as CollapsibleTableRow,
  x1 as Combobox,
  C1 as ComboboxAnchor,
  y1 as ComboboxCancel,
  $1 as ComboboxEmpty,
  S1 as ComboboxGroup,
  B1 as ComboboxInput,
  k1 as ComboboxItem,
  _1 as ComboboxItemIndicator,
  O1 as ComboboxList,
  D1 as ComboboxSeparator,
  w1 as ComboboxTrigger,
  L0 as Command,
  R1 as CommandDialog,
  F1 as CommandEmpty,
  L1 as CommandGroup,
  N1 as CommandInput,
  j1 as CommandItem,
  z1 as CommandList,
  W1 as CommandSeparator,
  K1 as CommandShortcut,
  sx as DatePicker,
  s_ as Description,
  sd as Dialog,
  I1 as DialogClose,
  rd as DialogContent,
  W0 as DialogDescription,
  K0 as DialogFooter,
  j0 as DialogHeader,
  V1 as DialogScrollContent,
  z0 as DialogTitle,
  N0 as DialogTrigger,
  G0 as DropdownMenu,
  q1 as DropdownMenuCheckboxItem,
  J0 as DropdownMenuContent,
  U1 as DropdownMenuGroup,
  G1 as DropdownMenuItem,
  X1 as DropdownMenuLabel,
  Q0 as DropdownMenuLink,
  dm as DropdownMenuPortal,
  H1 as DropdownMenuRadioGroup,
  Y1 as DropdownMenuRadioItem,
  Q1 as DropdownMenuSeparator,
  J1 as DropdownMenuShortcut,
  Z1 as DropdownMenuSub,
  tx as DropdownMenuSubContent,
  ex as DropdownMenuSubTrigger,
  Y0 as DropdownMenuTrigger,
  l_ as Error,
  ax as Form,
  v_ as FormElement,
  nx as FormGrid,
  rx as ImageUpload,
  P_ as Input,
  ld as Label,
  bx as LumuixDatatable,
  _x as LumuixModal,
  mx as LumuixModeToggle,
  Cx as LumuixTabs,
  Uw as Pagination,
  ux as PaginationDetails,
  dx as PaginationEllipsis,
  cx as PaginationFirst,
  px as PaginationLast,
  Hw as PaginationList,
  Gw as PaginationListItem,
  fx as PaginationNext,
  vx as PaginationPrev,
  b_ as Popover,
  w_ as PopoverContent,
  __ as PopoverTrigger,
  $x as RangeCalendar,
  J_ as RangeCalendarCell,
  Q_ as RangeCalendarCellTrigger,
  X_ as RangeCalendarGrid,
  Z_ as RangeCalendarGridBody,
  ew as RangeCalendarGridHead,
  Sl as RangeCalendarGridRow,
  tw as RangeCalendarHeadCell,
  aw as RangeCalendarHeader,
  nw as RangeCalendarHeading,
  ow as RangeCalendarNextButton,
  sw as RangeCalendarPrevButton,
  lx as Select,
  _s as SelectContent,
  P1 as SelectGroup,
  ws as SelectItem,
  A1 as SelectItemText,
  M1 as SelectLabel,
  gs as SelectRoot,
  V0 as SelectScrollDownButton,
  I0 as SelectScrollUpButton,
  T1 as SelectSeparator,
  bs as SelectTrigger,
  ys as SelectValue,
  rw as Separator,
  lw as Sheet,
  Sx as SheetClose,
  iw as SheetContent,
  Bx as SheetDescription,
  kx as SheetFooter,
  Ox as SheetHeader,
  Dx as SheetTitle,
  Ex as SheetTrigger,
  Px as Sidebar,
  Ax as SidebarContent,
  Mx as SidebarFooter,
  Tx as SidebarGroup,
  Ix as SidebarGroupAction,
  Vx as SidebarGroupContent,
  Rx as SidebarGroupLabel,
  Fx as SidebarHeader,
  Lx as SidebarInput,
  Nx as SidebarInset,
  jx as SidebarMenu,
  zx as SidebarMenuAction,
  Wx as SidebarMenuBadge,
  Ux as SidebarMenuButton,
  Hx as SidebarMenuItem,
  Gx as SidebarMenuSkeleton,
  qx as SidebarMenuSub,
  Yx as SidebarMenuSubButton,
  Jx as SidebarMenuSubItem,
  Qx as SidebarProvider,
  Xx as SidebarRail,
  Zx as SidebarSeparator,
  eC as SidebarTrigger,
  kl as Skeleton,
  tC as Slider,
  q_ as TabBaseContent,
  V_ as Table,
  R_ as TableBody,
  N_ as TableCaption,
  Zn as TableCell,
  yx as TableEmpty,
  gx as TableFooter,
  F_ as TableHead,
  L_ as TableHeader,
  en as TableRow,
  xs as TableRowAction,
  xx as TabsContent,
  K_ as TabsItem,
  $l as TabsList,
  W_ as TabsRoot,
  wx as TabsTrigger,
  ix as TextArea,
  Mw as Toast,
  nC as ToastAction,
  Iw as ToastClose,
  Dl as ToastDescription,
  Rw as ToastProvider,
  Vw as ToastTitle,
  Tw as ToastViewport,
  aC as Toaster,
  M_ as Toggle,
  _w as Tooltip,
  ww as TooltipContent,
  Kx as TooltipProvider,
  xw as TooltipTrigger,
  xy as alertVariants,
  Cy as badgeVariants,
  na as buttonVariants,
  uw as sheetVariants,
  Sw as sidebarMenuButtonVariants,
  $y as spinnerSize,
  Ew as toast,
  Fw as toastVariants,
  So as useSidebar,
  Dw as useToast
};
