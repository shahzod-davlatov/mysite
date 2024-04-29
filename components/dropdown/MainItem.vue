<script setup lang="ts">
defineProps<{ title: string; hideArrow?: boolean; active?: boolean }>();

const emit = defineEmits<{
  click: [];
}>();

const opened = defineModel<boolean>({ default: false });

const handleClick = () => {
  opened.value = !opened.value;
  emit('click');
};
</script>

<template>
  <div class="flex cursor-pointer items-center gap-2" @click="handleClick">
    <span v-if="hideArrow" class="w-3.5" />
    <div v-else class="w-3.5">
      <IconArrowRight v-if="!opened" class="fill-secondary" />
      <IconArrowDown v-else class="fill-secondary" />
    </div>
    <slot />
    <h4
      :class="{ 'text-secondary-white': active, 'text-secondary': !active }"
      class="select-none text-label"
    >
      {{ title }}
    </h4>
  </div>
</template>
