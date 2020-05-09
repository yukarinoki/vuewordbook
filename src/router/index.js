import Vue from 'vue'
import Router from 'vue-router'
import WdbLoginView from '@/components/templates/WdbLoginView.vue'
import WdbBoardView from '@/components/templates/WdbBoardView.vue'
import WdbWordDetailModal from '@/components/templates/WdbWordDetailModal'
import WdbSettingView from '@/components/templates/WdbSettingView'
import firebase from 'firebase/app'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'BoardView',
      component: WdbBoardView,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: WdbLoginView
    },
    {
      path: 'words/:id',
      component: WdbWordDetailModal,
      meta: {requiresAuth: true}
    },
    {
      path: '/setting',
      component: WdbSettingView,
      meta: {requiresAuth: true}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router
