<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({
  name: ROUTES_MAP.PERSONAL_INFO,
  middleware: ['about-me-redirect'],
});
</script>

<template>
  <NuxtPage />
</template>
