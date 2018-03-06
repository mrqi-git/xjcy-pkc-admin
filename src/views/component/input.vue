<style lang="less">
    @import "../../styles/common.less";
</style>
<template>
	<div>

    <Alert show-icon><a href="https://www.iviewui.com/components/input" target="_blank">详见iView官网input</a></Alert>

	<Card :bordered="false">
        <p slot="title">基础</p>
        <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
        <br/><br/>
        <p><Icon type="arrow-right-b"></Icon> 基本用法，可以使用 v-model 实现数据的双向绑定。</p>
		<p><Icon type="arrow-right-b"></Icon> 可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
    </Card>

    <Card :bordered="false" class="margin-top-8">
        <p slot="title">尺寸</p>
        <Input v-model="value1" size="large" placeholder="large size"></Input>
        <br/><br/>
		<Input v-model="value2" placeholder="default size"></Input>
        <br/><br/>
		<Input v-model="value3" size="small" placeholder="small size"></Input>
		<br/><br/>
		<p><Icon type="arrow-right-b"></Icon> 输入框有三种尺寸：大、默认（中）、小</p>
		<p><Icon type="arrow-right-b"></Icon> 通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。</p>
    </Card>

    <Card :bordered="false" class="margin-top-8">
        <p slot="title">带Icon的输入框</p>
        <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></Input>
		<br/><br/>
		<p><Icon type="arrow-right-b"></Icon> 通过 icon 属性可以在输入框右边加一个图标。</p>
		<p><Icon type="arrow-right-b"></Icon> 点击图标，会触发 on-click 事件。</p>
    </Card>

    <Card :bordered="false" class="margin-top-8">
        <p slot="title">文本域</p>
        <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
        <br/><br/>
    	<Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
		<br/><br/>
		<p><Icon type="arrow-right-b"></Icon> 通过设置属性 type 为 textarea 来使用文本域，用于多行输入。</p>
		<p><Icon type="arrow-right-b"></Icon> 通过设置属性 rows 控制文本域默认显示的行数。</p>
    </Card>

    <Card :bordered="false" class="margin-top-8">
        <p slot="title">适应文本高度的文本域</p>
        <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
        <br/><br/>
    	<Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
		<br/><br/>
		<p><Icon type="arrow-right-b"></Icon> 设置属性 autosize，文本域会自动适应高度的变化。</p>
		<p><Icon type="arrow-right-b"></Icon> autosize也可以设定为一个对象，指定最小行数和最大行数。</p>
    </Card>

    <Card :bordered="false" class="margin-top-8">
        <p slot="title">禁用状态</p>
        <Input v-model="value9" disabled placeholder="Enter something..."></Input>
        <br/><br/>
    	<Input v-model="value10" disabled type="textarea" placeholder="Enter something..."></Input>
		<br/><br/>
		<p><Icon type="arrow-right-b"></Icon> 通过添加disabled属性可设置为不可用状态。</p>
    </Card>

    <Card :bordered="false" class="margin-top-8">
        <p slot="title">复合型输入框</p>
        <Input v-model="value11">
	        <span slot="prepend">http://</span>
	        <span slot="append">.com</span>
	    </Input>
    	<br>
	    <Input v-model="value12">
	        <Select v-model="select1" slot="prepend" style="width: 80px">
	            <Option value="http">http://</Option>
	            <Option value="https">https://</Option>
	        </Select>
	        <Select v-model="select2" slot="append" style="width: 70px">
	            <Option value="com">.com</Option>
	            <Option value="org">.org</Option>
	            <Option value="io">.io</Option>
	        </Select>
	    </Input>
	    <br>
	    <Input v-model="value13">
	        <Select v-model="select3" slot="prepend" style="width: 80px">
	            <Option value="day">Day</Option>
	            <Option value="month">Month</Option>
	        </Select>
	        <Button slot="append" icon="ios-search"></Button>
	    </Input>
		<br/>
		<p><Icon type="arrow-right-b"></Icon> 通过前置和后置的 slot 可以实现复合型的输入框。</p>
    </Card>

    <Card :bordered="false" class="margin-top-8">
        <p slot="title">API</p>
        <p>Input props</p>
        <Table border :columns="columns1" :data="data1"></Table>
        <br><br>
        <p>Input events</p>
        <Table border :columns="columns2" :data="data2"></Table>
        <br><br>
        <p>Input slot</p>
        <Table border :columns="columns3" :data="data3"></Table>
        <br><br>
        <p>Input methods</p>
        <Table border :columns="columns4" :data="data4"></Table>
    </Card>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                select1: 'http',
                select2: 'com',
                select3: 'day',
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
                columns2: [
                    {
                        title: '事件名',
                        key: 'prop1',
                        width: '10%'
                    },
                    {
                        title: '说明',
                        key: 'prop2'
                    },
                    {
                        title: '返回值',
                        key: 'prop3',
                        width: '10%'
                    }
                ],
                columns3: [
                    {
                        title: '名称',
                        key: 'prop1',
                        width: '10%'
                    },
                    {
                        title: '说明',
                        key: 'prop2'
                    }
                ],
                columns4: [
                    {
                        title: '方法名',
                        key: 'prop1',
                        width: '10%'
                    },
                    {
                        title: '说明',
                        key: 'prop2'
                    },
                    {
                        title: '参数',
                        key: 'prop3',
                        width: '10%'
                    }
                ],
                data1: [
                    {
                        prop1: 'type',
                        prop2: '输入框类型，可选值为 text、password、textarea、url、email、date',
                        prop3: 'String',
                        prop4: 'text'
                    },
                    {
                        prop1: 'value',
                        prop2: '绑定的值，可使用 v-model 双向绑定',
                        prop3: 'String | Number',
                        prop4: '空'
                    },
                    {
                        prop1: 'size',
                        prop2: '输入框尺寸，可选值为large、small、default或者不设置',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'placeholder',
                        prop2: '占位文本',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'disabled',
                        prop2: '设置输入框为禁用状态',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'readonly',
                        prop2: '设置输入框为只读',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'maxlength',
                        prop2: '最大输入长度',
                        prop3: 'Number',
                        prop4: '-'
                    },
                    {
                        prop1: 'icon',
                        prop2: '输入框尾部图标，仅在 text 类型下有效',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'rows',
                        prop2: '文本域默认行数，仅在 textarea 类型下有效',
                        prop3: 'Number',
                        prop4: '2'
                    },
                    {
                        prop1: 'autosize',
                        prop2: '自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }',
                        prop3: 'Boolean | Object',
                        prop4: 'false'
                    },
                    {
                        prop1: 'number',
                        prop2: '将用户的输入转换为 Number 类型',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'autofocus',
                        prop2: '自动获取焦点',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'autocomplete',
                        prop2: '原生的自动完成功能，可选值为 off 和 on',
                        prop3: 'String',
                        prop4: 'off'
                    },
                    {
                        prop1: 'element-id',
                        prop2: '给表单元素设置 id，详见 Form 用法。',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'spellcheck',
                        prop2: '原生的 spellcheck 属性',
                        prop3: 'Boolean',
                        prop4: 'false'
                    }
                ],
                data2: [
                    {
                        prop1: 'on-enter',
                        prop2: '按下回车键时触发',
                        prop3: '无'
                    },
                    {
                        prop1: 'on-click',
                        prop2: '设置 icon 属性后，点击图标时触发',
                        prop3: '无'
                    },
                    {
                        prop1: 'on-change',
                        prop2: '数据改变时触发',
                        prop3: 'event'
                    },
                    {
                        prop1: 'on-focus',
                        prop2: '输入框聚焦时触发',
                        prop3: '无'
                    },
                    {
                        prop1: 'on-blur',
                        prop2: '输入框失去焦点时触发',
                        prop3: '无'
                    },
                    {
                        prop1: 'on-keyup',
                        prop2: '原生的 keyup 事件',
                        prop3: 'event'
                    },
                    {
                        prop1: 'on-keydown',
                        prop2: '原生的 keydown 事件',
                        prop3: 'event'
                    },
                    {
                        prop1: 'on-keypress',
                        prop2: '原生的 keypress 事件',
                        prop3: 'event'
                    },
                ],
                data3: [
                    {
                        prop1: 'prepend',
                        prop2: '前置内容，仅在 text 类型下有效'
                    },
                    {
                        prop1: 'append',
                        prop2: '后置内容，仅在 text 类型下有效'
                    }
                ],
                data4: [
                    {
                        prop1: 'focus',
                        prop2: '手动聚焦输入框',
                        prop3: '无'
                    }
                ]
            }
        }
    }
</script>
