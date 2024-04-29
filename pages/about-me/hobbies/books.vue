<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.HOBBIES_BOOKS });

const { t, locale } = useI18n();
</script>

<template>
  <CommonBreadcrumbsBlock
    :route-name="ROUTES_MAP.PROFESSIONAL_INFO"
    :title="t('books')"
  />
  <div class="p-5">
    <ContentDoc :path="`/${locale}/books`" />
  </div>
</template>
