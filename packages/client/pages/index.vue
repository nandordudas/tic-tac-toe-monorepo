<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <BasePage name="index">
    <BaseContainer>
      <p>
        <BaseExternalLink :to="config.public.apiBase">
          Nuxt.js
        </BaseExternalLink>
      </p>
    </BaseContainer>
  </BasePage>
</template>
