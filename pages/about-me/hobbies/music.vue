<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.HOBBIES_MUSIC });

const { t, locale } = useI18n();
</script>

<template>
  <CommonBreadcrumbsBlock
    :route-name="ROUTES_MAP.PROFESSIONAL_INFO"
    :title="t('music')"
  />
  <div class="p-5">
    <ContentDoc :path="`/${locale}/music`" />
  </div>
</template>
