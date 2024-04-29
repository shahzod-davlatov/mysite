<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.PROFESSIONAL_INFO_COURSES });

const { t, locale } = useI18n();
</script>

<template>
  <CommonBreadcrumbsBlock
    :route-name="ROUTES_MAP.PROFESSIONAL_INFO"
    :title="t('courses')"
  />
  <div class="p-5">
    <ContentDoc :path="`/${locale}/courses`" />
  </div>
</template>
