<script setup>
import { RouterLink } from 'vue-router'
import sourceData from '@/data/index.json'
</script>

<template>
  <nav id="nav">
    <RouterLink id="logo" to="/">Vue School Travel App</RouterLink>
    <RouterLink
      v-for="destination in sourceData.destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
      >{{ destination.name }}
    </RouterLink>
  </nav>
</template>

<style scoped>
#nav .vue-school-active-link {
  color: rgb(127, 231, 220);
}
</style>
