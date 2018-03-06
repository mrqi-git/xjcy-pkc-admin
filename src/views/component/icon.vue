<template>
   <div>

        <Alert show-icon><a href="https://www.iviewui.com/components/icon" target="_blank">详见iView官网icon</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			<p><Icon type="arrow-right-b"></Icon> iView 的图标使用开源项目<a href="http://ionicons.com/" target="_blank"><i class="ivu-icon ivu-icon-ionic"></i> ionicons </a></p>
			<p><Icon type="arrow-right-b"></Icon> 通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。</p>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	       	<p slot="title">如何使用</p>
			<p><Icon type="arrow-right-b"></Icon> 使用<Icon />组件，指定图标对应的type属性，示例代码：<Input v-model="example1" placeholder="Enter something..."></Input></p>
			<p><Icon type="arrow-right-b"></Icon> 渲染后为：<Input v-model="example2" placeholder="Enter something..."></Input></p>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	       	<p slot="title">API</p>
			<p>Icon props</p>
			<Table border :columns="columns1" :data="data1"></Table>
	    </Card>

   </div>
</template>
<script>
    export default {
        data(){
        	return {
        		example1: '<Icon type="checkmark" />',
        		example2: '<i class="ivu-icon ivu-icon-checkmark"></i>',
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
                        prop1: 'type',
                        prop2: '图标的名称',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'size',
                        prop2: '图标的大小，单位是 px',
                        prop3: 'Number | String',
                        prop4: '-'
                    },
                    {
                        prop1: 'color',
                        prop2: '图标的颜色',
                        prop3: 'String',
                        prop4: '-'
                    }
                ]
        	}
        }
    }
</script>