<script setup lang="ts">
import type { NuxtLinkProps } from 'nuxt/app';

const props = defineProps<
  NuxtLinkProps & {
    title?: string;
    active?: boolean;
  }
>();
</script>

<template>
  <NuxtLink
    v-bind="props"
    :class="{
      'after:absolute after:-inset-x-px after:-bottom-0.5 after:h-[3px] after:bg-accent':
        active,
    }"
    class="relative flex h-full items-center justify-center transition hover:backdrop-brightness-125"
  >
    <span
      v-if="title"
      :class="{ 'text-secondary-white': active }"
      class="text-label text-secondary"
    >
      {{ title }}
    </span>
    <slot v-else />
  </NuxtLink>
</template>
