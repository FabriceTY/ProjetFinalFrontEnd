import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AjoutLivre from '@/components/livres/AjoutLivre.vue'
import MiseAJourLivre from '@/components/livres/MiseAJourLivre.vue'
import AjoutRayon from '@/components/rayons/AjoutRayon.vue'
import AjoutAuteur from '@/components/auteurs/AjoutAuteur.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/add-livre',
      name:'add-livre',
      component: AjoutLivre
    },
    {
      path: '/update-livre/:id',
      name: 'update-livre',
      component: MiseAJourLivre
    },
    {
      path:'/add-rayon',
      name:'add-rayon',
      component: AjoutRayon
    },
    {
      path:'/add-auteur',
      name:'add-auteur',
      component: AjoutAuteur
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
