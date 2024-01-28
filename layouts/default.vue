<script setup lang="ts">
import LayoutHeader from '~/components/layout/Header.vue';
import LayoutFooter from '~/components/layout/Footer.vue';
</script>

<template>
  <div class="h-screen bg-background p-4 md:p-16">
    <div class="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-primary-light">
      <LayoutHeader />
      <div class="grow bg-green-500">
        <slot />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>