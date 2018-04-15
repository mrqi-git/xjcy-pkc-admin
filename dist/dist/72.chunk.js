webpackJsonp([72],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1db9dd76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1db9dd76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1db9dd76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1db9dd76_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\checkbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1db9dd76", Component.options)
  } else {
    hotAPI.reload("data-v-1db9dd76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            single: false,
            social: ['facebook', 'github'],
            fruit: ['苹果'],
            disabledSingle: true,
            disabledGroup: ['苹果'],
            checked: true,
            disabled: false,
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜'],
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
                prop2: '只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中',
                prop3: 'String | Number | Boolean',
                prop4: '-'
            }, {
                prop1: 'disabled',
                prop2: '是否禁用当前项',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'indeterminate',
                prop2: '设置 indeterminate 状态，只负责样式控制',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'size',
                prop2: '多选框的尺寸，可选值为 large、small、default 或者不设置',
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
                prop2: '只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发',
                prop3: 'true | false'
            }],
            data3: [{
                prop1: 'value',
                prop2: '指定选中项目的集合，可以使用 v-model 双向绑定数据',
                prop3: 'Array',
                prop4: '[]'
            }, {
                prop1: 'size',
                prop2: '多选框组的尺寸，可选值为 large、small、default 或者不设置',
                prop3: 'String',
                prop4: '-'
            }],
            data4: [{
                prop1: 'on-change',
                prop2: '在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发',
                prop3: '...'
            }]
        };
    },

    methods: {
        handleCheckAll: function handleCheckAll() {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
            } else {
                this.checkAllGroup = [];
            }
        },
        checkAllGroupChange: function checkAllGroupChange(data) {
            if (data.length === 3) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
        }
    }
};

/***/ }),

/***/ 974:
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
      href: "https://www.iviewui.com/components/checkbox",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网checkbox")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("概述")]), _vm._v(" "), _c("p", [_vm._v("基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("示例")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 单独使用")], 1), _vm._v(" "), _c("p", [_vm._v("使用 v-model 可以双向绑定数据。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Checkbox", {
    model: {
      value: _vm.single,
      callback: function callback($$v) {
        _vm.single = $$v;
      },
      expression: "single"
    }
  }, [_vm._v("Checkbox")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.single))]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 组合使用")], 1), _vm._v(" "), _c("p", [_vm._v("使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("CheckboxGroup", {
    model: {
      value: _vm.social,
      callback: function callback($$v) {
        _vm.social = $$v;
      },
      expression: "social"
    }
  }, [_c("Checkbox", { attrs: { label: "twitter" } }, [_c("Icon", { attrs: { type: "social-twitter" } }), _vm._v(" "), _c("span", [_vm._v("Twitter")])], 1), _vm._v(" "), _c("Checkbox", { attrs: { label: "facebook" } }, [_c("Icon", { attrs: { type: "social-facebook" } }), _vm._v(" "), _c("span", [_vm._v("Facebook")])], 1), _vm._v(" "), _c("Checkbox", { attrs: { label: "github" } }, [_c("Icon", { attrs: { type: "social-github" } }), _vm._v(" "), _c("span", [_vm._v("Github")])], 1), _vm._v(" "), _c("Checkbox", { attrs: { label: "snapchat" } }, [_c("Icon", { attrs: { type: "social-snapchat" } }), _vm._v(" "), _c("span", [_vm._v("Snapchat")])], 1)], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.social))]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("CheckboxGroup", {
    model: {
      value: _vm.fruit,
      callback: function callback($$v) {
        _vm.fruit = $$v;
      },
      expression: "fruit"
    }
  }, [_c("Checkbox", { attrs: { label: "香蕉" } }), _vm._v(" "), _c("Checkbox", { attrs: { label: "苹果" } }), _vm._v(" "), _c("Checkbox", { attrs: { label: "西瓜" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.fruit))]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 不可用")], 1), _vm._v(" "), _c("p", [_vm._v("通过设置disabled属性来禁用多选框。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Checkbox", {
    attrs: { disabled: "" },
    model: {
      value: _vm.disabledSingle,
      callback: function callback($$v) {
        _vm.disabledSingle = $$v;
      },
      expression: "disabledSingle"
    }
  }, [_vm._v("Checkbox")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.disabledSingle))]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("CheckboxGroup", {
    model: {
      value: _vm.disabledGroup,
      callback: function callback($$v) {
        _vm.disabledGroup = $$v;
      },
      expression: "disabledGroup"
    }
  }, [_c("Checkbox", { attrs: { label: "香蕉", disabled: "" } }), _vm._v(" "), _c("Checkbox", { attrs: { label: "苹果", disabled: "" } }), _vm._v(" "), _c("Checkbox", { attrs: { label: "西瓜" } })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.disabledGroup))]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 与其它组件通信")], 1), _vm._v(" "), _c("p", [_vm._v("通过设置disabled属性来禁用多选框。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Checkbox", {
    attrs: { disabled: _vm.disabled },
    model: {
      value: _vm.checked,
      callback: function callback($$v) {
        _vm.checked = $$v;
      },
      expression: "checked"
    }
  }, [_vm.checked ? _c("span", [_vm._v("Checked")]) : _c("span", [_vm._v("Unchecked")]), _vm._v("\n               - \n              "), !_vm.disabled ? _c("span", [_vm._v("Usable")]) : _c("span", [_vm._v("Disabled")])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", { staticClass: "helpFont" }, [_vm._v(":" + _vm._s(_vm.checked))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Button", {
    attrs: { type: "primary" },
    on: {
      click: function click($event) {
        _vm.checked = !_vm.checked;
      }
    }
  }, [!_vm.checked ? _c("span", [_vm._v("Checked")]) : _c("span", [_vm._v("Unchecked")])]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary" },
    on: {
      click: function click($event) {
        _vm.disabled = !_vm.disabled;
      }
    }
  }, [_vm.disabled ? _c("span", [_vm._v("Usable")]) : _c("span", [_vm._v("Disabled")])]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 全选 ")], 1), _vm._v(" "), _c("p", [_vm._v("在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      "border-bottom": "1px solid #e9e9e9",
      "padding-bottom": "6px",
      "margin-bottom": "6px"
    }
  }, [_c("Checkbox", {
    attrs: {
      indeterminate: _vm.indeterminate,
      value: _vm.checkAll
    },
    nativeOn: {
      click: function click($event) {
        $event.preventDefault();
        _vm.handleCheckAll($event);
      }
    }
  }, [_vm._v("全选")])], 1), _vm._v(" "), _c("CheckboxGroup", {
    on: { "on-change": _vm.checkAllGroupChange },
    model: {
      value: _vm.checkAllGroup,
      callback: function callback($$v) {
        _vm.checkAllGroup = $$v;
      },
      expression: "checkAllGroup"
    }
  }, [_c("Checkbox", { attrs: { label: "香蕉" } }), _vm._v(" "), _c("Checkbox", { attrs: { label: "苹果" } }), _vm._v(" "), _c("Checkbox", { attrs: { label: "西瓜" } })], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("API")]), _vm._v(" "), _c("p", [_vm._v("Checkbox props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data1 }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Checkbox events")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns2, data: _vm.data2 }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("CheckboxGroup props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data3 }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("CheckboxGroup events")]), _vm._v(" "), _c("Table", {
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
    require("vue-hot-reload-api").rerender("data-v-1db9dd76", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=72.chunk.js.map