// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAspLVH_G5ns-Oweqtu0DiCmS3bzV4iTiw',
  authDomain: 'vuewordbook.firebaseapp.com',
  databaseURL: 'https://vuewordbook.firebaseio.com',
  projectId: 'vuewordbook',
  storageBucket: 'vuewordbook.appspot.com',
  messagingSenderId: '459497362101',
  appId: '1:459497362101:web:70ef7722cbf87d696b24fc',
  measurementId: 'G-SJKDDX3RJ4'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
