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
        $('#go-role').click(function () {
            $('html, body').animate({ scrollTop: $('#role').offset().top }, 300);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJqcXVlcnkudmlkZS5qcyIsImZvdW5kYXRpb24uY29yZS5qcyIsImZvdW5kYXRpb24udXRpbC5ib3guanMiLCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQuanMiLCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsImZvdW5kYXRpb24udXRpbC5tb3Rpb24uanMiLCJmb3VuZGF0aW9uLnV0aWwubmVzdC5qcyIsImZvdW5kYXRpb24udXRpbC50aW1lckFuZEltYWdlTG9hZGVyLmpzIiwiZm91bmRhdGlvbi51dGlsLnRvdWNoLmpzIiwiZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwiaW5pdC1mb3VuZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGNBQVUsT0FBTyxNQUFQLElBQWUsWUFBVSxPQUFPLE9BQU8sT0FBUCxHQUFlLE9BQU8sT0FBUCxHQUFlLEVBQUUsUUFBRixHQUFXLEVBQUUsQ0FBRixFQUFJLENBQUMsQ0FBRCxDQUFmLEdBQW1CLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRyxDQUFDLEVBQUUsUUFBRixFQUFXLE1BQU0sSUFBSSxLQUFKLENBQVUsMENBQVYsQ0FBTixDQUFmLE9BQWtGLEVBQUUsQ0FBRixDQUFQLENBQTVFO0dBQVgsR0FBb0csRUFBRSxDQUFGLENBQS9MLENBQUQ7Q0FBYixDQUFtTixlQUFhLE9BQU8sTUFBUCxHQUFjLE1BQTNCLEdBQWtDLElBQWxDLEVBQXVDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUksSUFBRSxFQUFGO01BQUssSUFBRSxFQUFFLFFBQUY7TUFBVyxJQUFFLEVBQUUsS0FBRjtNQUFRLElBQUUsRUFBRSxNQUFGO01BQVMsSUFBRSxFQUFFLElBQUY7TUFBTyxJQUFFLEVBQUUsT0FBRjtNQUFVLElBQUUsRUFBRjtNQUFLLElBQUUsRUFBRSxRQUFGO01BQVcsSUFBRSxF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QUFiLEVBQTJCLEdBQUcsUUFBSCxDQUFZLE1BQVosRUFBdEU7O2FBTmdCLENBQXBCLENBTmdCO0FBTWUsU0FOMUI7S0FSYjs7Q0F2REE7O0FBc0ZKLEVBQUUsWUFBVztBQUNaLFNBQUssSUFBTCxHQURZO0NBQVgsQ0FBRiIsImZpbGUiOiJwbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjIuMi4xIHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1jLnNsaWNlLGY9Yy5jb25jYXQsZz1jLnB1c2gsaD1jLmluZGV4T2YsaT17fSxqPWkudG9TdHJpbmcsaz1pLmhhc093blByb3BlcnR5LGw9e30sbT1cIjIuMi4xXCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTplLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiBuLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6Zyxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRvU3RyaW5nKCk7cmV0dXJuIW4uaXNBcnJheShhKSYmYi1wYXJzZUZsb2F0KGIpKzE+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKT8hMTphLmNvbnN0cnVjdG9yJiYhay5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKT8hMTohMH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9pW2ouY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1kLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsZC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHMoYSkpe2ZvcihjPWEubGVuZ3RoO2M+ZDtkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zy5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmguY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGc9MCxoPVtdO2lmKHMoYSkpZm9yKGQ9YS5sZW5ndGg7ZD5nO2crKyllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihnIGluIGEpZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGYuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGQ9ZS5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChlLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpsfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYobi5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtpW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9Z2EoKSx6PWdhKCksQT1nYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitNK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixPPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitOK1wiKSopfC4qKVxcXFwpfClcIixQPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFU9bmV3IFJlZ0V4cChPKSxWPW5ldyBSZWdFeHAoXCJeXCIrTStcIiRcIiksVz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00rXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxYPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWT0vXmhcXGQkL2ksWj0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLCQ9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXz0vWyt+XS8sYWE9Lyd8XFxcXC9nLGJhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGRhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZmEoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3PWImJmIub3duZXJEb2N1bWVudCx4PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09eCYmOSE9PXgmJjExIT09eClyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXgmJihvPSQuZXhlYyhhKSkpaWYoZj1vWzFdKXtpZig5PT09eCl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHcmJihqPXcuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKG9bMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPW9bM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT14KXc9YixzPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShhYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxyPWcoYSksaD1yLmxlbmd0aCxsPVYudGVzdChrKT9cIiNcIitrOlwiW2lkPSdcIitrK1wiJ11cIjt3aGlsZShoLS0pcltoXT1sK1wiIFwiK3FhKHJbaF0pO3M9ci5qb2luKFwiLFwiKSx3PV8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8Yn1pZihzKXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbChzKSksZH1jYXRjaCh5KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShRLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBpYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBoYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixoYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG9hKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWZhLnN1cHBvcnQ9e30sZj1mYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWZhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLChlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1aLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT1aLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihpYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGlhKGZ1bmN0aW9uKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9Wi50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZpYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTyl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1aLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxaLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGthKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9rYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZmEubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBmYShhLG51bGwsbnVsbCxiKX0sZmEubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFQsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBmYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxmYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGZhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxmYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZmEudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWZhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9ZmEuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aGEsbWF0Y2g6VyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShiYSxjYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShiYSxjYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8ZmEuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZmEuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFcuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZVLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZmEuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShQLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aGEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aGEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFEsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aGEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczpoYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGZhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGJhLGNhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzpoYShmdW5jdGlvbihhKXtyZXR1cm4gVi50ZXN0KGF8fFwiXCIpfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpuYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6bmEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm5hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1sYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmdW5jdGlvbiBwYSgpe31wYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHBhLGc9ZmEudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXsoIWN8fChlPVIuZXhlYyhoKSkpJiYoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1TLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFEsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVdbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9mYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHFhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiByYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGosaz1bdyxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGo9Ylt1XXx8KGJbdV09e30pLGk9altiLnVuaXF1ZUlEXXx8KGpbYi51bmlxdWVJRF09e30pLChoPWlbZF0pJiZoWzBdPT09dyYmaFsxXT09PWYpcmV0dXJuIGtbMl09aFsyXTtpZihpW2RdPWssa1syXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHNhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHRhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZmEoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHVhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJighY3x8YyhmLGQsZSkpJiYoZy5wdXNoKGYpLGomJmIucHVzaChoKSk7cmV0dXJuIGd9ZnVuY3Rpb24gdmEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9dmEoZCkpLGUmJiFlW3VdJiYoZT12YShlLGYpKSxoYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx0YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnVhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj11YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SihmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9dWEocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkguYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHdhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz1yYShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIEooYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2Y+aTtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bcmEoc2EobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHZhKGk+MSYmc2EobSksaT4xJiZxYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFEsXCIkMVwiKSxjLGU+aSYmd2EoYS5zbGljZShpLGUpKSxmPmUmJndhKGE9YS5zbGljZShlKSksZj5lJiZxYShhKSl9bS5wdXNoKGMpfXJldHVybiBzYShtKX1mdW5jdGlvbiB4YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109Ri5jYWxsKGkpKTt1PXVhKHUpfUguYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZmYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aGEoZik6Zn1yZXR1cm4gaD1mYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj13YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEseGEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWZhLnNlbGVjdD1mdW5jdGlvbihhLGIsZSxmKXt2YXIgaSxqLGssbCxtLG49XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxvPSFmJiZnKGE9bi5zZWxlY3Rvcnx8YSk7aWYoZT1lfHxbXSwxPT09by5sZW5ndGgpe2lmKGo9b1swXT1vWzBdLnNsaWNlKDApLGoubGVuZ3RoPjImJlwiSURcIj09PShrPWpbMF0pLnR5cGUmJmMuZ2V0QnlJZCYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbalsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxiKXx8W10pWzBdLCFiKXJldHVybiBlO24mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGouc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Vy5uZWVkc0NvbnRleHQudGVzdChhKT8wOmoubGVuZ3RoO3doaWxlKGktLSl7aWYoaz1qW2ldLGQucmVsYXRpdmVbbD1rLnR5cGVdKWJyZWFrO2lmKChtPWQuZmluZFtsXSkmJihmPW0oay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLF8udGVzdChqWzBdLnR5cGUpJiZvYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmcWEoaiksIWEpcmV0dXJuIEguYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsIWJ8fF8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1pYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxqYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGphKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxqYShLLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxmYX0oYSk7bi5maW5kPXQsbi5leHByPXQuc2VsZWN0b3JzLG4uZXhwcltcIjpcIl09bi5leHByLnBzZXVkb3Msbi51bmlxdWVTb3J0PW4udW5pcXVlPXQudW5pcXVlU29ydCxuLnRleHQ9dC5nZXRUZXh0LG4uaXNYTUxEb2M9dC5pc1hNTCxuLmNvbnRhaW5zPXQuY29udGFpbnM7dmFyIHU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx2PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSx3PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQseD0vXjwoW1xcdy1dKylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8seT0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24geihhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHkudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGguY2FsbChiLGEpPi0xIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXoodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdy50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgQSxCPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEM9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8QSxcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpCLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLHgudGVzdChlWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiZmLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZiksdGhpcy5jb250ZXh0PWQsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/dm9pZCAwIT09Yy5yZWFkeT9jLnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0MucHJvdG90eXBlPW4uZm4sQT1uKGQpO3ZhciBEPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEU9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz13LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2guY2FsbChuKGEpLHRoaXNbMF0pOmguY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWVTb3J0KG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEYoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHYoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB2KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEVbYV18fG4udW5pcXVlU29ydChlKSxELnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRz0vXFxTKy9nO2Z1bmN0aW9uIEgoYSl7dmFyIGI9e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEcpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/SChhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe24uaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PW4udHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxoPj1jJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGN8fChmPWM9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan0sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYy5ub3RpZnkpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZS5jYWxsKGFyZ3VtZW50cyksZD1jLmxlbmd0aCxmPTEhPT1kfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9kOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2UuY2FsbChhcmd1bWVudHMpOmQsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihkPjEpZm9yKGk9bmV3IEFycmF5KGQpLGo9bmV3IEFycmF5KGQpLGs9bmV3IEFycmF5KGQpO2Q+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkucHJvZ3Jlc3MoaChiLGosaSkpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBJO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChJLnJlc29sdmVXaXRoKGQsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihkKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4oZCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSigpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSiksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gSXx8KEk9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQobi5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSikpKSxJLnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBLPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKUsoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sTD1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIE0oKXt0aGlzLmV4cGFuZG89bi5leHBhbmRvK00udWlkKyt9TS51aWQ9MSxNLnByb3RvdHlwZT17cmVnaXN0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHx7fTtyZXR1cm4gYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YzpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmMsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksYVt0aGlzLmV4cGFuZG9dfSxjYWNoZTpmdW5jdGlvbihhKXtpZighTChhKSlyZXR1cm57fTt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIGJ8fChiPXt9LEwoYSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1iOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSkpLGJ9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmNhY2hlKGEpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWVbYl09YztlbHNlIGZvcihkIGluIGIpZVtkXT1iW2RdO3JldHVybiBlfSxnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdm9pZCAwPT09Yj90aGlzLmNhY2hlKGEpOmFbdGhpcy5leHBhbmRvXSYmYVt0aGlzLmV4cGFuZG9dW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG4uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWFbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1mKXtpZih2b2lkIDA9PT1iKXRoaXMucmVnaXN0ZXIoYSk7ZWxzZXtuLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChuLmNhbWVsQ2FzZSkpOihlPW4uY2FtZWxDYXNlKGIpLGIgaW4gZj9kPVtiLGVdOihkPWUsZD1kIGluIGY/W2RdOmQubWF0Y2goRyl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGZbZFtjXV19KHZvaWQgMD09PWJ8fG4uaXNFbXB0eU9iamVjdChmKSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGFbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09YiYmIW4uaXNFbXB0eU9iamVjdChiKX19O3ZhciBOPW5ldyBNLE89bmV3IE0sUD0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sUT0vW0EtWl0vZztmdW5jdGlvbiBSKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoUSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOlAudGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31PLnNldChhLGIsYyk7XG59ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gTy5oYXNEYXRhKGEpfHxOLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBPLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtPLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE4uYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtOLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9Ty5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFOLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUihmLGQsZVtkXSkpKTtOLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe08uc2V0KHRoaXMsYSl9KTpLKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZDtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPU8uZ2V0KGYsYSl8fE8uZ2V0KGYsYS5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSksdm9pZCAwIT09YylyZXR1cm4gYztpZihkPW4uY2FtZWxDYXNlKGEpLGM9Ty5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UihmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgZD1uLmNhbWVsQ2FzZShhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1PLmdldCh0aGlzLGQpO08uc2V0KHRoaXMsZCxiKSxhLmluZGV4T2YoXCItXCIpPi0xJiZ2b2lkIDAhPT1jJiZPLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Ty5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Ti5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPU4uYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIE4uZ2V0KGEsYyl8fE4uYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtOLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1OLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBTPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxUPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1MrXCIpKFthLXolXSopJFwiLFwiaVwiKSxVPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxWPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PW4uY3NzKGEsXCJkaXNwbGF5XCIpfHwhbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl9O2Z1bmN0aW9uIFcoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwobi5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KG4uY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJlQuZXhlYyhuLmNzcyhhLGIpKTtpZihrJiZrWzNdIT09ail7aj1qfHxrWzNdLGM9Y3x8W10saz0raXx8MTtkbyBmPWZ8fFwiLjVcIixrLz1mLG4uc3R5bGUoYSxiLGsraik7d2hpbGUoZiE9PShmPWgoKS9pKSYmMSE9PWYmJi0tZyl9cmV0dXJuIGMmJihrPStrfHwraXx8MCxlPWNbMV0/aysoY1sxXSsxKSpjWzJdOitjWzJdLGQmJihkLnVuaXQ9aixkLnN0YXJ0PWssZC5lbmQ9ZSkpLGV9dmFyIFg9L14oPzpjaGVja2JveHxyYWRpbykkL2ksWT0vPChbXFx3Oi1dKykvLFo9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSwkPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07JC5vcHRncm91cD0kLm9wdGlvbiwkLnRib2R5PSQudGZvb3Q9JC5jb2xncm91cD0kLmNhcHRpb249JC50aGVhZCwkLnRoPSQudGQ7ZnVuY3Rpb24gXyhhLGIpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gYWEoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTi5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Ti5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBiYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gY2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxvPTAscD1hLmxlbmd0aDtwPm87bysrKWlmKGY9YVtvXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09bi50eXBlKGYpKW4ubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKGJhLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KFkuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaT0kW2hdfHwkLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rbi5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO24ubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbz0wO3doaWxlKGY9bVtvKytdKWlmKGQmJm4uaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9bi5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1fKGwuYXBwZW5kQ2hpbGQoZiksXCJzY3JpcHRcIiksaiYmYWEoZyksYyl7az0wO3doaWxlKGY9Z1trKytdKVoudGVzdChmLnR5cGV8fFwiXCIpJiZjLnB1c2goZil9cmV0dXJuIGx9IWZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxsLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsbC5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBkYT0vXmtleS8sZWE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLGZhPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gZ2EoKXtyZXR1cm4hMH1mdW5jdGlvbiBoYSgpe3JldHVybiExfWZ1bmN0aW9uIGlhKCl7dHJ5e3JldHVybiBkLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1mdW5jdGlvbiBqYShhLGIsYyxkLGUsZil7dmFyIGcsaDtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihkPWR8fGMsYz12b2lkIDApO2ZvcihoIGluIGIpamEoYSxoLGMsZCxiW2hdLGYpO3JldHVybiBhfWlmKG51bGw9PWQmJm51bGw9PWU/KGU9YyxkPWM9dm9pZCAwKTpudWxsPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGM/KGU9ZCxkPXZvaWQgMCk6KGU9ZCxkPWMsYz12b2lkIDApKSxlPT09ITEpZT1oYTtlbHNlIGlmKCFlKXJldHVybiBhO3JldHVybiAxPT09ZiYmKGc9ZSxlPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPW4uZ3VpZCsrKSksYS5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxiLGUsZCxjKX0pfW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5nZXQoYSk7aWYocil7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoaT1yLmV2ZW50cyl8fChpPXIuZXZlbnRzPXt9KSwoZz1yLmhhbmRsZSl8fChnPXIuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBuJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9ZmEuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYobD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGs9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW29dKXx8KG09aVtvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobyxnKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG4uZXZlbnQuZ2xvYmFsW29dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1OLmhhc0RhdGEoYSkmJk4uZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1pW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcSE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGlbb10pfWVsc2UgZm9yKG8gaW4gaSluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChpKSYmTi5yZW1vdmUoYSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZCxmLGcsaD1bXSxpPWUuY2FsbChhcmd1bWVudHMpLGo9KE4uZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLnJuYW1lc3BhY2V8fGEucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKSkmJihhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZD0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZCYmKGEucmVzdWx0PWQpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8aXNOYU4oYS5idXR0b24pfHxhLmJ1dHRvbjwxKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1pLm5vZGVUeXBlJiYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT4tMTpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBkZXRhaWwgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZz1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxkLGU9Yy5kb2N1bWVudEVsZW1lbnQsZj1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGUmJmUuc2Nyb2xsTGVmdHx8ZiYmZi5zY3JvbGxMZWZ0fHwwKS0oZSYmZS5jbGllbnRMZWZ0fHxmJiZmLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhlJiZlLnNjcm9sbFRvcHx8ZiYmZi5zY3JvbGxUb3B8fDApLShlJiZlLmNsaWVudFRvcHx8ZiYmZi5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1nfHwoYS53aGljaD0xJmc/MToyJmc/Mzo0Jmc/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGUsZj1hLnR5cGUsZz1hLGg9dGhpcy5maXhIb29rc1tmXTtofHwodGhpcy5maXhIb29rc1tmXT1oPWVhLnRlc3QoZik/dGhpcy5tb3VzZUhvb2tzOmRhLnRlc3QoZik/dGhpcy5rZXlIb29rczp7fSksZT1oLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGgucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChnKSxiPWUubGVuZ3RoO3doaWxlKGItLSljPWVbYl0sYVtjXT1nW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWQpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGguZmlsdGVyP2guZmlsdGVyKGEsZyk6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1pYSgpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1pYSgpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9nYTpoYSk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpuLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpoYSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpoYSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpoYSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1nYSxhJiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWdhLGEmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWdhLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuKCFlfHxlIT09ZCYmIW4uY29udGFpbnMoZCxlKSkmJihhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBqYSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixuKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybihiPT09ITF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGIpJiYoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPWhhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciBrYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Oi1dKylbXj5dKilcXC8+L2dpLGxhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLG1hPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksbmE9L150cnVlXFwvKC4qKS8sb2E9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIHBhKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIHJhKGEpe3ZhciBiPW5hLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBzYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKE4uaGFzRGF0YShhKSYmKGY9Ti5hY2Nlc3MoYSksZz1OLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Ty5oYXNEYXRhKGEpJiYoaD1PLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE8uc2V0KGIsaSkpfX1mdW5jdGlvbiB0YShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZYLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOihcImlucHV0XCI9PT1jfHxcInRleHRhcmVhXCI9PT1jKSYmKGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiB1YShhLGIsYyxkKXtiPWYuYXBwbHkoW10sYik7dmFyIGUsZyxoLGksaixrLG09MCxvPWEubGVuZ3RoLHA9by0xLHE9YlswXSxyPW4uaXNGdW5jdGlvbihxKTtpZihyfHxvPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBxJiYhbC5jaGVja0Nsb25lJiZtYS50ZXN0KHEpKXJldHVybiBhLmVhY2goZnVuY3Rpb24oZSl7dmFyIGY9YS5lcShlKTtyJiYoYlswXT1xLmNhbGwodGhpcyxlLGYuaHRtbCgpKSksdWEoZixiLGMsZCl9KTtpZihvJiYoZT1jYShiLGFbMF0ub3duZXJEb2N1bWVudCwhMSxhLGQpLGc9ZS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1nKSxnfHxkKSl7Zm9yKGg9bi5tYXAoXyhlLFwic2NyaXB0XCIpLHFhKSxpPWgubGVuZ3RoO28+bTttKyspaj1lLG0hPT1wJiYoaj1uLmNsb25lKGosITAsITApLGkmJm4ubWVyZ2UoaCxfKGosXCJzY3JpcHRcIikpKSxjLmNhbGwoYVttXSxqLG0pO2lmKGkpZm9yKGs9aFtoLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGgscmEpLG09MDtpPm07bSsrKWo9aFttXSxaLnRlc3Qoai50eXBlfHxcIlwiKSYmIU4uYWNjZXNzKGosXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGssaikmJihqLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGouc3JjKTpuLmdsb2JhbEV2YWwoai50ZXh0Q29udGVudC5yZXBsYWNlKG9hLFwiXCIpKSl9cmV0dXJuIGF9ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZCxlPWI/bi5maWx0ZXIoYixhKTphLGY9MDtudWxsIT0oZD1lW2ZdKTtmKyspY3x8MSE9PWQubm9kZVR5cGV8fG4uY2xlYW5EYXRhKF8oZCkpLGQucGFyZW50Tm9kZSYmKGMmJm4uY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZhYShfKGQsXCJzY3JpcHRcIikpLGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSk7cmV0dXJuIGF9bi5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShrYSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShsLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxuLmlzWE1MRG9jKGEpKSlmb3IoZz1fKGgpLGY9XyhhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXRhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fF8oYSksZz1nfHxfKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspc2EoZltkXSxnW2RdKTtlbHNlIHNhKGEsaCk7cmV0dXJuIGc9XyhoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJmFhKGcsIWkmJl8oYSxcInNjcmlwdFwiKSksaH0sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZT1uLmV2ZW50LnNwZWNpYWwsZj0wO3ZvaWQgMCE9PShjPWFbZl0pO2YrKylpZihMKGMpKXtpZihiPWNbTi5leHBhbmRvXSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZVtkXT9uLmV2ZW50LnJlbW92ZShjLGQpOm4ucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtjW04uZXhwYW5kb109dm9pZCAwfWNbTy5leHBhbmRvXSYmKGNbTy5leHBhbmRvXT12b2lkIDApfX19KSxuLmZuLmV4dGVuZCh7ZG9tTWFuaXA6dWEsZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEsITApfSxyZW1vdmU6ZnVuY3Rpb24oYSl7cmV0dXJuIHZhKHRoaXMsYSl9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9cGEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShfKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFsYS50ZXN0KGEpJiYhJFsoWS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9bi5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO24uaW5BcnJheSh0aGlzLGEpPDAmJihuLmNsZWFuRGF0YShfKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZj1lLmxlbmd0aC0xLGg9MDtmPj1oO2grKyljPWg9PT1mP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxnLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciB3YSx4YT17SFRNTDpcImJsb2NrXCIsQk9EWTpcImJsb2NrXCJ9O2Z1bmN0aW9uIHlhKGEsYil7dmFyIGM9bihiLmNyZWF0ZUVsZW1lbnQoYSkpLmFwcGVuZFRvKGIuYm9keSksZD1uLmNzcyhjWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gYy5kZXRhY2goKSxkfWZ1bmN0aW9uIHphKGEpe3ZhciBiPWQsYz14YVthXTtyZXR1cm4gY3x8KGM9eWEoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fCh3YT0od2F8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj13YVswXS5jb250ZW50RG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPXlhKGEsYiksd2EuZGV0YWNoKCkpLHhhW2FdPWMpLGN9dmFyIEFhPS9ebWFyZ2luLyxCYT1uZXcgUmVnRXhwKFwiXihcIitTK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLENhPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX0sRGE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9LEVhPWQuZG9jdW1lbnRFbGVtZW50OyFmdW5jdGlvbigpe3ZhciBiLGMsZSxmLGc9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGg9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGguc3R5bGUpe2guc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGguY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGwuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWguc3R5bGUuYmFja2dyb3VuZENsaXAsZy5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixnLmFwcGVuZENoaWxkKGgpO2Z1bmN0aW9uIGkoKXtoLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixoLmlubmVySFRNTD1cIlwiLEVhLmFwcGVuZENoaWxkKGcpO3ZhciBkPWEuZ2V0Q29tcHV0ZWRTdHlsZShoKTtiPVwiMSVcIiE9PWQudG9wLGY9XCIycHhcIj09PWQubWFyZ2luTGVmdCxjPVwiNHB4XCI9PT1kLndpZHRoLGguc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixlPVwiNHB4XCI9PT1kLm1hcmdpblJpZ2h0LEVhLnJlbW92ZUNoaWxkKGcpfW4uZXh0ZW5kKGwse3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gaSgpLGJ9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxjfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxlfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGZ9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXt2YXIgYixjPWguYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyZXR1cm4gYy5zdHlsZS5jc3NUZXh0PWguc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGguc3R5bGUud2lkdGg9XCIxcHhcIixFYS5hcHBlbmRDaGlsZChnKSxiPSFwYXJzZUZsb2F0KGEuZ2V0Q29tcHV0ZWRTdHlsZShjKS5tYXJnaW5SaWdodCksRWEucmVtb3ZlQ2hpbGQoZyksaC5yZW1vdmVDaGlsZChjKSxifX0pfX0oKTtmdW5jdGlvbiBGYShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fENhKGEpLGc9Yz9jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl06dm9pZCAwLFwiXCIhPT1nJiZ2b2lkIDAhPT1nfHxuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9bi5zdHlsZShhLGIpKSxjJiYhbC5waXhlbE1hcmdpblJpZ2h0KCkmJkJhLnRlc3QoZykmJkFhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9Ziksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBHYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgSGE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLElhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxKYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEthPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXSxMYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gTWEoYSl7aWYoYSBpbiBMYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPUthLmxlbmd0aDt3aGlsZShjLS0paWYoYT1LYVtjXStiLGEgaW4gTGEpcmV0dXJuIGF9ZnVuY3Rpb24gTmEoYSxiLGMpe3ZhciBkPVQuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIE9hKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytVW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1VbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1VbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBQYShiLGMsZSl7dmFyIGY9ITAsZz1cIndpZHRoXCI9PT1jP2Iub2Zmc2V0V2lkdGg6Yi5vZmZzZXRIZWlnaHQsaD1DYShiKSxpPVwiYm9yZGVyLWJveFwiPT09bi5jc3MoYixcImJveFNpemluZ1wiLCExLGgpO2lmKGQubXNGdWxsc2NyZWVuRWxlbWVudCYmYS50b3AhPT1hJiZiLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoZz1NYXRoLnJvdW5kKDEwMCpiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2NdKSksMD49Z3x8bnVsbD09Zyl7aWYoZz1GYShiLGMsaCksKDA+Z3x8bnVsbD09ZykmJihnPWIuc3R5bGVbY10pLEJhLnRlc3QoZykpcmV0dXJuIGc7Zj1pJiYobC5ib3hTaXppbmdSZWxpYWJsZSgpfHxnPT09Yi5zdHlsZVtjXSksZz1wYXJzZUZsb2F0KGcpfHwwfXJldHVybiBnK09hKGIsYyxlfHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxmLGgpK1wicHhcIn1mdW5jdGlvbiBRYShhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1OLmdldChkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmVihkKSYmKGZbZ109Ti5hY2Nlc3MoZCxcIm9sZGRpc3BsYXlcIix6YShkLm5vZGVOYW1lKSkpKTooZT1WKGQpLFwibm9uZVwiPT09YyYmZXx8Ti5zZXQoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1GYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9VC5leGVjKGMpKSYmZVsxXSYmKGM9VyhhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksbC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1GYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIEphJiYoZT1KYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/SGEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP0RhKGEsSWEsZnVuY3Rpb24oKXtyZXR1cm4gUGEoYSxiLGQpfSk6UGEoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJkNhKGEpLGc9ZCYmT2EoYSxiLGQsXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPVQuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9bi5jc3MoYSxiKSksTmEoYSxjLGcpfX19KSxuLmNzc0hvb2tzLm1hcmdpbkxlZnQ9R2EobC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj8ocGFyc2VGbG9hdChGYShhLFwibWFyZ2luTGVmdFwiKSl8fGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1EYShhLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCI6dm9pZCAwfSksbi5jc3NIb29rcy5tYXJnaW5SaWdodD1HYShsLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9EYShhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LEZhLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStVW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LEFhLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PU5hKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9Q2EoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vih0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIFJhKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBSYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49UmEsUmEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpSYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxuLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOlJhLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPVJhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sUmEucHJvdG90eXBlLmluaXQucHJvdG90eXBlPVJhLnByb3RvdHlwZSxSYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV0mJiFuLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sUmEucHJvcEhvb2tzLnNjcm9sbFRvcD1SYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sbi5meD1SYS5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIFNhLFRhLFVhPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxWYT0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIFdhKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe1NhPXZvaWQgMH0pLFNhPW4ubm93KCl9ZnVuY3Rpb24gWGEoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1VW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFlhKGEsYixjKXtmb3IodmFyIGQsZT0oX2EudHdlZW5lcnNbYl18fFtdKS5jb25jYXQoX2EudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBaYShhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPXRoaXMsbT17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZWKGEpLHE9Ti5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxsLmFsd2F5cyhmdW5jdGlvbigpe2wuYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/Ti5nZXQoYSxcIm9sZGRpc3BsYXlcIil8fHphKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYoby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLGwuYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxVYS5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1tW2RdPXEmJnFbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChtKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj96YShhLm5vZGVOYW1lKTpqKSYmKG8uZGlzcGxheT1qKTtlbHNle3E/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPU4uYWNjZXNzKGEsXCJmeHNob3dcIix7fSksZiYmKHEuaGlkZGVuPSFwKSxwP24oYSkuc2hvdygpOmwuZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbC5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7Ti5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBtKW4uc3R5bGUoYSxiLG1bYl0pfSk7Zm9yKGQgaW4gbSlnPVlhKHA/cVtkXTowLGQsbCksZCBpbiBxfHwocVtkXT1nLnN0YXJ0LHAmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uICRhKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBfYShhLGIsYyl7dmFyIGQsZSxmPTAsZz1fYS5wcmVmaWx0ZXJzLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPVNhfHxXYSgpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpuLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOlNhfHxXYSgpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcigkYShrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9X2EucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIG4uaXNGdW5jdGlvbihkLnN0b3ApJiYobi5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPW4ucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiBuLm1hcChrLFlhLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQoX2Ese3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIFcoYy5lbGVtLGEsVC5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe24uaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEcpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxfYS50d2VlbmVyc1tjXT1fYS50d2VlbmVyc1tjXXx8W10sX2EudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbWmFdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/X2EucHJlZmlsdGVycy51bnNoaWZ0KGEpOl9hLnByZWZpbHRlcnMucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ZC5xdWV1ZXx8ZC5xdWV1ZT09PSEwKSYmKGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihWKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1fYSh0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxOLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1OLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZWYS50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyhifHwhYykmJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Ti5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShYYShiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246WGEoXCJzaG93XCIpLHNsaWRlVXA6WGEoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlhhKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW4udGltZXJzO2ZvcihTYT1uLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG4uZnguc3RvcCgpLFNhPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe1RhfHwoVGE9YS5zZXRJbnRlcnZhbChuLmZ4LnRpY2ssbi5meC5pbnRlcnZhbCkpfSxuLmZ4LnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFySW50ZXJ2YWwoVGEpLFRhPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1uLmZ4P24uZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixsLmNoZWNrT249XCJcIiE9PWEudmFsdWUsbC5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsbC5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixsLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBhYixiYj1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGU9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP2FiOnZvaWQgMCkpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCBuLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFsLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEcpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYykmJihhW2RdPSExKSxhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxhYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1iYltiXXx8bi5maW5kLmF0dHI7YmJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPWJiW2JdLGJiW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCxiYltiXT1mKSxlfX0pO3ZhciBjYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGRiPS9eKD86YXxhcmVhKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1uLnByb3BGaXhbYl18fGIsXG5lPW4ucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOmNiLnRlc3QoYS5ub2RlTmFtZSl8fGRiLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksbC5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgZWI9L1tcXHRcXHJcXG5cXGZdL2c7ZnVuY3Rpb24gZmIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifW4uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsZmIodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9ZmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6bi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsZmIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goRyl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Uodm9pZCAwPT09YXx8XCJib29sZWFuXCI9PT1jKSYmKGI9ZmIodGhpcyksYiYmTi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOk4uZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZmIoYykrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIGdiPS9cXHIvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShnYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4udHJpbShhLnZhbHVlKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sKGMuc2VsZWN0ZWR8fGk9PT1lKSYmKGwub3B0RGlzYWJsZWQ/IWMuZGlzYWJsZWQ6bnVsbD09PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IW4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KG4udmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT4tMTp2b2lkIDB9fSxsLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBoYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87bi5leHRlbmQobi5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixsLG0sbyxwPVtlfHxkXSxxPWsuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWsuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIWhiLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPi0xJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksbD1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGZ8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGUpKXtmb3Ioaj1vLmRlbGVnYXRlVHlwZXx8cSxoYi50ZXN0KGorcSl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlwLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmcC5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9cFtnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6by5iaW5kVHlwZXx8cSxtPShOLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTi5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1sJiZoW2xdLG0mJm0uYXBwbHkmJkwoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFMKGUpfHxsJiZuLmlzRnVuY3Rpb24oZVtxXSkmJiFuLmlzV2luZG93KGUpJiYoaT1lW2xdLGkmJihlW2xdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZVtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtsXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7bi5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKSxkLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSksbi5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxsLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsbC5mb2N1c2lufHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1OLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE4uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKS0xO2U/Ti5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLnJlbW92ZShkLGIpKX19fSk7dmFyIGliPWEubG9jYXRpb24samI9bi5ub3coKSxrYj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybighY3x8Yy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIGxiPS8jLiokLyxtYj0vKFs/Jl0pXz1bXiZdKi8sbmI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxvYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxwYj0vXig/OkdFVHxIRUFEKSQvLHFiPS9eXFwvXFwvLyxyYj17fSxzYj17fSx0Yj1cIiovXCIuY29uY2F0KFwiKlwiKSx1Yj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ViLmhyZWY9aWIuaHJlZjtmdW5jdGlvbiB2YihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiB3YihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1zYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIHhiKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiB5YihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiB6YihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDppYi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOm9iLnRlc3QoaWIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOnRiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/eGIoeGIoYSxuLmFqYXhTZXR0aW5ncyksYik6eGIobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6dmIocmIpLGFqYXhUcmFuc3BvcnQ6dmIoc2IpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZSxmLGcsaCxpLGosayxsLG09bi5hamF4U2V0dXAoe30sYyksbz1tLmNvbnRleHR8fG0scD1tLmNvbnRleHQmJihvLm5vZGVUeXBlfHxvLmpxdWVyeSk/bihvKTpuLmV2ZW50LHE9bi5EZWZlcnJlZCgpLHI9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxzPW0uc3RhdHVzQ29kZXx8e30sdD17fSx1PXt9LHY9MCx3PVwiY2FuY2VsZWRcIix4PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXYpe2lmKCFoKXtoPXt9O3doaWxlKGI9bmIuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dj9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHZ8fChhPXVbY109dVtjXXx8YSx0W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHZ8fChtLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnYpZm9yKGIgaW4gYSlzW2JdPVtzW2JdLGFbYl1dO2Vsc2UgeC5hbHdheXMoYVt4LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx3O3JldHVybiBlJiZlLmFib3J0KGIpLHooMCxiKSx0aGlzfX07aWYocS5wcm9taXNlKHgpLmNvbXBsZXRlPXIuYWRkLHguc3VjY2Vzcz14LmRvbmUseC5lcnJvcj14LmZhaWwsbS51cmw9KChifHxtLnVybHx8aWIuaHJlZikrXCJcIikucmVwbGFjZShsYixcIlwiKS5yZXBsYWNlKHFiLGliLnByb3RvY29sK1wiLy9cIiksbS50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG0ubWV0aG9kfHxtLnR5cGUsbS5kYXRhVHlwZXM9bi50cmltKG0uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXCJcIl0sbnVsbD09bS5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9bS51cmwsai5ocmVmPWouaHJlZixtLmNyb3NzRG9tYWluPXViLnByb3RvY29sK1wiLy9cIit1Yi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeSl7bS5jcm9zc0RvbWFpbj0hMH19aWYobS5kYXRhJiZtLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgbS5kYXRhJiYobS5kYXRhPW4ucGFyYW0obS5kYXRhLG0udHJhZGl0aW9uYWwpKSx3YihyYixtLGMseCksMj09PXYpcmV0dXJuIHg7az1uLmV2ZW50JiZtLmdsb2JhbCxrJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLG0udHlwZT1tLnR5cGUudG9VcHBlckNhc2UoKSxtLmhhc0NvbnRlbnQ9IXBiLnRlc3QobS50eXBlKSxmPW0udXJsLG0uaGFzQ29udGVudHx8KG0uZGF0YSYmKGY9bS51cmwrPShrYi50ZXN0KGYpP1wiJlwiOlwiP1wiKSttLmRhdGEsZGVsZXRlIG0uZGF0YSksbS5jYWNoZT09PSExJiYobS51cmw9bWIudGVzdChmKT9mLnJlcGxhY2UobWIsXCIkMV89XCIramIrKyk6Zisoa2IudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK2piKyspKSxtLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtmXSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtmXSksbi5ldGFnW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2ZdKSksKG0uZGF0YSYmbS5oYXNDb250ZW50JiZtLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixtLmNvbnRlbnRUeXBlKSx4LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixtLmRhdGFUeXBlc1swXSYmbS5hY2NlcHRzW20uZGF0YVR5cGVzWzBdXT9tLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PW0uZGF0YVR5cGVzWzBdP1wiLCBcIit0YitcIjsgcT0wLjAxXCI6XCJcIik6bS5hY2NlcHRzW1wiKlwiXSk7Zm9yKGwgaW4gbS5oZWFkZXJzKXguc2V0UmVxdWVzdEhlYWRlcihsLG0uaGVhZGVyc1tsXSk7aWYobS5iZWZvcmVTZW5kJiYobS5iZWZvcmVTZW5kLmNhbGwobyx4LG0pPT09ITF8fDI9PT12KSlyZXR1cm4geC5hYm9ydCgpO3c9XCJhYm9ydFwiO2ZvcihsIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXhbbF0obVtsXSk7aWYoZT13YihzYixtLGMseCkpe2lmKHgucmVhZHlTdGF0ZT0xLGsmJnAudHJpZ2dlcihcImFqYXhTZW5kXCIsW3gsbV0pLDI9PT12KXJldHVybiB4O20uYXN5bmMmJm0udGltZW91dD4wJiYoaT1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt4LmFib3J0KFwidGltZW91dFwiKX0sbS50aW1lb3V0KSk7dHJ5e3Y9MSxlLnNlbmQodCx6KX1jYXRjaCh5KXtpZighKDI+dikpdGhyb3cgeTt6KC0xLHkpfX1lbHNlIHooLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geihiLGMsZCxoKXt2YXIgaixsLHQsdSx3LHk9YzsyIT09diYmKHY9MixpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseC5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJjMwMD5ifHwzMDQ9PT1iLGQmJih1PXliKG0seCxkKSksdT16YihtLHUseCxqKSxqPyhtLmlmTW9kaWZpZWQmJih3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtmXT13KSx3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09bS50eXBlP3k9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3k9XCJub3Rtb2RpZmllZFwiOih5PXUuc3RhdGUsbD11LmRhdGEsdD11LmVycm9yLGo9IXQpKToodD15LChifHwheSkmJih5PVwiZXJyb3JcIiwwPmImJihiPTApKSkseC5zdGF0dXM9Yix4LnN0YXR1c1RleHQ9KGN8fHkpK1wiXCIsaj9xLnJlc29sdmVXaXRoKG8sW2wseSx4XSk6cS5yZWplY3RXaXRoKG8sW3gseSx0XSkseC5zdGF0dXNDb2RlKHMpLHM9dm9pZCAwLGsmJnAudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt4LG0saj9sOnRdKSxyLmZpcmVXaXRoKG8sW3gseV0pLGsmJihwLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeCxtXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geH0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheChuLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sbi5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxuLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBBbGwoYS5jYWxsKHRoaXMsYikpfSk6KHRoaXNbMF0mJihiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpcyl9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLnZpc2libGUoYSl9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg+MHx8YS5vZmZzZXRIZWlnaHQ+MHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wfTt2YXIgQWI9LyUyMC9nLEJiPS9cXFtcXF0kLyxDYj0vXFxyP1xcbi9nLERiPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxFYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gRmIoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8QmIudGVzdChhKT9kKGEsZSk6RmIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilGYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpRmIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZShBYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmRWIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIURiLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFYLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoQ2IsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShDYixcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBHYj17MDoyMDAsMTIyMzoyMDR9LEhiPW4uYWpheFNldHRpbmdzLnhocigpO2wuY29ycz0hIUhiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gSGIsbC5hamF4PUhiPSEhSGIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7cmV0dXJuIGwuY29yc3x8SGImJiFiLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihHYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBJYj1bXSxKYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUliLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIramIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoSmIudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkpiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoSmIsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oa2IudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9uKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEliLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbC5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYT1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBhLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWEuY2hpbGROb2Rlcy5sZW5ndGh9KCksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHwobC5jcmVhdGVIVE1MRG9jdW1lbnQ/ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik6ZCk7dmFyIGU9eC5leGVjKGEpLGY9IWMmJltdO3JldHVybiBlP1tiLmNyZWF0ZUVsZW1lbnQoZVsxXSldOihlPWNhKFthXSxiLGYpLGYmJmYubGVuZ3RoJiZuKGYpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9O3ZhciBLYj1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmS2IpcmV0dXJuIEtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5hbHdheXMoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goZnVuY3Rpb24oKXtjLmFwcGx5KGcsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSl9KSx0aGlzfSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gbi5ncmVwKG4udGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofTtmdW5jdGlvbiBMYihhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxuLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LG4uZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtuLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkPXRoaXNbMF0sZT17dG9wOjAsbGVmdDowfSxmPWQmJmQub3duZXJEb2N1bWVudDtpZihmKXJldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LG4uY29udGFpbnMoYixkKT8oZT1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9TGIoZikse3RvcDplLnRvcCtjLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2MucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fSk6ZX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZC50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxkLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtZC50b3Atbi5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtbi5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxFYX0pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1cInBhZ2VZT2Zmc2V0XCI9PT1iO24uZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY9TGIoYSk7cmV0dXJuIHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxuLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT1HYShsLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz1GYShhLGIpLEJhLnRlc3QoYyk/bihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG4uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe24uZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtuLmZuW2RdPWZ1bmN0aW9uKGQsZSl7dmFyIGY9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZCksZz1jfHwoZD09PSEwfHxlPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZTtyZXR1cm4gbi5pc1dpbmRvdyhiKT9iLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhlPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGVbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxlW1wib2Zmc2V0XCIrYV0sZVtcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZD9uLmNzcyhiLGMsZyk6bi5zdHlsZShiLGMsZCxnKX0sYixmP2Q6dm9pZCAwLGYsbnVsbCl9fSl9KSxuLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfSxzaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofX0pLG4uZm4uYW5kU2VsZj1uLmZuLmFkZEJhY2ssXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIE1iPWEualF1ZXJ5LE5iPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPU5iKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1NYiksbn0sYnx8KGEualF1ZXJ5PWEuJD1uKSxufSk7XG4iLCIvKlxuICogIFZpZGUgLSB2MC41LjBcbiAqICBFYXN5IGFzIGhlbGwgalF1ZXJ5IHBsdWdpbiBmb3IgdmlkZW8gYmFja2dyb3VuZHMuXG4gKiAgaHR0cDovL3ZvZGthYmVhcnMuZ2l0aHViLmlvL3ZpZGUvXG4gKlxuICogIE1hZGUgYnkgSWx5YSBNYWthcm92XG4gKiAgVW5kZXIgTUlUIExpY2Vuc2VcbiAqL1xuIShmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShyb290LmpRdWVyeSk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCQpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHBsdWdpblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAY29uc3RcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHZhciBQTFVHSU5fTkFNRSA9ICd2aWRlJztcblxuICAvKipcbiAgICogRGVmYXVsdCBzZXR0aW5nc1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAY29uc3RcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBERUZBVUxUUyA9IHtcbiAgICB2b2x1bWU6IDEsXG4gICAgcGxheWJhY2tSYXRlOiAxLFxuICAgIG11dGVkOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgcG9zaXRpb246ICc1MCUgNTAlJyxcbiAgICBwb3N0ZXJUeXBlOiAnZGV0ZWN0JyxcbiAgICByZXNpemluZzogdHJ1ZSxcbiAgICBiZ0NvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIGNsYXNzTmFtZTogJydcbiAgfTtcblxuICAvKipcbiAgICogTm90IGltcGxlbWVudGVkIGVycm9yIG1lc3NhZ2VcbiAgICogQHByaXZhdGVcbiAgICogQGNvbnN0XG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICB2YXIgTk9UX0lNUExFTUVOVEVEX01TRyA9ICdOb3QgaW1wbGVtZW50ZWQnO1xuXG4gIC8qKlxuICAgKiBQYXJzZSBhIHN0cmluZyB3aXRoIG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7T2JqZWN0fFN0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3B0aW9ucyhzdHIpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIGRlbGltaXRlckluZGV4O1xuICAgIHZhciBvcHRpb247XG4gICAgdmFyIHByb3A7XG4gICAgdmFyIHZhbDtcbiAgICB2YXIgYXJyO1xuICAgIHZhciBsZW47XG4gICAgdmFyIGk7XG5cbiAgICAvLyBSZW1vdmUgc3BhY2VzIGFyb3VuZCBkZWxpbWl0ZXJzIGFuZCBzcGxpdFxuICAgIGFyciA9IHN0ci5yZXBsYWNlKC9cXHMqOlxccyovZywgJzonKS5yZXBsYWNlKC9cXHMqLFxccyovZywgJywnKS5zcGxpdCgnLCcpO1xuXG4gICAgLy8gUGFyc2UgYSBzdHJpbmdcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG9wdGlvbiA9IGFycltpXTtcblxuICAgICAgLy8gSWdub3JlIHVybHMgYW5kIGEgc3RyaW5nIHdpdGhvdXQgY29sb24gZGVsaW1pdGVyc1xuICAgICAgaWYgKFxuICAgICAgICBvcHRpb24uc2VhcmNoKC9eKGh0dHB8aHR0cHN8ZnRwKTpcXC9cXC8vKSAhPT0gLTEgfHxcbiAgICAgICAgb3B0aW9uLnNlYXJjaCgnOicpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWxpbWl0ZXJJbmRleCA9IG9wdGlvbi5pbmRleE9mKCc6Jyk7XG4gICAgICBwcm9wID0gb3B0aW9uLnN1YnN0cmluZygwLCBkZWxpbWl0ZXJJbmRleCk7XG4gICAgICB2YWwgPSBvcHRpb24uc3Vic3RyaW5nKGRlbGltaXRlckluZGV4ICsgMSk7XG5cbiAgICAgIC8vIElmIHZhbCBpcyBhbiBlbXB0eSBzdHJpbmcsIG1ha2UgaXQgdW5kZWZpbmVkXG4gICAgICBpZiAoIXZhbCkge1xuICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdmFsdWUgaWYgaXQgaXMgbGlrZSBhIGJvb2xlYW5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWwgPSB2YWwgPT09ICd0cnVlJyB8fCAodmFsID09PSAnZmFsc2UnID8gZmFsc2UgOiB2YWwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHZhbHVlIGlmIGl0IGlzIGxpa2UgYSBudW1iZXJcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWwgPSAhaXNOYU4odmFsKSA/ICt2YWwgOiB2YWw7XG4gICAgICB9XG5cbiAgICAgIG9ialtwcm9wXSA9IHZhbDtcbiAgICB9XG5cbiAgICAvLyBJZiBub3RoaW5nIGlzIHBhcnNlZFxuICAgIGlmIChwcm9wID09IG51bGwgJiYgdmFsID09IG51bGwpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIHBvc2l0aW9uIG9wdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZVBvc2l0aW9uKHN0cikge1xuICAgIHN0ciA9ICcnICsgc3RyO1xuXG4gICAgLy8gRGVmYXVsdCB2YWx1ZSBpcyBhIGNlbnRlclxuICAgIHZhciBhcmdzID0gc3RyLnNwbGl0KC9cXHMrLyk7XG4gICAgdmFyIHggPSAnNTAlJztcbiAgICB2YXIgeSA9ICc1MCUnO1xuICAgIHZhciBsZW47XG4gICAgdmFyIGFyZztcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZyA9IGFyZ3NbaV07XG5cbiAgICAgIC8vIENvbnZlcnQgdmFsdWVzXG4gICAgICBpZiAoYXJnID09PSAnbGVmdCcpIHtcbiAgICAgICAgeCA9ICcwJSc7XG4gICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB4ID0gJzEwMCUnO1xuICAgICAgfSBlbHNlIGlmIChhcmcgPT09ICd0b3AnKSB7XG4gICAgICAgIHkgPSAnMCUnO1xuICAgICAgfSBlbHNlIGlmIChhcmcgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHkgPSAnMTAwJSc7XG4gICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICB4ID0gJzUwJSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9ICc1MCUnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHggPSBhcmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IGFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYSBwb3N0ZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRQb3N0ZXIocGF0aCwgY2FsbGJhY2spIHtcbiAgICB2YXIgb25Mb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjYWxsYmFjayh0aGlzLnNyYyk7XG4gICAgfTtcblxuICAgICQoJzxpbWcgc3JjPVwiJyArIHBhdGggKyAnLmdpZlwiPicpLmxvYWQob25Mb2FkKTtcbiAgICAkKCc8aW1nIHNyYz1cIicgKyBwYXRoICsgJy5qcGdcIj4nKS5sb2FkKG9uTG9hZCk7XG4gICAgJCgnPGltZyBzcmM9XCInICsgcGF0aCArICcuanBlZ1wiPicpLmxvYWQob25Mb2FkKTtcbiAgICAkKCc8aW1nIHNyYz1cIicgKyBwYXRoICsgJy5wbmdcIj4nKS5sb2FkKG9uTG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogVmlkZSBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdGlvbnNcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBWaWRlKGVsZW1lbnQsIHBhdGgsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuICAgIC8vIFBhcnNlIHBhdGhcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXRoID0gcGFyc2VPcHRpb25zKHBhdGgpO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIG9wdGlvbnNcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW4gZXh0ZW5zaW9uXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwuXFx3KiQvLCAnJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gcGF0aCkge1xuICAgICAgICBpZiAocGF0aC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHBhdGhbaV0gPSBwYXRoW2ldLnJlcGxhY2UoL1xcLlxcdyokLywgJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBERUZBVUxUUywgb3B0aW9ucyk7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Wb2RrYUJlYXJzL1ZpZGUvaXNzdWVzLzExMFxuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5tZXNzYWdlICE9PSBOT1RfSU1QTEVNRU5URURfTVNHKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIFZpZGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmlkZSA9IHRoaXM7XG4gICAgdmFyIHBhdGggPSB2aWRlLnBhdGg7XG4gICAgdmFyIHBvc3RlciA9IHBhdGg7XG4gICAgdmFyIHNvdXJjZXMgPSAnJztcbiAgICB2YXIgJGVsZW1lbnQgPSB2aWRlLiRlbGVtZW50O1xuICAgIHZhciBzZXR0aW5ncyA9IHZpZGUuc2V0dGluZ3M7XG4gICAgdmFyIHBvc2l0aW9uID0gcGFyc2VQb3NpdGlvbihzZXR0aW5ncy5wb3NpdGlvbik7XG4gICAgdmFyIHBvc3RlclR5cGUgPSBzZXR0aW5ncy5wb3N0ZXJUeXBlO1xuICAgIHZhciAkdmlkZW87XG4gICAgdmFyICR3cmFwcGVyO1xuXG4gICAgLy8gU2V0IHN0eWxlcyBvZiBhIHZpZGVvIHdyYXBwZXJcbiAgICAkd3JhcHBlciA9IHZpZGUuJHdyYXBwZXIgPSAkKCc8ZGl2PicpXG4gICAgICAuYWRkQ2xhc3Moc2V0dGluZ3MuY2xhc3NOYW1lKVxuICAgICAgLmNzcyh7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAnei1pbmRleCc6IC0xLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgJy13ZWJraXQtYmFja2dyb3VuZC1zaXplJzogJ2NvdmVyJyxcbiAgICAgICAgJy1tb3otYmFja2dyb3VuZC1zaXplJzogJ2NvdmVyJyxcbiAgICAgICAgJy1vLWJhY2tncm91bmQtc2l6ZSc6ICdjb3ZlcicsXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHNldHRpbmdzLmJnQ29sb3IsXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IHBvc2l0aW9uLnggKyAnICcgKyBwb3NpdGlvbi55XG4gICAgICB9KTtcblxuICAgIC8vIEdldCBhIHBvc3RlciBwYXRoXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHBhdGgucG9zdGVyKSB7XG4gICAgICAgIHBvc3RlciA9IHBhdGgucG9zdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhdGgubXA0KSB7XG4gICAgICAgICAgcG9zdGVyID0gcGF0aC5tcDQ7XG4gICAgICAgIH0gZWxzZSBpZiAocGF0aC53ZWJtKSB7XG4gICAgICAgICAgcG9zdGVyID0gcGF0aC53ZWJtO1xuICAgICAgICB9IGVsc2UgaWYgKHBhdGgub2d2KSB7XG4gICAgICAgICAgcG9zdGVyID0gcGF0aC5vZ3Y7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgYSB2aWRlbyBwb3N0ZXJcbiAgICBpZiAocG9zdGVyVHlwZSA9PT0gJ2RldGVjdCcpIHtcbiAgICAgIGZpbmRQb3N0ZXIocG9zdGVyLCBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgJHdyYXBwZXIuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgdXJsICsgJyknKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocG9zdGVyVHlwZSAhPT0gJ25vbmUnKSB7XG4gICAgICAkd3JhcHBlci5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyBwb3N0ZXIgKyAnLicgKyBwb3N0ZXJUeXBlICsgJyknKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHBhcmVudCBlbGVtZW50IGhhcyBhIHN0YXRpYyBwb3NpdGlvbiwgbWFrZSBpdCByZWxhdGl2ZVxuICAgIGlmICgkZWxlbWVudC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAkZWxlbWVudC5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgfVxuXG4gICAgJGVsZW1lbnQucHJlcGVuZCgkd3JhcHBlcik7XG5cbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocGF0aC5tcDQpIHtcbiAgICAgICAgc291cmNlcyArPSAnPHNvdXJjZSBzcmM9XCInICsgcGF0aC5tcDQgKyAnLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj4nO1xuICAgICAgfVxuXG4gICAgICBpZiAocGF0aC53ZWJtKSB7XG4gICAgICAgIHNvdXJjZXMgKz0gJzxzb3VyY2Ugc3JjPVwiJyArIHBhdGgud2VibSArICcud2VibVwiIHR5cGU9XCJ2aWRlby93ZWJtXCI+JztcbiAgICAgIH1cblxuICAgICAgaWYgKHBhdGgub2d2KSB7XG4gICAgICAgIHNvdXJjZXMgKz0gJzxzb3VyY2Ugc3JjPVwiJyArIHBhdGgub2d2ICsgJy5vZ3ZcIiB0eXBlPVwidmlkZW8vb2dnXCI+JztcbiAgICAgIH1cblxuICAgICAgJHZpZGVvID0gdmlkZS4kdmlkZW8gPSAkKCc8dmlkZW8+JyArIHNvdXJjZXMgKyAnPC92aWRlbz4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHZpZGVvID0gdmlkZS4kdmlkZW8gPSAkKCc8dmlkZW8+JyArXG4gICAgICAgICc8c291cmNlIHNyYz1cIicgKyBwYXRoICsgJy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+JyArXG4gICAgICAgICc8c291cmNlIHNyYz1cIicgKyBwYXRoICsgJy53ZWJtXCIgdHlwZT1cInZpZGVvL3dlYm1cIj4nICtcbiAgICAgICAgJzxzb3VyY2Ugc3JjPVwiJyArIHBhdGggKyAnLm9ndlwiIHR5cGU9XCJ2aWRlby9vZ2dcIj4nICtcbiAgICAgICAgJzwvdmlkZW8+Jyk7XG4gICAgfVxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1ZvZGthQmVhcnMvVmlkZS9pc3N1ZXMvMTEwXG4gICAgdHJ5IHtcbiAgICAgICR2aWRlb1xuXG4gICAgICAgIC8vIFNldCB2aWRlbyBwcm9wZXJ0aWVzXG4gICAgICAgIC5wcm9wKHtcbiAgICAgICAgICBhdXRvcGxheTogc2V0dGluZ3MuYXV0b3BsYXksXG4gICAgICAgICAgbG9vcDogc2V0dGluZ3MubG9vcCxcbiAgICAgICAgICB2b2x1bWU6IHNldHRpbmdzLnZvbHVtZSxcbiAgICAgICAgICBtdXRlZDogc2V0dGluZ3MubXV0ZWQsXG4gICAgICAgICAgZGVmYXVsdE11dGVkOiBzZXR0aW5ncy5tdXRlZCxcbiAgICAgICAgICBwbGF5YmFja1JhdGU6IHNldHRpbmdzLnBsYXliYWNrUmF0ZSxcbiAgICAgICAgICBkZWZhdWx0UGxheWJhY2tSYXRlOiBzZXR0aW5ncy5wbGF5YmFja1JhdGVcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE5PVF9JTVBMRU1FTlRFRF9NU0cpO1xuICAgIH1cblxuICAgIC8vIFZpZGVvIGFsaWdubWVudFxuICAgICR2aWRlby5jc3Moe1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICd6LWluZGV4JzogLTEsXG4gICAgICB0b3A6IHBvc2l0aW9uLnksXG4gICAgICBsZWZ0OiBwb3NpdGlvbi54LFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgtJyArIHBvc2l0aW9uLnggKyAnLCAtJyArIHBvc2l0aW9uLnkgKyAnKScsXG4gICAgICAnLW1zLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoLScgKyBwb3NpdGlvbi54ICsgJywgLScgKyBwb3NpdGlvbi55ICsgJyknLFxuICAgICAgJy1tb3otdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgtJyArIHBvc2l0aW9uLnggKyAnLCAtJyArIHBvc2l0aW9uLnkgKyAnKScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLScgKyBwb3NpdGlvbi54ICsgJywgLScgKyBwb3NpdGlvbi55ICsgJyknLFxuXG4gICAgICAvLyBEaXNhYmxlIHZpc2liaWxpdHksIHdoaWxlIGxvYWRpbmdcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0pXG5cbiAgICAvLyBSZXNpemUgYSB2aWRlbywgd2hlbiBpdCdzIGxvYWRlZFxuICAgIC5vbmUoJ2NhbnBsYXl0aHJvdWdoLicgKyBQTFVHSU5fTkFNRSwgZnVuY3Rpb24oKSB7XG4gICAgICB2aWRlLnJlc2l6ZSgpO1xuICAgIH0pXG5cbiAgICAvLyBNYWtlIGl0IHZpc2libGUsIHdoZW4gaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAub25lKCdwbGF5aW5nLicgKyBQTFVHSU5fTkFNRSwgZnVuY3Rpb24oKSB7XG4gICAgICAkdmlkZW8uY3NzKHtcbiAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9KTtcbiAgICAgICR3cmFwcGVyLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICdub25lJyk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXNpemUgZXZlbnQgaXMgYXZhaWxhYmxlIG9ubHkgZm9yICd3aW5kb3cnXG4gICAgLy8gVXNlIGFub3RoZXIgY29kZSBzb2x1dGlvbnMgdG8gZGV0ZWN0IERPTSBlbGVtZW50cyByZXNpemluZ1xuICAgICRlbGVtZW50Lm9uKCdyZXNpemUuJyArIFBMVUdJTl9OQU1FLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZXR0aW5ncy5yZXNpemluZykge1xuICAgICAgICB2aWRlLnJlc2l6ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kIGEgdmlkZW9cbiAgICAkd3JhcHBlci5hcHBlbmQoJHZpZGVvKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgdmlkZW8gZWxlbWVudFxuICAgKiBAcHVibGljXG4gICAqIEByZXR1cm5zIHtIVE1MVmlkZW9FbGVtZW50fVxuICAgKi9cbiAgVmlkZS5wcm90b3R5cGUuZ2V0VmlkZW9PYmplY3QgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kdmlkZW9bMF07XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSBhIHZpZGVvIGJhY2tncm91bmRcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgVmlkZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLiR2aWRlbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkd3JhcHBlciA9IHRoaXMuJHdyYXBwZXI7XG4gICAgdmFyICR2aWRlbyA9IHRoaXMuJHZpZGVvO1xuICAgIHZhciB2aWRlbyA9ICR2aWRlb1swXTtcblxuICAgIC8vIEdldCBhIG5hdGl2ZSB2aWRlbyBzaXplXG4gICAgdmFyIHZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgdmFyIHZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuXG4gICAgLy8gR2V0IGEgd3JhcHBlciBzaXplXG4gICAgdmFyIHdyYXBwZXJIZWlnaHQgPSAkd3JhcHBlci5oZWlnaHQoKTtcbiAgICB2YXIgd3JhcHBlcldpZHRoID0gJHdyYXBwZXIud2lkdGgoKTtcblxuICAgIGlmICh3cmFwcGVyV2lkdGggLyB2aWRlb1dpZHRoID4gd3JhcHBlckhlaWdodCAvIHZpZGVvSGVpZ2h0KSB7XG4gICAgICAkdmlkZW8uY3NzKHtcblxuICAgICAgICAvLyArMiBwaXhlbHMgdG8gcHJldmVudCBhbiBlbXB0eSBzcGFjZSBhZnRlciB0cmFuc2Zvcm1hdGlvblxuICAgICAgICB3aWR0aDogd3JhcHBlcldpZHRoICsgMixcbiAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAkdmlkZW8uY3NzKHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcblxuICAgICAgICAvLyArMiBwaXhlbHMgdG8gcHJldmVudCBhbiBlbXB0eSBzcGFjZSBhZnRlciB0cmFuc2Zvcm1hdGlvblxuICAgICAgICBoZWlnaHQ6IHdyYXBwZXJIZWlnaHQgKyAyXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSB2aWRlbyBiYWNrZ3JvdW5kXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIFZpZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgJFtQTFVHSU5fTkFNRV0ubG9va3VwW3RoaXMuaW5kZXhdO1xuICAgIHRoaXMuJHZpZGVvICYmIHRoaXMuJHZpZGVvLm9mZihQTFVHSU5fTkFNRSk7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoUExVR0lOX05BTUUpLnJlbW92ZURhdGEoUExVR0lOX05BTUUpO1xuICAgIHRoaXMuJHdyYXBwZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNwZWNpYWwgcGx1Z2luIG9iamVjdCBmb3IgaW5zdGFuY2VzLlxuICAgKiBAcHVibGljXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICAkW1BMVUdJTl9OQU1FXSA9IHtcbiAgICBsb29rdXA6IFtdXG4gIH07XG5cbiAgLyoqXG4gICAqIFBsdWdpbiBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtKUXVlcnl9XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgJC5mbltQTFVHSU5fTkFNRV0gPSBmdW5jdGlvbihwYXRoLCBvcHRpb25zKSB7XG4gICAgdmFyIGluc3RhbmNlO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgaW5zdGFuY2UgPSAkLmRhdGEodGhpcywgUExVR0lOX05BTUUpO1xuXG4gICAgICAvLyBEZXN0cm95IHRoZSBwbHVnaW4gaW5zdGFuY2UgaWYgZXhpc3RzXG4gICAgICBpbnN0YW5jZSAmJiBpbnN0YW5jZS5kZXN0cm95KCk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgcGx1Z2luIGluc3RhbmNlXG4gICAgICBpbnN0YW5jZSA9IG5ldyBWaWRlKHRoaXMsIHBhdGgsIG9wdGlvbnMpO1xuICAgICAgaW5zdGFuY2UuaW5kZXggPSAkW1BMVUdJTl9OQU1FXS5sb29rdXAucHVzaChpbnN0YW5jZSkgLSAxO1xuICAgICAgJC5kYXRhKHRoaXMsIFBMVUdJTl9OQU1FLCBpbnN0YW5jZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAgIC8vIFdpbmRvdyByZXNpemUgZXZlbnQgbGlzdGVuZXJcbiAgICAkd2luZG93Lm9uKCdyZXNpemUuJyArIFBMVUdJTl9OQU1FLCBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGxlbiA9ICRbUExVR0lOX05BTUVdLmxvb2t1cC5sZW5ndGgsIGkgPSAwLCBpbnN0YW5jZTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGluc3RhbmNlID0gJFtQTFVHSU5fTkFNRV0ubG9va3VwW2ldO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5zZXR0aW5ncy5yZXNpemluZykge1xuICAgICAgICAgIGluc3RhbmNlLnJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vVm9ka2FCZWFycy9WaWRlL2lzc3Vlcy82OFxuICAgICR3aW5kb3cub24oJ3VubG9hZC4nICsgUExVR0lOX05BTUUsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gQXV0byBpbml0aWFsaXphdGlvblxuICAgIC8vIEFkZCAnZGF0YS12aWRlLWJnJyBhdHRyaWJ1dGUgd2l0aCBhIHBhdGggdG8gdGhlIHZpZGVvIHdpdGhvdXQgZXh0ZW5zaW9uXG4gICAgLy8gQWxzbyB5b3UgY2FuIHBhc3Mgb3B0aW9ucyB0aHJvdyB0aGUgJ2RhdGEtdmlkZS1vcHRpb25zJyBhdHRyaWJ1dGVcbiAgICAvLyAnZGF0YS12aWRlLW9wdGlvbnMnIG11c3QgYmUgbGlrZSAnbXV0ZWQ6IGZhbHNlLCB2b2x1bWU6IDAuNSdcbiAgICAkKGRvY3VtZW50KS5maW5kKCdbZGF0YS0nICsgUExVR0lOX05BTUUgKyAnLWJnXScpLmVhY2goZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgIHZhciBvcHRpb25zID0gJGVsZW1lbnQuZGF0YShQTFVHSU5fTkFNRSArICctb3B0aW9ucycpO1xuICAgICAgdmFyIHBhdGggPSAkZWxlbWVudC5kYXRhKFBMVUdJTl9OQU1FICsgJy1iZycpO1xuXG4gICAgICAkZWxlbWVudFtQTFVHSU5fTkFNRV0ocGF0aCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH0pO1xuXG59KTtcbiIsIiFmdW5jdGlvbigkKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgRk9VTkRBVElPTl9WRVJTSU9OID0gJzYuMi4wJztcblxuLy8gR2xvYmFsIEZvdW5kYXRpb24gb2JqZWN0XG4vLyBUaGlzIGlzIGF0dGFjaGVkIHRvIHRoZSB3aW5kb3csIG9yIHVzZWQgYXMgYSBtb2R1bGUgZm9yIEFNRC9Ccm93c2VyaWZ5XG52YXIgRm91bmRhdGlvbiA9IHtcbiAgdmVyc2lvbjogRk9VTkRBVElPTl9WRVJTSU9OLFxuXG4gIC8qKlxuICAgKiBTdG9yZXMgaW5pdGlhbGl6ZWQgcGx1Z2lucy5cbiAgICovXG4gIF9wbHVnaW5zOiB7fSxcblxuICAvKipcbiAgICogU3RvcmVzIGdlbmVyYXRlZCB1bmlxdWUgaWRzIGZvciBwbHVnaW4gaW5zdGFuY2VzXG4gICAqL1xuICBfdXVpZHM6IFtdLFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBmb3IgUlRMIHN1cHBvcnRcbiAgICovXG4gIHJ0bDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gJCgnaHRtbCcpLmF0dHIoJ2RpcicpID09PSAncnRsJztcbiAgfSxcbiAgLyoqXG4gICAqIERlZmluZXMgYSBGb3VuZGF0aW9uIHBsdWdpbiwgYWRkaW5nIGl0IHRvIHRoZSBgRm91bmRhdGlvbmAgbmFtZXNwYWNlIGFuZCB0aGUgbGlzdCBvZiBwbHVnaW5zIHRvIGluaXRpYWxpemUgd2hlbiByZWZsb3dpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBUaGUgY29uc3RydWN0b3Igb2YgdGhlIHBsdWdpbi5cbiAgICovXG4gIHBsdWdpbjogZnVuY3Rpb24ocGx1Z2luLCBuYW1lKSB7XG4gICAgLy8gT2JqZWN0IGtleSB0byB1c2Ugd2hlbiBhZGRpbmcgdG8gZ2xvYmFsIEZvdW5kYXRpb24gb2JqZWN0XG4gICAgLy8gRXhhbXBsZXM6IEZvdW5kYXRpb24uUmV2ZWFsLCBGb3VuZGF0aW9uLk9mZkNhbnZhc1xuICAgIHZhciBjbGFzc05hbWUgPSAobmFtZSB8fCBmdW5jdGlvbk5hbWUocGx1Z2luKSk7XG4gICAgLy8gT2JqZWN0IGtleSB0byB1c2Ugd2hlbiBzdG9yaW5nIHRoZSBwbHVnaW4sIGFsc28gdXNlZCB0byBjcmVhdGUgdGhlIGlkZW50aWZ5aW5nIGRhdGEgYXR0cmlidXRlIGZvciB0aGUgcGx1Z2luXG4gICAgLy8gRXhhbXBsZXM6IGRhdGEtcmV2ZWFsLCBkYXRhLW9mZi1jYW52YXNcbiAgICB2YXIgYXR0ck5hbWUgID0gaHlwaGVuYXRlKGNsYXNzTmFtZSk7XG5cbiAgICAvLyBBZGQgdG8gdGhlIEZvdW5kYXRpb24gb2JqZWN0IGFuZCB0aGUgcGx1Z2lucyBsaXN0IChmb3IgcmVmbG93aW5nKVxuICAgIHRoaXMuX3BsdWdpbnNbYXR0ck5hbWVdID0gdGhpc1tjbGFzc05hbWVdID0gcGx1Z2luO1xuICB9LFxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIFBvcHVsYXRlcyB0aGUgX3V1aWRzIGFycmF5IHdpdGggcG9pbnRlcnMgdG8gZWFjaCBpbmRpdmlkdWFsIHBsdWdpbiBpbnN0YW5jZS5cbiAgICogQWRkcyB0aGUgYHpmUGx1Z2luYCBkYXRhLWF0dHJpYnV0ZSB0byBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZWQgcGx1Z2lucyB0byBhbGxvdyB1c2Ugb2YgJChzZWxlY3RvcikuZm91bmRhdGlvbihtZXRob2QpIGNhbGxzLlxuICAgKiBBbHNvIGZpcmVzIHRoZSBpbml0aWFsaXphdGlvbiBldmVudCBmb3IgZWFjaCBwbHVnaW4sIGNvbnNvbGlkYXRpbmcgcmVwZWRpdGl2ZSBjb2RlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luIC0gYW4gaW5zdGFuY2Ugb2YgYSBwbHVnaW4sIHVzdWFsbHkgYHRoaXNgIGluIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHBsdWdpbiwgcGFzc2VkIGFzIGEgY2FtZWxDYXNlZCBzdHJpbmcuXG4gICAqIEBmaXJlcyBQbHVnaW4jaW5pdFxuICAgKi9cbiAgcmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uKHBsdWdpbiwgbmFtZSl7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBuYW1lID8gaHlwaGVuYXRlKG5hbWUpIDogZnVuY3Rpb25OYW1lKHBsdWdpbi5jb25zdHJ1Y3RvcikudG9Mb3dlckNhc2UoKTtcbiAgICBwbHVnaW4udXVpZCA9IHRoaXMuR2V0WW9EaWdpdHMoNiwgcGx1Z2luTmFtZSk7XG5cbiAgICBpZighcGx1Z2luLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApKXsgcGx1Z2luLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWAsIHBsdWdpbi51dWlkKTsgfVxuICAgIGlmKCFwbHVnaW4uJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nKSl7IHBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicsIHBsdWdpbik7IH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGluaXRpYWxpemVkLlxuICAgICAgICAgICAqIEBldmVudCBQbHVnaW4jaW5pdFxuICAgICAgICAgICAqL1xuICAgIHBsdWdpbi4kZWxlbWVudC50cmlnZ2VyKGBpbml0LnpmLiR7cGx1Z2luTmFtZX1gKTtcblxuICAgIHRoaXMuX3V1aWRzLnB1c2gocGx1Z2luLnV1aWQpO1xuXG4gICAgcmV0dXJuO1xuICB9LFxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIFJlbW92ZXMgdGhlIHBsdWdpbnMgdXVpZCBmcm9tIHRoZSBfdXVpZHMgYXJyYXkuXG4gICAqIFJlbW92ZXMgdGhlIHpmUGx1Z2luIGRhdGEgYXR0cmlidXRlLCBhcyB3ZWxsIGFzIHRoZSBkYXRhLXBsdWdpbi1uYW1lIGF0dHJpYnV0ZS5cbiAgICogQWxzbyBmaXJlcyB0aGUgZGVzdHJveWVkIGV2ZW50IGZvciB0aGUgcGx1Z2luLCBjb25zb2xpZGF0aW5nIHJlcGVkaXRpdmUgY29kZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIGFuIGluc3RhbmNlIG9mIGEgcGx1Z2luLCB1c3VhbGx5IGB0aGlzYCBpbiBjb250ZXh0LlxuICAgKiBAZmlyZXMgUGx1Z2luI2Rlc3Ryb3llZFxuICAgKi9cbiAgdW5yZWdpc3RlclBsdWdpbjogZnVuY3Rpb24ocGx1Z2luKXtcbiAgICB2YXIgcGx1Z2luTmFtZSA9IGh5cGhlbmF0ZShmdW5jdGlvbk5hbWUocGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJykuY29uc3RydWN0b3IpKTtcblxuICAgIHRoaXMuX3V1aWRzLnNwbGljZSh0aGlzLl91dWlkcy5pbmRleE9mKHBsdWdpbi51dWlkKSwgMSk7XG4gICAgcGx1Z2luLiRlbGVtZW50LnJlbW92ZUF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApLnJlbW92ZURhdGEoJ3pmUGx1Z2luJylcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGJlZW4gZGVzdHJveWVkLlxuICAgICAgICAgICAqIEBldmVudCBQbHVnaW4jZGVzdHJveWVkXG4gICAgICAgICAgICovXG4gICAgICAgICAgLnRyaWdnZXIoYGRlc3Ryb3llZC56Zi4ke3BsdWdpbk5hbWV9YCk7XG4gICAgZm9yKHZhciBwcm9wIGluIHBsdWdpbil7XG4gICAgICBwbHVnaW5bcHJvcF0gPSBudWxsOy8vY2xlYW4gdXAgc2NyaXB0IHRvIHByZXAgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQ2F1c2VzIG9uZSBvciBtb3JlIGFjdGl2ZSBwbHVnaW5zIHRvIHJlLWluaXRpYWxpemUsIHJlc2V0dGluZyBldmVudCBsaXN0ZW5lcnMsIHJlY2FsY3VsYXRpbmcgcG9zaXRpb25zLCBldGMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwbHVnaW5zIC0gb3B0aW9uYWwgc3RyaW5nIG9mIGFuIGluZGl2aWR1YWwgcGx1Z2luIGtleSwgYXR0YWluZWQgYnkgY2FsbGluZyBgJChlbGVtZW50KS5kYXRhKCdwbHVnaW5OYW1lJylgLCBvciBzdHJpbmcgb2YgYSBwbHVnaW4gY2xhc3MgaS5lLiBgJ2Ryb3Bkb3duJ2BcbiAgICogQGRlZmF1bHQgSWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkLCByZWZsb3cgYWxsIGN1cnJlbnRseSBhY3RpdmUgcGx1Z2lucy5cbiAgICovXG4gICByZUluaXQ6IGZ1bmN0aW9uKHBsdWdpbnMpe1xuICAgICB2YXIgaXNKUSA9IHBsdWdpbnMgaW5zdGFuY2VvZiAkO1xuICAgICB0cnl7XG4gICAgICAgaWYoaXNKUSl7XG4gICAgICAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgJCh0aGlzKS5kYXRhKCd6ZlBsdWdpbicpLl9pbml0KCk7XG4gICAgICAgICB9KTtcbiAgICAgICB9ZWxzZXtcbiAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHBsdWdpbnMsXG4gICAgICAgICBfdGhpcyA9IHRoaXMsXG4gICAgICAgICBmbnMgPSB7XG4gICAgICAgICAgICdvYmplY3QnOiBmdW5jdGlvbihwbGdzKXtcbiAgICAgICAgICAgICBwbGdzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICAgICAgICAgICBwID0gaHlwaGVuYXRlKHApO1xuICAgICAgICAgICAgICAgJCgnW2RhdGEtJysgcCArJ10nKS5mb3VuZGF0aW9uKCdfaW5pdCcpO1xuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICAnc3RyaW5nJzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBwbHVnaW5zID0gaHlwaGVuYXRlKHBsdWdpbnMpO1xuICAgICAgICAgICAgICQoJ1tkYXRhLScrIHBsdWdpbnMgKyddJykuZm91bmRhdGlvbignX2luaXQnKTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgJ3VuZGVmaW5lZCc6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgdGhpc1snb2JqZWN0J10oT2JqZWN0LmtleXMoX3RoaXMuX3BsdWdpbnMpKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfTtcbiAgICAgICAgIGZuc1t0eXBlXShwbHVnaW5zKTtcbiAgICAgICB9XG4gICAgIH1jYXRjaChlcnIpe1xuICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgfWZpbmFsbHl7XG4gICAgICAgcmV0dXJuIHBsdWdpbnM7XG4gICAgIH1cbiAgIH0sXG5cbiAgLyoqXG4gICAqIHJldHVybnMgYSByYW5kb20gYmFzZS0zNiB1aWQgd2l0aCBuYW1lc3BhY2luZ1xuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIG51bWJlciBvZiByYW5kb20gYmFzZS0zNiBkaWdpdHMgZGVzaXJlZC4gSW5jcmVhc2UgZm9yIG1vcmUgcmFuZG9tIHN0cmluZ3MuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBuYW1lIG9mIHBsdWdpbiB0byBiZSBpbmNvcnBvcmF0ZWQgaW4gdWlkLCBvcHRpb25hbC5cbiAgICogQGRlZmF1bHQge1N0cmluZ30gJycgLSBpZiBubyBwbHVnaW4gbmFtZSBpcyBwcm92aWRlZCwgbm90aGluZyBpcyBhcHBlbmRlZCB0byB0aGUgdWlkLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIHVuaXF1ZSBpZFxuICAgKi9cbiAgR2V0WW9EaWdpdHM6IGZ1bmN0aW9uKGxlbmd0aCwgbmFtZXNwYWNlKXtcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgNjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoTWF0aC5wb3coMzYsIGxlbmd0aCArIDEpIC0gTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDM2LCBsZW5ndGgpKSkudG9TdHJpbmcoMzYpLnNsaWNlKDEpICsgKG5hbWVzcGFjZSA/IGAtJHtuYW1lc3BhY2V9YCA6ICcnKTtcbiAgfSxcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGx1Z2lucyBvbiBhbnkgZWxlbWVudHMgd2l0aGluIGBlbGVtYCAoYW5kIGBlbGVtYCBpdHNlbGYpIHRoYXQgYXJlbid0IGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0galF1ZXJ5IG9iamVjdCBjb250YWluaW5nIHRoZSBlbGVtZW50IHRvIGNoZWNrIGluc2lkZS4gQWxzbyBjaGVja3MgdGhlIGVsZW1lbnQgaXRzZWxmLCB1bmxlc3MgaXQncyB0aGUgYGRvY3VtZW50YCBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwbHVnaW5zIC0gQSBsaXN0IG9mIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZS4gTGVhdmUgdGhpcyBvdXQgdG8gaW5pdGlhbGl6ZSBldmVyeXRoaW5nLlxuICAgKi9cbiAgcmVmbG93OiBmdW5jdGlvbihlbGVtLCBwbHVnaW5zKSB7XG5cbiAgICAvLyBJZiBwbHVnaW5zIGlzIHVuZGVmaW5lZCwganVzdCBncmFiIGV2ZXJ5dGhpbmdcbiAgICBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwbHVnaW5zID0gT2JqZWN0LmtleXModGhpcy5fcGx1Z2lucyk7XG4gICAgfVxuICAgIC8vIElmIHBsdWdpbnMgaXMgYSBzdHJpbmcsIGNvbnZlcnQgaXQgdG8gYW4gYXJyYXkgd2l0aCBvbmUgaXRlbVxuICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAnc3RyaW5nJykge1xuICAgICAgcGx1Z2lucyA9IFtwbHVnaW5zXTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggcGx1Z2luXG4gICAgJC5lYWNoKHBsdWdpbnMsIGZ1bmN0aW9uKGksIG5hbWUpIHtcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBwbHVnaW5cbiAgICAgIHZhciBwbHVnaW4gPSBfdGhpcy5fcGx1Z2luc1tuYW1lXTtcblxuICAgICAgLy8gTG9jYWxpemUgdGhlIHNlYXJjaCB0byBhbGwgZWxlbWVudHMgaW5zaWRlIGVsZW0sIGFzIHdlbGwgYXMgZWxlbSBpdHNlbGYsIHVubGVzcyBlbGVtID09PSBkb2N1bWVudFxuICAgICAgdmFyICRlbGVtID0gJChlbGVtKS5maW5kKCdbZGF0YS0nK25hbWUrJ10nKS5hZGRCYWNrKCdbZGF0YS0nK25hbWUrJ10nKTtcblxuICAgICAgLy8gRm9yIGVhY2ggcGx1Z2luIGZvdW5kLCBpbml0aWFsaXplIGl0XG4gICAgICAkZWxlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgLy8gRG9uJ3QgZG91YmxlLWRpcCBvbiBwbHVnaW5zXG4gICAgICAgIGlmICgkZWwuZGF0YSgnemZQbHVnaW4nKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlRyaWVkIHRvIGluaXRpYWxpemUgXCIrbmFtZStcIiBvbiBhbiBlbGVtZW50IHRoYXQgYWxyZWFkeSBoYXMgYSBGb3VuZGF0aW9uIHBsdWdpbi5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoJGVsLmF0dHIoJ2RhdGEtb3B0aW9ucycpKXtcbiAgICAgICAgICB2YXIgdGhpbmcgPSAkZWwuYXR0cignZGF0YS1vcHRpb25zJykuc3BsaXQoJzsnKS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpe1xuICAgICAgICAgICAgdmFyIG9wdCA9IGUuc3BsaXQoJzonKS5tYXAoZnVuY3Rpb24oZWwpeyByZXR1cm4gZWwudHJpbSgpOyB9KTtcbiAgICAgICAgICAgIGlmKG9wdFswXSkgb3B0c1tvcHRbMF1dID0gcGFyc2VWYWx1ZShvcHRbMV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAkZWwuZGF0YSgnemZQbHVnaW4nLCBuZXcgcGx1Z2luKCQodGhpcyksIG9wdHMpKTtcbiAgICAgICAgfWNhdGNoKGVyKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyKTtcbiAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0Rm5OYW1lOiBmdW5jdGlvbk5hbWUsXG4gIHRyYW5zaXRpb25lbmQ6IGZ1bmN0aW9uKCRlbGVtKXtcbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgJ01velRyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAnT1RyYW5zaXRpb24nOiAnb3RyYW5zaXRpb25lbmQnXG4gICAgfTtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBlbmQ7XG5cbiAgICBmb3IgKHZhciB0IGluIHRyYW5zaXRpb25zKXtcbiAgICAgIGlmICh0eXBlb2YgZWxlbS5zdHlsZVt0XSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBlbmQgPSB0cmFuc2l0aW9uc1t0XTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoZW5kKXtcbiAgICAgIHJldHVybiBlbmQ7XG4gICAgfWVsc2V7XG4gICAgICBlbmQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICRlbGVtLnRyaWdnZXJIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgWyRlbGVtXSk7XG4gICAgICB9LCAxKTtcbiAgICAgIHJldHVybiAndHJhbnNpdGlvbmVuZCc7XG4gICAgfVxuICB9XG59O1xuXG5Gb3VuZGF0aW9uLnV0aWwgPSB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiBmb3IgYXBwbHlpbmcgYSBkZWJvdW5jZSBlZmZlY3QgdG8gYSBmdW5jdGlvbiBjYWxsLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhdCBlbmQgb2YgdGltZW91dC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IC0gVGltZSBpbiBtcyB0byBkZWxheSB0aGUgY2FsbCBvZiBgZnVuY2AuXG4gICAqIEByZXR1cm5zIGZ1bmN0aW9uXG4gICAqL1xuICB0aHJvdHRsZTogZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XG4gICAgdmFyIHRpbWVyID0gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuLy8gVE9ETzogY29uc2lkZXIgbm90IG1ha2luZyB0aGlzIGEgalF1ZXJ5IGZ1bmN0aW9uXG4vLyBUT0RPOiBuZWVkIHdheSB0byByZWZsb3cgdnMuIHJlLWluaXRpYWxpemVcbi8qKlxuICogVGhlIEZvdW5kYXRpb24galF1ZXJ5IG1ldGhvZC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBtZXRob2QgLSBBbiBhY3Rpb24gdG8gcGVyZm9ybSBvbiB0aGUgY3VycmVudCBqUXVlcnkgb2JqZWN0LlxuICovXG52YXIgZm91bmRhdGlvbiA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBtZXRob2QsXG4gICAgICAkbWV0YSA9ICQoJ21ldGEuZm91bmRhdGlvbi1tcScpLFxuICAgICAgJG5vSlMgPSAkKCcubm8tanMnKTtcblxuICBpZighJG1ldGEubGVuZ3RoKXtcbiAgICAkKCc8bWV0YSBjbGFzcz1cImZvdW5kYXRpb24tbXFcIj4nKS5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcbiAgfVxuICBpZigkbm9KUy5sZW5ndGgpe1xuICAgICRub0pTLnJlbW92ZUNsYXNzKCduby1qcycpO1xuICB9XG5cbiAgaWYodHlwZSA9PT0gJ3VuZGVmaW5lZCcpey8vbmVlZHMgdG8gaW5pdGlhbGl6ZSB0aGUgRm91bmRhdGlvbiBvYmplY3QsIG9yIGFuIGluZGl2aWR1YWwgcGx1Z2luLlxuICAgIEZvdW5kYXRpb24uTWVkaWFRdWVyeS5faW5pdCgpO1xuICAgIEZvdW5kYXRpb24ucmVmbG93KHRoaXMpO1xuICB9ZWxzZSBpZih0eXBlID09PSAnc3RyaW5nJyl7Ly9hbiBpbmRpdmlkdWFsIG1ldGhvZCB0byBpbnZva2Ugb24gYSBwbHVnaW4gb3IgZ3JvdXAgb2YgcGx1Z2luc1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTsvL2NvbGxlY3QgYWxsIHRoZSBhcmd1bWVudHMsIGlmIG5lY2Vzc2FyeVxuICAgIHZhciBwbHVnQ2xhc3MgPSB0aGlzLmRhdGEoJ3pmUGx1Z2luJyk7Ly9kZXRlcm1pbmUgdGhlIGNsYXNzIG9mIHBsdWdpblxuXG4gICAgaWYocGx1Z0NsYXNzICE9PSB1bmRlZmluZWQgJiYgcGx1Z0NsYXNzW21ldGhvZF0gIT09IHVuZGVmaW5lZCl7Ly9tYWtlIHN1cmUgYm90aCB0aGUgY2xhc3MgYW5kIG1ldGhvZCBleGlzdFxuICAgICAgaWYodGhpcy5sZW5ndGggPT09IDEpey8vaWYgdGhlcmUncyBvbmx5IG9uZSwgY2FsbCBpdCBkaXJlY3RseS5cbiAgICAgICAgICBwbHVnQ2xhc3NbbWV0aG9kXS5hcHBseShwbHVnQ2xhc3MsIGFyZ3MpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLCBlbCl7Ly9vdGhlcndpc2UgbG9vcCB0aHJvdWdoIHRoZSBqUXVlcnkgY29sbGVjdGlvbiBhbmQgaW52b2tlIHRoZSBtZXRob2Qgb24gZWFjaFxuICAgICAgICAgIHBsdWdDbGFzc1ttZXRob2RdLmFwcGx5KCQoZWwpLmRhdGEoJ3pmUGx1Z2luJyksIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9ZWxzZXsvL2Vycm9yIGZvciBubyBjbGFzcyBvciBubyBtZXRob2RcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIldlJ3JlIHNvcnJ5LCAnXCIgKyBtZXRob2QgKyBcIicgaXMgbm90IGFuIGF2YWlsYWJsZSBtZXRob2QgZm9yIFwiICsgKHBsdWdDbGFzcyA/IGZ1bmN0aW9uTmFtZShwbHVnQ2xhc3MpIDogJ3RoaXMgZWxlbWVudCcpICsgJy4nKTtcbiAgICB9XG4gIH1lbHNley8vZXJyb3IgZm9yIGludmFsaWQgYXJndW1lbnQgdHlwZVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFdlJ3JlIHNvcnJ5LCAke3R5cGV9IGlzIG5vdCBhIHZhbGlkIHBhcmFtZXRlci4gWW91IG11c3QgdXNlIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWV0aG9kIHlvdSB3aXNoIHRvIGludm9rZS5gKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbndpbmRvdy5Gb3VuZGF0aW9uID0gRm91bmRhdGlvbjtcbiQuZm4uZm91bmRhdGlvbiA9IGZvdW5kYXRpb247XG5cbi8vIFBvbHlmaWxsIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbihmdW5jdGlvbigpIHtcbiAgaWYgKCFEYXRlLm5vdyB8fCAhd2luZG93LkRhdGUubm93KVxuICAgIHdpbmRvdy5EYXRlLm5vdyA9IERhdGUubm93ID0gZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfTtcblxuICB2YXIgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK2kpIHtcbiAgICAgIHZhciB2cCA9IHZlbmRvcnNbaV07XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZwKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9ICh3aW5kb3dbdnArJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvd1t2cCsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10pO1xuICB9XG4gIGlmICgvaVAoYWR8aG9uZXxvZCkuKk9TIDYvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgfHwgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUaW1lIC0gbm93KTtcbiAgICB9O1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNsZWFyVGltZW91dDtcbiAgfVxuICAvKipcbiAgICogUG9seWZpbGwgZm9yIHBlcmZvcm1hbmNlLm5vdywgcmVxdWlyZWQgYnkgckFGXG4gICAqL1xuICBpZighd2luZG93LnBlcmZvcm1hbmNlIHx8ICF3aW5kb3cucGVyZm9ybWFuY2Uubm93KXtcbiAgICB3aW5kb3cucGVyZm9ybWFuY2UgPSB7XG4gICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgIG5vdzogZnVuY3Rpb24oKXsgcmV0dXJuIERhdGUubm93KCkgLSB0aGlzLnN0YXJ0OyB9XG4gICAgfTtcbiAgfVxufSkoKTtcbmlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihvVGhpcykge1xuICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gY2xvc2VzdCB0aGluZyBwb3NzaWJsZSB0byB0aGUgRUNNQVNjcmlwdCA1XG4gICAgICAvLyBpbnRlcm5hbCBJc0NhbGxhYmxlIGZ1bmN0aW9uXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZScpO1xuICAgIH1cblxuICAgIHZhciBhQXJncyAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgZlRvQmluZCA9IHRoaXMsXG4gICAgICAgIGZOT1AgICAgPSBmdW5jdGlvbigpIHt9LFxuICAgICAgICBmQm91bmQgID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGZUb0JpbmQuYXBwbHkodGhpcyBpbnN0YW5jZW9mIGZOT1BcbiAgICAgICAgICAgICAgICAgPyB0aGlzXG4gICAgICAgICAgICAgICAgIDogb1RoaXMsXG4gICAgICAgICAgICAgICAgIGFBcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm90b3R5cGUpIHtcbiAgICAgIC8vIG5hdGl2ZSBmdW5jdGlvbnMgZG9uJ3QgaGF2ZSBhIHByb3RvdHlwZVxuICAgICAgZk5PUC5wcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcbiAgICB9XG4gICAgZkJvdW5kLnByb3RvdHlwZSA9IG5ldyBmTk9QKCk7XG5cbiAgICByZXR1cm4gZkJvdW5kO1xuICB9O1xufVxuLy8gUG9seWZpbGwgdG8gZ2V0IHRoZSBuYW1lIG9mIGEgZnVuY3Rpb24gaW4gSUU5XG5mdW5jdGlvbiBmdW5jdGlvbk5hbWUoZm4pIHtcbiAgaWYgKEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvblxccyhbXihdezEsfSlcXCgvO1xuICAgIHZhciByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKGZuKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0udHJpbSgpIDogXCJcIjtcbiAgfVxuICBlbHNlIGlmIChmbi5wcm90b3R5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmbi5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmbi5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VWYWx1ZShzdHIpe1xuICBpZigvdHJ1ZS8udGVzdChzdHIpKSByZXR1cm4gdHJ1ZTtcbiAgZWxzZSBpZigvZmFsc2UvLnRlc3Qoc3RyKSkgcmV0dXJuIGZhbHNlO1xuICBlbHNlIGlmKCFpc05hTihzdHIgKiAxKSkgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgcmV0dXJuIHN0cjtcbn1cbi8vIENvbnZlcnQgUGFzY2FsQ2FzZSB0byBrZWJhYi1jYXNlXG4vLyBUaGFuayB5b3U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzg5NTU1ODBcbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG59KGpRdWVyeSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbkZvdW5kYXRpb24uQm94ID0ge1xuICBJbU5vdFRvdWNoaW5nWW91OiBJbU5vdFRvdWNoaW5nWW91LFxuICBHZXREaW1lbnNpb25zOiBHZXREaW1lbnNpb25zLFxuICBHZXRPZmZzZXRzOiBHZXRPZmZzZXRzXG59XG5cbi8qKlxuICogQ29tcGFyZXMgdGhlIGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudCB0byBhIGNvbnRhaW5lciBhbmQgZGV0ZXJtaW5lcyBjb2xsaXNpb24gZXZlbnRzIHdpdGggY29udGFpbmVyLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gdGVzdCBmb3IgY29sbGlzaW9ucy5cbiAqIEBwYXJhbSB7alF1ZXJ5fSBwYXJlbnQgLSBqUXVlcnkgb2JqZWN0IHRvIHVzZSBhcyBib3VuZGluZyBjb250YWluZXIuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGxyT25seSAtIHNldCB0byB0cnVlIHRvIGNoZWNrIGxlZnQgYW5kIHJpZ2h0IHZhbHVlcyBvbmx5LlxuICogQHBhcmFtIHtCb29sZWFufSB0Yk9ubHkgLSBzZXQgdG8gdHJ1ZSB0byBjaGVjayB0b3AgYW5kIGJvdHRvbSB2YWx1ZXMgb25seS5cbiAqIEBkZWZhdWx0IGlmIG5vIHBhcmVudCBvYmplY3QgcGFzc2VkLCBkZXRlY3RzIGNvbGxpc2lvbnMgd2l0aCBgd2luZG93YC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSAtIHRydWUgaWYgY29sbGlzaW9uIGZyZWUsIGZhbHNlIGlmIGEgY29sbGlzaW9uIGluIGFueSBkaXJlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIEltTm90VG91Y2hpbmdZb3UoZWxlbWVudCwgcGFyZW50LCBsck9ubHksIHRiT25seSkge1xuICB2YXIgZWxlRGltcyA9IEdldERpbWVuc2lvbnMoZWxlbWVudCksXG4gICAgICB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQ7XG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHZhciBwYXJEaW1zID0gR2V0RGltZW5zaW9ucyhwYXJlbnQpO1xuXG4gICAgYm90dG9tID0gKGVsZURpbXMub2Zmc2V0LnRvcCArIGVsZURpbXMuaGVpZ2h0IDw9IHBhckRpbXMuaGVpZ2h0ICsgcGFyRGltcy5vZmZzZXQudG9wKTtcbiAgICB0b3AgICAgPSAoZWxlRGltcy5vZmZzZXQudG9wID49IHBhckRpbXMub2Zmc2V0LnRvcCk7XG4gICAgbGVmdCAgID0gKGVsZURpbXMub2Zmc2V0LmxlZnQgPj0gcGFyRGltcy5vZmZzZXQubGVmdCk7XG4gICAgcmlnaHQgID0gKGVsZURpbXMub2Zmc2V0LmxlZnQgKyBlbGVEaW1zLndpZHRoIDw9IHBhckRpbXMud2lkdGgpO1xuICB9XG4gIGVsc2Uge1xuICAgIGJvdHRvbSA9IChlbGVEaW1zLm9mZnNldC50b3AgKyBlbGVEaW1zLmhlaWdodCA8PSBlbGVEaW1zLndpbmRvd0RpbXMuaGVpZ2h0ICsgZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3ApO1xuICAgIHRvcCAgICA9IChlbGVEaW1zLm9mZnNldC50b3AgPj0gZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3ApO1xuICAgIGxlZnQgICA9IChlbGVEaW1zLm9mZnNldC5sZWZ0ID49IGVsZURpbXMud2luZG93RGltcy5vZmZzZXQubGVmdCk7XG4gICAgcmlnaHQgID0gKGVsZURpbXMub2Zmc2V0LmxlZnQgKyBlbGVEaW1zLndpZHRoIDw9IGVsZURpbXMud2luZG93RGltcy53aWR0aCk7XG4gIH1cblxuICB2YXIgYWxsRGlycyA9IFtib3R0b20sIHRvcCwgbGVmdCwgcmlnaHRdO1xuXG4gIGlmIChsck9ubHkpIHtcbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgPT09IHRydWU7XG4gIH1cblxuICBpZiAodGJPbmx5KSB7XG4gICAgcmV0dXJuIHRvcCA9PT0gYm90dG9tID09PSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGFsbERpcnMuaW5kZXhPZihmYWxzZSkgPT09IC0xO1xufTtcblxuLyoqXG4gKiBVc2VzIG5hdGl2ZSBtZXRob2RzIHRvIHJldHVybiBhbiBvYmplY3Qgb2YgZGltZW5zaW9uIHZhbHVlcy5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtqUXVlcnkgfHwgSFRNTH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3Qgb3IgRE9NIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGdldCB0aGUgZGltZW5zaW9ucy4gQ2FuIGJlIGFueSBlbGVtZW50IG90aGVyIHRoYXQgZG9jdW1lbnQgb3Igd2luZG93LlxuICogQHJldHVybnMge09iamVjdH0gLSBuZXN0ZWQgb2JqZWN0IG9mIGludGVnZXIgcGl4ZWwgdmFsdWVzXG4gKiBUT0RPIC0gaWYgZWxlbWVudCBpcyB3aW5kb3csIHJldHVybiBvbmx5IHRob3NlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gR2V0RGltZW5zaW9ucyhlbGVtLCB0ZXN0KXtcbiAgZWxlbSA9IGVsZW0ubGVuZ3RoID8gZWxlbVswXSA6IGVsZW07XG5cbiAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkknbSBzb3JyeSwgRGF2ZS4gSSdtIGFmcmFpZCBJIGNhbid0IGRvIHRoYXQuXCIpO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgcGFyUmVjdCA9IGVsZW0ucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpblJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgd2luWSA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIHdpblggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIG9mZnNldDoge1xuICAgICAgdG9wOiByZWN0LnRvcCArIHdpblksXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5YXG4gICAgfSxcbiAgICBwYXJlbnREaW1zOiB7XG4gICAgICB3aWR0aDogcGFyUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcGFyUmVjdC5oZWlnaHQsXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgdG9wOiBwYXJSZWN0LnRvcCArIHdpblksXG4gICAgICAgIGxlZnQ6IHBhclJlY3QubGVmdCArIHdpblhcbiAgICAgIH1cbiAgICB9LFxuICAgIHdpbmRvd0RpbXM6IHtcbiAgICAgIHdpZHRoOiB3aW5SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5SZWN0LmhlaWdodCxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB0b3A6IHdpblksXG4gICAgICAgIGxlZnQ6IHdpblhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0b3AgYW5kIGxlZnQgaW50ZWdlciBwaXhlbCB2YWx1ZXMgZm9yIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGVsZW1lbnRzLFxuICogc3VjaCBhczogVG9vbHRpcCwgUmV2ZWFsLCBhbmQgRHJvcGRvd25cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IGZvciB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICogQHBhcmFtIHtqUXVlcnl9IGFuY2hvciAtIGpRdWVyeSBvYmplY3QgZm9yIHRoZSBlbGVtZW50J3MgYW5jaG9yIHBvaW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHBvc2l0aW9uIC0gYSBzdHJpbmcgcmVsYXRpbmcgdG8gdGhlIGRlc2lyZWQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQsIHJlbGF0aXZlIHRvIGl0J3MgYW5jaG9yXG4gKiBAcGFyYW0ge051bWJlcn0gdk9mZnNldCAtIGludGVnZXIgcGl4ZWwgdmFsdWUgb2YgZGVzaXJlZCB2ZXJ0aWNhbCBzZXBhcmF0aW9uIGJldHdlZW4gYW5jaG9yIGFuZCBlbGVtZW50LlxuICogQHBhcmFtIHtOdW1iZXJ9IGhPZmZzZXQgLSBpbnRlZ2VyIHBpeGVsIHZhbHVlIG9mIGRlc2lyZWQgaG9yaXpvbnRhbCBzZXBhcmF0aW9uIGJldHdlZW4gYW5jaG9yIGFuZCBlbGVtZW50LlxuICogQHBhcmFtIHtCb29sZWFufSBpc092ZXJmbG93IC0gaWYgYSBjb2xsaXNpb24gZXZlbnQgaXMgZGV0ZWN0ZWQsIHNldHMgdG8gdHJ1ZSB0byBkZWZhdWx0IHRoZSBlbGVtZW50IHRvIGZ1bGwgd2lkdGggLSBhbnkgZGVzaXJlZCBvZmZzZXQuXG4gKiBUT0RPIGFsdGVyL3Jld3JpdGUgdG8gd29yayB3aXRoIGBlbWAgdmFsdWVzIGFzIHdlbGwvaW5zdGVhZCBvZiBwaXhlbHNcbiAqL1xuZnVuY3Rpb24gR2V0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsIHBvc2l0aW9uLCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KSB7XG4gIHZhciAkZWxlRGltcyA9IEdldERpbWVuc2lvbnMoZWxlbWVudCksXG4gICAgICAkYW5jaG9yRGltcyA9IGFuY2hvciA/IEdldERpbWVuc2lvbnMoYW5jaG9yKSA6IG51bGw7XG5cbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoRm91bmRhdGlvbi5ydGwoKSA/ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gJGVsZURpbXMud2lkdGggKyAkYW5jaG9yRGltcy53aWR0aCA6ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0KSxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wIC0gKCRlbGVEaW1zLmhlaWdodCArIHZPZmZzZXQpXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gKCRlbGVEaW1zLndpZHRoICsgaE9mZnNldCksXG4gICAgICAgIHRvcDogJGFuY2hvckRpbXMub2Zmc2V0LnRvcFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyAkYW5jaG9yRGltcy53aWR0aCArIGhPZmZzZXQsXG4gICAgICAgIHRvcDogJGFuY2hvckRpbXMub2Zmc2V0LnRvcFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2VudGVyIHRvcCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyAoJGFuY2hvckRpbXMud2lkdGggLyAyKSkgLSAoJGVsZURpbXMud2lkdGggLyAyKSxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wIC0gKCRlbGVEaW1zLmhlaWdodCArIHZPZmZzZXQpXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjZW50ZXIgYm90dG9tJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGlzT3ZlcmZsb3cgPyBoT2Zmc2V0IDogKCgkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICgkYW5jaG9yRGltcy53aWR0aCAvIDIpKSAtICgkZWxlRGltcy53aWR0aCAvIDIpKSxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgJGFuY2hvckRpbXMuaGVpZ2h0ICsgdk9mZnNldFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2VudGVyIGxlZnQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAoJGVsZURpbXMud2lkdGggKyBoT2Zmc2V0KSxcbiAgICAgICAgdG9wOiAoJGFuY2hvckRpbXMub2Zmc2V0LnRvcCArICgkYW5jaG9yRGltcy5oZWlnaHQgLyAyKSkgLSAoJGVsZURpbXMuaGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NlbnRlciByaWdodCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICRhbmNob3JEaW1zLndpZHRoICsgaE9mZnNldCArIDEsXG4gICAgICAgIHRvcDogKCRhbmNob3JEaW1zLm9mZnNldC50b3AgKyAoJGFuY2hvckRpbXMuaGVpZ2h0IC8gMikpIC0gKCRlbGVEaW1zLmhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKCRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LmxlZnQgKyAoJGVsZURpbXMud2luZG93RGltcy53aWR0aCAvIDIpKSAtICgkZWxlRGltcy53aWR0aCAvIDIpLFxuICAgICAgICB0b3A6ICgkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3AgKyAoJGVsZURpbXMud2luZG93RGltcy5oZWlnaHQgLyAyKSkgLSAoJGVsZURpbXMuaGVpZ2h0IC8gMilcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JldmVhbCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoJGVsZURpbXMud2luZG93RGltcy53aWR0aCAtICRlbGVEaW1zLndpZHRoKSAvIDIsXG4gICAgICAgIHRvcDogJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wICsgdk9mZnNldFxuICAgICAgfVxuICAgIGNhc2UgJ3JldmVhbCBmdWxsJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LmxlZnQsXG4gICAgICAgIHRvcDogJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKEZvdW5kYXRpb24ucnRsKCkgPyAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCAtICRlbGVEaW1zLndpZHRoICsgJGFuY2hvckRpbXMud2lkdGggOiAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCksXG4gICAgICAgIHRvcDogJGFuY2hvckRpbXMub2Zmc2V0LnRvcCArICRhbmNob3JEaW1zLmhlaWdodCArIHZPZmZzZXRcbiAgICAgIH1cbiAgfVxufVxuXG59KGpRdWVyeSk7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqIFRoaXMgdXRpbCB3YXMgY3JlYXRlZCBieSBNYXJpdXMgT2xiZXJ0eiAqXG4gKiBQbGVhc2UgdGhhbmsgTWFyaXVzIG9uIEdpdEh1YiAvb3dsYmVydHogKlxuICogb3IgdGhlIHdlYiBodHRwOi8vd3d3Lm1hcml1c29sYmVydHouZGUvICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4ndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbmNvbnN0IGtleUNvZGVzID0ge1xuICA5OiAnVEFCJyxcbiAgMTM6ICdFTlRFUicsXG4gIDI3OiAnRVNDQVBFJyxcbiAgMzI6ICdTUEFDRScsXG4gIDM3OiAnQVJST1dfTEVGVCcsXG4gIDM4OiAnQVJST1dfVVAnLFxuICAzOTogJ0FSUk9XX1JJR0hUJyxcbiAgNDA6ICdBUlJPV19ET1dOJ1xufVxuXG52YXIgY29tbWFuZHMgPSB7fVxuXG52YXIgS2V5Ym9hcmQgPSB7XG4gIGtleXM6IGdldEtleUNvZGVzKGtleUNvZGVzKSxcblxuICAvKipcbiAgICogUGFyc2VzIHRoZSAoa2V5Ym9hcmQpIGV2ZW50IGFuZCByZXR1cm5zIGEgU3RyaW5nIHRoYXQgcmVwcmVzZW50cyBpdHMga2V5XG4gICAqIENhbiBiZSB1c2VkIGxpa2UgRm91bmRhdGlvbi5wYXJzZUtleShldmVudCkgPT09IEZvdW5kYXRpb24ua2V5cy5TUEFDRVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIHRoZSBldmVudCBnZW5lcmF0ZWQgYnkgdGhlIGV2ZW50IGhhbmRsZXJcbiAgICogQHJldHVybiBTdHJpbmcga2V5IC0gU3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUga2V5IHByZXNzZWRcbiAgICovXG4gIHBhcnNlS2V5KGV2ZW50KSB7XG4gICAgdmFyIGtleSA9IGtleUNvZGVzW2V2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGVdIHx8IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSBrZXkgPSBgU0hJRlRfJHtrZXl9YDtcbiAgICBpZiAoZXZlbnQuY3RybEtleSkga2V5ID0gYENUUkxfJHtrZXl9YDtcbiAgICBpZiAoZXZlbnQuYWx0S2V5KSBrZXkgPSBgQUxUXyR7a2V5fWA7XG4gICAgcmV0dXJuIGtleTtcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZ2l2ZW4gKGtleWJvYXJkKSBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIHRoZSBldmVudCBnZW5lcmF0ZWQgYnkgdGhlIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudCAtIEZvdW5kYXRpb24gY29tcG9uZW50J3MgbmFtZSwgZS5nLiBTbGlkZXIgb3IgUmV2ZWFsXG4gICAqIEBwYXJhbSB7T2JqZWN0c30gZnVuY3Rpb25zIC0gY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgdGhhdCBhcmUgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGhhbmRsZUtleShldmVudCwgY29tcG9uZW50LCBmdW5jdGlvbnMpIHtcbiAgICB2YXIgY29tbWFuZExpc3QgPSBjb21tYW5kc1tjb21wb25lbnRdLFxuICAgICAga2V5Q29kZSA9IHRoaXMucGFyc2VLZXkoZXZlbnQpLFxuICAgICAgY21kcyxcbiAgICAgIGNvbW1hbmQsXG4gICAgICBmbjtcblxuICAgIGlmICghY29tbWFuZExpc3QpIHJldHVybiBjb25zb2xlLndhcm4oJ0NvbXBvbmVudCBub3QgZGVmaW5lZCEnKTtcblxuICAgIGlmICh0eXBlb2YgY29tbWFuZExpc3QubHRyID09PSAndW5kZWZpbmVkJykgeyAvLyB0aGlzIGNvbXBvbmVudCBkb2VzIG5vdCBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbHRyIGFuZCBydGxcbiAgICAgICAgY21kcyA9IGNvbW1hbmRMaXN0OyAvLyB1c2UgcGxhaW4gbGlzdFxuICAgIH0gZWxzZSB7IC8vIG1lcmdlIGx0ciBhbmQgcnRsOiBpZiBkb2N1bWVudCBpcyBydGwsIHJ0bCBvdmVyd3JpdGVzIGx0ciBhbmQgdmljZSB2ZXJzYVxuICAgICAgICBpZiAoRm91bmRhdGlvbi5ydGwoKSkgY21kcyA9ICQuZXh0ZW5kKHt9LCBjb21tYW5kTGlzdC5sdHIsIGNvbW1hbmRMaXN0LnJ0bCk7XG5cbiAgICAgICAgZWxzZSBjbWRzID0gJC5leHRlbmQoe30sIGNvbW1hbmRMaXN0LnJ0bCwgY29tbWFuZExpc3QubHRyKTtcbiAgICB9XG4gICAgY29tbWFuZCA9IGNtZHNba2V5Q29kZV07XG5cbiAgICBmbiA9IGZ1bmN0aW9uc1tjb21tYW5kXTtcbiAgICBpZiAoZm4gJiYgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7IC8vIGV4ZWN1dGUgZnVuY3Rpb24gIGlmIGV4aXN0c1xuICAgICAgZm4uYXBwbHkoKTtcbiAgICAgIGlmIChmdW5jdGlvbnMuaGFuZGxlZCB8fCB0eXBlb2YgZnVuY3Rpb25zLmhhbmRsZWQgPT09ICdmdW5jdGlvbicpIHsgLy8gZXhlY3V0ZSBmdW5jdGlvbiB3aGVuIGV2ZW50IHdhcyBoYW5kbGVkXG4gICAgICAgICAgZnVuY3Rpb25zLmhhbmRsZWQuYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZ1bmN0aW9ucy51bmhhbmRsZWQgfHwgdHlwZW9mIGZ1bmN0aW9ucy51bmhhbmRsZWQgPT09ICdmdW5jdGlvbicpIHsgLy8gZXhlY3V0ZSBmdW5jdGlvbiB3aGVuIGV2ZW50IHdhcyBub3QgaGFuZGxlZFxuICAgICAgICAgIGZ1bmN0aW9ucy51bmhhbmRsZWQuYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpbmRzIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBnaXZlbiBgJGVsZW1lbnRgXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gc2VhcmNoIHdpdGhpblxuICAgKiBAcmV0dXJuIHtqUXVlcnl9ICRmb2N1c2FibGUgLSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGhpbiBgJGVsZW1lbnRgXG4gICAqL1xuICBmaW5kRm9jdXNhYmxlKCRlbGVtZW50KSB7XG4gICAgcmV0dXJuICRlbGVtZW50LmZpbmQoJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsICpbdGFiaW5kZXhdLCAqW2NvbnRlbnRlZGl0YWJsZV0nKS5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoISQodGhpcykuaXMoJzp2aXNpYmxlJykgfHwgJCh0aGlzKS5hdHRyKCd0YWJpbmRleCcpIDwgMCkgeyByZXR1cm4gZmFsc2U7IH0gLy9vbmx5IGhhdmUgdmlzaWJsZSBlbGVtZW50cyBhbmQgdGhvc2UgdGhhdCBoYXZlIGEgdGFiaW5kZXggZ3JlYXRlciBvciBlcXVhbCAwXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcG9uZW50IG5hbWUgbmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IC0gRm91bmRhdGlvbiBjb21wb25lbnQsIGUuZy4gU2xpZGVyIG9yIFJldmVhbFxuICAgKiBAcmV0dXJuIFN0cmluZyBjb21wb25lbnROYW1lXG4gICAqL1xuXG4gIHJlZ2lzdGVyKGNvbXBvbmVudE5hbWUsIGNtZHMpIHtcbiAgICBjb21tYW5kc1tjb21wb25lbnROYW1lXSA9IGNtZHM7XG4gIH1cbn1cblxuLypcbiAqIENvbnN0YW50cyBmb3IgZWFzaWVyIGNvbXBhcmluZy5cbiAqIENhbiBiZSB1c2VkIGxpa2UgRm91bmRhdGlvbi5wYXJzZUtleShldmVudCkgPT09IEZvdW5kYXRpb24ua2V5cy5TUEFDRVxuICovXG5mdW5jdGlvbiBnZXRLZXlDb2RlcyhrY3MpIHtcbiAgdmFyIGsgPSB7fTtcbiAgZm9yICh2YXIga2MgaW4ga2NzKSBrW2tjc1trY11dID0ga2NzW2tjXTtcbiAgcmV0dXJuIGs7XG59XG5cbkZvdW5kYXRpb24uS2V5Ym9hcmQgPSBLZXlib2FyZDtcblxufShqUXVlcnkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG4vLyBEZWZhdWx0IHNldCBvZiBtZWRpYSBxdWVyaWVzXG5jb25zdCBkZWZhdWx0UXVlcmllcyA9IHtcbiAgJ2RlZmF1bHQnIDogJ29ubHkgc2NyZWVuJyxcbiAgbGFuZHNjYXBlIDogJ29ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBwb3J0cmFpdCA6ICdvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICByZXRpbmEgOiAnb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJ1xufTtcblxudmFyIE1lZGlhUXVlcnkgPSB7XG4gIHF1ZXJpZXM6IFtdLFxuXG4gIGN1cnJlbnQ6ICcnLFxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbWVkaWEgcXVlcnkgaGVscGVyLCBieSBleHRyYWN0aW5nIHRoZSBicmVha3BvaW50IGxpc3QgZnJvbSB0aGUgQ1NTIGFuZCBhY3RpdmF0aW5nIHRoZSBicmVha3BvaW50IHdhdGNoZXIuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBleHRyYWN0ZWRTdHlsZXMgPSAkKCcuZm91bmRhdGlvbi1tcScpLmNzcygnZm9udC1mYW1pbHknKTtcbiAgICB2YXIgbmFtZWRRdWVyaWVzO1xuXG4gICAgbmFtZWRRdWVyaWVzID0gcGFyc2VTdHlsZVRvT2JqZWN0KGV4dHJhY3RlZFN0eWxlcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZWRRdWVyaWVzKSB7XG4gICAgICBzZWxmLnF1ZXJpZXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgdmFsdWU6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtuYW1lZFF1ZXJpZXNba2V5XX0pYFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKTtcblxuICAgIHRoaXMuX3dhdGNoZXIoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzY3JlZW4gaXMgYXQgbGVhc3QgYXMgd2lkZSBhcyBhIGJyZWFrcG9pbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGJyZWFrcG9pbnQgbWF0Y2hlcywgYGZhbHNlYCBpZiBpdCdzIHNtYWxsZXIuXG4gICAqL1xuICBhdExlYXN0KHNpemUpIHtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmdldChzaXplKTtcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgbWVkaWEgcXVlcnkgb2YgYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGdldC5cbiAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSAtIFRoZSBtZWRpYSBxdWVyeSBvZiB0aGUgYnJlYWtwb2ludCwgb3IgYG51bGxgIGlmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QuXG4gICAqL1xuICBnZXQoc2l6ZSkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5xdWVyaWVzKSB7XG4gICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG4gICAgICBpZiAoc2l6ZSA9PT0gcXVlcnkubmFtZSkgcmV0dXJuIHF1ZXJ5LnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgbmFtZSBieSB0ZXN0aW5nIGV2ZXJ5IGJyZWFrcG9pbnQgYW5kIHJldHVybmluZyB0aGUgbGFzdCBvbmUgdG8gbWF0Y2ggKHRoZSBiaWdnZXN0IG9uZSkuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBOYW1lIG9mIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQuXG4gICAqL1xuICBfZ2V0Q3VycmVudFNpemUoKSB7XG4gICAgdmFyIG1hdGNoZWQ7XG5cbiAgICBmb3IgKHZhciBpIGluIHRoaXMucXVlcmllcykge1xuICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW2ldO1xuXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkudmFsdWUpLm1hdGNoZXMpIHtcbiAgICAgICAgbWF0Y2hlZCA9IHF1ZXJ5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWF0Y2hlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBtYXRjaGVkLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBicmVha3BvaW50IHdhdGNoZXIsIHdoaWNoIGZpcmVzIGFuIGV2ZW50IG9uIHRoZSB3aW5kb3cgd2hlbmV2ZXIgdGhlIGJyZWFrcG9pbnQgY2hhbmdlcy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfd2F0Y2hlcigpIHtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS56Zi5tZWRpYXF1ZXJ5JywgKCkgPT4ge1xuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuXG4gICAgICBpZiAobmV3U2l6ZSAhPT0gdGhpcy5jdXJyZW50KSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdCB0aGUgbWVkaWEgcXVlcnkgY2hhbmdlIG9uIHRoZSB3aW5kb3dcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIFtuZXdTaXplLCB0aGlzLmN1cnJlbnRdKTtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3U2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuRm91bmRhdGlvbi5NZWRpYVF1ZXJ5ID0gTWVkaWFRdWVyeTtcblxuLy8gbWF0Y2hNZWRpYSgpIHBvbHlmaWxsIC0gVGVzdCBhIENTUyBtZWRpYSB0eXBlL3F1ZXJ5IGluIEpTLlxuLy8gQXV0aG9ycyAmIGNvcHlyaWdodCAoYykgMjAxMjogU2NvdHQgSmVobCwgUGF1bCBJcmlzaCwgTmljaG9sYXMgWmFrYXMsIERhdmlkIEtuaWdodC4gRHVhbCBNSVQvQlNEIGxpY2Vuc2VcbndpbmRvdy5tYXRjaE1lZGlhIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSA9IGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBtYXRjaE1lZGl1bSBhcGkgc3VjaCBhcyBJRSA5IGFuZCB3ZWJraXRcbiAgdmFyIHN0eWxlTWVkaWEgPSAod2luZG93LnN0eWxlTWVkaWEgfHwgd2luZG93Lm1lZGlhKTtcblxuICAvLyBGb3IgdGhvc2UgdGhhdCBkb24ndCBzdXBwb3J0IG1hdGNoTWVkaXVtXG4gIGlmICghc3R5bGVNZWRpYSkge1xuICAgIHZhciBzdHlsZSAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcbiAgICBzY3JpcHQgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXSxcbiAgICBpbmZvICAgICAgICA9IG51bGw7XG5cbiAgICBzdHlsZS50eXBlICA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGUuaWQgICAgPSAnbWF0Y2htZWRpYWpzLXRlc3QnO1xuXG4gICAgc2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlLCBzY3JpcHQpO1xuXG4gICAgLy8gJ3N0eWxlLmN1cnJlbnRTdHlsZScgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnd2luZG93LmdldENvbXB1dGVkU3R5bGUnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICBpbmZvID0gKCdnZXRDb21wdXRlZFN0eWxlJyBpbiB3aW5kb3cpICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN0eWxlLCBudWxsKSB8fCBzdHlsZS5jdXJyZW50U3R5bGU7XG5cbiAgICBzdHlsZU1lZGlhID0ge1xuICAgICAgbWF0Y2hNZWRpdW0obWVkaWEpIHtcbiAgICAgICAgdmFyIHRleHQgPSBgQG1lZGlhICR7bWVkaWF9eyAjbWF0Y2htZWRpYWpzLXRlc3QgeyB3aWR0aDogMXB4OyB9IH1gO1xuXG4gICAgICAgIC8vICdzdHlsZS5zdHlsZVNoZWV0JyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICdzdHlsZS50ZXh0Q29udGVudCcgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xuICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGVzdCBpZiBtZWRpYSBxdWVyeSBpcyB0cnVlIG9yIGZhbHNlXG4gICAgICAgIHJldHVybiBpbmZvLndpZHRoID09PSAnMXB4JztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24obWVkaWEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlczogc3R5bGVNZWRpYS5tYXRjaE1lZGl1bShtZWRpYSB8fCAnYWxsJyksXG4gICAgICBtZWRpYTogbWVkaWEgfHwgJ2FsbCdcbiAgICB9O1xuICB9XG59KCkpO1xuXG4vLyBUaGFuayB5b3U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nXG5mdW5jdGlvbiBwYXJzZVN0eWxlVG9PYmplY3Qoc3RyKSB7XG4gIHZhciBzdHlsZU9iamVjdCA9IHt9O1xuXG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgfVxuXG4gIHN0ciA9IHN0ci50cmltKCkuc2xpY2UoMSwgLTEpOyAvLyBicm93c2VycyByZS1xdW90ZSBzdHJpbmcgc3R5bGUgdmFsdWVzXG5cbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBzdHlsZU9iamVjdCA9IHN0ci5zcGxpdCgnJicpLnJlZHVjZShmdW5jdGlvbihyZXQsIHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcbiAgICB2YXIga2V5ID0gcGFydHNbMF07XG4gICAgdmFyIHZhbCA9IHBhcnRzWzFdO1xuICAgIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXG4gICAgLy8gbWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcbiAgICAvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG4gICAgdmFsID0gdmFsID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG5cbiAgICBpZiAoIXJldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXRba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0W2tleV0pKSB7XG4gICAgICByZXRba2V5XS5wdXNoKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldFtrZXldID0gW3JldFtrZXldLCB2YWxdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHN0eWxlT2JqZWN0O1xufVxuXG5Gb3VuZGF0aW9uLk1lZGlhUXVlcnkgPSBNZWRpYVF1ZXJ5O1xuXG59KGpRdWVyeSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbi8qKlxuICogTW90aW9uIG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5tb3Rpb25cbiAqL1xuXG5jb25zdCBpbml0Q2xhc3NlcyAgID0gWydtdWktZW50ZXInLCAnbXVpLWxlYXZlJ107XG5jb25zdCBhY3RpdmVDbGFzc2VzID0gWydtdWktZW50ZXItYWN0aXZlJywgJ211aS1sZWF2ZS1hY3RpdmUnXTtcblxuY29uc3QgTW90aW9uID0ge1xuICBhbmltYXRlSW46IGZ1bmN0aW9uKGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgICBhbmltYXRlKHRydWUsIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpO1xuICB9LFxuXG4gIGFuaW1hdGVPdXQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgICBhbmltYXRlKGZhbHNlLCBlbGVtZW50LCBhbmltYXRpb24sIGNiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBNb3ZlKGR1cmF0aW9uLCBlbGVtLCBmbil7XG4gIHZhciBhbmltLCBwcm9nLCBzdGFydCA9IG51bGw7XG4gIC8vIGNvbnNvbGUubG9nKCdjYWxsZWQnKTtcblxuICBmdW5jdGlvbiBtb3ZlKHRzKXtcbiAgICBpZighc3RhcnQpIHN0YXJ0ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0LCB0cyk7XG4gICAgcHJvZyA9IHRzIC0gc3RhcnQ7XG4gICAgZm4uYXBwbHkoZWxlbSk7XG5cbiAgICBpZihwcm9nIDwgZHVyYXRpb24peyBhbmltID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlLCBlbGVtKTsgfVxuICAgIGVsc2V7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbSk7XG4gICAgICBlbGVtLnRyaWdnZXIoJ2ZpbmlzaGVkLnpmLmFuaW1hdGUnLCBbZWxlbV0pLnRyaWdnZXJIYW5kbGVyKCdmaW5pc2hlZC56Zi5hbmltYXRlJywgW2VsZW1dKTtcbiAgICB9XG4gIH1cbiAgYW5pbSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobW92ZSk7XG59XG5cbi8qKlxuICogQW5pbWF0ZXMgYW4gZWxlbWVudCBpbiBvciBvdXQgdXNpbmcgYSBDU1MgdHJhbnNpdGlvbiBjbGFzcy5cbiAqIEBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNJbiAtIERlZmluZXMgaWYgdGhlIGFuaW1hdGlvbiBpcyBpbiBvciBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvciBIVE1MIG9iamVjdCB0byBhbmltYXRlLlxuICogQHBhcmFtIHtTdHJpbmd9IGFuaW1hdGlvbiAtIENTUyBjbGFzcyB0byB1c2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIENhbGxiYWNrIHRvIHJ1biB3aGVuIGFuaW1hdGlvbiBpcyBmaW5pc2hlZC5cbiAqL1xuZnVuY3Rpb24gYW5pbWF0ZShpc0luLCBlbGVtZW50LCBhbmltYXRpb24sIGNiKSB7XG4gIGVsZW1lbnQgPSAkKGVsZW1lbnQpLmVxKDApO1xuXG4gIGlmICghZWxlbWVudC5sZW5ndGgpIHJldHVybjtcblxuICB2YXIgaW5pdENsYXNzID0gaXNJbiA/IGluaXRDbGFzc2VzWzBdIDogaW5pdENsYXNzZXNbMV07XG4gIHZhciBhY3RpdmVDbGFzcyA9IGlzSW4gPyBhY3RpdmVDbGFzc2VzWzBdIDogYWN0aXZlQ2xhc3Nlc1sxXTtcblxuICAvLyBTZXQgdXAgdGhlIGFuaW1hdGlvblxuICByZXNldCgpO1xuXG4gIGVsZW1lbnRcbiAgICAuYWRkQ2xhc3MoYW5pbWF0aW9uKVxuICAgIC5jc3MoJ3RyYW5zaXRpb24nLCAnbm9uZScpO1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgZWxlbWVudC5hZGRDbGFzcyhpbml0Q2xhc3MpO1xuICAgIGlmIChpc0luKSBlbGVtZW50LnNob3coKTtcbiAgfSk7XG5cbiAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGg7XG4gICAgZWxlbWVudFxuICAgICAgLmNzcygndHJhbnNpdGlvbicsICcnKVxuICAgICAgLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgfSk7XG5cbiAgLy8gQ2xlYW4gdXAgdGhlIGFuaW1hdGlvbiB3aGVuIGl0IGZpbmlzaGVzXG4gIGVsZW1lbnQub25lKEZvdW5kYXRpb24udHJhbnNpdGlvbmVuZChlbGVtZW50KSwgZmluaXNoKTtcblxuICAvLyBIaWRlcyB0aGUgZWxlbWVudCAoZm9yIG91dCBhbmltYXRpb25zKSwgcmVzZXRzIHRoZSBlbGVtZW50LCBhbmQgcnVucyBhIGNhbGxiYWNrXG4gIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICBpZiAoIWlzSW4pIGVsZW1lbnQuaGlkZSgpO1xuICAgIHJlc2V0KCk7XG4gICAgaWYgKGNiKSBjYi5hcHBseShlbGVtZW50KTtcbiAgfVxuXG4gIC8vIFJlc2V0cyB0cmFuc2l0aW9ucyBhbmQgcmVtb3ZlcyBtb3Rpb24tc3BlY2lmaWMgY2xhc3Nlc1xuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBlbGVtZW50WzBdLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IDA7XG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcyhgJHtpbml0Q2xhc3N9ICR7YWN0aXZlQ2xhc3N9ICR7YW5pbWF0aW9ufWApO1xuICB9XG59XG5cbkZvdW5kYXRpb24uTW92ZSA9IE1vdmU7XG5Gb3VuZGF0aW9uLk1vdGlvbiA9IE1vdGlvbjtcblxufShqUXVlcnkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG5jb25zdCBOZXN0ID0ge1xuICBGZWF0aGVyKG1lbnUsIHR5cGUgPSAnemYnKSB7XG4gICAgbWVudS5hdHRyKCdyb2xlJywgJ21lbnViYXInKTtcblxuICAgIHZhciBpdGVtcyA9IG1lbnUuZmluZCgnbGknKS5hdHRyKHsncm9sZSc6ICdtZW51aXRlbSd9KSxcbiAgICAgICAgc3ViTWVudUNsYXNzID0gYGlzLSR7dHlwZX0tc3VibWVudWAsXG4gICAgICAgIHN1Ykl0ZW1DbGFzcyA9IGAke3N1Yk1lbnVDbGFzc30taXRlbWAsXG4gICAgICAgIGhhc1N1YkNsYXNzID0gYGlzLSR7dHlwZX0tc3VibWVudS1wYXJlbnRgO1xuXG4gICAgbWVudS5maW5kKCdhOmZpcnN0JykuYXR0cigndGFiaW5kZXgnLCAwKTtcblxuICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJGl0ZW0gPSAkKHRoaXMpLFxuICAgICAgICAgICRzdWIgPSAkaXRlbS5jaGlsZHJlbigndWwnKTtcblxuICAgICAgaWYgKCRzdWIubGVuZ3RoKSB7XG4gICAgICAgICRpdGVtXG4gICAgICAgICAgLmFkZENsYXNzKGhhc1N1YkNsYXNzKVxuICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogZmFsc2UsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICRpdGVtLmNoaWxkcmVuKCdhOmZpcnN0JykudGV4dCgpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgJHN1YlxuICAgICAgICAgIC5hZGRDbGFzcyhgc3VibWVudSAke3N1Yk1lbnVDbGFzc31gKVxuICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICdkYXRhLXN1Ym1lbnUnOiAnJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAgICAgICAncm9sZSc6ICdtZW51J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJGl0ZW0ucGFyZW50KCdbZGF0YS1zdWJtZW51XScpLmxlbmd0aCkge1xuICAgICAgICAkaXRlbS5hZGRDbGFzcyhgaXMtc3VibWVudS1pdGVtICR7c3ViSXRlbUNsYXNzfWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIEJ1cm4obWVudSwgdHlwZSkge1xuICAgIHZhciBpdGVtcyA9IG1lbnUuZmluZCgnbGknKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpLFxuICAgICAgICBzdWJNZW51Q2xhc3MgPSBgaXMtJHt0eXBlfS1zdWJtZW51YCxcbiAgICAgICAgc3ViSXRlbUNsYXNzID0gYCR7c3ViTWVudUNsYXNzfS1pdGVtYCxcbiAgICAgICAgaGFzU3ViQ2xhc3MgPSBgaXMtJHt0eXBlfS1zdWJtZW51LXBhcmVudGA7XG5cbiAgICBtZW51XG4gICAgICAuZmluZCgnKicpXG4gICAgICAucmVtb3ZlQ2xhc3MoYCR7c3ViTWVudUNsYXNzfSAke3N1Ykl0ZW1DbGFzc30gJHtoYXNTdWJDbGFzc30gaXMtc3VibWVudS1pdGVtIHN1Ym1lbnUgaXMtYWN0aXZlYClcbiAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXN1Ym1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnJyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyggICAgICBtZW51LmZpbmQoJy4nICsgc3ViTWVudUNsYXNzICsgJywgLicgKyBzdWJJdGVtQ2xhc3MgKyAnLCAuaGFzLXN1Ym1lbnUsIC5pcy1zdWJtZW51LWl0ZW0sIC5zdWJtZW51LCBbZGF0YS1zdWJtZW51XScpXG4gICAgLy8gICAgICAgICAgIC5yZW1vdmVDbGFzcyhzdWJNZW51Q2xhc3MgKyAnICcgKyBzdWJJdGVtQ2xhc3MgKyAnIGhhcy1zdWJtZW51IGlzLXN1Ym1lbnUtaXRlbSBzdWJtZW51JylcbiAgICAvLyAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3VibWVudScpKTtcbiAgICAvLyBpdGVtcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgLy8gICB2YXIgJGl0ZW0gPSAkKHRoaXMpLFxuICAgIC8vICAgICAgICRzdWIgPSAkaXRlbS5jaGlsZHJlbigndWwnKTtcbiAgICAvLyAgIGlmKCRpdGVtLnBhcmVudCgnW2RhdGEtc3VibWVudV0nKS5sZW5ndGgpe1xuICAgIC8vICAgICAkaXRlbS5yZW1vdmVDbGFzcygnaXMtc3VibWVudS1pdGVtICcgKyBzdWJJdGVtQ2xhc3MpO1xuICAgIC8vICAgfVxuICAgIC8vICAgaWYoJHN1Yi5sZW5ndGgpe1xuICAgIC8vICAgICAkaXRlbS5yZW1vdmVDbGFzcygnaGFzLXN1Ym1lbnUnKTtcbiAgICAvLyAgICAgJHN1Yi5yZW1vdmVDbGFzcygnc3VibWVudSAnICsgc3ViTWVudUNsYXNzKS5yZW1vdmVBdHRyKCdkYXRhLXN1Ym1lbnUnKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgfVxufVxuXG5Gb3VuZGF0aW9uLk5lc3QgPSBOZXN0O1xuXG59KGpRdWVyeSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbiFmdW5jdGlvbigkKSB7XG5cbmZ1bmN0aW9uIFRpbWVyKGVsZW0sIG9wdGlvbnMsIGNiKSB7XG4gIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sLy9vcHRpb25zIGlzIGFuIG9iamVjdCBmb3IgZWFzaWx5IGFkZGluZyBmZWF0dXJlcyBsYXRlci5cbiAgICAgIG5hbWVTcGFjZSA9IE9iamVjdC5rZXlzKGVsZW0uZGF0YSgpKVswXSB8fCAndGltZXInLFxuICAgICAgcmVtYWluID0gLTEsXG4gICAgICBzdGFydCxcbiAgICAgIHRpbWVyO1xuXG4gIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcblxuICB0aGlzLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZW1haW4gPSAtMTtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgLy8gaWYoIWVsZW0uZGF0YSgncGF1c2VkJykpeyByZXR1cm4gZmFsc2U7IH0vL21heWJlIGltcGxlbWVudCB0aGlzIHNhbml0eSBjaGVjayBpZiB1c2VkIGZvciBvdGhlciB0aGluZ3MuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICByZW1haW4gPSByZW1haW4gPD0gMCA/IGR1cmF0aW9uIDogcmVtYWluO1xuICAgIGVsZW0uZGF0YSgncGF1c2VkJywgZmFsc2UpO1xuICAgIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGlmKG9wdGlvbnMuaW5maW5pdGUpe1xuICAgICAgICBfdGhpcy5yZXN0YXJ0KCk7Ly9yZXJ1biB0aGUgdGltZXIuXG4gICAgICB9XG4gICAgICBjYigpO1xuICAgIH0sIHJlbWFpbik7XG4gICAgZWxlbS50cmlnZ2VyKGB0aW1lcnN0YXJ0LnpmLiR7bmFtZVNwYWNlfWApO1xuICB9XG5cbiAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgIC8vaWYoZWxlbS5kYXRhKCdwYXVzZWQnKSl7IHJldHVybiBmYWxzZTsgfS8vbWF5YmUgaW1wbGVtZW50IHRoaXMgc2FuaXR5IGNoZWNrIGlmIHVzZWQgZm9yIG90aGVyIHRoaW5ncy5cbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGVsZW0uZGF0YSgncGF1c2VkJywgdHJ1ZSk7XG4gICAgdmFyIGVuZCA9IERhdGUubm93KCk7XG4gICAgcmVtYWluID0gcmVtYWluIC0gKGVuZCAtIHN0YXJ0KTtcbiAgICBlbGVtLnRyaWdnZXIoYHRpbWVycGF1c2VkLnpmLiR7bmFtZVNwYWNlfWApO1xuICB9XG59XG5cbi8qKlxuICogUnVucyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gaW1hZ2VzIGFyZSBmdWxseSBsb2FkZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gaW1hZ2VzIC0gSW1hZ2UocykgdG8gY2hlY2sgaWYgbG9hZGVkLlxuICogQHBhcmFtIHtGdW5jfSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBpbWFnZSBpcyBmdWxseSBsb2FkZWQuXG4gKi9cbmZ1bmN0aW9uIG9uSW1hZ2VzTG9hZGVkKGltYWdlcywgY2FsbGJhY2spe1xuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICB1bmxvYWRlZCA9IGltYWdlcy5sZW5ndGg7XG5cbiAgaWYgKHVubG9hZGVkID09PSAwKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxuXG4gIGltYWdlcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXRlKSB7XG4gICAgICBzaW5nbGVJbWFnZUxvYWRlZCgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5uYXR1cmFsV2lkdGggIT09ICd1bmRlZmluZWQnICYmIHRoaXMubmF0dXJhbFdpZHRoID4gMCkge1xuICAgICAgc2luZ2xlSW1hZ2VMb2FkZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLm9uZSgnbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzaW5nbGVJbWFnZUxvYWRlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzaW5nbGVJbWFnZUxvYWRlZCgpIHtcbiAgICB1bmxvYWRlZC0tO1xuICAgIGlmICh1bmxvYWRlZCA9PT0gMCkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn1cblxuRm91bmRhdGlvbi5UaW1lciA9IFRpbWVyO1xuRm91bmRhdGlvbi5vbkltYWdlc0xvYWRlZCA9IG9uSW1hZ2VzTG9hZGVkO1xuXG59KGpRdWVyeSk7XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyoqV29yayBpbnNwaXJlZCBieSBtdWx0aXBsZSBqcXVlcnkgc3dpcGUgcGx1Z2lucyoqXG4vLyoqRG9uZSBieSBZb2hhaSBBcmFyYXQgKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4oZnVuY3Rpb24oJCkge1xuXG4gICQuc3BvdFN3aXBlID0ge1xuICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgZW5hYmxlZDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgIHByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgICBtb3ZlVGhyZXNob2xkOiA3NSxcbiAgICB0aW1lVGhyZXNob2xkOiAyMDBcbiAgfTtcblxuICB2YXIgICBzdGFydFBvc1gsXG4gICAgICAgIHN0YXJ0UG9zWSxcbiAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICBlbGFwc2VkVGltZSxcbiAgICAgICAgaXNNb3ZpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgIC8vICBhbGVydCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgaXNNb3ZpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAoJC5zcG90U3dpcGUucHJldmVudERlZmF1bHQpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9XG4gICAgaWYoaXNNb3ZpbmcpIHtcbiAgICAgIHZhciB4ID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgdmFyIHkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICB2YXIgZHggPSBzdGFydFBvc1ggLSB4O1xuICAgICAgdmFyIGR5ID0gc3RhcnRQb3NZIC0geTtcbiAgICAgIHZhciBkaXI7XG4gICAgICBlbGFwc2VkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lO1xuICAgICAgaWYoTWF0aC5hYnMoZHgpID49ICQuc3BvdFN3aXBlLm1vdmVUaHJlc2hvbGQgJiYgZWxhcHNlZFRpbWUgPD0gJC5zcG90U3dpcGUudGltZVRocmVzaG9sZCkge1xuICAgICAgICBkaXIgPSBkeCA+IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgfVxuICAgICAgLy8gZWxzZSBpZihNYXRoLmFicyhkeSkgPj0gJC5zcG90U3dpcGUubW92ZVRocmVzaG9sZCAmJiBlbGFwc2VkVGltZSA8PSAkLnNwb3RTd2lwZS50aW1lVGhyZXNob2xkKSB7XG4gICAgICAvLyAgIGRpciA9IGR5ID4gMCA/ICdkb3duJyA6ICd1cCc7XG4gICAgICAvLyB9XG4gICAgICBpZihkaXIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvblRvdWNoRW5kLmNhbGwodGhpcyk7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignc3dpcGUnLCBkaXIpLnRyaWdnZXIoYHN3aXBlJHtkaXJ9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICBzdGFydFBvc1ggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICBzdGFydFBvc1kgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICBpc01vdmluZyA9IHRydWU7XG4gICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgJiYgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICB9XG5cbiAgJC5ldmVudC5zcGVjaWFsLnN3aXBlID0geyBzZXR1cDogaW5pdCB9O1xuXG4gICQuZWFjaChbJ2xlZnQnLCAndXAnLCAnZG93bicsICdyaWdodCddLCBmdW5jdGlvbiAoKSB7XG4gICAgJC5ldmVudC5zcGVjaWFsW2Bzd2lwZSR7dGhpc31gXSA9IHsgc2V0dXA6IGZ1bmN0aW9uKCl7XG4gICAgICAkKHRoaXMpLm9uKCdzd2lwZScsICQubm9vcCk7XG4gICAgfSB9O1xuICB9KTtcbn0pKGpRdWVyeSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTWV0aG9kIGZvciBhZGRpbmcgcHN1ZWRvIGRyYWcgZXZlbnRzIHRvIGVsZW1lbnRzICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4hZnVuY3Rpb24oJCl7XG4gICQuZm4uYWRkVG91Y2ggPSBmdW5jdGlvbigpe1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLGVsKXtcbiAgICAgICQoZWwpLmJpbmQoJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsJyxmdW5jdGlvbigpe1xuICAgICAgICAvL3dlIHBhc3MgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdCBiZWNhdXNlIHRoZSBqUXVlcnkgZXZlbnRcbiAgICAgICAgLy9vYmplY3QgaXMgbm9ybWFsaXplZCB0byB3M2Mgc3BlY3MgYW5kIGRvZXMgbm90IHByb3ZpZGUgdGhlIFRvdWNoTGlzdFxuICAgICAgICBoYW5kbGVUb3VjaChldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBoYW5kbGVUb3VjaCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgZmlyc3QgPSB0b3VjaGVzWzBdLFxuICAgICAgICAgIGV2ZW50VHlwZXMgPSB7XG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgICAgICAgIHRvdWNobW92ZTogJ21vdXNlbW92ZScsXG4gICAgICAgICAgICB0b3VjaGVuZDogJ21vdXNldXAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlID0gZXZlbnRUeXBlc1tldmVudC50eXBlXSxcbiAgICAgICAgICBzaW11bGF0ZWRFdmVudFxuICAgICAgICA7XG5cbiAgICAgIGlmKCdNb3VzZUV2ZW50JyBpbiB3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdy5Nb3VzZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNpbXVsYXRlZEV2ZW50ID0gd2luZG93Lk1vdXNlRXZlbnQodHlwZSwge1xuICAgICAgICAgICdidWJibGVzJzogdHJ1ZSxcbiAgICAgICAgICAnY2FuY2VsYWJsZSc6IHRydWUsXG4gICAgICAgICAgJ3NjcmVlblgnOiBmaXJzdC5zY3JlZW5YLFxuICAgICAgICAgICdzY3JlZW5ZJzogZmlyc3Quc2NyZWVuWSxcbiAgICAgICAgICAnY2xpZW50WCc6IGZpcnN0LmNsaWVudFgsXG4gICAgICAgICAgJ2NsaWVudFknOiBmaXJzdC5jbGllbnRZXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudCcpO1xuICAgICAgICBzaW11bGF0ZWRFdmVudC5pbml0TW91c2VFdmVudCh0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDEsIGZpcnN0LnNjcmVlblgsIGZpcnN0LnNjcmVlblksIGZpcnN0LmNsaWVudFgsIGZpcnN0LmNsaWVudFksIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLypsZWZ0Ki8sIG51bGwpO1xuICAgICAgfVxuICAgICAgZmlyc3QudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc2ltdWxhdGVkRXZlbnQpO1xuICAgIH07XG4gIH07XG59KGpRdWVyeSk7XG5cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyoqRnJvbSB0aGUgalF1ZXJ5IE1vYmlsZSBMaWJyYXJ5Kipcbi8vKipuZWVkIHRvIHJlY3JlYXRlIGZ1bmN0aW9uYWxpdHkqKlxuLy8qKmFuZCB0cnkgdG8gaW1wcm92ZSBpZiBwb3NzaWJsZSoqXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLyogUmVtb3ZpbmcgdGhlIGpRdWVyeSBmdW5jdGlvbiAqKioqXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuKGZ1bmN0aW9uKCAkLCB3aW5kb3csIHVuZGVmaW5lZCApIHtcblxuXHR2YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgKSxcblx0XHQvLyBzdXBwb3J0VG91Y2ggPSAkLm1vYmlsZS5zdXBwb3J0LnRvdWNoLFxuXHRcdHRvdWNoU3RhcnRFdmVudCA9ICd0b3VjaHN0YXJ0Jy8vc3VwcG9ydFRvdWNoID8gXCJ0b3VjaHN0YXJ0XCIgOiBcIm1vdXNlZG93blwiLFxuXHRcdHRvdWNoU3RvcEV2ZW50ID0gJ3RvdWNoZW5kJy8vc3VwcG9ydFRvdWNoID8gXCJ0b3VjaGVuZFwiIDogXCJtb3VzZXVwXCIsXG5cdFx0dG91Y2hNb3ZlRXZlbnQgPSAndG91Y2htb3ZlJy8vc3VwcG9ydFRvdWNoID8gXCJ0b3VjaG1vdmVcIiA6IFwibW91c2Vtb3ZlXCI7XG5cblx0Ly8gc2V0dXAgbmV3IGV2ZW50IHNob3J0Y3V0c1xuXHQkLmVhY2goICggXCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCBcIiArXG5cdFx0XCJzd2lwZSBzd2lwZWxlZnQgc3dpcGVyaWdodFwiICkuc3BsaXQoIFwiIFwiICksIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXG5cdFx0JC5mblsgbmFtZSBdID0gZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0cmV0dXJuIGZuID8gdGhpcy5iaW5kKCBuYW1lLCBmbiApIDogdGhpcy50cmlnZ2VyKCBuYW1lICk7XG5cdFx0fTtcblxuXHRcdC8vIGpRdWVyeSA8IDEuOFxuXHRcdGlmICggJC5hdHRyRm4gKSB7XG5cdFx0XHQkLmF0dHJGblsgbmFtZSBdID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHRyaWdnZXJDdXN0b21FdmVudCggb2JqLCBldmVudFR5cGUsIGV2ZW50LCBidWJibGUgKSB7XG5cdFx0dmFyIG9yaWdpbmFsVHlwZSA9IGV2ZW50LnR5cGU7XG5cdFx0ZXZlbnQudHlwZSA9IGV2ZW50VHlwZTtcblx0XHRpZiAoIGJ1YmJsZSApIHtcblx0XHRcdCQuZXZlbnQudHJpZ2dlciggZXZlbnQsIHVuZGVmaW5lZCwgb2JqICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQuZXZlbnQuZGlzcGF0Y2guY2FsbCggb2JqLCBldmVudCApO1xuXHRcdH1cblx0XHRldmVudC50eXBlID0gb3JpZ2luYWxUeXBlO1xuXHR9XG5cblx0Ly8gYWxzbyBoYW5kbGVzIHRhcGhvbGRcblxuXHQvLyBBbHNvIGhhbmRsZXMgc3dpcGVsZWZ0LCBzd2lwZXJpZ2h0XG5cdCQuZXZlbnQuc3BlY2lhbC5zd2lwZSA9IHtcblxuXHRcdC8vIE1vcmUgdGhhbiB0aGlzIGhvcml6b250YWwgZGlzcGxhY2VtZW50LCBhbmQgd2Ugd2lsbCBzdXBwcmVzcyBzY3JvbGxpbmcuXG5cdFx0c2Nyb2xsU3VwcmVzc2lvblRocmVzaG9sZDogMzAsXG5cblx0XHQvLyBNb3JlIHRpbWUgdGhhbiB0aGlzLCBhbmQgaXQgaXNuJ3QgYSBzd2lwZS5cblx0XHRkdXJhdGlvblRocmVzaG9sZDogMTAwMCxcblxuXHRcdC8vIFN3aXBlIGhvcml6b250YWwgZGlzcGxhY2VtZW50IG11c3QgYmUgbW9yZSB0aGFuIHRoaXMuXG5cdFx0aG9yaXpvbnRhbERpc3RhbmNlVGhyZXNob2xkOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+PSAyID8gMTUgOiAzMCxcblxuXHRcdC8vIFN3aXBlIHZlcnRpY2FsIGRpc3BsYWNlbWVudCBtdXN0IGJlIGxlc3MgdGhhbiB0aGlzLlxuXHRcdHZlcnRpY2FsRGlzdGFuY2VUaHJlc2hvbGQ6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID49IDIgPyAxNSA6IDMwLFxuXG5cdFx0Z2V0TG9jYXRpb246IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdFx0XHR2YXIgd2luUGFnZVggPSB3aW5kb3cucGFnZVhPZmZzZXQsXG5cdFx0XHRcdHdpblBhZ2VZID0gd2luZG93LnBhZ2VZT2Zmc2V0LFxuXHRcdFx0XHR4ID0gZXZlbnQuY2xpZW50WCxcblx0XHRcdFx0eSA9IGV2ZW50LmNsaWVudFk7XG5cblx0XHRcdGlmICggZXZlbnQucGFnZVkgPT09IDAgJiYgTWF0aC5mbG9vciggeSApID4gTWF0aC5mbG9vciggZXZlbnQucGFnZVkgKSB8fFxuXHRcdFx0XHRldmVudC5wYWdlWCA9PT0gMCAmJiBNYXRoLmZsb29yKCB4ICkgPiBNYXRoLmZsb29yKCBldmVudC5wYWdlWCApICkge1xuXG5cdFx0XHRcdC8vIGlPUzQgY2xpZW50WC9jbGllbnRZIGhhdmUgdGhlIHZhbHVlIHRoYXQgc2hvdWxkIGhhdmUgYmVlblxuXHRcdFx0XHQvLyBpbiBwYWdlWC9wYWdlWS4gV2hpbGUgcGFnZVgvcGFnZS8gaGF2ZSB0aGUgdmFsdWUgMFxuXHRcdFx0XHR4ID0geCAtIHdpblBhZ2VYO1xuXHRcdFx0XHR5ID0geSAtIHdpblBhZ2VZO1xuXHRcdFx0fSBlbHNlIGlmICggeSA8ICggZXZlbnQucGFnZVkgLSB3aW5QYWdlWSkgfHwgeCA8ICggZXZlbnQucGFnZVggLSB3aW5QYWdlWCApICkge1xuXG5cdFx0XHRcdC8vIFNvbWUgQW5kcm9pZCBicm93c2VycyBoYXZlIHRvdGFsbHkgYm9ndXMgdmFsdWVzIGZvciBjbGllbnRYL1lcblx0XHRcdFx0Ly8gd2hlbiBzY3JvbGxpbmcvem9vbWluZyBhIHBhZ2UuIERldGVjdGFibGUgc2luY2UgY2xpZW50WC9jbGllbnRZXG5cdFx0XHRcdC8vIHNob3VsZCBuZXZlciBiZSBzbWFsbGVyIHRoYW4gcGFnZVgvcGFnZVkgbWludXMgcGFnZSBzY3JvbGxcblx0XHRcdFx0eCA9IGV2ZW50LnBhZ2VYIC0gd2luUGFnZVg7XG5cdFx0XHRcdHkgPSBldmVudC5wYWdlWSAtIHdpblBhZ2VZO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiB4LFxuXHRcdFx0XHR5OiB5XG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRzdGFydDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIGRhdGEgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgP1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1sgMCBdIDogZXZlbnQsXG5cdFx0XHRcdGxvY2F0aW9uID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLmdldExvY2F0aW9uKCBkYXRhICk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZTogKCBuZXcgRGF0ZSgpICkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcdFx0Y29vcmRzOiBbIGxvY2F0aW9uLngsIGxvY2F0aW9uLnkgXSxcblx0XHRcdFx0XHRcdG9yaWdpbjogJCggZXZlbnQudGFyZ2V0IClcblx0XHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgZGF0YSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA/XG5cdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWyAwIF0gOiBldmVudCxcblx0XHRcdFx0bG9jYXRpb24gPSAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZ2V0TG9jYXRpb24oIGRhdGEgKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0aW1lOiAoIG5ldyBEYXRlKCkgKS5nZXRUaW1lKCksXG5cdFx0XHRcdFx0XHRjb29yZHM6IFsgbG9jYXRpb24ueCwgbG9jYXRpb24ueSBdXG5cdFx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0aGFuZGxlU3dpcGU6IGZ1bmN0aW9uKCBzdGFydCwgc3RvcCwgdGhpc09iamVjdCwgb3JpZ1RhcmdldCApIHtcblx0XHRcdGlmICggc3RvcC50aW1lIC0gc3RhcnQudGltZSA8ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5kdXJhdGlvblRocmVzaG9sZCAmJlxuXHRcdFx0XHRNYXRoLmFicyggc3RhcnQuY29vcmRzWyAwIF0gLSBzdG9wLmNvb3Jkc1sgMCBdICkgPiAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuaG9yaXpvbnRhbERpc3RhbmNlVGhyZXNob2xkICYmXG5cdFx0XHRcdE1hdGguYWJzKCBzdGFydC5jb29yZHNbIDEgXSAtIHN0b3AuY29vcmRzWyAxIF0gKSA8ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS52ZXJ0aWNhbERpc3RhbmNlVGhyZXNob2xkICkge1xuXHRcdFx0XHR2YXIgZGlyZWN0aW9uID0gc3RhcnQuY29vcmRzWzBdID4gc3RvcC5jb29yZHNbIDAgXSA/IFwic3dpcGVsZWZ0XCIgOiBcInN3aXBlcmlnaHRcIjtcblxuXHRcdFx0XHR0cmlnZ2VyQ3VzdG9tRXZlbnQoIHRoaXNPYmplY3QsIFwic3dpcGVcIiwgJC5FdmVudCggXCJzd2lwZVwiLCB7IHRhcmdldDogb3JpZ1RhcmdldCwgc3dpcGVzdGFydDogc3RhcnQsIHN3aXBlc3RvcDogc3RvcCB9KSwgdHJ1ZSApO1xuXHRcdFx0XHR0cmlnZ2VyQ3VzdG9tRXZlbnQoIHRoaXNPYmplY3QsIGRpcmVjdGlvbiwkLkV2ZW50KCBkaXJlY3Rpb24sIHsgdGFyZ2V0OiBvcmlnVGFyZ2V0LCBzd2lwZXN0YXJ0OiBzdGFydCwgc3dpcGVzdG9wOiBzdG9wIH0gKSwgdHJ1ZSApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH0sXG5cblx0XHQvLyBUaGlzIHNlcnZlcyBhcyBhIGZsYWcgdG8gZW5zdXJlIHRoYXQgYXQgbW9zdCBvbmUgc3dpcGUgZXZlbnQgZXZlbnQgaXNcblx0XHQvLyBpbiB3b3JrIGF0IGFueSBnaXZlbiB0aW1lXG5cdFx0ZXZlbnRJblByb2dyZXNzOiBmYWxzZSxcblxuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBldmVudHMsXG5cdFx0XHRcdHRoaXNPYmplY3QgPSB0aGlzLFxuXHRcdFx0XHQkdGhpcyA9ICQoIHRoaXNPYmplY3QgKSxcblx0XHRcdFx0Y29udGV4dCA9IHt9O1xuXG5cdFx0XHQvLyBSZXRyaWV2ZSB0aGUgZXZlbnRzIGRhdGEgZm9yIHRoaXMgZWxlbWVudCBhbmQgYWRkIHRoZSBzd2lwZSBjb250ZXh0XG5cdFx0XHRldmVudHMgPSAkLmRhdGEoIHRoaXMsIFwibW9iaWxlLWV2ZW50c1wiICk7XG5cdFx0XHRpZiAoICFldmVudHMgKSB7XG5cdFx0XHRcdGV2ZW50cyA9IHsgbGVuZ3RoOiAwIH07XG5cdFx0XHRcdCQuZGF0YSggdGhpcywgXCJtb2JpbGUtZXZlbnRzXCIsIGV2ZW50cyApO1xuXHRcdFx0fVxuXHRcdFx0ZXZlbnRzLmxlbmd0aCsrO1xuXHRcdFx0ZXZlbnRzLnN3aXBlID0gY29udGV4dDtcblxuXHRcdFx0Y29udGV4dC5zdGFydCA9IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0XHQvLyBCYWlsIGlmIHdlJ3JlIGFscmVhZHkgd29ya2luZyBvbiBhIHN3aXBlIGV2ZW50XG5cdFx0XHRcdGlmICggJC5ldmVudC5zcGVjaWFsLnN3aXBlLmV2ZW50SW5Qcm9ncmVzcyApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsLnN3aXBlLmV2ZW50SW5Qcm9ncmVzcyA9IHRydWU7XG5cblx0XHRcdFx0dmFyIHN0b3AsXG5cdFx0XHRcdFx0c3RhcnQgPSAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuc3RhcnQoIGV2ZW50ICksXG5cdFx0XHRcdFx0b3JpZ1RhcmdldCA9IGV2ZW50LnRhcmdldCxcblx0XHRcdFx0XHRlbWl0dGVkID0gZmFsc2U7XG5cblx0XHRcdFx0Y29udGV4dC5tb3ZlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRcdGlmICggIXN0YXJ0IHx8IGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN0b3AgPSAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuc3RvcCggZXZlbnQgKTtcblx0XHRcdFx0XHRpZiAoICFlbWl0dGVkICkge1xuXHRcdFx0XHRcdFx0ZW1pdHRlZCA9ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5oYW5kbGVTd2lwZSggc3RhcnQsIHN0b3AsIHRoaXNPYmplY3QsIG9yaWdUYXJnZXQgKTtcblx0XHRcdFx0XHRcdGlmICggZW1pdHRlZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZXNldCB0aGUgY29udGV4dCB0byBtYWtlIHdheSBmb3IgdGhlIG5leHQgc3dpcGUgZXZlbnRcblx0XHRcdFx0XHRcdFx0JC5ldmVudC5zcGVjaWFsLnN3aXBlLmV2ZW50SW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBwcmV2ZW50IHNjcm9sbGluZ1xuXHRcdFx0XHRcdGlmICggTWF0aC5hYnMoIHN0YXJ0LmNvb3Jkc1sgMCBdIC0gc3RvcC5jb29yZHNbIDAgXSApID4gJC5ldmVudC5zcGVjaWFsLnN3aXBlLnNjcm9sbFN1cHJlc3Npb25UaHJlc2hvbGQgKSB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb250ZXh0LnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGVtaXR0ZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHQvLyBSZXNldCB0aGUgY29udGV4dCB0byBtYWtlIHdheSBmb3IgdGhlIG5leHQgc3dpcGUgZXZlbnRcblx0XHRcdFx0XHRcdCQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ldmVudEluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRcdCRkb2N1bWVudC5vZmYoIHRvdWNoTW92ZUV2ZW50LCBjb250ZXh0Lm1vdmUgKTtcblx0XHRcdFx0XHRcdGNvbnRleHQubW92ZSA9IG51bGw7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0JGRvY3VtZW50Lm9uKCB0b3VjaE1vdmVFdmVudCwgY29udGV4dC5tb3ZlIClcblx0XHRcdFx0XHQub25lKCB0b3VjaFN0b3BFdmVudCwgY29udGV4dC5zdG9wICk7XG5cdFx0XHR9O1xuXHRcdFx0JHRoaXMub24oIHRvdWNoU3RhcnRFdmVudCwgY29udGV4dC5zdGFydCApO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZXZlbnRzLCBjb250ZXh0O1xuXG5cdFx0XHRldmVudHMgPSAkLmRhdGEoIHRoaXMsIFwibW9iaWxlLWV2ZW50c1wiICk7XG5cdFx0XHRpZiAoIGV2ZW50cyApIHtcblx0XHRcdFx0Y29udGV4dCA9IGV2ZW50cy5zd2lwZTtcblx0XHRcdFx0ZGVsZXRlIGV2ZW50cy5zd2lwZTtcblx0XHRcdFx0ZXZlbnRzLmxlbmd0aC0tO1xuXHRcdFx0XHRpZiAoIGV2ZW50cy5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0JC5yZW1vdmVEYXRhKCB0aGlzLCBcIm1vYmlsZS1ldmVudHNcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggY29udGV4dCApIHtcblx0XHRcdFx0aWYgKCBjb250ZXh0LnN0YXJ0ICkge1xuXHRcdFx0XHRcdCQoIHRoaXMgKS5vZmYoIHRvdWNoU3RhcnRFdmVudCwgY29udGV4dC5zdGFydCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggY29udGV4dC5tb3ZlICkge1xuXHRcdFx0XHRcdCRkb2N1bWVudC5vZmYoIHRvdWNoTW92ZUV2ZW50LCBjb250ZXh0Lm1vdmUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGNvbnRleHQuc3RvcCApIHtcblx0XHRcdFx0XHQkZG9jdW1lbnQub2ZmKCB0b3VjaFN0b3BFdmVudCwgY29udGV4dC5zdG9wICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdCQuZWFjaCh7XG5cdFx0c3dpcGVsZWZ0OiBcInN3aXBlLmxlZnRcIixcblx0XHRzd2lwZXJpZ2h0OiBcInN3aXBlLnJpZ2h0XCJcblx0fSwgZnVuY3Rpb24oIGV2ZW50LCBzb3VyY2VFdmVudCApIHtcblxuXHRcdCQuZXZlbnQuc3BlY2lhbFsgZXZlbnQgXSA9IHtcblx0XHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0JCggdGhpcyApLmJpbmQoIHNvdXJjZUV2ZW50LCAkLm5vb3AgKTtcblx0XHRcdH0sXG5cdFx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoIHRoaXMgKS51bmJpbmQoIHNvdXJjZUV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSk7XG59KSggalF1ZXJ5LCB0aGlzICk7XG4qL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1vcGVuXSB3aWxsIHJldmVhbCBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbiQoZG9jdW1lbnQpLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgZnVuY3Rpb24oKSB7XG4gIHRyaWdnZXJzKCQodGhpcyksICdvcGVuJyk7XG59KTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zZV0gd2lsbCBjbG9zZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbi8vIElmIHVzZWQgd2l0aG91dCBhIHZhbHVlIG9uIFtkYXRhLWNsb3NlXSwgdGhlIGV2ZW50IHdpbGwgYnViYmxlLCBhbGxvd2luZyBpdCB0byBjbG9zZSBhIHBhcmVudCBjb21wb25lbnQuXG4kKGRvY3VtZW50KS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZV0nLCBmdW5jdGlvbigpIHtcbiAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdjbG9zZScpO1xuICBpZiAoaWQpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgfVxuICBlbHNlIHtcbiAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgfVxufSk7XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlXSB3aWxsIHRvZ2dsZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbiQoZG9jdW1lbnQpLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZV0nLCBmdW5jdGlvbigpIHtcbiAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xufSk7XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2FibGVdIHdpbGwgcmVzcG9uZCB0byBjbG9zZS56Zi50cmlnZ2VyIGV2ZW50cy5cbiQoZG9jdW1lbnQpLm9uKCdjbG9zZS56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NhYmxlXScsIGZ1bmN0aW9uKGUpe1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBsZXQgYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdjbG9zYWJsZScpO1xuXG4gIGlmKGFuaW1hdGlvbiAhPT0gJycpe1xuICAgIEZvdW5kYXRpb24uTW90aW9uLmFuaW1hdGVPdXQoJCh0aGlzKSwgYW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgfSk7XG4gIH1lbHNle1xuICAgICQodGhpcykuZmFkZU91dCgpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICB9XG59KTtcblxuJChkb2N1bWVudCkub24oJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZS1mb2N1c10nLCBmdW5jdGlvbigpIHtcbiAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUtZm9jdXMnKTtcbiAgJChgIyR7aWR9YCkudHJpZ2dlckhhbmRsZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJywgWyQodGhpcyldKTtcbn0pO1xuXG4vKipcbiogRmlyZXMgb25jZSBhZnRlciBhbGwgb3RoZXIgc2NyaXB0cyBoYXZlIGxvYWRlZFxuKiBAZnVuY3Rpb25cbiogQHByaXZhdGVcbiovXG4kKHdpbmRvdykubG9hZCgoKSA9PiB7XG4gIGNoZWNrTGlzdGVuZXJzKCk7XG59KTtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcnMoKSB7XG4gIGV2ZW50c0xpc3RlbmVyKCk7XG4gIHJlc2l6ZUxpc3RlbmVyKCk7XG4gIHNjcm9sbExpc3RlbmVyKCk7XG4gIGNsb3NlbWVMaXN0ZW5lcigpO1xufVxuXG4vLyoqKioqKioqIG9ubHkgZmlyZXMgdGhpcyBmdW5jdGlvbiBvbmNlIG9uIGxvYWQsIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIHRvIHdhdGNoICoqKioqKioqXG5mdW5jdGlvbiBjbG9zZW1lTGlzdGVuZXIocGx1Z2luTmFtZSkge1xuICB2YXIgeWV0aUJveGVzID0gJCgnW2RhdGEteWV0aS1ib3hdJyksXG4gICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgaWYocGx1Z2luTmFtZSl7XG4gICAgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5wdXNoKHBsdWdpbk5hbWUpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGx1Z2luTmFtZVswXSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLmNvbmNhdChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsdWdpbiBuYW1lcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgaWYoeWV0aUJveGVzLmxlbmd0aCl7XG4gICAgbGV0IGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBgY2xvc2VtZS56Zi4ke25hbWV9YDtcbiAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBmdW5jdGlvbihlLCBwbHVnaW5JZCl7XG4gICAgICBsZXQgcGx1Z2luID0gZS5uYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcbiAgICAgIGxldCBwbHVnaW5zID0gJChgW2RhdGEtJHtwbHVnaW59XWApLm5vdChgW2RhdGEteWV0aS1ib3g9XCIke3BsdWdpbklkfVwiXWApO1xuXG4gICAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IF90aGlzID0gJCh0aGlzKTtcblxuICAgICAgICBfdGhpcy50cmlnZ2VySGFuZGxlcignY2xvc2UuemYudHJpZ2dlcicsIFtfdGhpc10pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplTGlzdGVuZXIoZGVib3VuY2Upe1xuICBsZXQgdGltZXIsXG4gICAgICAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS56Zi50cmlnZ2VyJylcbiAgICAub24oJ3Jlc2l6ZS56Zi50cmlnZ2VyJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cblxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAgICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJyZXNpemVcIik7XG4gICAgICB9LCBkZWJvdW5jZSB8fCAxMCk7Ly9kZWZhdWx0IHRpbWUgdG8gZW1pdCByZXNpemUgZXZlbnRcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcihkZWJvdW5jZSl7XG4gIGxldCB0aW1lcixcbiAgICAgICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLnpmLnRyaWdnZXInKVxuICAgIC5vbignc2Nyb2xsLnpmLnRyaWdnZXInLCBmdW5jdGlvbihlKXtcbiAgICAgIGlmKHRpbWVyKXsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblxuICAgICAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInNjcm9sbFwiKTtcbiAgICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHNjcm9sbCBldmVudFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50c0xpc3RlbmVyKCkge1xuICBpZighTXV0YXRpb25PYnNlcnZlcil7IHJldHVybiBmYWxzZTsgfVxuICBsZXQgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgLy9lbGVtZW50IGNhbGxiYWNrXG4gIHZhciBsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uID0gZnVuY3Rpb24obXV0YXRpb25SZWNvcmRzTGlzdCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnRhcmdldCk7XG4gICAgLy90cmlnZ2VyIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZWxlbWVudCBkZXBlbmRpbmcgb24gdHlwZVxuICAgIHN3aXRjaCAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikpIHtcblxuICAgICAgY2FzZSBcInJlc2l6ZVwiIDpcbiAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJzY3JvbGxcIiA6XG4gICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGNhc2UgXCJtdXRhdGVcIiA6XG4gICAgICAvLyBjb25zb2xlLmxvZygnbXV0YXRlJywgJHRhcmdldCk7XG4gICAgICAvLyAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdtdXRhdGUuemYudHJpZ2dlcicpO1xuICAgICAgLy9cbiAgICAgIC8vIC8vbWFrZSBzdXJlIHdlIGRvbid0IGdldCBzdHVjayBpbiBhbiBpbmZpbml0ZSBsb29wIGZyb20gc2xvcHB5IGNvZGVpbmdcbiAgICAgIC8vIGlmICgkdGFyZ2V0LmluZGV4KCdbZGF0YS1tdXRhdGVdJykgPT0gJChcIltkYXRhLW11dGF0ZV1cIikubGVuZ3RoLTEpIHtcbiAgICAgIC8vICAgZG9tTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgLy8gfVxuICAgICAgLy8gYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQgOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICB9XG5cbiAgaWYobm9kZXMubGVuZ3RoKXtcbiAgICAvL2ZvciBlYWNoIGVsZW1lbnQgdGhhdCBuZWVkcyB0byBsaXN0ZW4gZm9yIHJlc2l6aW5nLCBzY3JvbGxpbmcsIChvciBjb21pbmcgc29vbiBtdXRhdGlvbikgYWRkIGEgc2luZ2xlIG9ic2VydmVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbm9kZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24pO1xuICAgICAgZWxlbWVudE9ic2VydmVyLm9ic2VydmUobm9kZXNbaV0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6ZmFsc2UsIGF0dHJpYnV0ZUZpbHRlcjpbXCJkYXRhLWV2ZW50c1wiXX0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gW1BIXVxuLy8gRm91bmRhdGlvbi5DaGVja1dhdGNoZXJzID0gY2hlY2tXYXRjaGVycztcbkZvdW5kYXRpb24uSUhlYXJZb3UgPSBjaGVja0xpc3RlbmVycztcbi8vIEZvdW5kYXRpb24uSVNlZVlvdSA9IHNjcm9sbExpc3RlbmVyO1xuLy8gRm91bmRhdGlvbi5JRmVlbFlvdSA9IGNsb3NlbWVMaXN0ZW5lcjtcblxufShqUXVlcnkpO1xuXG4vLyBmdW5jdGlvbiBkb21NdXRhdGlvbk9ic2VydmVyKGRlYm91bmNlKSB7XG4vLyAgIC8vICEhISBUaGlzIGlzIGNvbWluZyBzb29uIGFuZCBuZWVkcyBtb3JlIHdvcms7IG5vdCBhY3RpdmUgICEhISAvL1xuLy8gICB2YXIgdGltZXIsXG4vLyAgIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbXV0YXRlXScpO1xuLy8gICAvL1xuLy8gICBpZiAobm9kZXMubGVuZ3RoKSB7XG4vLyAgICAgLy8gdmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuLy8gICAgIC8vICAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4vLyAgICAgLy8gICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vICAgICBpZiAocHJlZml4ZXNbaV0gKyAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4vLyAgICAgLy8gICAgICAgcmV0dXJuIHdpbmRvd1twcmVmaXhlc1tpXSArICdNdXRhdGlvbk9ic2VydmVyJ107XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgIH1cbi8vICAgICAvLyAgIHJldHVybiBmYWxzZTtcbi8vICAgICAvLyB9KCkpO1xuLy9cbi8vXG4vLyAgICAgLy9mb3IgdGhlIGJvZHksIHdlIG5lZWQgdG8gbGlzdGVuIGZvciBhbGwgY2hhbmdlcyBlZmZlY3RpbmcgdGhlIHN0eWxlIGFuZCBjbGFzcyBhdHRyaWJ1dGVzXG4vLyAgICAgdmFyIGJvZHlPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGJvZHlNdXRhdGlvbik7XG4vLyAgICAgYm9keU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOnRydWUsIGF0dHJpYnV0ZUZpbHRlcjpbXCJzdHlsZVwiLCBcImNsYXNzXCJdfSk7XG4vL1xuLy9cbi8vICAgICAvL2JvZHkgY2FsbGJhY2tcbi8vICAgICBmdW5jdGlvbiBib2R5TXV0YXRpb24obXV0YXRlKSB7XG4vLyAgICAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgbXV0YXRpb24gZXZlbnRcbi8vICAgICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG4vL1xuLy8gICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBib2R5T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuLy8gICAgICAgICAkKCdbZGF0YS1tdXRhdGVdJykuYXR0cignZGF0YS1ldmVudHMnLFwibXV0YXRlXCIpO1xuLy8gICAgICAgfSwgZGVib3VuY2UgfHwgMTUwKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiIsImpRdWVyeShkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuXG52YXJcdGlzTW9iaWxlID0gKC9pcGhvbmV8aXBvZHxhbmRyb2lkfGJsYWNrYmVycnl8b3BlcmF8bWluaXx3aW5kb3dzXFxzY2V8cGFsbXxzbWFydHBob25lfGllbW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSxcblx0aXNUYWJsZXQgPSAoL2lwYWR8YW5kcm9pZHxhbmRyb2lkIDMuMHx4b29tfHNjaC1pODAwfHBsYXlib29rfHRhYmxldHxraW5kbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkpLFxuICAgIHl0X3ZpZGVvMSA9IFwiR0h5VDFPakhqVUFcIixcbiAgICB5dF92aWRlbzIgPSBcIlh1SDFGWE5HSHlNXCIsXG4gICAgXG4gICAgc2l0ZSA9IHtcblxuXHRpbml0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNwYXJ0aWNpcGUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiAkKCcjZG9uJykub2Zmc2V0KCkudG9wfSwgMzAwICk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcjZ28tcm9sZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSggeyBzY3JvbGxUb3A6ICQoJyNyb2xlJykub2Zmc2V0KCkudG9wfSwgMzAwICk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcubW9yZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZnVsbCcpLnNob3coKTtcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vXG4gICAgICAgICQod2luZG93KS5yZXNpemUoIHNpdGUucmVzaXplICk7XG4gICAgICAgIHNpdGUucmVzaXplKCk7XG4gICAgICAgIHNpdGUuYW5pbWF0ZS5pbml0KCk7XG4gICAgICAgIC8vXG4gICAgICAgICQoJyNzZWVJbnRybycpLmRlbGF5KDEyMDApLnF1ZXVlKGZ1bmN0aW9uKCl7JCh0aGlzKS5hZGRDbGFzcygnZG9uZScpfSk7XG4gICAgICAgIC8vVklERU9cbiAgICAgICAgICAgICQoJyNzZWVJbnRybycpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgQlZfaSAgICA9ICQoJyN2aWRlby1pbnRybycpLmRhdGEoJ3ZpZGUnKTtcbiAgICAgICAgICAgICAgICBCViAgICAgID0gQlZfaS5nZXRWaWRlb09iamVjdCgpO1xuICAgICAgICAgICAgICAgIEJWLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgc2l0ZS52aWRlby5zaG93KHl0X3ZpZGVvMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJyNzZWVNaW51dGUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNpdGUudmlkZW8uc2hvdyh5dF92aWRlbzIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcjeXQtY2xvc2UsICN5dC0tY2xvc2UtYnRuJykuY2xpY2soIHNpdGUudmlkZW8uaGlkZSApO1xuICAgICAgICAgICAgLy9zaXRlLnZpZGVvLnNob3coeXRfdmlkZW8xKTtcblx0fSxcbiAgICAgICAgXG4gICAgdmlkZW8gOiB7XG4gICAgICAgIHNob3cgOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoYXMtcG9waW4nKTtcbiAgICAgICAgICAgICQoJyNwb3BpbicpLnNob3coKS5mYWRlVG8oMjAwLCAxKTtcbiAgICAgICAgICAgICQoJyN5dCcpLmF0dHIoJ3NyYycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nK2lkKyc/YXV0b3BsYXk9dHJ1ZScpO1xuICAgICAgICB9LFxuICAgICAgICBoaWRlIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjcG9waW4nKS5mYWRlVG8oMzAwLCAwLCBzaXRlLnZpZGVvLnJlbW92ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnI3l0JykuYXR0cignc3JjJywgJycpO1xuICAgICAgICAgICAgJCgnI3BvcGluJykuY3NzKCdvcGFjaXR5JywwKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hhcy1wb3BpbicpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICByZXNpemUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGlzTW9iaWxlKSByZXR1cm47XG4gICAgICAgICQoJyNpbnRybycpLmNzcygnaGVpZ2h0JywgJCh3aW5kb3cpLmhlaWdodCgpKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0ZSA6IHtcbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxUb0FuaW1hdGUgPSAkKCcuYW5pbWF0ZScpO1xuICAgICAgICAgICAgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgICAgICAgICAgICR3aW5kb3cub24oJ3Njcm9sbCByZXNpemUnLCBzaXRlLmFuaW1hdGUudXBkYXRlKTtcbiAgICAgICAgICAgICR3aW5kb3cudHJpZ2dlcignc2Nyb2xsJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgd2luZG93SGVpZ2h0ICAgICAgICAgICAgPSAkd2luZG93LmhlaWdodCgpLFxuICAgICAgICAgICAgICAgIHdpbmRvd1RvcFBvc2l0aW9uICAgICAgID0gJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICB3aW5kb3dCb3R0b21Qb3NpdGlvbiAgICA9ICh3aW5kb3dUb3BQb3NpdGlvbiArIHdpbmRvd0hlaWdodCksXG4gICAgICAgICAgICAgICAgYWN0aXZlRGVsYXkgICAgICAgICAgICAgPSAwLjI1O1xuXG4gICAgICAgICAgICAkLmVhY2goZWxUb0FuaW1hdGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCAgICAgICAgICAgICAgICAgID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgZWxIZWlnaHQgICAgICAgICAgICA9IGVsLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgICAgIGVsVG9wUG9zaXRpb24gICAgICAgPSBlbC5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgIGVsQm90dG9tUG9zaXRpb24gICAgPSAoZWxUb3BQb3NpdGlvbiArIGVsSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoKGVsQm90dG9tUG9zaXRpb24gPj0gd2luZG93VG9wUG9zaXRpb24pICYmXG4gICAgICAgICAgICAgICAgaWYgKChlbFRvcFBvc2l0aW9uIDw9IHdpbmRvd0JvdHRvbVBvc2l0aW9uLXdpbmRvd0hlaWdodCphY3RpdmVEZWxheSkpIGVsLmFkZENsYXNzKCdkb25lJyk7XG4vLyAgICAgICAgICAgICAgICBlbHNlIGVsLnJlbW92ZUNsYXNzKCdkb25lJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuXG59O1xuXG4kKGZ1bmN0aW9uKCkge1xuXHRzaXRlLmluaXQoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
