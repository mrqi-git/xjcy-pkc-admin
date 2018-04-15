webpackJsonp([53],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_95f83350_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_95f83350_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_95f83350_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_95f83350_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\radio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-95f83350", Component.options)
  } else {
    hotAPI.reload("data-v-95f83350", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            single: false,
            phone: 'apple',
            animal: '爪哇犀牛',
            disabledSingle: true,
            disabledGroup: '爪哇犀牛',
            vertical: 'apple',
            button1: '北京',
            button2: '北京',
            button3: '北京',
            button4: '北京',
            button5: '北京',
            button6: '北京',
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
            columns2: [{
                title: '事件名',
                key: 'prop1',
                width: '10%'
            }, {
                title: '说明',
                key: 'prop2'
            }, {
                title: '返回值',
                key: 'prop3',
                width: '20%'
            }],
            data1: [{
                prop1: 'value',
                prop2: '只在单独使用时有效。可以使用 v-model 双向绑定数据',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'label',
                prop2: '只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目',
                prop3: 'String | Number',
                prop4: '-'
            }, {
                prop1: 'disabled',
                prop2: '是否禁用当前项',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'size',
                prop2: '单选框的尺寸，可选值为 large、small、default 或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'true-value',
                prop2: '选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用',
                prop3: 'String, Number, Boolean ',
                prop4: 'true'
            }, {
                prop1: 'false-value',
                prop2: '没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用',
                prop3: 'String, Number, Boolean ',
                prop4: 'false'
            }],
            data2: [{
                prop1: 'on-change',
                prop2: '在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发',
                prop3: '...'
            }],
            data3: [{
                prop1: 'value',
                prop2: '指定当前选中的项目数据。可以使用 v-model 双向绑定数据',
                prop3: 'String | Number',
                prop4: '-'
            }, {
                prop1: 'type',
                prop2: '可选值为 button 或不填，为 button 时使用按钮样式',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'size',
                prop2: '尺寸，可选值为large、small、default或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'vertical',
                prop2: '是否垂直排列，按钮样式下无效',
                prop3: 'Boolean',
                prop4: 'false'
            }],
            data4: [{
                prop1: 'on-change',
                prop2: '在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发',
                prop3: '...'
            }]
        };
    }
};

/***/ }),

/***/ 973:
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
      href: "https://www.iviewui.com/components/radio",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网radio")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("概述")]), _vm._v(" "), _c("p", [_vm._v("基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("示例")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 单独使用")], 1), _vm._v(" "), _c("p", [_vm._v("使用 v-model 可以双向绑定数据。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Radio", {
    model: {
      value: _vm.single,
      callback: function callback($$v) {
        _vm.single = $$v;
      },
      expression: "single"
    }
  }, [_vm._v("Radio")]), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.single))]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 组合使用")], 1), _vm._v(" "), _c("p", [_vm._v("使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("RadioGroup", {
    model: {
      value: _vm.phone,
      callback: function callback($$v) {
        _vm.phone = $$v;
      },
      expression: "phone"
    }
  }, [_c("Radio", { attrs: { label: "apple" } }, [_c("Icon", { attrs: { type: "social-apple" } }), _vm._v(" "), _c("span", [_vm._v("Apple")])], 1), _vm._v(" "), _c("Radio", { attrs: { label: "android" } }, [_c("Icon", { attrs: { type: "social-android" } }), _vm._v(" "), _c("span", [_vm._v("Android")])], 1), _vm._v(" "), _c("Radio", { attrs: { label: "windows" } }, [_c("Icon", { attrs: { type: "social-windows" } }), _vm._v(" "), _c("span", [_vm._v("Windows")])], 1)], 1), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.phone))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("RadioGroup", {
    model: {
      value: _vm.animal,
      callback: function callback($$v) {
        _vm.animal = $$v;
      },
      expression: "animal"
    }
  }, [_c("Radio", { attrs: { label: "金斑蝶" } }), _vm._v(" "), _c("Radio", { attrs: { label: "爪哇犀牛" } }), _vm._v(" "), _c("Radio", { attrs: { label: "印度黑羚" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.animal))]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 不可用")], 1), _vm._v(" "), _c("p", [_vm._v("通过设置disabled属性来禁用单选框。")]), _vm._v(" "), _c("Radio", {
    attrs: { disabled: "" },
    model: {
      value: _vm.disabledSingle,
      callback: function callback($$v) {
        _vm.disabledSingle = $$v;
      },
      expression: "disabledSingle"
    }
  }, [_vm._v("Radio")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.disabledSingle))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("RadioGroup", {
    model: {
      value: _vm.disabledGroup,
      callback: function callback($$v) {
        _vm.disabledGroup = $$v;
      },
      expression: "disabledGroup"
    }
  }, [_c("Radio", { attrs: { label: "金斑蝶", disabled: "" } }), _vm._v(" "), _c("Radio", { attrs: { label: "爪哇犀牛" } }), _vm._v(" "), _c("Radio", { attrs: { label: "印度黑羚" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.disabledGroup))]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 垂直")], 1), _vm._v(" "), _c("p", [_vm._v("设置属性 vertical 可以垂直显示，按钮样式下无效。")]), _vm._v(" "), _c("RadioGroup", {
    attrs: { vertical: "" },
    model: {
      value: _vm.vertical,
      callback: function callback($$v) {
        _vm.vertical = $$v;
      },
      expression: "vertical"
    }
  }, [_c("Radio", { attrs: { label: "apple" } }, [_c("Icon", { attrs: { type: "social-apple" } }), _vm._v(" "), _c("span", [_vm._v("Apple")])], 1), _vm._v(" "), _c("Radio", { attrs: { label: "android" } }, [_c("Icon", { attrs: { type: "social-android" } }), _vm._v(" "), _c("span", [_vm._v("Android")])], 1), _vm._v(" "), _c("Radio", { attrs: { label: "windows" } }, [_c("Icon", { attrs: { type: "social-windows" } }), _vm._v(" "), _c("span", [_vm._v("Windows")])], 1)], 1), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 按钮样式")], 1), _vm._v(" "), _c("p", [_vm._v("组合使用时可以设置属性type为 button 来应用按钮的样式。")]), _vm._v(" "), _c("RadioGroup", {
    attrs: { type: "button" },
    model: {
      value: _vm.button1,
      callback: function callback($$v) {
        _vm.button1 = $$v;
      },
      expression: "button1"
    }
  }, [_c("Radio", { attrs: { label: "北京" } }), _vm._v(" "), _c("Radio", { attrs: { label: "上海" } }), _vm._v(" "), _c("Radio", { attrs: { label: "深圳" } }), _vm._v(" "), _c("Radio", { attrs: { label: "杭州" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.button1))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("RadioGroup", {
    attrs: { type: "button" },
    model: {
      value: _vm.button2,
      callback: function callback($$v) {
        _vm.button2 = $$v;
      },
      expression: "button2"
    }
  }, [_c("Radio", { attrs: { label: "北京" } }), _vm._v(" "), _c("Radio", { attrs: { label: "上海", disabled: "" } }), _vm._v(" "), _c("Radio", { attrs: { label: "深圳" } }), _vm._v(" "), _c("Radio", { attrs: { label: "杭州" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.button2))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("RadioGroup", {
    attrs: { type: "button" },
    model: {
      value: _vm.button3,
      callback: function callback($$v) {
        _vm.button3 = $$v;
      },
      expression: "button3"
    }
  }, [_c("Radio", { attrs: { label: "北京", disabled: "" } }), _vm._v(" "), _c("Radio", { attrs: { label: "上海", disabled: "" } }), _vm._v(" "), _c("Radio", { attrs: { label: "深圳", disabled: "" } }), _vm._v(" "), _c("Radio", { attrs: { label: "杭州", disabled: "" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.button3))]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 尺寸")], 1), _vm._v(" "), _c("p", [_vm._v("通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。")]), _vm._v(" "), _c("RadioGroup", {
    attrs: { type: "button", size: "large" },
    model: {
      value: _vm.button4,
      callback: function callback($$v) {
        _vm.button4 = $$v;
      },
      expression: "button4"
    }
  }, [_c("Radio", { attrs: { label: "北京" } }), _vm._v(" "), _c("Radio", { attrs: { label: "上海" } }), _vm._v(" "), _c("Radio", { attrs: { label: "深圳" } }), _vm._v(" "), _c("Radio", { attrs: { label: "杭州" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.button4))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("RadioGroup", {
    attrs: { type: "button" },
    model: {
      value: _vm.button5,
      callback: function callback($$v) {
        _vm.button5 = $$v;
      },
      expression: "button5"
    }
  }, [_c("Radio", { attrs: { label: "北京" } }), _vm._v(" "), _c("Radio", { attrs: { label: "上海" } }), _vm._v(" "), _c("Radio", { attrs: { label: "深圳" } }), _vm._v(" "), _c("Radio", { attrs: { label: "杭州" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.button5))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("RadioGroup", {
    attrs: { type: "button", size: "small" },
    model: {
      value: _vm.button6,
      callback: function callback($$v) {
        _vm.button6 = $$v;
      },
      expression: "button6"
    }
  }, [_c("Radio", { attrs: { label: "北京" } }), _vm._v(" "), _c("Radio", { attrs: { label: "上海" } }), _vm._v(" "), _c("Radio", { attrs: { label: "深圳" } }), _vm._v(" "), _c("Radio", { attrs: { label: "杭州" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.button6))])], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("API")]), _vm._v(" "), _c("p", [_vm._v("Radio props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data1 }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Radio events")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns2, data: _vm.data2 }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("RadioGroup props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data3 }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("RadioGroup events")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns2, data: _vm.data4 }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-95f83350", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=53.chunk.js.map