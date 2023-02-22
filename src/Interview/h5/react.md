---
title: React
icon: 
date: 2023-02-18
category: Interview
---

## 一、简述VirtualDOM及其工作原理

Virtual DOM 是一个轻量级的 JavaScript 对象，它最初只是 real DOM 的副本。它是一个节点树，它将元素、它们的属性和内容作为对象及其属性。

React 的渲染函数从 React 组件中创建一个节点树。然后它响应数据模型中的变化来更新该树，该变化是由用户或系统完成的各种动作引起的。

Virtual DOM 工作过程有三个简单的步骤。

1、每当底层数据发生改变时，整个 UI 都将在 Virtual DOM 描述中重新渲染。

2、然后计算之前 DOM 表示与新表示的之间的差异。

3、完成计算后，将只用实际更改的内容更新 real DOM。

## 二、为什么浏览器无法读取JSX？

浏览器只能处理 JavaScript 对象，而不能读取常规 JavaScript 对象中的 JSX。

所以为了使浏览器能够读取 JSX，首先，需要用像 Babel 这样的 JSX 转换器将 JSX 文件转换为 JavaScript 对象，然后再将其传给浏览器。

## 三、解释 React 中 render() 的目的

每个React组件强制要求必须有一个 render()。

它返回一个 React 元素，是原生 DOM 组件的表示。

如果需要渲染多个 HTML 元素，则必须将它们组合在一个封闭标记内，例如 `<form>、 <group> 、 <div>` 等。此函数必须保持纯净，即必须每次调用时都返回相同的结果。

## 四、详细解释 React 组件的生命周期方法

componentWillMount() – 在渲染之前执行，在客户端和服务器端都会执行。

componentDidMount() – 仅在第一次渲染后在客户端执行。

componentWillReceiveProps() – 当从父类接收到 props 并且在调用另一个渲染器之前调用。

shouldComponentUpdate() – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false。

componentWillUpdate() – 在 DOM 中进行渲染之前调用。

componentDidUpdate() – 在渲染发生后立即调用。

componentWillUnmount() – 从 DOM 卸载组件后调用。用于清理内存空间。

## 五、你对 React 的 refs 有什么了解？

Refs 是 React 中引用的简写。它是一个有助于存储对特定的 React 元素或组件的引用的属性，它将由组件渲染配置函数返回。

用于对 render() 返回的特定元素或组件的引用。当需要进行 DOM 测量或向组件添加方法时，它们会派上用场。

## 六、React 的工作原理

React 会创建一个虚拟 DOM(virtual DOM)。当一个组件中的状态改变时，React 首先会通过 "diffing" 算法来标记虚拟 DOM 中的改变，第二步是调节(reconciliation)，会用 diff 的结果来更新 DOM。

## 七、什么是高阶组件（HOC）？它可以做什么？

高阶组件是重用组件逻辑的高级方法，是一种源于 React 的组件模式。

HOC 是自定义组件，在它之内包含另一个组件。它们可以接受子组件提供的任何动态，但不会修改或复制其输入组件中的任何行为。你可以认为 HOC 是“纯（Pure）”组件。

HOC可用于许多任务，例如：

- 代码重用，逻辑和引导抽象
- 渲染劫持
- 状态抽象和控制
- Props 控制

## 八、Redux遵循的三个原则是什么？

- 单一事实来源：整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
- 状态是只读的：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
- 使用纯函数进行更改：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。

## 九、你对“单一事实来源”有什么理解？

Redux 使用 “Store” 将程序的整个状态存储在同一个地方。因此所有组件的状态都存储在 Store 中，并且它们从 Store 本身接收更新。单一状态树可以更容易地跟踪随时间的变化，并调试或检查程序。

## 十、为什么建议传递给 setState 的参数是一个 callback 而不是一个对象

因为 this.props 和 this.state 的更新可能是异步的，不能依赖它们的值去计算下一个 state。
