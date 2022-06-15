import Vue from 'vue'

// 配置路由相关信息
import Router from 'vue-router'

// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

// 路由懒加载
const Home = () => import('../components/home.vue')
const About = () => import('../components/about.vue')
const User = () => import('../components/user.vue')

const HomeNews = () => import('../components/homeNews.vue')
const HomeMessage = () => import('../components/homeMessage.vue')

const Profile = () => import('../components/profile.vue')

// 2.创建router对象，MARK: 配置路由和组件之间的应用关系
const routes = [
    // 路由的默认路径
    {
        path: '/',
        redirect: '/home',
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
        ],
        meta: {
            title: '首页'
        }
    },
    {
        path:'/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/user/:id',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]

const router = new Router({
    routes,
    // HTML5的history模式
    mode: 'history'
})

// 利用beforeEach全局导航守卫，修改标题
router.beforeEach((to, from, next) => {
    // 如果有嵌套路由的话结果为undefined，需要使用matched匹配获取
    window.document.title = to.matched[0].meta.title
    next()
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
