<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.PERSONAL_INFO_BIO });

const { t, locale } = useI18n();

const router = useRouter();
</script>

<template>
  <CommonBreadcrumbsBlock
    :title="t('bio')"
    @close="router.push({ name: ROUTES_MAP.PERSONAL_INFO })"
  />
  <div class="p-5">
    <ContentDoc :head="false" :path="`/${locale}/bio`" />
  </div>
</template>
