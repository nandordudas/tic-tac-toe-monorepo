<script setup lang="ts">
interface Props {
  name: string
}

const { name } = defineProps<Props>()
</script>

<template>
  <section :data-page="name">
    <slot />
  </section>
</template>
