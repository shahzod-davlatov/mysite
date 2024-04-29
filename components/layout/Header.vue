<script setup lang="ts">
import { APP_TITLE } from '~/constants/title';

const route = useRoute();

const { headerLinks } = useHeaderLinks();
</script>

<template>
  <div
    class="flex items-center justify-between border-b border-line px-4 lg:border-r lg:px-6"
  >
    <h1 class="text-label text-secondary">
      {{ APP_TITLE }}
    </h1>
    <LayoutMobileMenu />
  </div>
  <nav class="hidden border-b border-line lg:flex">
    <LayoutLink
      v-for="({ name, title }, index) in headerLinks"
      :key="name"
      :active="route.matched.some((matchedRoute) => matchedRoute.name === name)"
      :class="{ 'ml-auto border-l': index === headerLinks.length - 1 }"
      :title="title"
      :to="{ name }"
      class="border-r border-line px-8"
    />
    <LayoutTranslateLink />
  </nav>
</template>
