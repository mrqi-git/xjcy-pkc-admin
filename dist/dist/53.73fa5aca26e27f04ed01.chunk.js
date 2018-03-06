webpackJsonp([53],{262:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o(535),l=o.n(e);for(var r in e)"default"!==r&&function(t){o.d(a,t,function(){return e[t]})}(r);var p=o(973),s=o.n(p),i=o(1),n=i(l.a,s.a,!1,null,null,null);n.options.__file="src\\views\\component\\radio.vue",a.default=n.exports},535:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{single:!1,phone:"apple",animal:"爪哇犀牛",disabledSingle:!0,disabledGroup:"爪哇犀牛",vertical:"apple",button1:"北京",button2:"北京",button3:"北京",button4:"北京",button5:"北京",button6:"北京",columns1:[{title:"属性",key:"prop1",width:"10%"},{title:"说明",key:"prop2"},{title:"类型",key:"prop3",width:"20%"},{title:"默认值",key:"prop4",width:"10%"}],columns2:[{title:"事件名",key:"prop1",width:"10%"},{title:"说明",key:"prop2"},{title:"返回值",key:"prop3",width:"20%"}],data1:[{prop1:"value",prop2:"只在单独使用时有效。可以使用 v-model 双向绑定数据",prop3:"Boolean",prop4:"false"},{prop1:"label",prop2:"只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目",prop3:"String | Number",prop4:"-"},{prop1:"disabled",prop2:"是否禁用当前项",prop3:"Boolean",prop4:"false"},{prop1:"size",prop2:"单选框的尺寸，可选值为 large、small、default 或者不设置",prop3:"String",prop4:"-"},{prop1:"true-value",prop2:"选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用",prop3:"String, Number, Boolean ",prop4:"true"},{prop1:"false-value",prop2:"没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用",prop3:"String, Number, Boolean ",prop4:"false"}],data2:[{prop1:"on-change",prop2:"在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发",prop3:"..."}],data3:[{prop1:"value",prop2:"指定当前选中的项目数据。可以使用 v-model 双向绑定数据",prop3:"String | Number",prop4:"-"},{prop1:"type",prop2:"可选值为 button 或不填，为 button 时使用按钮样式",prop3:"String",prop4:"-"},{prop1:"size",prop2:"尺寸，可选值为large、small、default或者不设置",prop3:"String",prop4:"-"},{prop1:"vertical",prop2:"是否垂直排列，按钮样式下无效",prop3:"Boolean",prop4:"false"}],data4:[{prop1:"on-change",prop2:"在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发",prop3:"..."}]}}}},973:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("Alert",{attrs:{"show-icon":""}},[o("a",{attrs:{href:"https://www.iviewui.com/components/radio",target:"_blank"}},[t._v("详见iView官网radio")])]),t._v(" "),o("Card",{staticClass:"margin-top-8",attrs:{bordered:!1}},[o("p",{attrs:{slot:"title"},slot:"title"},[t._v("概述")]),t._v(" "),o("p",[t._v("基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。")])]),t._v(" "),o("Card",{staticClass:"margin-top-8",attrs:{bordered:!1}},[o("p",{attrs:{slot:"title"},slot:"title"},[t._v("示例")]),t._v(" "),o("p",[o("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 单独使用")],1),t._v(" "),o("p",[t._v("使用 v-model 可以双向绑定数据。")]),t._v(" "),o("br"),t._v(" "),o("Radio",{model:{value:t.single,callback:function(a){t.single=a},expression:"single"}},[t._v("Radio")]),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.single))]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("p",[o("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 组合使用")],1),t._v(" "),o("p",[t._v("使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。")]),t._v(" "),o("br"),t._v(" "),o("RadioGroup",{model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}},[o("Radio",{attrs:{label:"apple"}},[o("Icon",{attrs:{type:"social-apple"}}),t._v(" "),o("span",[t._v("Apple")])],1),t._v(" "),o("Radio",{attrs:{label:"android"}},[o("Icon",{attrs:{type:"social-android"}}),t._v(" "),o("span",[t._v("Android")])],1),t._v(" "),o("Radio",{attrs:{label:"windows"}},[o("Icon",{attrs:{type:"social-windows"}}),t._v(" "),o("span",[t._v("Windows")])],1)],1),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.phone))]),t._v(" "),o("br"),t._v(" "),o("RadioGroup",{model:{value:t.animal,callback:function(a){t.animal=a},expression:"animal"}},[o("Radio",{attrs:{label:"金斑蝶"}}),t._v(" "),o("Radio",{attrs:{label:"爪哇犀牛"}}),t._v(" "),o("Radio",{attrs:{label:"印度黑羚"}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.animal))]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("p",[o("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 不可用")],1),t._v(" "),o("p",[t._v("通过设置disabled属性来禁用单选框。")]),t._v(" "),o("Radio",{attrs:{disabled:""},model:{value:t.disabledSingle,callback:function(a){t.disabledSingle=a},expression:"disabledSingle"}},[t._v("Radio")]),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.disabledSingle))]),t._v(" "),o("br"),t._v(" "),o("RadioGroup",{model:{value:t.disabledGroup,callback:function(a){t.disabledGroup=a},expression:"disabledGroup"}},[o("Radio",{attrs:{label:"金斑蝶",disabled:""}}),t._v(" "),o("Radio",{attrs:{label:"爪哇犀牛"}}),t._v(" "),o("Radio",{attrs:{label:"印度黑羚"}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.disabledGroup))]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("p",[o("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 垂直")],1),t._v(" "),o("p",[t._v("设置属性 vertical 可以垂直显示，按钮样式下无效。")]),t._v(" "),o("RadioGroup",{attrs:{vertical:""},model:{value:t.vertical,callback:function(a){t.vertical=a},expression:"vertical"}},[o("Radio",{attrs:{label:"apple"}},[o("Icon",{attrs:{type:"social-apple"}}),t._v(" "),o("span",[t._v("Apple")])],1),t._v(" "),o("Radio",{attrs:{label:"android"}},[o("Icon",{attrs:{type:"social-android"}}),t._v(" "),o("span",[t._v("Android")])],1),t._v(" "),o("Radio",{attrs:{label:"windows"}},[o("Icon",{attrs:{type:"social-windows"}}),t._v(" "),o("span",[t._v("Windows")])],1)],1),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("p",[o("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 按钮样式")],1),t._v(" "),o("p",[t._v("组合使用时可以设置属性type为 button 来应用按钮的样式。")]),t._v(" "),o("RadioGroup",{attrs:{type:"button"},model:{value:t.button1,callback:function(a){t.button1=a},expression:"button1"}},[o("Radio",{attrs:{label:"北京"}}),t._v(" "),o("Radio",{attrs:{label:"上海"}}),t._v(" "),o("Radio",{attrs:{label:"深圳"}}),t._v(" "),o("Radio",{attrs:{label:"杭州"}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.button1))]),t._v(" "),o("br"),t._v(" "),o("RadioGroup",{attrs:{type:"button"},model:{value:t.button2,callback:function(a){t.button2=a},expression:"button2"}},[o("Radio",{attrs:{label:"北京"}}),t._v(" "),o("Radio",{attrs:{label:"上海",disabled:""}}),t._v(" "),o("Radio",{attrs:{label:"深圳"}}),t._v(" "),o("Radio",{attrs:{label:"杭州"}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.button2))]),t._v(" "),o("br"),t._v(" "),o("RadioGroup",{attrs:{type:"button"},model:{value:t.button3,callback:function(a){t.button3=a},expression:"button3"}},[o("Radio",{attrs:{label:"北京",disabled:""}}),t._v(" "),o("Radio",{attrs:{label:"上海",disabled:""}}),t._v(" "),o("Radio",{attrs:{label:"深圳",disabled:""}}),t._v(" "),o("Radio",{attrs:{label:"杭州",disabled:""}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.button3))]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("p",[o("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 尺寸")],1),t._v(" "),o("p",[t._v("通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。")]),t._v(" "),o("RadioGroup",{attrs:{type:"button",size:"large"},model:{value:t.button4,callback:function(a){t.button4=a},expression:"button4"}},[o("Radio",{attrs:{label:"北京"}}),t._v(" "),o("Radio",{attrs:{label:"上海"}}),t._v(" "),o("Radio",{attrs:{label:"深圳"}}),t._v(" "),o("Radio",{attrs:{label:"杭州"}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.button4))]),t._v(" "),o("br"),t._v(" "),o("RadioGroup",{attrs:{type:"button"},model:{value:t.button5,callback:function(a){t.button5=a},expression:"button5"}},[o("Radio",{attrs:{label:"北京"}}),t._v(" "),o("Radio",{attrs:{label:"上海"}}),t._v(" "),o("Radio",{attrs:{label:"深圳"}}),t._v(" "),o("Radio",{attrs:{label:"杭州"}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.button5))]),t._v(" "),o("br"),t._v(" "),o("RadioGroup",{attrs:{type:"button",size:"small"},model:{value:t.button6,callback:function(a){t.button6=a},expression:"button6"}},[o("Radio",{attrs:{label:"北京"}}),t._v(" "),o("Radio",{attrs:{label:"上海"}}),t._v(" "),o("Radio",{attrs:{label:"深圳"}}),t._v(" "),o("Radio",{attrs:{label:"杭州"}})],1),t._v(" "),o("br"),t._v(" "),o("Span",{staticClass:"helpFont"},[t._v(":"+t._s(t.button6))])],1),t._v(" "),o("Card",{staticClass:"margin-top-8",attrs:{bordered:!1}},[o("p",{attrs:{slot:"title"},slot:"title"},[t._v("API")]),t._v(" "),o("p",[t._v("Radio props")]),t._v(" "),o("Table",{attrs:{border:"",columns:t.columns1,data:t.data1}}),t._v(" "),o("br"),t._v(" "),o("p",[t._v("Radio events")]),t._v(" "),o("Table",{attrs:{border:"",columns:t.columns2,data:t.data2}}),t._v(" "),o("br"),t._v(" "),o("p",[t._v("RadioGroup props")]),t._v(" "),o("Table",{attrs:{border:"",columns:t.columns1,data:t.data3}}),t._v(" "),o("br"),t._v(" "),o("p",[t._v("RadioGroup events")]),t._v(" "),o("Table",{attrs:{border:"",columns:t.columns2,data:t.data4}})],1)],1)},l=[];e._withStripped=!0;var r={render:e,staticRenderFns:l};a.default=r}});