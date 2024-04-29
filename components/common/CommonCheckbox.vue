<script setup lang="ts">
const model = defineModel<boolean>({ default: false });
</script>

<template>
  <input
    v-model="model"
    class="size-5 cursor-pointer rounded-sm border-secondary bg-primary-light checked:bg-secondary hover:opacity-75 checked:hover:bg-secondary focus:ring-0 focus:ring-offset-0 checked:focus:bg-secondary"
    type="checkbox"
  >
</template>
