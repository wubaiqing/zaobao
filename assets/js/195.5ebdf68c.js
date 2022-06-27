(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{627:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_2019-06-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-17"}},[t._v("#")]),t._v(" 2019.06.17")]),t._v(" "),a("p",[t._v("[文章] Recompose 是一个 React 实用库，用于函数组件和高阶组件。把它想象成 React 的 lodash："),a("a",{attrs:{href:"https://www.jianshu.com/p/7f619be29e52",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/7f619be29e52"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[类库] 一个集成了下拉刷新、上拉加载、无限滚动加载的 Vue 组件："),a("a",{attrs:{href:"https://github.com/stackjie/vue-pull-to/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/stackjie/vue-pull-to/blob/master/README.zh-CN.md"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[类库] Swell 是专门为手机浏览器设计的 Web Terminal 工具，自带键盘，可扩展为命令联想功能："),a("a",{attrs:{href:"https://github.com/wcchoi/swell.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wcchoi/swell.sh"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[资源] 《前端架构：从入门到微前端》："),a("a",{attrs:{href:"https://github.com/phodal/aofe.images",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/phodal/aofe.images"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"配图-vue-pull-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配图-vue-pull-to"}},[t._v("#")]),t._v(" 配图 - vue-pull-to")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.40zhe.com/2D842C3D-26C4-4C07-8DB6-6304C5805DC9.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"配图-swell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配图-swell"}},[t._v("#")]),t._v(" 配图 - Swell")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/wcchoi/swell.sh/raw/master/demo.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"配图-从入门到微前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配图-从入门到微前端"}},[t._v("#")]),t._v(" 配图 - 从入门到微前端")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.40zhe.com/58D43E04-0425-4FA5-93B2-12937046C5DE.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"示例-recompose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-recompose"}},[t._v("#")]),t._v(" 示例 - Recompose")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("const counterReducer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count, action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  switch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action.type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" INCREMENT:\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" count + "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" DECREMENT:\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" count - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  default:\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" count\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconst enhance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" withReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'counter'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dispatch'")]),t._v(", counterReducer, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconst Counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" enhance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" counter, dispatch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    Count: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type: INCREMENT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Increment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type: DECREMENT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Decrement"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"今日图-一个简短的项目背后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#今日图-一个简短的项目背后"}},[t._v("#")]),t._v(" 今日图 - 一个简短的项目背后")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qn.40zhe.com/16b5de0f120736b6",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);