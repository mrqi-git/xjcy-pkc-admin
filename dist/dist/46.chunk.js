webpackJsonp([46],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf679b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf679b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf679b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue__);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf679b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\switch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cf679b2", Component.options)
  } else {
    hotAPI.reload("data-v-4cf679b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            switch1: false,
            disabled: true
        };
    },

    methods: {
        change: function change(status) {
            this.$Message.info('开关状态：' + status);
        }
    }
};

/***/ }),

/***/ 975:
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
      href: "https://www.iviewui.com/components/switch",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网switch")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("概述")]), _vm._v(" "), _c("p", [_vm._v("在两种状态间切换时用到的开关选择器。")]), _vm._v(" "), _c("Alert", { attrs: { type: "warning", "show-icon": "" } }, [_vm._v("注意：没有使用 iview-loader 时，必须使用 i-switch 标签。")])], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("示例")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 基本")], 1), _vm._v(" "), _c("p", [_vm._v("基本用法，状态切换时会触发事件。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("i-switch", {
    on: { "on-change": _vm.change },
    model: {
      value: _vm.switch1,
      callback: function callback($$v) {
        _vm.switch1 = $$v;
      },
      expression: "switch1"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 尺寸")], 1), _vm._v(" "), _c("p", [_vm._v("设置size为 large 或 small 使用大号和小号的开关。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("i-switch", { attrs: { size: "large" } }), _vm._v(" "), _c("i-switch"), _vm._v(" "), _c("i-switch", { attrs: { size: "small" } }), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 文字和图标")], 1), _vm._v(" "), _c("p", [_vm._v("自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("i-switch", [_c("span", { attrs: { slot: "open" }, slot: "open" }, [_vm._v("开")]), _vm._v(" "), _c("span", { attrs: { slot: "close" }, slot: "close" }, [_vm._v("关")])]), _vm._v(" "), _c("i-switch", [_c("Icon", {
    attrs: { slot: "open", type: "android-done" },
    slot: "open"
  }), _vm._v(" "), _c("Icon", {
    attrs: { slot: "close", type: "android-close" },
    slot: "close"
  })], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("i-switch", { attrs: { size: "large" } }, [_c("span", { attrs: { slot: "open" }, slot: "open" }, [_vm._v("开启")]), _vm._v(" "), _c("span", { attrs: { slot: "close" }, slot: "close" }, [_vm._v("关闭")])]), _vm._v(" "), _c("i-switch", { attrs: { size: "large" } }, [_c("span", { attrs: { slot: "open" }, slot: "open" }, [_vm._v("ON")]), _vm._v(" "), _c("span", { attrs: { slot: "close" }, slot: "close" }, [_vm._v("OFF")])]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 不可用")], 1), _vm._v(" "), _c("p", [_vm._v("禁用开关。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("i-switch", { attrs: { disabled: _vm.disabled } }), _vm._v(" "), _c("Button", {
    attrs: { type: "primary" },
    on: {
      click: function click($event) {
        _vm.disabled = !_vm.disabled;
      }
    }
  }, [_vm._v("Toggle Disabled")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-4cf679b2", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=46.chunk.js.map