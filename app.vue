<script setup lang="ts">
import { APP_TITLE } from '~/constants/title';

useHead({
  title: APP_TITLE,
  meta: [
    { name: 'description', content: 'Frontend Developer Davlatov Shahzod' },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
