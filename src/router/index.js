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
      path: "/:category", // Parametru dinamic pentru gen
      name: "CategoryPage",
      component: CategoryPage,
      props: true,
    },

  ],
})

export default router
