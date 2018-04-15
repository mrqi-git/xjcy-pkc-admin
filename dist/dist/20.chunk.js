webpackJsonp([20],{

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_90ff4e0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grid_vue__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_90ff4e0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_90ff4e0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grid_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(960)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_90ff4e0e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grid_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90ff4e0e", Component.options)
  } else {
    hotAPI.reload("data-v-90ff4e0e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.default = {
				data: function data() {
								return {
												columns1: [{
																title: '属性',
																key: 'prop1',
																width: '10%'
												}, {
																title: '说明',
																key: 'prop2'
												}, {
																title: '类型',
																key: 'prop3',
																width: '20%'
												}, {
																title: '默认值',
																key: 'prop4',
																width: '10%'
												}],
												data1: [{
																prop1: 'gutter',
																prop2: '栅格间距，单位 px，左右平分',
																prop3: 'Number',
																prop4: '0'
												}, {
																prop1: 'type',
																prop2: '布局模式，可选值为flex或不选，在现代浏览器下有效',
																prop3: 'String',
																prop4: '-'
												}, {
																prop1: 'align',
																prop2: 'flex 布局下的垂直对齐方式，可选值为top、middle、bottom',
																prop3: 'String',
																prop4: '-'
												}, {
																prop1: 'justify',
																prop2: 'flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between',
																prop3: 'String',
																prop4: '-'
												}, {
																prop1: 'class-name',
																prop2: '自定义的class名称',
																prop3: 'String',
																prop4: '-'
												}],
												data2: [{
																prop1: 'span',
																prop2: '栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none',
																prop3: 'Number | String',
																prop4: '-'
												}, {
																prop1: 'order',
																prop2: '栅格的顺序，在flex布局模式下有效',
																prop3: 'Number | String',
																prop4: '-'
												}, {
																prop1: 'offset',
																prop2: '栅格左侧的间隔格数，间隔内不可以有栅格',
																prop3: 'Number | String',
																prop4: '-'
												}, {
																prop1: 'push',
																prop2: '栅格向右移动格数',
																prop3: 'Number | String',
																prop4: '-'
												}, {
																prop1: 'pull',
																prop2: '栅格向左移动格数',
																prop3: 'Number | String',
																prop4: '-'
												}, {
																prop1: 'class-name',
																prop2: '自定义的class名称',
																prop3: 'String',
																prop4: '-'
												}, {
																prop1: 'xs',
																prop2: '<768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
																prop3: 'Number | Object',
																prop4: '-'
												}, {
																prop1: 'sm',
																prop2: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
																prop3: 'Number | Object',
																prop4: '-'
												}, {
																prop1: 'md',
																prop2: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
																prop3: 'Number | Object',
																prop4: '-'
												}, {
																prop1: 'lg',
																prop2: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
																prop3: 'Number | Object',
																prop4: '-'
												}]
								};
				}
};

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(961);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("3bb7aba7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90ff4e0e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./grid.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90ff4e0e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./grid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.gridstyle1{\r\n\tbackground:#f2f2f2;\r\n\tpadding:5px 0;\n}\n.gridstyle2{\r\n\tbackground:#48b3e9;\r\n\tpadding:10px 0;\r\n\ttext-align: center;\n}\n.gridstyle3{\r\n\tbackground:#18a2e6;\r\n\tpadding:10px 0;\r\n\ttext-align: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 962:
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
      href: "https://www.iviewui.com/components/grid",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网grid")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("概述")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。\n我们定义了两个概念，行row和列col，具体使用方法如下：")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 使用row在水平方向创建一行")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 将一组col插入在row中")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 在每个col中，键入自己的内容")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 通过设置col的span参数，指定跨越的范围，其范围是1到24")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "log-in" } }), _vm._v(" 每个row中的col总和应该为24")], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Alert", { attrs: { "show-icon": "" } }, [_vm._v("注意：非 template/render 模式下，需使用 i-col。")])], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("基础用法")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 水平排列的布局")], 1), _vm._v(" "), _c("p", [_vm._v("col必须放在row里面。")]), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", { attrs: { span: "12", "class-name": "gridstyle2" } }, [_vm._v("col-12")]), _vm._v(" "), _c("Col", { attrs: { span: "12", "class-name": "gridstyle3" } }, [_vm._v("col-12")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", { attrs: { span: "8", "class-name": "gridstyle2" } }, [_vm._v("col-8")]), _vm._v(" "), _c("Col", { attrs: { span: "8", "class-name": "gridstyle3" } }, [_vm._v("col-8")]), _vm._v(" "), _c("Col", { attrs: { span: "8", "class-name": "gridstyle2" } }, [_vm._v("col-8")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", { attrs: { span: "6", "class-name": "gridstyle2" } }, [_vm._v("col-6")]), _vm._v(" "), _c("Col", { attrs: { span: "6", "class-name": "gridstyle3" } }, [_vm._v("col-6")]), _vm._v(" "), _c("Col", { attrs: { span: "6", "class-name": "gridstyle2" } }, [_vm._v("col-6")]), _vm._v(" "), _c("Col", { attrs: { span: "6", "class-name": "gridstyle3" } }, [_vm._v("col-6")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 区块间隔")], 1), _vm._v(" "), _c("p", [_vm._v("通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。")]), _vm._v(" "), _c("Row", { attrs: { gutter: 16, "class-name": "gridstyle1" } }, [_c("Col", { attrs: { span: "6", "class-name": "gridstyle2" } }, [_c("div", [_vm._v("col-6")])]), _vm._v(" "), _c("Col", { attrs: { span: "6", "class-name": "gridstyle3" } }, [_c("div", [_vm._v("col-6")])]), _vm._v(" "), _c("Col", { attrs: { span: "6", "class-name": "gridstyle2" } }, [_c("div", [_vm._v("col-6")])]), _vm._v(" "), _c("Col", { attrs: { span: "6", "class-name": "gridstyle3" } }, [_c("div", [_vm._v("col-6")])])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 栅格顺序(Flex)")], 1), _vm._v(" "), _c("p", [_vm._v("通过 Flex 布局的order来改变栅格的顺序。")]), _vm._v(" "), _c("Row", { attrs: { type: "flex", "class-name": "gridstyle1" } }, [_c("Col", {
    attrs: { span: "6", order: "4", "class-name": "gridstyle3" }
  }, [_vm._v("1 | order-4")]), _vm._v(" "), _c("Col", {
    attrs: { span: "6", order: "3", "class-name": "gridstyle2" }
  }, [_vm._v("2 | order-3")]), _vm._v(" "), _c("Col", {
    attrs: { span: "6", order: "2", "class-name": "gridstyle3" }
  }, [_vm._v("3 | order-2")]), _vm._v(" "), _c("Col", {
    attrs: { span: "6", order: "1", "class-name": "gridstyle2" }
  }, [_vm._v("4 | order-1")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 栅格排序")], 1), _vm._v(" "), _c("p", [_vm._v("通过设置push和pull来改变栅格的顺序。")]), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", {
    attrs: { span: "18", push: "6", "class-name": "gridstyle2" }
  }, [_vm._v("col-18 | push-6")]), _vm._v(" "), _c("Col", {
    attrs: { span: "6", pull: "18", "class-name": "gridstyle3" }
  }, [_vm._v("col-6 | pull-18")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 左右偏移")], 1), _vm._v(" "), _c("p", [_vm._v("通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。")]), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", { attrs: { span: "8", "class-name": "gridstyle2" } }, [_vm._v("col-8")]), _vm._v(" "), _c("Col", {
    attrs: { span: "8", offset: "8", "class-name": "gridstyle3" }
  }, [_vm._v("col-8 | offset-8")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", {
    attrs: { span: "6", offset: "8", "class-name": "gridstyle2" }
  }, [_vm._v("col-6 | offset-8")]), _vm._v(" "), _c("Col", {
    attrs: { span: "6", offset: "4", "class-name": "gridstyle3" }
  }, [_vm._v("col-6 | offset-4")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", {
    attrs: { span: "12", offset: "8", "class-name": "gridstyle2" }
  }, [_vm._v("col-12 | offset-8")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" Flex布局")], 1), _vm._v(" "), _c("p", [_vm._v("通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。")]), _vm._v(" "), _c("p", [_vm._v("子元素向左排列")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "start",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素向右排列")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "end",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素居中排列")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "center",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素等宽排列")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "space-between",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素分散排列")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "space-around",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" Flex对齐")], 1), _vm._v(" "), _c("p", [_vm._v("通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。")]), _vm._v(" "), _c("p", [_vm._v("顶部对齐")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "center",
      align: "top",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_c("p", { staticStyle: { height: "80px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_c("p", { staticStyle: { height: "30px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_c("p", { staticStyle: { height: "100px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_c("p", { staticStyle: { height: "60px" } }, [_vm._v("col-4")])])], 1), _vm._v(" "), _c("p", [_vm._v("底部对齐")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "center",
      align: "bottom",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_c("p", { staticStyle: { height: "80px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_c("p", { staticStyle: { height: "30px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_c("p", { staticStyle: { height: "100px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_c("p", { staticStyle: { height: "60px" } }, [_vm._v("col-4")])])], 1), _vm._v(" "), _c("p", [_vm._v("居中对齐")]), _vm._v(" "), _c("Row", {
    attrs: {
      type: "flex",
      justify: "center",
      align: "middle",
      "class-name": "gridstyle1"
    }
  }, [_c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_c("p", { staticStyle: { height: "80px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_c("p", { staticStyle: { height: "30px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle2" } }, [_c("p", { staticStyle: { height: "100px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4", "class-name": "gridstyle3" } }, [_c("p", { staticStyle: { height: "60px" } }, [_vm._v("col-4")])])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 响应式布局")], 1), _vm._v(" "), _c("p", [_vm._v("参照 Bootstrap 的 "), _c("a", {
    attrs: {
      href: "http://getbootstrap.com/css/#grid-media-queries",
      target: "_blank"
    }
  }, [_vm._v("响应式设计")]), _vm._v("，预设四个响应尺寸：xs sm md lg，详见 API。")]), _vm._v(" "), _c("p", [_vm._v("调整浏览器尺寸来查看效果")]), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", {
    attrs: {
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
      "class-name": "gridstyle2"
    }
  }, [_vm._v("Col")]), _vm._v(" "), _c("Col", {
    attrs: {
      xs: 20,
      sm: 16,
      md: 12,
      lg: 8,
      "class-name": "gridstyle3"
    }
  }, [_vm._v("Col")]), _vm._v(" "), _c("Col", {
    attrs: {
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
      "class-name": "gridstyle2"
    }
  }, [_vm._v("Col")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 其它属性的响应式 ")], 1), _vm._v(" "), _c("p", [_vm._v("span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。")]), _vm._v(" "), _c("p", [_vm._v('其中 :xs="6" 相当于 :xs="{ span: 6 }"。')]), _vm._v(" "), _c("Row", { attrs: { "class-name": "gridstyle1" } }, [_c("Col", {
    attrs: {
      xs: { span: 5, offset: 1 },
      lg: { span: 6, offset: 2 },
      "class-name": "gridstyle2"
    }
  }, [_vm._v("Col")]), _vm._v(" "), _c("Col", {
    attrs: {
      xs: { span: 11, offset: 1 },
      lg: { span: 6, offset: 2 },
      "class-name": "gridstyle3"
    }
  }, [_vm._v("Col")]), _vm._v(" "), _c("Col", {
    attrs: {
      xs: { span: 5, offset: 1 },
      lg: { span: 6, offset: 2 },
      "class-name": "gridstyle2"
    }
  }, [_vm._v("Col")])], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("API")]), _vm._v(" "), _c("p", [_vm._v("Row props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data1 }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Row props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data2 }
  })], 1), _vm._v(" "), _c("BackTop")], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-90ff4e0e", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=20.chunk.js.map