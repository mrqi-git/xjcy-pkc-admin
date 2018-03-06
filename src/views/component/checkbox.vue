<template>
   <div>

        <Alert show-icon><a href="https://www.iviewui.com/components/checkbox" target="_blank">详见iView官网checkbox</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			<p>基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</p>
	    </Card>

      <Card :bordered="false" class="margin-top-8">
          <p slot="title">示例</p>
          <p><Icon type="arrow-right-b"></Icon> 单独使用</p>
          <p>使用 v-model 可以双向绑定数据。</p>
          <br>
          <Checkbox v-model="single">Checkbox</Checkbox>
          <br>
          <Span class="helpFont">:{{single}}</Span>
          

          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 组合使用</p>
          <p>使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</p>
          <br>
          <CheckboxGroup v-model="social">
              <Checkbox label="twitter">
                  <Icon type="social-twitter"></Icon>
                  <span>Twitter</span>
              </Checkbox>
              <Checkbox label="facebook">
                  <Icon type="social-facebook"></Icon>
                  <span>Facebook</span>
              </Checkbox>
              <Checkbox label="github">
                  <Icon type="social-github"></Icon>
                  <span>Github</span>
              </Checkbox>
              <Checkbox label="snapchat">
                  <Icon type="social-snapchat"></Icon>
                  <span>Snapchat</span>
              </Checkbox>
          </CheckboxGroup>
          <br>
          <Span class="helpFont">:{{social}}</Span>
          <br><br>
          <CheckboxGroup v-model="fruit">
              <Checkbox label="香蕉"></Checkbox>
              <Checkbox label="苹果"></Checkbox>
              <Checkbox label="西瓜"></Checkbox>
          </CheckboxGroup>
          <br>
          <Span class="helpFont">:{{fruit}}</Span>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 不可用</p>
          <p>通过设置disabled属性来禁用多选框。</p>
          <br>
          <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
          <br><br>
          <Span class="helpFont">:{{disabledSingle}}</Span>
          <br><br>
          <CheckboxGroup v-model="disabledGroup">
              <Checkbox label="香蕉" disabled></Checkbox>
              <Checkbox label="苹果" disabled></Checkbox>
              <Checkbox label="西瓜"></Checkbox>
          </CheckboxGroup>
          <br>
          <Span class="helpFont">:{{disabledGroup}}</Span>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 与其它组件通信</p>
          <p>通过设置disabled属性来禁用多选框。</p>
          <br>
          <Checkbox v-model="checked" :disabled="disabled">
              <span v-if="checked">Checked</span>
              <span v-else>Unchecked</span>
               - 
              <span v-if="!disabled">Usable</span>
              <span v-else>Disabled</span>
          </Checkbox>
          <br>
          <Span class="helpFont">:{{checked}}</Span>
          <br>
          <Button type="primary" @click="checked = !checked">
              <span v-if="!checked">Checked</span>
              <span v-else>Unchecked</span>
          </Button>
          <Button type="primary" @click="disabled = !disabled">
              <span v-if="disabled">Usable</span>
              <span v-else>Disabled</span>
          </Button>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 全选 </p>
          <p>在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</p>
          <br>
          <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
              <Checkbox
                  :indeterminate="indeterminate"
                  :value="checkAll"
                  @click.prevent.native="handleCheckAll">全选</Checkbox>
          </div>
          <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
              <Checkbox label="香蕉"></Checkbox>
              <Checkbox label="苹果"></Checkbox>
              <Checkbox label="西瓜"></Checkbox>
          </CheckboxGroup>

      </Card>

      <Card :bordered="false" class="margin-top-8">
          <p slot="title">API</p>

          <p>Checkbox props</p>
          <Table border :columns="columns1" :data="data1"></Table>
          <br>

          <p>Checkbox events</p>
          <Table border :columns="columns2" :data="data2"></Table>
          <br>

          <p>CheckboxGroup props</p>
          <Table border :columns="columns1" :data="data3"></Table>
          <br>

          <p>CheckboxGroup events</p>
          <Table border :columns="columns2" :data="data4"></Table>

      </Card>

	</div>
</template>	    
<script>
    export default {
    	   data(){
              return{
                  single: false,
                  social: ['facebook', 'github'],
                  fruit: ['苹果'],
                  disabledSingle: true,
                  disabledGroup: ['苹果'],
                  checked: true,
                  disabled: false,
                  indeterminate: true,
                  checkAll: false,
                  checkAllGroup: ['香蕉', '西瓜'],
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
                        prop2: '只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中',
                        prop3: 'String | Number | Boolean',
                        prop4: '-'
                    },
                    {
                        prop1: 'disabled',
                        prop2: '是否禁用当前项',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'indeterminate',
                        prop2: '设置 indeterminate 状态，只负责样式控制',
                        prop3: 'Boolean',
                        prop4: 'false'
                    },
                    {
                        prop1: 'size',
                        prop2: '多选框的尺寸，可选值为 large、small、default 或者不设置',
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
                        prop2: '只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发',
                        prop3: 'true | false'
                    }
                ],
                data3: [
                    {
                        prop1: 'value',
                        prop2: '指定选中项目的集合，可以使用 v-model 双向绑定数据',
                        prop3: 'Array',
                        prop4: '[]'
                    },
                    {
                        prop1: 'size',
                        prop2: '多选框组的尺寸，可选值为 large、small、default 或者不设置',
                        prop3: 'String',
                        prop4: '-'
                    }
                ],
                data4: [
                    {
                        prop1: 'on-change',
                        prop2: '在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发',
                        prop3: '...'
                    }
                ]
              }
         },
         methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>    