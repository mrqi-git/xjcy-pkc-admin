webpackJsonp([21],{

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_vue__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_64eb0dc0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_vue__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_64eb0dc0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_64eb0dc0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(964)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_color_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_64eb0dc0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_color_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\color.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64eb0dc0", Component.options)
  } else {
    hotAPI.reload("data-v-64eb0dc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {};

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(965);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("6aa5e143", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64eb0dc0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./color.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64eb0dc0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./color.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.font1{\r\n\tcolor:#ffffff;\r\n\tfont-size:18px;\n}\n.font2{\r\n\tcolor:#ffffff;\r\n\topacity: .7;\n}\n.font3{\r\n\tcolor:#657180;\r\n\tfont-size:18px;\n}\n.font4{\r\n\tcolor:#657180;\r\n\topacity: .7;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 966:
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
      href: "https://www.iviewui.com/components/color",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网color")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("概述")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" iView 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。")], 1)]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("主色")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" iView 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。")], 1), _vm._v(" "), _c("Row", [_c("Col", { staticClass: "margin-right-10", attrs: { span: "7" } }, [_c("Card", { staticStyle: { "background-color": "#2d8cf0" } }, [_c("div", { staticClass: "font1" }, [_vm._v("Primary")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#2d8cf0")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "7" } }, [_c("Card", { staticStyle: { "background-color": "#5cadff" } }, [_c("div", { staticClass: "font1" }, [_vm._v("Light Primary")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#5cadff")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "7" } }, [_c("Card", { staticStyle: { "background-color": "#2b85e4" } }, [_c("div", { staticClass: "font1" }, [_vm._v("Dark Primary")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#2b85e4")])])], 1)], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("辅助色")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。")], 1), _vm._v(" "), _c("Row", [_c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#2d8cf0" } }, [_c("div", { staticClass: "font1" }, [_vm._v("Info")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#2d8cf0")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#19be6b" } }, [_c("div", { staticClass: "font1" }, [_vm._v("Success")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#19be6b")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#ff9900" } }, [_c("div", { staticClass: "font1" }, [_vm._v("Warning")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#ff9900")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#ed3f14" } }, [_c("div", { staticClass: "font1" }, [_vm._v("Error")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#ed3f14")])])], 1)], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("中性色")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。")], 1), _vm._v(" "), _c("Row", [_c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#1c2438" } }, [_c("div", { staticClass: "font1" }, [_vm._v("标题 Title")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#1c2438")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#495060" } }, [_c("div", { staticClass: "font1" }, [_vm._v("正文 Content")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#495060")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#80848f" } }, [_c("div", { staticClass: "font1" }, [_vm._v("辅助/图标 Sub Color")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#80848f")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#bbbec4" } }, [_c("div", { staticClass: "font1" }, [_vm._v("失效 Disabled")]), _vm._v(" "), _c("div", { staticClass: "font2" }, [_vm._v("#bbbec4")])])], 1)], 1), _vm._v(" "), _c("Row", { staticClass: "margin-top-10" }, [_c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#dddee1" } }, [_c("div", { staticClass: "font3" }, [_vm._v("边框 Border")]), _vm._v(" "), _c("div", { staticClass: "font4" }, [_vm._v("#dddee1")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#e9eaec" } }, [_c("div", { staticClass: "font3" }, [_vm._v("分割线 Divider")]), _vm._v(" "), _c("div", { staticClass: "font4" }, [_vm._v("#e9eaec")])])], 1), _vm._v(" "), _c("Col", { staticClass: "margin-right-10", attrs: { span: "5" } }, [_c("Card", { staticStyle: { "background-color": "#f8f8f9" } }, [_c("div", { staticClass: "font3" }, [_vm._v("背景 Background")]), _vm._v(" "), _c("div", { staticClass: "font4" }, [_vm._v("#f8f8f9")])])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-64eb0dc0", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=21.chunk.js.map