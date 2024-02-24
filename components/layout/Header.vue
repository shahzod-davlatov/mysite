<script setup lang="ts">
import { APP_TITLE } from '~/constants/title';

const route = useRoute();

const { headerLinks } = useHeaderLinks();

const { isMobileOrTablet } = useDevice();

const localePath = useLocalePath();
</script>

<template>
  <div class="flex h-14 border-b border-line">
    <div
      class="relative flex h-full min-w-full items-center justify-between border-line px-5 md:border-r lg:min-w-60 xl:min-w-80"
    >
      <h1 class="text-label text-secondary">
        {{ APP_TITLE }}
      </h1>
      <LayoutMobileMenu v-if="isMobileOrTablet" />
    </div>
    <LayoutLink
      v-for="({ path, title }, index) in headerLinks"
      :key="path"
      :active="route.fullPath === localePath(path)"
      :class="{ 'ml-auto border-l': index === headerLinks.length - 1 }"
      :to="localePath(path)"
      class="hidden border-r px-8 md:flex"
    >
      {{ title }}
    </LayoutLink>
    <LayoutTranslateLink class="hidden md:flex" />
  </div>
</template>
