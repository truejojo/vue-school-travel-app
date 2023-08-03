<script setup>
  const props = defineProps( {
    experience: {type: Object, required: true}
  })
</script>

<template>
  <div class="card">
    <img :src="`/images/${props.experience.image}`" :alt="props.experience.name" />
    <span class="card__text">
      {{ props.experience.name }}
    </span>
  </div>
</template>
