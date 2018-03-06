import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/component-group/error-page/403.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/component-group/error-page/404.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/component-group/error-page/500.vue')
};

export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/component-group/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/component-group/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/component-group/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/component-group/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/component-group/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/component-group/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/component-group/message/message.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/access-test',
        icon: 'lock-combination',
        title: '权限测试页',
        name: 'accesstest',
        access: 0,
        component: Main,
        children: [
            { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/component-group/access/access-test.vue') }
        ]
    },
    {
        path: '/common-case',
        icon: 'social-vimeo',
        name: 'common-case',
        title: '常用案例',
        component: Main,
        children: [
            {
                path: 'code-format',
                icon: 'ios-grid-view-outline',
                name: 'code-format',
                title: '代码格式化',
                component: () => import('@/views/common-case/code-format.vue')
            },
            {
                path: 'data-cryption',
                icon: 'ios-grid-view-outline',
                name: 'data-cryption',
                title: '数据加解密',
                component: () => import('@/views/common-case/data-cryption.vue')
            }
        ]
    },
    {
        path: '/component',
        icon: 'social-vimeo',
        name: 'component',
        title: '组件示例',
        component: Main,
        children: [
            {
                path: 'grid',
                icon: 'ios-grid-view-outline',
                name: 'grid',
                title: 'Grid-栅格',
                component: () => import('@/views/component/grid.vue')
            },
            {
                path: 'layout',
                icon: 'ios-browsers-outline',
                name: 'layout',
                title: 'Layout-布局',
                component: () => import('@/views/component/layout.vue')
            },
            {
                path: 'color',
                icon: 'android-color-palette',
                name: 'color',
                title: 'Color-色彩',
                component: () => import('@/views/component/color.vue')
            },
            {
                path: 'font',
                icon: 'at',
                name: 'font',
                title: 'Font-字体',
                component: () => import('@/views/component/font.vue')
            },
            {
                path: 'button',
                icon: 'social-youtube-outline',
                name: 'button',
                title: 'Button-按钮',
                component: () => import('@/views/component/button.vue')
            },
            {
                path: 'icon',
                icon: 'ios-heart-outline',
                name: 'icon',
                title: 'Icon-图标',
                component: () => import('@/views/component/icon.vue')
            },
            {
                path: 'input',
                icon: 'ios-compose-outline',
                name: 'input',
                title: 'Input-输入框',
                component: () => import('@/views/component/input.vue')
            },
            {
                path: 'radio',
                icon: 'ios-circle-filled',
                name: 'radio',
                title: 'Radio-单选框',
                component: () => import('@/views/component/radio.vue')
            },
            {
                path: 'checkbox',
                icon: 'android-checkbox-outline',
                name: 'checkbox',
                title: 'Checkbox-多选框',
                component: () => import('@/views/component/checkbox.vue')
            },
            {
                path: 'switch',
                icon: 'toggle',
                name: 'switch',
                title: 'Switch-开关',
                component: () => import('@/views/component/switch.vue')
            },
            {
                path: 'table',
                icon: 'ios-grid-view',
                name: 'table',
                title: 'Table-表格',
                component: () => import('@/views/component/table.vue')
            },
            {
                path: 'select',
                icon: 'ios-arrow-down',
                name: 'select',
                title: 'Select-选择器',
                component: () => import('@/views/component/select.vue')
            },
            {
                path: 'auto-complete',
                icon: 'ios-list-outline',
                name: 'auto-complete',
                title: 'AutoComplete-自动完成',
                component: () => import('@/views/component/auto-complete.vue')
            },
            {
                path: 'slider',
                icon: 'minus-round',
                name: 'slider',
                title: 'Slider-滑块',
                component: () => import('@/views/component/slider.vue')
            },
            {
                path: 'date-picker',
                icon: 'ios-calendar-outline',
                name: 'date-picker',
                title: 'DatePicker-日期选择器',
                component: () => import('@/views/component/date-picker.vue')
            },
            {
                path: 'time-picker',
                icon: 'ios-clock-outline',
                name: 'time-picker',
                title: 'TimePicker-时间选择器',
                component: () => import('@/views/component/time-picker.vue')
            },
            {
                path: 'cascader',
                icon: 'ios-more-outline',
                name: 'cascader',
                title: 'Cascader-级联选择',
                component: () => import('@/views/component/cascader.vue')
            },
            {
                path: 'transfer',
                icon: 'ios-pause-outline',
                name: 'transfer',
                title: 'Transfer-穿梭框',
                component: () => import('@/views/component/transfer.vue')
            },
            {
                path: 'input-number',
                icon: 'ios-calculator',
                name: 'input-number',
                title: 'InputNumber-数字输入框',
                component: () => import('@/views/component/input-number.vue')
            },
            {
                path: 'rate',
                icon: 'ios-star',
                name: 'rate',
                title: 'Rate-评分',
                component: () => import('@/views/component/rate.vue')
            },
            {
                path: 'upload',
                icon: 'ios-cloud-upload-outline',
                name: 'upload',
                title: 'Upload-上传',
                component: () => import('@/views/component/upload.vue')
            },
            {
                path: 'color-picker',
                icon: 'android-color-palette',
                name: 'color-picker',
                title: 'ColorPicker-颜色选择器',
                component: () => import('@/views/component/color-picker.vue')
            },
            {
                path: 'form',
                icon: 'ios-list-outline',
                name: 'form',
                title: 'Form-表单',
                component: () => import('@/views/component/form.vue')
            },
            {
                path: 'alert',
                icon: 'alert',
                name: 'alert',
                title: 'Alert-警告提示',
                component: () => import('@/views/component/alert.vue')
            },
            {
                path: 'card',
                icon: 'ios-browsers-outline',
                name: 'card',
                title: 'Card-卡片',
                component: () => import('@/views/component/card.vue')
            },
            {
                path: 'message',
                icon: 'ios-information-outline',
                name: 'message',
                title: 'Message-全局提示',
                component: () => import('@/views/component/message.vue')
            },
            {
                path: 'notice',
                icon: 'ios-bell-outline',
                name: 'notice',
                title: 'Notice-通知提醒',
                component: () => import('@/views/component/notice.vue')
            },
            {
                path: 'modal',
                icon: 'ios-chatbubble-outline',
                name: 'modal',
                title: 'Modal-对话框',
                component: () => import('@/views/component/modal.vue')
            },
            {
                path: 'progress',
                icon: 'android-remove',
                name: 'progress',
                title: 'Progress-进度条',
                component: () => import('@/views/component/progress.vue')
            },
            {
                path: 'avatar',
                icon: 'person',
                name: 'avatar',
                title: 'Avatar-头像',
                component: () => import('@/views/component/avatar.vue')
            },
            {
                path: 'badge',
                icon: 'email-unread',
                name: 'badge',
                title: 'Badge-徽标数',
                component: () => import('@/views/component/badge.vue')
            },
            {
                path: 'collapse',
                icon: 'ios-albums-outline',
                name: 'collapse',
                title: 'Collapse-折叠面板',
                component: () => import('@/views/component/collapse.vue')
            },
            {
                path: 'timeline',
                icon: 'android-more-vertical',
                name: 'timeline',
                title: 'Timeline-时间轴',
                component: () => import('@/views/component/timeline.vue')
            },
            {
                path: 'tag',
                icon: 'ios-pricetags-outline',
                name: 'tag',
                title: 'Tag-标签',
                component: () => import('@/views/component/tag.vue')
            },
            {
                path: 'tooltip',
                icon: 'chatbox-working',
                name: 'tooltip',
                title: 'Tooltip-文字提示',
                component: () => import('@/views/component/tooltip.vue')
            },
            {
                path: 'poptip',
                icon: 'chatbubble-working',
                name: 'poptip',
                title: 'Poptip-气泡提示',
                component: () => import('@/views/component/poptip.vue')
            },
            {
                path: 'carousel',
                icon: 'ios-film-outline',
                name: 'carousel',
                title: 'Carousel-走马灯',
                component: () => import('@/views/component/carousel.vue')
            },
            {
                path: 'tree',
                icon: 'network',
                name: 'tree',
                title: 'Tree-树形控件',
                component: () => import('@/views/component/tree.vue')
            },
            {
                path: 'menu',
                icon: 'navicon-round',
                name: 'menu',
                title: 'Menu-导航菜单',
                component: () => import('@/views/component/menu.vue')
            },
            {
                path: 'tabs',
                icon: 'social-windows-outline',
                name: 'tabs',
                title: 'Tabs-标签页',
                component: () => import('@/views/component/tabs.vue')
            },
            {
                path: 'dropdown',
                icon: 'arrow-down-b',
                name: 'dropdown',
                title: 'Dropdown-下拉菜单',
                component: () => import('@/views/component/dropdown.vue')
            },
            {
                path: 'page',
                icon: 'ios-book-outline',
                name: 'page',
                title: 'Page-分页',
                component: () => import('@/views/component/page.vue')
            },
            {
                path: 'breadcrumb',
                icon: 'ios-arrow-right',
                name: 'breadcrumb',
                title: 'Breadcrumb-面包屑',
                component: () => import('@/views/component/breadcrumb.vue')
            },
            {
                path: 'steps',
                icon: 'ios-checkmark-outline',
                name: 'steps',
                title: 'Steps-步骤条',
                component: () => import('@/views/component/steps.vue')
            },
            {
                path: 'loading-bar',
                icon: 'ios-minus-empty',
                name: 'loading-bar',
                title: 'LoadingBar-加载进度条',
                component: () => import('@/views/component/loading-bar.vue')
            },
            {
                path: 'circle',
                icon: 'ios-circle-outline',
                name: 'circle',
                title: 'Circle-进度环',
                component: () => import('@/views/component/circle.vue')
            },
            {
                path: 'affix',
                icon: 'pin',
                name: 'affix',
                title: 'Affix-图钉',
                component: () => import('@/views/component/affix.vue')
            },
            {
                path: 'back-top',
                icon: 'ios-arrow-up',
                name: 'back-top',
                title: 'BackTop-返回顶部',
                component: () => import('@/views/component/back-top.vue')
            },
            {
                path: 'spin',
                icon: 'load-d',
                name: 'spin',
                title: 'Spin-加载中',
                component: () => import('@/views/component/spin.vue')
            },
            {
                path: 'scroll',
                icon: 'ios-more',
                name: 'scroll',
                title: 'Scroll-无限滚动',
                component: () => import('@/views/component/scroll.vue')
            }
        ]
    },
    {
        path: '/component-group',
        icon: 'social-vimeo',
        name: 'component-group',
        title: '组件组合',
        component: Main,
        children: [
            {
                path: 'access-index',
                icon: 'key',
                name: 'access-index',
                title: 'AccessIndex-权限管理',
                component: () => import('@/views/component-group/access/access.vue')
            },
            {
                path: 'international',
                icon: 'earth',
                name: 'international',
                title: {i18n: 'international'},
                component: () => import('@/views/component-group/international/international.vue')
            },
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/component-group/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () => import('@/views/component-group/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () => import('@/views/component-group/my-components/image-editor/image-editor.vue')
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: () => import('@/views/component-group/my-components/draggable-list/draggable-list.vue')
            },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () => import('@/views/component-group/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () => import('@/views/component-group/my-components/file-upload/file-upload.vue')
            },
            {
                path: 'count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                // component: () => import('@/views/my-components/count-to/count-to.vue')
                component: () => import('@/views/component-group/my-components/count-to/count-to.vue')
            },
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () => import('@/views/component-group/my-components/split-pane/split-pane-page.vue')
            },
            {
                path: 'artical-publish',
                icon: 'compose',
                name: 'artical-publish',
                title: '文章发布',
                component: () => import('@/views/component-group/form/article-publish/article-publish.vue')
            },
            {
                path: 'workflow',
                icon: 'arrow-swap',
                name: 'workflow',
                title: '工作流',
                component: () => import('@/views/component-group/form/work-flow/work-flow.vue')
            },
            {
                path: 'dragableTable',
                icon: 'arrow-move',
                name: 'dragableTable',
                title: '可拖拽排序',
                component: () => import('@/views/component-group/tables/dragable-table.vue')
            },
            {
                path: 'editableTable',
                icon: 'edit',
                name: 'editableTable',
                title: '可编辑表格',
                component: () => import('@/views/component-group/tables/editable-table.vue')
            },
            {
                path: 'searchableTable',
                icon: 'search',
                name: 'searchableTable',
                title: '可搜索表格',
                component: () => import('@/views/component-group/tables/searchable-table.vue')
            },
            {
                path: 'exportableTable',
                icon: 'code-download',
                name: 'exportableTable',
                title: '表格导出数据',
                component: () => import('@/views/component-group/tables/exportable-table.vue')
            },
            {
                path: 'table2image',
                icon: 'images',
                name: 'table2image',
                title: '表格转图片',
                component: () => import('@/views/component-group/tables/table-to-image.vue')
            },
            {
                path: 'mutative-router',
                icon: 'link',
                name: 'mutative-router',
                title: '动态路由',
                component: () => import('@/views/component-group/advanced-router/mutative-router.vue')
            },
            {
                path: 'argument-page',
                icon: 'android-send',
                name: 'argument-page',
                title: '带参页面',
                component: () => import('@/views/component-group/advanced-router/argument-page.vue')
            },
            {
                path: 'errorpage-index',
                icon: 'android-sad',
                name: 'errorpage-index',
                title: '错误页面',
                component: () => import('@/views/component-group/error-page/error-page.vue')
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
// 如下顺序变化会导致刷新完主页面后跳转到404页面
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
