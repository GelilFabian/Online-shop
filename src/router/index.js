import { createRouter, createWebHistory } from 'vue-router'
import homePage from '/src/views/homePage.vue'
import CategoryPage from '/src/views/CategoryPage.vue'
import AllProducts from '@/views/ShowProducts.vue'
import ShowProducts from '@/views/ShowProducts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/:category(barbati|femei|copii)', // Constrângem categoria la valori specifice
      name: 'CategoryPage',
      component: CategoryPage,
      props: true, // Transmite `category` ca prop
    },
    {
      path: '/showproducts',
      name: 'ShowProducts',
      component: ShowProducts,
    }
  ],
})

export default router
