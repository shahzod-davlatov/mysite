<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

const { t } = useI18n();

const router = useRouter();

const route = useRoute();
</script>

<template>
  <DropdownMainItem
    :active="route.name === ROUTES_MAP.PERSONAL_INFO_BIO"
    :title="t('bio')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PERSONAL_INFO_BIO })"
  >
    <IconMarkdown class="fill-accent-red" />
  </DropdownMainItem>
  <DropdownMainItem
    :active="route.name === ROUTES_MAP.PERSONAL_INFO_INTERESTS"
    :title="t('interests')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PERSONAL_INFO_INTERESTS })"
  >
    <IconMarkdown class="fill-accent-blue" />
  </DropdownMainItem>
</template>
