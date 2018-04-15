webpackJsonp([76],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03970425_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03970425_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03970425_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_03970425_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03970425", Component.options)
  } else {
    hotAPI.reload("data-v-03970425", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 532:
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
            columns2: [{
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
                prop2: '按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'size',
                prop2: '按钮大小，可选值为large、small、default或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'shape',
                prop2: '按钮形状，可选值为circle或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'long',
                prop2: '开启后，按钮的长度为 100%',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'html-type',
                prop2: '设置button原生的type，可选值为button、submit、reset',
                prop3: 'String',
                prop4: 'button'
            }, {
                prop1: 'disabled',
                prop2: '设置按钮为禁用状态',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'loading',
                prop2: '设置按钮为加载中状态',
                prop3: 'Boolean',
                prop4: 'false'
            }, {
                prop1: 'icon',
                prop2: '设置按钮的图标类型',
                prop3: 'String',
                prop4: '-'
            }],
            data2: [{
                prop1: 'size',
                prop2: '按钮组合大小，可选值为large、small、default或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'shape',
                prop2: '按钮组合形状，可选值为circle或者不设置',
                prop3: 'String',
                prop4: '-'
            }, {
                prop1: 'vertical',
                prop2: '是否纵向排列按钮组',
                prop3: 'Boolean',
                prop4: 'false'
            }]
        };
    }
};

/***/ }),

/***/ 968:
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
      href: "https://www.iviewui.com/components/button",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网button")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("按钮类型")]), _vm._v(" "), _c("Button", [_vm._v("Default")]), _vm._v(" "), _c("Button", { attrs: { type: "primary" } }, [_vm._v("Primary")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Ghost")]), _vm._v(" "), _c("Button", { attrs: { type: "dashed" } }, [_vm._v("Dashed")]), _vm._v(" "), _c("Button", { attrs: { type: "text" } }, [_vm._v("Text")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", { attrs: { type: "info" } }, [_vm._v("Info")]), _vm._v(" "), _c("Button", { attrs: { type: "success" } }, [_vm._v("Success")]), _vm._v(" "), _c("Button", { attrs: { type: "warning" } }, [_vm._v("Warning")]), _vm._v(" "), _c("Button", { attrs: { type: "error" } }, [_vm._v("Error")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("按钮类型")]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary", shape: "circle", icon: "ios-search" }
  }), _vm._v(" "), _c("Button", { attrs: { type: "primary", icon: "ios-search" } }, [_vm._v("Search")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", shape: "circle", icon: "ios-search" } }, [_vm._v("Search")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", shape: "circle" } }, [_vm._v("Circle")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", {
    attrs: { type: "ghost", shape: "circle", icon: "ios-search" }
  }), _vm._v(" "), _c("Button", { attrs: { type: "ghost", icon: "ios-search" } }, [_vm._v("Search")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost", shape: "circle", icon: "ios-search" } }, [_vm._v("Search")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost", shape: "circle" } }, [_vm._v("Circle")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置shape属性为circle，可将按钮置为圆的形状。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("按钮尺寸")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", size: "large" } }, [_vm._v("Large")]), _vm._v(" "), _c("Button", { attrs: { type: "primary" } }, [_vm._v("Default")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", size: "small" } }, [_vm._v("Small")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", { attrs: { type: "primary", shape: "circle", size: "large" } }, [_vm._v("Large")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", shape: "circle" } }, [_vm._v("Default")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", shape: "circle", size: "small" } }, [_vm._v("Small")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 按钮有三种尺寸：大、默认（中）、小")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("长按钮")]), _vm._v(" "), _c("Button", { attrs: { type: "success", long: "" } }, [_vm._v("SUBMIT")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", { attrs: { type: "error", long: "" } }, [_vm._v("DELETE")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 使用者也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("不可用状态")]), _vm._v(" "), _c("Button", [_vm._v("Default")]), _vm._v(" "), _c("Button", { attrs: { disabled: "" } }, [_vm._v("Default(Disabled)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", { attrs: { type: "primary" } }, [_vm._v("Primary")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", disabled: "" } }, [_vm._v("Primary(Disabled)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Ghost")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost", disabled: "" } }, [_vm._v("Ghost(Disabled)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", { attrs: { type: "dashed" } }, [_vm._v("Dashed")]), _vm._v(" "), _c("Button", { attrs: { type: "dashed", disabled: "" } }, [_vm._v("Dashed(Disabled)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("Button", { attrs: { type: "text" } }, [_vm._v("Text")]), _vm._v(" "), _c("Button", { attrs: { type: "text", disabled: "" } }, [_vm._v("Text(Disabled)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过添加disabled属性可将按钮设置为不可用状态。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("加载中状态")]), _vm._v(" "), _c("Button", { attrs: { type: "primary", loading: "" } }, [_vm._v("Loading...")]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary", loading: _vm.loading },
    on: { click: _vm.toLoading }
  }, [!_vm.loading ? _c("span", [_vm._v("Click me!")]) : _c("span", [_vm._v("Loading...")])]), _vm._v(" "), _c("Button", {
    attrs: {
      type: "primary",
      loading: _vm.loading2,
      icon: "checkmark-round"
    },
    on: { click: _vm.toLoading2 }
  }, [!_vm.loading2 ? _c("span", [_vm._v("Click me!")]) : _c("span", [_vm._v("Loading...")])]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("按钮组合")]), _vm._v(" "), _c("h4", [_vm._v("Basic")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("ButtonGroup", [_c("Button", [_vm._v("Cancel")]), _vm._v(" "), _c("Button", { attrs: { type: "primary" } }, [_vm._v("Confirm")])], 1), _vm._v(" "), _c("ButtonGroup", [_c("Button", { attrs: { disabled: "" } }, [_vm._v("Yesterday")]), _vm._v(" "), _c("Button", { attrs: { disabled: "" } }, [_vm._v("Today")]), _vm._v(" "), _c("Button", { attrs: { disabled: "" } }, [_vm._v("Tomorrow")])], 1), _vm._v(" "), _c("ButtonGroup", [_c("Button", { attrs: { type: "primary" } }, [_vm._v("L")]), _vm._v(" "), _c("Button", [_vm._v("M")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("M")]), _vm._v(" "), _c("Button", { attrs: { type: "dashed" } }, [_vm._v("R")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("h4", [_vm._v("Icons")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("ButtonGroup", [_c("Button", { attrs: { type: "primary" } }, [_c("Icon", { attrs: { type: "chevron-left" } }), _vm._v("\n\t\t            Backward\n\t\t        ")], 1), _vm._v(" "), _c("Button", { attrs: { type: "primary" } }, [_vm._v("\n\t\t            Forward\n\t\t            "), _c("Icon", { attrs: { type: "chevron-right" } })], 1)], 1), _vm._v(" "), _c("ButtonGroup", [_c("Button", {
    attrs: { type: "primary", icon: "ios-skipbackward" }
  }), _vm._v(" "), _c("Button", {
    attrs: { type: "primary", icon: "ios-skipforward" }
  })], 1), _vm._v(" "), _c("ButtonGroup", [_c("Button", {
    attrs: { type: "ghost", icon: "ios-color-wand-outline" }
  }), _vm._v(" "), _c("Button", {
    attrs: { type: "ghost", icon: "ios-sunny-outline" }
  }), _vm._v(" "), _c("Button", { attrs: { type: "ghost", icon: "ios-crop" } }), _vm._v(" "), _c("Button", {
    attrs: { type: "ghost", icon: "ios-color-filter-outline" }
  })], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("h4", [_vm._v("Circle")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("ButtonGroup", { attrs: { shape: "circle" } }, [_c("Button", { attrs: { type: "primary" } }, [_c("Icon", { attrs: { type: "chevron-left" } }), _vm._v("\n\t\t            Backward\n\t\t        ")], 1), _vm._v(" "), _c("Button", { attrs: { type: "primary" } }, [_vm._v("\n\t\t            Forward\n\t\t            "), _c("Icon", { attrs: { type: "chevron-right" } })], 1)], 1), _vm._v(" "), _c("ButtonGroup", { attrs: { shape: "circle" } }, [_c("Button", {
    attrs: { type: "primary", icon: "ios-skipbackward" }
  }), _vm._v(" "), _c("Button", {
    attrs: { type: "primary", icon: "ios-skipforward" }
  })], 1), _vm._v(" "), _c("ButtonGroup", { attrs: { shape: "circle" } }, [_c("Button", {
    attrs: { type: "ghost", icon: "ios-color-wand-outline" }
  }), _vm._v(" "), _c("Button", {
    attrs: { type: "ghost", icon: "ios-sunny-outline" }
  }), _vm._v(" "), _c("Button", { attrs: { type: "ghost", icon: "ios-crop" } }), _vm._v(" "), _c("Button", {
    attrs: { type: "ghost", icon: "ios-color-filter-outline" }
  })], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("h4", [_vm._v("Size")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("ButtonGroup", { attrs: { size: "large" } }, [_c("Button", { attrs: { type: "ghost" } }, [_vm._v("Large")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Large")])], 1), _vm._v(" "), _c("ButtonGroup", [_c("Button", { attrs: { type: "ghost" } }, [_vm._v("Default")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Default")])], 1), _vm._v(" "), _c("ButtonGroup", { attrs: { size: "small" } }, [_c("Button", { attrs: { type: "ghost" } }, [_vm._v("Small")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Small")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("ButtonGroup", { attrs: { size: "large", shape: "circle" } }, [_c("Button", { attrs: { type: "ghost" } }, [_vm._v("Large")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Large")])], 1), _vm._v(" "), _c("ButtonGroup", { attrs: { shape: "circle" } }, [_c("Button", { attrs: { type: "ghost" } }, [_vm._v("Default")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Default")])], 1), _vm._v(" "), _c("ButtonGroup", { attrs: { size: "small", shape: "circle" } }, [_c("Button", { attrs: { type: "ghost" } }, [_vm._v("Small")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Small")])], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 将多个Button放入ButtonGroup内，可实现按钮组合的效果。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置ButtonGroup的属性size为large和small，可将按钮组尺寸设置为大和小，不设置size，则为默认（中）尺寸。")], 1), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("按钮组纵向排列 ")]), _vm._v(" "), _c("ButtonGroup", { attrs: { vertical: "" } }, [_c("Button", {
    attrs: { type: "ghost", icon: "social-facebook" }
  }), _vm._v(" "), _c("Button", {
    attrs: { type: "ghost", icon: "social-twitter" }
  }), _vm._v(" "), _c("Button", {
    attrs: { type: "ghost", icon: "social-googleplus" }
  }), _vm._v(" "), _c("Button", { attrs: { type: "ghost", icon: "social-tumblr" } })], 1), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 通过设置ButtonGroup的属性vertical，可以使按钮组纵向排列。")], 1)], 1), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("API ")]), _vm._v(" "), _c("p", [_vm._v("Button props ")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data1 }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_vm._v("ButtonGroup props ")]), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns2, data: _vm.data2 }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-03970425", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=76.chunk.js.map