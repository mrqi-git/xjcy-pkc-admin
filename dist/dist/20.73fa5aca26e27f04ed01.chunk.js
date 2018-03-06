webpackJsonp([20],{255:function(t,s,r){"use strict";function a(t){v||r(960)}Object.defineProperty(s,"__esModule",{value:!0});var l=r(528),e=r.n(l);for(var o in l)"default"!==o&&function(t){r.d(s,t,function(){return l[t]})}(o);var p=r(962),n=r.n(p),v=!1,_=r(1),c=a,i=_(e.a,n.a,!1,c,null,null);i.options.__file="src\\views\\component\\grid.vue",s.default=i.exports},528:function(t,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{columns1:[{title:"属性",key:"prop1",width:"10%"},{title:"说明",key:"prop2"},{title:"类型",key:"prop3",width:"20%"},{title:"默认值",key:"prop4",width:"10%"}],data1:[{prop1:"gutter",prop2:"栅格间距，单位 px，左右平分",prop3:"Number",prop4:"0"},{prop1:"type",prop2:"布局模式，可选值为flex或不选，在现代浏览器下有效",prop3:"String",prop4:"-"},{prop1:"align",prop2:"flex 布局下的垂直对齐方式，可选值为top、middle、bottom",prop3:"String",prop4:"-"},{prop1:"justify",prop2:"flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between",prop3:"String",prop4:"-"},{prop1:"class-name",prop2:"自定义的class名称",prop3:"String",prop4:"-"}],data2:[{prop1:"span",prop2:"栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none",prop3:"Number | String",prop4:"-"},{prop1:"order",prop2:"栅格的顺序，在flex布局模式下有效",prop3:"Number | String",prop4:"-"},{prop1:"offset",prop2:"栅格左侧的间隔格数，间隔内不可以有栅格",prop3:"Number | String",prop4:"-"},{prop1:"push",prop2:"栅格向右移动格数",prop3:"Number | String",prop4:"-"},{prop1:"pull",prop2:"栅格向左移动格数",prop3:"Number | String",prop4:"-"},{prop1:"class-name",prop2:"自定义的class名称",prop3:"String",prop4:"-"},{prop1:"xs",prop2:"<768px 响应式栅格，可为栅格数或一个包含其他属性的对象",prop3:"Number | Object",prop4:"-"},{prop1:"sm",prop2:"≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象",prop3:"Number | Object",prop4:"-"},{prop1:"md",prop2:"≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象",prop3:"Number | Object",prop4:"-"},{prop1:"lg",prop2:"≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象",prop3:"Number | Object",prop4:"-"}]}}}},960:function(t,s,r){var a=r(961);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(17)("2454b32c",a,!1,{})},961:function(t,s,r){s=t.exports=r(16)(!1),s.push([t.i,"\n.gridstyle1{\r\n\tbackground:#f2f2f2;\r\n\tpadding:5px 0;\n}\n.gridstyle2{\r\n\tbackground:#48b3e9;\r\n\tpadding:10px 0;\r\n\ttext-align: center;\n}\n.gridstyle3{\r\n\tbackground:#18a2e6;\r\n\tpadding:10px 0;\r\n\ttext-align: center;\n}\r\n",""])},962:function(t,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("Alert",{attrs:{"show-icon":""}},[r("a",{attrs:{href:"https://www.iviewui.com/components/grid",target:"_blank"}},[t._v("详见iView官网grid")])]),t._v(" "),r("Card",{staticClass:"margin-top-8",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("概述")]),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。\n我们定义了两个概念，行row和列col，具体使用方法如下：")],1),t._v(" "),r("p",[r("Icon",{attrs:{type:"log-in"}}),t._v(" 使用row在水平方向创建一行")],1),t._v(" "),r("p",[r("Icon",{attrs:{type:"log-in"}}),t._v(" 将一组col插入在row中")],1),t._v(" "),r("p",[r("Icon",{attrs:{type:"log-in"}}),t._v(" 在每个col中，键入自己的内容")],1),t._v(" "),r("p",[r("Icon",{attrs:{type:"log-in"}}),t._v(" 通过设置col的span参数，指定跨越的范围，其范围是1到24")],1),t._v(" "),r("p",[r("Icon",{attrs:{type:"log-in"}}),t._v(" 每个row中的col总和应该为24")],1),t._v(" "),r("br"),t._v(" "),r("Alert",{attrs:{"show-icon":""}},[t._v("注意：非 template/render 模式下，需使用 i-col。")])],1),t._v(" "),r("Card",{staticClass:"margin-top-8",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法")]),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 水平排列的布局")],1),t._v(" "),r("p",[t._v("col必须放在row里面。")]),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"12","class-name":"gridstyle2"}},[t._v("col-12")]),t._v(" "),r("Col",{attrs:{span:"12","class-name":"gridstyle3"}},[t._v("col-12")])],1),t._v(" "),r("br"),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"8","class-name":"gridstyle2"}},[t._v("col-8")]),t._v(" "),r("Col",{attrs:{span:"8","class-name":"gridstyle3"}},[t._v("col-8")]),t._v(" "),r("Col",{attrs:{span:"8","class-name":"gridstyle2"}},[t._v("col-8")])],1),t._v(" "),r("br"),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"6","class-name":"gridstyle2"}},[t._v("col-6")]),t._v(" "),r("Col",{attrs:{span:"6","class-name":"gridstyle3"}},[t._v("col-6")]),t._v(" "),r("Col",{attrs:{span:"6","class-name":"gridstyle2"}},[t._v("col-6")]),t._v(" "),r("Col",{attrs:{span:"6","class-name":"gridstyle3"}},[t._v("col-6")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 区块间隔")],1),t._v(" "),r("p",[t._v("通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。")]),t._v(" "),r("Row",{attrs:{gutter:16,"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"6","class-name":"gridstyle2"}},[r("div",[t._v("col-6")])]),t._v(" "),r("Col",{attrs:{span:"6","class-name":"gridstyle3"}},[r("div",[t._v("col-6")])]),t._v(" "),r("Col",{attrs:{span:"6","class-name":"gridstyle2"}},[r("div",[t._v("col-6")])]),t._v(" "),r("Col",{attrs:{span:"6","class-name":"gridstyle3"}},[r("div",[t._v("col-6")])])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 栅格顺序(Flex)")],1),t._v(" "),r("p",[t._v("通过 Flex 布局的order来改变栅格的顺序。")]),t._v(" "),r("Row",{attrs:{type:"flex","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"6",order:"4","class-name":"gridstyle3"}},[t._v("1 | order-4")]),t._v(" "),r("Col",{attrs:{span:"6",order:"3","class-name":"gridstyle2"}},[t._v("2 | order-3")]),t._v(" "),r("Col",{attrs:{span:"6",order:"2","class-name":"gridstyle3"}},[t._v("3 | order-2")]),t._v(" "),r("Col",{attrs:{span:"6",order:"1","class-name":"gridstyle2"}},[t._v("4 | order-1")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 栅格排序")],1),t._v(" "),r("p",[t._v("通过设置push和pull来改变栅格的顺序。")]),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"18",push:"6","class-name":"gridstyle2"}},[t._v("col-18 | push-6")]),t._v(" "),r("Col",{attrs:{span:"6",pull:"18","class-name":"gridstyle3"}},[t._v("col-6 | pull-18")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 左右偏移")],1),t._v(" "),r("p",[t._v("通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。")]),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"8","class-name":"gridstyle2"}},[t._v("col-8")]),t._v(" "),r("Col",{attrs:{span:"8",offset:"8","class-name":"gridstyle3"}},[t._v("col-8 | offset-8")])],1),t._v(" "),r("br"),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"6",offset:"8","class-name":"gridstyle2"}},[t._v("col-6 | offset-8")]),t._v(" "),r("Col",{attrs:{span:"6",offset:"4","class-name":"gridstyle3"}},[t._v("col-6 | offset-4")])],1),t._v(" "),r("br"),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{span:"12",offset:"8","class-name":"gridstyle2"}},[t._v("col-12 | offset-8")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" Flex布局")],1),t._v(" "),r("p",[t._v("通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。")]),t._v(" "),r("p",[t._v("子元素向左排列")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"start","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")])],1),t._v(" "),r("p",[t._v("子元素向右排列")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"end","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")])],1),t._v(" "),r("p",[t._v("子元素居中排列")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"center","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")])],1),t._v(" "),r("p",[t._v("子元素等宽排列")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"space-between","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")])],1),t._v(" "),r("p",[t._v("子元素分散排列")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"space-around","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[t._v("col-4")]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[t._v("col-4")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" Flex对齐")],1),t._v(" "),r("p",[t._v("通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。")]),t._v(" "),r("p",[t._v("顶部对齐")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"center",align:"top","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[r("p",{staticStyle:{height:"80px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[r("p",{staticStyle:{height:"30px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[r("p",{staticStyle:{height:"100px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[r("p",{staticStyle:{height:"60px"}},[t._v("col-4")])])],1),t._v(" "),r("p",[t._v("底部对齐")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"center",align:"bottom","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[r("p",{staticStyle:{height:"80px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[r("p",{staticStyle:{height:"30px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[r("p",{staticStyle:{height:"100px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[r("p",{staticStyle:{height:"60px"}},[t._v("col-4")])])],1),t._v(" "),r("p",[t._v("居中对齐")]),t._v(" "),r("Row",{attrs:{type:"flex",justify:"center",align:"middle","class-name":"gridstyle1"}},[r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[r("p",{staticStyle:{height:"80px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[r("p",{staticStyle:{height:"30px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle2"}},[r("p",{staticStyle:{height:"100px"}},[t._v("col-4")])]),t._v(" "),r("Col",{attrs:{span:"4","class-name":"gridstyle3"}},[r("p",{staticStyle:{height:"60px"}},[t._v("col-4")])])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 响应式布局")],1),t._v(" "),r("p",[t._v("参照 Bootstrap 的 "),r("a",{attrs:{href:"http://getbootstrap.com/css/#grid-media-queries",target:"_blank"}},[t._v("响应式设计")]),t._v("，预设四个响应尺寸：xs sm md lg，详见 API。")]),t._v(" "),r("p",[t._v("调整浏览器尺寸来查看效果")]),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{xs:2,sm:4,md:6,lg:8,"class-name":"gridstyle2"}},[t._v("Col")]),t._v(" "),r("Col",{attrs:{xs:20,sm:16,md:12,lg:8,"class-name":"gridstyle3"}},[t._v("Col")]),t._v(" "),r("Col",{attrs:{xs:2,sm:4,md:6,lg:8,"class-name":"gridstyle2"}},[t._v("Col")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("p",[r("Icon",{attrs:{type:"arrow-right-b"}}),t._v(" 其它属性的响应式 ")],1),t._v(" "),r("p",[t._v("span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。")]),t._v(" "),r("p",[t._v('其中 :xs="6" 相当于 :xs="{ span: 6 }"。')]),t._v(" "),r("Row",{attrs:{"class-name":"gridstyle1"}},[r("Col",{attrs:{xs:{span:5,offset:1},lg:{span:6,offset:2},"class-name":"gridstyle2"}},[t._v("Col")]),t._v(" "),r("Col",{attrs:{xs:{span:11,offset:1},lg:{span:6,offset:2},"class-name":"gridstyle3"}},[t._v("Col")]),t._v(" "),r("Col",{attrs:{xs:{span:5,offset:1},lg:{span:6,offset:2},"class-name":"gridstyle2"}},[t._v("Col")])],1)],1),t._v(" "),r("Card",{staticClass:"margin-top-8",attrs:{bordered:!1}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("API")]),t._v(" "),r("p",[t._v("Row props")]),t._v(" "),r("Table",{attrs:{border:"",columns:t.columns1,data:t.data1}}),t._v(" "),r("br"),t._v(" "),r("p",[t._v("Row props")]),t._v(" "),r("Table",{attrs:{border:"",columns:t.columns1,data:t.data2}})],1),t._v(" "),r("BackTop")],1)},l=[];a._withStripped=!0;var e={render:a,staticRenderFns:l};s.default=e}});