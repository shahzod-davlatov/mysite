<script setup lang="ts">
const route = useRoute();

const { headerLinks } = useHeaderLinks();

const { isMobileOrTablet } = useDevice();
</script>

<template>
  <div class="flex h-14 border-b border-line">
    <div
      class="relative flex h-full min-w-full items-center justify-between border-line px-5 md:min-w-80 md:border-r"
    >
      <h1 class="text-label text-secondary">
        shahzod-davlatov
      </h1>
      <LayoutMobileMenu v-if="isMobileOrTablet" />
    </div>
    <LayoutLink
      v-for="{ path, title } in headerLinks"
      :key="path"
      :active="route.fullPath === path"
      :to="path"
      class="hidden border-r px-8 last:ml-auto last:border-l last:border-r-0 md:flex"
    >
      {{ title }}
    </LayoutLink>
  </div>
</template>
