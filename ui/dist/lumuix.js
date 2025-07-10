var Kr = (t) => {
  throw TypeError(t);
};
var Md = (t, e, a) => e.has(t) || Kr("Cannot " + a);
var qa = (t, e, a) => (Md(t, e, "read from private field"), a ? a.call(t) : e.get(t)), Wr = (t, e, a) => e.has(t) ? Kr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a);
import * as xa from "vue";
import { computed as C, ref as O, shallowRef as Bt, watch as X, getCurrentScope as uo, onScopeDispose as co, shallowReadonly as ga, unref as s, defineComponent as b, toRefs as fe, createBlock as _, openBlock as v, withCtx as f, renderSlot as w, getCurrentInstance as Oe, toRef as Vs, camelize as po, withKeys as Me, h as Re, onMounted as ue, createElementVNode as he, toDisplayString as re, normalizeProps as U, guardReactiveProps as q, createTextVNode as Z, mergeProps as S, withModifiers as Ee, createCommentVNode as ae, createElementBlock as N, Fragment as oe, renderList as we, resolveDynamicComponent as Ke, createVNode as A, useSlots as jl, onBeforeMount as Td, Teleport as sa, watchEffect as ge, onBeforeUnmount as fo, nextTick as ne, withDirectives as ra, vShow as vo, watchSyncEffect as Gl, isRef as We, inject as dn, provide as mo, toHandlers as Id, normalizeStyle as vt, toHandlerKey as ql, Comment as Fs, cloneVNode as Yl, vModelSelect as Rd, onBeforeUpdate as Vd, onUpdated as Fd, markRaw as Jl, onUnmounted as Fe, readonly as Ra, toRaw as Ld, reactive as aa, customRef as Ls, mergeDefaults as Ns, watchPostEffect as zs, effectScope as Ks, normalizeClass as G, toValue as Ce, withMemo as Nd, hasInjectionContext as Ql, mergeModels as is, useModel as Xl, vModelDynamic as zd, vModelText as Kd, isVNode as Wd } from "vue";
function Ca(t, e) {
  return t - e * Math.floor(t / e);
}
const Zl = 1721426;
function Zt(t, e, a, n) {
  e = cn(t, e);
  let o = e - 1, r = -2;
  return a <= 2 ? r = 0 : zt(e) && (r = -1), Zl - 1 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * a - 362) / 12 + r + n);
}
function zt(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function cn(t, e) {
  return t === "BC" ? 1 - e : e;
}
function ho(t) {
  let e = "AD";
  return t <= 0 && (e = "BC", t = 1 - t), [
    e,
    t
  ];
}
const Hd = {
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
class nt {
  fromJulianDay(e) {
    let a = e, n = a - Zl, o = Math.floor(n / 146097), r = Ca(n, 146097), l = Math.floor(r / 36524), i = Ca(r, 36524), u = Math.floor(i / 1461), d = Ca(i, 1461), c = Math.floor(d / 365), p = o * 400 + l * 100 + u * 4 + c + (l !== 4 && c !== 4 ? 1 : 0), [y, m] = ho(p), h = a - Zt(y, m, 1, 1), g = 2;
    a < Zt(y, m, 3, 1) ? g = 0 : zt(m) && (g = 1);
    let x = Math.floor(((h + g) * 12 + 373) / 367), B = a - Zt(y, m, x, 1) + 1;
    return new De(y, m, x, B);
  }
  toJulianDay(e) {
    return Zt(e.era, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    return Hd[zt(e.year) ? "leapyear" : "standard"][e.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(e) {
    return 12;
  }
  getDaysInYear(e) {
    return zt(e.year) ? 366 : 365;
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
const Ud = {
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
function Ae(t, e) {
  return e = ze(e, t.calendar), t.era === e.era && t.year === e.year && t.month === e.month && t.day === e.day;
}
function Ws(t, e) {
  return e = ze(e, t.calendar), t = nn(t), e = nn(e), t.era === e.era && t.year === e.year && t.month === e.month;
}
function it(t, e) {
  return Hs(t.calendar, e.calendar) && Ae(t, e);
}
function Hr(t, e) {
  return Hs(t.calendar, e.calendar) && Ws(t, e);
}
function Hs(t, e) {
  var a, n, o, r;
  return (r = (o = (a = t.isEqual) === null || a === void 0 ? void 0 : a.call(t, e)) !== null && o !== void 0 ? o : (n = e.isEqual) === null || n === void 0 ? void 0 : n.call(e, t)) !== null && r !== void 0 ? r : t.identifier === e.identifier;
}
function ei(t, e) {
  return Ae(t, jn(e));
}
function ti(t, e, a) {
  let n = t.calendar.toJulianDay(t), o = Yd(e), r = Math.ceil(n + 1 - o) % 7;
  return r < 0 && (r += 7), r;
}
function jd(t) {
  return xt(Date.now(), t);
}
function jn(t) {
  return Xd(jd(t));
}
function ai(t, e) {
  return t.calendar.toJulianDay(t) - e.calendar.toJulianDay(e);
}
function Gd(t, e) {
  return Ur(t) - Ur(e);
}
function Ur(t) {
  return t.hour * 36e5 + t.minute * 6e4 + t.second * 1e3 + t.millisecond;
}
let No = null;
function Et() {
  return No == null && (No = new Intl.DateTimeFormat().resolvedOptions().timeZone), No;
}
function nn(t) {
  return t.subtract({
    days: t.day - 1
  });
}
function jr(t) {
  return t.add({
    days: t.calendar.getDaysInMonth(t) - t.day
  });
}
const Gr = /* @__PURE__ */ new Map();
function qd(t) {
  if (Intl.Locale) {
    let a = Gr.get(t);
    return a || (a = new Intl.Locale(t).maximize().region, a && Gr.set(t, a)), a;
  }
  let e = t.split("-")[1];
  return e === "u" ? void 0 : e;
}
function Yd(t) {
  let e = qd(t);
  return e && Ud[e] || 0;
}
function Da(t) {
  t = ze(t, new nt());
  let e = cn(t.era, t.year);
  return ni(e, t.month, t.day, t.hour, t.minute, t.second, t.millisecond);
}
function ni(t, e, a, n, o, r, l) {
  let i = /* @__PURE__ */ new Date();
  return i.setUTCHours(n, o, r, l), i.setUTCFullYear(t, e - 1, a), i.getTime();
}
function us(t, e) {
  if (e === "UTC") return 0;
  if (t > 0 && e === Et()) return new Date(t).getTimezoneOffset() * -6e4;
  let { year: a, month: n, day: o, hour: r, minute: l, second: i } = oi(t, e);
  return ni(a, n, o, r, l, i, 0) - Math.floor(t / 1e3) * 1e3;
}
const qr = /* @__PURE__ */ new Map();
function oi(t, e) {
  let a = qr.get(e);
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
  }), qr.set(e, a));
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
const Yr = 864e5;
function Jd(t, e, a, n) {
  return (a === n ? [
    a
  ] : [
    a,
    n
  ]).filter((r) => Qd(t, e, r));
}
function Qd(t, e, a) {
  let n = oi(a, e);
  return t.year === n.year && t.month === n.month && t.day === n.day && t.hour === n.hour && t.minute === n.minute && t.second === n.second;
}
function wt(t, e, a = "compatible") {
  let n = Sa(t);
  if (e === "UTC") return Da(n);
  if (e === Et() && a === "compatible") {
    n = ze(n, new nt());
    let u = /* @__PURE__ */ new Date(), d = cn(n.era, n.year);
    return u.setFullYear(d, n.month - 1, n.day), u.setHours(n.hour, n.minute, n.second, n.millisecond), u.getTime();
  }
  let o = Da(n), r = us(o - Yr, e), l = us(o + Yr, e), i = Jd(n, e, o - r, o - l);
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
function si(t, e, a = "compatible") {
  return new Date(wt(t, e, a));
}
function xt(t, e) {
  let a = us(t, e), n = new Date(t + a), o = n.getUTCFullYear(), r = n.getUTCMonth() + 1, l = n.getUTCDate(), i = n.getUTCHours(), u = n.getUTCMinutes(), d = n.getUTCSeconds(), c = n.getUTCMilliseconds();
  return new Oa(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, r, l, e, a, i, u, d, c);
}
function Xd(t) {
  return new De(t.calendar, t.era, t.year, t.month, t.day);
}
function Sa(t, e) {
  let a = 0, n = 0, o = 0, r = 0;
  if ("timeZone" in t) ({ hour: a, minute: n, second: o, millisecond: r } = t);
  else if ("hour" in t && !e) return t;
  return e && ({ hour: a, minute: n, second: o, millisecond: r } = e), new Pa(t.calendar, t.era, t.year, t.month, t.day, a, n, o, r);
}
function ze(t, e) {
  if (Hs(t.calendar, e)) return t;
  let a = e.fromJulianDay(t.calendar.toJulianDay(t)), n = t.copy();
  return n.calendar = e, n.era = a.era, n.year = a.year, n.month = a.month, n.day = a.day, na(n), n;
}
function Zd(t, e, a) {
  if (t instanceof Oa)
    return t.timeZone === e ? t : tc(t, e);
  let n = wt(t, e, a);
  return xt(n, e);
}
function ec(t) {
  let e = Da(t) - t.offset;
  return new Date(e);
}
function tc(t, e) {
  let a = Da(t) - t.offset;
  return ze(xt(a, e), t.calendar);
}
const Ya = 36e5;
function go(t, e) {
  let a = t.copy(), n = "hour" in a ? sc(a, e) : 0;
  ds(a, e.years || 0), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, t), a.month += e.months || 0, cs(a), ri(a), a.day += (e.weeks || 0) * 7, a.day += e.days || 0, a.day += n, ac(a), a.calendar.balanceDate && a.calendar.balanceDate(a), a.year < 1 && (a.year = 1, a.month = 1, a.day = 1);
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
function ds(t, e) {
  var a, n;
  !((a = (n = t.calendar).isInverseEra) === null || a === void 0) && a.call(n, t) && (e = -e), t.year += e;
}
function cs(t) {
  for (; t.month < 1; )
    ds(t, -1), t.month += t.calendar.getMonthsInYear(t);
  let e = 0;
  for (; t.month > (e = t.calendar.getMonthsInYear(t)); )
    t.month -= e, ds(t, 1);
}
function ac(t) {
  for (; t.day < 1; )
    t.month--, cs(t), t.day += t.calendar.getDaysInMonth(t);
  for (; t.day > t.calendar.getDaysInMonth(t); )
    t.day -= t.calendar.getDaysInMonth(t), t.month++, cs(t);
}
function ri(t) {
  t.month = Math.max(1, Math.min(t.calendar.getMonthsInYear(t), t.month)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day));
}
function na(t) {
  t.calendar.constrainDate && t.calendar.constrainDate(t), t.year = Math.max(1, Math.min(t.calendar.getYearsInEra(t), t.year)), ri(t);
}
function li(t) {
  let e = {};
  for (let a in t) typeof t[a] == "number" && (e[a] = -t[a]);
  return e;
}
function ii(t, e) {
  return go(t, li(e));
}
function Us(t, e) {
  let a = t.copy();
  return e.era != null && (a.era = e.era), e.year != null && (a.year = e.year), e.month != null && (a.month = e.month), e.day != null && (a.day = e.day), na(a), a;
}
function Gn(t, e) {
  let a = t.copy();
  return e.hour != null && (a.hour = e.hour), e.minute != null && (a.minute = e.minute), e.second != null && (a.second = e.second), e.millisecond != null && (a.millisecond = e.millisecond), oc(a), a;
}
function nc(t) {
  t.second += Math.floor(t.millisecond / 1e3), t.millisecond = $n(t.millisecond, 1e3), t.minute += Math.floor(t.second / 60), t.second = $n(t.second, 60), t.hour += Math.floor(t.minute / 60), t.minute = $n(t.minute, 60);
  let e = Math.floor(t.hour / 24);
  return t.hour = $n(t.hour, 24), e;
}
function oc(t) {
  t.millisecond = Math.max(0, Math.min(t.millisecond, 1e3)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23));
}
function $n(t, e) {
  let a = t % e;
  return a < 0 && (a += e), a;
}
function sc(t, e) {
  return t.hour += e.hours || 0, t.minute += e.minutes || 0, t.second += e.seconds || 0, t.millisecond += e.milliseconds || 0, nc(t);
}
function js(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "era": {
      let i = t.calendar.getEras(), u = i.indexOf(t.era);
      if (u < 0) throw new Error("Invalid era: " + t.era);
      u = Ct(u, a, 0, i.length - 1, n == null ? void 0 : n.round), o.era = i[u], na(o);
      break;
    }
    case "year":
      var r, l;
      !((r = (l = o.calendar).isInverseEra) === null || r === void 0) && r.call(l, o) && (a = -a), o.year = Ct(t.year, a, -1 / 0, 9999, n == null ? void 0 : n.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, t);
      break;
    case "month":
      o.month = Ct(t.month, a, 1, t.calendar.getMonthsInYear(t), n == null ? void 0 : n.round);
      break;
    case "day":
      o.day = Ct(t.day, a, 1, t.calendar.getDaysInMonth(t), n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return t.calendar.balanceDate && t.calendar.balanceDate(o), na(o), o;
}
function ui(t, e, a, n) {
  let o = t.copy();
  switch (e) {
    case "hour": {
      let r = t.hour, l = 0, i = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let u = r >= 12;
        l = u ? 12 : 0, i = u ? 23 : 11;
      }
      o.hour = Ct(r, a, l, i, n == null ? void 0 : n.round);
      break;
    }
    case "minute":
      o.minute = Ct(t.minute, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "second":
      o.second = Ct(t.second, a, 0, 59, n == null ? void 0 : n.round);
      break;
    case "millisecond":
      o.millisecond = Ct(t.millisecond, a, 0, 999, n == null ? void 0 : n.round);
      break;
    default:
      throw new Error("Unsupported field " + e);
  }
  return o;
}
function Ct(t, e, a, n, o = !1) {
  if (o) {
    t += Math.sign(e), t < a && (t = n);
    let r = Math.abs(e);
    e > 0 ? t = Math.ceil(t / r) * r : t = Math.floor(t / r) * r, t > n && (t = a);
  } else
    t += e, t < a ? t = n - (a - t - 1) : t > n && (t = a + (t - n - 1));
  return t;
}
function di(t, e) {
  let a;
  if (e.years != null && e.years !== 0 || e.months != null && e.months !== 0 || e.weeks != null && e.weeks !== 0 || e.days != null && e.days !== 0) {
    let o = go(Sa(t), {
      years: e.years,
      months: e.months,
      weeks: e.weeks,
      days: e.days
    });
    a = wt(o, t.timeZone);
  } else
    a = Da(t) - t.offset;
  a += e.milliseconds || 0, a += (e.seconds || 0) * 1e3, a += (e.minutes || 0) * 6e4, a += (e.hours || 0) * 36e5;
  let n = xt(a, t.timeZone);
  return ze(n, t.calendar);
}
function rc(t, e) {
  return di(t, li(e));
}
function lc(t, e, a, n) {
  switch (e) {
    case "hour": {
      let o = 0, r = 23;
      if ((n == null ? void 0 : n.hourCycle) === 12) {
        let h = t.hour >= 12;
        o = h ? 12 : 0, r = h ? 23 : 11;
      }
      let l = Sa(t), i = ze(Gn(l, {
        hour: o
      }), new nt()), u = [
        wt(i, t.timeZone, "earlier"),
        wt(i, t.timeZone, "later")
      ].filter((h) => xt(h, t.timeZone).day === i.day)[0], d = ze(Gn(l, {
        hour: r
      }), new nt()), c = [
        wt(d, t.timeZone, "earlier"),
        wt(d, t.timeZone, "later")
      ].filter((h) => xt(h, t.timeZone).day === d.day).pop(), p = Da(t) - t.offset, y = Math.floor(p / Ya), m = p % Ya;
      return p = Ct(y, a, Math.floor(u / Ya), Math.floor(c / Ya), n == null ? void 0 : n.round) * Ya + m, ze(xt(p, t.timeZone), t.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return ui(t, e, a, n);
    case "era":
    case "year":
    case "month":
    case "day": {
      let o = js(Sa(t), e, a, n), r = wt(o, t.timeZone);
      return ze(xt(r, t.timeZone), t.calendar);
    }
    default:
      throw new Error("Unsupported field " + e);
  }
}
function ic(t, e, a) {
  let n = Sa(t), o = Gn(Us(n, e), e);
  if (o.compare(n) === 0) return t;
  let r = wt(o, t.timeZone, a);
  return ze(xt(r, t.timeZone), t.calendar);
}
function uc(t) {
  return `${String(t.hour).padStart(2, "0")}:${String(t.minute).padStart(2, "0")}:${String(t.second).padStart(2, "0")}${t.millisecond ? String(t.millisecond / 1e3).slice(1) : ""}`;
}
function ci(t) {
  let e = ze(t, new nt()), a;
  return e.era === "BC" ? a = e.year === 1 ? "0000" : "-" + String(Math.abs(1 - e.year)).padStart(6, "00") : a = String(e.year).padStart(4, "0"), `${a}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}`;
}
function pi(t) {
  return `${ci(t)}T${uc(t)}`;
}
function dc(t) {
  let e = Math.sign(t) < 0 ? "-" : "+";
  t = Math.abs(t);
  let a = Math.floor(t / 36e5), n = t % 36e5 / 6e4;
  return `${e}${String(a).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function cc(t) {
  return `${pi(t)}${dc(t.offset)}[${t.timeZone}]`;
}
function pc(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Gs(t, e, a) {
  pc(t, e), e.set(t, a);
}
function qs(t) {
  let e = typeof t[0] == "object" ? t.shift() : new nt(), a;
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
var fc = /* @__PURE__ */ new WeakMap();
class De {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new De(this.calendar, this.era, this.year, this.month, this.day) : new De(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(e) {
    return go(this, e);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(e) {
    return ii(this, e);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Us(this, e);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return js(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(e) {
    return si(this, e);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return ci(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return ai(this, e);
  }
  constructor(...e) {
    Gs(this, fc, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = qs(e);
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, na(this);
  }
}
var vc = /* @__PURE__ */ new WeakMap();
class Pa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Pa(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new Pa(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(e) {
    return go(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return ii(this, e);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e) {
    return Us(Gn(this, e), e);
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
        return js(this, e, a, n);
      default:
        return ui(this, e, a, n);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(e, a) {
    return si(this, e, a);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return pi(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    let a = ai(this, e);
    return a === 0 ? Gd(this, Sa(e)) : a;
  }
  constructor(...e) {
    Gs(this, vc, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = qs(e);
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, na(this);
  }
}
var mc = /* @__PURE__ */ new WeakMap();
class Oa {
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Oa(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Oa(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(e) {
    return di(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(e) {
    return rc(this, e);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(e, a) {
    return ic(this, e, a);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(e, a, n) {
    return lc(this, e, a, n);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return ec(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return cc(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(e) {
    return this.toDate().getTime() - Zd(e, this.timeZone).toDate().getTime();
  }
  constructor(...e) {
    Gs(this, mc, {
      writable: !0,
      value: void 0
    });
    let [a, n, o, r, l] = qs(e), i = e.shift(), u = e.shift();
    this.calendar = a, this.era = n, this.year = o, this.month = r, this.day = l, this.timeZone = i, this.offset = u, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, na(this);
  }
}
const $a = [
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
], hc = [
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
], Ln = [
  1867,
  1911,
  1925,
  1988,
  2018
], Nt = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Jr(t) {
  const e = $a.findIndex(([a, n, o]) => t.year < a || t.year === a && t.month < n || t.year === a && t.month === n && t.day < o);
  return e === -1 ? $a.length - 1 : e === 0 ? 0 : e - 1;
}
function zo(t) {
  let e = Ln[Nt.indexOf(t.era)];
  if (!e) throw new Error("Unknown era: " + t.era);
  return new De(t.year + e, t.month, t.day);
}
class gc extends nt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = Jr(a);
    return new De(this, Nt[n], a.year - Ln[n], a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(zo(e));
  }
  balanceDate(e) {
    let a = zo(e), n = Jr(a);
    Nt[n] !== e.era && (e.era = Nt[n], e.year = a.year - Ln[n]), this.constrainDate(e);
  }
  constrainDate(e) {
    let a = Nt.indexOf(e.era), n = hc[a];
    if (n != null) {
      let [o, r, l] = n, i = o - Ln[a];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(r, e.month), e.month === r && (e.day = Math.min(l, e.day)));
    }
    if (e.year === 1 && a >= 0) {
      let [, o, r] = $a[a];
      e.month = Math.max(o, e.month), e.month === o && (e.day = Math.max(r, e.day));
    }
  }
  getEras() {
    return Nt;
  }
  getYearsInEra(e) {
    let a = Nt.indexOf(e.era), n = $a[a], o = $a[a + 1];
    if (o == null)
      return 9999 - n[0] + 1;
    let r = o[0] - n[0];
    return (e.month < o[1] || e.month === o[1] && e.day < o[2]) && r++, r;
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(zo(e));
  }
  getMinimumMonthInYear(e) {
    let a = Qr(e);
    return a ? a[1] : 1;
  }
  getMinimumDayInMonth(e) {
    let a = Qr(e);
    return a && e.month === a[1] ? a[2] : 1;
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese";
  }
}
function Qr(t) {
  if (t.year === 1) {
    let e = Nt.indexOf(t.era);
    return $a[e];
  }
}
const fi = -543;
class yc extends nt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = cn(a.era, a.year);
    return new De(this, n - fi, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(Xr(e));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(Xr(e));
  }
  balanceDate() {
  }
  constructor(...e) {
    super(...e), this.identifier = "buddhist";
  }
}
function Xr(t) {
  let [e, a] = ho(t.year + fi);
  return new De(e, a, t.month, t.day);
}
const qn = 1911;
function vi(t) {
  return t.era === "minguo" ? t.year + qn : 1 - t.year + qn;
}
function Zr(t) {
  let e = t - qn;
  return e > 0 ? [
    "minguo",
    e
  ] : [
    "before_minguo",
    1 - e
  ];
}
class bc extends nt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = cn(a.era, a.year), [o, r] = Zr(n);
    return new De(this, o, r, a.month, a.day);
  }
  toJulianDay(e) {
    return super.toJulianDay(el(e));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(e) {
    let [a, n] = Zr(vi(e));
    e.era = a, e.year = n;
  }
  isInverseEra(e) {
    return e.era === "before_minguo";
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(el(e));
  }
  getYearsInEra(e) {
    return e.era === "before_minguo" ? 9999 : 9999 - qn;
  }
  constructor(...e) {
    super(...e), this.identifier = "roc";
  }
}
function el(t) {
  let [e, a] = ho(vi(t));
  return new De(e, a, t.month, t.day);
}
const tl = 1948320, al = [
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
class _c {
  fromJulianDay(e) {
    let a = e - tl, n = 1 + Math.floor((33 * a + 3) / 12053), o = 365 * (n - 1) + Math.floor((8 * n + 21) / 33), r = a - o, l = r < 216 ? Math.floor(r / 31) : Math.floor((r - 6) / 30), i = r - al[l] + 1;
    return new De(this, n, l + 1, i);
  }
  toJulianDay(e) {
    let a = tl - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
    return a += al[e.month - 1], a += e.day, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(e) {
    return e.month <= 6 ? 31 : e.month <= 11 || Ca(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
const Ko = 78, nl = 80;
class wc extends nt {
  fromJulianDay(e) {
    let a = super.fromJulianDay(e), n = a.year - Ko, o = e - Zt(a.era, a.year, 1, 1), r;
    o < nl ? (n--, r = zt(a.year - 1) ? 31 : 30, o += r + 155 + 90 + 10) : (r = zt(a.year) ? 31 : 30, o -= nl);
    let l, i;
    if (o < r)
      l = 1, i = o + 1;
    else {
      let u = o - r;
      u < 155 ? (l = Math.floor(u / 31) + 2, i = u % 31 + 1) : (u -= 155, l = Math.floor(u / 30) + 7, i = u % 30 + 1);
    }
    return new De(this, n, l, i);
  }
  toJulianDay(e) {
    let a = e.year + Ko, [n, o] = ho(a), r, l;
    return zt(o) ? (r = 31, l = Zt(n, o, 3, 21)) : (r = 30, l = Zt(n, o, 3, 22)), e.month === 1 ? l + e.day - 1 : (l += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (l += (e.month - 7) * 30), l += e.day - 1, l);
  }
  getDaysInMonth(e) {
    return e.month === 1 && zt(e.year + Ko) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
const Yn = 1948440, ol = 1948439, Ye = 1300, ya = 1600, xc = 460322;
function Jn(t, e, a, n) {
  return n + Math.ceil(29.5 * (a - 1)) + (e - 1) * 354 + Math.floor((3 + 11 * e) / 30) + t - 1;
}
function mi(t, e, a) {
  let n = Math.floor((30 * (a - e) + 10646) / 10631), o = Math.min(12, Math.ceil((a - (29 + Jn(e, n, 1, 1))) / 29.5) + 1), r = a - Jn(e, n, o, 1) + 1;
  return new De(t, n, o, r);
}
function sl(t) {
  return (14 + 11 * t) % 30 < 11;
}
class Ys {
  fromJulianDay(e) {
    return mi(this, Yn, e);
  }
  toJulianDay(e) {
    return Jn(Yn, e.year, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = 29 + e.month % 2;
    return e.month === 12 && sl(e.year) && a++, a;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(e) {
    return sl(e.year) ? 355 : 354;
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
class Cc extends Ys {
  fromJulianDay(e) {
    return mi(this, ol, e);
  }
  toJulianDay(e) {
    return Jn(ol, e.year, e.month, e.day);
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla";
  }
}
const $c = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let ps, Ba;
function Nn(t) {
  return xc + Ba[t - Ye];
}
function Xa(t, e) {
  let a = t - Ye, n = 1 << 11 - (e - 1);
  return ps[a] & n ? 30 : 29;
}
function rl(t, e) {
  let a = Nn(t);
  for (let n = 1; n < e; n++) a += Xa(t, n);
  return a;
}
function ll(t) {
  return Ba[t + 1 - Ye] - Ba[t - Ye];
}
class Bc extends Ys {
  fromJulianDay(e) {
    let a = e - Yn, n = Nn(Ye), o = Nn(ya);
    if (a < n || a > o) return super.fromJulianDay(e);
    {
      let r = Ye - 1, l = 1, i = 1;
      for (; i > 0; ) {
        r++, i = a - Nn(r) + 1;
        let u = ll(r);
        if (i === u) {
          l = 12;
          break;
        } else if (i < u) {
          let d = Xa(r, l);
          for (l = 1; i > d; )
            i -= d, l++, d = Xa(r, l);
          break;
        }
      }
      return new De(this, r, l, a - rl(r, l) + 1);
    }
  }
  toJulianDay(e) {
    return e.year < Ye || e.year > ya ? super.toJulianDay(e) : Yn + rl(e.year, e.month) + (e.day - 1);
  }
  getDaysInMonth(e) {
    return e.year < Ye || e.year > ya ? super.getDaysInMonth(e) : Xa(e.year, e.month);
  }
  getDaysInYear(e) {
    return e.year < Ye || e.year > ya ? super.getDaysInYear(e) : ll(e.year);
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", ps || (ps = new Uint16Array(Uint8Array.from(atob($c), (e) => e.charCodeAt(0)).buffer)), !Ba) {
      Ba = new Uint32Array(ya - Ye + 1);
      let e = 0;
      for (let a = Ye; a <= ya; a++) {
        Ba[a - Ye] = e;
        for (let n = 1; n <= 12; n++) e += Xa(a, n);
      }
    }
  }
}
const il = 347997, hi = 1080, gi = 24 * hi, kc = 29, Ec = 12 * hi + 793, Dc = kc * gi + Ec;
function Xt(t) {
  return Ca(t * 7 + 1, 19) < 7;
}
function zn(t) {
  let e = Math.floor((235 * t - 234) / 19), a = 12084 + 13753 * e, n = e * 29 + Math.floor(a / 25920);
  return Ca(3 * (n + 1), 7) < 3 && (n += 1), n;
}
function Sc(t) {
  let e = zn(t - 1), a = zn(t);
  return zn(t + 1) - a === 356 ? 2 : a - e === 382 ? 1 : 0;
}
function en(t) {
  return zn(t) + Sc(t);
}
function yi(t) {
  return en(t + 1) - en(t);
}
function Pc(t) {
  let e = yi(t);
  switch (e > 380 && (e -= 30), e) {
    case 353:
      return 0;
    case 354:
      return 1;
    case 355:
      return 2;
  }
}
function Bn(t, e) {
  if (e >= 6 && !Xt(t) && e++, e === 4 || e === 7 || e === 9 || e === 11 || e === 13) return 29;
  let a = Pc(t);
  return e === 2 ? a === 2 ? 30 : 29 : e === 3 ? a === 0 ? 29 : 30 : e === 6 ? Xt(t) ? 30 : 0 : 30;
}
class Oc {
  fromJulianDay(e) {
    let a = e - il, n = a * gi / Dc, o = Math.floor((19 * n + 234) / 235) + 1, r = en(o), l = Math.floor(a - r);
    for (; l < 1; )
      o--, r = en(o), l = Math.floor(a - r);
    let i = 1, u = 0;
    for (; u < l; )
      u += Bn(o, i), i++;
    i--, u -= Bn(o, i);
    let d = l - u;
    return new De(this, o, i, d);
  }
  toJulianDay(e) {
    let a = en(e.year);
    for (let n = 1; n < e.month; n++) a += Bn(e.year, n);
    return a + e.day + il;
  }
  getDaysInMonth(e) {
    return Bn(e.year, e.month);
  }
  getMonthsInYear(e) {
    return Xt(e.year) ? 13 : 12;
  }
  getDaysInYear(e) {
    return yi(e.year);
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
    a.year !== e.year && (Xt(a.year) && !Xt(e.year) && a.month > 6 ? e.month-- : !Xt(a.year) && Xt(e.year) && a.month > 6 && e.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const fs = 1723856, ul = 1824665, vs = 5500;
function Qn(t, e, a, n) {
  return t + 365 * e + Math.floor(e / 4) + 30 * (a - 1) + n - 1;
}
function Js(t, e) {
  let a = Math.floor(4 * (e - t) / 1461), n = 1 + Math.floor((e - Qn(t, a, 1, 1)) / 30), o = e + 1 - Qn(t, a, n, 1);
  return [
    a,
    n,
    o
  ];
}
function bi(t) {
  return Math.floor(t % 4 / 3);
}
function _i(t, e) {
  return e % 13 !== 0 ? 30 : bi(t) + 5;
}
class Qs {
  fromJulianDay(e) {
    let [a, n, o] = Js(fs, e), r = "AM";
    return a <= 0 && (r = "AA", a += vs), new De(this, r, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "AA" && (a -= vs), Qn(fs, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    return _i(e.year, e.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(e) {
    return 365 + bi(e.year);
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
class Ac extends Qs {
  fromJulianDay(e) {
    let [a, n, o] = Js(fs, e);
    return a += vs, new De(this, "AA", a, n, o);
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
class Mc extends Qs {
  fromJulianDay(e) {
    let [a, n, o] = Js(ul, e), r = "CE";
    return a <= 0 && (r = "BCE", a = 1 - a), new De(this, r, a, n, o);
  }
  toJulianDay(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), Qn(ul, a, e.month, e.day);
  }
  getDaysInMonth(e) {
    let a = e.year;
    return e.era === "BCE" && (a = 1 - a), _i(a, e.month);
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
function Tc(t) {
  switch (t) {
    case "buddhist":
      return new yc();
    case "ethiopic":
      return new Qs();
    case "ethioaa":
      return new Ac();
    case "coptic":
      return new Mc();
    case "hebrew":
      return new Oc();
    case "indian":
      return new wc();
    case "islamic-civil":
      return new Ys();
    case "islamic-tbla":
      return new Cc();
    case "islamic-umalqura":
      return new Bc();
    case "japanese":
      return new gc();
    case "persian":
      return new _c();
    case "roc":
      return new bc();
    case "gregory":
    default:
      return new nt();
  }
}
let Wo = /* @__PURE__ */ new Map();
class lt {
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
    return Vc() && (this.resolvedHourCycle || (this.resolvedHourCycle = Fc(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
  }
  constructor(e, a = {}) {
    this.formatter = wi(e, a), this.options = a;
  }
}
const Ic = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function wi(t, e = {}) {
  if (typeof e.hour12 == "boolean" && Rc()) {
    e = {
      ...e
    };
    let o = Ic[String(e.hour12)][t.split("-")[0]], r = e.hour12 ? "h12" : "h23";
    e.hourCycle = o ?? r, delete e.hour12;
  }
  let a = t + (e ? Object.entries(e).sort((o, r) => o[0] < r[0] ? -1 : 1).join() : "");
  if (Wo.has(a)) return Wo.get(a);
  let n = new Intl.DateTimeFormat(t, e);
  return Wo.set(a, n), n;
}
let Ho = null;
function Rc() {
  return Ho == null && (Ho = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Ho;
}
let Uo = null;
function Vc() {
  return Uo == null && (Uo = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Uo;
}
function Fc(t, e) {
  if (!e.timeStyle && !e.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let a = wi(t, {
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
function Lc(t, e) {
  const a = [];
  for (let n = 0; n < t.length; n += e)
    a.push(t.slice(n, n + e));
  return a;
}
function Je(t, e = Et()) {
  return Xs(t) ? t.toDate() : t.toDate(e);
}
function Nc(t) {
  return t instanceof Pa;
}
function Xs(t) {
  return t instanceof Oa;
}
function zc(t) {
  return Nc(t) || Xs(t);
}
function Dt(t) {
  if (t instanceof Date) {
    const e = t.getFullYear(), a = t.getMonth() + 1;
    return new Date(e, a, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function Kt(t, e) {
  return t.compare(e) < 0;
}
function Za(t, e) {
  return t.compare(e) > 0;
}
function Kc(t, e) {
  return t.compare(e) <= 0;
}
function Wc(t, e) {
  return t.compare(e) >= 0;
}
function Hc(t, e, a) {
  return Wc(t, e) && Kc(t, a);
}
function Uc(t, e, a) {
  return Za(t, e) && Kt(t, a);
}
function jc(t, e, a) {
  const n = ti(t, a);
  return e > n ? t.subtract({ days: n + 7 - e }) : e === n ? t : t.subtract({ days: n - e });
}
function Gc(t, e, a) {
  const n = ti(t, a), o = e === 0 ? 6 : e - 1;
  return n === o ? t : n > o ? t.add({ days: 7 - n + o }) : t.add({ days: o - n });
}
function qc(t, e, a, n) {
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
function dl(t, e) {
  const a = [];
  let n = t.add({ days: 1 });
  const o = e;
  for (; n.compare(o) < 0; )
    a.push(n), n = n.add({ days: 1 });
  return a;
}
function jo(t) {
  const { dateObj: e, weekStartsOn: a, fixedWeeks: n, locale: o } = t, r = Dt(e), l = Array.from({ length: r }, (x, B) => e.set({ day: B + 1 })), i = nn(e), u = jr(e), d = jc(i, a, o), c = Gc(u, a, o), p = dl(d.subtract({ days: 1 }), i), y = dl(u, c.add({ days: 1 })), m = p.length + l.length + y.length;
  if (n && m < 42) {
    const x = 42 - m;
    let B = y[y.length - 1];
    B || (B = jr(e));
    const k = Array.from({ length: x }, ($, E) => {
      const D = E + 1;
      return B.add({ days: D });
    });
    y.push(...k);
  }
  const h = p.concat(l, y), g = Lc(h, 7);
  return {
    value: e,
    cells: h,
    rows: g
  };
}
function Yc(t) {
  const { dateObj: e, startIndex: a, endIndex: n } = t, o = Array.from({ length: Math.abs(a ?? 0) + n }, (r, l) => l <= Math.abs(a ?? 0) ? e.subtract({ years: l }).set({ day: 1, month: 1 }) : e.add({ years: l - n }).set({ day: 1, month: 1 }));
  return o.sort((r, l) => r.year - l.year), o;
}
function Jc(t) {
  const { dateObj: e, numberOfMonths: a = 1, pagedNavigation: n = !1 } = t;
  return a && n ? Array.from({ length: Math.floor(12 / a) }, (o, r) => nn(e.set({ month: r * a + 1 }))) : Array.from({ length: 12 }, (o, r) => nn(e.set({ month: r + 1 })));
}
function Qt(t) {
  const { numberOfMonths: e, dateObj: a, ...n } = t, o = [];
  if (!e || e === 1)
    return o.push(
      jo({
        ...n,
        dateObj: a
      })
    ), o;
  o.push(
    jo({
      ...n,
      dateObj: a
    })
  );
  for (let r = 1; r < e; r++) {
    const l = a.add({ months: r });
    o.push(
      jo({
        ...n,
        dateObj: l
      })
    );
  }
  return o;
}
const Qc = ["top", "right", "bottom", "left"], Wt = Math.min, He = Math.max, Xn = Math.round, kn = Math.floor, dt = (t) => ({
  x: t,
  y: t
}), Xc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zc = {
  start: "end",
  end: "start"
};
function ms(t, e, a) {
  return He(t, Wt(e, a));
}
function St(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Pt(t) {
  return t.split("-")[0];
}
function Va(t) {
  return t.split("-")[1];
}
function Zs(t) {
  return t === "x" ? "y" : "x";
}
function er(t) {
  return t === "y" ? "height" : "width";
}
const ep = /* @__PURE__ */ new Set(["top", "bottom"]);
function ut(t) {
  return ep.has(Pt(t)) ? "y" : "x";
}
function tr(t) {
  return Zs(ut(t));
}
function tp(t, e, a) {
  a === void 0 && (a = !1);
  const n = Va(t), o = tr(t), r = er(o);
  let l = o === "x" ? n === (a ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Zn(l)), [l, Zn(l)];
}
function ap(t) {
  const e = Zn(t);
  return [hs(t), e, hs(e)];
}
function hs(t) {
  return t.replace(/start|end/g, (e) => Zc[e]);
}
const cl = ["left", "right"], pl = ["right", "left"], np = ["top", "bottom"], op = ["bottom", "top"];
function sp(t, e, a) {
  switch (t) {
    case "top":
    case "bottom":
      return a ? e ? pl : cl : e ? cl : pl;
    case "left":
    case "right":
      return e ? np : op;
    default:
      return [];
  }
}
function rp(t, e, a, n) {
  const o = Va(t);
  let r = sp(Pt(t), a === "start", n);
  return o && (r = r.map((l) => l + "-" + o), e && (r = r.concat(r.map(hs)))), r;
}
function Zn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Xc[e]);
}
function lp(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function xi(t) {
  return typeof t != "number" ? lp(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function eo(t) {
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
function fl(t, e, a) {
  let {
    reference: n,
    floating: o
  } = t;
  const r = ut(e), l = tr(e), i = er(l), u = Pt(e), d = r === "y", c = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, y = n[i] / 2 - o[i] / 2;
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
  switch (Va(e)) {
    case "start":
      m[l] -= y * (a && d ? -1 : 1);
      break;
    case "end":
      m[l] += y * (a && d ? -1 : 1);
      break;
  }
  return m;
}
const ip = async (t, e, a) => {
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
  } = fl(d, n, u), y = n, m = {}, h = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: x,
      fn: B
    } = i[g], {
      x: k,
      y: $,
      data: E,
      reset: D
    } = await B({
      x: c,
      y: p,
      initialPlacement: n,
      placement: y,
      strategy: o,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    c = k ?? c, p = $ ?? p, m = {
      ...m,
      [x]: {
        ...m[x],
        ...E
      }
    }, D && h <= 50 && (h++, typeof D == "object" && (D.placement && (y = D.placement), D.rects && (d = D.rects === !0 ? await l.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : D.rects), {
      x: c,
      y: p
    } = fl(d, y, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: y,
    strategy: o,
    middlewareData: m
  };
};
async function on(t, e) {
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
    altBoundary: y = !1,
    padding: m = 0
  } = St(e, t), h = xi(m), x = i[y ? p === "floating" ? "reference" : "floating" : p], B = eo(await r.getClippingRect({
    element: (a = await (r.isElement == null ? void 0 : r.isElement(x))) == null || a ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), k = p === "floating" ? {
    x: n,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), E = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = eo(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: $,
    strategy: u
  }) : k);
  return {
    top: (B.top - D.top + h.top) / E.y,
    bottom: (D.bottom - B.bottom + h.bottom) / E.y,
    left: (B.left - D.left + h.left) / E.x,
    right: (D.right - B.right + h.right) / E.x
  };
}
const up = (t) => ({
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
    } = St(t, e) || {};
    if (d == null)
      return {};
    const p = xi(c), y = {
      x: a,
      y: n
    }, m = tr(o), h = er(m), g = await l.getDimensions(d), x = m === "y", B = x ? "top" : "left", k = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", E = r.reference[h] + r.reference[m] - y[m] - r.floating[h], D = y[m] - r.reference[m], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let P = T ? T[$] : 0;
    (!P || !await (l.isElement == null ? void 0 : l.isElement(T))) && (P = i.floating[$] || r.floating[h]);
    const L = E / 2 - D / 2, F = P / 2 - g[h] / 2 - 1, M = Wt(p[B], F), R = Wt(p[k], F), V = M, j = P - g[h] - R, z = P / 2 - g[h] / 2 + L, W = ms(V, z, j), Q = !u.arrow && Va(o) != null && z !== W && r.reference[h] / 2 - (z < V ? M : R) - g[h] / 2 < 0, se = Q ? z < V ? z - V : z - j : 0;
    return {
      [m]: y[m] + se,
      data: {
        [m]: W,
        centerOffset: z - W - se,
        ...Q && {
          alignmentOffset: se
        }
      },
      reset: Q
    };
  }
}), dp = function(t) {
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
        fallbackPlacements: y,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...x
      } = St(t, e);
      if ((a = r.arrow) != null && a.alignmentOffset)
        return {};
      const B = Pt(o), k = ut(i), $ = Pt(i) === i, E = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), D = y || ($ || !g ? [Zn(i)] : ap(i)), T = h !== "none";
      !y && T && D.push(...rp(i, g, h, E));
      const P = [i, ...D], L = await on(e, x), F = [];
      let M = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (c && F.push(L[B]), p) {
        const z = tp(o, l, E);
        F.push(L[z[0]], L[z[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: F
      }], !F.every((z) => z <= 0)) {
        var R, V;
        const z = (((R = r.flip) == null ? void 0 : R.index) || 0) + 1, W = P[z];
        if (W && (!(p === "alignment" ? k !== ut(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((be) => be.overflows[0] > 0 && ut(be.placement) === k)))
          return {
            data: {
              index: z,
              overflows: M
            },
            reset: {
              placement: W
            }
          };
        let Q = (V = M.filter((se) => se.overflows[0] <= 0).sort((se, be) => se.overflows[1] - be.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!Q)
          switch (m) {
            case "bestFit": {
              var j;
              const se = (j = M.filter((be) => {
                if (T) {
                  const Y = ut(be.placement);
                  return Y === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((be) => [be.placement, be.overflows.filter((Y) => Y > 0).reduce((Y, ie) => Y + ie, 0)]).sort((be, Y) => be[1] - Y[1])[0]) == null ? void 0 : j[0];
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
function vl(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function ml(t) {
  return Qc.some((e) => t[e] >= 0);
}
const cp = function(t) {
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
          const r = await on(e, {
            ...o,
            elementContext: "reference"
          }), l = vl(r, a.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: ml(l)
            }
          };
        }
        case "escaped": {
          const r = await on(e, {
            ...o,
            altBoundary: !0
          }), l = vl(r, a.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: ml(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ci = /* @__PURE__ */ new Set(["left", "top"]);
async function pp(t, e) {
  const {
    placement: a,
    platform: n,
    elements: o
  } = t, r = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), l = Pt(a), i = Va(a), u = ut(a) === "y", d = Ci.has(l) ? -1 : 1, c = r && u ? -1 : 1, p = St(e, t);
  let {
    mainAxis: y,
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
    y: y * d
  } : {
    x: y * d,
    y: m * c
  };
}
const fp = function(t) {
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
      } = e, u = await pp(e, t);
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
}, vp = function(t) {
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
              x: B,
              y: k
            } = x;
            return {
              x: B,
              y: k
            };
          }
        },
        ...u
      } = St(t, e), d = {
        x: a,
        y: n
      }, c = await on(e, u), p = ut(Pt(o)), y = Zs(p);
      let m = d[y], h = d[p];
      if (r) {
        const x = y === "y" ? "top" : "left", B = y === "y" ? "bottom" : "right", k = m + c[x], $ = m - c[B];
        m = ms(k, m, $);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", B = p === "y" ? "bottom" : "right", k = h + c[x], $ = h - c[B];
        h = ms(k, h, $);
      }
      const g = i.fn({
        ...e,
        [y]: m,
        [p]: h
      });
      return {
        ...g,
        data: {
          x: g.x - a,
          y: g.y - n,
          enabled: {
            [y]: r,
            [p]: l
          }
        }
      };
    }
  };
}, mp = function(t) {
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
      } = St(t, e), c = {
        x: a,
        y: n
      }, p = ut(o), y = Zs(p);
      let m = c[y], h = c[p];
      const g = St(i, e), x = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const $ = y === "y" ? "height" : "width", E = r.reference[y] - r.floating[$] + x.mainAxis, D = r.reference[y] + r.reference[$] - x.mainAxis;
        m < E ? m = E : m > D && (m = D);
      }
      if (d) {
        var B, k;
        const $ = y === "y" ? "width" : "height", E = Ci.has(Pt(o)), D = r.reference[p] - r.floating[$] + (E && ((B = l.offset) == null ? void 0 : B[p]) || 0) + (E ? 0 : x.crossAxis), T = r.reference[p] + r.reference[$] + (E ? 0 : ((k = l.offset) == null ? void 0 : k[p]) || 0) - (E ? x.crossAxis : 0);
        h < D ? h = D : h > T && (h = T);
      }
      return {
        [y]: m,
        [p]: h
      };
    }
  };
}, hp = function(t) {
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
      } = St(t, e), c = await on(e, d), p = Pt(o), y = Va(o), m = ut(o) === "y", {
        width: h,
        height: g
      } = r.floating;
      let x, B;
      p === "top" || p === "bottom" ? (x = p, B = y === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (B = p, x = y === "end" ? "top" : "bottom");
      const k = g - c.top - c.bottom, $ = h - c.left - c.right, E = Wt(g - c[x], k), D = Wt(h - c[B], $), T = !e.middlewareData.shift;
      let P = E, L = D;
      if ((a = e.middlewareData.shift) != null && a.enabled.x && (L = $), (n = e.middlewareData.shift) != null && n.enabled.y && (P = k), T && !y) {
        const M = He(c.left, 0), R = He(c.right, 0), V = He(c.top, 0), j = He(c.bottom, 0);
        m ? L = h - 2 * (M !== 0 || R !== 0 ? M + R : He(c.left, c.right)) : P = g - 2 * (V !== 0 || j !== 0 ? V + j : He(c.top, c.bottom));
      }
      await u({
        ...e,
        availableWidth: L,
        availableHeight: P
      });
      const F = await l.getDimensions(i.floating);
      return h !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function yo() {
  return typeof window < "u";
}
function la(t) {
  return ar(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ue(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function mt(t) {
  var e;
  return (e = (ar(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function ar(t) {
  return yo() ? t instanceof Node || t instanceof Ue(t).Node : !1;
}
function ot(t) {
  return yo() ? t instanceof Element || t instanceof Ue(t).Element : !1;
}
function ct(t) {
  return yo() ? t instanceof HTMLElement || t instanceof Ue(t).HTMLElement : !1;
}
function hl(t) {
  return !yo() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ue(t).ShadowRoot;
}
const gp = /* @__PURE__ */ new Set(["inline", "contents"]);
function pn(t) {
  const {
    overflow: e,
    overflowX: a,
    overflowY: n,
    display: o
  } = st(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + a) && !gp.has(o);
}
const yp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function bp(t) {
  return yp.has(la(t));
}
const _p = [":popover-open", ":modal"];
function bo(t) {
  return _p.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const wp = ["transform", "translate", "scale", "rotate", "perspective"], xp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Cp = ["paint", "layout", "strict", "content"];
function nr(t) {
  const e = or(), a = ot(t) ? st(t) : t;
  return wp.some((n) => a[n] ? a[n] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !e && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !e && (a.filter ? a.filter !== "none" : !1) || xp.some((n) => (a.willChange || "").includes(n)) || Cp.some((n) => (a.contain || "").includes(n));
}
function $p(t) {
  let e = Ht(t);
  for (; ct(e) && !Aa(e); ) {
    if (nr(e))
      return e;
    if (bo(e))
      return null;
    e = Ht(e);
  }
  return null;
}
function or() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Bp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Aa(t) {
  return Bp.has(la(t));
}
function st(t) {
  return Ue(t).getComputedStyle(t);
}
function _o(t) {
  return ot(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Ht(t) {
  if (la(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    hl(t) && t.host || // Fallback.
    mt(t)
  );
  return hl(e) ? e.host : e;
}
function $i(t) {
  const e = Ht(t);
  return Aa(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ct(e) && pn(e) ? e : $i(e);
}
function sn(t, e, a) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = !0);
  const o = $i(t), r = o === ((n = t.ownerDocument) == null ? void 0 : n.body), l = Ue(o);
  if (r) {
    const i = gs(l);
    return e.concat(l, l.visualViewport || [], pn(o) ? o : [], i && a ? sn(i) : []);
  }
  return e.concat(o, sn(o, [], a));
}
function gs(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Bi(t) {
  const e = st(t);
  let a = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = ct(t), r = o ? t.offsetWidth : a, l = o ? t.offsetHeight : n, i = Xn(a) !== r || Xn(n) !== l;
  return i && (a = r, n = l), {
    width: a,
    height: n,
    $: i
  };
}
function sr(t) {
  return ot(t) ? t : t.contextElement;
}
function ka(t) {
  const e = sr(t);
  if (!ct(e))
    return dt(1);
  const a = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: r
  } = Bi(e);
  let l = (r ? Xn(a.width) : a.width) / n, i = (r ? Xn(a.height) : a.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const kp = /* @__PURE__ */ dt(0);
function ki(t) {
  const e = Ue(t);
  return !or() || !e.visualViewport ? kp : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ep(t, e, a) {
  return e === void 0 && (e = !1), !a || e && a !== Ue(t) ? !1 : e;
}
function oa(t, e, a, n) {
  e === void 0 && (e = !1), a === void 0 && (a = !1);
  const o = t.getBoundingClientRect(), r = sr(t);
  let l = dt(1);
  e && (n ? ot(n) && (l = ka(n)) : l = ka(t));
  const i = Ep(r, a, n) ? ki(r) : dt(0);
  let u = (o.left + i.x) / l.x, d = (o.top + i.y) / l.y, c = o.width / l.x, p = o.height / l.y;
  if (r) {
    const y = Ue(r), m = n && ot(n) ? Ue(n) : n;
    let h = y, g = gs(h);
    for (; g && n && m !== h; ) {
      const x = ka(g), B = g.getBoundingClientRect(), k = st(g), $ = B.left + (g.clientLeft + parseFloat(k.paddingLeft)) * x.x, E = B.top + (g.clientTop + parseFloat(k.paddingTop)) * x.y;
      u *= x.x, d *= x.y, c *= x.x, p *= x.y, u += $, d += E, h = Ue(g), g = gs(h);
    }
  }
  return eo({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function rr(t, e) {
  const a = _o(t).scrollLeft;
  return e ? e.left + a : oa(mt(t)).left + a;
}
function Ei(t, e, a) {
  a === void 0 && (a = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (a ? 0 : (
    // RTL <body> scrollbar.
    rr(t, n)
  )), r = n.top + e.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Dp(t) {
  let {
    elements: e,
    rect: a,
    offsetParent: n,
    strategy: o
  } = t;
  const r = o === "fixed", l = mt(n), i = e ? bo(e.floating) : !1;
  if (n === l || i && r)
    return a;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = dt(1);
  const c = dt(0), p = ct(n);
  if ((p || !p && !r) && ((la(n) !== "body" || pn(l)) && (u = _o(n)), ct(n))) {
    const m = oa(n);
    d = ka(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const y = l && !p && !r ? Ei(l, u, !0) : dt(0);
  return {
    width: a.width * d.x,
    height: a.height * d.y,
    x: a.x * d.x - u.scrollLeft * d.x + c.x + y.x,
    y: a.y * d.y - u.scrollTop * d.y + c.y + y.y
  };
}
function Sp(t) {
  return Array.from(t.getClientRects());
}
function Pp(t) {
  const e = mt(t), a = _o(t), n = t.ownerDocument.body, o = He(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = He(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -a.scrollLeft + rr(t);
  const i = -a.scrollTop;
  return st(n).direction === "rtl" && (l += He(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: l,
    y: i
  };
}
function Op(t, e) {
  const a = Ue(t), n = mt(t), o = a.visualViewport;
  let r = n.clientWidth, l = n.clientHeight, i = 0, u = 0;
  if (o) {
    r = o.width, l = o.height;
    const d = or();
    (!d || d && e === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const Ap = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Mp(t, e) {
  const a = oa(t, !0, e === "fixed"), n = a.top + t.clientTop, o = a.left + t.clientLeft, r = ct(t) ? ka(t) : dt(1), l = t.clientWidth * r.x, i = t.clientHeight * r.y, u = o * r.x, d = n * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function gl(t, e, a) {
  let n;
  if (e === "viewport")
    n = Op(t, a);
  else if (e === "document")
    n = Pp(mt(t));
  else if (ot(e))
    n = Mp(e, a);
  else {
    const o = ki(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return eo(n);
}
function Di(t, e) {
  const a = Ht(t);
  return a === e || !ot(a) || Aa(a) ? !1 : st(a).position === "fixed" || Di(a, e);
}
function Tp(t, e) {
  const a = e.get(t);
  if (a)
    return a;
  let n = sn(t, [], !1).filter((i) => ot(i) && la(i) !== "body"), o = null;
  const r = st(t).position === "fixed";
  let l = r ? Ht(t) : t;
  for (; ot(l) && !Aa(l); ) {
    const i = st(l), u = nr(l);
    !u && i.position === "fixed" && (o = null), (r ? !u && !o : !u && i.position === "static" && !!o && Ap.has(o.position) || pn(l) && !u && Di(t, l)) ? n = n.filter((c) => c !== l) : o = i, l = Ht(l);
  }
  return e.set(t, n), n;
}
function Ip(t) {
  let {
    element: e,
    boundary: a,
    rootBoundary: n,
    strategy: o
  } = t;
  const l = [...a === "clippingAncestors" ? bo(e) ? [] : Tp(e, this._c) : [].concat(a), n], i = l[0], u = l.reduce((d, c) => {
    const p = gl(e, c, o);
    return d.top = He(p.top, d.top), d.right = Wt(p.right, d.right), d.bottom = Wt(p.bottom, d.bottom), d.left = He(p.left, d.left), d;
  }, gl(e, i, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Rp(t) {
  const {
    width: e,
    height: a
  } = Bi(t);
  return {
    width: e,
    height: a
  };
}
function Vp(t, e, a) {
  const n = ct(e), o = mt(e), r = a === "fixed", l = oa(t, !0, r, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = dt(0);
  function d() {
    u.x = rr(o);
  }
  if (n || !n && !r)
    if ((la(e) !== "body" || pn(o)) && (i = _o(e)), n) {
      const m = oa(e, !0, r, e);
      u.x = m.x + e.clientLeft, u.y = m.y + e.clientTop;
    } else o && d();
  r && !n && o && d();
  const c = o && !n && !r ? Ei(o, i) : dt(0), p = l.left + i.scrollLeft - u.x - c.x, y = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y,
    width: l.width,
    height: l.height
  };
}
function Go(t) {
  return st(t).position === "static";
}
function yl(t, e) {
  if (!ct(t) || st(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let a = t.offsetParent;
  return mt(t) === a && (a = a.ownerDocument.body), a;
}
function Si(t, e) {
  const a = Ue(t);
  if (bo(t))
    return a;
  if (!ct(t)) {
    let o = Ht(t);
    for (; o && !Aa(o); ) {
      if (ot(o) && !Go(o))
        return o;
      o = Ht(o);
    }
    return a;
  }
  let n = yl(t, e);
  for (; n && bp(n) && Go(n); )
    n = yl(n, e);
  return n && Aa(n) && Go(n) && !nr(n) ? a : n || $p(t) || a;
}
const Fp = async function(t) {
  const e = this.getOffsetParent || Si, a = this.getDimensions, n = await a(t.floating);
  return {
    reference: Vp(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Lp(t) {
  return st(t).direction === "rtl";
}
const Np = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dp,
  getDocumentElement: mt,
  getClippingRect: Ip,
  getOffsetParent: Si,
  getElementRects: Fp,
  getClientRects: Sp,
  getDimensions: Rp,
  getScale: ka,
  isElement: ot,
  isRTL: Lp
};
function Pi(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function zp(t, e) {
  let a = null, n;
  const o = mt(t);
  function r() {
    var i;
    clearTimeout(n), (i = a) == null || i.disconnect(), a = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = t.getBoundingClientRect(), {
      left: c,
      top: p,
      width: y,
      height: m
    } = d;
    if (i || e(), !y || !m)
      return;
    const h = kn(p), g = kn(o.clientWidth - (c + y)), x = kn(o.clientHeight - (p + m)), B = kn(c), $ = {
      rootMargin: -h + "px " + -g + "px " + -x + "px " + -B + "px",
      threshold: He(0, Wt(1, u)) || 1
    };
    let E = !0;
    function D(T) {
      const P = T[0].intersectionRatio;
      if (P !== u) {
        if (!E)
          return l();
        P ? l(!1, P) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Pi(d, t.getBoundingClientRect()) && l(), E = !1;
    }
    try {
      a = new IntersectionObserver(D, {
        ...$,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      a = new IntersectionObserver(D, $);
    }
    a.observe(t);
  }
  return l(!0), r;
}
function Oi(t, e, a, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, d = sr(t), c = o || r ? [...d ? sn(d) : [], ...sn(e)] : [];
  c.forEach((B) => {
    o && B.addEventListener("scroll", a, {
      passive: !0
    }), r && B.addEventListener("resize", a);
  });
  const p = d && i ? zp(d, a) : null;
  let y = -1, m = null;
  l && (m = new ResizeObserver((B) => {
    let [k] = B;
    k && k.target === d && m && (m.unobserve(e), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var $;
      ($ = m) == null || $.observe(e);
    })), a();
  }), d && !u && m.observe(d), m.observe(e));
  let h, g = u ? oa(t) : null;
  u && x();
  function x() {
    const B = oa(t);
    g && !Pi(g, B) && a(), g = B, h = requestAnimationFrame(x);
  }
  return a(), () => {
    var B;
    c.forEach((k) => {
      o && k.removeEventListener("scroll", a), r && k.removeEventListener("resize", a);
    }), p == null || p(), (B = m) == null || B.disconnect(), m = null, u && cancelAnimationFrame(h);
  };
}
const Ai = fp, Mi = vp, to = dp, Ti = hp, Ii = cp, Kp = up, Ri = mp, Wp = (t, e, a) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Np,
    ...a
  }, r = {
    ...o.platform,
    _c: n
  };
  return ip(t, e, {
    ...o,
    platform: r
  });
};
function Hp(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function ys(t) {
  if (Hp(t)) {
    const e = t.$el;
    return ar(e) && la(e) === "#comment" ? null : e;
  }
  return t;
}
function wa(t) {
  return typeof t == "function" ? t() : s(t);
}
function Vi(t) {
  return {
    name: "arrow",
    options: t,
    fn(e) {
      const a = ys(wa(t.element));
      return a == null ? {} : Kp({
        element: a,
        padding: t.padding
      }).fn(e);
    }
  };
}
function Fi(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bl(t, e) {
  const a = Fi(t);
  return Math.round(e * a) / a;
}
function Li(t, e, a) {
  a === void 0 && (a = {});
  const n = a.whileElementsMounted, o = C(() => {
    var P;
    return (P = wa(a.open)) != null ? P : !0;
  }), r = C(() => wa(a.middleware)), l = C(() => {
    var P;
    return (P = wa(a.placement)) != null ? P : "bottom";
  }), i = C(() => {
    var P;
    return (P = wa(a.strategy)) != null ? P : "absolute";
  }), u = C(() => {
    var P;
    return (P = wa(a.transform)) != null ? P : !0;
  }), d = C(() => ys(t.value)), c = C(() => ys(e.value)), p = O(0), y = O(0), m = O(i.value), h = O(l.value), g = Bt({}), x = O(!1), B = C(() => {
    const P = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return P;
    const L = bl(c.value, p.value), F = bl(c.value, y.value);
    return u.value ? {
      ...P,
      transform: "translate(" + L + "px, " + F + "px)",
      ...Fi(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: L + "px",
      top: F + "px"
    };
  });
  let k;
  function $() {
    if (d.value == null || c.value == null)
      return;
    const P = o.value;
    Wp(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((L) => {
      p.value = L.x, y.value = L.y, m.value = L.strategy, h.value = L.placement, g.value = L.middlewareData, x.value = P !== !1;
    });
  }
  function E() {
    typeof k == "function" && (k(), k = void 0);
  }
  function D() {
    if (E(), n === void 0) {
      $();
      return;
    }
    if (d.value != null && c.value != null) {
      k = n(d.value, c.value, $);
      return;
    }
  }
  function T() {
    o.value || (x.value = !1);
  }
  return X([r, l, i, o], $, {
    flush: "sync"
  }), X([d, c], D, {
    flush: "sync"
  }), X(o, T, {
    flush: "sync"
  }), uo() && co(E), {
    x: ga(p),
    y: ga(y),
    strategy: ga(m),
    placement: ga(h),
    middlewareData: ga(g),
    isPositioned: ga(x),
    floatingStyles: B,
    update: $
  };
}
function ve(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(o) => {
    const r = dn(n, o);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (o) => (mo(n, o), o)];
}
function lr(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function ao(t, e = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(e, t));
}
function Up(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var jp = function t(e, a) {
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
const ea = /* @__PURE__ */ Up(jp);
function Kn(t) {
  return t == null;
}
function Ni(t) {
  const { defaultValue: e, defaultPlaceholder: a, granularity: n = "day", locale: o = "en" } = t;
  if (Array.isArray(e) && e.length)
    return e.at(-1).copy();
  if (e && !Array.isArray(e))
    return e.copy();
  if (a)
    return a.copy();
  const r = /* @__PURE__ */ new Date(), l = r.getFullYear(), i = r.getMonth() + 1, u = r.getDate(), d = ["hour", "minute", "second"], c = new lt(o), p = Tc(c.resolvedOptions().calendar);
  return d.includes(n ?? "day") ? ze(new Pa(l, i, u, 0, 0, 0), p) : ze(new De(l, i, u), p);
}
function zi(t) {
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
function Gp(t, e) {
  var a;
  const n = Bt();
  return ge(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ra(n);
}
function ia(t) {
  return uo() ? (co(t), !0) : !1;
}
function qp() {
  const t = /* @__PURE__ */ new Set(), e = (a) => {
    t.delete(a);
  };
  return {
    on: (a) => {
      t.add(a);
      const n = () => e(a);
      return ia(n), {
        off: n
      };
    },
    off: e,
    trigger: (...a) => Promise.all(Array.from(t).map((n) => n(...a)))
  };
}
function Yp(t) {
  let e = !1, a;
  const n = Ks(!0);
  return (...o) => (e || (a = n.run(() => t(...o)), e = !0), a);
}
function Ki(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...r) => (e += 1, a || (n = Ks(!0), a = n.run(() => t(...r))), ia(o), a);
}
function kt(t) {
  return typeof t == "function" ? t() : s(t);
}
const ht = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jp = (t) => typeof t < "u", Qp = (t) => t != null, Xp = Object.prototype.toString, Zp = (t) => Xp.call(t) === "[object Object]", Wi = () => {
}, _l = /* @__PURE__ */ ef();
function ef() {
  var t, e;
  return ht && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function tf(t) {
  return Oe();
}
function Hi(t, e = 1e4) {
  return Ls((a, n) => {
    let o = kt(t), r;
    const l = () => setTimeout(() => {
      o = kt(t), n();
    }, kt(e));
    return ia(() => {
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
function af(t, e) {
  tf() && fo(t, e);
}
function ir(t, e, a = {}) {
  const {
    immediate: n = !0
  } = a, o = O(!1);
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
    }, kt(e));
  }
  return n && (o.value = !0, ht && u()), ia(i), {
    isPending: Ra(o),
    start: u,
    stop: i
  };
}
function nf(t = 1e3, e = {}) {
  const {
    controls: a = !1,
    callback: n
  } = e, o = ir(
    n ?? Wi,
    t,
    e
  ), r = C(() => !o.isPending.value);
  return a ? {
    ready: r,
    ...o
  } : r;
}
function Qe(t) {
  var e;
  const a = kt(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
const fn = ht ? window : void 0;
function Ma(...t) {
  let e, a, n, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a, n, o] = t, e = fn) : [e, a, n, o] = t, !e)
    return Wi;
  Array.isArray(a) || (a = [a]), Array.isArray(n) || (n = [n]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, y, m) => (c.addEventListener(p, y, m), () => c.removeEventListener(p, y, m)), u = X(
    () => [Qe(e), kt(o)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const y = Zp(p) ? { ...p } : p;
      r.push(
        ...a.flatMap((m) => n.map((h) => i(c, m, h, y)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return ia(d), d;
}
function of(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function ur(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = fn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = of(e);
  return Ma(o, r, (d) => {
    d.repeat && kt(i) || u(d) && a(d);
  }, l);
}
function dr() {
  const t = O(!1), e = Oe();
  return e && ue(() => {
    t.value = !0;
  }, e), t;
}
function sf(t) {
  const e = dr();
  return C(() => (e.value, !!t()));
}
function rf(t, e, a = {}) {
  const { window: n = fn, ...o } = a;
  let r;
  const l = sf(() => n && "MutationObserver" in n), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = C(() => {
    const y = kt(t), m = (Array.isArray(y) ? y : [y]).map(Qe).filter(Qp);
    return new Set(m);
  }), d = X(
    () => u.value,
    (y) => {
      i(), l.value && y.size && (r = new MutationObserver(e), y.forEach((m) => r.observe(m, o)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return ia(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function Ui(t, e = {}) {
  const {
    immediate: a = !0,
    fpsLimit: n = void 0,
    window: o = fn
  } = e, r = O(!1), l = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(y) {
    if (!r.value || !o)
      return;
    i || (i = y);
    const m = y - i;
    if (l && m < l) {
      u = o.requestAnimationFrame(d);
      return;
    }
    i = y, t({ delta: m, timestamp: y }), u = o.requestAnimationFrame(d);
  }
  function c() {
    !r.value && o && (r.value = !0, i = 0, u = o.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && o && (o.cancelAnimationFrame(u), u = null);
  }
  return a && c(), ia(p), {
    isActive: Ra(r),
    pause: p,
    resume: c
  };
}
function lf(t) {
  return JSON.parse(JSON.stringify(t));
}
function xe(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: y
  } = n, m = Oe(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  e || (e = "modelValue"), g = g || `update:${e.toString()}`;
  const x = ($) => i ? typeof i == "function" ? i($) : lf($) : $, B = () => Jp(t[e]) ? x(t[e]) : p, k = ($) => {
    y ? y($) && h(g, $) : h(g, $);
  };
  if (u) {
    const $ = B(), E = O($);
    let D = !1;
    return X(
      () => t[e],
      (T) => {
        D || (D = !0, E.value = x(T), ne(() => D = !1));
      }
    ), X(
      E,
      (T) => {
        !D && (T !== t[e] || c) && k(T);
      },
      { deep: c }
    ), E;
  } else
    return C({
      get() {
        return B();
      },
      set($) {
        k($);
      }
    });
}
function wo(t) {
  return t ? t.flatMap((e) => e.type === oe ? wo(e.children) : [e]) : [];
}
function Pe() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const uf = ["INPUT", "TEXTAREA"];
function ji(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && uf.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = n, [p, y, m, h, g, x] = [
    t.key === "ArrowRight",
    t.key === "ArrowLeft",
    t.key === "ArrowUp",
    t.key === "ArrowDown",
    t.key === "Home",
    t.key === "End"
  ], B = m || h, k = p || y;
  if (!g && !x && (!B && !k || o === "vertical" && k || o === "horizontal" && B))
    return null;
  const $ = a ? Array.from(a.querySelectorAll(r)) : l;
  if (!$.length)
    return null;
  d && t.preventDefault();
  let E = null;
  return k || B ? E = Gi($, e, {
    goForward: B ? h : u === "ltr" ? p : y,
    loop: i
  }) : g ? E = $.at(0) || null : x && (E = $.at(-1) || null), c && (E == null || E.focus()), E;
}
function Gi(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), r = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (r < 0 || r >= t.length))
    return null;
  const l = (r + t.length) % t.length, i = t[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Gi(
    t,
    i,
    a,
    n
  ) : i : null;
}
function qo(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function bs(t, e, a = ".", n) {
  if (!qo(e))
    return bs(t, {}, a);
  const o = Object.assign({}, e);
  for (const r in t) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = t[r];
    l != null && (Array.isArray(l) && Array.isArray(o[r]) ? o[r] = [...l, ...o[r]] : qo(l) && qo(o[r]) ? o[r] = bs(
      l,
      o[r],
      (a ? `${a}.` : "") + r.toString()
    ) : o[r] = l);
  }
  return o;
}
function df(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => bs(a, n, ""), {})
  );
}
const cf = df(), [xo, Y1] = ve("ConfigProvider");
let pf = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ff = (t = 21) => {
  let e = "", a = t;
  for (; a--; )
    e += pf[Math.random() * 64 | 0];
  return e;
};
const vf = Ki(() => {
  const t = O(/* @__PURE__ */ new Map()), e = O(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = xo({
    scrollBody: O(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", _l && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var u;
    if (!ht)
      return;
    if (!l) {
      i && r();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? cf({
      padding: n.scrollBody.value.padding === !0 ? d : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? d : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), _l && (o = Ma(
      document,
      "touchmove",
      (y) => mf(y),
      { passive: !1 }
    )), ne(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function vn(t) {
  const e = ff(6), a = vf();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return af(() => {
    a.value.delete(e);
  }), n;
}
function qi(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : qi(a);
  }
}
function mf(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && qi(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const hf = "data-radix-vue-collection-item";
function Fa(t, e = hf) {
  const a = Symbol();
  return { createCollection: (n) => {
    const o = O([]);
    function r() {
      const l = Qe(n);
      return l ? o.value = Array.from(
        l.querySelectorAll(`[${e}]:not([data-disabled])`)
      ) : o.value = [];
    }
    return Vd(() => {
      o.value = [];
    }), ue(r), Fd(r), X(() => n == null ? void 0 : n.value, r, { immediate: !0 }), mo(a, o), o;
  }, injectCollection: () => dn(a, O([])) };
}
function Yi(t) {
  const e = O(t);
  function a() {
    return e.value;
  }
  function n(g) {
    e.value = g;
  }
  function o(g, x) {
    return new lt(e.value, x).format(g);
  }
  function r(g, x = !0) {
    return zc(g) && x ? o(Je(g), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Je(g), {
      dateStyle: "long"
    });
  }
  function l(g, x = {}) {
    return new lt(e.value, { month: "long", year: "numeric", ...x }).format(g);
  }
  function i(g, x = {}) {
    return new lt(e.value, { month: "long", ...x }).format(g);
  }
  function u() {
    const g = jn(Et());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Je(g.set({ month: x }))), value: x }));
  }
  function d(g, x = {}) {
    return new lt(e.value, { year: "numeric", ...x }).format(g);
  }
  function c(g, x) {
    return Xs(g) ? new lt(e.value, {
      ...x,
      timeZone: g.timeZone
    }).formatToParts(Je(g)) : new lt(e.value, x).formatToParts(Je(g));
  }
  function p(g, x = "narrow") {
    return new lt(e.value, { weekday: x }).format(g);
  }
  function y(g) {
    var x;
    return ((x = new lt(e.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(g).find((B) => B.type === "dayPeriod")) == null ? void 0 : x.value) === "PM" ? "PM" : "AM";
  }
  const m = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function h(g, x, B = {}) {
    const k = { ...m, ...B }, $ = c(g, k).find((E) => E.type === x);
    return $ ? $.value : "";
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
    dayPeriod: y,
    selectedDate: r,
    dayOfWeek: p,
    getMonths: u
  };
}
function gt(t) {
  const e = xo({
    dir: O("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function ua(t) {
  const e = Oe(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[ql(po(o))] = (...r) => t(o, ...r);
  }), n;
}
let Yo = 0;
function cr() {
  ge((t) => {
    if (!ht)
      return;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      e[0] ?? wl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      e[1] ?? wl()
    ), Yo++, t(() => {
      Yo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Yo--;
    });
  });
}
function wl() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
function mn(t) {
  return C(() => {
    var e;
    return kt(t) ? !!((e = Qe(t)) != null && e.closest("form")) : !0;
  });
}
function me(t) {
  const e = Oe(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, r) => {
    const l = (e == null ? void 0 : e.type.props[r]).default;
    return l !== void 0 && (o[r] = l), o;
  }, {}), n = Vs(t);
  return C(() => {
    const o = {}, r = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      o[po(l)] = r[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function de(t, e) {
  const a = me(t), n = e ? ua(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
function H() {
  const t = Oe(), e = O(), a = C(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = e.value) == null ? void 0 : l.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : Qe(e);
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
function gf(t, e) {
  const a = Hi(!1, 300), n = O(null), o = qp();
  function r() {
    n.value = null, a.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = yf(c, d.getBoundingClientRect()), y = bf(c, p), m = _f(u.getBoundingClientRect()), h = xf([...y, ...m]);
    n.value = h, a.value = !0;
  }
  return ge((i) => {
    if (t.value && e.value) {
      const u = (c) => l(c, e.value), d = (c) => l(c, t.value);
      t.value.addEventListener("pointerleave", u), e.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = t.value) == null || c.removeEventListener("pointerleave", u), (p = e.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), ge((i) => {
    var u;
    if (n.value) {
      const d = (c) => {
        var p, y;
        if (!n.value)
          return;
        const m = c.target, h = { x: c.clientX, y: c.clientY }, g = ((p = t.value) == null ? void 0 : p.contains(m)) || ((y = e.value) == null ? void 0 : y.contains(m)), x = !wf(h, n.value), B = !!m.closest("[data-grace-area-trigger]");
        g ? r() : (x || B) && (r(), o.trigger());
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
function yf(t, e) {
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
function bf(t, e, a = 5) {
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
function _f(t) {
  const { top: e, right: a, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: a, y: e },
    { x: a, y: n },
    { x: o, y: n }
  ];
}
function wf(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let r = 0, l = e.length - 1; r < e.length; l = r++) {
    const i = e[r].x, u = e[r].y, d = e[l].x, c = e[l].y;
    u > n != c > n && a < (d - i) * (n - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function xf(t) {
  const e = t.slice();
  return e.sort((a, n) => a.x < n.x ? -1 : a.x > n.x ? 1 : a.y < n.y ? -1 : a.y > n.y ? 1 : 0), Cf(e);
}
function Cf(t) {
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
var $f = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, ba = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Dn = {}, Jo = 0, Ji = function(t) {
  return t && (t.host || Ji(t.parentNode));
}, Bf = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = Ji(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, kf = function(t, e, a, n) {
  var o = Bf(e, Array.isArray(t) ? t : [t]);
  Dn[a] || (Dn[a] = /* @__PURE__ */ new WeakMap());
  var r = Dn[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(y) {
      if (i.has(y))
        c(y);
      else
        try {
          var m = y.getAttribute(n), h = m !== null && m !== "false", g = (ba.get(y) || 0) + 1, x = (r.get(y) || 0) + 1;
          ba.set(y, g), r.set(y, x), l.push(y), g === 1 && h && En.set(y, !0), x === 1 && y.setAttribute(a, "true"), h || y.setAttribute(n, "true");
        } catch (B) {
          console.error("aria-hidden: cannot operate on ", y, B);
        }
    });
  };
  return c(e), i.clear(), Jo++, function() {
    l.forEach(function(p) {
      var y = ba.get(p) - 1, m = r.get(p) - 1;
      ba.set(p, y), r.set(p, m), y || (En.has(p) || p.removeAttribute(n), En.delete(p)), m || p.removeAttribute(a);
    }), Jo--, Jo || (ba = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Dn = {});
  };
}, Ef = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = $f(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), kf(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function hn(t) {
  let e;
  X(() => Qe(t), (a) => {
    a ? e = Ef(a) : e && e();
  }), Fe(() => {
    e && e();
  });
}
let Df = 0;
function Se(t, e = "radix") {
  const a = xo({ useId: void 0 });
  return xa.useId ? `${e}-${xa.useId()}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++Df}`;
}
function Qi(t) {
  const e = O(), a = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = Qe(t);
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
function Sf(t, e) {
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
const Pf = "data-item-text";
function pr(t) {
  const e = Hi("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (a, n) => {
      if (!(t != null && t.value) && !n)
        return;
      e.value = e.value + a;
      const o = (t == null ? void 0 : t.value) ?? n, r = Pe(), l = o.map((p) => {
        var y;
        return {
          ref: p,
          textValue: ((y = (p.querySelector(`[${Pf}]`) ?? p).textContent) == null ? void 0 : y.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Af(u, e.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function Of(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function Af(t, e, a) {
  const n = e.length > 1 && Array.from(e).every((i) => i === e[0]) ? e[0] : e, o = a ? t.indexOf(a) : -1;
  let r = Of(t, Math.max(o, 0));
  n.length === 1 && (r = r.filter((i) => i !== a));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== a ? l : void 0;
}
function Xi() {
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
const fr = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var n, o;
      if (!a.default)
        return null;
      const r = wo(a.default()), l = r.findIndex((c) => c.type !== Fs);
      if (l === -1)
        return r;
      const i = r[l];
      (n = i.props) == null || delete n.ref;
      const u = i.props ? S(e, i.props) : e;
      e.class && (o = i.props) != null && o.class && delete i.props.class;
      const d = Yl(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), K = b({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Re(n, e) : n !== "template" ? () => Re(t.as, e, { default: a.default }) : () => Re(fr, e, { default: a.default });
  }
});
function La() {
  const t = O(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : Qe(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
const [Zi, Mf] = ve("CollapsibleRoot"), Tf = /* @__PURE__ */ b({
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
    const n = t, o = xe(n, "open", a, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = xe(n, "disabled");
    return Mf({
      contentId: "",
      disabled: r,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), e({ open: o }), H(), (l, i) => (v(), _(s(K), {
      as: l.as,
      "as-child": n.asChild,
      "data-state": s(o) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: f(() => [
        w(l.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), If = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    H();
    const a = Zi();
    return (n, o) => {
      var r, l;
      return v(), _(s(K), {
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
        default: f(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Rf(t, e) {
  var a;
  const n = O({}), o = O("none"), r = O(t), l = t.value ? "mounted" : "unmounted";
  let i;
  const u = ((a = e.value) == null ? void 0 : a.ownerDocument.defaultView) ?? fn, { state: d, dispatch: c } = Sf(l, {
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
    var B;
    if (ht) {
      const k = new CustomEvent(x, { bubbles: !1, cancelable: !1 });
      (B = e.value) == null || B.dispatchEvent(k);
    }
  };
  X(
    t,
    async (x, B) => {
      var k;
      const $ = B !== x;
      if (await ne(), $) {
        const E = o.value, D = Sn(e.value);
        x ? (c("MOUNT"), p("enter"), D === "none" && p("after-enter")) : D === "none" || ((k = n.value) == null ? void 0 : k.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : B && E !== D ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const y = (x) => {
    const B = Sn(e.value), k = B.includes(
      x.animationName
    ), $ = d.value === "mounted" ? "enter" : "leave";
    if (x.target === e.value && k && (p(`after-${$}`), c("ANIMATION_END"), !r.value)) {
      const E = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var D;
        ((D = e.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = E);
      });
    }
    x.target === e.value && B === "none" && c("ANIMATION_END");
  }, m = (x) => {
    x.target === e.value && (o.value = Sn(e.value));
  }, h = X(
    e,
    (x, B) => {
      x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", y), x.addEventListener("animationend", y)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), B == null || B.removeEventListener("animationstart", m), B == null || B.removeEventListener("animationcancel", y), B == null || B.removeEventListener("animationend", y));
    },
    { immediate: !0 }
  ), g = X(d, () => {
    const x = Sn(e.value);
    o.value = d.value === "mounted" ? x : "none";
  });
  return Fe(() => {
    h(), g();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Sn(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const je = b({
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
    const { present: o, forceMount: r } = fe(t), l = O(), { isPresent: i } = Rf(o, l);
    a({ present: i });
    let u = e.default({ present: i });
    u = wo(u || []);
    const d = Oe();
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
    return () => r.value || o.value || i.value ? Re(e.default({ present: i })[0], {
      ref: (c) => {
        const p = Qe(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), Vf = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Zi();
    a.contentId || (a.contentId = Se(void 0, "radix-vue-collapsible-content"));
    const n = O(), { forwardRef: o, currentElement: r } = H(), l = O(0), i = O(0), u = C(() => a.open.value), d = O(u.value), c = O();
    return X(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await ne();
        const p = r.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const y = p.getBoundingClientRect();
        i.value = y.height, l.value = y.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), ue(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, y) => (v(), _(s(je), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: f(() => {
        var m, h;
        return [
          A(s(K), S(p.$attrs, {
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
            default: f(() => {
              var g;
              return [
                (g = n.value) != null && g.present ? w(p.$slots, "default", { key: 0 }) : ae("", !0)
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
function eu({ type: t, defaultValue: e, modelValue: a }) {
  const n = a || e;
  if (Kn(t) && Kn(a) && Kn(e))
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
function Ff({ type: t, defaultValue: e, modelValue: a }) {
  return t || eu({ type: t, defaultValue: e, modelValue: a });
}
function Lf({ type: t, defaultValue: e }) {
  return e !== void 0 ? e : t === "single" ? void 0 : [];
}
function Nf(t, e) {
  const a = O(Ff(t)), n = xe(t, "modelValue", e, {
    defaultValue: Lf(t),
    passive: t.modelValue === void 0,
    deep: !0
  });
  X(
    () => [t.type, t.modelValue, t.defaultValue],
    () => {
      const l = eu(t);
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
const [Co, zf] = ve("AccordionRoot"), Kf = /* @__PURE__ */ b({
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
    const a = t, n = e, { dir: o, disabled: r } = fe(a), l = gt(o), { modelValue: i, changeModelValue: u, isSingle: d } = Nf(a, n), { forwardRef: c, currentElement: p } = H();
    return zf({
      disabled: r,
      direction: l,
      orientation: a.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: a.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (y, m) => (v(), _(s(K), {
      ref: s(c),
      "as-child": y.asChild,
      as: y.as
    }, {
      default: f(() => [
        w(y.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [vr, Wf] = ve("AccordionItem"), Hf = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t, { expose: e }) {
    const a = t, n = Co(), o = C(
      () => n.isSingle.value ? a.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(a.value)
    ), r = C(() => n.disabled.value || a.disabled), l = C(() => r.value ? "" : void 0), i = C(
      () => o.value ? "open" : "closed"
      /* Closed */
    );
    e({ open: o, dataDisabled: l });
    const { currentRef: u, currentElement: d } = H();
    Wf({
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
      var y;
      const m = p.target;
      if (Array.from(((y = n.parentElement.value) == null ? void 0 : y.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((h) => h === m) === -1)
        return null;
      ji(
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
    return (p, y) => (v(), _(s(Tf), {
      "data-orientation": s(n).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: o.value,
      as: a.as,
      "as-child": a.asChild,
      onKeydown: Me(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: f(() => [
        w(p.$slots, "default", { open: o.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Uf = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Co(), n = vr();
    return H(), (o, r) => (v(), _(s(Vf), {
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
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), jf = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(t) {
    const e = t, a = Co(), n = vr();
    return H(), (o, r) => (v(), _(s(K), {
      as: e.as,
      "as-child": e.asChild,
      "data-orientation": s(a).orientation,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value
    }, {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), Gf = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Co(), n = vr();
    n.triggerId || (n.triggerId = Se(void 0, "radix-vue-accordion-trigger"));
    function o() {
      const r = a.isSingle.value && n.open.value && !a.collapsible;
      n.disabled.value || r || a.changeModelValue(n.value.value);
    }
    return (r, l) => (v(), _(s(If), {
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
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [yt, qf] = ve("DialogRoot"), tu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = xe(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), o = O(), r = O(), { modal: l } = fe(a);
    return qf({
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
}), au = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = yt(), { forwardRef: n, currentElement: o } = H();
    return a.contentId || (a.contentId = Se(void 0, "radix-vue-dialog-content")), ue(() => {
      a.triggerElement.value = o.value;
    }), (r, l) => (v(), _(s(K), S(e, {
      ref: s(n),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(a).open.value || !1,
      "aria-controls": s(a).open.value ? s(a).contentId : void 0,
      "data-state": s(a).open.value ? "open" : "closed",
      onClick: s(a).onOpenToggle
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), gn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = dr();
    return (a, n) => s(e) || a.forceMount ? (v(), _(sa, {
      key: 0,
      to: a.to,
      disabled: a.disabled
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled"])) : ae("", !0);
  }
}), mr = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(gn), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yf = "dismissableLayer.pointerDownOutside", Jf = "dismissableLayer.focusOutside";
function nu(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && n === a || o.indexOf(n) < o.indexOf(a));
}
function Qf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1), r = O(() => {
  });
  return ge((l) => {
    if (!ht)
      return;
    const i = async (d) => {
      const c = d.target;
      if (e != null && e.value) {
        if (nu(e.value, c)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let p = function() {
            lr(
              Yf,
              t,
              y
            );
          };
          const y = { originalEvent: d };
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
function Xf(t, e) {
  var a;
  const n = ((a = e == null ? void 0 : e.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1);
  return ge((r) => {
    if (!ht)
      return;
    const l = async (i) => {
      e != null && e.value && (await ne(), !(!e.value || nu(e.value, i.target)) && i.target && !o.value && lr(
        Jf,
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
const tt = aa({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Na = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: r } = H(), l = C(
      () => {
        var h;
        return ((h = r.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => tt.layersRoot), u = C(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = C(() => tt.layersWithOutsidePointerEventsDisabled.size > 0), c = C(() => {
      const h = Array.from(i.value), [g] = [...tt.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(g);
      return u.value >= x;
    }), p = Qf(async (h) => {
      const g = [...tt.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !c.value || g || (n("pointerDownOutside", h), n("interactOutside", h), await ne(), h.defaultPrevented || n("dismiss"));
    }, r), y = Xf((h) => {
      [...tt.branches].some(
        (g) => g == null ? void 0 : g.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, r);
    ur("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return ge((h) => {
      r.value && (a.disableOutsidePointerEvents && (tt.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), tt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), h(() => {
        a.disableOutsidePointerEvents && tt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), ge((h) => {
      h(() => {
        r.value && (i.value.delete(r.value), tt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (h, g) => (v(), _(s(K), {
      ref: s(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: vt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(y).onFocusCapture,
      onBlurCapture: s(y).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: f(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Zf = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = H();
    return ue(() => {
      tt.branches.add(n.value);
    }), Fe(() => {
      tt.branches.delete(n.value);
    }), (o, r) => (v(), _(s(K), S({ ref: s(a) }, e), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qo = "focusScope.autoFocusOnMount", Xo = "focusScope.autoFocusOnUnmount", xl = { bubbles: !1, cancelable: !0 };
function Wn(t, { select: e = !1 } = {}) {
  const a = Pe();
  for (const n of t)
    if (Lt(n, { select: e }), Pe() !== a)
      return !0;
}
function ev(t) {
  const e = hr(t), a = Cl(e, t), n = Cl(e.reverse(), t);
  return [a, n];
}
function hr(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function Cl(t, e) {
  for (const a of t)
    if (!tv(a, { upTo: e }))
      return a;
}
function tv(t, { upTo: e }) {
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
function av(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Lt(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const a = Pe();
    t.focus({ preventScroll: !0 }), t !== a && av(t) && e && t.select();
  }
}
const nv = Yp(() => O([]));
function ov() {
  const t = nv();
  return {
    add(e) {
      const a = t.value[0];
      e !== a && (a == null || a.pause()), t.value = $l(t.value, e), t.value.unshift(e);
    },
    remove(e) {
      var a;
      t.value = $l(t.value, e), (a = t.value[0]) == null || a.resume();
    }
  };
}
function $l(t, e) {
  const a = [...t], n = a.indexOf(e);
  return n !== -1 && a.splice(n, 1), a;
}
function sv(t) {
  return t.filter((e) => e.tagName !== "A");
}
const $o = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(t, { emit: e }) {
    const a = t, n = e, { currentRef: o, currentElement: r } = H(), l = O(null), i = ov(), u = aa({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ge((c) => {
      if (!ht)
        return;
      const p = r.value;
      if (!a.trapped)
        return;
      function y(x) {
        if (u.paused || !p)
          return;
        const B = x.target;
        p.contains(B) ? l.value = B : Lt(l.value, { select: !0 });
      }
      function m(x) {
        if (u.paused || !p)
          return;
        const B = x.relatedTarget;
        B !== null && (p.contains(B) || Lt(l.value, { select: !0 }));
      }
      function h(x) {
        p.contains(l.value) || Lt(p);
      }
      document.addEventListener("focusin", y), document.addEventListener("focusout", m);
      const g = new MutationObserver(h);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), ge(async (c) => {
      const p = r.value;
      if (await ne(), !p)
        return;
      i.add(u);
      const y = Pe();
      if (!p.contains(y)) {
        const m = new CustomEvent(Qo, xl);
        p.addEventListener(Qo, (h) => n("mountAutoFocus", h)), p.dispatchEvent(m), m.defaultPrevented || (Wn(sv(hr(p)), {
          select: !0
        }), Pe() === y && Lt(p));
      }
      c(() => {
        p.removeEventListener(Qo, (g) => n("mountAutoFocus", g));
        const m = new CustomEvent(Xo, xl), h = (g) => {
          n("unmountAutoFocus", g);
        };
        p.addEventListener(Xo, h), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Lt(y ?? document.body, { select: !0 }), p.removeEventListener(Xo, h), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!a.loop && !a.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, y = Pe();
      if (p && y) {
        const m = c.currentTarget, [h, g] = ev(m);
        h && g ? !c.shiftKey && y === g ? (c.preventDefault(), a.loop && Lt(h, { select: !0 })) : c.shiftKey && y === h && (c.preventDefault(), a.loop && Lt(g, { select: !0 })) : y === m && c.preventDefault();
      }
    }
    return (c, p) => (v(), _(s(K), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), rv = "menu.itemSelect", _s = ["Enter", " "], lv = ["ArrowDown", "PageUp", "Home"], ou = ["ArrowUp", "PageDown", "End"], iv = [...lv, ...ou], uv = {
  ltr: [..._s, "ArrowRight"],
  rtl: [..._s, "ArrowLeft"]
}, dv = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function gr(t) {
  return t ? "open" : "closed";
}
function no(t) {
  return t === "indeterminate";
}
function yr(t) {
  return no(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function ws(t) {
  const e = Pe();
  for (const a of t)
    if (a === e || (a.focus(), Pe() !== e))
      return;
}
function cv(t, e) {
  const { x: a, y: n } = t;
  let o = !1;
  for (let r = 0, l = e.length - 1; r < e.length; l = r++) {
    const i = e[r].x, u = e[r].y, d = e[l].x, c = e[l].y;
    u > n != c > n && a < (d - i) * (n - u) / (c - u) + i && (o = !o);
  }
  return o;
}
function pv(t, e) {
  if (!e)
    return !1;
  const a = { x: t.clientX, y: t.clientY };
  return cv(a, e);
}
function rn(t) {
  return t.pointerType === "mouse";
}
const fv = "DialogTitle", vv = "DialogContent";
function mv({
  titleName: t = fv,
  contentName: e = vv,
  componentLink: a = "dialog.html#title",
  titleId: n,
  descriptionId: o,
  contentElement: r
}) {
  const l = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${a}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  ue(() => {
    var u;
    document.getElementById(n) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && d && (document.getElementById(o) || console.warn(i));
  });
}
const su = /* @__PURE__ */ b({
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
    const a = t, n = e, o = yt(), { forwardRef: r, currentElement: l } = H();
    return o.titleId || (o.titleId = Se(void 0, "radix-vue-dialog-title")), o.descriptionId || (o.descriptionId = Se(void 0, "radix-vue-dialog-description")), ue(() => {
      o.contentElement = l, Pe() !== document.body && (o.triggerElement.value = Pe());
    }), process.env.NODE_ENV !== "production" && mv({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: l
    }), (i, u) => (v(), _(s($o), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: f(() => [
        A(s(Na), S({
          id: s(o).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(o).descriptionId,
          "aria-labelledby": s(o).titleId,
          "data-state": s(gr)(s(o).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
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
}), hv = /* @__PURE__ */ b({
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
    const a = t, n = e, o = yt(), r = ua(n), { forwardRef: l, currentElement: i } = H();
    return hn(i), (u, d) => (v(), _(su, S({ ...a, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(o).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, y = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || y) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), gv = /* @__PURE__ */ b({
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
    const a = t, n = ua(e);
    H();
    const o = yt(), r = O(!1), l = O(!1);
    return (i, u) => (v(), _(su, S({ ...a, ...s(n) }, {
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
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), br = /* @__PURE__ */ b({
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
    const a = t, n = e, o = yt(), r = ua(n), { forwardRef: l } = H();
    return (i, u) => (v(), _(s(je), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (v(), _(hv, S({
          key: 0,
          ref: s(l)
        }, { ...a, ...s(r), ...i.$attrs }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), _(gv, S({
          key: 1,
          ref: s(l)
        }, { ...a, ...s(r), ...i.$attrs }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), yv = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = yt();
    return vn(!0), H(), (a, n) => (v(), _(s(K), {
      as: a.as,
      "as-child": a.asChild,
      "data-state": s(e).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), _r = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = yt(), { forwardRef: a } = H();
    return (n, o) => {
      var r;
      return (r = s(e)) != null && r.modal.value ? (v(), _(s(je), {
        key: 0,
        present: n.forceMount || s(e).open.value
      }, {
        default: f(() => [
          A(yv, S(n.$attrs, {
            ref: s(a),
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
      }, 8, ["present"])) : ae("", !0);
    };
  }
}), yn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    H();
    const a = yt();
    return (n, o) => (v(), _(s(K), S(e, {
      type: n.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (r) => s(a).onOpenChange(!1))
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), ru = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(t) {
    const e = t, a = yt();
    return H(), (n, o) => (v(), _(s(K), S(e, {
      id: s(a).titleId
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), lu = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(t) {
    const e = t;
    H();
    const a = yt();
    return (n, o) => (v(), _(s(K), S(e, {
      id: s(a).descriptionId
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function bv(t) {
  function e(n) {
    return Array.isArray(t.date.value) ? t.date.value.some((o) => Ae(o, n)) : t.date.value ? Ae(t.date.value, n) : !1;
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
function _v(t, e) {
  const a = e(t), n = a.compare(t), o = {};
  return n >= 7 && (o.day = 1), n >= Dt(t) && (o.month = 1), a.set({ ...o });
}
function wv(t, e) {
  const a = e(t), n = t.compare(a), o = {};
  return n >= 7 && (o.day = 35), n >= Dt(t) && (o.month = 13), a.set({ ...o });
}
function xv(t, e) {
  return e(t);
}
function Cv(t, e) {
  return e(t);
}
function iu(t) {
  const e = Yi(t.locale.value), a = C(() => {
    const g = {
      calendar: t.placeholder.value.calendar.identifier
    };
    return t.placeholder.value.calendar.identifier === "gregory" && t.placeholder.value.era === "BC" && (g.era = "short"), g;
  }), n = O(Qt({
    dateObj: t.placeholder.value,
    weekStartsOn: t.weekStartsOn.value,
    locale: t.locale.value,
    fixedWeeks: t.fixedWeeks.value,
    numberOfMonths: t.numberOfMonths.value
  })), o = C(() => n.value.map((g) => g.value));
  function r(g) {
    return !o.value.some((x) => Hr(g, x));
  }
  const l = (g = "month", x) => {
    if (!t.maxValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const B = n.value[n.value.length - 1].value;
    if (x || t.nextPage.value) {
      const $ = _v(B, x || t.nextPage.value);
      return Za($, t.maxValue.value);
    }
    if (g === "year") {
      const $ = B.add({ years: 1 }).set({ day: 1, month: 1 });
      return Za($, t.maxValue.value);
    }
    const k = B.add({ months: 1 }).set({ day: 1 });
    return Za(k, t.maxValue.value);
  }, i = (g = "month", x) => {
    if (!t.minValue.value || !n.value.length)
      return !1;
    if (t.disabled.value)
      return !0;
    const B = n.value[0].value;
    if (x || t.prevPage.value) {
      const $ = wv(B, x || t.prevPage.value);
      return Kt($, t.minValue.value);
    }
    if (g === "year") {
      const $ = B.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return Kt($, t.minValue.value);
    }
    const k = B.subtract({ months: 1 }).set({ day: 35 });
    return Kt(k, t.minValue.value);
  };
  function u(g) {
    var x;
    return !!((x = t.isDateDisabled) != null && x.call(t, g) || t.disabled.value || t.maxValue.value && Za(g, t.maxValue.value) || t.minValue.value && Kt(g, t.minValue.value));
  }
  const d = (g) => {
    var x;
    return !!((x = t.isDateUnavailable) != null && x.call(t, g));
  }, c = C(() => n.value.length ? n.value[0].rows[0].map((g) => e.dayOfWeek(Je(g), t.weekdayFormat.value)) : []), p = (g = "month", x) => {
    const B = n.value[0].value;
    if (x || t.nextPage.value) {
      const E = xv(B, x || t.nextPage.value), D = Qt({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = D;
      const T = {};
      if (!x) {
        const P = D[0].value.compare(B);
        P >= Dt(B) && (T.day = 1), P >= 365 && (T.month = 1);
      }
      t.placeholder.value = D[0].value.set({ ...T });
      return;
    }
    const k = g === "month" ? B.add({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : B.add({ years: 1 }), $ = Qt({
      dateObj: k,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = $, t.placeholder.value = $[0].value.set({ day: 1 });
  }, y = (g = "month", x) => {
    const B = n.value[0].value;
    if (x || t.prevPage.value) {
      const E = Cv(B, x || t.prevPage.value), D = Qt({
        dateObj: E,
        weekStartsOn: t.weekStartsOn.value,
        locale: t.locale.value,
        fixedWeeks: t.fixedWeeks.value,
        numberOfMonths: t.numberOfMonths.value
      });
      n.value = D;
      const T = {};
      if (!x) {
        const P = B.compare(D[0].value);
        P >= Dt(B) && (T.day = 1), P >= 365 && (T.month = 1);
      }
      t.placeholder.value = D[0].value.set({ ...T });
      return;
    }
    const k = g === "month" ? B.subtract({ months: t.pagedNavigation.value ? t.numberOfMonths.value : 1 }) : B.subtract({ years: 1 }), $ = Qt({
      dateObj: k,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    });
    n.value = $, t.placeholder.value = $[0].value.set({ day: 1 });
  };
  X(t.placeholder, (g) => {
    o.value.some((x) => Hr(x, g)) || (n.value = Qt({
      dateObj: g,
      weekStartsOn: t.weekStartsOn.value,
      locale: t.locale.value,
      fixedWeeks: t.fixedWeeks.value,
      numberOfMonths: t.numberOfMonths.value
    }));
  }), X([t.locale, t.weekStartsOn, t.fixedWeeks, t.numberOfMonths], () => {
    n.value = Qt({
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
      const D = n.value[0].value;
      return `${e.fullMonthAndYear(Je(D), a.value)}`;
    }
    const g = Je(n.value[0].value), x = Je(n.value[n.value.length - 1].value), B = e.fullMonth(g, a.value), k = e.fullMonth(x, a.value), $ = e.fullYear(g, a.value), E = e.fullYear(x, a.value);
    return $ === E ? `${B} - ${k} ${E}` : `${B} ${$} - ${k} ${E}`;
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
    prevPage: y,
    headingValue: m,
    fullCalendarLabel: h
  };
}
const $v = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Bv = {
  role: "heading",
  "aria-level": "2"
}, [za, kv] = ve("CalendarRoot"), uu = /* @__PURE__ */ b({
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
      multiple: y,
      minValue: m,
      maxValue: h,
      numberOfMonths: g,
      preventDeselect: x,
      isDateDisabled: B,
      isDateUnavailable: k,
      calendarLabel: $,
      defaultValue: E,
      nextPage: D,
      prevPage: T,
      dir: P
    } = fe(a), { primitiveElement: L, currentElement: F } = La(), M = gt(P), R = xe(a, "modelValue", n, {
      defaultValue: E.value,
      passive: a.modelValue === void 0
    }), V = Ni({
      defaultPlaceholder: a.placeholder,
      defaultValue: R.value,
      locale: a.locale
    }), j = xe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function z(ee) {
      j.value = ee.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: Q,
      isDateDisabled: se,
      isDateUnavailable: be,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: ie,
      weekdays: pe,
      isOutsideVisibleView: Ve,
      nextPage: Ge,
      prevPage: Ze,
      formatter: rt,
      grid: It
    } = iu({
      locale: o,
      placeholder: j,
      weekStartsOn: d,
      fixedWeeks: p,
      numberOfMonths: g,
      minValue: m,
      maxValue: h,
      disabled: r,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: B.value,
      isDateUnavailable: k.value,
      calendarLabel: $,
      nextPage: D,
      prevPage: T
    }), {
      isInvalid: J,
      isDateSelected: te
    } = bv({
      date: R,
      isDateDisabled: se,
      isDateUnavailable: be
    });
    X(R, (ee) => {
      if (Array.isArray(ee) && ee.length) {
        const $e = ee[ee.length - 1];
        $e && !it(j.value, $e) && z($e);
      } else !Array.isArray(ee) && ee && !it(j.value, ee) && z(ee);
    });
    function le(ee) {
      if (y.value) {
        if (!R.value)
          R.value = [ee.copy()];
        else if (Array.isArray(R.value)) {
          if (R.value.findIndex(($e) => Ae($e, ee)) === -1)
            R.value = [...R.value, ee];
          else if (!x.value) {
            const $e = R.value.filter((Le) => !Ae(Le, ee));
            if (!$e.length) {
              j.value = ee.copy(), R.value = void 0;
              return;
            }
            R.value = $e.map((Le) => Le.copy());
          }
        }
      } else {
        if (!R.value) {
          R.value = ee.copy();
          return;
        }
        !x.value && it(R.value, ee) ? (j.value = ee.copy(), R.value = void 0) : R.value = ee.copy();
      }
    }
    return ue(() => {
      i.value && zi(F.value);
    }), kv({
      isDateUnavailable: be,
      dir: M,
      isDateDisabled: se,
      locale: o,
      formatter: rt,
      modelValue: R,
      placeholder: j,
      disabled: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: y,
      numberOfMonths: g,
      readonly: l,
      preventDeselect: x,
      fullCalendarLabel: W,
      headingValue: Q,
      isInvalid: J,
      isDateSelected: te,
      isNextButtonDisabled: Y,
      isPrevButtonDisabled: ie,
      isOutsideVisibleView: Ve,
      nextPage: Ge,
      prevPage: Ze,
      parentElement: F,
      onPlaceholderChange: z,
      onDateChange: le
    }), (ee, $e) => (v(), _(s(K), {
      ref_key: "primitiveElement",
      ref: L,
      as: ee.as,
      "as-child": ee.asChild,
      role: "application",
      "aria-label": s(W),
      "data-readonly": s(l) ? "" : void 0,
      "data-disabled": s(r) ? "" : void 0,
      "data-invalid": s(J) ? "" : void 0,
      dir: s(M)
    }, {
      default: f(() => [
        w(ee.$slots, "default", {
          date: s(j),
          grid: s(It),
          weekDays: s(pe),
          weekStartsOn: s(d),
          locale: s(o),
          fixedWeeks: s(p)
        }),
        he("div", $v, [
          he("div", Bv, re(s(W)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Ev = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dv = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = za();
    return (n, o) => (v(), _(s(K), S(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Z(re(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Sv = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = za(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (r, l) => (v(), _(s(K), S(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), Pv = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = za();
    return (a, n) => {
      var o, r;
      return v(), _(s(K), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isDateSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((r = (o = s(e)).isDateUnavailable) == null ? void 0 : r.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Ov = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Av = /* @__PURE__ */ b({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = za();
    return (o, r) => (v(), _(s(K), {
      as: e.as,
      "as-child": e.asChild,
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).nextPage(e.step, e.nextPage))
    }, {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Mv = /* @__PURE__ */ b({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = za();
    return (o, r) => (v(), _(s(K), {
      "aria-label": "Previous page",
      as: e.as,
      "as-child": e.asChild,
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).prevPage(e.step, e.prevPage))
    }, {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Tv = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iv = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rv = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vv = /* @__PURE__ */ b({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Xi(), n = za(), { primitiveElement: o, currentElement: r } = La(), l = C(() => e.day.day.toLocaleString(n.locale.value)), i = C(() => n.formatter.custom(Je(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = C(() => n.isDateDisabled(e.day)), d = C(
      () => {
        var $;
        return ($ = n.isDateUnavailable) == null ? void 0 : $.call(n, e.day);
      }
    ), c = C(() => ei(e.day, Et())), p = C(() => !Ws(e.day, e.month)), y = C(
      () => n.isOutsideVisibleView(e.day)
    ), m = C(() => !n.disabled.value && Ae(e.day, n.placeholder.value)), h = C(() => n.isDateSelected(e.day)), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])";
    function x($) {
      var E;
      n.readonly.value || n.isDateDisabled($) || (E = n.isDateUnavailable) != null && E.call(n, $) || n.onDateChange($);
    }
    function B() {
      x(e.day);
    }
    function k($) {
      $.preventDefault(), $.stopPropagation();
      const E = n.parentElement.value, D = E ? Array.from(E.querySelectorAll(g)) : [];
      let T = D.indexOf(r.value);
      const P = 7, L = n.dir.value === "rtl" ? -1 : 1;
      switch ($.code) {
        case a.ARROW_RIGHT:
          T += L;
          break;
        case a.ARROW_LEFT:
          T -= L;
          break;
        case a.ARROW_UP:
          T -= P;
          break;
        case a.ARROW_DOWN:
          T += P;
          break;
        case a.ENTER:
        case a.SPACE_CODE:
          x(e.day);
          return;
        default:
          return;
      }
      if (T >= 0 && T < D.length) {
        D[T].focus();
        return;
      }
      if (T < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), ne(() => {
          const F = E ? Array.from(E.querySelectorAll(g)) : [];
          if (!n.pagedNavigation.value) {
            const M = Dt(n.placeholder.value);
            F[M - Math.abs(T)].focus();
            return;
          }
          F[F.length - Math.abs(T)].focus();
        });
        return;
      }
      if (T >= D.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), ne(() => {
          const F = E ? Array.from(E.querySelectorAll(g)) : [];
          if (!n.pagedNavigation.value) {
            const M = Dt(n.placeholder.value.add({ months: n.numberOfMonths.value - 1 }));
            F[F.length - M + T - D.length].focus();
            return;
          }
          F[T - D.length].focus();
        });
      }
    }
    return ($, E) => (v(), _(s(K), S({
      ref_key: "primitiveElement",
      ref: o
    }, e, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": u.value || d.value ? !0 : void 0,
      "data-selected": h.value ? !0 : void 0,
      "data-value": $.day.toString(),
      "data-disabled": u.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": y.value ? "" : void 0,
      "data-focused": m.value ? "" : void 0,
      tabindex: m.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: B,
      onKeydown: [
        Me(k, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = Me(Ee(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: f(() => [
        w($.$slots, "default", { dayValue: l.value }, () => [
          Z(re(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function oo(t) {
  return t === "indeterminate";
}
function du(t) {
  return oo(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const Fv = ["value", "checked", "name", "disabled", "required"], [Lv, Nv] = ve("CheckboxRoot"), zv = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = fe(a), r = xe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    }), { forwardRef: l, currentElement: i } = H(), u = mn(i), d = C(() => {
      var c;
      return a.id && i.value ? (c = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return Nv({
      disabled: o,
      state: r
    }), (c, p) => (v(), N(oe, null, [
      A(s(K), S(c.$attrs, {
        id: c.id,
        ref: s(l),
        role: "checkbox",
        "as-child": a.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": s(oo)(s(r)) ? "mixed" : s(r),
        "aria-required": a.required,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": s(du)(s(r)),
        "data-disabled": s(o) ? "" : void 0,
        disabled: s(o),
        onKeydown: Me(Ee(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (y) => r.value = s(oo)(s(r)) ? !0 : !s(r))
      }), {
        default: f(() => [
          w(c.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      s(u) ? (v(), N("input", {
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
      }, null, 8, Fv)) : ae("", !0)
    ], 64));
  }
}), Kv = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e } = H(), a = Lv();
    return (n, o) => (v(), _(s(je), {
      present: n.forceMount || s(oo)(s(a).state.value) || s(a).state.value === !0
    }, {
      default: f(() => [
        A(s(K), S({
          ref: s(e),
          "data-state": s(du)(s(a).state.value),
          "data-disabled": s(a).disabled.value ? "" : void 0,
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
}), [cu, Wv] = ve("PopperRoot"), Ka = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = O();
    return Wv({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), Bo = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = H(), o = cu();
    return ge(() => {
      o.onAnchorChange(e.element ?? n.value);
    }), (r, l) => (v(), _(s(K), {
      ref: s(a),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Hv(t) {
  return t !== null;
}
function Uv(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var a, n, o;
      const { placement: r, rects: l, middlewareData: i } = e, u = ((a = i.arrow) == null ? void 0 : a.centerOffset) !== 0, d = u ? 0 : t.arrowWidth, c = u ? 0 : t.arrowHeight, [p, y] = xs(r), m = { start: "0%", center: "50%", end: "100%" }[y], h = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + d / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + c / 2;
      let x = "", B = "";
      return p === "bottom" ? (x = u ? m : `${h}px`, B = `${-c}px`) : p === "top" ? (x = u ? m : `${h}px`, B = `${l.floating.height + c}px`) : p === "right" ? (x = `${-c}px`, B = u ? m : `${g}px`) : p === "left" && (x = `${l.floating.width + c}px`, B = u ? m : `${g}px`), { data: { x, y: B } };
    }
  };
}
function xs(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
const pu = {
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
}, [J1, jv] = ve("PopperContent"), Ta = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ns({
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
    ...pu
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = cu(), { forwardRef: r, currentElement: l } = H(), i = O(), u = O(), { width: d, height: c } = Qi(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), y = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: y.value,
      boundary: m.value.filter(Hv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = Gp(() => [
      Ai({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && to({
        ...h.value
      }),
      a.avoidCollisions && Mi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Ri() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && to({
        ...h.value
      }),
      Ti({
        ...h.value,
        apply: ({ elements: M, rects: R, availableWidth: V, availableHeight: j }) => {
          const { width: z, height: W } = R.reference, Q = M.floating.style;
          Q.setProperty(
            "--radix-popper-available-width",
            `${V}px`
          ), Q.setProperty(
            "--radix-popper-available-height",
            `${j}px`
          ), Q.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), Q.setProperty(
            "--radix-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      u.value && Vi({ element: u.value, padding: a.arrowPadding }),
      Uv({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && Ii({ strategy: "referenceHidden", ...h.value })
    ]), { floatingStyles: x, placement: B, isPositioned: k, middlewareData: $ } = Li(
      o.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...M) => Oi(...M, {
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), E = C(
      () => xs(B.value)[0]
    ), D = C(
      () => xs(B.value)[1]
    );
    zs(() => {
      k.value && n("placed");
    });
    const T = C(
      () => {
        var M;
        return ((M = $.value.arrow) == null ? void 0 : M.centerOffset) !== 0;
      }
    ), P = O("");
    ge(() => {
      l.value && (P.value = window.getComputedStyle(l.value).zIndex);
    });
    const L = C(() => {
      var M;
      return ((M = $.value.arrow) == null ? void 0 : M.x) ?? 0;
    }), F = C(() => {
      var M;
      return ((M = $.value.arrow) == null ? void 0 : M.y) ?? 0;
    });
    return jv({
      placedSide: E,
      onArrowChange: (M) => u.value = M,
      arrowX: L,
      arrowY: F,
      shouldHideArrow: T
    }), (M, R) => {
      var V, j, z;
      return v(), N("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: vt({
          ...s(x),
          transform: s(k) ? s(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: P.value,
          "--radix-popper-transform-origin": [
            (V = s($).transformOrigin) == null ? void 0 : V.x,
            (j = s($).transformOrigin) == null ? void 0 : j.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = s($).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        A(s(K), S({ ref: s(r) }, M.$attrs, {
          "as-child": a.asChild,
          as: M.as,
          "data-side": E.value,
          "data-align": D.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(k) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            w(M.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), bn = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return H(), (e, a) => (v(), _(s(K), {
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
}), Gv = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([r, l]) => ({ name: `[${o}][${e.name}][${r}]`, value: l })) : { name: `[${e.name}][${o}]`, value: n }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([n, o]) => ({ name: `[${e.name}][${n}]`, value: o })) : []);
    return (n, o) => (v(!0), N(oe, null, we(a.value, (r) => (v(), _(bn, {
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
}), qv = "data-radix-vue-collection-item", [wr, Yv] = ve("CollectionProvider");
function xr(t = qv) {
  const e = O(/* @__PURE__ */ new Map()), a = O(), n = Yv({
    collectionRef: a,
    itemMap: e,
    attrName: t
  }), { getItems: o } = $r(n), r = C(() => Array.from(n.itemMap.value.values())), l = C(() => n.itemMap.value.size);
  return { getItems: o, reactiveItems: r, itemMapSize: l };
}
const Cr = b({
  name: "CollectionSlot",
  setup(t, { slots: e }) {
    const a = wr(), { primitiveElement: n, currentElement: o } = La();
    return X(o, () => {
      a.collectionRef.value = o.value;
    }), () => Re(fr, { ref: n }, e);
  }
}), ko = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(t, { slots: e, attrs: a }) {
    const n = wr(), { primitiveElement: o, currentElement: r } = La();
    return ge((l) => {
      if (r.value) {
        const i = Jl(r.value);
        n.itemMap.value.set(i, { ref: r.value, value: t.value }), l(() => n.itemMap.value.delete(i));
      }
    }), () => Re(fr, { ...a, [n.attrName]: "", ref: o }, e);
  }
});
function $r(t) {
  const e = t ?? wr();
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
const [Wa, Jv] = ve("ComboboxRoot"), Qv = /* @__PURE__ */ b({
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
    const a = t, n = e, { multiple: o, disabled: r, dir: l } = fe(a), i = gt(l), u = xe(a, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: a.searchTerm === void 0
    }), d = xe(a, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: a.defaultValue ?? o.value ? [] : void 0,
      passive: a.modelValue === void 0,
      deep: !0
    }), c = xe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), p = xe(a, "selectedValue", n, {
      defaultValue: void 0,
      passive: a.selectedValue === void 0
    });
    async function y(Y) {
      var ie, pe;
      c.value = Y, await ne(), Y ? (d.value && (Array.isArray(d.value) && o.value ? p.value = (ie = $().find((Ve) => {
        var Ge, Ze;
        return ((Ze = (Ge = Ve.ref) == null ? void 0 : Ge.dataset) == null ? void 0 : Ze.state) === "checked";
      })) == null ? void 0 : ie.value : p.value = d.value), await ne(), (pe = g.value) == null || pe.focus(), j()) : (h.value = !1, a.resetSearchTermOnBlur && L("blur"));
    }
    function m(Y) {
      if (Array.isArray(d.value) && o.value) {
        const ie = d.value.findIndex((Ve) => ea(Ve, Y)), pe = [...d.value];
        ie === -1 ? pe.push(Y) : pe.splice(ie, 1), d.value = pe;
      } else
        d.value = Y, y(!1);
    }
    const h = O(!1), g = O(), x = O(), { forwardRef: B, currentElement: k } = H(), { getItems: $, reactiveItems: E, itemMapSize: D } = xr("data-radix-vue-combobox-item"), T = O([]);
    X(() => D.value, () => {
      T.value = $().map((Y) => Y.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const P = C(() => {
      if (h.value) {
        if (a.filterFunction)
          return a.filterFunction(T.value, u.value);
        const Y = T.value.filter((ie) => typeof ie == "string");
        if (Y.length)
          return Y.filter((ie) => {
            var pe;
            return ie.toLowerCase().includes((pe = u.value) == null ? void 0 : pe.toLowerCase());
          });
      }
      return T.value;
    });
    function L(Y) {
      const ie = Y === "blur" || Y === "select" && a.resetSearchTermOnSelect;
      !o.value && d.value && !Array.isArray(d.value) ? a.displayValue ? u.value = a.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ie && (u.value = "") : ie && (u.value = "");
    }
    const F = C(() => P.value.findIndex((Y) => ea(Y, p.value))), M = C(() => {
      var Y;
      return (Y = E.value.find((ie) => ea(ie.value, p.value))) == null ? void 0 : Y.ref;
    }), R = C(() => JSON.stringify(d.value));
    X(R, async () => {
      await ne(), await ne(), L("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !a.searchTerm
    }), X(() => [P.value.length, u.value.length], async ([Y, ie], [pe, Ve]) => {
      await ne(), await ne(), Y && (Ve > ie || F.value === -1) && (p.value = P.value[0]);
    });
    const V = mn(k);
    function j() {
      var Y;
      M.value instanceof Element && ((Y = M.value) == null || Y.scrollIntoView({ block: "nearest" }));
    }
    function z() {
      M.value instanceof Element && M.value.focus && M.value.focus();
    }
    const W = O(!1);
    function Q() {
      W.value = !0;
    }
    function se() {
      requestAnimationFrame(() => {
        W.value = !1;
      });
    }
    async function be(Y) {
      var ie;
      P.value.length && p.value && M.value instanceof Element && (Y.preventDefault(), Y.stopPropagation(), W.value || (ie = M.value) == null || ie.click());
    }
    return Jv({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: h,
      multiple: o,
      disabled: r,
      open: c,
      onOpenChange: y,
      filteredOptions: P,
      contentId: "",
      inputElement: g,
      selectedElement: M,
      onInputElementChange: (Y) => g.value = Y,
      onInputNavigation: async (Y) => {
        const ie = F.value;
        ie === 0 && Y === "up" || ie === P.value.length - 1 && Y === "down" || (ie === -1 && P.value.length || Y === "home" ? p.value = P.value[0] : Y === "end" ? p.value = P.value[P.value.length - 1] : p.value = P.value[Y === "up" ? ie - 1 : ie + 1], await ne(), j(), z(), ne(() => {
          var pe;
          return (pe = g.value) == null ? void 0 : pe.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: be,
      onCompositionEnd: se,
      onCompositionStart: Q,
      selectedValue: p,
      onSelectedValueChange: (Y) => p.value = Y,
      parentElement: k,
      contentElement: x,
      onContentElementChange: (Y) => x.value = Y
    }), (Y, ie) => (v(), _(s(Ka), null, {
      default: f(() => [
        A(s(K), S({
          ref: s(B),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: Y.as,
          "as-child": Y.asChild,
          dir: s(i)
        }, Y.$attrs), {
          default: f(() => [
            w(Y.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(V) && a.name ? (v(), _(s(Gv), {
              key: 0,
              name: a.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : ae("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Xv = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(t) {
    const e = t, a = Wa(), { forwardRef: n, currentElement: o } = H();
    ue(() => {
      const c = o.value.nodeName === "INPUT" ? o.value : o.value.querySelector("input");
      c && (a.onInputElementChange(c), setTimeout(() => {
        e.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = C(() => e.disabled || a.disabled.value || !1), l = O();
    Gl(() => {
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
    return (c, p) => (v(), _(s(K), {
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
        Me(Ee(i, ["prevent"]), ["down", "up"]),
        Me(s(a).onInputEnter, ["enter"]),
        Me(Ee(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(a).onCompositionStart,
      onCompositionend: s(a).onCompositionEnd
    }, {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [fu, Zv] = ve("ComboboxGroup"), em = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { currentRef: a, currentElement: n } = H(), o = Se(void 0, "radix-vue-combobox-group"), r = Wa(), l = O(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return rf(n, () => {
      ne(() => {
        i();
      });
    }, { childList: !0 }), X(() => r.searchTerm.value, () => {
      ne(() => {
        i();
      });
    }, { immediate: !0 }), Zv({
      id: o
    }), (u, d) => ra((v(), _(s(K), S(e, {
      ref_key: "currentRef",
      ref: a,
      role: "group",
      "aria-labelledby": s(o)
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [vo, l.value]
    ]);
  }
}), tm = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    H();
    const a = fu({ id: "" });
    return (n, o) => (v(), _(s(K), S(e, {
      id: s(a).id
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Q1, am] = ve("ComboboxContent"), nm = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = fe(a), r = Wa();
    vn(a.bodyLock);
    const { forwardRef: l, currentElement: i } = H();
    hn(r.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), d = me(u.value);
    function c(y) {
      r.onSelectedValueChange("");
    }
    ue(() => {
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
    return am({ position: o }), (y, m) => (v(), _(s(Cr), null, {
      default: f(() => [
        y.dismissable ? (v(), _(s(Na), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": y.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: f(() => [
            (v(), _(Ke(s(o) === "popper" ? s(Ta) : s(K)), S({ ...y.$attrs, ...s(d) }, {
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
              default: f(() => [
                w(y.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), _(Ke(s(o) === "popper" ? s(Ta) : s(K)), S({ key: 1 }, { ...y.$attrs, ...u.value }, {
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
          default: f(() => [
            w(y.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), om = /* @__PURE__ */ b({
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
    const a = de(t, e), { forwardRef: n } = H(), o = Wa();
    return o.contentId || (o.contentId = Se(void 0, "radix-vue-combobox-content")), (r, l) => (v(), _(s(je), {
      present: r.forceMount || s(o).open.value
    }, {
      default: f(() => [
        A(nm, S({ ...s(a), ...r.$attrs }, { ref: s(n) }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), sm = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    H();
    const a = Wa(), n = C(() => a.filteredOptions.value.length === 0);
    return (o, r) => n.value ? (v(), _(s(K), U(S({ key: 0 }, e)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("No options")
        ])
      ]),
      _: 3
    }, 16)) : ae("", !0);
  }
});
function rm(t) {
  const e = xo({
    nonce: O()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const [X1, lm] = ve("ComboboxItem"), im = "combobox.select", um = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { disabled: o } = fe(a), r = Wa();
    fu({ id: "", options: O([]) });
    const { forwardRef: l } = H(), i = C(
      () => {
        var g, x;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((B) => ea(B, a.value)) : ea((x = r.modelValue) == null ? void 0 : x.value, a.value);
      }
    ), u = C(() => ea(r.selectedValue.value, a.value)), d = Se(void 0, "radix-vue-combobox-item"), c = Se(void 0, "radix-vue-combobox-option"), p = C(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => ea(g, a.value)) : !0);
    async function y(g) {
      n("select", g), !(g != null && g.defaultPrevented) && !o.value && g && r.onValueChange(a.value);
    }
    function m(g) {
      if (!g)
        return;
      const x = { originalEvent: g, value: a.value };
      lr(im, y, x);
    }
    async function h(g) {
      await ne(), !g.defaultPrevented && r.onSelectedValueChange(a.value);
    }
    if (a.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return lm({
      isSelected: i
    }), (g, x) => (v(), _(s(ko), { value: g.value }, {
      default: f(() => [
        ra(A(s(K), {
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
          as: g.as,
          "as-child": g.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: h
        }, {
          default: f(() => [
            w(g.$slots, "default", {}, () => [
              Z(re(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [vo, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), dm = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(K), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vu = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Bo), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function cm() {
  const t = O(!1);
  return ue(() => {
    Ma("keydown", () => {
      t.value = !0;
    }, { capture: !0, passive: !0 }), Ma(["pointerdown", "pointermove"], () => {
      t.value = !1;
    }, { capture: !0, passive: !0 });
  }), t;
}
const pm = Ki(cm), [da, mu] = ve(["MenuRoot", "MenuSub"], "MenuContext"), [_n, fm] = ve("MenuRoot"), vm = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o, dir: r } = fe(a), l = gt(r), i = xe(a, "open", n), u = O(), d = pm();
    return mu({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), fm({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: o
    }), (c, p) => (v(), _(s(Ka), null, {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), mm = "rovingFocusGroup.onEntryFocus", hm = { bubbles: !1, cancelable: !0 }, gm = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ym(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function bm(t, e, a) {
  const n = ym(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return gm[n];
}
function hu(t, e = !1) {
  const a = Pe();
  for (const n of t)
    if (n === a || (n.focus({ preventScroll: e }), Pe() !== a))
      return;
}
function _m(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
const [wm, xm] = ve("RovingFocusGroup"), gu = /* @__PURE__ */ b({
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
    const n = t, o = a, { loop: r, orientation: l, dir: i } = fe(n), u = gt(i), d = xe(n, "currentTabStopId", o, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = O(!1), p = O(!1), y = O(0), { getItems: m } = xr();
    function h(x) {
      const B = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && B && !c.value) {
        const k = new CustomEvent(mm, hm);
        if (x.currentTarget.dispatchEvent(k), o("entryFocus", k), !k.defaultPrevented) {
          const $ = m().map((P) => P.ref).filter((P) => P.dataset.disabled !== ""), E = $.find((P) => P.getAttribute("data-active") === "true"), D = $.find(
            (P) => P.id === d.value
          ), T = [E, D, ...$].filter(
            Boolean
          );
          hu(T, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function g() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return e({
      getItems: m
    }), xm({
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
        y.value++;
      },
      onFocusableItemRemove: () => {
        y.value--;
      }
    }), (x, B) => (v(), _(s(Cr), null, {
      default: f(() => [
        A(s(K), {
          tabindex: c.value || y.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: x.as,
          "as-child": x.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: B[0] || (B[0] = (k) => p.value = !0),
          onMouseup: g,
          onFocus: h,
          onBlur: B[1] || (B[1] = (k) => c.value = !1)
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
}), Cm = /* @__PURE__ */ b({
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
    const e = t, a = wm(), n = C(() => e.tabStopId || Se()), o = C(
      () => a.currentTabStopId.value === n.value
    ), { getItems: r } = $r();
    ue(() => {
      e.focusable && a.onFocusableItemAdd();
    }), Fe(() => {
      e.focusable && a.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        a.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = bm(
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
          d = a.loop.value ? _m(d, c + 1) : d.slice(c + 1);
        }
        ne(() => hu(d));
      }
    }
    return (i, u) => (v(), _(s(ko), null, {
      default: f(() => [
        A(s(K), {
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
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Br, $m] = ve("MenuContent"), kr = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ns({
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
    ...pu
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = da(), r = _n(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = fe(a);
    cr(), vn(i.value);
    const d = O(""), c = O(0), p = O(0), y = O(null), m = O("right"), h = O(0), g = O(null), { createCollection: x } = Fa(), { forwardRef: B, currentElement: k } = H(), $ = x(k);
    X(k, (M) => {
      o.onContentChange(M);
    });
    const { handleTypeaheadSearch: E } = pr($);
    Fe(() => {
      window.clearTimeout(c.value);
    });
    function D(M) {
      var R, V;
      return m.value === ((R = y.value) == null ? void 0 : R.side) && pv(M, (V = y.value) == null ? void 0 : V.area);
    }
    async function T(M) {
      var R;
      n("openAutoFocus", M), !M.defaultPrevented && (M.preventDefault(), (R = k.value) == null || R.focus({
        preventScroll: !0
      }));
    }
    function P(M) {
      if (M.defaultPrevented)
        return;
      const R = M.target.closest("[data-radix-menu-content]") === M.currentTarget, V = M.ctrlKey || M.altKey || M.metaKey, j = M.key.length === 1, z = ji(
        M,
        Pe(),
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
      if (M.code === "Space" || (R && (M.key === "Tab" && M.preventDefault(), !V && j && E(M.key)), M.target !== k.value) || !iv.includes(M.key))
        return;
      M.preventDefault();
      const W = $.value;
      ou.includes(M.key) && W.reverse(), ws(W);
    }
    function L(M) {
      var R, V;
      (V = (R = M == null ? void 0 : M.currentTarget) == null ? void 0 : R.contains) != null && V.call(R, M.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(M) {
      var R;
      if (!rn(M))
        return;
      const V = M.target, j = h.value !== M.clientX;
      if ((R = M == null ? void 0 : M.currentTarget) != null && R.contains(V) && j) {
        const z = M.clientX > h.value ? "right" : "left";
        m.value = z, h.value = M.clientX;
      }
    }
    return $m({
      onItemEnter: (M) => !!D(M),
      onItemLeave: (M) => {
        var R;
        D(M) || ((R = k.value) == null || R.focus(), g.value = null);
      },
      onTriggerLeave: (M) => !!D(M),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (M) => {
        y.value = M;
      }
    }), (M, R) => (v(), _(s($o), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: T,
      onUnmountAutoFocus: R[7] || (R[7] = (V) => n("closeAutoFocus", V))
    }, {
      default: f(() => [
        A(s(Na), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: R[2] || (R[2] = (V) => n("escapeKeyDown", V)),
          onPointerDownOutside: R[3] || (R[3] = (V) => n("pointerDownOutside", V)),
          onFocusOutside: R[4] || (R[4] = (V) => n("focusOutside", V)),
          onInteractOutside: R[5] || (R[5] = (V) => n("interactOutside", V)),
          onDismiss: R[6] || (R[6] = (V) => n("dismiss"))
        }, {
          default: f(() => [
            A(s(gu), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": R[0] || (R[0] = (V) => g.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: R[1] || (R[1] = (V) => {
                n("entryFocus", V), s(r).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: f(() => [
                A(s(Ta), {
                  ref: s(B),
                  role: "menu",
                  as: M.as,
                  "as-child": M.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(gr)(s(o).open.value),
                  dir: s(r).dir.value,
                  side: M.side,
                  "side-offset": M.sideOffset,
                  align: M.align,
                  "align-offset": M.alignOffset,
                  "avoid-collisions": M.avoidCollisions,
                  "collision-boundary": M.collisionBoundary,
                  "collision-padding": M.collisionPadding,
                  "arrow-padding": M.arrowPadding,
                  "prioritize-position": M.prioritizePosition,
                  sticky: M.sticky,
                  "hide-when-detached": M.hideWhenDetached,
                  onKeydown: P,
                  onBlur: L,
                  onPointermove: F
                }, {
                  default: f(() => [
                    w(M.$slots, "default")
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
}), yu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Br(), { forwardRef: n } = H(), o = O(!1);
    async function r(i) {
      if (!i.defaultPrevented && rn(i)) {
        if (e.disabled)
          a.onItemLeave(i);
        else if (!a.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ne(), !i.defaultPrevented && rn(i) && a.onItemLeave(i);
    }
    return (i, u) => (v(), _(s(ko), {
      value: { textValue: i.textValue }
    }, {
      default: f(() => [
        A(s(K), S({
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
            await ne(), !(d.defaultPrevented || i.disabled) && (o.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await ne(), !d.defaultPrevented && (o.value = !1);
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
}), Er = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: r } = H(), l = _n(), i = Br(), u = O(!1);
    async function d() {
      const c = r.value;
      if (!a.disabled && c) {
        const p = new CustomEvent(rv, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ne(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (v(), _(yu, S(a, {
      ref: s(o),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (y) => {
        var m;
        await ne(), !y.defaultPrevented && (u.value || (m = y.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (y) => {
        const m = s(i).searchRef.value !== "";
        c.disabled || m && y.key === " " || s(_s).includes(y.key) && (y.currentTarget.click(), y.preventDefault());
      })
    }), {
      default: f(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bm, bu] = ve(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), km = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Bm({
      checked: O(!1)
    });
    return (a, n) => (v(), _(s(je), {
      present: a.forceMount || s(no)(s(e).checked.value) || s(e).checked.value === !0
    }, {
      default: f(() => [
        A(s(K), {
          as: a.as,
          "as-child": a.asChild,
          "data-state": s(yr)(s(e).checked.value)
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
}), Em = /* @__PURE__ */ b({
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
    const a = t, n = e, o = xe(a, "checked", n);
    return bu({ checked: o }), (r, l) => (v(), _(Er, S({ role: "menuitemcheckbox" }, a, {
      "aria-checked": s(no)(s(o)) ? "mixed" : s(o),
      "data-state": s(yr)(s(o)),
      onSelect: l[0] || (l[0] = async (i) => {
        n("select", i), s(no)(s(o)) ? o.value = !0 : o.value = !s(o);
      })
    }), {
      default: f(() => [
        w(r.$slots, "default", { checked: s(o) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Dm = /* @__PURE__ */ b({
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
    const a = t, n = e, o = de(a, n), r = da(), { forwardRef: l, currentElement: i } = H();
    return hn(i), (u, d) => (v(), _(kr, S(s(o), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ee((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Sm = /* @__PURE__ */ b({
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
    const a = de(t, e), n = da();
    return (o, r) => (v(), _(kr, S(s(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => s(n).onOpenChange(!1))
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ b({
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
    const a = de(t, e), n = da(), o = _n();
    return (r, l) => (v(), _(s(je), {
      present: r.forceMount || s(n).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (v(), _(Dm, U(S({ key: 0 }, { ...r.$attrs, ...s(a) })), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), _(Sm, U(S({ key: 1 }, { ...r.$attrs, ...s(a) })), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _u = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), S({ role: "group" }, e), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Am = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(gn), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Mm, Tm] = ve("MenuRadioGroup"), Im = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = xe(a, "modelValue", e);
    return Tm({
      modelValue: n,
      onValueChange: (o) => {
        n.value = o;
      }
    }), (o, r) => (v(), _(_u, U(q(a)), {
      default: f(() => [
        w(o.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), Rm = /* @__PURE__ */ b({
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
    const a = t, n = e, { value: o } = fe(a), r = Mm(), l = C(
      () => r.modelValue.value === (o == null ? void 0 : o.value)
    );
    return bu({ checked: l }), (i, u) => (v(), _(Er, S({ role: "menuitemradio" }, a, {
      "aria-checked": l.value,
      "data-state": s(yr)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), s(r).onValueChange(s(o));
      })
    }), {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Vm = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), S(e, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [wu, Fm] = ve("MenuSub"), Lm = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = xe(a, "open", e, {
      defaultValue: !1,
      passive: a.open === void 0
    }), o = da(), r = O(), l = O();
    return ge((i) => {
      (o == null ? void 0 : o.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), mu({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Fm({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (v(), _(s(Ka), null, {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Nm = /* @__PURE__ */ b({
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
    const a = de(t, e), n = da(), o = _n(), r = wu(), { forwardRef: l, currentElement: i } = H();
    return r.contentId || (r.contentId = Se(void 0, "radix-vue-menu-sub-content")), (u, d) => (v(), _(s(je), {
      present: u.forceMount || s(n).open.value
    }, {
      default: f(() => [
        A(kr, S(s(a), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(o).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Ee((c) => {
            var p;
            s(o).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Ee(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(o).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, y;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), h = s(dv)[s(o).dir.value].includes(c.key);
            m && h && (s(n).onOpenChange(!1), (y = s(r).trigger.value) == null || y.focus(), c.preventDefault());
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
}), zm = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = da(), n = _n(), o = wu(), r = Br(), l = O(null);
    o.triggerId || (o.triggerId = Se(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Fe(() => {
      i();
    });
    function u(p) {
      !rn(p) || r.onItemEnter(p) || !e.disabled && !a.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        a.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var y, m;
      if (!rn(p))
        return;
      i();
      const h = (y = a.content.value) == null ? void 0 : y.getBoundingClientRect();
      if (h != null && h.width) {
        const g = (m = a.content.value) == null ? void 0 : m.dataset.side, x = g === "right", B = x ? -5 : 5, k = h[x ? "left" : "right"], $ = h[x ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + B, y: p.clientY },
            { x: k, y: h.top },
            { x: $, y: h.top },
            { x: $, y: h.bottom },
            { x: k, y: h.bottom }
          ],
          side: g
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
      var y;
      const m = r.searchRef.value !== "";
      e.disabled || m && p.key === " " || uv[n.dir.value].includes(p.key) && (a.onOpenChange(!0), await ne(), (y = a.content.value) == null || y.focus(), p.preventDefault());
    }
    return (p, y) => (v(), _(vu, { "as-child": "" }, {
      default: f(() => [
        A(yu, S(e, {
          id: s(o).triggerId,
          ref: (m) => {
            var h;
            (h = s(o)) == null || h.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(a).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(gr)(s(a).open.value),
          onClick: y[0] || (y[0] = async (m) => {
            e.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(a).open.value || s(a).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
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
}), [xu, Km] = ve("DropdownMenuRoot"), Wm = /* @__PURE__ */ b({
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
    H();
    const o = xe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), r = O(), { modal: l, dir: i } = fe(a), u = gt(i);
    return Km({
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
    }), (d, c) => (v(), _(s(vm), {
      open: s(o),
      "onUpdate:open": c[0] || (c[0] = (p) => We(o) ? o.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: f(() => [
        w(d.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Hm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = xu(), { forwardRef: n, currentElement: o } = H();
    return ue(() => {
      a.triggerElement = o;
    }), a.triggerId || (a.triggerId = Se(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (v(), _(s(vu), { "as-child": "" }, {
      default: f(() => [
        A(s(K), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(a)) == null || u.onOpenToggle(), await ne(), s(a).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Me(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && s(a).onOpenToggle(), i.key === "ArrowDown" && s(a).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Um = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Am), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ b({
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
    const a = de(t, e);
    H();
    const n = xu(), o = O(!1);
    function r(l) {
      l.defaultPrevented || (o.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), o.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = Se(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return v(), _(s(Pm), S(s(a), {
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
          const p = d.detail.originalEvent, y = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || y;
          (!s(n).modal.value || m) && (o.value = !0), (c = s(n).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: f(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Cu = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = ua(e);
    return H(), (o, r) => (v(), _(s(Er), U(q({ ...a, ...s(n) })), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(_u), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qm = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(Vm), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ym = /* @__PURE__ */ b({
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
    const a = t, n = ua(e);
    return H(), (o, r) => (v(), _(s(Em), U(q({ ...a, ...s(n) })), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $u = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(km), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jm = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(Om), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qm = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = ua(e);
    return H(), (o, r) => (v(), _(s(Im), U(q({ ...a, ...s(n) })), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xm = /* @__PURE__ */ b({
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
    const a = de(t, e);
    return H(), (n, o) => (v(), _(s(Rm), U(q(s(a))), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zm = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = xe(a, "open", e, {
      passive: a.open === void 0,
      defaultValue: a.defaultOpen ?? !1
    });
    return H(), (o, r) => (v(), _(s(Lm), {
      open: s(n),
      "onUpdate:open": r[0] || (r[0] = (l) => We(n) ? n.value = l : null)
    }, {
      default: f(() => [
        w(o.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), eh = /* @__PURE__ */ b({
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
    const a = de(t, e);
    return H(), (n, o) => (v(), _(s(Nm), S(s(a), { style: {
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
}), th = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(zm), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(K), S(e, {
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
}), [Ha, nh] = ve("PaginationRoot"), Z1 = /* @__PURE__ */ b({
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
    const a = t, n = e, { siblingCount: o, disabled: r, showEdges: l } = fe(a);
    H();
    const i = xe(a, "page", n, {
      defaultValue: a.defaultPage,
      passive: a.page === void 0
    }), u = C(() => Math.max(1, Math.ceil(a.total / a.itemsPerPage)));
    return nh({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: o,
      disabled: r,
      showEdges: l
    }), (d, c) => (v(), _(s(K), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: f(() => [
        w(d.$slots, "default", {
          page: s(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), oh = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(K), S(e, { "data-type": "ellipsis" }), {
      default: f(() => [
        w(a.$slots, "default", {}, () => [
          Z("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), sh = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ha();
    H();
    const n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, r) => (v(), _(s(K), S(e, {
      "aria-label": "First Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(1))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), rh = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Ha();
    H();
    const n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, r) => (v(), _(s(K), S(e, {
      "aria-label": "Last Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).pageCount.value))
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
function Rt(t, e) {
  const a = e - t + 1;
  return Array.from({ length: a }, (n, o) => o + t);
}
function lh(t) {
  return t.map((e) => typeof e == "number" ? { type: "page", value: e } : { type: "ellipsis" });
}
const Pn = "ellipsis";
function ih(t, e, a, n) {
  const o = e, r = Math.max(t - a, 1), l = Math.min(t + a, o);
  if (n) {
    const i = Math.min(2 * a + 5, e) - 2, u = r > 3 && Math.abs(o - i - 1 + 1) > 2 && Math.abs(r - 1) > 2, d = l < o - 2 && Math.abs(o - i) > 2 && Math.abs(o - l) > 2;
    if (!u && d)
      return [...Rt(1, i), Pn, o];
    if (u && !d) {
      const c = Rt(o - i + 1, o);
      return [1, Pn, ...c];
    }
    if (u && d) {
      const c = Rt(r, l);
      return [1, Pn, ...c, Pn, o];
    }
    return Rt(1, o);
  } else {
    const i = a * 2 + 1;
    return e < i ? Rt(1, o) : t <= a + 1 ? Rt(1, i) : e - t <= a ? Rt(e - i + 1, o) : Rt(r, l);
  }
}
const ex = /* @__PURE__ */ b({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    H();
    const a = Ha(), n = C(() => lh(
      ih(
        a.page.value,
        a.pageCount.value,
        a.siblingCount.value,
        a.showEdges.value
      )
    ));
    return (o, r) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(o.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), tx = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    H();
    const a = Ha(), n = C(() => a.page.value === e.value), o = C(() => a.disabled.value);
    return (r, l) => (v(), _(s(K), S(e, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !o.value && s(a).onPageChange(r.value))
    }), {
      default: f(() => [
        w(r.$slots, "default", {}, () => [
          Z(re(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), uh = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    H();
    const a = Ha(), n = C(() => a.page.value === a.pageCount.value || a.disabled.value);
    return (o, r) => (v(), _(s(K), S(e, {
      "aria-label": "Next Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).page.value + 1))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), dh = /* @__PURE__ */ b({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    H();
    const a = Ha(), n = C(() => a.page.value === 1 || a.disabled.value);
    return (o, r) => (v(), _(s(K), S(e, {
      "aria-label": "Previous Page",
      type: o.as === "button" ? "button" : void 0,
      disabled: n.value,
      onClick: r[0] || (r[0] = (l) => !n.value && s(a).onPageChange(s(a).page.value - 1))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), [wn, ch] = ve("PopoverRoot"), ph = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, { modal: o } = fe(a), r = xe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = O(), i = O(!1);
    return ch({
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
    }), (u, d) => (v(), _(s(Ka), null, {
      default: f(() => [
        w(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), fh = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = wn(), { forwardRef: n, currentElement: o } = H();
    return ue(() => {
      a.triggerElement.value = o.value;
    }), (r, l) => (v(), _(Ke(s(a).hasCustomAnchor.value ? s(K) : s(Bo)), { "as-child": "" }, {
      default: f(() => [
        A(s(K), {
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
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), vh = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(gn), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bu = /* @__PURE__ */ b({
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
    const a = t, n = e, o = me(a), { forwardRef: r } = H(), l = wn();
    return cr(), (i, u) => (v(), _(s($o), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: f(() => [
        A(s(Na), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: f(() => [
            A(s(Ta), S(s(o), {
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
}), mh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = wn(), r = O(!1);
    vn(!0);
    const l = de(a, n), { forwardRef: i, currentElement: u } = H();
    return hn(u), (d, c) => (v(), _(Bu, S(s(l), {
      ref: s(i),
      "trap-focus": s(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ee(
        (p) => {
          var y;
          n("closeAutoFocus", p), r.value || (y = s(o).triggerElement.value) == null || y.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const y = p.detail.originalEvent, m = y.button === 0 && y.ctrlKey === !0, h = y.button === 2 || m;
        r.value = h;
      }),
      onFocusOutside: c[2] || (c[2] = Ee(() => {
      }, ["prevent"]))
    }), {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), hh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = wn(), r = O(!1), l = O(!1), i = de(a, n);
    return (u, d) => (v(), _(Bu, S(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(o).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const y = c.target;
        (p = s(o).triggerElement.value) != null && p.contains(y) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: f(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = wn(), r = de(a, n), { forwardRef: l } = H();
    return o.contentId || (o.contentId = Se(void 0, "radix-vue-popover-content")), (i, u) => (v(), _(s(je), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        s(o).modal.value ? (v(), _(mh, S({ key: 0 }, s(r), { ref: s(l) }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), _(hh, S({ key: 1 }, s(r), { ref: s(l) }), {
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
function yh(t) {
  const e = C(() => t.start.value ? !!t.isDateDisabled(t.start.value) : !1), a = C(() => t.end.value ? !!t.isDateDisabled(t.end.value) : !1), n = C(
    () => e.value || a.value ? !1 : !!(t.start.value && t.end.value && Kt(t.end.value, t.start.value))
  ), o = (u) => t.start.value ? Ae(t.start.value, u) : !1, r = (u) => t.end.value ? Ae(t.end.value, u) : !1, l = (u) => t.start.value && Ae(t.start.value, u) || t.end.value && Ae(t.end.value, u) ? !0 : t.end.value && t.start.value ? Uc(u, t.start.value, t.end.value) : !1, i = C(() => {
    if (t.start.value && t.end.value || !t.start.value || !t.focusedValue.value)
      return null;
    const u = Kt(t.start.value, t.focusedValue.value), d = u ? t.start.value : t.focusedValue.value, c = u ? t.focusedValue.value : t.start.value;
    return Ae(d, c) ? {
      start: d,
      end: c
    } : qc(d, c, t.isDateUnavailable, t.isDateDisabled) ? {
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
    isHighlightedStart: (u) => !i.value || !i.value.start ? !1 : Ae(i.value.start, u),
    isHighlightedEnd: (u) => !i.value || !i.value.end ? !1 : Ae(i.value.end, u)
  };
}
const bh = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, _h = {
  role: "heading",
  "aria-level": "2"
}, [Ua, wh] = ve("RangeCalendarRoot"), xh = /* @__PURE__ */ b({
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
      preventDeselect: y,
      isDateUnavailable: m,
      isDateDisabled: h,
      calendarLabel: g,
      maxValue: x,
      minValue: B,
      locale: k,
      dir: $,
      nextPage: E,
      prevPage: D
    } = fe(a), { primitiveElement: T, currentElement: P } = La(), L = gt($), F = O(), M = O(), R = xe(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? { start: void 0, end: void 0 },
      passive: a.modelValue === void 0
    }), V = Ni({
      defaultPlaceholder: a.placeholder,
      defaultValue: R.value.start,
      locale: a.locale
    }), j = O(R.value.start), z = O(R.value.end), W = xe(a, "placeholder", n, {
      defaultValue: a.defaultPlaceholder ?? V.copy(),
      passive: a.placeholder === void 0
    });
    function Q(ye) {
      W.value = ye.copy();
    }
    const {
      fullCalendarLabel: se,
      headingValue: be,
      isDateDisabled: Y,
      isDateUnavailable: ie,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: Ve,
      grid: Ge,
      weekdays: Ze,
      isOutsideVisibleView: rt,
      nextPage: It,
      prevPage: J,
      formatter: te
    } = iu({
      locale: k,
      placeholder: W,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: B,
      maxValue: x,
      disabled: o,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: h.value,
      isDateUnavailable: m.value,
      calendarLabel: g,
      nextPage: E,
      prevPage: D
    }), {
      isInvalid: le,
      isSelected: ee,
      highlightedRange: $e,
      isSelectionStart: Le,
      isSelectionEnd: Yt,
      isHighlightedStart: Jt,
      isHighlightedEnd: Ad
    } = yh({
      start: j,
      end: z,
      isDateDisabled: Y,
      isDateUnavailable: ie,
      focusedValue: M
    });
    return X(R, (ye) => {
      var qe, Ne, Lo, zr;
      (!ye || !ye.start || j.value && !it(ye.start, j.value)) && (j.value = (Ne = (qe = ye == null ? void 0 : ye.start) == null ? void 0 : qe.copy) == null ? void 0 : Ne.call(qe)), (!ye || !ye.end || z.value && !it(ye.end, z.value)) && (z.value = (zr = (Lo = ye == null ? void 0 : ye.end) == null ? void 0 : Lo.copy) == null ? void 0 : zr.call(Lo));
    }), X(j, (ye) => {
      ye && !it(ye, W.value) && Q(ye), n("update:startValue", ye);
    }), X([j, z], ([ye, qe]) => {
      const Ne = R.value;
      if (!(Ne && Ne.start && Ne.end && ye && qe && it(Ne.start, ye) && it(Ne.end, qe)))
        if (ye && qe) {
          if (Ne.start && Ne.end && it(Ne.start, ye) && it(Ne.end, qe))
            return;
          Kt(qe, ye) ? R.value = {
            start: qe.copy(),
            end: ye.copy()
          } : R.value = {
            start: ye.copy(),
            end: qe.copy()
          };
        } else Ne.start && Ne.end && (R.value = {
          start: ye == null ? void 0 : ye.copy(),
          end: void 0
        });
    }), wh({
      isDateUnavailable: ie,
      startValue: j,
      endValue: z,
      formatter: te,
      modelValue: R,
      placeholder: W,
      disabled: o,
      initialFocus: l,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: y,
      fullCalendarLabel: se,
      headingValue: be,
      isInvalid: le,
      isDateDisabled: Y,
      highlightedRange: $e,
      focusedValue: M,
      lastPressedDateValue: F,
      isSelected: ee,
      isSelectionEnd: Yt,
      isSelectionStart: Le,
      isNextButtonDisabled: pe,
      isPrevButtonDisabled: Ve,
      isOutsideVisibleView: rt,
      nextPage: It,
      prevPage: J,
      parentElement: P,
      onPlaceholderChange: Q,
      locale: k,
      dir: L,
      isHighlightedStart: Jt,
      isHighlightedEnd: Ad
    }), ue(() => {
      l.value && zi(P.value);
    }), (ye, qe) => (v(), _(s(K), {
      ref_key: "primitiveElement",
      ref: T,
      as: ye.as,
      "as-child": ye.asChild,
      role: "application",
      "aria-label": s(se),
      "data-readonly": s(r) ? "" : void 0,
      "data-disabled": s(o) ? "" : void 0,
      "data-invalid": s(le) ? "" : void 0,
      dir: s(L)
    }, {
      default: f(() => [
        he("div", bh, [
          he("div", _h, re(s(se)), 1)
        ]),
        w(ye.$slots, "default", {
          date: s(W),
          grid: s(Ge),
          weekDays: s(Ze),
          weekStartsOn: s(u),
          locale: s(k),
          fixedWeeks: s(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Ch = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $h = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ua();
    return (n, o) => (v(), _(s(K), S(e, {
      "data-disabled": s(a).disabled.value ? "" : void 0
    }), {
      default: f(() => [
        w(n.$slots, "default", {
          headingValue: s(a).headingValue.value
        }, () => [
          Z(re(s(a).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Bh = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(t) {
    const e = t, a = Ua(), n = C(() => a.disabled.value ? !0 : void 0), o = C(() => a.readonly.value ? !0 : void 0);
    return (r, l) => (v(), _(s(K), S(e, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o.value,
      "aria-disabled": n.value,
      "data-readonly": o.value && "",
      "data-disabled": n.value && ""
    }), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), kh = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(t) {
    const e = Ua();
    return (a, n) => {
      var o, r;
      return v(), _(s(K), {
        as: a.as,
        "as-child": a.asChild,
        role: "gridcell",
        "aria-selected": s(e).isSelected(a.date) ? !0 : void 0,
        "aria-disabled": s(e).isDateDisabled(a.date) || ((r = (o = s(e)).isDateUnavailable) == null ? void 0 : r.call(o, a.date)),
        "data-disabled": s(e).isDateDisabled(a.date) ? "" : void 0
      }, {
        default: f(() => [
          w(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Eh = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dh = /* @__PURE__ */ b({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isNextButtonDisabled(e.step, e.nextPage)), n = Ua();
    return (o, r) => (v(), _(s(K), S(e, {
      "aria-label": "Next page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).nextPage(e.step, e.nextPage))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Sh = /* @__PURE__ */ b({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = C(() => n.disabled.value || n.isPrevButtonDisabled(e.step, e.prevPage)), n = Ua();
    return (o, r) => (v(), _(s(K), S(e, {
      "aria-label": "Previous page",
      type: o.as === "button" ? "button" : void 0,
      "aria-disabled": a.value || void 0,
      "data-disabled": a.value || void 0,
      disabled: a.value,
      onClick: r[0] || (r[0] = (l) => s(n).prevPage(e.step, e.prevPage))
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          Z("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Ph = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oh = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ah = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mh = /* @__PURE__ */ b({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = Ua(), n = Xi(), { primitiveElement: o, currentElement: r } = La(), l = C(() => a.formatter.custom(Je(e.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = C(() => a.isDateDisabled(e.day)), u = C(() => {
      var F;
      return (F = a.isDateUnavailable) == null ? void 0 : F.call(a, e.day);
    }), d = C(() => a.isSelected(e.day)), c = C(() => a.isSelectionStart(e.day)), p = C(() => a.isSelectionEnd(e.day)), y = C(() => a.isHighlightedStart(e.day)), m = C(() => a.isHighlightedEnd(e.day)), h = C(() => a.highlightedRange.value ? Hc(e.day, a.highlightedRange.value.start, a.highlightedRange.value.end) : !1), g = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-view]):not([data-outside-visible-view])", x = C(() => ei(e.day, Et())), B = C(() => !Ws(e.day, e.month)), k = C(
      () => a.isOutsideVisibleView(e.day)
    ), $ = C(() => e.day.day.toLocaleString(a.locale.value)), E = C(() => !a.disabled.value && Ae(e.day, a.placeholder.value));
    function D(F, M) {
      var R;
      if (!a.readonly.value && !(a.isDateDisabled(M) || (R = a.isDateUnavailable) != null && R.call(a, M))) {
        if (a.lastPressedDateValue.value = M.copy(), a.startValue.value && a.highlightedRange.value === null) {
          if (Ae(M, a.startValue.value) && !a.preventDeselect.value && !a.endValue.value) {
            a.startValue.value = void 0, a.onPlaceholderChange(M);
            return;
          } else if (!a.endValue.value) {
            F.preventDefault(), a.lastPressedDateValue.value && Ae(a.lastPressedDateValue.value, M) && (a.startValue.value = M.copy());
            return;
          }
        }
        if (a.startValue.value && a.endValue.value && Ae(a.endValue.value, M) && !a.preventDeselect.value) {
          a.startValue.value = void 0, a.endValue.value = void 0, a.onPlaceholderChange(M);
          return;
        }
        a.startValue.value ? a.endValue.value ? a.endValue.value && a.startValue.value && (a.endValue.value = void 0, a.startValue.value = M.copy()) : a.endValue.value = M.copy() : a.startValue.value = M.copy();
      }
    }
    function T(F) {
      D(F, e.day);
    }
    function P() {
      var F;
      a.isDateDisabled(e.day) || (F = a.isDateUnavailable) != null && F.call(a, e.day) || (a.focusedValue.value = e.day.copy());
    }
    function L(F) {
      F.preventDefault(), F.stopPropagation();
      const M = a.parentElement.value, R = M ? Array.from(M.querySelectorAll(g)) : [];
      let V = R.indexOf(r.value);
      const j = 7, z = a.dir.value === "rtl" ? -1 : 1;
      switch (F.code) {
        case n.ARROW_RIGHT:
          V += z;
          break;
        case n.ARROW_LEFT:
          V -= z;
          break;
        case n.ARROW_UP:
          V -= j;
          break;
        case n.ARROW_DOWN:
          V += j;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          D(F, e.day);
          return;
        default:
          return;
      }
      if (V >= 0 && V < R.length) {
        R[V].focus();
        return;
      }
      if (V < 0) {
        if (a.isPrevButtonDisabled("month"))
          return;
        a.prevPage(), ne(() => {
          const W = M ? Array.from(M.querySelectorAll(g)) : [];
          if (!a.pagedNavigation.value) {
            const Q = Dt(a.placeholder.value);
            W[Q - Math.abs(V)].focus();
            return;
          }
          W[W.length - Math.abs(V)].focus();
        });
        return;
      }
      if (V >= R.length) {
        if (a.isNextButtonDisabled("month"))
          return;
        a.nextPage(), ne(() => {
          const W = M ? Array.from(M.querySelectorAll(g)) : [];
          if (!a.pagedNavigation.value) {
            const Q = Dt(a.placeholder.value.add({ months: a.numberOfMonths.value - 1 }));
            W[W.length - Q + V - R.length].focus();
            return;
          }
          W[V - R.length].focus();
        });
      }
    }
    return (F, M) => (v(), _(s(K), S({
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
      "data-highlighted-start": y.value ? !0 : void 0,
      "data-highlighted-end": m.value ? !0 : void 0,
      "data-selected": d.value ? !0 : void 0,
      "data-outside-visible-view": k.value ? "" : void 0,
      "data-value": F.day.toString(),
      "data-disabled": i.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": x.value ? "" : void 0,
      "data-outside-view": B.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : B.value || i.value ? void 0 : -1,
      onClick: T,
      onFocusin: P,
      onMouseenter: P,
      onKeydown: Me(L, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: f(() => [
        w(F.$slots, "default", { dayValue: $.value }, () => [
          Z(re($.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]));
  }
}), Th = ["default-value"], Ih = /* @__PURE__ */ b({
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
    const e = t, { value: a } = fe(e), n = O();
    return (o, r) => (v(), _(s(bn), { "as-child": "" }, {
      default: f(() => [
        ra(he("select", S({
          ref_key: "selectElement",
          ref: n
        }, e, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => We(a) ? a.value = l : null),
          "default-value": s(a)
        }), [
          w(o.$slots, "default")
        ], 16, Th), [
          [Rd, s(a)]
        ])
      ]),
      _: 3
    }));
  }
}), Rh = {
  key: 0,
  value: ""
}, [ca, ku] = ve("SelectRoot"), [Vh, Fh] = ve("SelectRoot"), Lh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = xe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), r = xe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = O(), i = O(), u = O({
      x: 0,
      y: 0
    }), d = O(!1), { required: c, disabled: p, dir: y } = fe(a), m = gt(y);
    ku({
      triggerElement: l,
      onTriggerChange: (B) => {
        l.value = B;
      },
      valueElement: i,
      onValueElementChange: (B) => {
        i.value = B;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (B) => {
        d.value = B;
      },
      contentId: "",
      modelValue: o,
      onValueChange: (B) => {
        o.value = B;
      },
      open: r,
      required: c,
      onOpenChange: (B) => {
        r.value = B;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const h = mn(l), g = O(/* @__PURE__ */ new Set()), x = C(() => Array.from(g.value).map((B) => {
      var k;
      return (k = B.props) == null ? void 0 : k.value;
    }).join(";"));
    return Fh({
      onNativeOptionAdd: (B) => {
        g.value.add(B);
      },
      onNativeOptionRemove: (B) => {
        g.value.delete(B);
      }
    }), (B, k) => (v(), _(s(Ka), null, {
      default: f(() => [
        w(B.$slots, "default", {
          modelValue: s(o),
          open: s(r)
        }),
        s(h) ? (v(), _(Ih, S({ key: x.value }, B.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: B.name,
          autocomplete: B.autocomplete,
          disabled: s(p),
          value: s(o),
          onChange: k[0] || (k[0] = ($) => o.value = $.target.value)
        }), {
          default: f(() => [
            s(o) === void 0 ? (v(), N("option", Rh)) : ae("", !0),
            (v(!0), N(oe, null, we(Array.from(g.value), ($) => (v(), _(Ke($), S({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ae("", !0)
      ]),
      _: 3
    }));
  }
}), Nh = [" ", "Enter", "ArrowUp", "ArrowDown"], zh = [" ", "Enter"], at = 10;
function Eu(t) {
  return t === "" || Kn(t);
}
const Kh = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = ca(), n = C(() => {
      var m;
      return ((m = a.disabled) == null ? void 0 : m.value) || e.disabled;
    }), { forwardRef: o, currentElement: r } = H();
    a.contentId || (a.contentId = Se(void 0, "radix-vue-select-content")), ue(() => {
      a.triggerElement = r;
    });
    const { injectCollection: l } = Fa(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = pr(i);
    function p() {
      n.value || (a.onOpenChange(!0), c());
    }
    function y(m) {
      p(), a.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, h) => (v(), _(s(Bo), { "as-child": "" }, {
      default: f(() => {
        var g, x, B, k;
        return [
          A(s(K), {
            ref: s(o),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(a).contentId,
            "aria-expanded": s(a).open.value || !1,
            "aria-required": (g = s(a).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = s(a)) == null ? void 0 : x.dir.value,
            "data-state": (B = s(a)) != null && B.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(Eu)((k = s(a).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: h[0] || (h[0] = ($) => {
              var E;
              (E = $ == null ? void 0 : $.currentTarget) == null || E.focus();
            }),
            onPointerdown: h[1] || (h[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const E = $.target;
              E.hasPointerCapture($.pointerId) && E.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (y($), $.preventDefault());
            }),
            onPointerup: h[2] || (h[2] = Ee(
              ($) => {
                $.pointerType === "touch" && y($);
              },
              ["prevent"]
            )),
            onKeydown: h[3] || (h[3] = ($) => {
              const E = s(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && E && $.key === " " || (s(d)($.key), s(Nh).includes($.key) && (p(), $.preventDefault()));
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
}), Wh = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(gn), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Dr, Hh] = ve("SelectItemAlignedPosition"), Uh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, { injectCollection: o } = Fa(), r = ca(), l = pa(), i = o(), u = O(!1), d = O(!0), c = O(), { forwardRef: p, currentElement: y } = H(), { viewport: m, selectedItem: h, selectedItemText: g, focusSelectedItem: x } = l;
    function B() {
      if (r.triggerElement.value && r.valueElement.value && c.value && y.value && m != null && m.value && h != null && h.value && g != null && g.value) {
        const E = r.triggerElement.value.getBoundingClientRect(), D = y.value.getBoundingClientRect(), T = r.valueElement.value.getBoundingClientRect(), P = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const J = P.left - D.left, te = T.left - J, le = E.left - te, ee = E.width + le, $e = Math.max(ee, D.width), Le = window.innerWidth - at, Yt = ao(te, at, Math.max(at, Le - $e));
          c.value.style.minWidth = `${ee}px`, c.value.style.left = `${Yt}px`;
        } else {
          const J = D.right - P.right, te = window.innerWidth - T.right - J, le = window.innerWidth - E.right - te, ee = E.width + le, $e = Math.max(ee, D.width), Le = window.innerWidth - at, Yt = ao(
            te,
            at,
            Math.max(at, Le - $e)
          );
          c.value.style.minWidth = `${ee}px`, c.value.style.right = `${Yt}px`;
        }
        const L = i.value, F = window.innerHeight - at * 2, M = m.value.scrollHeight, R = window.getComputedStyle(y.value), V = Number.parseInt(
          R.borderTopWidth,
          10
        ), j = Number.parseInt(R.paddingTop, 10), z = Number.parseInt(
          R.borderBottomWidth,
          10
        ), W = Number.parseInt(
          R.paddingBottom,
          10
        ), Q = V + j + M + W + z, se = Math.min(
          h.value.offsetHeight * 5,
          Q
        ), be = window.getComputedStyle(m.value), Y = Number.parseInt(be.paddingTop, 10), ie = Number.parseInt(
          be.paddingBottom,
          10
        ), pe = E.top + E.height / 2 - at, Ve = F - pe, Ge = h.value.offsetHeight / 2, Ze = h.value.offsetTop + Ge, rt = V + j + Ze, It = Q - rt;
        if (rt <= pe) {
          const J = h.value === L[L.length - 1];
          c.value.style.bottom = "0px";
          const te = y.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, le = Math.max(
            Ve,
            Ge + (J ? ie : 0) + te + z
          ), ee = rt + le;
          c.value.style.height = `${ee}px`;
        } else {
          const J = h.value === L[0];
          c.value.style.top = "0px";
          const te = Math.max(
            pe,
            V + m.value.offsetTop + (J ? Y : 0) + Ge
          ) + It;
          c.value.style.height = `${te}px`, m.value.scrollTop = rt - pe + m.value.offsetTop;
        }
        c.value.style.margin = `${at}px 0`, c.value.style.minHeight = `${se}px`, c.value.style.maxHeight = `${F}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = O("");
    ue(async () => {
      await ne(), B(), y.value && (k.value = window.getComputedStyle(y.value).zIndex);
    });
    function $(E) {
      E && d.value === !0 && (B(), x == null || x(), d.value = !1);
    }
    return Hh({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: $
    }), (E, D) => (v(), N("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: vt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      A(s(K), S({
        ref: s(p),
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
}), jh = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: at },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = me(t);
    return (a, n) => (v(), _(s(Ta), S(s(e), { style: {
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
}), ja = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [pa, Gh] = ve("SelectContent"), qh = /* @__PURE__ */ b({
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
    const a = t, n = e, o = ca();
    cr(), vn(a.bodyLock);
    const { createCollection: r } = Fa(), l = O();
    hn(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = pr(i), c = O(), p = O(), y = O(), m = O(!1), h = O(!1);
    function g() {
      p.value && l.value && ws([p.value, l.value]);
    }
    X(m, () => {
      g();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: B } = o;
    ge((D) => {
      if (!l.value)
        return;
      let T = { x: 0, y: 0 };
      const P = (F) => {
        var M, R;
        T = {
          x: Math.abs(
            Math.round(F.pageX) - (((M = B.value) == null ? void 0 : M.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((R = B.value) == null ? void 0 : R.y) ?? 0)
          )
        };
      }, L = (F) => {
        var M;
        F.pointerType !== "touch" && (T.x <= 10 && T.y <= 10 ? F.preventDefault() : (M = l.value) != null && M.contains(F.target) || x(!1), document.removeEventListener("pointermove", P), B.value = null);
      };
      B.value !== null && (document.addEventListener("pointermove", P), document.addEventListener("pointerup", L, {
        capture: !0,
        once: !0
      })), D(() => {
        document.removeEventListener("pointermove", P), document.removeEventListener("pointerup", L, {
          capture: !0
        });
      });
    });
    function k(D) {
      const T = D.ctrlKey || D.altKey || D.metaKey;
      if (D.key === "Tab" && D.preventDefault(), !T && D.key.length === 1 && d(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
        let P = i.value;
        if (["ArrowUp", "End"].includes(D.key) && (P = P.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
          const L = D.target, F = P.indexOf(L);
          P = P.slice(F + 1);
        }
        setTimeout(() => ws(P)), D.preventDefault();
      }
    }
    const $ = C(() => a.position === "popper" ? a : {}), E = me($.value);
    return Gh({
      content: l,
      viewport: c,
      onViewportChange: (D) => {
        c.value = D;
      },
      itemRefCallback: (D, T, P) => {
        var L, F;
        const M = !h.value && !P;
        (((L = o.modelValue) == null ? void 0 : L.value) !== void 0 && ((F = o.modelValue) == null ? void 0 : F.value) === T || M) && (p.value = D, M && (h.value = !0));
      },
      selectedItem: p,
      selectedItemText: y,
      onItemLeave: () => {
        var D;
        (D = l.value) == null || D.focus();
      },
      itemTextRefCallback: (D, T, P) => {
        var L, F;
        const M = !h.value && !P;
        (((L = o.modelValue) == null ? void 0 : L.value) !== void 0 && ((F = o.modelValue) == null ? void 0 : F.value) === T || M) && (y.value = D);
      },
      focusSelectedItem: g,
      position: a.position,
      isPositioned: m,
      searchRef: u
    }), (D, T) => (v(), _(s($o), {
      "as-child": "",
      onMountAutoFocus: T[6] || (T[6] = Ee(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: T[7] || (T[7] = (P) => {
        var L;
        n("closeAutoFocus", P), !P.defaultPrevented && ((L = s(o).triggerElement.value) == null || L.focus({ preventScroll: !0 }), P.preventDefault());
      })
    }, {
      default: f(() => [
        A(s(Na), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: T[2] || (T[2] = Ee(() => {
          }, ["prevent"])),
          onDismiss: T[3] || (T[3] = (P) => s(o).onOpenChange(!1)),
          onEscapeKeyDown: T[4] || (T[4] = (P) => n("escapeKeyDown", P)),
          onPointerDownOutside: T[5] || (T[5] = (P) => n("pointerDownOutside", P))
        }, {
          default: f(() => [
            (v(), _(Ke(
              D.position === "popper" ? jh : Uh
            ), S({ ...D.$attrs, ...s(E) }, {
              id: s(o).contentId,
              ref: (P) => {
                l.value = s(Qe)(P);
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
              onContextmenu: T[0] || (T[0] = Ee(() => {
              }, ["prevent"])),
              onPlaced: T[1] || (T[1] = (P) => m.value = !0),
              onKeydown: k
            }), {
              default: f(() => [
                w(D.$slots, "default")
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
}), Yh = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(t) {
    return ku(t.context), (e, a) => w(e.$slots, "default");
  }
}), Jh = { key: 1 }, Qh = /* @__PURE__ */ b({
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
    const a = t, n = de(a, e), o = ca(), r = O();
    ue(() => {
      r.value = new DocumentFragment();
    });
    const l = O(), i = C(() => a.forceMount || o.open.value);
    return (u, d) => {
      var c;
      return i.value ? (v(), _(s(je), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: f(() => [
          A(qh, U(q({ ...s(n), ...u.$attrs })), {
            default: f(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (v(), N("div", Jh, [
        (v(), _(sa, { to: r.value }, [
          A(Yh, { context: s(o) }, {
            default: f(() => [
              w(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ae("", !0);
    };
  }
}), Xh = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), S({ "aria-hidden": "true" }, e), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Du, Zh] = ve("SelectItem"), eg = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { disabled: a } = fe(e), n = ca(), o = pa(ja), { forwardRef: r, currentElement: l } = H(), i = C(() => {
      var g;
      return ((g = n.modelValue) == null ? void 0 : g.value) === e.value;
    }), u = O(!1), d = O(e.textValue ?? ""), c = Se(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await ne(), !(g != null && g.defaultPrevented) && (a.value || (n.onValueChange(e.value), n.onOpenChange(!1)));
    }
    async function y(g) {
      var x;
      await ne(), !g.defaultPrevented && (a.value ? (x = o.onItemLeave) == null || x.call(o) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var x;
      await ne(), !g.defaultPrevented && g.currentTarget === Pe() && ((x = o.onItemLeave) == null || x.call(o));
    }
    async function h(g) {
      var x;
      await ne(), !(g.defaultPrevented || ((x = o.searchRef) == null ? void 0 : x.value) !== "" && g.key === " ") && (zh.includes(g.key) && p(), g.key === " " && g.preventDefault());
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ue(() => {
      l.value && o.itemRefCallback(
        l.value,
        e.value,
        e.disabled
      );
    }), Zh({
      value: e.value,
      disabled: a,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, x) => (v(), _(s(K), {
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
      as: g.as,
      "as-child": g.asChild,
      onFocus: x[0] || (x[0] = (B) => u.value = !0),
      onBlur: x[1] || (x[1] = (B) => u.value = !1),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = (B) => {
        B.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: x[3] || (x[3] = Ee(() => {
      }, ["prevent", "stop"])),
      onPointermove: y,
      onPointerleave: m,
      onKeydown: h
    }, {
      default: f(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), tg = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = Du();
    return (n, o) => s(a).isSelected.value ? (v(), _(s(K), S({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ae("", !0);
  }
}), [ag, ng] = ve("SelectGroup"), og = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Se(void 0, "radix-vue-select-group");
    return ng({ id: a }), (n, o) => (v(), _(s(K), S({ role: "group" }, e, { "aria-labelledby": s(a) }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), sg = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t, a = ag({ id: "" });
    return (n, o) => (v(), _(s(K), S(e, {
      id: s(a).id
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Su = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = ca(), n = pa(ja), o = Vh(), r = Du(), { forwardRef: l, currentElement: i } = H(), u = C(() => {
      var d;
      return Re("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return ue(() => {
      i.value && (r.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), o.onNativeOptionAdd(u.value));
    }), fo(() => {
      o.onNativeOptionRemove(u.value);
    }), (d, c) => (v(), N(oe, null, [
      A(s(K), S({
        id: s(r).textId,
        ref: s(l)
      }, { ...e, ...d.$attrs }, { "data-item-text": "" }), {
        default: f(() => [
          w(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(a).valueElement.value && !s(a).valueElementHasChildren.value ? (v(), _(sa, {
        key: 0,
        to: s(a).valueElement.value
      }, [
        w(d.$slots, "default")
      ], 8, ["to"])) : ae("", !0)
    ], 64));
  }
}), rg = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { nonce: a } = fe(e), n = rm(a), o = pa(ja), r = o.position === "item-aligned" ? Dr() : void 0, { forwardRef: l, currentElement: i } = H();
    ue(() => {
      o == null || o.onViewportChange(i.value);
    });
    const u = O(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: y, contentWrapper: m } = r ?? {};
      if (y != null && y.value && m != null && m.value) {
        const h = Math.abs(u.value - p.scrollTop);
        if (h > 0) {
          const g = window.innerHeight - at * 2, x = Number.parseFloat(
            m.value.style.minHeight
          ), B = Number.parseFloat(m.value.style.height), k = Math.max(x, B);
          if (k < g) {
            const $ = k + h, E = Math.min(g, $), D = $ - E;
            m.value.style.height = `${E}px`, m.value.style.bottom === "0px" && (p.scrollTop = D > 0 ? D : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (v(), N(oe, null, [
      A(s(K), S({
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
        default: f(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      A(s(K), {
        as: "style",
        nonce: s(n)
      }, {
        default: f(() => [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Pu = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(t, { emit: e }) {
    const a = e, { injectCollection: n } = Fa(), o = n(), r = pa(ja), l = O(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    ge(() => {
      const c = o.value.find(
        (p) => p === Pe()
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
    return fo(() => i()), (c, p) => {
      var y;
      return v(), _(s(K), S({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (y = c.$parent) == null ? void 0 : y.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: f(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), lg = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = pa(ja), a = e.position === "item-aligned" ? Dr() : void 0, { forwardRef: n, currentElement: o } = H(), r = O(!1);
    return ge((l) => {
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
    }), (l, i) => r.value ? (v(), _(Pu, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(e);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : ae("", !0);
  }
}), ig = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = pa(ja), a = e.position === "item-aligned" ? Dr() : void 0, { forwardRef: n, currentElement: o } = H(), r = O(!1);
    return ge((l) => {
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
    }), (l, i) => r.value ? (v(), _(Pu, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(e);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : ae("", !0);
  }
}), ug = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const { forwardRef: e, currentElement: a } = H(), n = ca(), o = jl();
    return Td(() => {
      var r;
      const l = !!wo((r = o == null ? void 0 : o.default) == null ? void 0 : r.call(o)).length;
      n.onValueElementHasChildrenChange(l);
    }), ue(() => {
      n.valueElement = a;
    }), (r, l) => (v(), _(s(K), {
      ref: s(e),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: f(() => {
        var i;
        return [
          s(Eu)((i = s(n).modelValue) == null ? void 0 : i.value) ? (v(), N(oe, { key: 0 }, [
            Z(re(r.placeholder), 1)
          ], 64)) : w(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), dg = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (v(), _(s(K), {
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
}), cg = /* @__PURE__ */ b({
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
    return (i, u) => (v(), _(s(K), S({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": o.value
    }, l.value), {
      default: f(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), pg = /* @__PURE__ */ b({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(cg, U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function fg(t = [], e, a) {
  const n = [...t];
  return n[a] = e, n.sort((o, r) => o - r);
}
function Ou(t, e, a) {
  const n = 100 / (a - e) * (t - e);
  return ao(n, 0, 100);
}
function vg(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function mg(t, e) {
  if (t.length === 1)
    return 0;
  const a = t.map((o) => Math.abs(o - e)), n = Math.min(...a);
  return a.indexOf(n);
}
function hg(t, e, a) {
  const n = t / 2, o = Sr([0, 50], [0, n]);
  return (n - o(e) * a) * a;
}
function gg(t) {
  return t.slice(0, -1).map((e, a) => t[a + 1] - e);
}
function yg(t, e) {
  if (e > 0) {
    const a = gg(t);
    return Math.min(...a) >= e;
  }
  return !0;
}
function Sr(t, e) {
  return (a) => {
    if (t[0] === t[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (a - t[0]);
  };
}
function bg(t) {
  return (String(t).split(".")[1] || "").length;
}
function _g(t, e) {
  const a = 10 ** e;
  return Math.round(t * a) / a;
}
const Au = ["PageUp", "PageDown"], Mu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Tu = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Iu, Ru] = ve(["SliderVertical", "SliderHorizontal"]), Vu = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Eo();
    return (r, l) => (v(), _(s(K), S({ "data-slider-impl": "" }, a, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : s(Au).concat(s(Mu)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wg = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: r, dir: l, inverted: i } = fe(a), { forwardRef: u, currentElement: d } = H(), c = O(), p = C(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function y(m) {
      const h = c.value || d.value.getBoundingClientRect(), g = [0, h.width], x = p.value ? [r.value, o.value] : [o.value, r.value], B = Sr(g, x);
      return c.value = h, B(m - h.left);
    }
    return Ru({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, h) => (v(), _(Vu, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: h[0] || (h[0] = (g) => {
        const x = y(g.clientX);
        n("slideStart", x);
      }),
      onSlideMove: h[1] || (h[1] = (g) => {
        const x = y(g.clientX);
        n("slideMove", x);
      }),
      onSlideEnd: h[2] || (h[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: h[3] || (h[3] = (g) => {
        const x = p.value ? "from-left" : "from-right", B = s(Tu)[x].includes(g.key);
        n("stepKeyDown", g, B ? -1 : 1);
      }),
      onEndKeyDown: h[4] || (h[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: h[5] || (h[5] = (g) => n("homeKeyDown", g))
    }, {
      default: f(() => [
        w(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), xg = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(t, { emit: e }) {
    const a = t, n = e, { max: o, min: r, inverted: l } = fe(a), { forwardRef: i, currentElement: u } = H(), d = O(), c = C(() => !l.value);
    function p(y) {
      const m = d.value || u.value.getBoundingClientRect(), h = [0, m.height], g = c.value ? [o.value, r.value] : [r.value, o.value], x = Sr(h, g);
      return d.value = m, x(y - m.top);
    }
    return Ru({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (y, m) => (v(), _(Vu, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (h) => {
        const g = p(h.clientY);
        n("slideStart", g);
      }),
      onSlideMove: m[1] || (m[1] = (h) => {
        const g = p(h.clientY);
        n("slideMove", g);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (h) => {
        const g = c.value ? "from-bottom" : "from-top", x = s(Tu)[g].includes(h.key);
        n("stepKeyDown", h, x ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: m[5] || (m[5] = (h) => n("homeKeyDown", h))
    }, {
      default: f(() => [
        w(y.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Cg = ["value", "name", "disabled", "step"], [Eo, $g] = ve("SliderRoot"), Bg = /* @__PURE__ */ b({
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
    const a = t, n = e, { min: o, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = fe(a), p = gt(c), { forwardRef: y, currentElement: m } = H(), h = mn(m);
    xr();
    const g = xe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), x = O(0), B = O(g.value);
    function k(P) {
      const L = mg(g.value, P);
      D(P, L);
    }
    function $(P) {
      D(P, x.value);
    }
    function E() {
      const P = B.value[x.value];
      g.value[x.value] !== P && n("valueCommit", Ld(g.value));
    }
    function D(P, L, { commit: F } = { commit: !1 }) {
      var M;
      const R = bg(l.value), V = _g(Math.round((P - o.value) / l.value) * l.value + o.value, R), j = ao(V, o.value, r.value), z = fg(g.value, j, L);
      if (yg(z, i.value * l.value)) {
        x.value = z.indexOf(j);
        const W = String(z) !== String(g.value);
        W && F && n("valueCommit", z), W && ((M = T.value[x.value]) == null || M.focus(), g.value = z);
      }
    }
    const T = O([]);
    return $g({
      modelValue: g,
      valueIndexToChangeRef: x,
      thumbElements: T,
      orientation: u,
      min: o,
      max: r,
      disabled: d
    }), (P, L) => (v(), N(oe, null, [
      A(s(Cr), null, {
        default: f(() => [
          (v(), _(Ke(s(u) === "horizontal" ? wg : xg), S(P.$attrs, {
            ref: s(y),
            "as-child": P.asChild,
            as: P.as,
            min: s(o),
            max: s(r),
            dir: s(p),
            inverted: P.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: L[0] || (L[0] = () => {
              s(d) || (B.value = s(g));
            }),
            onSlideStart: L[1] || (L[1] = (F) => !s(d) && k(F)),
            onSlideMove: L[2] || (L[2] = (F) => !s(d) && $(F)),
            onSlideEnd: L[3] || (L[3] = (F) => !s(d) && E()),
            onHomeKeyDown: L[4] || (L[4] = (F) => !s(d) && D(s(o), 0, { commit: !0 })),
            onEndKeyDown: L[5] || (L[5] = (F) => !s(d) && D(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: L[6] || (L[6] = (F, M) => {
              if (!s(d)) {
                const R = s(Au).includes(F.key) || F.shiftKey && s(Mu).includes(F.key) ? 10 : 1, V = x.value, j = s(g)[V], z = s(l) * R * M;
                D(j + z, V, { commit: !0 });
              }
            })
          }), {
            default: f(() => [
              w(P.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(h) ? (v(!0), N(oe, { key: 0 }, we(s(g), (F, M) => (v(), N("input", {
        key: M,
        value: F,
        type: "number",
        style: { display: "none" },
        name: P.name ? P.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, Cg))), 128)) : ae("", !0)
    ], 64));
  }
}), kg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Eo(), n = Iu(), { forwardRef: o, currentElement: r } = H(), l = C(() => {
      var m, h;
      return (h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h[e.index];
    }), i = C(() => l.value === void 0 ? 0 : Ou(l.value, a.min.value ?? 0, a.max.value ?? 100)), u = C(() => {
      var m, h;
      return vg(e.index, ((h = (m = a.modelValue) == null ? void 0 : m.value) == null ? void 0 : h.length) ?? 0);
    }), d = Qi(r), c = C(() => d[n.size].value), p = C(() => c.value ? hg(c.value, i.value, n.direction) : 0), y = dr();
    return ue(() => {
      a.thumbElements.value.push(r.value);
    }), Fe(() => {
      const m = a.thumbElements.value.findIndex((h) => h === r.value) ?? -1;
      a.thumbElements.value.splice(m, 1);
    }), (m, h) => (v(), _(s(ko), null, {
      default: f(() => [
        A(s(K), S(m.$attrs, {
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
            display: !s(y) && l.value === void 0 ? "none" : void 0
          },
          onFocus: h[0] || (h[0] = () => {
            s(a).valueIndexToChangeRef.value = m.index;
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
}), Eg = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { getItems: a } = $r(), { forwardRef: n, currentElement: o } = H(), r = C(() => o.value ? a().findIndex((l) => l.ref === o.value) : -1);
    return (l, i) => (v(), _(kg, S({ ref: s(n) }, e, { index: r.value }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Dg = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Eo();
    return H(), (a, n) => (v(), _(s(K), {
      "as-child": a.asChild,
      as: a.as,
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Sg = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Eo(), a = Iu();
    H();
    const n = C(() => {
      var l, i;
      return (i = (l = e.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => Ou(u, e.min.value, e.max.value)
      );
    }), o = C(() => e.modelValue.value.length > 1 ? Math.min(...n.value) : 0), r = C(() => 100 - Math.max(...n.value));
    return (l, i) => (v(), _(s(K), {
      "data-disabled": s(e).disabled.value ? "" : void 0,
      "data-orientation": s(e).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: vt({
        [s(a).startEdge]: `${o.value}%`,
        [s(a).endEdge]: `${r.value}%`
      })
    }, {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function Pg() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Pg();
const Og = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Ag, Mg] = ve("SwitchRoot"), Tg = /* @__PURE__ */ b({
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
    const a = t, n = e, { disabled: o } = fe(a), r = xe(a, "checked", n, {
      defaultValue: a.defaultChecked,
      passive: a.checked === void 0
    });
    function l() {
      o.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = H(), d = mn(u), c = C(() => {
      var p;
      return a.id && u.value ? (p = document.querySelector(`[for="${a.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Mg({
      checked: r,
      toggleCheck: l,
      disabled: o
    }), (p, y) => (v(), N(oe, null, [
      A(s(K), S(p.$attrs, {
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
        onKeydown: Me(Ee(l, ["prevent"]), ["enter"])
      }), {
        default: f(() => [
          w(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (v(), N("input", {
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
      }, null, 8, Og)) : ae("", !0)
    ], 64));
  }
}), Ig = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = Ag();
    return H(), (a, n) => {
      var o;
      return v(), _(s(K), {
        "data-state": (o = s(e).checked) != null && o.value ? "checked" : "unchecked",
        "data-disabled": s(e).disabled.value ? "" : void 0,
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
}), [Pr, Rg] = ve("TabsRoot"), Vg = /* @__PURE__ */ b({
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
    const a = t, n = e, { orientation: o, dir: r } = fe(a), l = gt(r);
    H();
    const i = xe(a, "modelValue", n, {
      defaultValue: a.defaultValue,
      passive: a.modelValue === void 0
    }), u = O();
    return Rg({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: o,
      dir: l,
      activationMode: a.activationMode,
      baseId: Se(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (v(), _(s(K), {
      dir: s(l),
      "data-orientation": s(o),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: f(() => [
        w(d.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), Fg = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { loop: a } = fe(e), { forwardRef: n, currentElement: o } = H(), r = Pr();
    return r.tabsList = o, (l, i) => (v(), _(s(gu), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(a)
    }, {
      default: f(() => [
        A(s(K), {
          ref: s(n),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": s(r).orientation.value
        }, {
          default: f(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Fu(t, e) {
  return `${t}-trigger-${e}`;
}
function Lu(t, e) {
  return `${t}-content-${e}`;
}
const Lg = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = H(), n = Pr(), o = C(() => Fu(n.baseId, e.value)), r = C(() => Lu(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value), i = O(l.value);
    return ue(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (v(), _(s(je), {
      present: l.value,
      "force-mount": ""
    }, {
      default: f(({ present: c }) => [
        A(s(K), {
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
          style: vt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: f(() => [
            u.forceMount || l.value ? w(u.$slots, "default", { key: 0 }) : ae("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ng = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a } = H(), n = Pr(), o = C(() => Fu(n.baseId, e.value)), r = C(() => Lu(n.baseId, e.value)), l = C(() => e.value === n.modelValue.value);
    return (i, u) => (v(), _(s(Cm), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: f(() => [
        A(s(K), {
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
          onMousedown: u[0] || (u[0] = Ee((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Me((d) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = s(n).activationMode !== "manual";
            !l.value && !i.disabled && d && s(n).changeModelValue(i.value);
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
}), [Do, zg] = ve("ToastProvider"), Kg = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(t) {
    const e = t, { label: a, duration: n, swipeDirection: o, swipeThreshold: r } = fe(e), l = O(), i = O(0), u = O(!1), d = O(!1);
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return zg({
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
}), Wg = "toast.swipeStart", Hg = "toast.swipeMove", Ug = "toast.swipeCancel", jg = "toast.swipeEnd", Cs = "toast.viewportPause", $s = "toast.viewportResume";
function On(t, e, a) {
  const n = a.originalEvent.currentTarget, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
function Bl(t, e, a = 0) {
  const n = Math.abs(t.x), o = Math.abs(t.y), r = n > o;
  return e === "left" || e === "right" ? r && n > a : !r && o > a;
}
function Gg(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function Nu(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && e.push(a.textContent), Gg(a)) {
      const n = a.ariaHidden || a.hidden || a.style.display === "none", o = a.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (o) {
          const r = a.dataset.radixToastAnnounceAlt;
          r && e.push(r);
        } else
          e.push(...Nu(a));
    }
  }), e;
}
const qg = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(t) {
    const e = Do(), a = nf(1e3), n = O(!1);
    return Ui(() => {
      n.value = !0;
    }), (o, r) => s(a) || n.value ? (v(), _(s(bn), { key: 0 }, {
      default: f(() => [
        Z(re(s(e).label.value) + " ", 1),
        w(o.$slots, "default")
      ]),
      _: 3
    })) : ae("", !0);
  }
}), [Yg, Jg] = ve("ToastRoot"), Qg = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o, currentElement: r } = H(), l = Do(), i = O(null), u = O(null), d = C(
      () => typeof a.duration == "number" ? a.duration : l.duration.value
    ), c = O(0), p = O(d.value), y = O(0), m = O(d.value), h = Ui(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - k, 0);
    }, { fpsLimit: 60 });
    function g(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || ht && (window.clearTimeout(y.value), c.value = (/* @__PURE__ */ new Date()).getTime(), y.value = window.setTimeout(x, k));
    }
    function x() {
      var k, $;
      (k = r.value) != null && k.contains(Pe()) && (($ = l.viewport.value) == null || $.focus()), l.isClosePausedRef.value = !1, n("close");
    }
    const B = C(() => r.value ? Nu(r.value) : null);
    if (a.type && !["foreground", "background"].includes(a.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return ge((k) => {
      const $ = l.viewport.value;
      if ($) {
        const E = () => {
          g(p.value), h.resume(), n("resume");
        }, D = () => {
          const T = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - T, window.clearTimeout(y.value), h.pause(), n("pause");
        };
        return $.addEventListener(Cs, D), $.addEventListener($s, E), () => {
          $.removeEventListener(Cs, D), $.removeEventListener($s, E);
        };
      }
    }), X(() => [a.open, d.value], () => {
      p.value = d.value, a.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), ur("Escape", (k) => {
      n("escapeKeyDown", k), k.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, x());
    }), ue(() => {
      l.onToastAdd();
    }), Fe(() => {
      l.onToastRemove();
    }), Jg({ onClose: x }), (k, $) => (v(), N(oe, null, [
      B.value ? (v(), _(qg, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: f(() => [
          Z(re(B.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ae("", !0),
      s(l).viewport.value ? (v(), _(sa, {
        key: 1,
        to: s(l).viewport.value
      }, [
        A(s(K), S({
          ref: s(o),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, k.$attrs, {
          as: k.as,
          "as-child": k.asChild,
          "data-state": k.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: $[0] || ($[0] = Ee((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (E) => {
            if (!i.value) return;
            const D = E.clientX - i.value.x, T = E.clientY - i.value.y, P = !!u.value, L = ["left", "right"].includes(s(l).swipeDirection.value), F = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, M = L ? F(0, D) : 0, R = L ? 0 : F(0, T), V = E.pointerType === "touch" ? 10 : 2, j = { x: M, y: R }, z = { originalEvent: E, delta: j };
            P ? (u.value = j, s(On)(s(Hg), (W) => n("swipeMove", W), z)) : s(Bl)(j, s(l).swipeDirection.value, V) ? (u.value = j, s(On)(s(Wg), (W) => n("swipeStart", W), z), E.target.setPointerCapture(E.pointerId)) : (Math.abs(D) > V || Math.abs(T) > V) && (i.value = null);
          }),
          onPointerup: $[2] || ($[2] = (E) => {
            const D = u.value, T = E.target;
            if (T.hasPointerCapture(E.pointerId) && T.releasePointerCapture(E.pointerId), u.value = null, i.value = null, D) {
              const P = E.currentTarget, L = { originalEvent: E, delta: D };
              s(Bl)(D, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(On)(s(jg), (F) => n("swipeEnd", F), L) : s(On)(s(Ug), (F) => n("swipeCancel", F), L), P == null || P.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: f(() => [
            w(k.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ae("", !0)
    ], 64));
  }
}), Xg = /* @__PURE__ */ b({
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
    const a = t, n = e, { forwardRef: o } = H(), r = xe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    return (l, i) => (v(), _(s(je), {
      present: l.forceMount || s(r)
    }, {
      default: f(() => [
        A(Qg, S({
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
          default: f(({ remaining: u, duration: d }) => [
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
}), zu = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    return (e, a) => (v(), _(s(K), {
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
}), Ku = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = Yg(), { forwardRef: n } = H();
    return (o, r) => (v(), _(zu, { "as-child": "" }, {
      default: f(() => [
        A(s(K), S(e, {
          ref: s(n),
          type: o.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => s(a).onClose())
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
}), Zg = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    if (!t.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = H();
    return (a, n) => a.altText ? (v(), _(zu, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: f(() => [
        A(Ku, {
          ref: s(e),
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
    }, 8, ["alt-text"])) : ae("", !0);
  }
}), kl = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(t, { emit: e }) {
    const a = e, n = Do();
    return (o, r) => (v(), _(s(bn), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (l) => {
        var i;
        const u = l.relatedTarget;
        !((i = s(n).viewport.value) != null && i.contains(u)) && a("focusFromOutsideViewport");
      })
    }, {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ey = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(t) {
    const e = t, { hotkey: a, label: n } = fe(e), { forwardRef: o, currentElement: r } = H(), { createCollection: l } = Fa(), i = l(r), u = Do(), d = C(() => u.toastCount.value > 0), c = O(), p = O(), y = C(() => a.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    ur(a.value, () => {
      r.value.focus();
    }), ue(() => {
      u.onViewportChange(r.value);
    }), ge((h) => {
      const g = r.value;
      if (d.value && g) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const D = new CustomEvent(Cs);
            g.dispatchEvent(D), u.isClosePausedRef.value = !0;
          }
        }, B = () => {
          if (u.isClosePausedRef.value) {
            const D = new CustomEvent($s);
            g.dispatchEvent(D), u.isClosePausedRef.value = !1;
          }
        }, k = (D) => {
          !g.contains(D.relatedTarget) && B();
        }, $ = () => {
          g.contains(Pe()) || B();
        }, E = (D) => {
          var T, P, L;
          const F = D.altKey || D.ctrlKey || D.metaKey;
          if (D.key === "Tab" && !F) {
            const M = Pe(), R = D.shiftKey;
            if (D.target === g && R) {
              (T = c.value) == null || T.focus();
              return;
            }
            const V = m({ tabbingDirection: R ? "backwards" : "forwards" }), j = V.findIndex((z) => z === M);
            Wn(V.slice(j + 1)) ? D.preventDefault() : R ? (P = c.value) == null || P.focus() : (L = p.value) == null || L.focus();
          }
        };
        g.addEventListener("focusin", x), g.addEventListener("focusout", k), g.addEventListener("pointermove", x), g.addEventListener("pointerleave", $), g.addEventListener("keydown", E), window.addEventListener("blur", x), window.addEventListener("focus", B), h(() => {
          g.removeEventListener("focusin", x), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", x), g.removeEventListener("pointerleave", $), g.removeEventListener("keydown", E), window.removeEventListener("blur", x), window.removeEventListener("focus", B);
        });
      }
    });
    function m({ tabbingDirection: h }) {
      const g = i.value.map((x) => {
        const B = [x, ...hr(x)];
        return h === "forwards" ? B : B.reverse();
      });
      return (h === "forwards" ? g.reverse() : g).flat();
    }
    return (h, g) => (v(), _(s(Zf), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", y.value) : s(n)(y.value),
      tabindex: "-1",
      style: vt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: f(() => [
        d.value ? (v(), _(kl, {
          key: 0,
          ref: (x) => {
            c.value = s(Qe)(x);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const x = m({
              tabbingDirection: "forwards"
            });
            s(Wn)(x);
          })
        }, null, 512)) : ae("", !0),
        A(s(K), S({
          ref: s(o),
          tabindex: "-1",
          as: h.as,
          "as-child": h.asChild
        }, h.$attrs), {
          default: f(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (v(), _(kl, {
          key: 1,
          ref: (x) => {
            p.value = s(Qe)(x);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const x = m({
              tabbingDirection: "backwards"
            });
            s(Wn)(x);
          })
        }, null, 512)) : ae("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), ty = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ay = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return H(), (a, n) => (v(), _(s(K), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wu = "tooltip.open", [Or, ny] = ve("TooltipProvider"), Hu = /* @__PURE__ */ b({
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
    const e = t, { delayDuration: a, skipDelayDuration: n, disableHoverableContent: o, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = fe(e);
    H();
    const u = O(!0), d = O(!1), { start: c, stop: p } = ir(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return ny({
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
    }), (y, m) => w(y.$slots, "default");
  }
}), [So, oy] = ve("TooltipRoot"), sy = /* @__PURE__ */ b({
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
    H();
    const o = Or(), r = C(() => a.disableHoverableContent ?? o.disableHoverableContent.value), l = C(() => a.disableClosingTrigger ?? o.disableClosingTrigger.value), i = C(() => a.disabled ?? o.disabled.value), u = C(() => a.delayDuration ?? o.delayDuration.value), d = C(() => a.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), c = xe(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    X(c, ($) => {
      o.onClose && ($ ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Wu))) : o.onClose());
    });
    const p = O(!1), y = O(), m = C(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: h, stop: g } = ir(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function x() {
      g(), p.value = !1, c.value = !0;
    }
    function B() {
      g(), c.value = !1;
    }
    function k() {
      h();
    }
    return oy({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: y,
      onTriggerChange($) {
        y.value = $;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? k() : x();
      },
      onTriggerLeave() {
        r.value ? B() : g();
      },
      onOpen: x,
      onClose: B,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), ($, E) => (v(), _(s(Ka), null, {
      default: f(() => [
        w($.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), ry = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = So(), n = Or();
    a.contentId || (a.contentId = Se(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: o, currentElement: r } = H(), l = O(!1), i = O(!1), u = C(() => a.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: p,
      pointerleave: y,
      pointerdown: c,
      blur: h
    });
    ue(() => {
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
    function y() {
      a.onTriggerLeave(), i.value = !1;
    }
    function m(x) {
      var B, k;
      l.value || a.ignoreNonKeyboardFocus.value && !((k = (B = x.target).matches) != null && k.call(B, ":focus-visible")) || a.onOpen();
    }
    function h() {
      a.onClose();
    }
    function g() {
      a.disableClosingTrigger.value || a.onClose();
    }
    return (x, B) => (v(), _(s(Bo), { "as-child": "" }, {
      default: f(() => [
        A(s(K), S({
          ref: s(o),
          "aria-describedby": s(a).open.value ? s(a).contentId : void 0,
          "data-state": s(a).stateAttribute.value,
          as: x.as,
          "as-child": e.asChild,
          "data-grace-area-trigger": ""
        }, Id(u.value)), {
          default: f(() => [
            w(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Uu = /* @__PURE__ */ b({
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
    const a = t, n = e, o = So(), { forwardRef: r } = H(), l = jl(), i = C(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = C(() => {
      var c;
      if (a.ariaLabel)
        return a.ariaLabel;
      let p = "";
      function y(m) {
        typeof m.children == "string" && m.type !== Fs ? p += m.children : Array.isArray(m.children) && m.children.forEach((h) => y(h));
      }
      return (c = i.value) == null || c.forEach((m) => y(m)), p;
    }), d = C(() => {
      const { ariaLabel: c, ...p } = a;
      return p;
    });
    return ue(() => {
      Ma(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(o.trigger.value) && o.onClose();
      }), Ma(window, Wu, o.onClose);
    }), (c, p) => (v(), _(s(Na), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (y) => n("escapeKeyDown", y)),
      onPointerDownOutside: p[1] || (p[1] = (y) => {
        var m;
        s(o).disableClosingTrigger.value && (m = s(o).trigger.value) != null && m.contains(y.target) && y.preventDefault(), n("pointerDownOutside", y);
      }),
      onFocusOutside: p[2] || (p[2] = Ee(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (y) => s(o).onClose())
    }, {
      default: f(() => [
        A(s(Ta), S({
          ref: s(r),
          "data-state": s(o).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: f(() => [
            w(c.$slots, "default"),
            A(s(bn), {
              id: s(o).contentId,
              role: "tooltip"
            }, {
              default: f(() => [
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
}), ly = /* @__PURE__ */ b({
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
    const e = me(t), { forwardRef: a, currentElement: n } = H(), { trigger: o, onClose: r } = So(), l = Or(), { isPointerInTransit: i, onPointerExit: u } = gf(o, n);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (v(), _(Uu, S({ ref: s(a) }, s(e)), {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iy = /* @__PURE__ */ b({
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
    const a = t, n = e, o = So(), r = de(a, n), { forwardRef: l } = H();
    return (i, u) => (v(), _(s(je), {
      present: i.forceMount || s(o).open.value
    }, {
      default: f(() => [
        (v(), _(Ke(s(o).disableHoverableContent.value ? Uu : ly), S({ ref: s(l) }, s(r)), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), uy = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(gn), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ax = /* @__PURE__ */ b({
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
    const o = de(t, e);
    return (r, l) => (v(), _(s(Kf), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ju(t) {
  var e, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = ju(t[e])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Gu() {
  for (var t, e, a = 0, n = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = ju(t)) && (n && (n += " "), n += e);
  return n;
}
const Ar = "-", dy = (t) => {
  const e = py(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Ar);
      return i[0] === "" && i.length !== 1 && i.shift(), qu(i, e) || cy(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = a[l] || [];
      return i && n[l] ? [...u, ...n[l]] : u;
    }
  };
}, qu = (t, e) => {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  const a = t[0], n = e.nextPart.get(a), o = n ? qu(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const r = t.join(Ar);
  return (l = e.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, El = /^\[(.+)\]$/, cy = (t) => {
  if (El.test(t)) {
    const e = El.exec(t)[1], a = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, py = (t) => {
  const {
    theme: e,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vy(Object.entries(t.classGroups), a).forEach(([r, l]) => {
    Bs(l, n, r, e);
  }), n;
}, Bs = (t, e, a, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const r = o === "" ? e : Dl(e, o);
      r.classGroupId = a;
      return;
    }
    if (typeof o == "function") {
      if (fy(o)) {
        Bs(o(n), e, a, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: a
      });
      return;
    }
    Object.entries(o).forEach(([r, l]) => {
      Bs(l, Dl(e, r), a, n);
    });
  });
}, Dl = (t, e) => {
  let a = t;
  return e.split(Ar).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, fy = (t) => t.isThemeGetter, vy = (t, e) => e ? t.map(([a, n]) => {
  const o = n.map((r) => typeof r == "string" ? e + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [e + l, i])) : r);
  return [a, o];
}) : t, my = (t) => {
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
}, Yu = "!", hy = (t) => {
  const {
    separator: e,
    experimentalParseClassName: a
  } = t, n = e.length === 1, o = e[0], r = e.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let x = 0; x < i.length; x++) {
      let B = i[x];
      if (d === 0) {
        if (B === o && (n || i.slice(x, x + r) === e)) {
          u.push(i.slice(c, x)), c = x + r;
          continue;
        }
        if (B === "/") {
          p = x;
          continue;
        }
      }
      B === "[" ? d++ : B === "]" && d--;
    }
    const y = u.length === 0 ? i : i.substring(c), m = y.startsWith(Yu), h = m ? y.substring(1) : y, g = p && p > c ? p - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: l
  }) : l;
}, gy = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...a.sort(), n), a = []) : a.push(n);
  }), e.push(...a.sort()), e;
}, yy = (t) => ({
  cache: my(t.cacheSize),
  parseClassName: hy(t),
  ...dy(t)
}), by = /\s+/, _y = (t, e) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, r = [], l = t.trim().split(by);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: m
    } = a(d);
    let h = !!m, g = n(h ? y.substring(0, m) : y);
    if (!g) {
      if (!h) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(y), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const x = gy(c).join(":"), B = p ? x + Yu : x, k = B + g;
    if (r.includes(k))
      continue;
    r.push(k);
    const $ = o(g, h);
    for (let E = 0; E < $.length; ++E) {
      const D = $[E];
      r.push(B + D);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function wy() {
  let t = 0, e, a, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (a = Ju(e)) && (n && (n += " "), n += a);
  return n;
}
const Ju = (t) => {
  if (typeof t == "string")
    return t;
  let e, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Ju(t[n])) && (a && (a += " "), a += e);
  return a;
};
function xy(t, ...e) {
  let a, n, o, r = l;
  function l(u) {
    const d = e.reduce((c, p) => p(c), t());
    return a = yy(d), n = a.cache.get, o = a.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = n(u);
    if (d)
      return d;
    const c = _y(u, a);
    return o(u, c), c;
  }
  return function() {
    return r(wy.apply(null, arguments));
  };
}
const Be = (t) => {
  const e = (a) => a[t] || [];
  return e.isThemeGetter = !0, e;
}, Qu = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cy = /^\d+\/\d+$/, $y = /* @__PURE__ */ new Set(["px", "full", "screen"]), By = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ky = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ey = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Dy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, bt = (t) => Ea(t) || $y.has(t) || Cy.test(t), Vt = (t) => Ga(t, "length", Vy), Ea = (t) => !!t && !Number.isNaN(Number(t)), Zo = (t) => Ga(t, "number", Ea), Ja = (t) => !!t && Number.isInteger(Number(t)), Py = (t) => t.endsWith("%") && Ea(t.slice(0, -1)), ce = (t) => Qu.test(t), Ft = (t) => By.test(t), Oy = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ay = (t) => Ga(t, Oy, Xu), My = (t) => Ga(t, "position", Xu), Ty = /* @__PURE__ */ new Set(["image", "url"]), Iy = (t) => Ga(t, Ty, Ly), Ry = (t) => Ga(t, "", Fy), Qa = () => !0, Ga = (t, e, a) => {
  const n = Qu.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : a(n[2]) : !1;
}, Vy = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ky.test(t) && !Ey.test(t)
), Xu = () => !1, Fy = (t) => Dy.test(t), Ly = (t) => Sy.test(t), Ny = () => {
  const t = Be("colors"), e = Be("spacing"), a = Be("blur"), n = Be("brightness"), o = Be("borderColor"), r = Be("borderRadius"), l = Be("borderSpacing"), i = Be("borderWidth"), u = Be("contrast"), d = Be("grayscale"), c = Be("hueRotate"), p = Be("invert"), y = Be("gap"), m = Be("gradientColorStops"), h = Be("gradientColorStopPositions"), g = Be("inset"), x = Be("margin"), B = Be("opacity"), k = Be("padding"), $ = Be("saturate"), E = Be("scale"), D = Be("sepia"), T = Be("skew"), P = Be("space"), L = Be("translate"), F = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", ce, e], V = () => [ce, e], j = () => ["", bt, Vt], z = () => ["auto", Ea, ce], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Q = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", ce], ie = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], pe = () => [Ea, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qa],
      spacing: [bt, Vt],
      blur: ["none", "", Ft, ce],
      brightness: pe(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ft, ce],
      borderSpacing: V(),
      borderWidth: j(),
      contrast: pe(),
      grayscale: Y(),
      hueRotate: pe(),
      invert: Y(),
      gap: V(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Py, Vt],
      inset: R(),
      margin: R(),
      opacity: pe(),
      padding: V(),
      saturate: pe(),
      scale: pe(),
      sepia: Y(),
      skew: pe(),
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
        columns: [Ft]
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
        object: [...W(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
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
        z: ["auto", Ja, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: R()
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
        order: ["first", "last", "none", Ja, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qa]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ja, ce]
        }, ce]
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
        "grid-rows": [Qa]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ja, ce]
        }, ce]
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
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
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
        "space-x": [P]
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
        "space-y": [P]
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
          screen: [Ft]
        }, Ft]
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
        text: ["base", Ft, Vt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Zo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qa]
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
        "line-clamp": ["none", Ea, Zo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", bt, ce]
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
        "placeholder-opacity": [B]
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
        "text-opacity": [B]
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
        decoration: ["auto", "from-font", bt, Vt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", bt, ce]
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
        "bg-opacity": [B]
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
        bg: [...W(), My]
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
        bg: ["auto", "cover", "contain", Ay]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Iy]
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
        "border-opacity": [B]
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
        "divide-opacity": [B]
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
        "outline-offset": [bt, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [bt, Vt]
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
        "ring-opacity": [B]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [bt, Vt]
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
        shadow: ["", "inner", "none", Ft, Ry]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qa]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [B]
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
        "drop-shadow": ["", "none", Ft, ce]
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
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
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
        "backdrop-opacity": [B]
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
        "backdrop-sepia": [D]
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
        rotate: [Ja, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
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
        stroke: [bt, Vt, Zo]
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
}, zy = /* @__PURE__ */ xy(Ny);
function I(...t) {
  return zy(Gu(t));
}
const nx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(Uf), S(a.value, { class: "text-accordion-text data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all" }), {
      default: f(() => [
        he("div", {
          class: G(s(I)("pb-4 pt-0", e.class))
        }, [
          w(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), ox = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Hf), S(s(n), {
      class: s(I)("border-accordion-border border-b", e.class)
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
const Ky = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var An = {
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
const Wy = ({ size: t, strokeWidth: e = 2, absoluteStrokeWidth: a, color: n, iconNode: o, name: r, class: l, ...i }, { slots: u }) => Re(
  "svg",
  {
    ...An,
    width: t || An.width,
    height: t || An.height,
    stroke: n || An.stroke,
    "stroke-width": a ? Number(e) * 24 / Number(t) : e,
    class: ["lucide", `lucide-${Ky(r ?? "icon")}`],
    ...i
  },
  [...o.map((d) => Re(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = (t, e) => (a, { slots: n }) => Re(
  Wy,
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
const Hy = Te("CalendarIcon", [
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
const Mr = Te("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = Te("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = Te("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = Te("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = Te("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = Te("ChevronsLeftIcon", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = Te("ChevronsRightIcon", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = Te("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = Te("EllipsisIcon", [
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
const Jy = Te("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = Te("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = Te("MoveLeftIcon", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = Te("MoveRightIcon", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = Te("PanelLeftIcon", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tb = Te("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ab = Te("SunIcon", [
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
const Oo = Te("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), sx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(jf), { class: "flex" }, {
      default: f(() => [
        A(s(Gf), S(a.value, {
          class: s(I)(
            "text-heading flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
            e.class
          )
        }), {
          default: f(() => [
            w(n.$slots, "default"),
            w(n.$slots, "icon", {}, () => [
              A(s(Po), { class: "size-4 shrink-0 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Sl = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Pl = Gu, jt = (t, e) => (a) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return Pl(t, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
  const { variants: o, defaultVariants: r } = e, l = Object.keys(o).map((d) => {
    const c = a == null ? void 0 : a[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const y = Sl(c) || Sl(p);
    return o[d][y];
  }), i = a && Object.entries(a).reduce((d, c) => {
    let [p, y] = c;
    return y === void 0 || (d[p] = y), d;
  }, {}), u = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, c) => {
    let { class: p, className: y, ...m } = c;
    return Object.entries(m).every((h) => {
      let [g, x] = h;
      return Array.isArray(x) ? x.includes({
        ...r,
        ...i
      }[g]) : {
        ...r,
        ...i
      }[g] === x;
    }) ? [
      ...d,
      p,
      y
    ] : d;
  }, []);
  return Pl(t, l, u, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
}, rx = /* @__PURE__ */ b({
  __name: "Alert",
  props: {
    class: {},
    variant: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      "data-slot": "alert",
      class: G(s(I)(s(nb)({ variant: a.variant }), e.class)),
      role: "alert"
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), lx = /* @__PURE__ */ b({
  __name: "AlertDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      "data-slot": "alert-description",
      class: G(s(I)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), ix = /* @__PURE__ */ b({
  __name: "AlertTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      "data-slot": "alert-title",
      class: G(s(I)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), nb = jt(
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
function Ir(t) {
  return t ? t.flatMap((e) => e.type === oe ? Ir(e.children) : [e]) : [];
}
const ks = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: a }) {
    return () => {
      var u;
      if (!a.default)
        return null;
      const n = Ir(a.default()), o = n.findIndex((d) => d.type !== Fs);
      if (o === -1)
        return n;
      const r = n[o];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? S(e, r.props) : e, i = Yl({ ...r, props: {} }, l);
      return n.length === 1 ? i : (n[o] = i, n);
    };
  }
}), ob = ["area", "img", "input"], _e = b({
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
    return typeof n == "string" && ob.includes(n) ? () => Re(n, e) : n !== "template" ? () => Re(t.as, e, { default: a.default }) : () => Re(ks, e, { default: a.default });
  }
}), ed = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return (e, a) => (v(), _(s(_e), {
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
function sb(t, e) {
  var a;
  const n = Bt();
  return ge(() => {
    n.value = t();
  }, {
    ...e,
    flush: (a = void 0) != null ? a : "sync"
  }), Ra(n);
}
function xn(t) {
  return uo() ? (co(t), !0) : !1;
}
function Hn() {
  const t = /* @__PURE__ */ new Set(), e = (r) => {
    t.delete(r);
  };
  return {
    on: (r) => {
      t.add(r);
      const l = () => e(r);
      return xn(l), {
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
function rb(t) {
  let e = 0, a, n;
  const o = () => {
    e -= 1, n && e <= 0 && (n.stop(), a = void 0, n = void 0);
  };
  return (...r) => (e += 1, n || (n = Ks(!0), a = n.run(() => t(...r))), xn(o), a);
}
function lb(t) {
  if (!We(t))
    return aa(t);
  const e = new Proxy({}, {
    get(a, n, o) {
      return s(Reflect.get(t.value, n, o));
    },
    set(a, n, o) {
      return We(t.value[n]) && !We(o) ? t.value[n].value = o : t.value[n] = o, !0;
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
  return aa(e);
}
function ib(t) {
  return lb(C(t));
}
function ub(t, ...e) {
  const a = e.flat(), n = a[0];
  return ib(() => Object.fromEntries(typeof n == "function" ? Object.entries(fe(t)).filter(([o, r]) => !n(Ce(r), o)) : Object.entries(fe(t)).filter((o) => !a.includes(o[0]))));
}
const pt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const db = (t) => typeof t < "u", cb = Object.prototype.toString, pb = (t) => cb.call(t) === "[object Object]", Ol = () => {
}, Al = /* @__PURE__ */ fb();
function fb() {
  var t, e;
  return pt && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vb(t, e) {
  function a(...n) {
    return new Promise((o, r) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(r);
    });
  }
  return a;
}
function mb(t, e = {}) {
  let a, n, o = Ol;
  const r = (u) => {
    clearTimeout(u), o(), o = Ol;
  };
  let l;
  return (u) => {
    const d = Ce(t), c = Ce(e.maxWait);
    return a && r(a), d <= 0 || c !== void 0 && c <= 0 ? (n && (r(n), n = null), Promise.resolve(u())) : new Promise((p, y) => {
      o = e.rejectOnCancel ? y : p, l = u, c && !n && (n = setTimeout(() => {
        a && r(a), n = null, p(l());
      }, c)), a = setTimeout(() => {
        n && r(n), n = null, p(u());
      }, d);
    });
  };
}
function hb(t) {
  return Oe();
}
function es(t) {
  return Array.isArray(t) ? t : [t];
}
function Ao(t, e = 1e4) {
  return Ls((a, n) => {
    let o = Ce(t), r;
    const l = () => setTimeout(() => {
      o = Ce(t), n();
    }, Ce(e));
    return xn(() => {
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
function gb(t, e = 200, a = {}) {
  return vb(
    mb(e, a),
    t
  );
}
const yb = Ce;
function bb(t, e) {
  hb() && fo(t, e);
}
function _b(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const Mo = pt ? window : void 0;
function ft(t) {
  var e;
  const a = Ce(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function td(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = C(() => {
    const i = es(Ce(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = _b(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => ft(d))) != null ? u : [Mo].filter((d) => d != null),
        es(Ce(o.value ? t[1] : t[0])),
        es(s(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ce(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, d, c]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = pb(c) ? { ...c } : c;
      e.push(
        ...i.flatMap(
          (y) => u.flatMap(
            (m) => d.map((h) => n(y, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), a();
  };
  return xn(a), l;
}
function ad() {
  const t = Bt(!1), e = Oe();
  return e && ue(() => {
    t.value = !0;
  }, e), t;
}
function wb(t) {
  const e = ad();
  return C(() => (e.value, !!t()));
}
function xb(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function Cb(...t) {
  let e, a, n = {};
  t.length === 3 ? (e = t[0], a = t[1], n = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, a = t[0], n = t[1]) : (e = t[0], a = t[1]) : (e = !0, a = t[0]);
  const {
    target: o = Mo,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = xb(e);
  return td(o, r, (c) => {
    c.repeat && Ce(i) || u(c) && a(c);
  }, l);
}
function $b(t) {
  return JSON.parse(JSON.stringify(t));
}
function so(t, e, a = {}) {
  const { window: n = Mo, ...o } = a;
  let r;
  const l = wb(() => n && "ResizeObserver" in n), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = C(() => {
    const p = Ce(t);
    return Array.isArray(p) ? p.map((y) => ft(y)) : [ft(p)];
  }), d = X(
    u,
    (p) => {
      if (i(), l.value && n) {
        r = new ResizeObserver(e);
        for (const y of p)
          y && r.observe(y, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return xn(c), {
    isSupported: l,
    stop: c
  };
}
function Ia(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: y
  } = n, m = Oe(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  e || (e = "modelValue"), g = g || `update:${e.toString()}`;
  const x = ($) => i ? typeof i == "function" ? i($) : $b($) : $, B = () => db(t[e]) ? x(t[e]) : p, k = ($) => {
    y ? y($) && h(g, $) : h(g, $);
  };
  if (u) {
    const $ = B(), E = O($);
    let D = !1;
    return X(
      () => t[e],
      (T) => {
        D || (D = !0, E.value = x(T), ne(() => D = !1));
      }
    ), X(
      E,
      (T) => {
        !D && (T !== t[e] || c) && k(T);
      },
      { deep: c }
    ), E;
  } else
    return C({
      get() {
        return B();
      },
      set($) {
        k($);
      }
    });
}
function Xe(t, e) {
  const a = typeof t == "string" && !e ? `${t}Context` : e, n = Symbol(a);
  return [(l) => {
    const i = dn(n, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(
        ", "
      )}` : `\`${t}\``}`
    );
  }, (l) => (mo(n, l), l)];
}
function Ml(t) {
  return typeof t == "string" ? `'${t}'` : new Bb().serialize(t);
}
const Bb = /* @__PURE__ */ function() {
  var e;
  class t {
    constructor() {
      Wr(this, e, /* @__PURE__ */ new Map());
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
      let o = qa(this, e).get(n);
      return o === void 0 && (qa(this, e).set(n, `#${qa(this, e).size}`), o = this.serializeObject(n), qa(this, e).set(n, o)), o;
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
function Es(t, e) {
  return t === e || Ml(t) === Ml(e);
}
const [To, ux] = Xe("ConfigProvider");
function Rr(t) {
  const e = To({
    dir: O("ltr")
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.dir) == null ? void 0 : a.value) || "ltr";
  });
}
function ke() {
  const t = Oe(), e = O(), a = C(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = e.value) == null ? void 0 : l.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : ft(e);
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
const kb = ["INPUT", "TEXTAREA"];
function nd(t, e, a, n = {}) {
  if (!e || n.enableIgnoredElement && kb.includes(e.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: r = "[data-reka-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = n, [p, y, m, h, g, x] = [
    t.key === "ArrowRight",
    t.key === "ArrowLeft",
    t.key === "ArrowUp",
    t.key === "ArrowDown",
    t.key === "Home",
    t.key === "End"
  ], B = m || h, k = p || y;
  if (!g && !x && (!B && !k || o === "vertical" && k || o === "horizontal" && B))
    return null;
  const $ = l;
  if (!$.length)
    return null;
  d && t.preventDefault();
  let E = null;
  return k || B ? E = od($, e, {
    goForward: B ? h : u === "ltr" ? p : y,
    loop: i
  }) : g ? E = $.at(0) || null : x && (E = $.at(-1) || null), c && (E == null || E.focus()), E;
}
function od(t, e, a, n = t.length) {
  if (--n === 0)
    return null;
  const o = t.indexOf(e), r = a.goForward ? o + 1 : o - 1;
  if (!a.loop && (r < 0 || r >= t.length))
    return null;
  const l = (r + t.length) % t.length, i = t[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? od(
    t,
    i,
    a,
    n
  ) : i : null;
}
let Eb = 0;
function Gt(t, e = "reka") {
  var n;
  if (t)
    return t;
  const a = To({ useId: void 0 });
  return Object.hasOwn(xa, "useId") ? `${e}-${(n = xa.useId) == null ? void 0 : n.call(xa)}` : a.useId ? `${e}-${a.useId()}` : `${e}-${++Eb}`;
}
function Db(t, e) {
  const a = O(t);
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
function Sb(t, e) {
  var x;
  const a = O({}), n = O("none"), o = O(t), r = t.value ? "mounted" : "unmounted";
  let l;
  const i = ((x = e.value) == null ? void 0 : x.ownerDocument.defaultView) ?? Mo, { state: u, dispatch: d } = Db(r, {
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
  }), c = (B) => {
    var k;
    if (pt) {
      const $ = new CustomEvent(B, { bubbles: !1, cancelable: !1 });
      (k = e.value) == null || k.dispatchEvent($);
    }
  };
  X(
    t,
    async (B, k) => {
      var E;
      const $ = k !== B;
      if (await ne(), $) {
        const D = n.value, T = Mn(e.value);
        B ? (d("MOUNT"), c("enter"), T === "none" && c("after-enter")) : T === "none" || T === "undefined" || ((E = a.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : k && D !== T ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (B) => {
    const k = Mn(e.value), $ = k.includes(
      B.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if (B.target === e.value && $ && (c(`after-${E}`), d("ANIMATION_END"), !o.value)) {
      const D = e.value.style.animationFillMode;
      e.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var T;
        ((T = e.value) == null ? void 0 : T.style.animationFillMode) === "forwards" && (e.value.style.animationFillMode = D);
      });
    }
    B.target === e.value && k === "none" && d("ANIMATION_END");
  }, y = (B) => {
    B.target === e.value && (n.value = Mn(e.value));
  }, m = X(
    e,
    (B, k) => {
      B ? (a.value = getComputedStyle(B), B.addEventListener("animationstart", y), B.addEventListener("animationcancel", p), B.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), k == null || k.removeEventListener("animationstart", y), k == null || k.removeEventListener("animationcancel", p), k == null || k.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), h = X(u, () => {
    const B = Mn(e.value);
    n.value = u.value === "mounted" ? B : "none";
  });
  return Fe(() => {
    m(), h();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Mn(t) {
  return t && getComputedStyle(t).animationName || "none";
}
const Io = b({
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
    const { present: n, forceMount: o } = fe(t), r = O(), { isPresent: l } = Sb(n, r);
    a({ present: l });
    let i = e.default({ present: l.value });
    i = Ir(i || []);
    const u = Oe();
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
    return () => o.value || n.value || l.value ? Re(e.default({ present: l.value })[0], {
      ref: (c) => {
        const p = ft(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
});
function Pb(t) {
  const e = Oe(), a = e == null ? void 0 : e.type.emits, n = {};
  return a != null && a.length || console.warn(
    `No emitted event found. Please check component: ${e == null ? void 0 : e.type.__name}`
  ), a == null || a.forEach((o) => {
    n[ql(po(o))] = (...r) => t(o, ...r);
  }), n;
}
function ta() {
  let t = document.activeElement;
  if (t == null)
    return null;
  for (; t != null && t.shadowRoot != null && t.shadowRoot.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Vr(t, e, a) {
  const n = a.originalEvent.target, o = new CustomEvent(t, {
    bubbles: !1,
    cancelable: !0,
    detail: a
  });
  e && n.addEventListener(t, e, { once: !0 }), n.dispatchEvent(o);
}
const Ob = "dismissableLayer.pointerDownOutside", Ab = "dismissableLayer.focusOutside";
function sd(t, e) {
  const a = e.closest(
    "[data-dismissable-layer]"
  ), n = t.dataset.dismissableLayer === "" ? t : t.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    t.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(a && (n === a || o.indexOf(n) < o.indexOf(a)));
}
function Mb(t, e, a = !0) {
  var l;
  const n = ((l = e == null ? void 0 : e.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1), r = O(() => {
  });
  return ge((i) => {
    if (!pt || !Ce(a))
      return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(e != null && e.value) || !p)) {
        if (sd(e.value, p)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let y = function() {
            Vr(
              Ob,
              t,
              m
            );
          };
          const m = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = y, n.addEventListener("click", r.value, {
            once: !0
          })) : y();
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
      Ce(a) && (o.value = !0);
    }
  };
}
function Tb(t, e, a = !0) {
  var r;
  const n = ((r = e == null ? void 0 : e.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1);
  return ge((l) => {
    if (!pt || !Ce(a))
      return;
    const i = async (u) => {
      if (!(e != null && e.value))
        return;
      await ne(), await ne();
      const d = u.target;
      !e.value || !d || sd(e.value, d) || u.target && !o.value && Vr(
        Ab,
        t,
        { originalEvent: u }
      );
    };
    n.addEventListener("focusin", i), l(() => n.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Ce(a) && (o.value = !0);
    },
    onBlurCapture: () => {
      Ce(a) && (o.value = !1);
    }
  };
}
const _t = aa({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), rd = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(t, { emit: e }) {
    const a = t, n = e, { forwardRef: o, currentElement: r } = ke(), l = C(
      () => {
        var h;
        return ((h = r.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => _t.layersRoot), u = C(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = C(() => _t.layersWithOutsidePointerEventsDisabled.size > 0), c = C(() => {
      const h = Array.from(i.value), [g] = [..._t.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(g);
      return u.value >= x;
    }), p = Mb(async (h) => {
      const g = [..._t.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      );
      !c.value || g || (n("pointerDownOutside", h), n("interactOutside", h), await ne(), h.defaultPrevented || n("dismiss"));
    }, r), y = Tb((h) => {
      [..._t.branches].some(
        (x) => x == null ? void 0 : x.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, r);
    Cb("Escape", (h) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return ge((h) => {
      r.value && (a.disableOutsidePointerEvents && (_t.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), _t.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), h(() => {
        a.disableOutsidePointerEvents && _t.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), ge((h) => {
      h(() => {
        r.value && (i.value.delete(r.value), _t.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (h, g) => (v(), _(s(_e), {
      ref: s(o),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: vt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(y).onFocusCapture,
      onBlurCapture: s(y).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: f(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var Ib = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, _a = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), In = {}, ts = 0, ld = function(t) {
  return t && (t.host || ld(t.parentNode));
}, Rb = function(t, e) {
  return e.map(function(a) {
    if (t.contains(a))
      return a;
    var n = ld(a);
    return n && t.contains(n) ? n : (console.error("aria-hidden", a, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(a) {
    return !!a;
  });
}, Vb = function(t, e, a, n) {
  var o = Rb(e, Array.isArray(t) ? t : [t]);
  In[a] || (In[a] = /* @__PURE__ */ new WeakMap());
  var r = In[a], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(y) {
      if (i.has(y))
        c(y);
      else
        try {
          var m = y.getAttribute(n), h = m !== null && m !== "false", g = (_a.get(y) || 0) + 1, x = (r.get(y) || 0) + 1;
          _a.set(y, g), r.set(y, x), l.push(y), g === 1 && h && Tn.set(y, !0), x === 1 && y.setAttribute(a, "true"), h || y.setAttribute(n, "true");
        } catch (B) {
          console.error("aria-hidden: cannot operate on ", y, B);
        }
    });
  };
  return c(e), i.clear(), ts++, function() {
    l.forEach(function(p) {
      var y = _a.get(p) - 1, m = r.get(p) - 1;
      _a.set(p, y), r.set(p, m), y || (Tn.has(p) || p.removeAttribute(n), Tn.delete(p)), m || p.removeAttribute(a);
    }), ts--, ts || (_a = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), In = {});
  };
}, Fb = function(t, e, a) {
  a === void 0 && (a = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Ib(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), Vb(n, o, a, "aria-hidden")) : function() {
    return null;
  };
};
function Lb(t) {
  let e;
  X(() => ft(t), (a) => {
    a ? e = Fb(a) : e && e();
  }), Fe(() => {
    e && e();
  });
}
function as(t) {
  if (t === null || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0;
}
function Ds(t, e, a = ".", n) {
  if (!as(e))
    return Ds(t, {}, a, n);
  const o = Object.assign({}, e);
  for (const r in t) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = t[r];
    l != null && (n && n(o, r, l, a) || (Array.isArray(l) && Array.isArray(o[r]) ? o[r] = [...l, ...o[r]] : as(l) && as(o[r]) ? o[r] = Ds(
      l,
      o[r],
      (a ? `${a}.` : "") + r.toString(),
      n
    ) : o[r] = l));
  }
  return o;
}
function Nb(t) {
  return (...e) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    e.reduce((a, n) => Ds(a, n, "", t), {})
  );
}
const zb = Nb(), Kb = rb(() => {
  const t = O(/* @__PURE__ */ new Map()), e = O(), a = C(() => {
    for (const l of t.value.values())
      if (l)
        return !0;
    return !1;
  }), n = To({
    scrollBody: O(!0)
  });
  let o = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", Al && (o == null || o()), e.value = void 0;
  };
  return X(a, (l, i) => {
    var p;
    if (!pt)
      return;
    if (!l) {
      i && r();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? zb({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Al && (o = td(
      document,
      "touchmove",
      (y) => Hb(y),
      { passive: !1 }
    )), ne(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), t;
});
function Wb(t) {
  const e = Math.random().toString(36).substring(2, 7), a = Kb();
  a.value.set(e, t ?? !1);
  const n = C({
    get: () => a.value.get(e) ?? !1,
    set: (o) => a.value.set(e, o)
  });
  return bb(() => {
    a.value.delete(e);
  }), n;
}
function id(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight)
    return !0;
  {
    const a = t.parentNode;
    return !(a instanceof Element) || a.tagName === "BODY" ? !1 : id(a);
  }
}
function Hb(t) {
  const e = t || window.event, a = e.target;
  return a instanceof Element && id(a) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.cancelable && e.preventDefault(), !1);
}
const Ub = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = ad();
    return (a, n) => s(e) || a.forceMount ? (v(), _(sa, {
      key: 0,
      to: a.to,
      disabled: a.disabled,
      defer: a.defer
    }, [
      w(a.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : ae("", !0);
  }
});
function fa(t) {
  const e = Oe(), a = Object.keys((e == null ? void 0 : e.type.props) ?? {}).reduce((o, r) => {
    const l = (e == null ? void 0 : e.type.props[r]).default;
    return l !== void 0 && (o[r] = l), o;
  }, {}), n = Vs(t);
  return C(() => {
    const o = {}, r = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      o[po(l)] = r[l];
    }), Object.keys({ ...a, ...o }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function Ot(t, e) {
  const a = fa(t), n = e ? Pb(e) : {};
  return C(() => ({
    ...a.value,
    ...n
  }));
}
const [ud, jb] = Xe("AvatarRoot"), Gb = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    return ke(), jb({
      imageLoadingStatus: O("idle")
    }), (e, a) => (v(), _(s(_e), {
      "as-child": e.asChild,
      as: e.as
    }, {
      default: f(() => [
        w(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), qb = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t, a = ud();
    ke();
    const n = O(e.delayMs === void 0);
    return ge((o) => {
      if (e.delayMs && pt) {
        const r = window.setTimeout(() => {
          n.value = !0;
        }, e.delayMs);
        o(() => {
          window.clearTimeout(r);
        });
      }
    }), (o, r) => n.value && s(a).imageLoadingStatus.value !== "loaded" ? (v(), _(s(_e), {
      key: 0,
      "as-child": o.asChild,
      as: o.as
    }, {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : ae("", !0);
  }
});
function Tl(t, e) {
  return t ? e ? (t.src !== e && (t.src = e), t.complete && t.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Yb(t, { referrerPolicy: e, crossOrigin: a } = {}) {
  const n = O(!1), o = O(null), r = C(() => n.value ? (!o.value && pt && (o.value = new window.Image()), o.value) : null), l = O(Tl(r.value, t.value)), i = (u) => () => {
    n.value && (l.value = u);
  };
  return ue(() => {
    n.value = !0, ge((u) => {
      const d = r.value;
      if (!d)
        return;
      l.value = Tl(d, t.value);
      const c = i("loaded"), p = i("error");
      d.addEventListener("load", c), d.addEventListener("error", p), e != null && e.value && (d.referrerPolicy = e.value), typeof (a == null ? void 0 : a.value) == "string" && (d.crossOrigin = a.value), u(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", p);
      });
    });
  }), Fe(() => {
    n.value = !1;
  }), l;
}
const Jb = /* @__PURE__ */ b({
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
    const a = t, n = e, { src: o, referrerPolicy: r, crossOrigin: l } = fe(a);
    ke();
    const i = ud(), u = Yb(o, { referrerPolicy: r, crossOrigin: l });
    return X(
      u,
      (d) => {
        n("loadingStatusChange", d), d !== "idle" && (i.imageLoadingStatus.value = d);
      },
      { immediate: !0 }
    ), (d, c) => ra((v(), _(s(_e), {
      role: "img",
      "as-child": d.asChild,
      as: d.as,
      src: s(o),
      "referrer-policy": s(r)
    }, {
      default: f(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [vo, s(u) === "loaded"]
    ]);
  }
});
function Ut() {
  const t = O(), e = C(() => {
    var a, n;
    return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (n = t.value) == null ? void 0 : n.$el.nextElementSibling : ft(t);
  });
  return {
    primitiveElement: t,
    currentElement: e
  };
}
function Qb() {
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
function Xb(t) {
  return C(() => {
    var e;
    return yb(t) ? !!((e = ft(t)) != null && e.closest("form")) : !0;
  });
}
const Il = "data-reka-collection-item";
function qt(t = {}) {
  const { key: e = "", isProvider: a = !1 } = t, n = `${e}CollectionProvider`;
  let o;
  if (a) {
    const c = O(/* @__PURE__ */ new Map());
    o = {
      collectionRef: O(),
      itemMap: c
    }, mo(n, o);
  } else
    o = dn(n);
  const r = (c = !1) => {
    const p = o.collectionRef.value;
    if (!p)
      return [];
    const y = Array.from(p.querySelectorAll(`[${Il}]`)), h = Array.from(o.itemMap.value.values()).sort(
      (g, x) => y.indexOf(g.ref) - y.indexOf(x.ref)
    );
    return c ? h : h.filter((g) => g.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: y, currentElement: m } = Ut();
      return X(m, () => {
        o.collectionRef.value = m.value;
      }), () => Re(ks, { ref: y }, p);
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
    setup(c, { slots: p, attrs: y }) {
      const { primitiveElement: m, currentElement: h } = Ut();
      return ge((g) => {
        if (h.value) {
          const x = Jl(h.value);
          o.itemMap.value.set(x, { ref: h.value, value: c.value }), g(() => o.itemMap.value.delete(x));
        }
      }), () => Re(ks, { ...y, [Il]: "", ref: m }, p);
    }
  }), u = C(() => Array.from(o.itemMap.value.values())), d = C(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: l, CollectionItem: i };
}
const Zb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function e0(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function t0(t, e, a) {
  const n = e0(t.key, a);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Zb[n];
}
const Rl = /* @__PURE__ */ b({
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
    const e = t, { primitiveElement: a, currentElement: n } = Ut(), o = C(() => e.checked ?? e.value);
    return X(o, (r, l) => {
      if (!n.value)
        return;
      const i = n.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), y = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(y);
      }
    }), (r, l) => (v(), _(ed, S({
      ref_key: "primitiveElement",
      ref: a
    }, { ...e, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), a0 = /* @__PURE__ */ b({
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
    return (o, r) => a.value ? (v(), _(Rl, S({ key: o.name }, { ...e, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (v(!0), N(oe, { key: 1 }, we(n.value, (l) => (v(), _(Rl, S({
      key: l.name,
      ref_for: !0
    }, { ...e, ...o.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [dd, n0] = Xe("PopperRoot"), o0 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(t) {
    const e = O();
    return n0({
      anchor: e,
      onAnchorChange: (a) => e.value = a
    }), (a, n) => w(a.$slots, "default");
  }
}), s0 = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = ke(), o = dd();
    return zs(() => {
      o.onAnchorChange(e.reference ?? n.value);
    }), (r, l) => (v(), _(s(_e), {
      ref: s(a),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), r0 = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { forwardRef: e } = ke();
    return (a, n) => (v(), _(s(s0), {
      "as-child": "",
      reference: a.reference
    }, {
      default: f(() => [
        A(s(_e), S({
          ref: s(e),
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
function l0(t) {
  return t !== null;
}
function i0(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      var x, B, k;
      const { placement: a, rects: n, middlewareData: o } = e, l = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = l ? 0 : t.arrowWidth, u = l ? 0 : t.arrowHeight, [d, c] = Ss(a), p = { start: "0%", center: "50%", end: "100%" }[c], y = (((B = o.arrow) == null ? void 0 : B.x) ?? 0) + i / 2, m = (((k = o.arrow) == null ? void 0 : k.y) ?? 0) + u / 2;
      let h = "", g = "";
      return d === "bottom" ? (h = l ? p : `${y}px`, g = `${-u}px`) : d === "top" ? (h = l ? p : `${y}px`, g = `${n.floating.height + u}px`) : d === "right" ? (h = `${-u}px`, g = l ? p : `${m}px`) : d === "left" && (h = `${n.floating.width + u}px`, g = l ? p : `${m}px`), { data: { x: h, y: g } };
    }
  };
}
function Ss(t) {
  const [e, a = "center"] = t.split("-");
  return [e, a];
}
function u0(t) {
  const e = O(), a = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.width) ?? 0;
  }), n = C(() => {
    var o;
    return ((o = e.value) == null ? void 0 : o.height) ?? 0;
  });
  return ue(() => {
    const o = ft(t);
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
const d0 = {
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
}, [dx, c0] = Xe("PopperContent"), p0 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ns({
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
    ...d0
  }),
  emits: ["placed"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = dd(), { forwardRef: r, currentElement: l } = ke(), i = O(), u = O(), { width: d, height: c } = u0(u), p = C(
      () => a.side + (a.align !== "center" ? `-${a.align}` : "")
    ), y = C(() => typeof a.collisionPadding == "number" ? a.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...a.collisionPadding }), m = C(() => Array.isArray(a.collisionBoundary) ? a.collisionBoundary : [a.collisionBoundary]), h = C(() => ({
      padding: y.value,
      boundary: m.value.filter(l0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = sb(() => [
      Ai({
        mainAxis: a.sideOffset + c.value,
        alignmentAxis: a.alignOffset
      }),
      a.prioritizePosition && a.avoidCollisions && to({
        ...h.value
      }),
      a.avoidCollisions && Mi({
        mainAxis: !0,
        crossAxis: !!a.prioritizePosition,
        limiter: a.sticky === "partial" ? Ri() : void 0,
        ...h.value
      }),
      !a.prioritizePosition && a.avoidCollisions && to({
        ...h.value
      }),
      Ti({
        ...h.value,
        apply: ({ elements: R, rects: V, availableWidth: j, availableHeight: z }) => {
          const { width: W, height: Q } = V.reference, se = R.floating.style;
          se.setProperty(
            "--reka-popper-available-width",
            `${j}px`
          ), se.setProperty(
            "--reka-popper-available-height",
            `${z}px`
          ), se.setProperty(
            "--reka-popper-anchor-width",
            `${W}px`
          ), se.setProperty(
            "--reka-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && Vi({ element: u.value, padding: a.arrowPadding }),
      i0({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      a.hideWhenDetached && Ii({ strategy: "referenceHidden", ...h.value })
    ]), x = C(() => a.reference ?? o.anchor.value), { floatingStyles: B, placement: k, isPositioned: $, middlewareData: E } = Li(
      x,
      i,
      {
        strategy: a.positionStrategy,
        placement: p,
        whileElementsMounted: (...R) => Oi(...R, {
          layoutShift: !a.disableUpdateOnLayoutShift,
          animationFrame: a.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = C(
      () => Ss(k.value)[0]
    ), T = C(
      () => Ss(k.value)[1]
    );
    zs(() => {
      $.value && n("placed");
    });
    const P = C(
      () => {
        var R;
        return ((R = E.value.arrow) == null ? void 0 : R.centerOffset) !== 0;
      }
    ), L = O("");
    ge(() => {
      l.value && (L.value = window.getComputedStyle(l.value).zIndex);
    });
    const F = C(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.x) ?? 0;
    }), M = C(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.y) ?? 0;
    });
    return c0({
      placedSide: D,
      onArrowChange: (R) => u.value = R,
      arrowX: F,
      arrowY: M,
      shouldHideArrow: P
    }), (R, V) => {
      var j, z, W;
      return v(), N("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: vt({
          ...s(B),
          transform: s($) ? s(B).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: L.value,
          "--reka-popper-transform-origin": [
            (j = s(E).transformOrigin) == null ? void 0 : j.x,
            (z = s(E).transformOrigin) == null ? void 0 : z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((W = s(E).hide) == null ? void 0 : W.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        A(s(_e), S({ ref: s(r) }, R.$attrs, {
          "as-child": a.asChild,
          as: R.as,
          "data-side": D.value,
          "data-align": T.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s($) ? void 0 : "none"
          }
        }), {
          default: f(() => [
            w(R.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function f0(t) {
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
function v0(t, e, a) {
  return t === void 0 ? !1 : Array.isArray(t) ? t.some((n) => tn(n, e, a)) : tn(t, e, a);
}
function tn(t, e, a) {
  return t === void 0 || e === void 0 ? !1 : typeof t == "string" ? t === e : typeof a == "function" ? a(t, e) : typeof a == "string" ? (t == null ? void 0 : t[a]) === (e == null ? void 0 : e[a]) : Es(t, e);
}
function m0(t) {
  const e = Ao("", 1e3);
  return {
    search: e,
    handleTypeaheadSearch: (o, r) => {
      e.value = e.value + o;
      {
        const l = ta(), i = r.map((y) => {
          var m, h;
          return {
            ...y,
            textValue: ((m = y.value) == null ? void 0 : m.textValue) ?? ((h = y.ref.textContent) == null ? void 0 : h.trim()) ?? ""
          };
        }), u = i.find((y) => y.ref === l), d = i.map((y) => y.textValue), c = g0(d, e.value, u == null ? void 0 : u.textValue), p = i.find((y) => y.textValue === c);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      e.value = "";
    }
  };
}
function h0(t, e) {
  return t.map((a, n) => t[(e + n) % t.length]);
}
function g0(t, e, a) {
  const o = e.length > 1 && Array.from(e).every((d) => d === e[0]) ? e[0] : e, r = a ? t.indexOf(a) : -1;
  let l = h0(t, Math.max(r, 0));
  o.length === 1 && (l = l.filter((d) => d !== a));
  const u = l.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== a ? u : void 0;
}
function y0(t, e, a) {
  const n = t.findIndex((i) => Es(i, e)), o = t.findIndex((i) => Es(i, a));
  if (n === -1 || o === -1)
    return [];
  const [r, l] = [n, o].sort((i, u) => i - u);
  return t.slice(r, l + 1);
}
const [Ro, b0] = Xe("ListboxRoot"), _0 = /* @__PURE__ */ b({
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
    const n = t, o = a, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: c } = fe(n), { getItems: p } = qt({ isProvider: !0 }), { handleTypeaheadSearch: y } = m0(), { primitiveElement: m, currentElement: h } = Ut(), g = Qb(), x = Rr(c), B = Xb(h), k = O(), $ = O(!1), E = O(!0), D = Ia(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (r.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    });
    function T(J) {
      if ($.value = !0, n.multiple) {
        const te = Array.isArray(D.value) ? [...D.value] : [], le = te.findIndex((ee) => tn(ee, J, n.by));
        n.selectionBehavior === "toggle" ? (le === -1 ? te.push(J) : te.splice(le, 1), D.value = te) : (D.value = [J], k.value = J);
      } else
        n.selectionBehavior === "toggle" && tn(D.value, J, n.by) ? D.value = void 0 : D.value = J;
      setTimeout(() => {
        $.value = !1;
      }, 1);
    }
    const P = O(null), L = O(null), F = O(!1), M = O(!1), R = Hn(), V = Hn(), j = Hn();
    function z() {
      return p().map((J) => J.ref).filter((J) => J.dataset.disabled !== "");
    }
    function W(J, te = !0) {
      if (!J)
        return;
      P.value = J, E.value && P.value.focus(), te && P.value.scrollIntoView({ block: "nearest" });
      const le = p().find((ee) => ee.ref === J);
      o("highlight", le);
    }
    function Q(J) {
      if (F.value)
        j.trigger(J);
      else {
        const te = p().find((le) => tn(le.value, J, n.by));
        te && (P.value = te.ref, W(te.ref));
      }
    }
    function se(J) {
      P.value && P.value.isConnected && (J.preventDefault(), J.stopPropagation(), M.value || P.value.click());
    }
    function be(J) {
      if (E.value) {
        if ($.value = !0, F.value)
          V.trigger(J);
        else {
          const te = J.altKey || J.ctrlKey || J.metaKey;
          if (te && J.key === "a" && r.value) {
            const le = p(), ee = le.map(($e) => $e.value);
            D.value = [...ee], J.preventDefault(), W(le[le.length - 1].ref);
          } else if (!te) {
            const le = y(J.key, p());
            le && W(le);
          }
        }
        setTimeout(() => {
          $.value = !1;
        }, 1);
      }
    }
    function Y() {
      M.value = !0;
    }
    function ie() {
      requestAnimationFrame(() => {
        M.value = !1;
      });
    }
    function pe() {
      ne(() => {
        const J = new KeyboardEvent("keydown", { key: "PageUp" });
        Ze(J);
      });
    }
    function Ve(J) {
      const te = P.value;
      te != null && te.isConnected && (L.value = te), P.value = null, o("leave", J);
    }
    function Ge(J) {
      var le, ee;
      const te = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((le = J.currentTarget) == null || le.dispatchEvent(te), o("entryFocus", te), !te.defaultPrevented)
        if (L.value)
          W(L.value);
        else {
          const $e = (ee = z()) == null ? void 0 : ee[0];
          W($e);
        }
    }
    function Ze(J) {
      const te = t0(J, i.value, x.value);
      if (!te)
        return;
      let le = z();
      if (P.value) {
        if (te === "last")
          le.reverse();
        else if (te === "prev" || te === "next") {
          te === "prev" && le.reverse();
          const ee = le.indexOf(P.value);
          le = le.slice(ee + 1);
        }
        rt(J, le[0]);
      }
      if (le.length) {
        const ee = !P.value && te === "prev" ? le.length - 1 : 0;
        W(le[ee]);
      }
      if (F.value)
        return V.trigger(J);
    }
    function rt(J, te) {
      var ee;
      if (!(F.value || n.selectionBehavior !== "replace" || !r.value || !Array.isArray(D.value) || (J.altKey || J.ctrlKey || J.metaKey) && !J.shiftKey) && J.shiftKey) {
        const $e = p().filter((Jt) => Jt.ref.dataset.disabled !== "");
        let Le = (ee = $e.find((Jt) => Jt.ref === te)) == null ? void 0 : ee.value;
        if (J.key === g.END ? Le = $e[$e.length - 1].value : J.key === g.HOME && (Le = $e[0].value), !Le || !k.value)
          return;
        const Yt = y0($e.map((Jt) => Jt.value), k.value, Le);
        D.value = Yt;
      }
    }
    async function It(J) {
      if (await ne(), F.value)
        R.trigger(J);
      else {
        const te = z(), le = te.find((ee) => ee.dataset.state === "checked");
        le ? W(le) : te.length && W(te[0]);
      }
    }
    return X(D, () => {
      $.value || ne(() => {
        It();
      });
    }, { immediate: !0, deep: !0 }), e({
      highlightedElement: P,
      highlightItem: Q,
      highlightFirstItem: pe,
      highlightSelected: It,
      getItems: p
    }), b0({
      modelValue: D,
      // @ts-expect-error ignoring
      onValueChange: T,
      multiple: r,
      orientation: i,
      dir: x,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: P,
      isVirtual: F,
      virtualFocusHook: R,
      virtualKeydownHook: V,
      virtualHighlightHook: j,
      by: n.by,
      firstValue: k,
      selectionBehavior: d,
      focusable: E,
      onLeave: Ve,
      onEnter: Ge,
      changeHighlight: W,
      onKeydownEnter: se,
      onKeydownNavigation: Ze,
      onKeydownTypeAhead: be,
      onCompositionStart: Y,
      onCompositionEnd: ie,
      highlightFirstItem: pe
    }), (J, te) => (v(), _(s(_e), {
      ref_key: "primitiveElement",
      ref: m,
      as: J.as,
      "as-child": J.asChild,
      dir: s(x),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: Ve,
      onFocusout: te[0] || (te[0] = async (le) => {
        const ee = le.relatedTarget || le.target;
        await ne(), P.value && s(h) && !s(h).contains(ee) && Ve(le);
      })
    }, {
      default: f(() => [
        w(J.$slots, "default", { modelValue: s(D) }),
        s(B) && J.name ? (v(), _(s(a0), {
          key: 0,
          name: J.name,
          value: s(D),
          disabled: s(u),
          required: J.required
        }, null, 8, ["name", "value", "disabled", "required"])) : ae("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), [At, w0] = Xe("ComboboxRoot"), x0 = /* @__PURE__ */ b({
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
    var V, j, z;
    const n = t, o = a, { primitiveElement: r, currentElement: l } = Ut(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, dir: p } = fe(n), y = Rr(p), m = Ia(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (i.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), h = Ia(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    async function g(W) {
      var Q, se;
      h.value = W, F.value = "", W ? (await ne(), (Q = r.value) == null || Q.highlightSelected(), B.value = !0) : B.value = !1, (se = $.value) == null || se.focus(), setTimeout(() => {
        !W && n.resetSearchTermOnBlur && x.trigger();
      }, 1);
    }
    const x = Hn(), B = O(!1), k = O(!1), $ = O(), E = O(), D = C(() => {
      var W;
      return ((W = r.value) == null ? void 0 : W.highlightedElement) ?? void 0;
    }), T = O(/* @__PURE__ */ new Map()), P = O(/* @__PURE__ */ new Map()), { contains: L } = f0({ sensitivity: "base" }), F = O(""), M = C((W) => {
      if (!F.value || n.ignoreFilter || k.value)
        return {
          count: T.value.size,
          items: (W == null ? void 0 : W.items) ?? /* @__PURE__ */ new Map(),
          groups: (W == null ? void 0 : W.groups) ?? new Set(P.value.keys())
        };
      let Q = 0;
      const se = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Set();
      for (const [Y, ie] of T.value) {
        const pe = L(ie, F.value);
        se.set(Y, pe ? 1 : 0), pe && Q++;
      }
      for (const [Y, ie] of P.value)
        for (const pe of ie)
          if (se.get(pe) > 0) {
            be.add(Y);
            break;
          }
      return {
        count: Q,
        items: se,
        groups: be
      };
    }), R = Oe();
    return ue(() => {
      var W, Q, se;
      R != null && R.exposed && (R.exposed.highlightItem = (W = r.value) == null ? void 0 : W.highlightItem, R.exposed.highlightFirstItem = (Q = r.value) == null ? void 0 : Q.highlightFirstItem, R.exposed.highlightSelected = (se = r.value) == null ? void 0 : se.highlightSelected);
    }), e({
      filtered: M,
      highlightedElement: D,
      highlightItem: (V = r.value) == null ? void 0 : V.highlightItem,
      highlightFirstItem: (j = r.value) == null ? void 0 : j.highlightFirstItem,
      highlightSelected: (z = r.value) == null ? void 0 : z.highlightSelected
    }), w0({
      modelValue: m,
      multiple: i,
      disabled: u,
      open: h,
      onOpenChange: g,
      contentId: "",
      isUserInputted: B,
      isVirtual: k,
      inputElement: $,
      highlightedElement: D,
      onInputElementChange: (W) => $.value = W,
      triggerElement: E,
      onTriggerElementChange: (W) => E.value = W,
      parentElement: l,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: x.on,
      allItems: T,
      allGroups: P,
      filterSearch: F,
      filterState: M,
      ignoreFilter: d
    }), (W, Q) => (v(), _(s(o0), null, {
      default: f(() => [
        A(s(_0), S({
          ref_key: "primitiveElement",
          ref: r
        }, W.$attrs, {
          modelValue: s(m),
          "onUpdate:modelValue": Q[0] || (Q[0] = (se) => We(m) ? m.value = se : null),
          style: {
            pointerEvents: s(h) ? "auto" : void 0
          },
          as: W.as,
          "as-child": W.asChild,
          dir: s(y),
          multiple: s(i),
          name: W.name,
          required: W.required,
          disabled: s(u),
          "highlight-on-hover": !0,
          by: n.by,
          onHighlight: Q[1] || (Q[1] = (se) => o("highlight", se))
        }), {
          default: f(() => [
            w(W.$slots, "default", {
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
}), C0 = /* @__PURE__ */ b({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const { CollectionSlot: e } = qt(), a = Ro(), n = Ao(!1, 10);
    return (o, r) => (v(), _(s(e), null, {
      default: f(() => [
        A(s(_e), {
          role: "listbox",
          as: o.as,
          "as-child": o.asChild,
          tabindex: s(a).focusable.value ? s(a).highlightedElement.value ? "-1" : "0" : void 0,
          "aria-orientation": s(a).orientation.value,
          "aria-multiselectable": !!s(a).multiple.value,
          "data-orientation": s(a).orientation.value,
          onMousedown: r[0] || (r[0] = Ee((l) => n.value = !0, ["left"])),
          onFocus: r[1] || (r[1] = (l) => {
            s(n) || s(a).onEnter(l);
          }),
          onKeydown: [
            r[2] || (r[2] = Me(Ee((l) => {
              s(a).focusable.value && s(a).onKeydownNavigation(l);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            Me(s(a).onKeydownEnter, ["enter"]),
            s(a).onKeydownTypeAhead
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
}), [cx, $0] = Xe("ComboboxContent"), B0 = /* @__PURE__ */ b({
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
    const a = t, n = e, { position: o } = fe(a), r = At(), { forwardRef: l, currentElement: i } = ke();
    Wb(a.bodyLock), Lb(r.parentElement);
    const u = C(() => a.position === "popper" ? a : {}), d = fa(u.value), c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    $0({ position: o });
    const p = O(!1);
    return ue(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), Fe(() => {
      var y;
      p.value && ((y = r.triggerElement.value) == null || y.focus());
    }), (y, m) => (v(), _(s(C0), { "as-child": "" }, {
      default: f(() => [
        A(s(rd), {
          "as-child": "",
          "disable-outside-pointer-events": y.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: f(() => [
            (v(), _(Ke(s(o) === "popper" ? s(p0) : s(_e)), S({ ...y.$attrs, ...s(d) }, {
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
              default: f(() => [
                w(y.$slots, "default")
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
}), px = /* @__PURE__ */ b({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    ke();
    const a = At();
    function n() {
      a.filterSearch.value = "", a.inputElement.value && (a.inputElement.value.value = "", a.inputElement.value.focus());
    }
    return (o, r) => (v(), _(s(_e), S({
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
}), k0 = /* @__PURE__ */ b({
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
    const o = Ot(t, e), { forwardRef: r } = ke(), l = At();
    return l.contentId || (l.contentId = Gt(void 0, "reka-combobox-content")), (i, u) => (v(), _(s(Io), {
      present: i.forceMount || s(l).open.value
    }, {
      default: f(() => [
        A(B0, S({ ...s(o), ...i.$attrs }, { ref: s(r) }), {
          default: f(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), E0 = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = At(), n = C(
      () => a.ignoreFilter.value ? a.allItems.value.size === 0 : a.filterState.value.count === 0
    );
    return (o, r) => n.value ? (v(), _(s(_e), U(S({ key: 0 }, e)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          r[0] || (r[0] = Z("No options"))
        ])
      ]),
      _: 3
    }, 16)) : ae("", !0);
  }
}), [fx, D0] = Xe("ListboxGroup"), S0 = /* @__PURE__ */ b({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Gt(void 0, "reka-listbox-group");
    return D0({ id: a }), (n, o) => (v(), _(s(_e), S({ role: "group" }, e, { "aria-labelledby": s(a) }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), [cd, P0] = Xe("ComboboxGroup"), O0 = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, a = Gt(void 0, "reka-combobox-group"), n = At(), o = C(() => n.ignoreFilter.value ? !0 : n.filterSearch.value ? n.filterState.value.groups.has(a) : !0), r = P0({
      id: a,
      labelId: ""
    });
    return ue(() => {
      n.allGroups.value.has(a) || n.allGroups.value.set(a, /* @__PURE__ */ new Set());
    }), Fe(() => {
      n.allGroups.value.delete(a);
    }), (l, i) => (v(), _(s(S0), S({
      id: s(a),
      "aria-labelledby": s(r).labelId
    }, e, {
      hidden: o.value ? void 0 : !0
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "hidden"]));
  }
}), A0 = /* @__PURE__ */ b({
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
    const a = t, o = Ia(a, "modelValue", e, {
      defaultValue: "",
      passive: a.modelValue === void 0
    }), r = Ro(), { primitiveElement: l, currentElement: i } = Ut(), u = C(() => a.disabled || r.disabled.value || !1), d = O();
    return Gl(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), ue(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        a.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Fe(() => {
      r.focusable.value = !0;
    }), (c, p) => (v(), _(s(_e), {
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
        Me(Ee(s(r).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        Me(s(r).onKeydownEnter, ["enter"])
      ],
      onInput: p[0] || (p[0] = (y) => {
        o.value = y.target.value, s(r).highlightFirstItem();
      }),
      onCompositionstart: s(r).onCompositionStart,
      onCompositionend: s(r).onCompositionEnd
    }, {
      default: f(() => [
        w(c.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), M0 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = At(), r = Ro(), { primitiveElement: l, currentElement: i } = Ut(), u = Ia(a, "modelValue", n, {
      passive: a.modelValue === void 0
    });
    ue(() => {
      i.value && o.onInputElementChange(i.value);
    });
    function d(y) {
      o.open.value || o.onOpenChange(!0);
    }
    function c(y) {
      const m = y.target;
      o.open.value ? o.filterSearch.value = m.value : (o.onOpenChange(!0), ne(() => {
        m.value && (o.filterSearch.value = m.value, r.highlightFirstItem());
      }));
    }
    function p() {
      const y = o.modelValue.value;
      a.displayValue ? u.value = a.displayValue(y) : !o.multiple.value && y && !Array.isArray(y) && typeof y != "object" ? u.value = y.toString() : u.value = "", ne(() => {
        u.value = u.value;
      });
    }
    return o.onResetSearchTerm(() => {
      p();
    }), X(o.modelValue, async () => {
      !o.isUserInputted.value && o.resetSearchTermOnSelect.value && p();
    }, { immediate: !0, deep: !0 }), X(o.filterState, () => {
      o.isVirtual.value || r.highlightFirstItem();
    }), (y, m) => (v(), _(s(A0), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: s(u),
      "onUpdate:modelValue": m[0] || (m[0] = (h) => We(u) ? u.value = h : null),
      as: y.as,
      "as-child": y.asChild,
      "auto-focus": y.autoFocus,
      "aria-expanded": s(o).open.value,
      "aria-controls": s(o).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: c,
      onKeydown: Me(Ee(d, ["prevent"]), ["down", "up"])
    }, {
      default: f(() => [
        w(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "as", "as-child", "auto-focus", "aria-expanded", "aria-controls", "onKeydown"]));
  }
}), T0 = "listbox.select", [I0, R0] = Xe("ListboxItem"), V0 = /* @__PURE__ */ b({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Gt(void 0, "reka-listbox-item"), { CollectionItem: r } = qt(), { forwardRef: l, currentElement: i } = ke(), u = Ro(), d = C(() => i.value === u.highlightedElement.value), c = C(() => v0(u.modelValue.value, a.value, u.by)), p = C(() => u.disabled.value || a.disabled);
    async function y(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !p.value && h && (u.onValueChange(a.value), u.changeHighlight(i.value));
    }
    function m(h) {
      const g = { originalEvent: h, value: a.value };
      Vr(T0, y, g);
    }
    return R0({
      isSelected: c
    }), (h, g) => (v(), _(s(r), { value: h.value }, {
      default: f(() => [
        Nd([d.value, c.value], () => A(s(_e), S({ id: s(o) }, h.$attrs, {
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
          onKeydown: Me(Ee(m, ["prevent"]), ["space"]),
          onPointermove: g[0] || (g[0] = (x) => {
            s(u).highlightedElement.value !== s(i) && (s(u).highlightOnHover.value ? s(u).changeHighlight(s(i), !1) : s(u).focusable.value || s(u).changeHighlight(s(i), !1));
          })
        }), {
          default: f(() => [
            w(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), g, 1)
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), F0 = /* @__PURE__ */ b({
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
    const a = t, n = e, o = Gt(void 0, "reka-combobox-item"), r = At(), l = cd(null), { primitiveElement: i, currentElement: u } = Ut();
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
    return ue(() => {
      var p;
      r.allItems.value.set(o, a.textValue || u.value.textContent || u.value.innerText);
      const c = l == null ? void 0 : l.id;
      c && (r.allGroups.value.has(c) ? (p = r.allGroups.value.get(c)) == null || p.add(o) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([o])));
    }), Fe(() => {
      r.allItems.value.delete(o);
    }), (c, p) => d.value ? (v(), _(s(V0), S({ key: 0 }, a, {
      id: s(o),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || c.disabled,
      onSelect: p[0] || (p[0] = (y) => {
        n("select", y), !y.defaultPrevented && !s(r).multiple.value && !c.disabled && !s(r).disabled.value && (y.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = a.value);
      })
    }), {
      default: f(() => [
        w(c.$slots, "default", {}, () => [
          Z(re(c.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id", "disabled"])) : ae("", !0);
  }
}), L0 = /* @__PURE__ */ b({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    ke();
    const a = I0();
    return (n, o) => s(a).isSelected.value ? (v(), _(s(_e), S({
      key: 0,
      "aria-hidden": "true"
    }, e), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : ae("", !0);
  }
}), vx = /* @__PURE__ */ b({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(L0), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N0 = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const e = t;
    ke();
    const a = cd({ id: "", labelId: "" });
    return a.labelId || (a.labelId = Gt(void 0, "reka-combobox-group-label")), (n, o) => (v(), _(s(_e), S(e, {
      id: s(a).labelId
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), z0 = /* @__PURE__ */ b({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Ub), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), K0 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return ke(), (a, n) => (v(), _(s(_e), S(e, { "aria-hidden": "true" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mx = /* @__PURE__ */ b({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, { forwardRef: a, currentElement: n } = ke(), o = At(), r = C(() => e.disabled || o.disabled.value || !1);
    return ue(() => {
      n.value && o.onTriggerElementChange(n.value);
    }), (l, i) => (v(), _(s(_e), S(e, {
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
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
function W0(t) {
  const e = To({
    nonce: O()
  });
  return C(() => {
    var a;
    return (t == null ? void 0 : t.value) || ((a = e.nonce) == null ? void 0 : a.value);
  });
}
const H0 = /* @__PURE__ */ b({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = ke(), { nonce: n } = fe(e), o = W0(n), r = At();
    return (l, i) => (v(), N(oe, null, [
      A(s(_e), S({ ...l.$attrs, ...e }, {
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
        default: f(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      A(s(_e), {
        as: "style",
        nonce: s(o)
      }, {
        default: f(() => i[0] || (i[0] = [
          Z(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function Vo(t) {
  return t ? "open" : "closed";
}
function pd(t, e) {
  return `${t}-trigger-${e}`;
}
function Fr(t, e) {
  return `${t}-content-${e}`;
}
const U0 = "navigationMenu.linkSelect", Un = "navigationMenu.rootContentDismiss";
function Ps(t) {
  const e = [], a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; a.nextNode(); ) e.push(a.currentNode);
  return e;
}
function fd(t) {
  const e = ta();
  return t.some((a) => a === e ? !0 : (a.focus(), ta() !== e));
}
function j0(t) {
  return t.forEach((e) => {
    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
  }), () => {
    t.forEach((e) => {
      const a = e.dataset.tabindex;
      e.setAttribute("tabindex", a);
    });
  };
}
function vd(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
const [va, G0] = Xe(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), q0 = /* @__PURE__ */ b({
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
  setup(t, { emit: e }) {
    const a = t, o = Ia(a, "modelValue", e, {
      defaultValue: a.defaultValue ?? "",
      passive: a.modelValue === void 0
    }), r = O(""), { forwardRef: l, currentElement: i } = ke(), u = O(), d = O(), c = O(), { getItems: p, CollectionSlot: y } = qt({ key: "NavigationMenu", isProvider: !0 }), { delayDuration: m, skipDelayDuration: h, dir: g, disableClickTrigger: x, disableHoverTrigger: B, unmountOnHide: k } = fe(a), $ = Rr(g), E = Ao(!1, h), D = C(() => o.value !== "" || E.value ? 150 : m.value), T = gb((P) => {
      typeof P == "string" && (r.value = o.value, o.value = P);
    }, D);
    return ge(() => {
      if (!o.value)
        return;
      const P = p().map((L) => L.ref);
      c.value = P.find(
        (L) => L.id.includes(o.value)
      );
    }), G0({
      isRootMenu: !0,
      modelValue: o,
      previousValue: r,
      baseId: Gt(void 0, "reka-navigation-menu"),
      disableClickTrigger: x,
      disableHoverTrigger: B,
      dir: $,
      unmountOnHide: k,
      orientation: a.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      activeTrigger: c,
      onIndicatorTrackChange: (P) => {
        u.value = P;
      },
      viewport: d,
      onViewportChange: (P) => {
        d.value = P;
      },
      onTriggerEnter: (P) => {
        T(P);
      },
      onTriggerLeave: () => {
        E.value = !0, T("");
      },
      onContentEnter: () => {
        T();
      },
      onContentLeave: () => {
        a.disablePointerLeaveClose || T("");
      },
      onItemSelect: (P) => {
        r.value = o.value, o.value = P;
      },
      onItemDismiss: () => {
        r.value = o.value, o.value = "";
      }
    }), (P, L) => (v(), _(s(y), null, {
      default: f(() => [
        A(s(_e), {
          ref: s(l),
          "aria-label": "Main",
          as: P.as,
          "as-child": P.asChild,
          "data-orientation": P.orientation,
          dir: s($),
          "data-reka-navigation-menu": ""
        }, {
          default: f(() => [
            w(P.$slots, "default", { modelValue: s(o) })
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-orientation", "dir"])
      ]),
      _: 3
    }));
  }
}), [Lr, Y0] = Xe("NavigationMenuItem"), J0 = /* @__PURE__ */ b({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(t) {
    const e = t;
    ke();
    const { getItems: a } = qt({ key: "NavigationMenu" }), n = va(), o = Gt(e.value), r = O(), l = O(), i = Fr(n.baseId, o);
    let u = () => ({});
    const d = O(!1);
    async function c(h = "start") {
      const g = document.getElementById(i);
      if (g) {
        u();
        const x = Ps(g);
        x.length && fd(h === "start" ? x : x.reverse());
      }
    }
    function p() {
      const h = document.getElementById(i);
      if (h) {
        const g = Ps(h);
        g.length && (u = j0(g));
      }
    }
    Y0({
      value: o,
      contentId: i,
      triggerRef: r,
      focusProxyRef: l,
      wasEscapeCloseRef: d,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: p,
      onRootContentClose: p
    });
    function y() {
      var h;
      n.onItemDismiss(), (h = r.value) == null || h.focus();
    }
    function m(h) {
      const g = ta();
      if (h.keyCode === 32 || h.key === "Enter")
        if (n.modelValue.value === o) {
          y(), h.preventDefault();
          return;
        } else {
          h.target.click(), h.preventDefault();
          return;
        }
      const x = a().filter(
        (k) => {
          var $;
          return ($ = k.ref.parentElement) == null ? void 0 : $.hasAttribute("data-menu-item");
        }
      ).map((k) => k.ref);
      if (!x.includes(g))
        return;
      const B = nd(h, g, void 0, {
        itemsArray: x,
        loop: !1
      });
      B && (B == null || B.focus()), h.preventDefault(), h.stopPropagation();
    }
    return (h, g) => (v(), _(s(_e), {
      "as-child": h.asChild,
      as: h.as,
      "data-menu-item": "",
      onKeydown: Me(m, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: f(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Q0 = /* @__PURE__ */ b({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: e }) {
    const a = t, n = e, { getItems: o } = qt({ key: "NavigationMenu" }), { forwardRef: r, currentElement: l } = ke(), i = va(), u = Lr(), d = pd(i.baseId, u.value), c = Fr(i.baseId, u.value), p = O(null), y = C(() => {
      const k = o().map((L) => L.ref.id.split("trigger-")[1]);
      i.dir.value === "rtl" && k.reverse();
      const $ = k.indexOf(i.modelValue.value), E = k.indexOf(i.previousValue.value), D = u.value === i.modelValue.value, T = E === k.indexOf(u.value);
      if (!D && !T)
        return p.value;
      const P = (() => {
        if ($ !== E) {
          if (D && E !== -1)
            return $ > E ? "from-end" : "from-start";
          if (T && $ !== -1)
            return $ > E ? "to-start" : "to-end";
        }
        return null;
      })();
      return p.value = P, P;
    });
    function m(k) {
      var E, D;
      if (n("focusOutside", k), n("interactOutside", k), k.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger") && k.preventDefault(), !k.defaultPrevented) {
        u.onContentFocusOutside();
        const T = k.target;
        (D = (E = i.rootNavigationMenu) == null ? void 0 : E.value) != null && D.contains(T) && k.preventDefault();
      }
    }
    function h(k) {
      var $;
      if (n("pointerDownOutside", k), !k.defaultPrevented) {
        const E = k.target, D = o().some(
          (P) => P.ref.contains(E)
        ), T = i.isRootMenu && (($ = i.viewport.value) == null ? void 0 : $.contains(E));
        (D || T || !i.isRootMenu) && k.preventDefault();
      }
    }
    ge((k) => {
      const $ = l.value;
      if (i.isRootMenu && $) {
        const E = () => {
          var D;
          i.onItemDismiss(), u.onRootContentClose(), $.contains(ta()) && ((D = u.triggerRef.value) == null || D.focus());
        };
        $.addEventListener(Un, E), k(
          () => $.removeEventListener(Un, E)
        );
      }
    });
    function g(k) {
      var $, E;
      n("escapeKeyDown", k), k.defaultPrevented || (i.onItemDismiss(), (E = ($ = u.triggerRef) == null ? void 0 : $.value) == null || E.focus(), u.wasEscapeCloseRef.value = !0);
    }
    function x(k) {
      var P;
      if (k.target.closest("[data-reka-navigation-menu]") !== i.rootNavigationMenu.value)
        return;
      const $ = k.altKey || k.ctrlKey || k.metaKey, E = k.key === "Tab" && !$, D = Ps(k.currentTarget);
      if (E) {
        const L = ta(), F = D.findIndex(
          (V) => V === L
        ), R = k.shiftKey ? D.slice(0, F).reverse() : D.slice(F + 1, D.length);
        if (fd(R))
          k.preventDefault();
        else {
          (P = u.focusProxyRef.value) == null || P.focus();
          return;
        }
      }
      const T = nd(
        k,
        ta(),
        void 0,
        { itemsArray: D, loop: !1, enableIgnoredElement: !0 }
      );
      T == null || T.focus();
    }
    function B() {
      var $;
      const k = new Event(Un, {
        bubbles: !0,
        cancelable: !0
      });
      ($ = l.value) == null || $.dispatchEvent(k);
    }
    return (k, $) => (v(), _(s(rd), S({
      id: s(c),
      ref: s(r),
      "aria-labelledby": s(d),
      "data-motion": y.value,
      "data-state": s(Vo)(s(i).modelValue.value === s(u).value),
      "data-orientation": s(i).orientation
    }, a, {
      onKeydown: x,
      onEscapeKeyDown: g,
      onPointerDownOutside: h,
      onFocusOutside: m,
      onDismiss: B
    }), {
      default: f(() => [
        w(k.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), X0 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Ot(ub(a, "forceMount"), n), { forwardRef: r } = ke(), l = va(), i = Lr(), u = C(() => i.value === l.modelValue.value), d = C(() => l.viewport.value && !l.modelValue.value && l.previousValue.value ? l.previousValue.value === i.value : !1);
    return (c, p) => (v(), _(sa, {
      to: s(pt) && s(l).viewport.value ? s(l).viewport.value : "body",
      disabled: s(pt) && s(l).viewport.value ? !s(l).viewport.value : !0
    }, [
      A(s(Io), {
        present: c.forceMount || u.value || d.value,
        "force-mount": !s(l).unmountOnHide.value
      }, {
        default: f(({ present: y }) => [
          A(Q0, S({
            ref: s(r),
            "data-state": s(Vo)(u.value),
            style: {
              pointerEvents: !u.value && s(l).isRootMenu ? "none" : void 0
            }
          }, { ...c.$attrs, ...s(o) }, {
            hidden: !y,
            onPointerenter: p[0] || (p[0] = (m) => s(l).onContentEnter(s(i).value)),
            onPointerleave: p[1] || (p[1] = (m) => s(vd)(() => s(l).onContentLeave())(m)),
            onPointerDownOutside: p[2] || (p[2] = (m) => n("pointerDownOutside", m)),
            onFocusOutside: p[3] || (p[3] = (m) => n("focusOutside", m)),
            onInteractOutside: p[4] || (p[4] = (m) => n("interactOutside", m))
          }), {
            default: f(() => [
              w(c.$slots, "default")
            ]),
            _: 2
          }, 1040, ["data-state", "style", "hidden"])
        ]),
        _: 3
      }, 8, ["present", "force-mount"])
    ], 8, ["to", "disabled"]));
  }
}), Z0 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t, { forwardRef: a } = ke(), n = va(), o = O(), r = C(() => n.orientation === "horizontal"), l = C(() => !!n.modelValue.value), { activeTrigger: i } = n;
    function u() {
      i.value && (o.value = {
        size: r.value ? i.value.offsetWidth : i.value.offsetHeight,
        position: r.value ? i.value.offsetLeft : i.value.offsetTop
      });
    }
    return ge(() => {
      n.modelValue.value && u();
    }), so(i, u), so(n.indicatorTrack, u), (d, c) => s(n).indicatorTrack.value ? (v(), _(sa, {
      key: 0,
      to: s(n).indicatorTrack.value
    }, [
      A(s(Io), {
        present: d.forceMount || l.value
      }, {
        default: f(() => [
          A(s(_e), S({
            ref: s(a),
            "aria-hidden": "true",
            "data-state": l.value ? "visible" : "hidden",
            "data-orientation": s(n).orientation,
            "as-child": e.asChild,
            as: d.as,
            style: {
              ...o.value ? {
                "--reka-navigation-menu-indicator-size": `${o.value.size}px`,
                "--reka-navigation-menu-indicator-position": `${o.value.position}px`
              } : {}
            }
          }, d.$attrs), {
            default: f(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : ae("", !0);
  }
}), e_ = /* @__PURE__ */ b({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, { CollectionItem: o } = qt({ key: "NavigationMenu" });
    ke();
    async function r(l) {
      var u;
      const i = new CustomEvent(U0, {
        bubbles: !0,
        cancelable: !0,
        detail: {
          originalEvent: l
        }
      });
      if (n("select", i), !i.defaultPrevented && !l.metaKey) {
        const d = new CustomEvent(
          Un,
          {
            bubbles: !0,
            cancelable: !0
          }
        );
        (u = l.target) == null || u.dispatchEvent(d);
      }
    }
    return (l, i) => (v(), _(s(o), null, {
      default: f(() => [
        A(s(_e), {
          as: l.as,
          "data-active": l.active ? "" : void 0,
          "aria-current": l.active ? "page" : void 0,
          "as-child": a.asChild,
          onClick: r
        }, {
          default: f(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "data-active", "aria-current", "as-child"])
      ]),
      _: 3
    }));
  }
}), t_ = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(t) {
    const e = t, a = va(), { forwardRef: n, currentElement: o } = ke();
    return ue(() => {
      a.onIndicatorTrackChange(o.value);
    }), (r, l) => (v(), _(s(_e), {
      ref: s(n),
      style: { position: "relative" }
    }, {
      default: f(() => [
        A(s(_e), S(r.$attrs, {
          "as-child": e.asChild,
          as: r.as,
          "data-orientation": s(a).orientation
        }), {
          default: f(() => [
            w(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
}), a_ = ["aria-owns"], n_ = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t, a = va(), n = Lr(), { CollectionItem: o } = qt({ key: "NavigationMenu" }), { forwardRef: r, currentElement: l } = ke(), i = O(""), u = O(""), d = Ao(!1, 300), c = O(!1), p = C(() => n.value === a.modelValue.value);
    ue(() => {
      n.triggerRef = l, i.value = pd(a.baseId, n.value), u.value = Fr(a.baseId, n.value);
    });
    function y() {
      a.disableHoverTrigger.value || (c.value = !1, n.wasEscapeCloseRef.value = !1);
    }
    function m($) {
      if (!a.disableHoverTrigger.value && $.pointerType === "mouse") {
        if (e.disabled || c.value || n.wasEscapeCloseRef.value || d.value)
          return;
        a.onTriggerEnter(n.value), d.value = !0;
      }
    }
    function h($) {
      if (!a.disableHoverTrigger.value && $.pointerType === "mouse") {
        if (e.disabled)
          return;
        a.onTriggerLeave(), d.value = !1;
      }
    }
    function g($) {
      $.pointerType === "mouse" && a.disableClickTrigger.value || d.value || (p.value ? a.onItemSelect("") : a.onItemSelect(n.value), c.value = p.value);
    }
    function x($) {
      const D = { horizontal: "ArrowDown", vertical: a.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
      p.value && $.key === D && (n.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }
    function B($) {
      n.focusProxyRef.value = ft($);
    }
    function k($) {
      const E = document.getElementById(n.contentId), D = $.relatedTarget, T = D === l.value, P = E == null ? void 0 : E.contains(D);
      (T || !P) && n.onFocusProxyEnter(T ? "start" : "end");
    }
    return ($, E) => (v(), N(oe, null, [
      A(s(o), null, {
        default: f(() => [
          A(s(_e), S({
            id: i.value,
            ref: s(r),
            disabled: $.disabled,
            "data-disabled": $.disabled ? "" : void 0,
            "data-state": s(Vo)(p.value),
            "data-navigation-menu-trigger": "",
            "aria-expanded": p.value,
            "aria-controls": u.value,
            "as-child": e.asChild,
            as: $.as
          }, $.$attrs, {
            onPointerenter: y,
            onPointermove: m,
            onPointerleave: h,
            onClick: g,
            onKeydown: x
          }), {
            default: f(() => [
              w($.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"])
        ]),
        _: 3
      }),
      p.value ? (v(), N(oe, { key: 0 }, [
        A(s(ed), {
          ref: B,
          "aria-hidden": "true",
          tabindex: 0,
          onFocus: k
        }),
        s(a).viewport ? (v(), N("span", {
          key: 0,
          "aria-owns": u.value
        }, null, 8, a_)) : ae("", !0)
      ], 64)) : ae("", !0)
    ], 64));
  }
}), o_ = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: { default: "center" },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    var m;
    const e = t, { forwardRef: a, currentElement: n } = ke(), o = va(), { activeTrigger: r, rootNavigationMenu: l, modelValue: i } = o, u = O(), d = O(), c = C(() => !!o.modelValue.value);
    X(n, () => {
      o.onViewportChange(n.value);
    });
    const p = O();
    X([i, c], () => {
      n.value && requestAnimationFrame(() => {
        var g;
        const h = (g = n.value) == null ? void 0 : g.querySelector("[data-state=open]");
        p.value = h;
      });
    }, { immediate: !0, flush: "post" });
    function y() {
      if (p.value && r.value && l.value) {
        const h = document.documentElement.offsetWidth, g = document.documentElement.offsetHeight, x = l.value.getBoundingClientRect(), B = r.value.getBoundingClientRect(), { offsetWidth: k, offsetHeight: $ } = p.value, E = B.left - x.left, D = B.top - x.top;
        let T = null, P = null;
        switch (e.align) {
          case "start":
            T = E, P = D;
            break;
          case "end":
            T = E - k + B.width, P = D - $ + B.height;
            break;
          default:
            T = E - k / 2 + B.width / 2, P = D - $ / 2 + B.height / 2;
        }
        const L = 10;
        T + x.left < L && (T = L - x.left);
        const F = T + x.left + k;
        F > h - L && (T -= F - h + L, T < L - x.left && (T = L - x.left)), P + x.top < L && (P = L - x.top);
        const M = P + x.top + $;
        M > g - L && (P -= M - g + L, P < L - x.top && (P = L - x.top)), T = Math.round(T), P = Math.round(P), d.value = {
          left: T,
          top: P
        };
      }
    }
    return so(p, () => {
      p.value && (u.value = {
        width: p.value.offsetWidth,
        height: p.value.offsetHeight
      }, y());
    }), so([(m = globalThis.document) == null ? void 0 : m.body, l], () => {
      y();
    }), (h, g) => (v(), _(s(Io), {
      present: h.forceMount || c.value,
      "force-mount": !s(o).unmountOnHide.value,
      onAfterLeave: g[2] || (g[2] = () => {
        u.value = void 0, d.value = void 0;
      })
    }, {
      default: f(({ present: x }) => {
        var B, k, $, E;
        return [
          A(s(_e), S(h.$attrs, {
            ref: s(a),
            as: h.as,
            "as-child": h.asChild,
            "data-state": s(Vo)(c.value),
            "data-orientation": s(o).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !c.value && s(o).isRootMenu ? "none" : void 0,
              "--reka-navigation-menu-viewport-width": u.value ? `${(B = u.value) == null ? void 0 : B.width}px` : void 0,
              "--reka-navigation-menu-viewport-height": u.value ? `${(k = u.value) == null ? void 0 : k.height}px` : void 0,
              "--reka-navigation-menu-viewport-left": d.value ? `${($ = d.value) == null ? void 0 : $.left}px` : void 0,
              "--reka-navigation-menu-viewport-top": d.value ? `${(E = d.value) == null ? void 0 : E.top}px` : void 0
            },
            hidden: !x,
            onPointerenter: g[0] || (g[0] = (D) => s(o).onContentEnter(s(o).modelValue.value)),
            onPointerleave: g[1] || (g[1] = (D) => s(vd)(() => s(o).onContentLeave())(D))
          }), {
            default: f(() => [
              w(h.$slots, "default")
            ]),
            _: 2
          }, 1040, ["as", "as-child", "data-state", "data-orientation", "style", "hidden"])
        ];
      }),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), hx = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Gb), {
      "data-slot": "avatar",
      class: G(s(I)("relative flex size-8 shrink-0 overflow-hidden rounded-full", e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function s_(t) {
  return uo() ? (co(t), !0) : !1;
}
const ns = /* @__PURE__ */ new WeakMap(), r_ = (...t) => {
  var e;
  const a = t[0], n = (e = Oe()) == null ? void 0 : e.proxy;
  if (n == null && !Ql())
    throw new Error("injectLocal must be called in setup");
  return n && ns.has(n) && a in ns.get(n) ? ns.get(n)[a] : dn(...t);
};
function l_(t) {
  if (!We(t))
    return aa(t);
  const e = new Proxy({}, {
    get(a, n, o) {
      return s(Reflect.get(t.value, n, o));
    },
    set(a, n, o) {
      return We(t.value[n]) && !We(o) ? t.value[n].value = o : t.value[n] = o, !0;
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
  return aa(e);
}
function i_(t) {
  return l_(C(t));
}
function Mt(t, ...e) {
  const a = e.flat(), n = a[0];
  return i_(() => Object.fromEntries(typeof n == "function" ? Object.entries(fe(t)).filter(([o, r]) => !n(Ce(r), o)) : Object.entries(fe(t)).filter((o) => !a.includes(o[0]))));
}
const u_ = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const d_ = (t) => typeof t < "u", c_ = Object.prototype.toString, p_ = (t) => c_.call(t) === "[object Object]", f_ = () => {
};
function md(...t) {
  if (t.length !== 1)
    return Vs(...t);
  const e = t[0];
  return typeof e == "function" ? Ra(Ls(() => ({ get: e, set: f_ }))) : O(e);
}
function v_(t, e) {
  function a(...n) {
    return new Promise((o, r) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(o).catch(r);
    });
  }
  return a;
}
const hd = (t) => t();
function m_(t = hd, e = {}) {
  const {
    initialState: a = "active"
  } = e, n = md(a === "active");
  function o() {
    n.value = !1;
  }
  function r() {
    n.value = !0;
  }
  const l = (...i) => {
    n.value && t(...i);
  };
  return { isActive: Ra(n), pause: o, resume: r, eventFilter: l };
}
function Vl(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function os(t) {
  return Array.isArray(t) ? t : [t];
}
function h_(t) {
  return Oe();
}
function g_(t, e, a = {}) {
  const {
    eventFilter: n = hd,
    ...o
  } = a;
  return X(
    t,
    v_(
      n,
      e
    ),
    o
  );
}
function y_(t, e, a = {}) {
  const {
    eventFilter: n,
    initialState: o = "active",
    ...r
  } = a, { eventFilter: l, pause: i, resume: u, isActive: d } = m_(n, { initialState: o });
  return { stop: g_(
    t,
    e,
    {
      ...r,
      eventFilter: l
    }
  ), pause: i, resume: u, isActive: d };
}
function gd(t, e = !0, a) {
  h_() ? ue(t, a) : e ? t() : ne(t);
}
function b_(t, e, a) {
  return X(
    t,
    e,
    {
      ...a,
      immediate: !0
    }
  );
}
const ln = u_ ? window : void 0;
function yd(t) {
  var e;
  const a = Ce(t);
  return (e = a == null ? void 0 : a.$el) != null ? e : a;
}
function ro(...t) {
  const e = [], a = () => {
    e.forEach((i) => i()), e.length = 0;
  }, n = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), o = C(() => {
    const i = os(Ce(t[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = b_(
    () => {
      var i, u;
      return [
        (u = (i = o.value) == null ? void 0 : i.map((d) => yd(d))) != null ? u : [ln].filter((d) => d != null),
        os(Ce(o.value ? t[1] : t[0])),
        os(s(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ce(o.value ? t[3] : t[2])
      ];
    },
    ([i, u, d, c]) => {
      if (a(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = p_(c) ? { ...c } : c;
      e.push(
        ...i.flatMap(
          (y) => u.flatMap(
            (m) => d.map((h) => n(y, m, h, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), a();
  };
  return s_(a), l;
}
function __() {
  const t = Bt(!1), e = Oe();
  return e && ue(() => {
    t.value = !0;
  }, e), t;
}
function w_(t) {
  const e = __();
  return C(() => (e.value, !!t()));
}
const x_ = Symbol("vueuse-ssr-width");
function C_() {
  const t = Ql() ? r_(x_, null) : null;
  return typeof t == "number" ? t : void 0;
}
function bd(t, e = {}) {
  const { window: a = ln, ssrWidth: n = C_() } = e, o = w_(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), r = Bt(typeof n == "number"), l = Bt(), i = Bt(!1), u = (d) => {
    i.value = d.matches;
  };
  return ge(() => {
    if (r.value) {
      r.value = !o.value;
      const d = Ce(t).split(",");
      i.value = d.some((c) => {
        const p = c.includes("not all"), y = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(y || m);
        return y && h && (h = n >= Vl(y[1])), m && h && (h = n <= Vl(m[1])), p ? !h : h;
      });
      return;
    }
    o.value && (l.value = a.matchMedia(Ce(t)), i.value = l.value.matches);
  }), ro(l, "change", u, { passive: !0 }), C(() => i.value);
}
function $_(t) {
  return JSON.parse(JSON.stringify(t));
}
const Rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vn = "__vueuse_ssr_handlers__", B_ = /* @__PURE__ */ k_();
function k_() {
  return Vn in Rn || (Rn[Vn] = Rn[Vn] || {}), Rn[Vn];
}
function _d(t, e) {
  return B_[t] || e;
}
function E_(t) {
  return bd("(prefers-color-scheme: dark)", t);
}
function D_(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const S_ = {
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
}, Fl = "vueuse-storage";
function P_(t, e, a, n = {}) {
  var o;
  const {
    flush: r = "pre",
    deep: l = !0,
    listenToStorageChanges: i = !0,
    writeDefaults: u = !0,
    mergeDefaults: d = !1,
    shallow: c,
    window: p = ln,
    eventFilter: y,
    onError: m = (z) => {
      console.error(z);
    },
    initOnMounted: h
  } = n, g = (c ? Bt : O)(typeof e == "function" ? e() : e), x = C(() => Ce(t));
  if (!a)
    try {
      a = _d("getDefaultStorage", () => {
        var z;
        return (z = ln) == null ? void 0 : z.localStorage;
      })();
    } catch (z) {
      m(z);
    }
  if (!a)
    return g;
  const B = Ce(e), k = D_(B), $ = (o = n.serializer) != null ? o : S_[k], { pause: E, resume: D } = y_(
    g,
    () => M(g.value),
    { flush: r, deep: l, eventFilter: y }
  );
  X(x, () => V(), { flush: r });
  let T = !1;
  const P = (z) => {
    h && !T || V(z);
  }, L = (z) => {
    h && !T || j(z);
  };
  p && i && (a instanceof Storage ? ro(p, "storage", P, { passive: !0 }) : ro(p, Fl, L)), h ? gd(() => {
    T = !0, V();
  }) : V();
  function F(z, W) {
    if (p) {
      const Q = {
        key: x.value,
        oldValue: z,
        newValue: W,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", Q) : new CustomEvent(Fl, {
        detail: Q
      }));
    }
  }
  function M(z) {
    try {
      const W = a.getItem(x.value);
      if (z == null)
        F(W, null), a.removeItem(x.value);
      else {
        const Q = $.write(z);
        W !== Q && (a.setItem(x.value, Q), F(W, Q));
      }
    } catch (W) {
      m(W);
    }
  }
  function R(z) {
    const W = z ? z.newValue : a.getItem(x.value);
    if (W == null)
      return u && B != null && a.setItem(x.value, $.write(B)), B;
    if (!z && d) {
      const Q = $.read(W);
      return typeof d == "function" ? d(Q, B) : k === "object" && !Array.isArray(Q) ? { ...B, ...Q } : Q;
    } else return typeof W != "string" ? W : $.read(W);
  }
  function V(z) {
    if (!(z && z.storageArea !== a)) {
      if (z && z.key == null) {
        g.value = B;
        return;
      }
      if (!(z && z.key !== x.value)) {
        E();
        try {
          (z == null ? void 0 : z.newValue) !== $.write(g.value) && (g.value = R(z));
        } catch (W) {
          m(W);
        } finally {
          z ? ne(D) : D();
        }
      }
    }
  }
  function j(z) {
    V(z.detail);
  }
  return g;
}
const O_ = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function A_(t = {}) {
  const {
    selector: e = "html",
    attribute: a = "class",
    initialValue: n = "auto",
    window: o = ln,
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
  }, y = E_({ window: o }), m = C(() => y.value ? "dark" : "light"), h = u || (l == null ? md(n) : P_(l, n, r, { window: o, listenToStorageChanges: i })), g = C(() => h.value === "auto" ? m.value : h.value), x = _d(
    "updateHTMLAttrs",
    (E, D, T) => {
      const P = typeof E == "string" ? o == null ? void 0 : o.document.querySelector(E) : yd(E);
      if (!P)
        return;
      const L = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
      let M = null;
      if (D === "class") {
        const V = T.split(/\s/g);
        Object.values(p).flatMap((j) => (j || "").split(/\s/g)).filter(Boolean).forEach((j) => {
          V.includes(j) ? L.add(j) : F.add(j);
        });
      } else
        M = { key: D, value: T };
      if (L.size === 0 && F.size === 0 && M === null)
        return;
      let R;
      c && (R = o.document.createElement("style"), R.appendChild(document.createTextNode(O_)), o.document.head.appendChild(R));
      for (const V of L)
        P.classList.add(V);
      for (const V of F)
        P.classList.remove(V);
      M && P.setAttribute(M.key, M.value), c && (o.getComputedStyle(R).opacity, document.head.removeChild(R));
    }
  );
  function B(E) {
    var D;
    x(e, a, (D = p[E]) != null ? D : E);
  }
  function k(E) {
    t.onChanged ? t.onChanged(E, B) : B(E);
  }
  X(g, k, { flush: "post", immediate: !0 }), gd(() => k(g.value));
  const $ = C({
    get() {
      return d ? h.value : g.value;
    },
    set(E) {
      h.value = E;
    }
  });
  return Object.assign($, { store: h, system: m, state: g });
}
function M_(t = {}) {
  const {
    valueDark: e = "dark",
    valueLight: a = ""
  } = t, n = A_({
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
function Nr(t, e, a, n = {}) {
  var o, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: y
  } = n, m = Oe(), h = a || (m == null ? void 0 : m.emit) || ((o = m == null ? void 0 : m.$emit) == null ? void 0 : o.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  e || (e = "modelValue"), g = g || `update:${e.toString()}`;
  const x = ($) => i ? typeof i == "function" ? i($) : $_($) : $, B = () => d_(t[e]) ? x(t[e]) : p, k = ($) => {
    y ? y($) && h(g, $) : h(g, $);
  };
  if (u) {
    const $ = B(), E = O($);
    let D = !1;
    return X(
      () => t[e],
      (T) => {
        D || (D = !0, E.value = x(T), ne(() => D = !1));
      }
    ), X(
      E,
      (T) => {
        !D && (T !== t[e] || c) && k(T);
      },
      { deep: c }
    ), E;
  } else
    return C({
      get() {
        return B();
      },
      set($) {
        k($);
      }
    });
}
const gx = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = Mt(e, "class");
    return (n, o) => (v(), _(s(qb), S({ "data-slot": "avatar-fallback" }, s(a), {
      class: s(I)("bg-muted flex size-full items-center justify-center rounded-full", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yx = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Jb), S({ "data-slot": "avatar-image" }, e, { class: "aspect-square size-full" }), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bx = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    type: {},
    size: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)(s(T_)({ variant: a.variant, type: a.type, size: a.size }), e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), T_ = jt(
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
), _x = /* @__PURE__ */ b({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("nav", {
      "aria-label": "breadcrumb",
      class: G(e.class)
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), wx = /* @__PURE__ */ b({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: G(s(I)("flex h-9 w-9 items-center justify-center", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        A(s(Zu), { class: "h-4 w-4" })
      ]),
      n[0] || (n[0] = he("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), xx = /* @__PURE__ */ b({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("li", {
      class: G(s(I)("inline-flex items-center gap-1.5", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Cx = /* @__PURE__ */ b({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), {
      as: a.as,
      "as-child": a.asChild,
      class: G(s(I)("hover:text-foreground transition-colors", e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), $x = /* @__PURE__ */ b({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("ol", {
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
}), Bx = /* @__PURE__ */ b({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: G(s(I)("text-foreground font-normal", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), kx = /* @__PURE__ */ b({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: G(s(I)("[&>svg]:h-3.5 [&>svg]:w-3.5", e.class))
    }, [
      w(a.$slots, "default", {}, () => [
        A(s(Tr))
      ])
    ], 2));
  }
}), Tt = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(s(K), {
      as: a.as,
      "as-child": a.asChild,
      class: G(s(I)(s(ma)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default"),
        a.loading ? (v(), _(s(Jy), {
          key: 0,
          class: G(s(I_)({ size: a.size }))
        }, null, 8, ["class"])) : ae("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), I_ = jt("animate-spin", {
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
}), ma = jt(
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
), Ex = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(
        s(I)("border-card-border bg-card text-card-foreground rounded-lg border shadow-xs", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Dx = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)("flex flex-col gap-y-1.5 p-6", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Sx = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("h3", {
      class: G(s(I)("text-2xl font-semibold leading-none tracking-tight", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Px = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("p", {
      class: G(s(I)("text-muted-foreground text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ox = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)("p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)("flex items-center p-6 pt-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Mx = /* @__PURE__ */ b({
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
    const o = Ot(t, e);
    return (r, l) => (v(), _(s(x0), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tx = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = fa(a);
    return (o, r) => (v(), _(s(r0), S(s(n), {
      class: s(I)("w-[200px]", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ix = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(E0), S(a.value, {
      class: s(I)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(O0), S(a.value, {
      class: s(I)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e.class)
    }), {
      default: f(() => [
        n.heading ? (v(), _(s(N0), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: f(() => [
            Z(re(n.heading), 1)
          ]),
          _: 1
        })) : ae("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vx = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = Ot(o, n);
    return (l, i) => (v(), _(s(M0), S(s(r), {
      class: s(I)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", a.class)
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fx = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = Ot(o, n);
    return (l, i) => (v(), _(s(F0), S(s(r), {
      class: s(I)("relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", a.class)
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lx = /* @__PURE__ */ b({
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
    }), r = Ot(o, n);
    return (l, i) => (v(), _(s(z0), null, {
      default: f(() => [
        A(s(k0), S(s(r), {
          class: s(I)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a.class)
        }), {
          default: f(() => [
            A(s(H0), null, {
              default: f(() => [
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
}), Nx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(K0), S(a.value, {
      class: s(I)("-mx-1 h-px bg-border", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R_ = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, zx = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(uu), S({
      class: s(I)("p-3", a.class)
    }, s(r)), {
      default: f(({ grid: u, weekDays: d }) => [
        A(s(Ed), null, {
          default: f(() => [
            A(s(F_)),
            A(s(Dd)),
            A(s(V_))
          ]),
          _: 1
        }),
        he("div", R_, [
          (v(!0), N(oe, null, we(u, (c) => (v(), _(s(Cd), {
            key: c.value.toString()
          }, {
            default: f(() => [
              A(s(Bd), null, {
                default: f(() => [
                  A(s(lo), null, {
                    default: f(() => [
                      (v(!0), N(oe, null, we(d, (p) => (v(), _(s(kd), { key: p }, {
                        default: f(() => [
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
              A(s($d), null, {
                default: f(() => [
                  (v(!0), N(oe, null, we(c.rows, (p, y) => (v(), _(s(lo), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), N(oe, null, we(p, (m) => (v(), _(s(wd), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          A(s(xd), {
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
}), wd = /* @__PURE__ */ b({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Pv), S({
      class: s(I)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-slate-100 dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xd = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Vv), S({
      class: s(I)(
        s(ma)({ variant: "ghost" }),
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
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cd = /* @__PURE__ */ b({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Sv), S({
      class: s(I)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $d = /* @__PURE__ */ b({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Iv), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bd = /* @__PURE__ */ b({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Tv), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lo = /* @__PURE__ */ b({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Rv), S({
      class: s(I)("flex", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kd = /* @__PURE__ */ b({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Ov), S({
      class: s(I)("w-9 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ed = /* @__PURE__ */ b({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Ev), S({
      class: s(I)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dd = /* @__PURE__ */ b({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Dv), S({
      class: s(I)("text-text text-sm font-medium", e.class)
    }, s(n)), {
      default: f(({ headingValue: l }) => [
        w(o.$slots, "default", { headingValue: l }, () => [
          Z(re(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V_ = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Av), S({
      class: s(I)(
        s(ma)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => r[0] || (r[0] = [
        Z(" > ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), F_ = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Mv), S({
      class: s(I)(
        s(ma)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => r[0] || (r[0] = [
        Z(" < ")
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), Os = /* @__PURE__ */ b({
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
    const o = de(t, e);
    return (r, l) => (v(), _(s(Lh), U(q(s(o))), {
      default: f(({ open: i }) => [
        w(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), As = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(ug), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ms = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Kh), S(s(n), {
      class: s(I)(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-start text-sm transition focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:ring-offset-0 dark:hover:bg-slate-800 dark:focus:ring-slate-800 [&>span]:truncate",
        e.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        A(s(dg), { "as-child": "" }, {
          default: f(() => [
            A(s(Po), {
              class: G(["size-4 shrink-0 opacity-50 transition", o.open ? "rotate-180" : ""])
            }, null, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ts = /* @__PURE__ */ b({
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
    }), r = de(o, n);
    return (l, i) => (v(), _(s(Wh), null, {
      default: f(() => [
        A(s(Qh), S({ ...s(r), ...l.$attrs }, {
          class: s(I)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: f(() => [
            A(s(N_)),
            A(s(rg), {
              class: G(
                s(I)(
                  "p-1",
                  l.position === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
                )
              )
            }, {
              default: f(() => [
                w(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            A(s(z_))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Kx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(og), S({
      class: s(I)("w-full p-1", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Is = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(eg), S(s(n), {
      class: s(I)(
        "focus:text-accent-foreground focus:bg-accent relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 dark:text-slate-200 dark:focus:bg-slate-800",
        e.class
      )
    }), {
      default: f(() => [
        he("span", L_, [
          A(s(tg), null, {
            default: f(() => [
              A(s(Mr), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        A(s(Su), null, {
          default: f(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wx = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Su), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hx = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(sg), {
      class: G(s(I)("py-1.5 pl-8 pr-2 text-sm font-semibold", e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ux = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(Xh), S(a.value, {
      class: s(I)("bg-muted -mx-1 my-1 h-px", e.class)
    }), null, 16, ["class"]));
  }
}), N_ = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(lg), S(s(n), {
      class: s(I)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          A(s(jy), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z_ = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(ig), S(s(n), {
      class: s(I)("flex cursor-default items-center justify-center py-1", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          A(s(Po), { class: "text-primary size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K_ = { class: "flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, W_ = /* @__PURE__ */ b({
  __name: "CalendarWithSelect",
  props: {
    modelValue: { default: void 0 },
    multiple: { type: Boolean },
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: { default() {
      return jn(Et());
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
    }), r = Nr(a, "modelValue", n, {
      passive: !0,
      defaultValue: jn(Et())
    }), l = de(o, n), i = Yi("en");
    return (u, d) => (v(), _(s(uu), S({
      placeholder: s(r),
      "onUpdate:placeholder": d[2] || (d[2] = (c) => We(r) ? r.value = c : null)
    }, s(l), {
      class: s(I)("rounded-md border p-3", a.class)
    }), {
      default: f(({ date: c, grid: p, weekDays: y }) => [
        A(s(Ed), null, {
          default: f(() => [
            A(s(Dd), { class: "flex w-full items-center justify-between gap-2" }, {
              default: f(() => [
                A(s(Os), {
                  "default-value": s(r).month.toString(),
                  "onUpdate:modelValue": d[0] || (d[0] = (m) => {
                    var h;
                    !m || !s(r) || Number(m) !== ((h = s(r)) == null ? void 0 : h.month) && (r.value = s(r).set({
                      month: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    A(s(Ms), {
                      "aria-label": "Select month",
                      class: "w-[60%]"
                    }, {
                      default: f(() => [
                        A(s(As), { placeholder: "Select month" })
                      ]),
                      _: 1
                    }),
                    A(s(Ts), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), N(oe, null, we(s(Jc)({ dateObj: c }), (m) => (v(), _(s(Is), {
                          key: m.toString(),
                          value: m.month.toString()
                        }, {
                          default: f(() => [
                            Z(re(s(i).custom(s(Je)(m), { month: "long" })), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]))), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["default-value"]),
                A(s(Os), {
                  "default-value": s(r).year.toString(),
                  "onUpdate:modelValue": d[1] || (d[1] = (m) => {
                    var h;
                    !m || !s(r) || Number(m) !== ((h = s(r)) == null ? void 0 : h.year) && (r.value = s(r).set({
                      year: Number(m)
                    }));
                  })
                }, {
                  default: f(() => [
                    A(s(Ms), {
                      "aria-label": "Select year",
                      class: "w-[40%]"
                    }, {
                      default: f(() => [
                        A(s(As), { placeholder: "Select year" })
                      ]),
                      _: 1
                    }),
                    A(s(Ts), { class: "max-h-[200px]" }, {
                      default: f(() => [
                        (v(!0), N(oe, null, we(s(Yc)({ dateObj: c, startIndex: -100, endIndex: 10 }), (m) => (v(), _(s(Is), {
                          key: m.toString(),
                          value: m.year.toString()
                        }, {
                          default: f(() => [
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
        he("div", K_, [
          (v(!0), N(oe, null, we(p, (m) => (v(), _(s(Cd), {
            key: m.value.toString()
          }, {
            default: f(() => [
              A(s(Bd), null, {
                default: f(() => [
                  A(s(lo), null, {
                    default: f(() => [
                      (v(!0), N(oe, null, we(y, (h) => (v(), _(s(kd), { key: h }, {
                        default: f(() => [
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
              A(s($d), { class: "grid" }, {
                default: f(() => [
                  (v(!0), N(oe, null, we(m.rows, (h, g) => (v(), _(s(lo), {
                    key: `weekDate-${g}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), N(oe, null, we(h, (x) => (v(), _(s(wd), {
                        key: x.toString(),
                        date: x
                      }, {
                        default: f(() => [
                          A(s(xd), {
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
}), H_ = /* @__PURE__ */ b({
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
    }), r = de(o, n);
    return (l, i) => (v(), _(s(Qv), S(s(r), {
      class: [
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        a.class
      ]
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sd = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = de(t, e);
    return (r, l) => (v(), _(s(tu), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jx = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(yn), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), U_ = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(au), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j_ = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)("flex flex-col gap-y-1.5 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), G_ = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(ru), S(s(n), {
      class: s(I)("text-heading text-2xl font-semibold leading-none tracking-tight", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q_ = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(lu), S(s(n), {
      class: s(I)("text-sub-text text-sm", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pd = /* @__PURE__ */ b({
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
      const { class: l, ...i } = n;
      return i;
    }), r = de(o, a);
    return (l, i) => (v(), _(s(mr), null, {
      default: f(() => [
        A(s(_r), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        A(s(br), S(s(r), {
          class: s(I)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
            n.class
          )
        }), {
          default: f(() => [
            w(l.$slots, "default"),
            A(s(yn), {
              onClick: i[0] || (i[0] = (u) => a("close", u)),
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
            }, {
              default: f(() => [
                A(s(Oo), { class: "size-4 dark:text-slate-300" }),
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
}), Gx = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(mr), null, {
      default: f(() => [
        A(s(_r), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80" }, {
          default: f(() => [
            A(s(br), S({
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
              default: f(() => [
                w(l.$slots, "default"),
                A(s(yn), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" }, {
                  default: f(() => [
                    A(s(Oo), { class: "size-4" }),
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
}), Y_ = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(
        s(I)("text-text flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class)
      )
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), qx = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = de(t, e);
    return (r, l) => (v(), _(s(Sd), U(q(s(o))), {
      default: f(() => [
        A(s(Pd), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: f(() => [
            A(H_, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: f(() => [
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
}), Yx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(sm), S(a.value, {
      class: s(I)("py-6 text-center text-sm", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jx = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(em), S(a.value, {
      class: s(I)(
        "overflow-hidden p-1 text-slate-950 dark:text-slate-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:[&_[cmdk-group-heading]]:text-slate-400",
        e.class
      )
    }), {
      default: f(() => [
        n.heading ? (v(), _(s(tm), {
          key: 0,
          class: "px-1 py-1 text-xs font-medium text-slate-500 dark:text-slate-400"
        }, {
          default: f(() => [
            Z(re(n.heading), 1)
          ]),
          _: 1
        })) : ae("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J_ = { class: "flex items-center border-b px-3" }, Qx = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), N("div", J_, [
      A(s(tb), { class: "mr-2 size-4 shrink-0 opacity-50" }),
      A(s(Xv), S({ ...s(n), ...o.$attrs }, {
        "auto-focus": "",
        class: s(I)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Xx = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(um), S(s(r), { class: "relative flex cursor-default select-none rounded-sm px-1.5 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-slate-100 data-highlighted:text-slate-900 data-disabled:opacity-50 dark:data-highlighted:bg-slate-800 dark:data-highlighted:text-slate-50" }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q_ = { role: "presentation" }, Zx = /* @__PURE__ */ b({
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
    }), r = de(o, n);
    return (l, i) => (v(), _(s(om), S(s(r), {
      class: s(I)("max-h-[300px] overflow-y-auto overflow-x-hidden", a.class)
    }), {
      default: f(() => [
        he("div", Q_, [
          w(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(dm), S(a.value, {
      class: s(I)("-mx-1 h-px bg-slate-200 dark:bg-slate-800", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tC = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("span", {
      class: G(s(I)("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), X_ = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = de(t, e);
    return (r, l) => (v(), _(s(Wm), U(q(s(o))), {
      default: f(({ open: i }) => [
        w(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), Z_ = /* @__PURE__ */ b({
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
    return (a, n) => (v(), N("div", {
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
}), ew = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = me(t);
    return (n, o) => (v(), _(s(Hm), S({ class: "outline-hidden" }, s(a)), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tw = /* @__PURE__ */ b({
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
    }), r = de(o, n);
    return (l, i) => (v(), _(s(Um), null, {
      default: f(() => [
        A(s(jm), S(s(r), {
          class: s(I)(
            "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), aC = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Gm), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nC = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = de(t, e);
    return (r, l) => (v(), _(s(Qm), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oC = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Cu), S(s(n), {
      class: s(I)(
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
}), aw = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(Z_, {
      class: G(e.class)
    }, {
      default: f(() => [
        A(s(Cu), S(s(n), {
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
}), nw = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, sC = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(Ym), S(s(r), {
      class: s(I)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        he("span", nw, [
          A(s($u), null, {
            default: f(() => [
              A(s(Mr), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ow = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, rC = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(Xm), S(s(r), {
      class: s(I)(
        "focus:text-accent-foreground focus:bg-accent relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-disabled:pointer-events-none data-disabled:opacity-50",
        a.class
      )
    }), {
      default: f(() => [
        he("span", ow, [
          A(s($u), null, {
            default: f(() => [
              A(s(Yy), { class: "size-2 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lC = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("span", {
      class: G(s(I)("ml-auto text-xs tracking-widest opacity-60", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), iC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(qm), S(a.value, {
      class: s(I)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e.class)
    }), null, 16, ["class"]));
  }
}), uC = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Jm), S(s(n), {
      class: s(I)("px-2 py-1.5 text-sm font-semibold", o.inset && "pl-8", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dC = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = de(t, e);
    return (r, l) => (v(), _(s(Zm), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cC = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(th), S(s(n), {
      class: s(I)(
        "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden",
        e.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        A(s(Tr), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pC = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(eh), S(s(r), {
      class: s(I)(
        "border-border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sw = { class: "text-xs text-slate-600 dark:text-slate-300" }, rw = /* @__PURE__ */ b({
  __name: "CharacterCount",
  props: {
    count: {}
  },
  setup(t) {
    return (e, a) => (v(), N("div", sw, "Characters: " + re(e.count), 1));
  }
}), Cn = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [n, o] of e)
    a[n] = o;
  return a;
}, lw = {}, iw = { class: "text-sm text-slate-400 dark:text-slate-500" };
function uw(t, e) {
  return v(), N("div", iw, [
    w(t.$slots, "default")
  ]);
}
const dw = /* @__PURE__ */ Cn(lw, [["render", uw]]), cw = { class: "text-sm text-red-600 dark:text-red-400" }, pw = /* @__PURE__ */ b({
  __name: "Error",
  props: {
    error: {}
  },
  setup(t) {
    return (e, a) => ra((v(), N("div", null, [
      he("p", cw, re(e.error), 1)
    ], 512)), [
      [vo, e.error]
    ]);
  }
}), fw = {}, vw = { class: "w-full space-y-4 p-1.5" };
function mw(t, e) {
  return v(), N("div", vw, [
    w(t.$slots, "default")
  ]);
}
const fC = /* @__PURE__ */ Cn(fw, [["render", mw]]), hw = {}, gw = { class: "my-4" };
function yw(t, e) {
  return v(), N("div", gw, [
    w(t.$slots, "default")
  ]);
}
const bw = /* @__PURE__ */ Cn(hw, [["render", yw]]), _w = { class: "grid gap-4 md:grid-cols-2" }, vC = /* @__PURE__ */ b({
  __name: "FormGrid",
  setup(t) {
    return (e, a) => (v(), _(bw, null, {
      default: f(() => [
        he("div", _w, [
          w(e.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), Od = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(ah), S(a.value, {
      class: s(I)(
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
}), ww = { class: "relative" }, xw = {
  name: "Base",
  inheritAttrs: !1
}, ha = /* @__PURE__ */ b({
  ...xw,
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
      return v(), N("div", null, [
        e.label && e.showLabel ? (v(), _(s(Od), {
          key: 0,
          id: e.id
        }, {
          default: f(() => [
            Z(re(e.label), 1)
          ]),
          _: 1
        }, 8, ["id"])) : ae("", !0),
        he("div", ww, [
          w(e.$slots, "default"),
          e.showCharacterCount ? (v(), _(s(rw), {
            key: 0,
            count: (n = e.modelValue) == null ? void 0 : n.length,
            class: "absolute right-0 mt-[5px]"
          }, null, 8, ["count"])) : ae("", !0)
        ]),
        A(s(dw), { class: "mt-[2px]" }, {
          default: f(() => [
            Z(re(e.description), 1)
          ]),
          _: 1
        }),
        A(s(pw), { error: e.error }, null, 8, ["error"])
      ]);
    };
  }
}), Cw = { class: "flex gap-2" }, mC = /* @__PURE__ */ b({
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
    return X(o, (r) => {
      a("update:modelValue", r);
    }), (r, l) => (v(), _(s(ha), U(q(r.$props)), {
      default: f(() => [
        he("div", Cw, [
          A(s(zv), {
            id: r.id,
            checked: o.value,
            "onUpdate:checked": l[0] || (l[0] = (i) => o.value = i),
            class: "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:border-primary dark:ring-offset-primary dark:focus-visible:ring-primary-foreground dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground peer size-4 shrink-0 rounded-sm border border-slate-600 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }, {
            default: f(() => [
              A(s(Kv), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: f(() => [
                  A(s(Mr), { class: "size-4" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "checked"]),
          r.text ? (v(), _(s(Od), {
            key: 0,
            id: r.id,
            class: "my-auto"
          }, {
            default: f(() => [
              Z(re(r.text), 1)
            ]),
            _: 1
          }, 8, ["id"])) : ae("", !0)
        ])
      ]),
      _: 1
    }, 16));
  }
}), $w = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = de(t, e);
    return (r, l) => (v(), _(s(ph), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bw = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(fh), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kw = /* @__PURE__ */ b({
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
    }), r = de(o, n);
    return (l, i) => (v(), _(s(vh), null, {
      default: f(() => [
        A(s(gh), S({ ...s(r), ...l.$attrs }, {
          class: s(I)(
            "border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-white p-4 text-slate-950 shadow-md outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a.class
          )
        }), {
          default: f(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), hC = /* @__PURE__ */ b({
  __name: "DatePicker",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "Pick a date" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = new lt("en-US", {
      dateStyle: "long"
    }), r = O(n.modelValue);
    return X(r, () => {
      a("update:modelValue", r.value);
    }), ue(() => {
      if (n.defaultValue)
        r.value = n.defaultValue;
      else if (r.value === null) {
        const l = /* @__PURE__ */ new Date();
        r.value = new De(
          l.getFullYear(),
          l.getMonth() + 1,
          l.getDate()
        );
      }
    }), (l, i) => (v(), _(s(ha), U(q(l.$props)), {
      default: f(() => [
        A(s($w), null, {
          default: f(() => [
            A(s(Bw), { "as-child": "" }, {
              default: f(() => [
                A(s(Tt), {
                  variant: "outline",
                  class: G(["text-text w-[280px] justify-start text-left font-normal"])
                }, {
                  default: f(() => [
                    A(s(Hy), { class: "mr-2 size-4" }),
                    Z(" " + re(r.value ? s(o).format(r.value.toDate(s(Et)())) : l.placeholder), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            A(s(kw), { class: "w-auto p-0" }, {
              default: f(() => [
                A(s(W_), {
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
var Ie = [];
for (var ss = 0; ss < 256; ++ss)
  Ie.push((ss + 256).toString(16).slice(1));
function Ew(t, e = 0) {
  return (Ie[t[e + 0]] + Ie[t[e + 1]] + Ie[t[e + 2]] + Ie[t[e + 3]] + "-" + Ie[t[e + 4]] + Ie[t[e + 5]] + "-" + Ie[t[e + 6]] + Ie[t[e + 7]] + "-" + Ie[t[e + 8]] + Ie[t[e + 9]] + "-" + Ie[t[e + 10]] + Ie[t[e + 11]] + Ie[t[e + 12]] + Ie[t[e + 13]] + Ie[t[e + 14]] + Ie[t[e + 15]]).toLowerCase();
}
var Fn, Dw = new Uint8Array(16);
function Sw() {
  if (!Fn && (Fn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Fn(Dw);
}
var Pw = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ll = {
  randomUUID: Pw
};
function Ow(t, e, a) {
  if (Ll.randomUUID && !t)
    return Ll.randomUUID();
  t = t || {};
  var n = t.random || (t.rng || Sw)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Ew(n);
}
const Aw = { class: "flex items-center space-x-2" }, Mw = ["src"], Tw = ["accept"], gC = /* @__PURE__ */ b({
  __name: "ImageUpload",
  props: {
    modelValue: {},
    currentImage: {},
    defaultImage: {},
    accept: { default: "image/gif, image/jpeg, image/png" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = "file-upload-" + Ow(), r = C(() => i.value ? URL.createObjectURL(i.value) : null), l = a.currentImage ? a.currentImage : a.defaultImage, i = C({
      get: () => a.modelValue,
      set: (c) => n("update:modelValue", c)
    }), u = (c) => {
      i.value = c.target.files[0];
    }, d = () => document.getElementById(o).click();
    return (c, p) => (v(), _(s(ha), U(q(c.$props)), {
      default: f(() => [
        he("div", Aw, [
          w(c.$slots, "image", {
            newImage: r.value,
            curImage: s(l)
          }, () => [
            he("img", {
              src: r.value ?? s(l),
              alt: "Image cannot be shown right now",
              class: "size-24 rounded-full dark:bg-slate-900"
            }, null, 8, Mw)
          ]),
          he("input", {
            id: o,
            accept: c.accept,
            hidden: "",
            type: "file",
            onInput: u
          }, null, 40, Tw),
          A(s(Tt), {
            variant: "outline",
            onClick: d
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
}), Iw = ["disabled", "placeholder", "required", "type"], Rw = /* @__PURE__ */ b({
  __name: "Input",
  props: /* @__PURE__ */ is({
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
    const e = Xl(t, "modelValue");
    return (a, n) => (v(), _(s(ha), U(q(a.$props)), {
      default: f(() => [
        ra(he("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.value = o),
          disabled: a.disabled,
          placeholder: a.placeholder,
          required: a.required,
          type: a.type,
          class: G(["flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-black ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-600 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !a.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": a.error
          }])
        }, null, 10, Iw), [
          [zd, e.value]
        ])
      ]),
      _: 1
    }, 16));
  }
}), yC = /* @__PURE__ */ b({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select an Option" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const a = e, n = t, o = C(() => n.placeholder ?? "Select an option..."), r = O(
      n.modelValue ? n.options.find((l) => l === n.modelValue) : null
    );
    return X(r, () => {
      a("update:modelValue", r.value);
    }), (l, i) => (v(), _(s(ha), U(q(l.$props)), {
      default: f(() => [
        A(s(Os), {
          modelValue: r.value,
          "onUpdate:modelValue": i[0] || (i[0] = (u) => r.value = u)
        }, {
          default: f(({ open: u }) => [
            A(s(Ms), { open: u }, {
              default: f(() => [
                A(s(As), { placeholder: o.value }, null, 8, ["placeholder"])
              ]),
              _: 2
            }, 1032, ["open"]),
            A(s(Ts), null, {
              default: f(() => [
                (v(!0), N(oe, null, we(l.options, (d) => (v(), _(s(Is), { value: d }, {
                  default: f(() => [
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
}), Vw = ["placeholder"], bC = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    modelValue: {},
    class: {},
    placeholder: {},
    error: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = Nr(t, "modelValue", e, {
      passive: !0
    });
    return (r, l) => (v(), _(s(ha), U(q(r.$props)), {
      default: f(() => [
        ra(he("textarea", {
          "onUpdate:modelValue": l[0] || (l[0] = (i) => We(o) ? o.value = i : null),
          placeholder: r.placeholder,
          class: G(["flex min-h-20 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-black ring-offset-white placeholder:text-slate-500 focus-visible:border-slate-950 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus-visible:border-slate-300", {
            "focus-visible:ring-slate-950 dark:focus-visible:ring-slate-400": !r.error,
            "focus-visible:ring-red-600 dark:focus-visible:ring-red-400": r.error
          }])
        }, null, 10, Vw), [
          [Kd, s(o)]
        ])
      ]),
      _: 1
    }, 16));
  }
}), Fw = /* @__PURE__ */ b({
  __name: "Toggle",
  props: /* @__PURE__ */ is({
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
  emits: /* @__PURE__ */ is(["update:checked", "update:modelValue"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const a = e, n = t, o = Xl(t, "modelValue");
    X(o, () => {
      a("update:modelValue", o.value);
    });
    const r = C(() => {
      const { class: i, ...u } = n;
      return u;
    }), l = de(r, a);
    return (i, u) => (v(), _(s(ha), U(q(i.$props)), {
      default: f(() => [
        A(s(Tg), S({
          checked: o.value,
          "onUpdate:checked": u[0] || (u[0] = (d) => o.value = d)
        }, s(l), {
          class: s(I)(
            "focus-visible:ring-primary data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary-foreground dark:focus-visible:ring-primary-foreground dark:focus-visible:ring-offset-primary dark:data-[state=checked]:bg-primary dark:data-[state=unchecked]:bg-accent peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        }), {
          default: f(({ checked: d }) => [
            A(s(Ig), { class: "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-100 ease-in data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-50" }, {
              default: f(() => [
                d ? w(i.$slots, "checked", { key: 0 }) : ae("", !0),
                d ? ae("", !0) : w(i.$slots, "not-checked", { key: 1 })
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
}), Lw = { class: "my-auto text-slate-400 dark:text-slate-100" }, _C = /* @__PURE__ */ b({
  __name: "PaginationDetails",
  props: {
    min: {},
    max: {},
    total: {}
  },
  setup(t) {
    return (e, a) => (v(), N("div", Lw, " Showing " + re(e.min) + " to " + re(e.max) + " of " + re(e.total) + " results ", 1));
  }
}), wC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(oh), S(a.value, {
      class: s(I)("text-text flex size-9 items-center justify-center", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default", {}, () => [
          A(s(Zu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(sh), U(q(a.value)), {
      default: f(() => [
        A(s(Tt), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: s(Gy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), CC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(rh), U(q(a.value)), {
      default: f(() => [
        A(s(Tt), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: s(qy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), $C = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(uh), U(q(a.value)), {
      default: f(() => [
        A(s(Tt), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: s(Tr) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), BC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(dh), U(q(a.value)), {
      default: f(() => [
        A(s(Tt), {
          class: G(s(I)("size-10 p-0", e.class)),
          "as-child": "",
          variant: "outline"
        }, {
          default: f(() => [
            w(n.$slots, "default", { icon: s(Uy) })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16));
  }
}), kC = /* @__PURE__ */ b({
  __name: "LumuixModeToggle",
  setup(t) {
    const e = M_({
      selector: "html"
    });
    return (a, n) => (v(), _(Fw, {
      modelValue: s(e),
      "onUpdate:modelValue": n[0] || (n[0] = (o) => We(e) ? e.value = o : null)
    }, {
      checked: f(() => [
        A(s(Qy), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      "not-checked": f(() => [
        A(s(ab), { class: "text-primary m-auto mt-0.5 size-4" })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), EC = /* @__PURE__ */ b({
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
    return (o, r) => (v(), N(oe, null, [
      A(s(un), {
        onClick: n,
        class: G(e.class)
      }, {
        default: f(() => [
          (v(!0), N(oe, null, we(o.headers, (l) => (v(), _(s(io), {
            key: l.value
          }, {
            default: f(() => [
              o.$slots[`cell_header_${l.value}`] ? w(o.$slots, `cell_header_${l.value}`, {
                key: 0,
                item: o.row,
                open: a.value
              }) : (v(), N(oe, { key: 1 }, [
                Z(re(o.row[l.value]), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.row_actions ? (v(), _(s(Rs), { key: 0 }, {
            default: f(() => [
              w(o.$slots, "row_actions", { item: o.row })
            ]),
            _: 3
          })) : ae("", !0)
        ]),
        _: 3
      }, 8, ["class"]),
      a.value ? (v(!0), N(oe, { key: 0 }, we(o.subRows, (l, i) => (v(), _(s(un), { key: i }, {
        default: f(() => [
          (v(!0), N(oe, null, we(o.headers, (u) => (v(), _(s(io), {
            key: u.value
          }, {
            default: f(() => [
              o.$slots[`subrow_cell_${u.value}`] ? w(o.$slots, `subrow_cell_${u.value}`, {
                key: 0,
                item: l,
                open: a.value
              }) : (v(), N(oe, { key: 1 }, [
                Z(re("subrow_cell_" + u.value), 1)
              ], 64))
            ]),
            _: 2
          }, 1024))), 128)),
          o.$slots.sub_row_actions ? (v(), _(s(Rs), { key: 0 }, {
            default: f(() => [
              w(o.$slots, "sub_row_actions", {
                item: o.row,
                open: a.value
              })
            ]),
            _: 3
          })) : ae("", !0)
        ]),
        _: 2
      }, 1024))), 128)) : ae("", !0)
    ], 64));
  }
}), Nw = { class: "relative w-full overflow-auto" }, zw = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", Nw, [
      he("table", {
        class: G(s(I)("w-full caption-bottom text-sm", e.class))
      }, [
        w(a.$slots, "default")
      ], 2)
    ]));
  }
}), Kw = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("tbody", {
      class: G(s(I)("[&_tr:last-child]:border-0", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), io = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("td", {
      class: G(["text-text p-4 align-middle [&:has([role=checkbox])]:pr-0", e.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Ww = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("th", {
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
}), Hw = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("thead", {
      class: G(s(I)("[&_tr]:border-b", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), DC = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("tfoot", {
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
}), un = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("tr", {
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
}), Rs = /* @__PURE__ */ b({
  __name: "TableRowAction",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("td", {
      class: G(["w-32 p-4 text-center align-middle dark:text-slate-300", e.class])
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Uw = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("caption", {
      class: G(s(I)("text-sub-text mt-4 text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), jw = { class: "flex items-center justify-center py-10" }, SC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(un, null, {
      default: f(() => [
        A(io, S({
          class: s(I)(
            "whitespace-nowrap p-4 align-middle text-sm text-slate-950 dark:text-slate-50",
            e.class
          )
        }, a.value), {
          default: f(() => [
            he("div", jw, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), PC = /* @__PURE__ */ b({
  __name: "LumuixDatatable",
  props: {
    headers: {},
    rows: {},
    caption: {},
    rowActions: { type: Boolean }
  },
  setup(t) {
    return (e, a) => (v(), _(s(zw), null, {
      default: f(() => [
        e.caption ? (v(), _(s(Uw), { key: 0 }, {
          default: f(() => [
            Z(re(e.caption), 1)
          ]),
          _: 1
        })) : ae("", !0),
        A(s(Hw), null, {
          default: f(() => [
            A(s(un), null, {
              default: f(() => [
                (v(!0), N(oe, null, we(e.headers, (n, o) => (v(), _(s(Ww), null, {
                  default: f(() => [
                    e.$slots[`header_${e.headers[o].value}`] ? w(e.$slots, `header_${e.headers[o].value}`, {
                      key: 0,
                      item: n
                    }) : (v(), N(oe, { key: 1 }, [
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
        A(s(Kw), null, {
          default: f(() => [
            (v(!0), N(oe, null, we(e.rows, (n, o) => (v(), _(s(un), { key: o }, {
              default: f(() => [
                (v(!0), N(oe, null, we(e.headers, (r) => (v(), _(s(io), {
                  key: r.value
                }, {
                  default: f(() => [
                    e.$slots[`cell_${r.value}`] ? w(e.$slots, `cell_${r.value}`, {
                      key: 0,
                      item: n
                    }) : (v(), N(oe, { key: 1 }, [
                      Z(re(n[r.value]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128)),
                e.$slots.row_actions ? (v(), _(s(Rs), { key: 0 }, {
                  default: f(() => [
                    w(e.$slots, "row_actions", { item: n })
                  ]),
                  _: 2
                }, 1024)) : ae("", !0)
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
}), Gw = { class: "text-text" }, OC = /* @__PURE__ */ b({
  __name: "LumuixModal",
  props: {
    open: { type: Boolean },
    headerData: {},
    size: { default: "md" }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const a = e, n = () => a("close");
    return (o, r) => (v(), _(s(Sd), { open: o.open }, {
      default: f(() => [
        A(s(U_), { "as-child": "" }, {
          default: f(() => [
            w(o.$slots, "trigger")
          ]),
          _: 3
        }),
        A(s(Pd), {
          onClose: n,
          onEscapeKeyDown: n,
          onPointerDownOutside: n,
          class: G("max-w-" + o.size)
        }, {
          default: f(() => [
            A(s(j_), null, {
              default: f(() => [
                A(s(G_), null, {
                  default: f(() => {
                    var l;
                    return [
                      o.$slots.title ? w(o.$slots, "title", { key: 0 }) : (l = o.headerData) != null && l.title ? (v(), N(oe, { key: 1 }, [
                        Z(re(o.headerData.title), 1)
                      ], 64)) : ae("", !0)
                    ];
                  }),
                  _: 3
                }),
                A(s(q_), null, {
                  default: f(() => {
                    var l;
                    return [
                      o.$slots.description ? w(o.$slots, "description", { key: 0 }) : (l = o.headerData) != null && l.description ? (v(), N(oe, { key: 1 }, [
                        Z(re(o.headerData.description), 1)
                      ], 64)) : ae("", !0)
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            }),
            he("div", Gw, [
              o.$slots.content ? w(o.$slots, "content", { key: 0 }) : w(o.$slots, "default", { key: 1 })
            ]),
            A(s(Y_), null, {
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
}), qw = /* @__PURE__ */ b({
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
    const o = de(t, e);
    return (r, l) => (v(), _(s(Vg), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), AC = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Ng), S(s(n), {
      class: s(I)(
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
}), Yw = /* @__PURE__ */ b({
  __name: "TabsItem",
  props: {
    class: {},
    tab: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => {
      var o;
      return v(), _(Ke((o = a.tab) != null && o.is ? a.tab.is : "a"), {
        href: a.tab.href,
        class: G([
          a.tab.active ? "text-primary bg-white hover:bg-opacity-80 dark:bg-slate-950" : "hover:bg-white dark:hover:bg-slate-900",
          s(I)(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
            e.class
          )
        ])
      }, {
        default: f(() => {
          var r;
          return [
            (r = a.tab) != null && r.icon ? (v(), _(Ke(a.tab.icon), {
              key: 0,
              class: "size-5"
            })) : ae("", !0),
            Z(" " + re(a.tab.name), 1)
          ];
        }),
        _: 1
      }, 8, ["href", "class"]);
    };
  }
}), Nl = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(Fg), S(a.value, {
      class: s(I)(
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
}), MC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(Lg), S({
      class: s(I)(
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
}), Jw = {}, Qw = { class: "text-text mt-2 ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" };
function Xw(t, e) {
  return v(), N("div", Qw, [
    w(t.$slots, "default")
  ]);
}
const Zw = /* @__PURE__ */ Cn(Jw, [["render", Xw]]), TC = /* @__PURE__ */ b({
  __name: "LumuixTabs",
  props: {
    tabs: {}
  },
  setup(t) {
    const e = t, a = C(
      () => e.tabs.find((n) => n.active)
    );
    return (n, o) => (v(), _(s(qw), null, {
      default: f(() => [
        A(s(Nl), { class: "hidden gap-2 md:block" }, {
          default: f(() => [
            (v(!0), N(oe, null, we(n.tabs, (r) => (v(), _(s(Yw), {
              key: r.name,
              tab: r
            }, null, 8, ["tab"]))), 128))
          ]),
          _: 1
        }),
        A(s(Nl), { class: "flex md:hidden" }, {
          default: f(() => [
            A(s(X_), null, {
              default: f(() => [
                A(s(ew), { "as-child": "" }, {
                  default: f(() => [
                    A(s(Tt), { variant: "secondary" }, {
                      default: f(() => {
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
                A(s(tw), { class: "w-full" }, {
                  default: f(() => [
                    (v(!0), N(oe, null, we(n.tabs, (r) => (v(), _(s(aw), S({
                      key: r.name
                    }, { ref_for: !0 }, r), {
                      default: f(() => [
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
        A(s(Zw), null, {
          default: f(() => [
            w(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), e1 = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, t1 = /* @__PURE__ */ b({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = Mt(e, "class"), n = fa(a);
    return (o, r) => (v(), N("div", e1, [
      A(s(o_), S({ "data-slot": "navigation-menu-viewport" }, s(n), {
        class: s(I)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)]",
          e.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), IC = /* @__PURE__ */ b({
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
  setup(t, { emit: e }) {
    const a = t, n = e, o = Mt(a, "class", "viewport"), r = Ot(o, n);
    return (l, i) => (v(), _(s(q0), S({
      "data-slot": "navigation-menu",
      "data-viewport": l.viewport
    }, s(r), {
      class: s(I)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", a.class)
    }), {
      default: f(() => [
        w(l.$slots, "default"),
        l.viewport ? (v(), _(t1, { key: 0 })) : ae("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), RC = /* @__PURE__ */ b({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Mt(a, "class"), r = Ot(o, n);
    return (l, i) => (v(), _(s(X0), S({ "data-slot": "navigation-menu-content" }, s(r), {
      class: s(I)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VC = /* @__PURE__ */ b({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = Mt(e, "class"), n = fa(a);
    return (o, r) => (v(), _(s(Z0), S({ "data-slot": "navigation-menu-indicator" }, s(n), {
      class: s(I)("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", e.class)
    }), {
      default: f(() => r[0] || (r[0] = [
        he("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])),
      _: 1,
      __: [0]
    }, 16, ["class"]));
  }
}), FC = /* @__PURE__ */ b({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = Mt(e, "class");
    return (n, o) => (v(), _(s(J0), S({ "data-slot": "navigation-menu-item" }, s(a), {
      class: s(I)("relative", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LC = /* @__PURE__ */ b({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = Mt(a, "class"), r = Ot(o, n);
    return (l, i) => (v(), _(s(e_), S({ "data-slot": "navigation-menu-link" }, s(r), {
      class: s(I)("'data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4'", a.class)
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), NC = /* @__PURE__ */ b({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = Mt(e, "class"), n = fa(a);
    return (o, r) => (v(), _(s(t_), S({ "data-slot": "navigation-menu-list" }, s(n), {
      class: s(I)(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e.class
      )
    }), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zC = /* @__PURE__ */ b({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = Mt(e, "class"), n = fa(a);
    return (o, r) => (v(), _(s(n_), S({ "data-slot": "navigation-menu-trigger" }, s(n), {
      class: s(I)(s(a1)(), "group", e.class)
    }), {
      default: f(() => [
        w(o.$slots, "default"),
        A(s(Po), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a1 = jt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), n1 = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, KC = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(xh), S({
      class: s(I)("p-3", a.class)
    }, s(r)), {
      default: f(({ grid: u, weekDays: d }) => [
        A(s(d1), null, {
          default: f(() => [
            A(s(f1)),
            A(s(c1)),
            A(s(p1))
          ]),
          _: 1
        }),
        he("div", n1, [
          (v(!0), N(oe, null, we(u, (c) => (v(), _(s(r1), {
            key: c.value.toString()
          }, {
            default: f(() => [
              A(s(i1), null, {
                default: f(() => [
                  A(s(zl), null, {
                    default: f(() => [
                      (v(!0), N(oe, null, we(d, (p) => (v(), _(s(u1), { key: p }, {
                        default: f(() => [
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
              A(s(l1), null, {
                default: f(() => [
                  (v(!0), N(oe, null, we(c.rows, (p, y) => (v(), _(s(zl), {
                    key: `weekDate-${y}`,
                    class: "mt-2 w-full"
                  }, {
                    default: f(() => [
                      (v(!0), N(oe, null, we(p, (m) => (v(), _(s(o1), {
                        key: m.toString(),
                        date: m
                      }, {
                        default: f(() => [
                          A(s(s1), {
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
}), o1 = /* @__PURE__ */ b({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(kh), S({
      class: s(I)(
        "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-slate-100 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md dark:[&:has([data-selected])]:bg-slate-800 [&:has([data-selected][data-outside-view])]:bg-slate-100/50 dark:[&:has([data-selected][data-outside-view])]:bg-slate-800/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s1 = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Mh), S({
      class: s(I)(
        s(ma)({ variant: "ghost" }),
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
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r1 = /* @__PURE__ */ b({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Bh), S({
      class: s(I)("w-full border-collapse space-y-1", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l1 = /* @__PURE__ */ b({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Oh), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i1 = /* @__PURE__ */ b({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Ph), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zl = /* @__PURE__ */ b({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Ah), S({
      class: s(I)("mt-2 flex w-full", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u1 = /* @__PURE__ */ b({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Eh), S({
      class: s(I)("w-8 rounded-md text-[0.8rem] font-normal text-slate-500 dark:text-slate-400", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d1 = /* @__PURE__ */ b({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Ch), S({
      class: s(I)("relative flex w-full items-center justify-between pt-1", e.class)
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c1 = /* @__PURE__ */ b({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => {
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s($h), S({
      class: s(I)("text-text text-sm font-medium", e.class)
    }, s(n)), {
      default: f(({ headingValue: l }) => [
        w(o.$slots, "default", { headingValue: l }, () => [
          Z(re(l), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p1 = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Dh), S({
      class: s(I)(
        s(ma)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          A(s(Zy), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f1 = /* @__PURE__ */ b({
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
      const { class: o, ...r } = e;
      return r;
    }), n = me(a);
    return (o, r) => (v(), _(s(Sh), S({
      class: s(I)(
        s(ma)({ variant: "outline" }),
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        e.class
      )
    }, s(n)), {
      default: f(() => [
        w(o.$slots, "default", {}, () => [
          A(s(Xy), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), v1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(pg), S(a.value, {
      class: s(I)(
        "bg-border relative shrink-0",
        e.orientation === "vertical" ? "h-full w-px" : "h-px w-full",
        e.class
      )
    }), {
      default: f(() => [
        e.label ? (v(), N("span", {
          key: 0,
          class: G(
            s(I)(
              "bg-background text-muted-foreground absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs",
              e.orientation === "vertical" ? "w-px px-1 py-2" : "h-px px-2 py-1"
            )
          )
        }, re(e.label), 3)) : ae("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), m1 = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const o = de(t, e);
    return (r, l) => (v(), _(s(tu), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), WC = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(yn), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), h1 = /* @__PURE__ */ b({
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
      const { class: l, side: i, ...u } = a;
      return u;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(mr), null, {
      default: f(() => [
        A(s(_r), { class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" }),
        A(s(br), S({
          class: s(I)(s(g1)({ side: l.side }), a.class)
        }, { ...s(r), ...l.$attrs }), {
          default: f(() => [
            w(l.$slots, "default"),
            A(s(yn), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none" }, {
              default: f(() => [
                A(s(Oo), { class: "text-muted-foreground h-4 w-4" })
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
}), HC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(lu), S({
      class: s(I)("text-muted-foreground text-sm", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UC = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), jC = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)("flex flex-col gap-y-2 text-center sm:text-left", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), GC = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(ru), S({
      class: s(I)("text-foreground text-lg font-semibold", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qC = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(au), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), g1 = jt(
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
), y1 = "sidebar:state", b1 = 60 * 60 * 24 * 7, _1 = "16rem", w1 = "18rem", x1 = "3rem", C1 = "b", [Fo, $1] = ve("Sidebar"), B1 = { class: "flex h-full w-full flex-col" }, k1 = ["data-state", "data-collapsible", "data-variant", "data-side"], E1 = {
  "data-sidebar": "sidebar",
  class: "group-data-[variant=floating]:border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, YC = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(t) {
    const e = t, { isMobile: a, state: n, openMobile: o, setOpenMobile: r } = Fo();
    return (l, i) => l.collapsible === "none" ? (v(), N("div", S({
      key: 0,
      class: s(I)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", e.class)
    }, l.$attrs), [
      w(l.$slots, "default")
    ], 16)) : s(a) ? (v(), _(s(m1), S({
      key: 1,
      open: s(o)
    }, l.$attrs, { "onUpdate:open": s(r) }), {
      default: f(() => [
        A(s(h1), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: l.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: vt({
            "--sidebar-width": s(w1)
          })
        }, {
          default: f(() => [
            he("div", B1, [
              w(l.$slots, "default", { state: s(n) })
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (v(), N("div", {
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
      he("div", S({
        class: s(I)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          l.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          l.variant === "floating" || l.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          e.class
        )
      }, l.$attrs), [
        he("div", E1, [
          w(l.$slots, "default", { state: s(n) })
        ])
      ], 16)
    ], 8, k1));
  }
}), JC = /* @__PURE__ */ b({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
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
}), QC = /* @__PURE__ */ b({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      "data-sidebar": "footer",
      class: G(s(I)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), XC = /* @__PURE__ */ b({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      "data-sidebar": "group",
      class: G(s(I)("relative flex w-full min-w-0 flex-col p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), ZC = /* @__PURE__ */ b({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), {
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
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), e$ = /* @__PURE__ */ b({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      "data-sidebar": "group-content",
      class: G(s(I)("w-full text-sm", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), t$ = /* @__PURE__ */ b({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), {
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
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), a$ = /* @__PURE__ */ b({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      "data-sidebar": "header",
      class: G(s(I)("flex flex-col gap-2 p-2", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), n$ = /* @__PURE__ */ b({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(Rw, {
      "data-sidebar": "input",
      class: G(
        s(I)(
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
}), o$ = /* @__PURE__ */ b({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("main", {
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
}), s$ = /* @__PURE__ */ b({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("ul", {
      "data-sidebar": "menu",
      class: G(s(I)("flex w-full min-w-0 flex-col gap-1", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), r$ = /* @__PURE__ */ b({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(K), {
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
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), l$ = /* @__PURE__ */ b({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
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
}), D1 = /* @__PURE__ */ b({
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
    const o = de(t, e);
    return (r, l) => (v(), _(s(sy), U(q(s(o))), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), S1 = /* @__PURE__ */ b({
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
    }), r = de(o, n);
    return (l, i) => (v(), _(s(uy), null, {
      default: f(() => [
        A(s(iy), S({ ...s(r), ...l.$attrs }, {
          class: s(I)(
            "border-border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
            a.class
          )
        }), {
          default: f(() => [
            w(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), i$ = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(s(Hu), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P1 = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(ry), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kl = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(s(K), S({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: s(I)(s(M1)({ variant: a.variant, size: a.size }), e.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), u$ = /* @__PURE__ */ b({
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
    const e = t, { isMobile: a, state: n } = Fo(), o = C(() => {
      const { tooltip: r, ...l } = e;
      return l;
    });
    return (r, l) => r.tooltip ? (v(), _(s(D1), { key: 1 }, {
      default: f(() => [
        A(s(P1), { "as-child": "" }, {
          default: f(() => [
            A(Kl, U(q({ ...o.value, ...r.$attrs })), {
              default: f(() => [
                w(r.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        A(s(S1), {
          side: "right",
          align: "center",
          hidden: s(n) !== "collapsed" || s(a)
        }, {
          default: f(() => [
            typeof r.tooltip == "string" ? (v(), N(oe, { key: 0 }, [
              Z(re(r.tooltip), 1)
            ], 64)) : (v(), _(Ke(r.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (v(), _(Kl, U(S({ key: 0 }, { ...o.value, ...r.$attrs })), {
      default: f(() => [
        w(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), d$ = /* @__PURE__ */ b({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("li", {
      "data-sidebar": "menu-item",
      class: G(s(I)("group/menu-item relative", e.class))
    }, [
      w(a.$slots, "default")
    ], 2));
  }
}), Wl = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("div", {
      class: G(s(I)("bg-skeleton animate-pulse rounded-md", e.class))
    }, null, 2));
  }
}), c$ = /* @__PURE__ */ b({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(t) {
    const e = t, a = C(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (n, o) => (v(), N("div", {
      "data-sidebar": "menu-skeleton",
      class: G(s(I)("flex h-8 items-center gap-2 rounded-md px-2", e.class))
    }, [
      n.showIcon ? (v(), _(Wl, {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : ae("", !0),
      A(Wl, {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: vt({ "--skeleton-width": a.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), p$ = /* @__PURE__ */ b({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), N("ul", {
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
}), f$ = /* @__PURE__ */ b({
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
    return (a, n) => (v(), _(s(K), {
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
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), O1 = {};
function A1(t, e) {
  return v(), N("li", null, [
    w(t.$slots, "default")
  ]);
}
const v$ = /* @__PURE__ */ Cn(O1, [["render", A1]]), m$ = /* @__PURE__ */ b({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(t, { emit: e }) {
    const a = t, n = e, o = bd("(max-width: 768px)"), r = O(!1), l = Nr(a, "open", n, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function i(p) {
      l.value = p, document.cookie = `${y1}=${l.value}; path=/; max-age=${b1}`;
    }
    function u(p) {
      r.value = p;
    }
    function d() {
      return o.value ? u(!r.value) : i(!l.value);
    }
    ro("keydown", (p) => {
      p.key === C1 && (p.metaKey || p.ctrlKey) && (p.preventDefault(), d());
    });
    const c = C(() => l.value ? "expanded" : "collapsed");
    return $1({
      state: c,
      open: l,
      setOpen: i,
      isMobile: o,
      openMobile: r,
      setOpenMobile: u,
      toggleSidebar: d
    }), (p, y) => (v(), _(s(Hu), { "delay-duration": 0 }, {
      default: f(() => [
        he("div", S({
          style: {
            "--sidebar-width": s(_1),
            "--sidebar-width-icon": s(x1)
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
}), h$ = /* @__PURE__ */ b({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Fo();
    return (n, o) => (v(), N("button", {
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
}), g$ = /* @__PURE__ */ b({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(v1, {
      "data-sidebar": "separator",
      class: G(s(I)("bg-sidebar-border mx-2 w-auto", e.class))
    }, {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), y$ = /* @__PURE__ */ b({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(t) {
    const e = t, { toggleSidebar: a } = Fo();
    return (n, o) => (v(), _(Tt, {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: G(s(I)("h-7 w-7", e.class)),
      onClick: s(a)
    }, {
      default: f(() => [
        A(s(eb)),
        o[0] || (o[0] = he("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1,
      __: [0]
    }, 8, ["class", "onClick"]));
  }
}), M1 = jt(
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
), b$ = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(Bg), S({
      class: s(I)(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col",
        a.class
      )
    }, s(r)), {
      default: f(() => [
        A(s(Dg), { class: "bg-accent relative h-2 w-full grow overflow-hidden rounded-full data-[orientation=vertical]:w-2" }, {
          default: f(() => [
            A(s(Sg), { class: "bg-primary absolute h-full data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (v(!0), N(oe, null, we(l.modelValue, (u, d) => (v(), _(s(Eg), {
          key: d,
          class: "border-primary bg-primary ring-offset-background focus-visible:ring-ring block size-5 rounded-full border-2 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), T1 = 5, I1 = 5e6, $t = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let rs = 0;
function R1() {
  return rs = (rs + 1) % Number.MAX_VALUE, rs.toString();
}
const ls = /* @__PURE__ */ new Map();
function Hl(t) {
  if (ls.has(t)) return;
  const e = setTimeout(() => {
    ls.delete(t), an({
      type: $t.REMOVE_TOAST,
      toastId: t
    });
  }, I1);
  ls.set(t, e);
}
const et = O({
  toasts: []
});
function an(t) {
  switch (t.type) {
    case $t.ADD_TOAST:
      et.value.toasts = [t.toast, ...et.value.toasts].slice(0, T1);
      break;
    case $t.UPDATE_TOAST:
      et.value.toasts = et.value.toasts.map(
        (e) => e.id === t.toast.id ? { ...e, ...t.toast } : e
      );
      break;
    case $t.DISMISS_TOAST: {
      const { toastId: e } = t;
      e ? Hl(e) : et.value.toasts.forEach((a) => {
        Hl(a.id);
      }), et.value.toasts = et.value.toasts.map(
        (a) => a.id === e || e === void 0 ? {
          ...a,
          open: !1
        } : a
      );
      break;
    }
    case $t.REMOVE_TOAST:
      t.toastId === void 0 ? et.value.toasts = [] : et.value.toasts = et.value.toasts.filter((e) => e.id !== t.toastId);
      break;
  }
}
function V1() {
  return {
    toasts: C(() => et.value.toasts),
    toast: F1,
    dismiss: (t) => an({ type: $t.DISMISS_TOAST, toastId: t })
  };
}
function F1(t) {
  const e = R1(), a = (o) => an({
    type: $t.UPDATE_TOAST,
    toast: { ...o, id: e }
  }), n = () => an({ type: $t.DISMISS_TOAST, toastId: e });
  return an({
    type: $t.ADD_TOAST,
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
const L1 = { class: "flex gap-3" }, N1 = { class: "grid gap-1" }, _$ = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(t) {
    const { toasts: e } = V1();
    return (a, n) => (v(), _(s(U1), null, {
      default: f(() => [
        (v(!0), N(oe, null, we(s(e), (o) => (v(), _(s(z1), S({
          key: o.id
        }, { ref_for: !0 }, o, { class: "my-1" }), {
          default: f(() => [
            he("div", L1, [
              (v(), _(Ke(o.icon), {
                class: G(s(I)(o.iconClasses, "size-4"))
              }, null, 8, ["class"])),
              he("div", N1, [
                o.title ? (v(), _(s(H1), { key: 0 }, {
                  default: f(() => [
                    Z(re(o.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ae("", !0),
                o.description ? (v(), N(oe, { key: 1 }, [
                  Wd(o.description) ? (v(), _(s(Ul), { key: 0 }, {
                    default: f(() => [
                      (v(), _(Ke(o.description)))
                    ]),
                    _: 2
                  }, 1024)) : (v(), _(s(Ul), { key: 1 }, {
                    default: f(() => [
                      Z(re(o.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ae("", !0),
                A(s(W1))
              ]),
              (v(), _(Ke(o.action)))
            ])
          ]),
          _: 2
        }, 1040))), 128)),
        A(s(K1))
      ]),
      _: 1
    }));
  }
}), z1 = /* @__PURE__ */ b({
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
      const { class: l, ...i } = a;
      return i;
    }), r = de(o, n);
    return (l, i) => (v(), _(s(Xg), S(s(r), {
      class: s(I)(s(j1)({ variant: l.variant }), a.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: f(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), K1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(ey), S(a.value, {
      class: s(I)(
        "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e.class
      )
    }), null, 16, ["class"]));
  }
}), w$ = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(Zg), U(q(a.value)), {
      default: f(() => [
        A(s(Tt), {
          variant: n.variant,
          class: G(e.class)
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
}), W1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(Ku), S(a.value, {
      class: s(I)(
        "text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600",
        e.class
      )
    }), {
      default: f(() => [
        A(s(Oo), { class: "size-4 transition hover:text-slate-400" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), H1 = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(ty), S(a.value, {
      class: s(I)("text-sm font-semibold", e.class)
    }), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ul = /* @__PURE__ */ b({
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
    return (n, o) => (v(), _(s(ay), S({
      class: s(I)("text-sm opacity-90", e.class)
    }, a.value), {
      default: f(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U1 = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(t) {
    const e = t;
    return (a, n) => (v(), _(s(Kg), U(q(e)), {
      default: f(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j1 = jt(
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
  ax as Accordion,
  nx as AccordionContent,
  ox as AccordionItem,
  sx as AccordionTrigger,
  rx as Alert,
  lx as AlertDescription,
  ix as AlertTitle,
  hx as Avatar,
  gx as AvatarFallback,
  yx as AvatarImage,
  bx as Badge,
  ha as Base,
  Z_ as BaseDropdownMenuItem,
  _x as Breadcrumb,
  wx as BreadcrumbEllipsis,
  xx as BreadcrumbItem,
  Cx as BreadcrumbLink,
  $x as BreadcrumbList,
  Bx as BreadcrumbPage,
  kx as BreadcrumbSeparator,
  Tt as Button,
  zx as Calendar,
  wd as CalendarCell,
  xd as CalendarCellTrigger,
  Cd as CalendarGrid,
  $d as CalendarGridBody,
  Bd as CalendarGridHead,
  lo as CalendarGridRow,
  kd as CalendarHeadCell,
  Ed as CalendarHeader,
  Dd as CalendarHeading,
  V_ as CalendarNextButton,
  F_ as CalendarPrevButton,
  W_ as CalendarWithSelect,
  Ex as Card,
  Ox as CardContent,
  Px as CardDescription,
  Ax as CardFooter,
  Dx as CardHeader,
  Sx as CardTitle,
  rw as CharacterCount,
  mC as Checkbox,
  EC as CollapsibleTableRow,
  Mx as Combobox,
  Tx as ComboboxAnchor,
  px as ComboboxCancel,
  Ix as ComboboxEmpty,
  Rx as ComboboxGroup,
  Vx as ComboboxInput,
  Fx as ComboboxItem,
  vx as ComboboxItemIndicator,
  Lx as ComboboxList,
  Nx as ComboboxSeparator,
  mx as ComboboxTrigger,
  H_ as Command,
  qx as CommandDialog,
  Yx as CommandEmpty,
  Jx as CommandGroup,
  Qx as CommandInput,
  Xx as CommandItem,
  Zx as CommandList,
  eC as CommandSeparator,
  tC as CommandShortcut,
  hC as DatePicker,
  dw as Description,
  Sd as Dialog,
  jx as DialogClose,
  Pd as DialogContent,
  q_ as DialogDescription,
  Y_ as DialogFooter,
  j_ as DialogHeader,
  Gx as DialogScrollContent,
  G_ as DialogTitle,
  U_ as DialogTrigger,
  X_ as DropdownMenu,
  sC as DropdownMenuCheckboxItem,
  tw as DropdownMenuContent,
  aC as DropdownMenuGroup,
  oC as DropdownMenuItem,
  uC as DropdownMenuLabel,
  aw as DropdownMenuLink,
  Um as DropdownMenuPortal,
  nC as DropdownMenuRadioGroup,
  rC as DropdownMenuRadioItem,
  iC as DropdownMenuSeparator,
  lC as DropdownMenuShortcut,
  dC as DropdownMenuSub,
  pC as DropdownMenuSubContent,
  cC as DropdownMenuSubTrigger,
  ew as DropdownMenuTrigger,
  pw as Error,
  fC as Form,
  bw as FormElement,
  vC as FormGrid,
  gC as ImageUpload,
  Rw as Input,
  Od as Label,
  PC as LumuixDatatable,
  OC as LumuixModal,
  kC as LumuixModeToggle,
  TC as LumuixTabs,
  IC as NavigationMenu,
  RC as NavigationMenuContent,
  VC as NavigationMenuIndicator,
  FC as NavigationMenuItem,
  LC as NavigationMenuLink,
  NC as NavigationMenuList,
  zC as NavigationMenuTrigger,
  t1 as NavigationMenuViewport,
  Z1 as Pagination,
  _C as PaginationDetails,
  wC as PaginationEllipsis,
  xC as PaginationFirst,
  CC as PaginationLast,
  ex as PaginationList,
  tx as PaginationListItem,
  $C as PaginationNext,
  BC as PaginationPrev,
  $w as Popover,
  kw as PopoverContent,
  Bw as PopoverTrigger,
  KC as RangeCalendar,
  o1 as RangeCalendarCell,
  s1 as RangeCalendarCellTrigger,
  r1 as RangeCalendarGrid,
  l1 as RangeCalendarGridBody,
  i1 as RangeCalendarGridHead,
  zl as RangeCalendarGridRow,
  u1 as RangeCalendarHeadCell,
  d1 as RangeCalendarHeader,
  c1 as RangeCalendarHeading,
  p1 as RangeCalendarNextButton,
  f1 as RangeCalendarPrevButton,
  yC as Select,
  Ts as SelectContent,
  Kx as SelectGroup,
  Is as SelectItem,
  Wx as SelectItemText,
  Hx as SelectLabel,
  Os as SelectRoot,
  z_ as SelectScrollDownButton,
  N_ as SelectScrollUpButton,
  Ux as SelectSeparator,
  Ms as SelectTrigger,
  As as SelectValue,
  v1 as Separator,
  m1 as Sheet,
  WC as SheetClose,
  h1 as SheetContent,
  HC as SheetDescription,
  UC as SheetFooter,
  jC as SheetHeader,
  GC as SheetTitle,
  qC as SheetTrigger,
  YC as Sidebar,
  JC as SidebarContent,
  QC as SidebarFooter,
  XC as SidebarGroup,
  ZC as SidebarGroupAction,
  e$ as SidebarGroupContent,
  t$ as SidebarGroupLabel,
  a$ as SidebarHeader,
  n$ as SidebarInput,
  o$ as SidebarInset,
  s$ as SidebarMenu,
  r$ as SidebarMenuAction,
  l$ as SidebarMenuBadge,
  u$ as SidebarMenuButton,
  d$ as SidebarMenuItem,
  c$ as SidebarMenuSkeleton,
  p$ as SidebarMenuSub,
  f$ as SidebarMenuSubButton,
  v$ as SidebarMenuSubItem,
  m$ as SidebarProvider,
  h$ as SidebarRail,
  g$ as SidebarSeparator,
  y$ as SidebarTrigger,
  Wl as Skeleton,
  b$ as Slider,
  Zw as TabBaseContent,
  zw as Table,
  Kw as TableBody,
  Uw as TableCaption,
  io as TableCell,
  SC as TableEmpty,
  DC as TableFooter,
  Ww as TableHead,
  Hw as TableHeader,
  un as TableRow,
  Rs as TableRowAction,
  MC as TabsContent,
  Yw as TabsItem,
  Nl as TabsList,
  qw as TabsRoot,
  AC as TabsTrigger,
  bC as TextArea,
  z1 as Toast,
  w$ as ToastAction,
  W1 as ToastClose,
  Ul as ToastDescription,
  U1 as ToastProvider,
  H1 as ToastTitle,
  K1 as ToastViewport,
  _$ as Toaster,
  Fw as Toggle,
  D1 as Tooltip,
  S1 as TooltipContent,
  i$ as TooltipProvider,
  P1 as TooltipTrigger,
  nb as alertVariants,
  T_ as badgeVariants,
  ma as buttonVariants,
  a1 as navigationMenuTriggerStyle,
  g1 as sheetVariants,
  M1 as sidebarMenuButtonVariants,
  I_ as spinnerSize,
  F1 as toast,
  j1 as toastVariants,
  Fo as useSidebar,
  V1 as useToast
};
