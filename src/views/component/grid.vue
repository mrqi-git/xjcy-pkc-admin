<style>
.gridstyle1{
	background:#f2f2f2;
	padding:5px 0;
}
.gridstyle2{
	background:#48b3e9;
	padding:10px 0;
	text-align: center;
}
.gridstyle3{
	background:#18a2e6;
	padding:10px 0;
	text-align: center;
}
</style>
<template>
   <div>

   		<Alert show-icon><a href="https://www.iviewui.com/components/grid" target="_blank">详见iView官网grid</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			<p><Icon type="arrow-right-b"></Icon> 我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。
我们定义了两个概念，行row和列col，具体使用方法如下：</p>
			<p><Icon type="log-in"></Icon> 使用row在水平方向创建一行</p>
			<p><Icon type="log-in"></Icon> 将一组col插入在row中</p>
			<p><Icon type="log-in"></Icon> 在每个col中，键入自己的内容</p>
			<p><Icon type="log-in"></Icon> 通过设置col的span参数，指定跨越的范围，其范围是1到24</p>
			<p><Icon type="log-in"></Icon> 每个row中的col总和应该为24</p>
			<br>
			<Alert show-icon>注意：非 template/render 模式下，需使用 i-col。</Alert>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">基础用法</p>
			<p><Icon type="arrow-right-b"></Icon> 水平排列的布局</p>
			<p>col必须放在row里面。</p>
			<Row class-name="gridstyle1">
		        <Col span="12" class-name="gridstyle2">col-12</Col>
		        <Col span="12" class-name="gridstyle3">col-12</Col>
		    </Row>
		    <br>
		    <Row class-name="gridstyle1">
		        <Col span="8" class-name="gridstyle2">col-8</Col>
		        <Col span="8" class-name="gridstyle3">col-8</Col>
		        <Col span="8" class-name="gridstyle2">col-8</Col>
		    </Row>
		    <br>
		    <Row class-name="gridstyle1">
		        <Col span="6" class-name="gridstyle2">col-6</Col>
		        <Col span="6" class-name="gridstyle3">col-6</Col>
		        <Col span="6" class-name="gridstyle2">col-6</Col>
		        <Col span="6" class-name="gridstyle3">col-6</Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> 区块间隔</p>
			<p>通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。</p>
			<Row :gutter="16" class-name="gridstyle1">
		        <Col span="6" class-name="gridstyle2">
		            <div>col-6</div>
		        </Col>
		        <Col span="6" class-name="gridstyle3">
		            <div>col-6</div>
		        </Col>
		        <Col span="6" class-name="gridstyle2">
		            <div>col-6</div>
		        </Col>
		        <Col span="6" class-name="gridstyle3">
		            <div>col-6</div>
		        </Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> 栅格顺序(Flex)</p>
			<p>通过 Flex 布局的order来改变栅格的顺序。</p>
			<Row type="flex" class-name="gridstyle1">
		        <Col span="6" order="4" class-name="gridstyle3">1 | order-4</Col>
		        <Col span="6" order="3" class-name="gridstyle2">2 | order-3</Col>
		        <Col span="6" order="2" class-name="gridstyle3">3 | order-2</Col>
		        <Col span="6" order="1" class-name="gridstyle2">4 | order-1</Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> 栅格排序</p>
			<p>通过设置push和pull来改变栅格的顺序。</p>
			<Row class-name="gridstyle1">
		        <Col span="18" push="6" class-name="gridstyle2">col-18 | push-6</Col>
		        <Col span="6" pull="18" class-name="gridstyle3">col-6 | pull-18</Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> 左右偏移</p>
			<p>通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</p>
			<Row class-name="gridstyle1">
		        <Col span="8" class-name="gridstyle2">col-8</Col>
		        <Col span="8" offset="8" class-name="gridstyle3">col-8 | offset-8</Col>
		    </Row>
		    <br>
		    <Row class-name="gridstyle1">
		        <Col span="6" offset="8" class-name="gridstyle2">col-6 | offset-8</Col>
		        <Col span="6" offset="4" class-name="gridstyle3">col-6 | offset-4</Col>
		    </Row>
		    <br>
		    <Row class-name="gridstyle1">
		        <Col span="12" offset="8" class-name="gridstyle2">col-12 | offset-8</Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> Flex布局</p>
			<p>通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。</p>
			<p>子元素向左排列</p>
		    <Row type="flex" justify="start" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		    </Row>
		    <p>子元素向右排列</p>
		    <Row type="flex" justify="end" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		    </Row>
		    <p>子元素居中排列</p>
		    <Row type="flex" justify="center" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		    </Row>
		    <p>子元素等宽排列</p>
		    <Row type="flex" justify="space-between" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		    </Row>
		    <p>子元素分散排列</p>
		    <Row type="flex" justify="space-around" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		        <Col span="4" class-name="gridstyle2">col-4</Col>
		        <Col span="4" class-name="gridstyle3">col-4</Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> Flex对齐</p>
			<p>通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。</p>
			<p>顶部对齐</p>
		    <Row type="flex" justify="center" align="top" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2"><p style="height: 80px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle3"><p style="height: 30px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle2"><p style="height: 100px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle3"><p style="height: 60px">col-4</p></Col>
		    </Row>
		    <p>底部对齐</p>
		    <Row type="flex" justify="center" align="bottom" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2"><p style="height: 80px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle3"><p style="height: 30px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle2"><p style="height: 100px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle3"><p style="height: 60px">col-4</p></Col>
		    </Row>
		    <p>居中对齐</p>
		    <Row type="flex" justify="center" align="middle" class-name="gridstyle1">
		        <Col span="4" class-name="gridstyle2"><p style="height: 80px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle3"><p style="height: 30px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle2"><p style="height: 100px">col-4</p></Col>
		        <Col span="4" class-name="gridstyle3"><p style="height: 60px">col-4</p></Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> 响应式布局</p>
			<p>参照 Bootstrap 的 <a href="http://getbootstrap.com/css/#grid-media-queries" target="_blank">响应式设计</a>，预设四个响应尺寸：xs sm md lg，详见 API。</p>
			<p>调整浏览器尺寸来查看效果</p>
			<Row class-name="gridstyle1">
		        <Col :xs="2" :sm="4" :md="6" :lg="8" class-name="gridstyle2">Col</Col>
		        <Col :xs="20" :sm="16" :md="12" :lg="8" class-name="gridstyle3">Col</Col>
		        <Col :xs="2" :sm="4" :md="6" :lg="8" class-name="gridstyle2">Col</Col>
		    </Row>


		    <br><br>
			<p><Icon type="arrow-right-b"></Icon> 其它属性的响应式 </p>
			<p>span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。</p>
			<p>其中 :xs="6" 相当于 :xs="{ span: 6 }"。</p>
			<Row class-name="gridstyle1">
		        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class-name="gridstyle2">Col</Col>
		        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class-name="gridstyle3">Col</Col>
		        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class-name="gridstyle2">Col</Col>
		    </Row>

	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">API</p>
	        <p>Row props</p>
	        <Table border :columns="columns1" :data="data1"></Table>
	        
	        <br>
	        <p>Row props</p>
	        <Table border :columns="columns1" :data="data2"></Table>
	    </Card>
<BackTop></BackTop>
   </div>
   
</template>
<script>
    export default {
        data(){
    		return {
	    			columns1: [
	                {
	                    title: '属性',
	                    key: 'prop1',
	                    width: '10%'
	                },
	                {
	                    title: '说明',
	                    key: 'prop2'
	                },
	                {
	                    title: '类型',
	                    key: 'prop3',
	                    width: '20%'
	                },
	                {
	                    title: '默认值',
	                    key: 'prop4',
	                    width: '10%'
	                }
	            ],
	            data1: [
	                {
	                    prop1: 'gutter',
	                    prop2: '栅格间距，单位 px，左右平分',
	                    prop3: 'Number',
	                    prop4: '0'
	                },
	                {
	                    prop1: 'type',
	                    prop2: '布局模式，可选值为flex或不选，在现代浏览器下有效',
	                    prop3: 'String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'align',
	                    prop2: 'flex 布局下的垂直对齐方式，可选值为top、middle、bottom',
	                    prop3: 'String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'justify',
	                    prop2: 'flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between',
	                    prop3: 'String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'class-name',
	                    prop2: '自定义的class名称',
	                    prop3: 'String',
	                    prop4: '-'
	                }
	            ],
	            data2: [
	                {
	                    prop1: 'span',
	                    prop2: '栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none',
	                    prop3: 'Number | String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'order',
	                    prop2: '栅格的顺序，在flex布局模式下有效',
	                    prop3: 'Number | String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'offset',
	                    prop2: '栅格左侧的间隔格数，间隔内不可以有栅格',
	                    prop3: 'Number | String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'push',
	                    prop2: '栅格向右移动格数',
	                    prop3: 'Number | String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'pull',
	                    prop2: '栅格向左移动格数',
	                    prop3: 'Number | String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'class-name',
	                    prop2: '自定义的class名称',
	                    prop3: 'String',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'xs',
	                    prop2: '<768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
	                    prop3: 'Number | Object',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'sm',
	                    prop2: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
	                    prop3: 'Number | Object',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'md',
	                    prop2: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
	                    prop3: 'Number | Object',
	                    prop4: '-'
	                },
	                {
	                    prop1: 'lg',
	                    prop2: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
	                    prop3: 'Number | Object',
	                    prop4: '-'
	                }
	            ]
    		}
        }
    }
</script>