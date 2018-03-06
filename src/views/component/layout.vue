<template>
   <div>

   		<Alert show-icon><a href="https://www.iviewui.com/components/layout" target="_blank">详见iView官网layout</a></Alert>

   		<Card :bordered="false" class="margin-top-8">
	        <p slot="title">Layout 布局</p>
			<p>协助进行页面级整体布局。</p>
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">设计规则</p>

			<p><Icon type="arrow-right-b"></Icon> 尺寸：一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。</p>			
			<p><Icon type="log-in"></Icon>顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。</p>
			<p><Icon type="log-in"></Icon> 顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。</p>
			<p><Icon type="log-in"></Icon> 顶部导航高度的范围计算公式为：48+8n。</p>
			<p><Icon type="log-in"></Icon> 侧边导航宽度的范围计算公式：200+8n。</p>
			<br>

			<p><Icon type="arrow-right-b"></Icon> 交互</p>
			<p><Icon type="log-in"></Icon> 一级导航和末级的导航需要在可视化的层面被强调出来；</p>
			<p><Icon type="log-in"></Icon> 当前项应该在呈现上优先级最高；</p>
			<p><Icon type="log-in"></Icon> 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；</p>
			<p><Icon type="log-in"></Icon> 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。</p>
			<br>

			<p><Icon type="arrow-right-b"></Icon> 视觉：导航样式上需要根据信息层级合理的选择样式</p>
			<p><Icon type="log-in"></Icon> 大色块强调：建议用于底色为深色系时，当前页面父级的导航项。</p>
			<p><Icon type="log-in"></Icon> 高亮火柴棍：当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。</p>
			<p><Icon type="log-in"></Icon> 字体高亮变色：从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。</p>
			<p><Icon type="log-in"></Icon> 字体放大：12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。</p>
			
	    </Card>

	    <Card :bordered="false" class="margin-top-8">
	        <p slot="title">组件概述</p>
			<p><Icon type="log-in"></Icon> Layout：布局容器，其下可嵌套 HeaderSiderContentFooter或 Layout 本身，可以放在任何父容器中。</p>
			<p><Icon type="log-in"></Icon> Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p>
			<p><Icon type="log-in"></Icon> Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</p>
			<p><Icon type="log-in"></Icon> Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p>
			<p><Icon type="log-in"></Icon> Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p>
			<Alert show-icon>注意：采用 flex 布局实现，请注意<a href="https://caniuse.com/#search=flex" target="_blank">浏览器兼容性</a>问题。</Alert>
	    </Card>

   </div>
</template>
<script>
    export default {
        
    }
</script>