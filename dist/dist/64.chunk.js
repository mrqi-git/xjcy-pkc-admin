webpackJsonp([64],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_788f38ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_788f38ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_788f38ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_788f38ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-788f38ac", Component.options)
  } else {
    hotAPI.reload("data-v-788f38ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            example1: '<Icon type="checkmark" />',
            example2: '<i class="ivu-icon ivu-icon-checkmark"></i>',
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
                prop1: 'type',
                prop2: '图标的名称',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'size',
                prop2: '图标的大小，单位是 px',
                prop3: 'Number | String',
                prop4: '-'
            }, {
                prop1: 'color',
                prop2: '图标的颜色',
                prop3: 'String',
                prop4: '-'
            }]
        };
    }
};

/***/ }),

/***/ 969:
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
      href: "https://www.iviewui.com/components/icon",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网icon")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("概述")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" iView 的图标使用开源项目"), _c("a", { attrs: { href: "http://ionicons.com/", target: "_blank" } }, [_c("i", { staticClass: "ivu-icon ivu-icon-ionic" }), _vm._v(" ionicons ")])], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。")], 1)]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("如何使用")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 使用"), _c("Icon"), _vm._v("组件，指定图标对应的type属性，示例代码："), _c("Input", {
    attrs: { placeholder: "Enter something..." },
    model: {
      value: _vm.example1,
      callback: function callback($$v) {
        _vm.example1 = $$v;
      },
      expression: "example1"
    }
  })], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 渲染后为："), _c("Input", {
    attrs: { placeholder: "Enter something..." },
    model: {
      value: _vm.example2,
      callback: function callback($$v) {
        _vm.example2 = $$v;
      },
      expression: "example2"
    }
  })], 1)]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("API")]), _vm._v(" "), _c("p", [_vm._v("Icon props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data1 }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-788f38ac", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=64.chunk.js.map