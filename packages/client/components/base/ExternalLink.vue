<script setup lang="ts">
import type { NuxtLinkProps } from 'nuxt/dist/app/components'

interface Props {
  to: NuxtLinkProps['to']
}

const { to } = defineProps<Props>()
</script>

<template>
  <NuxtLink :external="true" :to="to" target="_blank">
    <slot />
  </NuxtLink>
</template>
