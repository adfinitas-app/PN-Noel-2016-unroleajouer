/*! jQuery v2.2.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.1",
      n = function (a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function (a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
      return e.call(this);
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function (a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function (a) {
      return n.each(this, a);
    }, map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function () {
      return this.pushStack(e.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function () {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a);
    }, noop: function () {}, isFunction: function (a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function (a) {
      return null != a && a === a.window;
    }, isNumeric: function (a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function (a) {
      var b;for (b in a) return !1;return !0;
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
    }, globalEval: function (a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function (a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;return a;
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function (a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function (a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return a.length = e, a;
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
    }, map: function (a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);else for (g in a) e = b(a[g], g, c), null != e && h.push(e);return f.apply([], h);
    }, guid: 1, proxy: function (a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function (a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function (a, b) {
      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function (a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function () {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) r[h] = l + " " + qa(r[h]);s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) d.attrHandle[c[e]] = b;
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) g.unshift(c);c = b;while (c = c.parentNode) h.unshift(c);while (g[d] === h[d]) d++;return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function (a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function (a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function (a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function (a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [w, n, t];break;
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function (a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function (b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function (a) {
          return a === o;
        }, focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function (a) {
          return a.disabled === !1;
        }, disabled: function (a) {
          return a.disabled === !0;
        }, checked: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
        }, parent: function (a) {
          return !d.pseudos.empty(a);
        }, header: function (a) {
          return Y.test(a.nodeName);
        }, input: function (a) {
          return X.test(a.nodeName);
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function (a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || e) {
          if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
            }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
        }m.push(c);
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function (f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) if (q(l, g || n, h)) {
              i.push(l);break;
            }k && (w = y);
          }c && ((l = !q && l) && r--, f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) q(t, u, g, h);if (f) {
            if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));u = ua(u);
          }H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function (a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
      if (e && n(a).is(c)) break;d.push(a);
    }return d;
  },
      v = function (a, b) {
    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function (a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
      }));for (b = 0; c > b; b++) n.find(a, e[b], d);return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function (a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function (a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function (a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function (a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    }, closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);break;
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function (a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);return a;
  }n.each({ parent: function (a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function (a) {
      return u(a, "parentNode");
    }, parentsUntil: function (a, b, c) {
      return u(a, "parentNode", c);
    }, next: function (a) {
      return F(a, "nextSibling");
    }, prev: function (a) {
      return F(a, "previousSibling");
    }, nextAll: function (a) {
      return u(a, "nextSibling");
    }, prevAll: function (a) {
      return u(a, "previousSibling");
    }, nextUntil: function (a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function (a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function (a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function (a) {
      return v(a.firstChild);
    }, contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function () {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function () {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function () {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
        }), this;
      }, has: function (a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function () {
        return f && (f = []), this;
      }, disable: function () {
        return e = g = [], f = c = "", this;
      }, disabled: function () {
        return !f;
      }, lock: function () {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function () {
        return !!e;
      }, fireWith: function (a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function () {
        return j.fireWith(this, arguments), this;
      }, fired: function () {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function (a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function () {
          return c;
        }, always: function () {
          return e.done(arguments).fail(arguments), this;
        }, then: function () {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function (a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function (a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) K(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function (a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function (a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function (a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) e[d] = b[d];return e;
    }, get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function (a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function (a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) delete f[d[c]];
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function (a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function (a, b, c) {
      return O.access(a, b, c);
    }, removeData: function (a, b) {
      O.remove(a, b);
    }, _data: function (a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function (a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function (a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == typeof a ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function (a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function (a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function (a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function (a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function (a) {
      return this.queue(a || "fx", []);
    }, promise: function (a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function (a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) g = g.lastChild;n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
    } else m.push(b.createTextNode(f));l.textContent = "", o = 0;while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
      k = 0;while (f = g[k++]) Z.test(f.type || "") && c.push(f);
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) ja(a, h, c, d, b[h], f);return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function (a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
      }
    }, remove: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function (a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function (a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function (a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) c = e[b], a[c] = g[c];return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function (a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, preventDefault: function () {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && a.preventDefault();
    }, stopPropagation: function () {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && a.stopPropagation();
    }, stopImmediatePropagation: function () {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function (a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function (a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function (a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));return a;
  }n.extend({ htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
        if (b = c[N.expando]) {
          if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);c[N.expando] = void 0;
        }c[O.expando] && (c[O.expando] = void 0);
      }
    } }), n.fn.extend({ domManip: ua, detach: function (a) {
      return va(this, a, !0);
    }, remove: function (a) {
      return va(this, a);
    }, text: function (a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");return this;
    }, clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function (a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function () {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function (b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);function i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
      }n.extend(l, { pixelPosition: function () {
          return i(), b;
        }, boxSizingReliable: function () {
          return null == c && i(), c;
        }, pixelMarginRight: function () {
          return null == c && i(), e;
        }, reliableMarginLeft: function () {
          return null == c && i(), f;
        }, reliableMarginRight: function () {
          var b,
              c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
        } });
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) if (a = Ka[c] + b, a in La) return a;
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));return g;
  }function Pa(b, c, e) {
    var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ca(b),
        i = "border-box" === n.css(b, "boxSizing", !1, h);if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
    }return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
  }n.extend({ cssHooks: { opacity: { get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function (a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function (a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function (a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function (a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function () {
      return Qa(this, !0);
    }, hide: function () {
      return Qa(this);
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function () {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function (a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function (a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function (a) {
      return a;
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) if (e = b[d], Ua.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
      }m[d] = q && q[d] || n.style(a, d);
    } else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
      });for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function () {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function (b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function (b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function (a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
    }, prefilters: [Za], prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function (a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function (a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
      });
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function (a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function (a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
    } }), ab = { set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function (a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function (a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
          g = 0;while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, removeClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
          g = 0;while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, toggleClass: function (a, b) {
      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else (void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function (a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;return !1;
    } });var gb = /\r/g;n.fn.extend({ val: function (a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function (a) {
          return n.trim(a.value);
        } }, select: { get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
            if (b = n(c).val(), f) return b;g.push(b);
          }return g;
        }, set: function (a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var hb = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function (b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }), n.fn.extend({ trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function (a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function () {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function () {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var ib = a.location,
      jb = n.now(),
      kb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c;
  };var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = {},
      sb = {},
      tb = "*/".concat("*"),
      ub = d.createElement("a");ub.href = ib.href;function vb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }function wb(a, b, c, d) {
    var e = {},
        f = a === sb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function xb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return d && n.extend(!0, a, d), a;
  }function yb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
      i.unshift(e);break;
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function zb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
      }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
        b = g(b);
      } catch (l) {
        return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ib.href, type: "GET", isLocal: ob.test(ib.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": tb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) {
      return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a);
    }, ajaxPrefilter: vb(rb), ajaxTransport: vb(sb), ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function (a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = nb.exec(g)) h[b[1].toLowerCase()] = b[2];
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function () {
          return 2 === v ? g : null;
        }, setRequestHeader: function (a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function (a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function (a) {
          var b;if (a) if (2 > v) for (b in a) s[b] = [s[b], a[b]];else x.always(a[x.status]);return this;
        }, abort: function (a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) x.setRequestHeader(l, m.headers[l]);if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);if (e = wb(sb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function (a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
      }).append(this)), this);
    }, wrapInner: function (a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function (a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Ab = /%20/g,
      Bb = /\[\]$/,
      Cb = /\r?\n/g,
      Db = /^(?:submit|button|image|reset|file)$/i,
      Eb = /^(?:input|select|textarea|keygen)/i;function Fb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Fb(a + "[" + e + "]", b[e], c, d);
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function (a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Fb(c, a[c], b, e);return d.join("&").replace(Ab, "+");
  }, n.fn.extend({ serialize: function () {
      return n.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Cb, "\r\n") };
        }) : { name: b.name, value: c.replace(Cb, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Gb = { 0: 200, 1223: 204 },
      Hb = n.ajaxSettings.xhr();l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function (b) {
    var c, d;return l.cors || Hb && !b.crossDomain ? { send: function (e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) h.setRequestHeader(g, e[g]);c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d();
          });
        }, c = c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (c) throw i;
        }
      }, abort: function () {
        c && c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;return { send: function (e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function () {
          c && c();
        } };
    }
  });var Ib = [],
      Jb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var a = Ib.pop() || n.expando + "_" + jb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), l.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Kb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Kb) return Kb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(g, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Lb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function () {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Lb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function (a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function (a, b) {
      return this.off(a, null, b);
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function () {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Mb = a.jQuery,
      Nb = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
;/*
 *  Vide - v0.5.0
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(root.jQuery);
  }
}(this, function ($) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */

  var PLUGIN_NAME = 'vide';

  /**
   * Default settings
   * @private
   * @const
   * @type {Object}
   */
  var DEFAULTS = {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%',
    posterType: 'detect',
    resizing: true,
    bgColor: 'transparent',
    className: ''
  };

  /**
   * Not implemented error message
   * @private
   * @const
   * @type {String}
   */
  var NOT_IMPLEMENTED_MSG = 'Not implemented';

  /**
   * Parse a string with options
   * @private
   * @param {String} str
   * @returns {Object|String}
   */
  function parseOptions(str) {
    var obj = {};
    var delimiterIndex;
    var option;
    var prop;
    var val;
    var arr;
    var len;
    var i;

    // Remove spaces around delimiters and split
    arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');

    // Parse a string
    for (i = 0, len = arr.length; i < len; i++) {
      option = arr[i];

      // Ignore urls and a string without colon delimiters
      if (option.search(/^(http|https|ftp):\/\//) !== -1 || option.search(':') === -1) {
        break;
      }

      delimiterIndex = option.indexOf(':');
      prop = option.substring(0, delimiterIndex);
      val = option.substring(delimiterIndex + 1);

      // If val is an empty string, make it undefined
      if (!val) {
        val = undefined;
      }

      // Convert a string value if it is like a boolean
      if (typeof val === 'string') {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string') {
        val = !isNaN(val) ? +val : val;
      }

      obj[prop] = val;
    }

    // If nothing is parsed
    if (prop == null && val == null) {
      return str;
    }

    return obj;
  }

  /**
   * Parse a position option
   * @private
   * @param {String} str
   * @returns {Object}
   */
  function parsePosition(str) {
    str = '' + str;

    // Default value is a center
    var args = str.split(/\s+/);
    var x = '50%';
    var y = '50%';
    var len;
    var arg;
    var i;

    for (i = 0, len = args.length; i < len; i++) {
      arg = args[i];

      // Convert values
      if (arg === 'left') {
        x = '0%';
      } else if (arg === 'right') {
        x = '100%';
      } else if (arg === 'top') {
        y = '0%';
      } else if (arg === 'bottom') {
        y = '100%';
      } else if (arg === 'center') {
        if (i === 0) {
          x = '50%';
        } else {
          y = '50%';
        }
      } else {
        if (i === 0) {
          x = arg;
        } else {
          y = arg;
        }
      }
    }

    return { x: x, y: y };
  }

  /**
   * Search a poster
   * @private
   * @param {String} path
   * @param {Function} callback
   */
  function findPoster(path, callback) {
    var onLoad = function () {
      callback(this.src);
    };

    $('<img src="' + path + '.gif">').load(onLoad);
    $('<img src="' + path + '.jpg">').load(onLoad);
    $('<img src="' + path + '.jpeg">').load(onLoad);
    $('<img src="' + path + '.png">').load(onLoad);
  }

  /**
   * Vide constructor
   * @param {HTMLElement} element
   * @param {Object|String} path
   * @param {Object|String} options
   * @constructor
   */
  function Vide(element, path, options) {
    this.$element = $(element);

    // Parse path
    if (typeof path === 'string') {
      path = parseOptions(path);
    }

    // Parse options
    if (!options) {
      options = {};
    } else if (typeof options === 'string') {
      options = parseOptions(options);
    }

    // Remove an extension
    if (typeof path === 'string') {
      path = path.replace(/\.\w*$/, '');
    } else if (typeof path === 'object') {
      for (var i in path) {
        if (path.hasOwnProperty(i)) {
          path[i] = path[i].replace(/\.\w*$/, '');
        }
      }
    }

    this.settings = $.extend({}, DEFAULTS, options);
    this.path = path;

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      this.init();
    } catch (e) {
      if (e.message !== NOT_IMPLEMENTED_MSG) {
        throw e;
      }
    }
  }

  /**
   * Initialization
   * @public
   */
  Vide.prototype.init = function () {
    var vide = this;
    var path = vide.path;
    var poster = path;
    var sources = '';
    var $element = vide.$element;
    var settings = vide.settings;
    var position = parsePosition(settings.position);
    var posterType = settings.posterType;
    var $video;
    var $wrapper;

    // Set styles of a video wrapper
    $wrapper = vide.$wrapper = $('<div>').addClass(settings.className).css({
      position: 'absolute',
      'z-index': -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: 'hidden',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
      'background-color': settings.bgColor,
      'background-repeat': 'no-repeat',
      'background-position': position.x + ' ' + position.y
    });

    // Get a poster path
    if (typeof path === 'object') {
      if (path.poster) {
        poster = path.poster;
      } else {
        if (path.mp4) {
          poster = path.mp4;
        } else if (path.webm) {
          poster = path.webm;
        } else if (path.ogv) {
          poster = path.ogv;
        }
      }
    }

    // Set a video poster
    if (posterType === 'detect') {
      findPoster(poster, function (url) {
        $wrapper.css('background-image', 'url(' + url + ')');
      });
    } else if (posterType !== 'none') {
      $wrapper.css('background-image', 'url(' + poster + '.' + posterType + ')');
    }

    // If a parent element has a static position, make it relative
    if ($element.css('position') === 'static') {
      $element.css('position', 'relative');
    }

    $element.prepend($wrapper);

    if (typeof path === 'object') {
      if (path.mp4) {
        sources += '<source src="' + path.mp4 + '.mp4" type="video/mp4">';
      }

      if (path.webm) {
        sources += '<source src="' + path.webm + '.webm" type="video/webm">';
      }

      if (path.ogv) {
        sources += '<source src="' + path.ogv + '.ogv" type="video/ogg">';
      }

      $video = vide.$video = $('<video>' + sources + '</video>');
    } else {
      $video = vide.$video = $('<video>' + '<source src="' + path + '.mp4" type="video/mp4">' + '<source src="' + path + '.webm" type="video/webm">' + '<source src="' + path + '.ogv" type="video/ogg">' + '</video>');
    }

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      $video

      // Set video properties
      .prop({
        autoplay: settings.autoplay,
        loop: settings.loop,
        volume: settings.volume,
        muted: settings.muted,
        defaultMuted: settings.muted,
        playbackRate: settings.playbackRate,
        defaultPlaybackRate: settings.playbackRate
      });
    } catch (e) {
      throw new Error(NOT_IMPLEMENTED_MSG);
    }

    // Video alignment
    $video.css({
      margin: 'auto',
      position: 'absolute',
      'z-index': -1,
      top: position.y,
      left: position.x,
      '-webkit-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-ms-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-moz-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      transform: 'translate(-' + position.x + ', -' + position.y + ')',

      // Disable visibility, while loading
      visibility: 'hidden',
      opacity: 0
    })

    // Resize a video, when it's loaded
    .one('canplaythrough.' + PLUGIN_NAME, function () {
      vide.resize();
    })

    // Make it visible, when it's already playing
    .one('playing.' + PLUGIN_NAME, function () {
      $video.css({
        visibility: 'visible',
        opacity: 1
      });
      $wrapper.css('background-image', 'none');
    });

    // Resize event is available only for 'window'
    // Use another code solutions to detect DOM elements resizing
    $element.on('resize.' + PLUGIN_NAME, function () {
      if (settings.resizing) {
        vide.resize();
      }
    });

    // Append a video
    $wrapper.append($video);
  };

  /**
   * Get a video element
   * @public
   * @returns {HTMLVideoElement}
   */
  Vide.prototype.getVideoObject = function () {
    return this.$video[0];
  };

  /**
   * Resize a video background
   * @public
   */
  Vide.prototype.resize = function () {
    if (!this.$video) {
      return;
    }

    var $wrapper = this.$wrapper;
    var $video = this.$video;
    var video = $video[0];

    // Get a native video size
    var videoHeight = video.videoHeight;
    var videoWidth = video.videoWidth;

    // Get a wrapper size
    var wrapperHeight = $wrapper.height();
    var wrapperWidth = $wrapper.width();

    if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
      $video.css({

        // +2 pixels to prevent an empty space after transformation
        width: wrapperWidth + 2,
        height: 'auto'
      });
    } else {
      $video.css({
        width: 'auto',

        // +2 pixels to prevent an empty space after transformation
        height: wrapperHeight + 2
      });
    }
  };

  /**
   * Destroy a video background
   * @public
   */
  Vide.prototype.destroy = function () {
    delete $[PLUGIN_NAME].lookup[this.index];
    this.$video && this.$video.off(PLUGIN_NAME);
    this.$element.off(PLUGIN_NAME).removeData(PLUGIN_NAME);
    this.$wrapper.remove();
  };

  /**
   * Special plugin object for instances.
   * @public
   * @type {Object}
   */
  $[PLUGIN_NAME] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @param {Object|String} path
   * @param {Object|String} options
   * @returns {JQuery}
   * @constructor
   */
  $.fn[PLUGIN_NAME] = function (path, options) {
    var instance;

    this.each(function () {
      instance = $.data(this, PLUGIN_NAME);

      // Destroy the plugin instance if exists
      instance && instance.destroy();

      // Create the plugin instance
      instance = new Vide(this, path, options);
      instance.index = $[PLUGIN_NAME].lookup.push(instance) - 1;
      $.data(this, PLUGIN_NAME, instance);
    });

    return this;
  };

  $(document).ready(function () {
    var $window = $(window);

    // Window resize event listener
    $window.on('resize.' + PLUGIN_NAME, function () {
      for (var len = $[PLUGIN_NAME].lookup.length, i = 0, instance; i < len; i++) {
        instance = $[PLUGIN_NAME].lookup[i];

        if (instance && instance.settings.resizing) {
          instance.resize();
        }
      }
    });

    // https://github.com/VodkaBears/Vide/issues/68
    $window.on('unload.' + PLUGIN_NAME, function () {
      return false;
    });

    // Auto initialization
    // Add 'data-vide-bg' attribute with a path to the video without extension
    // Also you can pass options throw the 'data-vide-options' attribute
    // 'data-vide-options' must be like 'muted: false, volume: 0.5'
    $(document).find('[data-' + PLUGIN_NAME + '-bg]').each(function (i, element) {
      var $element = $(element);
      var options = $element.data(PLUGIN_NAME + '-options');
      var path = $element.data(PLUGIN_NAME + '-bg');

      $element[PLUGIN_NAME](path, options);
    });
  });
});
;!function ($) {

  "use strict";

  var FOUNDATION_VERSION = '6.2.0';

  // Global Foundation object
  // This is attached to the window, or used as a module for AMD/Browserify
  var Foundation = {
    version: FOUNDATION_VERSION,

    /**
     * Stores initialized plugins.
     */
    _plugins: {},

    /**
     * Stores generated unique ids for plugin instances
     */
    _uuids: [],

    /**
     * Returns a boolean for RTL support
     */
    rtl: function () {
      return $('html').attr('dir') === 'rtl';
    },
    /**
     * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
     * @param {Object} plugin - The constructor of the plugin.
     */
    plugin: function (plugin, name) {
      // Object key to use when adding to global Foundation object
      // Examples: Foundation.Reveal, Foundation.OffCanvas
      var className = name || functionName(plugin);
      // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
      // Examples: data-reveal, data-off-canvas
      var attrName = hyphenate(className);

      // Add to the Foundation object and the plugins list (for reflowing)
      this._plugins[attrName] = this[className] = plugin;
    },
    /**
     * @function
     * Populates the _uuids array with pointers to each individual plugin instance.
     * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
     * Also fires the initialization event for each plugin, consolidating repeditive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @param {String} name - the name of the plugin, passed as a camelCased string.
     * @fires Plugin#init
     */
    registerPlugin: function (plugin, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
      plugin.uuid = this.GetYoDigits(6, pluginName);

      if (!plugin.$element.attr('data-' + pluginName)) {
        plugin.$element.attr('data-' + pluginName, plugin.uuid);
      }
      if (!plugin.$element.data('zfPlugin')) {
        plugin.$element.data('zfPlugin', plugin);
      }
      /**
       * Fires when the plugin has initialized.
       * @event Plugin#init
       */
      plugin.$element.trigger('init.zf.' + pluginName);

      this._uuids.push(plugin.uuid);

      return;
    },
    /**
     * @function
     * Removes the plugins uuid from the _uuids array.
     * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
     * Also fires the destroyed event for the plugin, consolidating repeditive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @fires Plugin#destroyed
     */
    unregisterPlugin: function (plugin) {
      var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
      plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger('destroyed.zf.' + pluginName);
      for (var prop in plugin) {
        plugin[prop] = null; //clean up script to prep for garbage collection.
      }
      return;
    },

    /**
     * @function
     * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
     * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
     * @default If no argument is passed, reflow all currently active plugins.
     */
    reInit: function (plugins) {
      var isJQ = plugins instanceof $;
      try {
        if (isJQ) {
          plugins.each(function () {
            $(this).data('zfPlugin')._init();
          });
        } else {
          var type = typeof plugins,
              _this = this,
              fns = {
            'object': function (plgs) {
              plgs.forEach(function (p) {
                p = hyphenate(p);
                $('[data-' + p + ']').foundation('_init');
              });
            },
            'string': function () {
              plugins = hyphenate(plugins);
              $('[data-' + plugins + ']').foundation('_init');
            },
            'undefined': function () {
              this['object'](Object.keys(_this._plugins));
            }
          };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    },

    /**
     * returns a random base-36 uid with namespacing
     * @function
     * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
     * @param {String} namespace - name of plugin to be incorporated in uid, optional.
     * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
     * @returns {String} - unique id
     */
    GetYoDigits: function (length, namespace) {
      length = length || 6;
      return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
    },
    /**
     * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
     * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
     * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
     */
    reflow: function (elem, plugins) {

      // If plugins is undefined, just grab everything
      if (typeof plugins === 'undefined') {
        plugins = Object.keys(this._plugins);
      }
      // If plugins is a string, convert it to an array with one item
      else if (typeof plugins === 'string') {
          plugins = [plugins];
        }

      var _this = this;

      // Iterate through each plugin
      $.each(plugins, function (i, name) {
        // Get the current plugin
        var plugin = _this._plugins[name];

        // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
        var $elem = $(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

        // For each plugin found, initialize it
        $elem.each(function () {
          var $el = $(this),
              opts = {};
          // Don't double-dip on plugins
          if ($el.data('zfPlugin')) {
            console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
            return;
          }

          if ($el.attr('data-options')) {
            var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
              var opt = e.split(':').map(function (el) {
                return el.trim();
              });
              if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data('zfPlugin', new plugin($(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    },
    getFnName: functionName,
    transitionend: function ($elem) {
      var transitions = {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'otransitionend'
      };
      var elem = document.createElement('div'),
          end;

      for (var t in transitions) {
        if (typeof elem.style[t] !== 'undefined') {
          end = transitions[t];
        }
      }
      if (end) {
        return end;
      } else {
        end = setTimeout(function () {
          $elem.triggerHandler('transitionend', [$elem]);
        }, 1);
        return 'transitionend';
      }
    }
  };

  Foundation.util = {
    /**
     * Function for applying a debounce effect to a function call.
     * @function
     * @param {Function} func - Function to be called at end of timeout.
     * @param {Number} delay - Time in ms to delay the call of `func`.
     * @returns function
     */
    throttle: function (func, delay) {
      var timer = null;

      return function () {
        var context = this,
            args = arguments;

        if (timer === null) {
          timer = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }
  };

  // TODO: consider not making this a jQuery function
  // TODO: need way to reflow vs. re-initialize
  /**
   * The Foundation jQuery method.
   * @param {String|Array} method - An action to perform on the current jQuery object.
   */
  var foundation = function (method) {
    var type = typeof method,
        $meta = $('meta.foundation-mq'),
        $noJS = $('.no-js');

    if (!$meta.length) {
      $('<meta class="foundation-mq">').appendTo(document.head);
    }
    if ($noJS.length) {
      $noJS.removeClass('no-js');
    }

    if (type === 'undefined') {
      //needs to initialize the Foundation object, or an individual plugin.
      Foundation.MediaQuery._init();
      Foundation.reflow(this);
    } else if (type === 'string') {
      //an individual method to invoke on a plugin or group of plugins
      var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
      var plugClass = this.data('zfPlugin'); //determine the class of plugin

      if (plugClass !== undefined && plugClass[method] !== undefined) {
        //make sure both the class and method exist
        if (this.length === 1) {
          //if there's only one, call it directly.
          plugClass[method].apply(plugClass, args);
        } else {
          this.each(function (i, el) {
            //otherwise loop through the jQuery collection and invoke the method on each
            plugClass[method].apply($(el).data('zfPlugin'), args);
          });
        }
      } else {
        //error for no class or no method
        throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
      }
    } else {
      //error for invalid argument type
      throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
    }
    return this;
  };

  window.Foundation = Foundation;
  $.fn.foundation = foundation;

  // Polyfill for requestAnimationFrame
  (function () {
    if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
      return new Date().getTime();
    };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function (callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function () {
          callback(lastTime = nextTime);
        }, nextTime - now);
      };
      window.cancelAnimationFrame = clearTimeout;
    }
    /**
     * Polyfill for performance.now, required by rAF
     */
    if (!window.performance || !window.performance.now) {
      window.performance = {
        start: Date.now(),
        now: function () {
          return Date.now() - this.start;
        }
      };
    }
  })();
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function () {},
          fBound = function () {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };

      if (this.prototype) {
        // native functions don't have a prototype
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP();

      return fBound;
    };
  }
  // Polyfill to get the name of a function in IE9
  function functionName(fn) {
    if (Function.prototype.name === undefined) {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(fn.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    } else if (fn.prototype === undefined) {
      return fn.constructor.name;
    } else {
      return fn.prototype.constructor.name;
    }
  }
  function parseValue(str) {
    if (/true/.test(str)) return true;else if (/false/.test(str)) return false;else if (!isNaN(str * 1)) return parseFloat(str);
    return str;
  }
  // Convert PascalCase to kebab-case
  // Thank you: http://stackoverflow.com/a/8955580
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}(jQuery);
;'use strict';

!function ($) {

  Foundation.Box = {
    ImNotTouchingYou: ImNotTouchingYou,
    GetDimensions: GetDimensions,
    GetOffsets: GetOffsets
  };

  /**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */
  function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
    var eleDims = GetDimensions(element),
        top,
        bottom,
        left,
        right;

    if (parent) {
      var parDims = GetDimensions(parent);

      bottom = eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top;
      top = eleDims.offset.top >= parDims.offset.top;
      left = eleDims.offset.left >= parDims.offset.left;
      right = eleDims.offset.left + eleDims.width <= parDims.width;
    } else {
      bottom = eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top;
      top = eleDims.offset.top >= eleDims.windowDims.offset.top;
      left = eleDims.offset.left >= eleDims.windowDims.offset.left;
      right = eleDims.offset.left + eleDims.width <= eleDims.windowDims.width;
    }

    var allDirs = [bottom, top, left, right];

    if (lrOnly) {
      return left === right === true;
    }

    if (tbOnly) {
      return top === bottom === true;
    }

    return allDirs.indexOf(false) === -1;
  };

  /**
   * Uses native methods to return an object of dimension values.
   * @function
   * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
   * @returns {Object} - nested object of integer pixel values
   * TODO - if element is window, return only those values.
   */
  function GetDimensions(elem, test) {
    elem = elem.length ? elem[0] : elem;

    if (elem === window || elem === document) {
      throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
    }

    var rect = elem.getBoundingClientRect(),
        parRect = elem.parentNode.getBoundingClientRect(),
        winRect = document.body.getBoundingClientRect(),
        winY = window.pageYOffset,
        winX = window.pageXOffset;

    return {
      width: rect.width,
      height: rect.height,
      offset: {
        top: rect.top + winY,
        left: rect.left + winX
      },
      parentDims: {
        width: parRect.width,
        height: parRect.height,
        offset: {
          top: parRect.top + winY,
          left: parRect.left + winX
        }
      },
      windowDims: {
        width: winRect.width,
        height: winRect.height,
        offset: {
          top: winY,
          left: winX
        }
      }
    };
  }

  /**
   * Returns an object of top and left integer pixel values for dynamically rendered elements,
   * such as: Tooltip, Reveal, and Dropdown
   * @function
   * @param {jQuery} element - jQuery object for the element being positioned.
   * @param {jQuery} anchor - jQuery object for the element's anchor point.
   * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
   * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
   * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
   * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
   * TODO alter/rewrite to work with `em` values as well/instead of pixels
   */
  function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
    var $eleDims = GetDimensions(element),
        $anchorDims = anchor ? GetDimensions(anchor) : null;

    switch (position) {
      case 'top':
        return {
          left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left,
          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
        };
        break;
      case 'left':
        return {
          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
          top: $anchorDims.offset.top
        };
        break;
      case 'right':
        return {
          left: $anchorDims.offset.left + $anchorDims.width + hOffset,
          top: $anchorDims.offset.top
        };
        break;
      case 'center top':
        return {
          left: $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
        };
        break;
      case 'center bottom':
        return {
          left: isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
          top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
        break;
      case 'center left':
        return {
          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
          top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
        };
        break;
      case 'center right':
        return {
          left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
          top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
        };
        break;
      case 'center':
        return {
          left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2,
          top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - $eleDims.height / 2
        };
        break;
      case 'reveal':
        return {
          left: ($eleDims.windowDims.width - $eleDims.width) / 2,
          top: $eleDims.windowDims.offset.top + vOffset
        };
      case 'reveal full':
        return {
          left: $eleDims.windowDims.offset.left,
          top: $eleDims.windowDims.offset.top
        };
        break;
      default:
        return {
          left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left,
          top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
    }
  }
}(jQuery);
;/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/

'use strict';

!function ($) {

  var keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
  };

  var commands = {};

  var Keyboard = {
    keys: getKeyCodes(keyCodes),

    /**
     * Parses the (keyboard) event and returns a String that represents its key
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     * @param {Event} event - the event generated by the event handler
     * @return String key - String that represents the key pressed
     */
    parseKey: function (event) {
      var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
      if (event.shiftKey) key = 'SHIFT_' + key;
      if (event.ctrlKey) key = 'CTRL_' + key;
      if (event.altKey) key = 'ALT_' + key;
      return key;
    },


    /**
     * Handles the given (keyboard) event
     * @param {Event} event - the event generated by the event handler
     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
     * @param {Objects} functions - collection of functions that are to be executed
     */
    handleKey: function (event, component, functions) {
      var commandList = commands[component],
          keyCode = this.parseKey(event),
          cmds,
          command,
          fn;

      if (!commandList) return console.warn('Component not defined!');

      if (typeof commandList.ltr === 'undefined') {
        // this component does not differentiate between ltr and rtl
        cmds = commandList; // use plain list
      } else {
          // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
          if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);else cmds = $.extend({}, commandList.rtl, commandList.ltr);
        }
      command = cmds[keyCode];

      fn = functions[command];
      if (fn && typeof fn === 'function') {
        // execute function  if exists
        fn.apply();
        if (functions.handled || typeof functions.handled === 'function') {
          // execute function when event was handled
          functions.handled.apply();
        }
      } else {
        if (functions.unhandled || typeof functions.unhandled === 'function') {
          // execute function when event was not handled
          functions.unhandled.apply();
        }
      }
    },


    /**
     * Finds all focusable elements within the given `$element`
     * @param {jQuery} $element - jQuery object to search within
     * @return {jQuery} $focusable - all focusable elements within `$element`
     */
    findFocusable: function ($element) {
      return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
        if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) {
          return false;
        } //only have visible elements and those that have a tabindex greater or equal 0
        return true;
      });
    },


    /**
     * Returns the component name name
     * @param {Object} component - Foundation component, e.g. Slider or Reveal
     * @return String componentName
     */

    register: function (componentName, cmds) {
      commands[componentName] = cmds;
    }
  };

  /*
   * Constants for easier comparing.
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   */
  function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) {
      k[kcs[kc]] = kcs[kc];
    }return k;
  }

  Foundation.Keyboard = Keyboard;
}(jQuery);
;'use strict';

!function ($) {

  // Default set of media queries
  var defaultQueries = {
    'default': 'only screen',
    landscape: 'only screen and (orientation: landscape)',
    portrait: 'only screen and (orientation: portrait)',
    retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
  };

  var MediaQuery = {
    queries: [],

    current: '',

    /**
     * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
     * @function
     * @private
     */
    _init: function () {
      var self = this;
      var extractedStyles = $('.foundation-mq').css('font-family');
      var namedQueries;

      namedQueries = parseStyleToObject(extractedStyles);

      for (var key in namedQueries) {
        self.queries.push({
          name: key,
          value: 'only screen and (min-width: ' + namedQueries[key] + ')'
        });
      }

      this.current = this._getCurrentSize();

      this._watcher();
    },


    /**
     * Checks if the screen is at least as wide as a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
     */
    atLeast: function (size) {
      var query = this.get(size);

      if (query) {
        return window.matchMedia(query).matches;
      }

      return false;
    },


    /**
     * Gets the media query of a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to get.
     * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
     */
    get: function (size) {
      for (var i in this.queries) {
        var query = this.queries[i];
        if (size === query.name) return query.value;
      }

      return null;
    },


    /**
     * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
     * @function
     * @private
     * @returns {String} Name of the current breakpoint.
     */
    _getCurrentSize: function () {
      var matched;

      for (var i in this.queries) {
        var query = this.queries[i];

        if (window.matchMedia(query.value).matches) {
          matched = query;
        }
      }

      if (typeof matched === 'object') {
        return matched.name;
      } else {
        return matched;
      }
    },


    /**
     * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
     * @function
     * @private
     */
    _watcher: function () {
      var _this = this;

      $(window).on('resize.zf.mediaquery', function () {
        var newSize = _this._getCurrentSize();

        if (newSize !== _this.current) {
          // Broadcast the media query change on the window
          $(window).trigger('changed.zf.mediaquery', [newSize, _this.current]);

          // Change the current media query
          _this.current = newSize;
        }
      });
    }
  };

  Foundation.MediaQuery = MediaQuery;

  // matchMedia() polyfill - Test a CSS media type/query in JS.
  // Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
  window.matchMedia || (window.matchMedia = function () {
    'use strict';

    // For browsers that support matchMedium api such as IE 9 and webkit

    var styleMedia = window.styleMedia || window.media;

    // For those that don't support matchMedium
    if (!styleMedia) {
      var style = document.createElement('style'),
          script = document.getElementsByTagName('script')[0],
          info = null;

      style.type = 'text/css';
      style.id = 'matchmediajs-test';

      script.parentNode.insertBefore(style, script);

      // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
      info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

      styleMedia = {
        matchMedium: function (media) {
          var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

          // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }

          // Test if media query is true or false
          return info.width === '1px';
        }
      };
    }

    return function (media) {
      return {
        matches: styleMedia.matchMedium(media || 'all'),
        media: media || 'all'
      };
    };
  }());

  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    var styleObject = {};

    if (typeof str !== 'string') {
      return styleObject;
    }

    str = str.trim().slice(1, -1); // browsers re-quote string style values

    if (!str) {
      return styleObject;
    }

    styleObject = str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});

    return styleObject;
  }

  Foundation.MediaQuery = MediaQuery;
}(jQuery);
;'use strict';

!function ($) {

  /**
   * Motion module.
   * @module foundation.motion
   */

  var initClasses = ['mui-enter', 'mui-leave'];
  var activeClasses = ['mui-enter-active', 'mui-leave-active'];

  var Motion = {
    animateIn: function (element, animation, cb) {
      animate(true, element, animation, cb);
    },

    animateOut: function (element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };

  function Move(duration, elem, fn) {
    var anim,
        prog,
        start = null;
    // console.log('called');

    function move(ts) {
      if (!start) start = window.performance.now();
      // console.log(start, ts);
      prog = ts - start;
      fn.apply(elem);

      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }

  /**
   * Animates an element in or out using a CSS transition class.
   * @function
   * @private
   * @param {Boolean} isIn - Defines if the animation is in or out.
   * @param {Object} element - jQuery or HTML object to animate.
   * @param {String} animation - CSS class to use.
   * @param {Function} cb - Callback to run when animation is finished.
   */
  function animate(isIn, element, animation, cb) {
    element = $(element).eq(0);

    if (!element.length) return;

    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];

    // Set up the animation
    reset();

    element.addClass(animation).css('transition', 'none');

    requestAnimationFrame(function () {
      element.addClass(initClass);
      if (isIn) element.show();
    });

    // Start the animation
    requestAnimationFrame(function () {
      element[0].offsetWidth;
      element.css('transition', '').addClass(activeClass);
    });

    // Clean up the animation when it finishes
    element.one(Foundation.transitionend(element), finish);

    // Hides the element (for out animations), resets the element, and runs a callback
    function finish() {
      if (!isIn) element.hide();
      reset();
      if (cb) cb.apply(element);
    }

    // Resets transitions and removes motion-specific classes
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(initClass + ' ' + activeClass + ' ' + animation);
    }
  }

  Foundation.Move = Move;
  Foundation.Motion = Motion;
}(jQuery);
;'use strict';

!function ($) {

  var Nest = {
    Feather: function (menu) {
      var type = arguments.length <= 1 || arguments[1] === undefined ? 'zf' : arguments[1];

      menu.attr('role', 'menubar');

      var items = menu.find('li').attr({ 'role': 'menuitem' }),
          subMenuClass = 'is-' + type + '-submenu',
          subItemClass = subMenuClass + '-item',
          hasSubClass = 'is-' + type + '-submenu-parent';

      menu.find('a:first').attr('tabindex', 0);

      items.each(function () {
        var $item = $(this),
            $sub = $item.children('ul');

        if ($sub.length) {
          $item.addClass(hasSubClass).attr({
            'aria-haspopup': true,
            'aria-expanded': false,
            'aria-label': $item.children('a:first').text()
          });

          $sub.addClass('submenu ' + subMenuClass).attr({
            'data-submenu': '',
            'aria-hidden': true,
            'role': 'menu'
          });
        }

        if ($item.parent('[data-submenu]').length) {
          $item.addClass('is-submenu-item ' + subItemClass);
        }
      });

      return;
    },
    Burn: function (menu, type) {
      var items = menu.find('li').removeAttr('tabindex'),
          subMenuClass = 'is-' + type + '-submenu',
          subItemClass = subMenuClass + '-item',
          hasSubClass = 'is-' + type + '-submenu-parent';

      menu.find('*').removeClass(subMenuClass + ' ' + subItemClass + ' ' + hasSubClass + ' is-submenu-item submenu is-active').removeAttr('data-submenu').css('display', '');

      // console.log(      menu.find('.' + subMenuClass + ', .' + subItemClass + ', .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
      //           .removeClass(subMenuClass + ' ' + subItemClass + ' has-submenu is-submenu-item submenu')
      //           .removeAttr('data-submenu'));
      // items.each(function(){
      //   var $item = $(this),
      //       $sub = $item.children('ul');
      //   if($item.parent('[data-submenu]').length){
      //     $item.removeClass('is-submenu-item ' + subItemClass);
      //   }
      //   if($sub.length){
      //     $item.removeClass('has-submenu');
      //     $sub.removeClass('submenu ' + subMenuClass).removeAttr('data-submenu');
      //   }
      // });
    }
  };

  Foundation.Nest = Nest;
}(jQuery);
;'use strict';

!function ($) {

  function Timer(elem, options, cb) {
    var _this = this,
        duration = options.duration,
        //options is an object for easily adding features later.
    nameSpace = Object.keys(elem.data())[0] || 'timer',
        remain = -1,
        start,
        timer;

    this.isPaused = false;

    this.restart = function () {
      remain = -1;
      clearTimeout(timer);
      this.start();
    };

    this.start = function () {
      this.isPaused = false;
      // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      remain = remain <= 0 ? duration : remain;
      elem.data('paused', false);
      start = Date.now();
      timer = setTimeout(function () {
        if (options.infinite) {
          _this.restart(); //rerun the timer.
        }
        cb();
      }, remain);
      elem.trigger('timerstart.zf.' + nameSpace);
    };

    this.pause = function () {
      this.isPaused = true;
      //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      elem.data('paused', true);
      var end = Date.now();
      remain = remain - (end - start);
      elem.trigger('timerpaused.zf.' + nameSpace);
    };
  }

  /**
   * Runs a callback function when images are fully loaded.
   * @param {Object} images - Image(s) to check if loaded.
   * @param {Func} callback - Function to execute when image is fully loaded.
   */
  function onImagesLoaded(images, callback) {
    var self = this,
        unloaded = images.length;

    if (unloaded === 0) {
      callback();
    }

    images.each(function () {
      if (this.complete) {
        singleImageLoaded();
      } else if (typeof this.naturalWidth !== 'undefined' && this.naturalWidth > 0) {
        singleImageLoaded();
      } else {
        $(this).one('load', function () {
          singleImageLoaded();
        });
      }
    });

    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }

  Foundation.Timer = Timer;
  Foundation.onImagesLoaded = onImagesLoaded;
}(jQuery);
;//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
(function ($) {

	$.spotSwipe = {
		version: '1.0.0',
		enabled: 'ontouchstart' in document.documentElement,
		preventDefault: false,
		moveThreshold: 75,
		timeThreshold: 200
	};

	var startPosX,
	    startPosY,
	    startTime,
	    elapsedTime,
	    isMoving = false;

	function onTouchEnd() {
		//  alert(this);
		this.removeEventListener('touchmove', onTouchMove);
		this.removeEventListener('touchend', onTouchEnd);
		isMoving = false;
	}

	function onTouchMove(e) {
		if ($.spotSwipe.preventDefault) {
			e.preventDefault();
		}
		if (isMoving) {
			var x = e.touches[0].pageX;
			var y = e.touches[0].pageY;
			var dx = startPosX - x;
			var dy = startPosY - y;
			var dir;
			elapsedTime = new Date().getTime() - startTime;
			if (Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
				dir = dx > 0 ? 'left' : 'right';
			}
			// else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
			//   dir = dy > 0 ? 'down' : 'up';
			// }
			if (dir) {
				e.preventDefault();
				onTouchEnd.call(this);
				$(this).trigger('swipe', dir).trigger('swipe' + dir);
			}
		}
	}

	function onTouchStart(e) {
		if (e.touches.length == 1) {
			startPosX = e.touches[0].pageX;
			startPosY = e.touches[0].pageY;
			isMoving = true;
			startTime = new Date().getTime();
			this.addEventListener('touchmove', onTouchMove, false);
			this.addEventListener('touchend', onTouchEnd, false);
		}
	}

	function init() {
		this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
	}

	function teardown() {
		this.removeEventListener('touchstart', onTouchStart);
	}

	$.event.special.swipe = { setup: init };

	$.each(['left', 'up', 'down', 'right'], function () {
		$.event.special['swipe' + this] = { setup: function () {
				$(this).on('swipe', $.noop);
			} };
	});
})(jQuery);
/****************************************************
 * Method for adding psuedo drag events to elements *
 ***************************************************/
!function ($) {
	$.fn.addTouch = function () {
		this.each(function (i, el) {
			$(el).bind('touchstart touchmove touchend touchcancel', function () {
				//we pass the original event object because the jQuery event
				//object is normalized to w3c specs and does not provide the TouchList
				handleTouch(event);
			});
		});

		var handleTouch = function (event) {
			var touches = event.changedTouches,
			    first = touches[0],
			    eventTypes = {
				touchstart: 'mousedown',
				touchmove: 'mousemove',
				touchend: 'mouseup'
			},
			    type = eventTypes[event.type],
			    simulatedEvent;

			if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
				simulatedEvent = window.MouseEvent(type, {
					'bubbles': true,
					'cancelable': true,
					'screenX': first.screenX,
					'screenY': first.screenY,
					'clientX': first.clientX,
					'clientY': first.clientY
				});
			} else {
				simulatedEvent = document.createEvent('MouseEvent');
				simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);
			}
			first.target.dispatchEvent(simulatedEvent);
		};
	};
}(jQuery);

//**********************************
//**From the jQuery Mobile Library**
//**need to recreate functionality**
//**and try to improve if possible**
//**********************************

/* Removing the jQuery function ****
************************************

(function( $, window, undefined ) {

	var $document = $( document ),
		// supportTouch = $.mobile.support.touch,
		touchStartEvent = 'touchstart'//supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = 'touchend'//supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = 'touchmove'//supportTouch ? "touchmove" : "mousemove";

	// setup new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"swipe swipeleft swiperight" ).split( " " ), function( i, name ) {

		$.fn[ name ] = function( fn ) {
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	function triggerCustomEvent( obj, eventType, event, bubble ) {
		var originalType = event.type;
		event.type = eventType;
		if ( bubble ) {
			$.event.trigger( event, undefined, obj );
		} else {
			$.event.dispatch.call( obj, event );
		}
		event.type = originalType;
	}

	// also handles taphold

	// Also handles swipeleft, swiperight
	$.event.special.swipe = {

		// More than this horizontal displacement, and we will suppress scrolling.
		scrollSupressionThreshold: 30,

		// More time than this, and it isn't a swipe.
		durationThreshold: 1000,

		// Swipe horizontal displacement must be more than this.
		horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		// Swipe vertical displacement must be less than this.
		verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

		getLocation: function ( event ) {
			var winPageX = window.pageXOffset,
				winPageY = window.pageYOffset,
				x = event.clientX,
				y = event.clientY;

			if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
				event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

				// iOS4 clientX/clientY have the value that should have been
				// in pageX/pageY. While pageX/page/ have the value 0
				x = x - winPageX;
				y = y - winPageY;
			} else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

				// Some Android browsers have totally bogus values for clientX/Y
				// when scrolling/zooming a page. Detectable since clientX/clientY
				// should never be smaller than pageX/pageY minus page scroll
				x = event.pageX - winPageX;
				y = event.pageY - winPageY;
			}

			return {
				x: x,
				y: y
			};
		},

		start: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event,
				location = $.event.special.swipe.getLocation( data );
			return {
						time: ( new Date() ).getTime(),
						coords: [ location.x, location.y ]
					};
		},

		handleSwipe: function( start, stop, thisObject, origTarget ) {
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
				var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

				triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }), true );
				triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
				return true;
			}
			return false;

		},

		// This serves as a flag to ensure that at most one swipe event event is
		// in work at any given time
		eventInProgress: false,

		setup: function() {
			var events,
				thisObject = this,
				$this = $( thisObject ),
				context = {};

			// Retrieve the events data for this element and add the swipe context
			events = $.data( this, "mobile-events" );
			if ( !events ) {
				events = { length: 0 };
				$.data( this, "mobile-events", events );
			}
			events.length++;
			events.swipe = context;

			context.start = function( event ) {

				// Bail if we're already working on a swipe event
				if ( $.event.special.swipe.eventInProgress ) {
					return;
				}
				$.event.special.swipe.eventInProgress = true;

				var stop,
					start = $.event.special.swipe.start( event ),
					origTarget = event.target,
					emitted = false;

				context.move = function( event ) {
					if ( !start || event.isDefaultPrevented() ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );
					if ( !emitted ) {
						emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
						if ( emitted ) {

							// Reset the context to make way for the next swipe event
							$.event.special.swipe.eventInProgress = false;
						}
					}
					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				};

				context.stop = function() {
						emitted = true;

						// Reset the context to make way for the next swipe event
						$.event.special.swipe.eventInProgress = false;
						$document.off( touchMoveEvent, context.move );
						context.move = null;
				};

				$document.on( touchMoveEvent, context.move )
					.one( touchStopEvent, context.stop );
			};
			$this.on( touchStartEvent, context.start );
		},

		teardown: function() {
			var events, context;

			events = $.data( this, "mobile-events" );
			if ( events ) {
				context = events.swipe;
				delete events.swipe;
				events.length--;
				if ( events.length === 0 ) {
					$.removeData( this, "mobile-events" );
				}
			}

			if ( context ) {
				if ( context.start ) {
					$( this ).off( touchStartEvent, context.start );
				}
				if ( context.move ) {
					$document.off( touchMoveEvent, context.move );
				}
				if ( context.stop ) {
					$document.off( touchStopEvent, context.stop );
				}
			}
		}
	};
	$.each({
		swipeleft: "swipe.left",
		swiperight: "swipe.right"
	}, function( event, sourceEvent ) {

		$.event.special[ event ] = {
			setup: function() {
				$( this ).bind( sourceEvent, $.noop );
			},
			teardown: function() {
				$( this ).unbind( sourceEvent );
			}
		};
	});
})( jQuery, this );
*/
;'use strict';

!function ($) {

  var MutationObserver = function () {
    var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
    for (var i = 0; i < prefixes.length; i++) {
      if (prefixes[i] + 'MutationObserver' in window) {
        return window[prefixes[i] + 'MutationObserver'];
      }
    }
    return false;
  }();

  var triggers = function (el, type) {
    el.data(type).split(' ').forEach(function (id) {
      $('#' + id)[type === 'close' ? 'trigger' : 'triggerHandler'](type + '.zf.trigger', [el]);
    });
  };
  // Elements with [data-open] will reveal a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-open]', function () {
    triggers($(this), 'open');
  });

  // Elements with [data-close] will close a plugin that supports it when clicked.
  // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
  $(document).on('click.zf.trigger', '[data-close]', function () {
    var id = $(this).data('close');
    if (id) {
      triggers($(this), 'close');
    } else {
      $(this).trigger('close.zf.trigger');
    }
  });

  // Elements with [data-toggle] will toggle a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-toggle]', function () {
    triggers($(this), 'toggle');
  });

  // Elements with [data-closable] will respond to close.zf.trigger events.
  $(document).on('close.zf.trigger', '[data-closable]', function (e) {
    e.stopPropagation();
    var animation = $(this).data('closable');

    if (animation !== '') {
      Foundation.Motion.animateOut($(this), animation, function () {
        $(this).trigger('closed.zf');
      });
    } else {
      $(this).fadeOut().trigger('closed.zf');
    }
  });

  $(document).on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', function () {
    var id = $(this).data('toggle-focus');
    $('#' + id).triggerHandler('toggle.zf.trigger', [$(this)]);
  });

  /**
  * Fires once after all other scripts have loaded
  * @function
  * @private
  */
  $(window).load(function () {
    checkListeners();
  });

  function checkListeners() {
    eventsListener();
    resizeListener();
    scrollListener();
    closemeListener();
  }

  //******** only fires this function once on load, if there's something to watch ********
  function closemeListener(pluginName) {
    var yetiBoxes = $('[data-yeti-box]'),
        plugNames = ['dropdown', 'tooltip', 'reveal'];

    if (pluginName) {
      if (typeof pluginName === 'string') {
        plugNames.push(pluginName);
      } else if (typeof pluginName === 'object' && typeof pluginName[0] === 'string') {
        plugNames.concat(pluginName);
      } else {
        console.error('Plugin names must be strings');
      }
    }
    if (yetiBoxes.length) {
      var listeners = plugNames.map(function (name) {
        return 'closeme.zf.' + name;
      }).join(' ');

      $(window).off(listeners).on(listeners, function (e, pluginId) {
        var plugin = e.namespace.split('.')[0];
        var plugins = $('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');

        plugins.each(function () {
          var _this = $(this);

          _this.triggerHandler('close.zf.trigger', [_this]);
        });
      });
    }
  }

  function resizeListener(debounce) {
    var timer = void 0,
        $nodes = $('[data-resize]');
    if ($nodes.length) {
      $(window).off('resize.zf.trigger').on('resize.zf.trigger', function (e) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {

          if (!MutationObserver) {
            //fallback for IE 9
            $nodes.each(function () {
              $(this).triggerHandler('resizeme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a resize event
          $nodes.attr('data-events', "resize");
        }, debounce || 10); //default time to emit resize event
      });
    }
  }

  function scrollListener(debounce) {
    var timer = void 0,
        $nodes = $('[data-scroll]');
    if ($nodes.length) {
      $(window).off('scroll.zf.trigger').on('scroll.zf.trigger', function (e) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {

          if (!MutationObserver) {
            //fallback for IE 9
            $nodes.each(function () {
              $(this).triggerHandler('scrollme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a scroll event
          $nodes.attr('data-events', "scroll");
        }, debounce || 10); //default time to emit scroll event
      });
    }
  }

  function eventsListener() {
    if (!MutationObserver) {
      return false;
    }
    var nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

    //element callback
    var listeningElementsMutation = function (mutationRecordsList) {
      var $target = $(mutationRecordsList[0].target);
      //trigger the event handler for the element depending on type
      switch ($target.attr("data-events")) {

        case "resize":
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
          break;

        case "scroll":
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
          break;

        // case "mutate" :
        // console.log('mutate', $target);
        // $target.triggerHandler('mutate.zf.trigger');
        //
        // //make sure we don't get stuck in an infinite loop from sloppy codeing
        // if ($target.index('[data-mutate]') == $("[data-mutate]").length-1) {
        //   domMutationObserver();
        // }
        // break;

        default:
          return false;
        //nothing
      }
    };

    if (nodes.length) {
      //for each element that needs to listen for resizing, scrolling, (or coming soon mutation) add a single observer
      for (var i = 0; i <= nodes.length - 1; i++) {
        var elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe(nodes[i], { attributes: true, childList: false, characterData: false, subtree: false, attributeFilter: ["data-events"] });
      }
    }
  }

  // ------------------------------------

  // [PH]
  // Foundation.CheckWatchers = checkWatchers;
  Foundation.IHearYou = checkListeners;
  // Foundation.ISeeYou = scrollListener;
  // Foundation.IFeelYou = closemeListener;
}(jQuery);

// function domMutationObserver(debounce) {
//   // !!! This is coming soon and needs more work; not active  !!! //
//   var timer,
//   nodes = document.querySelectorAll('[data-mutate]');
//   //
//   if (nodes.length) {
//     // var MutationObserver = (function () {
//     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
//     //   for (var i=0; i < prefixes.length; i++) {
//     //     if (prefixes[i] + 'MutationObserver' in window) {
//     //       return window[prefixes[i] + 'MutationObserver'];
//     //     }
//     //   }
//     //   return false;
//     // }());
//
//
//     //for the body, we need to listen for all changes effecting the style and class attributes
//     var bodyObserver = new MutationObserver(bodyMutation);
//     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
//
//
//     //body callback
//     function bodyMutation(mutate) {
//       //trigger all listening elements and signal a mutation event
//       if (timer) { clearTimeout(timer); }
//
//       timer = setTimeout(function() {
//         bodyObserver.disconnect();
//         $('[data-mutate]').attr('data-events',"mutate");
//       }, debounce || 150);
//     }
//   }
// }
;jQuery(document).foundation();

var isMobile = /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase()),
    isTablet = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()),
    yt_video1 = "GHyT1OjHjUA",
    yt_video2 = "XuH1FXNGHyM",
    site = {

    init: function () {
        $('#participe').click(function () {
            $('html, body').animate({ scrollTop: $('#don').offset().top }, 300);
        });
        $('.more').click(function () {
            $(this).siblings('.full').show();
            $(this).hide();
        });

        //
        $(window).resize(site.resize);
        site.resize();
        site.animate.init();
        //
        $('#seeIntro').delay(1200).queue(function () {
            $(this).addClass('done');
        });
        //VIDEO
        $('#seeIntro').click(function () {
            BV_i = $('#video-intro').data('vide');
            BV = BV_i.getVideoObject();
            BV.pause();
            site.video.show(yt_video1);
        });
        $('#seeMinute').click(function () {
            site.video.show(yt_video2);
        });
        $('#yt-close, #yt--close-btn').click(site.video.hide);
        //site.video.show(yt_video1);
    },

    video: {
        show: function (id) {
            $('body').addClass('has-popin');
            $('#popin').show().fadeTo(200, 1);
            $('#yt').attr('src', 'https://www.youtube.com/embed/' + id + '?autoplay=true');
        },
        hide: function () {
            $('#popin').fadeTo(300, 0, site.video.remove);
        },
        remove: function () {
            $('#yt').attr('src', '');
            $('#popin').css('opacity', 0).hide();
            $('body').removeClass('has-popin');
        }
    },

    resize: function () {
        if (isMobile) return;
        $('#intro').css('height', $(window).height());
    },

    animate: {
        init: function () {
            elToAnimate = $('.animate');
            $window = $(window);
            $window.on('scroll resize', site.animate.update);
            $window.trigger('scroll');
        },

        update: function () {
            var windowHeight = $window.height(),
                windowTopPosition = $window.scrollTop(),
                windowBottomPosition = windowTopPosition + windowHeight,
                activeDelay = 0.25;

            $.each(elToAnimate, function () {
                var el = $(this),
                    elHeight = el.outerHeight(),
                    elTopPosition = el.offset().top,
                    elBottomPosition = elTopPosition + elHeight;
                //if ((elBottomPosition >= windowTopPosition) &&
                if (elTopPosition <= windowBottomPosition - windowHeight * activeDelay) el.addClass('done');
                //                else el.removeClass('done');
            });
        }
    }

};

$(function () {
    site.init();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJqcXVlcnkudmlkZS5qcyIsImZvdW5kYXRpb24uY29yZS5qcyIsImZvdW5kYXRpb24udXRpbC5ib3guanMiLCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQuanMiLCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsImZvdW5kYXRpb24udXRpbC5tb3Rpb24uanMiLCJmb3VuZGF0aW9uLnV0aWwubmVzdC5qcyIsImZvdW5kYXRpb24udXRpbC50aW1lckFuZEltYWdlTG9hZGVyLmpzIiwiZm91bmRhdGlvbi51dGlsLnRvdWNoLmpzIiwiZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwiaW5pdC1mb3VuZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGNBQVUsT0FBTyxNQUFQLElBQWUsWUFBVSxPQUFPLE9BQU8sT0FBUCxHQUFlLE9BQU8sT0FBUCxHQUFlLEVBQUUsUUFBRixHQUFXLEVBQUUsQ0FBRixFQUFJLENBQUMsQ0FBRCxDQUFmLEdBQW1CLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRyxDQUFDLEVBQUUsUUFBRixFQUFXLE1BQU0sSUFBSSxLQUFKLENBQVUsMENBQVYsQ0FBTixDQUFmLE9BQWtGLEVBQUUsQ0FBRixDQUFQLENBQTVFO0dBQVgsR0FBb0csRUFBRSxDQUFGLENBQS9MLENBQUQ7Q0FBYixDQUFtTixlQUFhLE9BQU8sTUFBUCxHQUFjLE1BQTNCLEdBQWtDLElBQWxDLEVBQXVDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUksSUFBRSxFQUFGO01BQUssSUFBRSxFQUFFLFFBQUY7TUFBVyxJQUFFLEVBQUUsS0FBRjtNQUFRLElBQUUsRUFBRSxNQUFGO01BQVMsSUFBRSxFQUFFLElBQUY7TUFBTyxJQUFFLEVBQUUsT0FBRjtNQUFVLElBQUUsRUFBRjtNQUFLLElBQUUsRUFBRSxRQUFGO01BQVcsSUFBRSxF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bnQiOlsiLyohIGpRdWVyeSB2Mi4yLjEgfCAoYykgalF1ZXJ5IEZvdW5kYXRpb24gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPWMuc2xpY2UsZj1jLmNvbmNhdCxnPWMucHVzaCxoPWMuaW5kZXhPZixpPXt9LGo9aS50b1N0cmluZyxrPWkuaGFzT3duUHJvcGVydHksbD17fSxtPVwiMi4yLjFcIixuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBuLmZuLmluaXQoYSxiKX0sbz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2cscD0vXi1tcy0vLHE9Ly0oW1xcZGEtel0pL2dpLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtuLmZuPW4ucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3RvcjpuLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmUuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW4ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZWFjaCh0aGlzLGEpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpnLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbi5leHRlbmQ9bi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxuLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYobi5pc1BsYWluT2JqZWN0KGQpfHwoZT1uLmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJm4uaXNBcnJheShjKT9jOltdKTpmPWMmJm4uaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09bi5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LG4uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bi50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXksaXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3ZhciBiPWEmJmEudG9TdHJpbmcoKTtyZXR1cm4hbi5pc0FycmF5KGEpJiZiLXBhcnNlRmxvYXQoYikrMT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpPyExOmEuY29uc3RydWN0b3ImJiFrLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpPyExOiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2lbai5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxkLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTA7aWYocyhhKSl7Zm9yKGM9YS5sZW5ndGg7Yz5kO2QrKylpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWt9ZWxzZSBmb3IoZCBpbiBhKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpnLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6aC5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZz0wLGg9W107aWYocyhhKSlmb3IoZD1hLmxlbmd0aDtkPmc7ZysrKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO2Vsc2UgZm9yKGcgaW4gYSllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtyZXR1cm4gZi5hcHBseShbXSxoKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZD1lLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGQuY29uY2F0KGUuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omx9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihuLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2lbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMTpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1nYSgpLHo9Z2EoKSxBPWdhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9MTw8MzEsRD17fS5oYXNPd25Qcm9wZXJ0eSxFPVtdLEY9RS5wb3AsRz1FLnB1c2gsSD1FLnB1c2gsST1FLnNsaWNlLEo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEs9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEw9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE09XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixOPVwiXFxcXFtcIitMK1wiKihcIitNK1wiKSg/OlwiK0wrXCIqKFsqXiR8IX5dPz0pXCIrTCtcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK00rXCIpKXwpXCIrTCtcIipcXFxcXVwiLE89XCI6KFwiK00rXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK04rXCIpKil8LiopXFxcXCl8KVwiLFA9bmV3IFJlZ0V4cChMK1wiK1wiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrTCtcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTCtcIiskXCIsXCJnXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitMK1wiKixcIitMK1wiKlwiKSxTPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiooWz4rfl18XCIrTCtcIilcIitMK1wiKlwiKSxUPW5ldyBSZWdFeHAoXCI9XCIrTCtcIiooW15cXFxcXSdcXFwiXSo/KVwiK0wrXCIqXFxcXF1cIixcImdcIiksVT1uZXcgUmVnRXhwKE8pLFY9bmV3IFJlZ0V4cChcIl5cIitNK1wiJFwiKSxXPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitNK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitOKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitPKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitMK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTCtcIiooPzooWystXXwpXCIrTCtcIiooXFxcXGQrKXwpKVwiK0wrXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSytcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0wrXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0wrXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0wrXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFg9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxZPS9eaFxcZCQvaSxaPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sJD0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxfPS9bK35dLyxhYT0vJ3xcXFxcL2csYmE9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0wrXCI/fChcIitMK1wiKXwuKVwiLFwiaWdcIiksY2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sZGE9ZnVuY3Rpb24oKXttKCl9O3RyeXtILmFwcGx5KEU9SS5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxFW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGVhKXtIPXthcHBseTpFLmxlbmd0aD9mdW5jdGlvbihhLGIpe0cuYXBwbHkoYSxJLmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBmYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzLHc9YiYmYi5vd25lckRvY3VtZW50LHg9Yj9iLm5vZGVUeXBlOjk7aWYoZD1kfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT14JiY5IT09eCYmMTEhPT14KXJldHVybiBkO2lmKCFlJiYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4scCkpe2lmKDExIT09eCYmKG89JC5leGVjKGEpKSlpZihmPW9bMV0pe2lmKDk9PT14KXtpZighKGo9Yi5nZXRFbGVtZW50QnlJZChmKSkpcmV0dXJuIGQ7aWYoai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2UgaWYodyYmKGo9dy5nZXRFbGVtZW50QnlJZChmKSkmJnQoYixqKSYmai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2V7aWYob1syXSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGY9b1szXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGYpKSxkfWlmKGMucXNhJiYhQVthK1wiIFwiXSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYoMSE9PXgpdz1iLHM9YTtlbHNlIGlmKFwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhrPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2s9ay5yZXBsYWNlKGFhLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLHI9ZyhhKSxoPXIubGVuZ3RoLGw9Vi50ZXN0KGspP1wiI1wiK2s6XCJbaWQ9J1wiK2srXCInXVwiO3doaWxlKGgtLSlyW2hdPWwrXCIgXCIrcWEocltoXSk7cz1yLmpvaW4oXCIsXCIpLHc9Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxifWlmKHMpdHJ5e3JldHVybiBILmFwcGx5KGQsdy5xdWVyeVNlbGVjdG9yQWxsKHMpKSxkfWNhdGNoKHkpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFEsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gZ2EoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBoYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGlhKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBqYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9Yy5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmKH5iLnNvdXJjZUluZGV4fHxDKS0ofmEuc291cmNlSW5kZXh8fEMpO2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBsYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGhhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGhhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9ZmEuc3VwcG9ydD17fSxmPWZhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYj9cIkhUTUxcIiE9PWIubm9kZU5hbWU6ITF9LG09ZmEuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksKGU9bi5kZWZhdWx0VmlldykmJmUudG9wIT09ZSYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixkYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZGEpKSxjLmF0dHJpYnV0ZXM9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVoudGVzdChuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1pYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFuLmdldEVsZW1lbnRzQnlOYW1lfHwhbi5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmcD9iLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSk6dm9pZCAwfSxyPVtdLHE9W10sKGMucXNhPVoudGVzdChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGlhKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitMK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitMK1wiKig/OnZhbHVlfFwiK0srXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksaWEoZnVuY3Rpb24oYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0wrXCIqWypeJHwhfl0/PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fHEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1aLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmlhKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCJkaXZcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixPKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPVoudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fFoudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PW58fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09bnx8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9KKGssYSktSihrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGc9W2FdLGg9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PW4/LTE6Yj09PW4/MTplPy0xOmY/MTprP0ooayxhKS1KKGssYik6MDtpZihlPT09ZilyZXR1cm4ga2EoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpZy51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7d2hpbGUoZ1tkXT09PWhbZF0pZCsrO3JldHVybiBkP2thKGdbZF0saFtkXSk6Z1tkXT09PXY/LTE6aFtkXT09PXY/MTowfSxuKTpufSxmYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZhKGEsbnVsbCxudWxsLGIpfSxmYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoVCxcIj0nJDEnXVwiKSxjLm1hdGNoZXNTZWxlY3RvciYmcCYmIUFbYitcIiBcIl0mJighcnx8IXIudGVzdChiKSkmJighcXx8IXEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGZhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGZhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZmEuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkQuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGZhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxmYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9ZmEuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1mYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpoYSxtYXRjaDpXLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGJhLGNhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGJhLGNhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxmYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZmYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gVy5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlUudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTCtcIilcIithK1wiKFwiK0wrXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1mYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKFAsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWI/ZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9oYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SihhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDpoYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUSxcIiQxXCIpKTtyZXR1cm4gZFt1XT9oYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZmEoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczpoYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoYmEsY2EpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBWLnRlc3QoYXx8XCJcIil8fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWS50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0Om5hKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpuYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6bmEoZnVuY3Rpb24oYSxiLGMpe3JldHVyblswPmM/YytiOmNdfSksZXZlbjpuYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpuYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPWxhKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2Z1bmN0aW9uIHBhKCl7fXBhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcGEsZz1mYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpeyghY3x8KGU9Ui5leGVjKGgpKSkmJihlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVMuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUSxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9V1tnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2ZhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcWEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHJhKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaixrPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaj1iW3VdfHwoYlt1XT17fSksaT1qW2IudW5pcXVlSURdfHwoaltiLnVuaXF1ZUlEXT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4ga1syXT1oWzJdO2lmKGlbZF09ayxrWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdGEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylmYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKCFjfHxjKGYsZCxlKSkmJihnLnB1c2goZiksaiYmYi5wdXNoKGgpKTtyZXR1cm4gZ31mdW5jdGlvbiB2YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD12YShkKSksZSYmIWVbdV0mJihlPXZhKGUsZikpLGhhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHRhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dWEocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXVhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9KKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj11YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SC5hcHBseShnLHIpfSl9ZnVuY3Rpb24gd2EoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1yYShmdW5jdGlvbihhKXtyZXR1cm4gSihiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtyYShzYShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gdmEoaT4xJiZzYShtKSxpPjEmJnFhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUSxcIiQxXCIpLGMsZT5pJiZ3YShhLnNsaWNlKGksZSkpLGY+ZSYmd2EoYT1hLnNsaWNlKGUpKSxmPmUmJnFhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHNhKG0pfWZ1bmN0aW9uIHhhKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1GLmNhbGwoaSkpO3U9dWEodSl9SC5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmZhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9oYShmKTpmfXJldHVybiBoPWZhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXdhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx4YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9ZmEuc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1XLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksXy50ZXN0KGpbMF0udHlwZSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZxYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSwhYnx8Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGphKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8amEoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGphKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGZhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZVNvcnQ9bi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHY9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LHc9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx4PS9ePChbXFx3LV0rKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx5PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB6KGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoeS50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaC5jYWxsKGIsYSk+LTEhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEheih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ3LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBBLEI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQz1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxBLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkIuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSkseC50ZXN0KGVbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJmYucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1mKSx0aGlzLmNvbnRleHQ9ZCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT92b2lkIDAhPT1jLnJlYWR5P2MucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07Qy5wcm90b3R5cGU9bi5mbixBPW4oZCk7dmFyIEQ9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sRT17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW4oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYobi5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXcudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aC5jYWxsKG4oYSksdGhpc1swXSk6aC5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZVNvcnQobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRihhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gdigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRVthXXx8bi51bmlxdWVTb3J0KGUpLEQudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBHPS9cXFMrL2c7ZnVuY3Rpb24gSChhKXt2YXIgYj17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goRyl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9IKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1hLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7bi5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09bi50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIG4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGg+PWMmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhjLm5vdGlmeSkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1lLmNhbGwoYXJndW1lbnRzKSxkPWMubGVuZ3RoLGY9MSE9PWR8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2Q6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZS5jYWxsKGFyZ3VtZW50cyk6ZCxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGQ+MSlmb3IoaT1uZXcgQXJyYXkoZCksaj1uZXcgQXJyYXkoZCksaz1uZXcgQXJyYXkoZCk7ZD5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5wcm9ncmVzcyhoKGIsaixpKSkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEk7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEkucmVzb2x2ZVdpdGgoZCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGQpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihkKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBKKCl7ZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEopLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixKKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBJfHwoST1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWQucmVhZHlTdGF0ZSYmIWQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Euc2V0VGltZW91dChuLnJlYWR5KTooZC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEopLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixKKSkpLEkucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIEs9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpSyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxMPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gTSgpe3RoaXMuZXhwYW5kbz1uLmV4cGFuZG8rTS51aWQrK31NLnVpZD0xLE0ucHJvdG90eXBlPXtyZWdpc3RlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fHt9O3JldHVybiBhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1jOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yyx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxhW3RoaXMuZXhwYW5kb119LGNhY2hlOmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXJldHVybnt9O3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sTChhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtiXT1jO2Vsc2UgZm9yKGQgaW4gYillW2RdPWJbZF07cmV0dXJuIGV9LGdldDpmdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3RoaXMuY2FjaGUoYSk6YVt0aGlzLmV4cGFuZG9dJiZhW3RoaXMuZXhwYW5kb11bYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWYpe2lmKHZvaWQgMD09PWIpdGhpcy5yZWdpc3RlcihhKTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBmP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZj9bZF06ZC5tYXRjaChHKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZltkW2NdXX0odm9pZCAwPT09Ynx8bi5pc0VtcHR5T2JqZWN0KGYpKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgYVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT1iJiYhbi5pc0VtcHR5T2JqZWN0KGIpfX07dmFyIE49bmV3IE0sTz1uZXcgTSxQPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxRPS9bQS1aXS9nO2Z1bmN0aW9uIFIoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6UC50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fU8uc2V0KGEsYixjKTtcbn1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBPLmhhc0RhdGEoYSl8fE4uaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE8uYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe08ucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTi5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe04ucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1PLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIU4uZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxSKGYsZCxlW2RdKSkpO04uc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Ty5zZXQodGhpcyxhKX0pOksodGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9Ty5nZXQoZixhKXx8Ty5nZXQoZixhLnJlcGxhY2UoUSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGQ9bi5jYW1lbENhc2UoYSksYz1PLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1SKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSBkPW4uY2FtZWxDYXNlKGEpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPU8uZ2V0KHRoaXMsZCk7Ty5zZXQodGhpcyxkLGIpLGEuaW5kZXhPZihcIi1cIik+LTEmJnZvaWQgMCE9PWMmJk8uc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtPLnJlbW92ZSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1OLmdldChhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9Ti5hY2Nlc3MoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTi5nZXQoYSxjKXx8Ti5hY2Nlc3MoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe04ucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPU4uZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFM9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFQ9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrUytcIikoW2EteiVdKikkXCIsXCJpXCIpLFU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bi5jc3MoYSxcImRpc3BsYXlcIil8fCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX07ZnVuY3Rpb24gVyhhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gbi5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChuLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0obi5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmVC5leGVjKG4uY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsbi5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgWD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxZPS88KFtcXHc6LV0rKS8sWj0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLCQ9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTskLm9wdGdyb3VwPSQub3B0aW9uLCQudGJvZHk9JC50Zm9vdD0kLmNvbGdyb3VwPSQuY2FwdGlvbj0kLnRoZWFkLCQudGg9JC50ZDtmdW5jdGlvbiBfKGEsYil7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZuLm5vZGVOYW1lKGEsYik/bi5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBhYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylOLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxOLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIGJhPS88fCYjP1xcdys7LztmdW5jdGlvbiBjYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbD1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPVtdLG89MCxwPWEubGVuZ3RoO3A+bztvKyspaWYoZj1hW29dLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZikpbi5tZXJnZShtLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYoYmEudGVzdChmKSl7Zz1nfHxsLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaD0oWS5leGVjKGYpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxpPSRbaF18fCQuX2RlZmF1bHQsZy5pbm5lckhUTUw9aVsxXStuLmh0bWxQcmVmaWx0ZXIoZikraVsyXSxrPWlbMF07d2hpbGUoay0tKWc9Zy5sYXN0Q2hpbGQ7bi5tZXJnZShtLGcuY2hpbGROb2RlcyksZz1sLmZpcnN0Q2hpbGQsZy50ZXh0Q29udGVudD1cIlwifWVsc2UgbS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2wudGV4dENvbnRlbnQ9XCJcIixvPTA7d2hpbGUoZj1tW28rK10paWYoZCYmbi5pbkFycmF5KGYsZCk+LTEpZSYmZS5wdXNoKGYpO2Vsc2UgaWYoaj1uLmNvbnRhaW5zKGYub3duZXJEb2N1bWVudCxmKSxnPV8obC5hcHBlbmRDaGlsZChmKSxcInNjcmlwdFwiKSxqJiZhYShnKSxjKXtrPTA7d2hpbGUoZj1nW2srK10pWi50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGwuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixsLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIGRhPS9ea2V5LyxlYT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sZmE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBnYSgpe3JldHVybiEwfWZ1bmN0aW9uIGhhKCl7cmV0dXJuITF9ZnVuY3Rpb24gaWEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIGphKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYilqYShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPWhhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9bi5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1OLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG4mJm4uZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP24uZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uaGFzRGF0YShhKSYmTi5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9ZmEuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWlbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUgaVtvXSl9ZWxzZSBmb3IobyBpbiBpKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGkpJiZOLnJlbW92ZShhLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxkLGYsZyxoPVtdLGk9ZS5jYWxsKGFyZ3VtZW50cyksaj0oTi5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkoIWEucm5hbWVzcGFjZXx8YS5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpKSYmKGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxkPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1kJiYoYS5yZXN1bHQ9ZCk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxpc05hTihhLmJ1dHRvbil8fGEuYnV0dG9uPDEpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWkubm9kZVR5cGUmJihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSkpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPi0xOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGRldGFpbCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGQsZT1jLmRvY3VtZW50RWxlbWVudCxmPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZSYmZS5zY3JvbGxMZWZ0fHxmJiZmLnNjcm9sbExlZnR8fDApLShlJiZlLmNsaWVudExlZnR8fGYmJmYuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGUmJmUuc2Nyb2xsVG9wfHxmJiZmLnNjcm9sbFRvcHx8MCktKGUmJmUuY2xpZW50VG9wfHxmJiZmLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWd8fChhLndoaWNoPTEmZz8xOjImZz8zOjQmZz8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZSxmPWEudHlwZSxnPWEsaD10aGlzLmZpeEhvb2tzW2ZdO2h8fCh0aGlzLmZpeEhvb2tzW2ZdPWg9ZWEudGVzdChmKT90aGlzLm1vdXNlSG9va3M6ZGEudGVzdChmKT90aGlzLmtleUhvb2tzOnt9KSxlPWgucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoaC5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGcpLGI9ZS5sZW5ndGg7d2hpbGUoYi0tKWM9ZVtiXSxhW2NdPWdbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9ZCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksaC5maWx0ZXI/aC5maWx0ZXIoYSxnKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PWlhKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PWlhKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LG4ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP2dhOmhhKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOm4uRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOmhhLGlzUHJvcGFnYXRpb25TdG9wcGVkOmhhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOmhhLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPWdhLGEmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Z2EsYSYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9Z2EsYSYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4oIWV8fGUhPT1kJiYhbi5jb250YWlucyhkLGUpKSYmKGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBqYSh0aGlzLGEsYixjLGQpfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGI9PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9aGEpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIGthPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6LV0rKVtePl0qKVxcLz4vZ2ksbGE9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksbWE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxuYT0vXnRydWVcXC8oLiopLyxvYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gcGEoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24gcWEoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gcmEoYSl7dmFyIGI9bmEuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIHNhKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTi5oYXNEYXRhKGEpJiYoZj1OLmFjY2VzcyhhKSxnPU4uc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1PLmhhc0RhdGEoYSkmJihoPU8uYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksTy5zZXQoYixpKSl9fWZ1bmN0aW9uIHRhKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJlgudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6KFwiaW5wdXRcIj09PWN8fFwidGV4dGFyZWFcIj09PWMpJiYoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIHVhKGEsYixjLGQpe2I9Zi5hcHBseShbXSxiKTt2YXIgZSxnLGgsaSxqLGssbT0wLG89YS5sZW5ndGgscD1vLTEscT1iWzBdLHI9bi5pc0Z1bmN0aW9uKHEpO2lmKHJ8fG8+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFsLmNoZWNrQ2xvbmUmJm1hLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3ImJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSx1YShmLGIsYyxkKX0pO2lmKG8mJihlPWNhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZz1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWcpLGd8fGQpKXtmb3IoaD1uLm1hcChfKGUsXCJzY3JpcHRcIikscWEpLGk9aC5sZW5ndGg7bz5tO20rKylqPWUsbSE9PXAmJihqPW4uY2xvbmUoaiwhMCwhMCksaSYmbi5tZXJnZShoLF8oaixcInNjcmlwdFwiKSkpLGMuY2FsbChhW21dLGosbSk7aWYoaSlmb3Ioaz1oW2gubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoaCxyYSksbT0wO2k+bTttKyspaj1oW21dLFoudGVzdChqLnR5cGV8fFwiXCIpJiYhTi5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoayxqKSYmKGouc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoai5zcmMpOm4uZ2xvYmFsRXZhbChqLnRleHRDb250ZW50LnJlcGxhY2Uob2EsXCJcIikpKX1yZXR1cm4gYX1mdW5jdGlvbiB2YShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9uLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8bi5jbGVhbkRhdGEoXyhkKSksZC5wYXJlbnROb2RlJiYoYyYmbi5jb250YWlucyhkLm93bmVyRG9jdW1lbnQsZCkmJmFhKF8oZCxcInNjcmlwdFwiKSksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpKTtyZXR1cm4gYX1uLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKGthLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGwubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPV8oaCksZj1fKGEpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspdGEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8XyhhKSxnPWd8fF8oaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylzYShmW2RdLGdbZF0pO2Vsc2Ugc2EoYSxoKTtyZXR1cm4gZz1fKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmYWEoZywhaSYmXyhhLFwic2NyaXB0XCIpKSxofSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlPW4uZXZlbnQuc3BlY2lhbCxmPTA7dm9pZCAwIT09KGM9YVtmXSk7ZisrKWlmKEwoYykpe2lmKGI9Y1tOLmV4cGFuZG9dKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cyllW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO2NbTi5leHBhbmRvXT12b2lkIDB9Y1tPLmV4cGFuZG9dJiYoY1tPLmV4cGFuZG9dPXZvaWQgMCl9fX0pLG4uZm4uZXh0ZW5kKHtkb21NYW5pcDp1YSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHZhKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJih0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXBhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIWxhLnRlc3QoYSkmJiEkWyhZLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1uLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoXyhiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7bi5pbkFycmF5KHRoaXMsYSk8MCYmKG4uY2xlYW5EYXRhKF8odGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxmPWUubGVuZ3RoLTEsaD0wO2Y+PWg7aCsrKWM9aD09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGcuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIHdhLHhhPXtIVE1MOlwiYmxvY2tcIixCT0RZOlwiYmxvY2tcIn07ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1uKGIuY3JlYXRlRWxlbWVudChhKSkuYXBwZW5kVG8oYi5ib2R5KSxkPW4uY3NzKGNbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBjLmRldGFjaCgpLGR9ZnVuY3Rpb24gemEoYSl7dmFyIGI9ZCxjPXhhW2FdO3JldHVybiBjfHwoYz15YShhLGIpLFwibm9uZVwiIT09YyYmY3x8KHdhPSh3YXx8bihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPXdhWzBdLmNvbnRlbnREb2N1bWVudCxiLndyaXRlKCksYi5jbG9zZSgpLGM9eWEoYSxiKSx3YS5kZXRhY2goKSkseGFbYV09YyksY312YXIgQWE9L15tYXJnaW4vLEJhPW5ldyBSZWdFeHAoXCJeKFwiK1MrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksQ2E9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfSxEYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX0sRWE9ZC5kb2N1bWVudEVsZW1lbnQ7IWZ1bmN0aW9uKCl7dmFyIGIsYyxlLGYsZz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoaC5zdHlsZSl7aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsbC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxnLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGcuYXBwZW5kQ2hpbGQoaCk7ZnVuY3Rpb24gaSgpe2guc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGguaW5uZXJIVE1MPVwiXCIsRWEuYXBwZW5kQ2hpbGQoZyk7dmFyIGQ9YS5nZXRDb21wdXRlZFN0eWxlKGgpO2I9XCIxJVwiIT09ZC50b3AsZj1cIjJweFwiPT09ZC5tYXJnaW5MZWZ0LGM9XCI0cHhcIj09PWQud2lkdGgsaC5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGU9XCI0cHhcIj09PWQubWFyZ2luUmlnaHQsRWEucmVtb3ZlQ2hpbGQoZyl9bi5leHRlbmQobCx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBpKCksYn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGN9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGV9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksZn0scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9aC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9aC5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixjLnN0eWxlLm1hcmdpblJpZ2h0PWMuc3R5bGUud2lkdGg9XCIwXCIsaC5zdHlsZS53aWR0aD1cIjFweFwiLEVhLmFwcGVuZENoaWxkKGcpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMpLm1hcmdpblJpZ2h0KSxFYS5yZW1vdmVDaGlsZChnKSxoLnJlbW92ZUNoaWxkKGMpLGJ9fSl9fSgpO2Z1bmN0aW9uIEZhKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8Q2EoYSksZz1jP2MuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXTp2b2lkIDAsXCJcIiE9PWcmJnZvaWQgMCE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLGMmJiFsLnBpeGVsTWFyZ2luUmlnaHQoKSYmQmEudGVzdChnKSYmQWEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIEdhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBIYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sSWE9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEphPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sS2E9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdLExhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBNYShhKXtpZihhIGluIExhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9S2EubGVuZ3RoO3doaWxlKGMtLSlpZihhPUthW2NdK2IsYSBpbiBMYSlyZXR1cm4gYX1mdW5jdGlvbiBOYShhLGIsYyl7dmFyIGQ9VC5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gT2EoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1VbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitVW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitVW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFBhKGIsYyxlKXt2YXIgZj0hMCxnPVwid2lkdGhcIj09PWM/Yi5vZmZzZXRXaWR0aDpiLm9mZnNldEhlaWdodCxoPUNhKGIpLGk9XCJib3JkZXItYm94XCI9PT1uLmNzcyhiLFwiYm94U2l6aW5nXCIsITEsaCk7aWYoZC5tc0Z1bGxzY3JlZW5FbGVtZW50JiZhLnRvcCE9PWEmJmIuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihnPU1hdGgucm91bmQoMTAwKmIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbY10pKSwwPj1nfHxudWxsPT1nKXtpZihnPUZhKGIsYyxoKSwoMD5nfHxudWxsPT1nKSYmKGc9Yi5zdHlsZVtjXSksQmEudGVzdChnKSlyZXR1cm4gZztmPWkmJihsLmJveFNpemluZ1JlbGlhYmxlKCl8fGc9PT1iLnN0eWxlW2NdKSxnPXBhcnNlRmxvYXQoZyl8fDB9cmV0dXJuIGcrT2EoYixjLGV8fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGYsaCkrXCJweFwifWZ1bmN0aW9uIFFhKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPU4uZ2V0KGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZWKGQpJiYoZltnXT1OLmFjY2VzcyhkLFwib2xkZGlzcGxheVwiLHphKGQubm9kZU5hbWUpKSkpOihlPVYoZCksXCJub25lXCI9PT1jJiZlfHxOLnNldChkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPUZhKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1ULmV4ZWMoYykpJiZlWzFdJiYoYz1XKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwobi5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxsLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPUZhKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gSmEmJihlPUphW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz9IYS50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/RGEoYSxJYSxmdW5jdGlvbigpe3JldHVybiBQYShhLGIsZCl9KTpQYShhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmQ2EoYSksZz1kJiZPYShhLGIsZCxcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9VC5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1uLmNzcyhhLGIpKSxOYShhLGMsZyl9fX0pLG4uY3NzSG9va3MubWFyZ2luTGVmdD1HYShsLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe3JldHVybiBiPyhwYXJzZUZsb2F0KEZhKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LURhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIjp2b2lkIDB9KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PUdhKGwucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP0RhKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sRmEsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1VbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sQWEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9TmEpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD1DYShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtWKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gUmEoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IFJhLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1SYSxSYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlJhLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fG4uZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1SYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpSYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxSYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9UmEucHJvdG90eXBlLFJhLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXSYmIW4uY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpuLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxSYS5wcm9wSG9va3Muc2Nyb2xsVG9wPVJhLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxuLmZ4PVJhLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgU2EsVGEsVWE9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFZhPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gV2EoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7U2E9dm9pZCAwfSksU2E9bi5ub3coKX1mdW5jdGlvbiBYYShhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ND5kO2QrPTItYiljPVVbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gWWEoYSxiLGMpe2Zvcih2YXIgZCxlPShfYS50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChfYS50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIFphKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9dGhpcyxtPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJlYoYSkscT1OLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLGwuYWx3YXlzKGZ1bmN0aW9uKCl7bC5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9OLmdldChhLFwib2xkZGlzcGxheVwiKXx8emEoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLFVhLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW1bZF09cSYmcVtkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG0pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP3phKGEubm9kZU5hbWUpOmopJiYoby5kaXNwbGF5PWopO2Vsc2V7cT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Ti5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocS5oaWRkZW49IXApLHA/bihhKS5zaG93KCk6bC5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxsLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtOLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG0pbi5zdHlsZShhLGIsbVtiXSl9KTtmb3IoZCBpbiBtKWc9WWEocD9xW2RdOjAsZCxsKSxkIGluIHF8fChxW2RdPWcuc3RhcnQscCYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gJGEoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIF9hKGEsYixjKXt2YXIgZCxlLGY9MCxnPV9hLnByZWZpbHRlcnMubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9U2F8fFdhKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOm4uZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6U2F8fFdhKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKCRhKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1fYS5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gbi5pc0Z1bmN0aW9uKGQuc3RvcCkmJihuLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9bi5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIG4ubWFwKGssWWEsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChfYSx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gVyhjLmVsZW0sYSxULmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goRyk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLF9hLnR3ZWVuZXJzW2NdPV9hLnR3ZWVuZXJzW2NdfHxbXSxfYS50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltaYV0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9fYS5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6X2EucHJlZmlsdGVycy5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LChudWxsPT1kLnF1ZXVlfHxkLnF1ZXVlPT09ITApJiYoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe24uaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmbi5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LG4uZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKFYpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5pc0VtcHR5T2JqZWN0KGEpLGY9bi5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPV9hKHRoaXMsbi5leHRlbmQoe30sYSksZik7KGV8fE4uZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPU4uZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJlZhLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7KGJ8fCFjKSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1OLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPW4udGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxuLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtnPmI7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLG4uZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmZuW2JdO24uZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKFhhKGIsITApLGEsZCxlKX19KSxuLmVhY2goe3NsaWRlRG93bjpYYShcInNob3dcIiksc2xpZGVVcDpYYShcImhpZGVcIiksc2xpZGVUb2dnbGU6WGEoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksbi50aW1lcnM9W10sbi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9bi50aW1lcnM7Zm9yKFNhPW4ubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8bi5meC5zdG9wKCksU2E9dm9pZCAwfSxuLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe24udGltZXJzLnB1c2goYSksYSgpP24uZnguc3RhcnQoKTpuLnRpbWVycy5wb3AoKX0sbi5meC5pbnRlcnZhbD0xMyxuLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7VGF8fChUYT1hLnNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJJbnRlcnZhbChUYSksVGE9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPW4uZng/bi5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGwuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxsLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxsLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGwucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGFiLGJiPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZT1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/YWI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIG4ucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWwucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRyk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfX0pLGFiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPWJiW2JdfHxuLmZpbmQuYXR0cjtiYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9YmJbYl0sYmJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLGJiW2JdPWYpLGV9fSk7dmFyIGNiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZGI9L14oPzphfGFyZWEpJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW24ucHJvcEZpeFthXXx8YV19KX19KSxuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPW4ucHJvcEZpeFtiXXx8YixcbmU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6Y2IudGVzdChhLm5vZGVOYW1lKXx8ZGIudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxsLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBlYj0vW1xcdFxcclxcblxcZl0vZztmdW5jdGlvbiBmYihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsZmIodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9ZmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixmYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1mYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShlYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxmYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChHKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSh2b2lkIDA9PT1hfHxcImJvb2xlYW5cIj09PWMpJiYoYj1mYih0aGlzKSxiJiZOLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6Ti5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitmYihjKStcIiBcIikucmVwbGFjZShlYixcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgZ2I9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGdiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gbi50cmltKGEudmFsdWUpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwoYy5zZWxlY3RlZHx8aT09PWUpJiYobC5vcHREaXNhYmxlZD8hYy5kaXNhYmxlZDpudWxsPT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhbi5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bihjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW4ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1uLmluQXJyYXkobi52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPi0xOnZvaWQgMH19LGwuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIGhiPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztuLmV4dGVuZChuLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGwsbSxvLHA9W2V8fGRdLHE9ay5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ay5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhaGIudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+LTEmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxsPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxvPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZnx8IW8udHJpZ2dlcnx8by50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhby5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZSkpe2ZvcihqPW8uZGVsZWdhdGVUeXBlfHxxLGhiLnRlc3QoaitxKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKXAucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZwLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1wW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpvLmJpbmRUeXBlfHxxLG09KE4uZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZOLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWwmJmhbbF0sbSYmbS5hcHBseSYmTChoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxvLl9kZWZhdWx0JiZvLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IUwoZSl8fGwmJm4uaXNGdW5jdGlvbihlW3FdKSYmIW4uaXNXaW5kb3coZSkmJihpPWVbbF0saSYmKGVbbF09bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cSxlW3FdKCksbi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2xdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtuLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpLGQuaXNEZWZhdWx0UHJldmVudGVkKCkmJmMucHJldmVudERlZmF1bHQoKX19KSxuLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfX0pLGwuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gYSxsLmZvY3VzaW58fG4uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7bi5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG4uZXZlbnQuZml4KGEpKX07bi5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU4uYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksTi5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1OLmFjY2VzcyhkLGIpLTE7ZT9OLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLE4ucmVtb3ZlKGQsYikpfX19KTt2YXIgaWI9YS5sb2NhdGlvbixqYj1uLm5vdygpLGtiPS9cXD8vO24ucGFyc2VKU09OPWZ1bmN0aW9uKGEpe3JldHVybiBKU09OLnBhcnNlKGErXCJcIil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYil7dmFyIGM7aWYoIWJ8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBudWxsO3RyeXtjPShuZXcgYS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhiLFwidGV4dC94bWxcIil9Y2F0Y2goZCl7Yz12b2lkIDB9cmV0dXJuKCFjfHxjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoKSYmbi5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgbGI9LyMuKiQvLG1iPS8oWz8mXSlfPVteJl0qLyxuYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLG9iPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLHBiPS9eKD86R0VUfEhFQUQpJC8scWI9L15cXC9cXC8vLHJiPXt9LHNiPXt9LHRiPVwiKi9cIi5jb25jYXQoXCIqXCIpLHViPWQuY3JlYXRlRWxlbWVudChcImFcIik7dWIuaHJlZj1pYi5ocmVmO2Z1bmN0aW9uIHZiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W107aWYobi5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIHdiKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PXNiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24geGIoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmbi5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIHliKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIHpiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOmliLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6b2IudGVzdChpYi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6dGIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj94Yih4YihhLG4uYWpheFNldHRpbmdzKSxiKTp4YihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjp2YihyYiksYWpheFRyYW5zcG9ydDp2YihzYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbT1uLmFqYXhTZXR1cCh7fSxjKSxvPW0uY29udGV4dHx8bSxwPW0uY29udGV4dCYmKG8ubm9kZVR5cGV8fG8uanF1ZXJ5KT9uKG8pOm4uZXZlbnQscT1uLkRlZmVycmVkKCkscj1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHM9bS5zdGF0dXNDb2RlfHx7fSx0PXt9LHU9e30sdj0wLHc9XCJjYW5jZWxlZFwiLHg9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dil7aWYoIWgpe2g9e307d2hpbGUoYj1uYi5leGVjKGcpKWhbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9aFthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT12P2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdnx8KGE9dVtjXT11W2NdfHxhLHRbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdnx8KG0ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dilmb3IoYiBpbiBhKXNbYl09W3NbYl0sYVtiXV07ZWxzZSB4LmFsd2F5cyhhW3guc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHc7cmV0dXJuIGUmJmUuYWJvcnQoYikseigwLGIpLHRoaXN9fTtpZihxLnByb21pc2UoeCkuY29tcGxldGU9ci5hZGQseC5zdWNjZXNzPXguZG9uZSx4LmVycm9yPXguZmFpbCxtLnVybD0oKGJ8fG0udXJsfHxpYi5ocmVmKStcIlwiKS5yZXBsYWNlKGxiLFwiXCIpLnJlcGxhY2UocWIsaWIucHJvdG9jb2wrXCIvL1wiKSxtLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8bS5tZXRob2R8fG0udHlwZSxtLmRhdGFUeXBlcz1uLnRyaW0obS5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtcIlwiXSxudWxsPT1tLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1tLnVybCxqLmhyZWY9ai5ocmVmLG0uY3Jvc3NEb21haW49dWIucHJvdG9jb2wrXCIvL1wiK3ViLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh5KXttLmNyb3NzRG9tYWluPSEwfX1pZihtLmRhdGEmJm0ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBtLmRhdGEmJihtLmRhdGE9bi5wYXJhbShtLmRhdGEsbS50cmFkaXRpb25hbCkpLHdiKHJiLG0sYyx4KSwyPT09dilyZXR1cm4geDtrPW4uZXZlbnQmJm0uZ2xvYmFsLGsmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksbS50eXBlPW0udHlwZS50b1VwcGVyQ2FzZSgpLG0uaGFzQ29udGVudD0hcGIudGVzdChtLnR5cGUpLGY9bS51cmwsbS5oYXNDb250ZW50fHwobS5kYXRhJiYoZj1tLnVybCs9KGtiLnRlc3QoZik/XCImXCI6XCI/XCIpK20uZGF0YSxkZWxldGUgbS5kYXRhKSxtLmNhY2hlPT09ITEmJihtLnVybD1tYi50ZXN0KGYpP2YucmVwbGFjZShtYixcIiQxXz1cIitqYisrKTpmKyhrYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIramIrKykpLG0uaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2ZdKSxuLmV0YWdbZl0mJnguc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZl0pKSwobS5kYXRhJiZtLmhhc0NvbnRlbnQmJm0uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnguc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG0uY29udGVudFR5cGUpLHguc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG0uZGF0YVR5cGVzWzBdJiZtLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dP20uYWNjZXB0c1ttLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09bS5kYXRhVHlwZXNbMF0/XCIsIFwiK3RiK1wiOyBxPTAuMDFcIjpcIlwiKTptLmFjY2VwdHNbXCIqXCJdKTtmb3IobCBpbiBtLmhlYWRlcnMpeC5zZXRSZXF1ZXN0SGVhZGVyKGwsbS5oZWFkZXJzW2xdKTtpZihtLmJlZm9yZVNlbmQmJihtLmJlZm9yZVNlbmQuY2FsbChvLHgsbSk9PT0hMXx8Mj09PXYpKXJldHVybiB4LmFib3J0KCk7dz1cImFib3J0XCI7Zm9yKGwgaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0peFtsXShtW2xdKTtpZihlPXdiKHNiLG0sYyx4KSl7aWYoeC5yZWFkeVN0YXRlPTEsayYmcC50cmlnZ2VyKFwiYWpheFNlbmRcIixbeCxtXSksMj09PXYpcmV0dXJuIHg7bS5hc3luYyYmbS50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3guYWJvcnQoXCJ0aW1lb3V0XCIpfSxtLnRpbWVvdXQpKTt0cnl7dj0xLGUuc2VuZCh0LHopfWNhdGNoKHkpe2lmKCEoMj52KSl0aHJvdyB5O3ooLTEseSl9fWVsc2UgeigtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB6KGIsYyxkLGgpe3ZhciBqLGwsdCx1LHcseT1jOzIhPT12JiYodj0yLGkmJmEuY2xlYXJUaW1lb3V0KGkpLGU9dm9pZCAwLGc9aHx8XCJcIix4LnJlYWR5U3RhdGU9Yj4wPzQ6MCxqPWI+PTIwMCYmMzAwPmJ8fDMwND09PWIsZCYmKHU9eWIobSx4LGQpKSx1PXpiKG0sdSx4LGopLGo/KG0uaWZNb2RpZmllZCYmKHc9eC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKG4ubGFzdE1vZGlmaWVkW2ZdPXcpLHc9eC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKG4uZXRhZ1tmXT13KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1tLnR5cGU/eT1cIm5vY29udGVudFwiOjMwND09PWI/eT1cIm5vdG1vZGlmaWVkXCI6KHk9dS5zdGF0ZSxsPXUuZGF0YSx0PXUuZXJyb3Isaj0hdCkpOih0PXksKGJ8fCF5KSYmKHk9XCJlcnJvclwiLDA+YiYmKGI9MCkpKSx4LnN0YXR1cz1iLHguc3RhdHVzVGV4dD0oY3x8eSkrXCJcIixqP3EucmVzb2x2ZVdpdGgobyxbbCx5LHhdKTpxLnJlamVjdFdpdGgobyxbeCx5LHRdKSx4LnN0YXR1c0NvZGUocykscz12b2lkIDAsayYmcC50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3gsbSxqP2w6dF0pLHIuZmlyZVdpdGgobyxbeCx5XSksayYmKHAudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt4LG1dKSwtLW4uYWN0aXZlfHxuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB4fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxuLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7bltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksbi5hamF4KG4uZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxuLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG4uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KToodGhpc1swXSYmKGI9bihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzKX0sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPW4odGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9bi5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe24ubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fG4odGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfX0pLG4uZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4hbi5leHByLmZpbHRlcnMudmlzaWJsZShhKX0sbi5leHByLmZpbHRlcnMudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4gYS5vZmZzZXRXaWR0aD4wfHxhLm9mZnNldEhlaWdodD4wfHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPjB9O3ZhciBBYj0vJTIwL2csQmI9L1xcW1xcXSQvLENiPS9cXHI/XFxuL2csRGI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLEViPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBGYihhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHxCYi50ZXN0KGEpP2QoYSxlKTpGYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9ZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUZiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlGYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKEFiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZFYi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhRGIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVgudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZShDYixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKENiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYil7fX07dmFyIEdiPXswOjIwMCwxMjIzOjIwNH0sSGI9bi5hamF4U2V0dGluZ3MueGhyKCk7bC5jb3JzPSEhSGImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBIYixsLmFqYXg9SGI9ISFIYixuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYil7dmFyIGMsZDtyZXR1cm4gbC5jb3JzfHxIYiYmIWIuY3Jvc3NEb21haW4/e3NlbmQ6ZnVuY3Rpb24oZSxmKXt2YXIgZyxoPWIueGhyKCk7aWYoaC5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGcgaW4gYi54aHJGaWVsZHMpaFtnXT1iLnhockZpZWxkc1tnXTtiLm1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGcgaW4gZSloLnNldFJlcXVlc3RIZWFkZXIoZyxlW2ddKTtjPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2MmJihjPWQ9aC5vbmxvYWQ9aC5vbmVycm9yPWgub25hYm9ydD1oLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWE/aC5hYm9ydCgpOlwiZXJyb3JcIj09PWE/XCJudW1iZXJcIiE9dHlwZW9mIGguc3RhdHVzP2YoMCxcImVycm9yXCIpOmYoaC5zdGF0dXMsaC5zdGF0dXNUZXh0KTpmKEdiW2guc3RhdHVzXXx8aC5zdGF0dXMsaC5zdGF0dXNUZXh0LFwidGV4dFwiIT09KGgucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBoLnJlc3BvbnNlVGV4dD97YmluYXJ5OmgucmVzcG9uc2V9Ont0ZXh0OmgucmVzcG9uc2VUZXh0fSxoLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxoLm9ubG9hZD1jKCksZD1oLm9uZXJyb3I9YyhcImVycm9yXCIpLHZvaWQgMCE9PWgub25hYm9ydD9oLm9uYWJvcnQ9ZDpoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1oLnJlYWR5U3RhdGUmJmEuc2V0VGltZW91dChmdW5jdGlvbigpe2MmJmQoKX0pfSxjPWMoXCJhYm9ydFwiKTt0cnl7aC5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKX1jYXRjaChpKXtpZihjKXRocm93IGl9fSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19OnZvaWQgMH0pLG4uYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiBuLmdsb2JhbEV2YWwoYSksYX19fSksbi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIil9KSxuLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjO3JldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7Yj1uKFwiPHNjcmlwdD5cIikucHJvcCh7Y2hhcnNldDphLnNjcmlwdENoYXJzZXQsc3JjOmEudXJsfSkub24oXCJsb2FkIGVycm9yXCIsYz1mdW5jdGlvbihhKXtiLnJlbW92ZSgpLGM9bnVsbCxhJiZmKFwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwLGEudHlwZSl9KSxkLmhlYWQuYXBwZW5kQ2hpbGQoYlswXSl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19fSk7dmFyIEliPVtdLEpiPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87bi5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9SWIucG9wKCl8fG4uZXhwYW5kbytcIl9cIitqYisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksbi5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihKYi50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJjA9PT0oYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmSmIudGVzdChiLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdPyhlPWIuanNvbnBDYWxsYmFjaz1uLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShKYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPShrYi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxuLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP24oYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssSWIucHVzaChlKSksZyYmbi5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwiKTp2b2lkIDB9KSxsLmNyZWF0ZUhUTUxEb2N1bWVudD1mdW5jdGlvbigpe3ZhciBhPWQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09YS5jaGlsZE5vZGVzLmxlbmd0aH0oKSxuLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKSxiPWJ8fChsLmNyZWF0ZUhUTUxEb2N1bWVudD9kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKTpkKTt2YXIgZT14LmV4ZWMoYSksZj0hYyYmW107cmV0dXJuIGU/W2IuY3JlYXRlRWxlbWVudChlWzFdKV06KGU9Y2EoW2FdLGIsZiksZiYmZi5sZW5ndGgmJm4oZikucmVtb3ZlKCksbi5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX07dmFyIEtiPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZLYilyZXR1cm4gS2IuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkoZyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O2Z1bmN0aW9uIExiKGEpe3JldHVybiBuLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9bi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1uLmNzcyhhLFwicG9zaXRpb25cIiksbD1uKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9bi5jc3MoYSxcInRvcFwiKSxpPW4uY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbi5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLG4uZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9dGhpc1swXSxlPXt0b3A6MCxsZWZ0OjB9LGY9ZCYmZC5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGQpPyhlPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz1MYihmKSx7dG9wOmUudG9wK2MucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDplLmxlZnQrYy5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9KTplfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09bi5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxuLm5vZGVOYW1lKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkLnRvcCs9bi5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGQubGVmdCs9bi5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDpiLnRvcC1kLnRvcC1uLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1uLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fEVhfSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7bi5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1MYihhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPUdhKGwucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPUZhKGEsYiksQmEudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9fSksbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgTWI9YS5qUXVlcnksTmI9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9TmIpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PU1iKSxufSxifHwoYS5qUXVlcnk9YS4kPW4pLG59KTtcbiIsIi8qXG4gKiAgVmlkZSAtIHYwLjUuMFxuICogIEVhc3kgYXMgaGVsbCBqUXVlcnkgcGx1Z2luIGZvciB2aWRlbyBiYWNrZ3JvdW5kcy5cbiAqICBodHRwOi8vdm9ka2FiZWFycy5naXRodWIuaW8vdmlkZS9cbiAqXG4gKiAgTWFkZSBieSBJbHlhIE1ha2Fyb3ZcbiAqICBVbmRlciBNSVQgTGljZW5zZVxuICovXG4hKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KHJvb3QualF1ZXJ5KTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oJCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgcGx1Z2luXG4gICAqIEBwcml2YXRlXG4gICAqIEBjb25zdFxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdmFyIFBMVUdJTl9OQU1FID0gJ3ZpZGUnO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHNldHRpbmdzXG4gICAqIEBwcml2YXRlXG4gICAqIEBjb25zdFxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERFRkFVTFRTID0ge1xuICAgIHZvbHVtZTogMSxcbiAgICBwbGF5YmFja1JhdGU6IDEsXG4gICAgbXV0ZWQ6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBwb3NpdGlvbjogJzUwJSA1MCUnLFxuICAgIHBvc3RlclR5cGU6ICdkZXRlY3QnLFxuICAgIHJlc2l6aW5nOiB0cnVlLFxuICAgIGJnQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgY2xhc3NOYW1lOiAnJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBOb3QgaW1wbGVtZW50ZWQgZXJyb3IgbWVzc2FnZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAY29uc3RcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHZhciBOT1RfSU1QTEVNRU5URURfTVNHID0gJ05vdCBpbXBsZW1lbnRlZCc7XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgc3RyaW5nIHdpdGggb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtPYmplY3R8U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VPcHRpb25zKHN0cikge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgZGVsaW1pdGVySW5kZXg7XG4gICAgdmFyIG9wdGlvbjtcbiAgICB2YXIgcHJvcDtcbiAgICB2YXIgdmFsO1xuICAgIHZhciBhcnI7XG4gICAgdmFyIGxlbjtcbiAgICB2YXIgaTtcblxuICAgIC8vIFJlbW92ZSBzcGFjZXMgYXJvdW5kIGRlbGltaXRlcnMgYW5kIHNwbGl0XG4gICAgYXJyID0gc3RyLnJlcGxhY2UoL1xccyo6XFxzKi9nLCAnOicpLnJlcGxhY2UoL1xccyosXFxzKi9nLCAnLCcpLnNwbGl0KCcsJyk7XG5cbiAgICAvLyBQYXJzZSBhIHN0cmluZ1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgb3B0aW9uID0gYXJyW2ldO1xuXG4gICAgICAvLyBJZ25vcmUgdXJscyBhbmQgYSBzdHJpbmcgd2l0aG91dCBjb2xvbiBkZWxpbWl0ZXJzXG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbi5zZWFyY2goL14oaHR0cHxodHRwc3xmdHApOlxcL1xcLy8pICE9PSAtMSB8fFxuICAgICAgICBvcHRpb24uc2VhcmNoKCc6JykgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlbGltaXRlckluZGV4ID0gb3B0aW9uLmluZGV4T2YoJzonKTtcbiAgICAgIHByb3AgPSBvcHRpb24uc3Vic3RyaW5nKDAsIGRlbGltaXRlckluZGV4KTtcbiAgICAgIHZhbCA9IG9wdGlvbi5zdWJzdHJpbmcoZGVsaW1pdGVySW5kZXggKyAxKTtcblxuICAgICAgLy8gSWYgdmFsIGlzIGFuIGVtcHR5IHN0cmluZywgbWFrZSBpdCB1bmRlZmluZWRcbiAgICAgIGlmICghdmFsKSB7XG4gICAgICAgIHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udmVydCBhIHN0cmluZyB2YWx1ZSBpZiBpdCBpcyBsaWtlIGEgYm9vbGVhblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbCA9IHZhbCA9PT0gJ3RydWUnIHx8ICh2YWwgPT09ICdmYWxzZScgPyBmYWxzZSA6IHZhbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdmFsdWUgaWYgaXQgaXMgbGlrZSBhIG51bWJlclxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbCA9ICFpc05hTih2YWwpID8gK3ZhbCA6IHZhbDtcbiAgICAgIH1cblxuICAgICAgb2JqW3Byb3BdID0gdmFsO1xuICAgIH1cblxuICAgIC8vIElmIG5vdGhpbmcgaXMgcGFyc2VkXG4gICAgaWYgKHByb3AgPT0gbnVsbCAmJiB2YWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgcG9zaXRpb24gb3B0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlUG9zaXRpb24oc3RyKSB7XG4gICAgc3RyID0gJycgKyBzdHI7XG5cbiAgICAvLyBEZWZhdWx0IHZhbHVlIGlzIGEgY2VudGVyXG4gICAgdmFyIGFyZ3MgPSBzdHIuc3BsaXQoL1xccysvKTtcbiAgICB2YXIgeCA9ICc1MCUnO1xuICAgIHZhciB5ID0gJzUwJSc7XG4gICAgdmFyIGxlbjtcbiAgICB2YXIgYXJnO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnID0gYXJnc1tpXTtcblxuICAgICAgLy8gQ29udmVydCB2YWx1ZXNcbiAgICAgIGlmIChhcmcgPT09ICdsZWZ0Jykge1xuICAgICAgICB4ID0gJzAlJztcbiAgICAgIH0gZWxzZSBpZiAoYXJnID09PSAncmlnaHQnKSB7XG4gICAgICAgIHggPSAnMTAwJSc7XG4gICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ3RvcCcpIHtcbiAgICAgICAgeSA9ICcwJSc7XG4gICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgeSA9ICcxMDAlJztcbiAgICAgIH0gZWxzZSBpZiAoYXJnID09PSAnY2VudGVyJykge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHggPSAnNTAlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0gJzUwJSc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgeCA9IGFyZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0gYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBhIHBvc3RlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKi9cbiAgZnVuY3Rpb24gZmluZFBvc3RlcihwYXRoLCBjYWxsYmFjaykge1xuICAgIHZhciBvbkxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNhbGxiYWNrKHRoaXMuc3JjKTtcbiAgICB9O1xuXG4gICAgJCgnPGltZyBzcmM9XCInICsgcGF0aCArICcuZ2lmXCI+JykubG9hZChvbkxvYWQpO1xuICAgICQoJzxpbWcgc3JjPVwiJyArIHBhdGggKyAnLmpwZ1wiPicpLmxvYWQob25Mb2FkKTtcbiAgICAkKCc8aW1nIHNyYz1cIicgKyBwYXRoICsgJy5qcGVnXCI+JykubG9hZChvbkxvYWQpO1xuICAgICQoJzxpbWcgc3JjPVwiJyArIHBhdGggKyAnLnBuZ1wiPicpLmxvYWQob25Mb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaWRlIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0aW9uc1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIFZpZGUoZWxlbWVudCwgcGF0aCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG4gICAgLy8gUGFyc2UgcGF0aFxuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhdGggPSBwYXJzZU9wdGlvbnMocGF0aCk7XG4gICAgfVxuXG4gICAgLy8gUGFyc2Ugb3B0aW9uc1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbiBleHRlbnNpb25cbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC5cXHcqJC8sICcnKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIgaSBpbiBwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgcGF0aFtpXSA9IHBhdGhbaV0ucmVwbGFjZSgvXFwuXFx3KiQvLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe30sIERFRkFVTFRTLCBvcHRpb25zKTtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1ZvZGthQmVhcnMvVmlkZS9pc3N1ZXMvMTEwXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm1lc3NhZ2UgIT09IE5PVF9JTVBMRU1FTlRFRF9NU0cpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb25cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgVmlkZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2aWRlID0gdGhpcztcbiAgICB2YXIgcGF0aCA9IHZpZGUucGF0aDtcbiAgICB2YXIgcG9zdGVyID0gcGF0aDtcbiAgICB2YXIgc291cmNlcyA9ICcnO1xuICAgIHZhciAkZWxlbWVudCA9IHZpZGUuJGVsZW1lbnQ7XG4gICAgdmFyIHNldHRpbmdzID0gdmlkZS5zZXR0aW5ncztcbiAgICB2YXIgcG9zaXRpb24gPSBwYXJzZVBvc2l0aW9uKHNldHRpbmdzLnBvc2l0aW9uKTtcbiAgICB2YXIgcG9zdGVyVHlwZSA9IHNldHRpbmdzLnBvc3RlclR5cGU7XG4gICAgdmFyICR2aWRlbztcbiAgICB2YXIgJHdyYXBwZXI7XG5cbiAgICAvLyBTZXQgc3R5bGVzIG9mIGEgdmlkZW8gd3JhcHBlclxuICAgICR3cmFwcGVyID0gdmlkZS4kd3JhcHBlciA9ICQoJzxkaXY+JylcbiAgICAgIC5hZGRDbGFzcyhzZXR0aW5ncy5jbGFzc05hbWUpXG4gICAgICAuY3NzKHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICd6LWluZGV4JzogLTEsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAnLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLFxuICAgICAgICAnLW1vei1iYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLFxuICAgICAgICAnLW8tYmFja2dyb3VuZC1zaXplJzogJ2NvdmVyJyxcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb3ZlcicsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogc2V0dGluZ3MuYmdDb2xvcixcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcG9zaXRpb24ueCArICcgJyArIHBvc2l0aW9uLnlcbiAgICAgIH0pO1xuXG4gICAgLy8gR2V0IGEgcG9zdGVyIHBhdGhcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocGF0aC5wb3N0ZXIpIHtcbiAgICAgICAgcG9zdGVyID0gcGF0aC5wb3N0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGF0aC5tcDQpIHtcbiAgICAgICAgICBwb3N0ZXIgPSBwYXRoLm1wNDtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoLndlYm0pIHtcbiAgICAgICAgICBwb3N0ZXIgPSBwYXRoLndlYm07XG4gICAgICAgIH0gZWxzZSBpZiAocGF0aC5vZ3YpIHtcbiAgICAgICAgICBwb3N0ZXIgPSBwYXRoLm9ndjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBhIHZpZGVvIHBvc3RlclxuICAgIGlmIChwb3N0ZXJUeXBlID09PSAnZGV0ZWN0Jykge1xuICAgICAgZmluZFBvc3Rlcihwb3N0ZXIsIGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAkd3JhcHBlci5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyB1cmwgKyAnKScpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwb3N0ZXJUeXBlICE9PSAnbm9uZScpIHtcbiAgICAgICR3cmFwcGVyLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIHBvc3RlciArICcuJyArIHBvc3RlclR5cGUgKyAnKScpO1xuICAgIH1cblxuICAgIC8vIElmIGEgcGFyZW50IGVsZW1lbnQgaGFzIGEgc3RhdGljIHBvc2l0aW9uLCBtYWtlIGl0IHJlbGF0aXZlXG4gICAgaWYgKCRlbGVtZW50LmNzcygncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICRlbGVtZW50LmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICB9XG5cbiAgICAkZWxlbWVudC5wcmVwZW5kKCR3cmFwcGVyKTtcblxuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwYXRoLm1wNCkge1xuICAgICAgICBzb3VyY2VzICs9ICc8c291cmNlIHNyYz1cIicgKyBwYXRoLm1wNCArICcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPic7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXRoLndlYm0pIHtcbiAgICAgICAgc291cmNlcyArPSAnPHNvdXJjZSBzcmM9XCInICsgcGF0aC53ZWJtICsgJy53ZWJtXCIgdHlwZT1cInZpZGVvL3dlYm1cIj4nO1xuICAgICAgfVxuXG4gICAgICBpZiAocGF0aC5vZ3YpIHtcbiAgICAgICAgc291cmNlcyArPSAnPHNvdXJjZSBzcmM9XCInICsgcGF0aC5vZ3YgKyAnLm9ndlwiIHR5cGU9XCJ2aWRlby9vZ2dcIj4nO1xuICAgICAgfVxuXG4gICAgICAkdmlkZW8gPSB2aWRlLiR2aWRlbyA9ICQoJzx2aWRlbz4nICsgc291cmNlcyArICc8L3ZpZGVvPicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkdmlkZW8gPSB2aWRlLiR2aWRlbyA9ICQoJzx2aWRlbz4nICtcbiAgICAgICAgJzxzb3VyY2Ugc3JjPVwiJyArIHBhdGggKyAnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj4nICtcbiAgICAgICAgJzxzb3VyY2Ugc3JjPVwiJyArIHBhdGggKyAnLndlYm1cIiB0eXBlPVwidmlkZW8vd2VibVwiPicgK1xuICAgICAgICAnPHNvdXJjZSBzcmM9XCInICsgcGF0aCArICcub2d2XCIgdHlwZT1cInZpZGVvL29nZ1wiPicgK1xuICAgICAgICAnPC92aWRlbz4nKTtcbiAgICB9XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vVm9ka2FCZWFycy9WaWRlL2lzc3Vlcy8xMTBcbiAgICB0cnkge1xuICAgICAgJHZpZGVvXG5cbiAgICAgICAgLy8gU2V0IHZpZGVvIHByb3BlcnRpZXNcbiAgICAgICAgLnByb3Aoe1xuICAgICAgICAgIGF1dG9wbGF5OiBzZXR0aW5ncy5hdXRvcGxheSxcbiAgICAgICAgICBsb29wOiBzZXR0aW5ncy5sb29wLFxuICAgICAgICAgIHZvbHVtZTogc2V0dGluZ3Mudm9sdW1lLFxuICAgICAgICAgIG11dGVkOiBzZXR0aW5ncy5tdXRlZCxcbiAgICAgICAgICBkZWZhdWx0TXV0ZWQ6IHNldHRpbmdzLm11dGVkLFxuICAgICAgICAgIHBsYXliYWNrUmF0ZTogc2V0dGluZ3MucGxheWJhY2tSYXRlLFxuICAgICAgICAgIGRlZmF1bHRQbGF5YmFja1JhdGU6IHNldHRpbmdzLnBsYXliYWNrUmF0ZVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTk9UX0lNUExFTUVOVEVEX01TRyk7XG4gICAgfVxuXG4gICAgLy8gVmlkZW8gYWxpZ25tZW50XG4gICAgJHZpZGVvLmNzcyh7XG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgJ3otaW5kZXgnOiAtMSxcbiAgICAgIHRvcDogcG9zaXRpb24ueSxcbiAgICAgIGxlZnQ6IHBvc2l0aW9uLngsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlKC0nICsgcG9zaXRpb24ueCArICcsIC0nICsgcG9zaXRpb24ueSArICcpJyxcbiAgICAgICctbXMtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgtJyArIHBvc2l0aW9uLnggKyAnLCAtJyArIHBvc2l0aW9uLnkgKyAnKScsXG4gICAgICAnLW1vei10cmFuc2Zvcm0nOiAndHJhbnNsYXRlKC0nICsgcG9zaXRpb24ueCArICcsIC0nICsgcG9zaXRpb24ueSArICcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtJyArIHBvc2l0aW9uLnggKyAnLCAtJyArIHBvc2l0aW9uLnkgKyAnKScsXG5cbiAgICAgIC8vIERpc2FibGUgdmlzaWJpbGl0eSwgd2hpbGUgbG9hZGluZ1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSlcblxuICAgIC8vIFJlc2l6ZSBhIHZpZGVvLCB3aGVuIGl0J3MgbG9hZGVkXG4gICAgLm9uZSgnY2FucGxheXRocm91Z2guJyArIFBMVUdJTl9OQU1FLCBmdW5jdGlvbigpIHtcbiAgICAgIHZpZGUucmVzaXplKCk7XG4gICAgfSlcblxuICAgIC8vIE1ha2UgaXQgdmlzaWJsZSwgd2hlbiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgIC5vbmUoJ3BsYXlpbmcuJyArIFBMVUdJTl9OQU1FLCBmdW5jdGlvbigpIHtcbiAgICAgICR2aWRlby5jc3Moe1xuICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pO1xuICAgICAgJHdyYXBwZXIuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ25vbmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFJlc2l6ZSBldmVudCBpcyBhdmFpbGFibGUgb25seSBmb3IgJ3dpbmRvdydcbiAgICAvLyBVc2UgYW5vdGhlciBjb2RlIHNvbHV0aW9ucyB0byBkZXRlY3QgRE9NIGVsZW1lbnRzIHJlc2l6aW5nXG4gICAgJGVsZW1lbnQub24oJ3Jlc2l6ZS4nICsgUExVR0lOX05BTUUsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNldHRpbmdzLnJlc2l6aW5nKSB7XG4gICAgICAgIHZpZGUucmVzaXplKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgYSB2aWRlb1xuICAgICR3cmFwcGVyLmFwcGVuZCgkdmlkZW8pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSB2aWRlbyBlbGVtZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMge0hUTUxWaWRlb0VsZW1lbnR9XG4gICAqL1xuICBWaWRlLnByb3RvdHlwZS5nZXRWaWRlb09iamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiR2aWRlb1swXTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzaXplIGEgdmlkZW8gYmFja2dyb3VuZFxuICAgKiBAcHVibGljXG4gICAqL1xuICBWaWRlLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuJHZpZGVvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICR3cmFwcGVyID0gdGhpcy4kd3JhcHBlcjtcbiAgICB2YXIgJHZpZGVvID0gdGhpcy4kdmlkZW87XG4gICAgdmFyIHZpZGVvID0gJHZpZGVvWzBdO1xuXG4gICAgLy8gR2V0IGEgbmF0aXZlIHZpZGVvIHNpemVcbiAgICB2YXIgdmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICB2YXIgdmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG5cbiAgICAvLyBHZXQgYSB3cmFwcGVyIHNpemVcbiAgICB2YXIgd3JhcHBlckhlaWdodCA9ICR3cmFwcGVyLmhlaWdodCgpO1xuICAgIHZhciB3cmFwcGVyV2lkdGggPSAkd3JhcHBlci53aWR0aCgpO1xuXG4gICAgaWYgKHdyYXBwZXJXaWR0aCAvIHZpZGVvV2lkdGggPiB3cmFwcGVySGVpZ2h0IC8gdmlkZW9IZWlnaHQpIHtcbiAgICAgICR2aWRlby5jc3Moe1xuXG4gICAgICAgIC8vICsyIHBpeGVscyB0byBwcmV2ZW50IGFuIGVtcHR5IHNwYWNlIGFmdGVyIHRyYW5zZm9ybWF0aW9uXG4gICAgICAgIHdpZHRoOiB3cmFwcGVyV2lkdGggKyAyLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR2aWRlby5jc3Moe1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuXG4gICAgICAgIC8vICsyIHBpeGVscyB0byBwcmV2ZW50IGFuIGVtcHR5IHNwYWNlIGFmdGVyIHRyYW5zZm9ybWF0aW9uXG4gICAgICAgIGhlaWdodDogd3JhcHBlckhlaWdodCArIDJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveSBhIHZpZGVvIGJhY2tncm91bmRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgVmlkZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSAkW1BMVUdJTl9OQU1FXS5sb29rdXBbdGhpcy5pbmRleF07XG4gICAgdGhpcy4kdmlkZW8gJiYgdGhpcy4kdmlkZW8ub2ZmKFBMVUdJTl9OQU1FKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZihQTFVHSU5fTkFNRSkucmVtb3ZlRGF0YShQTFVHSU5fTkFNRSk7XG4gICAgdGhpcy4kd3JhcHBlci5yZW1vdmUoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3BlY2lhbCBwbHVnaW4gb2JqZWN0IGZvciBpbnN0YW5jZXMuXG4gICAqIEBwdWJsaWNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gICRbUExVR0lOX05BTUVdID0ge1xuICAgIGxvb2t1cDogW11cbiAgfTtcblxuICAvKipcbiAgICogUGx1Z2luIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdGlvbnNcbiAgICogQHJldHVybnMge0pRdWVyeX1cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICAkLmZuW1BMVUdJTl9OQU1FXSA9IGZ1bmN0aW9uKHBhdGgsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW5zdGFuY2U7XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBpbnN0YW5jZSA9ICQuZGF0YSh0aGlzLCBQTFVHSU5fTkFNRSk7XG5cbiAgICAgIC8vIERlc3Ryb3kgdGhlIHBsdWdpbiBpbnN0YW5jZSBpZiBleGlzdHNcbiAgICAgIGluc3RhbmNlICYmIGluc3RhbmNlLmRlc3Ryb3koKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBwbHVnaW4gaW5zdGFuY2VcbiAgICAgIGluc3RhbmNlID0gbmV3IFZpZGUodGhpcywgcGF0aCwgb3B0aW9ucyk7XG4gICAgICBpbnN0YW5jZS5pbmRleCA9ICRbUExVR0lOX05BTUVdLmxvb2t1cC5wdXNoKGluc3RhbmNlKSAtIDE7XG4gICAgICAkLmRhdGEodGhpcywgUExVR0lOX05BTUUsIGluc3RhbmNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xuXG4gICAgLy8gV2luZG93IHJlc2l6ZSBldmVudCBsaXN0ZW5lclxuICAgICR3aW5kb3cub24oJ3Jlc2l6ZS4nICsgUExVR0lOX05BTUUsIGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgbGVuID0gJFtQTFVHSU5fTkFNRV0ubG9va3VwLmxlbmd0aCwgaSA9IDAsIGluc3RhbmNlOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaW5zdGFuY2UgPSAkW1BMVUdJTl9OQU1FXS5sb29rdXBbaV07XG5cbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLnNldHRpbmdzLnJlc2l6aW5nKSB7XG4gICAgICAgICAgaW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Wb2RrYUJlYXJzL1ZpZGUvaXNzdWVzLzY4XG4gICAgJHdpbmRvdy5vbigndW5sb2FkLicgKyBQTFVHSU5fTkFNRSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBBdXRvIGluaXRpYWxpemF0aW9uXG4gICAgLy8gQWRkICdkYXRhLXZpZGUtYmcnIGF0dHJpYnV0ZSB3aXRoIGEgcGF0aCB0byB0aGUgdmlkZW8gd2l0aG91dCBleHRlbnNpb25cbiAgICAvLyBBbHNvIHlvdSBjYW4gcGFzcyBvcHRpb25zIHRocm93IHRoZSAnZGF0YS12aWRlLW9wdGlvbnMnIGF0dHJpYnV0ZVxuICAgIC8vICdkYXRhLXZpZGUtb3B0aW9ucycgbXVzdCBiZSBsaWtlICdtdXRlZDogZmFsc2UsIHZvbHVtZTogMC41J1xuICAgICQoZG9jdW1lbnQpLmZpbmQoJ1tkYXRhLScgKyBQTFVHSU5fTkFNRSArICctYmddJykuZWFjaChmdW5jdGlvbihpLCBlbGVtZW50KSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgdmFyIG9wdGlvbnMgPSAkZWxlbWVudC5kYXRhKFBMVUdJTl9OQU1FICsgJy1vcHRpb25zJyk7XG4gICAgICB2YXIgcGF0aCA9ICRlbGVtZW50LmRhdGEoUExVR0lOX05BTUUgKyAnLWJnJyk7XG5cbiAgICAgICRlbGVtZW50W1BMVUdJTl9OQU1FXShwYXRoLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfSk7XG5cbn0pO1xuIiwiIWZ1bmN0aW9uKCQpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBGT1VOREFUSU9OX1ZFUlNJT04gPSAnNi4yLjAnO1xuXG4vLyBHbG9iYWwgRm91bmRhdGlvbiBvYmplY3Rcbi8vIFRoaXMgaXMgYXR0YWNoZWQgdG8gdGhlIHdpbmRvdywgb3IgdXNlZCBhcyBhIG1vZHVsZSBmb3IgQU1EL0Jyb3dzZXJpZnlcbnZhciBGb3VuZGF0aW9uID0ge1xuICB2ZXJzaW9uOiBGT1VOREFUSU9OX1ZFUlNJT04sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBpbml0aWFsaXplZCBwbHVnaW5zLlxuICAgKi9cbiAgX3BsdWdpbnM6IHt9LFxuXG4gIC8qKlxuICAgKiBTdG9yZXMgZ2VuZXJhdGVkIHVuaXF1ZSBpZHMgZm9yIHBsdWdpbiBpbnN0YW5jZXNcbiAgICovXG4gIF91dWlkczogW10sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBib29sZWFuIGZvciBSVEwgc3VwcG9ydFxuICAgKi9cbiAgcnRsOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAkKCdodG1sJykuYXR0cignZGlyJykgPT09ICdydGwnO1xuICB9LFxuICAvKipcbiAgICogRGVmaW5lcyBhIEZvdW5kYXRpb24gcGx1Z2luLCBhZGRpbmcgaXQgdG8gdGhlIGBGb3VuZGF0aW9uYCBuYW1lc3BhY2UgYW5kIHRoZSBsaXN0IG9mIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZSB3aGVuIHJlZmxvd2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgcGx1Z2luLlxuICAgKi9cbiAgcGx1Z2luOiBmdW5jdGlvbihwbHVnaW4sIG5hbWUpIHtcbiAgICAvLyBPYmplY3Qga2V5IHRvIHVzZSB3aGVuIGFkZGluZyB0byBnbG9iYWwgRm91bmRhdGlvbiBvYmplY3RcbiAgICAvLyBFeGFtcGxlczogRm91bmRhdGlvbi5SZXZlYWwsIEZvdW5kYXRpb24uT2ZmQ2FudmFzXG4gICAgdmFyIGNsYXNzTmFtZSA9IChuYW1lIHx8IGZ1bmN0aW9uTmFtZShwbHVnaW4pKTtcbiAgICAvLyBPYmplY3Qga2V5IHRvIHVzZSB3aGVuIHN0b3JpbmcgdGhlIHBsdWdpbiwgYWxzbyB1c2VkIHRvIGNyZWF0ZSB0aGUgaWRlbnRpZnlpbmcgZGF0YSBhdHRyaWJ1dGUgZm9yIHRoZSBwbHVnaW5cbiAgICAvLyBFeGFtcGxlczogZGF0YS1yZXZlYWwsIGRhdGEtb2ZmLWNhbnZhc1xuICAgIHZhciBhdHRyTmFtZSAgPSBoeXBoZW5hdGUoY2xhc3NOYW1lKTtcblxuICAgIC8vIEFkZCB0byB0aGUgRm91bmRhdGlvbiBvYmplY3QgYW5kIHRoZSBwbHVnaW5zIGxpc3QgKGZvciByZWZsb3dpbmcpXG4gICAgdGhpcy5fcGx1Z2luc1thdHRyTmFtZV0gPSB0aGlzW2NsYXNzTmFtZV0gPSBwbHVnaW47XG4gIH0sXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogUG9wdWxhdGVzIHRoZSBfdXVpZHMgYXJyYXkgd2l0aCBwb2ludGVycyB0byBlYWNoIGluZGl2aWR1YWwgcGx1Z2luIGluc3RhbmNlLlxuICAgKiBBZGRzIHRoZSBgemZQbHVnaW5gIGRhdGEtYXR0cmlidXRlIHRvIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlZCBwbHVnaW5zIHRvIGFsbG93IHVzZSBvZiAkKHNlbGVjdG9yKS5mb3VuZGF0aW9uKG1ldGhvZCkgY2FsbHMuXG4gICAqIEFsc28gZmlyZXMgdGhlIGluaXRpYWxpemF0aW9uIGV2ZW50IGZvciBlYWNoIHBsdWdpbiwgY29uc29saWRhdGluZyByZXBlZGl0aXZlIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBhbiBpbnN0YW5jZSBvZiBhIHBsdWdpbiwgdXN1YWxseSBgdGhpc2AgaW4gY29udGV4dC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgcGx1Z2luLCBwYXNzZWQgYXMgYSBjYW1lbENhc2VkIHN0cmluZy5cbiAgICogQGZpcmVzIFBsdWdpbiNpbml0XG4gICAqL1xuICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24ocGx1Z2luLCBuYW1lKXtcbiAgICB2YXIgcGx1Z2luTmFtZSA9IG5hbWUgPyBoeXBoZW5hdGUobmFtZSkgOiBmdW5jdGlvbk5hbWUocGx1Z2luLmNvbnN0cnVjdG9yKS50b0xvd2VyQ2FzZSgpO1xuICAgIHBsdWdpbi51dWlkID0gdGhpcy5HZXRZb0RpZ2l0cyg2LCBwbHVnaW5OYW1lKTtcblxuICAgIGlmKCFwbHVnaW4uJGVsZW1lbnQuYXR0cihgZGF0YS0ke3BsdWdpbk5hbWV9YCkpeyBwbHVnaW4uJGVsZW1lbnQuYXR0cihgZGF0YS0ke3BsdWdpbk5hbWV9YCwgcGx1Z2luLnV1aWQpOyB9XG4gICAgaWYoIXBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicpKXsgcGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJywgcGx1Z2luKTsgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgaW5pdGlhbGl6ZWQuXG4gICAgICAgICAgICogQGV2ZW50IFBsdWdpbiNpbml0XG4gICAgICAgICAgICovXG4gICAgcGx1Z2luLiRlbGVtZW50LnRyaWdnZXIoYGluaXQuemYuJHtwbHVnaW5OYW1lfWApO1xuXG4gICAgdGhpcy5fdXVpZHMucHVzaChwbHVnaW4udXVpZCk7XG5cbiAgICByZXR1cm47XG4gIH0sXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogUmVtb3ZlcyB0aGUgcGx1Z2lucyB1dWlkIGZyb20gdGhlIF91dWlkcyBhcnJheS5cbiAgICogUmVtb3ZlcyB0aGUgemZQbHVnaW4gZGF0YSBhdHRyaWJ1dGUsIGFzIHdlbGwgYXMgdGhlIGRhdGEtcGx1Z2luLW5hbWUgYXR0cmlidXRlLlxuICAgKiBBbHNvIGZpcmVzIHRoZSBkZXN0cm95ZWQgZXZlbnQgZm9yIHRoZSBwbHVnaW4sIGNvbnNvbGlkYXRpbmcgcmVwZWRpdGl2ZSBjb2RlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luIC0gYW4gaW5zdGFuY2Ugb2YgYSBwbHVnaW4sIHVzdWFsbHkgYHRoaXNgIGluIGNvbnRleHQuXG4gICAqIEBmaXJlcyBQbHVnaW4jZGVzdHJveWVkXG4gICAqL1xuICB1bnJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbihwbHVnaW4pe1xuICAgIHZhciBwbHVnaW5OYW1lID0gaHlwaGVuYXRlKGZ1bmN0aW9uTmFtZShwbHVnaW4uJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nKS5jb25zdHJ1Y3RvcikpO1xuXG4gICAgdGhpcy5fdXVpZHMuc3BsaWNlKHRoaXMuX3V1aWRzLmluZGV4T2YocGx1Z2luLnV1aWQpLCAxKTtcbiAgICBwbHVnaW4uJGVsZW1lbnQucmVtb3ZlQXR0cihgZGF0YS0ke3BsdWdpbk5hbWV9YCkucmVtb3ZlRGF0YSgnemZQbHVnaW4nKVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gICAgICAgICAgICogQGV2ZW50IFBsdWdpbiNkZXN0cm95ZWRcbiAgICAgICAgICAgKi9cbiAgICAgICAgICAudHJpZ2dlcihgZGVzdHJveWVkLnpmLiR7cGx1Z2luTmFtZX1gKTtcbiAgICBmb3IodmFyIHByb3AgaW4gcGx1Z2luKXtcbiAgICAgIHBsdWdpbltwcm9wXSA9IG51bGw7Ly9jbGVhbiB1cCBzY3JpcHQgdG8gcHJlcCBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICAgIH1cbiAgICByZXR1cm47XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBDYXVzZXMgb25lIG9yIG1vcmUgYWN0aXZlIHBsdWdpbnMgdG8gcmUtaW5pdGlhbGl6ZSwgcmVzZXR0aW5nIGV2ZW50IGxpc3RlbmVycywgcmVjYWxjdWxhdGluZyBwb3NpdGlvbnMsIGV0Yy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBsdWdpbnMgLSBvcHRpb25hbCBzdHJpbmcgb2YgYW4gaW5kaXZpZHVhbCBwbHVnaW4ga2V5LCBhdHRhaW5lZCBieSBjYWxsaW5nIGAkKGVsZW1lbnQpLmRhdGEoJ3BsdWdpbk5hbWUnKWAsIG9yIHN0cmluZyBvZiBhIHBsdWdpbiBjbGFzcyBpLmUuIGAnZHJvcGRvd24nYFxuICAgKiBAZGVmYXVsdCBJZiBubyBhcmd1bWVudCBpcyBwYXNzZWQsIHJlZmxvdyBhbGwgY3VycmVudGx5IGFjdGl2ZSBwbHVnaW5zLlxuICAgKi9cbiAgIHJlSW5pdDogZnVuY3Rpb24ocGx1Z2lucyl7XG4gICAgIHZhciBpc0pRID0gcGx1Z2lucyBpbnN0YW5jZW9mICQ7XG4gICAgIHRyeXtcbiAgICAgICBpZihpc0pRKXtcbiAgICAgICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ3pmUGx1Z2luJykuX2luaXQoKTtcbiAgICAgICAgIH0pO1xuICAgICAgIH1lbHNle1xuICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgcGx1Z2lucyxcbiAgICAgICAgIF90aGlzID0gdGhpcyxcbiAgICAgICAgIGZucyA9IHtcbiAgICAgICAgICAgJ29iamVjdCc6IGZ1bmN0aW9uKHBsZ3Mpe1xuICAgICAgICAgICAgIHBsZ3MuZm9yRWFjaChmdW5jdGlvbihwKXtcbiAgICAgICAgICAgICAgIHAgPSBoeXBoZW5hdGUocCk7XG4gICAgICAgICAgICAgICAkKCdbZGF0YS0nKyBwICsnXScpLmZvdW5kYXRpb24oJ19pbml0Jyk7XG4gICAgICAgICAgICAgfSk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgICdzdHJpbmcnOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHBsdWdpbnMgPSBoeXBoZW5hdGUocGx1Z2lucyk7XG4gICAgICAgICAgICAgJCgnW2RhdGEtJysgcGx1Z2lucyArJ10nKS5mb3VuZGF0aW9uKCdfaW5pdCcpO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICAndW5kZWZpbmVkJzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICB0aGlzWydvYmplY3QnXShPYmplY3Qua2V5cyhfdGhpcy5fcGx1Z2lucykpO1xuICAgICAgICAgICB9XG4gICAgICAgICB9O1xuICAgICAgICAgZm5zW3R5cGVdKHBsdWdpbnMpO1xuICAgICAgIH1cbiAgICAgfWNhdGNoKGVycil7XG4gICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICB9ZmluYWxseXtcbiAgICAgICByZXR1cm4gcGx1Z2lucztcbiAgICAgfVxuICAgfSxcblxuICAvKipcbiAgICogcmV0dXJucyBhIHJhbmRvbSBiYXNlLTM2IHVpZCB3aXRoIG5hbWVzcGFjaW5nXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gbnVtYmVyIG9mIHJhbmRvbSBiYXNlLTM2IGRpZ2l0cyBkZXNpcmVkLiBJbmNyZWFzZSBmb3IgbW9yZSByYW5kb20gc3RyaW5ncy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIG5hbWUgb2YgcGx1Z2luIHRvIGJlIGluY29ycG9yYXRlZCBpbiB1aWQsIG9wdGlvbmFsLlxuICAgKiBAZGVmYXVsdCB7U3RyaW5nfSAnJyAtIGlmIG5vIHBsdWdpbiBuYW1lIGlzIHByb3ZpZGVkLCBub3RoaW5nIGlzIGFwcGVuZGVkIHRvIHRoZSB1aWQuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gdW5pcXVlIGlkXG4gICAqL1xuICBHZXRZb0RpZ2l0czogZnVuY3Rpb24obGVuZ3RoLCBuYW1lc3BhY2Upe1xuICAgIGxlbmd0aCA9IGxlbmd0aCB8fCA2O1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChNYXRoLnBvdygzNiwgbGVuZ3RoICsgMSkgLSBNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMzYsIGxlbmd0aCkpKS50b1N0cmluZygzNikuc2xpY2UoMSkgKyAobmFtZXNwYWNlID8gYC0ke25hbWVzcGFjZX1gIDogJycpO1xuICB9LFxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBwbHVnaW5zIG9uIGFueSBlbGVtZW50cyB3aXRoaW4gYGVsZW1gIChhbmQgYGVsZW1gIGl0c2VsZikgdGhhdCBhcmVuJ3QgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBqUXVlcnkgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGVsZW1lbnQgdG8gY2hlY2sgaW5zaWRlLiBBbHNvIGNoZWNrcyB0aGUgZWxlbWVudCBpdHNlbGYsIHVubGVzcyBpdCdzIHRoZSBgZG9jdW1lbnRgIG9iamVjdC5cbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHBsdWdpbnMgLSBBIGxpc3Qgb2YgcGx1Z2lucyB0byBpbml0aWFsaXplLiBMZWF2ZSB0aGlzIG91dCB0byBpbml0aWFsaXplIGV2ZXJ5dGhpbmcuXG4gICAqL1xuICByZWZsb3c6IGZ1bmN0aW9uKGVsZW0sIHBsdWdpbnMpIHtcblxuICAgIC8vIElmIHBsdWdpbnMgaXMgdW5kZWZpbmVkLCBqdXN0IGdyYWIgZXZlcnl0aGluZ1xuICAgIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBsdWdpbnMgPSBPYmplY3Qua2V5cyh0aGlzLl9wbHVnaW5zKTtcbiAgICB9XG4gICAgLy8gSWYgcGx1Z2lucyBpcyBhIHN0cmluZywgY29udmVydCBpdCB0byBhbiBhcnJheSB3aXRoIG9uZSBpdGVtXG4gICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwbHVnaW5zID0gW3BsdWdpbnNdO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWFjaCBwbHVnaW5cbiAgICAkLmVhY2gocGx1Z2lucywgZnVuY3Rpb24oaSwgbmFtZSkge1xuICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHBsdWdpblxuICAgICAgdmFyIHBsdWdpbiA9IF90aGlzLl9wbHVnaW5zW25hbWVdO1xuXG4gICAgICAvLyBMb2NhbGl6ZSB0aGUgc2VhcmNoIHRvIGFsbCBlbGVtZW50cyBpbnNpZGUgZWxlbSwgYXMgd2VsbCBhcyBlbGVtIGl0c2VsZiwgdW5sZXNzIGVsZW0gPT09IGRvY3VtZW50XG4gICAgICB2YXIgJGVsZW0gPSAkKGVsZW0pLmZpbmQoJ1tkYXRhLScrbmFtZSsnXScpLmFkZEJhY2soJ1tkYXRhLScrbmFtZSsnXScpO1xuXG4gICAgICAvLyBGb3IgZWFjaCBwbHVnaW4gZm91bmQsIGluaXRpYWxpemUgaXRcbiAgICAgICRlbGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkZWwgPSAkKHRoaXMpLFxuICAgICAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgICAvLyBEb24ndCBkb3VibGUtZGlwIG9uIHBsdWdpbnNcbiAgICAgICAgaWYgKCRlbC5kYXRhKCd6ZlBsdWdpbicpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiVHJpZWQgdG8gaW5pdGlhbGl6ZSBcIituYW1lK1wiIG9uIGFuIGVsZW1lbnQgdGhhdCBhbHJlYWR5IGhhcyBhIEZvdW5kYXRpb24gcGx1Z2luLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZigkZWwuYXR0cignZGF0YS1vcHRpb25zJykpe1xuICAgICAgICAgIHZhciB0aGluZyA9ICRlbC5hdHRyKCdkYXRhLW9wdGlvbnMnKS5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24oZSwgaSl7XG4gICAgICAgICAgICB2YXIgb3B0ID0gZS5zcGxpdCgnOicpLm1hcChmdW5jdGlvbihlbCl7IHJldHVybiBlbC50cmltKCk7IH0pO1xuICAgICAgICAgICAgaWYob3B0WzBdKSBvcHRzW29wdFswXV0gPSBwYXJzZVZhbHVlKG9wdFsxXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5e1xuICAgICAgICAgICRlbC5kYXRhKCd6ZlBsdWdpbicsIG5ldyBwbHVnaW4oJCh0aGlzKSwgb3B0cykpO1xuICAgICAgICB9Y2F0Y2goZXIpe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXIpO1xuICAgICAgICB9ZmluYWxseXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRGbk5hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgdHJhbnNpdGlvbmVuZDogZnVuY3Rpb24oJGVsZW0pe1xuICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdPVHJhbnNpdGlvbic6ICdvdHJhbnNpdGlvbmVuZCdcbiAgICB9O1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIGVuZDtcblxuICAgIGZvciAodmFyIHQgaW4gdHJhbnNpdGlvbnMpe1xuICAgICAgaWYgKHR5cGVvZiBlbGVtLnN0eWxlW3RdICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGVuZCA9IHRyYW5zaXRpb25zW3RdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihlbmQpe1xuICAgICAgcmV0dXJuIGVuZDtcbiAgICB9ZWxzZXtcbiAgICAgIGVuZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgJGVsZW0udHJpZ2dlckhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCBbJGVsZW1dKTtcbiAgICAgIH0sIDEpO1xuICAgICAgcmV0dXJuICd0cmFuc2l0aW9uZW5kJztcbiAgICB9XG4gIH1cbn07XG5cbkZvdW5kYXRpb24udXRpbCA9IHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGZvciBhcHBseWluZyBhIGRlYm91bmNlIGVmZmVjdCB0byBhIGZ1bmN0aW9uIGNhbGwuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIC0gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIGF0IGVuZCBvZiB0aW1lb3V0LlxuICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgLSBUaW1lIGluIG1zIHRvIGRlbGF5IHRoZSBjYWxsIG9mIGBmdW5jYC5cbiAgICogQHJldHVybnMgZnVuY3Rpb25cbiAgICovXG4gIHRocm90dGxlOiBmdW5jdGlvbiAoZnVuYywgZGVsYXkpIHtcbiAgICB2YXIgdGltZXIgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG4vLyBUT0RPOiBjb25zaWRlciBub3QgbWFraW5nIHRoaXMgYSBqUXVlcnkgZnVuY3Rpb25cbi8vIFRPRE86IG5lZWQgd2F5IHRvIHJlZmxvdyB2cy4gcmUtaW5pdGlhbGl6ZVxuLyoqXG4gKiBUaGUgRm91bmRhdGlvbiBqUXVlcnkgbWV0aG9kLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG1ldGhvZCAtIEFuIGFjdGlvbiB0byBwZXJmb3JtIG9uIHRoZSBjdXJyZW50IGpRdWVyeSBvYmplY3QuXG4gKi9cbnZhciBmb3VuZGF0aW9uID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIG1ldGhvZCxcbiAgICAgICRtZXRhID0gJCgnbWV0YS5mb3VuZGF0aW9uLW1xJyksXG4gICAgICAkbm9KUyA9ICQoJy5uby1qcycpO1xuXG4gIGlmKCEkbWV0YS5sZW5ndGgpe1xuICAgICQoJzxtZXRhIGNsYXNzPVwiZm91bmRhdGlvbi1tcVwiPicpLmFwcGVuZFRvKGRvY3VtZW50LmhlYWQpO1xuICB9XG4gIGlmKCRub0pTLmxlbmd0aCl7XG4gICAgJG5vSlMucmVtb3ZlQ2xhc3MoJ25vLWpzJyk7XG4gIH1cblxuICBpZih0eXBlID09PSAndW5kZWZpbmVkJyl7Ly9uZWVkcyB0byBpbml0aWFsaXplIHRoZSBGb3VuZGF0aW9uIG9iamVjdCwgb3IgYW4gaW5kaXZpZHVhbCBwbHVnaW4uXG4gICAgRm91bmRhdGlvbi5NZWRpYVF1ZXJ5Ll9pbml0KCk7XG4gICAgRm91bmRhdGlvbi5yZWZsb3codGhpcyk7XG4gIH1lbHNlIGlmKHR5cGUgPT09ICdzdHJpbmcnKXsvL2FuIGluZGl2aWR1YWwgbWV0aG9kIHRvIGludm9rZSBvbiBhIHBsdWdpbiBvciBncm91cCBvZiBwbHVnaW5zXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpOy8vY29sbGVjdCBhbGwgdGhlIGFyZ3VtZW50cywgaWYgbmVjZXNzYXJ5XG4gICAgdmFyIHBsdWdDbGFzcyA9IHRoaXMuZGF0YSgnemZQbHVnaW4nKTsvL2RldGVybWluZSB0aGUgY2xhc3Mgb2YgcGx1Z2luXG5cbiAgICBpZihwbHVnQ2xhc3MgIT09IHVuZGVmaW5lZCAmJiBwbHVnQ2xhc3NbbWV0aG9kXSAhPT0gdW5kZWZpbmVkKXsvL21ha2Ugc3VyZSBib3RoIHRoZSBjbGFzcyBhbmQgbWV0aG9kIGV4aXN0XG4gICAgICBpZih0aGlzLmxlbmd0aCA9PT0gMSl7Ly9pZiB0aGVyZSdzIG9ubHkgb25lLCBjYWxsIGl0IGRpcmVjdGx5LlxuICAgICAgICAgIHBsdWdDbGFzc1ttZXRob2RdLmFwcGx5KHBsdWdDbGFzcywgYXJncyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGksIGVsKXsvL290aGVyd2lzZSBsb29wIHRocm91Z2ggdGhlIGpRdWVyeSBjb2xsZWN0aW9uIGFuZCBpbnZva2UgdGhlIG1ldGhvZCBvbiBlYWNoXG4gICAgICAgICAgcGx1Z0NsYXNzW21ldGhvZF0uYXBwbHkoJChlbCkuZGF0YSgnemZQbHVnaW4nKSwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1lbHNley8vZXJyb3IgZm9yIG5vIGNsYXNzIG9yIG5vIG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiV2UncmUgc29ycnksICdcIiArIG1ldGhvZCArIFwiJyBpcyBub3QgYW4gYXZhaWxhYmxlIG1ldGhvZCBmb3IgXCIgKyAocGx1Z0NsYXNzID8gZnVuY3Rpb25OYW1lKHBsdWdDbGFzcykgOiAndGhpcyBlbGVtZW50JykgKyAnLicpO1xuICAgIH1cbiAgfWVsc2V7Ly9lcnJvciBmb3IgaW52YWxpZCBhcmd1bWVudCB0eXBlXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgV2UncmUgc29ycnksICR7dHlwZX0gaXMgbm90IGEgdmFsaWQgcGFyYW1ldGVyLiBZb3UgbXVzdCB1c2UgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZXRob2QgeW91IHdpc2ggdG8gaW52b2tlLmApO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxud2luZG93LkZvdW5kYXRpb24gPSBGb3VuZGF0aW9uO1xuJC5mbi5mb3VuZGF0aW9uID0gZm91bmRhdGlvbjtcblxuLy8gUG9seWZpbGwgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuKGZ1bmN0aW9uKCkge1xuICBpZiAoIURhdGUubm93IHx8ICF3aW5kb3cuRGF0ZS5ub3cpXG4gICAgd2luZG93LkRhdGUubm93ID0gRGF0ZS5ub3cgPSBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuXG4gIHZhciB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xuICAgICAgdmFyIHZwID0gdmVuZG9yc1tpXTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnArJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKHdpbmRvd1t2cCsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93W3ZwKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSk7XG4gIH1cbiAgaWYgKC9pUChhZHxob25lfG9kKS4qT1MgNi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICB8fCAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWUgLSBub3cpO1xuICAgIH07XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICB9XG4gIC8qKlxuICAgKiBQb2x5ZmlsbCBmb3IgcGVyZm9ybWFuY2Uubm93LCByZXF1aXJlZCBieSByQUZcbiAgICovXG4gIGlmKCF3aW5kb3cucGVyZm9ybWFuY2UgfHwgIXdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpe1xuICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHtcbiAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgbm93OiBmdW5jdGlvbigpeyByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQ7IH1cbiAgICB9O1xuICB9XG59KSgpO1xuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKG9UaGlzKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBjbG9zZXN0IHRoaW5nIHBvc3NpYmxlIHRvIHRoZSBFQ01BU2NyaXB0IDVcbiAgICAgIC8vIGludGVybmFsIElzQ2FsbGFibGUgZnVuY3Rpb25cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIC0gd2hhdCBpcyB0cnlpbmcgdG8gYmUgYm91bmQgaXMgbm90IGNhbGxhYmxlJyk7XG4gICAgfVxuXG4gICAgdmFyIGFBcmdzICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICBmVG9CaW5kID0gdGhpcyxcbiAgICAgICAgZk5PUCAgICA9IGZ1bmN0aW9uKCkge30sXG4gICAgICAgIGZCb3VuZCAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZlRvQmluZC5hcHBseSh0aGlzIGluc3RhbmNlb2YgZk5PUFxuICAgICAgICAgICAgICAgICA/IHRoaXNcbiAgICAgICAgICAgICAgICAgOiBvVGhpcyxcbiAgICAgICAgICAgICAgICAgYUFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcblxuICAgIGlmICh0aGlzLnByb3RvdHlwZSkge1xuICAgICAgLy8gbmF0aXZlIGZ1bmN0aW9ucyBkb24ndCBoYXZlIGEgcHJvdG90eXBlXG4gICAgICBmTk9QLnByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuICAgIH1cbiAgICBmQm91bmQucHJvdG90eXBlID0gbmV3IGZOT1AoKTtcblxuICAgIHJldHVybiBmQm91bmQ7XG4gIH07XG59XG4vLyBQb2x5ZmlsbCB0byBnZXQgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiBpbiBJRTlcbmZ1bmN0aW9uIGZ1bmN0aW9uTmFtZShmbikge1xuICBpZiAoRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygoZm4pLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXS50cmltKCkgOiBcIlwiO1xuICB9XG4gIGVsc2UgaWYgKGZuLnByb3RvdHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZuLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlKHN0cil7XG4gIGlmKC90cnVlLy50ZXN0KHN0cikpIHJldHVybiB0cnVlO1xuICBlbHNlIGlmKC9mYWxzZS8udGVzdChzdHIpKSByZXR1cm4gZmFsc2U7XG4gIGVsc2UgaWYoIWlzTmFOKHN0ciAqIDEpKSByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICByZXR1cm4gc3RyO1xufVxuLy8gQ29udmVydCBQYXNjYWxDYXNlIHRvIGtlYmFiLWNhc2Vcbi8vIFRoYW5rIHlvdTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODk1NTU4MFxuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5cbn0oalF1ZXJ5KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuIWZ1bmN0aW9uKCQpIHtcblxuRm91bmRhdGlvbi5Cb3ggPSB7XG4gIEltTm90VG91Y2hpbmdZb3U6IEltTm90VG91Y2hpbmdZb3UsXG4gIEdldERpbWVuc2lvbnM6IEdldERpbWVuc2lvbnMsXG4gIEdldE9mZnNldHM6IEdldE9mZnNldHNcbn1cblxuLyoqXG4gKiBDb21wYXJlcyB0aGUgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50IHRvIGEgY29udGFpbmVyIGFuZCBkZXRlcm1pbmVzIGNvbGxpc2lvbiBldmVudHMgd2l0aCBjb250YWluZXIuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byB0ZXN0IGZvciBjb2xsaXNpb25zLlxuICogQHBhcmFtIHtqUXVlcnl9IHBhcmVudCAtIGpRdWVyeSBvYmplY3QgdG8gdXNlIGFzIGJvdW5kaW5nIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbHJPbmx5IC0gc2V0IHRvIHRydWUgdG8gY2hlY2sgbGVmdCBhbmQgcmlnaHQgdmFsdWVzIG9ubHkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRiT25seSAtIHNldCB0byB0cnVlIHRvIGNoZWNrIHRvcCBhbmQgYm90dG9tIHZhbHVlcyBvbmx5LlxuICogQGRlZmF1bHQgaWYgbm8gcGFyZW50IG9iamVjdCBwYXNzZWQsIGRldGVjdHMgY29sbGlzaW9ucyB3aXRoIGB3aW5kb3dgLlxuICogQHJldHVybnMge0Jvb2xlYW59IC0gdHJ1ZSBpZiBjb2xsaXNpb24gZnJlZSwgZmFsc2UgaWYgYSBjb2xsaXNpb24gaW4gYW55IGRpcmVjdGlvbi5cbiAqL1xuZnVuY3Rpb24gSW1Ob3RUb3VjaGluZ1lvdShlbGVtZW50LCBwYXJlbnQsIGxyT25seSwgdGJPbmx5KSB7XG4gIHZhciBlbGVEaW1zID0gR2V0RGltZW5zaW9ucyhlbGVtZW50KSxcbiAgICAgIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodDtcblxuICBpZiAocGFyZW50KSB7XG4gICAgdmFyIHBhckRpbXMgPSBHZXREaW1lbnNpb25zKHBhcmVudCk7XG5cbiAgICBib3R0b20gPSAoZWxlRGltcy5vZmZzZXQudG9wICsgZWxlRGltcy5oZWlnaHQgPD0gcGFyRGltcy5oZWlnaHQgKyBwYXJEaW1zLm9mZnNldC50b3ApO1xuICAgIHRvcCAgICA9IChlbGVEaW1zLm9mZnNldC50b3AgPj0gcGFyRGltcy5vZmZzZXQudG9wKTtcbiAgICBsZWZ0ICAgPSAoZWxlRGltcy5vZmZzZXQubGVmdCA+PSBwYXJEaW1zLm9mZnNldC5sZWZ0KTtcbiAgICByaWdodCAgPSAoZWxlRGltcy5vZmZzZXQubGVmdCArIGVsZURpbXMud2lkdGggPD0gcGFyRGltcy53aWR0aCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgYm90dG9tID0gKGVsZURpbXMub2Zmc2V0LnRvcCArIGVsZURpbXMuaGVpZ2h0IDw9IGVsZURpbXMud2luZG93RGltcy5oZWlnaHQgKyBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcCk7XG4gICAgdG9wICAgID0gKGVsZURpbXMub2Zmc2V0LnRvcCA+PSBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcCk7XG4gICAgbGVmdCAgID0gKGVsZURpbXMub2Zmc2V0LmxlZnQgPj0gZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC5sZWZ0KTtcbiAgICByaWdodCAgPSAoZWxlRGltcy5vZmZzZXQubGVmdCArIGVsZURpbXMud2lkdGggPD0gZWxlRGltcy53aW5kb3dEaW1zLndpZHRoKTtcbiAgfVxuXG4gIHZhciBhbGxEaXJzID0gW2JvdHRvbSwgdG9wLCBsZWZ0LCByaWdodF07XG5cbiAgaWYgKGxyT25seSkge1xuICAgIHJldHVybiBsZWZ0ID09PSByaWdodCA9PT0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0Yk9ubHkpIHtcbiAgICByZXR1cm4gdG9wID09PSBib3R0b20gPT09IHRydWU7XG4gIH1cblxuICByZXR1cm4gYWxsRGlycy5pbmRleE9mKGZhbHNlKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFVzZXMgbmF0aXZlIG1ldGhvZHMgdG8gcmV0dXJuIGFuIG9iamVjdCBvZiBkaW1lbnNpb24gdmFsdWVzLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2pRdWVyeSB8fCBIVE1MfSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCBvciBET00gZWxlbWVudCBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBkaW1lbnNpb25zLiBDYW4gYmUgYW55IGVsZW1lbnQgb3RoZXIgdGhhdCBkb2N1bWVudCBvciB3aW5kb3cuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIG5lc3RlZCBvYmplY3Qgb2YgaW50ZWdlciBwaXhlbCB2YWx1ZXNcbiAqIFRPRE8gLSBpZiBlbGVtZW50IGlzIHdpbmRvdywgcmV0dXJuIG9ubHkgdGhvc2UgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBHZXREaW1lbnNpb25zKGVsZW0sIHRlc3Qpe1xuICBlbGVtID0gZWxlbS5sZW5ndGggPyBlbGVtWzBdIDogZWxlbTtcblxuICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSSdtIHNvcnJ5LCBEYXZlLiBJJ20gYWZyYWlkIEkgY2FuJ3QgZG8gdGhhdC5cIik7XG4gIH1cblxuICB2YXIgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBwYXJSZWN0ID0gZWxlbS5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgd2luUmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB3aW5ZID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgd2luWCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgb2Zmc2V0OiB7XG4gICAgICB0b3A6IHJlY3QudG9wICsgd2luWSxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpblhcbiAgICB9LFxuICAgIHBhcmVudERpbXM6IHtcbiAgICAgIHdpZHRoOiBwYXJSZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBwYXJSZWN0LmhlaWdodCxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB0b3A6IHBhclJlY3QudG9wICsgd2luWSxcbiAgICAgICAgbGVmdDogcGFyUmVjdC5sZWZ0ICsgd2luWFxuICAgICAgfVxuICAgIH0sXG4gICAgd2luZG93RGltczoge1xuICAgICAgd2lkdGg6IHdpblJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpblJlY3QuaGVpZ2h0LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIHRvcDogd2luWSxcbiAgICAgICAgbGVmdDogd2luWFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRvcCBhbmQgbGVmdCBpbnRlZ2VyIHBpeGVsIHZhbHVlcyBmb3IgZHluYW1pY2FsbHkgcmVuZGVyZWQgZWxlbWVudHMsXG4gKiBzdWNoIGFzOiBUb29sdGlwLCBSZXZlYWwsIGFuZCBEcm9wZG93blxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgZm9yIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gKiBAcGFyYW0ge2pRdWVyeX0gYW5jaG9yIC0galF1ZXJ5IG9iamVjdCBmb3IgdGhlIGVsZW1lbnQncyBhbmNob3IgcG9pbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gcG9zaXRpb24gLSBhIHN0cmluZyByZWxhdGluZyB0byB0aGUgZGVzaXJlZCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCwgcmVsYXRpdmUgdG8gaXQncyBhbmNob3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB2T2Zmc2V0IC0gaW50ZWdlciBwaXhlbCB2YWx1ZSBvZiBkZXNpcmVkIHZlcnRpY2FsIHNlcGFyYXRpb24gYmV0d2VlbiBhbmNob3IgYW5kIGVsZW1lbnQuXG4gKiBAcGFyYW0ge051bWJlcn0gaE9mZnNldCAtIGludGVnZXIgcGl4ZWwgdmFsdWUgb2YgZGVzaXJlZCBob3Jpem9udGFsIHNlcGFyYXRpb24gYmV0d2VlbiBhbmNob3IgYW5kIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzT3ZlcmZsb3cgLSBpZiBhIGNvbGxpc2lvbiBldmVudCBpcyBkZXRlY3RlZCwgc2V0cyB0byB0cnVlIHRvIGRlZmF1bHQgdGhlIGVsZW1lbnQgdG8gZnVsbCB3aWR0aCAtIGFueSBkZXNpcmVkIG9mZnNldC5cbiAqIFRPRE8gYWx0ZXIvcmV3cml0ZSB0byB3b3JrIHdpdGggYGVtYCB2YWx1ZXMgYXMgd2VsbC9pbnN0ZWFkIG9mIHBpeGVsc1xuICovXG5mdW5jdGlvbiBHZXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgcG9zaXRpb24sIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpIHtcbiAgdmFyICRlbGVEaW1zID0gR2V0RGltZW5zaW9ucyhlbGVtZW50KSxcbiAgICAgICRhbmNob3JEaW1zID0gYW5jaG9yID8gR2V0RGltZW5zaW9ucyhhbmNob3IpIDogbnVsbDtcblxuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChGb3VuZGF0aW9uLnJ0bCgpID8gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAkZWxlRGltcy53aWR0aCArICRhbmNob3JEaW1zLndpZHRoIDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQpLFxuICAgICAgICB0b3A6ICRhbmNob3JEaW1zLm9mZnNldC50b3AgLSAoJGVsZURpbXMuaGVpZ2h0ICsgdk9mZnNldClcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAoJGVsZURpbXMud2lkdGggKyBoT2Zmc2V0KSxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICRhbmNob3JEaW1zLndpZHRoICsgaE9mZnNldCxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjZW50ZXIgdG9wJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICgkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICgkYW5jaG9yRGltcy53aWR0aCAvIDIpKSAtICgkZWxlRGltcy53aWR0aCAvIDIpLFxuICAgICAgICB0b3A6ICRhbmNob3JEaW1zLm9mZnNldC50b3AgLSAoJGVsZURpbXMuaGVpZ2h0ICsgdk9mZnNldClcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NlbnRlciBib3R0b20nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogaXNPdmVyZmxvdyA/IGhPZmZzZXQgOiAoKCRhbmNob3JEaW1zLm9mZnNldC5sZWZ0ICsgKCRhbmNob3JEaW1zLndpZHRoIC8gMikpIC0gKCRlbGVEaW1zLndpZHRoIC8gMikpLFxuICAgICAgICB0b3A6ICRhbmNob3JEaW1zLm9mZnNldC50b3AgKyAkYW5jaG9yRGltcy5oZWlnaHQgKyB2T2Zmc2V0XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjZW50ZXIgbGVmdCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCAtICgkZWxlRGltcy53aWR0aCArIGhPZmZzZXQpLFxuICAgICAgICB0b3A6ICgkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgKCRhbmNob3JEaW1zLmhlaWdodCAvIDIpKSAtICgkZWxlRGltcy5oZWlnaHQgLyAyKVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2VudGVyIHJpZ2h0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0ICsgJGFuY2hvckRpbXMud2lkdGggKyBoT2Zmc2V0ICsgMSxcbiAgICAgICAgdG9wOiAoJGFuY2hvckRpbXMub2Zmc2V0LnRvcCArICgkYW5jaG9yRGltcy5oZWlnaHQgLyAyKSkgLSAoJGVsZURpbXMuaGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQubGVmdCArICgkZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC8gMikpIC0gKCRlbGVEaW1zLndpZHRoIC8gMiksXG4gICAgICAgIHRvcDogKCRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcCArICgkZWxlRGltcy53aW5kb3dEaW1zLmhlaWdodCAvIDIpKSAtICgkZWxlRGltcy5oZWlnaHQgLyAyKVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmV2ZWFsJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICgkZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC0gJGVsZURpbXMud2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3AgKyB2T2Zmc2V0XG4gICAgICB9XG4gICAgY2FzZSAncmV2ZWFsIGZ1bGwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQubGVmdCxcbiAgICAgICAgdG9wOiAkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3BcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoRm91bmRhdGlvbi5ydGwoKSA/ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gJGVsZURpbXMud2lkdGggKyAkYW5jaG9yRGltcy53aWR0aCA6ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0KSxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgJGFuY2hvckRpbXMuaGVpZ2h0ICsgdk9mZnNldFxuICAgICAgfVxuICB9XG59XG5cbn0oalF1ZXJ5KTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogVGhpcyB1dGlsIHdhcyBjcmVhdGVkIGJ5IE1hcml1cyBPbGJlcnR6ICpcbiAqIFBsZWFzZSB0aGFuayBNYXJpdXMgb24gR2l0SHViIC9vd2xiZXJ0eiAqXG4gKiBvciB0aGUgd2ViIGh0dHA6Ly93d3cubWFyaXVzb2xiZXJ0ei5kZS8gKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbid1c2Ugc3RyaWN0JztcblxuIWZ1bmN0aW9uKCQpIHtcblxuY29uc3Qga2V5Q29kZXMgPSB7XG4gIDk6ICdUQUInLFxuICAxMzogJ0VOVEVSJyxcbiAgMjc6ICdFU0NBUEUnLFxuICAzMjogJ1NQQUNFJyxcbiAgMzc6ICdBUlJPV19MRUZUJyxcbiAgMzg6ICdBUlJPV19VUCcsXG4gIDM5OiAnQVJST1dfUklHSFQnLFxuICA0MDogJ0FSUk9XX0RPV04nXG59XG5cbnZhciBjb21tYW5kcyA9IHt9XG5cbnZhciBLZXlib2FyZCA9IHtcbiAga2V5czogZ2V0S2V5Q29kZXMoa2V5Q29kZXMpLFxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIChrZXlib2FyZCkgZXZlbnQgYW5kIHJldHVybnMgYSBTdHJpbmcgdGhhdCByZXByZXNlbnRzIGl0cyBrZXlcbiAgICogQ2FuIGJlIHVzZWQgbGlrZSBGb3VuZGF0aW9uLnBhcnNlS2V5KGV2ZW50KSA9PT0gRm91bmRhdGlvbi5rZXlzLlNQQUNFXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGdlbmVyYXRlZCBieSB0aGUgZXZlbnQgaGFuZGxlclxuICAgKiBAcmV0dXJuIFN0cmluZyBrZXkgLSBTdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBrZXkgcHJlc3NlZFxuICAgKi9cbiAgcGFyc2VLZXkoZXZlbnQpIHtcbiAgICB2YXIga2V5ID0ga2V5Q29kZXNbZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZV0gfHwgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIGtleSA9IGBTSElGVF8ke2tleX1gO1xuICAgIGlmIChldmVudC5jdHJsS2V5KSBrZXkgPSBgQ1RSTF8ke2tleX1gO1xuICAgIGlmIChldmVudC5hbHRLZXkpIGtleSA9IGBBTFRfJHtrZXl9YDtcbiAgICByZXR1cm4ga2V5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBnaXZlbiAoa2V5Ym9hcmQpIGV2ZW50XG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gdGhlIGV2ZW50IGdlbmVyYXRlZCBieSB0aGUgZXZlbnQgaGFuZGxlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50IC0gRm91bmRhdGlvbiBjb21wb25lbnQncyBuYW1lLCBlLmcuIFNsaWRlciBvciBSZXZlYWxcbiAgICogQHBhcmFtIHtPYmplY3RzfSBmdW5jdGlvbnMgLSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyB0aGF0IGFyZSB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgaGFuZGxlS2V5KGV2ZW50LCBjb21wb25lbnQsIGZ1bmN0aW9ucykge1xuICAgIHZhciBjb21tYW5kTGlzdCA9IGNvbW1hbmRzW2NvbXBvbmVudF0sXG4gICAgICBrZXlDb2RlID0gdGhpcy5wYXJzZUtleShldmVudCksXG4gICAgICBjbWRzLFxuICAgICAgY29tbWFuZCxcbiAgICAgIGZuO1xuXG4gICAgaWYgKCFjb21tYW5kTGlzdCkgcmV0dXJuIGNvbnNvbGUud2FybignQ29tcG9uZW50IG5vdCBkZWZpbmVkIScpO1xuXG4gICAgaWYgKHR5cGVvZiBjb21tYW5kTGlzdC5sdHIgPT09ICd1bmRlZmluZWQnKSB7IC8vIHRoaXMgY29tcG9uZW50IGRvZXMgbm90IGRpZmZlcmVudGlhdGUgYmV0d2VlbiBsdHIgYW5kIHJ0bFxuICAgICAgICBjbWRzID0gY29tbWFuZExpc3Q7IC8vIHVzZSBwbGFpbiBsaXN0XG4gICAgfSBlbHNlIHsgLy8gbWVyZ2UgbHRyIGFuZCBydGw6IGlmIGRvY3VtZW50IGlzIHJ0bCwgcnRsIG92ZXJ3cml0ZXMgbHRyIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIGlmIChGb3VuZGF0aW9uLnJ0bCgpKSBjbWRzID0gJC5leHRlbmQoe30sIGNvbW1hbmRMaXN0Lmx0ciwgY29tbWFuZExpc3QucnRsKTtcblxuICAgICAgICBlbHNlIGNtZHMgPSAkLmV4dGVuZCh7fSwgY29tbWFuZExpc3QucnRsLCBjb21tYW5kTGlzdC5sdHIpO1xuICAgIH1cbiAgICBjb21tYW5kID0gY21kc1trZXlDb2RlXTtcblxuICAgIGZuID0gZnVuY3Rpb25zW2NvbW1hbmRdO1xuICAgIGlmIChmbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHsgLy8gZXhlY3V0ZSBmdW5jdGlvbiAgaWYgZXhpc3RzXG4gICAgICBmbi5hcHBseSgpO1xuICAgICAgaWYgKGZ1bmN0aW9ucy5oYW5kbGVkIHx8IHR5cGVvZiBmdW5jdGlvbnMuaGFuZGxlZCA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBleGVjdXRlIGZ1bmN0aW9uIHdoZW4gZXZlbnQgd2FzIGhhbmRsZWRcbiAgICAgICAgICBmdW5jdGlvbnMuaGFuZGxlZC5hcHBseSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZnVuY3Rpb25zLnVuaGFuZGxlZCB8fCB0eXBlb2YgZnVuY3Rpb25zLnVuaGFuZGxlZCA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBleGVjdXRlIGZ1bmN0aW9uIHdoZW4gZXZlbnQgd2FzIG5vdCBoYW5kbGVkXG4gICAgICAgICAgZnVuY3Rpb25zLnVuaGFuZGxlZC5hcHBseSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRmluZHMgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyB3aXRoaW4gdGhlIGdpdmVuIGAkZWxlbWVudGBcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBzZWFyY2ggd2l0aGluXG4gICAqIEByZXR1cm4ge2pRdWVyeX0gJGZvY3VzYWJsZSAtIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIGAkZWxlbWVudGBcbiAgICovXG4gIGZpbmRGb2N1c2FibGUoJGVsZW1lbnQpIHtcbiAgICByZXR1cm4gJGVsZW1lbnQuZmluZCgnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgKlt0YWJpbmRleF0sICpbY29udGVudGVkaXRhYmxlXScpLmZpbHRlcihmdW5jdGlvbigpIHtcbiAgICAgIGlmICghJCh0aGlzKS5pcygnOnZpc2libGUnKSB8fCAkKHRoaXMpLmF0dHIoJ3RhYmluZGV4JykgPCAwKSB7IHJldHVybiBmYWxzZTsgfSAvL29ubHkgaGF2ZSB2aXNpYmxlIGVsZW1lbnRzIGFuZCB0aG9zZSB0aGF0IGhhdmUgYSB0YWJpbmRleCBncmVhdGVyIG9yIGVxdWFsIDBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wb25lbnQgbmFtZSBuYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgLSBGb3VuZGF0aW9uIGNvbXBvbmVudCwgZS5nLiBTbGlkZXIgb3IgUmV2ZWFsXG4gICAqIEByZXR1cm4gU3RyaW5nIGNvbXBvbmVudE5hbWVcbiAgICovXG5cbiAgcmVnaXN0ZXIoY29tcG9uZW50TmFtZSwgY21kcykge1xuICAgIGNvbW1hbmRzW2NvbXBvbmVudE5hbWVdID0gY21kcztcbiAgfVxufVxuXG4vKlxuICogQ29uc3RhbnRzIGZvciBlYXNpZXIgY29tcGFyaW5nLlxuICogQ2FuIGJlIHVzZWQgbGlrZSBGb3VuZGF0aW9uLnBhcnNlS2V5KGV2ZW50KSA9PT0gRm91bmRhdGlvbi5rZXlzLlNQQUNFXG4gKi9cbmZ1bmN0aW9uIGdldEtleUNvZGVzKGtjcykge1xuICB2YXIgayA9IHt9O1xuICBmb3IgKHZhciBrYyBpbiBrY3MpIGtba2NzW2tjXV0gPSBrY3Nba2NdO1xuICByZXR1cm4gaztcbn1cblxuRm91bmRhdGlvbi5LZXlib2FyZCA9IEtleWJvYXJkO1xuXG59KGpRdWVyeSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbi8vIERlZmF1bHQgc2V0IG9mIG1lZGlhIHF1ZXJpZXNcbmNvbnN0IGRlZmF1bHRRdWVyaWVzID0ge1xuICAnZGVmYXVsdCcgOiAnb25seSBzY3JlZW4nLFxuICBsYW5kc2NhcGUgOiAnb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIHBvcnRyYWl0IDogJ29ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIHJldGluYSA6ICdvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknXG59O1xuXG52YXIgTWVkaWFRdWVyeSA9IHtcbiAgcXVlcmllczogW10sXG5cbiAgY3VycmVudDogJycsXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBtZWRpYSBxdWVyeSBoZWxwZXIsIGJ5IGV4dHJhY3RpbmcgdGhlIGJyZWFrcG9pbnQgbGlzdCBmcm9tIHRoZSBDU1MgYW5kIGFjdGl2YXRpbmcgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlci5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGV4dHJhY3RlZFN0eWxlcyA9ICQoJy5mb3VuZGF0aW9uLW1xJykuY3NzKCdmb250LWZhbWlseScpO1xuICAgIHZhciBuYW1lZFF1ZXJpZXM7XG5cbiAgICBuYW1lZFF1ZXJpZXMgPSBwYXJzZVN0eWxlVG9PYmplY3QoZXh0cmFjdGVkU3R5bGVzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBuYW1lZFF1ZXJpZXMpIHtcbiAgICAgIHNlbGYucXVlcmllcy5wdXNoKHtcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICB2YWx1ZTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke25hbWVkUXVlcmllc1trZXldfSlgXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuXG4gICAgdGhpcy5fd2F0Y2hlcigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNjcmVlbiBpcyBhdCBsZWFzdCBhcyB3aWRlIGFzIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBjaGVjay5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYnJlYWtwb2ludCBtYXRjaGVzLCBgZmFsc2VgIGlmIGl0J3Mgc21hbGxlci5cbiAgICovXG4gIGF0TGVhc3Qoc2l6ZSkge1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZ2V0KHNpemUpO1xuXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBtZWRpYSBxdWVyeSBvZiBhIGJyZWFrcG9pbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IC0gVGhlIG1lZGlhIHF1ZXJ5IG9mIHRoZSBicmVha3BvaW50LCBvciBgbnVsbGAgaWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdC5cbiAgICovXG4gIGdldChzaXplKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnF1ZXJpZXMpIHtcbiAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1tpXTtcbiAgICAgIGlmIChzaXplID09PSBxdWVyeS5uYW1lKSByZXR1cm4gcXVlcnkudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBuYW1lIGJ5IHRlc3RpbmcgZXZlcnkgYnJlYWtwb2ludCBhbmQgcmV0dXJuaW5nIHRoZSBsYXN0IG9uZSB0byBtYXRjaCAodGhlIGJpZ2dlc3Qgb25lKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IE5hbWUgb2YgdGhlIGN1cnJlbnQgYnJlYWtwb2ludC5cbiAgICovXG4gIF9nZXRDdXJyZW50U2l6ZSgpIHtcbiAgICB2YXIgbWF0Y2hlZDtcblxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5xdWVyaWVzKSB7XG4gICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG5cbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeS52YWx1ZSkubWF0Y2hlcykge1xuICAgICAgICBtYXRjaGVkID0gcXVlcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtYXRjaGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG1hdGNoZWQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlciwgd2hpY2ggZmlyZXMgYW4gZXZlbnQgb24gdGhlIHdpbmRvdyB3aGVuZXZlciB0aGUgYnJlYWtwb2ludCBjaGFuZ2VzLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93YXRjaGVyKCkge1xuICAgICQod2luZG93KS5vbigncmVzaXplLnpmLm1lZGlhcXVlcnknLCAoKSA9PiB7XG4gICAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG5cbiAgICAgIGlmIChuZXdTaXplICE9PSB0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gQnJvYWRjYXN0IHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2Ugb24gdGhlIHdpbmRvd1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgW25ld1NpemUsIHRoaXMuY3VycmVudF0pO1xuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgY3VycmVudCBtZWRpYSBxdWVyeVxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdTaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5Gb3VuZGF0aW9uLk1lZGlhUXVlcnkgPSBNZWRpYVF1ZXJ5O1xuXG4vLyBtYXRjaE1lZGlhKCkgcG9seWZpbGwgLSBUZXN0IGEgQ1NTIG1lZGlhIHR5cGUvcXVlcnkgaW4gSlMuXG4vLyBBdXRob3JzICYgY29weXJpZ2h0IChjKSAyMDEyOiBTY290dCBKZWhsLCBQYXVsIElyaXNoLCBOaWNob2xhcyBaYWthcywgRGF2aWQgS25pZ2h0LiBEdWFsIE1JVC9CU0QgbGljZW5zZVxud2luZG93Lm1hdGNoTWVkaWEgfHwgKHdpbmRvdy5tYXRjaE1lZGlhID0gZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IG1hdGNoTWVkaXVtIGFwaSBzdWNoIGFzIElFIDkgYW5kIHdlYmtpdFxuICB2YXIgc3R5bGVNZWRpYSA9ICh3aW5kb3cuc3R5bGVNZWRpYSB8fCB3aW5kb3cubWVkaWEpO1xuXG4gIC8vIEZvciB0aG9zZSB0aGF0IGRvbid0IHN1cHBvcnQgbWF0Y2hNZWRpdW1cbiAgaWYgKCFzdHlsZU1lZGlhKSB7XG4gICAgdmFyIHN0eWxlICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuICAgIHNjcmlwdCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdLFxuICAgIGluZm8gICAgICAgID0gbnVsbDtcblxuICAgIHN0eWxlLnR5cGUgID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZS5pZCAgICA9ICdtYXRjaG1lZGlhanMtdGVzdCc7XG5cbiAgICBzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIHNjcmlwdCk7XG5cbiAgICAvLyAnc3R5bGUuY3VycmVudFN0eWxlJyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICd3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZScgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xuICAgIGluZm8gPSAoJ2dldENvbXB1dGVkU3R5bGUnIGluIHdpbmRvdykgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3R5bGUsIG51bGwpIHx8IHN0eWxlLmN1cnJlbnRTdHlsZTtcblxuICAgIHN0eWxlTWVkaWEgPSB7XG4gICAgICBtYXRjaE1lZGl1bShtZWRpYSkge1xuICAgICAgICB2YXIgdGV4dCA9IGBAbWVkaWEgJHttZWRpYX17ICNtYXRjaG1lZGlhanMtdGVzdCB7IHdpZHRoOiAxcHg7IH0gfWA7XG5cbiAgICAgICAgLy8gJ3N0eWxlLnN0eWxlU2hlZXQnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3N0eWxlLnRleHRDb250ZW50JyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXN0IGlmIG1lZGlhIHF1ZXJ5IGlzIHRydWUgb3IgZmFsc2VcbiAgICAgICAgcmV0dXJuIGluZm8ud2lkdGggPT09ICcxcHgnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihtZWRpYSkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXRjaGVzOiBzdHlsZU1lZGlhLm1hdGNoTWVkaXVtKG1lZGlhIHx8ICdhbGwnKSxcbiAgICAgIG1lZGlhOiBtZWRpYSB8fCAnYWxsJ1xuICAgIH07XG4gIH1cbn0oKSk7XG5cbi8vIFRoYW5rIHlvdTogaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmdcbmZ1bmN0aW9uIHBhcnNlU3R5bGVUb09iamVjdChzdHIpIHtcbiAgdmFyIHN0eWxlT2JqZWN0ID0ge307XG5cbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICB9XG5cbiAgc3RyID0gc3RyLnRyaW0oKS5zbGljZSgxLCAtMSk7IC8vIGJyb3dzZXJzIHJlLXF1b3RlIHN0cmluZyBzdHlsZSB2YWx1ZXNcblxuICBpZiAoIXN0cikge1xuICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgfVxuXG4gIHN0eWxlT2JqZWN0ID0gc3RyLnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uKHJldCwgcGFyYW0pIHtcbiAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuICAgIHZhciBrZXkgPSBwYXJ0c1swXTtcbiAgICB2YXIgdmFsID0gcGFydHNbMV07XG4gICAga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG5cbiAgICAvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuICAgIC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcbiAgICB2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuICAgIGlmICghcmV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldFtrZXldID0gdmFsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRba2V5XSkpIHtcbiAgICAgIHJldFtrZXldLnB1c2godmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0W2tleV0gPSBbcmV0W2tleV0sIHZhbF07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gc3R5bGVPYmplY3Q7XG59XG5cbkZvdW5kYXRpb24uTWVkaWFRdWVyeSA9IE1lZGlhUXVlcnk7XG5cbn0oalF1ZXJ5KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuIWZ1bmN0aW9uKCQpIHtcblxuLyoqXG4gKiBNb3Rpb24gbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLm1vdGlvblxuICovXG5cbmNvbnN0IGluaXRDbGFzc2VzICAgPSBbJ211aS1lbnRlcicsICdtdWktbGVhdmUnXTtcbmNvbnN0IGFjdGl2ZUNsYXNzZXMgPSBbJ211aS1lbnRlci1hY3RpdmUnLCAnbXVpLWxlYXZlLWFjdGl2ZSddO1xuXG5jb25zdCBNb3Rpb24gPSB7XG4gIGFuaW1hdGVJbjogZnVuY3Rpb24oZWxlbWVudCwgYW5pbWF0aW9uLCBjYikge1xuICAgIGFuaW1hdGUodHJ1ZSwgZWxlbWVudCwgYW5pbWF0aW9uLCBjYik7XG4gIH0sXG5cbiAgYW5pbWF0ZU91dDogZnVuY3Rpb24oZWxlbWVudCwgYW5pbWF0aW9uLCBjYikge1xuICAgIGFuaW1hdGUoZmFsc2UsIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIE1vdmUoZHVyYXRpb24sIGVsZW0sIGZuKXtcbiAgdmFyIGFuaW0sIHByb2csIHN0YXJ0ID0gbnVsbDtcbiAgLy8gY29uc29sZS5sb2coJ2NhbGxlZCcpO1xuXG4gIGZ1bmN0aW9uIG1vdmUodHMpe1xuICAgIGlmKCFzdGFydCkgc3RhcnQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgLy8gY29uc29sZS5sb2coc3RhcnQsIHRzKTtcbiAgICBwcm9nID0gdHMgLSBzdGFydDtcbiAgICBmbi5hcHBseShlbGVtKTtcblxuICAgIGlmKHByb2cgPCBkdXJhdGlvbil7IGFuaW0gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmUsIGVsZW0pOyB9XG4gICAgZWxzZXtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltKTtcbiAgICAgIGVsZW0udHJpZ2dlcignZmluaXNoZWQuemYuYW5pbWF0ZScsIFtlbGVtXSkudHJpZ2dlckhhbmRsZXIoJ2ZpbmlzaGVkLnpmLmFuaW1hdGUnLCBbZWxlbV0pO1xuICAgIH1cbiAgfVxuICBhbmltID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlKTtcbn1cblxuLyoqXG4gKiBBbmltYXRlcyBhbiBlbGVtZW50IGluIG9yIG91dCB1c2luZyBhIENTUyB0cmFuc2l0aW9uIGNsYXNzLlxuICogQGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0luIC0gRGVmaW5lcyBpZiB0aGUgYW5pbWF0aW9uIGlzIGluIG9yIG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9yIEhUTUwgb2JqZWN0IHRvIGFuaW1hdGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gYW5pbWF0aW9uIC0gQ1NTIGNsYXNzIHRvIHVzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgdG8gcnVuIHdoZW4gYW5pbWF0aW9uIGlzIGZpbmlzaGVkLlxuICovXG5mdW5jdGlvbiBhbmltYXRlKGlzSW4sIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgZWxlbWVudCA9ICQoZWxlbWVudCkuZXEoMCk7XG5cbiAgaWYgKCFlbGVtZW50Lmxlbmd0aCkgcmV0dXJuO1xuXG4gIHZhciBpbml0Q2xhc3MgPSBpc0luID8gaW5pdENsYXNzZXNbMF0gOiBpbml0Q2xhc3Nlc1sxXTtcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNJbiA/IGFjdGl2ZUNsYXNzZXNbMF0gOiBhY3RpdmVDbGFzc2VzWzFdO1xuXG4gIC8vIFNldCB1cCB0aGUgYW5pbWF0aW9uXG4gIHJlc2V0KCk7XG5cbiAgZWxlbWVudFxuICAgIC5hZGRDbGFzcyhhbmltYXRpb24pXG4gICAgLmNzcygndHJhbnNpdGlvbicsICdub25lJyk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBlbGVtZW50LmFkZENsYXNzKGluaXRDbGFzcyk7XG4gICAgaWYgKGlzSW4pIGVsZW1lbnQuc2hvdygpO1xuICB9KTtcblxuICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgZWxlbWVudFswXS5vZmZzZXRXaWR0aDtcbiAgICBlbGVtZW50XG4gICAgICAuY3NzKCd0cmFuc2l0aW9uJywgJycpXG4gICAgICAuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICB9KTtcblxuICAvLyBDbGVhbiB1cCB0aGUgYW5pbWF0aW9uIHdoZW4gaXQgZmluaXNoZXNcbiAgZWxlbWVudC5vbmUoRm91bmRhdGlvbi50cmFuc2l0aW9uZW5kKGVsZW1lbnQpLCBmaW5pc2gpO1xuXG4gIC8vIEhpZGVzIHRoZSBlbGVtZW50IChmb3Igb3V0IGFuaW1hdGlvbnMpLCByZXNldHMgdGhlIGVsZW1lbnQsIGFuZCBydW5zIGEgY2FsbGJhY2tcbiAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgIGlmICghaXNJbikgZWxlbWVudC5oaWRlKCk7XG4gICAgcmVzZXQoKTtcbiAgICBpZiAoY2IpIGNiLmFwcGx5KGVsZW1lbnQpO1xuICB9XG5cbiAgLy8gUmVzZXRzIHRyYW5zaXRpb25zIGFuZCByZW1vdmVzIG1vdGlvbi1zcGVjaWZpYyBjbGFzc2VzXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGVsZW1lbnRbMF0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gMDtcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKGAke2luaXRDbGFzc30gJHthY3RpdmVDbGFzc30gJHthbmltYXRpb259YCk7XG4gIH1cbn1cblxuRm91bmRhdGlvbi5Nb3ZlID0gTW92ZTtcbkZvdW5kYXRpb24uTW90aW9uID0gTW90aW9uO1xuXG59KGpRdWVyeSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbmNvbnN0IE5lc3QgPSB7XG4gIEZlYXRoZXIobWVudSwgdHlwZSA9ICd6ZicpIHtcbiAgICBtZW51LmF0dHIoJ3JvbGUnLCAnbWVudWJhcicpO1xuXG4gICAgdmFyIGl0ZW1zID0gbWVudS5maW5kKCdsaScpLmF0dHIoeydyb2xlJzogJ21lbnVpdGVtJ30pLFxuICAgICAgICBzdWJNZW51Q2xhc3MgPSBgaXMtJHt0eXBlfS1zdWJtZW51YCxcbiAgICAgICAgc3ViSXRlbUNsYXNzID0gYCR7c3ViTWVudUNsYXNzfS1pdGVtYCxcbiAgICAgICAgaGFzU3ViQ2xhc3MgPSBgaXMtJHt0eXBlfS1zdWJtZW51LXBhcmVudGA7XG5cbiAgICBtZW51LmZpbmQoJ2E6Zmlyc3QnKS5hdHRyKCd0YWJpbmRleCcsIDApO1xuXG4gICAgaXRlbXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkaXRlbSA9ICQodGhpcyksXG4gICAgICAgICAgJHN1YiA9ICRpdGVtLmNoaWxkcmVuKCd1bCcpO1xuXG4gICAgICBpZiAoJHN1Yi5sZW5ndGgpIHtcbiAgICAgICAgJGl0ZW1cbiAgICAgICAgICAuYWRkQ2xhc3MoaGFzU3ViQ2xhc3MpXG4gICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBmYWxzZSxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJGl0ZW0uY2hpbGRyZW4oJ2E6Zmlyc3QnKS50ZXh0KClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAkc3ViXG4gICAgICAgICAgLmFkZENsYXNzKGBzdWJtZW51ICR7c3ViTWVudUNsYXNzfWApXG4gICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgJ2RhdGEtc3VibWVudSc6ICcnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogdHJ1ZSxcbiAgICAgICAgICAgICdyb2xlJzogJ21lbnUnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkaXRlbS5wYXJlbnQoJ1tkYXRhLXN1Ym1lbnVdJykubGVuZ3RoKSB7XG4gICAgICAgICRpdGVtLmFkZENsYXNzKGBpcy1zdWJtZW51LWl0ZW0gJHtzdWJJdGVtQ2xhc3N9YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH0sXG5cbiAgQnVybihtZW51LCB0eXBlKSB7XG4gICAgdmFyIGl0ZW1zID0gbWVudS5maW5kKCdsaScpLnJlbW92ZUF0dHIoJ3RhYmluZGV4JyksXG4gICAgICAgIHN1Yk1lbnVDbGFzcyA9IGBpcy0ke3R5cGV9LXN1Ym1lbnVgLFxuICAgICAgICBzdWJJdGVtQ2xhc3MgPSBgJHtzdWJNZW51Q2xhc3N9LWl0ZW1gLFxuICAgICAgICBoYXNTdWJDbGFzcyA9IGBpcy0ke3R5cGV9LXN1Ym1lbnUtcGFyZW50YDtcblxuICAgIG1lbnVcbiAgICAgIC5maW5kKCcqJylcbiAgICAgIC5yZW1vdmVDbGFzcyhgJHtzdWJNZW51Q2xhc3N9ICR7c3ViSXRlbUNsYXNzfSAke2hhc1N1YkNsYXNzfSBpcy1zdWJtZW51LWl0ZW0gc3VibWVudSBpcy1hY3RpdmVgKVxuICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3VibWVudScpLmNzcygnZGlzcGxheScsICcnKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCAgICAgIG1lbnUuZmluZCgnLicgKyBzdWJNZW51Q2xhc3MgKyAnLCAuJyArIHN1Ykl0ZW1DbGFzcyArICcsIC5oYXMtc3VibWVudSwgLmlzLXN1Ym1lbnUtaXRlbSwgLnN1Ym1lbnUsIFtkYXRhLXN1Ym1lbnVdJylcbiAgICAvLyAgICAgICAgICAgLnJlbW92ZUNsYXNzKHN1Yk1lbnVDbGFzcyArICcgJyArIHN1Ykl0ZW1DbGFzcyArICcgaGFzLXN1Ym1lbnUgaXMtc3VibWVudS1pdGVtIHN1Ym1lbnUnKVxuICAgIC8vICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zdWJtZW51JykpO1xuICAgIC8vIGl0ZW1zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAvLyAgIHZhciAkaXRlbSA9ICQodGhpcyksXG4gICAgLy8gICAgICAgJHN1YiA9ICRpdGVtLmNoaWxkcmVuKCd1bCcpO1xuICAgIC8vICAgaWYoJGl0ZW0ucGFyZW50KCdbZGF0YS1zdWJtZW51XScpLmxlbmd0aCl7XG4gICAgLy8gICAgICRpdGVtLnJlbW92ZUNsYXNzKCdpcy1zdWJtZW51LWl0ZW0gJyArIHN1Ykl0ZW1DbGFzcyk7XG4gICAgLy8gICB9XG4gICAgLy8gICBpZigkc3ViLmxlbmd0aCl7XG4gICAgLy8gICAgICRpdGVtLnJlbW92ZUNsYXNzKCdoYXMtc3VibWVudScpO1xuICAgIC8vICAgICAkc3ViLnJlbW92ZUNsYXNzKCdzdWJtZW51ICcgKyBzdWJNZW51Q2xhc3MpLnJlbW92ZUF0dHIoJ2RhdGEtc3VibWVudScpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICB9XG59XG5cbkZvdW5kYXRpb24uTmVzdCA9IE5lc3Q7XG5cbn0oalF1ZXJ5KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuIWZ1bmN0aW9uKCQpIHtcblxuZnVuY3Rpb24gVGltZXIoZWxlbSwgb3B0aW9ucywgY2IpIHtcbiAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiwvL29wdGlvbnMgaXMgYW4gb2JqZWN0IGZvciBlYXNpbHkgYWRkaW5nIGZlYXR1cmVzIGxhdGVyLlxuICAgICAgbmFtZVNwYWNlID0gT2JqZWN0LmtleXMoZWxlbS5kYXRhKCkpWzBdIHx8ICd0aW1lcicsXG4gICAgICByZW1haW4gPSAtMSxcbiAgICAgIHN0YXJ0LFxuICAgICAgdGltZXI7XG5cbiAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuXG4gIHRoaXMucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJlbWFpbiA9IC0xO1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAvLyBpZighZWxlbS5kYXRhKCdwYXVzZWQnKSl7IHJldHVybiBmYWxzZTsgfS8vbWF5YmUgaW1wbGVtZW50IHRoaXMgc2FuaXR5IGNoZWNrIGlmIHVzZWQgZm9yIG90aGVyIHRoaW5ncy5cbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHJlbWFpbiA9IHJlbWFpbiA8PSAwID8gZHVyYXRpb24gOiByZW1haW47XG4gICAgZWxlbS5kYXRhKCdwYXVzZWQnLCBmYWxzZSk7XG4gICAgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgaWYob3B0aW9ucy5pbmZpbml0ZSl7XG4gICAgICAgIF90aGlzLnJlc3RhcnQoKTsvL3JlcnVuIHRoZSB0aW1lci5cbiAgICAgIH1cbiAgICAgIGNiKCk7XG4gICAgfSwgcmVtYWluKTtcbiAgICBlbGVtLnRyaWdnZXIoYHRpbWVyc3RhcnQuemYuJHtuYW1lU3BhY2V9YCk7XG4gIH1cblxuICB0aGlzLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgLy9pZihlbGVtLmRhdGEoJ3BhdXNlZCcpKXsgcmV0dXJuIGZhbHNlOyB9Ly9tYXliZSBpbXBsZW1lbnQgdGhpcyBzYW5pdHkgY2hlY2sgaWYgdXNlZCBmb3Igb3RoZXIgdGhpbmdzLlxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgZWxlbS5kYXRhKCdwYXVzZWQnLCB0cnVlKTtcbiAgICB2YXIgZW5kID0gRGF0ZS5ub3coKTtcbiAgICByZW1haW4gPSByZW1haW4gLSAoZW5kIC0gc3RhcnQpO1xuICAgIGVsZW0udHJpZ2dlcihgdGltZXJwYXVzZWQuemYuJHtuYW1lU3BhY2V9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSdW5zIGEgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiBpbWFnZXMgYXJlIGZ1bGx5IGxvYWRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbWFnZXMgLSBJbWFnZShzKSB0byBjaGVjayBpZiBsb2FkZWQuXG4gKiBAcGFyYW0ge0Z1bmN9IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGltYWdlIGlzIGZ1bGx5IGxvYWRlZC5cbiAqL1xuZnVuY3Rpb24gb25JbWFnZXNMb2FkZWQoaW1hZ2VzLCBjYWxsYmFjayl7XG4gIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIHVubG9hZGVkID0gaW1hZ2VzLmxlbmd0aDtcblxuICBpZiAodW5sb2FkZWQgPT09IDApIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG5cbiAgaW1hZ2VzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY29tcGxldGUpIHtcbiAgICAgIHNpbmdsZUltYWdlTG9hZGVkKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLm5hdHVyYWxXaWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgICBzaW5nbGVJbWFnZUxvYWRlZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQodGhpcykub25lKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNpbmdsZUltYWdlTG9hZGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNpbmdsZUltYWdlTG9hZGVkKCkge1xuICAgIHVubG9hZGVkLS07XG4gICAgaWYgKHVubG9hZGVkID09PSAwKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufVxuXG5Gb3VuZGF0aW9uLlRpbWVyID0gVGltZXI7XG5Gb3VuZGF0aW9uLm9uSW1hZ2VzTG9hZGVkID0gb25JbWFnZXNMb2FkZWQ7XG5cbn0oalF1ZXJ5KTtcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vKipXb3JrIGluc3BpcmVkIGJ5IG11bHRpcGxlIGpxdWVyeSBzd2lwZSBwbHVnaW5zKipcbi8vKipEb25lIGJ5IFlvaGFpIEFyYXJhdCAqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbihmdW5jdGlvbigkKSB7XG5cbiAgJC5zcG90U3dpcGUgPSB7XG4gICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICBlbmFibGVkOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgcHJldmVudERlZmF1bHQ6IGZhbHNlLFxuICAgIG1vdmVUaHJlc2hvbGQ6IDc1LFxuICAgIHRpbWVUaHJlc2hvbGQ6IDIwMFxuICB9O1xuXG4gIHZhciAgIHN0YXJ0UG9zWCxcbiAgICAgICAgc3RhcnRQb3NZLFxuICAgICAgICBzdGFydFRpbWUsXG4gICAgICAgIGVsYXBzZWRUaW1lLFxuICAgICAgICBpc01vdmluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgLy8gIGFsZXJ0KHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICBpc01vdmluZyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICAgIGlmICgkLnNwb3RTd2lwZS5wcmV2ZW50RGVmYXVsdCkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH1cbiAgICBpZihpc01vdmluZykge1xuICAgICAgdmFyIHggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICB2YXIgeSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgIHZhciBkeCA9IHN0YXJ0UG9zWCAtIHg7XG4gICAgICB2YXIgZHkgPSBzdGFydFBvc1kgLSB5O1xuICAgICAgdmFyIGRpcjtcbiAgICAgIGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWU7XG4gICAgICBpZihNYXRoLmFicyhkeCkgPj0gJC5zcG90U3dpcGUubW92ZVRocmVzaG9sZCAmJiBlbGFwc2VkVGltZSA8PSAkLnNwb3RTd2lwZS50aW1lVGhyZXNob2xkKSB7XG4gICAgICAgIGRpciA9IGR4ID4gMCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIGlmKE1hdGguYWJzKGR5KSA+PSAkLnNwb3RTd2lwZS5tb3ZlVGhyZXNob2xkICYmIGVsYXBzZWRUaW1lIDw9ICQuc3BvdFN3aXBlLnRpbWVUaHJlc2hvbGQpIHtcbiAgICAgIC8vICAgZGlyID0gZHkgPiAwID8gJ2Rvd24nIDogJ3VwJztcbiAgICAgIC8vIH1cbiAgICAgIGlmKGRpcikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uVG91Y2hFbmQuY2FsbCh0aGlzKTtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdzd2lwZScsIGRpcikudHJpZ2dlcihgc3dpcGUke2Rpcn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgIHN0YXJ0UG9zWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgIHN0YXJ0UG9zWSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgIGlzTW92aW5nID0gdHJ1ZTtcbiAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciAmJiB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gIH1cblxuICAkLmV2ZW50LnNwZWNpYWwuc3dpcGUgPSB7IHNldHVwOiBpbml0IH07XG5cbiAgJC5lYWNoKFsnbGVmdCcsICd1cCcsICdkb3duJywgJ3JpZ2h0J10sIGZ1bmN0aW9uICgpIHtcbiAgICAkLmV2ZW50LnNwZWNpYWxbYHN3aXBlJHt0aGlzfWBdID0geyBzZXR1cDogZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykub24oJ3N3aXBlJywgJC5ub29wKTtcbiAgICB9IH07XG4gIH0pO1xufSkoalF1ZXJ5KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNZXRob2QgZm9yIGFkZGluZyBwc3VlZG8gZHJhZyBldmVudHMgdG8gZWxlbWVudHMgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiFmdW5jdGlvbigkKXtcbiAgJC5mbi5hZGRUb3VjaCA9IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGksZWwpe1xuICAgICAgJChlbCkuYmluZCgndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwnLGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vd2UgcGFzcyB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0IGJlY2F1c2UgdGhlIGpRdWVyeSBldmVudFxuICAgICAgICAvL29iamVjdCBpcyBub3JtYWxpemVkIHRvIHczYyBzcGVjcyBhbmQgZG9lcyBub3QgcHJvdmlkZSB0aGUgVG91Y2hMaXN0XG4gICAgICAgIGhhbmRsZVRvdWNoKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGhhbmRsZVRvdWNoID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICBmaXJzdCA9IHRvdWNoZXNbMF0sXG4gICAgICAgICAgZXZlbnRUeXBlcyA9IHtcbiAgICAgICAgICAgIHRvdWNoc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgdG91Y2htb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgICAgIHRvdWNoZW5kOiAnbW91c2V1cCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGUgPSBldmVudFR5cGVzW2V2ZW50LnR5cGVdLFxuICAgICAgICAgIHNpbXVsYXRlZEV2ZW50XG4gICAgICAgIDtcblxuICAgICAgaWYoJ01vdXNlRXZlbnQnIGluIHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93Lk1vdXNlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQgPSB3aW5kb3cuTW91c2VFdmVudCh0eXBlLCB7XG4gICAgICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgICAgICdjYW5jZWxhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAnc2NyZWVuWCc6IGZpcnN0LnNjcmVlblgsXG4gICAgICAgICAgJ3NjcmVlblknOiBmaXJzdC5zY3JlZW5ZLFxuICAgICAgICAgICdjbGllbnRYJzogZmlyc3QuY2xpZW50WCxcbiAgICAgICAgICAnY2xpZW50WSc6IGZpcnN0LmNsaWVudFlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaW11bGF0ZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XG4gICAgICAgIHNpbXVsYXRlZEV2ZW50LmluaXRNb3VzZUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMSwgZmlyc3Quc2NyZWVuWCwgZmlyc3Quc2NyZWVuWSwgZmlyc3QuY2xpZW50WCwgZmlyc3QuY2xpZW50WSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAvKmxlZnQqLywgbnVsbCk7XG4gICAgICB9XG4gICAgICBmaXJzdC50YXJnZXQuZGlzcGF0Y2hFdmVudChzaW11bGF0ZWRFdmVudCk7XG4gICAgfTtcbiAgfTtcbn0oalF1ZXJ5KTtcblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vKipGcm9tIHRoZSBqUXVlcnkgTW9iaWxlIExpYnJhcnkqKlxuLy8qKm5lZWQgdG8gcmVjcmVhdGUgZnVuY3Rpb25hbGl0eSoqXG4vLyoqYW5kIHRyeSB0byBpbXByb3ZlIGlmIHBvc3NpYmxlKipcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vKiBSZW1vdmluZyB0aGUgalF1ZXJ5IGZ1bmN0aW9uICoqKipcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4oZnVuY3Rpb24oICQsIHdpbmRvdywgdW5kZWZpbmVkICkge1xuXG5cdHZhciAkZG9jdW1lbnQgPSAkKCBkb2N1bWVudCApLFxuXHRcdC8vIHN1cHBvcnRUb3VjaCA9ICQubW9iaWxlLnN1cHBvcnQudG91Y2gsXG5cdFx0dG91Y2hTdGFydEV2ZW50ID0gJ3RvdWNoc3RhcnQnLy9zdXBwb3J0VG91Y2ggPyBcInRvdWNoc3RhcnRcIiA6IFwibW91c2Vkb3duXCIsXG5cdFx0dG91Y2hTdG9wRXZlbnQgPSAndG91Y2hlbmQnLy9zdXBwb3J0VG91Y2ggPyBcInRvdWNoZW5kXCIgOiBcIm1vdXNldXBcIixcblx0XHR0b3VjaE1vdmVFdmVudCA9ICd0b3VjaG1vdmUnLy9zdXBwb3J0VG91Y2ggPyBcInRvdWNobW92ZVwiIDogXCJtb3VzZW1vdmVcIjtcblxuXHQvLyBzZXR1cCBuZXcgZXZlbnQgc2hvcnRjdXRzXG5cdCQuZWFjaCggKCBcInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIFwiICtcblx0XHRcInN3aXBlIHN3aXBlbGVmdCBzd2lwZXJpZ2h0XCIgKS5zcGxpdCggXCIgXCIgKSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cblx0XHQkLmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRyZXR1cm4gZm4gPyB0aGlzLmJpbmQoIG5hbWUsIGZuICkgOiB0aGlzLnRyaWdnZXIoIG5hbWUgKTtcblx0XHR9O1xuXG5cdFx0Ly8galF1ZXJ5IDwgMS44XG5cdFx0aWYgKCAkLmF0dHJGbiApIHtcblx0XHRcdCQuYXR0ckZuWyBuYW1lIF0gPSB0cnVlO1xuXHRcdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gdHJpZ2dlckN1c3RvbUV2ZW50KCBvYmosIGV2ZW50VHlwZSwgZXZlbnQsIGJ1YmJsZSApIHtcblx0XHR2YXIgb3JpZ2luYWxUeXBlID0gZXZlbnQudHlwZTtcblx0XHRldmVudC50eXBlID0gZXZlbnRUeXBlO1xuXHRcdGlmICggYnViYmxlICkge1xuXHRcdFx0JC5ldmVudC50cmlnZ2VyKCBldmVudCwgdW5kZWZpbmVkLCBvYmogKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5ldmVudC5kaXNwYXRjaC5jYWxsKCBvYmosIGV2ZW50ICk7XG5cdFx0fVxuXHRcdGV2ZW50LnR5cGUgPSBvcmlnaW5hbFR5cGU7XG5cdH1cblxuXHQvLyBhbHNvIGhhbmRsZXMgdGFwaG9sZFxuXG5cdC8vIEFsc28gaGFuZGxlcyBzd2lwZWxlZnQsIHN3aXBlcmlnaHRcblx0JC5ldmVudC5zcGVjaWFsLnN3aXBlID0ge1xuXG5cdFx0Ly8gTW9yZSB0aGFuIHRoaXMgaG9yaXpvbnRhbCBkaXNwbGFjZW1lbnQsIGFuZCB3ZSB3aWxsIHN1cHByZXNzIHNjcm9sbGluZy5cblx0XHRzY3JvbGxTdXByZXNzaW9uVGhyZXNob2xkOiAzMCxcblxuXHRcdC8vIE1vcmUgdGltZSB0aGFuIHRoaXMsIGFuZCBpdCBpc24ndCBhIHN3aXBlLlxuXHRcdGR1cmF0aW9uVGhyZXNob2xkOiAxMDAwLFxuXG5cdFx0Ly8gU3dpcGUgaG9yaXpvbnRhbCBkaXNwbGFjZW1lbnQgbXVzdCBiZSBtb3JlIHRoYW4gdGhpcy5cblx0XHRob3Jpem9udGFsRGlzdGFuY2VUaHJlc2hvbGQ6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID49IDIgPyAxNSA6IDMwLFxuXG5cdFx0Ly8gU3dpcGUgdmVydGljYWwgZGlzcGxhY2VtZW50IG11c3QgYmUgbGVzcyB0aGFuIHRoaXMuXG5cdFx0dmVydGljYWxEaXN0YW5jZVRocmVzaG9sZDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPj0gMiA/IDE1IDogMzAsXG5cblx0XHRnZXRMb2NhdGlvbjogZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHRcdHZhciB3aW5QYWdlWCA9IHdpbmRvdy5wYWdlWE9mZnNldCxcblx0XHRcdFx0d2luUGFnZVkgPSB3aW5kb3cucGFnZVlPZmZzZXQsXG5cdFx0XHRcdHggPSBldmVudC5jbGllbnRYLFxuXHRcdFx0XHR5ID0gZXZlbnQuY2xpZW50WTtcblxuXHRcdFx0aWYgKCBldmVudC5wYWdlWSA9PT0gMCAmJiBNYXRoLmZsb29yKCB5ICkgPiBNYXRoLmZsb29yKCBldmVudC5wYWdlWSApIHx8XG5cdFx0XHRcdGV2ZW50LnBhZ2VYID09PSAwICYmIE1hdGguZmxvb3IoIHggKSA+IE1hdGguZmxvb3IoIGV2ZW50LnBhZ2VYICkgKSB7XG5cblx0XHRcdFx0Ly8gaU9TNCBjbGllbnRYL2NsaWVudFkgaGF2ZSB0aGUgdmFsdWUgdGhhdCBzaG91bGQgaGF2ZSBiZWVuXG5cdFx0XHRcdC8vIGluIHBhZ2VYL3BhZ2VZLiBXaGlsZSBwYWdlWC9wYWdlLyBoYXZlIHRoZSB2YWx1ZSAwXG5cdFx0XHRcdHggPSB4IC0gd2luUGFnZVg7XG5cdFx0XHRcdHkgPSB5IC0gd2luUGFnZVk7XG5cdFx0XHR9IGVsc2UgaWYgKCB5IDwgKCBldmVudC5wYWdlWSAtIHdpblBhZ2VZKSB8fCB4IDwgKCBldmVudC5wYWdlWCAtIHdpblBhZ2VYICkgKSB7XG5cblx0XHRcdFx0Ly8gU29tZSBBbmRyb2lkIGJyb3dzZXJzIGhhdmUgdG90YWxseSBib2d1cyB2YWx1ZXMgZm9yIGNsaWVudFgvWVxuXHRcdFx0XHQvLyB3aGVuIHNjcm9sbGluZy96b29taW5nIGEgcGFnZS4gRGV0ZWN0YWJsZSBzaW5jZSBjbGllbnRYL2NsaWVudFlcblx0XHRcdFx0Ly8gc2hvdWxkIG5ldmVyIGJlIHNtYWxsZXIgdGhhbiBwYWdlWC9wYWdlWSBtaW51cyBwYWdlIHNjcm9sbFxuXHRcdFx0XHR4ID0gZXZlbnQucGFnZVggLSB3aW5QYWdlWDtcblx0XHRcdFx0eSA9IGV2ZW50LnBhZ2VZIC0gd2luUGFnZVk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IHgsXG5cdFx0XHRcdHk6IHlcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdHN0YXJ0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA/XG5cdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWyAwIF0gOiBldmVudCxcblx0XHRcdFx0bG9jYXRpb24gPSAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZ2V0TG9jYXRpb24oIGRhdGEgKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0aW1lOiAoIG5ldyBEYXRlKCkgKS5nZXRUaW1lKCksXG5cdFx0XHRcdFx0XHRjb29yZHM6IFsgbG9jYXRpb24ueCwgbG9jYXRpb24ueSBdLFxuXHRcdFx0XHRcdFx0b3JpZ2luOiAkKCBldmVudC50YXJnZXQgKVxuXHRcdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdHN0b3A6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciBkYXRhID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzID9cblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbIDAgXSA6IGV2ZW50LFxuXHRcdFx0XHRsb2NhdGlvbiA9ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5nZXRMb2NhdGlvbiggZGF0YSApO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWU6ICggbmV3IERhdGUoKSApLmdldFRpbWUoKSxcblx0XHRcdFx0XHRcdGNvb3JkczogWyBsb2NhdGlvbi54LCBsb2NhdGlvbi55IF1cblx0XHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRoYW5kbGVTd2lwZTogZnVuY3Rpb24oIHN0YXJ0LCBzdG9wLCB0aGlzT2JqZWN0LCBvcmlnVGFyZ2V0ICkge1xuXHRcdFx0aWYgKCBzdG9wLnRpbWUgLSBzdGFydC50aW1lIDwgJC5ldmVudC5zcGVjaWFsLnN3aXBlLmR1cmF0aW9uVGhyZXNob2xkICYmXG5cdFx0XHRcdE1hdGguYWJzKCBzdGFydC5jb29yZHNbIDAgXSAtIHN0b3AuY29vcmRzWyAwIF0gKSA+ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ob3Jpem9udGFsRGlzdGFuY2VUaHJlc2hvbGQgJiZcblx0XHRcdFx0TWF0aC5hYnMoIHN0YXJ0LmNvb3Jkc1sgMSBdIC0gc3RvcC5jb29yZHNbIDEgXSApIDwgJC5ldmVudC5zcGVjaWFsLnN3aXBlLnZlcnRpY2FsRGlzdGFuY2VUaHJlc2hvbGQgKSB7XG5cdFx0XHRcdHZhciBkaXJlY3Rpb24gPSBzdGFydC5jb29yZHNbMF0gPiBzdG9wLmNvb3Jkc1sgMCBdID8gXCJzd2lwZWxlZnRcIiA6IFwic3dpcGVyaWdodFwiO1xuXG5cdFx0XHRcdHRyaWdnZXJDdXN0b21FdmVudCggdGhpc09iamVjdCwgXCJzd2lwZVwiLCAkLkV2ZW50KCBcInN3aXBlXCIsIHsgdGFyZ2V0OiBvcmlnVGFyZ2V0LCBzd2lwZXN0YXJ0OiBzdGFydCwgc3dpcGVzdG9wOiBzdG9wIH0pLCB0cnVlICk7XG5cdFx0XHRcdHRyaWdnZXJDdXN0b21FdmVudCggdGhpc09iamVjdCwgZGlyZWN0aW9uLCQuRXZlbnQoIGRpcmVjdGlvbiwgeyB0YXJnZXQ6IG9yaWdUYXJnZXQsIHN3aXBlc3RhcnQ6IHN0YXJ0LCBzd2lwZXN0b3A6IHN0b3AgfSApLCB0cnVlICk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fSxcblxuXHRcdC8vIFRoaXMgc2VydmVzIGFzIGEgZmxhZyB0byBlbnN1cmUgdGhhdCBhdCBtb3N0IG9uZSBzd2lwZSBldmVudCBldmVudCBpc1xuXHRcdC8vIGluIHdvcmsgYXQgYW55IGdpdmVuIHRpbWVcblx0XHRldmVudEluUHJvZ3Jlc3M6IGZhbHNlLFxuXG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGV2ZW50cyxcblx0XHRcdFx0dGhpc09iamVjdCA9IHRoaXMsXG5cdFx0XHRcdCR0aGlzID0gJCggdGhpc09iamVjdCApLFxuXHRcdFx0XHRjb250ZXh0ID0ge307XG5cblx0XHRcdC8vIFJldHJpZXZlIHRoZSBldmVudHMgZGF0YSBmb3IgdGhpcyBlbGVtZW50IGFuZCBhZGQgdGhlIHN3aXBlIGNvbnRleHRcblx0XHRcdGV2ZW50cyA9ICQuZGF0YSggdGhpcywgXCJtb2JpbGUtZXZlbnRzXCIgKTtcblx0XHRcdGlmICggIWV2ZW50cyApIHtcblx0XHRcdFx0ZXZlbnRzID0geyBsZW5ndGg6IDAgfTtcblx0XHRcdFx0JC5kYXRhKCB0aGlzLCBcIm1vYmlsZS1ldmVudHNcIiwgZXZlbnRzICk7XG5cdFx0XHR9XG5cdFx0XHRldmVudHMubGVuZ3RoKys7XG5cdFx0XHRldmVudHMuc3dpcGUgPSBjb250ZXh0O1xuXG5cdFx0XHRjb250ZXh0LnN0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIEJhaWwgaWYgd2UncmUgYWxyZWFkeSB3b3JraW5nIG9uIGEgc3dpcGUgZXZlbnRcblx0XHRcdFx0aWYgKCAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZXZlbnRJblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZXZlbnRJblByb2dyZXNzID0gdHJ1ZTtcblxuXHRcdFx0XHR2YXIgc3RvcCxcblx0XHRcdFx0XHRzdGFydCA9ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5zdGFydCggZXZlbnQgKSxcblx0XHRcdFx0XHRvcmlnVGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuXHRcdFx0XHRcdGVtaXR0ZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRjb250ZXh0Lm1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdFx0aWYgKCAhc3RhcnQgfHwgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3RvcCA9ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5zdG9wKCBldmVudCApO1xuXHRcdFx0XHRcdGlmICggIWVtaXR0ZWQgKSB7XG5cdFx0XHRcdFx0XHRlbWl0dGVkID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLmhhbmRsZVN3aXBlKCBzdGFydCwgc3RvcCwgdGhpc09iamVjdCwgb3JpZ1RhcmdldCApO1xuXHRcdFx0XHRcdFx0aWYgKCBlbWl0dGVkICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IHRoZSBjb250ZXh0IHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV4dCBzd2lwZSBldmVudFxuXHRcdFx0XHRcdFx0XHQkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZXZlbnRJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHByZXZlbnQgc2Nyb2xsaW5nXG5cdFx0XHRcdFx0aWYgKCBNYXRoLmFicyggc3RhcnQuY29vcmRzWyAwIF0gLSBzdG9wLmNvb3Jkc1sgMCBdICkgPiAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuc2Nyb2xsU3VwcmVzc2lvblRocmVzaG9sZCApIHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGNvbnRleHQuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0ZW1pdHRlZCA9IHRydWU7XG5cblx0XHRcdFx0XHRcdC8vIFJlc2V0IHRoZSBjb250ZXh0IHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV4dCBzd2lwZSBldmVudFxuXHRcdFx0XHRcdFx0JC5ldmVudC5zcGVjaWFsLnN3aXBlLmV2ZW50SW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0JGRvY3VtZW50Lm9mZiggdG91Y2hNb3ZlRXZlbnQsIGNvbnRleHQubW92ZSApO1xuXHRcdFx0XHRcdFx0Y29udGV4dC5tb3ZlID0gbnVsbDtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQkZG9jdW1lbnQub24oIHRvdWNoTW92ZUV2ZW50LCBjb250ZXh0Lm1vdmUgKVxuXHRcdFx0XHRcdC5vbmUoIHRvdWNoU3RvcEV2ZW50LCBjb250ZXh0LnN0b3AgKTtcblx0XHRcdH07XG5cdFx0XHQkdGhpcy5vbiggdG91Y2hTdGFydEV2ZW50LCBjb250ZXh0LnN0YXJ0ICk7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBldmVudHMsIGNvbnRleHQ7XG5cblx0XHRcdGV2ZW50cyA9ICQuZGF0YSggdGhpcywgXCJtb2JpbGUtZXZlbnRzXCIgKTtcblx0XHRcdGlmICggZXZlbnRzICkge1xuXHRcdFx0XHRjb250ZXh0ID0gZXZlbnRzLnN3aXBlO1xuXHRcdFx0XHRkZWxldGUgZXZlbnRzLnN3aXBlO1xuXHRcdFx0XHRldmVudHMubGVuZ3RoLS07XG5cdFx0XHRcdGlmICggZXZlbnRzLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0XHQkLnJlbW92ZURhdGEoIHRoaXMsIFwibW9iaWxlLWV2ZW50c1wiICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBjb250ZXh0ICkge1xuXHRcdFx0XHRpZiAoIGNvbnRleHQuc3RhcnQgKSB7XG5cdFx0XHRcdFx0JCggdGhpcyApLm9mZiggdG91Y2hTdGFydEV2ZW50LCBjb250ZXh0LnN0YXJ0ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBjb250ZXh0Lm1vdmUgKSB7XG5cdFx0XHRcdFx0JGRvY3VtZW50Lm9mZiggdG91Y2hNb3ZlRXZlbnQsIGNvbnRleHQubW92ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggY29udGV4dC5zdG9wICkge1xuXHRcdFx0XHRcdCRkb2N1bWVudC5vZmYoIHRvdWNoU3RvcEV2ZW50LCBjb250ZXh0LnN0b3AgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0JC5lYWNoKHtcblx0XHRzd2lwZWxlZnQ6IFwic3dpcGUubGVmdFwiLFxuXHRcdHN3aXBlcmlnaHQ6IFwic3dpcGUucmlnaHRcIlxuXHR9LCBmdW5jdGlvbiggZXZlbnQsIHNvdXJjZUV2ZW50ICkge1xuXG5cdFx0JC5ldmVudC5zcGVjaWFsWyBldmVudCBdID0ge1xuXHRcdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCB0aGlzICkuYmluZCggc291cmNlRXZlbnQsICQubm9vcCApO1xuXHRcdFx0fSxcblx0XHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCggdGhpcyApLnVuYmluZCggc291cmNlRXZlbnQgKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcbn0pKCBqUXVlcnksIHRoaXMgKTtcbiovXG4iLCIndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbmNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ZXMgPSBbJ1dlYktpdCcsICdNb3onLCAnTycsICdNcycsICcnXTtcbiAgZm9yICh2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmAgaW4gd2luZG93KSB7XG4gICAgICByZXR1cm4gd2luZG93W2Ake3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSgpKTtcblxuY29uc3QgdHJpZ2dlcnMgPSAoZWwsIHR5cGUpID0+IHtcbiAgZWwuZGF0YSh0eXBlKS5zcGxpdCgnICcpLmZvckVhY2goaWQgPT4ge1xuICAgICQoYCMke2lkfWApWyB0eXBlID09PSAnY2xvc2UnID8gJ3RyaWdnZXInIDogJ3RyaWdnZXJIYW5kbGVyJ10oYCR7dHlwZX0uemYudHJpZ2dlcmAsIFtlbF0pO1xuICB9KTtcbn07XG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLW9wZW5dIHdpbGwgcmV2ZWFsIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuJChkb2N1bWVudCkub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtb3Blbl0nLCBmdW5jdGlvbigpIHtcbiAgdHJpZ2dlcnMoJCh0aGlzKSwgJ29wZW4nKTtcbn0pO1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NlXSB3aWxsIGNsb3NlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuLy8gSWYgdXNlZCB3aXRob3V0IGEgdmFsdWUgb24gW2RhdGEtY2xvc2VdLCB0aGUgZXZlbnQgd2lsbCBidWJibGUsIGFsbG93aW5nIGl0IHRvIGNsb3NlIGEgcGFyZW50IGNvbXBvbmVudC5cbiQoZG9jdW1lbnQpLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlXScsIGZ1bmN0aW9uKCkge1xuICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gIGlmIChpZCkge1xuICAgIHRyaWdnZXJzKCQodGhpcyksICdjbG9zZScpO1xuICB9XG4gIGVsc2Uge1xuICAgICQodGhpcykudHJpZ2dlcignY2xvc2UuemYudHJpZ2dlcicpO1xuICB9XG59KTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGVdIHdpbGwgdG9nZ2xlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuJChkb2N1bWVudCkub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlXScsIGZ1bmN0aW9uKCkge1xuICB0cmlnZ2VycygkKHRoaXMpLCAndG9nZ2xlJyk7XG59KTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuJChkb2N1bWVudCkub24oJ2Nsb3NlLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2FibGVdJywgZnVuY3Rpb24oZSl7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGxldCBhbmltYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2Nsb3NhYmxlJyk7XG5cbiAgaWYoYW5pbWF0aW9uICE9PSAnJyl7XG4gICAgRm91bmRhdGlvbi5Nb3Rpb24uYW5pbWF0ZU91dCgkKHRoaXMpLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICB9KTtcbiAgfWVsc2V7XG4gICAgJCh0aGlzKS5mYWRlT3V0KCkudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlLWZvY3VzXScsIGZ1bmN0aW9uKCkge1xuICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZS1mb2N1cycpO1xuICAkKGAjJHtpZH1gKS50cmlnZ2VySGFuZGxlcigndG9nZ2xlLnpmLnRyaWdnZXInLCBbJCh0aGlzKV0pO1xufSk7XG5cbi8qKlxuKiBGaXJlcyBvbmNlIGFmdGVyIGFsbCBvdGhlciBzY3JpcHRzIGhhdmUgbG9hZGVkXG4qIEBmdW5jdGlvblxuKiBAcHJpdmF0ZVxuKi9cbiQod2luZG93KS5sb2FkKCgpID0+IHtcbiAgY2hlY2tMaXN0ZW5lcnMoKTtcbn0pO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVycygpIHtcbiAgZXZlbnRzTGlzdGVuZXIoKTtcbiAgcmVzaXplTGlzdGVuZXIoKTtcbiAgc2Nyb2xsTGlzdGVuZXIoKTtcbiAgY2xvc2VtZUxpc3RlbmVyKCk7XG59XG5cbi8vKioqKioqKiogb25seSBmaXJlcyB0aGlzIGZ1bmN0aW9uIG9uY2Ugb24gbG9hZCwgaWYgdGhlcmUncyBzb21ldGhpbmcgdG8gd2F0Y2ggKioqKioqKipcbmZ1bmN0aW9uIGNsb3NlbWVMaXN0ZW5lcihwbHVnaW5OYW1lKSB7XG4gIHZhciB5ZXRpQm94ZXMgPSAkKCdbZGF0YS15ZXRpLWJveF0nKSxcbiAgICAgIHBsdWdOYW1lcyA9IFsnZHJvcGRvd24nLCAndG9vbHRpcCcsICdyZXZlYWwnXTtcblxuICBpZihwbHVnaW5OYW1lKXtcbiAgICBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLnB1c2gocGx1Z2luTmFtZSk7XG4gICAgfWVsc2UgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgfVxuICBpZih5ZXRpQm94ZXMubGVuZ3RoKXtcbiAgICBsZXQgbGlzdGVuZXJzID0gcGx1Z05hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGBjbG9zZW1lLnpmLiR7bmFtZX1gO1xuICAgIH0pLmpvaW4oJyAnKTtcblxuICAgICQod2luZG93KS5vZmYobGlzdGVuZXJzKS5vbihsaXN0ZW5lcnMsIGZ1bmN0aW9uKGUsIHBsdWdpbklkKXtcbiAgICAgIGxldCBwbHVnaW4gPSBlLm5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgICAgbGV0IHBsdWdpbnMgPSAkKGBbZGF0YS0ke3BsdWdpbn1dYCkubm90KGBbZGF0YS15ZXRpLWJveD1cIiR7cGx1Z2luSWR9XCJdYCk7XG5cbiAgICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgIF90aGlzLnRyaWdnZXJIYW5kbGVyKCdjbG9zZS56Zi50cmlnZ2VyJywgW190aGlzXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNpemVMaXN0ZW5lcihkZWJvdW5jZSl7XG4gIGxldCB0aW1lcixcbiAgICAgICRub2RlcyA9ICQoJ1tkYXRhLXJlc2l6ZV0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnpmLnRyaWdnZXInKVxuICAgIC5vbigncmVzaXplLnpmLnRyaWdnZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblxuICAgICAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHJlc2l6ZSBldmVudFxuICAgICAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHJlc2l6ZSBldmVudFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNjcm9sbExpc3RlbmVyKGRlYm91bmNlKXtcbiAgbGV0IHRpbWVyLFxuICAgICAgJG5vZGVzID0gJCgnW2RhdGEtc2Nyb2xsXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuemYudHJpZ2dlcicpXG4gICAgLm9uKCdzY3JvbGwuemYudHJpZ2dlcicsIGZ1bmN0aW9uKGUpe1xuICAgICAgaWYodGltZXIpeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgc2Nyb2xsIGV2ZW50XG4gICAgICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICAgICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRzTGlzdGVuZXIoKSB7XG4gIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsgcmV0dXJuIGZhbHNlOyB9XG4gIGxldCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJlc2l6ZV0sIFtkYXRhLXNjcm9sbF0sIFtkYXRhLW11dGF0ZV0nKTtcblxuICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgdmFyIGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24gPSBmdW5jdGlvbihtdXRhdGlvblJlY29yZHNMaXN0KSB7XG4gICAgdmFyICR0YXJnZXQgPSAkKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udGFyZ2V0KTtcbiAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgc3dpdGNoICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSkge1xuXG4gICAgICBjYXNlIFwicmVzaXplXCIgOlxuICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0XSk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInNjcm9sbFwiIDpcbiAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInLCBbJHRhcmdldCwgd2luZG93LnBhZ2VZT2Zmc2V0XSk7XG4gICAgICBicmVhaztcblxuICAgICAgLy8gY2FzZSBcIm11dGF0ZVwiIDpcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdtdXRhdGUnLCAkdGFyZ2V0KTtcbiAgICAgIC8vICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ211dGF0ZS56Zi50cmlnZ2VyJyk7XG4gICAgICAvL1xuICAgICAgLy8gLy9tYWtlIHN1cmUgd2UgZG9uJ3QgZ2V0IHN0dWNrIGluIGFuIGluZmluaXRlIGxvb3AgZnJvbSBzbG9wcHkgY29kZWluZ1xuICAgICAgLy8gaWYgKCR0YXJnZXQuaW5kZXgoJ1tkYXRhLW11dGF0ZV0nKSA9PSAkKFwiW2RhdGEtbXV0YXRlXVwiKS5sZW5ndGgtMSkge1xuICAgICAgLy8gICBkb21NdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAvLyB9XG4gICAgICAvLyBicmVhaztcblxuICAgICAgZGVmYXVsdCA6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL25vdGhpbmdcbiAgICB9XG4gIH1cblxuICBpZihub2Rlcy5sZW5ndGgpe1xuICAgIC8vZm9yIGVhY2ggZWxlbWVudCB0aGF0IG5lZWRzIHRvIGxpc3RlbiBmb3IgcmVzaXppbmcsIHNjcm9sbGluZywgKG9yIGNvbWluZyBzb29uIG11dGF0aW9uKSBhZGQgYSBzaW5nbGUgb2JzZXJ2ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBub2Rlcy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbik7XG4gICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IGZhbHNlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTpmYWxzZSwgYXR0cmlidXRlRmlsdGVyOltcImRhdGEtZXZlbnRzXCJdfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBbUEhdXG4vLyBGb3VuZGF0aW9uLkNoZWNrV2F0Y2hlcnMgPSBjaGVja1dhdGNoZXJzO1xuRm91bmRhdGlvbi5JSGVhcllvdSA9IGNoZWNrTGlzdGVuZXJzO1xuLy8gRm91bmRhdGlvbi5JU2VlWW91ID0gc2Nyb2xsTGlzdGVuZXI7XG4vLyBGb3VuZGF0aW9uLklGZWVsWW91ID0gY2xvc2VtZUxpc3RlbmVyO1xuXG59KGpRdWVyeSk7XG5cbi8vIGZ1bmN0aW9uIGRvbU11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2UpIHtcbi8vICAgLy8gISEhIFRoaXMgaXMgY29taW5nIHNvb24gYW5kIG5lZWRzIG1vcmUgd29yazsgbm90IGFjdGl2ZSAgISEhIC8vXG4vLyAgIHZhciB0aW1lcixcbi8vICAgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tdXRhdGVdJyk7XG4vLyAgIC8vXG4vLyAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbi8vICAgICAvLyB2YXIgTXV0YXRpb25PYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgLy8gICB2YXIgcHJlZml4ZXMgPSBbJ1dlYktpdCcsICdNb3onLCAnTycsICdNcycsICcnXTtcbi8vICAgICAvLyAgIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gICAgIGlmIChwcmVmaXhlc1tpXSArICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbi8vICAgICAvLyAgICAgICByZXR1cm4gd2luZG93W3ByZWZpeGVzW2ldICsgJ011dGF0aW9uT2JzZXJ2ZXInXTtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfVxuLy8gICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIC8vIH0oKSk7XG4vL1xuLy9cbi8vICAgICAvL2ZvciB0aGUgYm9keSwgd2UgbmVlZCB0byBsaXN0ZW4gZm9yIGFsbCBjaGFuZ2VzIGVmZmVjdGluZyB0aGUgc3R5bGUgYW5kIGNsYXNzIGF0dHJpYnV0ZXNcbi8vICAgICB2YXIgYm9keU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoYm9keU11dGF0aW9uKTtcbi8vICAgICBib2R5T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6dHJ1ZSwgYXR0cmlidXRlRmlsdGVyOltcInN0eWxlXCIsIFwiY2xhc3NcIl19KTtcbi8vXG4vL1xuLy8gICAgIC8vYm9keSBjYWxsYmFja1xuLy8gICAgIGZ1bmN0aW9uIGJvZHlNdXRhdGlvbihtdXRhdGUpIHtcbi8vICAgICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSBtdXRhdGlvbiBldmVudFxuLy8gICAgICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cbi8vXG4vLyAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGJvZHlPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4vLyAgICAgICAgICQoJ1tkYXRhLW11dGF0ZV0nKS5hdHRyKCdkYXRhLWV2ZW50cycsXCJtdXRhdGVcIik7XG4vLyAgICAgICB9LCBkZWJvdW5jZSB8fCAxNTApO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuIiwialF1ZXJ5KGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG5cbnZhclx0aXNNb2JpbGUgPSAoL2lwaG9uZXxpcG9kfGFuZHJvaWR8YmxhY2tiZXJyeXxvcGVyYXxtaW5pfHdpbmRvd3NcXHNjZXxwYWxtfHNtYXJ0cGhvbmV8aWVtb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpLFxuXHRpc1RhYmxldCA9ICgvaXBhZHxhbmRyb2lkfGFuZHJvaWQgMy4wfHhvb218c2NoLWk4MDB8cGxheWJvb2t8dGFibGV0fGtpbmRsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSksXG4gICAgeXRfdmlkZW8xID0gXCJHSHlUMU9qSGpVQVwiLFxuICAgIHl0X3ZpZGVvMiA9IFwiWHVIMUZYTkdIeU1cIixcbiAgICBcbiAgICBzaXRlID0ge1xuXG5cdGluaXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI3BhcnRpY2lwZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSggeyBzY3JvbGxUb3A6ICQoJyNkb24nKS5vZmZzZXQoKS50b3B9LCAzMDAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5tb3JlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5mdWxsJykuc2hvdygpO1xuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy9cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSggc2l0ZS5yZXNpemUgKTtcbiAgICAgICAgc2l0ZS5yZXNpemUoKTtcbiAgICAgICAgc2l0ZS5hbmltYXRlLmluaXQoKTtcbiAgICAgICAgLy9cbiAgICAgICAgJCgnI3NlZUludHJvJykuZGVsYXkoMTIwMCkucXVldWUoZnVuY3Rpb24oKXskKHRoaXMpLmFkZENsYXNzKCdkb25lJyl9KTtcbiAgICAgICAgLy9WSURFT1xuICAgICAgICAgICAgJCgnI3NlZUludHJvJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBCVl9pICAgID0gJCgnI3ZpZGVvLWludHJvJykuZGF0YSgndmlkZScpO1xuICAgICAgICAgICAgICAgIEJWICAgICAgPSBCVl9pLmdldFZpZGVvT2JqZWN0KCk7XG4gICAgICAgICAgICAgICAgQlYucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBzaXRlLnZpZGVvLnNob3coeXRfdmlkZW8xKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnI3NlZU1pbnV0ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2l0ZS52aWRlby5zaG93KHl0X3ZpZGVvMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJyN5dC1jbG9zZSwgI3l0LS1jbG9zZS1idG4nKS5jbGljayggc2l0ZS52aWRlby5oaWRlICk7XG4gICAgICAgICAgICAvL3NpdGUudmlkZW8uc2hvdyh5dF92aWRlbzEpO1xuXHR9LFxuICAgICAgICBcbiAgICB2aWRlbyA6IHtcbiAgICAgICAgc2hvdyA6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hhcy1wb3BpbicpO1xuICAgICAgICAgICAgJCgnI3BvcGluJykuc2hvdygpLmZhZGVUbygyMDAsIDEpO1xuICAgICAgICAgICAgJCgnI3l0JykuYXR0cignc3JjJywgJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycraWQrJz9hdXRvcGxheT10cnVlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyNwb3BpbicpLmZhZGVUbygzMDAsIDAsIHNpdGUudmlkZW8ucmVtb3ZlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjeXQnKS5hdHRyKCdzcmMnLCAnJyk7XG4gICAgICAgICAgICAkKCcjcG9waW4nKS5jc3MoJ29wYWNpdHknLDApLmhpZGUoKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGFzLXBvcGluJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHJlc2l6ZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHJldHVybjtcbiAgICAgICAgJCgnI2ludHJvJykuY3NzKCdoZWlnaHQnLCAkKHdpbmRvdykuaGVpZ2h0KCkpO1xuICAgIH0sXG5cbiAgICBhbmltYXRlIDoge1xuICAgICAgICBpbml0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbFRvQW5pbWF0ZSA9ICQoJy5hbmltYXRlJyk7XG4gICAgICAgICAgICAkd2luZG93ID0gJCh3aW5kb3cpO1xuICAgICAgICAgICAgJHdpbmRvdy5vbignc2Nyb2xsIHJlc2l6ZScsIHNpdGUuYW5pbWF0ZS51cGRhdGUpO1xuICAgICAgICAgICAgJHdpbmRvdy50cmlnZ2VyKCdzY3JvbGwnKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB3aW5kb3dIZWlnaHQgICAgICAgICAgICA9ICR3aW5kb3cuaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgd2luZG93VG9wUG9zaXRpb24gICAgICAgPSAkd2luZG93LnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgIHdpbmRvd0JvdHRvbVBvc2l0aW9uICAgID0gKHdpbmRvd1RvcFBvc2l0aW9uICsgd2luZG93SGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBhY3RpdmVEZWxheSAgICAgICAgICAgICA9IDAuMjU7XG5cbiAgICAgICAgICAgICQuZWFjaChlbFRvQW5pbWF0ZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsICAgICAgICAgICAgICAgICAgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBlbEhlaWdodCAgICAgICAgICAgID0gZWwub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICAgICAgZWxUb3BQb3NpdGlvbiAgICAgICA9IGVsLm9mZnNldCgpLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgZWxCb3R0b21Qb3NpdGlvbiAgICA9IChlbFRvcFBvc2l0aW9uICsgZWxIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvL2lmICgoZWxCb3R0b21Qb3NpdGlvbiA+PSB3aW5kb3dUb3BQb3NpdGlvbikgJiZcbiAgICAgICAgICAgICAgICBpZiAoKGVsVG9wUG9zaXRpb24gPD0gd2luZG93Qm90dG9tUG9zaXRpb24td2luZG93SGVpZ2h0KmFjdGl2ZURlbGF5KSkgZWwuYWRkQ2xhc3MoJ2RvbmUnKTtcbi8vICAgICAgICAgICAgICAgIGVsc2UgZWwucmVtb3ZlQ2xhc3MoJ2RvbmUnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuXG5cbn07XG5cbiQoZnVuY3Rpb24oKSB7XG5cdHNpdGUuaW5pdCgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
