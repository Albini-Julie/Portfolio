import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "../views/AccueilView.vue"
import ProjetsView from "../views/ProjetsView.vue"
import MeConnaitreView from "../views/MeConnaitreView.vue"
import LegalView from "../views/LegalView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'accueil', component: AccueilView},
    {path: '/projets', name: 'projets', component: ProjetsView},
    {path: '/legal', name: 'legal', component: LegalView},
    {path: '/meconnaitre', name: 'meconnaitre', component: MeConnaitreView},
  ]
})

export default router
