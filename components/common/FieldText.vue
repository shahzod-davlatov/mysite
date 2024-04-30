<script setup lang="ts">
defineProps<{ title: string; placeholder: string }>();

const model = defineModel<string>({ default: '' });
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <label class="text-label text-secondary">{{ title }}</label>
    <input
      v-model="model"
      :placeholder="placeholder"
      class="rounded-lg border-line bg-primary py-2.5 pl-4 text-secondary placeholder:text-label placeholder:text-line focus:border-secondary focus:outline-1 focus:outline-offset-0 focus:outline-line"
    >
  </div>
</template>
