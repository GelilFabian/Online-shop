import { createRouter, createWebHistory } from 'vue-router'
import homePage from '/src/components/homePage.vue'
import MenPage from "@/components/MenPage.vue";
import WomenPage from "@/components/WomenPage.vue";
import KidsPage from "@/components/KidsPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/barbati',
      name: 'MenPage',
      component: MenPage
    },
    {
      path: '/femei',
      name: 'WomenPage',
      component: WomenPage
    },
    {
      path: '/copii',
      name: 'KidsPage',
      component: KidsPage
    }
  ],
})

export default router
