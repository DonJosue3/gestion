import { createRouter, createWebHistory } from 'vue-router'
import ListeEmployes from "../views/ListeEmployes.vue"
import ListeVoitures from "../views/ListeVoitures.vue"
import SalairesView from '../views/SalairesView.vue'
import PresencesView from '../views/PresencesView.vue'
import CounterView from '@/views/CounterView.vue'

const routes =  [
    {
      path:"/",
      name:"listeEmployes",
      component:ListeEmployes
    },
    {
      path:"/voitures",
      name:"listeVoitures",
      component:ListeVoitures
    },
    {
      path:"/salaires",
      name:"listeSalaires",
      component:SalairesView
    },
    {
      path:"/presences",
      name:"listePresences",
      component:PresencesView
    },
    {
      path:"/counter",
      name:"counter",
      component:CounterView
    }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
