<style>
.font1{
	color:#ffffff;
	font-size:18px;
}
.font2{
	color:#ffffff;
	opacity: .7;
}
.font3{
	color:#657180;
	font-size:18px;
}
.font4{
	color:#657180;
	opacity: .7;
}
</style>
<template>
   <div>

   		<Alert show-icon><a href="https://www.iviewui.com/components/color" target="_blank">详见iView官网color</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			<p><Icon type="arrow-right-b"></Icon> iView 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">主色</p>
	        <p><Icon type="arrow-right-b"></Icon> iView 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。</p>
	        <Row>
        		<Col span="7" class="margin-right-10">
        			<Card style="background-color:#2d8cf0;">
						<div class="font1">Primary</div>
						<div class="font2">#2d8cf0</div>
			    	</Card>
        		</Col>
				<Col span="7" class="margin-right-10">
        			<Card style="background-color:#5cadff;">
						<div class="font1">Light Primary</div>
						<div class="font2">#5cadff</div>
			    	</Card>
        		</Col>
        		<Col span="7" class="margin-right-10">
        			<Card style="background-color:#2b85e4;">
						<div class="font1">Dark Primary</div>
						<div class="font2">#2b85e4</div>
			    	</Card>
        		</Col>
        	</Row>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">辅助色</p>
	        <p><Icon type="arrow-right-b"></Icon> 辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</p>
			<Row>
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#2d8cf0;">
						<div class="font1">Info</div>
						<div class="font2">#2d8cf0</div>
			    	</Card>
        		</Col>
				<Col span="5" class="margin-right-10">
        			<Card style="background-color:#19be6b;">
						<div class="font1">Success</div>
						<div class="font2">#19be6b</div>
			    	</Card>
        		</Col>
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#ff9900;">
						<div class="font1">Warning</div>
						<div class="font2">#ff9900</div>
			    	</Card>
        		</Col>
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#ed3f14;">
						<div class="font1">Error</div>
						<div class="font2">#ed3f14</div>
			    	</Card>
        		</Col>
        	</Row>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">中性色</p>
	        <p><Icon type="arrow-right-b"></Icon> 中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
			<Row>
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#1c2438;">
						<div class="font1">标题 Title</div>
						<div class="font2">#1c2438</div>
			    	</Card>
        		</Col>
				<Col span="5" class="margin-right-10">
        			<Card style="background-color:#495060;">
						<div class="font1">正文 Content</div>
						<div class="font2">#495060</div>
			    	</Card>
        		</Col>
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#80848f;">
						<div class="font1">辅助/图标 Sub Color</div>
						<div class="font2">#80848f</div>
			    	</Card>
        		</Col>
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#bbbec4;">
						<div class="font1">失效 Disabled</div>
						<div class="font2">#bbbec4</div>
			    	</Card>
        		</Col>
        	</Row>
        	<Row class="margin-top-10">
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#dddee1;">
						<div class="font3">边框 Border</div>
						<div class="font4">#dddee1</div>
			    	</Card>
        		</Col>
				<Col span="5" class="margin-right-10">
        			<Card style="background-color:#e9eaec;">
						<div class="font3">分割线 Divider</div>
						<div class="font4">#e9eaec</div>
			    	</Card>
        		</Col>
        		<Col span="5" class="margin-right-10">
        			<Card style="background-color:#f8f8f9;">
						<div class="font3">背景 Background</div>
						<div class="font4">#f8f8f9</div>
			    	</Card>
        		</Col>
        	</Row>
	    </Card>

   </div>
</template>
<script>
    export default {
        
    }
</script>