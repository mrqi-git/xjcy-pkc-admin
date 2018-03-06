# xjcy-pkc-admin
后台管理系统：web-admin

1.项目下载后进入目录先安装组件，执行
	npm install


2.首次本地运行，执行
	npm run init
	npm run dev


3.本地运行，执行
	npm run dev


4.服务端运行打包，改好：build/webpack.prod.config.js文件中的publicPath参数后，执行
	npm run build   (执行打包完成后将目录：dist拷贝致Nginx之类的中间件运行)
