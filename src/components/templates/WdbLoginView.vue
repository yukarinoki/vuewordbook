<template>
  <div id="login">
    <h1> Login </h1>
    <button @click="check_click">TEST</button>
    <button @click="login">Register</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    login: function (event) {
      var provider = new firebase.auth.TwitterAuthProvider()
      provider.setCustomParameters({
        'lang': 'jp'
      })
      var temrouter = this.$router
      firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken
        var secret = result.credential.secret
        var user = result.user
        console.log(token, secret, user)
        temrouter.push('/')
      }).catch(function (error) {
        console.error(error)
      })
    },
    check_click: function (event) {
      console.log('いけた')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
