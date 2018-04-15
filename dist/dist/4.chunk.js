webpackJsonp([4],{

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1072);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("a3b87d2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53e5a0a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane-page.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53e5a0a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane-page.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.split-pane-con[data-v-53e5a0a6] {\n  width: 100%;\n  height: 89vh;\n}\n.custom-trigger[data-v-53e5a0a6] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  box-sizing: border-box;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 50%;\n  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1), 2px 2px 10px 2px rgba(0, 0, 0, 0.2) inset;\n  border: 1px solid #c3c3c3;\n  cursor: pointer;\n}\n.introduce-left-con h4[data-v-53e5a0a6] {\n  margin-bottom: 20px;\n}\n.introduce-left-con h5[data-v-53e5a0a6] {\n  margin-bottom: 10px;\n  margin-left: 20px;\n}\n.split-pane-right-con[data-v-53e5a0a6] {\n  padding: 30px;\n}\n.split-pane-right-con p[data-v-53e5a0a6] {\n  font-size: 26px;\n  font-weight: 700;\n  color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _splitPane = __webpack_require__(1074);

var _splitPane2 = _interopRequireDefault(_splitPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _splitPane2.default;

/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_vue__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_49ffd901_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_vue__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_49ffd901_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_49ffd901_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1075)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_49ffd901_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component-group\\my-components\\split-pane\\split-pane\\split-pane.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49ffd901", Component.options)
  } else {
    hotAPI.reload("data-v-49ffd901", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1076);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("66ff98ee", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49ffd901\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49ffd901\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./split-pane.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.split-pane {\n  position: relative;\n}\n.split-pane-container {\n  height: 100%;\n  width: 100%;\n}\n.split-pane-horizontal > div > .split-pane-trigger {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  cursor: col-resize;\n  width: 2px;\n  height: 100%;\n  margin: 0 1px;\n}\n.split-pane-vertical > div > .split-pane-trigger {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  cursor: row-resize;\n  height: 2px;\n  width: 100%;\n  margin: 1px 0;\n}\n.split-pane-trigger {\n  position: absolute;\n  z-index: 3;\n  background: #BDBDBD;\n}\n.split-pane-left-area {\n  height: 100%;\n  float: left;\n  z-index: 2;\n  overflow: auto;\n}\n.split-pane-right-area {\n  height: 100%;\n  float: left;\n  z-index: 2;\n  overflow: auto;\n}\n.split-pane-top-area {\n  width: 100%;\n  z-index: 2;\n  overflow: auto;\n}\n.split-pane-bottom-area {\n  width: 100%;\n  z-index: 2;\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "wraper",
    class: _vm.wraperClasses,
    on: {
      mouseup: _vm.handleMouseup,
      mousemove: _vm.handleMousemove,
      mouseleave: _vm.handleMouseout
    }
  }, [_vm.direction === "horizontal" ? _c("div", { class: _vm.prefix + "-container" }, [_c("div", {
    class: _vm.prefix + "-left-area",
    style: { width: _vm.leftSize }
  }, [_vm._t("left")], 2), _vm._v(" "), _vm._t("trigger", [_c("div", {
    ref: "trigger",
    class: _vm.prefix + "-trigger",
    style: { left: _vm.triggerLeft },
    attrs: { unselectable: "on" },
    on: { mousedown: _vm.handleMousedown }
  })]), _vm._v(" "), _c("div", {
    class: _vm.prefix + "-right-area",
    style: { width: _vm.rightSize }
  }, [_vm._t("right")], 2)], 2) : _c("div", { class: _vm.prefix + "-container" }, [_c("div", {
    class: _vm.prefix + "-top-area",
    style: { height: _vm.leftSize }
  }, [_vm._t("top")], 2), _vm._v(" "), _vm._t("trigger", [_c("div", {
    ref: "trigger",
    class: _vm.prefix + "-trigger",
    style: { top: _vm.triggerLeft },
    attrs: { unselectable: "on" },
    on: { mousedown: _vm.handleMousedown }
  })]), _vm._v(" "), _c("div", {
    class: _vm.prefix + "-bottom-area",
    style: { height: _vm.rightSize }
  }, [_vm._t("bottom")], 2)], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-49ffd901", esExports);
  }
}

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("Card", { attrs: { padding: 0 } }, [_c("div", { staticClass: "split-pane-con" }, [_c("split-pane", {
    style: { height: "100%" },
    attrs: {
      right: "",
      min: "100px",
      max: 80,
      direction: "horizontal"
    },
    on: { "on-trigger-moving": _vm.handleMoving },
    model: {
      value: _vm.triggerOffset,
      callback: function callback($$v) {
        _vm.triggerOffset = $$v;
      },
      expression: "triggerOffset"
    }
  }, [_c("div", {
    staticStyle: { height: "100%" },
    attrs: { slot: "left" },
    slot: "left"
  }, [_c("split-pane", {
    style: { height: "100%" },
    attrs: { direction: "vertical" },
    model: {
      value: _vm.triggerOffsetV,
      callback: function callback($$v) {
        _vm.triggerOffsetV = $$v;
      },
      expression: "triggerOffsetV"
    }
  }, [_c("div", {
    staticClass: "introduce-left-con",
    staticStyle: {
      background: "#EDE3A0",
      height: "100%",
      padding: "30px"
    },
    attrs: { slot: "top" },
    slot: "top"
  }, [_c("h4", [_vm._v("- 该组件可以拖动修改左右尺寸，还可以绑定v-model来设置，如设置v-model=\"40\"即左侧40%，右侧60%，也可设置'200px'像素值")]), _vm._v(" "), _c("h4", [_vm._v("- 设置right属性则v-model设置的值为右侧（下册）的宽度（高度）")]), _vm._v(" "), _c("h4", [_vm._v('- 可设置最小和最大距离，如:min="80"即向右拖动到80%处就不能再拖动')]), _vm._v(" "), _c("h4", [_vm._v("- 可绑定事件@on-trigger-moving，回调函数的返回值是鼠标事件对象，同时该对象还包括两个我们自定义的变量，即atMax和atMin，即此时是否是在最大或最小距离处，类型是Boolean。来拖动右边的trigger看看吧。")]), _vm._v(" "), _c("h4", { staticStyle: { "margin-bottom": "10px" } }, [_vm._v('- 可使用slot="trigger"自定义拖动触发器，但有三个注意点:')]), _vm._v(" "), _c("h5", [_vm._v("-- 样式需要设置position: absolute;")]), _vm._v(" "), _c("h5", [_vm._v("-- 需要给trigger绑定mousedown事件，绑定的方法调用this.$refs.pane.handleMousedow(e)，e为mousedown事件的事件对象")]), _vm._v(" "), _c("h5", [_vm._v("-- 给trigger添加:style=\"{width: offset + '%'}\"，这里的offset是通过v-model给split-pane组件绑定的值")]), _vm._v(" "), _c("h4", [_vm._v("- 其他api请看源码")])]), _vm._v(" "), _c("div", {
    staticStyle: {
      background: "#A2EDB6",
      height: "100%"
    },
    attrs: { slot: "bottom" },
    slot: "bottom"
  }, [_c("split-pane", {
    ref: "pane",
    style: { height: "100%" },
    attrs: { direction: "horizontal" },
    model: {
      value: _vm.triggerOffsetMin,
      callback: function callback($$v) {
        _vm.triggerOffsetMin = $$v;
      },
      expression: "triggerOffsetMin"
    }
  }, [_c("div", {
    staticStyle: {
      background: "#EDACE2",
      height: "100%"
    },
    attrs: { slot: "left" },
    slot: "left"
  }), _vm._v(" "), _c("div", {
    staticClass: "custom-trigger",
    style: { left: _vm.triggerOffsetMin + "%" },
    attrs: { slot: "trigger" },
    on: { mousedown: _vm.handleMousedown },
    slot: "trigger"
  }), _vm._v(" "), _c("div", {
    staticStyle: {
      background: "#A2EDB6",
      height: "100%"
    },
    attrs: { slot: "right" },
    slot: "right"
  })])], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "split-pane-right-con",
    staticStyle: { background: "#8FB5ED", height: "100%" },
    attrs: { slot: "right" },
    slot: "right"
  }, [_c("p", [_vm._v("是否是在最小距离处： " + _vm._s(_vm.atMin))]), _vm._v(" "), _c("p", [_vm._v("是否是在最大距离处： " + _vm._s(_vm.atMax))])])])], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-hot-reload-api").rerender("data-v-53e5a0a6", esExports);
  }
}

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_page_vue__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_page_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_page_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_page_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_53e5a0a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_page_vue__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_53e5a0a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_53e5a0a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_page_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1071)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53e5a0a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_split_pane_page_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_53e5a0a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_split_pane_page_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\views\\component-group\\my-components\\split-pane\\split-pane-page.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53e5a0a6", Component.options)
  } else {
    hotAPI.reload("data-v-53e5a0a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _splitPane = __webpack_require__(1073);

var _splitPane2 = _interopRequireDefault(_splitPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'split-pane-page',
    components: {
        splitPane: _splitPane2.default
    },
    data: function data() {
        return {
            triggerOffset: '300px',
            triggerOffsetV: 70,
            triggerOffsetMin: 40,
            atMax: false,
            atMin: false
        };
    },

    methods: {
        handleMousedown: function handleMousedown(e) {
            this.$refs.pane.handleMousedown(e);
        },
        handleMoving: function handleMoving(e) {
            this.atMax = e.atMax;
            this.atMin = e.atMin;
        }
    }
};

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var oneOf = function oneOf(ele, targetArr) {
	if (targetArr.indexOf(ele) >= 0) {
		return true;
	} else {
		return false;
	}
};
exports.default = {
	name: 'splitPane',
	props: {
		value: {
			type: [Number, String],
			default: 50
		},
		direction: {
			type: String,
			default: 'horizontal',
			validator: function validator(val) {
				return oneOf(val, ['vertical', 'horizontal']);
			}
		},
		min: {
			type: [Number, String],
			default: 3
		},
		max: {
			type: [Number, String],
			default: 97
		},
		right: {
			type: Boolean,
			default: false
		}
	},
	data: function data() {
		return {
			prefix: 'split-pane',
			canMove: false,
			triggerOffset: 50,
			triggerOldOffset: 50,
			offset: {},
			atMin: false,
			atMax: false,
			oldOffset: 0
		};
	},

	computed: {
		wraperClasses: function wraperClasses() {
			return [this.prefix, this.direction === 'vertical' ? this.prefix + '-vertical' : this.prefix + '-horizontal'];
		},
		leftSize: function leftSize() {
			return this.right ? 100 - this.triggerOffset + '%' : this.triggerOffset + '%';
		},
		rightSize: function rightSize() {
			return this.right ? this.triggerOffset + '%' : 100 - this.triggerOffset + '%';
		},
		triggerLeft: function triggerLeft() {
			return this.right ? 100 - this.triggerOffset + '%' : this.triggerOffset + '%';
		},
		minTransed: function minTransed() {
			return this.transValue(this.min);
		},
		maxTransed: function maxTransed() {
			return this.right ? 100 - this.transValue(this.max) : this.transValue(this.max);
		}
	},
	methods: {
		handleMouseup: function handleMouseup(e) {
			this.canMove = false;
			this.$emit('on-resizing-end', e);
		},
		transValue: function transValue(val) {
			return typeof val === 'number' ? val : Math.floor(parseFloat(val) / this.$refs.wraper.offsetWidth * 10000) / 100;
		},
		handleMousedown: function handleMousedown(e) {
			this.canMove = true;
			this.triggerOldOffset = this.triggerOffset;
			this.offset = {
				x: e.pageX,
				y: e.pageY
			};
			this.$emit('on-resizing-start', e);
			e.preventDefault();
		},
		handleMouseout: function handleMouseout() {
			this.canMove = false;
		},
		handleMousemove: function handleMousemove(e) {
			if (this.canMove) {
				var offset = void 0;
				var moveSize = 0;
				if (this.direction === 'horizontal') {
					moveSize = Math.floor((e.clientX - this.offset.x) / this.$refs.wraper.offsetWidth * 10000) / 100;
					offset = this.triggerOldOffset + (this.right ? -moveSize : moveSize);
				} else {
					moveSize = Math.floor((e.clientY - this.offset.y) / this.$refs.wraper.offsetHeight * 10000) / 100;
					offset = this.triggerOldOffset + (this.right ? -moveSize : moveSize);
				}
				if (this.right) {
					var offsetHandle = 100 - offset;
					if (offsetHandle <= this.minTransed) {
						this.triggerOffset = 100 - Math.max(offsetHandle, this.minTransed);
					} else {
						this.triggerOffset = 100 - Math.min(offsetHandle, this.maxTransed);
					}
				} else {
					if (offset <= this.minTransed) {
						this.triggerOffset = Math.max(offset, this.minTransed);
					} else {
						this.triggerOffset = Math.min(offset, this.maxTransed);
					}
				}
				e.atMin = 100 - offset <= this.minTransed;
				e.atMax = 100 - offset <= this.minTransed;
				if (this.triggerOffset < this.oldOffset) {
					e.direction = this.right ? 1 : 0;
				} else {
					e.direction = this.right ? 0 : 1;
				}
				this.oldOffset = this.triggerOffset;
				this.$emit('input', this.triggerOffset);
				this.$emit('on-resizing', e);
			}
		}
	},
	watch: {
		value: function value(val) {
			var _this = this;

			this.$nextTick(function () {
				_this.triggerOffset = typeof val === 'number' ? val : Math.floor(parseInt(val) / _this.$refs.wraper.offsetWidth * 10000) / 100;
			});
		}
	},
	mounted: function mounted() {
		var _this2 = this;

		if (this.value !== undefined) {
			this.$nextTick(function () {
				_this2.triggerOffset = typeof _this2.value === 'number' ? _this2.value : Math.floor(parseInt(_this2.value) / _this2.$refs.wraper.offsetWidth * 10000) / 100;
			});
			this.triggerOffset = typeof this.value === 'number' ? this.value : Math.floor(parseInt(this.value) / this.$refs.wraper.offsetWidth * 10000) / 100;
		}
	}
};

/***/ })

});
//# sourceMappingURL=4.chunk.js.map