<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
const route = useRoute()

const login = () => {
  window.user = username.value
  // this.$router.push({name: 'protected'})
  const redirectPath = route.query.redirect || '/prodected'
  router.push(redirectPath)
}
</script>

<template>
  <div class="login">
    <form @submit.prevent="login" class="form">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" name="password" type="text" class="input" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>
