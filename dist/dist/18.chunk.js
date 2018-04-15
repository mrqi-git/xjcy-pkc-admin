webpackJsonp([18],{

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_code_format_vue__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_code_format_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_code_format_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_code_format_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_code_format_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9b24b6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_code_format_vue__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9b24b6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_code_format_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9b24b6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_code_format_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(954)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_code_format_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f9b24b6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_code_format_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\common-case\\code-format.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f9b24b6e", Component.options)
  } else {
    hotAPI.reload("data-v-f9b24b6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customutil = __webpack_require__(956);

var _customutil2 = _interopRequireDefault(_customutil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      value1: "",
      value2: "",
      value3: "none",
      value4: "",
      value5: "",

      value6: "",
      value7: "",
      value8: "none",
      value9: "",
      value10: ""
    };
  },

  methods: {
    methods1: function methods1() {
      var tempvalue = _customutil2.default.formatJson(this.value1);
      this.value3 = tempvalue.result ? "none" : "";
      this.value2 = tempvalue.result ? tempvalue.msg : "";
      this.value4 = tempvalue.result ? "" : "失败原因 ：" + tempvalue.msg.message;
      this.value5 = tempvalue.result ? "" : "失败详细 ：" + tempvalue.msg.stack;
    },
    methods2: function methods2() {
      this.value1 = this.value2.replace(/\ +/g, "").replace(/[ ]/g, "").replace(/[\r\n]/g, "");
    },
    methods3: function methods3() {
      this.value1 = "";
      this.value2 = "";
    },
    methods4: function methods4() {
      var tempvalue = _customutil2.default.formatXml(this.value6);
      this.value7 = tempvalue;
    },
    methods5: function methods5() {
      this.value6 = this.value7.replace(/\ +/g, "").replace(/[ ]/g, "").replace(/[\r\n]/g, "");
    },
    methods6: function methods6() {
      this.value6 = "";
      this.value7 = "";
    }
  }
};

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(955);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("3564a2b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f9b24b6e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./code-format.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f9b24b6e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./code-format.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n/**\n* 自定义基础样式\n*/\n.float_right {\n  float: right;\n}\n.clear {\n  clear: both;\n}\n", ""]);

// exports


/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customutil = {};

customutil.formatJson = function (json, options) {
  var reg = null,
      formatted = '',
      pad = 0,
      PADDING = '    ';
  options = options || {};
  options.newlineAfterColonIfBeforeBraceOrBracket = options.newlineAfterColonIfBeforeBraceOrBracket === true ? true : false;
  options.spaceAfterColon = options.spaceAfterColon === false ? false : true;
  if (typeof json !== 'string') {
    json = (0, _stringify2.default)(json);
  } else {
    try {
      json = JSON.parse(json);
    } catch (err) {
      console.log(err);
      return {
        result: false,
        msg: err
      };
    }
    json = (0, _stringify2.default)(json);
  }
  reg = /([\{\}])/g;
  json = json.replace(reg, '\r\n$1\r\n');
  reg = /([\[\]])/g;
  json = json.replace(reg, '\r\n$1\r\n');
  reg = /(\,)/g;
  json = json.replace(reg, '$1\r\n');
  reg = /(\r\n\r\n)/g;
  json = json.replace(reg, '\r\n');
  reg = /\r\n\,/g;
  json = json.replace(reg, ',');
  if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
    reg = /\:\r\n\{/g;
    json = json.replace(reg, ':{');
    reg = /\:\r\n\[/g;
    json = json.replace(reg, ':[');
  }
  if (options.spaceAfterColon) {
    reg = /\:/g;
    json = json.replace(reg, ':');
  }
  json.split('\r\n').forEach(function (node, index) {
    var i = 0,
        indent = 0,
        padding = '';

    if (node.match(/\{$/) || node.match(/\[$/)) {
      indent = 1;
    } else if (node.match(/\}/) || node.match(/\]/)) {
      if (pad !== 0) {
        pad -= 1;
      }
    } else {
      indent = 0;
    }

    for (i = 0; i < pad; i++) {
      padding += PADDING;
    }

    formatted += padding + node + '\r\n';
    pad += indent;
  });
  return {
    result: true,
    msg: formatted
  };
};

customutil.formatXml = function (text) {
  text = '\n' + text.replace(/(<\w+)(\s.*?>)/g, function ($0, name, props) {
    return name + ' ' + props.replace(/\s+(\w+=)/g, " $1");
  }).replace(/>\s*?</g, ">\n<");

  text = text.replace(/\n/g, '\r').replace(/<!--(.+?)-->/g, function ($0, text) {
    var ret = '<!--' + escape(text) + '-->';

    return ret;
  }).replace(/\r/g, '\n');

  var rgx = /\n(<(([^\?]).+?)(?:\s|\s*?>|\s*?(\/)>)(?:.*?(?:(?:(\/)>)|(?:<(\/)\2>)))?)/mg;
  var nodeStack = [];
  var output = text.replace(rgx, function ($0, all, name, isBegin, isCloseFull1, isCloseFull2, isFull1, isFull2) {
    var isClosed = isCloseFull1 == '/' || isCloseFull2 == '/' || isFull1 == '/' || isFull2 == '/';

    var prefix = '';
    if (isBegin == '!') {
      prefix = customutil.getPrefix(nodeStack.length);
    } else {
      if (isBegin != '/') {
        prefix = customutil.getPrefix(nodeStack.length);
        if (!isClosed) {
          nodeStack.push(name);
        }
      } else {
        nodeStack.pop();
        prefix = customutil.getPrefix(nodeStack.length);
      }
    }
    var ret = '\n' + prefix + all;
    return ret;
  });

  var prefixSpace = -1;
  var outputText = output.substring(1);

  outputText = outputText.replace(/\n/g, '\r').replace(/(\s*)<!--(.+?)-->/g, function ($0, prefix, text) {
    if (prefix.charAt(0) == '\r') prefix = prefix.substring(1);
    text = unescape(text).replace(/\r/g, '\n');
    var ret = '\n' + prefix + '<!--' + text.replace(/^\s*/mg, prefix) + '-->';

    return ret;
  });

  return outputText.replace(/\s+$/g, '').replace(/\r/g, '\r\n');
};

customutil.getPrefix = function (prefixIndex) {
  var span = '    ';
  var output = [];
  for (var i = 0; i < prefixIndex; ++i) {
    output.push(span);
  }

  return output.join('');
};

exports.default = customutil;

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("Card", { staticClass: "margin-top-8", attrs: { bordered: false } }, [_c("Tabs", { attrs: { type: "card" } }, [_c("TabPane", { attrs: { label: "JSON格式化" } }, [_c("p", { staticClass: "float_right" }, [_c("Button", {
    attrs: { type: "primary" },
    on: { click: _vm.methods1 }
  }, [_vm._v("格式化")]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary" },
    on: { click: _vm.methods2 }
  }, [_vm._v("压缩")]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary" },
    on: { click: _vm.methods3 }
  }, [_vm._v("清空")])], 1), _vm._v(" "), _c("br", { staticClass: "clear" }), _vm._v(" "), _c("Row", { attrs: { gutter: 16 } }, [_c("Col", { attrs: { span: "12" } }, [_c("p", [_vm._v("操作前")]), _vm._v(" "), _c("p", [_c("Input", {
    attrs: {
      type: "textarea",
      placeholder: '输入Json字符串：例如:\r\n{"name":"张三","sex":"男","age":"21"}',
      rows: 14
    },
    model: {
      value: _vm.value1,
      callback: function callback($$v) {
        _vm.value1 = $$v;
      },
      expression: "value1"
    }
  })], 1)]), _vm._v(" "), _c("Col", { attrs: { span: "12" } }, [_c("p", [_vm._v("操作后")]), _vm._v(" "), _c("p", [_c("Input", {
    attrs: {
      type: "textarea",
      placeholder: '例如:\r\n{\r\n    "name": "张三",\r\n    "sex": "男",\r\n    "age":"21"\r\n}',
      rows: 14
    },
    model: {
      value: _vm.value2,
      callback: function callback($$v) {
        _vm.value2 = $$v;
      },
      expression: "value2"
    }
  })], 1)])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Alert", {
    style: { display: _vm.value3 },
    attrs: { type: "error", "show-icon": "" }
  }, [_vm._v("\r\n          抱歉，此JSON格式有误，无法解析 ：\r\n          "), _c("br"), _vm._v(" "), _c("Span", {
    domProps: { innerHTML: _vm._s(_vm.value4) }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", {
    domProps: { innerHTML: _vm._s(_vm.value5) }
  })], 1)], 1), _vm._v(" "), _c("TabPane", { attrs: { label: "XML格式化" } }, [_c("p", { staticClass: "float_right" }, [_c("Button", {
    attrs: { type: "primary" },
    on: { click: _vm.methods4 }
  }, [_vm._v("格式化")]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary" },
    on: { click: _vm.methods5 }
  }, [_vm._v("压缩")]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary" },
    on: { click: _vm.methods6 }
  }, [_vm._v("清空")])], 1), _vm._v(" "), _c("br", { staticClass: "clear" }), _vm._v(" "), _c("Row", { attrs: { gutter: 16 } }, [_c("Col", { attrs: { span: "12" } }, [_c("p", [_vm._v("操作前")]), _vm._v(" "), _c("p", [_c("Input", {
    attrs: {
      type: "textarea",
      placeholder: '输入Xml字符串：例如:\r\n<?xml version="1.0"?><note><to>Tove</to><from>forms</from><heading>这里是head</heading><body>这里是主体</body></note>',
      rows: 14
    },
    model: {
      value: _vm.value6,
      callback: function callback($$v) {
        _vm.value6 = $$v;
      },
      expression: "value6"
    }
  })], 1)]), _vm._v(" "), _c("Col", { attrs: { span: "12" } }, [_c("p", [_vm._v("操作后")]), _vm._v(" "), _c("p", [_c("Input", {
    attrs: {
      type: "textarea",
      placeholder: '例如:\r\n<?xml version="1.0"?>\r\n<note>\r\n  <to>Tove</to>\r\n  <from>forms</from>\r\n  <heading>这里是head</heading>\r\n  <body>这里是主体</body>\r\n</note>',
      rows: 14
    },
    model: {
      value: _vm.value7,
      callback: function callback($$v) {
        _vm.value7 = $$v;
      },
      expression: "value7"
    }
  })], 1)])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Alert", {
    style: { display: _vm.value8 },
    attrs: { type: "error", "show-icon": "" }
  }, [_vm._v("\r\n          抱歉，此XML格式有误，无法解析 ：\r\n          "), _c("br"), _vm._v(" "), _c("Span", {
    domProps: { innerHTML: _vm._s(_vm.value9) }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("Span", {
    domProps: { innerHTML: _vm._s(_vm.value10) }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-f9b24b6e", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=18.chunk.js.map