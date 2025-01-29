import { createRouter, createWebHistory } from 'vue-router'
import homePage from '/src/views/homePage.vue'
import CategoryPage from '/src/views/CategoryPage.vue'
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
  ],
})

export default router
