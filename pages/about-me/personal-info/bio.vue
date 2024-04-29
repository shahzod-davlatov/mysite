<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.PERSONAL_INFO_BIO });

const { t, locale } = useI18n();
</script>

<template>
  <CommonBreadcrumbsBlock
    :route-name="ROUTES_MAP.PROFESSIONAL_INFO"
    :title="t('bio')"
  />
  <div class="p-5">
    <ContentDoc :path="`/${locale}/bio`" />
  </div>
</template>
