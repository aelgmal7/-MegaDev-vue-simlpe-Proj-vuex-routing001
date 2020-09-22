import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dogs from '../views/dogs.vue'
import cats from '../views/cats.vue'
import Pet from '../views/pet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',

    component: cats
  },
  {
    path: '/dogs',
    name: 'dogs',

    component: dogs
  }, {
    path: '/pets/:spec/:id',
    name: 'pet',

    component: Pet
  }
]

const router = new VueRouter({
  routes
})

export default router
