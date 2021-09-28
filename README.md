#  VUE-TS-JS 混合开发-大数据-基础模板



##  简介

这是一个基于`VUE-TS模板`与`data-V`的大数据基础开发框架，可以在任何设备尺寸下保证页面不变形，可以使用TS和JS混合开发，方便JS向TS过度过程中使用或平时使用也可以。



## 特殊注意事项

### px转rem

此框架内置了px转rem插件，开发过程中可直接使用设计稿中的px尺寸值进行开发，线上会自动转为rem尺寸。默认使用的是 基于`1920 * 1080`的设计稿进行的处理，如果你要使用其他尺寸的设计稿请替换`.env.development 和 .env.production`中的内容

```js
// 请修改为对应的尺寸 此处默认取的 1920 / 10
VUE_APP_ROOT_FONT_SIZE = 192
```



## 全尺寸设备适配（样式不变形）

为了解决在非1920 * 1080 尺寸屏幕下样式错乱的问题，需要在项目`npm i` 或者 `yarn` 之后进行如下操作

1. 打开此目录下的文件
   `项目根目录\node_modules\@jiaminghi\data-view\lib\components\fullScreenContainer\src\main.vue`
2. 修改以下内容
   ```js
   // 将此内容注释
   // const { width, height } = screen
   // 添加如下内容，如果设计尺寸为非1920 * 1080 请修改为对应尺寸
   const [ width, height ] = [1920, 1080]
   ```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
