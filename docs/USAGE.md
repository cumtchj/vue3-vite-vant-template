# Vue 使用规范
## 0 概述
* 项目使用 Vue3 + Typescript 开发，开发规范整体遵从 [Vue官方风格指南](https://v3.cn.vuejs.org/style-guide/) ;
* 项目使用 Composition API 开发，参考 [官方组合式API文档](https://v3.cn.vuejs.org/api/composition-api.html) ;
* 项目路由使用 Vue Router， 类型为 Hash 路由，具体参考 [Vue Router官方文档](https://router.vuejs.org/zh/introduction.html) ;
* 项目状态管理使用 Pinia ，具体参考 [Pinia官方文档](https://pinia.web3doc.top/introduction.html)
* 一些第三方的预定义hooks，使用 VueUse ，具体参考 [VueUse官方文档](https://vueuse.org/guide/)

## 1 项目文件结构

### 1.1 src目录下文件结构说明
```bash
.
├── ./api         // api 请求方法封装，按模块拆分，统一暴露
├── ./config      // 配置信息封装，统一暴露
├── ./components  // 组件封装
├── ./hooks       // hooks（类似vue2的mixin），统一暴露
├── ./layout      // 页面布局
├── ./router      // 路由封装，按模块拆分
├── ./store       // 状态管理，按模块拆分，统一暴露
├── ./styles      // 公共样式
├── ./utils       // 工具方法，统一暴露
└── ./views       // 具体页面文件
```

### 1.2 src目录下具体功能模块说明
1. 组件建议使用`npm run gen`生成，每个组件（页面）都使用组件名的文件夹体现，内部.vue文件使用 `index.vue` 命名
2. 组件内使用的静态数据，统一封装在组件文件夹的 `config.ts` 文件中，例如： `TestComponent/config.ts`
3. 组件内定义的一些数据类型(type,interface)，统一放在组件文件夹的 `interface.ts` 文件中，例如 `TestComponent/interface.ts`
4. api，router，store等按业务模块拆分文件的功能模块，每个模块独立出一个模块名命名的文件，其中：
  * api模块：每个模块是一个模块命名的文件夹，其中有两个文件，`api.ts`和`index.ts`，`api.ts`存放接口地址，`index.ts`存放接口封装的方法，接口封装的方法统一使用一个类暴露出来，所有方法定义为类的静态方法
  ```javascript
// api/common/index.ts

 export default class Common{
    static async getDemoData(params : GetDemoDataParams ) : Promise<ApiResponseInter>{
      return await request.post(url, params)
    }

    static async getDemoData(params : GetDemoDataParams ) : Promise<ApiResponseInter>{
      return await request.get(url, { params })
    } 
} 
```

再通过`api/index.ts` 统一暴露，每个模块以大驼峰模块名+Api命名，调用时候直接引入使用`类名.方法`调用

```javascript
// api/index.ts

import CommonApi from './common/index'

export {
  CommonApi
}
```

  * router：每个模块都是模块名命名的ts文件，例如`common.ts`，统一在`router/index.ts`引入，引入的命名为`小驼峰模块名+Router`，如 `commonRouter`
  * store：每个模块都是模块名命名的ts文件，例如`common.ts`，统一在`store/index.ts`引入，引入的命名为`use+大驼峰模块名+Store`，如 `useCommonStore`
5. hooks统一使用`use+大驼峰hook名称`，如`useCommon`

### 1.3 其他文件说明
1. 环境变量统一都在 env 文件夹下 

## 2 Composition Api 使用，常用Composition Api如下：
* onMounted 等生命周期
* ref, reactive, shallowRef, shallowReactive 等响应式api
* computed
* watch
* defineProps
* defineEmits
* ...

