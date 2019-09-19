---
title: Cell
keywords: 'we-vue, cell'
description: ''
demo_url: //demo.wevue.org/cell
---

Cell

列表项。

## 引入

```js
import { Cell } from 'we-vue'

Vue.use(Cell)
```
:::warning
cell 只能在 group 中使用。
:::

## 例子

### 带说明的列表项

```html
<w-group title="带说明的列表项">
  <w-cell title="标题文字" :value="true"></w-cell>
</w-group>
```

### 带图标、说明的列表项

```html
<w-group title="带图标、说明的列表项">
  <w-cell title="标题文字">
    <img :src="imgIcon" slot="icon" class="cell-icon">
    <span slot="ft">说明文字</span>
  </w-cell>
  <w-cell title="标题文字" value="说明文字">
    <img :src="imgIcon" slot="icon" class="cell-icon">
  </w-cell>
</w-group>
```

### 带跳转的列表项

```html
<w-group title="带跳转的列表项">
  <w-cell title="标题文字" is-link to="/"></w-cell>
  <w-cell title="标题文字" is-link to="/"></w-cell>
</w-group>
```

### 带说明、跳转的列表项

```html
<w-group title="带说明、跳转的列表项">
  <w-cell title="标题文字" value="说明文字" is-link to="/"></w-cell>
  <w-cell title="标题文字" value="说明文字" is-link to="/"></w-cell>
</w-group>
```

### 带图标、说明、跳转的列表项

```html
<w-group title="带图标、说明、跳转的列表项">
  <w-cell title="标题文字" value="说明文字" is-link to="/">
    <img :src="imgIcon" alt="" slot="icon" class="cell-icon">
  </w-cell>
  <w-cell title="标题文字" value="说明文字" is-link to="/">
    <img :src="imgIcon" alt="" slot="icon" class="cell-icon">
  </w-cell>
</w-group>
```

## API

|   参数   |   类型    |   说明   | 可选值  |  默认值  |
| :----: | :-----: | :----: | :--: | :---: |
| title  | String  |  标题，即左侧label   |      |       |
| value  | String  |  内容，即左侧文字   |      |       |
| to  | String 或 Object  |  vue-router 跳转的目标地址，与 is-link 配合使用   |      |       |
| url  | String  |  跳转 url，与 is-link 配合使用   |      |       |
| is-link | Boolean | 是否为链接 |      | false |

:::tip
从 v1.6.0 开始，使用 to 定义 vue-router 跳转目标，使用 url 定义普通跳转。
:::

## Slots

|   name   |   描述    |
| :----: | :-----: |
| icon  | 左侧图标  |
| bd  | 左侧文字  |
| ft  | 右侧文字  |
