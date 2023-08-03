<script setup>
import { useRouter } from 'vue-router'

const username = window.user
const router = useRouter()

const logout = () => {
  window.user = null
  // this.$router.push('/')
  router.push({ name: 'home' })
}
</script>

<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout">Logout</button>
    <RouterLink :to="{ name: 'invoices' }">
      <button>Invoices</button>
    </RouterLink>
  </div>
</template>
