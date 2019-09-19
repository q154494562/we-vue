---
title: Index
keywords: 'we-vue, index'
description: ''
demo_url: //demo.wevue.org/
---

文档

欢迎使用 we-vue！

:::danger
右侧示例仅针对最新版本，其中部分涉及滑动、拖拽操作的示例请在触屏设备上预览，或使用浏览器模拟触屏设置进行查看。
:::

## 安装

```bash
// npm
$ npm install we-vue --save

// yarn
$ yarn add we-vue
```

## 关于事件绑定

在 Vue 2.x 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：

```html
<my-component @click.native="onClick">Click Me</my-component>
```

从易用性的角度出发，我们对 Button 组件进行了处理，使它可以监听 click 事件：

```html
<w-button @click="onClick">Click Me</w-button>
```

对于其他组件，还是需要添加 .native 修饰符。

## 特别声明

本项目参考了以下项目，部分代码移植于这些开源项目，但尚未及一一标注。在此对这些项目表示感谢。

- [Vuetify](https://github.com/vuetifyjs/vuetify)
- [Vant](https://github.com/youzan/vant)
- [Mint-UI](http://mint-ui.github.io/#!/zh-cn)
