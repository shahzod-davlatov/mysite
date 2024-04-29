<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.PERSONAL_INFO_INTERESTS });

const { t, locale } = useI18n();

const router = useRouter();
</script>

<template>
  <CommonBreadcrumbsBlock
    :title="t('interests')"
    @close="router.push({ name: ROUTES_MAP.PERSONAL_INFO })"
  />
  <div class="p-5">
    <ContentDoc :path="`/${locale}/interests`" />
  </div>
</template>
