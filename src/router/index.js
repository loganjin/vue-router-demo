import Vue from 'vue'

// 配置路由相关信息
import Router from 'vue-router'

// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

// 2.创建router对象，MARK: 配置路由和组件之间的应用关系
const routes = [
    // 路由的默认路径
    {
        path: '/',
        redirect: '/home'
    },

    {
        path:'/home',
        component: Home,
        children: [
            {
                path: '/',
                redirect: 'news'
            },
            {
                // MARK: 子路由不用加/，会自动加上
                path: 'news',
                component: HomeNews
            }, 
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path:'/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    }
]
const router = new Router({
    routes,
    // HTML5的history模式
    mode: 'history'
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
