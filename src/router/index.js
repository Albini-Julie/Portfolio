import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from "../views/AccueilView.vue"
import ProjetsView from "../views/ProjetsView.vue"
import MeConnaitreView from "../views/MeConnaitreView.vue"
import LegalView from "../views/LegalView.vue"
import TikTakView from "../views/TikTakViews.vue"
import ContactView from "../views/ContactView.vue"
import UnifiedChampionsView from "../views/UnifiedChampionsView.vue"
import SupanalyseView from "../views/SupanalyseView.vue"
import ValidationView from "../views/ValidationViews.vue"
import Page404 from "../views/404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',                     name: 'accueil',          component: AccueilView},
    {path: '/projets',              name: 'projets',          component: ProjetsView},
    {path: '/legal',                name: 'legal',            component: LegalView},
    {path: '/meconnaitre',          name: 'meconnaitre',      component: MeConnaitreView},
    {path: '/tiktak/:id',               name: 'tiktak',           component: TikTakView},
    {path: '/contact',              name: 'contact',          component: ContactView},
    {path: '/unifiedchampions/:id', name: 'unifiedchampions', component: UnifiedChampionsView},
    {path: '/supanalyse/:id',           name: 'supanalyse',       component: SupanalyseView},
    {path: '/validation',           name: 'validation',       component: ValidationView},
    { path: '/:catchAll(.*)',       name: 'Page404',          component: Page404 },
  ],

  scrollBehavior() {
          document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
        }
})

export default router
