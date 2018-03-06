<template>
   <div>

        <Alert show-icon><a href="https://www.iviewui.com/components/dropdown" target="_blank">详见iView官网dropdown</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">概述</p>
			<p>基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>
	    </Card>

      <Card :bordered="false" class="margin-top-8">
          <p slot="title">示例</p>
          <p><Icon type="arrow-right-b"></Icon> 单独使用</p>
          <p>使用 v-model 可以双向绑定数据。</p>
          <br>
          <Radio v-model="single">Radio</Radio>
          <br><br><br>
          <p><Icon type="arrow-right-b"></Icon> 单独使用</p>
          <p>使用 v-model 可以双向绑定数据。</p>
          <br>
      </Card>

	</div>
</template>	    
<script>
    export default {
    	
    }
</script>    