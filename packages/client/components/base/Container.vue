<template>
  <div :class="classes.container">
    <slot />
  </div>
</template>

<style module="classes">
.container {
  margin-inline: auto;
  max-width: clamp(20rem, 80vw, 60rem);
}
</style>
