# Vusui-css 样式库

免除开发者繁复的手写 CSS 样式。

【[使用文档](https://www.vusui.com/css)】

## 使用包管理器

```sh
# 选择一个你喜欢的包管理器

# yarn
$ yarn add @vusui/css

# npm
$ npm install @vusui/css --save

# pnpm
$ pnpm install @vusui/css
```

## 全局使用

```ts
// main.ts
import { createApp } from "vue";

// 全部样式
import "@vusui/css/lib/style.css";

// 移动端(H5)专用样式(无自适应)
import "@vusui/css/lib/mobile.css";

// 精简版样式
import "@vusui/css/lib/lite.css";

// uni-app、小程序版样式
import "@vusui/css/lib/uni.css";

// 指定样式
import "@vusui/css/lib/margin.css";

const app = createApp({});
app.mount("#app");
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 vusui-css，然后就可以使用 Vusui-css 样式库了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com/) 和 [jsDelivr](https://www.jsdelivr.com/) 举例。

### unpkg

```html
<head>
  <!-- 引入全部样式 -->
  <link rel="stylesheet" href="//unpkg.com/@vusui/css/lib/style.css" />
  <!-- 引入移动端样式 -->
  <link rel="stylesheet" href="//unpkg.com/@vusui/css/lib/mobile.css" />
  <!-- 引入精简版样式 -->
  <link rel="stylesheet" href="//unpkg.com/@vusui/css/lib/lite.css" />
  <!-- 引入指定样式 -->
  <link rel="stylesheet" href="//unpkg.com/@vusui/css/lib/flex.css" />
</head>
```

### jsDelivr

```html
<head>
  <!-- 引入全部样式 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@vusui/css/lib/style.css"
  />
  <!-- 引入移动端样式 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@vusui/css/lib/mobile.css"
  />
  <!-- 引入精简版样式 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@vusui/css/lib/lite.css"
  />
  <!-- 引入指定样式 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@vusui/css/lib/flex.css"
  />
</head>
```
