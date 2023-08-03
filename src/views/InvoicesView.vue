<script setup>
import {onBeforeRouteLeave} from 'vue-router'

onBeforeRouteLeave(() => {
  const answer = window.confirm(
    'Are you sure you want to leave? Invoices are super asesome'
  )
  if(!answer) return false
})
</script>
<template>
  <h1>Invoices</h1>
</template>