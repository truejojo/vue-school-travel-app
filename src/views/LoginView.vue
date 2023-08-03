<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      window.user = this.username
      // this.$router.push({name: 'protected'})
      const redirectPath = this.$route.query.redirect || '/prodected'
      this.$router.push(redirectPath)
    }
  }
}
</script>

<template>
  <div class="login">
    <form @submit.prevent="login" class="form">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input">
      <label for="password">Password</label>
      <input v-model="password" name="password" type="text" class="input">
      <button class="btn">Login</button>
    </form>
  </div>
</template>