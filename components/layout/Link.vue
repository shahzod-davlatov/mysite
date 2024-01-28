<script setup lang="ts">
import type { NuxtLinkProps } from 'nuxt/app';

defineProps<NuxtLinkProps & { active?: boolean }>();
</script>

<template>
  <NuxtLink
    v-bind="$props"
    class="relative flex h-full items-center px-8 text-label text-secondary"
    :class="[
      { 
        'text-secondary-white': active,
        'after:absolute after:-inset-x-px after:-bottom-0.5 after:h-[3px] after:bg-accent': active
      }
    ]"
  >
    <slot />
  </NuxtLink>
</template>