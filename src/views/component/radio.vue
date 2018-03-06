<template>
   <div>

        <Alert show-icon><a href="https://www.iviewui.com/components/radio" target="_blank">详见iView官网radio</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			<p>基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>
	    </Card>

      <Card :bordered="false" class="margin-top-8">
          <p slot="title">示例</p>
          

          <p><Icon type="arrow-right-b"></Icon> 单独使用</p>
          <p>使用 v-model 可以双向绑定数据。</p>
          <br>
          <Radio v-model="single">Radio</Radio> <Span class="helpFont">:{{single}}</Span>
          

          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 组合使用</p>
          <p>使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。</p>
          <br>
          <RadioGroup v-model="phone">
              <Radio label="apple">
                  <Icon type="social-apple"></Icon>
                  <span>Apple</span>
              </Radio>
              <Radio label="android">
                  <Icon type="social-android"></Icon>
                  <span>Android</span>
              </Radio>
              <Radio label="windows">
                  <Icon type="social-windows"></Icon>
                  <span>Windows</span>
              </Radio>
          </RadioGroup><br>
          <Span class="helpFont">:{{phone}}</Span>
          <br>
          <RadioGroup v-model="animal">
              <Radio label="金斑蝶"></Radio>
              <Radio label="爪哇犀牛"></Radio>
              <Radio label="印度黑羚"></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{animal}}</Span>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 不可用</p>
          <p>通过设置disabled属性来禁用单选框。</p>
          <Radio v-model="disabledSingle" disabled>Radio</Radio>
          <br>
          <Span class="helpFont">:{{disabledSingle}}</Span>
          <br>
          <RadioGroup v-model="disabledGroup">
              <Radio label="金斑蝶" disabled></Radio>
              <Radio label="爪哇犀牛"></Radio>
              <Radio label="印度黑羚"></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{disabledGroup}}</Span>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 垂直</p>
          <p>设置属性 vertical 可以垂直显示，按钮样式下无效。</p>
          <RadioGroup v-model="vertical" vertical>
              <Radio label="apple">
                  <Icon type="social-apple"></Icon>
                  <span>Apple</span>
              </Radio>
              <Radio label="android">
                  <Icon type="social-android"></Icon>
                  <span>Android</span>
              </Radio>
              <Radio label="windows">
                  <Icon type="social-windows"></Icon>
                  <span>Windows</span>
              </Radio>
          </RadioGroup>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 按钮样式</p>
          <p>组合使用时可以设置属性type为 button 来应用按钮的样式。</p>
          <RadioGroup v-model="button1" type="button">
              <Radio label="北京"></Radio>
              <Radio label="上海"></Radio>
              <Radio label="深圳"></Radio>
              <Radio label="杭州"></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{button1}}</Span>
          <br>
          <RadioGroup v-model="button2" type="button">
              <Radio label="北京"></Radio>
              <Radio label="上海" disabled></Radio>
              <Radio label="深圳"></Radio>
              <Radio label="杭州"></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{button2}}</Span>
          <br>
          <RadioGroup v-model="button3" type="button">
              <Radio label="北京" disabled></Radio>
              <Radio label="上海" disabled></Radio>
              <Radio label="深圳" disabled></Radio>
              <Radio label="杭州" disabled></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{button3}}</Span>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 尺寸</p>
          <p>通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。</p>
          <RadioGroup v-model="button4" type="button" size="large">
              <Radio label="北京"></Radio>
              <Radio label="上海"></Radio>
              <Radio label="深圳"></Radio>
              <Radio label="杭州"></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{button4}}</Span>
          <br>
          <RadioGroup v-model="button5" type="button">
              <Radio label="北京"></Radio>
              <Radio label="上海"></Radio>
              <Radio label="深圳"></Radio>
              <Radio label="杭州"></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{button5}}</Span>
          <br>
          <RadioGroup v-model="button6" type="button" size="small">
              <Radio label="北京"></Radio>
              <Radio label="上海"></Radio>
              <Radio label="深圳"></Radio>
              <Radio label="杭州"></Radio>
          </RadioGroup>
          <br>
          <Span class="helpFont">:{{button6}}</Span>

      </Card>

      <Card :bordered="false" class="margin-top-8">
          <p slot="title">API</p>

          <p>Radio props</p>
          <Table border :columns="columns1" :data="data1"></Table>
          <br>

          <p>Radio events</p>
          <Table border :columns="columns2" :data="data2"></Table>
          <br>

          <p>RadioGroup props</p>
          <Table border :columns="columns1" :data="data3"></Table>
          <br>

          <p>RadioGroup events</p>
          <Table border :columns="columns2" :data="data4"></Table>

      </Card>

	</div>
</template>	    
<script>
    export default {
    	 data(){
          return {
              single: false,
              phone: 'apple',
              animal: '爪哇犀牛',
              disabledSingle: true,
              disabledGroup: '爪哇犀牛',
              vertical: 'apple',
              button1: '北京',
              button2: '北京',
              button3: '北京',
              button4: '北京',
              button5: '北京',
              button6: '北京',
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
                        width: '20%'
                    }
                ],
                data1: [
                    {
                        prop1: 'value',
                        prop2: '只在单独使用时有效。可以使用 v-model 双向绑定数据',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'label',
                        prop2: '只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目',
                        prop3: 'String | Number',
                        prop4: '-'
                    },
                    {
                        prop1: 'disabled',
                        prop2: '是否禁用当前项',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'size',
                        prop2: '单选框的尺寸，可选值为 large、small、default 或者不设置',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'true-value',
                        prop2: '选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用',
                        prop3: 'String, Number, Boolean ',
                        prop4: 'true'
                    },
                    {
                        prop1: 'false-value',
                        prop2: '没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用',
                        prop3: 'String, Number, Boolean ',
                        prop4: 'false'
                    }
                ],
                data2: [
                    {
                        prop1: 'on-change',
                        prop2: '在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发',
                        prop3: '...'
                    }
                ],
                data3: [
                    {
                        prop1: 'value',
                        prop2: '指定当前选中的项目数据。可以使用 v-model 双向绑定数据',
                        prop3: 'String | Number',
                        prop4: '-'
                    },
                    {
                        prop1: 'type',
                        prop2: '可选值为 button 或不填，为 button 时使用按钮样式',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'size',
                        prop2: '尺寸，可选值为large、small、default或者不设置',
                        prop3: 'String',
                        prop4: '-'
                    },
                    {
                        prop1: 'vertical',
                        prop2: '是否垂直排列，按钮样式下无效',
                        prop3: 'Boolean',
                        prop4: 'false'
                    }
                ],
                data4: [
                    {
                        prop1: 'on-change',
                        prop2: '在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发',
                        prop3: '...'
                    }
                ]
          }
       }
    }
</script>    