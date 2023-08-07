"use strict"; (self.webpackChunk = self.webpackChunk || []).push([[4547], { 3905: (e, n, t) => { t.d(n, { Zo: () => s, kt: () => d }); var r = t(67294); function a(e, n, t) { return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e } function o(e, n) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); n && (r = r.filter((function (n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), t.push.apply(t, r) } return t } function i(e) { for (var n = 1; n < arguments.length; n++) { var t = null != arguments[n] ? arguments[n] : {}; n % 2 ? o(Object(t), !0).forEach((function (n) { a(e, n, t[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function (n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n)) })) } return e } function l(e, n) { if (null == e) return {}; var t, r, a = function (e, n) { if (null == e) return {}; var t, r, a = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)t = o[r], n.indexOf(t) >= 0 || (a[t] = e[t]); return a }(e, n); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (r = 0; r < o.length; r++)t = o[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]) } return a } var p = r.createContext({}), u = function (e) { var n = r.useContext(p), t = n; return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t }, s = function (e) { var n = u(e.components); return r.createElement(p.Provider, { value: n }, e.children) }, c = { inlineCode: "code", wrapper: function (e) { var n = e.children; return r.createElement(r.Fragment, {}, n) } }, m = r.forwardRef((function (e, n) { var t = e.components, a = e.mdxType, o = e.originalType, p = e.parentName, s = l(e, ["components", "mdxType", "originalType", "parentName"]), m = u(t), d = a, f = m["".concat(p, ".").concat(d)] || m[d] || c[d] || o; return t ? r.createElement(f, i(i({ ref: n }, s), {}, { components: t })) : r.createElement(f, i({ ref: n }, s)) })); function d(e, n) { var t = arguments, a = n && n.mdxType; if ("string" == typeof e || a) { var o = t.length, i = new Array(o); i[0] = m; var l = {}; for (var p in n) hasOwnProperty.call(n, p) && (l[p] = n[p]); l.originalType = e, l.mdxType = "string" == typeof e ? e : a, i[1] = l; for (var u = 2; u < o; u++)i[u] = t[u]; return r.createElement.apply(null, i) } return r.createElement.apply(null, t) } m.displayName = "MDXCreateElement" }, 85162: (e, n, t) => { t.d(n, { Z: () => i }); var r = t(67294), a = t(86010); const o = "tabItem_Ymn6"; function i(e) { var n = e.children, t = e.hidden, i = e.className; return r.createElement("div", { role: "tabpanel", className: (0, a.Z)(o, i), hidden: t }, n) } }, 65488: (e, n, t) => { t.d(n, { Z: () => d }); var r = t(87462), a = t(67294), o = t(86010), i = t(72389), l = t(67392), p = t(7094), u = t(12466); const s = "tabList__CuJ", c = "tabItem_LNqP"; function m(e) { var n, t, i = e.lazy, m = e.block, d = e.defaultValue, f = e.values, g = e.groupId, k = e.className, b = a.Children.map(e.children, (function (e) { if ((0, a.isValidElement)(e) && "value" in e.props) return e; throw new Error("Docusaurus error: Bad <Tabs> child <" + ("string" == typeof e.type ? e.type : e.type.name) + '>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.') })), v = null != f ? f : b.map((function (e) { var n = e.props; return { value: n.value, label: n.label, attributes: n.attributes } })), y = (0, l.l)(v, (function (e, n) { return e.value === n.value })); if (y.length > 0) throw new Error('Docusaurus error: Duplicate values "' + y.map((function (e) { return e.value })).join(", ") + '" found in <Tabs>. Every value needs to be unique.'); var h = null === d ? d : null != (n = null != d ? d : null == (t = b.find((function (e) { return e.props.default }))) ? void 0 : t.props.value) ? n : b[0].props.value; if (null !== h && !v.some((function (e) { return e.value === h }))) throw new Error('Docusaurus error: The <Tabs> has a defaultValue "' + h + '" but none of its children has the corresponding value. Available values are: ' + v.map((function (e) { return e.value })).join(", ") + ". If you intend to show no default tab, use defaultValue={null} instead."); var N = (0, p.U)(), j = N.tabGroupChoices, P = N.setTabGroupChoices, O = (0, a.useState)(h), I = O[0], x = O[1], w = [], E = (0, u.o5)().blockElementScrollPositionUntilNextRender; if (null != g) { var S = j[g]; null != S && S !== I && v.some((function (e) { return e.value === S })) && x(S) } var R = function (e) { var n = e.currentTarget, t = w.indexOf(n), r = v[t].value; r !== I && (E(n), x(r), null != g && P(g, String(r))) }, A = function (e) { var n, t = null; switch (e.key) { case "ArrowRight": var r, a = w.indexOf(e.currentTarget) + 1; t = null != (r = w[a]) ? r : w[0]; break; case "ArrowLeft": var o, i = w.indexOf(e.currentTarget) - 1; t = null != (o = w[i]) ? o : w[w.length - 1] }null == (n = t) || n.focus() }; return a.createElement("div", { className: (0, o.Z)("tabs-container", s) }, a.createElement("ul", { role: "tablist", "aria-orientation": "horizontal", className: (0, o.Z)("tabs", { "tabs--block": m }, k) }, v.map((function (e) { var n = e.value, t = e.label, i = e.attributes; return a.createElement("li", (0, r.Z)({ role: "tab", tabIndex: I === n ? 0 : -1, "aria-selected": I === n, key: n, ref: function (e) { return w.push(e) }, onKeyDown: A, onFocus: R, onClick: R }, i, { className: (0, o.Z)("tabs__item", c, null == i ? void 0 : i.className, { "tabs__item--active": I === n }) }), null != t ? t : n) }))), i ? (0, a.cloneElement)(b.filter((function (e) { return e.props.value === I }))[0], { className: "margin-top--md" }) : a.createElement("div", { className: "margin-top--md" }, b.map((function (e, n) { return (0, a.cloneElement)(e, { key: n, hidden: e.props.value !== I }) })))) } function d(e) { var n = (0, i.Z)(); return a.createElement(m, (0, r.Z)({ key: String(n) }, e)) } }, 14959: (e, n, t) => { t(67294), t(39960), t(52263); var r = "4.0.0".split(".");[r[0], r[1]].join(".") }, 89323: (e, n, t) => { t.r(n), t.d(n, { assets: () => s, contentTitle: () => p, default: () => d, frontMatter: () => l, metadata: () => u, toc: () => c }); var r = t(87462), a = t(63366), o = (t(67294), t(3905)), i = (t(14959), t(65488), t(85162), t(90814), ["components"]), l = { id: "quick-start", title: "\u5feb\u901f\u5f00\u59cb", description: "\u5feb\u901f\u5f00\u59cbKnife4j" }, p = void 0, u = { unversionedId: "quick-start/quick-start", id: "quick-start/quick-start", title: "\u5feb\u901f\u5f00\u59cb", description: "\u5feb\u901f\u5f00\u59cbKnife4j", source: "@site/docs/quick-start/index.mdx", sourceDirName: "quick-start", slug: "/quick-start/", permalink: "/docs/quick-start/", draft: !1, tags: [], version: "current", lastUpdatedBy: "xiaoyumin", lastUpdatedAt: 1679663936, formattedLastUpdatedAt: "2023\u5e743\u670824\u65e5", frontMatter: { id: "quick-start", title: "\u5feb\u901f\u5f00\u59cb", description: "\u5feb\u901f\u5f00\u59cbKnife4j" }, sidebar: "docs", next: { title: "\u5982\u4f55\u8d21\u732e\u6587\u6863", permalink: "/docs/community/joinus" } }, s = {}, c = [{ value: "Spring Boot 3", id: "spring-boot-3", level: 2 }, { value: "Spring Boot 2", id: "spring-boot-2", level: 2 }, { value: "OpenAPI2", id: "openapi2", level: 3 }, { value: "OpenAPI3", id: "openapi3", level: 3 }], m = { toc: c }; function d(e) { var n = e.components, t = (0, a.Z)(e, i); return (0, o.kt)("wrapper", (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h2", { id: "spring-boot-3" }, "Spring Boot 3"), (0, o.kt)("admonition", { type: "tip" }, (0, o.kt)("ul", { parentName: "admonition" }, (0, o.kt)("li", { parentName: "ul" }, "Spring Boot 3 \u53ea\u652f\u6301OpenAPI3\u89c4\u8303"), (0, o.kt)("li", { parentName: "ul" }, "Knife4j\u63d0\u4f9b\u7684starter\u5df2\u7ecf\u5f15\u7528springdoc-openapi\u7684jar\uff0c\u5f00\u53d1\u8005\u9700\u6ce8\u610f\u907f\u514djar\u5305\u51b2\u7a81"), (0, o.kt)("li", { parentName: "ul" }, "JDK\u7248\u672c\u5fc5\u987b >= 17"), (0, o.kt)("li", { parentName: "ul" }, "\u8be6\u7ec6Demo\u8bf7\u53c2\u8003", (0, o.kt)("a", { parentName: "li", href: "https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-spring-boot3-demo", target: "_blank", rel: "noopener" }, "knife4j-spring-boot3-demo")))), (0, o.kt)("p", null, "\u9996\u5148\uff0c\u5f15\u7528Knife4j\u7684starter,Maven\u5750\u6807\u5982\u4e0b\uff1a"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-xml" }, "<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>\n    <version>4.2.0</version>\n</dependency>\n\n")), (0, o.kt)("p", null, "\u5f15\u5165\u4e4b\u540e\uff0c\u5176\u4f59\u7684\u914d\u7f6e\uff0c\u5f00\u53d1\u8005\u5373\u53ef\u5b8c\u5168\u53c2\u8003", (0, o.kt)("a", { parentName: "p", href: "https://springdoc.org/", target: "_blank", rel: "noopener" }, "springdoc-openapi"), "\u7684\u9879\u76ee\u8bf4\u660e\uff0cKnife4j\u53ea\u63d0\u4f9b\u4e86\u589e\u5f3a\u90e8\u5206\uff0c\u5982\u679c\u8981\u542f\u7528Knife4j\u7684\u589e\u5f3a\u529f\u80fd\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u5f00\u542f"), (0, o.kt)("p", null, "\u90e8\u5206\u914d\u7f6e\u5982\u4e0b:"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-yml" }, "# springdoc-openapi\u9879\u76ee\u914d\u7f6e\nspringdoc:\n  swagger-ui:\n    path: /swagger-ui.html\n    tags-sorter: alpha\n    operations-sorter: alpha\n  api-docs:\n    path: /v3/api-docs\n  group-configs:\n    - group: 'default'\n      paths-to-match: '/**'\n      packages-to-scan: com.xiaominfo.knife4j.demo.web\n# knife4j\u7684\u589e\u5f3a\u914d\u7f6e\uff0c\u4e0d\u9700\u8981\u589e\u5f3a\u53ef\u4ee5\u4e0d\u914d\nknife4j:\n  enable: true\n  setting:\n    language: zh_cn\n")), (0, o.kt)("p", null, "Knife4j\u66f4\u591a\u589e\u5f3a\u914d\u7f6e\u660e\u7ec6\uff0c\u8bf7\u79fb\u6b65", (0, o.kt)("a", { parentName: "p", href: "features/enhance", target: null, rel: null }, "\u6587\u6863"), "\u8fdb\u884c\u67e5\u770b"), (0, o.kt)("p", null, " \u6700\u540e\uff0c\u4f7f\u7528OpenAPI3\u7684\u89c4\u8303\u6ce8\u89e3\uff0c\u6ce8\u91ca\u5404\u4e2aSpring\u7684REST\u63a5\u53e3\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-javascript" }, '@RestController\n@RequestMapping("body")\n@Tag(name = "body\u53c2\u6570")\npublic class BodyController {\n\n   @Operation(summary = "\u666e\u901abody\u8bf7\u6c42")\n   @PostMapping("/body")\n   public ResponseEntity<FileResp> body(@RequestBody FileResp fileResp){\n       return ResponseEntity.ok(fileResp);\n   }\n\n   @Operation(summary = "\u666e\u901abody\u8bf7\u6c42+Param+Header+Path")\n   @Parameters({\n           @Parameter(name = "id",description = "\u6587\u4ef6id",in = ParameterIn.PATH),\n           @Parameter(name = "token",description = "\u8bf7\u6c42token",required = true,in = ParameterIn.HEADER),\n           @Parameter(name = "name",description = "\u6587\u4ef6\u540d\u79f0",required = true,in=ParameterIn.QUERY)\n   })\n   @PostMapping("/bodyParamHeaderPath/{id}")\n   public ResponseEntity<FileResp> bodyParamHeaderPath(@PathVariable("id") String id,@RequestHeader("token") String token, @RequestParam("name")String name,@RequestBody FileResp fileResp){\n       fileResp.setName(fileResp.getName()+",receiveName:"+name+",token:"+token+",pathID:"+id);\n       return ResponseEntity.ok(fileResp);\n   }\n}\n\n')), (0, o.kt)("p", null, "\u6700\u540e\uff0c\u8bbf\u95eeKnife4j\u7684\u6587\u6863\u5730\u5740\uff1a", (0, o.kt)("inlineCode", { parentName: "p" }, "http://ip:port/doc.html"), "\u5373\u53ef\u67e5\u770b\u6587\u6863"), (0, o.kt)("h2", { id: "spring-boot-2" }, "Spring Boot 2"), (0, o.kt)("admonition", { type: "tip" }, (0, o.kt)("ul", { parentName: "admonition" }, (0, o.kt)("li", { parentName: "ul" }, "Spring Boot \u7248\u672c\u5efa\u8bae 2.4.0~3.0.0\u4e4b\u95f4"), (0, o.kt)("li", { parentName: "ul" }, "Spring Boot \u7248\u672c < 2.4 \u7248\u672c\u5219\u5efa\u8bae\u9009\u62e9Knife4j 4.0\u4e4b\u524d\u7684\u7248\u672c"), (0, o.kt)("li", { parentName: "ul" }, "Spring Boot 2 + OpenAPI2 demo:", (0, o.kt)("a", { parentName: "li", href: "https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-spring-boot27-demo", target: "_blank", rel: "noopener" }, "knife4j-spring-boot27-demo")), (0, o.kt)("li", { parentName: "ul" }, "Spring Boot 2 + OpenAPI3 demo:", (0, o.kt)("a", { parentName: "li", href: "https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-springdoc-openapi-demo", target: "_blank", rel: "noopener" }, "knife4j-springdoc-openapi-demo ")))), (0, o.kt)("h3", { id: "openapi2" }, "OpenAPI2"), (0, o.kt)("p", null, "OpenAPI2(Swagger)\u89c4\u8303\u662fKnife4j\u4e4b\u524d\u4e00\u76f4\u63d0\u4f9b\u652f\u6301\u7684\u7248\u672c\uff0c\u5e95\u5c42\u4f9d\u8d56\u6846\u67b6\u4e3aSpringfox,\u6b64\u6b21\u57284.0\u7248\u672c\u5f00\u59cb"), (0, o.kt)("p", null, "Knife4j\u6709\u4e86\u65b0\u7684\u53d8\u5316\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u70b9\uff1a"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Springfox\u7248\u672c\u9009\u62e9\u7684\u4f9d\u7136\u662f", (0, o.kt)("strong", { parentName: "li" }, "2.10.5"), "\u7248\u672c\uff0c\u800c\u5e76\u975espringfox\u6700\u65b03.0.0\u7248\u672c"), (0, o.kt)("li", { parentName: "ul" }, "\u4e0d\u652f\u6301\u4ee5Springfox\u6846\u67b6\u4e3a\u57fa\u7840\u7684OpenAPI3\u89c4\u8303,\u653e\u5f03Springfox\u9879\u76ee\u7684\u540e\u7eed\u7248\u672c\u9002\u914d\u652f\u6301\u5de5\u4f5c"), (0, o.kt)("li", { parentName: "ul" }, "Spring Boot \u7248\u672c\u5efa\u8bae 2.4.0~3.0.0\u4e4b\u95f4")), (0, o.kt)("p", null, "\u53ef\u4ee5\u4f7f\u7528 ", (0, o.kt)("inlineCode", { parentName: "p" }, "knife4j-openapi2-spring-boot-starter"), ",maven \u5750\u6807\u5982\u4e0b\uff1a"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-xml" }, "<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-openapi2-spring-boot-starter</artifactId>\n    <version>4.2.0</version>\n</dependency>\n")), (0, o.kt)("p", null, "\u914d\u7f6eyml\u5c5e\u6027\uff0c\u5982\u4e0b\uff1a"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-yml" }, 'knife4j:\n  enable: true\n  openapi:\n    title: Knife4j\u5b98\u65b9\u6587\u6863\n    description: "`\u6211\u662f\u6d4b\u8bd5`,**\u4f60\u77e5\u9053\u5417**\n    # aaa"\n    email: xiaoymin@foxmail.com\n    concat: \u516b\u4e00\u83dc\u5200\n    url: https://docs.xiaominfo.com\n    version: v4.0\n    license: Apache 2.0\n    license-url: https://stackoverflow.com/\n    terms-of-service-url: https://stackoverflow.com/\n    group:\n      test1:\n        group-name: \u5206\u7ec4\u540d\u79f0\n        api-rule: package\n        api-rule-resources:\n          - com.knife4j.demo.new3\n')), (0, o.kt)("p", null, "\u6700\u540e\uff0c\u8bbf\u95eeKnife4j\u7684\u6587\u6863\u5730\u5740\uff1a", (0, o.kt)("inlineCode", { parentName: "p" }, "http://ip:port/doc.html"), "\u5373\u53ef\u67e5\u770b\u6587\u6863"), (0, o.kt)("h3", { id: "openapi3" }, "OpenAPI3"), (0, o.kt)("p", null, "OpenAPI3\u7684\u89c4\u8303\uff0c\u76ee\u524d\u9488\u5bf9Java\u7684Spring Boot\u9879\u76ee\uff0c\u4e3b\u8981\u652f\u6301\u7684\u67092\u4e2a\u7248\u672c"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "springfox 3.0.0\uff1a"), " \u540c\u65f6\u517c\u5bb9OpenAPI2\u4ee5\u53caOpenAPI3\uff0c\u4f46\u662f\u505c\u66f4\u5f88\u4e45\u4e86"), (0, o.kt)("li", { parentName: "ul" }, (0, o.kt)("strong", { parentName: "li" }, "springdoc-openapi\uff1a"), " \u517c\u5bb9OpenAPI3\u89c4\u8303\uff0c\u66f4\u65b0\u901f\u5ea6\u9891\u7e41")), (0, o.kt)("p", null, "Knife4j\u5728\u53ea\u6709\u7684OpenAPI3\u89c4\u8303\u4e2d\uff0c\u5e95\u5c42\u57fa\u7840\u6846\u67b6\u9009\u62e9springdoc-openapi\u9879\u76ee"), (0, o.kt)("p", null, (0, o.kt)("strong", { parentName: "p" }, "\u9488\u5bf9Springfox3.0.0\u7248\u672c\u4f1a\u653e\u5f03\u3002")), (0, o.kt)("p", null, "\u5efa\u8bae\u5f00\u53d1\u8005\u5982\u679c\u4f7f\u7528OpenAPI3\u89c4\u8303\u7684\u8bdd\uff0c\u4e5f\u5c3d\u5feb\u8fc1\u79fb\u8fc7\u6765\u3002"), (0, o.kt)("p", null, "\u53ef\u4ee5\u4f7f\u7528 ", (0, o.kt)("inlineCode", { parentName: "p" }, "knife4j-openapi3-spring-boot-starter"), ",maven \u5750\u6807\u5982\u4e0b\uff1a"), (0, o.kt)("pre", null, (0, o.kt)("code", { parentName: "pre", className: "language-xml" }, "<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-openapi3-spring-boot-starter</artifactId>\n    <version>4.2.0</version>\n</dependency>\n\n")), (0, o.kt)("p", null, "\u5f15\u5165jar\u5305\u540e\uff0c\u540c\u4e0a\u9762\u7684Spring Boot 3\u7248\u672c\u4f7f\u7528\u65b9\u5f0f\u4e00\u6837\uff0c\u8fdb\u884c\u914d\u7f6e\u5373\u53ef\u3002")) } d.isMDXComponent = !0 } }]);