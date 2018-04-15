webpackJsonp([62],{

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_02951c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_02951c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_02951c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_layout_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_02951c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_layout_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02951c1d", Component.options)
  } else {
    hotAPI.reload("data-v-02951c1d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {};

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("Alert", { attrs: { "show-icon": "" } }, [_c("a", {
    attrs: {
      href: "https://www.iviewui.com/components/layout",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网layout")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("Layout 布局")]), _vm._v(" "), _c("p", [_vm._v("协助进行页面级整体布局。")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("设计规则")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 尺寸：一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v("顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 顶部导航高度的范围计算公式为：48+8n。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 侧边导航宽度的范围计算公式：200+8n。")], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 交互")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 一级导航和末级的导航需要在可视化的层面被强调出来；")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 当前项应该在呈现上优先级最高；")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。")], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 视觉：导航样式上需要根据信息层级合理的选择样式")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 大色块强调：建议用于底色为深色系时，当前页面父级的导航项。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 高亮火柴棍：当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 字体高亮变色：从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 字体放大：12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。")], 1)]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("组件概述")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" Layout：布局容器，其下可嵌套 HeaderSiderContentFooter或 Layout 本身，可以放在任何父容器中。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。")], 1), _vm._v(" "), _c("Alert", { attrs: { "show-icon": "" } }, [_vm._v("注意：采用 flex 布局实现，请注意"), _c("a", {
    attrs: {
      href: "https://caniuse.com/#search=flex",
      target: "_blank"
    }
  }, [_vm._v("浏览器兼容性")]), _vm._v("问题。")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-02951c1d", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=62.chunk.js.map