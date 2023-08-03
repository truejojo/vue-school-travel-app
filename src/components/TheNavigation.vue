<script setup>
import AppLink from './AppLink.vue'
import sourceData from '@/data/index.json'
</script>

<template>
  <nav id="nav">
    <AppLink id="logo" to="/">Vue School Travel App</AppLink>
    <AppLink
      v-for="destination in sourceData.destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
      >{{ destination.name }}
    </AppLink>
    <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
    <AppLink to="https://vuejs.org/">Vue School</AppLink>
  </nav>
</template>

<style scoped>
#nav .vue-school-active-link {
  color: rgb(127, 231, 220);
}
</style>
