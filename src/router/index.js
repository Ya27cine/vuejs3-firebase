import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'
import About from '../views/About.vue'
import AddPost from '../components/AddPost.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/show/:id',
    name: 'show-post',
    component: Show
  },
  {
    path: '/post/add',
    name: 'add-post',
    component: AddPost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
