webpackJsonp([66],{

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_font_vue__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_font_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_font_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_font_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_font_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b53a4fc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_font_vue__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b53a4fc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_font_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b53a4fc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_font_vue__);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_font_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b53a4fc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_font_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component\\font.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b53a4fc", Component.options)
  } else {
    hotAPI.reload("data-v-8b53a4fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            example1: 'font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;',
            columns1: [{
                title: '中文字体',
                key: 'prop1',
                width: '10%'
            }, {
                title: '示例',
                key: 'prop2'
            }, {
                title: '粗细',
                key: 'prop3',
                width: '10%'
            }, {
                title: '颜色',
                key: 'prop4',
                width: '10%'
            }, {
                title: '色号',
                key: 'prop5',
                width: '10%'
            }],
            columns2: [{
                title: '英文字体',
                key: 'prop1',
                width: '10%'
            }, {
                title: '示例',
                key: 'prop2'
            }, {
                title: '粗细',
                key: 'prop3',
                width: '10%'
            }, {
                title: '颜色',
                key: 'prop4',
                width: '10%'
            }, {
                title: '色号',
                key: 'prop5',
                width: '10%'
            }],
            data1: [{
                prop1: '主标题',
                prop2: '我是主标题',
                prop3: '加粗',
                prop4: '#464c5b',
                prop5: '16px',
                cellClassName: {
                    prop2: 'mainHeadFont'
                }
            }, {
                prop1: '次标题',
                prop2: '我是次标题',
                prop3: '加粗',
                prop4: '#464c5b',
                prop5: '14px',
                cellClassName: {
                    prop2: 'subHeadFont'
                }
            }, {
                prop1: '小标题',
                prop2: '我是小标题',
                prop3: '加粗',
                prop4: '#464c5b',
                prop5: '12px',
                cellClassName: {
                    prop2: 'smallHeadFont'
                }
            }, {
                prop1: '正文',
                prop2: '我是正文',
                prop3: '默认',
                prop4: '#657180',
                prop5: '12px',
                cellClassName: {
                    prop2: 'textFont'
                }
            }, {
                prop1: '辅助文字',
                prop2: '我是辅助文字',
                prop3: '默认',
                prop4: '#9ea7b4',
                prop5: '12px',
                cellClassName: {
                    prop2: 'helpFont'
                }
            }, {
                prop1: '失效文字',
                prop2: '我是失效文字',
                prop3: '默认',
                prop4: '#c3cbd6',
                prop5: '12px',
                cellClassName: {
                    prop2: 'disabledFont'
                }
            }, {
                prop1: '链接文字',
                prop2: '我是链接文字',
                prop3: '默认',
                prop4: '#3399ff',
                prop5: '12px',
                cellClassName: {
                    prop2: 'linkFont'
                }
            }],
            data2: [{
                prop1: 'Main Head',
                prop2: 'This is an example',
                prop3: 'bold',
                prop4: '#464c5b',
                prop5: '16px',
                cellClassName: {
                    prop2: 'mainHeadFont'
                }
            }, {
                prop1: 'Sub Head',
                prop2: 'This is an example',
                prop3: 'bold',
                prop4: '#464c5b',
                prop5: '14px',
                cellClassName: {
                    prop2: 'subHeadFont'
                }
            }, {
                prop1: 'Small Head',
                prop2: 'This is an example',
                prop3: 'bold',
                prop4: '#464c5b',
                prop5: '12px',
                cellClassName: {
                    prop2: 'smallHeadFont'
                }
            }, {
                prop1: 'Text',
                prop2: 'This is an example',
                prop3: 'normal',
                prop4: '#657180',
                prop5: '12px',
                cellClassName: {
                    prop2: 'textFont'
                }
            }, {
                prop1: 'Help',
                prop2: 'This is an example',
                prop3: 'normal',
                prop4: '#9ea7b4',
                prop5: '12px',
                cellClassName: {
                    prop2: 'helpFont'
                }
            }, {
                prop1: 'Disabled',
                prop2: 'This is an example',
                prop3: 'normal',
                prop4: '#c3cbd6',
                prop5: '12px',
                cellClassName: {
                    prop2: 'disabledFont'
                }
            }, {
                prop1: 'Link',
                prop2: 'This is an example',
                prop3: 'normal',
                prop4: '#3399ff',
                prop5: '12px',
                cellClassName: {
                    prop2: 'linkFont'
                }
            }]
        };
    }
};

/***/ }),

/***/ 967:
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
      href: "https://www.iviewui.com/components/font",
      target: "_blank"
    }
  }, [_vm._v("详见iView官网font")])]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("概述")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" iView 的 CSS 对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。我们推荐  macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。")], 1)]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("字体预览")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 中文字体")], 1), _vm._v(" "), _c("p", [_c("img", {
    staticStyle: { width: "864px", height: "173px" },
    attrs: {
      src: "https://file.iviewui.com/dist/aac43973c6b6d72bf7aa852ecb2302c5.png"
    }
  })]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 英文字体")], 1), _vm._v(" "), _c("p"), _c("p", [_c("img", {
    staticStyle: { width: "864px", height: "173px" },
    attrs: {
      src: "https://file.iviewui.com/dist/f4b37f948e311cb4bbcb609b17b8db62.png"
    }
  })]), _c("p")]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("字体代码")]), _vm._v(" "), _c("p", [_c("Input", {
    attrs: { placeholder: "Enter something..." },
    model: {
      value: _vm.example1,
      callback: function callback($$v) {
        _vm.example1 = $$v;
      },
      expression: "example1"
    }
  })], 1)]), _vm._v(" "), _c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_vm._v("使用规范")]), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 中文字体")], 1), _vm._v(" "), _c("Table", {
    attrs: { border: "", columns: _vm.columns1, data: _vm.data1 }
  }), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("p", [_c("Icon", { attrs: { type: "arrow-right-b" } }), _vm._v(" 中文字体")], 1), _vm._v(" "), _c("Table", {
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
    require("vue-hot-reload-api").rerender("data-v-8b53a4fc", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=66.chunk.js.map