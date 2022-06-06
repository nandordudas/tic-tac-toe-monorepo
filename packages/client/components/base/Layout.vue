<script setup lang="ts">
interface Props {
  name: string
}

const { name } = defineProps<Props>()
</script>

<template>
  <main :data-layout="name">
    <slot />
  </main>
</template>
