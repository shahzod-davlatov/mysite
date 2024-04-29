<script setup lang="ts">
defineProps<{ title: string }>();

const model = defineModel<boolean>({ default: false });
</script>

<template>
  <div class="flex cursor-pointer items-center" @click.stop="model = !model">
    <CommonCheckbox v-model="model" />
    <slot />
    <h4
      :class="{ 'text-secondary-white': model }"
      class="ml-2.5 text-label text-secondary"
    >
      {{ title }}
    </h4>
  </div>
</template>
