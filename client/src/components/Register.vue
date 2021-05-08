<template>
  <div>
    <h1>User Registration</h1>
    <input type="email" name="email" v-model="email"><br>
    <input type="text" name="username" v-model="username"><br>
    <input type="password" name="password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import auth from '@/services/auth'
export default {
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await auth.register({
        email: this.email,
        username: this.username,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
