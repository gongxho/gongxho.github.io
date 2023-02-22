---
title: Vue3
icon: 
date: 2023-02-18
category: Interview
---

## vue2/vue3的区别

Vue 3 的 Template 支持多个根标签，Vue 2 不支持

Vue 3 有 createApp()，而 Vue 2 的是 new Vue() createApp(组件)，new Vue({template, render})

context.emit

新增context.emit，与this.$emit（vue3中只能在methods里使用）作用相同

Vue3中的属性绑定

默认所有属性都绑定到根元素 使用inheritAttrs: false可以取消默认绑定 使用attrs或者context.attrs获取所有属性 使用v-bind="$attrs"批量绑定属性 使用 const {size, level, ...rest} = context.attrs 将属性分开

使用场景 在vue2中我们在父组件绑定click事件，子组件必须内部触发click，而vue3中在父组件绑定子组件的根元素上也会跟着绑定

## vue3为什么要使用组合式API

通过组合式 API 解决了两个问题。

我们让组件拥有了更加良好的代码组织结构

我们让相同的代码逻辑在不同的组件中进行了完整的复用

## vue3跨组件传值

props + emit

vuex

provide 和 inject 的注入方法

## vue组合式API有哪些

- ref()
- reactive()
- watch()
- 生命周期()
- computed
- watch()

## watchEffect用来代替生命周期里的onMounted和onUpdated

初始化页面的时候watchEffect里的代码会执行，当watchEffect里的数据有更新的时候同样会执行

```javascript
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

setTimeout(() => {
  count.value++
  // -> logs 1
}, 100)
注意watchEffect第一次运行是在组件挂载之前，如果需要访问DOM需要将我们的watchEffect放在onMounted里

onMounted(() => {
  watchEffect(() => console.log(count.value))
})
```

## vite和webpack的区别

vite是按需加载,他的优势在开发环境,启动是不打包,即不需要分析模块依赖,也不需要编译,启动速度就快,动态编译模块缩短了编译的时间

webpack是全部加载,在启动开发服务器时会先打包再启动开发服务器

## vite创建vue项目和vue-cli创建项目的区别

vite是web开发构建工具

vue-cli是官方的vue.js项目脚手架
