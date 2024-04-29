<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.HOBBIES_MUSIC });

const { t, locale } = useI18n();

const router = useRouter();
</script>

<template>
  <CommonBreadcrumbsBlock
    :title="t('music')"
    @close="router.push({ name: ROUTES_MAP.HOBBIES })"
  />
  <div class="p-5">
    <ContentDoc :path="`/${locale}/music`" />
  </div>
</template>
