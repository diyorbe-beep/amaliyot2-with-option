import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../src/view/Homevue.vue'

const router = createRouter({
      history : createWebHistory(),
      routes: [
            {
                  path: '/',
                  name: 'home-page',
                  component: HomeView
            },
            {
                  path: '/about',
                  name: 'about-page',
                  component: ()=> import('../src/view/aboutvue.vue')
            },
            {
                  path: '/contact',
                  name: 'contact-page',
                  component: ()=> import('../src/view/contactvue.vue')
            }
      ]
})

export default router