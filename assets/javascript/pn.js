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
        $('#go-temoins').click(function () {
            $('html, body').animate({ scrollTop: $('#temoins').offset().top }, 300);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJqcXVlcnkudmlkZS5qcyIsImZvdW5kYXRpb24uY29yZS5qcyIsImZvdW5kYXRpb24udXRpbC5ib3guanMiLCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQuanMiLCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsImZvdW5kYXRpb24udXRpbC5tb3Rpb24uanMiLCJmb3VuZGF0aW9uLnV0aWwubmVzdC5qcyIsImZvdW5kYXRpb24udXRpbC50aW1lckFuZEltYWdlTG9hZGVyLmpzIiwiZm91bmRhdGlvbi51dGlsLnRvdWNoLmpzIiwiZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwiaW5pdC1mb3VuZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGNBQVUsT0FBTyxNQUFQLElBQWUsWUFBVSxPQUFPLE9BQU8sT0FBUCxHQUFlLE9BQU8sT0FBUCxHQUFlLEVBQUUsUUFBRixHQUFXLEVBQUUsQ0FBRixFQUFJLENBQUMsQ0FBRCxDQUFmLEdBQW1CLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRyxDQUFDLEVBQUUsUUFBRixFQUFXLE1BQU0sSUFBSSxLQUFKLENBQVUsMENBQVYsQ0FBTixDQUFmLE9BQWtGLEVBQUUsQ0FBRixDQUFQLENBQTVFO0dBQVgsR0FBb0csRUFBRSxDQUFGLENBQS9MLENBQUQ7Q0FBYixDQUFtTixlQUFhLE9BQU8sTUFBUCxHQUFjLE1BQTNCLEdBQWtDLElBQWxDLEVBQXVDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUksSUFBRSxFQUFGO01BQUssSUFBRSxFQUFFLFFBQUY7TUFBVyxJQUFFLEVBQUUsS0FBRjtNQUFRLElBQUUsRUFBRSxNQUFGO01BQVMsSUFBRSxFQUFFLElBQUY7TUFBTyxJQUFFLEVBQUUsT0FBRjtNQUFVLElBQUUsRUFBRjtNQUFLLElBQUUsRUFBRSxRQUFGO01BQVcsSUFBRSxF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WUFBVztBQUMzQixvQkFBSSxLQUFzQixFQUFFLElBQUYsQ0FBdEI7b0JBQ0EsV0FBc0IsR0FBRyxXQUFILEVBQXRCO29CQUNBLGdCQUFzQixHQUFHLE1BQUgsR0FBWSxHQUFaO29CQUN0QixtQkFBdUIsZ0JBQWdCLFFBQWhCOztBQUpBLG9CQU10QixpQkFBaUIsdUJBQXFCLGVBQWEsV0FBYixFQUEyQixHQUFHLFFBQUgsQ0FBWSxNQUFaLEVBQXRFOzthQU5nQixDQUFwQixDQU5nQjtBQU1lLFNBTjFCO0tBUmI7O0NBMURBOztBQXlGSixFQUFFLFlBQVc7QUFDWixTQUFLLElBQUwsR0FEWTtDQUFYLENBQUYiLCJmaWxlIjoicG4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYyLjIuMSB8IChjKSBqUXVlcnkgRm91bmRhdGlvbiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9Yy5zbGljZSxmPWMuY29uY2F0LGc9Yy5wdXNoLGg9Yy5pbmRleE9mLGk9e30saj1pLnRvU3RyaW5nLGs9aS5oYXNPd25Qcm9wZXJ0eSxsPXt9LG09XCIyLjIuMVwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZS5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmcsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50b1N0cmluZygpO3JldHVybiFuLmlzQXJyYXkoYSkmJmItcGFyc2VGbG9hdChiKSsxPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSk/ITE6YS5jb25zdHJ1Y3RvciYmIWsuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIik/ITE6ITB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aVtqLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGM9ZXZhbDthPW4udHJpbShhKSxhJiYoMT09PWEuaW5kZXhPZihcInVzZSBzdHJpY3RcIik/KGI9ZC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIudGV4dD1hLGQuaGVhZC5hcHBlbmRDaGlsZChiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpKTpjKGEpKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZihzKGEpKXtmb3IoYz1hLmxlbmd0aDtjPmQ7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmcuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTpoLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxnPTAsaD1bXTtpZihzKGEpKWZvcihkPWEubGVuZ3RoO2Q+ZztnKyspZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZyBpbiBhKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBmLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksbi5pc0Z1bmN0aW9uKGEpPyhkPWUuY2FsbChhcmd1bWVudHMsMiksZj1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZS5jYWxsKGFyZ3VtZW50cykpKX0sZi5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGYpOnZvaWQgMH0sbm93OkRhdGUubm93LHN1cHBvcnQ6bH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKG4uZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aVtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWdhKCksej1nYSgpLEE9Z2EoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTStcIikpfClcIitMK1wiKlxcXFxdXCIsTz1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTitcIikqKXwuKilcXFxcKXwpXCIsUD1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxVPW5ldyBSZWdFeHAoTyksVj1uZXcgUmVnRXhwKFwiXlwiK00rXCIkXCIpLFc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK04pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK08pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFo9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LywkPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLF89L1srfl0vLGFhPS8nfFxcXFwvZyxiYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxjYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxkYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZWEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGZhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdz1iJiZiLm93bmVyRG9jdW1lbnQseD1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXgmJjkhPT14JiYxMSE9PXgpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT14JiYobz0kLmV4ZWMoYSkpKWlmKGY9b1sxXSl7aWYoOT09PXgpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZih3JiYoaj13LmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihvWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1vWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09eCl3PWIscz1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYWEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSkscj1nKGEpLGg9ci5sZW5ndGgsbD1WLnRlc3Qoayk/XCIjXCIrazpcIltpZD0nXCIraytcIiddXCI7d2hpbGUoaC0tKXJbaF09bCtcIiBcIitxYShyW2hdKTtzPXIuam9pbihcIixcIiksdz1fLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGJ9aWYocyl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwocykpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUSxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBnYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGhhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gaWEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIGxhKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gaGEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaGEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1mYS5zdXBwb3J0PXt9LGY9ZmEuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1mYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSwoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Wi50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9Wi50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoaWEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxpYShmdW5jdGlvbihhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVoudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmaWEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE8pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9Wi50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8Wi50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBrYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/a2EoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGZhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZmEoYSxudWxsLG51bGwsYil9LGZhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShULFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZmEoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZmEuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxmYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZmEuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGZhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1mYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWZhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmhhLG1hdGNoOlcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoYmEsY2EpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoYmEsY2EpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGZhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmZhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBXLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVS50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWZhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUCxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2hhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmhhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShRLFwiJDFcIikpO3JldHVybiBkW3VdP2hhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBmYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShiYSxjYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIFYudGVzdChhfHxcIlwiKXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6bmEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om5hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpuYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bGEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bWEoYik7ZnVuY3Rpb24gcGEoKXt9cGEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBwYSxnPWZhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7KCFjfHwoZT1SLmV4ZWMoaCkpKSYmKGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Uy5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShRLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1XW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/ZmEuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBxYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gcmEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqLGs9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihqPWJbdV18fChiW3VdPXt9KSxpPWpbYi51bmlxdWVJRF18fChqW2IudW5pcXVlSURdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBrWzJdPWhbMl07aWYoaVtkXT1rLGtbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiBzYShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB0YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWZhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB1YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoIWN8fGMoZixkLGUpKSYmKGcucHVzaChmKSxqJiZiLnB1c2goaCkpO3JldHVybiBnfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXZhKGQpKSxlJiYhZVt1XSYmKGU9dmEoZSxmKSksaGEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dGEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp1YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dWEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXVhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB3YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3JhKHNhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB2YShpPjEmJnNhKG0pLGk+MSYmcWEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShRLFwiJDFcIiksYyxlPmkmJndhKGEuc2xpY2UoaSxlKSksZj5lJiZ3YShhPWEuc2xpY2UoZSkpLGY+ZSYmcWEoYSkpfW0ucHVzaChjKX1yZXR1cm4gc2EobSl9ZnVuY3Rpb24geGEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUYuY2FsbChpKSk7dT11YSh1KX1ILmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZmEudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2hhKGYpOmZ9cmV0dXJuIGg9ZmEuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9d2EoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHhhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1mYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVcubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxfLnRlc3QoalswXS50eXBlKSYmb2EoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnFhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLCFifHxfLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8amEoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxqYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8amEoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZmF9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlU29ydD1uLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sdj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sdz1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHg9L148KFtcXHctXSspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHk9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHooYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih5LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBoLmNhbGwoYixhKT4tMSE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF6KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJncudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEEsQj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEEsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qi5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSx4LnRlc3QoZVsxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmZi5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWYpLHRoaXMuY29udGV4dD1kLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtDLnByb3RvdHlwZT1uLmZuLEE9bihkKTt2YXIgRD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxFPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dy50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9oLmNhbGwobihhKSx0aGlzWzBdKTpoLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlU29ydChuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBGKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB2KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gdihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihFW2FdfHxuLnVuaXF1ZVNvcnQoZSksRC50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEc9L1xcUysvZztmdW5jdGlvbiBIKGEpe3ZhciBiPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChHKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0goYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXtuLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1uLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksaD49YyYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGMubm90aWZ5KS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWUuY2FsbChhcmd1bWVudHMpLGQ9Yy5sZW5ndGgsZj0xIT09ZHx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZDowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9lLmNhbGwoYXJndW1lbnRzKTpkLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZD4xKWZvcihpPW5ldyBBcnJheShkKSxqPW5ldyBBcnJheShkKSxrPW5ldyBBcnJheShkKTtkPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLnByb2dyZXNzKGgoYixqLGkpKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSTtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSS5yZXNvbHZlV2l0aChkLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4oZCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGQpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEooKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEopLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEl8fChJPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KG4ucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEopKSksSS5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylLKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LEw9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBNKCl7dGhpcy5leHBhbmRvPW4uZXhwYW5kbytNLnVpZCsrfU0udWlkPTEsTS5wcm90b3R5cGU9e3JlZ2lzdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8e307cmV0dXJuIGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWM6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpjLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGFbdGhpcy5leHBhbmRvXX0sY2FjaGU6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpcmV0dXJue307dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxMKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW2JdPWM7ZWxzZSBmb3IoZCBpbiBiKWVbZF09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09Zil7aWYodm9pZCAwPT09Yil0aGlzLnJlZ2lzdGVyKGEpO2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGY/ZD1bYixlXTooZD1lLGQ9ZCBpbiBmP1tkXTpkLm1hdGNoKEcpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBmW2RbY11dfSh2b2lkIDA9PT1ifHxuLmlzRW1wdHlPYmplY3QoZikpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFuLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgTj1uZXcgTSxPPW5ldyBNLFA9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFE9L1tBLVpdL2c7ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpQLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9Ty5zZXQoYSxiLGMpO1xufWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE8uaGFzRGF0YShhKXx8Ti5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ty5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBOLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ti5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU8uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTi5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFIoZixkLGVbZF0pKSk7Ti5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtPLnNldCh0aGlzLGEpfSk6Syh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1PLmdldChmLGEpfHxPLmdldChmLGEucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoZD1uLmNhbWVsQ2FzZShhKSxjPU8uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVIoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIGQ9bi5jYW1lbENhc2UoYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9Ty5nZXQodGhpcyxkKTtPLnNldCh0aGlzLGQsYiksYS5pbmRleE9mKFwiLVwiKT4tMSYmdm9pZCAwIT09YyYmTy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe08ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPU4uZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1OLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBOLmdldChhLGMpfHxOLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Ti5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Ti5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUz0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVD1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitTK1wiKShbYS16JV0qKSRcIixcImlcIiksVT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sVj1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfTtmdW5jdGlvbiBXKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBuLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KG4uY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShuLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZULmV4ZWMobi5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixuLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBYPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLFk9LzwoW1xcdzotXSspLyxaPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksJD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19OyQub3B0Z3JvdXA9JC5vcHRpb24sJC50Ym9keT0kLnRmb290PSQuY29sZ3JvdXA9JC5jYXB0aW9uPSQudGhlYWQsJC50aD0kLnRkO2Z1bmN0aW9uIF8oYSxiKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIGFhKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKU4uc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fE4uZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgYmE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIGNhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbz0wLHA9YS5sZW5ndGg7cD5vO28rKylpZihmPWFbb10sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PW4udHlwZShmKSluLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihiYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShZLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9JFtoXXx8JC5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK24uaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtuLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG89MDt3aGlsZShmPW1bbysrXSlpZihkJiZuLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPW4uY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9XyhsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJmFhKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlaLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksbC5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGwubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgZGE9L15rZXkvLGVhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxmYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIGdhKCl7cmV0dXJuITB9ZnVuY3Rpb24gaGEoKXtyZXR1cm4hMX1mdW5jdGlvbiBpYSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gamEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKWphKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9aGE7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1uLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgbiYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5oYXNEYXRhKGEpJiZOLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJk4ucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGQsZixnLGg9W10saT1lLmNhbGwoYXJndW1lbnRzKSxqPShOLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghYS5ybmFtZXNwYWNlfHxhLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGQ9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWQmJihhLnJlc3VsdD1kKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJihcImNsaWNrXCIhPT1hLnR5cGV8fGlzTmFOKGEuYnV0dG9uKXx8YS5idXR0b248MSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZigxPT09aS5ub2RlVHlwZSYmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+LTE6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZGV0YWlsIGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGc9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8ZCxlPWMuZG9jdW1lbnRFbGVtZW50LGY9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhlJiZlLnNjcm9sbExlZnR8fGYmJmYuc2Nyb2xsTGVmdHx8MCktKGUmJmUuY2xpZW50TGVmdHx8ZiYmZi5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZSYmZS5zY3JvbGxUb3B8fGYmJmYuc2Nyb2xsVG9wfHwwKS0oZSYmZS5jbGllbnRUb3B8fGYmJmYuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Z3x8KGEud2hpY2g9MSZnPzE6MiZnPzM6NCZnPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxlLGY9YS50eXBlLGc9YSxoPXRoaXMuZml4SG9va3NbZl07aHx8KHRoaXMuZml4SG9va3NbZl09aD1lYS50ZXN0KGYpP3RoaXMubW91c2VIb29rczpkYS50ZXN0KGYpP3RoaXMua2V5SG9va3M6e30pLGU9aC5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChoLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZyksYj1lLmxlbmd0aDt3aGlsZShiLS0pYz1lW2JdLGFbY109Z1tjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1kKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxoLmZpbHRlcj9oLmZpbHRlcihhLGcpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09aWEoKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09aWEoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/Z2E6aGEpOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6bi5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6aGEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6aGEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6aGEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Z2EsYSYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX19KTt2YXIga2E9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzotXSspW14+XSopXFwvPi9naSxsYT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxtYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLG5hPS9edHJ1ZVxcLyguKikvLG9hPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBwYShhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiByYShhKXt2YXIgYj1uYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gc2EoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihOLmhhc0RhdGEoYSkmJihmPU4uYWNjZXNzKGEpLGc9Ti5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspbi5ldmVudC5hZGQoYixlLGpbZV1bY10pfU8uaGFzRGF0YShhKSYmKGg9Ty5hY2Nlc3MoYSksaT1uLmV4dGVuZCh7fSxoKSxPLnNldChiLGkpKX19ZnVuY3Rpb24gdGEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmWC50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gdWEoYSxiLGMsZCl7Yj1mLmFwcGx5KFtdLGIpO3ZhciBlLGcsaCxpLGosayxtPTAsbz1hLmxlbmd0aCxwPW8tMSxxPWJbMF0scj1uLmlzRnVuY3Rpb24ocSk7aWYocnx8bz4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIWwuY2hlY2tDbG9uZSYmbWEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7ciYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLHVhKGYsYixjLGQpfSk7aWYobyYmKGU9Y2EoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxnPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZyksZ3x8ZCkpe2ZvcihoPW4ubWFwKF8oZSxcInNjcmlwdFwiKSxxYSksaT1oLmxlbmd0aDtvPm07bSsrKWo9ZSxtIT09cCYmKGo9bi5jbG9uZShqLCEwLCEwKSxpJiZuLm1lcmdlKGgsXyhqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbV0saixtKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChoLHJhKSxtPTA7aT5tO20rKylqPWhbbV0sWi50ZXN0KGoudHlwZXx8XCJcIikmJiFOLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhrLGopJiYoai5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChqLnNyYyk6bi5nbG9iYWxFdmFsKGoudGV4dENvbnRlbnQucmVwbGFjZShvYSxcIlwiKSkpfXJldHVybiBhfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQsZT1iP24uZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShfKGQpKSxkLnBhcmVudE5vZGUmJihjJiZuLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmYWEoXyhkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfW4uZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2Uoa2EsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEobC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9XyhoKSxmPV8oYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyl0YShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxfKGEpLGc9Z3x8XyhoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXNhKGZbZF0sZ1tkXSk7ZWxzZSBzYShhLGgpO3JldHVybiBnPV8oaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZhYShnLCFpJiZfKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9bi5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoTChjKSl7aWYoYj1jW04uZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tOLmV4cGFuZG9dPXZvaWQgMH1jW08uZXhwYW5kb10mJihjW08uZXhwYW5kb109dm9pZCAwKX19fSksbi5mbi5leHRlbmQoe2RvbU1hbmlwOnVhLGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXBhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9cGEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoXyhhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhbGEudGVzdChhKSYmISRbKFkuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPW4uaHRtbFByZWZpbHRlcihhKTt0cnl7Zm9yKDtkPmM7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihuLmNsZWFuRGF0YShfKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtuLmluQXJyYXkodGhpcyxhKTwwJiYobi5jbGVhbkRhdGEoXyh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGY9ZS5sZW5ndGgtMSxoPTA7Zj49aDtoKyspYz1oPT09Zj90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZy5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgd2EseGE9e0hUTUw6XCJibG9ja1wiLEJPRFk6XCJibG9ja1wifTtmdW5jdGlvbiB5YShhLGIpe3ZhciBjPW4oYi5jcmVhdGVFbGVtZW50KGEpKS5hcHBlbmRUbyhiLmJvZHkpLGQ9bi5jc3MoY1swXSxcImRpc3BsYXlcIik7cmV0dXJuIGMuZGV0YWNoKCksZH1mdW5jdGlvbiB6YShhKXt2YXIgYj1kLGM9eGFbYV07cmV0dXJuIGN8fChjPXlhKGEsYiksXCJub25lXCIhPT1jJiZjfHwod2E9KHdhfHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9d2FbMF0uY29udGVudERvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz15YShhLGIpLHdhLmRldGFjaCgpKSx4YVthXT1jKSxjfXZhciBBYT0vXm1hcmdpbi8sQmE9bmV3IFJlZ0V4cChcIl4oXCIrUytcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxDYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMmJmMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9LERhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfSxFYT1kLmRvY3VtZW50RWxlbWVudDshZnVuY3Rpb24oKXt2YXIgYixjLGUsZixnPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihoLnN0eWxlKXtoLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixoLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixsLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1oLnN0eWxlLmJhY2tncm91bmRDbGlwLGcuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7cGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZy5hcHBlbmRDaGlsZChoKTtmdW5jdGlvbiBpKCl7aC5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsaC5pbm5lckhUTUw9XCJcIixFYS5hcHBlbmRDaGlsZChnKTt2YXIgZD1hLmdldENvbXB1dGVkU3R5bGUoaCk7Yj1cIjElXCIhPT1kLnRvcCxmPVwiMnB4XCI9PT1kLm1hcmdpbkxlZnQsYz1cIjRweFwiPT09ZC53aWR0aCxoLnN0eWxlLm1hcmdpblJpZ2h0PVwiNTAlXCIsZT1cIjRweFwiPT09ZC5tYXJnaW5SaWdodCxFYS5yZW1vdmVDaGlsZChnKX1uLmV4dGVuZChsLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGkoKSxifSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksY30scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksZX0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxmfSxyZWxpYWJsZU1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7dmFyIGIsYz1oLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7cmV0dXJuIGMuc3R5bGUuY3NzVGV4dD1oLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGMuc3R5bGUubWFyZ2luUmlnaHQ9Yy5zdHlsZS53aWR0aD1cIjBcIixoLnN0eWxlLndpZHRoPVwiMXB4XCIsRWEuYXBwZW5kQ2hpbGQoZyksYj0hcGFyc2VGbG9hdChhLmdldENvbXB1dGVkU3R5bGUoYykubWFyZ2luUmlnaHQpLEVhLnJlbW92ZUNoaWxkKGcpLGgucmVtb3ZlQ2hpbGQoYyksYn19KX19KCk7ZnVuY3Rpb24gRmEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxDYShhKSxnPWM/Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdOnZvaWQgMCxcIlwiIT09ZyYmdm9pZCAwIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksYyYmIWwucGl4ZWxNYXJnaW5SaWdodCgpJiZCYS50ZXN0KGcpJiZBYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24gR2EoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19dmFyIEhhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxJYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sSmE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxLYT1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl0sTGE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIE1hKGEpe2lmKGEgaW4gTGEpcmV0dXJuIGE7dmFyIGI9YVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1LYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9S2FbY10rYixhIGluIExhKXJldHVybiBhfWZ1bmN0aW9uIE5hKGEsYixjKXt2YXIgZD1ULmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBPYShhLGIsYyxkLGUpe2Zvcih2YXIgZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MCxnPTA7ND5mO2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1uLmNzcyhhLGMrVVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09bi5jc3MoYSxcInBhZGRpbmdcIitVW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPW4uY3NzKGEsXCJib3JkZXJcIitVW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1uLmNzcyhhLFwicGFkZGluZ1wiK1VbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9bi5jc3MoYSxcImJvcmRlclwiK1VbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gUGEoYixjLGUpe3ZhciBmPSEwLGc9XCJ3aWR0aFwiPT09Yz9iLm9mZnNldFdpZHRoOmIub2Zmc2V0SGVpZ2h0LGg9Q2EoYiksaT1cImJvcmRlci1ib3hcIj09PW4uY3NzKGIsXCJib3hTaXppbmdcIiwhMSxoKTtpZihkLm1zRnVsbHNjcmVlbkVsZW1lbnQmJmEudG9wIT09YSYmYi5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGc9TWF0aC5yb3VuZCgxMDAqYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtjXSkpLDA+PWd8fG51bGw9PWcpe2lmKGc9RmEoYixjLGgpLCgwPmd8fG51bGw9PWcpJiYoZz1iLnN0eWxlW2NdKSxCYS50ZXN0KGcpKXJldHVybiBnO2Y9aSYmKGwuYm94U2l6aW5nUmVsaWFibGUoKXx8Zz09PWIuc3R5bGVbY10pLGc9cGFyc2VGbG9hdChnKXx8MH1yZXR1cm4gZytPYShiLGMsZXx8KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZixoKStcInB4XCJ9ZnVuY3Rpb24gUWEoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109Ti5nZXQoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlYoZCkmJihmW2ddPU4uYWNjZXNzKGQsXCJvbGRkaXNwbGF5XCIsemEoZC5ub2RlTmFtZSkpKSk6KGU9VihkKSxcIm5vbmVcIj09PWMmJmV8fE4uc2V0KGQsXCJvbGRkaXNwbGF5XCIsZT9jOm4uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfW4uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9RmEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09TWEoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPVQuZXhlYyhjKSkmJmVbMV0mJihjPVcoYSxiLGUpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiPT09ZiYmKGMrPWUmJmVbM118fChuLmNzc051bWJlcltoXT9cIlwiOlwicHhcIikpLGwuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGlbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYik7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09TWEoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9RmEoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBKYSYmKGU9SmFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxpc0Zpbml0ZShmKT9mfHwwOmUpOmV9fSksbi5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBjP0hhLnRlc3Qobi5jc3MoYSxcImRpc3BsYXlcIikpJiYwPT09YS5vZmZzZXRXaWR0aD9EYShhLElhLGZ1bmN0aW9uKCl7cmV0dXJuIFBhKGEsYixkKX0pOlBhKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZDYShhKSxnPWQmJk9hKGEsYixkLFwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1ULmV4ZWMoYykpJiZcInB4XCIhPT0oZVszXXx8XCJweFwiKSYmKGEuc3R5bGVbYl09YyxjPW4uY3NzKGEsYikpLE5hKGEsYyxnKX19fSksbi5jc3NIb29rcy5tYXJnaW5MZWZ0PUdhKGwucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/KHBhcnNlRmxvYXQoRmEoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtRGEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwiOnZvaWQgMH0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9R2EobC5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/RGEoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSxGYSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxuLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ND5kO2QrKyllW2ErVVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxBYS50ZXN0KGEpfHwobi5jc3NIb29rc1thK2JdLnNldD1OYSl9KSxuLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihuLmlzQXJyYXkoYikpe2ZvcihkPUNhKGEpLGU9Yi5sZW5ndGg7ZT5nO2crKylmW2JbZ11dPW4uY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9uLnN0eWxlKGEsYixjKTpuLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBRYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBRYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe1YodGhpcyk/bih0aGlzKS5zaG93KCk6bih0aGlzKS5oaWRlKCl9KX19KTtmdW5jdGlvbiBSYShhLGIsYyxkLGUpe3JldHVybiBuZXcgUmEucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1uLlR3ZWVuPVJhLFJhLnByb3RvdHlwZT17Y29uc3RydWN0b3I6UmEsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8bi5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChuLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPVJhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpSYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1SYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9bi5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOlJhLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LFJhLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1SYS5wcm90b3R5cGUsUmEucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9bi5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe24uZnguc3RlcFthLnByb3BdP24uZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtuLmNzc1Byb3BzW2EucHJvcF1dJiYhbi5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93Om4uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LFJhLnByb3BIb29rcy5zY3JvbGxUb3A9UmEucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LG4uZng9UmEucHJvdG90eXBlLmluaXQsbi5meC5zdGVwPXt9O3ZhciBTYSxUYSxVYT0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sVmE9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBXYSgpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtTYT12b2lkIDB9KSxTYT1uLm5vdygpfWZ1bmN0aW9uIFhhKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDs0PmQ7ZCs9Mi1iKWM9VVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBZYShhLGIsYyl7Zm9yKHZhciBkLGU9KF9hLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KF9hLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7Zz5mO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gWmEoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD10aGlzLG09e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmVihhKSxxPU4uZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bi5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbC5hbHdheXMoZnVuY3Rpb24oKXtsLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxuLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPW4uY3NzKGEsXCJkaXNwbGF5XCIpLGs9XCJub25lXCI9PT1qP04uZ2V0KGEsXCJvbGRkaXNwbGF5XCIpfHx6YShhLm5vZGVOYW1lKTpqLFwiaW5saW5lXCI9PT1rJiZcIm5vbmVcIj09PW4uY3NzKGEsXCJmbG9hdFwiKSYmKG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixsLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sVWEuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bVtkXT1xJiZxW2RdfHxuLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihuLmlzRW1wdHlPYmplY3QobSkpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/emEoYS5ub2RlTmFtZSk6aikmJihvLmRpc3BsYXk9aik7ZWxzZXtxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1OLmFjY2VzcyhhLFwiZnhzaG93XCIse30pLGYmJihxLmhpZGRlbj0hcCkscD9uKGEpLnNob3coKTpsLmRvbmUoZnVuY3Rpb24oKXtuKGEpLmhpZGUoKX0pLGwuZG9uZShmdW5jdGlvbigpe3ZhciBiO04ucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGIgaW4gbSluLnN0eWxlKGEsYixtW2JdKX0pO2ZvcihkIGluIG0pZz1ZYShwP3FbZF06MCxkLGwpLGQgaW4gcXx8KHFbZF09Zy5zdGFydCxwJiYoZy5lbmQ9Zy5zdGFydCxnLnN0YXJ0PVwid2lkdGhcIj09PWR8fFwiaGVpZ2h0XCI9PT1kPzE6MCkpfX1mdW5jdGlvbiAkYShhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPW4uY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sbi5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1uLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gX2EoYSxiLGMpe3ZhciBkLGUsZj0wLGc9X2EucHJlZmlsdGVycy5sZW5ndGgsaD1uLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1TYXx8V2EoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bi5leHRlbmQoe30sYiksb3B0czpuLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6bi5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpTYXx8V2EoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPW4uVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7ZD5jO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoJGEoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPV9hLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBuLmlzRnVuY3Rpb24oZC5zdG9wKSYmKG4uX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1uLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gbi5tYXAoayxZYSxqKSxuLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxuLmZ4LnRpbWVyKG4uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW4uQW5pbWF0aW9uPW4uZXh0ZW5kKF9hLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBXKGMuZWxlbSxhLFQuZXhlYyhiKSxjKSxjfV19LHR3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtuLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5tYXRjaChHKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyljPWFbZF0sX2EudHdlZW5lcnNbY109X2EudHdlZW5lcnNbY118fFtdLF9hLnR3ZWVuZXJzW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcnM6W1phXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP19hLnByZWZpbHRlcnMudW5zaGlmdChhKTpfYS5wcmVmaWx0ZXJzLnB1c2goYSl9fSksbi5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bi5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxuLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW4uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbi5meC5zcGVlZHM/bi5meC5zcGVlZHNbZC5kdXJhdGlvbl06bi5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PWQucXVldWV8fGQucXVldWU9PT0hMCkmJihkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bi5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZuLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoVikuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmlzRW1wdHlPYmplY3QoYSksZj1uLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9X2EodGhpcyxuLmV4dGVuZCh7fSxhKSxmKTsoZXx8Ti5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPW4udGltZXJzLGc9Ti5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmVmEudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTsoYnx8IWMpJiZuLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPU4uZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoWGEoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOlhhKFwic2hvd1wiKSxzbGlkZVVwOlhhKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpYYShcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1uLnRpbWVycztmb3IoU2E9bi5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxuLmZ4LnN0b3AoKSxTYT12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtUYXx8KFRhPWEuc2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhckludGVydmFsKFRhKSxUYT1udWxsfSxuLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9bi5meD9uLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsbC5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGwub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGwub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsbC5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgYWIsYmI9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYS5nZXRBdHRyaWJ1dGU/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxlPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT9hYjp2b2lkIDApKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgbi5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighbC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChHKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9fSksYWI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9YmJbYl18fG4uZmluZC5hdHRyO2JiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj1iYltiXSxiYltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsYmJbYl09ZiksZX19KTt2YXIgY2I9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxkYj0vXig/OmF8YXJlYSkkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbbi5wcm9wRml4W2FdfHxhXX0pfX0pLG4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9bi5wcm9wRml4W2JdfHxiLFxuZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTpjYi50ZXN0KGEubm9kZU5hbWUpfHxkYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLGwub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIGViPS9bXFx0XFxyXFxuXFxmXS9nO2Z1bmN0aW9uIGZiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1uLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixmYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1mYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShlYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOm4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLGZiKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPW4odGhpcyksZj1hLm1hdGNoKEcpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlKHZvaWQgMD09PWF8fFwiYm9vbGVhblwiPT09YykmJihiPWZiKHRoaXMpLGImJk4uc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpOLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2ZiKGMpK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBnYj0vXFxyL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoZ2IsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBuLnRyaW0oYS52YWx1ZSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLChjLnNlbGVjdGVkfHxpPT09ZSkmJihsLm9wdERpc2FibGVkPyFjLmRpc2FibGVkOm51bGw9PT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKSYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShuLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+LTE6dm9pZCAwfX0sbC5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgaGI9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO24uZXh0ZW5kKG4uZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oYixjLGUsZil7dmFyIGcsaCxpLGosbCxtLG8scD1bZXx8ZF0scT1rLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1rLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoaD1pPWU9ZXx8ZCwzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJiFoYi50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT4tMSYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGw9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWY/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5ybmFtZXNwYWNlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWUpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxmfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZSxjKSE9PSExKSl7aWYoIWYmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhlKSl7Zm9yKGo9by5kZWxlZ2F0ZVR5cGV8fHEsaGIudGVzdChqK3EpfHwoaD1oLnBhcmVudE5vZGUpO2g7aD1oLnBhcmVudE5vZGUpcC5wdXNoKGgpLGk9aDtpPT09KGUub3duZXJEb2N1bWVudHx8ZCkmJnAucHVzaChpLmRlZmF1bHRWaWV3fHxpLnBhcmVudFdpbmRvd3x8YSl9Zz0wO3doaWxlKChoPXBbZysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWc+MT9qOm8uYmluZFR5cGV8fHEsbT0oTi5nZXQoaCxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJk4uZ2V0KGgsXCJoYW5kbGVcIiksbSYmbS5hcHBseShoLGMpLG09bCYmaFtsXSxtJiZtLmFwcGx5JiZMKGgpJiYoYi5yZXN1bHQ9bS5hcHBseShoLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGZ8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhTChlKXx8bCYmbi5pc0Z1bmN0aW9uKGVbcV0pJiYhbi5pc1dpbmRvdyhlKSYmKGk9ZVtsXSxpJiYoZVtsXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGVbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaSYmKGVbbF09aSkpLGIucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMH0pO24uZXZlbnQudHJpZ2dlcihkLG51bGwsYiksZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0pLG4uZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksbC5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLGwuZm9jdXNpbnx8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSkpfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU4uYWNjZXNzKGQsYiktMTtlP04uYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTi5yZW1vdmUoZCxiKSl9fX0pO3ZhciBpYj1hLmxvY2F0aW9uLGpiPW4ubm93KCksa2I9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4oIWN8fGMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpJiZuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciBsYj0vIy4qJC8sbWI9LyhbPyZdKV89W14mXSovLG5iPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sb2I9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8scGI9L14oPzpHRVR8SEVBRCkkLyxxYj0vXlxcL1xcLy8scmI9e30sc2I9e30sdGI9XCIqL1wiLmNvbmNhdChcIipcIiksdWI9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt1Yi5ocmVmPWliLmhyZWY7ZnVuY3Rpb24gdmIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gd2IoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09c2I7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiB4YihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24geWIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gemIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6aWIuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDpvYi50ZXN0KGliLnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjp0Yix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP3hiKHhiKGEsbi5hamF4U2V0dGluZ3MpLGIpOnhiKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOnZiKHJiKSxhamF4VHJhbnNwb3J0OnZiKHNiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtPW4uYWpheFNldHVwKHt9LGMpLG89bS5jb250ZXh0fHxtLHA9bS5jb250ZXh0JiYoby5ub2RlVHlwZXx8by5qcXVlcnkpP24obyk6bi5ldmVudCxxPW4uRGVmZXJyZWQoKSxyPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscz1tLnN0YXR1c0NvZGV8fHt9LHQ9e30sdT17fSx2PTAsdz1cImNhbmNlbGVkXCIseD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT12KXtpZighaCl7aD17fTt3aGlsZShiPW5iLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXY/ZzpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB2fHwoYT11W2NdPXVbY118fGEsdFthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB2fHwobS5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj52KWZvcihiIGluIGEpc1tiXT1bc1tiXSxhW2JdXTtlbHNlIHguYWx3YXlzKGFbeC5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dztyZXR1cm4gZSYmZS5hYm9ydChiKSx6KDAsYiksdGhpc319O2lmKHEucHJvbWlzZSh4KS5jb21wbGV0ZT1yLmFkZCx4LnN1Y2Nlc3M9eC5kb25lLHguZXJyb3I9eC5mYWlsLG0udXJsPSgoYnx8bS51cmx8fGliLmhyZWYpK1wiXCIpLnJlcGxhY2UobGIsXCJcIikucmVwbGFjZShxYixpYi5wcm90b2NvbCtcIi8vXCIpLG0udHlwZT1jLm1ldGhvZHx8Yy50eXBlfHxtLm1ldGhvZHx8bS50eXBlLG0uZGF0YVR5cGVzPW4udHJpbShtLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W1wiXCJdLG51bGw9PW0uY3Jvc3NEb21haW4pe2o9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ai5ocmVmPW0udXJsLGouaHJlZj1qLmhyZWYsbS5jcm9zc0RvbWFpbj11Yi5wcm90b2NvbCtcIi8vXCIrdWIuaG9zdCE9ai5wcm90b2NvbCtcIi8vXCIrai5ob3N0fWNhdGNoKHkpe20uY3Jvc3NEb21haW49ITB9fWlmKG0uZGF0YSYmbS5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIG0uZGF0YSYmKG0uZGF0YT1uLnBhcmFtKG0uZGF0YSxtLnRyYWRpdGlvbmFsKSksd2IocmIsbSxjLHgpLDI9PT12KXJldHVybiB4O2s9bi5ldmVudCYmbS5nbG9iYWwsayYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxtLnR5cGU9bS50eXBlLnRvVXBwZXJDYXNlKCksbS5oYXNDb250ZW50PSFwYi50ZXN0KG0udHlwZSksZj1tLnVybCxtLmhhc0NvbnRlbnR8fChtLmRhdGEmJihmPW0udXJsKz0oa2IudGVzdChmKT9cIiZcIjpcIj9cIikrbS5kYXRhLGRlbGV0ZSBtLmRhdGEpLG0uY2FjaGU9PT0hMSYmKG0udXJsPW1iLnRlc3QoZik/Zi5yZXBsYWNlKG1iLFwiJDFfPVwiK2piKyspOmYrKGtiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitqYisrKSksbS5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZl0mJnguc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZl0pLG4uZXRhZ1tmXSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tmXSkpLChtLmRhdGEmJm0uaGFzQ29udGVudCYmbS5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsbS5jb250ZW50VHlwZSkseC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsbS5kYXRhVHlwZXNbMF0mJm0uYWNjZXB0c1ttLmRhdGFUeXBlc1swXV0/bS5hY2NlcHRzW20uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1tLmRhdGFUeXBlc1swXT9cIiwgXCIrdGIrXCI7IHE9MC4wMVwiOlwiXCIpOm0uYWNjZXB0c1tcIipcIl0pO2ZvcihsIGluIG0uaGVhZGVycyl4LnNldFJlcXVlc3RIZWFkZXIobCxtLmhlYWRlcnNbbF0pO2lmKG0uYmVmb3JlU2VuZCYmKG0uYmVmb3JlU2VuZC5jYWxsKG8seCxtKT09PSExfHwyPT09dikpcmV0dXJuIHguYWJvcnQoKTt3PVwiYWJvcnRcIjtmb3IobCBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl4W2xdKG1bbF0pO2lmKGU9d2Ioc2IsbSxjLHgpKXtpZih4LnJlYWR5U3RhdGU9MSxrJiZwLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt4LG1dKSwyPT09dilyZXR1cm4geDttLmFzeW5jJiZtLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eC5hYm9ydChcInRpbWVvdXRcIil9LG0udGltZW91dCkpO3RyeXt2PTEsZS5zZW5kKHQseil9Y2F0Y2goeSl7aWYoISgyPnYpKXRocm93IHk7eigtMSx5KX19ZWxzZSB6KC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIHooYixjLGQsaCl7dmFyIGosbCx0LHUsdyx5PWM7MiE9PXYmJih2PTIsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHgucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiYzMDA+Ynx8MzA0PT09YixkJiYodT15YihtLHgsZCkpLHU9emIobSx1LHgsaiksaj8obS5pZk1vZGlmaWVkJiYodz14LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZl09dyksdz14LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW0udHlwZT95PVwibm9jb250ZW50XCI6MzA0PT09Yj95PVwibm90bW9kaWZpZWRcIjooeT11LnN0YXRlLGw9dS5kYXRhLHQ9dS5lcnJvcixqPSF0KSk6KHQ9eSwoYnx8IXkpJiYoeT1cImVycm9yXCIsMD5iJiYoYj0wKSkpLHguc3RhdHVzPWIseC5zdGF0dXNUZXh0PShjfHx5KStcIlwiLGo/cS5yZXNvbHZlV2l0aChvLFtsLHkseF0pOnEucmVqZWN0V2l0aChvLFt4LHksdF0pLHguc3RhdHVzQ29kZShzKSxzPXZvaWQgMCxrJiZwLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeCxtLGo/bDp0XSksci5maXJlV2l0aChvLFt4LHldKSxrJiYocC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3gsbV0pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHh9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgobi5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LG4uaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pOih0aGlzWzBdJiYoYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXMpfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9bih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1uLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8bih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9fSksbi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy52aXNpYmxlKGEpfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiBhLm9mZnNldFdpZHRoPjB8fGEub2Zmc2V0SGVpZ2h0PjB8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg+MH07dmFyIEFiPS8lMjAvZyxCYj0vXFxbXFxdJC8sQ2I9L1xccj9cXG4vZyxEYj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksRWI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEZiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fEJiLnRlc3QoYSk/ZChhLGUpOkZiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpRmIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUZiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoQWIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJkViLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFEYi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhWC50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKENiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoQ2IsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgR2I9ezA6MjAwLDEyMjM6MjA0fSxIYj1uLmFqYXhTZXR0aW5ncy54aHIoKTtsLmNvcnM9ISFIYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIEhiLGwuYWpheD1IYj0hIUhiLG4uYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO3JldHVybiBsLmNvcnN8fEhiJiYhYi5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihlLGYpe3ZhciBnLGg9Yi54aHIoKTtpZihoLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZyBpbiBiLnhockZpZWxkcyloW2ddPWIueGhyRmllbGRzW2ddO2IubWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZyBpbiBlKWguc2V0UmVxdWVzdEhlYWRlcihnLGVbZ10pO2M9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YyYmKGM9ZD1oLm9ubG9hZD1oLm9uZXJyb3I9aC5vbmFib3J0PWgub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09YT9oLmFib3J0KCk6XCJlcnJvclwiPT09YT9cIm51bWJlclwiIT10eXBlb2YgaC5zdGF0dXM/ZigwLFwiZXJyb3JcIik6ZihoLnN0YXR1cyxoLnN0YXR1c1RleHQpOmYoR2JbaC5zdGF0dXNdfHxoLnN0YXR1cyxoLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oaC5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGgucmVzcG9uc2VUZXh0P3tiaW5hcnk6aC5yZXNwb25zZX06e3RleHQ6aC5yZXNwb25zZVRleHR9LGguZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGgub25sb2FkPWMoKSxkPWgub25lcnJvcj1jKFwiZXJyb3JcIiksdm9pZCAwIT09aC5vbmFib3J0P2gub25hYm9ydD1kOmgub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWgucmVhZHlTdGF0ZSYmYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyYmZCgpfSl9LGM9YyhcImFib3J0XCIpO3RyeXtoLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpfWNhdGNoKGkpe2lmKGMpdGhyb3cgaX19LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgSWI9W10sSmI9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1JYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2piKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEpiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZKYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEpiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGtiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/bihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxJYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLGwuY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1hLmNoaWxkTm9kZXMubGVuZ3RofSgpLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8KGwuY3JlYXRlSFRNTERvY3VtZW50P2QuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpOmQpO3ZhciBlPXguZXhlYyhhKSxmPSFjJiZbXTtyZXR1cm4gZT9bYi5jcmVhdGVFbGVtZW50KGVbMV0pXTooZT1jYShbYV0sYixmKSxmJiZmLmxlbmd0aCYmbihmKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfTt2YXIgS2I9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJktiKXJldHVybiBLYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPW4udHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseShnLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gTGIoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxuLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsbi5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KGU9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPUxiKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1uLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8RWF9KX19KSxuLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtuLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmPUxiKGEpO3JldHVybiB2b2lkIDA9PT1lP2Y/ZltiXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/Zi5wYWdlWE9mZnNldDplLGM/ZTpmLnBhZ2VZT2Zmc2V0KTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09R2EobC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9RmEoYSxiKSxCYS50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX0sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH19KSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBNYj1hLmpRdWVyeSxOYj1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1OYiksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9TWIpLG59LGJ8fChhLmpRdWVyeT1hLiQ9biksbn0pO1xuIiwiLypcbiAqICBWaWRlIC0gdjAuNS4wXG4gKiAgRWFzeSBhcyBoZWxsIGpRdWVyeSBwbHVnaW4gZm9yIHZpZGVvIGJhY2tncm91bmRzLlxuICogIGh0dHA6Ly92b2RrYWJlYXJzLmdpdGh1Yi5pby92aWRlL1xuICpcbiAqICBNYWRlIGJ5IElseWEgTWFrYXJvdlxuICogIFVuZGVyIE1JVCBMaWNlbnNlXG4gKi9cbiEoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdC5qUXVlcnkpO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbigkKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBwbHVnaW5cbiAgICogQHByaXZhdGVcbiAgICogQGNvbnN0XG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICB2YXIgUExVR0lOX05BTUUgPSAndmlkZSc7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgc2V0dGluZ3NcbiAgICogQHByaXZhdGVcbiAgICogQGNvbnN0XG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgREVGQVVMVFMgPSB7XG4gICAgdm9sdW1lOiAxLFxuICAgIHBsYXliYWNrUmF0ZTogMSxcbiAgICBtdXRlZDogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIHBvc2l0aW9uOiAnNTAlIDUwJScsXG4gICAgcG9zdGVyVHlwZTogJ2RldGVjdCcsXG4gICAgcmVzaXppbmc6IHRydWUsXG4gICAgYmdDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBjbGFzc05hbWU6ICcnXG4gIH07XG5cbiAgLyoqXG4gICAqIE5vdCBpbXBsZW1lbnRlZCBlcnJvciBtZXNzYWdlXG4gICAqIEBwcml2YXRlXG4gICAqIEBjb25zdFxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdmFyIE5PVF9JTVBMRU1FTlRFRF9NU0cgPSAnTm90IGltcGxlbWVudGVkJztcblxuICAvKipcbiAgICogUGFyc2UgYSBzdHJpbmcgd2l0aCBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge09iamVjdHxTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZU9wdGlvbnMoc3RyKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBkZWxpbWl0ZXJJbmRleDtcbiAgICB2YXIgb3B0aW9uO1xuICAgIHZhciBwcm9wO1xuICAgIHZhciB2YWw7XG4gICAgdmFyIGFycjtcbiAgICB2YXIgbGVuO1xuICAgIHZhciBpO1xuXG4gICAgLy8gUmVtb3ZlIHNwYWNlcyBhcm91bmQgZGVsaW1pdGVycyBhbmQgc3BsaXRcbiAgICBhcnIgPSBzdHIucmVwbGFjZSgvXFxzKjpcXHMqL2csICc6JykucmVwbGFjZSgvXFxzKixcXHMqL2csICcsJykuc3BsaXQoJywnKTtcblxuICAgIC8vIFBhcnNlIGEgc3RyaW5nXG4gICAgZm9yIChpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBvcHRpb24gPSBhcnJbaV07XG5cbiAgICAgIC8vIElnbm9yZSB1cmxzIGFuZCBhIHN0cmluZyB3aXRob3V0IGNvbG9uIGRlbGltaXRlcnNcbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9uLnNlYXJjaCgvXihodHRwfGh0dHBzfGZ0cCk6XFwvXFwvLykgIT09IC0xIHx8XG4gICAgICAgIG9wdGlvbi5zZWFyY2goJzonKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVsaW1pdGVySW5kZXggPSBvcHRpb24uaW5kZXhPZignOicpO1xuICAgICAgcHJvcCA9IG9wdGlvbi5zdWJzdHJpbmcoMCwgZGVsaW1pdGVySW5kZXgpO1xuICAgICAgdmFsID0gb3B0aW9uLnN1YnN0cmluZyhkZWxpbWl0ZXJJbmRleCArIDEpO1xuXG4gICAgICAvLyBJZiB2YWwgaXMgYW4gZW1wdHkgc3RyaW5nLCBtYWtlIGl0IHVuZGVmaW5lZFxuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHZhbHVlIGlmIGl0IGlzIGxpa2UgYSBib29sZWFuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsID0gdmFsID09PSAndHJ1ZScgfHwgKHZhbCA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdmFsKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udmVydCBhIHN0cmluZyB2YWx1ZSBpZiBpdCBpcyBsaWtlIGEgbnVtYmVyXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsID0gIWlzTmFOKHZhbCkgPyArdmFsIDogdmFsO1xuICAgICAgfVxuXG4gICAgICBvYmpbcHJvcF0gPSB2YWw7XG4gICAgfVxuXG4gICAgLy8gSWYgbm90aGluZyBpcyBwYXJzZWRcbiAgICBpZiAocHJvcCA9PSBudWxsICYmIHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBwb3NpdGlvbiBvcHRpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VQb3NpdGlvbihzdHIpIHtcbiAgICBzdHIgPSAnJyArIHN0cjtcblxuICAgIC8vIERlZmF1bHQgdmFsdWUgaXMgYSBjZW50ZXJcbiAgICB2YXIgYXJncyA9IHN0ci5zcGxpdCgvXFxzKy8pO1xuICAgIHZhciB4ID0gJzUwJSc7XG4gICAgdmFyIHkgPSAnNTAlJztcbiAgICB2YXIgbGVuO1xuICAgIHZhciBhcmc7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmcgPSBhcmdzW2ldO1xuXG4gICAgICAvLyBDb252ZXJ0IHZhbHVlc1xuICAgICAgaWYgKGFyZyA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHggPSAnMCUnO1xuICAgICAgfSBlbHNlIGlmIChhcmcgPT09ICdyaWdodCcpIHtcbiAgICAgICAgeCA9ICcxMDAlJztcbiAgICAgIH0gZWxzZSBpZiAoYXJnID09PSAndG9wJykge1xuICAgICAgICB5ID0gJzAlJztcbiAgICAgIH0gZWxzZSBpZiAoYXJnID09PSAnYm90dG9tJykge1xuICAgICAgICB5ID0gJzEwMCUnO1xuICAgICAgfSBlbHNlIGlmIChhcmcgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgeCA9ICc1MCUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSAnNTAlJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICB4ID0gYXJnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSBhcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGEgcG9zdGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kUG9zdGVyKHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9uTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY2FsbGJhY2sodGhpcy5zcmMpO1xuICAgIH07XG5cbiAgICAkKCc8aW1nIHNyYz1cIicgKyBwYXRoICsgJy5naWZcIj4nKS5sb2FkKG9uTG9hZCk7XG4gICAgJCgnPGltZyBzcmM9XCInICsgcGF0aCArICcuanBnXCI+JykubG9hZChvbkxvYWQpO1xuICAgICQoJzxpbWcgc3JjPVwiJyArIHBhdGggKyAnLmpwZWdcIj4nKS5sb2FkKG9uTG9hZCk7XG4gICAgJCgnPGltZyBzcmM9XCInICsgcGF0aCArICcucG5nXCI+JykubG9hZChvbkxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZGUgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRpb25zXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gVmlkZShlbGVtZW50LCBwYXRoLCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICAvLyBQYXJzZSBwYXRoXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgcGF0aCA9IHBhcnNlT3B0aW9ucyhwYXRoKTtcbiAgICB9XG5cbiAgICAvLyBQYXJzZSBvcHRpb25zXG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFuIGV4dGVuc2lvblxuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLlxcdyokLywgJycpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhdGggPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKHZhciBpIGluIHBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGguaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBwYXRoW2ldID0gcGF0aFtpXS5yZXBsYWNlKC9cXC5cXHcqJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vVm9ka2FCZWFycy9WaWRlL2lzc3Vlcy8xMTBcbiAgICB0cnkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubWVzc2FnZSAhPT0gTk9UX0lNUExFTUVOVEVEX01TRykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvblxuICAgKiBAcHVibGljXG4gICAqL1xuICBWaWRlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZpZGUgPSB0aGlzO1xuICAgIHZhciBwYXRoID0gdmlkZS5wYXRoO1xuICAgIHZhciBwb3N0ZXIgPSBwYXRoO1xuICAgIHZhciBzb3VyY2VzID0gJyc7XG4gICAgdmFyICRlbGVtZW50ID0gdmlkZS4kZWxlbWVudDtcbiAgICB2YXIgc2V0dGluZ3MgPSB2aWRlLnNldHRpbmdzO1xuICAgIHZhciBwb3NpdGlvbiA9IHBhcnNlUG9zaXRpb24oc2V0dGluZ3MucG9zaXRpb24pO1xuICAgIHZhciBwb3N0ZXJUeXBlID0gc2V0dGluZ3MucG9zdGVyVHlwZTtcbiAgICB2YXIgJHZpZGVvO1xuICAgIHZhciAkd3JhcHBlcjtcblxuICAgIC8vIFNldCBzdHlsZXMgb2YgYSB2aWRlbyB3cmFwcGVyXG4gICAgJHdyYXBwZXIgPSB2aWRlLiR3cmFwcGVyID0gJCgnPGRpdj4nKVxuICAgICAgLmFkZENsYXNzKHNldHRpbmdzLmNsYXNzTmFtZSlcbiAgICAgIC5jc3Moe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgJ3otaW5kZXgnOiAtMSxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICctd2Via2l0LWJhY2tncm91bmQtc2l6ZSc6ICdjb3ZlcicsXG4gICAgICAgICctbW96LWJhY2tncm91bmQtc2l6ZSc6ICdjb3ZlcicsXG4gICAgICAgICctby1iYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLFxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvdmVyJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBzZXR0aW5ncy5iZ0NvbG9yLFxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBwb3NpdGlvbi54ICsgJyAnICsgcG9zaXRpb24ueVxuICAgICAgfSk7XG5cbiAgICAvLyBHZXQgYSBwb3N0ZXIgcGF0aFxuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwYXRoLnBvc3Rlcikge1xuICAgICAgICBwb3N0ZXIgPSBwYXRoLnBvc3RlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXRoLm1wNCkge1xuICAgICAgICAgIHBvc3RlciA9IHBhdGgubXA0O1xuICAgICAgICB9IGVsc2UgaWYgKHBhdGgud2VibSkge1xuICAgICAgICAgIHBvc3RlciA9IHBhdGgud2VibTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoLm9ndikge1xuICAgICAgICAgIHBvc3RlciA9IHBhdGgub2d2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGEgdmlkZW8gcG9zdGVyXG4gICAgaWYgKHBvc3RlclR5cGUgPT09ICdkZXRlY3QnKSB7XG4gICAgICBmaW5kUG9zdGVyKHBvc3RlciwgZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICR3cmFwcGVyLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArIHVybCArICcpJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHBvc3RlclR5cGUgIT09ICdub25lJykge1xuICAgICAgJHdyYXBwZXIuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgcG9zdGVyICsgJy4nICsgcG9zdGVyVHlwZSArICcpJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBwYXJlbnQgZWxlbWVudCBoYXMgYSBzdGF0aWMgcG9zaXRpb24sIG1ha2UgaXQgcmVsYXRpdmVcbiAgICBpZiAoJGVsZW1lbnQuY3NzKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgJGVsZW1lbnQuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgIH1cblxuICAgICRlbGVtZW50LnByZXBlbmQoJHdyYXBwZXIpO1xuXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHBhdGgubXA0KSB7XG4gICAgICAgIHNvdXJjZXMgKz0gJzxzb3VyY2Ugc3JjPVwiJyArIHBhdGgubXA0ICsgJy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCI+JztcbiAgICAgIH1cblxuICAgICAgaWYgKHBhdGgud2VibSkge1xuICAgICAgICBzb3VyY2VzICs9ICc8c291cmNlIHNyYz1cIicgKyBwYXRoLndlYm0gKyAnLndlYm1cIiB0eXBlPVwidmlkZW8vd2VibVwiPic7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXRoLm9ndikge1xuICAgICAgICBzb3VyY2VzICs9ICc8c291cmNlIHNyYz1cIicgKyBwYXRoLm9ndiArICcub2d2XCIgdHlwZT1cInZpZGVvL29nZ1wiPic7XG4gICAgICB9XG5cbiAgICAgICR2aWRlbyA9IHZpZGUuJHZpZGVvID0gJCgnPHZpZGVvPicgKyBzb3VyY2VzICsgJzwvdmlkZW8+Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR2aWRlbyA9IHZpZGUuJHZpZGVvID0gJCgnPHZpZGVvPicgK1xuICAgICAgICAnPHNvdXJjZSBzcmM9XCInICsgcGF0aCArICcubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiPicgK1xuICAgICAgICAnPHNvdXJjZSBzcmM9XCInICsgcGF0aCArICcud2VibVwiIHR5cGU9XCJ2aWRlby93ZWJtXCI+JyArXG4gICAgICAgICc8c291cmNlIHNyYz1cIicgKyBwYXRoICsgJy5vZ3ZcIiB0eXBlPVwidmlkZW8vb2dnXCI+JyArXG4gICAgICAgICc8L3ZpZGVvPicpO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Wb2RrYUJlYXJzL1ZpZGUvaXNzdWVzLzExMFxuICAgIHRyeSB7XG4gICAgICAkdmlkZW9cblxuICAgICAgICAvLyBTZXQgdmlkZW8gcHJvcGVydGllc1xuICAgICAgICAucHJvcCh7XG4gICAgICAgICAgYXV0b3BsYXk6IHNldHRpbmdzLmF1dG9wbGF5LFxuICAgICAgICAgIGxvb3A6IHNldHRpbmdzLmxvb3AsXG4gICAgICAgICAgdm9sdW1lOiBzZXR0aW5ncy52b2x1bWUsXG4gICAgICAgICAgbXV0ZWQ6IHNldHRpbmdzLm11dGVkLFxuICAgICAgICAgIGRlZmF1bHRNdXRlZDogc2V0dGluZ3MubXV0ZWQsXG4gICAgICAgICAgcGxheWJhY2tSYXRlOiBzZXR0aW5ncy5wbGF5YmFja1JhdGUsXG4gICAgICAgICAgZGVmYXVsdFBsYXliYWNrUmF0ZTogc2V0dGluZ3MucGxheWJhY2tSYXRlXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihOT1RfSU1QTEVNRU5URURfTVNHKTtcbiAgICB9XG5cbiAgICAvLyBWaWRlbyBhbGlnbm1lbnRcbiAgICAkdmlkZW8uY3NzKHtcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAnei1pbmRleCc6IC0xLFxuICAgICAgdG9wOiBwb3NpdGlvbi55LFxuICAgICAgbGVmdDogcG9zaXRpb24ueCxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoLScgKyBwb3NpdGlvbi54ICsgJywgLScgKyBwb3NpdGlvbi55ICsgJyknLFxuICAgICAgJy1tcy10cmFuc2Zvcm0nOiAndHJhbnNsYXRlKC0nICsgcG9zaXRpb24ueCArICcsIC0nICsgcG9zaXRpb24ueSArICcpJyxcbiAgICAgICctbW96LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoLScgKyBwb3NpdGlvbi54ICsgJywgLScgKyBwb3NpdGlvbi55ICsgJyknLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0nICsgcG9zaXRpb24ueCArICcsIC0nICsgcG9zaXRpb24ueSArICcpJyxcblxuICAgICAgLy8gRGlzYWJsZSB2aXNpYmlsaXR5LCB3aGlsZSBsb2FkaW5nXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KVxuXG4gICAgLy8gUmVzaXplIGEgdmlkZW8sIHdoZW4gaXQncyBsb2FkZWRcbiAgICAub25lKCdjYW5wbGF5dGhyb3VnaC4nICsgUExVR0lOX05BTUUsIGZ1bmN0aW9uKCkge1xuICAgICAgdmlkZS5yZXNpemUoKTtcbiAgICB9KVxuXG4gICAgLy8gTWFrZSBpdCB2aXNpYmxlLCB3aGVuIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgLm9uZSgncGxheWluZy4nICsgUExVR0lOX05BTUUsIGZ1bmN0aW9uKCkge1xuICAgICAgJHZpZGVvLmNzcyh7XG4gICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSk7XG4gICAgICAkd3JhcHBlci5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAnbm9uZScpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVzaXplIGV2ZW50IGlzIGF2YWlsYWJsZSBvbmx5IGZvciAnd2luZG93J1xuICAgIC8vIFVzZSBhbm90aGVyIGNvZGUgc29sdXRpb25zIHRvIGRldGVjdCBET00gZWxlbWVudHMgcmVzaXppbmdcbiAgICAkZWxlbWVudC5vbigncmVzaXplLicgKyBQTFVHSU5fTkFNRSwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2V0dGluZ3MucmVzaXppbmcpIHtcbiAgICAgICAgdmlkZS5yZXNpemUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFwcGVuZCBhIHZpZGVvXG4gICAgJHdyYXBwZXIuYXBwZW5kKCR2aWRlbyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhIHZpZGVvIGVsZW1lbnRcbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJucyB7SFRNTFZpZGVvRWxlbWVudH1cbiAgICovXG4gIFZpZGUucHJvdG90eXBlLmdldFZpZGVvT2JqZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJHZpZGVvWzBdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXNpemUgYSB2aWRlbyBiYWNrZ3JvdW5kXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIFZpZGUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy4kdmlkZW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJHdyYXBwZXIgPSB0aGlzLiR3cmFwcGVyO1xuICAgIHZhciAkdmlkZW8gPSB0aGlzLiR2aWRlbztcbiAgICB2YXIgdmlkZW8gPSAkdmlkZW9bMF07XG5cbiAgICAvLyBHZXQgYSBuYXRpdmUgdmlkZW8gc2l6ZVxuICAgIHZhciB2aWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIHZhciB2aWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcblxuICAgIC8vIEdldCBhIHdyYXBwZXIgc2l6ZVxuICAgIHZhciB3cmFwcGVySGVpZ2h0ID0gJHdyYXBwZXIuaGVpZ2h0KCk7XG4gICAgdmFyIHdyYXBwZXJXaWR0aCA9ICR3cmFwcGVyLndpZHRoKCk7XG5cbiAgICBpZiAod3JhcHBlcldpZHRoIC8gdmlkZW9XaWR0aCA+IHdyYXBwZXJIZWlnaHQgLyB2aWRlb0hlaWdodCkge1xuICAgICAgJHZpZGVvLmNzcyh7XG5cbiAgICAgICAgLy8gKzIgcGl4ZWxzIHRvIHByZXZlbnQgYW4gZW1wdHkgc3BhY2UgYWZ0ZXIgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgd2lkdGg6IHdyYXBwZXJXaWR0aCArIDIsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHZpZGVvLmNzcyh7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG5cbiAgICAgICAgLy8gKzIgcGl4ZWxzIHRvIHByZXZlbnQgYW4gZW1wdHkgc3BhY2UgYWZ0ZXIgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgaGVpZ2h0OiB3cmFwcGVySGVpZ2h0ICsgMlxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgdmlkZW8gYmFja2dyb3VuZFxuICAgKiBAcHVibGljXG4gICAqL1xuICBWaWRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlICRbUExVR0lOX05BTUVdLmxvb2t1cFt0aGlzLmluZGV4XTtcbiAgICB0aGlzLiR2aWRlbyAmJiB0aGlzLiR2aWRlby5vZmYoUExVR0lOX05BTUUpO1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKFBMVUdJTl9OQU1FKS5yZW1vdmVEYXRhKFBMVUdJTl9OQU1FKTtcbiAgICB0aGlzLiR3cmFwcGVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcGVjaWFsIHBsdWdpbiBvYmplY3QgZm9yIGluc3RhbmNlcy5cbiAgICogQHB1YmxpY1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgJFtQTFVHSU5fTkFNRV0gPSB7XG4gICAgbG9va3VwOiBbXVxuICB9O1xuXG4gIC8qKlxuICAgKiBQbHVnaW4gY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7SlF1ZXJ5fVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gICQuZm5bUExVR0lOX05BTUVdID0gZnVuY3Rpb24ocGF0aCwgb3B0aW9ucykge1xuICAgIHZhciBpbnN0YW5jZTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGluc3RhbmNlID0gJC5kYXRhKHRoaXMsIFBMVUdJTl9OQU1FKTtcblxuICAgICAgLy8gRGVzdHJveSB0aGUgcGx1Z2luIGluc3RhbmNlIGlmIGV4aXN0c1xuICAgICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuZGVzdHJveSgpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHBsdWdpbiBpbnN0YW5jZVxuICAgICAgaW5zdGFuY2UgPSBuZXcgVmlkZSh0aGlzLCBwYXRoLCBvcHRpb25zKTtcbiAgICAgIGluc3RhbmNlLmluZGV4ID0gJFtQTFVHSU5fTkFNRV0ubG9va3VwLnB1c2goaW5zdGFuY2UpIC0gMTtcbiAgICAgICQuZGF0YSh0aGlzLCBQTFVHSU5fTkFNRSwgaW5zdGFuY2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICAvLyBXaW5kb3cgcmVzaXplIGV2ZW50IGxpc3RlbmVyXG4gICAgJHdpbmRvdy5vbigncmVzaXplLicgKyBQTFVHSU5fTkFNRSwgZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBsZW4gPSAkW1BMVUdJTl9OQU1FXS5sb29rdXAubGVuZ3RoLCBpID0gMCwgaW5zdGFuY2U7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpbnN0YW5jZSA9ICRbUExVR0lOX05BTUVdLmxvb2t1cFtpXTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Uuc2V0dGluZ3MucmVzaXppbmcpIHtcbiAgICAgICAgICBpbnN0YW5jZS5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1ZvZGthQmVhcnMvVmlkZS9pc3N1ZXMvNjhcbiAgICAkd2luZG93Lm9uKCd1bmxvYWQuJyArIFBMVUdJTl9OQU1FLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIEF1dG8gaW5pdGlhbGl6YXRpb25cbiAgICAvLyBBZGQgJ2RhdGEtdmlkZS1iZycgYXR0cmlidXRlIHdpdGggYSBwYXRoIHRvIHRoZSB2aWRlbyB3aXRob3V0IGV4dGVuc2lvblxuICAgIC8vIEFsc28geW91IGNhbiBwYXNzIG9wdGlvbnMgdGhyb3cgdGhlICdkYXRhLXZpZGUtb3B0aW9ucycgYXR0cmlidXRlXG4gICAgLy8gJ2RhdGEtdmlkZS1vcHRpb25zJyBtdXN0IGJlIGxpa2UgJ211dGVkOiBmYWxzZSwgdm9sdW1lOiAwLjUnXG4gICAgJChkb2N1bWVudCkuZmluZCgnW2RhdGEtJyArIFBMVUdJTl9OQU1FICsgJy1iZ10nKS5lYWNoKGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcbiAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICB2YXIgb3B0aW9ucyA9ICRlbGVtZW50LmRhdGEoUExVR0lOX05BTUUgKyAnLW9wdGlvbnMnKTtcbiAgICAgIHZhciBwYXRoID0gJGVsZW1lbnQuZGF0YShQTFVHSU5fTkFNRSArICctYmcnKTtcblxuICAgICAgJGVsZW1lbnRbUExVR0lOX05BTUVdKHBhdGgsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9KTtcblxufSk7XG4iLCIhZnVuY3Rpb24oJCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEZPVU5EQVRJT05fVkVSU0lPTiA9ICc2LjIuMCc7XG5cbi8vIEdsb2JhbCBGb3VuZGF0aW9uIG9iamVjdFxuLy8gVGhpcyBpcyBhdHRhY2hlZCB0byB0aGUgd2luZG93LCBvciB1c2VkIGFzIGEgbW9kdWxlIGZvciBBTUQvQnJvd3NlcmlmeVxudmFyIEZvdW5kYXRpb24gPSB7XG4gIHZlcnNpb246IEZPVU5EQVRJT05fVkVSU0lPTixcblxuICAvKipcbiAgICogU3RvcmVzIGluaXRpYWxpemVkIHBsdWdpbnMuXG4gICAqL1xuICBfcGx1Z2luczoge30sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBnZW5lcmF0ZWQgdW5pcXVlIGlkcyBmb3IgcGx1Z2luIGluc3RhbmNlc1xuICAgKi9cbiAgX3V1aWRzOiBbXSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gZm9yIFJUTCBzdXBwb3J0XG4gICAqL1xuICBydGw6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuICQoJ2h0bWwnKS5hdHRyKCdkaXInKSA9PT0gJ3J0bCc7XG4gIH0sXG4gIC8qKlxuICAgKiBEZWZpbmVzIGEgRm91bmRhdGlvbiBwbHVnaW4sIGFkZGluZyBpdCB0byB0aGUgYEZvdW5kYXRpb25gIG5hbWVzcGFjZSBhbmQgdGhlIGxpc3Qgb2YgcGx1Z2lucyB0byBpbml0aWFsaXplIHdoZW4gcmVmbG93aW5nLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luIC0gVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBwbHVnaW4uXG4gICAqL1xuICBwbHVnaW46IGZ1bmN0aW9uKHBsdWdpbiwgbmFtZSkge1xuICAgIC8vIE9iamVjdCBrZXkgdG8gdXNlIHdoZW4gYWRkaW5nIHRvIGdsb2JhbCBGb3VuZGF0aW9uIG9iamVjdFxuICAgIC8vIEV4YW1wbGVzOiBGb3VuZGF0aW9uLlJldmVhbCwgRm91bmRhdGlvbi5PZmZDYW52YXNcbiAgICB2YXIgY2xhc3NOYW1lID0gKG5hbWUgfHwgZnVuY3Rpb25OYW1lKHBsdWdpbikpO1xuICAgIC8vIE9iamVjdCBrZXkgdG8gdXNlIHdoZW4gc3RvcmluZyB0aGUgcGx1Z2luLCBhbHNvIHVzZWQgdG8gY3JlYXRlIHRoZSBpZGVudGlmeWluZyBkYXRhIGF0dHJpYnV0ZSBmb3IgdGhlIHBsdWdpblxuICAgIC8vIEV4YW1wbGVzOiBkYXRhLXJldmVhbCwgZGF0YS1vZmYtY2FudmFzXG4gICAgdmFyIGF0dHJOYW1lICA9IGh5cGhlbmF0ZShjbGFzc05hbWUpO1xuXG4gICAgLy8gQWRkIHRvIHRoZSBGb3VuZGF0aW9uIG9iamVjdCBhbmQgdGhlIHBsdWdpbnMgbGlzdCAoZm9yIHJlZmxvd2luZylcbiAgICB0aGlzLl9wbHVnaW5zW2F0dHJOYW1lXSA9IHRoaXNbY2xhc3NOYW1lXSA9IHBsdWdpbjtcbiAgfSxcbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBQb3B1bGF0ZXMgdGhlIF91dWlkcyBhcnJheSB3aXRoIHBvaW50ZXJzIHRvIGVhY2ggaW5kaXZpZHVhbCBwbHVnaW4gaW5zdGFuY2UuXG4gICAqIEFkZHMgdGhlIGB6ZlBsdWdpbmAgZGF0YS1hdHRyaWJ1dGUgdG8gcHJvZ3JhbW1hdGljYWxseSBjcmVhdGVkIHBsdWdpbnMgdG8gYWxsb3cgdXNlIG9mICQoc2VsZWN0b3IpLmZvdW5kYXRpb24obWV0aG9kKSBjYWxscy5cbiAgICogQWxzbyBmaXJlcyB0aGUgaW5pdGlhbGl6YXRpb24gZXZlbnQgZm9yIGVhY2ggcGx1Z2luLCBjb25zb2xpZGF0aW5nIHJlcGVkaXRpdmUgY29kZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIGFuIGluc3RhbmNlIG9mIGEgcGx1Z2luLCB1c3VhbGx5IGB0aGlzYCBpbiBjb250ZXh0LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBwbHVnaW4sIHBhc3NlZCBhcyBhIGNhbWVsQ2FzZWQgc3RyaW5nLlxuICAgKiBAZmlyZXMgUGx1Z2luI2luaXRcbiAgICovXG4gIHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbihwbHVnaW4sIG5hbWUpe1xuICAgIHZhciBwbHVnaW5OYW1lID0gbmFtZSA/IGh5cGhlbmF0ZShuYW1lKSA6IGZ1bmN0aW9uTmFtZShwbHVnaW4uY29uc3RydWN0b3IpLnRvTG93ZXJDYXNlKCk7XG4gICAgcGx1Z2luLnV1aWQgPSB0aGlzLkdldFlvRGlnaXRzKDYsIHBsdWdpbk5hbWUpO1xuXG4gICAgaWYoIXBsdWdpbi4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gKSl7IHBsdWdpbi4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gLCBwbHVnaW4udXVpZCk7IH1cbiAgICBpZighcGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJykpeyBwbHVnaW4uJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nLCBwbHVnaW4pOyB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBpbml0aWFsaXplZC5cbiAgICAgICAgICAgKiBAZXZlbnQgUGx1Z2luI2luaXRcbiAgICAgICAgICAgKi9cbiAgICBwbHVnaW4uJGVsZW1lbnQudHJpZ2dlcihgaW5pdC56Zi4ke3BsdWdpbk5hbWV9YCk7XG5cbiAgICB0aGlzLl91dWlkcy5wdXNoKHBsdWdpbi51dWlkKTtcblxuICAgIHJldHVybjtcbiAgfSxcbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBSZW1vdmVzIHRoZSBwbHVnaW5zIHV1aWQgZnJvbSB0aGUgX3V1aWRzIGFycmF5LlxuICAgKiBSZW1vdmVzIHRoZSB6ZlBsdWdpbiBkYXRhIGF0dHJpYnV0ZSwgYXMgd2VsbCBhcyB0aGUgZGF0YS1wbHVnaW4tbmFtZSBhdHRyaWJ1dGUuXG4gICAqIEFsc28gZmlyZXMgdGhlIGRlc3Ryb3llZCBldmVudCBmb3IgdGhlIHBsdWdpbiwgY29uc29saWRhdGluZyByZXBlZGl0aXZlIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBhbiBpbnN0YW5jZSBvZiBhIHBsdWdpbiwgdXN1YWxseSBgdGhpc2AgaW4gY29udGV4dC5cbiAgICogQGZpcmVzIFBsdWdpbiNkZXN0cm95ZWRcbiAgICovXG4gIHVucmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uKHBsdWdpbil7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBoeXBoZW5hdGUoZnVuY3Rpb25OYW1lKHBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicpLmNvbnN0cnVjdG9yKSk7XG5cbiAgICB0aGlzLl91dWlkcy5zcGxpY2UodGhpcy5fdXVpZHMuaW5kZXhPZihwbHVnaW4udXVpZCksIDEpO1xuICAgIHBsdWdpbi4kZWxlbWVudC5yZW1vdmVBdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gKS5yZW1vdmVEYXRhKCd6ZlBsdWdpbicpXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBiZWVuIGRlc3Ryb3llZC5cbiAgICAgICAgICAgKiBAZXZlbnQgUGx1Z2luI2Rlc3Ryb3llZFxuICAgICAgICAgICAqL1xuICAgICAgICAgIC50cmlnZ2VyKGBkZXN0cm95ZWQuemYuJHtwbHVnaW5OYW1lfWApO1xuICAgIGZvcih2YXIgcHJvcCBpbiBwbHVnaW4pe1xuICAgICAgcGx1Z2luW3Byb3BdID0gbnVsbDsvL2NsZWFuIHVwIHNjcmlwdCB0byBwcmVwIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgfVxuICAgIHJldHVybjtcbiAgfSxcblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIENhdXNlcyBvbmUgb3IgbW9yZSBhY3RpdmUgcGx1Z2lucyB0byByZS1pbml0aWFsaXplLCByZXNldHRpbmcgZXZlbnQgbGlzdGVuZXJzLCByZWNhbGN1bGF0aW5nIHBvc2l0aW9ucywgZXRjLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGx1Z2lucyAtIG9wdGlvbmFsIHN0cmluZyBvZiBhbiBpbmRpdmlkdWFsIHBsdWdpbiBrZXksIGF0dGFpbmVkIGJ5IGNhbGxpbmcgYCQoZWxlbWVudCkuZGF0YSgncGx1Z2luTmFtZScpYCwgb3Igc3RyaW5nIG9mIGEgcGx1Z2luIGNsYXNzIGkuZS4gYCdkcm9wZG93bidgXG4gICAqIEBkZWZhdWx0IElmIG5vIGFyZ3VtZW50IGlzIHBhc3NlZCwgcmVmbG93IGFsbCBjdXJyZW50bHkgYWN0aXZlIHBsdWdpbnMuXG4gICAqL1xuICAgcmVJbml0OiBmdW5jdGlvbihwbHVnaW5zKXtcbiAgICAgdmFyIGlzSlEgPSBwbHVnaW5zIGluc3RhbmNlb2YgJDtcbiAgICAgdHJ5e1xuICAgICAgIGlmKGlzSlEpe1xuICAgICAgICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICQodGhpcykuZGF0YSgnemZQbHVnaW4nKS5faW5pdCgpO1xuICAgICAgICAgfSk7XG4gICAgICAgfWVsc2V7XG4gICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBwbHVnaW5zLFxuICAgICAgICAgX3RoaXMgPSB0aGlzLFxuICAgICAgICAgZm5zID0ge1xuICAgICAgICAgICAnb2JqZWN0JzogZnVuY3Rpb24ocGxncyl7XG4gICAgICAgICAgICAgcGxncy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgICAgICAgICAgcCA9IGh5cGhlbmF0ZShwKTtcbiAgICAgICAgICAgICAgICQoJ1tkYXRhLScrIHAgKyddJykuZm91bmRhdGlvbignX2luaXQnKTtcbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgJ3N0cmluZyc6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgcGx1Z2lucyA9IGh5cGhlbmF0ZShwbHVnaW5zKTtcbiAgICAgICAgICAgICAkKCdbZGF0YS0nKyBwbHVnaW5zICsnXScpLmZvdW5kYXRpb24oJ19pbml0Jyk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgICd1bmRlZmluZWQnOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHRoaXNbJ29iamVjdCddKE9iamVjdC5rZXlzKF90aGlzLl9wbHVnaW5zKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH07XG4gICAgICAgICBmbnNbdHlwZV0ocGx1Z2lucyk7XG4gICAgICAgfVxuICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgIH1maW5hbGx5e1xuICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgICB9XG4gICB9LFxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGEgcmFuZG9tIGJhc2UtMzYgdWlkIHdpdGggbmFtZXNwYWNpbmdcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggLSBudW1iZXIgb2YgcmFuZG9tIGJhc2UtMzYgZGlnaXRzIGRlc2lyZWQuIEluY3JlYXNlIGZvciBtb3JlIHJhbmRvbSBzdHJpbmdzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gbmFtZSBvZiBwbHVnaW4gdG8gYmUgaW5jb3Jwb3JhdGVkIGluIHVpZCwgb3B0aW9uYWwuXG4gICAqIEBkZWZhdWx0IHtTdHJpbmd9ICcnIC0gaWYgbm8gcGx1Z2luIG5hbWUgaXMgcHJvdmlkZWQsIG5vdGhpbmcgaXMgYXBwZW5kZWQgdG8gdGhlIHVpZC5cbiAgICogQHJldHVybnMge1N0cmluZ30gLSB1bmlxdWUgaWRcbiAgICovXG4gIEdldFlvRGlnaXRzOiBmdW5jdGlvbihsZW5ndGgsIG5hbWVzcGFjZSl7XG4gICAgbGVuZ3RoID0gbGVuZ3RoIHx8IDY7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKE1hdGgucG93KDM2LCBsZW5ndGggKyAxKSAtIE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygzNiwgbGVuZ3RoKSkpLnRvU3RyaW5nKDM2KS5zbGljZSgxKSArIChuYW1lc3BhY2UgPyBgLSR7bmFtZXNwYWNlfWAgOiAnJyk7XG4gIH0sXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBsdWdpbnMgb24gYW55IGVsZW1lbnRzIHdpdGhpbiBgZWxlbWAgKGFuZCBgZWxlbWAgaXRzZWxmKSB0aGF0IGFyZW4ndCBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyB0aGUgZWxlbWVudCB0byBjaGVjayBpbnNpZGUuIEFsc28gY2hlY2tzIHRoZSBlbGVtZW50IGl0c2VsZiwgdW5sZXNzIGl0J3MgdGhlIGBkb2N1bWVudGAgb2JqZWN0LlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gcGx1Z2lucyAtIEEgbGlzdCBvZiBwbHVnaW5zIHRvIGluaXRpYWxpemUuIExlYXZlIHRoaXMgb3V0IHRvIGluaXRpYWxpemUgZXZlcnl0aGluZy5cbiAgICovXG4gIHJlZmxvdzogZnVuY3Rpb24oZWxlbSwgcGx1Z2lucykge1xuXG4gICAgLy8gSWYgcGx1Z2lucyBpcyB1bmRlZmluZWQsIGp1c3QgZ3JhYiBldmVyeXRoaW5nXG4gICAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcGx1Z2lucyA9IE9iamVjdC5rZXlzKHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICAvLyBJZiBwbHVnaW5zIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGFuIGFycmF5IHdpdGggb25lIGl0ZW1cbiAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBsdWdpbnMgPSBbcGx1Z2luc107XG4gICAgfVxuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIHBsdWdpblxuICAgICQuZWFjaChwbHVnaW5zLCBmdW5jdGlvbihpLCBuYW1lKSB7XG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGx1Z2luXG4gICAgICB2YXIgcGx1Z2luID0gX3RoaXMuX3BsdWdpbnNbbmFtZV07XG5cbiAgICAgIC8vIExvY2FsaXplIHRoZSBzZWFyY2ggdG8gYWxsIGVsZW1lbnRzIGluc2lkZSBlbGVtLCBhcyB3ZWxsIGFzIGVsZW0gaXRzZWxmLCB1bmxlc3MgZWxlbSA9PT0gZG9jdW1lbnRcbiAgICAgIHZhciAkZWxlbSA9ICQoZWxlbSkuZmluZCgnW2RhdGEtJytuYW1lKyddJykuYWRkQmFjaygnW2RhdGEtJytuYW1lKyddJyk7XG5cbiAgICAgIC8vIEZvciBlYWNoIHBsdWdpbiBmb3VuZCwgaW5pdGlhbGl6ZSBpdFxuICAgICAgJGVsZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRlbCA9ICQodGhpcyksXG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIC8vIERvbid0IGRvdWJsZS1kaXAgb24gcGx1Z2luc1xuICAgICAgICBpZiAoJGVsLmRhdGEoJ3pmUGx1Z2luJykpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJUcmllZCB0byBpbml0aWFsaXplIFwiK25hbWUrXCIgb24gYW4gZWxlbWVudCB0aGF0IGFscmVhZHkgaGFzIGEgRm91bmRhdGlvbiBwbHVnaW4uXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCRlbC5hdHRyKCdkYXRhLW9wdGlvbnMnKSl7XG4gICAgICAgICAgdmFyIHRoaW5nID0gJGVsLmF0dHIoJ2RhdGEtb3B0aW9ucycpLnNwbGl0KCc7JykuZm9yRWFjaChmdW5jdGlvbihlLCBpKXtcbiAgICAgICAgICAgIHZhciBvcHQgPSBlLnNwbGl0KCc6JykubWFwKGZ1bmN0aW9uKGVsKXsgcmV0dXJuIGVsLnRyaW0oKTsgfSk7XG4gICAgICAgICAgICBpZihvcHRbMF0pIG9wdHNbb3B0WzBdXSA9IHBhcnNlVmFsdWUob3B0WzFdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0cnl7XG4gICAgICAgICAgJGVsLmRhdGEoJ3pmUGx1Z2luJywgbmV3IHBsdWdpbigkKHRoaXMpLCBvcHRzKSk7XG4gICAgICAgIH1jYXRjaChlcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcik7XG4gICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldEZuTmFtZTogZnVuY3Rpb25OYW1lLFxuICB0cmFuc2l0aW9uZW5kOiBmdW5jdGlvbigkZWxlbSl7XG4gICAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ09UcmFuc2l0aW9uJzogJ290cmFuc2l0aW9uZW5kJ1xuICAgIH07XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgZW5kO1xuXG4gICAgZm9yICh2YXIgdCBpbiB0cmFuc2l0aW9ucyl7XG4gICAgICBpZiAodHlwZW9mIGVsZW0uc3R5bGVbdF0gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgZW5kID0gdHJhbnNpdGlvbnNbdF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGVuZCl7XG4gICAgICByZXR1cm4gZW5kO1xuICAgIH1lbHNle1xuICAgICAgZW5kID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAkZWxlbS50cmlnZ2VySGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIFskZWxlbV0pO1xuICAgICAgfSwgMSk7XG4gICAgICByZXR1cm4gJ3RyYW5zaXRpb25lbmQnO1xuICAgIH1cbiAgfVxufTtcblxuRm91bmRhdGlvbi51dGlsID0ge1xuICAvKipcbiAgICogRnVuY3Rpb24gZm9yIGFwcGx5aW5nIGEgZGVib3VuY2UgZWZmZWN0IHRvIGEgZnVuY3Rpb24gY2FsbC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgLSBGdW5jdGlvbiB0byBiZSBjYWxsZWQgYXQgZW5kIG9mIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSAtIFRpbWUgaW4gbXMgdG8gZGVsYXkgdGhlIGNhbGwgb2YgYGZ1bmNgLlxuICAgKiBAcmV0dXJucyBmdW5jdGlvblxuICAgKi9cbiAgdGhyb3R0bGU6IGZ1bmN0aW9uIChmdW5jLCBkZWxheSkge1xuICAgIHZhciB0aW1lciA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICBpZiAodGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbi8vIFRPRE86IGNvbnNpZGVyIG5vdCBtYWtpbmcgdGhpcyBhIGpRdWVyeSBmdW5jdGlvblxuLy8gVE9ETzogbmVlZCB3YXkgdG8gcmVmbG93IHZzLiByZS1pbml0aWFsaXplXG4vKipcbiAqIFRoZSBGb3VuZGF0aW9uIGpRdWVyeSBtZXRob2QuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gbWV0aG9kIC0gQW4gYWN0aW9uIHRvIHBlcmZvcm0gb24gdGhlIGN1cnJlbnQgalF1ZXJ5IG9iamVjdC5cbiAqL1xudmFyIGZvdW5kYXRpb24gPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgbWV0aG9kLFxuICAgICAgJG1ldGEgPSAkKCdtZXRhLmZvdW5kYXRpb24tbXEnKSxcbiAgICAgICRub0pTID0gJCgnLm5vLWpzJyk7XG5cbiAgaWYoISRtZXRhLmxlbmd0aCl7XG4gICAgJCgnPG1ldGEgY2xhc3M9XCJmb3VuZGF0aW9uLW1xXCI+JykuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7XG4gIH1cbiAgaWYoJG5vSlMubGVuZ3RoKXtcbiAgICAkbm9KUy5yZW1vdmVDbGFzcygnbm8tanMnKTtcbiAgfVxuXG4gIGlmKHR5cGUgPT09ICd1bmRlZmluZWQnKXsvL25lZWRzIHRvIGluaXRpYWxpemUgdGhlIEZvdW5kYXRpb24gb2JqZWN0LCBvciBhbiBpbmRpdmlkdWFsIHBsdWdpbi5cbiAgICBGb3VuZGF0aW9uLk1lZGlhUXVlcnkuX2luaXQoKTtcbiAgICBGb3VuZGF0aW9uLnJlZmxvdyh0aGlzKTtcbiAgfWVsc2UgaWYodHlwZSA9PT0gJ3N0cmluZycpey8vYW4gaW5kaXZpZHVhbCBtZXRob2QgdG8gaW52b2tlIG9uIGEgcGx1Z2luIG9yIGdyb3VwIG9mIHBsdWdpbnNcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7Ly9jb2xsZWN0IGFsbCB0aGUgYXJndW1lbnRzLCBpZiBuZWNlc3NhcnlcbiAgICB2YXIgcGx1Z0NsYXNzID0gdGhpcy5kYXRhKCd6ZlBsdWdpbicpOy8vZGV0ZXJtaW5lIHRoZSBjbGFzcyBvZiBwbHVnaW5cblxuICAgIGlmKHBsdWdDbGFzcyAhPT0gdW5kZWZpbmVkICYmIHBsdWdDbGFzc1ttZXRob2RdICE9PSB1bmRlZmluZWQpey8vbWFrZSBzdXJlIGJvdGggdGhlIGNsYXNzIGFuZCBtZXRob2QgZXhpc3RcbiAgICAgIGlmKHRoaXMubGVuZ3RoID09PSAxKXsvL2lmIHRoZXJlJ3Mgb25seSBvbmUsIGNhbGwgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgcGx1Z0NsYXNzW21ldGhvZF0uYXBwbHkocGx1Z0NsYXNzLCBhcmdzKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaSwgZWwpey8vb3RoZXJ3aXNlIGxvb3AgdGhyb3VnaCB0aGUgalF1ZXJ5IGNvbGxlY3Rpb24gYW5kIGludm9rZSB0aGUgbWV0aG9kIG9uIGVhY2hcbiAgICAgICAgICBwbHVnQ2xhc3NbbWV0aG9kXS5hcHBseSgkKGVsKS5kYXRhKCd6ZlBsdWdpbicpLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfWVsc2V7Ly9lcnJvciBmb3Igbm8gY2xhc3Mgb3Igbm8gbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJXZSdyZSBzb3JyeSwgJ1wiICsgbWV0aG9kICsgXCInIGlzIG5vdCBhbiBhdmFpbGFibGUgbWV0aG9kIGZvciBcIiArIChwbHVnQ2xhc3MgPyBmdW5jdGlvbk5hbWUocGx1Z0NsYXNzKSA6ICd0aGlzIGVsZW1lbnQnKSArICcuJyk7XG4gICAgfVxuICB9ZWxzZXsvL2Vycm9yIGZvciBpbnZhbGlkIGFyZ3VtZW50IHR5cGVcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBXZSdyZSBzb3JyeSwgJHt0eXBlfSBpcyBub3QgYSB2YWxpZCBwYXJhbWV0ZXIuIFlvdSBtdXN0IHVzZSBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1ldGhvZCB5b3Ugd2lzaCB0byBpbnZva2UuYCk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG53aW5kb3cuRm91bmRhdGlvbiA9IEZvdW5kYXRpb247XG4kLmZuLmZvdW5kYXRpb24gPSBmb3VuZGF0aW9uO1xuXG4vLyBQb2x5ZmlsbCBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4oZnVuY3Rpb24oKSB7XG4gIGlmICghRGF0ZS5ub3cgfHwgIXdpbmRvdy5EYXRlLm5vdylcbiAgICB3aW5kb3cuRGF0ZS5ub3cgPSBEYXRlLm5vdyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cbiAgdmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKytpKSB7XG4gICAgICB2YXIgdnAgPSB2ZW5kb3JzW2ldO1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2cCsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAod2luZG93W3ZwKydDYW5jZWxBbmltYXRpb25GcmFtZSddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdnArJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddKTtcbiAgfVxuICBpZiAoL2lQKGFkfGhvbmV8b2QpLipPUyA2Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgIHx8ICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gIH1cbiAgLyoqXG4gICAqIFBvbHlmaWxsIGZvciBwZXJmb3JtYW5jZS5ub3csIHJlcXVpcmVkIGJ5IHJBRlxuICAgKi9cbiAgaWYoIXdpbmRvdy5wZXJmb3JtYW5jZSB8fCAhd2luZG93LnBlcmZvcm1hbmNlLm5vdyl7XG4gICAgd2luZG93LnBlcmZvcm1hbmNlID0ge1xuICAgICAgc3RhcnQ6IERhdGUubm93KCksXG4gICAgICBub3c6IGZ1bmN0aW9uKCl7IHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5zdGFydDsgfVxuICAgIH07XG4gIH1cbn0pKCk7XG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG4gIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24ob1RoaXMpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGNsb3Nlc3QgdGhpbmcgcG9zc2libGUgdG8gdGhlIEVDTUFTY3JpcHQgNVxuICAgICAgLy8gaW50ZXJuYWwgSXNDYWxsYWJsZSBmdW5jdGlvblxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgLSB3aGF0IGlzIHRyeWluZyB0byBiZSBib3VuZCBpcyBub3QgY2FsbGFibGUnKTtcbiAgICB9XG5cbiAgICB2YXIgYUFyZ3MgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgIGZUb0JpbmQgPSB0aGlzLFxuICAgICAgICBmTk9QICAgID0gZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgZkJvdW5kICA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBmVG9CaW5kLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBmTk9QXG4gICAgICAgICAgICAgICAgID8gdGhpc1xuICAgICAgICAgICAgICAgICA6IG9UaGlzLFxuICAgICAgICAgICAgICAgICBhQXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvdG90eXBlKSB7XG4gICAgICAvLyBuYXRpdmUgZnVuY3Rpb25zIGRvbid0IGhhdmUgYSBwcm90b3R5cGVcbiAgICAgIGZOT1AucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgfVxuICAgIGZCb3VuZC5wcm90b3R5cGUgPSBuZXcgZk5PUCgpO1xuXG4gICAgcmV0dXJuIGZCb3VuZDtcbiAgfTtcbn1cbi8vIFBvbHlmaWxsIHRvIGdldCB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIGluIElFOVxuZnVuY3Rpb24gZnVuY3Rpb25OYW1lKGZuKSB7XG4gIGlmIChGdW5jdGlvbi5wcm90b3R5cGUubmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb25cXHMoW14oXXsxLH0pXFwoLztcbiAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKChmbikudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdLnRyaW0oKSA6IFwiXCI7XG4gIH1cbiAgZWxzZSBpZiAoZm4ucHJvdG90eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZm4uY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZm4ucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWUoc3RyKXtcbiAgaWYoL3RydWUvLnRlc3Qoc3RyKSkgcmV0dXJuIHRydWU7XG4gIGVsc2UgaWYoL2ZhbHNlLy50ZXN0KHN0cikpIHJldHVybiBmYWxzZTtcbiAgZWxzZSBpZighaXNOYU4oc3RyICogMSkpIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gIHJldHVybiBzdHI7XG59XG4vLyBDb252ZXJ0IFBhc2NhbENhc2UgdG8ga2ViYWItY2FzZVxuLy8gVGhhbmsgeW91OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84OTU1NTgwXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxufShqUXVlcnkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG5Gb3VuZGF0aW9uLkJveCA9IHtcbiAgSW1Ob3RUb3VjaGluZ1lvdTogSW1Ob3RUb3VjaGluZ1lvdSxcbiAgR2V0RGltZW5zaW9uczogR2V0RGltZW5zaW9ucyxcbiAgR2V0T2Zmc2V0czogR2V0T2Zmc2V0c1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHRoZSBkaW1lbnNpb25zIG9mIGFuIGVsZW1lbnQgdG8gYSBjb250YWluZXIgYW5kIGRldGVybWluZXMgY29sbGlzaW9uIGV2ZW50cyB3aXRoIGNvbnRhaW5lci5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIHRlc3QgZm9yIGNvbGxpc2lvbnMuXG4gKiBAcGFyYW0ge2pRdWVyeX0gcGFyZW50IC0galF1ZXJ5IG9iamVjdCB0byB1c2UgYXMgYm91bmRpbmcgY29udGFpbmVyLlxuICogQHBhcmFtIHtCb29sZWFufSBsck9ubHkgLSBzZXQgdG8gdHJ1ZSB0byBjaGVjayBsZWZ0IGFuZCByaWdodCB2YWx1ZXMgb25seS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGJPbmx5IC0gc2V0IHRvIHRydWUgdG8gY2hlY2sgdG9wIGFuZCBib3R0b20gdmFsdWVzIG9ubHkuXG4gKiBAZGVmYXVsdCBpZiBubyBwYXJlbnQgb2JqZWN0IHBhc3NlZCwgZGV0ZWN0cyBjb2xsaXNpb25zIHdpdGggYHdpbmRvd2AuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSB0cnVlIGlmIGNvbGxpc2lvbiBmcmVlLCBmYWxzZSBpZiBhIGNvbGxpc2lvbiBpbiBhbnkgZGlyZWN0aW9uLlxuICovXG5mdW5jdGlvbiBJbU5vdFRvdWNoaW5nWW91KGVsZW1lbnQsIHBhcmVudCwgbHJPbmx5LCB0Yk9ubHkpIHtcbiAgdmFyIGVsZURpbXMgPSBHZXREaW1lbnNpb25zKGVsZW1lbnQpLFxuICAgICAgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0O1xuXG4gIGlmIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyRGltcyA9IEdldERpbWVuc2lvbnMocGFyZW50KTtcblxuICAgIGJvdHRvbSA9IChlbGVEaW1zLm9mZnNldC50b3AgKyBlbGVEaW1zLmhlaWdodCA8PSBwYXJEaW1zLmhlaWdodCArIHBhckRpbXMub2Zmc2V0LnRvcCk7XG4gICAgdG9wICAgID0gKGVsZURpbXMub2Zmc2V0LnRvcCA+PSBwYXJEaW1zLm9mZnNldC50b3ApO1xuICAgIGxlZnQgICA9IChlbGVEaW1zLm9mZnNldC5sZWZ0ID49IHBhckRpbXMub2Zmc2V0LmxlZnQpO1xuICAgIHJpZ2h0ICA9IChlbGVEaW1zLm9mZnNldC5sZWZ0ICsgZWxlRGltcy53aWR0aCA8PSBwYXJEaW1zLndpZHRoKTtcbiAgfVxuICBlbHNlIHtcbiAgICBib3R0b20gPSAoZWxlRGltcy5vZmZzZXQudG9wICsgZWxlRGltcy5oZWlnaHQgPD0gZWxlRGltcy53aW5kb3dEaW1zLmhlaWdodCArIGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wKTtcbiAgICB0b3AgICAgPSAoZWxlRGltcy5vZmZzZXQudG9wID49IGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wKTtcbiAgICBsZWZ0ICAgPSAoZWxlRGltcy5vZmZzZXQubGVmdCA+PSBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LmxlZnQpO1xuICAgIHJpZ2h0ICA9IChlbGVEaW1zLm9mZnNldC5sZWZ0ICsgZWxlRGltcy53aWR0aCA8PSBlbGVEaW1zLndpbmRvd0RpbXMud2lkdGgpO1xuICB9XG5cbiAgdmFyIGFsbERpcnMgPSBbYm90dG9tLCB0b3AsIGxlZnQsIHJpZ2h0XTtcblxuICBpZiAobHJPbmx5KSB7XG4gICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0ID09PSB0cnVlO1xuICB9XG5cbiAgaWYgKHRiT25seSkge1xuICAgIHJldHVybiB0b3AgPT09IGJvdHRvbSA9PT0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhbGxEaXJzLmluZGV4T2YoZmFsc2UpID09PSAtMTtcbn07XG5cbi8qKlxuICogVXNlcyBuYXRpdmUgbWV0aG9kcyB0byByZXR1cm4gYW4gb2JqZWN0IG9mIGRpbWVuc2lvbiB2YWx1ZXMuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7alF1ZXJ5IHx8IEhUTUx9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IG9yIERPTSBlbGVtZW50IGZvciB3aGljaCB0byBnZXQgdGhlIGRpbWVuc2lvbnMuIENhbiBiZSBhbnkgZWxlbWVudCBvdGhlciB0aGF0IGRvY3VtZW50IG9yIHdpbmRvdy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gbmVzdGVkIG9iamVjdCBvZiBpbnRlZ2VyIHBpeGVsIHZhbHVlc1xuICogVE9ETyAtIGlmIGVsZW1lbnQgaXMgd2luZG93LCByZXR1cm4gb25seSB0aG9zZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIEdldERpbWVuc2lvbnMoZWxlbSwgdGVzdCl7XG4gIGVsZW0gPSBlbGVtLmxlbmd0aCA/IGVsZW1bMF0gOiBlbGVtO1xuXG4gIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJJ20gc29ycnksIERhdmUuIEknbSBhZnJhaWQgSSBjYW4ndCBkbyB0aGF0LlwiKTtcbiAgfVxuXG4gIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHBhclJlY3QgPSBlbGVtLnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB3aW5SZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpblkgPSB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICB3aW5YID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5ZLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luWFxuICAgIH0sXG4gICAgcGFyZW50RGltczoge1xuICAgICAgd2lkdGg6IHBhclJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHBhclJlY3QuaGVpZ2h0LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIHRvcDogcGFyUmVjdC50b3AgKyB3aW5ZLFxuICAgICAgICBsZWZ0OiBwYXJSZWN0LmxlZnQgKyB3aW5YXG4gICAgICB9XG4gICAgfSxcbiAgICB3aW5kb3dEaW1zOiB7XG4gICAgICB3aWR0aDogd2luUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogd2luUmVjdC5oZWlnaHQsXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgdG9wOiB3aW5ZLFxuICAgICAgICBsZWZ0OiB3aW5YXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdG9wIGFuZCBsZWZ0IGludGVnZXIgcGl4ZWwgdmFsdWVzIGZvciBkeW5hbWljYWxseSByZW5kZXJlZCBlbGVtZW50cyxcbiAqIHN1Y2ggYXM6IFRvb2x0aXAsIFJldmVhbCwgYW5kIERyb3Bkb3duXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCBmb3IgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAqIEBwYXJhbSB7alF1ZXJ5fSBhbmNob3IgLSBqUXVlcnkgb2JqZWN0IGZvciB0aGUgZWxlbWVudCdzIGFuY2hvciBwb2ludC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwb3NpdGlvbiAtIGEgc3RyaW5nIHJlbGF0aW5nIHRvIHRoZSBkZXNpcmVkIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LCByZWxhdGl2ZSB0byBpdCdzIGFuY2hvclxuICogQHBhcmFtIHtOdW1iZXJ9IHZPZmZzZXQgLSBpbnRlZ2VyIHBpeGVsIHZhbHVlIG9mIGRlc2lyZWQgdmVydGljYWwgc2VwYXJhdGlvbiBiZXR3ZWVuIGFuY2hvciBhbmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBoT2Zmc2V0IC0gaW50ZWdlciBwaXhlbCB2YWx1ZSBvZiBkZXNpcmVkIGhvcml6b250YWwgc2VwYXJhdGlvbiBiZXR3ZWVuIGFuY2hvciBhbmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNPdmVyZmxvdyAtIGlmIGEgY29sbGlzaW9uIGV2ZW50IGlzIGRldGVjdGVkLCBzZXRzIHRvIHRydWUgdG8gZGVmYXVsdCB0aGUgZWxlbWVudCB0byBmdWxsIHdpZHRoIC0gYW55IGRlc2lyZWQgb2Zmc2V0LlxuICogVE9ETyBhbHRlci9yZXdyaXRlIHRvIHdvcmsgd2l0aCBgZW1gIHZhbHVlcyBhcyB3ZWxsL2luc3RlYWQgb2YgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIEdldE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCBwb3NpdGlvbiwgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdykge1xuICB2YXIgJGVsZURpbXMgPSBHZXREaW1lbnNpb25zKGVsZW1lbnQpLFxuICAgICAgJGFuY2hvckRpbXMgPSBhbmNob3IgPyBHZXREaW1lbnNpb25zKGFuY2hvcikgOiBudWxsO1xuXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKEZvdW5kYXRpb24ucnRsKCkgPyAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCAtICRlbGVEaW1zLndpZHRoICsgJGFuY2hvckRpbXMud2lkdGggOiAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCksXG4gICAgICAgIHRvcDogJGFuY2hvckRpbXMub2Zmc2V0LnRvcCAtICgkZWxlRGltcy5oZWlnaHQgKyB2T2Zmc2V0KVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCAtICgkZWxlRGltcy53aWR0aCArIGhPZmZzZXQpLFxuICAgICAgICB0b3A6ICRhbmNob3JEaW1zLm9mZnNldC50b3BcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0ICsgJGFuY2hvckRpbXMud2lkdGggKyBoT2Zmc2V0LFxuICAgICAgICB0b3A6ICRhbmNob3JEaW1zLm9mZnNldC50b3BcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NlbnRlciB0b3AnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKCRhbmNob3JEaW1zLm9mZnNldC5sZWZ0ICsgKCRhbmNob3JEaW1zLndpZHRoIC8gMikpIC0gKCRlbGVEaW1zLndpZHRoIC8gMiksXG4gICAgICAgIHRvcDogJGFuY2hvckRpbXMub2Zmc2V0LnRvcCAtICgkZWxlRGltcy5oZWlnaHQgKyB2T2Zmc2V0KVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2VudGVyIGJvdHRvbSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBpc092ZXJmbG93ID8gaE9mZnNldCA6ICgoJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyAoJGFuY2hvckRpbXMud2lkdGggLyAyKSkgLSAoJGVsZURpbXMud2lkdGggLyAyKSksXG4gICAgICAgIHRvcDogJGFuY2hvckRpbXMub2Zmc2V0LnRvcCArICRhbmNob3JEaW1zLmhlaWdodCArIHZPZmZzZXRcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NlbnRlciBsZWZ0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gKCRlbGVEaW1zLndpZHRoICsgaE9mZnNldCksXG4gICAgICAgIHRvcDogKCRhbmNob3JEaW1zLm9mZnNldC50b3AgKyAoJGFuY2hvckRpbXMuaGVpZ2h0IC8gMikpIC0gKCRlbGVEaW1zLmhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjZW50ZXIgcmlnaHQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyAkYW5jaG9yRGltcy53aWR0aCArIGhPZmZzZXQgKyAxLFxuICAgICAgICB0b3A6ICgkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgKCRhbmNob3JEaW1zLmhlaWdodCAvIDIpKSAtICgkZWxlRGltcy5oZWlnaHQgLyAyKVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICgkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC5sZWZ0ICsgKCRlbGVEaW1zLndpbmRvd0RpbXMud2lkdGggLyAyKSkgLSAoJGVsZURpbXMud2lkdGggLyAyKSxcbiAgICAgICAgdG9wOiAoJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wICsgKCRlbGVEaW1zLndpbmRvd0RpbXMuaGVpZ2h0IC8gMikpIC0gKCRlbGVEaW1zLmhlaWdodCAvIDIpXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZXZlYWwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKCRlbGVEaW1zLndpbmRvd0RpbXMud2lkdGggLSAkZWxlRGltcy53aWR0aCkgLyAyLFxuICAgICAgICB0b3A6ICRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcCArIHZPZmZzZXRcbiAgICAgIH1cbiAgICBjYXNlICdyZXZlYWwgZnVsbCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC5sZWZ0LFxuICAgICAgICB0b3A6ICRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChGb3VuZGF0aW9uLnJ0bCgpID8gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAkZWxlRGltcy53aWR0aCArICRhbmNob3JEaW1zLndpZHRoIDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQpLFxuICAgICAgICB0b3A6ICRhbmNob3JEaW1zLm9mZnNldC50b3AgKyAkYW5jaG9yRGltcy5oZWlnaHQgKyB2T2Zmc2V0XG4gICAgICB9XG4gIH1cbn1cblxufShqUXVlcnkpO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiBUaGlzIHV0aWwgd2FzIGNyZWF0ZWQgYnkgTWFyaXVzIE9sYmVydHogKlxuICogUGxlYXNlIHRoYW5rIE1hcml1cyBvbiBHaXRIdWIgL293bGJlcnR6ICpcbiAqIG9yIHRoZSB3ZWIgaHR0cDovL3d3dy5tYXJpdXNvbGJlcnR6LmRlLyAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG5jb25zdCBrZXlDb2RlcyA9IHtcbiAgOTogJ1RBQicsXG4gIDEzOiAnRU5URVInLFxuICAyNzogJ0VTQ0FQRScsXG4gIDMyOiAnU1BBQ0UnLFxuICAzNzogJ0FSUk9XX0xFRlQnLFxuICAzODogJ0FSUk9XX1VQJyxcbiAgMzk6ICdBUlJPV19SSUdIVCcsXG4gIDQwOiAnQVJST1dfRE9XTidcbn1cblxudmFyIGNvbW1hbmRzID0ge31cblxudmFyIEtleWJvYXJkID0ge1xuICBrZXlzOiBnZXRLZXlDb2RlcyhrZXlDb2RlcyksXG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgKGtleWJvYXJkKSBldmVudCBhbmQgcmV0dXJucyBhIFN0cmluZyB0aGF0IHJlcHJlc2VudHMgaXRzIGtleVxuICAgKiBDYW4gYmUgdXNlZCBsaWtlIEZvdW5kYXRpb24ucGFyc2VLZXkoZXZlbnQpID09PSBGb3VuZGF0aW9uLmtleXMuU1BBQ0VcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSB0aGUgZXZlbnQgZ2VuZXJhdGVkIGJ5IHRoZSBldmVudCBoYW5kbGVyXG4gICAqIEByZXR1cm4gU3RyaW5nIGtleSAtIFN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIGtleSBwcmVzc2VkXG4gICAqL1xuICBwYXJzZUtleShldmVudCkge1xuICAgIHZhciBrZXkgPSBrZXlDb2Rlc1tldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlXSB8fCBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LndoaWNoKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChldmVudC5zaGlmdEtleSkga2V5ID0gYFNISUZUXyR7a2V5fWA7XG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIGtleSA9IGBDVFJMXyR7a2V5fWA7XG4gICAgaWYgKGV2ZW50LmFsdEtleSkga2V5ID0gYEFMVF8ke2tleX1gO1xuICAgIHJldHVybiBrZXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGdpdmVuIChrZXlib2FyZCkgZXZlbnRcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSB0aGUgZXZlbnQgZ2VuZXJhdGVkIGJ5IHRoZSBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnQgLSBGb3VuZGF0aW9uIGNvbXBvbmVudCdzIG5hbWUsIGUuZy4gU2xpZGVyIG9yIFJldmVhbFxuICAgKiBAcGFyYW0ge09iamVjdHN9IGZ1bmN0aW9ucyAtIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRoYXQgYXJlIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBoYW5kbGVLZXkoZXZlbnQsIGNvbXBvbmVudCwgZnVuY3Rpb25zKSB7XG4gICAgdmFyIGNvbW1hbmRMaXN0ID0gY29tbWFuZHNbY29tcG9uZW50XSxcbiAgICAgIGtleUNvZGUgPSB0aGlzLnBhcnNlS2V5KGV2ZW50KSxcbiAgICAgIGNtZHMsXG4gICAgICBjb21tYW5kLFxuICAgICAgZm47XG5cbiAgICBpZiAoIWNvbW1hbmRMaXN0KSByZXR1cm4gY29uc29sZS53YXJuKCdDb21wb25lbnQgbm90IGRlZmluZWQhJyk7XG5cbiAgICBpZiAodHlwZW9mIGNvbW1hbmRMaXN0Lmx0ciA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8gdGhpcyBjb21wb25lbnQgZG9lcyBub3QgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGx0ciBhbmQgcnRsXG4gICAgICAgIGNtZHMgPSBjb21tYW5kTGlzdDsgLy8gdXNlIHBsYWluIGxpc3RcbiAgICB9IGVsc2UgeyAvLyBtZXJnZSBsdHIgYW5kIHJ0bDogaWYgZG9jdW1lbnQgaXMgcnRsLCBydGwgb3ZlcndyaXRlcyBsdHIgYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgaWYgKEZvdW5kYXRpb24ucnRsKCkpIGNtZHMgPSAkLmV4dGVuZCh7fSwgY29tbWFuZExpc3QubHRyLCBjb21tYW5kTGlzdC5ydGwpO1xuXG4gICAgICAgIGVsc2UgY21kcyA9ICQuZXh0ZW5kKHt9LCBjb21tYW5kTGlzdC5ydGwsIGNvbW1hbmRMaXN0Lmx0cik7XG4gICAgfVxuICAgIGNvbW1hbmQgPSBjbWRzW2tleUNvZGVdO1xuXG4gICAgZm4gPSBmdW5jdGlvbnNbY29tbWFuZF07XG4gICAgaWYgKGZuICYmIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBleGVjdXRlIGZ1bmN0aW9uICBpZiBleGlzdHNcbiAgICAgIGZuLmFwcGx5KCk7XG4gICAgICBpZiAoZnVuY3Rpb25zLmhhbmRsZWQgfHwgdHlwZW9mIGZ1bmN0aW9ucy5oYW5kbGVkID09PSAnZnVuY3Rpb24nKSB7IC8vIGV4ZWN1dGUgZnVuY3Rpb24gd2hlbiBldmVudCB3YXMgaGFuZGxlZFxuICAgICAgICAgIGZ1bmN0aW9ucy5oYW5kbGVkLmFwcGx5KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmdW5jdGlvbnMudW5oYW5kbGVkIHx8IHR5cGVvZiBmdW5jdGlvbnMudW5oYW5kbGVkID09PSAnZnVuY3Rpb24nKSB7IC8vIGV4ZWN1dGUgZnVuY3Rpb24gd2hlbiBldmVudCB3YXMgbm90IGhhbmRsZWRcbiAgICAgICAgICBmdW5jdGlvbnMudW5oYW5kbGVkLmFwcGx5KCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGhpbiB0aGUgZ2l2ZW4gYCRlbGVtZW50YFxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIHNlYXJjaCB3aXRoaW5cbiAgICogQHJldHVybiB7alF1ZXJ5fSAkZm9jdXNhYmxlIC0gYWxsIGZvY3VzYWJsZSBlbGVtZW50cyB3aXRoaW4gYCRlbGVtZW50YFxuICAgKi9cbiAgZmluZEZvY3VzYWJsZSgkZWxlbWVudCkge1xuICAgIHJldHVybiAkZWxlbWVudC5maW5kKCdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCAqW3RhYmluZGV4XSwgKltjb250ZW50ZWRpdGFibGVdJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEkKHRoaXMpLmlzKCc6dmlzaWJsZScpIHx8ICQodGhpcykuYXR0cigndGFiaW5kZXgnKSA8IDApIHsgcmV0dXJuIGZhbHNlOyB9IC8vb25seSBoYXZlIHZpc2libGUgZWxlbWVudHMgYW5kIHRob3NlIHRoYXQgaGF2ZSBhIHRhYmluZGV4IGdyZWF0ZXIgb3IgZXF1YWwgMFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXBvbmVudCBuYW1lIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCAtIEZvdW5kYXRpb24gY29tcG9uZW50LCBlLmcuIFNsaWRlciBvciBSZXZlYWxcbiAgICogQHJldHVybiBTdHJpbmcgY29tcG9uZW50TmFtZVxuICAgKi9cblxuICByZWdpc3Rlcihjb21wb25lbnROYW1lLCBjbWRzKSB7XG4gICAgY29tbWFuZHNbY29tcG9uZW50TmFtZV0gPSBjbWRzO1xuICB9XG59XG5cbi8qXG4gKiBDb25zdGFudHMgZm9yIGVhc2llciBjb21wYXJpbmcuXG4gKiBDYW4gYmUgdXNlZCBsaWtlIEZvdW5kYXRpb24ucGFyc2VLZXkoZXZlbnQpID09PSBGb3VuZGF0aW9uLmtleXMuU1BBQ0VcbiAqL1xuZnVuY3Rpb24gZ2V0S2V5Q29kZXMoa2NzKSB7XG4gIHZhciBrID0ge307XG4gIGZvciAodmFyIGtjIGluIGtjcykga1trY3Nba2NdXSA9IGtjc1trY107XG4gIHJldHVybiBrO1xufVxuXG5Gb3VuZGF0aW9uLktleWJvYXJkID0gS2V5Ym9hcmQ7XG5cbn0oalF1ZXJ5KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuIWZ1bmN0aW9uKCQpIHtcblxuLy8gRGVmYXVsdCBzZXQgb2YgbWVkaWEgcXVlcmllc1xuY29uc3QgZGVmYXVsdFF1ZXJpZXMgPSB7XG4gICdkZWZhdWx0JyA6ICdvbmx5IHNjcmVlbicsXG4gIGxhbmRzY2FwZSA6ICdvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgcG9ydHJhaXQgOiAnb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgcmV0aW5hIDogJ29ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSdcbn07XG5cbnZhciBNZWRpYVF1ZXJ5ID0ge1xuICBxdWVyaWVzOiBbXSxcblxuICBjdXJyZW50OiAnJyxcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG1lZGlhIHF1ZXJ5IGhlbHBlciwgYnkgZXh0cmFjdGluZyB0aGUgYnJlYWtwb2ludCBsaXN0IGZyb20gdGhlIENTUyBhbmQgYWN0aXZhdGluZyB0aGUgYnJlYWtwb2ludCB3YXRjaGVyLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZXh0cmFjdGVkU3R5bGVzID0gJCgnLmZvdW5kYXRpb24tbXEnKS5jc3MoJ2ZvbnQtZmFtaWx5Jyk7XG4gICAgdmFyIG5hbWVkUXVlcmllcztcblxuICAgIG5hbWVkUXVlcmllcyA9IHBhcnNlU3R5bGVUb09iamVjdChleHRyYWN0ZWRTdHlsZXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG5hbWVkUXVlcmllcykge1xuICAgICAgc2VsZi5xdWVyaWVzLnB1c2goe1xuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIHZhbHVlOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7bmFtZWRRdWVyaWVzW2tleV19KWBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG5cbiAgICB0aGlzLl93YXRjaGVyKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIGlzIGF0IGxlYXN0IGFzIHdpZGUgYXMgYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBicmVha3BvaW50IG1hdGNoZXMsIGBmYWxzZWAgaWYgaXQncyBzbWFsbGVyLlxuICAgKi9cbiAgYXRMZWFzdChzaXplKSB7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5nZXQoc2l6ZSk7XG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG1lZGlhIHF1ZXJ5IG9mIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBnZXQuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gLSBUaGUgbWVkaWEgcXVlcnkgb2YgdGhlIGJyZWFrcG9pbnQsIG9yIGBudWxsYCBpZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0LlxuICAgKi9cbiAgZ2V0KHNpemUpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucXVlcmllcykge1xuICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW2ldO1xuICAgICAgaWYgKHNpemUgPT09IHF1ZXJ5Lm5hbWUpIHJldHVybiBxdWVyeS52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWUgYnkgdGVzdGluZyBldmVyeSBicmVha3BvaW50IGFuZCByZXR1cm5pbmcgdGhlIGxhc3Qgb25lIHRvIG1hdGNoICh0aGUgYmlnZ2VzdCBvbmUpLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybnMge1N0cmluZ30gTmFtZSBvZiB0aGUgY3VycmVudCBicmVha3BvaW50LlxuICAgKi9cbiAgX2dldEN1cnJlbnRTaXplKCkge1xuICAgIHZhciBtYXRjaGVkO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnF1ZXJpZXMpIHtcbiAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1tpXTtcblxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5LnZhbHVlKS5tYXRjaGVzKSB7XG4gICAgICAgIG1hdGNoZWQgPSBxdWVyeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1hdGNoZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlZC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgYnJlYWtwb2ludCB3YXRjaGVyLCB3aGljaCBmaXJlcyBhbiBldmVudCBvbiB0aGUgd2luZG93IHdoZW5ldmVyIHRoZSBicmVha3BvaW50IGNoYW5nZXMuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3dhdGNoZXIoKSB7XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuemYubWVkaWFxdWVyeScsICgpID0+IHtcbiAgICAgIHZhciBuZXdTaXplID0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKTtcblxuICAgICAgaWYgKG5ld1NpemUgIT09IHRoaXMuY3VycmVudCkge1xuICAgICAgICAvLyBCcm9hZGNhc3QgdGhlIG1lZGlhIHF1ZXJ5IGNoYW5nZSBvbiB0aGUgd2luZG93XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdjaGFuZ2VkLnpmLm1lZGlhcXVlcnknLCBbbmV3U2l6ZSwgdGhpcy5jdXJyZW50XSk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld1NpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbkZvdW5kYXRpb24uTWVkaWFRdWVyeSA9IE1lZGlhUXVlcnk7XG5cbi8vIG1hdGNoTWVkaWEoKSBwb2x5ZmlsbCAtIFRlc3QgYSBDU1MgbWVkaWEgdHlwZS9xdWVyeSBpbiBKUy5cbi8vIEF1dGhvcnMgJiBjb3B5cmlnaHQgKGMpIDIwMTI6IFNjb3R0IEplaGwsIFBhdWwgSXJpc2gsIE5pY2hvbGFzIFpha2FzLCBEYXZpZCBLbmlnaHQuIER1YWwgTUlUL0JTRCBsaWNlbnNlXG53aW5kb3cubWF0Y2hNZWRpYSB8fCAod2luZG93Lm1hdGNoTWVkaWEgPSBmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgbWF0Y2hNZWRpdW0gYXBpIHN1Y2ggYXMgSUUgOSBhbmQgd2Via2l0XG4gIHZhciBzdHlsZU1lZGlhID0gKHdpbmRvdy5zdHlsZU1lZGlhIHx8IHdpbmRvdy5tZWRpYSk7XG5cbiAgLy8gRm9yIHRob3NlIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtYXRjaE1lZGl1bVxuICBpZiAoIXN0eWxlTWVkaWEpIHtcbiAgICB2YXIgc3R5bGUgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyksXG4gICAgc2NyaXB0ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0sXG4gICAgaW5mbyAgICAgICAgPSBudWxsO1xuXG4gICAgc3R5bGUudHlwZSAgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLmlkICAgID0gJ21hdGNobWVkaWFqcy10ZXN0JztcblxuICAgIHNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgc2NyaXB0KTtcblxuICAgIC8vICdzdHlsZS5jdXJyZW50U3R5bGUnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlJyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgaW5mbyA9ICgnZ2V0Q29tcHV0ZWRTdHlsZScgaW4gd2luZG93KSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdHlsZSwgbnVsbCkgfHwgc3R5bGUuY3VycmVudFN0eWxlO1xuXG4gICAgc3R5bGVNZWRpYSA9IHtcbiAgICAgIG1hdGNoTWVkaXVtKG1lZGlhKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gYEBtZWRpYSAke21lZGlhfXsgI21hdGNobWVkaWFqcy10ZXN0IHsgd2lkdGg6IDFweDsgfSB9YDtcblxuICAgICAgICAvLyAnc3R5bGUuc3R5bGVTaGVldCcgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnc3R5bGUudGV4dENvbnRlbnQnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSB0ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRlc3QgaWYgbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZVxuICAgICAgICByZXR1cm4gaW5mby53aWR0aCA9PT0gJzFweCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG1lZGlhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hdGNoZXM6IHN0eWxlTWVkaWEubWF0Y2hNZWRpdW0obWVkaWEgfHwgJ2FsbCcpLFxuICAgICAgbWVkaWE6IG1lZGlhIHx8ICdhbGwnXG4gICAgfTtcbiAgfVxufSgpKTtcblxuLy8gVGhhbmsgeW91OiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZ1xuZnVuY3Rpb24gcGFyc2VTdHlsZVRvT2JqZWN0KHN0cikge1xuICB2YXIgc3R5bGVPYmplY3QgPSB7fTtcblxuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBzdHIgPSBzdHIudHJpbSgpLnNsaWNlKDEsIC0xKTsgLy8gYnJvd3NlcnMgcmUtcXVvdGUgc3RyaW5nIHN0eWxlIHZhbHVlc1xuXG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICB9XG5cbiAgc3R5bGVPYmplY3QgPSBzdHIuc3BsaXQoJyYnKS5yZWR1Y2UoZnVuY3Rpb24ocmV0LCBwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICAgIHZhciB2YWwgPSBwYXJ0c1sxXTtcbiAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcblxuICAgIC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG4gICAgLy8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuICAgIHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuXG4gICAgaWYgKCFyZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0W2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldFtrZXldKSkge1xuICAgICAgcmV0W2tleV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXRba2V5XSA9IFtyZXRba2V5XSwgdmFsXTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZU9iamVjdDtcbn1cblxuRm91bmRhdGlvbi5NZWRpYVF1ZXJ5ID0gTWVkaWFRdWVyeTtcblxufShqUXVlcnkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG4vKipcbiAqIE1vdGlvbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24ubW90aW9uXG4gKi9cblxuY29uc3QgaW5pdENsYXNzZXMgICA9IFsnbXVpLWVudGVyJywgJ211aS1sZWF2ZSddO1xuY29uc3QgYWN0aXZlQ2xhc3NlcyA9IFsnbXVpLWVudGVyLWFjdGl2ZScsICdtdWktbGVhdmUtYWN0aXZlJ107XG5cbmNvbnN0IE1vdGlvbiA9IHtcbiAgYW5pbWF0ZUluOiBmdW5jdGlvbihlbGVtZW50LCBhbmltYXRpb24sIGNiKSB7XG4gICAgYW5pbWF0ZSh0cnVlLCBlbGVtZW50LCBhbmltYXRpb24sIGNiKTtcbiAgfSxcblxuICBhbmltYXRlT3V0OiBmdW5jdGlvbihlbGVtZW50LCBhbmltYXRpb24sIGNiKSB7XG4gICAgYW5pbWF0ZShmYWxzZSwgZWxlbWVudCwgYW5pbWF0aW9uLCBjYik7XG4gIH1cbn1cblxuZnVuY3Rpb24gTW92ZShkdXJhdGlvbiwgZWxlbSwgZm4pe1xuICB2YXIgYW5pbSwgcHJvZywgc3RhcnQgPSBudWxsO1xuICAvLyBjb25zb2xlLmxvZygnY2FsbGVkJyk7XG5cbiAgZnVuY3Rpb24gbW92ZSh0cyl7XG4gICAgaWYoIXN0YXJ0KSBzdGFydCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGFydCwgdHMpO1xuICAgIHByb2cgPSB0cyAtIHN0YXJ0O1xuICAgIGZuLmFwcGx5KGVsZW0pO1xuXG4gICAgaWYocHJvZyA8IGR1cmF0aW9uKXsgYW5pbSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobW92ZSwgZWxlbSk7IH1cbiAgICBlbHNle1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW0pO1xuICAgICAgZWxlbS50cmlnZ2VyKCdmaW5pc2hlZC56Zi5hbmltYXRlJywgW2VsZW1dKS50cmlnZ2VySGFuZGxlcignZmluaXNoZWQuemYuYW5pbWF0ZScsIFtlbGVtXSk7XG4gICAgfVxuICB9XG4gIGFuaW0gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmUpO1xufVxuXG4vKipcbiAqIEFuaW1hdGVzIGFuIGVsZW1lbnQgaW4gb3Igb3V0IHVzaW5nIGEgQ1NTIHRyYW5zaXRpb24gY2xhc3MuXG4gKiBAZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW4gLSBEZWZpbmVzIGlmIHRoZSBhbmltYXRpb24gaXMgaW4gb3Igb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBqUXVlcnkgb3IgSFRNTCBvYmplY3QgdG8gYW5pbWF0ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhbmltYXRpb24gLSBDU1MgY2xhc3MgdG8gdXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayB0byBydW4gd2hlbiBhbmltYXRpb24gaXMgZmluaXNoZWQuXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGUoaXNJbiwgZWxlbWVudCwgYW5pbWF0aW9uLCBjYikge1xuICBlbGVtZW50ID0gJChlbGVtZW50KS5lcSgwKTtcblxuICBpZiAoIWVsZW1lbnQubGVuZ3RoKSByZXR1cm47XG5cbiAgdmFyIGluaXRDbGFzcyA9IGlzSW4gPyBpbml0Q2xhc3Nlc1swXSA6IGluaXRDbGFzc2VzWzFdO1xuICB2YXIgYWN0aXZlQ2xhc3MgPSBpc0luID8gYWN0aXZlQ2xhc3Nlc1swXSA6IGFjdGl2ZUNsYXNzZXNbMV07XG5cbiAgLy8gU2V0IHVwIHRoZSBhbmltYXRpb25cbiAgcmVzZXQoKTtcblxuICBlbGVtZW50XG4gICAgLmFkZENsYXNzKGFuaW1hdGlvbilcbiAgICAuY3NzKCd0cmFuc2l0aW9uJywgJ25vbmUnKTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkQ2xhc3MoaW5pdENsYXNzKTtcbiAgICBpZiAoaXNJbikgZWxlbWVudC5zaG93KCk7XG4gIH0pO1xuXG4gIC8vIFN0YXJ0IHRoZSBhbmltYXRpb25cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBlbGVtZW50WzBdLm9mZnNldFdpZHRoO1xuICAgIGVsZW1lbnRcbiAgICAgIC5jc3MoJ3RyYW5zaXRpb24nLCAnJylcbiAgICAgIC5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG4gIH0pO1xuXG4gIC8vIENsZWFuIHVwIHRoZSBhbmltYXRpb24gd2hlbiBpdCBmaW5pc2hlc1xuICBlbGVtZW50Lm9uZShGb3VuZGF0aW9uLnRyYW5zaXRpb25lbmQoZWxlbWVudCksIGZpbmlzaCk7XG5cbiAgLy8gSGlkZXMgdGhlIGVsZW1lbnQgKGZvciBvdXQgYW5pbWF0aW9ucyksIHJlc2V0cyB0aGUgZWxlbWVudCwgYW5kIHJ1bnMgYSBjYWxsYmFja1xuICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgaWYgKCFpc0luKSBlbGVtZW50LmhpZGUoKTtcbiAgICByZXNldCgpO1xuICAgIGlmIChjYikgY2IuYXBwbHkoZWxlbWVudCk7XG4gIH1cblxuICAvLyBSZXNldHMgdHJhbnNpdGlvbnMgYW5kIHJlbW92ZXMgbW90aW9uLXNwZWNpZmljIGNsYXNzZXNcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgZWxlbWVudFswXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAwO1xuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoYCR7aW5pdENsYXNzfSAke2FjdGl2ZUNsYXNzfSAke2FuaW1hdGlvbn1gKTtcbiAgfVxufVxuXG5Gb3VuZGF0aW9uLk1vdmUgPSBNb3ZlO1xuRm91bmRhdGlvbi5Nb3Rpb24gPSBNb3Rpb247XG5cbn0oalF1ZXJ5KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuIWZ1bmN0aW9uKCQpIHtcblxuY29uc3QgTmVzdCA9IHtcbiAgRmVhdGhlcihtZW51LCB0eXBlID0gJ3pmJykge1xuICAgIG1lbnUuYXR0cigncm9sZScsICdtZW51YmFyJyk7XG5cbiAgICB2YXIgaXRlbXMgPSBtZW51LmZpbmQoJ2xpJykuYXR0cih7J3JvbGUnOiAnbWVudWl0ZW0nfSksXG4gICAgICAgIHN1Yk1lbnVDbGFzcyA9IGBpcy0ke3R5cGV9LXN1Ym1lbnVgLFxuICAgICAgICBzdWJJdGVtQ2xhc3MgPSBgJHtzdWJNZW51Q2xhc3N9LWl0ZW1gLFxuICAgICAgICBoYXNTdWJDbGFzcyA9IGBpcy0ke3R5cGV9LXN1Ym1lbnUtcGFyZW50YDtcblxuICAgIG1lbnUuZmluZCgnYTpmaXJzdCcpLmF0dHIoJ3RhYmluZGV4JywgMCk7XG5cbiAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRpdGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAkc3ViID0gJGl0ZW0uY2hpbGRyZW4oJ3VsJyk7XG5cbiAgICAgIGlmICgkc3ViLmxlbmd0aCkge1xuICAgICAgICAkaXRlbVxuICAgICAgICAgIC5hZGRDbGFzcyhoYXNTdWJDbGFzcylcbiAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICAgICAnYXJpYS1leHBhbmRlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAkaXRlbS5jaGlsZHJlbignYTpmaXJzdCcpLnRleHQoKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICRzdWJcbiAgICAgICAgICAuYWRkQ2xhc3MoYHN1Ym1lbnUgJHtzdWJNZW51Q2xhc3N9YClcbiAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAnZGF0YS1zdWJtZW51JzogJycsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICAgICAgJ3JvbGUnOiAnbWVudSdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRpdGVtLnBhcmVudCgnW2RhdGEtc3VibWVudV0nKS5sZW5ndGgpIHtcbiAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoYGlzLXN1Ym1lbnUtaXRlbSAke3N1Ykl0ZW1DbGFzc31gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfSxcblxuICBCdXJuKG1lbnUsIHR5cGUpIHtcbiAgICB2YXIgaXRlbXMgPSBtZW51LmZpbmQoJ2xpJykucmVtb3ZlQXR0cigndGFiaW5kZXgnKSxcbiAgICAgICAgc3ViTWVudUNsYXNzID0gYGlzLSR7dHlwZX0tc3VibWVudWAsXG4gICAgICAgIHN1Ykl0ZW1DbGFzcyA9IGAke3N1Yk1lbnVDbGFzc30taXRlbWAsXG4gICAgICAgIGhhc1N1YkNsYXNzID0gYGlzLSR7dHlwZX0tc3VibWVudS1wYXJlbnRgO1xuXG4gICAgbWVudVxuICAgICAgLmZpbmQoJyonKVxuICAgICAgLnJlbW92ZUNsYXNzKGAke3N1Yk1lbnVDbGFzc30gJHtzdWJJdGVtQ2xhc3N9ICR7aGFzU3ViQ2xhc3N9IGlzLXN1Ym1lbnUtaXRlbSBzdWJtZW51IGlzLWFjdGl2ZWApXG4gICAgICAucmVtb3ZlQXR0cignZGF0YS1zdWJtZW51JykuY3NzKCdkaXNwbGF5JywgJycpO1xuXG4gICAgLy8gY29uc29sZS5sb2coICAgICAgbWVudS5maW5kKCcuJyArIHN1Yk1lbnVDbGFzcyArICcsIC4nICsgc3ViSXRlbUNsYXNzICsgJywgLmhhcy1zdWJtZW51LCAuaXMtc3VibWVudS1pdGVtLCAuc3VibWVudSwgW2RhdGEtc3VibWVudV0nKVxuICAgIC8vICAgICAgICAgICAucmVtb3ZlQ2xhc3Moc3ViTWVudUNsYXNzICsgJyAnICsgc3ViSXRlbUNsYXNzICsgJyBoYXMtc3VibWVudSBpcy1zdWJtZW51LWl0ZW0gc3VibWVudScpXG4gICAgLy8gICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXN1Ym1lbnUnKSk7XG4gICAgLy8gaXRlbXMuZWFjaChmdW5jdGlvbigpe1xuICAgIC8vICAgdmFyICRpdGVtID0gJCh0aGlzKSxcbiAgICAvLyAgICAgICAkc3ViID0gJGl0ZW0uY2hpbGRyZW4oJ3VsJyk7XG4gICAgLy8gICBpZigkaXRlbS5wYXJlbnQoJ1tkYXRhLXN1Ym1lbnVdJykubGVuZ3RoKXtcbiAgICAvLyAgICAgJGl0ZW0ucmVtb3ZlQ2xhc3MoJ2lzLXN1Ym1lbnUtaXRlbSAnICsgc3ViSXRlbUNsYXNzKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmKCRzdWIubGVuZ3RoKXtcbiAgICAvLyAgICAgJGl0ZW0ucmVtb3ZlQ2xhc3MoJ2hhcy1zdWJtZW51Jyk7XG4gICAgLy8gICAgICRzdWIucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnUgJyArIHN1Yk1lbnVDbGFzcykucmVtb3ZlQXR0cignZGF0YS1zdWJtZW51Jyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gIH1cbn1cblxuRm91bmRhdGlvbi5OZXN0ID0gTmVzdDtcblxufShqUXVlcnkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4hZnVuY3Rpb24oJCkge1xuXG5mdW5jdGlvbiBUaW1lcihlbGVtLCBvcHRpb25zLCBjYikge1xuICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uLC8vb3B0aW9ucyBpcyBhbiBvYmplY3QgZm9yIGVhc2lseSBhZGRpbmcgZmVhdHVyZXMgbGF0ZXIuXG4gICAgICBuYW1lU3BhY2UgPSBPYmplY3Qua2V5cyhlbGVtLmRhdGEoKSlbMF0gfHwgJ3RpbWVyJyxcbiAgICAgIHJlbWFpbiA9IC0xLFxuICAgICAgc3RhcnQsXG4gICAgICB0aW1lcjtcblxuICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG5cbiAgdGhpcy5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmVtYWluID0gLTE7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIC8vIGlmKCFlbGVtLmRhdGEoJ3BhdXNlZCcpKXsgcmV0dXJuIGZhbHNlOyB9Ly9tYXliZSBpbXBsZW1lbnQgdGhpcyBzYW5pdHkgY2hlY2sgaWYgdXNlZCBmb3Igb3RoZXIgdGhpbmdzLlxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgcmVtYWluID0gcmVtYWluIDw9IDAgPyBkdXJhdGlvbiA6IHJlbWFpbjtcbiAgICBlbGVtLmRhdGEoJ3BhdXNlZCcsIGZhbHNlKTtcbiAgICBzdGFydCA9IERhdGUubm93KCk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBpZihvcHRpb25zLmluZmluaXRlKXtcbiAgICAgICAgX3RoaXMucmVzdGFydCgpOy8vcmVydW4gdGhlIHRpbWVyLlxuICAgICAgfVxuICAgICAgY2IoKTtcbiAgICB9LCByZW1haW4pO1xuICAgIGVsZW0udHJpZ2dlcihgdGltZXJzdGFydC56Zi4ke25hbWVTcGFjZX1gKTtcbiAgfVxuXG4gIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICAvL2lmKGVsZW0uZGF0YSgncGF1c2VkJykpeyByZXR1cm4gZmFsc2U7IH0vL21heWJlIGltcGxlbWVudCB0aGlzIHNhbml0eSBjaGVjayBpZiB1c2VkIGZvciBvdGhlciB0aGluZ3MuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBlbGVtLmRhdGEoJ3BhdXNlZCcsIHRydWUpO1xuICAgIHZhciBlbmQgPSBEYXRlLm5vdygpO1xuICAgIHJlbWFpbiA9IHJlbWFpbiAtIChlbmQgLSBzdGFydCk7XG4gICAgZWxlbS50cmlnZ2VyKGB0aW1lcnBhdXNlZC56Zi4ke25hbWVTcGFjZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIFJ1bnMgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIGltYWdlcyBhcmUgZnVsbHkgbG9hZGVkLlxuICogQHBhcmFtIHtPYmplY3R9IGltYWdlcyAtIEltYWdlKHMpIHRvIGNoZWNrIGlmIGxvYWRlZC5cbiAqIEBwYXJhbSB7RnVuY30gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gaW1hZ2UgaXMgZnVsbHkgbG9hZGVkLlxuICovXG5mdW5jdGlvbiBvbkltYWdlc0xvYWRlZChpbWFnZXMsIGNhbGxiYWNrKXtcbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgdW5sb2FkZWQgPSBpbWFnZXMubGVuZ3RoO1xuXG4gIGlmICh1bmxvYWRlZCA9PT0gMCkge1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxuICBpbWFnZXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jb21wbGV0ZSkge1xuICAgICAgc2luZ2xlSW1hZ2VMb2FkZWQoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaXMubmF0dXJhbFdpZHRoICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm5hdHVyYWxXaWR0aCA+IDApIHtcbiAgICAgIHNpbmdsZUltYWdlTG9hZGVkKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCh0aGlzKS5vbmUoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2luZ2xlSW1hZ2VMb2FkZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2luZ2xlSW1hZ2VMb2FkZWQoKSB7XG4gICAgdW5sb2FkZWQtLTtcbiAgICBpZiAodW5sb2FkZWQgPT09IDApIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59XG5cbkZvdW5kYXRpb24uVGltZXIgPSBUaW1lcjtcbkZvdW5kYXRpb24ub25JbWFnZXNMb2FkZWQgPSBvbkltYWdlc0xvYWRlZDtcblxufShqUXVlcnkpO1xuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8qKldvcmsgaW5zcGlyZWQgYnkgbXVsdGlwbGUganF1ZXJ5IHN3aXBlIHBsdWdpbnMqKlxuLy8qKkRvbmUgYnkgWW9oYWkgQXJhcmF0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKGZ1bmN0aW9uKCQpIHtcblxuICAkLnNwb3RTd2lwZSA9IHtcbiAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIGVuYWJsZWQ6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICBwcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gICAgbW92ZVRocmVzaG9sZDogNzUsXG4gICAgdGltZVRocmVzaG9sZDogMjAwXG4gIH07XG5cbiAgdmFyICAgc3RhcnRQb3NYLFxuICAgICAgICBzdGFydFBvc1ksXG4gICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgZWxhcHNlZFRpbWUsXG4gICAgICAgIGlzTW92aW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAvLyAgYWxlcnQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgIGlzTW92aW5nID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgaWYgKCQuc3BvdFN3aXBlLnByZXZlbnREZWZhdWx0KSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuICAgIGlmKGlzTW92aW5nKSB7XG4gICAgICB2YXIgeCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgIHZhciB5ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgdmFyIGR4ID0gc3RhcnRQb3NYIC0geDtcbiAgICAgIHZhciBkeSA9IHN0YXJ0UG9zWSAtIHk7XG4gICAgICB2YXIgZGlyO1xuICAgICAgZWxhcHNlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZTtcbiAgICAgIGlmKE1hdGguYWJzKGR4KSA+PSAkLnNwb3RTd2lwZS5tb3ZlVGhyZXNob2xkICYmIGVsYXBzZWRUaW1lIDw9ICQuc3BvdFN3aXBlLnRpbWVUaHJlc2hvbGQpIHtcbiAgICAgICAgZGlyID0gZHggPiAwID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgaWYoTWF0aC5hYnMoZHkpID49ICQuc3BvdFN3aXBlLm1vdmVUaHJlc2hvbGQgJiYgZWxhcHNlZFRpbWUgPD0gJC5zcG90U3dpcGUudGltZVRocmVzaG9sZCkge1xuICAgICAgLy8gICBkaXIgPSBkeSA+IDAgPyAnZG93bicgOiAndXAnO1xuICAgICAgLy8gfVxuICAgICAgaWYoZGlyKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25Ub3VjaEVuZC5jYWxsKHRoaXMpO1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ3N3aXBlJywgZGlyKS50cmlnZ2VyKGBzd2lwZSR7ZGlyfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgc3RhcnRQb3NYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgc3RhcnRQb3NZID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgaXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyICYmIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgfVxuXG4gICQuZXZlbnQuc3BlY2lhbC5zd2lwZSA9IHsgc2V0dXA6IGluaXQgfTtcblxuICAkLmVhY2goWydsZWZ0JywgJ3VwJywgJ2Rvd24nLCAncmlnaHQnXSwgZnVuY3Rpb24gKCkge1xuICAgICQuZXZlbnQuc3BlY2lhbFtgc3dpcGUke3RoaXN9YF0gPSB7IHNldHVwOiBmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5vbignc3dpcGUnLCAkLm5vb3ApO1xuICAgIH0gfTtcbiAgfSk7XG59KShqUXVlcnkpO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1ldGhvZCBmb3IgYWRkaW5nIHBzdWVkbyBkcmFnIGV2ZW50cyB0byBlbGVtZW50cyAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIWZ1bmN0aW9uKCQpe1xuICAkLmZuLmFkZFRvdWNoID0gZnVuY3Rpb24oKXtcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oaSxlbCl7XG4gICAgICAkKGVsKS5iaW5kKCd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbCcsZnVuY3Rpb24oKXtcbiAgICAgICAgLy93ZSBwYXNzIHRoZSBvcmlnaW5hbCBldmVudCBvYmplY3QgYmVjYXVzZSB0aGUgalF1ZXJ5IGV2ZW50XG4gICAgICAgIC8vb2JqZWN0IGlzIG5vcm1hbGl6ZWQgdG8gdzNjIHNwZWNzIGFuZCBkb2VzIG5vdCBwcm92aWRlIHRoZSBUb3VjaExpc3RcbiAgICAgICAgaGFuZGxlVG91Y2goZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgaGFuZGxlVG91Y2ggPSBmdW5jdGlvbihldmVudCl7XG4gICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgIGZpcnN0ID0gdG91Y2hlc1swXSxcbiAgICAgICAgICBldmVudFR5cGVzID0ge1xuICAgICAgICAgICAgdG91Y2hzdGFydDogJ21vdXNlZG93bicsXG4gICAgICAgICAgICB0b3VjaG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgICAgICAgICAgdG91Y2hlbmQ6ICdtb3VzZXVwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZSA9IGV2ZW50VHlwZXNbZXZlbnQudHlwZV0sXG4gICAgICAgICAgc2ltdWxhdGVkRXZlbnRcbiAgICAgICAgO1xuXG4gICAgICBpZignTW91c2VFdmVudCcgaW4gd2luZG93ICYmIHR5cGVvZiB3aW5kb3cuTW91c2VFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzaW11bGF0ZWRFdmVudCA9IHdpbmRvdy5Nb3VzZUV2ZW50KHR5cGUsIHtcbiAgICAgICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlLFxuICAgICAgICAgICdzY3JlZW5YJzogZmlyc3Quc2NyZWVuWCxcbiAgICAgICAgICAnc2NyZWVuWSc6IGZpcnN0LnNjcmVlblksXG4gICAgICAgICAgJ2NsaWVudFgnOiBmaXJzdC5jbGllbnRYLFxuICAgICAgICAgICdjbGllbnRZJzogZmlyc3QuY2xpZW50WVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpbXVsYXRlZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQuaW5pdE1vdXNlRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCBmaXJzdC5zY3JlZW5YLCBmaXJzdC5zY3JlZW5ZLCBmaXJzdC5jbGllbnRYLCBmaXJzdC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMC8qbGVmdCovLCBudWxsKTtcbiAgICAgIH1cbiAgICAgIGZpcnN0LnRhcmdldC5kaXNwYXRjaEV2ZW50KHNpbXVsYXRlZEV2ZW50KTtcbiAgICB9O1xuICB9O1xufShqUXVlcnkpO1xuXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8qKkZyb20gdGhlIGpRdWVyeSBNb2JpbGUgTGlicmFyeSoqXG4vLyoqbmVlZCB0byByZWNyZWF0ZSBmdW5jdGlvbmFsaXR5Kipcbi8vKiphbmQgdHJ5IHRvIGltcHJvdmUgaWYgcG9zc2libGUqKlxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8qIFJlbW92aW5nIHRoZSBqUXVlcnkgZnVuY3Rpb24gKioqKlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbihmdW5jdGlvbiggJCwgd2luZG93LCB1bmRlZmluZWQgKSB7XG5cblx0dmFyICRkb2N1bWVudCA9ICQoIGRvY3VtZW50ICksXG5cdFx0Ly8gc3VwcG9ydFRvdWNoID0gJC5tb2JpbGUuc3VwcG9ydC50b3VjaCxcblx0XHR0b3VjaFN0YXJ0RXZlbnQgPSAndG91Y2hzdGFydCcvL3N1cHBvcnRUb3VjaCA/IFwidG91Y2hzdGFydFwiIDogXCJtb3VzZWRvd25cIixcblx0XHR0b3VjaFN0b3BFdmVudCA9ICd0b3VjaGVuZCcvL3N1cHBvcnRUb3VjaCA/IFwidG91Y2hlbmRcIiA6IFwibW91c2V1cFwiLFxuXHRcdHRvdWNoTW92ZUV2ZW50ID0gJ3RvdWNobW92ZScvL3N1cHBvcnRUb3VjaCA/IFwidG91Y2htb3ZlXCIgOiBcIm1vdXNlbW92ZVwiO1xuXG5cdC8vIHNldHVwIG5ldyBldmVudCBzaG9ydGN1dHNcblx0JC5lYWNoKCAoIFwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgXCIgK1xuXHRcdFwic3dpcGUgc3dpcGVsZWZ0IHN3aXBlcmlnaHRcIiApLnNwbGl0KCBcIiBcIiApLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcblxuXHRcdCQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdHJldHVybiBmbiA/IHRoaXMuYmluZCggbmFtZSwgZm4gKSA6IHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHRcdH07XG5cblx0XHQvLyBqUXVlcnkgPCAxLjhcblx0XHRpZiAoICQuYXR0ckZuICkge1xuXHRcdFx0JC5hdHRyRm5bIG5hbWUgXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiB0cmlnZ2VyQ3VzdG9tRXZlbnQoIG9iaiwgZXZlbnRUeXBlLCBldmVudCwgYnViYmxlICkge1xuXHRcdHZhciBvcmlnaW5hbFR5cGUgPSBldmVudC50eXBlO1xuXHRcdGV2ZW50LnR5cGUgPSBldmVudFR5cGU7XG5cdFx0aWYgKCBidWJibGUgKSB7XG5cdFx0XHQkLmV2ZW50LnRyaWdnZXIoIGV2ZW50LCB1bmRlZmluZWQsIG9iaiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkLmV2ZW50LmRpc3BhdGNoLmNhbGwoIG9iaiwgZXZlbnQgKTtcblx0XHR9XG5cdFx0ZXZlbnQudHlwZSA9IG9yaWdpbmFsVHlwZTtcblx0fVxuXG5cdC8vIGFsc28gaGFuZGxlcyB0YXBob2xkXG5cblx0Ly8gQWxzbyBoYW5kbGVzIHN3aXBlbGVmdCwgc3dpcGVyaWdodFxuXHQkLmV2ZW50LnNwZWNpYWwuc3dpcGUgPSB7XG5cblx0XHQvLyBNb3JlIHRoYW4gdGhpcyBob3Jpem9udGFsIGRpc3BsYWNlbWVudCwgYW5kIHdlIHdpbGwgc3VwcHJlc3Mgc2Nyb2xsaW5nLlxuXHRcdHNjcm9sbFN1cHJlc3Npb25UaHJlc2hvbGQ6IDMwLFxuXG5cdFx0Ly8gTW9yZSB0aW1lIHRoYW4gdGhpcywgYW5kIGl0IGlzbid0IGEgc3dpcGUuXG5cdFx0ZHVyYXRpb25UaHJlc2hvbGQ6IDEwMDAsXG5cblx0XHQvLyBTd2lwZSBob3Jpem9udGFsIGRpc3BsYWNlbWVudCBtdXN0IGJlIG1vcmUgdGhhbiB0aGlzLlxuXHRcdGhvcml6b250YWxEaXN0YW5jZVRocmVzaG9sZDogd2luZG93LmRldmljZVBpeGVsUmF0aW8gPj0gMiA/IDE1IDogMzAsXG5cblx0XHQvLyBTd2lwZSB2ZXJ0aWNhbCBkaXNwbGFjZW1lbnQgbXVzdCBiZSBsZXNzIHRoYW4gdGhpcy5cblx0XHR2ZXJ0aWNhbERpc3RhbmNlVGhyZXNob2xkOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+PSAyID8gMTUgOiAzMCxcblxuXHRcdGdldExvY2F0aW9uOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdFx0dmFyIHdpblBhZ2VYID0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHR3aW5QYWdlWSA9IHdpbmRvdy5wYWdlWU9mZnNldCxcblx0XHRcdFx0eCA9IGV2ZW50LmNsaWVudFgsXG5cdFx0XHRcdHkgPSBldmVudC5jbGllbnRZO1xuXG5cdFx0XHRpZiAoIGV2ZW50LnBhZ2VZID09PSAwICYmIE1hdGguZmxvb3IoIHkgKSA+IE1hdGguZmxvb3IoIGV2ZW50LnBhZ2VZICkgfHxcblx0XHRcdFx0ZXZlbnQucGFnZVggPT09IDAgJiYgTWF0aC5mbG9vciggeCApID4gTWF0aC5mbG9vciggZXZlbnQucGFnZVggKSApIHtcblxuXHRcdFx0XHQvLyBpT1M0IGNsaWVudFgvY2xpZW50WSBoYXZlIHRoZSB2YWx1ZSB0aGF0IHNob3VsZCBoYXZlIGJlZW5cblx0XHRcdFx0Ly8gaW4gcGFnZVgvcGFnZVkuIFdoaWxlIHBhZ2VYL3BhZ2UvIGhhdmUgdGhlIHZhbHVlIDBcblx0XHRcdFx0eCA9IHggLSB3aW5QYWdlWDtcblx0XHRcdFx0eSA9IHkgLSB3aW5QYWdlWTtcblx0XHRcdH0gZWxzZSBpZiAoIHkgPCAoIGV2ZW50LnBhZ2VZIC0gd2luUGFnZVkpIHx8IHggPCAoIGV2ZW50LnBhZ2VYIC0gd2luUGFnZVggKSApIHtcblxuXHRcdFx0XHQvLyBTb21lIEFuZHJvaWQgYnJvd3NlcnMgaGF2ZSB0b3RhbGx5IGJvZ3VzIHZhbHVlcyBmb3IgY2xpZW50WC9ZXG5cdFx0XHRcdC8vIHdoZW4gc2Nyb2xsaW5nL3pvb21pbmcgYSBwYWdlLiBEZXRlY3RhYmxlIHNpbmNlIGNsaWVudFgvY2xpZW50WVxuXHRcdFx0XHQvLyBzaG91bGQgbmV2ZXIgYmUgc21hbGxlciB0aGFuIHBhZ2VYL3BhZ2VZIG1pbnVzIHBhZ2Ugc2Nyb2xsXG5cdFx0XHRcdHggPSBldmVudC5wYWdlWCAtIHdpblBhZ2VYO1xuXHRcdFx0XHR5ID0gZXZlbnQucGFnZVkgLSB3aW5QYWdlWTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eDogeCxcblx0XHRcdFx0eTogeVxuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciBkYXRhID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzID9cblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbIDAgXSA6IGV2ZW50LFxuXHRcdFx0XHRsb2NhdGlvbiA9ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5nZXRMb2NhdGlvbiggZGF0YSApO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWU6ICggbmV3IERhdGUoKSApLmdldFRpbWUoKSxcblx0XHRcdFx0XHRcdGNvb3JkczogWyBsb2NhdGlvbi54LCBsb2NhdGlvbi55IF0sXG5cdFx0XHRcdFx0XHRvcmlnaW46ICQoIGV2ZW50LnRhcmdldCApXG5cdFx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0c3RvcDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIGRhdGEgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgP1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1sgMCBdIDogZXZlbnQsXG5cdFx0XHRcdGxvY2F0aW9uID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLmdldExvY2F0aW9uKCBkYXRhICk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZTogKCBuZXcgRGF0ZSgpICkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcdFx0Y29vcmRzOiBbIGxvY2F0aW9uLngsIGxvY2F0aW9uLnkgXVxuXHRcdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdGhhbmRsZVN3aXBlOiBmdW5jdGlvbiggc3RhcnQsIHN0b3AsIHRoaXNPYmplY3QsIG9yaWdUYXJnZXQgKSB7XG5cdFx0XHRpZiAoIHN0b3AudGltZSAtIHN0YXJ0LnRpbWUgPCAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZHVyYXRpb25UaHJlc2hvbGQgJiZcblx0XHRcdFx0TWF0aC5hYnMoIHN0YXJ0LmNvb3Jkc1sgMCBdIC0gc3RvcC5jb29yZHNbIDAgXSApID4gJC5ldmVudC5zcGVjaWFsLnN3aXBlLmhvcml6b250YWxEaXN0YW5jZVRocmVzaG9sZCAmJlxuXHRcdFx0XHRNYXRoLmFicyggc3RhcnQuY29vcmRzWyAxIF0gLSBzdG9wLmNvb3Jkc1sgMSBdICkgPCAkLmV2ZW50LnNwZWNpYWwuc3dpcGUudmVydGljYWxEaXN0YW5jZVRocmVzaG9sZCApIHtcblx0XHRcdFx0dmFyIGRpcmVjdGlvbiA9IHN0YXJ0LmNvb3Jkc1swXSA+IHN0b3AuY29vcmRzWyAwIF0gPyBcInN3aXBlbGVmdFwiIDogXCJzd2lwZXJpZ2h0XCI7XG5cblx0XHRcdFx0dHJpZ2dlckN1c3RvbUV2ZW50KCB0aGlzT2JqZWN0LCBcInN3aXBlXCIsICQuRXZlbnQoIFwic3dpcGVcIiwgeyB0YXJnZXQ6IG9yaWdUYXJnZXQsIHN3aXBlc3RhcnQ6IHN0YXJ0LCBzd2lwZXN0b3A6IHN0b3AgfSksIHRydWUgKTtcblx0XHRcdFx0dHJpZ2dlckN1c3RvbUV2ZW50KCB0aGlzT2JqZWN0LCBkaXJlY3Rpb24sJC5FdmVudCggZGlyZWN0aW9uLCB7IHRhcmdldDogb3JpZ1RhcmdldCwgc3dpcGVzdGFydDogc3RhcnQsIHN3aXBlc3RvcDogc3RvcCB9ICksIHRydWUgKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9LFxuXG5cdFx0Ly8gVGhpcyBzZXJ2ZXMgYXMgYSBmbGFnIHRvIGVuc3VyZSB0aGF0IGF0IG1vc3Qgb25lIHN3aXBlIGV2ZW50IGV2ZW50IGlzXG5cdFx0Ly8gaW4gd29yayBhdCBhbnkgZ2l2ZW4gdGltZVxuXHRcdGV2ZW50SW5Qcm9ncmVzczogZmFsc2UsXG5cblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZXZlbnRzLFxuXHRcdFx0XHR0aGlzT2JqZWN0ID0gdGhpcyxcblx0XHRcdFx0JHRoaXMgPSAkKCB0aGlzT2JqZWN0ICksXG5cdFx0XHRcdGNvbnRleHQgPSB7fTtcblxuXHRcdFx0Ly8gUmV0cmlldmUgdGhlIGV2ZW50cyBkYXRhIGZvciB0aGlzIGVsZW1lbnQgYW5kIGFkZCB0aGUgc3dpcGUgY29udGV4dFxuXHRcdFx0ZXZlbnRzID0gJC5kYXRhKCB0aGlzLCBcIm1vYmlsZS1ldmVudHNcIiApO1xuXHRcdFx0aWYgKCAhZXZlbnRzICkge1xuXHRcdFx0XHRldmVudHMgPSB7IGxlbmd0aDogMCB9O1xuXHRcdFx0XHQkLmRhdGEoIHRoaXMsIFwibW9iaWxlLWV2ZW50c1wiLCBldmVudHMgKTtcblx0XHRcdH1cblx0XHRcdGV2ZW50cy5sZW5ndGgrKztcblx0XHRcdGV2ZW50cy5zd2lwZSA9IGNvbnRleHQ7XG5cblx0XHRcdGNvbnRleHQuc3RhcnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0Ly8gQmFpbCBpZiB3ZSdyZSBhbHJlYWR5IHdvcmtpbmcgb24gYSBzd2lwZSBldmVudFxuXHRcdFx0XHRpZiAoICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ldmVudEluUHJvZ3Jlc3MgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ldmVudEluUHJvZ3Jlc3MgPSB0cnVlO1xuXG5cdFx0XHRcdHZhciBzdG9wLFxuXHRcdFx0XHRcdHN0YXJ0ID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLnN0YXJ0KCBldmVudCApLFxuXHRcdFx0XHRcdG9yaWdUYXJnZXQgPSBldmVudC50YXJnZXQsXG5cdFx0XHRcdFx0ZW1pdHRlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdGNvbnRleHQubW92ZSA9IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0XHRpZiAoICFzdGFydCB8fCBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzdG9wID0gJC5ldmVudC5zcGVjaWFsLnN3aXBlLnN0b3AoIGV2ZW50ICk7XG5cdFx0XHRcdFx0aWYgKCAhZW1pdHRlZCApIHtcblx0XHRcdFx0XHRcdGVtaXR0ZWQgPSAkLmV2ZW50LnNwZWNpYWwuc3dpcGUuaGFuZGxlU3dpcGUoIHN0YXJ0LCBzdG9wLCB0aGlzT2JqZWN0LCBvcmlnVGFyZ2V0ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGVtaXR0ZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNvbnRleHQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXh0IHN3aXBlIGV2ZW50XG5cdFx0XHRcdFx0XHRcdCQuZXZlbnQuc3BlY2lhbC5zd2lwZS5ldmVudEluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gcHJldmVudCBzY3JvbGxpbmdcblx0XHRcdFx0XHRpZiAoIE1hdGguYWJzKCBzdGFydC5jb29yZHNbIDAgXSAtIHN0b3AuY29vcmRzWyAwIF0gKSA+ICQuZXZlbnQuc3BlY2lhbC5zd2lwZS5zY3JvbGxTdXByZXNzaW9uVGhyZXNob2xkICkge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29udGV4dC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRlbWl0dGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNvbnRleHQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXh0IHN3aXBlIGV2ZW50XG5cdFx0XHRcdFx0XHQkLmV2ZW50LnNwZWNpYWwuc3dpcGUuZXZlbnRJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHQkZG9jdW1lbnQub2ZmKCB0b3VjaE1vdmVFdmVudCwgY29udGV4dC5tb3ZlICk7XG5cdFx0XHRcdFx0XHRjb250ZXh0Lm1vdmUgPSBudWxsO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdCRkb2N1bWVudC5vbiggdG91Y2hNb3ZlRXZlbnQsIGNvbnRleHQubW92ZSApXG5cdFx0XHRcdFx0Lm9uZSggdG91Y2hTdG9wRXZlbnQsIGNvbnRleHQuc3RvcCApO1xuXHRcdFx0fTtcblx0XHRcdCR0aGlzLm9uKCB0b3VjaFN0YXJ0RXZlbnQsIGNvbnRleHQuc3RhcnQgKTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGV2ZW50cywgY29udGV4dDtcblxuXHRcdFx0ZXZlbnRzID0gJC5kYXRhKCB0aGlzLCBcIm1vYmlsZS1ldmVudHNcIiApO1xuXHRcdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRcdGNvbnRleHQgPSBldmVudHMuc3dpcGU7XG5cdFx0XHRcdGRlbGV0ZSBldmVudHMuc3dpcGU7XG5cdFx0XHRcdGV2ZW50cy5sZW5ndGgtLTtcblx0XHRcdFx0aWYgKCBldmVudHMubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdCQucmVtb3ZlRGF0YSggdGhpcywgXCJtb2JpbGUtZXZlbnRzXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGNvbnRleHQgKSB7XG5cdFx0XHRcdGlmICggY29udGV4dC5zdGFydCApIHtcblx0XHRcdFx0XHQkKCB0aGlzICkub2ZmKCB0b3VjaFN0YXJ0RXZlbnQsIGNvbnRleHQuc3RhcnQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGNvbnRleHQubW92ZSApIHtcblx0XHRcdFx0XHQkZG9jdW1lbnQub2ZmKCB0b3VjaE1vdmVFdmVudCwgY29udGV4dC5tb3ZlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBjb250ZXh0LnN0b3AgKSB7XG5cdFx0XHRcdFx0JGRvY3VtZW50Lm9mZiggdG91Y2hTdG9wRXZlbnQsIGNvbnRleHQuc3RvcCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHQkLmVhY2goe1xuXHRcdHN3aXBlbGVmdDogXCJzd2lwZS5sZWZ0XCIsXG5cdFx0c3dpcGVyaWdodDogXCJzd2lwZS5yaWdodFwiXG5cdH0sIGZ1bmN0aW9uKCBldmVudCwgc291cmNlRXZlbnQgKSB7XG5cblx0XHQkLmV2ZW50LnNwZWNpYWxbIGV2ZW50IF0gPSB7XG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoIHRoaXMgKS5iaW5kKCBzb3VyY2VFdmVudCwgJC5ub29wICk7XG5cdFx0XHR9LFxuXHRcdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCB0aGlzICkudW5iaW5kKCBzb3VyY2VFdmVudCApO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufSkoIGpRdWVyeSwgdGhpcyApO1xuKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuIWZ1bmN0aW9uKCQpIHtcblxuY29uc3QgTXV0YXRpb25PYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmaXhlcyA9IFsnV2ViS2l0JywgJ01veicsICdPJywgJ01zJywgJyddO1xuICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYCBpbiB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB3aW5kb3dbYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KCkpO1xuXG5jb25zdCB0cmlnZ2VycyA9IChlbCwgdHlwZSkgPT4ge1xuICBlbC5kYXRhKHR5cGUpLnNwbGl0KCcgJykuZm9yRWFjaChpZCA9PiB7XG4gICAgJChgIyR7aWR9YClbIHR5cGUgPT09ICdjbG9zZScgPyAndHJpZ2dlcicgOiAndHJpZ2dlckhhbmRsZXInXShgJHt0eXBlfS56Zi50cmlnZ2VyYCwgW2VsXSk7XG4gIH0pO1xufTtcbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4kKGRvY3VtZW50KS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1vcGVuXScsIGZ1bmN0aW9uKCkge1xuICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xufSk7XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4vLyBJZiB1c2VkIHdpdGhvdXQgYSB2YWx1ZSBvbiBbZGF0YS1jbG9zZV0sIHRoZSBldmVudCB3aWxsIGJ1YmJsZSwgYWxsb3dpbmcgaXQgdG8gY2xvc2UgYSBwYXJlbnQgY29tcG9uZW50LlxuJChkb2N1bWVudCkub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VdJywgZnVuY3Rpb24oKSB7XG4gIGxldCBpZCA9ICQodGhpcykuZGF0YSgnY2xvc2UnKTtcbiAgaWYgKGlkKSB7XG4gICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ2Nsb3NlJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZS56Zi50cmlnZ2VyJyk7XG4gIH1cbn0pO1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4kKGRvY3VtZW50KS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGVdJywgZnVuY3Rpb24oKSB7XG4gIHRyaWdnZXJzKCQodGhpcyksICd0b2dnbGUnKTtcbn0pO1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NhYmxlXSB3aWxsIHJlc3BvbmQgdG8gY2xvc2UuemYudHJpZ2dlciBldmVudHMuXG4kKGRvY3VtZW50KS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zYWJsZV0nLCBmdW5jdGlvbihlKXtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGV0IGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICBpZihhbmltYXRpb24gIT09ICcnKXtcbiAgICBGb3VuZGF0aW9uLk1vdGlvbi5hbmltYXRlT3V0KCQodGhpcyksIGFuaW1hdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgIH0pO1xuICB9ZWxzZXtcbiAgICAkKHRoaXMpLmZhZGVPdXQoKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgfVxufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGUtZm9jdXNdJywgZnVuY3Rpb24oKSB7XG4gIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlLWZvY3VzJyk7XG4gICQoYCMke2lkfWApLnRyaWdnZXJIYW5kbGVyKCd0b2dnbGUuemYudHJpZ2dlcicsIFskKHRoaXMpXSk7XG59KTtcblxuLyoqXG4qIEZpcmVzIG9uY2UgYWZ0ZXIgYWxsIG90aGVyIHNjcmlwdHMgaGF2ZSBsb2FkZWRcbiogQGZ1bmN0aW9uXG4qIEBwcml2YXRlXG4qL1xuJCh3aW5kb3cpLmxvYWQoKCkgPT4ge1xuICBjaGVja0xpc3RlbmVycygpO1xufSk7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXJzKCkge1xuICBldmVudHNMaXN0ZW5lcigpO1xuICByZXNpemVMaXN0ZW5lcigpO1xuICBzY3JvbGxMaXN0ZW5lcigpO1xuICBjbG9zZW1lTGlzdGVuZXIoKTtcbn1cblxuLy8qKioqKioqKiBvbmx5IGZpcmVzIHRoaXMgZnVuY3Rpb24gb25jZSBvbiBsb2FkLCBpZiB0aGVyZSdzIHNvbWV0aGluZyB0byB3YXRjaCAqKioqKioqKlxuZnVuY3Rpb24gY2xvc2VtZUxpc3RlbmVyKHBsdWdpbk5hbWUpIHtcbiAgdmFyIHlldGlCb3hlcyA9ICQoJ1tkYXRhLXlldGktYm94XScpLFxuICAgICAgcGx1Z05hbWVzID0gWydkcm9wZG93bicsICd0b29sdGlwJywgJ3JldmVhbCddO1xuXG4gIGlmKHBsdWdpbk5hbWUpe1xuICAgIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMucHVzaChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsdWdpbk5hbWVbMF0gPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5jb25jYXQocGx1Z2luTmFtZSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbHVnaW4gbmFtZXMgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICB9XG4gIGlmKHlldGlCb3hlcy5sZW5ndGgpe1xuICAgIGxldCBsaXN0ZW5lcnMgPSBwbHVnTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYGNsb3NlbWUuemYuJHtuYW1lfWA7XG4gICAgfSkuam9pbignICcpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihsaXN0ZW5lcnMpLm9uKGxpc3RlbmVycywgZnVuY3Rpb24oZSwgcGx1Z2luSWQpe1xuICAgICAgbGV0IHBsdWdpbiA9IGUubmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgICBsZXQgcGx1Z2lucyA9ICQoYFtkYXRhLSR7cGx1Z2lufV1gKS5ub3QoYFtkYXRhLXlldGktYm94PVwiJHtwbHVnaW5JZH1cIl1gKTtcblxuICAgICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBfdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgX3RoaXMudHJpZ2dlckhhbmRsZXIoJ2Nsb3NlLnpmLnRyaWdnZXInLCBbX3RoaXNdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGRlYm91bmNlKXtcbiAgbGV0IHRpbWVyLFxuICAgICAgJG5vZGVzID0gJCgnW2RhdGEtcmVzaXplXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuemYudHJpZ2dlcicpXG4gICAgLm9uKCdyZXNpemUuemYudHJpZ2dlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgcmVzaXplIGV2ZW50XG4gICAgICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwicmVzaXplXCIpO1xuICAgICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgcmVzaXplIGV2ZW50XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2Nyb2xsTGlzdGVuZXIoZGVib3VuY2Upe1xuICBsZXQgdGltZXIsXG4gICAgICAkbm9kZXMgPSAkKCdbZGF0YS1zY3JvbGxdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgICQod2luZG93KS5vZmYoJ3Njcm9sbC56Zi50cmlnZ2VyJylcbiAgICAub24oJ3Njcm9sbC56Zi50cmlnZ2VyJywgZnVuY3Rpb24oZSl7XG4gICAgICBpZih0aW1lcil7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cblxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSBzY3JvbGwgZXZlbnRcbiAgICAgICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJzY3JvbGxcIik7XG4gICAgICB9LCBkZWJvdW5jZSB8fCAxMCk7Ly9kZWZhdWx0IHRpbWUgdG8gZW1pdCBzY3JvbGwgZXZlbnRcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudHNMaXN0ZW5lcigpIHtcbiAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpeyByZXR1cm4gZmFsc2U7IH1cbiAgbGV0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmVzaXplXSwgW2RhdGEtc2Nyb2xsXSwgW2RhdGEtbXV0YXRlXScpO1xuXG4gIC8vZWxlbWVudCBjYWxsYmFja1xuICB2YXIgbGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiA9IGZ1bmN0aW9uKG11dGF0aW9uUmVjb3Jkc0xpc3QpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuICAgIC8vdHJpZ2dlciB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHR5cGVcbiAgICBzd2l0Y2ggKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpKSB7XG5cbiAgICAgIGNhc2UgXCJyZXNpemVcIiA6XG4gICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXRdKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwic2Nyb2xsXCIgOlxuICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LCB3aW5kb3cucGFnZVlPZmZzZXRdKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBjYXNlIFwibXV0YXRlXCIgOlxuICAgICAgLy8gY29uc29sZS5sb2coJ211dGF0ZScsICR0YXJnZXQpO1xuICAgICAgLy8gJHRhcmdldC50cmlnZ2VySGFuZGxlcignbXV0YXRlLnpmLnRyaWdnZXInKTtcbiAgICAgIC8vXG4gICAgICAvLyAvL21ha2Ugc3VyZSB3ZSBkb24ndCBnZXQgc3R1Y2sgaW4gYW4gaW5maW5pdGUgbG9vcCBmcm9tIHNsb3BweSBjb2RlaW5nXG4gICAgICAvLyBpZiAoJHRhcmdldC5pbmRleCgnW2RhdGEtbXV0YXRlXScpID09ICQoXCJbZGF0YS1tdXRhdGVdXCIpLmxlbmd0aC0xKSB7XG4gICAgICAvLyAgIGRvbU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgfVxuXG4gIGlmKG5vZGVzLmxlbmd0aCl7XG4gICAgLy9mb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gbGlzdGVuIGZvciByZXNpemluZywgc2Nyb2xsaW5nLCAob3IgY29taW5nIHNvb24gbXV0YXRpb24pIGFkZCBhIHNpbmdsZSBvYnNlcnZlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IG5vZGVzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgIGxldCBlbGVtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uKTtcbiAgICAgIGVsZW1lbnRPYnNlcnZlci5vYnNlcnZlKG5vZGVzW2ldLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogZmFsc2UsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOmZhbHNlLCBhdHRyaWJ1dGVGaWx0ZXI6W1wiZGF0YS1ldmVudHNcIl19KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFtQSF1cbi8vIEZvdW5kYXRpb24uQ2hlY2tXYXRjaGVycyA9IGNoZWNrV2F0Y2hlcnM7XG5Gb3VuZGF0aW9uLklIZWFyWW91ID0gY2hlY2tMaXN0ZW5lcnM7XG4vLyBGb3VuZGF0aW9uLklTZWVZb3UgPSBzY3JvbGxMaXN0ZW5lcjtcbi8vIEZvdW5kYXRpb24uSUZlZWxZb3UgPSBjbG9zZW1lTGlzdGVuZXI7XG5cbn0oalF1ZXJ5KTtcblxuLy8gZnVuY3Rpb24gZG9tTXV0YXRpb25PYnNlcnZlcihkZWJvdW5jZSkge1xuLy8gICAvLyAhISEgVGhpcyBpcyBjb21pbmcgc29vbiBhbmQgbmVlZHMgbW9yZSB3b3JrOyBub3QgYWN0aXZlICAhISEgLy9cbi8vICAgdmFyIHRpbWVyLFxuLy8gICBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW11dGF0ZV0nKTtcbi8vICAgLy9cbi8vICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuLy8gICAgIC8vIHZhciBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbi8vICAgICAvLyAgIHZhciBwcmVmaXhlcyA9IFsnV2ViS2l0JywgJ01veicsICdPJywgJ01zJywgJyddO1xuLy8gICAgIC8vICAgZm9yICh2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAvLyAgICAgaWYgKHByZWZpeGVzW2ldICsgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuLy8gICAgIC8vICAgICAgIHJldHVybiB3aW5kb3dbcHJlZml4ZXNbaV0gKyAnTXV0YXRpb25PYnNlcnZlciddO1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gICB9XG4vLyAgICAgLy8gICByZXR1cm4gZmFsc2U7XG4vLyAgICAgLy8gfSgpKTtcbi8vXG4vL1xuLy8gICAgIC8vZm9yIHRoZSBib2R5LCB3ZSBuZWVkIHRvIGxpc3RlbiBmb3IgYWxsIGNoYW5nZXMgZWZmZWN0aW5nIHRoZSBzdHlsZSBhbmQgY2xhc3MgYXR0cmlidXRlc1xuLy8gICAgIHZhciBib2R5T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihib2R5TXV0YXRpb24pO1xuLy8gICAgIGJvZHlPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTp0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6W1wic3R5bGVcIiwgXCJjbGFzc1wiXX0pO1xuLy9cbi8vXG4vLyAgICAgLy9ib2R5IGNhbGxiYWNrXG4vLyAgICAgZnVuY3Rpb24gYm9keU11dGF0aW9uKG11dGF0ZSkge1xuLy8gICAgICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIG11dGF0aW9uIGV2ZW50XG4vLyAgICAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuLy9cbi8vICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgYm9keU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbi8vICAgICAgICAgJCgnW2RhdGEtbXV0YXRlXScpLmF0dHIoJ2RhdGEtZXZlbnRzJyxcIm11dGF0ZVwiKTtcbi8vICAgICAgIH0sIGRlYm91bmNlIHx8IDE1MCk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iLCJqUXVlcnkoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcblxudmFyXHRpc01vYmlsZSA9ICgvaXBob25lfGlwb2R8YW5kcm9pZHxibGFja2JlcnJ5fG9wZXJhfG1pbml8d2luZG93c1xcc2NlfHBhbG18c21hcnRwaG9uZXxpZW1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKSksXG5cdGlzVGFibGV0ID0gKC9pcGFkfGFuZHJvaWR8YW5kcm9pZCAzLjB8eG9vbXxzY2gtaTgwMHxwbGF5Ym9va3x0YWJsZXR8a2luZGxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpKSxcbiAgICB5dF92aWRlbzEgPSBcIkdIeVQxT2pIalVBXCIsXG4gICAgeXRfdmlkZW8yID0gXCJYdUgxRlhOR0h5TVwiLFxuICAgIFxuICAgIHNpdGUgPSB7XG5cblx0aW5pdCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjcGFydGljaXBlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKCB7IHNjcm9sbFRvcDogJCgnI2RvbicpLm9mZnNldCgpLnRvcH0sIDMwMCApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnI2dvLXJvbGUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiAkKCcjcm9sZScpLm9mZnNldCgpLnRvcH0sIDMwMCApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnI2dvLXRlbW9pbnMnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiAkKCcjdGVtb2lucycpLm9mZnNldCgpLnRvcH0sIDMwMCApO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLm1vcmUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmZ1bGwnKS5zaG93KCk7XG4gICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvL1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKCBzaXRlLnJlc2l6ZSApO1xuICAgICAgICBzaXRlLnJlc2l6ZSgpO1xuICAgICAgICBzaXRlLmFuaW1hdGUuaW5pdCgpO1xuICAgICAgICAvL1xuICAgICAgICAkKCcjc2VlSW50cm8nKS5kZWxheSgxMjAwKS5xdWV1ZShmdW5jdGlvbigpeyQodGhpcykuYWRkQ2xhc3MoJ2RvbmUnKX0pO1xuICAgICAgICAvL1ZJREVPXG4gICAgICAgICAgICAkKCcjc2VlSW50cm8nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIEJWX2kgICAgPSAkKCcjdmlkZW8taW50cm8nKS5kYXRhKCd2aWRlJyk7XG4gICAgICAgICAgICAgICAgQlYgICAgICA9IEJWX2kuZ2V0VmlkZW9PYmplY3QoKTtcbiAgICAgICAgICAgICAgICBCVi5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHNpdGUudmlkZW8uc2hvdyh5dF92aWRlbzEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcjc2VlTWludXRlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzaXRlLnZpZGVvLnNob3coeXRfdmlkZW8yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnI3l0LWNsb3NlLCAjeXQtLWNsb3NlLWJ0bicpLmNsaWNrKCBzaXRlLnZpZGVvLmhpZGUgKTtcbiAgICAgICAgICAgIC8vc2l0ZS52aWRlby5zaG93KHl0X3ZpZGVvMSk7XG5cdH0sXG4gICAgICAgIFxuICAgIHZpZGVvIDoge1xuICAgICAgICBzaG93IDogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGFzLXBvcGluJyk7XG4gICAgICAgICAgICAkKCcjcG9waW4nKS5zaG93KCkuZmFkZVRvKDIwMCwgMSk7XG4gICAgICAgICAgICAkKCcjeXQnKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJytpZCsnP2F1dG9wbGF5PXRydWUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnI3BvcGluJykuZmFkZVRvKDMwMCwgMCwgc2l0ZS52aWRlby5yZW1vdmUpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyN5dCcpLmF0dHIoJ3NyYycsICcnKTtcbiAgICAgICAgICAgICQoJyNwb3BpbicpLmNzcygnb3BhY2l0eScsMCkuaGlkZSgpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoYXMtcG9waW4nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgcmVzaXplIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpc01vYmlsZSkgcmV0dXJuO1xuICAgICAgICAkKCcjaW50cm8nKS5jc3MoJ2hlaWdodCcsICQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgfSxcblxuICAgIGFuaW1hdGUgOiB7XG4gICAgICAgIGluaXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsVG9BbmltYXRlID0gJCgnLmFuaW1hdGUnKTtcbiAgICAgICAgICAgICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgICAgICAgICAkd2luZG93Lm9uKCdzY3JvbGwgcmVzaXplJywgc2l0ZS5hbmltYXRlLnVwZGF0ZSk7XG4gICAgICAgICAgICAkd2luZG93LnRyaWdnZXIoJ3Njcm9sbCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCAgICAgICAgICAgID0gJHdpbmRvdy5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICB3aW5kb3dUb3BQb3NpdGlvbiAgICAgICA9ICR3aW5kb3cuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgd2luZG93Qm90dG9tUG9zaXRpb24gICAgPSAod2luZG93VG9wUG9zaXRpb24gKyB3aW5kb3dIZWlnaHQpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZURlbGF5ICAgICAgICAgICAgID0gMC4yNTtcblxuICAgICAgICAgICAgJC5lYWNoKGVsVG9BbmltYXRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgICAgICAgICAgICAgICAgICA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGVsSGVpZ2h0ICAgICAgICAgICAgPSBlbC5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICBlbFRvcFBvc2l0aW9uICAgICAgID0gZWwub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICBlbEJvdHRvbVBvc2l0aW9uICAgID0gKGVsVG9wUG9zaXRpb24gKyBlbEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKChlbEJvdHRvbVBvc2l0aW9uID49IHdpbmRvd1RvcFBvc2l0aW9uKSAmJlxuICAgICAgICAgICAgICAgIGlmICgoZWxUb3BQb3NpdGlvbiA8PSB3aW5kb3dCb3R0b21Qb3NpdGlvbi13aW5kb3dIZWlnaHQqYWN0aXZlRGVsYXkpKSBlbC5hZGRDbGFzcygnZG9uZScpO1xuLy8gICAgICAgICAgICAgICAgZWxzZSBlbC5yZW1vdmVDbGFzcygnZG9uZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cblxufTtcblxuJChmdW5jdGlvbigpIHtcblx0c2l0ZS5pbml0KCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
