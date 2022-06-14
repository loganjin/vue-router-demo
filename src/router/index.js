import Vue from 'vue'
// 配置路由相关信息
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2.创建Router对象
const routes = [

]
const router = new Router({
    // 配置路由和组件之间的应用关系
    routes
})

// 3.将router对象挂载（传到）Vue实例中
export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
