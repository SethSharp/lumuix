var Er = (t) => {
  throw TypeError(t);
};
var cd = (t, e, a) => e.has(t) || Er("Cannot " + a);
var La = (t, e, a) => (cd(t, e, "read from private field"), a ? a.call(t) : e.get(t)), Pr = (t, e, a) => e.has(t) ? Er("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a);
import * as fa from "vue";
import { computed as C, ref as D, shallowRef as Ct, watch as X, getCurrentScope as to, onScopeDispose as ao, shallowReadonly as ia, unref as s, defineComponent as b, toRefs as me, createBlock as _, openBlock as f, withCtx as v, renderSlot as w, getCurrentInstance as Ee, toRef as $s, camelize as no, withKeys as Te, h as Ie, onMounted as de, createElementVNode as he, toDisplayString as re, normalizeProps as U, guardReactiveProps as q, createTextVNode as Z, mergeProps as O, withModifiers as $e, createCommentVNode as oe, createElementBlock as L, Fragment as ne, renderList as _e, resolveDynamicComponent as je, createVNode as P, useSlots as Pl, onBeforeMount as pd, Teleport as an, watchEffect as be, onBeforeUnmount as oo, nextTick as ae, withDirectives as Qt, vShow as so, watchSyncEffect as Al, isRef as tt, inject as nn, provide as ro, toHandlers as fd, normalizeStyle as ct, toHandlerKey as Ml, Comment as Ss, cloneVNode as Tl, vModelSelect as vd, onBeforeUpdate as md, onUpdated as hd, markRaw as Il, onUnmounted as Ve, readonly as Ba, toRaw as gd, reactive as qa, customRef as Bs, mergeDefaults as ks, watchPostEffect as Os, effectScope as Ds, normalizeClass as G, toValue as Se, withMemo as yd, hasInjectionContext as Fl, mergeModels as Jo, useModel as Rl, vModelDynamic as bd, vModelText as _d, isVNode as wd } from "vue";
function va(t, e) {
  return t - e * Math.floor(t / e);
}
const Vl = 1721426;
function Gt(t, e, a, n) {
  e = on(t, e);
  let o = e - 1, r = -2;
  return a <= 2 ? r = 0 : Rt(e) && (r = -1), Vl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + r + n);
}
function Rt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function on(t, e) {
  return t === "BC" ? 1 - e : e;
}
function lo(t) {
  let e = "AD";
  return t <= 0 && (e = "BC", t = 1 - t), [
    e,
    t
  ];
}
const xd = {
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
class at {
  fromJulianDay(e) {
    let a = e, n = a - Vl, o = Math.floor(n / 146097), r = va(n, 146097), l = Math.floor(r / 36524), i = va(r, 36524), u = Math.floor(i / 1461), d = va(i, 1461), c = Math.floor(d / 365), p = o * 400 + l * 100 + u * 4 + c + (l !== 4 && c !== 4 ? 1 : 0), [g, m] = lo(p), h = a - Gt(g, m, 1, 1), y = 2;
    a < Gt(g, m, 3, 1) ? y = 0 : Rt(m) && (y = 1);
    let x = Math.floor(((h + y) * 12 + 373) / 367), $ = a - Gt(g, m, x, 1) + 1;
    return new ke(g, m, x, $);
  }
  toJulianDay(e) {
    return Gt(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return xd[Rt(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return Rt(e.year) ? 366 : 365;
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
const Cd = {
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
  return e = ze(e, t.calendar), t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Es(t, e) {
  return e = ze(e, t.calendar), t = Ya(t), e = Ya(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function lt(t, e) {
  return Ps(t.calendar, e.calendar) && Pe(t, e);
}
function Ar(t, e) {
  return Ps(t.calendar, e.calendar) && Es(t, e);
}
function Ps(t, e) {
  var a, n, o, r;
  return (r = (o = (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && o !== void 0 ? o : (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && r !== void 0 ? r : t.identifier === e.identifier;
}
function Ll(t, e) {
  return Pe(t, Ln(e));
}
function Nl(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = kd(e), r = Math.ceil(n + 1 - o) % 7;
  return r < 0 && (r += 7), r;
}
function $d(t) {
  return _t(Date.now(), t);
}
function Ln(t) {
  return Ed($d(t));
}
function zl(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Sd(t, e) {
  return Mr(t) - Mr(e);
}
function Mr(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let Oo = null;
function St() {
  return Oo == null && (Oo = new Intl.DateTimeFormat().resolvedOptions().timeZone), Oo;
}
function Ya(t) {
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
function Bd(t) {
  if (Intl.Locale) {
    let a = Ir.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Ir.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function kd(t) {
  let e = Bd(t);
  return e && Cd[e] || 0;
}
function ba(t) {
  t = ze(t, new at());
  let e = on(t.era, t.year);
  return jl(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function jl(t, e, a, n, o, r, l) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, r, l), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function Qo(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === St()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: r, minute: l, second: i } = Wl(t, e);
  return jl(a, n, o, r, l, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const Fr = /* @__PURE__ */ new Map();
function Wl(t, e) {
  let a = Fr.get(e);
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
  }), Fr.set(e, a));
  let n = a.formatToParts(new Date(t)), o = {};
  for (let r of n) r.type !== "literal" && (o[r.type] = r.value);
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
function Od(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((r) => Dd(t, e, r));
}
function Dd(t, e, a) {
  let n = Wl(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function bt(t, e, a = "compatible") {
  let n = _a(t);
  if (e === "UTC") return ba(n);
  if (e === St() && a === "compatible") {
    n = ze(n, new at());
    let u = /* @__PURE__ */ new Date(), d = on(n.era, n.year);
    return u.setFullYear(d, n.month - 1, n.day), u.setHours(n.hour, n.minute, n.second, n.millisecond), u.getTime();
  }
  let o = ba(n), r = Qo(o - Rr, e), l = Qo(o + Rr, e), i = Od(n, e, o - r, o - l);
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
      return Math.min(o - r, o - l);
    case "compatible":
    case "later":
      return Math.max(o - r, o - l);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function Kl(t, e, a = "compatible") {
  return new Date(bt(t, e, a));
}
function _t(t, e) {
  let a = Qo(t, e), n = new Date(t + a), o = n.getUTCFullYear(), r = n.getUTCMonth() + 1, l = n.getUTCDate(), i = n.getUTCHours(), u = n.getUTCMinutes(), d = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new xa(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, r, l, e, a, i, u, d, c);
}
function Ed(t) {
  return new ke(t.calendar, t.era, t.year, t.month, t.day);
}
function _a(t, e) {
  let a = 0, n = 0, o = 0, r = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: r } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: r } = e), new wa(t.calendar, t.era, t.year, t.month, t.day, a, n, o, r);
}
function ze(t, e) {
  if (Ps(t.calendar, e)) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, Yt(n), n;
}
function Pd(t, e, a) {
  if (t instanceof xa)
    return t.timeZone === e ? t : Md(t, e);
  let n = bt(t, e, a);
  return _t(n, e);
}
function Ad(t) {
  let e = ba(t) - t.offset;
  return new Date(e);
}
function Md(t, e) {
  let a = ba(t) - t.offset;
  return ze(_t(a, e), t.calendar);
}
const Na = 36e5;
function io(t, e) {
  let a = t.copy(), n = "hour" in a ? Rd(a, e) : 0;
  Xo(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, Zo(a), Ul(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, Td(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
  let o = a.calendar.getYearsInEra(a);
  if (a.year > o) {
    var r, l;
    let u = (r = (l = a.calendar).isInverseEra) === null || r === void 0 ? void 0 : r.call(l, a);
    a.year = o, a.month = u ? 1 : a.calendar.getMonthsInYear(a), a.day = u ? 1 : a.calendar.getDaysInMonth(a);
  }
  a.month < 1 && (a.month = 1, a.day = 1);
  let i = a.calendar.getMonthsInYear(a);
  return a.month > i && (a.month = i, a.day = a.calendar.getDaysInMonth(a)), a.day = Math.max(1, Math.min(a.calendar.getDaysInMonth(a), a.day)), a;
}
function Xo(t, e) {
  var a, n;
  !((a = (n = t.calendar).isInverseEra) === null || a === void 0) && a.call(n, t) && (e = -e), t.year += e;
}
function Zo(t) {
  for (; t.month < 1; )
    Xo(t, -1), t.month += t.calendar.getMonthsInYear(t);
  let e = 0;
  for (; t.month > (e = t.calendar.getMonthsInYear(t)); )
    t.month -= e, Xo(t, 1);
}
function Td(t) {
  for (; t.day < 1; )
    t.month--, Zo(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, Zo(t);
}
function Ul(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function Yt(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), Ul(t);
}
function Hl(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function Gl(t, e) {
  return io(t, Hl(e));
}
function As(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), Yt(a), a;
}
function Nn(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), Fd(a), a;
}
function Id(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = yn(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = yn(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = yn(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = yn(t.hour, 24), e;
}
function Fd(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function yn(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function Rd(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, Id(t);
}
function Ms(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "era": {
      let i = t.calendar.getEras(), u = i.indexOf(t.era);
      if (u < 0) throw new Error("Invalid era: " + t.era);
      u = wt(u, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[u], Yt(o);
      break;
    }
    case "year":
      var r, l;
      !((r = (l = o.calendar).isInverseEra) === null || r === void 0) && r.call(l, o) && (a = -a), o.year = wt(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
      break;
    case "month":
      o.month = wt(t.month, a, 1, t.calendar.getMonthsInYear(t), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = wt(t.day, a, 1, t.calendar.getDaysInMonth(t), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return t.calendar.balanceDate && t.calendar.balanceDate(o), Yt(o), o;
}
function ql(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let r = t.hour, l = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let u = r >= 12;
        l = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = wt(r, a, l, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = wt(t.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = wt(t.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = wt(t.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return o;
}
function wt(t, e, a, n, o = !1) {
  if (o) {
    t += Math.sign(e), t < a && (t = n);
    let r = Math.abs(e);
    e > 0 ? t = Math.ceil(t / r) * r : t = Math.floor(t / r) * r, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function Yl(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = io(_a(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = bt(o, t.timeZone);
  } else
    a = ba(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = _t(a, t.timeZone);
  return ze(n, t.calendar);
}
function Vd(t, e) {
  return Yl(t, Hl(e));
}
function Ld(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, r = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let h = t.hour >= 12;
        o = h ? 12 : 0, r = h ? 23 : 11;
      }
      let l = _a(t), i = ze(Nn(l, {
        hour: o
      }), new at()), u = [
        bt(i, t.timeZone, "earlier"),
        bt(i, t.timeZone, "later")
      ].filter((h) => _t(h, t.timeZone).day === i.day)[0], d = ze(Nn(l, {
        hour: r
      }), new at()), c = [
        bt(d, t.timeZone, "earlier"),
        bt(d, t.timeZone, "later")
      ].filter((h) => _t(h, t.timeZone).day === d.day).pop(), p = ba(t) - t.offset, g = Math.floor(p / Na), m = p % Na;
      return p = wt(g, a, Math.floor(u / Na), Math.floor(c / Na), n == null ? void 0 : n.round) * Na + m, ze(_t(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return ql(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = Ms(_a(t), e, a, n), r = bt(o, t.timeZone);
      return ze(_t(r, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function Nd(t, e, a) {
  let n = _a(t), o = Nn(As(n, e), e);
  if (o.compare(n) === 0) return t;
  let r = bt(o, t.timeZone, a);
  return ze(_t(r, t.timeZone), t.calendar);
}
function zd(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function Jl(t) {
  let e = ze(t, new at()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function Ql(t) {
  return `${Jl(t)}T${zd(t)}`;
}
function jd(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Wd(t) {
  return `${Ql(t)}${jd(t.offset)}[${t.timeZone}]`;
}
function Kd(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ts(t, e, a) {
  Kd(t, e), e.set(t, a);
}
function Is(t) {
  let e = typeof t[0] == "object" ? t.shift() : new at(), a;
  if (typeof t[0] == "string") a = t.shift();
  else {
    let l = e.getEras();
    a = l[l.length - 1];
  }
  let n = t.shift(), o = t.shift(), r = t.shift();
  return [
    e,
    a,
    n,
    o,
    r
  ];
}
var Ud = /* @__PURE__ */ new WeakMap();
class ke {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new ke(this.calendar, this.era, this.year, this.month, this.day) : new ke(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(e) {
    return io(this, e);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(e) {
    return Gl(this, e);
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
    return Kl(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Jl(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return zl(this, e);
  }
  constructor(...e) {
    Ts(this, Ud, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = Is(e);
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, Yt(this);
  }
}
var Hd = /* @__PURE__ */ new WeakMap();
class wa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new wa(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new wa(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return io(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Gl(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return As(Nn(this, e), e);
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
        return ql(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return Kl(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return Ql(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = zl(this, e);
    return a === 0 ? Sd(this, _a(e)) : a;
  }
  constructor(...e) {
    Ts(this, Hd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = Is(e);
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Yt(this);
  }
}
var Gd = /* @__PURE__ */ new WeakMap();
class xa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new xa(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new xa(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return Yl(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return Vd(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return Nd(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return Ld(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return Ad(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return Wd(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Pd(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Ts(this, Gd, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = Is(e), i = e.shift(), u = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, this.timeZone = i, this.offset = u, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Yt(this);
  }
}
const ma = [
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
], qd = [
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
], Mn = [
  1867,
  1911,
  1925,
  1988,
  2018
], Ft = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Vr(t) {
  const e = ma.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? ma.length - 1 : e === 0 ? 0 : e - 1;
}
function Do(t) {
  let e = Mn[Ft.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new ke(t.year + e, t.month, t.day);
}
class Yd extends at {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Vr(a);
    return new ke(this, Ft[n], a.year - Mn[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Do(e));
  }
  balanceDate(e) {
    let a = Do(e), n = Vr(a);
    Ft[n] !== e.era && (e.era = Ft[n], e.year = a.year - Mn[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = Ft.indexOf(e.era), n = qd[a];
    if (n != null) {
      let [o, r, l] = n, i = o - Mn[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(r, e.month), e.month === r && (e.day = Math.min(l, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, r] = ma[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(r, e.day));
    }
  }
  getEras() {
    return Ft;
  }
  getYearsInEra(e) {
    let a = Ft.indexOf(e.era), n = ma[a], o = ma[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let r = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && r++, r;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Do(e));
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
    let e = Ft.indexOf(t.era);
    return ma[e];
  }
}
const Xl = -543;
class Jd extends at {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = on(a.era, a.year);
    return new ke(this, n - Xl, a.month, a.day);
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
  let [e, a] = lo(t.year + Xl);
  return new ke(e, a, t.month, t.day);
}
const zn = 1911;
function Zl(t) {
  return t.era === "minguo" ? t.year + zn : 1 - t.year + zn;
}
function zr(t) {
  let e = t - zn;
  return e > 0 ? [
    "minguo",
    e
  ] : [
    "before_minguo",
    1 - e
  ];
}
class Qd extends at {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = on(a.era, a.year), [o, r] = zr(n);
    return new ke(this, o, r, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(jr(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = zr(Zl(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(jr(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - zn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function jr(t) {
  let [e, a] = lo(Zl(t));
  return new ke(e, a, t.month, t.day);
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
class Xd {
  fromJulianDay(e) {
    let a = e - Wr, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), r = a - o, l = r < 216 ? Math.floor(r / 31) : Math.floor((r - 6) / 30), i = r - Kr[l] + 1;
    return new ke(this, n, l + 1, i);
  }
  toJulianDay(e) {
    let a = Wr - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += Kr[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || va(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Eo = 78, Ur = 80;
class Zd extends at {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Eo, o = e - Gt(a.era, a.year, 1, 1), r;
    o < Ur ? (n--, r = Rt(a.year - 1) ? 31 : 30, o += r + 155 + 90 + 10) : (r = Rt(a.year) ? 31 : 30, o -= Ur);
    let l, i;
    if (o < r)
      l = 1, i = o + 1;
    else {
      let u = o - r;
      u < 155 ? (l = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new ke(this, n, l, i);
  }
  toJulianDay(e) {
    let a = e.year + Eo, [n, o] = lo(a), r, l;
    return Rt(o) ? (r = 31, l = Gt(n, o, 3, 21)) : (r = 30, l = Gt(n, o, 3, 22)), e.month === 1 ? l + e.day - 1 : (l += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (l += (e.month - 7) * 30), l += e.day - 1, l);
  }
  getDaysInMonth(e) {
    return e.month === 1 && Rt(e.year + Eo) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
const jn = 1948440, Hr = 1948439, qe = 1300, ua = 1600, ec = 460322;
function Wn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function ei(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + Wn(e, n, 1, 1))) / 29.5) + 1), r = a - Wn(e, n, o, 1) + 1;
  return new ke(t, n, o, r);
}
function Gr(t) {
  return (14 + 11 * t) % 30 < 11;
}
class Fs {
  fromJulianDay(e) {
    return ei(this, jn, e);
  }
  toJulianDay(e) {
    return Wn(jn, e.year, e.month, e.day);
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
class tc extends Fs {
  fromJulianDay(e) {
    return ei(this, Hr, e);
  }
  toJulianDay(e) {
    return Wn(Hr, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const ac = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let es, ha;
function Tn(t) {
  return ec + ha[t - qe];
}
function Wa(t, e) {
  let a = t - qe, n = 1 << 11 - (e - 1);
  return es[a] & n ? 30 : 29;
}
function qr(t, e) {
  let a = Tn(t);
  for (let n = 1; n < e; n++) a += Wa(t, n);
  return a;
}
function Yr(t) {
  return ha[t + 1 - qe] - ha[t - qe];
}
class nc extends Fs {
  fromJulianDay(e) {
    let a = e - jn, n = Tn(qe), o = Tn(ua);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let r = qe - 1, l = 1, i = 1;
      for (; i > 0; ) {
        r++, i = a - Tn(r) + 1;
        let u = Yr(r);
        if (i === u) {
          l = 12;
          break;
        } else if (i < u) {
          let d = Wa(r, l);
          for (l = 1; i > d; )
            i -= d, l++, d = Wa(r, l);
          break;
        }
      }
      return new ke(this, r, l, a - qr(r, l) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < qe || e.year > ua ? super.toJulianDay(e) : jn + qr(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < qe || e.year > ua ? super.getDaysInMonth(e) : Wa(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < qe || e.year > ua ? super.getDaysInYear(e) : Yr(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", es || (es = new Uint16Array(Uint8Array.from(atob(ac), (e) => e.charCodeAt(0)).buffer)), !ha) {
      ha = new Uint32Array(ua - qe + 1);
      let e = 0;
      for (let a = qe; a <= ua; a++) {
        ha[a - qe] = e;
        for (let n = 1; n <= 12; n++) e += Wa(a, n);
      }
    }
  }
}
const Jr = 347997, ti = 1080, ai = 24 * ti, oc = 29, sc = 12 * ti + 793, rc = oc * ai + sc;
function Ht(t) {
  return va(t * 7 + 1, 19) < 7;
}
function In(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return va(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function lc(t) {
  let e = In(t - 1), a = In(t);
  return In(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function Ua(t) {
  return In(t) + lc(t);
}
function ni(t) {
  return Ua(t + 1) - Ua(t);
}
function ic(t) {
  let e = ni(t);
  switch (e > 380 && (e -= 30), e) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function bn(t, e) {
  if (e >= 6 && !Ht(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = ic(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? Ht(t) ? 30 : 0 : 30;
}
class uc {
  fromJulianDay(e) {
    let a = e - Jr, n = a * ai / rc, o = Math.floor((19 * n + 234) / 235) + 1, r = Ua(o), l = Math.floor(a - r);
    for (; l < 1; )
      o--, r = Ua(o), l = Math.floor(a - r);
    let i = 1, u = 0;
    for (; u < l; )
      u += bn(o, i), i++;
    i--, u -= bn(o, i);
    let d = l - u;
    return new ke(this, o, i, d);
  }
  toJulianDay(e) {
    let a = Ua(e.year);
    for (let n = 1; n < e.month; n++) a += bn(e.year, n);
    return a + e.day + Jr;
  }
  getDaysInMonth(e) {
    return bn(e.year, e.month);
  }
  getMonthsInYear(e) {
    return Ht(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return ni(e.year);
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
const ts = 1723856, Qr = 1824665, as = 5500;
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
function oi(t) {
  return Math.floor(t % 4 / 3);
}
function si(t, e) {
  return e % 13 !== 0 ? 30 : oi(t) + 5;
}
class Vs {
  fromJulianDay(e) {
    let [a, n, o] = Rs(ts, e), r = "AM";
    return a <= 0 && (r = "AA", a += as), new ke(this, r, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "AA" && (a -= as), Kn(ts, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    return si(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + oi(e.year);
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
class dc extends Vs {
  fromJulianDay(e) {
    let [a, n, o] = Rs(ts, e);
    return a += as, new ke(this, "AA", a, n, o);
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
class cc extends Vs {
  fromJulianDay(e) {
    let [a, n, o] = Rs(Qr, e), r = "CE";
    return a <= 0 && (r = "BCE", a = 1 - a), new ke(this, r, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), Kn(Qr, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), si(a, e.month);
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
function pc(t) {
  switch (t) {
    case "buddhist":
      return new Jd();
    case "ethiopic":
      return new Vs();
    case "ethioaa":
      return new dc();
    case "coptic":
      return new cc();
    case "hebrew":
      return new uc();
    case "indian":
      return new Zd();
    case "islamic-civil":
      return new Fs();
    case "islamic-tbla":
      return new tc();
    case "islamic-umalqura":
      return new nc();
    case "japanese":
      return new Yd();
    case "persian":
      return new Xd();
    case "roc":
      return new Qd();
    case "gregory":
    default:
      return new at();
  }
}
let Po = /* @__PURE__ */ new Map();
class rt {
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
      ...n.map((r) => ({
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
    let e = this.formatter.resolvedOptions();
    return mc() && (this.resolvedHourCycle || (this.resolvedHourCycle = hc(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
  }
  constructor(e, a = {}) {
    this.formatter = ri(e, a), this.options = a;
  }
}
const fc = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function ri(t, e = {}) {
  if (typeof e.hour12 == "boolean" && vc()) {
    e = {
      ...e
    };
    let o = fc[String(e.hour12)][t.split("-")[0]], r = e.hour12 ? "h12" : "h23";
    e.hourCycle = o ?? r, delete e.hour12;
  }
  let a = t + (e ? Object.entries(e).sort((o, r) => o[0] < r[0] ? -1 : 1).join() : "");
  if (Po.has(a)) return Po.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return Po.set(a, n), n;
}
let Ao = null;
function vc() {
  return Ao == null && (Ao = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Ao;
}
let Mo = null;
function mc() {
  return Mo == null && (Mo = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Mo;
}
function hc(t, e) {
  if (!e.timeStyle && !e.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = ri(t, {
    ...e,
    timeZone: void 0
    // use local timezone
  }), n = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find((r) => r.type === "hour").value, 10), o = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find((r) => r.type === "hour").value, 10);
  if (n === 0 && o === 23) return "h23";
  if (n === 24 && o === 23) return "h24";
  if (n === 0 && o === 11) return "h11";
  if (n === 12 && o === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function gc(t, e) {
  const a = [];
  for (let n = 0; n < t.length; n += e)
    a.push(t.slice(n, n + e));
  return a;
}
function Ye(t, e = St()) {
  return Ls(t) ? t.toDate() : t.toDate(e);
}
function yc(t) {
  return t instanceof wa;
}
function Ls(t) {
  return t instanceof xa;
}
function bc(t) {
  return yc(t) || Ls(t);
}
function Bt(t) {
  if (t instanceof Date) {
    const e = t.getFullYear(), a = t.getMonth() + 1;
    return new Date(e, a, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function Vt(t, e) {
  return t.compare(e) < 0;
}
function Ka(t, e) {
  return t.compare(e) > 0;
}
function _c(t, e) {
  return t.compare(e) <= 0;
}
function wc(t, e) {
  return t.compare(e) >= 0;
}
function xc(t, e, a) {
  return wc(t, e) && _c(t, a);
}
function Cc(t, e, a) {
  return Ka(t, e) && Vt(t, a);
}
function $c(t, e, a) {
  const n = Nl(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function Sc(t, e, a) {
  const n = Nl(t, a), o = e === 0 ? 6 : e - 1;
  return n === o ? t : n > o ? t.add({ days: 7 - n + o }) : t.add({ days: o - n });
}
function Bc(t, e, a, n) {
  if (a === void 0 && n === void 0)
    return !0;
  let o = t.add({ days: 1 });
  if (n != null && n(o) || a != null && a(o))
    return !1;
  const r = e;
  for (; o.compare(r) < 0; )
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
function To(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, r = Bt(e), l = Array.from({ length: r }, (x, $) => e.set({ day: $ + 1 })), i = Ya(e), u = Tr(e), d = $c(i, a, o), c = Sc(u, a, o), p = Xr(d.subtract({ days: 1 }), i), g = Xr(u, c.add({ days: 1 })), m = p.length + l.length + g.length;
  if (n && m < 42) {
    const x = 42 - m;
    let $ = g[g.length - 1];
    $ || ($ = Tr(e));
    const B = Array.from({ length: x }, (S, E) => {
      const k = E + 1;
      return $.add({ days: k });
    });
    g.push(...B);
  }
  const h = p.concat(l, g), y = gc(h, 7);
  return {
    value: e,
    cells: h,
    rows: y
  };
}
function kc(t) {
  const { dateObj: e, startIndex: a, endIndex: n } = t, o = Array.from({ length: Math.abs(a ?? 0) + n }, (r, l) => l <= Math.abs(a ?? 0) ? e.subtract({ years: l }).set({ day: 1, month: 1 }) : e.add({ years: l - n }).set({ day: 1, month: 1 }));
  return o.sort((r, l) => r.year - l.year), o;
}
function Oc(t) {
  const { dateObj: e, numberOfMonths: a = 1, pagedNavigation: n = !1 } = t;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, r) => Ya(e.set({ month: r * a + 1 }))) : Array.from({ length: 12 }, (o, r) => Ya(e.set({ month: r + 1 })));
}
function Ut(t) {
  const { numberOfMonths: e, dateObj: a, ...n } = t, o = [];
  if (!e || e === 1)
    return o.push(
      To({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    To({
      ...n,
      dateObj: a
    })
  );
  for (let r = 1; r < e; r++) {
    const l = a.add({ months: r });
    o.push(
      To({
        ...n,
        dateObj: l
      })
    );
  }
  return o;
}
const Dc = ["top", "right", "bottom", "left"], Lt = Math.min, We = Math.max, Un = Math.round, _n = Math.floor, ut = (t) => ({
  x: t,
  y: t
}), Ec = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pc = {
  start: "end",
  end: "start"
};
function ns(t, e, a) {
  return We(t, Lt(e, a));
}
function kt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ot(t) {
  return t.split("-")[0];
}
function ka(t) {
  return t.split("-")[1];
}
function Ns(t) {
  return t === "x" ? "y" : "x";
}
function zs(t) {
  return t === "y" ? "height" : "width";
}
function it(t) {
  return ["top", "bottom"].includes(Ot(t)) ? "y" : "x";
}
function js(t) {
  return Ns(it(t));
}
function Ac(t, e, a) {
  a === void 0 && (a = !1);
  const n = ka(t), o = js(t), r = zs(o);
  let l = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Hn(l)), [l, Hn(l)];
}
function Mc(t) {
  const e = Hn(t);
  return [os(t), e, os(e)];
}
function os(t) {
  return t.replace(/start|end/g, (e) => Pc[e]);
}
function Tc(t, e, a) {
  const n = ["left", "right"], o = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return a ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Ic(t, e, a, n) {
  const o = ka(t);
  let r = Tc(Ot(t), a === "start", n);
  return o && (r = r.map((l) => l + "-" + o), e && (r = r.concat(r.map(os)))), r;
}
function Hn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ec[e]);
}
function Fc(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function li(t) {
  return typeof t != "number" ? Fc(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Gn(t) {
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
  const r = it(e), l = js(e), i = zs(l), u = Ot(e), d = r === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, g = n[i] / 2 - o[i] / 2;
  let m;
  switch (u) {
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
  switch (ka(e)) {
    case "start":
      m[l] -= g * (a && d ? -1 : 1);
      break;
    case "end":
      m[l] += g * (a && d ? -1 : 1);
      break;
  }
  return m;
}
const Rc = async (t, e, a) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: l
  } = a, i = r.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let d = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: c,
    y: p
  } = Zr(d, n, u), g = n, m = {}, h = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: x,
      fn: $
    } = i[y], {
      x: B,
      y: S,
      data: E,
      reset: k
    } = await $({
      x: c,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    c = B ?? c, p = S ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...E
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (g = k.placement), k.rects && (d = k.rects === !0 ? await l.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : k.rects), {
      x: c,
      y: p
    } = Zr(d, g, u)), y = -1);
  }
  return {
    x: c,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function Ja(t, e) {
  var a;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: r,
    rects: l,
    elements: i,
    strategy: u
  } = t, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = kt(e, t), h = li(m), x = i[g ? p === "floating" ? "reference" : "floating" : p], $ = Gn(await r.getClippingRect({
    element: (a = await (r.isElement == null ? void 0 : r.isElement(x))) == null || a ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), B = p === "floating" ? {
    x: n,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), E = await (r.isElement == null ? void 0 : r.isElement(S)) ? await (r.getScale == null ? void 0 : r.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Gn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: B,
    offsetParent: S,
    strategy: u
  }) : B);
  return {
    top: ($.top - k.top + h.top) / E.y,
    bottom: (k.bottom - $.bottom + h.bottom) / E.y,
    left: ($.left - k.left + h.left) / E.x,
    right: (k.right - $.right + h.right) / E.x
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
      rects: r,
      platform: l,
      elements: i,
      middlewareData: u
    } = e, {
      element: d,
      padding: c = 0
    } = kt(t, e) || {};
    if (d == null)
      return {};
    const p = li(c), g = {
      x: a,
      y: n
    }, m = js(o), h = zs(m), y = await l.getDimensions(d), x = m === "y", $ = x ? "top" : "left", B = x ? "bottom" : "right", S = x ? "clientHeight" : "clientWidth", E = r.reference[h] + r.reference[m] - g[m] - r.floating[h], k = g[m] - r.reference[m], F = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let M = F ? F[S] : 0;
    (!M || !await (l.isElement == null ? void 0 : l.isElement(F))) && (M = i.floating[S] || r.floating[h]);
    const K = E / 2 - k / 2, V = M / 2 - y[h] / 2 - 1, A = Lt(p[$], V), T = Lt(p[B], V), R = A, H = M - y[h] - T, N = M / 2 - y[h] / 2 + K, j = ns(R, N, H), Q = !u.arrow && ka(o) != null && N !== j && r.reference[h] / 2 - (N < R ? A : T) - y[h] / 2 < 0, se = Q ? N < R ? N - R : N - H : 0;
    return {
      [m]: g[m] + se,
      data: {
        [m]: j,
        centerOffset: N - j - se,
        ...Q && {
          alignmentOffset: se
        }
      },
      reset: Q
    };
  }
}), Lc = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        middlewareData: r,
        rects: l,
        initialPlacement: i,
        platform: u,
        elements: d
      } = e, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: y = !0,
        ...x
      } = kt(t, e);
      if ((a = r.arrow) != null && a.alignmentOffset)
        return {};
      const $ = Ot(o), B = it(i), S = Ot(i) === i, E = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), k = g || (S || !y ? [Hn(i)] : Mc(i)), F = h !== "none";
      !g && F && k.push(...Ic(i, y, h, E));
      const M = [i, ...k], K = await Ja(e, x), V = [];
      let A = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (c && V.push(K[$]), p) {
        const N = Ac(o, l, E);
        V.push(K[N[0]], K[N[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: V
      }], !V.every((N) => N <= 0)) {
        var T, R;
        const N = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, j = M[N];
        if (j && (!(p === "alignment" ? B !== it(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((ye) => ye.overflows[0] > 0 && it(ye.placement) === B)))
          return {
            data: {
              index: N,
              overflows: A
            },
            reset: {
              placement: j
            }
          };
        let Q = (R = A.filter((se) => se.overflows[0] <= 0).sort((se, ye) => se.overflows[1] - ye.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!Q)
          switch (m) {
            case "bestFit": {
              var H;
              const se = (H = A.filter((ye) => {
                if (F) {
                  const Y = it(ye.placement);
                  return Y === B || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((ye) => [ye.placement, ye.overflows.filter((Y) => Y > 0).reduce((Y, ie) => Y + ie, 0)]).sort((ye, Y) => ye[1] - Y[1])[0]) == null ? void 0 : H[0];
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
  return Dc.some((e) => t[e] >= 0);
}
const Nc = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: a
      } = e, {
        strategy: n = "referenceHidden",
        ...o
      } = kt(t, e);
      switch (n) {
        case "referenceHidden": {
          const r = await Ja(e, {
            ...o,
            elementContext: "reference"
          }), l = el(r, a.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: tl(l)
            }
          };
        }
        case "escaped": {
          const r = await Ja(e, {
            ...o,
            altBoundary: !0
          }), l = el(r, a.floating);
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
async function zc(t, e) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = t, r = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), l = Ot(a), i = ka(a), u = it(a) === "y", d = ["left", "top"].includes(l) ? -1 : 1, c = r && u ? -1 : 1, p = kt(e, t);
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
    x: m * c,
    y: g * d
  } : {
    x: g * d,
    y: m * c
  };
}
const jc = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var a, n;
      const {
        x: o,
        y: r,
        placement: l,
        middlewareData: i
      } = e, u = await zc(e, t);
      return l === ((a = i.offset) == null ? void 0 : a.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, Wc = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: a,
        y: n,
        placement: o
      } = e, {
        mainAxis: r = !0,
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
      } = kt(t, e), d = {
        x: a,
        y: n
      }, c = await Ja(e, u), p = it(Ot(o)), g = Ns(p);
      let m = d[g], h = d[p];
      if (r) {
        const x = g === "y" ? "top" : "left", $ = g === "y" ? "bottom" : "right", B = m + c[x], S = m - c[$];
        m = ns(B, m, S);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", B = h + c[x], S = h - c[$];
        h = ns(B, h, S);
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
            [g]: r,
            [p]: l
          }
        }
      };
    }
  };
}, Kc = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: a,
        y: n,
        placement: o,
        rects: r,
        middlewareData: l
      } = e, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = kt(t, e), c = {
        x: a,
        y: n
      }, p = it(o), g = Ns(p);
      let m = c[g], h = c[p];
      const y = kt(i, e), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (u) {
        const S = g === "y" ? "height" : "width", E = r.reference[g] - r.floating[S] + x.mainAxis, k = r.reference[g] + r.reference[S] - x.mainAxis;
        m < E ? m = E : m > k && (m = k);
      }
      if (d) {
        var $, B;
        const S = g === "y" ? "width" : "height", E = ["top", "left"].includes(Ot(o)), k = r.reference[p] - r.floating[S] + (E && (($ = l.offset) == null ? void 0 : $[p]) || 0) + (E ? 0 : x.crossAxis), F = r.reference[p] + r.reference[S] + (E ? 0 : ((B = l.offset) == null ? void 0 : B[p]) || 0) - (E ? x.crossAxis : 0);
        h < k ? h = k : h > F && (h = F);
      }
      return {
        [g]: m,
        [p]: h
      };
    }
  };
}, Uc = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var a, n;
      const {
        placement: o,
        rects: r,
        platform: l,
        elements: i
      } = e, {
        apply: u = () => {
        },
        ...d
      } = kt(t, e), c = await Ja(e, d), p = Ot(o), g = ka(o), m = it(o) === "y", {
        width: h,
        height: y
      } = r.floating;
      let x, $;
      p === "top" || p === "bottom" ? (x = p, $ = g === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : ($ = p, x = g === "end" ? "top" : "bottom");
      const B = y - c.top - c.bottom, S = h - c.left - c.right, E = Lt(y - c[x], B), k = Lt(h - c[$], S), F = !e.middlewareData.shift;
      let M = E, K = k;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (K = S), (n = e.middlewareData.shift) != null && n.enabled.y && (M = B), F && !g) {
        const A = We(c.left, 0), T = We(c.right, 0), R = We(c.top, 0), H = We(c.bottom, 0);
        m ? K = h - 2 * (A !== 0 || T !== 0 ? A + T : We(c.left, c.right)) : M = y - 2 * (R !== 0 || H !== 0 ? R + H : We(c.top, c.bottom));
      }
      await u({
        ...e,
        availableWidth: K,
        availableHeight: M
      });
      const V = await l.getDimensions(i.floating);
      return h !== V.width || y !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function uo() {
  return typeof window < "u";
}
function Xt(t) {
  return Ws(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ke(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function pt(t) {
  var e;
  return (e = (Ws(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ws(t) {
  return uo() ? t instanceof Node || t instanceof Ke(t).Node : !1;
}
function nt(t) {
  return uo() ? t instanceof Element || t instanceof Ke(t).Element : !1;
}
function dt(t) {
  return uo() ? t instanceof HTMLElement || t instanceof Ke(t).HTMLElement : !1;
}
function al(t) {
  return !uo() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ke(t).ShadowRoot;
}
function sn(t) {
  const {
    overflow: e,
    overflowX: a,
    overflowY: n,
    display: o
  } = ot(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + a) && !["inline", "contents"].includes(o);
}
function Hc(t) {
  return ["table", "td", "th"].includes(Xt(t));
}
function co(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Ks(t) {
  const e = Us(), a = nt(t) ? ot(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (a.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (a.contain || "").includes(n));
}
function Gc(t) {
  let e = Nt(t);
  for (; dt(e) && !Ca(e); ) {
    if (Ks(e))
      return e;
    if (co(e))
      return null;
    e = Nt(e);
  }
  return null;
}
function Us() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ca(t) {
  return ["html", "body", "#document"].includes(Xt(t));
}
function ot(t) {
  return Ke(t).getComputedStyle(t);
}
function po(t) {
  return nt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Nt(t) {
  if (Xt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    al(t) && t.host || // Fallback.
    pt(t)
  );
  return al(e) ? e.host : e;
}
function ii(t) {
  const e = Nt(t);
  return Ca(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : dt(e) && sn(e) ? e : ii(e);
}
function Qa(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = ii(t), r = o === ((n = t.ownerDocument) == null ? void 0 : n.body), l = Ke(o);
  if (r) {
    const i = ss(l);
    return e.concat(l, l.visualViewport || [], sn(o) ? o : [], i && a ? Qa(i) : []);
  }
  return e.concat(o, Qa(o, [], a));
}
function ss(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function ui(t) {
  const e = ot(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = dt(t), r = o ? t.offsetWidth : a, l = o ? t.offsetHeight : n, i = Un(a) !== r || Un(n) !== l;
  return i && (a = r, n = l), {
    width: a,
    height: n,
    $: i
  };
}
function Hs(t) {
  return nt(t) ? t : t.contextElement;
}
function ga(t) {
  const e = Hs(t);
  if (!dt(e))
    return ut(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: r
  } = ui(e);
  let l = (r ? Un(a.width) : a.width) / n, i = (r ? Un(a.height) : a.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const qc = /* @__PURE__ */ ut(0);
function di(t) {
  const e = Ke(t);
  return !Us() || !e.visualViewport ? qc : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Yc(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== Ke(t) ? !1 : e;
}
function Jt(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), r = Hs(t);
  let l = ut(1);
  e && (n ? nt(n) && (l = ga(n)) : l = ga(t));
  const i = Yc(r, a, n) ? di(r) : ut(0);
  let u = (o.left + i.x) / l.x, d = (o.top + i.y) / l.y, c = o.width / l.x, p = o.height / l.y;
  if (r) {
    const g = Ke(r), m = n && nt(n) ? Ke(n) : n;
    let h = g, y = ss(h);
    for (; y && n && m !== h; ) {
      const x = ga(y), $ = y.getBoundingClientRect(), B = ot(y), S = $.left + (y.clientLeft + parseFloat(B.paddingLeft)) * x.x, E = $.top + (y.clientTop + parseFloat(B.paddingTop)) * x.y;
      u *= x.x, d *= x.y, c *= x.x, p *= x.y, u += S, d += E, h = Ke(y), y = ss(h);
    }
  }
  return Gn({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function Gs(t, e) {
  const a = po(t).scrollLeft;
  return e ? e.left + a : Jt(pt(t)).left + a;
}
function ci(t, e, a) {
  a === void 0 && (a = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    Gs(t, n)
  )), r = n.top + e.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Jc(t) {
  let {
    elements: e,
    rect: a,
    offsetParent: n,
    strategy: o
  } = t;
  const r = o === "fixed", l = pt(n), i = e ? co(e.floating) : !1;
  if (n === l || i && r)
    return a;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ut(1);
  const c = ut(0), p = dt(n);
  if ((p || !p && !r) && ((Xt(n) !== "body" || sn(l)) && (u = po(n)), dt(n))) {
    const m = Jt(n);
    d = ga(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const g = l && !p && !r ? ci(l, u, !0) : ut(0);
  return {
    width: a.width * d.x,
    height: a.height * d.y,
    x: a.x * d.x - u.scrollLeft * d.x + c.x + g.x,
    y: a.y * d.y - u.scrollTop * d.y + c.y + g.y
  };
}
function Qc(t) {
  return Array.from(t.getClientRects());
}
function Xc(t) {
  const e = pt(t), a = po(t), n = t.ownerDocument.body, o = We(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = We(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -a.scrollLeft + Gs(t);
  const i = -a.scrollTop;
  return ot(n).direction === "rtl" && (l += We(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: l,
    y: i
  };
}
function Zc(t, e) {
  const a = Ke(t), n = pt(t), o = a.visualViewport;
  let r = n.clientWidth, l = n.clientHeight, i = 0, u = 0;
  if (o) {
    r = o.width, l = o.height;
    const d = Us();
    (!d || d && e === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function ep(t, e) {
  const a = Jt(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, r = dt(t) ? ga(t) : ut(1), l = t.clientWidth * r.x, i = t.clientHeight * r.y, u = o * r.x, d = n * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function nl(t, e, a) {
  let n;
  if (e === "viewport")
    n = Zc(t, a);
  else if (e === "document")
    n = Xc(pt(t));
  else if (nt(e))
    n = ep(e, a);
  else {
    const o = di(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return Gn(n);
}
function pi(t, e) {
  const a = Nt(t);
  return a === e || !nt(a) || Ca(a) ? !1 : ot(a).position === "fixed" || pi(a, e);
}
function tp(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = Qa(t, [], !1).filter((i) => nt(i) && Xt(i) !== "body"), o = null;
  const r = ot(t).position === "fixed";
  let l = r ? Nt(t) : t;
  for (; nt(l) && !Ca(l); ) {
    const i = ot(l), u = Ks(l);
    !u && i.position === "fixed" && (o = null), (r ? !u && !o : !u && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || sn(l) && !u && pi(t, l)) ? n = n.filter((c) => c !== l) : o = i, l = Nt(l);
  }
  return e.set(t, n), n;
}
function ap(t) {
  let {
    element: e,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = t;
  const l = [...a === "clippingAncestors" ? co(e) ? [] : tp(e, this._c) : [].concat(a), n], i = l[0], u = l.reduce((d, c) => {
    const p = nl(e, c, o);
    return d.top = We(p.top, d.top), d.right = Lt(p.right, d.right), d.bottom = Lt(p.bottom, d.bottom), d.left = We(p.left, d.left), d;
  }, nl(e, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function np(t) {
  const {
    width: e,
    height: a
  } = ui(t);
  return {
    width: e,
    height: a
  };
}
function op(t, e, a) {
  const n = dt(e), o = pt(e), r = a === "fixed", l = Jt(t, !0, r, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ut(0);
  function d() {
    u.x = Gs(o);
  }
  if (n || !n && !r)
    if ((Xt(e) !== "body" || sn(o)) && (i = po(e)), n) {
      const m = Jt(e, !0, r, e);
      u.x = m.x + e.clientLeft, u.y = m.y + e.clientTop;
    } else o && d();
  r && !n && o && d();
  const c = o && !n && !r ? ci(o, i) : ut(0), p = l.left + i.scrollLeft - u.x - c.x, g = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: g,
    width: l.width,
    height: l.height
  };
}
function Io(t) {
  return ot(t).position === "static";
}
function ol(t, e) {
  if (!dt(t) || ot(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return pt(t) === a && (a = a.ownerDocument.body), a;
}
function fi(t, e) {
  const a = Ke(t);
  if (co(t))
    return a;
  if (!dt(t)) {
    let o = Nt(t);
    for (; o && !Ca(o); ) {
      if (nt(o) && !Io(o))
        return o;
      o = Nt(o);
    }
    return a;
  }
  let n = ol(t, e);
  for (; n && Hc(n) && Io(n); )
    n = ol(n, e);
  return n && Ca(n) && Io(n) && !Ks(n) ? a : n || Gc(t) || a;
}
const sp = async function(t) {
  const e = this.getOffsetParent || fi, a = this.getDimensions, n = await a(t.floating);
  return {
    reference: op(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function rp(t) {
  return ot(t).direction === "rtl";
}
const lp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jc,
  getDocumentElement: pt,
  getClippingRect: ap,
  getOffsetParent: fi,
  getElementRects: sp,
  getClientRects: Qc,
  getDimensions: np,
  getScale: ga,
  isElement: nt,
  isRTL: rp
};
function vi(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function ip(t, e) {
  let a = null, n;
  const o = pt(t);
  function r() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = t.getBoundingClientRect(), {
      left: c,
      top: p,
      width: g,
      height: m
    } = d;
    if (i || e(), !g || !m)
      return;
    const h = _n(p), y = _n(o.clientWidth - (c + g)), x = _n(o.clientHeight - (p + m)), $ = _n(c), S = {
      rootMargin: -h + "px " + -y + "px " + -x + "px " + -$ + "px",
      threshold: We(0, Lt(1, u)) || 1
    };
    let E = !0;
    function k(F) {
      const M = F[0].intersectionRatio;
      if (M !== u) {
        if (!E)
          return l();
        M ? l(!1, M) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !vi(d, t.getBoundingClientRect()) && l(), E = !1;
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
  return l(!0), r;
}
function mi(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, d = Hs(t), c = o || r ? [...d ? Qa(d) : [], ...Qa(e)] : [];
  c.forEach(($) => {
    o && $.addEventListener("scroll", a, {
      passive: !0
    }), r && $.addEventListener("resize", a);
  });
  const p = d && i ? ip(d, a) : null;
  let g = -1, m = null;
  l && (m = new ResizeObserver(($) => {
    let [B] = $;
    B && B.target === d && m && (m.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var S;
      (S = m) == null || S.observe(e);
    })), a();
  }), d && !u && m.observe(d), m.observe(e));
  let h, y = u ? Jt(t) : null;
  u && x();
  function x() {
    const $ = Jt(t);
    y && !vi(y, $) && a(), y = $, h = requestAnimationFrame(x);
  }
  return a(), () => {
    var $;
    c.forEach((B) => {
      o && B.removeEventListener("scroll", a), r && B.removeEventListener("resize", a);
    }), p == null || p(), ($ = m) == null || $.disconnect(), m = null, u && cancelAnimationFrame(h);
  };
}
const hi = jc, gi = Wc, qn = Lc, yi = Uc, bi = Nc, up = Vc, _i = Kc, dp = (t, e, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: lp,
    ...a
  }, r = {
    ...o.platform,
    _c: n
  };
  return Rc(t, e, {
    ...o,
    platform: r
  });
};
function cp(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function rs(t) {
  if (cp(t)) {
    const e = t.$el;
    return Ws(e) && Xt(e) === "#comment" ? null : e;
  }
  return t;
}
function pa(t) {
  return typeof t == "function" ? t() : s(t);
}
function wi(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = rs(pa(t.element));
      return a == null ? {} : up({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function xi(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sl(t, e) {
  const a = xi(t);
  return Math.round(e * a) / a;
}
function Ci(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = C(() => {
    var M;
    return (M = pa(a.open)) != null ? M : !0;
  }), r = C(() => pa(a.middleware)), l = C(() => {
    var M;
    return (M = pa(a.placement)) != null ? M : "bottom";
  }), i = C(() => {
    var M;
    return (M = pa(a.strategy)) != null ? M : "absolute";
  }), u = C(() => {
    var M;
    return (M = pa(a.transform)) != null ? M : !0;
  }), d = C(() => rs(t.value)), c = C(() => rs(e.value)), p = D(0), g = D(0), m = D(i.value), h = D(l.value), y = Ct({}), x = D(!1), $ = C(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const K = sl(c.value, p.value), V = sl(c.value, g.value);
    return u.value ? {
      ...M,
      transform: "translate(" + K + "px, " + V + "px)",
      ...xi(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: K + "px",
      top: V + "px"
    };
  });
  let B;
  function S() {
    if (d.value == null || c.value == null)
      return;
    const M = o.value;
    dp(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((K) => {
      p.value = K.x, g.value = K.y, m.value = K.strategy, h.value = K.placement, y.value = K.middlewareData, x.value = M !== !1;
    });
  }
  function E() {
    typeof B == "function" && (B(), B = void 0);
  }
  function k() {
    if (E(), n === void 0) {
      S();
      return;
    }
    if (d.value != null && c.value != null) {
      B = n(d.value, c.value, S);
      return;
    }
  }
  function F() {
    o.value || (x.value = !1);
  }
  return X([r, l, i, o], S, {
    flush: "sync"
  }), X([d, c], k, {
    flush: "sync"
  }), X(o, F, {
    flush: "sync"
  }), to() && ao(E), {
    x: ia(p),
    y: ia(g),
    strategy: ia(m),
    placement: ia(h),
    middlewareData: ia(y),
    isPositioned: ia(x),
    floatingStyles: $,
    update: S
  };
}
function fe(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(o) => {
    const r = nn(n, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (o) => (ro(n, o), o)];
}
function qs(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function Yn(t, e = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(e, t));
}
function pp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var fp = function t(e, a) {
  if (e === a) return !0;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (e.constructor !== a.constructor) return !1;
    var n, o, r;
    if (Array.isArray(e)) {
      if (n = e.length, n != a.length) return !1;
      for (o = n; o-- !== 0; )
        if (!t(e[o], a[o])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
    if (r = Object.keys(e), n = r.length, n !== Object.keys(a).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(a, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      var l = r[o];
      if (!t(e[l], a[l])) return !1;
    }
    return !0;
  }
  return e !== e && a !== a;
};
const qt = /* @__PURE__ */ pp(fp);
function Fn(t) {
  return t == null;
}
function $i(t) {
  const { defaultValue: e, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = t;
  if (Array.isArray(e) && e.length)
    return e.at(-1).copy();
  if (e && !Array.isArray(e))
    return e.copy();
  if (a)
    return a.copy();
  const r = /* @__PURE__ */ new Date(), l = r.getFullYear(), i = r.getMonth() + 1, u = r.getDate(), d = ["hour", "minute", "second"], c = new rt(o), p = pc(c.resolvedOptions().calendar);
  return d.includes(n ?? "day") ? ze(new wa(l, i, u, 0, 0, 0), p) : ze(new ke(l, i, u), p);
}
function Si(t) {
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
function vp(t, e) {
  var a;
  const n = Ct();
  return be(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ba(n);
}
function Zt(t) {
  return to() ? (ao(t), !0) : !1;
}
function mp() {
  const t = /* @__PURE__ */ new Set(), e = (a) => {
    t.delete(a);
  };
  return {
    on: (a) => {
      t.add(a);
      const n = () => e(a);
      return Zt(n), {
        off: n
      };
    },
    off: e,
    trigger: (...a) => Promise.all(Array.from(t).map((n) => n(...a)))
  };
}
function hp(t) {
  let e = !1, a;
  const n = Ds(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function Bi(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...r) => (e += 1, a || (n = Ds(!0), a = n.run(() => t(...r))), Zt(o), a);
}
function $t(t) {
  return typeof t == "function" ? t() : s(t);
}
const ft = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const gp = (t) => typeof t < "u", yp = (t) => t != null, bp = Object.prototype.toString, _p = (t) => bp.call(t) === "[object Object]", ki = () => {
}, rl = /* @__PURE__ */ wp();
function wp() {
  var t, e;
  return ft && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function xp(t) {
  return Ee();
}
function Oi(t, e = 1e4) {
  return Bs((a, n) => {
    let o = $t(t), r;
    const l = () => setTimeout(() => {
      o = $t(t), n();
    }, $t(e));
    return Zt(() => {
      clearTimeout(r);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(r), r = l();
      }
    };
  });
}
function Cp(t, e) {
  xp() && oo(t, e);
}
function Ys(t, e, a = {}) {
  const {
    immediate: n = !0
  } = a, o = D(!1);
  let r = null;
  function l() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    o.value = !1, l();
  }
  function u(...d) {
    l(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, t(...d);
    }, $t(e));
  }
  return n && (o.value = !0, ft && u()), Zt(i), {
    isPending: Ba(o),
    start: u,
    stop: i
  };
}
function $p(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = Ys(
    n ?? ki,
    t,
    e
  ), r = C(() => !o.isPending.value);
  return a ? {
    ready: r,
    ...o
  } : r;
}
function Je(t) {
  var e;
  const a = $t(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const rn = ft ? window : void 0;
function $a(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = rn) : [e, a, n, o] = t, !e)
    return ki;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, g, m) => (c.addEventListener(p, g, m), () => c.removeEventListener(p, g, m)), u = X(
    () => [Je(e), $t(o)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const g = _p(p) ? { ...p } : p;
      r.push(
        ...a.flatMap((m) => n.map((h) => i(c, m, h, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Zt(d), d;
}
function Sp(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Js(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = rn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = Sp(e);
  return $a(o, r, (d) => {
    d.repeat && $t(i) || u(d) && a(d);
  }, l);
}
function Qs() {
  const t = D(!1), e = Ee();
  return e && de(() => {
    t.value = !0;
  }, e), t;
}
function Bp(t) {
  const e = Qs();
  return C(() => (e.value, !!t()));
}
function kp(t, e, a = {}) {
  const { window: n = rn, ...o } = a;
  let r;
  const l = Bp(() => n && "MutationObserver" in n), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = C(() => {
    const g = $t(t), m = (Array.isArray(g) ? g : [g]).map(Je).filter(yp);
    return new Set(m);
  }), d = X(
    () => u.value,
    (g) => {
      i(), l.value && g.size && (r = new MutationObserver(e), g.forEach((m) => r.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return Zt(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function Di(t, e = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = rn
  } = e, r = D(!1), l = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(g) {
    if (!r.value || !o)
      return;
    i || (i = g);
    const m = g - i;
    if (l && m < l) {
      u = o.requestAnimationFrame(d);
      return;
    }
    i = g, t({ delta: m, timestamp: g }), u = o.requestAnimationFrame(d);
  }
  function c() {
    !r.value && o && (r.value = !0, i = 0, u = o.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return a && c(), Zt(p), {
    isActive: Ba(r),
    pause: p,
    resume: c
  };
}
function Op(t) {
  return JSON.parse(JSON.stringify(t));
}
function we(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = d;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (S) => i ? typeof i == "function" ? i(S) : Op(S) : S, $ = () => gp(t[e]) ? x(t[e]) : p, B = (S) => {
    g ? g(S) && h(y, S) : h(y, S);
  };
  if (u) {
    const S = $(), E = D(S);
    let k = !1;
    return X(
      () => t[e],
      (F) => {
        k || (k = !0, E.value = x(F), ae(() => k = !1));
      }
    ), X(
      E,
      (F) => {
        !k && (F !== t[e] || c) && B(F);
      },
      { deep: c }
    ), E;
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
function fo(t) {
  return t ? t.flatMap((e) => e.type === ne ? fo(e.children) : [e]) : [];
}
function De() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const Dp = ["INPUT", "TEXTAREA"];
function Ei(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && Dp.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
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
  const S = a ? Array.from(a.querySelectorAll(r)) : l;
  if (!S.length)
    return null;
  d && t.preventDefault();
  let E = null;
  return B || $ ? E = Pi(S, e, {
    goForward: $ ? h : u === "ltr" ? p : g,
    loop: i
  }) : y ? E = S.at(0) || null : x && (E = S.at(-1) || null), c && (E == null || E.focus()), E;
}
function Pi(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), r = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (r < 0 || r >= t.length))
    return null;
  const l = (r + t.length) % t.length, i = t[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Pi(
    t,
    i,
    a,
    n
  ) : i : null;
}
function Fo(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function ls(t, e, a = ".", n) {
  if (!Fo(e))
    return ls(t, {}, a);
  const o = Object.assign({}, e);
  for (const r in t) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = t[r];
    l != null && (Array.isArray(l) && Array.isArray(o[r]) ? o[r] = [...l, ...o[r]] : Fo(l) && Fo(o[r]) ? o[r] = ls(
      l,
      o[r],
      (a ? `${a}.` : "") + r.toString()
    ) : o[r] = l);
  }
  return o;
}
function Ep(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => ls(a, n, ""), {})
  );
}
const Pp = Ep(), [vo, Qw] = fe("ConfigProvider");
let Ap = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Mp = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += Ap[Math.random() * 64 | 0];
  return e;
};
const Tp = Bi(() => {
  const t = D(/* @__PURE__ */ new Map()), e = D(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = vo({
    scrollBody: D(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", rl && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var u;
    if (!ft)
      return;
    if (!l) {
      i && r();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? Pp({
      padding: n.scrollBody.value.padding === !0 ? d : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? d : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), rl && (o = $a(
      document,
      "touchmove",
      (g) => Ip(g),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function ln(t) {
  const e = Mp(6), a = Tp();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return Cp(() => {
    a.value.delete(e);
  }), n;
}
function Ai(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Ai(a);
  }
}
function Ip(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Ai(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const Fp = "data-radix-vue-collection-item";
function Oa(t, e = Fp) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = D([]);
    function r() {
      const l = Je(n);
      return l ? o.value = Array.from(
        l.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return md(() => {
      o.value = [];
    }), de(r), hd(r), X(() => n == null ? void 0 : n.value, r, { immediate: !0 }), ro(a, o), o;
  }, injectCollection: () => nn(a, D([])) };
}
function Mi(t) {
  const e = D(t);
  function a() {
    return e.value;
  }
  function n(y) {
    e.value = y;
  }
  function o(y, x) {
    return new rt(e.value, x).format(y);
  }
  function r(y, x = !0) {
    return bc(y) && x ? o(Ye(y), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Ye(y), {
      dateStyle: "long"
    });
  }
  function l(y, x = {}) {
    return new rt(e.value, { month: "long", year: "numeric", ...x }).format(y);
  }
  function i(y, x = {}) {
    return new rt(e.value, { month: "long", ...x }).format(y);
  }
  function u() {
    const y = Ln(St());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Ye(y.set({ month: x }))), value: x }));
  }
  function d(y, x = {}) {
    return new rt(e.value, { year: "numeric", ...x }).format(y);
  }
  function c(y, x) {
    return Ls(y) ? new rt(e.value, {
      ...x,
      timeZone: y.timeZone
    }).formatToParts(Ye(y)) : new rt(e.value, x).formatToParts(Ye(y));
  }
  function p(y, x = "narrow") {
    return new rt(e.value, { weekday: x }).format(y);
  }
  function g(y) {
    var x;
    return ((x = new rt(e.value, {
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
    const B = { ...m, ...$ }, S = c(y, B).find((E) => E.type === x);
    return S ? S.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: l,
    toParts: c,
    custom: o,
    part: h,
    dayPeriod: g,
    selectedDate: r,
    dayOfWeek: p,
    getMonths: u
  };
}
function vt(t) {
  const e = vo({
    dir: D("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function ea(t) {
  const e = Ee(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ml(no(o))] = (...r) => t(o, ...r);
  }), n;
}
let Ro = 0;
function Xs() {
  be((t) => {
    if (!ft)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? ll()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? ll()
    ), Ro++, t(() => {
      Ro === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Ro--;
    });
  });
}
function ll() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function un(t) {
  return C(() => {
    var e;
    return $t(t) ? !!((e = Je(t)) != null && e.closest("form")) : !0;
  });
}
function ve(t) {
  const e = Ee(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, r) => {
    const l = (e == null ? void 0 : e.type.props[r]).default;
    return l !== void 0 && (o[r] = l), o;
  }, {}), n = $s(t);
  return C(() => {
    const o = {}, r = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      o[no(l)] = r[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function ue(t, e) {
  const a = ve(t), n = e ? ea(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function W() {
  const t = Ee(), e = D(), a = C(() => {
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
  function r(l) {
    e.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), t.exposed = o);
  }
  return { forwardRef: r, currentRef: e, currentElement: a };
}
function Rp(t, e) {
  const a = Oi(!1, 300), n = D(null), o = mp();
  function r() {
    n.value = null, a.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Vp(c, d.getBoundingClientRect()), g = Lp(c, p), m = Np(u.getBoundingClientRect()), h = jp([...g, ...m]);
    n.value = h, a.value = !0;
  }
  return be((i) => {
    if (t.value && e.value) {
      const u = (c) => l(c, e.value), d = (c) => l(c, t.value);
      t.value.addEventListener("pointerleave", u), e.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = t.value) == null || c.removeEventListener("pointerleave", u), (p = e.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), be((i) => {
    var u;
    if (n.value) {
      const d = (c) => {
        var p, g;
        if (!n.value)
          return;
        const m = c.target, h = { x: c.clientX, y: c.clientY }, y = ((p = t.value) == null ? void 0 : p.contains(m)) || ((g = e.value) == null ? void 0 : g.contains(m)), x = !zp(h, n.value), $ = !!m.closest("[data-grace-area-trigger]");
        y ? r() : (x || $) && (r(), o.trigger());
      };
      (u = t.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = t.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: a,
    onPointerExit: o.on
  };
}
function Vp(t, e) {
  const a = Math.abs(e.top - t.y), n = Math.abs(e.bottom - t.y), o = Math.abs(e.right - t.x), r = Math.abs(e.left - t.x);
  switch (Math.min(a, n, o, r)) {
    case r:
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
function Lp(t, e, a = 5) {
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
function Np(t) {
  const { top: e, right: a, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: a, y: e },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function zp(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let r = 0, l = e.length - 1; r < e.length; l = r++) {
    const i = e[r].x, u = e[r].y, d = e[l].x, c = e[l].y;
    u > n != c > n && a < (d - i) * (n - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function jp(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), Wp(e);
}
function Wp(t) {
  if (t.length <= 1)
    return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (; e.length >= 2; ) {
      const r = e[e.length - 1], l = e[e.length - 2];
      if ((r.x - l.x) * (o.y - l.y) >= (r.y - l.y) * (o.x - l.x))
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
      const r = a[a.length - 1], l = a[a.length - 2];
      if ((r.x - l.x) * (o.y - l.y) >= (r.y - l.y) * (o.x - l.x))
        a.pop();
      else break;
    }
    a.push(o);
  }
  return a.pop(), e.length === 1 && a.length === 1 && e[0].x === a[0].x && e[0].y === a[0].y ? e : e.concat(a);
}
var Kp = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, da = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), xn = {}, Vo = 0, Ti = function(t) {
  return t && (t.host || Ti(t.parentNode));
}, Up = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Ti(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Hp = function(t, e, a, n) {
  var o = Up(e, Array.isArray(t) ? t : [t]);
  xn[a] || (xn[a] = /* @__PURE__ */ new WeakMap());
  var r = xn[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        c(g);
      else
        try {
          var m = g.getAttribute(n), h = m !== null && m !== "false", y = (da.get(g) || 0) + 1, x = (r.get(g) || 0) + 1;
          da.set(g, y), r.set(g, x), l.push(g), y === 1 && h && wn.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return c(e), i.clear(), Vo++, function() {
    l.forEach(function(p) {
      var g = da.get(p) - 1, m = r.get(p) - 1;
      da.set(p, g), r.set(p, m), g || (wn.has(p) || p.removeAttribute(n), wn.delete(p)), m || p.removeAttribute(a);
    }), Vo--, Vo || (da = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), xn = {});
  };
}, Gp = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Kp(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Hp(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function dn(t) {
  let e;
  X(() => Je(t), (a) => {
    a ? e = Gp(a) : e && e();
  }), Ve(() => {
    e && e();
  });
}
let qp = 0;
function Oe(t, e = "radix") {
  const a = vo({ useId: void 0 });
  return fa.useId ? `${e}-${fa.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++qp}`;
}
function Ii(t) {
  const e = D(), a = C(() => {
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
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        e.value = { width: u, height: d };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
function Yp(t, e) {
  const a = D(t);
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
const Jp = "data-item-text";
function Zs(t) {
  const e = Oi("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (a, n) => {
      if (!(t != null && t.value) && !n)
        return;
      e.value = e.value + a;
      const o = (t == null ? void 0 : t.value) ?? n, r = De(), l = o.map((p) => {
        var g;
        return {
          ref: p,
          textValue: ((g = (p.querySelector(`[${Jp}]`) ?? p).textContent) == null ? void 0 : g.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Xp(u, e.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function Qp(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function Xp(t, e, a) {
  const n = e.length > 1 && Array.from(e).every((i) => i === e[0]) ? e[0] : e, o = a ? t.indexOf(a) : -1;
  let r = Qp(t, Math.max(o, 0));
  n.length === 1 && (r = r.filter((i) => i !== a));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== a ? l : void 0;
}
function Fi() {
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
      const r = fo(a.default()), l = r.findIndex((c) => c.type !== Ss);
      if (l === -1)
        return r;
      const i = r[l];
      (n = i.props) == null || delete n.ref;
      const u = i.props ? O(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const d = Tl(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), z = b({
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
function Da() {
  const t = D(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : Je(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
const [Ri, Zp] = fe("CollapsibleRoot"), ef = /* @__PURE__ */ b({
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
    const n = t, o = we(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = we(n, "disabled");
    return Zp({
      contentId: "",
      disabled: r,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), e({ open: o }), W(), (l, i) => (f(), _(s(z), {
      as: l.as,
      "as-child": n.asChild,
      "data-state": s(o) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: v(() => [
        w(l.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), tf = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Ri();
    return (n, o) => {
      var r, l;
      return f(), _(s(z), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": e.asChild,
        "aria-controls": s(a).contentId,
        "aria-expanded": s(a).open.value,
        "data-state": s(a).open.value ? "open" : "closed",
        "data-disabled": (r = s(a).disabled) != null && r.value ? "" : void 0,
        disabled: (l = s(a).disabled) == null ? void 0 : l.value,
        onClick: s(a).onOpenToggle
      }, {
        default: v(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function af(t, e) {
  var a;
  const n = D({}), o = D("none"), r = D(t), l = t.value ? "mounted" : "unmounted";
  let i;
  const u = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? rn, { state: d, dispatch: c } = Yp(l, {
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
    if (ft) {
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
        const E = o.value, k = Cn(e.value);
        x ? (c("MOUNT"), p("enter"), k === "none" && p("after-enter")) : k === "none" || ((B = n.value) == null ? void 0 : B.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : $ && E !== k ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const g = (x) => {
    const $ = Cn(e.value), B = $.includes(
      x.animationName
    ), S = d.value === "mounted" ? "enter" : "leave";
    if (x.target === e.value && B && (p(`after-${S}`), c("ANIMATION_END"), !r.value)) {
      const E = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var k;
        ((k = e.value) == null ? void 0 : k.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = E);
      });
    }
    x.target === e.value && $ === "none" && c("ANIMATION_END");
  }, m = (x) => {
    x.target === e.value && (o.value = Cn(e.value));
  }, h = X(
    e,
    (x, $) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", g), x.addEventListener("animationend", g)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), $ == null || $.removeEventListener("animationstart", m), $ == null || $.removeEventListener("animationcancel", g), $ == null || $.removeEventListener("animationend", g));
    },
    { immediate: !0 }
  ), y = X(d, () => {
    const x = Cn(e.value);
    o.value = d.value === "mounted" ? x : "none";
  });
  return Ve(() => {
    h(), y();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Cn(t) {
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
    const { present: o, forceMount: r } = me(t), l = D(), { isPresent: i } = af(o, l);
    a({ present: i });
    let u = e.default({ present: i });
    u = fo(u || []);
    const d = Ee();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const c = (n = d == null ? void 0 : d.parent) != null && n.type.name ? `<${d.parent.type.name} />` : "component";
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
    return () => r.value || o.value || i.value ? Ie(e.default({ present: i })[0], {
      ref: (c) => {
        const p = Je(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), nf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Ri();
    a.contentId || (a.contentId = Oe(void 0, "radix-vue-collapsible-content"));
    const n = D(), { forwardRef: o, currentElement: r } = W(), l = D(0), i = D(0), u = C(() => a.open.value), d = D(u.value), c = D();
    return X(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await ae();
        const p = r.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const g = p.getBoundingClientRect();
        i.value = g.height, l.value = g.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), de(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, g) => (f(), _(s(Ue), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: v(() => {
        var m, h;
        return [
          P(s(z), O(p.$attrs, {
            id: s(a).contentId,
            ref: s(o),
            "as-child": e.asChild,
            as: p.as,
            "data-state": s(a).open.value ? "open" : "closed",
            "data-disabled": (m = s(a).disabled) != null && m.value ? "" : void 0,
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
function Vi({ type: t, defaultValue: e, modelValue: a }) {
  const n = a || e;
  if (Fn(t) && Fn(a) && Fn(e))
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
    const r = Array.isArray(a) || Array.isArray(e), l = a !== void 0 ? "modelValue" : "defaultValue", i = l === "modelValue" ? typeof a : typeof e;
    if (t === "single" && r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "multiple";
    if (t === "multiple" && !r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "single";
  }
  return o ? Array.isArray(n) ? "multiple" : "single" : t;
}
function of({ type: t, defaultValue: e, modelValue: a }) {
  return t || Vi({ type: t, defaultValue: e, modelValue: a });
}
function sf({ type: t, defaultValue: e }) {
  return e !== void 0 ? e : t === "single" ? void 0 : [];
}
function rf(t, e) {
  const a = D(of(t)), n = we(t, "modelValue", e, {
    defaultValue: sf(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  X(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const l = Vi(t);
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
        const u = i.findIndex((d) => d === l);
        i.splice(u, 1);
      } else
        i.push(l);
      n.value = i;
    }
  }
  const r = C(() => a.value === "single");
  return {
    modelValue: n,
    type: a,
    changeModelValue: o,
    isSingle: r
  };
}
const [mo, lf] = fe("AccordionRoot"), uf = /* @__PURE__ */ b({
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
    const a = t, n = e, { dir: o, disabled: r } = me(a), l = vt(o), { modelValue: i, changeModelValue: u, isSingle: d } = rf(a, n), { forwardRef: c, currentElement: p } = W();
    return lf({
      disabled: r,
      direction: l,
      orientation: a.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (g, m) => (f(), _(s(z), {
      ref: s(c),
      "as-child": g.asChild,
      as: g.as
    }, {
      default: v(() => [
        w(g.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [tr, df] = fe("AccordionItem"), cf = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t, { expose: e }) {
    const a = t, n = mo(), o = C(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), r = C(() => n.disabled.value || a.disabled), l = C(() => r.value ? "" : void 0), i = C(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    e({ open: o, dataDisabled: l });
    const { currentRef: u, currentElement: d } = W();
    df({
      open: o,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: C(() => a.value)
    });
    function c(p) {
      var g;
      const m = p.target;
      if (Array.from(((g = n.parentElement.value) == null ? void 0 : g.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((h) => h === m) === -1)
        return null;
      Ei(
        p,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (p, g) => (f(), _(s(ef), {
      "data-orientation": s(n).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Te(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: v(() => [
        w(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), pf = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = mo(), n = tr();
    return W(), (o, r) => (f(), _(s(nf), {
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
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), ff = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(t) {
    const e = t, a = mo(), n = tr();
    return W(), (o, r) => (f(), _(s(z), {
      as: e.as,
      "as-child": e.asChild,
      "data-orientation": s(a).orientation,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value
    }, {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), vf = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = mo(), n = tr();
    n.triggerId || (n.triggerId = Oe(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const r = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || r || a.changeModelValue(n.value.value);
    }
    return (r, l) => (f(), _(s(tf), {
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
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [mt, mf] = fe("DialogRoot"), Li = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = D(), r = D(), { modal: l } = me(a);
    return mf({
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
      contentElement: r
    }), (i, u) => w(i.$slots, "default", { open: s(n) });
  }
}), Ni = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = mt(), { forwardRef: n, currentElement: o } = W();
    return a.contentId || (a.contentId = Oe(void 0, "radix-vue-dialog-content")), de(() => {
      a.triggerElement.value = o.value;
    }), (r, l) => (f(), _(s(z), O(e, {
      ref: s(n),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), cn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = Qs();
    return (a, n) => s(e) || a.forceMount ? (f(), _(an, {
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
    return (a, n) => (f(), _(s(cn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = "dismissableLayer.pointerDownOutside", gf = "dismissableLayer.focusOutside";
function zi(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function yf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = D(!1), r = D(() => {
  });
  return be((l) => {
    if (!ft)
      return;
    const i = async (d) => {
      const c = d.target;
      if (e != null && e.value) {
        if (zi(e.value, c)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let p = function() {
            qs(
              hf,
              t,
              g
            );
          };
          const g = { originalEvent: d };
          d.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = p, n.addEventListener("click", r.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", i), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function bf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = D(!1);
  return be((r) => {
    if (!ft)
      return;
    const l = async (i) => {
      e != null && e.value && (await ae(), !(!e.value || zi(e.value, i.target)) && i.target && !o.value && qs(
        gf,
        t,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", l), r(() => n.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Ze = qa({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ea = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: r } = W(), l = C(
      () => {
        var h;
        return ((h = r.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => Ze.layersRoot), u = C(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = C(() => Ze.layersWithOutsidePointerEventsDisabled.size > 0), c = C(() => {
      const h = Array.from(i.value), [y] = [...Ze.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(y);
      return u.value >= x;
    }), p = yf(async (h) => {
      const y = [...Ze.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !c.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ae(), h.defaultPrevented || n("dismiss"));
    }, r), g = bf((h) => {
      [...Ze.branches].some(
        (y) => y == null ? void 0 : y.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, r);
    Js("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return be((h) => {
      r.value && (a.disableOutsidePointerEvents && (Ze.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ze.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), h(() => {
        a.disableOutsidePointerEvents && Ze.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), be((h) => {
      h(() => {
        r.value && (i.value.delete(r.value), Ze.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (h, y) => (f(), _(s(z), {
      ref: s(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: ct({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(g).onFocusCapture,
      onBlurCapture: s(g).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: v(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), _f = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = W();
    return de(() => {
      Ze.branches.add(n.value);
    }), Ve(() => {
      Ze.branches.delete(n.value);
    }), (o, r) => (f(), _(s(z), O({ ref: s(a) }, e), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lo = "focusScope.autoFocusOnMount", No = "focusScope.autoFocusOnUnmount", il = { bubbles: !1, cancelable: !0 };
function Rn(t, { select: e = !1 } = {}) {
  const a = De();
  for (const n of t)
    if (It(n, { select: e }), De() !== a)
      return !0;
}
function wf(t) {
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
    if (!xf(a, { upTo: e }))
      return a;
}
function xf(t, { upTo: e }) {
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
function Cf(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function It(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const a = De();
    t.focus({ preventScroll: !0 }), t !== a && Cf(t) && e && t.select();
  }
}
const $f = hp(() => D([]));
function Sf() {
  const t = $f();
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
function Bf(t) {
  return t.filter((e) => e.tagName !== "A");
}
const ho = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, { currentRef: o, currentElement: r } = W(), l = D(null), i = Sf(), u = qa({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    be((c) => {
      if (!ft)
        return;
      const p = r.value;
      if (!a.trapped)
        return;
      function g(x) {
        if (u.paused || !p)
          return;
        const $ = x.target;
        p.contains($) ? l.value = $ : It(l.value, { select: !0 });
      }
      function m(x) {
        if (u.paused || !p)
          return;
        const $ = x.relatedTarget;
        $ !== null && (p.contains($) || It(l.value, { select: !0 }));
      }
      function h(x) {
        p.contains(l.value) || It(p);
      }
      document.addEventListener("focusin", g), document.addEventListener("focusout", m);
      const y = new MutationObserver(h);
      p && y.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", m), y.disconnect();
      });
    }), be(async (c) => {
      const p = r.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const g = De();
      if (!p.contains(g)) {
        const m = new CustomEvent(Lo, il);
        p.addEventListener(Lo, (h) => n("mountAutoFocus", h)), p.dispatchEvent(m), m.defaultPrevented || (Rn(Bf(nr(p)), {
          select: !0
        }), De() === g && It(p));
      }
      c(() => {
        p.removeEventListener(Lo, (y) => n("mountAutoFocus", y));
        const m = new CustomEvent(No, il), h = (y) => {
          n("unmountAutoFocus", y);
        };
        p.addEventListener(No, h), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || It(g ?? document.body, { select: !0 }), p.removeEventListener(No, h), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!a.loop && !a.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, g = De();
      if (p && g) {
        const m = c.currentTarget, [h, y] = wf(m);
        h && y ? !c.shiftKey && g === y ? (c.preventDefault(), a.loop && It(h, { select: !0 })) : c.shiftKey && g === h && (c.preventDefault(), a.loop && It(y, { select: !0 })) : g === m && c.preventDefault();
      }
    }
    return (c, p) => (f(), _(s(z), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: v(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), kf = "menu.itemSelect", is = ["Enter", " "], Of = ["ArrowDown", "PageUp", "Home"], ji = ["ArrowUp", "PageDown", "End"], Df = [...Of, ...ji], Ef = {
  ltr: [...is, "ArrowRight"],
  rtl: [...is, "ArrowLeft"]
}, Pf = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function or(t) {
  return t ? "open" : "closed";
}
function Jn(t) {
  return t === "indeterminate";
}
function sr(t) {
  return Jn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function us(t) {
  const e = De();
  for (const a of t)
    if (a === e || (a.focus(), De() !== e))
      return;
}
function Af(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let r = 0, l = e.length - 1; r < e.length; l = r++) {
    const i = e[r].x, u = e[r].y, d = e[l].x, c = e[l].y;
    u > n != c > n && a < (d - i) * (n - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function Mf(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return Af(a, e);
}
function Xa(t) {
  return t.pointerType === "mouse";
}
const Tf = "DialogTitle", If = "DialogContent";
function Ff({
  titleName: t = Tf,
  contentName: e = If,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: r
}) {
  const l = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  de(() => {
    var u;
    document.getElementById(n) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && d && (document.getElementById(o) || console.warn(i));
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
    const a = t, n = e, o = mt(), { forwardRef: r, currentElement: l } = W();
    return o.titleId || (o.titleId = Oe(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = Oe(void 0, "radix-vue-dialog-description")), de(() => {
      o.contentElement = l, De() !== document.body && (o.triggerElement.value = De());
    }), process.env.NODE_ENV !== "production" && Ff({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: l
    }), (i, u) => (f(), _(s(ho), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: v(() => [
        P(s(Ea), O({
          id: s(o).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(or)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
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
}), Rf = /* @__PURE__ */ b({
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
    const a = t, n = e, o = mt(), r = ea(n), { forwardRef: l, currentElement: i } = W();
    return dn(i), (u, d) => (f(), _(Wi, O({ ...a, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || g) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
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
    const a = t, n = ea(e);
    W();
    const o = mt(), r = D(!1), l = D(!1);
    return (i, u) => (f(), _(Wi, O({ ...a, ...s(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c;
        d.defaultPrevented || (r.value || (c = s(o).triggerElement.value) == null || c.focus(), d.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var c;
        d.defaultPrevented || (r.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const p = d.target;
        (c = s(o).triggerElement.value) != null && c.contains(p) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
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
    const a = t, n = e, o = mt(), r = ea(n), { forwardRef: l } = W();
    return (i, u) => (f(), _(s(Ue), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), _(Rf, O({
          key: 0,
          ref: s(l)
        }, { ...a, ...s(r), ...i.$attrs }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), _(Vf, O({
          key: 1,
          ref: s(l)
        }, { ...a, ...s(r), ...i.$attrs }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Lf = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = mt();
    return ln(!0), W(), (a, n) => (f(), _(s(z), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(e).open.value ? "open" : "closed",
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
    const e = mt(), { forwardRef: a } = W();
    return (n, o) => {
      var r;
      return (r = s(e)) != null && r.modal.value ? (f(), _(s(Ue), {
        key: 0,
        present: n.forceMount || s(e).open.value
      }, {
        default: v(() => [
          P(Lf, O(n.$attrs, {
            ref: s(a),
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
}), pn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = mt();
    return (n, o) => (f(), _(s(z), O(e, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => s(a).onOpenChange(!1))
    }), {
      default: v(() => [
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
    const e = t, a = mt();
    return W(), (n, o) => (f(), _(s(z), O(e, {
      id: s(a).titleId
    }), {
      default: v(() => [
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
    W();
    const a = mt();
    return (n, o) => (f(), _(s(z), O(e, {
      id: s(a).descriptionId
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Nf(t) {
  function e(n) {
    return Array.isArray(t.date.value) ? t.date.value.some((o) => Pe(o, n)) : t.date.value ? Pe(t.date.value, n) : !1;
  }
  const a = C(
    () => {
      var n, o, r, l;
      if (Array.isArray(t.date.value)) {
        if (!t.date.value.length)
          return !1;
        for (const i of t.date.value)
          if ((n = t.isDateDisabled) != null && n.call(t, i) || (o = t.isDateUnavailable) != null && o.call(t, i))
            return !0;
      } else {
        if (!t.date.value)
          return !1;
        if ((r = t.isDateDisabled) != null && r.call(t, t.date.value) || (l = t.isDateUnavailable) != null && l.call(t, t.date.value))
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
function zf(t, e) {
  const a = e(t), n = a.compare(t), o = {};
  return n >= 7 && (o.day = 1), n >= Bt(t) && (o.month = 1), a.set({ ...o });
}
function jf(t, e) {
  const a = e(t), n = t.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= Bt(t) && (o.month = 13), a.set({ ...o });
}
function Wf(t, e) {
  return e(t);
}
function Kf(t, e) {
  return e(t);
}
function Hi(t) {
  const e = Mi(t.locale.value), a = C(() => {
    const y = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (y.era = "short"), y;
  }), n = D(Ut({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = C(() => n.value.map((y) => y.value));
  function r(y) {
    return !o.value.some((x) => Ar(y, x));
  }
  const l = (y = "month", x) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const $ = n.value[n.value.length - 1].value;
    if (x || t.nextPage.value) {
      const S = zf($, x || t.nextPage.value);
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
      const S = jf($, x || t.prevPage.value);
      return Vt(S, t.minValue.value);
    }
    if (y === "year") {
      const S = $.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Vt(S, t.minValue.value);
    }
    const B = $.subtract({ months: 1 }).set({ day: 35 });
    return Vt(B, t.minValue.value);
  };
  function u(y) {
    var x;
    return !!((x = t.isDateDisabled) != null && x.call(t, y) || t.disabled.value || t.maxValue.value && Ka(y, t.maxValue.value) || t.minValue.value && Vt(y, t.minValue.value));
  }
  const d = (y) => {
    var x;
    return !!((x = t.isDateUnavailable) != null && x.call(t, y));
  }, c = C(() => n.value.length ? n.value[0].rows[0].map((y) => e.dayOfWeek(Ye(y), t.weekdayFormat.value)) : []), p = (y = "month", x) => {
    const $ = n.value[0].value;
    if (x || t.nextPage.value) {
      const E = Wf($, x || t.nextPage.value), k = Ut({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = k;
      const F = {};
      if (!x) {
        const M = k[0].value.compare($);
        M >= Bt($) && (F.day = 1), M >= 365 && (F.month = 1);
      }
      t.placeholder.value = k[0].value.set({ ...F });
      return;
    }
    const B = y === "month" ? $.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.add({ years: 1 }), S = Ut({
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
      const E = Kf($, x || t.prevPage.value), k = Ut({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = k;
      const F = {};
      if (!x) {
        const M = $.compare(k[0].value);
        M >= Bt($) && (F.day = 1), M >= 365 && (F.month = 1);
      }
      t.placeholder.value = k[0].value.set({ ...F });
      return;
    }
    const B = y === "month" ? $.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : $.subtract({ years: 1 }), S = Ut({
      dateObj: B,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = S, t.placeholder.value = S[0].value.set({ day: 1 });
  };
  X(t.placeholder, (y) => {
    o.value.some((x) => Ar(x, y)) || (n.value = Ut({
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
      const k = n.value[0].value;
      return `${e.fullMonthAndYear(Ye(k), a.value)}`;
    }
    const y = Ye(n.value[0].value), x = Ye(n.value[n.value.length - 1].value), $ = e.fullMonth(y, a.value), B = e.fullMonth(x, a.value), S = e.fullYear(y, a.value), E = e.fullYear(x, a.value);
    return S === E ? `${$} - ${B} ${E}` : `${$} ${S} - ${B} ${E}`;
  }), h = C(() => `${t.calendarLabel.value ?? "Event Date"}, ${m.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: l,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: o,
    isOutsideVisibleView: r,
    formatter: e,
    nextPage: p,
    prevPage: g,
    headingValue: m,
    fullCalendarLabel: h
  };
}
const Uf = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Hf = {
  role: "heading",
  "aria-level": "2"
}, [Pa, Gf] = fe("CalendarRoot"), Gi = /* @__PURE__ */ b({
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
      disabled: r,
      readonly: l,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: g,
      minValue: m,
      maxValue: h,
      numberOfMonths: y,
      preventDeselect: x,
      isDateDisabled: $,
      isDateUnavailable: B,
      calendarLabel: S,
      defaultValue: E,
      nextPage: k,
      prevPage: F,
      dir: M
    } = me(a), { primitiveElement: K, currentElement: V } = Da(), A = vt(M), T = we(a, "modelValue", n, {
      defaultValue: E.value,
      passive: a.modelValue === void 0
    }), R = $i({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value,
      locale: a.locale
    }), H = we(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function N(ee) {
      H.value = ee.copy();
    }
    const {
      fullCalendarLabel: j,
      headingValue: Q,
      isDateDisabled: se,
      isDateUnavailable: ye,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: ie,
      weekdays: pe,
      isOutsideVisibleView: Re,
      nextPage: He,
      prevPage: Qe,
      formatter: st,
      grid: Pt
    } = Hi({
      locale: o,
      placeholder: H,
      weekStartsOn: d,
      fixedWeeks: p,
      numberOfMonths: y,
      minValue: m,
      maxValue: h,
      disabled: r,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: $.value,
      isDateUnavailable: B.value,
      calendarLabel: S,
      nextPage: k,
      prevPage: F
    }), {
      isInvalid: J,
      isDateSelected: te
    } = Nf({
      date: T,
      isDateDisabled: se,
      isDateUnavailable: ye
    });
    X(T, (ee) => {
      if (Array.isArray(ee) && ee.length) {
        const xe = ee[ee.length - 1];
        xe && !lt(H.value, xe) && N(xe);
      } else !Array.isArray(ee) && ee && !lt(H.value, ee) && N(ee);
    });
    function le(ee) {
      if (g.value) {
        if (!T.value)
          T.value = [ee.copy()];
        else if (Array.isArray(T.value)) {
          if (T.value.findIndex((xe) => Pe(xe, ee)) === -1)
            T.value = [...T.value, ee];
          else if (!x.value) {
            const xe = T.value.filter((Le) => !Pe(Le, ee));
            if (!xe.length) {
              H.value = ee.copy(), T.value = void 0;
              return;
            }
            T.value = xe.map((Le) => Le.copy());
          }
        }
      } else {
        if (!T.value) {
          T.value = ee.copy();
          return;
        }
        !x.value && lt(T.value, ee) ? (H.value = ee.copy(), T.value = void 0) : T.value = ee.copy();
      }
    }
    return de(() => {
      i.value && Si(V.value);
    }), Gf({
      isDateUnavailable: ye,
      dir: A,
      isDateDisabled: se,
      locale: o,
      formatter: st,
      modelValue: T,
      placeholder: H,
      disabled: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: g,
      numberOfMonths: y,
      readonly: l,
      preventDeselect: x,
      fullCalendarLabel: j,
      headingValue: Q,
      isInvalid: J,
      isDateSelected: te,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: ie,
      isOutsideVisibleView: Re,
      nextPage: He,
      prevPage: Qe,
      parentElement: V,
      onPlaceholderChange: N,
      onDateChange: le
    }), (ee, xe) => (f(), _(s(z), {
      ref_key: "primitiveElement",
      ref: K,
      as: ee.as,
      "as-child": ee.asChild,
      role: "application",
      "aria-label": s(j),
      "data-readonly": s(l) ? "" : void 0,
      "data-disabled": s(r) ? "" : void 0,
      "data-invalid": s(J) ? "" : void 0,
      dir: s(A)
    }, {
      default: v(() => [
        w(ee.$slots, "default", {
          date: s(H),
          grid: s(Pt),
          weekDays: s(pe),
          weekStartsOn: s(d),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        he("div", Uf, [
          he("div", Hf, re(s(j)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), qf = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yf = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Pa();
    return (n, o) => (f(), _(s(z), O(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        w(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Z(re(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Jf = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Pa(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (r, l) => (f(), _(s(z), O(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Qf = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Pa();
    return (a, n) => {
      var o, r;
      return f(), _(s(z), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((r = (o = s(e)).isDateUnavailable) == null ? void 0 : r.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Xf = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zf = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Pa();
    return (o, r) => (f(), _(s(z), {
      as: e.as,
      "as-child": e.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).nextPage(e.step, e.nextPage))
    }, {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), ev = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Pa();
    return (o, r) => (f(), _(s(z), {
      "aria-label": "Previous page",
      as: e.as,
      "as-child": e.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).prevPage(e.step, e.prevPage))
    }, {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), tv = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), av = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nv = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ov = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Fi(), n = Pa(), { primitiveElement: o, currentElement: r } = Da(), l = C(() => e.day.day.toLocaleString(n.locale.value)), i = C(() => n.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = C(() => n.isDateDisabled(e.day)), d = C(
      () => {
        var S;
        return (S = n.isDateUnavailable) == null ? void 0 : S.call(n, e.day);
      }
    ), c = C(() => Ll(e.day, St())), p = C(() => !Es(e.day, e.month)), g = C(
      () => n.isOutsideVisibleView(e.day)
    ), m = C(() => !n.disabled.value && Pe(e.day, n.placeholder.value)), h = C(() => n.isDateSelected(e.day)), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x(S) {
      var E;
      n.readonly.value || n.isDateDisabled(S) || (E = n.isDateUnavailable) != null && E.call(n, S) || n.onDateChange(S);
    }
    function $() {
      x(e.day);
    }
    function B(S) {
      S.preventDefault(), S.stopPropagation();
      const E = n.parentElement.value, k = E ? Array.from(E.querySelectorAll(y)) : [];
      let F = k.indexOf(r.value);
      const M = 7, K = n.dir.value === "rtl" ? -1 : 1;
      switch (S.code) {
        case a.ARROW_RIGHT:
          F += K;
          break;
        case a.ARROW_LEFT:
          F -= K;
          break;
        case a.ARROW_UP:
          F -= M;
          break;
        case a.ARROW_DOWN:
          F += M;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          x(e.day);
          return;
        default:
          return;
      }
      if (F >= 0 && F < k.length) {
        k[F].focus();
        return;
      }
      if (F < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), ae(() => {
          const V = E ? Array.from(E.querySelectorAll(y)) : [];
          if (!n.pagedNavigation.value) {
            const A = Bt(n.placeholder.value);
            V[A - Math.abs(F)].focus();
            return;
          }
          V[V.length - Math.abs(F)].focus();
        });
        return;
      }
      if (F >= k.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ae(() => {
          const V = E ? Array.from(E.querySelectorAll(y)) : [];
          if (!n.pagedNavigation.value) {
            const A = Bt(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            V[V.length - A + F - k.length].focus();
            return;
          }
          V[F - k.length].focus();
        });
      }
    }
    return (S, E) => (f(), _(s(z), O({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": u.value || d.value ? !0 : void 0,
      "data-selected": h.value ? !0 : void 0,
      "data-value": S.day.toString(),
      "data-disabled": u.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": g.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: $,
      onKeydown: [
        Te(B, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = Te($e(() => {
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
function Qn(t) {
  return t === "indeterminate";
}
function qi(t) {
  return Qn(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const sv = ["value", "checked", "name", "disabled", "required"], [rv, lv] = fe("CheckboxRoot"), iv = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = me(a), r = we(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: l, currentElement: i } = W(), u = un(i), d = C(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return lv({
      disabled: o,
      state: r
    }), (c, p) => (f(), L(ne, null, [
      P(s(z), O(c.$attrs, {
        id: c.id,
        ref: s(l),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": s(Qn)(s(r)) ? "mixed" : s(r),
        "aria-required": a.required,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": s(qi)(s(r)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: Te($e(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (g) => r.value = s(Qn)(s(r)) ? !0 : !s(r))
      }), {
        default: v(() => [
          w(c.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(u) ? (f(), L("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "true",
        value: c.value,
        checked: !!s(r),
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
      }, null, 8, sv)) : oe("", !0)
    ], 64));
  }
}), uv = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = W(), a = rv();
    return (n, o) => (f(), _(s(Ue), {
      present: n.forceMount || s(Qn)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: v(() => [
        P(s(z), O({
          ref: s(e),
          "data-state": s(qi)(s(a).state.value),
          "data-disabled": s(a).disabled.value ? "" : void 0,
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
}), [Yi, dv] = fe("PopperRoot"), Aa = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = D();
    return dv({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), go = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = W(), o = Yi();
    return be(() => {
      o.onAnchorChange(e.element ?? n.value);
    }), (r, l) => (f(), _(s(z), {
      ref: s(a),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function cv(t) {
  return t !== null;
}
function pv(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var a, n, o;
      const { placement: r, rects: l, middlewareData: i } = e, u = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, d = u ? 0 : t.arrowWidth, c = u ? 0 : t.arrowHeight, [p, g] = ds(r), m = { start: "0%", center: "50%", end: "100%" }[g], h = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + d / 2, y = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let x = "", $ = "";
      return p === "bottom" ? (x = u ? m : `${h}px`, $ = `${-c}px`) : p === "top" ? (x = u ? m : `${h}px`, $ = `${l.floating.height + c}px`) : p === "right" ? (x = `${-c}px`, $ = u ? m : `${y}px`) : p === "left" && (x = `${l.floating.width + c}px`, $ = u ? m : `${y}px`), { data: { x, y: $ } };
    }
  };
}
function ds(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
const Ji = {
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
}, [Xw, fv] = fe("PopperContent"), Sa = /* @__PURE__ */ b({
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
    ...Ji
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Yi(), { forwardRef: r, currentElement: l } = W(), i = D(), u = D(), { width: d, height: c } = Ii(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: g.value,
      boundary: m.value.filter(cv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = vp(() => [
      hi({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && qn({
        ...h.value
      }),
      a.avoidCollisions && gi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? _i() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && qn({
        ...h.value
      }),
      yi({
        ...h.value,
        apply: ({ elements: A, rects: T, availableWidth: R, availableHeight: H }) => {
          const { width: N, height: j } = T.reference, Q = A.floating.style;
          Q.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), Q.setProperty(
            "--radix-popper-available-height",
            `${H}px`
          ), Q.setProperty(
            "--radix-popper-anchor-width",
            `${N}px`
          ), Q.setProperty(
            "--radix-popper-anchor-height",
            `${j}px`
          );
        }
      }),
      u.value && wi({ element: u.value, padding: a.arrowPadding }),
      pv({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && bi({ strategy: "referenceHidden", ...h.value })
    ]), { floatingStyles: x, placement: $, isPositioned: B, middlewareData: S } = Ci(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => mi(...A, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), E = C(
      () => ds($.value)[0]
    ), k = C(
      () => ds($.value)[1]
    );
    Os(() => {
      B.value && n("placed");
    });
    const F = C(
      () => {
        var A;
        return ((A = S.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), M = D("");
    be(() => {
      l.value && (M.value = window.getComputedStyle(l.value).zIndex);
    });
    const K = C(() => {
      var A;
      return ((A = S.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), V = C(() => {
      var A;
      return ((A = S.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return fv({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: K,
      arrowY: V,
      shouldHideArrow: F
    }), (A, T) => {
      var R, H, N;
      return f(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: ct({
          ...s(x),
          transform: s(B) ? s(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            (R = s(S).transformOrigin) == null ? void 0 : R.x,
            (H = s(S).transformOrigin) == null ? void 0 : H.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((N = s(S).hide) == null ? void 0 : N.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(s(z), O({ ref: s(r) }, A.$attrs, {
          "as-child": a.asChild,
          as: A.as,
          "data-side": E.value,
          "data-align": k.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(B) ? void 0 : "none"
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
}), fn = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return W(), (e, a) => (f(), _(s(z), {
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
}), vv = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([r, l]) => ({ name: `[${o}][${e.name}][${r}]`, value: l })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (f(!0), L(ne, null, _e(a.value, (r) => (f(), _(fn, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), mv = "data-radix-vue-collection-item", [ir, hv] = fe("CollectionProvider");
function ur(t = mv) {
  const e = D(/* @__PURE__ */ new Map()), a = D(), n = hv({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = cr(n), r = C(() => Array.from(n.itemMap.value.values())), l = C(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: l };
}
const dr = b({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = ir(), { primitiveElement: n, currentElement: o } = Da();
    return X(o, () => {
      a.collectionRef.value = o.value;
    }), () => Ie(er, { ref: n }, e);
  }
}), yo = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(t, { slots: e, attrs: a }) {
    const n = ir(), { primitiveElement: o, currentElement: r } = Da();
    return be((l) => {
      if (r.value) {
        const i = Il(r.value);
        n.itemMap.value.set(i, { ref: r.value, value: t.value }), l(() => n.itemMap.value.delete(i));
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
      (o, r) => n.indexOf(o.ref) - n.indexOf(r.ref)
    );
  } };
}
const [Ma, gv] = fe("ComboboxRoot"), yv = /* @__PURE__ */ b({
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
    const a = t, n = e, { multiple: o, disabled: r, dir: l } = me(a), i = vt(l), u = we(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), d = we(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), c = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = we(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function g(Y) {
      var ie, pe;
      c.value = Y, await ae(), Y ? (d.value && (Array.isArray(d.value) && o.value ? p.value = (ie = S().find((Re) => {
        var He, Qe;
        return ((Qe = (He = Re.ref) == null ? void 0 : He.dataset) == null ? void 0 : Qe.state) === "checked";
      })) == null ? void 0 : ie.value : p.value = d.value), await ae(), (pe = y.value) == null || pe.focus(), H()) : (h.value = !1, a.resetSearchTermOnBlur && K("blur"));
    }
    function m(Y) {
      if (Array.isArray(d.value) && o.value) {
        const ie = d.value.findIndex((Re) => qt(Re, Y)), pe = [...d.value];
        ie === -1 ? pe.push(Y) : pe.splice(ie, 1), d.value = pe;
      } else
        d.value = Y, g(!1);
    }
    const h = D(!1), y = D(), x = D(), { forwardRef: $, currentElement: B } = W(), { getItems: S, reactiveItems: E, itemMapSize: k } = ur("data-radix-vue-combobox-item"), F = D([]);
    X(() => k.value, () => {
      F.value = S().map((Y) => Y.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = C(() => {
      if (h.value) {
        if (a.filterFunction)
          return a.filterFunction(F.value, u.value);
        const Y = F.value.filter((ie) => typeof ie == "string");
        if (Y.length)
          return Y.filter((ie) => {
            var pe;
            return ie.toLowerCase().includes((pe = u.value) == null ? void 0 : pe.toLowerCase());
          });
      }
      return F.value;
    });
    function K(Y) {
      const ie = Y === "blur" || Y === "select" && a.resetSearchTermOnSelect;
      !o.value && d.value && !Array.isArray(d.value) ? a.displayValue ? u.value = a.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ie && (u.value = "") : ie && (u.value = "");
    }
    const V = C(() => M.value.findIndex((Y) => qt(Y, p.value))), A = C(() => {
      var Y;
      return (Y = E.value.find((ie) => qt(ie.value, p.value))) == null ? void 0 : Y.ref;
    }), T = C(() => JSON.stringify(d.value));
    X(T, async () => {
      await ae(), await ae(), K("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), X(() => [M.value.length, u.value.length], async ([Y, ie], [pe, Re]) => {
      await ae(), await ae(), Y && (Re > ie || V.value === -1) && (p.value = M.value[0]);
    });
    const R = un(B);
    function H() {
      var Y;
      A.value instanceof Element && ((Y = A.value) == null || Y.scrollIntoView({ block: "nearest" }));
    }
    function N() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const j = D(!1);
    function Q() {
      j.value = !0;
    }
    function se() {
      requestAnimationFrame(() => {
        j.value = !1;
      });
    }
    async function ye(Y) {
      var ie;
      M.value.length && p.value && A.value instanceof Element && (Y.preventDefault(), Y.stopPropagation(), j.value || (ie = A.value) == null || ie.click());
    }
    return gv({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: h,
      multiple: o,
      disabled: r,
      open: c,
      onOpenChange: g,
      filteredOptions: M,
      contentId: "",
      inputElement: y,
      selectedElement: A,
      onInputElementChange: (Y) => y.value = Y,
      onInputNavigation: async (Y) => {
        const ie = V.value;
        ie === 0 && Y === "up" || ie === M.value.length - 1 && Y === "down" || (ie === -1 && M.value.length || Y === "home" ? p.value = M.value[0] : Y === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[Y === "up" ? ie - 1 : ie + 1], await ae(), H(), N(), ae(() => {
          var pe;
          return (pe = y.value) == null ? void 0 : pe.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ye,
      onCompositionEnd: se,
      onCompositionStart: Q,
      selectedValue: p,
      onSelectedValueChange: (Y) => p.value = Y,
      parentElement: B,
      contentElement: x,
      onContentElementChange: (Y) => x.value = Y
    }), (Y, ie) => (f(), _(s(Aa), null, {
      default: v(() => [
        P(s(z), O({
          ref: s($),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: Y.as,
          "as-child": Y.asChild,
          dir: s(i)
        }, Y.$attrs), {
          default: v(() => [
            w(Y.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(R) && a.name ? (f(), _(s(vv), {
              key: 0,
              name: a.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : oe("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), bv = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(t) {
    const e = t, a = Ma(), { forwardRef: n, currentElement: o } = W();
    de(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        e.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = C(() => e.disabled || a.disabled.value || !1), l = D();
    Al(() => {
      var c;
      return l.value = (c = a.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      a.open.value ? a.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : a.onOpenChange(!0);
    }
    function u(c) {
      a.open.value && a.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var p;
      a.searchTerm.value = (p = c.target) == null ? void 0 : p.value, a.open.value || a.onOpenChange(!0), a.isUserInputted.value = !0;
    }
    return (c, p) => (f(), _(s(z), {
      ref: s(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: r.value,
      value: s(a).searchTerm.value,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": l.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        Te($e(i, ["prevent"]), ["down", "up"]),
        Te(s(a).onInputEnter, ["enter"]),
        Te($e(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(a).onCompositionStart,
      onCompositionend: s(a).onCompositionEnd
    }, {
      default: v(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Qi, _v] = fe("ComboboxGroup"), wv = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { currentRef: a, currentElement: n } = W(), o = Oe(void 0, "radix-vue-combobox-group"), r = Ma(), l = D(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return kp(n, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), X(() => r.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), _v({
      id: o
    }), (u, d) => Qt((f(), _(s(z), O(e, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: v(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [so, l.value]
    ]);
  }
}), xv = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Qi({ id: "" });
    return (n, o) => (f(), _(s(z), O(e, {
      id: s(a).id
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Zw, Cv] = fe("ComboboxContent"), $v = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = me(a), r = Ma();
    ln(a.bodyLock);
    const { forwardRef: l, currentElement: i } = W();
    dn(r.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), d = ve(u.value);
    function c(g) {
      r.onSelectedValueChange("");
    }
    de(() => {
      r.onContentElementChange(i.value);
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
    return Cv({ position: o }), (g, m) => (f(), _(s(dr), null, {
      default: v(() => [
        g.dismissable ? (f(), _(s(Ea), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: v(() => [
            (f(), _(je(s(o) === "popper" ? s(Sa) : s(z)), O({ ...g.$attrs, ...s(d) }, {
              id: s(r).contentId,
              ref: s(l),
              role: "listbox",
              "data-state": s(r).open.value ? "open" : "closed",
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
                w(g.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (f(), _(je(s(o) === "popper" ? s(Sa) : s(z)), O({ key: 1 }, { ...g.$attrs, ...u.value }, {
          id: s(r).contentId,
          ref: s(l),
          role: "listbox",
          "data-state": s(r).open.value ? "open" : "closed",
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
            w(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Sv = /* @__PURE__ */ b({
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
    const a = ue(t, e), { forwardRef: n } = W(), o = Ma();
    return o.contentId || (o.contentId = Oe(void 0, "radix-vue-combobox-content")), (r, l) => (f(), _(s(Ue), {
      present: r.forceMount || s(o).open.value
    }, {
      default: v(() => [
        P($v, O({ ...s(a), ...r.$attrs }, { ref: s(n) }), {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bv = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    W();
    const a = Ma(), n = C(() => a.filteredOptions.value.length === 0);
    return (o, r) => n.value ? (f(), _(s(z), U(O({ key: 0 }, e)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("No options")
        ])
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
});
function kv(t) {
  const e = vo({
    nonce: D()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [e1, Ov] = fe("ComboboxItem"), Dv = "combobox.select", Ev = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = me(a), r = Ma();
    Qi({ id: "", options: D([]) });
    const { forwardRef: l } = W(), i = C(
      () => {
        var y, x;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (y = r.modelValue.value) == null ? void 0 : y.some(($) => qt($, a.value)) : qt((x = r.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), u = C(() => qt(r.selectedValue.value, a.value)), d = Oe(void 0, "radix-vue-combobox-item"), c = Oe(void 0, "radix-vue-combobox-option"), p = C(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((y) => qt(y, a.value)) : !0);
    async function g(y) {
      n("select", y), !(y != null && y.defaultPrevented) && !o.value && y && r.onValueChange(a.value);
    }
    function m(y) {
      if (!y)
        return;
      const x = { originalEvent: y, value: a.value };
      qs(Dv, g, x);
    }
    async function h(y) {
      await ae(), !y.defaultPrevented && r.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Ov({
      isSelected: i
    }), (y, x) => (f(), _(s(yo), { value: y.value }, {
      default: v(() => [
        Qt(P(s(z), {
          id: s(c),
          ref: s(l),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": s(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": s(o) || void 0,
          "data-disabled": s(o) ? "" : void 0,
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
          [so, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Pv = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(z), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xi = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(go), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Av() {
  const t = D(!1);
  return de(() => {
    $a("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), $a(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const Mv = Bi(Av), [ta, Zi] = fe(["MenuRoot", "MenuSub"], "MenuContext"), [vn, Tv] = fe("MenuRoot"), Iv = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: r } = me(a), l = vt(r), i = we(a, "open", n), u = D(), d = Mv();
    return Zi({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Tv({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: o
    }), (c, p) => (f(), _(s(Aa), null, {
      default: v(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Fv = "rovingFocusGroup.onEntryFocus", Rv = { bubbles: !1, cancelable: !0 }, Vv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Lv(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function Nv(t, e, a) {
  const n = Lv(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Vv[n];
}
function eu(t, e = !1) {
  const a = De();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), De() !== a))
      return;
}
function zv(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [jv, Wv] = fe("RovingFocusGroup"), tu = /* @__PURE__ */ b({
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
    const n = t, o = a, { loop: r, orientation: l, dir: i } = me(n), u = vt(i), d = we(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = D(!1), p = D(!1), g = D(0), { getItems: m } = ur();
    function h(x) {
      const $ = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && $ && !c.value) {
        const B = new CustomEvent(Fv, Rv);
        if (x.currentTarget.dispatchEvent(B), o("entryFocus", B), !B.defaultPrevented) {
          const S = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), E = S.find((M) => M.getAttribute("data-active") === "true"), k = S.find(
            (M) => M.id === d.value
          ), F = [E, k, ...S].filter(
            Boolean
          );
          eu(F, n.preventScrollOnEntryFocus);
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
    }), Wv({
      loop: r,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (x) => {
        d.value = x;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        g.value++;
      },
      onFocusableItemRemove: () => {
        g.value--;
      }
    }), (x, $) => (f(), _(s(dr), null, {
      default: v(() => [
        P(s(z), {
          tabindex: c.value || g.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: x.as,
          "as-child": x.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: $[0] || ($[0] = (B) => p.value = !0),
          onMouseup: y,
          onFocus: h,
          onBlur: $[1] || ($[1] = (B) => c.value = !1)
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
}), Kv = /* @__PURE__ */ b({
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
    const e = t, a = jv(), n = C(() => e.tabStopId || Oe()), o = C(
      () => a.currentTabStopId.value === n.value
    ), { getItems: r } = cr();
    de(() => {
      e.focusable && a.onFocusableItemAdd();
    }), Ve(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Nv(
        i,
        a.orientation.value,
        a.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !e.allowShiftKey && i.shiftKey)
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
          d = a.loop.value ? zv(d, c + 1) : d.slice(c + 1);
        }
        ae(() => eu(d));
      }
    }
    return (i, u) => (f(), _(s(yo), null, {
      default: v(() => [
        P(s(z), {
          tabindex: o.value ? 0 : -1,
          "data-orientation": s(a).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? s(a).onItemFocus(n.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => s(a).onItemFocus(n.value)),
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
}), [pr, Uv] = fe("MenuContent"), fr = /* @__PURE__ */ b({
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
    ...Ji
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = ta(), r = vn(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = me(a);
    Xs(), ln(i.value);
    const d = D(""), c = D(0), p = D(0), g = D(null), m = D("right"), h = D(0), y = D(null), { createCollection: x } = Oa(), { forwardRef: $, currentElement: B } = W(), S = x(B);
    X(B, (A) => {
      o.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = Zs(S);
    Ve(() => {
      window.clearTimeout(c.value);
    });
    function k(A) {
      var T, R;
      return m.value === ((T = g.value) == null ? void 0 : T.side) && Mf(A, (R = g.value) == null ? void 0 : R.area);
    }
    async function F(A) {
      var T;
      n("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (T = B.value) == null || T.focus({
        preventScroll: !0
      }));
    }
    function M(A) {
      if (A.defaultPrevented)
        return;
      const T = A.target.closest("[data-radix-menu-content]") === A.currentTarget, R = A.ctrlKey || A.altKey || A.metaKey, H = A.key.length === 1, N = Ei(
        A,
        De(),
        B.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (N)
        return N == null ? void 0 : N.focus();
      if (A.code === "Space" || (T && (A.key === "Tab" && A.preventDefault(), !R && H && E(A.key)), A.target !== B.value) || !Df.includes(A.key))
        return;
      A.preventDefault();
      const j = S.value;
      ji.includes(A.key) && j.reverse(), us(j);
    }
    function K(A) {
      var T, R;
      (R = (T = A == null ? void 0 : A.currentTarget) == null ? void 0 : T.contains) != null && R.call(T, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function V(A) {
      var T;
      if (!Xa(A))
        return;
      const R = A.target, H = h.value !== A.clientX;
      if ((T = A == null ? void 0 : A.currentTarget) != null && T.contains(R) && H) {
        const N = A.clientX > h.value ? "right" : "left";
        m.value = N, h.value = A.clientX;
      }
    }
    return Uv({
      onItemEnter: (A) => !!k(A),
      onItemLeave: (A) => {
        var T;
        k(A) || ((T = B.value) == null || T.focus(), y.value = null);
      },
      onTriggerLeave: (A) => !!k(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        g.value = A;
      }
    }), (A, T) => (f(), _(s(ho), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: F,
      onUnmountAutoFocus: T[7] || (T[7] = (R) => n("closeAutoFocus", R))
    }, {
      default: v(() => [
        P(s(Ea), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: T[2] || (T[2] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: T[3] || (T[3] = (R) => n("pointerDownOutside", R)),
          onFocusOutside: T[4] || (T[4] = (R) => n("focusOutside", R)),
          onInteractOutside: T[5] || (T[5] = (R) => n("interactOutside", R)),
          onDismiss: T[6] || (T[6] = (R) => n("dismiss"))
        }, {
          default: v(() => [
            P(s(tu), {
              "current-tab-stop-id": y.value,
              "onUpdate:currentTabStopId": T[0] || (T[0] = (R) => y.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: T[1] || (T[1] = (R) => {
                n("entryFocus", R), s(r).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: v(() => [
                P(s(Sa), {
                  ref: s($),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(or)(s(o).open.value),
                  dir: s(r).dir.value,
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
                  onPointermove: V
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
}), au = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = pr(), { forwardRef: n } = W(), o = D(!1);
    async function r(i) {
      if (!i.defaultPrevented && Xa(i)) {
        if (e.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ae(), !i.defaultPrevented && Xa(i) && a.onItemLeave(i);
    }
    return (i, u) => (f(), _(s(yo), {
      value: { textValue: i.textValue }
    }, {
      default: v(() => [
        P(s(z), O({
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
          onPointermove: r,
          onPointerleave: l,
          onFocus: u[0] || (u[0] = async (d) => {
            await ae(), !(d.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await ae(), !d.defaultPrevented && (o.value = !1);
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
    const a = t, n = e, { forwardRef: o, currentElement: r } = W(), l = vn(), i = pr(), u = D(!1);
    async function d() {
      const c = r.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(kf, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ae(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (f(), _(au, O(a, {
      ref: s(o),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (g) => {
        var m;
        await ae(), !g.defaultPrevented && (u.value || (m = g.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (g) => {
        const m = s(i).searchRef.value !== "";
        c.disabled || m && g.key === " " || s(is).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: v(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Hv, nu] = fe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Gv = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Hv({
      checked: D(!1)
    });
    return (a, n) => (f(), _(s(Ue), {
      present: a.forceMount || s(Jn)(s(e).checked.value) || s(e).checked.value === !0
    }, {
      default: v(() => [
        P(s(z), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(sr)(s(e).checked.value)
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
}), qv = /* @__PURE__ */ b({
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
    const a = t, n = e, o = we(a, "checked", n);
    return nu({ checked: o }), (r, l) => (f(), _(vr, O({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s(Jn)(s(o)) ? "mixed" : s(o),
      "data-state": s(sr)(s(o)),
      onSelect: l[0] || (l[0] = async (i) => {
        n("select", i), s(Jn)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: v(() => [
        w(r.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Yv = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ue(a, n), r = ta(), { forwardRef: l, currentElement: i } = W();
    return dn(i), (u, d) => (f(), _(fr, O(s(o), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = $e((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: v(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Jv = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = ta();
    return (o, r) => (f(), _(fr, O(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => s(n).onOpenChange(!1))
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = ta(), o = vn();
    return (r, l) => (f(), _(s(Ue), {
      present: r.forceMount || s(n).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), _(Yv, U(O({ key: 0 }, { ...r.$attrs, ...s(a) })), {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), _(Jv, U(O({ key: 1 }, { ...r.$attrs, ...s(a) })), {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ou = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), O({ role: "group" }, e), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xv = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(cn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [em, tm] = fe("MenuRadioGroup"), am = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "modelValue", e);
    return tm({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, r) => (f(), _(ou, U(q(a)), {
      default: v(() => [
        w(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ b({
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
    const a = t, n = e, { value: o } = me(a), r = em(), l = C(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return nu({ checked: l }), (i, u) => (f(), _(vr, O({ role: "menuitemradio" }, a, {
      "aria-checked": l.value,
      "data-state": s(sr)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), s(r).onValueChange(s(o));
      })
    }), {
      default: v(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), om = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), O(e, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [su, sm] = fe("MenuSub"), rm = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "open", e, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = ta(), r = D(), l = D();
    return be((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), Zi({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), sm({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (f(), _(s(Aa), null, {
      default: v(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), lm = /* @__PURE__ */ b({
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
    const a = ue(t, e), n = ta(), o = vn(), r = su(), { forwardRef: l, currentElement: i } = W();
    return r.contentId || (r.contentId = Oe(void 0, "radix-vue-menu-sub-content")), (u, d) => (f(), _(s(Ue), {
      present: u.forceMount || s(n).open.value
    }, {
      default: v(() => [
        P(fr, O(s(a), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = $e((c) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = $e(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(o).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, g;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), h = s(Pf)[s(o).dir.value].includes(c.key);
            m && h && (s(n).onOpenChange(!1), (g = s(r).trigger.value) == null || g.focus(), c.preventDefault());
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
}), im = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = ta(), n = vn(), o = su(), r = pr(), l = D(null);
    o.triggerId || (o.triggerId = Oe(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ve(() => {
      i();
    });
    function u(p) {
      !Xa(p) || r.onItemEnter(p) || !e.disabled && !a.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var g, m;
      if (!Xa(p))
        return;
      i();
      const h = (g = a.content.value) == null ? void 0 : g.getBoundingClientRect();
      if (h != null && h.width) {
        const y = (m = a.content.value) == null ? void 0 : m.dataset.side, x = y === "right", $ = x ? -5 : 5, B = h[x ? "left" : "right"], S = h[x ? "right" : "left"];
        r.onPointerGraceIntentChange({
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
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(p))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var g;
      const m = r.searchRef.value !== "";
      e.disabled || m && p.key === " " || Ef[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ae(), (g = a.content.value) == null || g.focus(), p.preventDefault());
    }
    return (p, g) => (f(), _(Xi, { "as-child": "" }, {
      default: v(() => [
        P(au, O(e, {
          id: s(o).triggerId,
          ref: (m) => {
            var h;
            (h = s(o)) == null || h.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(or)(s(a).open.value),
          onClick: g[0] || (g[0] = async (m) => {
            e.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
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
}), [ru, um] = fe("DropdownMenuRoot"), dm = /* @__PURE__ */ b({
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
    const o = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = D(), { modal: l, dir: i } = me(a), u = vt(i);
    return um({
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
      modal: l,
      dir: u
    }), (d, c) => (f(), _(s(Iv), {
      open: s(o),
      "onUpdate:open": c[0] || (c[0] = (p) => tt(o) ? o.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: v(() => [
        w(d.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), cm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ru(), { forwardRef: n, currentElement: o } = W();
    return de(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = Oe(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (f(), _(s(Xi), { "as-child": "" }, {
      default: v(() => [
        P(s(z), {
          id: s(a).triggerId,
          ref: s(n),
          type: r.as === "button" ? "button" : void 0,
          "as-child": e.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).open.value ? s(a).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": s(a).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(a)) == null || u.onOpenToggle(), await ae(), s(a).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Te(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && s(a).onOpenToggle(), i.key === "ArrowDown" && s(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), pm = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Zv), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ b({
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
    W();
    const n = ru(), o = D(!1);
    function r(l) {
      l.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = Oe(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return f(), _(s(Qv), O(s(a), {
        id: s(n).contentId,
        "aria-labelledby": (u = s(n)) == null ? void 0 : u.triggerId,
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
          const p = d.detail.originalEvent, g = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || g;
          (!s(n).modal.value || m) && (o.value = !0), (c = s(n).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: v(() => [
          w(l.$slots, "default")
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
    const a = t, n = ea(e);
    return W(), (o, r) => (f(), _(s(vr), U(q({ ...a, ...s(n) })), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(ou), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(om), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ b({
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
    const a = t, n = ea(e);
    return W(), (o, r) => (f(), _(s(qv), U(q({ ...a, ...s(n) })), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iu = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(Gv), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(Xv), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = ea(e);
    return W(), (o, r) => (f(), _(s(am), U(q({ ...a, ...s(n) })), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ b({
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
    return W(), (n, o) => (f(), _(s(nm), U(q(s(a))), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = we(a, "open", e, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return W(), (o, r) => (f(), _(s(rm), {
      open: s(n),
      "onUpdate:open": r[0] || (r[0] = (l) => tt(n) ? n.value = l : null)
    }, {
      default: v(() => [
        w(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), wm = /* @__PURE__ */ b({
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
    return W(), (n, o) => (f(), _(s(lm), O(s(a), { style: {
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
}), xm = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(im), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(z), O(e, {
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
}), [Ta, $m] = fe("PaginationRoot"), t1 = /* @__PURE__ */ b({
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
    const a = t, n = e, { siblingCount: o, disabled: r, showEdges: l } = me(a);
    W();
    const i = we(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), u = C(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return $m({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: o,
      disabled: r,
      showEdges: l
    }), (d, c) => (f(), _(s(z), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: v(() => [
        w(d.$slots, "default", {
          page: s(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Sm = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(z), O(e, { "data-type": "ellipsis" }), {
      default: v(() => [
        w(a.$slots, "default", {}, () => [
          Z("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ta();
    W();
    const n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, r) => (f(), _(s(z), O(e, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(1))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), km = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ta();
    W();
    const n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, r) => (f(), _(s(z), O(e, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).pageCount.value))
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
function At(t, e) {
  const a = e - t + 1;
  return Array.from({ length: a }, (n, o) => o + t);
}
function Om(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const $n = "ellipsis";
function Dm(t, e, a, n) {
  const o = e, r = Math.max(t - a, 1), l = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, u = r > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(r - 1) > 2, d = l < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - l) > 2;
    if (!u && d)
      return [...At(1, i), $n, o];
    if (u && !d) {
      const c = At(o - i + 1, o);
      return [1, $n, ...c];
    }
    if (u && d) {
      const c = At(r, l);
      return [1, $n, ...c, $n, o];
    }
    return At(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? At(1, o) : t <= a + 1 ? At(1, i) : e - t <= a ? At(e - i + 1, o) : At(r, l);
  }
}
const a1 = /* @__PURE__ */ b({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    W();
    const a = Ta(), n = C(() => Om(
      Dm(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, r) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), n1 = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Ta(), n = C(() => a.page.value === e.value), o = C(() => a.disabled.value);
    return (r, l) => (f(), _(s(z), O(e, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !o.value && s(a).onPageChange(r.value))
    }), {
      default: v(() => [
        w(r.$slots, "default", {}, () => [
          Z(re(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Em = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Ta(), n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, r) => (f(), _(s(z), O(e, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Pm = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    W();
    const a = Ta(), n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, r) => (f(), _(s(z), O(e, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).page.value - 1))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [mn, Am] = fe("PopoverRoot"), Mm = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o } = me(a), r = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = D(), i = D(!1);
    return Am({
      contentId: "",
      modal: o,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: l,
      hasCustomAnchor: i
    }), (u, d) => (f(), _(s(Aa), null, {
      default: v(() => [
        w(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), Tm = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = mn(), { forwardRef: n, currentElement: o } = W();
    return de(() => {
      a.triggerElement.value = o.value;
    }), (r, l) => (f(), _(je(s(a).hasCustomAnchor.value ? s(z) : s(go)), { "as-child": "" }, {
      default: v(() => [
        P(s(z), {
          ref: s(n),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(a).open.value ? "open" : "closed",
          as: r.as,
          "as-child": e.asChild,
          onClick: s(a).onOpenToggle
        }, {
          default: v(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Im = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(cn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uu = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ve(a), { forwardRef: r } = W(), l = mn();
    return Xs(), (i, u) => (f(), _(s(ho), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: v(() => [
        P(s(Ea), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: v(() => [
            P(s(Sa), O(s(o), {
              id: s(l).contentId,
              ref: s(r),
              "data-state": s(l).open.value ? "open" : "closed",
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
}), Fm = /* @__PURE__ */ b({
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
    const a = t, n = e, o = mn(), r = D(!1);
    ln(!0);
    const l = ue(a, n), { forwardRef: i, currentElement: u } = W();
    return dn(u), (d, c) => (f(), _(uu, O(s(l), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = $e(
        (p) => {
          var g;
          n("closeAutoFocus", p), r.value || (g = s(o).triggerElement.value) == null || g.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const g = p.detail.originalEvent, m = g.button === 0 && g.ctrlKey === !0, h = g.button === 2 || m;
        r.value = h;
      }),
      onFocusOutside: c[2] || (c[2] = $e(() => {
      }, ["prevent"]))
    }), {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Rm = /* @__PURE__ */ b({
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
    const a = t, n = e, o = mn(), r = D(!1), l = D(!1), i = ue(a, n);
    return (u, d) => (f(), _(uu, O(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(o).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const g = c.target;
        (p = s(o).triggerElement.value) != null && p.contains(g) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
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
    const a = t, n = e, o = mn(), r = ue(a, n), { forwardRef: l } = W();
    return o.contentId || (o.contentId = Oe(void 0, "radix-vue-popover-content")), (i, u) => (f(), _(s(Ue), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        s(o).modal.value ? (f(), _(Fm, O({ key: 0 }, s(r), { ref: s(l) }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (f(), _(Rm, O({ key: 1 }, s(r), { ref: s(l) }), {
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
function Lm(t) {
  const e = C(() => t.start.value ? !!t.isDateDisabled(t.start.value) : !1), a = C(() => t.end.value ? !!t.isDateDisabled(t.end.value) : !1), n = C(
    () => e.value || a.value ? !1 : !!(t.start.value && t.end.value && Vt(t.end.value, t.start.value))
  ), o = (u) => t.start.value ? Pe(t.start.value, u) : !1, r = (u) => t.end.value ? Pe(t.end.value, u) : !1, l = (u) => t.start.value && Pe(t.start.value, u) || t.end.value && Pe(t.end.value, u) ? !0 : t.end.value && t.start.value ? Cc(u, t.start.value, t.end.value) : !1, i = C(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const u = Vt(t.start.value, t.focusedValue.value), d = u ? t.start.value : t.focusedValue.value, c = u ? t.focusedValue.value : t.start.value;
    return Pe(d, c) ? {
      start: d,
      end: c
    } : Bc(d, c, t.isDateUnavailable, t.isDateDisabled) ? {
      start: d,
      end: c
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: l,
    highlightedRange: i,
    isSelectionStart: o,
    isSelectionEnd: r,
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Pe(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Pe(i.value.end, u)
  };
}
const Nm = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, zm = {
  role: "heading",
  "aria-level": "2"
}, [Ia, jm] = fe("RangeCalendarRoot"), Wm = /* @__PURE__ */ b({
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
      readonly: r,
      initialFocus: l,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: g,
      isDateUnavailable: m,
      isDateDisabled: h,
      calendarLabel: y,
      maxValue: x,
      minValue: $,
      locale: B,
      dir: S,
      nextPage: E,
      prevPage: k
    } = me(a), { primitiveElement: F, currentElement: M } = Da(), K = vt(S), V = D(), A = D(), T = we(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), R = $i({
      defaultPlaceholder: a.placeholder,
      defaultValue: T.value.start,
      locale: a.locale
    }), H = D(T.value.start), N = D(T.value.end), j = we(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? R.copy(),
      passive: a.placeholder === void 0
    });
    function Q(ge) {
      j.value = ge.copy();
    }
    const {
      fullCalendarLabel: se,
      headingValue: ye,
      isDateDisabled: Y,
      isDateUnavailable: ie,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: Re,
      grid: He,
      weekdays: Qe,
      isOutsideVisibleView: st,
      nextPage: Pt,
      prevPage: J,
      formatter: te
    } = Hi({
      locale: B,
      placeholder: j,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: $,
      maxValue: x,
      disabled: o,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: h.value,
      isDateUnavailable: m.value,
      calendarLabel: y,
      nextPage: E,
      prevPage: k
    }), {
      isInvalid: le,
      isSelected: ee,
      highlightedRange: xe,
      isSelectionStart: Le,
      isSelectionEnd: Wt,
      isHighlightedStart: Kt,
      isHighlightedEnd: dd
    } = Lm({
      start: H,
      end: N,
      isDateDisabled: Y,
      isDateUnavailable: ie,
      focusedValue: A
    });
    return X(T, (ge) => {
      var Ge, Ne, ko, Dr;
      (!ge || !ge.start || H.value && !lt(ge.start, H.value)) && (H.value = (Ne = (Ge = ge == null ? void 0 : ge.start) == null ? void 0 : Ge.copy) == null ? void 0 : Ne.call(Ge)), (!ge || !ge.end || N.value && !lt(ge.end, N.value)) && (N.value = (Dr = (ko = ge == null ? void 0 : ge.end) == null ? void 0 : ko.copy) == null ? void 0 : Dr.call(ko));
    }), X(H, (ge) => {
      ge && !lt(ge, j.value) && Q(ge), n("update:startValue", ge);
    }), X([H, N], ([ge, Ge]) => {
      const Ne = T.value;
      if (!(Ne && Ne.start && Ne.end && ge && Ge && lt(Ne.start, ge) && lt(Ne.end, Ge)))
        if (ge && Ge) {
          if (Ne.start && Ne.end && lt(Ne.start, ge) && lt(Ne.end, Ge))
            return;
          Vt(Ge, ge) ? T.value = {
            start: Ge.copy(),
            end: ge.copy()
          } : T.value = {
            start: ge.copy(),
            end: Ge.copy()
          };
        } else Ne.start && Ne.end && (T.value = {
          start: ge == null ? void 0 : ge.copy(),
          end: void 0
        });
    }), jm({
      isDateUnavailable: ie,
      startValue: H,
      endValue: N,
      formatter: te,
      modelValue: T,
      placeholder: j,
      disabled: o,
      initialFocus: l,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: g,
      fullCalendarLabel: se,
      headingValue: ye,
      isInvalid: le,
      isDateDisabled: Y,
      highlightedRange: xe,
      focusedValue: A,
      lastPressedDateValue: V,
      isSelected: ee,
      isSelectionEnd: Wt,
      isSelectionStart: Le,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: Re,
      isOutsideVisibleView: st,
      nextPage: Pt,
      prevPage: J,
      parentElement: M,
      onPlaceholderChange: Q,
      locale: B,
      dir: K,
      isHighlightedStart: Kt,
      isHighlightedEnd: dd
    }), de(() => {
      l.value && Si(M.value);
    }), (ge, Ge) => (f(), _(s(z), {
      ref_key: "primitiveElement",
      ref: F,
      as: ge.as,
      "as-child": ge.asChild,
      role: "application",
      "aria-label": s(se),
      "data-readonly": s(r) ? "" : void 0,
      "data-disabled": s(o) ? "" : void 0,
      "data-invalid": s(le) ? "" : void 0,
      dir: s(K)
    }, {
      default: v(() => [
        he("div", Nm, [
          he("div", zm, re(s(se)), 1)
        ]),
        w(ge.$slots, "default", {
          date: s(j),
          grid: s(He),
          weekDays: s(Qe),
          weekStartsOn: s(u),
          locale: s(B),
          fixedWeeks: s(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Km = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ia();
    return (n, o) => (f(), _(s(z), O(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: v(() => [
        w(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Z(re(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Hm = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Ia(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (r, l) => (f(), _(s(z), O(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Gm = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Ia();
    return (a, n) => {
      var o, r;
      return f(), _(s(z), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((r = (o = s(e)).isDateUnavailable) == null ? void 0 : r.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: v(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), qm = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ym = /* @__PURE__ */ b({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Ia();
    return (o, r) => (f(), _(s(z), O(e, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).nextPage(e.step, e.nextPage))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Jm = /* @__PURE__ */ b({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Ia();
    return (o, r) => (f(), _(s(z), O(e, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).prevPage(e.step, e.prevPage))
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Qm = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xm = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zm = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ia(), n = Fi(), { primitiveElement: o, currentElement: r } = Da(), l = C(() => a.formatter.custom(Ye(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = C(() => a.isDateDisabled(e.day)), u = C(() => {
      var V;
      return (V = a.isDateUnavailable) == null ? void 0 : V.call(a, e.day);
    }), d = C(() => a.isSelected(e.day)), c = C(() => a.isSelectionStart(e.day)), p = C(() => a.isSelectionEnd(e.day)), g = C(() => a.isHighlightedStart(e.day)), m = C(() => a.isHighlightedEnd(e.day)), h = C(() => a.highlightedRange.value ? xc(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = C(() => Ll(e.day, St())), $ = C(() => !Es(e.day, e.month)), B = C(
      () => a.isOutsideVisibleView(e.day)
    ), S = C(() => e.day.day.toLocaleString(a.locale.value)), E = C(() => !a.disabled.value && Pe(e.day, a.placeholder.value));
    function k(V, A) {
      var T;
      if (!a.readonly.value && !(a.isDateDisabled(A) || (T = a.isDateUnavailable) != null && T.call(a, A))) {
        if (a.lastPressedDateValue.value = A.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Pe(A, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(A);
            return;
          } else if (!a.endValue.value) {
            V.preventDefault(), a.lastPressedDateValue.value && Pe(a.lastPressedDateValue.value, A) && (a.startValue.value = A.copy());
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
    function F(V) {
      k(V, e.day);
    }
    function M() {
      var V;
      a.isDateDisabled(e.day) || (V = a.isDateUnavailable) != null && V.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function K(V) {
      V.preventDefault(), V.stopPropagation();
      const A = a.parentElement.value, T = A ? Array.from(A.querySelectorAll(y)) : [];
      let R = T.indexOf(r.value);
      const H = 7, N = a.dir.value === "rtl" ? -1 : 1;
      switch (V.code) {
        case n.ARROW_RIGHT:
          R += N;
          break;
        case n.ARROW_LEFT:
          R -= N;
          break;
        case n.ARROW_UP:
          R -= H;
          break;
        case n.ARROW_DOWN:
          R += H;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          k(V, e.day);
          return;
        default:
          return;
      }
      if (R >= 0 && R < T.length) {
        T[R].focus();
        return;
      }
      if (R < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), ae(() => {
          const j = A ? Array.from(A.querySelectorAll(y)) : [];
          if (!a.pagedNavigation.value) {
            const Q = Bt(a.placeholder.value);
            j[Q - Math.abs(R)].focus();
            return;
          }
          j[j.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= T.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), ae(() => {
          const j = A ? Array.from(A.querySelectorAll(y)) : [];
          if (!a.pagedNavigation.value) {
            const Q = Bt(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            j[j.length - Q + R - T.length].focus();
            return;
          }
          j[R - T.length].focus();
        });
      }
    }
    return (V, A) => (f(), _(s(z), O({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": l.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? !0 : void 0,
      "aria-disabled": i.value || u.value ? !0 : void 0,
      "data-highlighted": h.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": g.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": d.value ? !0 : void 0,
      "data-outside-visible-view": B.value ? "" : void 0,
      "data-value": V.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-view": $.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : $.value || i.value ? void 0 : -1,
      onClick: F,
      onFocusin: M,
      onMouseenter: M,
      onKeydown: Te(K, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: v(() => [
        w(V.$slots, "default", { dayValue: S.value }, () => [
          Z(re(S.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), th = ["default-value"], ah = /* @__PURE__ */ b({
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
    const e = t, { value: a } = me(e), n = D();
    return (o, r) => (f(), _(s(fn), { "as-child": "" }, {
      default: v(() => [
        Qt(he("select", O({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => tt(a) ? a.value = l : null),
          "default-value": s(a)
        }), [
          w(o.$slots, "default")
        ], 16, th), [
          [vd, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), nh = {
  key: 0,
  value: ""
}, [aa, du] = fe("SelectRoot"), [oh, sh] = fe("SelectRoot"), rh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = we(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), r = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = D(), i = D(), u = D({
      x: 0,
      y: 0
    }), d = D(!1), { required: c, disabled: p, dir: g } = me(a), m = vt(g);
    du({
      triggerElement: l,
      onTriggerChange: ($) => {
        l.value = $;
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
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const h = un(l), y = D(/* @__PURE__ */ new Set()), x = C(() => Array.from(y.value).map(($) => {
      var B;
      return (B = $.props) == null ? void 0 : B.value;
    }).join(";"));
    return sh({
      onNativeOptionAdd: ($) => {
        y.value.add($);
      },
      onNativeOptionRemove: ($) => {
        y.value.delete($);
      }
    }), ($, B) => (f(), _(s(Aa), null, {
      default: v(() => [
        w($.$slots, "default", {
          modelValue: s(o),
          open: s(r)
        }),
        s(h) ? (f(), _(ah, O({ key: x.value }, $.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: $.name,
          autocomplete: $.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: B[0] || (B[0] = (S) => o.value = S.target.value)
        }), {
          default: v(() => [
            s(o) === void 0 ? (f(), L("option", nh)) : oe("", !0),
            (f(!0), L(ne, null, _e(Array.from(y.value), (S) => (f(), _(je(S), O({ ref_for: !0 }, S.props, {
              key: S.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : oe("", !0)
      ]),
      _: 3
    }));
  }
}), lh = [" ", "Enter", "ArrowUp", "ArrowDown"], ih = [" ", "Enter"], et = 10;
function cu(t) {
  return t === "" || Fn(t);
}
const uh = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = aa(), n = C(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || e.disabled;
    }), { forwardRef: o, currentElement: r } = W();
    a.contentId || (a.contentId = Oe(void 0, "radix-vue-select-content")), de(() => {
      a.triggerElement = r;
    });
    const { injectCollection: l } = Oa(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Zs(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function g(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, h) => (f(), _(s(go), { "as-child": "" }, {
      default: v(() => {
        var y, x, $, B;
        return [
          P(s(z), {
            ref: s(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(a).contentId,
            "aria-expanded": s(a).open.value || !1,
            "aria-required": (y = s(a).required) == null ? void 0 : y.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = s(a)) == null ? void 0 : x.dir.value,
            "data-state": ($ = s(a)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(cu)((B = s(a).modelValue) == null ? void 0 : B.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: h[0] || (h[0] = (S) => {
              var E;
              (E = S == null ? void 0 : S.currentTarget) == null || E.focus();
            }),
            onPointerdown: h[1] || (h[1] = (S) => {
              if (S.pointerType === "touch")
                return S.preventDefault();
              const E = S.target;
              E.hasPointerCapture(S.pointerId) && E.releasePointerCapture(S.pointerId), S.button === 0 && S.ctrlKey === !1 && (g(S), S.preventDefault());
            }),
            onPointerup: h[2] || (h[2] = $e(
              (S) => {
                S.pointerType === "touch" && g(S);
              },
              ["prevent"]
            )),
            onKeydown: h[3] || (h[3] = (S) => {
              const E = s(u) !== "";
              !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && E && S.key === " " || (s(d)(S.key), s(lh).includes(S.key) && (p(), S.preventDefault()));
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
}), dh = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(cn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [mr, ch] = fe("SelectItemAlignedPosition"), ph = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = Oa(), r = aa(), l = na(), i = o(), u = D(!1), d = D(!0), c = D(), { forwardRef: p, currentElement: g } = W(), { viewport: m, selectedItem: h, selectedItemText: y, focusSelectedItem: x } = l;
    function $() {
      if (r.triggerElement.value && r.valueElement.value && c.value && g.value && m != null && m.value && h != null && h.value && y != null && y.value) {
        const E = r.triggerElement.value.getBoundingClientRect(), k = g.value.getBoundingClientRect(), F = r.valueElement.value.getBoundingClientRect(), M = y.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const J = M.left - k.left, te = F.left - J, le = E.left - te, ee = E.width + le, xe = Math.max(ee, k.width), Le = window.innerWidth - et, Wt = Yn(te, et, Math.max(et, Le - xe));
          c.value.style.minWidth = `${ee}px`, c.value.style.left = `${Wt}px`;
        } else {
          const J = k.right - M.right, te = window.innerWidth - F.right - J, le = window.innerWidth - E.right - te, ee = E.width + le, xe = Math.max(ee, k.width), Le = window.innerWidth - et, Wt = Yn(
            te,
            et,
            Math.max(et, Le - xe)
          );
          c.value.style.minWidth = `${ee}px`, c.value.style.right = `${Wt}px`;
        }
        const K = i.value, V = window.innerHeight - et * 2, A = m.value.scrollHeight, T = window.getComputedStyle(g.value), R = Number.parseInt(
          T.borderTopWidth,
          10
        ), H = Number.parseInt(T.paddingTop, 10), N = Number.parseInt(
          T.borderBottomWidth,
          10
        ), j = Number.parseInt(
          T.paddingBottom,
          10
        ), Q = R + H + A + j + N, se = Math.min(
          h.value.offsetHeight * 5,
          Q
        ), ye = window.getComputedStyle(m.value), Y = Number.parseInt(ye.paddingTop, 10), ie = Number.parseInt(
          ye.paddingBottom,
          10
        ), pe = E.top + E.height / 2 - et, Re = V - pe, He = h.value.offsetHeight / 2, Qe = h.value.offsetTop + He, st = R + H + Qe, Pt = Q - st;
        if (st <= pe) {
          const J = h.value === K[K.length - 1];
          c.value.style.bottom = "0px";
          const te = g.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, le = Math.max(
            Re,
            He + (J ? ie : 0) + te + N
          ), ee = st + le;
          c.value.style.height = `${ee}px`;
        } else {
          const J = h.value === K[0];
          c.value.style.top = "0px";
          const te = Math.max(
            pe,
            R + m.value.offsetTop + (J ? Y : 0) + He
          ) + Pt;
          c.value.style.height = `${te}px`, m.value.scrollTop = st - pe + m.value.offsetTop;
        }
        c.value.style.margin = `${et}px 0`, c.value.style.minHeight = `${se}px`, c.value.style.maxHeight = `${V}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const B = D("");
    de(async () => {
      await ae(), $(), g.value && (B.value = window.getComputedStyle(g.value).zIndex);
    });
    function S(E) {
      E && d.value === !0 && ($(), x == null || x(), d.value = !1);
    }
    return ch({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: S
    }), (E, k) => (f(), L("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: ct({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: B.value
      })
    }, [
      P(s(z), O({
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
          w(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), fh = /* @__PURE__ */ b({
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
    const e = ve(t);
    return (a, n) => (f(), _(s(Sa), O(s(e), { style: {
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
}), Fa = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [na, vh] = fe("SelectContent"), mh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = aa();
    Xs(), ln(a.bodyLock);
    const { createCollection: r } = Oa(), l = D();
    dn(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = Zs(i), c = D(), p = D(), g = D(), m = D(!1), h = D(!1);
    function y() {
      p.value && l.value && us([p.value, l.value]);
    }
    X(m, () => {
      y();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: $ } = o;
    be((k) => {
      if (!l.value)
        return;
      let F = { x: 0, y: 0 };
      const M = (V) => {
        var A, T;
        F = {
          x: Math.abs(
            Math.round(V.pageX) - (((A = $.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((T = $.value) == null ? void 0 : T.y) ?? 0)
          )
        };
      }, K = (V) => {
        var A;
        V.pointerType !== "touch" && (F.x <= 10 && F.y <= 10 ? V.preventDefault() : (A = l.value) != null && A.contains(V.target) || x(!1), document.removeEventListener("pointermove", M), $.value = null);
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
      const F = k.ctrlKey || k.altKey || k.metaKey;
      if (k.key === "Tab" && k.preventDefault(), !F && k.key.length === 1 && d(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
        let M = i.value;
        if (["ArrowUp", "End"].includes(k.key) && (M = M.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
          const K = k.target, V = M.indexOf(K);
          M = M.slice(V + 1);
        }
        setTimeout(() => us(M)), k.preventDefault();
      }
    }
    const S = C(() => a.position === "popper" ? a : {}), E = ve(S.value);
    return vh({
      content: l,
      viewport: c,
      onViewportChange: (k) => {
        c.value = k;
      },
      itemRefCallback: (k, F, M) => {
        var K, V;
        const A = !h.value && !M;
        (((K = o.modelValue) == null ? void 0 : K.value) !== void 0 && ((V = o.modelValue) == null ? void 0 : V.value) === F || A) && (p.value = k, A && (h.value = !0));
      },
      selectedItem: p,
      selectedItemText: g,
      onItemLeave: () => {
        var k;
        (k = l.value) == null || k.focus();
      },
      itemTextRefCallback: (k, F, M) => {
        var K, V;
        const A = !h.value && !M;
        (((K = o.modelValue) == null ? void 0 : K.value) !== void 0 && ((V = o.modelValue) == null ? void 0 : V.value) === F || A) && (g.value = k);
      },
      focusSelectedItem: y,
      position: a.position,
      isPositioned: m,
      searchRef: u
    }), (k, F) => (f(), _(s(ho), {
      "as-child": "",
      onMountAutoFocus: F[6] || (F[6] = $e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: F[7] || (F[7] = (M) => {
        var K;
        n("closeAutoFocus", M), !M.defaultPrevented && ((K = s(o).triggerElement.value) == null || K.focus({ preventScroll: !0 }), M.preventDefault());
      })
    }, {
      default: v(() => [
        P(s(Ea), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: F[2] || (F[2] = $e(() => {
          }, ["prevent"])),
          onDismiss: F[3] || (F[3] = (M) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: F[4] || (F[4] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: F[5] || (F[5] = (M) => n("pointerDownOutside", M))
        }, {
          default: v(() => [
            (f(), _(je(
              k.position === "popper" ? fh : ph
            ), O({ ...k.$attrs, ...s(E) }, {
              id: s(o).contentId,
              ref: (M) => {
                l.value = s(Je)(M);
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
              onContextmenu: F[0] || (F[0] = $e(() => {
              }, ["prevent"])),
              onPlaced: F[1] || (F[1] = (M) => m.value = !0),
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
}), hh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(t) {
    return du(t.context), (e, a) => w(e.$slots, "default");
  }
}), gh = { key: 1 }, yh = /* @__PURE__ */ b({
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
    const a = t, n = ue(a, e), o = aa(), r = D();
    de(() => {
      r.value = new DocumentFragment();
    });
    const l = D(), i = C(() => a.forceMount || o.open.value);
    return (u, d) => {
      var c;
      return i.value ? (f(), _(s(Ue), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: v(() => [
          P(mh, U(q({ ...s(n), ...u.$attrs })), {
            default: v(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (f(), L("div", gh, [
        (f(), _(an, { to: r.value }, [
          P(hh, { context: s(o) }, {
            default: v(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : oe("", !0);
    };
  }
}), bh = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), O({ "aria-hidden": "true" }, e), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [pu, _h] = fe("SelectItem"), wh = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { disabled: a } = me(e), n = aa(), o = na(Fa), { forwardRef: r, currentElement: l } = W(), i = C(() => {
      var y;
      return ((y = n.modelValue) == null ? void 0 : y.value) === e.value;
    }), u = D(!1), d = D(e.textValue ?? ""), c = Oe(void 0, "radix-vue-select-item-text");
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
      await ae(), !(y.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && y.key === " ") && (ih.includes(y.key) && p(), y.key === " " && y.preventDefault());
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
    }), _h({
      value: e.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (y) => {
        d.value = ((d.value || (y == null ? void 0 : y.textContent)) ?? "").trim();
      }
    }), (y, x) => (f(), _(s(z), {
      ref: s(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": s(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": s(a) || void 0,
      "data-disabled": s(a) ? "" : void 0,
      tabindex: s(a) ? void 0 : -1,
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
}), xh = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = pu();
    return (n, o) => s(a).isSelected.value ? (f(), _(s(z), O({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
}), [Ch, $h] = fe("SelectGroup"), Sh = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Oe(void 0, "radix-vue-select-group");
    return $h({ id: a }), (n, o) => (f(), _(s(z), O({ role: "group" }, e, { "aria-labelledby": s(a) }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Bh = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ch({ id: "" });
    return (n, o) => (f(), _(s(z), O(e, {
      id: s(a).id
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), fu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = aa(), n = na(Fa), o = oh(), r = pu(), { forwardRef: l, currentElement: i } = W(), u = C(() => {
      var d;
      return Ie("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return de(() => {
      i.value && (r.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), oo(() => {
      o.onNativeOptionRemove(u.value);
    }), (d, c) => (f(), L(ne, null, [
      P(s(z), O({
        id: s(r).textId,
        ref: s(l)
      }, { ...e, ...d.$attrs }, { "data-item-text": "" }), {
        default: v(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (f(), _(an, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        w(d.$slots, "default")
      ], 8, ["to"])) : oe("", !0)
    ], 64));
  }
}), kh = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = me(e), n = kv(a), o = na(Fa), r = o.position === "item-aligned" ? mr() : void 0, { forwardRef: l, currentElement: i } = W();
    de(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = D(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: g, contentWrapper: m } = r ?? {};
      if (g != null && g.value && m != null && m.value) {
        const h = Math.abs(u.value - p.scrollTop);
        if (h > 0) {
          const y = window.innerHeight - et * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), $ = Number.parseFloat(m.value.style.height), B = Math.max(x, $);
          if (B < y) {
            const S = B + h, E = Math.min(y, S), k = S - E;
            m.value.style.height = `${E}px`, m.value.style.bottom === "0px" && (p.scrollTop = k > 0 ? k : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (f(), L(ne, null, [
      P(s(z), O({
        ref: s(l),
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
        onScroll: d
      }), {
        default: v(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      P(s(z), {
        as: "style",
        nonce: s(n)
      }, {
        default: v(() => [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), vu = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(t, { emit: e }) {
    const a = e, { injectCollection: n } = Oa(), o = n(), r = na(Fa), l = D(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    be(() => {
      const c = o.value.find(
        (p) => p === De()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = r.onItemLeave) == null || c.call(r), l.value === null && (l.value = window.setInterval(() => {
        a("autoScroll");
      }, 50));
    }
    return oo(() => i()), (c, p) => {
      var g;
      return f(), _(s(z), O({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (g = c.$parent) == null ? void 0 : g.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: v(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Oh = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = na(Fa), a = e.position === "item-aligned" ? mr() : void 0, { forwardRef: n, currentElement: o } = W(), r = D(!1);
    return be((l) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = e.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (l, i) => r.value ? (f(), _(vu, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(e);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : oe("", !0);
  }
}), Dh = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = na(Fa), a = e.position === "item-aligned" ? mr() : void 0, { forwardRef: n, currentElement: o } = W(), r = D(!1);
    return be((l) => {
      var i, u;
      if ((i = e.viewport) != null && i.value && (u = e.isPositioned) != null && u.value) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < p;
        };
        const c = e.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), X(o, () => {
      o.value && (a == null || a.onScrollButtonChange(o.value));
    }), (l, i) => r.value ? (f(), _(vu, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(e);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : oe("", !0);
  }
}), Eh = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = W(), n = aa(), o = Pl();
    return pd(() => {
      var r;
      const l = !!fo((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
      n.onValueElementHasChildrenChange(l);
    }), de(() => {
      n.valueElement = a;
    }), (r, l) => (f(), _(s(z), {
      ref: s(e),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: v(() => {
        var i;
        return [
          s(cu)((i = s(n).modelValue) == null ? void 0 : i.value) ? (f(), L(ne, { key: 0 }, [
            Z(re(r.placeholder), 1)
          ], 64)) : w(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ph = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (f(), _(s(z), {
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
}), Ah = /* @__PURE__ */ b({
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
    ), r = C(
      () => o.value === "vertical" ? e.orientation : void 0
    ), l = C(
      () => e.decorative ? { role: "none" } : { "aria-orientation": r.value, role: "separator" }
    );
    return (i, u) => (f(), _(s(z), O({
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
}), Mh = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(Ah, U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Th(t = [], e, a) {
  const n = [...t];
  return n[a] = e, n.sort((o, r) => o - r);
}
function mu(t, e, a) {
  const n = 100 / (a - e) * (t - e);
  return Yn(n, 0, 100);
}
function Ih(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function Fh(t, e) {
  if (t.length === 1)
    return 0;
  const a = t.map((o) => Math.abs(o - e)), n = Math.min(...a);
  return a.indexOf(n);
}
function Rh(t, e, a) {
  const n = t / 2, o = hr([0, 50], [0, n]);
  return (n - o(e) * a) * a;
}
function Vh(t) {
  return t.slice(0, -1).map((e, a) => t[a + 1] - e);
}
function Lh(t, e) {
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
function Nh(t) {
  return (String(t).split(".")[1] || "").length;
}
function zh(t, e) {
  const a = 10 ** e;
  return Math.round(t * a) / a;
}
const hu = ["PageUp", "PageDown"], gu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yu = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [bu, _u] = fe(["SliderVertical", "SliderHorizontal"]), wu = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = bo();
    return (r, l) => (f(), _(s(z), O({ "data-slider-impl": "" }, a, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : s(hu).concat(s(gu)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), s(o).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
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
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jh = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: r, dir: l, inverted: i } = me(a), { forwardRef: u, currentElement: d } = W(), c = D(), p = C(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function g(m) {
      const h = c.value || d.value.getBoundingClientRect(), y = [0, h.width], x = p.value ? [r.value, o.value] : [o.value, r.value], $ = hr(y, x);
      return c.value = h, $(m - h.left);
    }
    return _u({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, h) => (f(), _(wu, {
      ref: s(u),
      dir: s(l),
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
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: h[3] || (h[3] = (y) => {
        const x = p.value ? "from-left" : "from-right", $ = s(yu)[x].includes(y.key);
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
}), Wh = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: r, inverted: l } = me(a), { forwardRef: i, currentElement: u } = W(), d = D(), c = C(() => !l.value);
    function p(g) {
      const m = d.value || u.value.getBoundingClientRect(), h = [0, m.height], y = c.value ? [o.value, r.value] : [r.value, o.value], x = hr(h, y);
      return d.value = m, x(g - m.top);
    }
    return _u({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (g, m) => (f(), _(wu, {
      ref: s(i),
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
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (h) => {
        const y = c.value ? "from-bottom" : "from-top", x = s(yu)[y].includes(h.key);
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
}), Kh = ["value", "name", "disabled", "step"], [bo, Uh] = fe("SliderRoot"), Hh = /* @__PURE__ */ b({
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
    const a = t, n = e, { min: o, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = me(a), p = vt(c), { forwardRef: g, currentElement: m } = W(), h = un(m);
    ur();
    const y = we(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = D(0), $ = D(y.value);
    function B(M) {
      const K = Fh(y.value, M);
      k(M, K);
    }
    function S(M) {
      k(M, x.value);
    }
    function E() {
      const M = $.value[x.value];
      y.value[x.value] !== M && n("valueCommit", gd(y.value));
    }
    function k(M, K, { commit: V } = { commit: !1 }) {
      var A;
      const T = Nh(l.value), R = zh(Math.round((M - o.value) / l.value) * l.value + o.value, T), H = Yn(R, o.value, r.value), N = Th(y.value, H, K);
      if (Lh(N, i.value * l.value)) {
        x.value = N.indexOf(H);
        const j = String(N) !== String(y.value);
        j && V && n("valueCommit", N), j && ((A = F.value[x.value]) == null || A.focus(), y.value = N);
      }
    }
    const F = D([]);
    return Uh({
      modelValue: y,
      valueIndexToChangeRef: x,
      thumbElements: F,
      orientation: u,
      min: o,
      max: r,
      disabled: d
    }), (M, K) => (f(), L(ne, null, [
      P(s(dr), null, {
        default: v(() => [
          (f(), _(je(s(u) === "horizontal" ? jh : Wh), O(M.$attrs, {
            ref: s(g),
            "as-child": M.asChild,
            as: M.as,
            min: s(o),
            max: s(r),
            dir: s(p),
            inverted: M.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: K[0] || (K[0] = () => {
              s(d) || ($.value = s(y));
            }),
            onSlideStart: K[1] || (K[1] = (V) => !s(d) && B(V)),
            onSlideMove: K[2] || (K[2] = (V) => !s(d) && S(V)),
            onSlideEnd: K[3] || (K[3] = (V) => !s(d) && E()),
            onHomeKeyDown: K[4] || (K[4] = (V) => !s(d) && k(s(o), 0, { commit: !0 })),
            onEndKeyDown: K[5] || (K[5] = (V) => !s(d) && k(s(r), s(y).length - 1, { commit: !0 })),
            onStepKeyDown: K[6] || (K[6] = (V, A) => {
              if (!s(d)) {
                const T = s(hu).includes(V.key) || V.shiftKey && s(gu).includes(V.key) ? 10 : 1, R = x.value, H = s(y)[R], N = s(l) * T * A;
                k(H + N, R, { commit: !0 });
              }
            })
          }), {
            default: v(() => [
              w(M.$slots, "default", { modelValue: s(y) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(h) ? (f(!0), L(ne, { key: 0 }, _e(s(y), (V, A) => (f(), L("input", {
        key: A,
        value: V,
        type: "number",
        style: { display: "none" },
        name: M.name ? M.name + (s(y).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, Kh))), 128)) : oe("", !0)
    ], 64));
  }
}), Gh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = bo(), n = bu(), { forwardRef: o, currentElement: r } = W(), l = C(() => {
      var m, h;
      return (h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h[e.index];
    }), i = C(() => l.value === void 0 ? 0 : mu(l.value, a.min.value ?? 0, a.max.value ?? 100)), u = C(() => {
      var m, h;
      return Ih(e.index, ((h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h.length) ?? 0);
    }), d = Ii(r), c = C(() => d[n.size].value), p = C(() => c.value ? Rh(c.value, i.value, n.direction) : 0), g = Qs();
    return de(() => {
      a.thumbElements.value.push(r.value);
    }), Ve(() => {
      const m = a.thumbElements.value.findIndex((h) => h === r.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, h) => (f(), _(s(yo), null, {
      default: v(() => [
        P(s(z), O(m.$attrs, {
          ref: s(o),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: s(a).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": s(a).disabled.value ? "" : void 0,
          "data-orientation": s(a).orientation.value,
          "aria-valuenow": l.value,
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
            display: !s(g) && l.value === void 0 ? "none" : void 0
          },
          onFocus: h[0] || (h[0] = () => {
            s(a).valueIndexToChangeRef.value = m.index;
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
}), qh = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = cr(), { forwardRef: n, currentElement: o } = W(), r = C(() => o.value ? a().findIndex((l) => l.ref === o.value) : -1);
    return (l, i) => (f(), _(Gh, O({ ref: s(n) }, e, { index: r.value }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Yh = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = bo();
    return W(), (a, n) => (f(), _(s(z), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Jh = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = bo(), a = bu();
    W();
    const n = C(() => {
      var l, i;
      return (i = (l = e.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => mu(u, e.min.value, e.max.value)
      );
    }), o = C(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), r = C(() => 100 - Math.max(...n.value));
    return (l, i) => (f(), _(s(z), {
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: ct({
        [s(a).startEdge]: `${o.value}%`,
        [s(a).endEdge]: `${r.value}%`
      })
    }, {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function Qh() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Qh();
const Xh = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Zh, eg] = fe("SwitchRoot"), tg = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = me(a), r = we(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function l() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = W(), d = un(u), c = C(() => {
      var p;
      return a.id && u.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return eg({
      checked: r,
      toggleCheck: l,
      disabled: o
    }), (p, g) => (f(), L(ne, null, [
      P(s(z), O(p.$attrs, {
        id: p.id,
        ref: s(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": s(r),
        "aria-required": p.required,
        "data-state": s(r) ? "checked" : "unchecked",
        "data-disabled": s(o) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: s(o),
        onClick: l,
        onKeydown: Te($e(l, ["prevent"]), ["enter"])
      }), {
        default: v(() => [
          w(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (f(), L("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: s(o),
        required: p.required,
        value: p.value,
        checked: !!s(r),
        "data-state": s(r) ? "checked" : "unchecked",
        "data-disabled": s(o) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Xh)) : oe("", !0)
    ], 64));
  }
}), ag = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Zh();
    return W(), (a, n) => {
      var o;
      return f(), _(s(z), {
        "data-state": (o = s(e).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(e).disabled.value ? "" : void 0,
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
}), [gr, ng] = fe("TabsRoot"), og = /* @__PURE__ */ b({
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
    const a = t, n = e, { orientation: o, dir: r } = me(a), l = vt(r);
    W();
    const i = we(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), u = D();
    return ng({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: o,
      dir: l,
      activationMode: a.activationMode,
      baseId: Oe(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (f(), _(s(z), {
      dir: s(l),
      "data-orientation": s(o),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: v(() => [
        w(d.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), sg = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { loop: a } = me(e), { forwardRef: n, currentElement: o } = W(), r = gr();
    return r.tabsList = o, (l, i) => (f(), _(s(tu), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(a)
    }, {
      default: v(() => [
        P(s(z), {
          ref: s(n),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": s(r).orientation.value
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
function xu(t, e) {
  return `${t}-trigger-${e}`;
}
function Cu(t, e) {
  return `${t}-content-${e}`;
}
const rg = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = W(), n = gr(), o = C(() => xu(n.baseId, e.value)), r = C(() => Cu(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value), i = D(l.value);
    return de(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (f(), _(s(Ue), {
      present: l.value,
      "force-mount": ""
    }, {
      default: v(({ present: c }) => [
        P(s(z), {
          id: r.value,
          ref: s(a),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": s(n).orientation.value,
          "aria-labelledby": o.value,
          hidden: !c.value,
          tabindex: "0",
          style: ct({
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
}), lg = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a } = W(), n = gr(), o = C(() => xu(n.baseId, e.value)), r = C(() => Cu(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value);
    return (i, u) => (f(), _(s(Kv), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: v(() => [
        P(s(z), {
          id: o.value,
          ref: s(a),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": l.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": l.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": s(n).orientation.value,
          onMousedown: u[0] || (u[0] = $e((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Te((d) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = s(n).activationMode !== "manual";
            !l.value && !i.disabled && d && s(n).changeModelValue(i.value);
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
}), [_o, ig] = fe("ToastProvider"), ug = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: r } = me(e), l = D(), i = D(0), u = D(!1), d = D(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return ig({
      label: a,
      duration: n,
      swipeDirection: o,
      swipeThreshold: r,
      toastCount: i,
      viewport: l,
      onViewportChange(c) {
        l.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, p) => w(c.$slots, "default");
  }
}), dg = "toast.swipeStart", cg = "toast.swipeMove", pg = "toast.swipeCancel", fg = "toast.swipeEnd", cs = "toast.viewportPause", ps = "toast.viewportResume";
function Sn(t, e, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function cl(t, e, a = 0) {
  const n = Math.abs(t.x), o = Math.abs(t.y), r = n > o;
  return e === "left" || e === "right" ? r && n > a : !r && o > a;
}
function vg(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function $u(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && e.push(a.textContent), vg(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const r = a.dataset.radixToastAnnounceAlt;
          r && e.push(r);
        } else
          e.push(...$u(a));
    }
  }), e;
}
const mg = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(t) {
    const e = _o(), a = $p(1e3), n = D(!1);
    return Di(() => {
      n.value = !0;
    }), (o, r) => s(a) || n.value ? (f(), _(s(fn), { key: 0 }, {
      default: v(() => [
        Z(re(s(e).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : oe("", !0);
  }
}), [hg, gg] = fe("ToastRoot"), yg = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o, currentElement: r } = W(), l = _o(), i = D(null), u = D(null), d = C(
      () => typeof a.duration == "number" ? a.duration : l.duration.value
    ), c = D(0), p = D(d.value), g = D(0), m = D(d.value), h = Di(() => {
      const B = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - B, 0);
    }, { fpsLimit: 60 });
    function y(B) {
      B <= 0 || B === Number.POSITIVE_INFINITY || ft && (window.clearTimeout(g.value), c.value = (/* @__PURE__ */ new Date()).getTime(), g.value = window.setTimeout(x, B));
    }
    function x() {
      var B, S;
      (B = r.value) != null && B.contains(De()) && ((S = l.viewport.value) == null || S.focus()), l.isClosePausedRef.value = !1, n("close");
    }
    const $ = C(() => r.value ? $u(r.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const B = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(B);
    }
    return be((B) => {
      const S = l.viewport.value;
      if (S) {
        const E = () => {
          y(p.value), h.resume(), n("resume");
        }, k = () => {
          const F = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - F, window.clearTimeout(g.value), h.pause(), n("pause");
        };
        return S.addEventListener(cs, k), S.addEventListener(ps, E), () => {
          S.removeEventListener(cs, k), S.removeEventListener(ps, E);
        };
      }
    }), X(() => [a.open, d.value], () => {
      p.value = d.value, a.open && !l.isClosePausedRef.value && y(d.value);
    }, { immediate: !0 }), Js("Escape", (B) => {
      n("escapeKeyDown", B), B.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), de(() => {
      l.onToastAdd();
    }), Ve(() => {
      l.onToastRemove();
    }), gg({ onClose: x }), (B, S) => (f(), L(ne, null, [
      $.value ? (f(), _(mg, {
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
      s(l).viewport.value ? (f(), _(an, {
        key: 1,
        to: s(l).viewport.value
      }, [
        P(s(z), O({
          ref: s(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, B.$attrs, {
          as: B.as,
          "as-child": B.asChild,
          "data-state": B.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: S[0] || (S[0] = $e((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: S[1] || (S[1] = (E) => {
            if (!i.value) return;
            const k = E.clientX - i.value.x, F = E.clientY - i.value.y, M = !!u.value, K = ["left", "right"].includes(s(l).swipeDirection.value), V = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = K ? V(0, k) : 0, T = K ? 0 : V(0, F), R = E.pointerType === "touch" ? 10 : 2, H = { x: A, y: T }, N = { originalEvent: E, delta: H };
            M ? (u.value = H, s(Sn)(s(cg), (j) => n("swipeMove", j), N)) : s(cl)(H, s(l).swipeDirection.value, R) ? (u.value = H, s(Sn)(s(dg), (j) => n("swipeStart", j), N), E.target.setPointerCapture(E.pointerId)) : (Math.abs(k) > R || Math.abs(F) > R) && (i.value = null);
          }),
          onPointerup: S[2] || (S[2] = (E) => {
            const k = u.value, F = E.target;
            if (F.hasPointerCapture(E.pointerId) && F.releasePointerCapture(E.pointerId), u.value = null, i.value = null, k) {
              const M = E.currentTarget, K = { originalEvent: E, delta: k };
              s(cl)(k, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(Sn)(s(fg), (V) => n("swipeEnd", V), K) : s(Sn)(s(pg), (V) => n("swipeCancel", V), K), M == null || M.addEventListener("click", (V) => V.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: v(() => [
            w(B.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : oe("", !0)
    ], 64));
  }
}), bg = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o } = W(), r = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (l, i) => (f(), _(s(Ue), {
      present: l.forceMount || s(r)
    }, {
      default: v(() => [
        P(yg, O({
          ref: s(o),
          open: s(r),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = !1),
          onPause: i[1] || (i[1] = (u) => n("pause")),
          onResume: i[2] || (i[2] = (u) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), r.value = !1;
          })
        }), {
          default: v(({ remaining: u, duration: d }) => [
            w(l.$slots, "default", {
              remaining: u,
              duration: d,
              open: s(r)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Su = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    return (e, a) => (f(), _(s(z), {
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
}), Bu = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = hg(), { forwardRef: n } = W();
    return (o, r) => (f(), _(Su, { "as-child": "" }, {
      default: v(() => [
        P(s(z), O(e, {
          ref: s(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => s(a).onClose())
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
}), _g = /* @__PURE__ */ b({
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
    return (a, n) => a.altText ? (f(), _(Su, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: v(() => [
        P(Bu, {
          ref: s(e),
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
    const a = e, n = _o();
    return (o, r) => (f(), _(s(fn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (l) => {
        var i;
        const u = l.relatedTarget;
        !((i = s(n).viewport.value) != null && i.contains(u)) && a("focusFromOutsideViewport");
      })
    }, {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), wg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(t) {
    const e = t, { hotkey: a, label: n } = me(e), { forwardRef: o, currentElement: r } = W(), { createCollection: l } = Oa(), i = l(r), u = _o(), d = C(() => u.toastCount.value > 0), c = D(), p = D(), g = C(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Js(a.value, () => {
      r.value.focus();
    }), de(() => {
      u.onViewportChange(r.value);
    }), be((h) => {
      const y = r.value;
      if (d.value && y) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const k = new CustomEvent(cs);
            y.dispatchEvent(k), u.isClosePausedRef.value = !0;
          }
        }, $ = () => {
          if (u.isClosePausedRef.value) {
            const k = new CustomEvent(ps);
            y.dispatchEvent(k), u.isClosePausedRef.value = !1;
          }
        }, B = (k) => {
          !y.contains(k.relatedTarget) && $();
        }, S = () => {
          y.contains(De()) || $();
        }, E = (k) => {
          var F, M, K;
          const V = k.altKey || k.ctrlKey || k.metaKey;
          if (k.key === "Tab" && !V) {
            const A = De(), T = k.shiftKey;
            if (k.target === y && T) {
              (F = c.value) == null || F.focus();
              return;
            }
            const R = m({ tabbingDirection: T ? "backwards" : "forwards" }), H = R.findIndex((N) => N === A);
            Rn(R.slice(H + 1)) ? k.preventDefault() : T ? (M = c.value) == null || M.focus() : (K = p.value) == null || K.focus();
          }
        };
        y.addEventListener("focusin", x), y.addEventListener("focusout", B), y.addEventListener("pointermove", x), y.addEventListener("pointerleave", S), y.addEventListener("keydown", E), window.addEventListener("blur", x), window.addEventListener("focus", $), h(() => {
          y.removeEventListener("focusin", x), y.removeEventListener("focusout", B), y.removeEventListener("pointermove", x), y.removeEventListener("pointerleave", S), y.removeEventListener("keydown", E), window.removeEventListener("blur", x), window.removeEventListener("focus", $);
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
    return (h, y) => (f(), _(s(_f), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", g.value) : s(n)(g.value),
      tabindex: "-1",
      style: ct({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: v(() => [
        d.value ? (f(), _(pl, {
          key: 0,
          ref: (x) => {
            c.value = s(Je)(x);
          },
          onFocusFromOutsideViewport: y[0] || (y[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            s(Rn)(x);
          })
        }, null, 512)) : oe("", !0),
        P(s(z), O({
          ref: s(o),
          tabindex: "-1",
          as: h.as,
          "as-child": h.asChild
        }, h.$attrs), {
          default: v(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (f(), _(pl, {
          key: 1,
          ref: (x) => {
            p.value = s(Je)(x);
          },
          onFocusFromOutsideViewport: y[1] || (y[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            s(Rn)(x);
          })
        }, null, 512)) : oe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), xg = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cg = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return W(), (a, n) => (f(), _(s(z), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ku = "tooltip.open", [yr, $g] = fe("TooltipProvider"), Ou = /* @__PURE__ */ b({
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
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = me(e);
    W();
    const u = D(!0), d = D(!1), { start: c, stop: p } = Ys(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return $g({
      isOpenDelayed: u,
      delayDuration: a,
      onOpen() {
        p(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: o,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (g, m) => w(g.$slots, "default");
  }
}), [wo, Sg] = fe("TooltipRoot"), Bg = /* @__PURE__ */ b({
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
    const o = yr(), r = C(() => a.disableHoverableContent ?? o.disableHoverableContent.value), l = C(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = C(() => a.disabled ?? o.disabled.value), u = C(() => a.delayDuration ?? o.delayDuration.value), d = C(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = we(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    X(c, (S) => {
      o.onClose && (S ? (o.onOpen(), document.dispatchEvent(new CustomEvent(ku))) : o.onClose());
    });
    const p = D(!1), g = D(), m = C(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: y } = Ys(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function x() {
      y(), p.value = !1, c.value = !0;
    }
    function $() {
      y(), c.value = !1;
    }
    function B() {
      h();
    }
    return Sg({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: g,
      onTriggerChange(S) {
        g.value = S;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? B() : x();
      },
      onTriggerLeave() {
        r.value ? $() : y();
      },
      onOpen: x,
      onClose: $,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (S, E) => (f(), _(s(Aa), null, {
      default: v(() => [
        w(S.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), kg = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = wo(), n = yr();
    a.contentId || (a.contentId = Oe(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = W(), l = D(!1), i = D(!1), u = C(() => a.disabled.value ? {} : {
      click: y,
      focus: m,
      pointermove: p,
      pointerleave: g,
      pointerdown: c,
      blur: h
    });
    de(() => {
      a.onTriggerChange(r.value);
    });
    function d() {
      setTimeout(() => {
        l.value = !1;
      }, 1);
    }
    function c() {
      l.value = !0, document.addEventListener("pointerup", d, { once: !0 });
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
    return (x, $) => (f(), _(s(go), { "as-child": "" }, {
      default: v(() => [
        P(s(z), O({
          ref: s(o),
          "aria-describedby": s(a).open.value ? s(a).contentId : void 0,
          "data-state": s(a).stateAttribute.value,
          as: x.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, fd(u.value)), {
          default: v(() => [
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
    const a = t, n = e, o = wo(), { forwardRef: r } = W(), l = Pl(), i = C(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = C(() => {
      var c;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function g(m) {
        typeof m.children == "string" && m.type !== Ss ? p += m.children : Array.isArray(m.children) && m.children.forEach((h) => g(h));
      }
      return (c = i.value) == null || c.forEach((m) => g(m)), p;
    }), d = C(() => {
      const { ariaLabel: c, ...p } = a;
      return p;
    });
    return de(() => {
      $a(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), $a(window, ku, o.onClose);
    }), (c, p) => (f(), _(s(Ea), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (g) => n("escapeKeyDown", g)),
      onPointerDownOutside: p[1] || (p[1] = (g) => {
        var m;
        s(o).disableClosingTrigger.value && (m = s(o).trigger.value) != null && m.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
      }),
      onFocusOutside: p[2] || (p[2] = $e(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (g) => s(o).onClose())
    }, {
      default: v(() => [
        P(s(Sa), O({
          ref: s(r),
          "data-state": s(o).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: v(() => [
            w(c.$slots, "default"),
            P(s(fn), {
              id: s(o).contentId,
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
}), Og = /* @__PURE__ */ b({
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
    const e = ve(t), { forwardRef: a, currentElement: n } = W(), { trigger: o, onClose: r } = wo(), l = yr(), { isPointerInTransit: i, onPointerExit: u } = Rp(o, n);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (f(), _(Du, O({ ref: s(a) }, s(e)), {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dg = /* @__PURE__ */ b({
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
    const a = t, n = e, o = wo(), r = ue(a, n), { forwardRef: l } = W();
    return (i, u) => (f(), _(s(Ue), {
      present: i.forceMount || s(o).open.value
    }, {
      default: v(() => [
        (f(), _(je(s(o).disableHoverableContent.value ? Du : Og), O({ ref: s(l) }, s(r)), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Eg = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(cn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o1 = /* @__PURE__ */ b({
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
    const o = ue(t, e);
    return (r, l) => (f(), _(s(uf), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
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
const br = "-", Pg = (t) => {
  const e = Mg(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const i = l.split(br);
      return i[0] === "" && i.length !== 1 && i.shift(), Au(i, e) || Ag(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = a[l] || [];
      return i && n[l] ? [...u, ...n[l]] : u;
    }
  };
}, Au = (t, e) => {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? Au(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const r = t.join(br);
  return (l = e.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, fl = /^\[(.+)\]$/, Ag = (t) => {
  if (fl.test(t)) {
    const e = fl.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Mg = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ig(Object.entries(t.classGroups), a).forEach(([r, l]) => {
    fs(l, n, r, e);
  }), n;
}, fs = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? e : vl(e, o);
      r.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (Tg(o)) {
        fs(o(n), e, a, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([r, l]) => {
      fs(l, vl(e, r), a, n);
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
}, Tg = (t) => t.isThemeGetter, Ig = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((r) => typeof r == "string" ? e + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [e + l, i])) : r);
  return [a, o];
}) : t, Fg = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (r, l) => {
    a.set(r, l), e++, e > t && (e = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let l = a.get(r);
      if (l !== void 0)
        return l;
      if ((l = n.get(r)) !== void 0)
        return o(r, l), l;
    },
    set(r, l) {
      a.has(r) ? a.set(r, l) : o(r, l);
    }
  };
}, Mu = "!", Rg = (t) => {
  const {
    separator: e,
    experimentalParseClassName: a
  } = t, n = e.length === 1, o = e[0], r = e.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let x = 0; x < i.length; x++) {
      let $ = i[x];
      if (d === 0) {
        if ($ === o && (n || i.slice(x, x + r) === e)) {
          u.push(i.slice(c, x)), c = x + r;
          continue;
        }
        if ($ === "/") {
          p = x;
          continue;
        }
      }
      $ === "[" ? d++ : $ === "]" && d--;
    }
    const g = u.length === 0 ? i : i.substring(c), m = g.startsWith(Mu), h = m ? g.substring(1) : g, y = p && p > c ? p - c : void 0;
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
}, Lg = (t) => ({
  cache: Fg(t.cacheSize),
  parseClassName: Rg(t),
  ...Pg(t)
}), Ng = /\s+/, zg = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, r = [], l = t.trim().split(Ng);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = a(d);
    let h = !!m, y = n(h ? g.substring(0, m) : g);
    if (!y) {
      if (!h) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (y = n(g), !y) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const x = Vg(c).join(":"), $ = p ? x + Mu : x, B = $ + y;
    if (r.includes(B))
      continue;
    r.push(B);
    const S = o(y, h);
    for (let E = 0; E < S.length; ++E) {
      const k = S[E];
      r.push($ + k);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function jg() {
  let t = 0, e, a, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (a = Tu(e)) && (n && (n += " "), n += a);
  return n;
}
const Tu = (t) => {
  if (typeof t == "string")
    return t;
  let e, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Tu(t[n])) && (a && (a += " "), a += e);
  return a;
};
function Wg(t, ...e) {
  let a, n, o, r = l;
  function l(u) {
    const d = e.reduce((c, p) => p(c), t());
    return a = Lg(d), n = a.cache.get, o = a.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = n(u);
    if (d)
      return d;
    const c = zg(u, a);
    return o(u, c), c;
  }
  return function() {
    return r(jg.apply(null, arguments));
  };
}
const Ce = (t) => {
  const e = (a) => a[t] || [];
  return e.isThemeGetter = !0, e;
}, Iu = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kg = /^\d+\/\d+$/, Ug = /* @__PURE__ */ new Set(["px", "full", "screen"]), Hg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Gg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Yg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, gt = (t) => ya(t) || Ug.has(t) || Kg.test(t), Mt = (t) => Ra(t, "length", oy), ya = (t) => !!t && !Number.isNaN(Number(t)), zo = (t) => Ra(t, "number", ya), za = (t) => !!t && Number.isInteger(Number(t)), Qg = (t) => t.endsWith("%") && ya(t.slice(0, -1)), ce = (t) => Iu.test(t), Tt = (t) => Hg.test(t), Xg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Zg = (t) => Ra(t, Xg, Fu), ey = (t) => Ra(t, "position", Fu), ty = /* @__PURE__ */ new Set(["image", "url"]), ay = (t) => Ra(t, ty, ry), ny = (t) => Ra(t, "", sy), ja = () => !0, Ra = (t, e, a) => {
  const n = Iu.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, oy = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Gg.test(t) && !qg.test(t)
), Fu = () => !1, sy = (t) => Yg.test(t), ry = (t) => Jg.test(t), ly = () => {
  const t = Ce("colors"), e = Ce("spacing"), a = Ce("blur"), n = Ce("brightness"), o = Ce("borderColor"), r = Ce("borderRadius"), l = Ce("borderSpacing"), i = Ce("borderWidth"), u = Ce("contrast"), d = Ce("grayscale"), c = Ce("hueRotate"), p = Ce("invert"), g = Ce("gap"), m = Ce("gradientColorStops"), h = Ce("gradientColorStopPositions"), y = Ce("inset"), x = Ce("margin"), $ = Ce("opacity"), B = Ce("padding"), S = Ce("saturate"), E = Ce("scale"), k = Ce("sepia"), F = Ce("skew"), M = Ce("space"), K = Ce("translate"), V = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", ce, e], R = () => [ce, e], H = () => ["", gt, Mt], N = () => ["auto", ya, ce], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Q = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", ce], ie = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], pe = () => [ya, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ja],
      spacing: [gt, Mt],
      blur: ["none", "", Tt, ce],
      brightness: pe(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Tt, ce],
      borderSpacing: R(),
      borderWidth: H(),
      contrast: pe(),
      grayscale: Y(),
      hueRotate: pe(),
      invert: Y(),
      gap: R(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Qg, Mt],
      inset: T(),
      margin: T(),
      opacity: pe(),
      padding: R(),
      saturate: pe(),
      scale: pe(),
      sepia: Y(),
      skew: pe(),
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
        aspect: ["auto", "square", "video", ce]
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
        columns: [Tt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
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
        object: [...j(), ce]
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
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        z: ["auto", za, ce]
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
        flex: ["1", "auto", "initial", "none", ce]
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
        order: ["first", "last", "none", za, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ja]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", za, ce]
        }, ce]
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
        "grid-rows": [ja]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [za, ce]
        }, ce]
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Tt]
        }, Tt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Tt, Mt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ja]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ya, zo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", gt, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        decoration: ["auto", "from-font", gt, Mt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", gt, ce]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        bg: [...j(), ey]
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
        bg: ["auto", "cover", "contain", Zg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ay]
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
        "outline-offset": [gt, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [gt, Mt]
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
        "ring-offset": [gt, Mt]
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
        shadow: ["", "inner", "none", Tt, ny]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ja]
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
        "drop-shadow": ["", "none", Tt, ce]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: pe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: pe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        rotate: [za, ce]
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
        "skew-x": [F]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [F]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [gt, Mt, zo]
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
}, iy = /* @__PURE__ */ Wg(ly);
function I(...t) {
  return iy(Pu(t));
}
const s1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(pf), O(a.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: v(() => [
        he("div", {
          class: G(s(I)("pb-4 pt-0", e.class))
        }, [
          w(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), r1 = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(cf), O(s(n), {
      class: s(I)("border-accordion-border border-b", e.class)
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
const uy = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
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
const dy = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: r, class: l, ...i }, { slots: u }) => Ie(
  "svg",
  {
    ...Bn,
    width: t || Bn.width,
    height: t || Bn.height,
    stroke: n || Bn.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${uy(r ?? "icon")}`],
    ...i
  },
  [...o.map((d) => Ie(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = (t, e) => (a, { slots: n }) => Ie(
  dy,
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
const cy = Ae("CalendarIcon", [
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
const py = Ae("ChevronLeftIcon", [
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
const fy = Ae("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = Ae("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = Ae("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = Ae("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ru = Ae("EllipsisIcon", [
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
const gy = Ae("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = Ae("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = Ae("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = Ae("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = Ae("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = Ae("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = Ae("SunIcon", [
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
const xo = Ae("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), l1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(ff), { class: "flex" }, {
      default: v(() => [
        P(s(vf), O(a.value, {
          class: s(I)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: v(() => [
            w(n.$slots, "default"),
            w(n.$slots, "icon", {}, () => [
              P(s(wr), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ml = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, hl = Pu, oa = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return hl(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: r } = e, l = Object.keys(o).map((d) => {
    const c = a == null ? void 0 : a[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const g = ml(c) || ml(p);
    return o[d][g];
  }), i = a && Object.entries(a).reduce((d, c) => {
    let [p, g] = c;
    return g === void 0 || (d[p] = g), d;
  }, {}), u = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, c) => {
    let { class: p, className: g, ...m } = c;
    return Object.entries(m).every((h) => {
      let [y, x] = h;
      return Array.isArray(x) ? x.includes({
        ...r,
        ...i
      }[y]) : {
        ...r,
        ...i
      }[y] === x;
    }) ? [
      ...d,
      p,
      g
    ] : d;
  }, []);
  return hl(t, l, u, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, i1 = /* @__PURE__ */ b({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-slot": "alert",
      class: G(s(I)(s($y)({ variant: a.variant }), e.class)),
      role: "alert"
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), u1 = /* @__PURE__ */ b({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-slot": "alert-description",
      class: G(s(I)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), d1 = /* @__PURE__ */ b({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-slot": "alert-title",
      class: G(s(I)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), $y = oa(
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
function Cr(t) {
  return t ? t.flatMap((e) => e.type === ne ? Cr(e.children) : [e]) : [];
}
const vs = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var u;
      if (!a.default)
        return null;
      const n = Cr(a.default()), o = n.findIndex((d) => d.type !== Ss);
      if (o === -1)
        return n;
      const r = n[o];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? O(e, r.props) : e, i = Tl({ ...r, props: {} }, l);
      return n.length === 1 ? i : (n[o] = i, n);
    };
  }
}), Sy = ["area", "img", "input"], Be = b({
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
    return typeof n == "string" && Sy.includes(n) ? () => Ie(n, e) : n !== "template" ? () => Ie(t.as, e, { default: a.default }) : () => Ie(vs, e, { default: a.default });
  }
}), By = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (f(), _(s(Be), {
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
  const n = Ct();
  return be(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ba(n);
}
function Co(t) {
  return to() ? (ao(t), !0) : !1;
}
function Vn() {
  const t = /* @__PURE__ */ new Set(), e = (r) => {
    t.delete(r);
  };
  return {
    on: (r) => {
      t.add(r);
      const l = () => e(r);
      return Co(l), {
        off: l
      };
    },
    off: e,
    trigger: (...r) => Promise.all(Array.from(t).map((l) => l(...r))),
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
  return (...r) => (e += 1, n || (n = Ds(!0), a = n.run(() => t(...r))), Co(o), a);
}
const jt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Dy = (t) => typeof t < "u", Ey = Object.prototype.toString, Py = (t) => Ey.call(t) === "[object Object]", gl = /* @__PURE__ */ Ay();
function Ay() {
  var t, e;
  return jt && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function My(t) {
  return Ee();
}
function jo(t) {
  return Array.isArray(t) ? t : [t];
}
function Vu(t, e = 1e4) {
  return Bs((a, n) => {
    let o = Se(t), r;
    const l = () => setTimeout(() => {
      o = Se(t), n();
    }, Se(e));
    return Co(() => {
      clearTimeout(r);
    }), {
      get() {
        return a(), o;
      },
      set(i) {
        o = i, n(), clearTimeout(r), r = l();
      }
    };
  });
}
const Ty = Se;
function Iy(t, e) {
  My() && oo(t, e);
}
function Fy(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const $r = jt ? window : void 0;
function sa(t) {
  var e;
  const a = Se(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Lu(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = C(() => {
    const i = jo(Se(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Fy(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => sa(d))) != null ? u : [$r].filter((d) => d != null),
        jo(Se(o.value ? t[1] : t[0])),
        jo(s(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Se(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, d, c]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = Py(c) ? { ...c } : c;
      e.push(
        ...i.flatMap(
          (g) => u.flatMap(
            (m) => d.map((h) => n(g, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), a();
  };
  return Co(a), l;
}
function Ry() {
  const t = Ct(!1), e = Ee();
  return e && de(() => {
    t.value = !0;
  }, e), t;
}
function Vy(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Ly(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = $r,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = Vy(e);
  return Lu(o, r, (c) => {
    c.repeat && Se(i) || u(c) && a(c);
  }, l);
}
function Ny(t) {
  return JSON.parse(JSON.stringify(t));
}
function Za(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = d;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (S) => i ? typeof i == "function" ? i(S) : Ny(S) : S, $ = () => Dy(t[e]) ? x(t[e]) : p, B = (S) => {
    g ? g(S) && h(y, S) : h(y, S);
  };
  if (u) {
    const S = $(), E = D(S);
    let k = !1;
    return X(
      () => t[e],
      (F) => {
        k || (k = !0, E.value = x(F), ae(() => k = !1));
      }
    ), X(
      E,
      (F) => {
        !k && (F !== t[e] || c) && B(F);
      },
      { deep: c }
    ), E;
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
function ht(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(l) => {
    const i = nn(n, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (l) => (ro(n, l), l)];
}
function yl(t) {
  return typeof t == "string" ? `'${t}'` : new zy().serialize(t);
}
const zy = /* @__PURE__ */ function() {
  var e;
  class t {
    constructor() {
      Pr(this, e, /* @__PURE__ */ new Map());
    }
    compare(n, o) {
      const r = typeof n, l = typeof o;
      return r === "string" && l === "string" ? n.localeCompare(o) : r === "number" && l === "number" ? n - o : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(o, !0));
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
      const r = n.constructor, l = r === Object || r === void 0 ? "" : r.name;
      if (l !== "" && globalThis[l] === r) return this.serializeBuiltInType(l, n);
      if (typeof n.toJSON == "function") {
        const i = n.toJSON();
        return l + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(n));
    }
    serializeBuiltInType(n, o) {
      const r = this["$" + n];
      if (r) return r.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(n, o.entries());
      throw new Error(`Cannot serialize ${n}`);
    }
    serializeObjectEntries(n, o) {
      const r = Array.from(o).sort((i, u) => this.compare(i[0], u[0]));
      let l = `${n}{`;
      for (let i = 0; i < r.length; i++) {
        const [u, d] = r[i];
        l += `${this.serialize(u, !0)}:${this.serialize(d)}`, i < r.length - 1 && (l += ",");
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
      for (let r = 0; r < n.length; r++) o += this.serialize(n[r]), r < n.length - 1 && (o += ",");
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
      return `Set${this.$Array(Array.from(n).sort((o, r) => this.compare(o, r)))}`;
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
function ms(t, e) {
  return t === e || yl(t) === yl(e);
}
const [$o, c1] = ht("ConfigProvider");
function Nu(t) {
  const e = $o({
    dir: D("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function Fe() {
  const t = Ee(), e = D(), a = C(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = e.value) == null ? void 0 : l.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : sa(e);
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
  function r(l) {
    e.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), t.exposed = o);
  }
  return { forwardRef: r, currentRef: e, currentElement: a };
}
let jy = 0;
function Va(t, e = "reka") {
  var n;
  const a = $o({ useId: void 0 });
  return Object.hasOwn(fa, "useId") ? `${e}-${(n = fa.useId) == null ? void 0 : n.call(fa)}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++jy}`;
}
function Wy(t, e) {
  const a = D(t);
  function n(r) {
    return e[a.value][r] ?? a.value;
  }
  return {
    state: a,
    dispatch: (r) => {
      a.value = n(r);
    }
  };
}
function Ky(t, e) {
  var x;
  const a = D({}), n = D("none"), o = D(t), r = t.value ? "mounted" : "unmounted";
  let l;
  const i = ((x = e.value) == null ? void 0 : x.ownerDocument.defaultView) ?? $r, { state: u, dispatch: d } = Wy(r, {
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
    var B;
    if (jt) {
      const S = new CustomEvent($, { bubbles: !1, cancelable: !1 });
      (B = e.value) == null || B.dispatchEvent(S);
    }
  };
  X(
    t,
    async ($, B) => {
      var E;
      const S = B !== $;
      if (await ae(), S) {
        const k = n.value, F = kn(e.value);
        $ ? (d("MOUNT"), c("enter"), F === "none" && c("after-enter")) : F === "none" || F === "undefined" || ((E = a.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : B && k !== F ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = ($) => {
    const B = kn(e.value), S = B.includes(
      $.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if ($.target === e.value && S && (c(`after-${E}`), d("ANIMATION_END"), !o.value)) {
      const k = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var F;
        ((F = e.value) == null ? void 0 : F.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = k);
      });
    }
    $.target === e.value && B === "none" && d("ANIMATION_END");
  }, g = ($) => {
    $.target === e.value && (n.value = kn(e.value));
  }, m = X(
    e,
    ($, B) => {
      $ ? (a.value = getComputedStyle($), $.addEventListener("animationstart", g), $.addEventListener("animationcancel", p), $.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), B == null || B.removeEventListener("animationstart", g), B == null || B.removeEventListener("animationcancel", p), B == null || B.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), h = X(u, () => {
    const $ = kn(e.value);
    n.value = u.value === "mounted" ? $ : "none";
  });
  return Ve(() => {
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
    var d;
    const { present: n, forceMount: o } = me(t), r = D(), { isPresent: l } = Ky(n, r);
    a({ present: l });
    let i = e.default({ present: l.value });
    i = Cr(i || []);
    const u = Ee();
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
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => o.value || n.value || l.value ? Ie(e.default({ present: l.value })[0], {
      ref: (c) => {
        const p = sa(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
});
function Hy(t) {
  const e = Ee(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[Ml(no(o))] = (...r) => t(o, ...r);
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
function zu(t, e) {
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
  const n = ((l = e == null ? void 0 : e.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = D(!1), r = D(() => {
  });
  return be((i) => {
    if (!jt || !Se(a))
      return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(e != null && e.value) || !p)) {
        if (zu(e.value, p)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let g = function() {
            Sr(
              qy,
              t,
              m
            );
          };
          const m = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = g, n.addEventListener("click", r.value, {
            once: !0
          })) : g();
        } else
          n.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      n.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(d), n.removeEventListener("pointerdown", u), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => {
      Se(a) && (o.value = !0);
    }
  };
}
function Qy(t, e, a = !0) {
  var r;
  const n = ((r = e == null ? void 0 : e.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = D(!1);
  return be((l) => {
    if (!jt || !Se(a))
      return;
    const i = async (u) => {
      if (!(e != null && e.value))
        return;
      await ae(), await ae();
      const d = u.target;
      !e.value || !d || zu(e.value, d) || u.target && !o.value && Sr(
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
const yt = qa({
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
    const a = t, n = e, { forwardRef: o, currentElement: r } = Fe(), l = C(
      () => {
        var h;
        return ((h = r.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => yt.layersRoot), u = C(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = C(() => yt.layersWithOutsidePointerEventsDisabled.size > 0), c = C(() => {
      const h = Array.from(i.value), [y] = [...yt.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(y);
      return u.value >= x;
    }), p = Jy(async (h) => {
      const y = [...yt.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !c.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await ae(), h.defaultPrevented || n("dismiss"));
    }, r), g = Qy((h) => {
      [...yt.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, r);
    Ly("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return be((h) => {
      r.value && (a.disableOutsidePointerEvents && (yt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), yt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), h(() => {
        a.disableOutsidePointerEvents && yt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), be((h) => {
      h(() => {
        r.value && (i.value.delete(r.value), yt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (h, y) => (f(), _(s(Be), {
      ref: s(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: ct({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(g).onFocusCapture,
      onBlurCapture: s(g).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
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
}, ca = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), Dn = {}, Wo = 0, ju = function(t) {
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
  Dn[a] || (Dn[a] = /* @__PURE__ */ new WeakMap());
  var r = Dn[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        c(g);
      else
        try {
          var m = g.getAttribute(n), h = m !== null && m !== "false", y = (ca.get(g) || 0) + 1, x = (r.get(g) || 0) + 1;
          ca.set(g, y), r.set(g, x), l.push(g), y === 1 && h && On.set(g, !0), x === 1 && g.setAttribute(a, "true"), h || g.setAttribute(n, "true");
        } catch ($) {
          console.error("aria-hidden: cannot operate on ", g, $);
        }
    });
  };
  return c(e), i.clear(), Wo++, function() {
    l.forEach(function(p) {
      var g = ca.get(p) - 1, m = r.get(p) - 1;
      ca.set(p, g), r.set(p, m), g || (On.has(p) || p.removeAttribute(n), On.delete(p)), m || p.removeAttribute(a);
    }), Wo--, Wo || (ca = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), Dn = {});
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
  X(() => sa(t), (a) => {
    a ? e = ab(a) : e && e();
  }), Ve(() => {
    e && e();
  });
}
function Ko(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function hs(t, e, a = ".", n) {
  if (!Ko(e))
    return hs(t, {}, a, n);
  const o = Object.assign({}, e);
  for (const r in t) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = t[r];
    l != null && (n && n(o, r, l, a) || (Array.isArray(l) && Array.isArray(o[r]) ? o[r] = [...l, ...o[r]] : Ko(l) && Ko(o[r]) ? o[r] = hs(
      l,
      o[r],
      (a ? `${a}.` : "") + r.toString(),
      n
    ) : o[r] = l));
  }
  return o;
}
function ob(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => hs(a, n, "", t), {})
  );
}
const sb = ob(), rb = Oy(() => {
  const t = D(/* @__PURE__ */ new Map()), e = D(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = $o({
    scrollBody: D(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", gl && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var p;
    if (!jt)
      return;
    if (!l) {
      i && r();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? sb({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), gl && (o = Lu(
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
function Wu(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : Wu(a);
  }
}
function ib(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && Wu(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
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
    return (a, n) => s(e) || a.forceMount ? (f(), _(an, {
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
  const e = Ee(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, r) => {
    const l = (e == null ? void 0 : e.type.props[r]).default;
    return l !== void 0 && (o[r] = l), o;
  }, {}), n = $s(t);
  return C(() => {
    const o = {}, r = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      o[no(l)] = r[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function hn(t, e) {
  const a = Br(t), n = e ? Hy(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
const [Ku, db] = ht("AvatarRoot"), cb = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return Fe(), db({
      imageLoadingStatus: D("idle")
    }), (e, a) => (f(), _(s(Be), {
      "as-child": e.asChild,
      as: e.as
    }, {
      default: v(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), pb = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = Ku();
    Fe();
    const n = D(e.delayMs === void 0);
    return be((o) => {
      if (e.delayMs && jt) {
        const r = window.setTimeout(() => {
          n.value = !0;
        }, e.delayMs);
        o(() => {
          window.clearTimeout(r);
        });
      }
    }), (o, r) => n.value && s(a).imageLoadingStatus.value !== "loaded" ? (f(), _(s(Be), {
      key: 0,
      "as-child": o.asChild,
      as: o.as
    }, {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : oe("", !0);
  }
});
function bl(t, e) {
  return t ? e ? (t.src !== e && (t.src = e), t.complete && t.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function fb(t, { referrerPolicy: e, crossOrigin: a } = {}) {
  const n = D(!1), o = D(null), r = C(() => n.value ? (!o.value && jt && (o.value = new window.Image()), o.value) : null), l = D(bl(r.value, t.value)), i = (u) => () => {
    n.value && (l.value = u);
  };
  return de(() => {
    n.value = !0, be((u) => {
      const d = r.value;
      if (!d)
        return;
      l.value = bl(d, t.value);
      const c = i("loaded"), p = i("error");
      d.addEventListener("load", c), d.addEventListener("error", p), e != null && e.value && (d.referrerPolicy = e.value), typeof (a == null ? void 0 : a.value) == "string" && (d.crossOrigin = a.value), u(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", p);
      });
    });
  }), Ve(() => {
    n.value = !1;
  }), l;
}
const vb = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(t, { emit: e }) {
    const a = t, n = e, { src: o, referrerPolicy: r, crossOrigin: l } = me(a);
    Fe();
    const i = Ku(), u = fb(o, { referrerPolicy: r, crossOrigin: l });
    return X(
      u,
      (d) => {
        n("loadingStatusChange", d), d !== "idle" && (i.imageLoadingStatus.value = d);
      },
      { immediate: !0 }
    ), (d, c) => Qt((f(), _(s(Be), {
      role: "img",
      "as-child": d.asChild,
      as: d.as,
      src: s(o),
      "referrer-policy": s(r)
    }, {
      default: v(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [so, s(u) === "loaded"]
    ]);
  }
});
function zt() {
  const t = D(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : sa(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
function mb() {
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
function hb(t) {
  return C(() => {
    var e;
    return Ty(t) ? !!((e = sa(t)) != null && e.closest("form")) : !0;
  });
}
const _l = "data-reka-collection-item";
function kr(t = {}) {
  const { key: e = "", isProvider: a = !1 } = t, n = `${e}CollectionProvider`;
  let o;
  if (a) {
    const c = D(/* @__PURE__ */ new Map());
    o = {
      collectionRef: D(),
      itemMap: c
    }, ro(n, o);
  } else
    o = nn(n);
  const r = (c = !1) => {
    const p = o.collectionRef.value;
    if (!p)
      return [];
    const g = Array.from(p.querySelectorAll(`[${_l}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (y, x) => g.indexOf(y.ref) - g.indexOf(x.ref)
    );
    return c ? h : h.filter((y) => y.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: g, currentElement: m } = zt();
      return X(m, () => {
        o.collectionRef.value = m.value;
      }), () => Ie(vs, { ref: g }, p);
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
    setup(c, { slots: p, attrs: g }) {
      const { primitiveElement: m, currentElement: h } = zt();
      return be((y) => {
        if (h.value) {
          const x = Il(h.value);
          o.itemMap.value.set(x, { ref: h.value, value: c.value }), y(() => o.itemMap.value.delete(x));
        }
      }), () => Ie(vs, { ...g, [_l]: "", ref: m }, p);
    }
  }), u = C(() => Array.from(o.itemMap.value.values())), d = C(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: l, CollectionItem: i };
}
const gb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function yb(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function bb(t, e, a) {
  const n = yb(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return gb[n];
}
const wl = /* @__PURE__ */ b({
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
    const e = t, { primitiveElement: a, currentElement: n } = zt(), o = C(() => e.checked ?? e.value);
    return X(o, (r, l) => {
      if (!n.value)
        return;
      const i = n.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), g = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(g);
      }
    }), (r, l) => (f(), _(By, O({
      ref_key: "primitiveElement",
      ref: a
    }, { ...e, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), _b = /* @__PURE__ */ b({
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
    ), n = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((o, r) => typeof o == "object" ? Object.entries(o).map(([l, i]) => ({ name: `[${e.name}][${r}][${l}]`, value: i })) : { name: `[${e.name}][${r}]`, value: o }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([o, r]) => ({ name: `[${e.name}][${o}]`, value: r })) : []);
    return (o, r) => a.value ? (f(), _(wl, O({ key: o.name }, { ...e, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (f(!0), L(ne, { key: 1 }, _e(n.value, (l) => (f(), _(wl, O({
      key: l.name,
      ref_for: !0
    }, { ...e, ...o.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Uu, wb] = ht("PopperRoot"), xb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = D();
    return wb({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), Cb = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = Fe(), o = Uu();
    return Os(() => {
      o.onAnchorChange(e.reference ?? n.value);
    }), (r, l) => (f(), _(s(Be), {
      ref: s(a),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), $b = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { forwardRef: e } = Fe();
    return (a, n) => (f(), _(s(Cb), {
      "as-child": "",
      reference: a.reference
    }, {
      default: v(() => [
        P(s(Be), O({
          ref: s(e),
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
function Sb(t) {
  return t !== null;
}
function Bb(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var x, $, B;
      const { placement: a, rects: n, middlewareData: o } = e, l = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = l ? 0 : t.arrowWidth, u = l ? 0 : t.arrowHeight, [d, c] = gs(a), p = { start: "0%", center: "50%", end: "100%" }[c], g = ((($ = o.arrow) == null ? void 0 : $.x) ?? 0) + i / 2, m = (((B = o.arrow) == null ? void 0 : B.y) ?? 0) + u / 2;
      let h = "", y = "";
      return d === "bottom" ? (h = l ? p : `${g}px`, y = `${-u}px`) : d === "top" ? (h = l ? p : `${g}px`, y = `${n.floating.height + u}px`) : d === "right" ? (h = `${-u}px`, y = l ? p : `${m}px`) : d === "left" && (h = `${n.floating.width + u}px`, y = l ? p : `${m}px`), { data: { x: h, y } };
    }
  };
}
function gs(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
function kb(t) {
  const e = D(), a = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return de(() => {
    const o = sa(t);
    if (o) {
      e.value = { width: o.offsetWidth, height: o.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = o.offsetWidth, d = o.offsetHeight;
        e.value = { width: u, height: d };
      });
      return r.observe(o, { box: "border-box" }), () => r.unobserve(o);
    } else
      e.value = void 0;
  }), {
    width: a,
    height: n
  };
}
const Ob = {
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
}, [p1, Db] = ht("PopperContent"), Eb = /* @__PURE__ */ b({
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
    ...Ob
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Uu(), { forwardRef: r, currentElement: l } = Fe(), i = D(), u = D(), { width: d, height: c } = kb(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), g = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: g.value,
      boundary: m.value.filter(Sb),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = ky(() => [
      hi({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && qn({
        ...h.value
      }),
      a.avoidCollisions && gi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? _i() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && qn({
        ...h.value
      }),
      yi({
        ...h.value,
        apply: ({ elements: T, rects: R, availableWidth: H, availableHeight: N }) => {
          const { width: j, height: Q } = R.reference, se = T.floating.style;
          se.setProperty(
            "--reka-popper-available-width",
            `${H}px`
          ), se.setProperty(
            "--reka-popper-available-height",
            `${N}px`
          ), se.setProperty(
            "--reka-popper-anchor-width",
            `${j}px`
          ), se.setProperty(
            "--reka-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && wi({ element: u.value, padding: a.arrowPadding }),
      Bb({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && bi({ strategy: "referenceHidden", ...h.value })
    ]), x = C(() => a.reference ?? o.anchor.value), { floatingStyles: $, placement: B, isPositioned: S, middlewareData: E } = Ci(
      x,
      i,
      {
        strategy: a.positionStrategy,
        placement: p,
        whileElementsMounted: (...T) => mi(...T, {
          layoutShift: !a.disableUpdateOnLayoutShift,
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), k = C(
      () => gs(B.value)[0]
    ), F = C(
      () => gs(B.value)[1]
    );
    Os(() => {
      S.value && n("placed");
    });
    const M = C(
      () => {
        var T;
        return ((T = E.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), K = D("");
    be(() => {
      l.value && (K.value = window.getComputedStyle(l.value).zIndex);
    });
    const V = C(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), A = C(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Db({
      placedSide: k,
      onArrowChange: (T) => u.value = T,
      arrowX: V,
      arrowY: A,
      shouldHideArrow: M
    }), (T, R) => {
      var H, N, j;
      return f(), L("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: ct({
          ...s($),
          transform: s(S) ? s($).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K.value,
          "--reka-popper-transform-origin": [
            (H = s(E).transformOrigin) == null ? void 0 : H.x,
            (N = s(E).transformOrigin) == null ? void 0 : N.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = s(E).hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(s(Be), O({ ref: s(r) }, T.$attrs, {
          "as-child": a.asChild,
          as: T.as,
          "data-side": k.value,
          "data-align": F.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(S) ? void 0 : "none"
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
function Pb(t) {
  const e = C(() => s(t)), a = C(() => new Intl.Collator("en", { usage: "search", ...e.value }));
  return {
    startsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), a.value.compare(l.slice(0, i.length), i) === 0),
    endsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), a.value.compare(l.slice(-i.length), i) === 0),
    contains: (l, i) => {
      if (i.length === 0)
        return !0;
      l = l.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const d = i.length;
      for (; u + d <= l.length; u++) {
        const c = l.slice(u, u + d);
        if (a.value.compare(i, c) === 0)
          return !0;
      }
      return !1;
    }
  };
}
function Ab(t, e, a) {
  return t === void 0 ? !1 : Array.isArray(t) ? t.some((n) => Ha(n, e, a)) : Ha(t, e, a);
}
function Ha(t, e, a) {
  return t === void 0 || e === void 0 ? !1 : typeof t == "string" ? t === e : typeof a == "function" ? a(t, e) : typeof a == "string" ? (t == null ? void 0 : t[a]) === (e == null ? void 0 : e[a]) : ms(t, e);
}
function Mb(t) {
  const e = Vu("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (o, r) => {
      e.value = e.value + o;
      {
        const l = Gy(), i = r.map((g) => {
          var m, h;
          return {
            ...g,
            textValue: ((m = g.value) == null ? void 0 : m.textValue) ?? ((h = g.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), u = i.find((g) => g.ref === l), d = i.map((g) => g.textValue), c = Ib(d, e.value, u == null ? void 0 : u.textValue), p = i.find((g) => g.textValue === c);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function Tb(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function Ib(t, e, a) {
  const o = e.length > 1 && Array.from(e).every((d) => d === e[0]) ? e[0] : e, r = a ? t.indexOf(a) : -1;
  let l = Tb(t, Math.max(r, 0));
  o.length === 1 && (l = l.filter((d) => d !== a));
  const u = l.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== a ? u : void 0;
}
function Fb(t, e, a) {
  const n = t.findIndex((i) => ms(i, e)), o = t.findIndex((i) => ms(i, a));
  if (n === -1 || o === -1)
    return [];
  const [r, l] = [n, o].sort((i, u) => i - u);
  return t.slice(r, l + 1);
}
const [So, Rb] = ht("ListboxRoot"), Vb = /* @__PURE__ */ b({
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
    const n = t, o = a, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: c } = me(n), { getItems: p } = kr({ isProvider: !0 }), { handleTypeaheadSearch: g } = Mb(), { primitiveElement: m, currentElement: h } = zt(), y = mb(), x = Nu(c), $ = hb(h), B = D(), S = D(!1), E = D(!0), k = Za(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (r.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    });
    function F(J) {
      if (S.value = !0, n.multiple) {
        const te = Array.isArray(k.value) ? [...k.value] : [], le = te.findIndex((ee) => Ha(ee, J, n.by));
        n.selectionBehavior === "toggle" ? (le === -1 ? te.push(J) : te.splice(le, 1), k.value = te) : (k.value = [J], B.value = J);
      } else
        n.selectionBehavior === "toggle" && Ha(k.value, J, n.by) ? k.value = void 0 : k.value = J;
      setTimeout(() => {
        S.value = !1;
      }, 1);
    }
    const M = D(null), K = D(null), V = D(!1), A = D(!1), T = Vn(), R = Vn(), H = Vn();
    function N() {
      return p().map((J) => J.ref).filter((J) => J.dataset.disabled !== "");
    }
    function j(J, te = !0) {
      if (!J)
        return;
      M.value = J, E.value && M.value.focus(), te && M.value.scrollIntoView({ block: "nearest" });
      const le = p().find((ee) => ee.ref === J);
      o("highlight", le);
    }
    function Q(J) {
      if (V.value)
        H.trigger(J);
      else {
        const te = p().find((le) => Ha(le.value, J, n.by));
        te && (M.value = te.ref, j(te.ref));
      }
    }
    function se(J) {
      M.value && M.value.isConnected && (J.preventDefault(), J.stopPropagation(), A.value || M.value.click());
    }
    function ye(J) {
      if (E.value) {
        if (S.value = !0, V.value)
          R.trigger(J);
        else {
          const te = J.altKey || J.ctrlKey || J.metaKey;
          if (te && J.key === "a" && r.value) {
            const le = p(), ee = le.map((xe) => xe.value);
            k.value = [...ee], J.preventDefault(), j(le[le.length - 1].ref);
          } else if (!te) {
            const le = g(J.key, p());
            le && j(le);
          }
        }
        setTimeout(() => {
          S.value = !1;
        }, 1);
      }
    }
    function Y() {
      A.value = !0;
    }
    function ie() {
      requestAnimationFrame(() => {
        A.value = !1;
      });
    }
    function pe() {
      ae(() => {
        const J = new KeyboardEvent("keydown", { key: "PageUp" });
        Qe(J);
      });
    }
    function Re(J) {
      const te = M.value;
      te != null && te.isConnected && (K.value = te), M.value = null, o("leave", J);
    }
    function He(J) {
      var le, ee;
      const te = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((le = J.currentTarget) == null || le.dispatchEvent(te), o("entryFocus", te), !te.defaultPrevented)
        if (K.value)
          j(K.value);
        else {
          const xe = (ee = N()) == null ? void 0 : ee[0];
          j(xe);
        }
    }
    function Qe(J) {
      const te = bb(J, i.value, x.value);
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
        st(J, le[0]);
      }
      if (le.length) {
        const ee = !M.value && te === "prev" ? le.length - 1 : 0;
        j(le[ee]);
      }
      if (V.value)
        return R.trigger(J);
    }
    function st(J, te) {
      var ee;
      if (!(V.value || n.selectionBehavior !== "replace" || !r.value || !Array.isArray(k.value) || (J.altKey || J.ctrlKey || J.metaKey) && !J.shiftKey) && J.shiftKey) {
        const xe = p().filter((Kt) => Kt.ref.dataset.disabled !== "");
        let Le = (ee = xe.find((Kt) => Kt.ref === te)) == null ? void 0 : ee.value;
        if (J.key === y.END ? Le = xe[xe.length - 1].value : J.key === y.HOME && (Le = xe[0].value), !Le || !B.value)
          return;
        const Wt = Fb(xe.map((Kt) => Kt.value), B.value, Le);
        k.value = Wt;
      }
    }
    async function Pt(J) {
      if (await ae(), V.value)
        T.trigger(J);
      else {
        const te = N(), le = te.find((ee) => ee.dataset.state === "checked");
        le ? j(le) : te.length && j(te[0]);
      }
    }
    return X(k, () => {
      S.value || ae(() => {
        Pt();
      });
    }, { immediate: !0, deep: !0 }), e({
      highlightedElement: M,
      highlightItem: Q,
      highlightFirstItem: pe,
      highlightSelected: Pt,
      getItems: p
    }), Rb({
      modelValue: k,
      // @ts-expect-error ignoring
      onValueChange: F,
      multiple: r,
      orientation: i,
      dir: x,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: M,
      isVirtual: V,
      virtualFocusHook: T,
      virtualKeydownHook: R,
      virtualHighlightHook: H,
      by: n.by,
      firstValue: B,
      selectionBehavior: d,
      focusable: E,
      onLeave: Re,
      onEnter: He,
      changeHighlight: j,
      onKeydownEnter: se,
      onKeydownNavigation: Qe,
      onKeydownTypeAhead: ye,
      onCompositionStart: Y,
      onCompositionEnd: ie,
      highlightFirstItem: pe
    }), (J, te) => (f(), _(s(Be), {
      ref_key: "primitiveElement",
      ref: m,
      as: J.as,
      "as-child": J.asChild,
      dir: s(x),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: Re,
      onFocusout: te[0] || (te[0] = async (le) => {
        const ee = le.relatedTarget || le.target;
        await ae(), M.value && s(h) && !s(h).contains(ee) && Re(le);
      })
    }, {
      default: v(() => [
        w(J.$slots, "default", { modelValue: s(k) }),
        s($) && J.name ? (f(), _(s(_b), {
          key: 0,
          name: J.name,
          value: s(k),
          disabled: s(u),
          required: J.required
        }, null, 8, ["name", "value", "disabled", "required"])) : oe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), [Dt, Lb] = ht("ComboboxRoot"), Nb = /* @__PURE__ */ b({
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
    var R, H, N;
    const n = t, o = a, { primitiveElement: r, currentElement: l } = zt(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, dir: p } = me(n), g = Nu(p), m = Za(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), h = Za(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    async function y(j) {
      var Q, se;
      h.value = j, V.value = "", j ? (await ae(), (Q = r.value) == null || Q.highlightSelected(), $.value = !0) : $.value = !1, (se = S.value) == null || se.focus(), setTimeout(() => {
        !j && n.resetSearchTermOnBlur && x.trigger();
      }, 1);
    }
    const x = Vn(), $ = D(!1), B = D(!1), S = D(), E = D(), k = C(() => {
      var j;
      return ((j = r.value) == null ? void 0 : j.highlightedElement) ?? void 0;
    }), F = D(/* @__PURE__ */ new Map()), M = D(/* @__PURE__ */ new Map()), { contains: K } = Pb({ sensitivity: "base" }), V = D(""), A = C((j) => {
      if (!V.value || n.ignoreFilter || B.value)
        return {
          count: F.value.size,
          items: (j == null ? void 0 : j.items) ?? /* @__PURE__ */ new Map(),
          groups: (j == null ? void 0 : j.groups) ?? new Set(M.value.keys())
        };
      let Q = 0;
      const se = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Set();
      for (const [Y, ie] of F.value) {
        const pe = K(ie, V.value);
        se.set(Y, pe ? 1 : 0), pe && Q++;
      }
      for (const [Y, ie] of M.value)
        for (const pe of ie)
          if (se.get(pe) > 0) {
            ye.add(Y);
            break;
          }
      return {
        count: Q,
        items: se,
        groups: ye
      };
    }), T = Ee();
    return de(() => {
      var j, Q, se;
      T != null && T.exposed && (T.exposed.highlightItem = (j = r.value) == null ? void 0 : j.highlightItem, T.exposed.highlightFirstItem = (Q = r.value) == null ? void 0 : Q.highlightFirstItem, T.exposed.highlightSelected = (se = r.value) == null ? void 0 : se.highlightSelected);
    }), e({
      filtered: A,
      highlightedElement: k,
      highlightItem: (R = r.value) == null ? void 0 : R.highlightItem,
      highlightFirstItem: (H = r.value) == null ? void 0 : H.highlightFirstItem,
      highlightSelected: (N = r.value) == null ? void 0 : N.highlightSelected
    }), Lb({
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
      onInputElementChange: (j) => S.value = j,
      triggerElement: E,
      onTriggerElementChange: (j) => E.value = j,
      parentElement: l,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: x.on,
      allItems: F,
      allGroups: M,
      filterSearch: V,
      filterState: A,
      ignoreFilter: d
    }), (j, Q) => (f(), _(s(xb), null, {
      default: v(() => [
        P(s(Vb), O({
          ref_key: "primitiveElement",
          ref: r
        }, j.$attrs, {
          modelValue: s(m),
          "onUpdate:modelValue": Q[0] || (Q[0] = (se) => tt(m) ? m.value = se : null),
          style: {
            pointerEvents: s(h) ? "auto" : void 0
          },
          as: j.as,
          "as-child": j.asChild,
          dir: s(g),
          multiple: s(i),
          name: j.name,
          required: j.required,
          disabled: s(u),
          "highlight-on-hover": !0,
          by: n.by,
          onHighlight: Q[1] || (Q[1] = (se) => o("highlight", se))
        }), {
          default: v(() => [
            w(j.$slots, "default", {
              open: s(h),
              modelValue: s(m)
            })
          ]),
          _: 3
        }, 16, ["modelValue", "style", "as", "as-child", "dir", "multiple", "name", "required", "disabled", "by"])
      ]),
      _: 3
    }));
  }
}), zb = /* @__PURE__ */ b({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { CollectionSlot: e } = kr(), a = So(), n = Vu(!1, 10);
    return (o, r) => (f(), _(s(e), null, {
      default: v(() => [
        P(s(Be), {
          role: "listbox",
          as: o.as,
          "as-child": o.asChild,
          tabindex: s(a).focusable.value ? s(a).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": s(a).orientation.value,
          "aria-multiselectable": !!s(a).multiple.value,
          "data-orientation": s(a).orientation.value,
          onMousedown: r[0] || (r[0] = $e((l) => n.value = !0, ["left"])),
          onFocus: r[1] || (r[1] = (l) => {
            s(n) || s(a).onEnter(l);
          }),
          onKeydown: [
            r[2] || (r[2] = Te($e((l) => {
              s(a).focusable.value && s(a).onKeydownNavigation(l);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            Te(s(a).onKeydownEnter, ["enter"]),
            s(a).onKeydownTypeAhead
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
}), [f1, jb] = ht("ComboboxContent"), Wb = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = me(a), r = Dt(), { forwardRef: l, currentElement: i } = Fe();
    lb(a.bodyLock), nb(r.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), d = Br(u.value), c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    jb({ position: o });
    const p = D(!1);
    return de(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), Ve(() => {
      var g;
      p.value && ((g = r.triggerElement.value) == null || g.focus());
    }), (g, m) => (f(), _(s(zb), { "as-child": "" }, {
      default: v(() => [
        P(s(Xy), {
          "as-child": "",
          "disable-outside-pointer-events": g.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: v(() => [
            (f(), _(je(s(o) === "popper" ? s(Eb) : s(Be)), O({ ...g.$attrs, ...s(d) }, {
              id: s(r).contentId,
              ref: s(l),
              "data-state": s(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...s(o) === "popper" ? c : {}
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
}), v1 = /* @__PURE__ */ b({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    Fe();
    const a = Dt();
    function n() {
      a.filterSearch.value = "", a.inputElement.value && (a.inputElement.value.value = "", a.inputElement.value.focus());
    }
    return (o, r) => (f(), _(s(Be), O({
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
}), Kb = /* @__PURE__ */ b({
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
    const o = hn(t, e), { forwardRef: r } = Fe(), l = Dt();
    return l.contentId || (l.contentId = Va(void 0, "reka-combobox-content")), (i, u) => (f(), _(s(Uy), {
      present: i.forceMount || s(l).open.value
    }, {
      default: v(() => [
        P(Wb, O({ ...s(o), ...i.$attrs }, { ref: s(r) }), {
          default: v(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ub = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Dt(), n = C(
      () => a.ignoreFilter.value ? a.allItems.value.size === 0 : a.filterState.value.count === 0
    );
    return (o, r) => n.value ? (f(), _(s(Be), U(O({ key: 0 }, e)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          r[0] || (r[0] = Z("No options"))
        ])
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
}), [m1, Hb] = ht("ListboxGroup"), Gb = /* @__PURE__ */ b({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Va(void 0, "reka-listbox-group");
    return Hb({ id: a }), (n, o) => (f(), _(s(Be), O({ role: "group" }, e, { "aria-labelledby": s(a) }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), [Hu, qb] = ht("ComboboxGroup"), Yb = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Va(void 0, "reka-combobox-group"), n = Dt(), o = C(() => n.ignoreFilter.value ? !0 : n.filterSearch.value ? n.filterState.value.groups.has(a) : !0), r = qb({
      id: a,
      labelId: ""
    });
    return de(() => {
      n.allGroups.value.has(a) || n.allGroups.value.set(a, /* @__PURE__ */ new Set());
    }), Ve(() => {
      n.allGroups.value.delete(a);
    }), (l, i) => (f(), _(s(Gb), O({
      id: s(a),
      "aria-labelledby": s(r).labelId
    }, e, {
      hidden: o.value ? void 0 : !0
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "hidden"]));
  }
}), Jb = /* @__PURE__ */ b({
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
    const a = t, o = Za(a, "modelValue", e, {
      defaultValue: "",
      passive: a.modelValue === void 0
    }), r = So(), { primitiveElement: l, currentElement: i } = zt(), u = C(() => a.disabled || r.disabled.value || !1), d = D();
    return Al(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), de(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        a.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ve(() => {
      r.focusable.value = !0;
    }), (c, p) => (f(), _(s(Be), {
      ref_key: "primitiveElement",
      ref: l,
      as: c.as,
      "as-child": c.asChild,
      value: s(o),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": d.value,
      type: "text",
      onKeydown: [
        Te($e(s(r).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        Te(s(r).onKeydownEnter, ["enter"])
      ],
      onInput: p[0] || (p[0] = (g) => {
        o.value = g.target.value, s(r).highlightFirstItem();
      }),
      onCompositionstart: s(r).onCompositionStart,
      onCompositionend: s(r).onCompositionEnd
    }, {
      default: v(() => [
        w(c.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), Qb = /* @__PURE__ */ b({
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
    const a = t, n = e, o = Dt(), r = So(), { primitiveElement: l, currentElement: i } = zt(), u = Za(a, "modelValue", n, {
      passive: a.modelValue === void 0
    });
    de(() => {
      i.value && o.onInputElementChange(i.value);
    });
    function d(g) {
      o.open.value || o.onOpenChange(!0);
    }
    function c(g) {
      const m = g.target;
      o.open.value ? o.filterSearch.value = m.value : (o.onOpenChange(!0), ae(() => {
        m.value && (o.filterSearch.value = m.value, r.highlightFirstItem());
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
    }, { immediate: !0, deep: !0 }), X(o.filterState, () => {
      o.isVirtual.value || r.highlightFirstItem();
    }), (g, m) => (f(), _(s(Jb), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: s(u),
      "onUpdate:modelValue": m[0] || (m[0] = (h) => tt(u) ? u.value = h : null),
      as: g.as,
      "as-child": g.asChild,
      "auto-focus": g.autoFocus,
      "aria-expanded": s(o).open.value,
      "aria-controls": s(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: Te($e(d, ["prevent"]), ["down", "up"])
    }, {
      default: v(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
  }
}), Xb = "listbox.select", [Zb, e0] = ht("ListboxItem"), t0 = /* @__PURE__ */ b({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Va(void 0, "reka-listbox-item"), { CollectionItem: r } = kr(), { forwardRef: l, currentElement: i } = Fe(), u = So(), d = C(() => i.value === u.highlightedElement.value), c = C(() => Ab(u.modelValue.value, a.value, u.by)), p = C(() => u.disabled.value || a.disabled);
    async function g(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !p.value && h && (u.onValueChange(a.value), u.changeHighlight(i.value));
    }
    function m(h) {
      const y = { originalEvent: h, value: a.value };
      Sr(Xb, g, y);
    }
    return e0({
      isSelected: c
    }), (h, y) => (f(), _(s(r), { value: h.value }, {
      default: v(() => [
        yd([d.value, c.value], () => P(s(Be), O({ id: s(o) }, h.$attrs, {
          ref: s(l),
          role: "option",
          tabindex: s(u).focusable.value ? d.value ? "0" : "-1" : -1,
          "aria-selected": c.value,
          as: h.as,
          "as-child": h.asChild,
          disabled: p.value ? "" : void 0,
          "data-disabled": p.value ? "" : void 0,
          "data-highlighted": d.value ? "" : void 0,
          "data-state": c.value ? "checked" : "unchecked",
          onClick: m,
          onKeydown: Te($e(m, ["prevent"]), ["space"]),
          onPointermove: y[0] || (y[0] = (x) => {
            s(u).highlightedElement.value !== s(i) && (s(u).highlightOnHover.value ? s(u).changeHighlight(s(i), !1) : s(u).focusable.value || s(u).changeHighlight(s(i), !1));
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
}), a0 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = Va(void 0, "reka-combobox-item"), r = Dt(), l = Hu(null), { primitiveElement: i, currentElement: u } = zt();
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    const d = C(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value)
        return !0;
      {
        const c = r.filterState.value.items.get(o);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return de(() => {
      var p;
      r.allItems.value.set(o, a.textValue || u.value.textContent || u.value.innerText);
      const c = l == null ? void 0 : l.id;
      c && (r.allGroups.value.has(c) ? (p = r.allGroups.value.get(c)) == null || p.add(o) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([o])));
    }), Ve(() => {
      r.allItems.value.delete(o);
    }), (c, p) => d.value ? (f(), _(s(t0), O({ key: 0 }, a, {
      id: s(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || c.disabled,
      onSelect: p[0] || (p[0] = (g) => {
        n("select", g), !g.defaultPrevented && !s(r).multiple.value && !c.disabled && !s(r).disabled.value && (g.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = a.value);
      })
    }), {
      default: v(() => [
        w(c.$slots, "default", {}, () => [
          Z(re(c.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "disabled"])) : oe("", !0);
  }
}), n0 = /* @__PURE__ */ b({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    Fe();
    const a = Zb();
    return (n, o) => s(a).isSelected.value ? (f(), _(s(Be), O({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : oe("", !0);
  }
}), h1 = /* @__PURE__ */ b({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(n0), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o0 = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    Fe();
    const a = Hu({ id: "", labelId: "" });
    return a.labelId || (a.labelId = Va(void 0, "reka-combobox-group-label")), (n, o) => (f(), _(s(Be), O(e, {
      id: s(a).labelId
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), s0 = /* @__PURE__ */ b({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(ub), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), r0 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return Fe(), (a, n) => (f(), _(s(Be), O(e, { "aria-hidden": "true" }), {
      default: v(() => [
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
    const e = t, { forwardRef: a, currentElement: n } = Fe(), o = Dt(), r = C(() => e.disabled || o.disabled.value || !1);
    return de(() => {
      n.value && o.onTriggerElementChange(n.value);
    }), (l, i) => (f(), _(s(Be), O(e, {
      ref: s(a),
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": s(o).open.value,
      "aria-controls": s(o).contentId,
      "data-state": s(o).open.value ? "open" : "closed",
      disabled: r.value,
      "data-disabled": r.value ? "" : void 0,
      "aria-disabled": r.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => s(o).onOpenChange(!s(o).open.value))
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
function l0(t) {
  const e = $o({
    nonce: D()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const i0 = /* @__PURE__ */ b({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = Fe(), { nonce: n } = me(e), o = l0(n), r = Dt();
    return (l, i) => (f(), L(ne, null, [
      P(s(Be), O({ ...l.$attrs, ...e }, {
        ref: s(a),
        "data-reka-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: s(r).isVirtual.value ? void 0 : 1,
          overflow: "auto"
        }
      }), {
        default: v(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      P(s(Be), {
        as: "style",
        nonce: s(o)
      }, {
        default: v(() => i[0] || (i[0] = [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), y1 = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(cb), {
      "data-slot": "avatar",
      class: G(s(I)("relative flex size-8 shrink-0 overflow-hidden rounded-full", e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function u0(t) {
  return to() ? (ao(t), !0) : !1;
}
const Uo = /* @__PURE__ */ new WeakMap(), d0 = (...t) => {
  var e;
  const a = t[0], n = (e = Ee()) == null ? void 0 : e.proxy;
  if (n == null && !Fl())
    throw new Error("injectLocal must be called in setup");
  return n && Uo.has(n) && a in Uo.get(n) ? Uo.get(n)[a] : nn(...t);
};
function c0(t) {
  if (!tt(t))
    return qa(t);
  const e = new Proxy({}, {
    get(a, n, o) {
      return s(Reflect.get(t.value, n, o));
    },
    set(a, n, o) {
      return tt(t.value[n]) && !tt(o) ? t.value[n].value = o : t.value[n] = o, !0;
    },
    deleteProperty(a, n) {
      return Reflect.deleteProperty(t.value, n);
    },
    has(a, n) {
      return Reflect.has(t.value, n);
    },
    ownKeys() {
      return Object.keys(t.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return qa(e);
}
function p0(t) {
  return c0(C(t));
}
function f0(t, ...e) {
  const a = e.flat(), n = a[0];
  return p0(() => Object.fromEntries(typeof n == "function" ? Object.entries(me(t)).filter(([o, r]) => !n(Se(r), o)) : Object.entries(me(t)).filter((o) => !a.includes(o[0]))));
}
const v0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const m0 = (t) => typeof t < "u", h0 = Object.prototype.toString, g0 = (t) => h0.call(t) === "[object Object]", y0 = () => {
};
function Gu(...t) {
  if (t.length !== 1)
    return $s(...t);
  const e = t[0];
  return typeof e == "function" ? Ba(Bs(() => ({ get: e, set: y0 }))) : D(e);
}
function b0(t, e) {
  function a(...n) {
    return new Promise((o, r) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(r);
    });
  }
  return a;
}
const qu = (t) => t();
function _0(t = qu, e = {}) {
  const {
    initialState: a = "active"
  } = e, n = Gu(a === "active");
  function o() {
    n.value = !1;
  }
  function r() {
    n.value = !0;
  }
  const l = (...i) => {
    n.value && t(...i);
  };
  return { isActive: Ba(n), pause: o, resume: r, eventFilter: l };
}
function xl(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function Ho(t) {
  return Array.isArray(t) ? t : [t];
}
function w0(t) {
  return Ee();
}
function x0(t, e, a = {}) {
  const {
    eventFilter: n = qu,
    ...o
  } = a;
  return X(
    t,
    b0(
      n,
      e
    ),
    o
  );
}
function C0(t, e, a = {}) {
  const {
    eventFilter: n,
    initialState: o = "active",
    ...r
  } = a, { eventFilter: l, pause: i, resume: u, isActive: d } = _0(n, { initialState: o });
  return { stop: x0(
    t,
    e,
    {
      ...r,
      eventFilter: l
    }
  ), pause: i, resume: u, isActive: d };
}
function Yu(t, e = !0, a) {
  w0() ? de(t, a) : e ? t() : ae(t);
}
function $0(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const en = v0 ? window : void 0;
function Ju(t) {
  var e;
  const a = Se(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function Xn(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = C(() => {
    const i = Ho(Se(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = $0(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => Ju(d))) != null ? u : [en].filter((d) => d != null),
        Ho(Se(o.value ? t[1] : t[0])),
        Ho(s(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Se(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, d, c]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = g0(c) ? { ...c } : c;
      e.push(
        ...i.flatMap(
          (g) => u.flatMap(
            (m) => d.map((h) => n(g, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), a();
  };
  return u0(a), l;
}
function S0() {
  const t = Ct(!1), e = Ee();
  return e && de(() => {
    t.value = !0;
  }, e), t;
}
function B0(t) {
  const e = S0();
  return C(() => (e.value, !!t()));
}
const k0 = Symbol("vueuse-ssr-width");
function O0() {
  const t = Fl() ? d0(k0, null) : null;
  return typeof t == "number" ? t : void 0;
}
function Qu(t, e = {}) {
  const { window: a = en, ssrWidth: n = O0() } = e, o = B0(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), r = Ct(typeof n == "number"), l = Ct(), i = Ct(!1), u = (d) => {
    i.value = d.matches;
  };
  return be(() => {
    if (r.value) {
      r.value = !o.value;
      const d = Se(t).split(",");
      i.value = d.some((c) => {
        const p = c.includes("not all"), g = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(g || m);
        return g && h && (h = n >= xl(g[1])), m && h && (h = n <= xl(m[1])), p ? !h : h;
      });
      return;
    }
    o.value && (l.value = a.matchMedia(Se(t)), i.value = l.value.matches);
  }), Xn(l, "change", u, { passive: !0 }), C(() => i.value);
}
function D0(t) {
  return JSON.parse(JSON.stringify(t));
}
const En = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pn = "__vueuse_ssr_handlers__", E0 = /* @__PURE__ */ P0();
function P0() {
  return Pn in En || (En[Pn] = En[Pn] || {}), En[Pn];
}
function Xu(t, e) {
  return E0[t] || e;
}
function A0(t) {
  return Qu("(prefers-color-scheme: dark)", t);
}
function M0(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const T0 = {
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
}, Cl = "vueuse-storage";
function I0(t, e, a, n = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: l = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: c,
    window: p = en,
    eventFilter: g,
    onError: m = (N) => {
      console.error(N);
    },
    initOnMounted: h
  } = n, y = (c ? Ct : D)(typeof e == "function" ? e() : e), x = C(() => Se(t));
  if (!a)
    try {
      a = Xu("getDefaultStorage", () => {
        var N;
        return (N = en) == null ? void 0 : N.localStorage;
      })();
    } catch (N) {
      m(N);
    }
  if (!a)
    return y;
  const $ = Se(e), B = M0($), S = (o = n.serializer) != null ? o : T0[B], { pause: E, resume: k } = C0(
    y,
    () => A(y.value),
    { flush: r, deep: l, eventFilter: g }
  );
  X(x, () => R(), { flush: r });
  let F = !1;
  const M = (N) => {
    h && !F || R(N);
  }, K = (N) => {
    h && !F || H(N);
  };
  p && i && (a instanceof Storage ? Xn(p, "storage", M, { passive: !0 }) : Xn(p, Cl, K)), h ? Yu(() => {
    F = !0, R();
  }) : R();
  function V(N, j) {
    if (p) {
      const Q = {
        key: x.value,
        oldValue: N,
        newValue: j,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", Q) : new CustomEvent(Cl, {
        detail: Q
      }));
    }
  }
  function A(N) {
    try {
      const j = a.getItem(x.value);
      if (N == null)
        V(j, null), a.removeItem(x.value);
      else {
        const Q = S.write(N);
        j !== Q && (a.setItem(x.value, Q), V(j, Q));
      }
    } catch (j) {
      m(j);
    }
  }
  function T(N) {
    const j = N ? N.newValue : a.getItem(x.value);
    if (j == null)
      return u && $ != null && a.setItem(x.value, S.write($)), $;
    if (!N && d) {
      const Q = S.read(j);
      return typeof d == "function" ? d(Q, $) : B === "object" && !Array.isArray(Q) ? { ...$, ...Q } : Q;
    } else return typeof j != "string" ? j : S.read(j);
  }
  function R(N) {
    if (!(N && N.storageArea !== a)) {
      if (N && N.key == null) {
        y.value = $;
        return;
      }
      if (!(N && N.key !== x.value)) {
        E();
        try {
          (N == null ? void 0 : N.newValue) !== S.write(y.value) && (y.value = T(N));
        } catch (j) {
          m(j);
        } finally {
          N ? ae(k) : k();
        }
      }
    }
  }
  function H(N) {
    R(N.detail);
  }
  return y;
}
const F0 = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function R0(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = en,
    storage: r,
    storageKey: l = "vueuse-color-scheme",
    listenToStorageChanges: i = !0,
    storageRef: u,
    emitAuto: d,
    disableTransition: c = !0
  } = t, p = {
    auto: "",
    light: "light",
    dark: "dark",
    ...t.modes || {}
  }, g = A0({ window: o }), m = C(() => g.value ? "dark" : "light"), h = u || (l == null ? Gu(n) : I0(l, n, r, { window: o, listenToStorageChanges: i })), y = C(() => h.value === "auto" ? m.value : h.value), x = Xu(
    "updateHTMLAttrs",
    (E, k, F) => {
      const M = typeof E == "string" ? o == null ? void 0 : o.document.querySelector(E) : Ju(E);
      if (!M)
        return;
      const K = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
      let A = null;
      if (k === "class") {
        const R = F.split(/\s/g);
        Object.values(p).flatMap((H) => (H || "").split(/\s/g)).filter(Boolean).forEach((H) => {
          R.includes(H) ? K.add(H) : V.add(H);
        });
      } else
        A = { key: k, value: F };
      if (K.size === 0 && V.size === 0 && A === null)
        return;
      let T;
      c && (T = o.document.createElement("style"), T.appendChild(document.createTextNode(F0)), o.document.head.appendChild(T));
      for (const R of K)
        M.classList.add(R);
      for (const R of V)
        M.classList.remove(R);
      A && M.setAttribute(A.key, A.value), c && (o.getComputedStyle(T).opacity, document.head.removeChild(T));
    }
  );
  function $(E) {
    var k;
    x(e, a, (k = p[E]) != null ? k : E);
  }
  function B(E) {
    t.onChanged ? t.onChanged(E, $) : $(E);
  }
  X(y, B, { flush: "post", immediate: !0 }), Yu(() => B(y.value));
  const S = C({
    get() {
      return d ? h.value : y.value;
    },
    set(E) {
      h.value = E;
    }
  });
  return Object.assign(S, { store: h, system: m, state: y });
}
function V0(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = ""
  } = t, n = R0({
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
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: g
  } = n, m = Ee(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let y = d;
  e || (e = "modelValue"), y = y || `update:${e.toString()}`;
  const x = (S) => i ? typeof i == "function" ? i(S) : D0(S) : S, $ = () => m0(t[e]) ? x(t[e]) : p, B = (S) => {
    g ? g(S) && h(y, S) : h(y, S);
  };
  if (u) {
    const S = $(), E = D(S);
    let k = !1;
    return X(
      () => t[e],
      (F) => {
        k || (k = !0, E.value = x(F), ae(() => k = !1));
      }
    ), X(
      E,
      (F) => {
        !k && (F !== t[e] || c) && B(F);
      },
      { deep: c }
    ), E;
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
const b1 = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = f0(e, "class");
    return (n, o) => (f(), _(s(pb), O({ "data-slot": "avatar-fallback" }, s(a), {
      class: s(I)("bg-muted flex size-full items-center justify-center rounded-full", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _1 = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(vb), O({ "data-slot": "avatar-image" }, e, { class: "aspect-square size-full" }), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w1 = /* @__PURE__ */ b({
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
      class: G(s(I)(s(L0)({ variant: a.variant, type: a.type, size: a.size }), e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), L0 = oa(
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
), x1 = /* @__PURE__ */ b({
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
}), C1 = /* @__PURE__ */ b({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: G(s(I)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        P(s(Ru), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = he("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), $1 = /* @__PURE__ */ b({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      class: G(s(I)("inline-flex items-center gap-1.5", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), S1 = /* @__PURE__ */ b({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "a" },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), {
      as: a.as,
      "as-child": a.asChild,
      class: G(s(I)("hover:text-foreground transition-colors", e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), B1 = /* @__PURE__ */ b({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ol", {
      class: G(
        s(I)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), k1 = /* @__PURE__ */ b({
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
      class: G(s(I)("text-foreground font-normal", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), O1 = /* @__PURE__ */ b({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: G(s(I)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        P(s(xr))
      ])
    ], 2));
  }
}), Et = /* @__PURE__ */ b({
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
    return (a, n) => (f(), _(s(z), {
      as: a.as,
      "as-child": a.asChild,
      class: G(s(I)(s(ra)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default"),
        a.loading ? (f(), _(s(gy), {
          key: 0,
          class: G(s(N0)({ size: a.size }))
        }, null, 8, ["class"])) : oe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), N0 = oa("animate-spin", {
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
}), ra = oa(
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
), D1 = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(
        s(I)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), E1 = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(s(I)("flex flex-col gap-y-1.5 p-6", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), P1 = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("h3", {
      class: G(s(I)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), A1 = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("p", {
      class: G(s(I)("text-muted-foreground text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), M1 = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(s(I)("p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), T1 = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(s(I)("flex items-center p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), I1 = /* @__PURE__ */ b({
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
    const o = hn(t, e);
    return (r, l) => (f(), _(s(Nb), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F1 = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = Br(a);
    return (o, r) => (f(), _(s($b), O(s(n), {
      class: s(I)("w-[200px]", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Ub), O(a.value, {
      class: s(I)("py-6 text-center text-sm", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Yb), O(a.value, {
      class: s(I)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e.class)
    }), {
      default: v(() => [
        n.heading ? (f(), _(s(o0), {
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
}), L1 = /* @__PURE__ */ b({
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
    }), r = hn(o, n);
    return (l, i) => (f(), _(s(Qb), O(s(r), {
      class: s(I)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", a.class)
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N1 = /* @__PURE__ */ b({
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
    }), r = hn(o, n);
    return (l, i) => (f(), _(s(a0), O(s(r), {
      class: s(I)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", a.class)
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z1 = /* @__PURE__ */ b({
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
    }), r = hn(o, n);
    return (l, i) => (f(), _(s(s0), null, {
      default: v(() => [
        P(s(Kb), O(s(r), {
          class: s(I)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a.class)
        }), {
          default: v(() => [
            P(s(i0), null, {
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
}), j1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(r0), O(a.value, {
      class: s(I)("-mx-1 h-px bg-border", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z0 = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, W1 = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(Gi), O({
      class: s(I)("p-3", a.class)
    }, s(r)), {
      default: v(({ grid: u, weekDays: d }) => [
        P(s(sd), null, {
          default: v(() => [
            P(s(W0)),
            P(s(rd)),
            P(s(j0))
          ]),
          _: 1
        }),
        he("div", z0, [
          (f(!0), L(ne, null, _e(u, (c) => (f(), _(s(td), {
            key: c.value.toString()
          }, {
            default: v(() => [
              P(s(nd), null, {
                default: v(() => [
                  P(s(Zn), null, {
                    default: v(() => [
                      (f(!0), L(ne, null, _e(d, (p) => (f(), _(s(od), { key: p }, {
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
              P(s(ad), null, {
                default: v(() => [
                  (f(!0), L(ne, null, _e(c.rows, (p, g) => (f(), _(s(Zn), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(ne, null, _e(p, (m) => (f(), _(s(Zu), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          P(s(ed), {
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
}), Zu = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Qf), O({
      class: s(I)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ed = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(ov), O({
      class: s(I)(
        s(ra)({ variant: "ghost" }),
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
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), td = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Jf), O({
      class: s(I)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ad = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(av), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nd = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(tv), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zn = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(nv), O({
      class: s(I)("flex", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), od = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Xf), O({
      class: s(I)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sd = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(qf), O({
      class: s(I)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rd = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Yf), O({
      class: s(I)("text-text text-sm font-medium", e.class)
    }, s(n)), {
      default: v(({ headingValue: l }) => [
        w(o.$slots, "default", { headingValue: l }, () => [
          Z(re(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j0 = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Zf), O({
      class: s(I)(
        s(ra)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => r[0] || (r[0] = [
        Z(" > ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), W0 = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(ev), O({
      class: s(I)(
        s(ra)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => r[0] || (r[0] = [
        Z(" < ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), ys = /* @__PURE__ */ b({
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
    return (r, l) => (f(), _(s(rh), U(q(s(o))), {
      default: v(({ open: i }) => [
        w(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), bs = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Eh), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _s = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(uh), O(s(n), {
      class: s(I)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default"),
        P(s(Ph), { "as-child": "" }, {
          default: v(() => [
            P(s(wr), {
              class: G(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ws = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(dh), null, {
      default: v(() => [
        P(s(yh), O({ ...s(r), ...l.$attrs }, {
          class: s(I)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: v(() => [
            P(s(U0)),
            P(s(kh), {
              class: G(
                s(I)(
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
            P(s(H0))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), K1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Sh), O({
      class: s(I)("w-full p-1", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K0 = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, xs = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(wh), O(s(n), {
      class: s(I)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: v(() => [
        he("span", K0, [
          P(s(xh), null, {
            default: v(() => [
              P(s(_r), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        P(s(fu), null, {
          default: v(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U1 = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(fu), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H1 = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Bh), {
      class: G(s(I)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), G1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(bh), O(a.value, {
      class: s(I)("bg-muted -mx-1 my-1 h-px", e.class)
    }), null, 16, ["class"]));
  }
}), U0 = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Oh), O(s(n), {
      class: s(I)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          P(s(fy), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), H0 = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Dh), O(s(n), {
      class: s(I)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          P(s(wr), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G0 = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, q0 = /* @__PURE__ */ b({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return Ln(St());
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
      const { class: u, placeholder: d, ...c } = a;
      return c;
    }), r = Or(a, "modelValue", n, {
      passive: !0,
      defaultValue: Ln(St())
    }), l = ue(o, n), i = Mi("en");
    return (u, d) => (f(), _(s(Gi), O({
      placeholder: s(r),
      "onUpdate:placeholder": d[2] || (d[2] = (c) => tt(r) ? r.value = c : null)
    }, s(l), {
      class: s(I)("rounded-md border p-3", a.class)
    }), {
      default: v(({ date: c, grid: p, weekDays: g }) => [
        P(s(sd), null, {
          default: v(() => [
            P(s(rd), { class: "flex w-full items-center justify-between gap-2" }, {
              default: v(() => [
                P(s(ys), {
                  "default-value": s(r).month.toString(),
                  "onUpdate:modelValue": d[0] || (d[0] = (m) => {
                    var h;
                    !m || !s(r) || Number(m) !== ((h = s(r)) == null ? void 0 : h.month) && (r.value = s(r).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: v(() => [
                    P(s(_s), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: v(() => [
                        P(s(bs), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    P(s(ws), { class: "max-h-[200px]" }, {
                      default: v(() => [
                        (f(!0), L(ne, null, _e(s(Oc)({ dateObj: c }), (m) => (f(), _(s(xs), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: v(() => [
                            Z(re(s(i).custom(s(Ye)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                P(s(ys), {
                  "default-value": s(r).year.toString(),
                  "onUpdate:modelValue": d[1] || (d[1] = (m) => {
                    var h;
                    !m || !s(r) || Number(m) !== ((h = s(r)) == null ? void 0 : h.year) && (r.value = s(r).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: v(() => [
                    P(s(_s), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: v(() => [
                        P(s(bs), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    P(s(ws), { class: "max-h-[200px]" }, {
                      default: v(() => [
                        (f(!0), L(ne, null, _e(s(kc)({ dateObj: c, startIndex: -100, endIndex: 10 }), (m) => (f(), _(s(xs), {
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
        he("div", G0, [
          (f(!0), L(ne, null, _e(p, (m) => (f(), _(s(td), {
            key: m.value.toString()
          }, {
            default: v(() => [
              P(s(nd), null, {
                default: v(() => [
                  P(s(Zn), null, {
                    default: v(() => [
                      (f(!0), L(ne, null, _e(g, (h) => (f(), _(s(od), { key: h }, {
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
              P(s(ad), { class: "grid" }, {
                default: v(() => [
                  (f(!0), L(ne, null, _e(m.rows, (h, y) => (f(), _(s(Zn), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(ne, null, _e(h, (x) => (f(), _(s(Zu), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: v(() => [
                          P(s(ed), {
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
}), Y0 = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(yv), O(s(r), {
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
}), ld = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (f(), _(s(Li), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q1 = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(pn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J0 = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Ni), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q0 = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(s(I)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), X0 = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Ki), O(s(n), {
      class: s(I)("text-heading text-2xl font-semibold leading-none tracking-tight", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z0 = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Ui), O(s(n), {
      class: s(I)("text-sub-text text-sm", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), id = /* @__PURE__ */ b({
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
    }), r = ue(o, a);
    return (l, i) => (f(), _(s(ar), null, {
      default: v(() => [
        P(s(lr), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(s(rr), O(s(r), {
          class: s(I)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            n.class
          )
        }), {
          default: v(() => [
            w(l.$slots, "default"),
            P(s(pn), {
              onClick: i[0] || (i[0] = (u) => a("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: v(() => [
                P(s(xo), { class: "size-4 dark:text-slate-300" }),
                i[1] || (i[1] = he("span", { class: "sr-only" }, "Close", -1))
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
}), Y1 = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(ar), null, {
      default: v(() => [
        P(s(lr), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: v(() => [
            P(s(rr), O({
              class: s(I)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",
                a.class
              )
            }, s(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, c = d.target;
                (d.offsetX > c.clientWidth || d.offsetY > c.clientHeight) && u.preventDefault();
              })
            }), {
              default: v(() => [
                w(l.$slots, "default"),
                P(s(pn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: v(() => [
                    P(s(xo), { class: "size-4" }),
                    i[1] || (i[1] = he("span", { class: "sr-only" }, "Close", -1))
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
}), e_ = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(
        s(I)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), J1 = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (f(), _(s(ld), U(q(s(o))), {
      default: v(() => [
        P(s(id), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: v(() => [
            P(Y0, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: v(() => [
                w(r.$slots, "default")
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
}), Q1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Bv), O(a.value, {
      class: s(I)("py-6 text-center text-sm", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X1 = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(wv), O(a.value, {
      class: s(I)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: v(() => [
        n.heading ? (f(), _(s(xv), {
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
}), t_ = { class: "flex items-center border-b px-3" }, Z1 = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), L("div", t_, [
      P(s(xy), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      P(s(bv), O({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(I)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), ex = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(Ev), O(s(r), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a_ = { role: "presentation" }, tx = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(Sv), O(s(r), {
      class: s(I)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: v(() => [
        he("div", a_, [
          w(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ax = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Pv), O(a.value, {
      class: s(I)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nx = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      class: G(s(I)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), n_ = /* @__PURE__ */ b({
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
    return (r, l) => (f(), _(s(dm), U(q(s(o))), {
      default: v(({ open: i }) => [
        w(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), o_ = /* @__PURE__ */ b({
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
        s(I)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-slate-200 focus:bg-slate-100 focus:text-slate-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-800 dark:focus:text-slate-50",
          a.inset && "pl-8",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), s_ = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const a = ve(t);
    return (n, o) => (f(), _(s(cm), O({ class: "outline-hidden" }, s(a)), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), r_ = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(pm), null, {
      default: v(() => [
        P(s(fm), O(s(r), {
          class: s(I)(
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
}), ox = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(vm), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sx = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (f(), _(s(ym), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rx = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(lu), O(s(n), {
      class: s(I)(
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
}), l_ = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(o_, {
      class: G(e.class)
    }, {
      default: v(() => [
        P(s(lu), O(s(n), {
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
}), i_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, lx = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(hm), O(s(r), {
      class: s(I)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        he("span", i_, [
          P(s(iu), null, {
            default: v(() => [
              P(s(_r), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, ix = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(bm), O(s(r), {
      class: s(I)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: v(() => [
        he("span", u_, [
          P(s(iu), null, {
            default: v(() => [
              P(s(hy), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ux = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("span", {
      class: G(s(I)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), dx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(mm), O(a.value, {
      class: s(I)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), cx = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(gm), O(s(n), {
      class: s(I)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), px = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (f(), _(s(_m), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fx = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(xm), O(s(n), {
      class: s(I)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        e.class
      )
    }), {
      default: v(() => [
        w(o.$slots, "default"),
        P(s(xr), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vx = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(wm), O(s(r), {
      class: s(I)(
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
}), d_ = { class: "text-xs text-slate-600 dark:text-slate-300" }, c_ = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (f(), L("div", d_, "Characters: " + re(e.count), 1));
  }
}), gn = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, p_ = {}, f_ = { class: "text-sm text-slate-400 dark:text-slate-500" };
function v_(t, e) {
  return f(), L("div", f_, [
    w(t.$slots, "default")
  ]);
}
const m_ = /* @__PURE__ */ gn(p_, [["render", v_]]), h_ = { class: "text-sm text-red-600 dark:text-red-400" }, g_ = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => Qt((f(), L("div", null, [
      he("p", h_, re(e.error), 1)
    ], 512)), [
      [so, e.error]
    ]);
  }
}), y_ = {}, b_ = { class: "w-full space-y-4 p-1.5" };
function __(t, e) {
  return f(), L("div", b_, [
    w(t.$slots, "default")
  ]);
}
const mx = /* @__PURE__ */ gn(y_, [["render", __]]), w_ = {}, x_ = { class: "my-4" };
function C_(t, e) {
  return f(), L("div", x_, [
    w(t.$slots, "default")
  ]);
}
const $_ = /* @__PURE__ */ gn(w_, [["render", C_]]), S_ = { class: "grid gap-4 md:grid-cols-2" }, hx = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (f(), _($_, null, {
      default: v(() => [
        he("div", S_, [
          w(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), ud = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Cm), O(a.value, {
      class: s(I)(
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
}), B_ = { class: "relative" }, k_ = {
  name: "Base",
  inheritAttrs: !1
}, la = /* @__PURE__ */ b({
  ...k_,
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
        e.label && e.showLabel ? (f(), _(s(ud), {
          key: 0,
          id: e.id
        }, {
          default: v(() => [
            Z(re(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : oe("", !0),
        he("div", B_, [
          w(e.$slots, "default"),
          e.showCharacterCount ? (f(), _(s(c_), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : oe("", !0)
        ]),
        P(s(m_), { class: "mt-[2px]" }, {
          default: v(() => [
            Z(re(e.description), 1)
          ]),
          _: 1
        }),
        P(s(g_), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), O_ = { class: "flex gap-2" }, gx = /* @__PURE__ */ b({
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
    const a = e, o = D(t.modelValue);
    return X(o, (r) => {
      a("update:modelValue", r);
    }), (r, l) => (f(), _(s(la), U(q(r.$props)), {
      default: v(() => [
        he("div", O_, [
          P(s(iv), {
            id: r.id,
            checked: o.value,
            "onUpdate:checked": l[0] || (l[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: v(() => [
              P(s(uv), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: v(() => [
                  P(s(_r), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          r.text ? (f(), _(s(ud), {
            key: 0,
            id: r.id,
            class: "my-auto"
          }, {
            default: v(() => [
              Z(re(r.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : oe("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), D_ = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (f(), _(s(Mm), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E_ = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Tm), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P_ = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(Im), null, {
      default: v(() => [
        P(s(Vm), O({ ...s(r), ...l.$attrs }, {
          class: s(I)(
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
}), yx = /* @__PURE__ */ b({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = new rt("en-US", {
      dateStyle: "long"
    }), r = D(n.modelValue);
    return X(r, () => {
      a("update:modelValue", r.value);
    }), de(() => {
      if (n.defaultValue)
        r.value = n.defaultValue;
      else if (r.value === null) {
        const l = /* @__PURE__ */ new Date();
        r.value = new ke(
          l.getFullYear(),
          l.getMonth() + 1,
          l.getDate()
        );
      }
    }), (l, i) => (f(), _(s(la), U(q(l.$props)), {
      default: v(() => [
        P(s(D_), null, {
          default: v(() => [
            P(s(E_), { "as-child": "" }, {
              default: v(() => [
                P(s(Et), {
                  variant: "outline",
                  class: G(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: v(() => [
                    P(s(cy), { class: "mr-2 size-4" }),
                    Z(" " + re(r.value ? s(o).format(r.value.toDate(s(St)())) : l.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            P(s(P_), { class: "w-auto p-0" }, {
              default: v(() => [
                P(s(q0), {
                  modelValue: r.value,
                  "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u),
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
for (var Go = 0; Go < 256; ++Go)
  Me.push((Go + 256).toString(16).slice(1));
function A_(t, e = 0) {
  return (Me[t[e + 0]] + Me[t[e + 1]] + Me[t[e + 2]] + Me[t[e + 3]] + "-" + Me[t[e + 4]] + Me[t[e + 5]] + "-" + Me[t[e + 6]] + Me[t[e + 7]] + "-" + Me[t[e + 8]] + Me[t[e + 9]] + "-" + Me[t[e + 10]] + Me[t[e + 11]] + Me[t[e + 12]] + Me[t[e + 13]] + Me[t[e + 14]] + Me[t[e + 15]]).toLowerCase();
}
var An, M_ = new Uint8Array(16);
function T_() {
  if (!An && (An = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !An))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return An(M_);
}
var I_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const $l = {
  randomUUID: I_
};
function F_(t, e, a) {
  if ($l.randomUUID && !t)
    return $l.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || T_)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, A_(n);
}
const R_ = { class: "flex items-center space-x-2" }, V_ = ["src"], L_ = ["accept"], bx = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + F_(), r = C(() => i.value ? URL.createObjectURL(i.value) : null), l = a.currentImage ? a.currentImage : a.defaultImage, i = C({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), u = (c) => {
      i.value = c.target.files[0];
    }, d = () => document.getElementById(o).click();
    return (c, p) => (f(), _(s(la), U(q(c.$props)), {
      default: v(() => [
        he("div", R_, [
          w(c.$slots, "image", {
            newImage: r.value,
            curImage: s(l)
          }, () => [
            he("img", {
              src: r.value ?? s(l),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, V_)
          ]),
          he("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: u
          }, null, 40, L_),
          P(s(Et), {
            variant: "outline",
            onClick: d
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
}), N_ = ["disabled", "placeholder", "required", "type"], z_ = /* @__PURE__ */ b({
  __name: "Input",
  props: /* @__PURE__ */ Jo({
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
    const e = Rl(t, "modelValue");
    return (a, n) => (f(), _(s(la), U(q(a.$props)), {
      default: v(() => [
        Qt(he("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: G(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, N_), [
          [bd, e.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), _x = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = C(() => n.placeholder ?? "Select an option..."), r = D(
      n.modelValue ? n.options.find((l) => l === n.modelValue) : null
    );
    return X(r, () => {
      a("update:modelValue", r.value);
    }), (l, i) => (f(), _(s(la), U(q(l.$props)), {
      default: v(() => [
        P(s(ys), {
          modelValue: r.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u)
        }, {
          default: v(({ open: u }) => [
            P(s(_s), { open: u }, {
              default: v(() => [
                P(s(bs), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            P(s(ws), null, {
              default: v(() => [
                (f(!0), L(ne, null, _e(l.options, (d) => (f(), _(s(xs), { value: d }, {
                  default: v(() => [
                    Z(re(d), 1)
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
}), j_ = ["placeholder"], wx = /* @__PURE__ */ b({
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
    return (r, l) => (f(), _(s(la), U(q(r.$props)), {
      default: v(() => [
        Qt(he("textarea", {
          "onUpdate:modelValue": l[0] || (l[0] = (i) => tt(o) ? o.value = i : null),
          placeholder: r.placeholder,
          class: G(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !r.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": r.error
          }])
        }, null, 10, j_), [
          [_d, s(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), W_ = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ Jo({
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
  emits: /* @__PURE__ */ Jo(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = e, n = t, o = Rl(t, "modelValue");
    X(o, () => {
      a("update:modelValue", o.value);
    });
    const r = C(() => {
      const { class: i, ...u } = n;
      return u;
    }), l = ue(r, a);
    return (i, u) => (f(), _(s(la), U(q(i.$props)), {
      default: v(() => [
        P(s(tg), O({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (d) => o.value = d)
        }, s(l), {
          class: s(I)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        }), {
          default: v(({ checked: d }) => [
            P(s(ag), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: v(() => [
                d ? w(i.$slots, "checked", { key: 0 }) : oe("", !0),
                d ? oe("", !0) : w(i.$slots, "not-checked", { key: 1 })
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
}), K_ = { class: "my-auto text-slate-400 dark:text-slate-100" }, xx = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (f(), L("div", K_, " Showing " + re(e.min) + " to " + re(e.max) + " of " + re(e.total) + " results ", 1));
  }
}), Cx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Sm), O(a.value, {
      class: s(I)("text-text flex size-9 items-center justify-center", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default", {}, () => [
          P(s(Ru))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $x = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Bm), U(q(a.value)), {
      default: v(() => [
        P(s(Et), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: s(vy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Sx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(km), U(q(a.value)), {
      default: v(() => [
        P(s(Et), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: s(my) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Bx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Em), U(q(a.value)), {
      default: v(() => [
        P(s(Et), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: s(xr) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), kx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Pm), U(q(a.value)), {
      default: v(() => [
        P(s(Et), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: v(() => [
            w(n.$slots, "default", { icon: s(py) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), Ox = /* @__PURE__ */ b({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = V0({
      selector: "html"
    });
    return (a, n) => (f(), _(W_, {
      modelValue: s(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => tt(e) ? e.value = o : null)
    }, {
      checked: v(() => [
        P(s(yy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": v(() => [
        P(s(Cy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Dx = /* @__PURE__ */ b({
  __name: "CollapsibleTableRow",
  props: {
    row: {},
    headers: {},
    subRows: {},
    setOpenTo: { type: Boolean, default: !1 },
    class: {}
  },
  setup(t) {
    const e = t, a = D(e.setOpenTo), n = () => {
      a.value = !a.value;
    };
    return (o, r) => (f(), L(ne, null, [
      P(s(tn), {
        onClick: n,
        class: G(e.class)
      }, {
        default: v(() => [
          (f(!0), L(ne, null, _e(o.headers, (l) => (f(), _(s(eo), {
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
          o.$slots.row_actions ? (f(), _(s(Cs), { key: 0 }, {
            default: v(() => [
              w(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : oe("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (f(!0), L(ne, { key: 0 }, _e(o.subRows, (l, i) => (f(), _(s(tn), { key: i }, {
        default: v(() => [
          (f(!0), L(ne, null, _e(o.headers, (u) => (f(), _(s(eo), {
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
          o.$slots.sub_row_actions ? (f(), _(s(Cs), { key: 0 }, {
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
}), U_ = { class: "relative w-full overflow-auto" }, H_ = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", U_, [
      he("table", {
        class: G(s(I)("w-full caption-bottom text-sm", e.class))
      }, [
        w(a.$slots, "default")
      ], 2)
    ]));
  }
}), G_ = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tbody", {
      class: G(s(I)("[&_tr:last-child]:border-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), eo = /* @__PURE__ */ b({
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
}), q_ = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("th", {
      class: G(
        s(I)(
          "text-heading h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Y_ = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("thead", {
      class: G(s(I)("[&_tr]:border-b", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ex = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tfoot", {
      class: G(
        s(I)(
          "border-t bg-slate-100/50 font-medium dark:bg-slate-800/50 last:[&>tr]:border-b-0",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), tn = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("tr", {
      class: G(
        s(I)(
          "border-b border-b-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:border-b-slate-500 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Cs = /* @__PURE__ */ b({
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
}), J_ = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("caption", {
      class: G(s(I)("text-sub-text mt-4 text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Q_ = { class: "flex items-center justify-center py-10" }, Px = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(tn, null, {
      default: v(() => [
        P(eo, O({
          class: s(I)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: v(() => [
            he("div", Q_, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (f(), _(s(H_), null, {
      default: v(() => [
        e.caption ? (f(), _(s(J_), { key: 0 }, {
          default: v(() => [
            Z(re(e.caption), 1)
          ]),
          _: 1
        })) : oe("", !0),
        P(s(Y_), null, {
          default: v(() => [
            P(s(tn), null, {
              default: v(() => [
                (f(!0), L(ne, null, _e(e.headers, (n, o) => (f(), _(s(q_), null, {
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
        P(s(G_), null, {
          default: v(() => [
            (f(!0), L(ne, null, _e(e.rows, (n, o) => (f(), _(s(tn), { key: o }, {
              default: v(() => [
                (f(!0), L(ne, null, _e(e.headers, (r) => (f(), _(s(eo), {
                  key: r.value
                }, {
                  default: v(() => [
                    e.$slots[`cell_${r.value}`] ? w(e.$slots, `cell_${r.value}`, {
                      key: 0,
                      item: n
                    }) : (f(), L(ne, { key: 1 }, [
                      Z(re(n[r.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (f(), _(s(Cs), { key: 0 }, {
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
}), X_ = { class: "text-text" }, Mx = /* @__PURE__ */ b({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, r) => (f(), _(s(ld), { open: o.open }, {
      default: v(() => [
        P(s(J0), { "as-child": "" }, {
          default: v(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        P(s(id), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: G("max-w-" + o.size)
        }, {
          default: v(() => [
            P(s(Q0), null, {
              default: v(() => [
                P(s(X0), null, {
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
                P(s(Z0), null, {
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
            he("div", X_, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            P(s(e_), null, {
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
}), Z_ = /* @__PURE__ */ b({
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
    const o = ue(t, e);
    return (r, l) => (f(), _(s(og), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tx = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(lg), O(s(n), {
      class: s(I)(
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
}), ew = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => {
      var o;
      return f(), _(je((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: G([
          a.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          s(I)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            e.class
          )
        ])
      }, {
        default: v(() => {
          var r;
          return [
            (r = a.tab) != null && r.icon ? (f(), _(je(a.tab.icon), {
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
}), Sl = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(sg), O(a.value, {
      class: s(I)(
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
}), Ix = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(rg), O({
      class: s(I)(
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
}), tw = {}, aw = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function nw(t, e) {
  return f(), L("div", aw, [
    w(t.$slots, "default")
  ]);
}
const ow = /* @__PURE__ */ gn(tw, [["render", nw]]), Fx = /* @__PURE__ */ b({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = C(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (f(), _(s(Z_), null, {
      default: v(() => [
        P(s(Sl), { class: "hidden gap-2 md:block" }, {
          default: v(() => [
            (f(!0), L(ne, null, _e(n.tabs, (r) => (f(), _(s(ew), {
              key: r.name,
              tab: r
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        P(s(Sl), { class: "flex md:hidden" }, {
          default: v(() => [
            P(s(n_), null, {
              default: v(() => [
                P(s(s_), { "as-child": "" }, {
                  default: v(() => [
                    P(s(Et), { variant: "secondary" }, {
                      default: v(() => {
                        var r;
                        return [
                          Z(re(((r = a.value) == null ? void 0 : r.name) ?? "Select an option"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                P(s(r_), { class: "w-full" }, {
                  default: v(() => [
                    (f(!0), L(ne, null, _e(n.tabs, (r) => (f(), _(s(l_), O({
                      key: r.name
                    }, { ref_for: !0 }, r), {
                      default: v(() => [
                        Z(re(r.name), 1)
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
        P(s(ow), null, {
          default: v(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), sw = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Rx = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(Wm), O({
      class: s(I)("p-3", a.class)
    }, s(r)), {
      default: v(({ grid: u, weekDays: d }) => [
        P(s(pw), null, {
          default: v(() => [
            P(s(mw)),
            P(s(fw)),
            P(s(vw))
          ]),
          _: 1
        }),
        he("div", sw, [
          (f(!0), L(ne, null, _e(u, (c) => (f(), _(s(iw), {
            key: c.value.toString()
          }, {
            default: v(() => [
              P(s(dw), null, {
                default: v(() => [
                  P(s(Bl), null, {
                    default: v(() => [
                      (f(!0), L(ne, null, _e(d, (p) => (f(), _(s(cw), { key: p }, {
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
              P(s(uw), null, {
                default: v(() => [
                  (f(!0), L(ne, null, _e(c.rows, (p, g) => (f(), _(s(Bl), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (f(!0), L(ne, null, _e(p, (m) => (f(), _(s(rw), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: v(() => [
                          P(s(lw), {
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
}), rw = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Gm), O({
      class: s(I)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lw = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(eh), O({
      class: s(I)(
        s(ra)({ variant: "ghost" }),
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
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iw = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Hm), O({
      class: s(I)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uw = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Xm), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dw = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Qm), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bl = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Zm), O({
      class: s(I)("mt-2 flex w-full", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(qm), O({
      class: s(I)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Km), O({
      class: s(I)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fw = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Um), O({
      class: s(I)("text-text text-sm font-medium", e.class)
    }, s(n)), {
      default: v(({ headingValue: l }) => [
        w(o.$slots, "default", { headingValue: l }, () => [
          Z(re(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vw = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Ym), O({
      class: s(I)(
        s(ra)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          P(s(_y), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mw = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = ve(a);
    return (o, r) => (f(), _(s(Jm), O({
      class: s(I)(
        s(ra)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: v(() => [
        w(o.$slots, "default", {}, () => [
          P(s(by), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hw = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Mh), O(a.value, {
      class: s(I)(
        "bg-border relative shrink-0",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: v(() => [
        e.label ? (f(), L("span", {
          key: 0,
          class: G(
            s(I)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              e.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, re(e.label), 3)) : oe("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), gw = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = ue(t, e);
    return (r, l) => (f(), _(s(Li), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vx = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(pn), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yw = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(ar), null, {
      default: v(() => [
        P(s(lr), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        P(s(rr), O({
          class: s(I)(s(bw)({ side: l.side }), a.class)
        }, { ...s(r), ...l.$attrs }), {
          default: v(() => [
            w(l.$slots, "default"),
            P(s(pn), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: v(() => [
                P(s(xo), { class: "text-muted-foreground h-4 w-4" })
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
}), Lx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Ui), O({
      class: s(I)("text-muted-foreground text-sm", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nx = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(s(I)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), zx = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(s(I)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), jx = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Ki), O({
      class: s(I)("text-foreground text-lg font-semibold", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wx = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(Ni), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bw = oa(
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
), _w = "sidebar:state", ww = 60 * 60 * 24 * 7, xw = "16rem", Cw = "18rem", $w = "3rem", Sw = "b", [Bo, Bw] = fe("Sidebar"), kw = { class: "flex h-full w-full flex-col" }, Ow = ["data-state", "data-collapsible", "data-variant", "data-side"], Dw = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Kx = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(t) {
    const e = t, { isMobile: a, state: n, openMobile: o, setOpenMobile: r } = Bo();
    return (l, i) => l.collapsible === "none" ? (f(), L("div", O({
      key: 0,
      class: s(I)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", e.class)
    }, l.$attrs), [
      w(l.$slots, "default")
    ], 16)) : s(a) ? (f(), _(s(gw), O({
      key: 1,
      open: s(o)
    }, l.$attrs, { "onUpdate:open": s(r) }), {
      default: v(() => [
        P(s(yw), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: l.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: ct({
            "--sidebar-width": s(Cw)
          })
        }, {
          default: v(() => [
            he("div", kw, [
              w(l.$slots, "default", { state: s(n) })
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
      "data-collapsible": s(n) === "collapsed" ? l.collapsible : "",
      "data-variant": l.variant,
      "data-side": l.side
    }, [
      he("div", {
        class: G(
          s(I)(
            "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            l.variant === "floating" || l.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      he("div", O({
        class: s(I)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          l.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          l.variant === "floating" || l.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          e.class
        )
      }, l.$attrs), [
        he("div", Dw, [
          w(l.$slots, "default", { state: s(n) })
        ])
      ], 16)
    ], 8, Ow));
  }
}), Ux = /* @__PURE__ */ b({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "content",
      class: G(
        s(I)(
          "bg-sidebar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Hx = /* @__PURE__ */ b({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "footer",
      class: G(s(I)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Gx = /* @__PURE__ */ b({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group",
      class: G(s(I)("relative flex w-full min-w-0 flex-col p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), qx = /* @__PURE__ */ b({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), {
      "data-sidebar": "group-action",
      as: a.as,
      "as-child": a.asChild,
      class: G(
        s(I)(
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
}), Yx = /* @__PURE__ */ b({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "group-content",
      class: G(s(I)("w-full text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Jx = /* @__PURE__ */ b({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), {
      "data-sidebar": "group-label",
      as: a.as,
      "as-child": a.asChild,
      class: G(
        s(I)(
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
}), Qx = /* @__PURE__ */ b({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "header",
      class: G(s(I)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Xx = /* @__PURE__ */ b({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(z_, {
      "data-sidebar": "input",
      class: G(
        s(I)(
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
}), Zx = /* @__PURE__ */ b({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("main", {
      class: G(
        s(I)(
          "bg-background relative flex min-h-svh flex-1 flex-col",
          "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), eC = /* @__PURE__ */ b({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu",
      class: G(s(I)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), tC = /* @__PURE__ */ b({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function], default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(z), {
      "data-sidebar": "menu-action",
      class: G(
        s(I)(
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
}), aC = /* @__PURE__ */ b({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      "data-sidebar": "menu-badge",
      class: G(
        s(I)(
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
}), Ew = /* @__PURE__ */ b({
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
    return (r, l) => (f(), _(s(Bg), U(q(s(o))), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pw = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(Eg), null, {
      default: v(() => [
        P(s(Dg), O({ ...s(r), ...l.$attrs }, {
          class: s(I)(
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
}), nC = /* @__PURE__ */ b({
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
    return (a, n) => (f(), _(s(Ou), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Aw = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(kg), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kl = /* @__PURE__ */ b({
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
    return (a, n) => (f(), _(s(z), O({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: s(I)(s(Iw)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), oC = /* @__PURE__ */ b({
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
    const e = t, { isMobile: a, state: n } = Bo(), o = C(() => {
      const { tooltip: r, ...l } = e;
      return l;
    });
    return (r, l) => r.tooltip ? (f(), _(s(Ew), { key: 1 }, {
      default: v(() => [
        P(s(Aw), { "as-child": "" }, {
          default: v(() => [
            P(kl, U(q({ ...o.value, ...r.$attrs })), {
              default: v(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        P(s(Pw), {
          side: "right",
          align: "center",
          hidden: s(n) !== "collapsed" || s(a)
        }, {
          default: v(() => [
            typeof r.tooltip == "string" ? (f(), L(ne, { key: 0 }, [
              Z(re(r.tooltip), 1)
            ], 64)) : (f(), _(je(r.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (f(), _(kl, U(O({ key: 0 }, { ...o.value, ...r.$attrs })), {
      default: v(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sC = /* @__PURE__ */ b({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("li", {
      "data-sidebar": "menu-item",
      class: G(s(I)("group/menu-item relative", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ol = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("div", {
      class: G(s(I)("bg-skeleton animate-pulse rounded-md", e.class))
    }, null, 2));
  }
}), rC = /* @__PURE__ */ b({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (f(), L("div", {
      "data-sidebar": "menu-skeleton",
      class: G(s(I)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (f(), _(Ol, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : oe("", !0),
      P(Ol, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: ct({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), lC = /* @__PURE__ */ b({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), L("ul", {
      "data-sidebar": "menu-badge",
      class: G(
        s(I)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          e.class
        )
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), iC = /* @__PURE__ */ b({
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
    return (a, n) => (f(), _(s(z), {
      "data-sidebar": "menu-sub-button",
      as: a.as,
      "as-child": a.asChild,
      "data-size": a.size,
      "data-active": a.isActive,
      class: G(
        s(I)(
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
}), Mw = {};
function Tw(t, e) {
  return f(), L("li", null, [
    w(t.$slots, "default")
  ]);
}
const uC = /* @__PURE__ */ gn(Mw, [["render", Tw]]), dC = /* @__PURE__ */ b({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Qu("(max-width: 768px)"), r = D(!1), l = Or(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      l.value = p, document.cookie = `${_w}=${l.value}; path=/; max-age=${ww}`;
    }
    function u(p) {
      r.value = p;
    }
    function d() {
      return o.value ? u(!r.value) : i(!l.value);
    }
    Xn("keydown", (p) => {
      p.key === Sw && (p.metaKey || p.ctrlKey) && (p.preventDefault(), d());
    });
    const c = C(() => l.value ? "expanded" : "collapsed");
    return Bw({
      state: c,
      open: l,
      setOpen: i,
      isMobile: o,
      openMobile: r,
      setOpenMobile: u,
      toggleSidebar: d
    }), (p, g) => (f(), _(s(Ou), { "delay-duration": 0 }, {
      default: v(() => [
        he("div", O({
          style: {
            "--sidebar-width": s(xw),
            "--sidebar-width-icon": s($w)
          },
          class: s(I)(
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
}), cC = /* @__PURE__ */ b({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Bo();
    return (n, o) => (f(), L("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: G(
        s(I)(
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
      (...r) => s(a) && s(a)(...r))
    }, [
      w(n.$slots, "default")
    ], 2));
  }
}), pC = /* @__PURE__ */ b({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(hw, {
      "data-sidebar": "separator",
      class: G(s(I)("bg-sidebar-border mx-2 w-auto", e.class))
    }, {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fC = /* @__PURE__ */ b({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Bo();
    return (n, o) => (f(), _(Et, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: G(s(I)("h-7 w-7", e.class)),
      onClick: s(a)
    }, {
      default: v(() => [
        P(s(wy)),
        o[0] || (o[0] = he("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), Iw = oa(
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
), vC = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(Hh), O({
      class: s(I)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, s(r)), {
      default: v(() => [
        P(s(Yh), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: v(() => [
            P(s(Jh), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (f(!0), L(ne, null, _e(l.modelValue, (u, d) => (f(), _(s(qh), {
          key: d,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Fw = 5, Rw = 5e6, xt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let qo = 0;
function Vw() {
  return qo = (qo + 1) % Number.MAX_VALUE, qo.toString();
}
const Yo = /* @__PURE__ */ new Map();
function Dl(t) {
  if (Yo.has(t)) return;
  const e = setTimeout(() => {
    Yo.delete(t), Ga({
      type: xt.REMOVE_TOAST,
      toastId: t
    });
  }, Rw);
  Yo.set(t, e);
}
const Xe = D({
  toasts: []
});
function Ga(t) {
  switch (t.type) {
    case xt.ADD_TOAST:
      Xe.value.toasts = [t.toast, ...Xe.value.toasts].slice(0, Fw);
      break;
    case xt.UPDATE_TOAST:
      Xe.value.toasts = Xe.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case xt.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? Dl(e) : Xe.value.toasts.forEach((a) => {
        Dl(a.id);
      }), Xe.value.toasts = Xe.value.toasts.map(
        (a) => a.id === e || e === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case xt.REMOVE_TOAST:
      t.toastId === void 0 ? Xe.value.toasts = [] : Xe.value.toasts = Xe.value.toasts.filter((e) => e.id !== t.toastId);
      break;
  }
}
function Lw() {
  return {
    toasts: C(() => Xe.value.toasts),
    toast: Nw,
    dismiss: (t) => Ga({ type: xt.DISMISS_TOAST, toastId: t })
  };
}
function Nw(t) {
  const e = Vw(), a = (o) => Ga({
    type: xt.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => Ga({ type: xt.DISMISS_TOAST, toastId: e });
  return Ga({
    type: xt.ADD_TOAST,
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
const zw = { class: "flex gap-3" }, jw = { class: "grid gap-1" }, mC = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = Lw();
    return (a, n) => (f(), _(s(Gw), null, {
      default: v(() => [
        (f(!0), L(ne, null, _e(s(e), (o) => (f(), _(s(Ww), O({
          key: o.id
        }, { ref_for: !0 }, o, { class: "my-1" }), {
          default: v(() => [
            he("div", zw, [
              (f(), _(je(o.icon), {
                class: G(s(I)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              he("div", jw, [
                o.title ? (f(), _(s(Hw), { key: 0 }, {
                  default: v(() => [
                    Z(re(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : oe("", !0),
                o.description ? (f(), L(ne, { key: 1 }, [
                  wd(o.description) ? (f(), _(s(El), { key: 0 }, {
                    default: v(() => [
                      (f(), _(je(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (f(), _(s(El), { key: 1 }, {
                    default: v(() => [
                      Z(re(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : oe("", !0),
                P(s(Uw))
              ]),
              (f(), _(je(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        P(s(Kw))
      ]),
      _: 1
    }));
  }
}), Ww = /* @__PURE__ */ b({
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
    }), r = ue(o, n);
    return (l, i) => (f(), _(s(bg), O(s(r), {
      class: s(I)(s(qw)({ variant: l.variant }), a.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: v(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Kw = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(wg), O(a.value, {
      class: s(I)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), hC = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(_g), U(q(a.value)), {
      default: v(() => [
        P(s(Et), {
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
}), Uw = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Bu), O(a.value, {
      class: s(I)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        e.class
      )
    }), {
      default: v(() => [
        P(s(xo), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Hw = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(xg), O(a.value, {
      class: s(I)("text-sm font-semibold", e.class)
    }), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), El = /* @__PURE__ */ b({
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
    return (n, o) => (f(), _(s(Cg), O({
      class: s(I)("text-sm opacity-90", e.class)
    }, a.value), {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gw = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (f(), _(s(ug), U(q(e)), {
      default: v(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qw = oa(
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
  o1 as Accordion,
  s1 as AccordionContent,
  r1 as AccordionItem,
  l1 as AccordionTrigger,
  i1 as Alert,
  u1 as AlertDescription,
  d1 as AlertTitle,
  y1 as Avatar,
  b1 as AvatarFallback,
  _1 as AvatarImage,
  w1 as Badge,
  la as Base,
  o_ as BaseDropdownMenuItem,
  x1 as Breadcrumb,
  C1 as BreadcrumbEllipsis,
  $1 as BreadcrumbItem,
  S1 as BreadcrumbLink,
  B1 as BreadcrumbList,
  k1 as BreadcrumbPage,
  O1 as BreadcrumbSeparator,
  Et as Button,
  W1 as Calendar,
  Zu as CalendarCell,
  ed as CalendarCellTrigger,
  td as CalendarGrid,
  ad as CalendarGridBody,
  nd as CalendarGridHead,
  Zn as CalendarGridRow,
  od as CalendarHeadCell,
  sd as CalendarHeader,
  rd as CalendarHeading,
  j0 as CalendarNextButton,
  W0 as CalendarPrevButton,
  q0 as CalendarWithSelect,
  D1 as Card,
  M1 as CardContent,
  A1 as CardDescription,
  T1 as CardFooter,
  E1 as CardHeader,
  P1 as CardTitle,
  c_ as CharacterCount,
  gx as Checkbox,
  Dx as CollapsibleTableRow,
  I1 as Combobox,
  F1 as ComboboxAnchor,
  v1 as ComboboxCancel,
  R1 as ComboboxEmpty,
  V1 as ComboboxGroup,
  L1 as ComboboxInput,
  N1 as ComboboxItem,
  h1 as ComboboxItemIndicator,
  z1 as ComboboxList,
  j1 as ComboboxSeparator,
  g1 as ComboboxTrigger,
  Y0 as Command,
  J1 as CommandDialog,
  Q1 as CommandEmpty,
  X1 as CommandGroup,
  Z1 as CommandInput,
  ex as CommandItem,
  tx as CommandList,
  ax as CommandSeparator,
  nx as CommandShortcut,
  yx as DatePicker,
  m_ as Description,
  ld as Dialog,
  q1 as DialogClose,
  id as DialogContent,
  Z0 as DialogDescription,
  e_ as DialogFooter,
  Q0 as DialogHeader,
  Y1 as DialogScrollContent,
  X0 as DialogTitle,
  J0 as DialogTrigger,
  n_ as DropdownMenu,
  lx as DropdownMenuCheckboxItem,
  r_ as DropdownMenuContent,
  ox as DropdownMenuGroup,
  rx as DropdownMenuItem,
  cx as DropdownMenuLabel,
  l_ as DropdownMenuLink,
  pm as DropdownMenuPortal,
  sx as DropdownMenuRadioGroup,
  ix as DropdownMenuRadioItem,
  dx as DropdownMenuSeparator,
  ux as DropdownMenuShortcut,
  px as DropdownMenuSub,
  vx as DropdownMenuSubContent,
  fx as DropdownMenuSubTrigger,
  s_ as DropdownMenuTrigger,
  g_ as Error,
  mx as Form,
  $_ as FormElement,
  hx as FormGrid,
  bx as ImageUpload,
  z_ as Input,
  ud as Label,
  Ax as LumuixDatatable,
  Mx as LumuixModal,
  Ox as LumuixModeToggle,
  Fx as LumuixTabs,
  t1 as Pagination,
  xx as PaginationDetails,
  Cx as PaginationEllipsis,
  $x as PaginationFirst,
  Sx as PaginationLast,
  a1 as PaginationList,
  n1 as PaginationListItem,
  Bx as PaginationNext,
  kx as PaginationPrev,
  D_ as Popover,
  P_ as PopoverContent,
  E_ as PopoverTrigger,
  Rx as RangeCalendar,
  rw as RangeCalendarCell,
  lw as RangeCalendarCellTrigger,
  iw as RangeCalendarGrid,
  uw as RangeCalendarGridBody,
  dw as RangeCalendarGridHead,
  Bl as RangeCalendarGridRow,
  cw as RangeCalendarHeadCell,
  pw as RangeCalendarHeader,
  fw as RangeCalendarHeading,
  vw as RangeCalendarNextButton,
  mw as RangeCalendarPrevButton,
  _x as Select,
  ws as SelectContent,
  K1 as SelectGroup,
  xs as SelectItem,
  U1 as SelectItemText,
  H1 as SelectLabel,
  ys as SelectRoot,
  H0 as SelectScrollDownButton,
  U0 as SelectScrollUpButton,
  G1 as SelectSeparator,
  _s as SelectTrigger,
  bs as SelectValue,
  hw as Separator,
  gw as Sheet,
  Vx as SheetClose,
  yw as SheetContent,
  Lx as SheetDescription,
  Nx as SheetFooter,
  zx as SheetHeader,
  jx as SheetTitle,
  Wx as SheetTrigger,
  Kx as Sidebar,
  Ux as SidebarContent,
  Hx as SidebarFooter,
  Gx as SidebarGroup,
  qx as SidebarGroupAction,
  Yx as SidebarGroupContent,
  Jx as SidebarGroupLabel,
  Qx as SidebarHeader,
  Xx as SidebarInput,
  Zx as SidebarInset,
  eC as SidebarMenu,
  tC as SidebarMenuAction,
  aC as SidebarMenuBadge,
  oC as SidebarMenuButton,
  sC as SidebarMenuItem,
  rC as SidebarMenuSkeleton,
  lC as SidebarMenuSub,
  iC as SidebarMenuSubButton,
  uC as SidebarMenuSubItem,
  dC as SidebarProvider,
  cC as SidebarRail,
  pC as SidebarSeparator,
  fC as SidebarTrigger,
  Ol as Skeleton,
  vC as Slider,
  ow as TabBaseContent,
  H_ as Table,
  G_ as TableBody,
  J_ as TableCaption,
  eo as TableCell,
  Px as TableEmpty,
  Ex as TableFooter,
  q_ as TableHead,
  Y_ as TableHeader,
  tn as TableRow,
  Cs as TableRowAction,
  Ix as TabsContent,
  ew as TabsItem,
  Sl as TabsList,
  Z_ as TabsRoot,
  Tx as TabsTrigger,
  wx as TextArea,
  Ww as Toast,
  hC as ToastAction,
  Uw as ToastClose,
  El as ToastDescription,
  Gw as ToastProvider,
  Hw as ToastTitle,
  Kw as ToastViewport,
  mC as Toaster,
  W_ as Toggle,
  Ew as Tooltip,
  Pw as TooltipContent,
  nC as TooltipProvider,
  Aw as TooltipTrigger,
  $y as alertVariants,
  L0 as badgeVariants,
  ra as buttonVariants,
  bw as sheetVariants,
  Iw as sidebarMenuButtonVariants,
  N0 as spinnerSize,
  Nw as toast,
  qw as toastVariants,
  Bo as useSidebar,
  Lw as useToast
};
