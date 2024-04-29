<script setup lang="ts">
defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <div class="hidden border-b border-line lg:block">
    <div class="flex w-fit items-center border-r border-line px-4 py-2.5">
      <h4 class="text-label text-secondary">{{ title }}</h4>
      <IconClose
        class="ml-12 size-2.5 cursor-pointer fill-secondary"
        @click="emit('close')"
      />
    </div>
  </div>
</template>
