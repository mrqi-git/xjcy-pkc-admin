<template>
   <div>

        <Alert show-icon><a href="https://www.iviewui.com/components/font" target="_blank">详见iView官网font</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			<p><Icon type="arrow-right-b"></Icon> iView 的 CSS 对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。我们推荐  macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。</p>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">字体预览</p>
	        <p><Icon type="arrow-right-b"></Icon> 中文字体</p>
			<p><img src="https://file.iviewui.com/dist/aac43973c6b6d72bf7aa852ecb2302c5.png" style="width:864px;height:173px"></p>
			<br><br>
			<p><Icon type="arrow-right-b"></Icon> 英文字体</p>
			<p><p><img src="https://file.iviewui.com/dist/f4b37f948e311cb4bbcb609b17b8db62.png" style="width:864px;height:173px"></p></p>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">字体代码</p>
	        <p><Input v-model="example1" placeholder="Enter something..."></Input></p>
	    </Card>

	     <Card :bordered="false" class="margin-top-8">
	        <p slot="title">使用规范</p>
			<p><Icon type="arrow-right-b"></Icon> 中文字体</p>
			<Table border :columns="columns1" :data="data1"></Table>
			<br><br>
			<p><Icon type="arrow-right-b"></Icon> 中文字体</p>
			<Table border :columns="columns2" :data="data2"></Table>
	    </Card>

   </div>
</template>
<script>
    export default {
        data () {
        	return {
        		example1 : 'font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;',
        		columns1: [
                    {
                        title: '中文字体',
                        key: 'prop1',
                        width: '10%'
                    },
                    {
                        title: '示例',
                        key: 'prop2'
                    },
                    {
                        title: '粗细',
                        key: 'prop3',
                        width: '10%'
                    },
                    {
                        title: '颜色',
                        key: 'prop4',
                        width: '10%'
                    },
                    {
                        title: '色号',
                        key: 'prop5',
                        width: '10%'
                    }
                ],
                columns2: [
                    {
                        title: '英文字体',
                        key: 'prop1',
                        width: '10%'
                    },
                    {
                        title: '示例',
                        key: 'prop2'
                    },
                    {
                        title: '粗细',
                        key: 'prop3',
                        width: '10%'
                    },
                    {
                        title: '颜色',
                        key: 'prop4',
                        width: '10%'
                    },
                    {
                        title: '色号',
                        key: 'prop5',
                        width: '10%'
                    }
                ],
                data1: [
                    {
                        prop1: '主标题',
                        prop2: '我是主标题',
                        prop3: '加粗',
                        prop4: '#464c5b',
                        prop5: '16px',
                        cellClassName: {
                        	prop2: 'mainHeadFont'
                        }
                    },
                    {
                        prop1: '次标题',
                        prop2: '我是次标题',
                        prop3: '加粗',
                        prop4: '#464c5b',
                        prop5: '14px',
                        cellClassName: {
                        	prop2: 'subHeadFont'
                        }
                    },
                    {
                        prop1: '小标题',
                        prop2: '我是小标题',
                        prop3: '加粗',
                        prop4: '#464c5b',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'smallHeadFont'
                        }
                    },
                    {
                        prop1: '正文',
                        prop2: '我是正文',
                        prop3: '默认',
                        prop4: '#657180',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'textFont'
                        }
                    },
                    {
                        prop1: '辅助文字',
                        prop2: '我是辅助文字',
                        prop3: '默认',
                        prop4: '#9ea7b4',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'helpFont'
                        }
                    },
                    {
                        prop1: '失效文字',
                        prop2: '我是失效文字',
                        prop3: '默认',
                        prop4: '#c3cbd6',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'disabledFont'
                        }
                    },
                    {
                        prop1: '链接文字',
                        prop2: '我是链接文字',
                        prop3: '默认',
                        prop4: '#3399ff',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'linkFont'
                        }
                    }
                ],
                data2: [
                    {
                        prop1: 'Main Head',
                        prop2: 'This is an example',
                        prop3: 'bold',
                        prop4: '#464c5b',
                        prop5: '16px',
                        cellClassName: {
                        	prop2: 'mainHeadFont'
                        }
                    },
                    {
                        prop1: 'Sub Head',
                        prop2: 'This is an example',
                        prop3: 'bold',
                        prop4: '#464c5b',
                        prop5: '14px',
                        cellClassName: {
                        	prop2: 'subHeadFont'
                        }
                    },
                    {
                        prop1: 'Small Head',
                        prop2: 'This is an example',
                        prop3: 'bold',
                        prop4: '#464c5b',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'smallHeadFont'
                        }
                    },
                    {
                        prop1: 'Text',
                        prop2: 'This is an example',
                        prop3: 'normal',
                        prop4: '#657180',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'textFont'
                        }
                    },
                    {
                        prop1: 'Help',
                        prop2: 'This is an example',
                        prop3: 'normal',
                        prop4: '#9ea7b4',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'helpFont'
                        }
                    },
                    {
                        prop1: 'Disabled',
                        prop2: 'This is an example',
                        prop3: 'normal',
                        prop4: '#c3cbd6',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'disabledFont'
                        }
                    },
                    {
                        prop1: 'Link',
                        prop2: 'This is an example',
                        prop3: 'normal',
                        prop4: '#3399ff',
                        prop5: '12px',
                        cellClassName: {
                        	prop2: 'linkFont'
                        }
                    }
                ]
        	}
        }
    }
</script>