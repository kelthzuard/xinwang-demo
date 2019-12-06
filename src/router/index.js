import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import VModal from 'vue-js-modal'

Vue.use(VModal, {
  dialog: true,
  dynamic: true,
  injectModalsContainer: true
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
