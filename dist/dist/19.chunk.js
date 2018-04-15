webpackJsonp([19],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5496aaa7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5496aaa7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5496aaa7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(970)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5496aaa7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5496aaa7", Component.options)
  } else {
    hotAPI.reload("data-v-5496aaa7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            select1: 'http',
            select2: 'com',
            select3: 'day',
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
                width: '10%'
            }],
            columns3: [{
                title: '名称',
                key: 'prop1',
                width: '10%'
            }, {
                title: '说明',
                key: 'prop2'
            }],
            columns4: [{
                title: '方法名',
                key: 'prop1',
                width: '10%'
            }, {
                title: '说明',
                key: 'prop2'
            }, {
                title: '参数',
                key: 'prop3',
                width: '10%'
            }],
            data1: [{
                prop1: 'type',
                prop2: '输入框类型，可选值为 text、password、textarea、url、email、date',
                prop3: 'String',
                prop4: 'text'
            }, {
                prop1: 'value',
                prop2: '绑定的值，可使用 v-model 双向绑定',
                prop3: 'String | Number',
                prop4: '空'
            }, {
                prop1: 'size',
                prop2: '输入框尺寸，可选值为large、small、default或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'placeholder',
                prop2: '占位文本',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'disabled',
                prop2: '设置输入框为禁用状态',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'readonly',
                prop2: '设置输入框为只读',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'maxlength',
                prop2: '最大输入长度',
                prop3: 'Number',
                prop4: '-'
            }, {
                prop1: 'icon',
                prop2: '输入框尾部图标，仅在 text 类型下有效',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'rows',
                prop2: '文本域默认行数，仅在 textarea 类型下有效',
                prop3: 'Number',
                prop4: '2'
            }, {
                prop1: 'autosize',
                prop2: '自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }',
                prop3: 'Boolean | Object',
                prop4: 'false'
            }, {
                prop1: 'number',
                prop2: '将用户的输入转换为 Number 类型',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'autofocus',
                prop2: '自动获取焦点',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'autocomplete',
                prop2: '原生的自动完成功能，可选值为 off 和 on',
                prop3: 'String',
                prop4: 'off'
            }, {
                prop1: 'element-id',
                prop2: '给表单元素设置 id，详见 Form 用法。',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'spellcheck',
                prop2: '原生的 spellcheck 属性',
                prop3: 'Boolean',
                prop4: 'false'
            }],
            data2: [{
                prop1: 'on-enter',
                prop2: '按下回车键时触发',
                prop3: '无'
            }, {
                prop1: 'on-click',
                prop2: '设置 icon 属性后，点击图标时触发',
                prop3: '无'
            }, {
                prop1: 'on-change',
                prop2: '数据改变时触发',
                prop3: 'event'
            }, {
                prop1: 'on-focus',
                prop2: '输入框聚焦时触发',
                prop3: '无'
            }, {
                prop1: 'on-blur',
                prop2: '输入框失去焦点时触发',
                prop3: '无'
            }, {
                prop1: 'on-keyup',
                prop2: '原生的 keyup 事件',
                prop3: 'event'
            }, {
                prop1: 'on-keydown',
                prop2: '原生的 keydown 事件',
                prop3: 'event'
            }, {
                prop1: 'on-keypress',
                prop2: '原生的 keypress 事件',
                prop3: 'event'
            }],
            data3: [{
                prop1: 'prepend',
                prop2: '前置内容，仅在 text 类型下有效'
            }, {
                prop1: 'append',
                prop2: '后置内容，仅在 text 类型下有效'
            }],
            data4: [{
                prop1: 'focus',
                prop2: '手动聚焦输入框',
                prop3: '无'
            }]
        };
    }
};

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(971);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("3a4d4332", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5496aaa7\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5496aaa7\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n/**\n* 自定义基础样式\n*/\n.float_right {\n  float: right;\n}\n.clear {\n  clear: both;\n}\n", ""]);

// exports


/***/ }),

/***/ 972:
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
      href: "https://www.iviewui.com/components/input",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网input")])]), _vm._v(" "), _c("Card", { attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("基础")]), _vm._v(" "), _c("Input", {
    staticStyle: { width: "300px" },
    attrs: { placeholder: "Enter something..." },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 基本用法，可以使用 v-model 实现数据的双向绑定。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 可以直接设置 style 来改变输入框的宽度，默认 100%。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("尺寸")]), _vm._v(" "), _c("Input", {
    attrs: { size: "large", placeholder: "large size" },
    model: {
      value: _vm.value1,
      callback: function callback($$v) {
        _vm.value1 = $$v;
      },
      expression: "value1"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Input", {
    attrs: { placeholder: "default size" },
    model: {
      value: _vm.value2,
      callback: function callback($$v) {
        _vm.value2 = $$v;
      },
      expression: "value2"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Input", {
    attrs: { size: "small", placeholder: "small size" },
    model: {
      value: _vm.value3,
      callback: function callback($$v) {
        _vm.value3 = $$v;
      },
      expression: "value3"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 输入框有三种尺寸：大、默认（中）、小")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("带Icon的输入框")]), _vm._v(" "), _c("Input", {
    staticStyle: { width: "200px" },
    attrs: {
      icon: "ios-clock-outline",
      placeholder: "Enter something..."
    },
    model: {
      value: _vm.value4,
      callback: function callback($$v) {
        _vm.value4 = $$v;
      },
      expression: "value4"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过 icon 属性可以在输入框右边加一个图标。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 点击图标，会触发 on-click 事件。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("文本域")]), _vm._v(" "), _c("Input", {
    attrs: { type: "textarea", placeholder: "Enter something..." },
    model: {
      value: _vm.value5,
      callback: function callback($$v) {
        _vm.value5 = $$v;
      },
      expression: "value5"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Input", {
    attrs: {
      type: "textarea",
      rows: 4,
      placeholder: "Enter something..."
    },
    model: {
      value: _vm.value6,
      callback: function callback($$v) {
        _vm.value6 = $$v;
      },
      expression: "value6"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置属性 type 为 textarea 来使用文本域，用于多行输入。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置属性 rows 控制文本域默认显示的行数。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("适应文本高度的文本域")]), _vm._v(" "), _c("Input", {
    attrs: {
      type: "textarea",
      autosize: true,
      placeholder: "Enter something..."
    },
    model: {
      value: _vm.value7,
      callback: function callback($$v) {
        _vm.value7 = $$v;
      },
      expression: "value7"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Input", {
    attrs: {
      type: "textarea",
      autosize: { minRows: 2, maxRows: 5 },
      placeholder: "Enter something..."
    },
    model: {
      value: _vm.value8,
      callback: function callback($$v) {
        _vm.value8 = $$v;
      },
      expression: "value8"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 设置属性 autosize，文本域会自动适应高度的变化。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" autosize也可以设定为一个对象，指定最小行数和最大行数。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("禁用状态")]), _vm._v(" "), _c("Input", {
    attrs: { disabled: "", placeholder: "Enter something..." },
    model: {
      value: _vm.value9,
      callback: function callback($$v) {
        _vm.value9 = $$v;
      },
      expression: "value9"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Input", {
    attrs: {
      disabled: "",
      type: "textarea",
      placeholder: "Enter something..."
    },
    model: {
      value: _vm.value10,
      callback: function callback($$v) {
        _vm.value10 = $$v;
      },
      expression: "value10"
    }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过添加disabled属性可设置为不可用状态。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("复合型输入框")]), _vm._v(" "), _c("Input", {
    model: {
      value: _vm.value11,
      callback: function callback($$v) {
        _vm.value11 = $$v;
      },
      expression: "value11"
    }
  }, [_c("span", { attrs: { slot: "prepend" }, slot: "prepend" }, [_vm._v("http://")]), _vm._v(" "), _c("span", { attrs: { slot: "append" }, slot: "append" }, [_vm._v(".com")])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("Input", {
    model: {
      value: _vm.value12,
      callback: function callback($$v) {
        _vm.value12 = $$v;
      },
      expression: "value12"
    }
  }, [_c("Select", {
    staticStyle: { width: "80px" },
    attrs: { slot: "prepend" },
    slot: "prepend",
    model: {
      value: _vm.select1,
      callback: function callback($$v) {
        _vm.select1 = $$v;
      },
      expression: "select1"
    }
  }, [_c("Option", { attrs: { value: "http" } }, [_vm._v("http://")]), _vm._v(" "), _c("Option", { attrs: { value: "https" } }, [_vm._v("https://")])], 1), _vm._v(" "), _c("Select", {
    staticStyle: { width: "70px" },
    attrs: { slot: "append" },
    slot: "append",
    model: {
      value: _vm.select2,
      callback: function callback($$v) {
        _vm.select2 = $$v;
      },
      expression: "select2"
    }
  }, [_c("Option", { attrs: { value: "com" } }, [_vm._v(".com")]), _vm._v(" "), _c("Option", { attrs: { value: "org" } }, [_vm._v(".org")]), _vm._v(" "), _c("Option", { attrs: { value: "io" } }, [_vm._v(".io")])], 1)], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Input", {
    model: {
      value: _vm.value13,
      callback: function callback($$v) {
        _vm.value13 = $$v;
      },
      expression: "value13"
    }
  }, [_c("Select", {
    staticStyle: { width: "80px" },
    attrs: { slot: "prepend" },
    slot: "prepend",
    model: {
      value: _vm.select3,
      callback: function callback($$v) {
        _vm.select3 = $$v;
      },
      expression: "select3"
    }
  }, [_c("Option", { attrs: { value: "day" } }, [_vm._v("Day")]), _vm._v(" "), _c("Option", { attrs: { value: "month" } }, [_vm._v("Month")])], 1), _vm._v(" "), _c("Button", {
    attrs: { slot: "append", icon: "ios-search" },
    slot: "append"
  })], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过前置和后置的 slot 可以实现复合型的输入框。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("API")]), _vm._v(" "), _c("p", [_vm._v("Input props")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data1 }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_vm._v("Input events")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns2, data: _vm.data2 }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_vm._v("Input slot")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns3, data: _vm.data3 }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_vm._v("Input methods")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns4, data: _vm.data4 }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-5496aaa7", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=19.chunk.js.map