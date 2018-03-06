webpackJsonp([8],{1066:function(t,n,e){var a=e(1067);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(17)("a1eb896a",a,!1,{})},1067:function(t,n,e){n=t.exports=e(16)(!1),n.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n/**\n* 自定义基础样式\n*/\n.float_right {\n  float: right;\n}\n.clear {\n  clear: both;\n}\n.countto-page-row {\n  height: 200px;\n}\n.count-to-con {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.pre-code-show-con p {\n  height: 30px;\n  margin: 0;\n}\n",""])},1068:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(591),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var s=e(1069),l=e.n(s),r=e(1),u=r(o.a,l.a,!1,null,null,null);u.options.__file="src\\views\\component-group\\my-components\\count-to\\CountTo.vue",n.default=u.exports},1069:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{class:t.mainClass,style:t.mainStyle},[t._t("leftText"),t._v(" "),e("span",{class:t.countClass,style:t.countStyle},[e("span",{attrs:{id:t.countId}},[t._v(t._s(t.initCount))]),e("span",[t._v(t._s(t.unitText))])]),t._v(" "),t._t("rightText")],2)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},1070:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Row",[e("Col",{attrs:{span:"3"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"waterdrop"}}),t._v("\n                    CountTo组件基础用法\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534}})],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"5"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"code"}}),t._v("\n                    可添加左右文字\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"paintbucket"}}),t._v("\n                    自定义样式\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"settings"}}),t._v("\n                    设置数据格式\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle,decimals:2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1),t._v(" "),e("Row",{staticClass:"margin-top-10"},[e("Col",{attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-color-wand"}}),t._v("\n                    转换单位简化数据\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{simplify:!0,endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-shuffle-strong"}}),t._v("\n                    自定义单位\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:253,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：253 => ")])]),t._v(" "),e("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:2534,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：2534 => ")])]),t._v(" "),e("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:257678,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：257678 => ")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-stopwatch"}}),t._v("\n                    可异步更新数据\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:t.asynEndVal,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1),t._v(" "),e("Row",{staticClass:"margin-top-10"},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                综合实例\n            ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{delay:500,simplify:!0,unit:t.unit2,endVal:t.integratedEndVal,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据: "+t._s(t.integratedEndVal)+" => ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},313:function(t,n,e){"use strict";function a(t){u||e(1066)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(590),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);var l=e(1070),r=e.n(l),u=!1,c=e(1),d=a,p=c(i.a,r.a,!1,d,null,null);p.options.__file="src\\views\\component-group\\my-components\\count-to\\count-to.vue",n.default=p.exports},430:function(t,n,e){var a,o;!function(i,s){a=s,void 0!==(o="function"==typeof a?a.call(n,e,n,t):a)&&(t.exports=o)}(0,function(t,n,e){return function(t,n,e,a,o,i){for(var s=0,l=["webkit","moz","ms","o"],r=0;r<l.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[l[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[r]+"CancelAnimationFrame"]||window[l[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var e=(new Date).getTime(),a=Math.max(0,16-(e-s)),o=window.setTimeout(function(){t(e+a)},a);return s=e+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var u=this;u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var c in i)i.hasOwnProperty(c)&&(u.options[c]=i[c]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof t?document.getElementById(t):t,u.startVal=Number(n),u.endVal=Number(e),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,a||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(o)||2e3,u.formatNumber=function(t){t=t.toFixed(u.decimals),t+="";var n,e,a,o;if(n=t.split("."),e=n[0],a=n.length>1?u.options.decimal+n[1]:"",o=/(\d+)(\d{3})/,u.options.useGrouping)for(;o.test(e);)e=e.replace(o,"$1"+u.options.separator+"$2");return u.options.prefix+e+a+u.options.suffix},u.easeOutExpo=function(t,n,e,a){return e*(1-Math.pow(2,-10*t/a))*1024/1023+n},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(t){var n=u.formattingFn(t);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(t){u.startTime||(u.startTime=t),u.timestamp=t;var n=t-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(t){return u.callback=t,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=n,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(t){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(t),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)}})},590:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(1068),o=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={name:"count-to",components:{CountTo:o.default},data:function(){return{endVal:0,mainStyle:{fontSize:"30px"},countStyle:{fontSize:"50px",color:"#dc9387"},mainStyle2:{fontSize:"22px"},countStyle2:{fontSize:"30px",color:"#dc9387"},unit:[[3,"千多"],[4,"万多"],[5,"十万多"]],unit2:[[1,"十多"],[2,"百多"],[3,"千多"],[4,"万多"],[5,"十万多"],[6,"百万多"],[7,"千万多"],[8,"亿多"]],asynEndVal:487,integratedEndVal:3}},methods:{init:function(){var t=this;setInterval(function(){t.asynEndVal+=parseInt(20*Math.random()),t.integratedEndVal+=parseInt(30*Math.random())},2e3)}},mounted:function(){this.init()}}},591:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(430),o=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={name:"CountTo",data:function(){return{counter:{},unitText:"",countId:"count"+parseInt(1e6*Math.random())}},props:{mainClass:String,countClass:String,mainStyle:{type:Object,default:function(){return{fontSize:"16px",fontWeight:500,color:"gray"}}},countStyle:Object,initCount:{type:Number,default:0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},simplify:{type:Boolean,default:!1},duration:{type:Number,default:2},delay:{type:Number,default:200},uneasing:{type:Boolean,default:!1},ungroup:{type:Boolean,default:!1},separator:{type:String,default:","},decimals:{type:Number,default:0},decimal:{type:String,default:"."},unit:{type:Array,default:function(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}}},methods:{transformValue:function(t){var n=0,e="",a=this.unit.length;if(t<Math.pow(10,this.unit[0][0]))n=t;else for(var o=1;o<a;o++)t>=Math.pow(10,this.unit[o-1][0])&&t<Math.pow(10,this.unit[o][0])&&(n=parseInt(t/Math.pow(10,this.unit[o-1][0])),e=this.unit[o-1][1]);return t>Math.pow(10,this.unit[a-1][0])&&(n=parseInt(t/Math.pow(10,this.unit[a-1][0])),e=this.unit[a-1][1]),{val:n,unit:e}}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var n=0,e={};t.simplify?(e=t.transformValue(t.endVal),n=e.val,t.unitText=e.unit):n=t.endVal;var a={};t.counter=a=new o.default(t.countId,t.startVal,n,t.decimals,t.duration,{useEasing:!t.uneasing,useGrouping:!t.ungroup,separator:t.separator,decimal:t.decimal}),a.error||a.start()},t.delay)})},watch:{endVal:function(t){var n=0;if(this.simplify){var e=this.transformValue(this.endVal);n=e.val,this.unitText=e.unit}else n=this.endVal;this.counter.update(n)}}}}});