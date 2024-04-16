import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import AjoutLivre from '@/components/livres/AjoutLivre.vue'
import MiseAJourLivre from '@/components/livres/MiseAJourLivre.vue'
import ListeDesLivre from '@/components/livres/ListeDesLivre.vue'
import ProfileLivre from '@/components/livres/ProfileLivre.vue'

import AjoutUtilisateur from '@/components/utilisateurs/AjoutUtilisateur.vue'
import ListeDesUtilisateur from '@/components/utilisateurs/ListeDesUtilisateur.vue'

import AjoutRayon from '@/components/rayons/AjoutRayon.vue'
import ListeDesRayon from '@/components/rayons/ListeDesRayon.vue'
import MiseAJourRayon from '@/components/rayons/MiseAJourRayon.vue'
import ProfileRayon from '@/components/rayons/ProfileRayon.vue'

import AjoutAuteur from '@/components/auteurs/AjoutAuteur.vue'
import ListeDesAuteur from '@/components/auteurs/ListeDesAuteur.vue'
import ProfileAuteur from '@/components/auteurs/ProfileAuteur.vue'
import MiseAJourAuteur from '@/components/auteurs/MiseAJourAuteur.vue'

import AjoutRole from '@/components/roles/AjoutRole.vue'
import ListeDesRole from '@/components/roles/ListeDesRole.vue'
import MiseAJourRole from '@/components/roles/MiseAJourRole.vue'
// import ProfileRole from '@/components/roles/ProfileRole.vue'


import Login from '@/components/authentification/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // section reservee aux livres 
    {
      path: '/',
      name: 'home',
      component: ListeDesLivre
    },
    {
      path:'/add-livre',
      name:'add-livre',
      component: AjoutLivre
    },
    {
      path:'/profileLivre/:id',
      name:'profileLivre',
      component:ProfileLivre
    },
    
    {
      path: '/update-livre/:id',
      name: 'update-livre',
      component: MiseAJourLivre
    },
    // section reservee aux utilisateurs 
    {
      path:'/add-utilisateur',
      name:'add-utilisateur',
      component: AjoutUtilisateur
    },
    {
      path:'/get-utilisateur',
      name:'get-utilisateur',
      component: ListeDesUtilisateur
    },
    // section reservee au rayon
    {
      path:'/add-rayon',
      name:'add-rayon',
      component: AjoutRayon
    },
    {
      path: '/get-rayon',
      name: 'get-rayon',
      component: ListeDesRayon
    },
    {
      path:'/profileRayon',
      name:'profileRayon',
      component: ProfileRayon
    },
    {
      path: '/update-rayon/:id',
      name: 'update-rayon',
      component: MiseAJourRayon
    },    
    // {
    //   path: '/profileRayon/:id',
    //   name: 'profileRayon',
    //   component: ProfileRayon
    // },    
   
    // section reservee au role
    {
      path:'/add-role',
      name:'add-role',
      component: AjoutRole
    },
    {
      path: '/get-role',
      name: 'get-role',
      component: ListeDesRole
    },
    {
      path: '/update-role/:id',
      name: 'update-role',
      component: MiseAJourRole
    },    
    // {
    //   path: '/profileRole/:id',
    //   name: 'profileRole',
    //   component: ProfileRole
    // },    
   
    // section reservee aux auteurs
    {
      path:'/add-auteur',
      name:'add-auteur',
      component: AjoutAuteur
    },
    {
      path: '/get-auteur',
      name: 'get-auteur',
      component: ListeDesAuteur
    },
    {
      path:'/profileAuteur/:id',
      name:'profileAuteur',
      component:ProfileAuteur
    },
    {
      path: '/update-auteur/:id',
      name: 'update-auteur',
      component: MiseAJourAuteur
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
