<template>
   <div>

        <Alert show-icon><a href="https://www.iviewui.com/components/switch" target="_blank">详见iView官网switch</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			    <p>在两种状态间切换时用到的开关选择器。</p>
          <Alert type="warning" show-icon>注意：没有使用 iview-loader 时，必须使用 i-switch 标签。</Alert>
	    </Card>

      <Card :bordered="false" class="margin-top-8">
          <p slot="title">示例</p>
          <p><Icon type="arrow-right-b"></Icon> 基本</p>
          <p>基本用法，状态切换时会触发事件。</p>
          <br>
          <i-switch v-model="switch1" @on-change="change"></i-switch>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 尺寸</p>
          <p>设置size为 large 或 small 使用大号和小号的开关。</p>
          <br>
          <i-switch size="large"></i-switch>
          <i-switch></i-switch>
          <i-switch size="small"></i-switch>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 文字和图标</p>
          <p>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</p>
          <br>
          <i-switch>
              <span slot="open">开</span>
              <span slot="close">关</span>
          </i-switch>
          <i-switch>
              <Icon type="android-done" slot="open"></Icon>
              <Icon type="android-close" slot="close"></Icon>
          </i-switch>
          <br><br>
          <i-switch size="large">
              <span slot="open">开启</span>
              <span slot="close">关闭</span>
          </i-switch>
          <i-switch size="large">
              <span slot="open">ON</span>
              <span slot="close">OFF</span>
          </i-switch>


          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 不可用</p>
          <p>禁用开关。</p>
          <br>
          <i-switch :disabled="disabled"></i-switch>
          <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
      </Card>
      
	</div>
</template>	    
<script>
    export default {
    	   data () {
            return {
                switch1: false,
                disabled: true
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>    