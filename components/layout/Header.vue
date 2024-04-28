<script setup lang="ts">
import { APP_TITLE } from '~/constants/title';

const route = useRoute();

const { headerLinks } = useHeaderLinks();

const localePath = useLocalePath();
</script>

<template>
  <div
    class="flex items-center justify-between border-b border-line px-4 md:border-r md:px-6"
  >
    <h1 class="text-label text-secondary">
      {{ APP_TITLE }}
    </h1>
    <LayoutMobileMenu />
  </div>
  <div class="hidden border-b border-line md:flex">
    <LayoutLink
      v-for="({ path, title }, index) in headerLinks"
      :key="path"
      :active="route.fullPath === localePath(path)"
      :class="{ 'ml-auto border-l': index === headerLinks.length - 1 }"
      :title="title"
      :to="localePath(path)"
      class="border-r border-line px-8"
    />
    <LayoutTranslateLink />
  </div>
</template>
