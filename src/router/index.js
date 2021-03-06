import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/show'
  },
  {
    path: '/show',
    component: ShowBlog
  }, {
    path: '/add',
    component: AddBlog
  }
]

const router = new VueRouter({
  routes
})

export default router
