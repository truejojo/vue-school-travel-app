<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  ...RouterLink.props
})

const isExternal = computed(() => typeof props.to === 'string' && props.to.startsWith('http'))
</script>

<template>
  <a v-if="isExternal" target="_blank" rel="noopener" class="external-link" :href="to"><slot /></a>
  <router-link v-else v-bind="$props"><slot /></router-link>
  <!-- <RouterLink v-bind="$props"><slot /></RouterLink> -->
</template>

<style>
#nav .external-link {
  color: tomato;
}
</style>
