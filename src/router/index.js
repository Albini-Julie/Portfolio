import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "../views/AccueilView.vue"
import ProjetsView from "../views/ProjetsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/accueil', name: 'accueil', component: AccueilView},
    {path: '/projets', name: 'projets', component: ProjetsView},
  ]
})

export default router
