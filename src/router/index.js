import { createRouter, createWebHistory } from 'vue-router'
import UserSelect from "@/views/UserSelect";
import MyBoard from "@/views/MyBoard";

const routes = [
  {
    path: '/',
    name: 'UserSelect',
    component: UserSelect
  },
  {
    path: '/my-board',
    name: 'MyBoard',
    component: MyBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
