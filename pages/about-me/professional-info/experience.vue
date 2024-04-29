<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.PROFESSIONAL_INFO_EXPERIENCE });

const { t, locale } = useI18n();

const router = useRouter();
</script>

<template>
  <CommonBreadcrumbsBlock
    :title="t('experience')"
    @close="router.push({ name: ROUTES_MAP.PROFESSIONAL_INFO })"
  />
  <div class="p-5">
    <ContentDoc :head="false" :path="`/${locale}/experience`" />
  </div>
</template>
