import { arraySidebar } from "vuepress-theme-hope";

export const vue2 = arraySidebar([
    "",
    {
        text: '准备工作',
        icon: "guide",
        prefix: "prepare/",
        collapsable: false,
        children: [
            'flow',
            'directory',
            'build',
            'entrance'
        ]
    },
    {
        text: '数据驱动',
        icon: "guide",
        collapsable: false,
        children: [
            'data-driven/new-vue',
            'data-driven/mounted',
            'data-driven/render',
            'data-driven/virtual-dom',
            'data-driven/create-element',
            'data-driven/update'
        ]
    },
    {
        text: '组件化',
        icon: "guide",
        collapsable: false,
        children: [
            'components/create-component',
            'components/patch',
            'components/merge-option',
            'components/lifecycle',
            'components/component-register',
            'components/async-component'
        ]
    },
    {
        text: '深入响应式原理',
        icon: "guide",
        collapsable: false,
        children: [
            'reactive/reactive-object',
            'reactive/getters',
            'reactive/setters',
            'reactive/next-tick',
            'reactive/questions',
            'reactive/computed-watcher',
            'reactive/component-update',
            'reactive/props',
            'reactive/summary'
        ]
    },
    {
        text: '编译',
        icon: "guide",
        collapsable: false,
        children: [
            'compile/entrance',
            'compile/parse',
            'compile/optimize',
            'compile/codegen'
        ]
    },
    {
        text: '扩展',
        icon: "guide",
        collapsable: false,
        children: [
            'extend/event',
            'extend/v-model',
            'extend/slot',
            'extend/keep-alive',
            'extend/tansition',
            'extend/tansition-group'
        ]
    },
    {
        text: 'Vue Router',
        icon: "guide",
        collapsable: false,
        children: [
            'vue-router/install',
            'vue-router/router',
            'vue-router/matcher',
            'vue-router/transition-to'
        ]
    },
    {
        text: 'Vuex',
        icon: "guide",
        collapsable: false,
        children: [
            'vuex/init',
            'vuex/api',
            'vuex/plugin'
        ]
    }
]);
