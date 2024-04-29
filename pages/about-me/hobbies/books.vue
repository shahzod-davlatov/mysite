<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.HOBBIES_BOOKS });

const { t, locale } = useI18n();

const router = useRouter();
</script>

<template>
  <CommonBreadcrumbsBlock
    :title="t('books')"
    @close="router.push({ name: ROUTES_MAP.HOBBIES })"
  />
  <div class="p-5">
    <ContentDoc :path="`/${locale}/books`" />
  </div>
</template>
