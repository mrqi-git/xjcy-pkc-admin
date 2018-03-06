webpackJsonp([24],{1063:function(t,n,e){var i=e(1064);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(17)("01094ffe",i,!1,{})},1064:function(t,n,e){n=t.exports=e(16)(!1),n.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n/**\n* 自定义基础样式\n*/\n.float_right {\n  float: right;\n}\n.clear {\n  clear: both;\n}\n.admin-upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.admin-upload-list img {\n  width: 100%;\n  height: 100%;\n}\n.admin-upload-list-cover {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.admin-upload-list:hover .admin-upload-list-cover {\n  display: block;\n}\n.admin-upload-list-cover i {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n",""])},1065:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Row",[e("Col",{attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-cloud-upload-outline"}}),t._v("\n                    基本上传功能\n                ")],1),t._v(" "),e("div",{staticClass:"height-120px"},[e("Row",{staticClass:"height-100",attrs:{type:"flex",justify:"center",align:"middle"}},[e("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[e("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1)],1)])],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-copy-outline"}}),t._v("\n                    可多选的上传\n                ")],1),t._v(" "),e("div",{staticClass:"height-120px"},[e("Row",{staticClass:"height-100",attrs:{type:"flex",justify:"center",align:"middle"}},[e("Upload",{attrs:{multiple:"",action:"//jsonplaceholder.typicode.com/posts/"}},[e("span",[t._v("多选文件上传  ")]),t._v(" "),e("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1)],1)])],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"upload"}}),t._v("\n                    可限制文件类型\n                ")],1),t._v(" "),e("div",{staticClass:"height-120px"},[e("Row",{staticClass:"height-100",attrs:{type:"flex",justify:"center",align:"middle"}},[e("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/",format:["jpg","png","jpeg","gif","bmp","svg"],"on-format-error":t.handleFormatError}},[e("span",[t._v("选择图片上传  ")]),t._v(" "),e("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1)],1)])],1)],1),t._v(" "),e("div",{staticClass:"margin-top-10"},[e("Col",{attrs:{span:"8"}},[e("div",[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-funnel"}}),t._v("\n                        可监听上传各个阶段\n                    ")],1),t._v(" "),e("div",{staticClass:"height-200px"},[e("Row",{staticClass:"height-100",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticStyle:{display:"block",width:"100%","text-align":"center"}},[e("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/","on-format-error":t.handleFormatError,"before-upload":t.handleBeforeUpload,"on-progress":t.handleProgress,"on-success":t.handleSuccess,"on-error":t.handleError}},[e("span",[t._v("请选择文件  ")]),t._v(" "),e("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传文件")])],1)],1)])],1)])],1),t._v(" "),e("div",{staticClass:"margin-top-10"},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-hand"}}),t._v("\n                        可拖拽上传\n                    ")],1),t._v(" "),e("div",{staticClass:"height-200px"},[e("Upload",{attrs:{multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[e("div",{staticStyle:{padding:"60px 0",height:"200px"}},[e("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),e("p",[t._v("点击或将文件拖拽到这里上传")])],1)])],1)])],1)]),t._v(" "),e("Col",{attrs:{span:"16"}},[e("div",{staticClass:"padding-left-10"},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                        综合实例\n                    ")],1),t._v(" "),e("div",{staticClass:"height-492px"},[e("Col",{attrs:{span:"8"}},[e("Card",[e("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":t.defaultList,"on-success":t.handleSuccess2,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":t.handleFormatError2,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload2,multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[e("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[e("Icon",{attrs:{type:"camera",size:"20"}})],1)]),t._v(" "),e("Modal",{attrs:{title:"查看图片"},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[t.visible?e("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+t.imgName+"/large"}}):t._e()])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("Card",[e("div",{staticClass:"height-460px"},t._l(t.uploadList,function(n){return e("div",{key:n.url,staticClass:"admin-upload-list"},["finished"===n.status?[e("img",{attrs:{src:n.url}}),t._v(" "),e("div",{staticClass:"admin-upload-list-cover"},[e("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){t.handleView(n.name)}}}),t._v(" "),e("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(e){t.handleRemove(n)}}})],1)]:[n.showProgress?e("Progress",{attrs:{percent:n.percentage,"hide-info":""}}):t._e()]],2)}))])],1)],1)])],1)])],1)],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};n.default=o},312:function(t,n,e){"use strict";function i(t){d||e(1063)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(589),o=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);var l=e(1065),r=e.n(l),d=!1,p=e(1),c=i,h=p(o.a,r.a,!1,c,null,null);h.options.__file="src\\views\\component-group\\my-components\\file-upload\\file-upload.vue",n.default=h.exports},589:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"file-upload",data:function(){return{defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"},{name:"bc7521e033abdd1e92222d733590f104",url:"https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"}],imgName:"",visible:!1,uploadList:[]}},methods:{handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请选择图片文件。"})},handleBeforeUpload:function(t){this.$Notice.warning({title:"文件准备上传",desc:"文件 "+t.name+" 准备上传。"})},handleProgress:function(t,n){this.$Notice.info({title:"文件正在上传",desc:"文件 "+n.name+" 正在上传。"})},handleSuccess:function(t,n){this.$Notice.success({title:"文件上传成功",desc:"文件 "+n.name+" 上传成功。"})},handleError:function(t,n){this.$Notice.error({title:"文件上传成功",desc:"文件 "+n.name+" 上传失败。"})},handleView:function(t){this.imgName=t,this.visible=!0},handleRemove:function(t){var n=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(n.indexOf(t),1)},handleSuccess2:function(t,n){n.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",n.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError2:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 2M。"})},handleBeforeUpload2:function(){var t=this.uploadList.length<5;return t||this.$Notice.warning({title:"最多只能上传 5 张图片。"}),t}},mounted:function(){this.uploadList=this.$refs.upload.fileList}}}});