// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Font.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          title: '首頁'
        }
      },
      {
        path: 'aboutme',
        component: () => import(/* webpackChunkName:"aboutme" */ '@/views/AboutMe.vue'),
        meta: {
          title: '關於我'
        }
      },
      {
        path: 'myproduct',
        component: () => import(/* webpackChunkName:"myproduct" */'@/views/MyProduct'),
        meta: {
          title: '我的作品'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// router.afterEach((to, from) => {
//   document.title = to.meta.title
// })

export default router
