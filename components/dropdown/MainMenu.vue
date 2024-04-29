<script setup lang="ts">
defineProps<{ title: string }>();

const opened = defineModel<boolean>({ default: false });
</script>

<template>
  <div class="flex cursor-pointer items-center gap-2" @click="opened = !opened">
    <div class="w-3.5">
      <IconArrowFillRight v-if="!opened" class="fill-secondary-white" />
      <IconArrowFillDown v-else class="fill-secondary-white" />
    </div>
    <h3 class="select-none text-label text-secondary-white">{{ title }}</h3>
  </div>
</template>
