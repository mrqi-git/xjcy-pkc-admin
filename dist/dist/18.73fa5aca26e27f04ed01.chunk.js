webpackJsonp([18],{253:function(e,n,t){"use strict";function r(e){p||t(954)}Object.defineProperty(n,"__esModule",{value:!0});var a=t(526),l=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var s=t(957),i=t.n(s),p=!1,u=t(1),c=r,v=u(l.a,i.a,!1,c,null,null);v.options.__file="src\\views\\common-case\\code-format.vue",n.default=v.exports},526:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(956),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default={data:function(){return{value1:"",value2:"",value3:"none",value4:"",value5:"",value6:"",value7:"",value8:"none",value9:"",value10:""}},methods:{methods1:function(){var e=a.default.formatJson(this.value1);this.value3=e.result?"none":"",this.value2=e.result?e.msg:"",this.value4=e.result?"":"失败原因 ："+e.msg.message,this.value5=e.result?"":"失败详细 ："+e.msg.stack},methods2:function(){this.value1=this.value2.replace(/\ +/g,"").replace(/[ ]/g,"").replace(/[\r\n]/g,"")},methods3:function(){this.value1="",this.value2=""},methods4:function(){var e=a.default.formatXml(this.value6);this.value7=e},methods5:function(){this.value6=this.value7.replace(/\ +/g,"").replace(/[ ]/g,"").replace(/[\r\n]/g,"")},methods6:function(){this.value6="",this.value7=""}}}},954:function(e,n,t){var r=t(955);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(17)("f694bb52",r,!1,{})},955:function(e,n,t){n=e.exports=t(16)(!1),n.push([e.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n/**\n* 自定义基础样式\n*/\n.float_right {\n  float: right;\n}\n.clear {\n  clear: both;\n}\n",""])},956:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(31),a=function(e){return e&&e.__esModule?e:{default:e}}(r),l={};l.formatJson=function(e,n){var t=null,r="",l=0;if(n=n||{},n.newlineAfterColonIfBeforeBraceOrBracket=!0===n.newlineAfterColonIfBeforeBraceOrBracket,n.spaceAfterColon=!1!==n.spaceAfterColon,"string"!=typeof e)e=(0,a.default)(e);else{try{e=JSON.parse(e)}catch(e){return console.log(e),{result:!1,msg:e}}e=(0,a.default)(e)}return t=/([\{\}])/g,e=e.replace(t,"\r\n$1\r\n"),t=/([\[\]])/g,e=e.replace(t,"\r\n$1\r\n"),t=/(\,)/g,e=e.replace(t,"$1\r\n"),t=/(\r\n\r\n)/g,e=e.replace(t,"\r\n"),t=/\r\n\,/g,e=e.replace(t,","),n.newlineAfterColonIfBeforeBraceOrBracket||(t=/\:\r\n\{/g,e=e.replace(t,":{"),t=/\:\r\n\[/g,e=e.replace(t,":[")),n.spaceAfterColon&&(t=/\:/g,e=e.replace(t,":")),e.split("\r\n").forEach(function(e,n){var t=0,a=0,o="";for(e.match(/\{$/)||e.match(/\[$/)?a=1:e.match(/\}/)||e.match(/\]/)?0!==l&&(l-=1):a=0,t=0;t<l;t++)o+="    ";r+=o+e+"\r\n",l+=a}),{result:!0,msg:r}},l.formatXml=function(e){e="\n"+e.replace(/(<\w+)(\s.*?>)/g,function(e,n,t){return n+" "+t.replace(/\s+(\w+=)/g," $1")}).replace(/>\s*?</g,">\n<"),e=e.replace(/\n/g,"\r").replace(/<!--(.+?)-->/g,function(e,n){return"\x3c!--"+escape(n)+"--\x3e"}).replace(/\r/g,"\n");var n=/\n(<(([^\?]).+?)(?:\s|\s*?>|\s*?(\/)>)(?:.*?(?:(?:(\/)>)|(?:<(\/)\2>)))?)/gm,t=[],r=e.replace(n,function(e,n,r,a,o,s,i,p){var u="/"==o||"/"==s||"/"==i||"/"==p,c="";return"!"==a?c=l.getPrefix(t.length):"/"!=a?(c=l.getPrefix(t.length),u||t.push(r)):(t.pop(),c=l.getPrefix(t.length)),"\n"+c+n}),a=r.substring(1);return a=a.replace(/\n/g,"\r").replace(/(\s*)<!--(.+?)-->/g,function(e,n,t){return"\r"==n.charAt(0)&&(n=n.substring(1)),t=unescape(t).replace(/\r/g,"\n"),"\n"+n+"\x3c!--"+t.replace(/^\s*/gm,n)+"--\x3e"}),a.replace(/\s+$/g,"").replace(/\r/g,"\r\n")},l.getPrefix=function(e){for(var n=[],t=0;t<e;++t)n.push("    ");return n.join("")},n.default=l},957:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Card",{staticClass:"margin-top-8",attrs:{bordered:!1}},[t("Tabs",{attrs:{type:"card"}},[t("TabPane",{attrs:{label:"JSON格式化"}},[t("p",{staticClass:"float_right"},[t("Button",{attrs:{type:"primary"},on:{click:e.methods1}},[e._v("格式化")]),e._v(" "),t("Button",{attrs:{type:"primary"},on:{click:e.methods2}},[e._v("压缩")]),e._v(" "),t("Button",{attrs:{type:"primary"},on:{click:e.methods3}},[e._v("清空")])],1),e._v(" "),t("br",{staticClass:"clear"}),e._v(" "),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("p",[e._v("操作前")]),e._v(" "),t("p",[t("Input",{attrs:{type:"textarea",placeholder:'输入Json字符串：例如:\r\n{"name":"张三","sex":"男","age":"21"}',rows:14},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}})],1)]),e._v(" "),t("Col",{attrs:{span:"12"}},[t("p",[e._v("操作后")]),e._v(" "),t("p",[t("Input",{attrs:{type:"textarea",placeholder:'例如:\r\n{\r\n    "name": "张三",\r\n    "sex": "男",\r\n    "age":"21"\r\n}',rows:14},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)])],1),e._v(" "),t("br"),e._v(" "),t("Alert",{style:{display:e.value3},attrs:{type:"error","show-icon":""}},[e._v("\r\n          抱歉，此JSON格式有误，无法解析 ：\r\n          "),t("br"),e._v(" "),t("Span",{domProps:{innerHTML:e._s(e.value4)}}),e._v(" "),t("br"),e._v(" "),t("Span",{domProps:{innerHTML:e._s(e.value5)}})],1)],1),e._v(" "),t("TabPane",{attrs:{label:"XML格式化"}},[t("p",{staticClass:"float_right"},[t("Button",{attrs:{type:"primary"},on:{click:e.methods4}},[e._v("格式化")]),e._v(" "),t("Button",{attrs:{type:"primary"},on:{click:e.methods5}},[e._v("压缩")]),e._v(" "),t("Button",{attrs:{type:"primary"},on:{click:e.methods6}},[e._v("清空")])],1),e._v(" "),t("br",{staticClass:"clear"}),e._v(" "),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("p",[e._v("操作前")]),e._v(" "),t("p",[t("Input",{attrs:{type:"textarea",placeholder:'输入Xml字符串：例如:\r\n<?xml version="1.0"?><note><to>Tove</to><from>forms</from><heading>这里是head</heading><body>这里是主体</body></note>',rows:14},model:{value:e.value6,callback:function(n){e.value6=n},expression:"value6"}})],1)]),e._v(" "),t("Col",{attrs:{span:"12"}},[t("p",[e._v("操作后")]),e._v(" "),t("p",[t("Input",{attrs:{type:"textarea",placeholder:'例如:\r\n<?xml version="1.0"?>\r\n<note>\r\n  <to>Tove</to>\r\n  <from>forms</from>\r\n  <heading>这里是head</heading>\r\n  <body>这里是主体</body>\r\n</note>',rows:14},model:{value:e.value7,callback:function(n){e.value7=n},expression:"value7"}})],1)])],1),e._v(" "),t("br"),e._v(" "),t("Alert",{style:{display:e.value8},attrs:{type:"error","show-icon":""}},[e._v("\r\n          抱歉，此XML格式有误，无法解析 ：\r\n          "),t("br"),e._v(" "),t("Span",{domProps:{innerHTML:e._s(e.value9)}}),e._v(" "),t("br"),e._v(" "),t("Span",{domProps:{innerHTML:e._s(e.value10)}})],1)],1)],1)],1)],1)},a=[];r._withStripped=!0;var l={render:r,staticRenderFns:a};n.default=l}});