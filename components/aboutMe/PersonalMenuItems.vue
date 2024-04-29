<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

const model = defineModel<boolean>({ default: false });

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
    <IconMarkdown class="fill-accent-green" />
  </DropdownMainItem>
  <DropdownMainItem v-model="model" :title="t('education')">
    <IconFolder class="fill-accent-blue" />
  </DropdownMainItem>
  <DropdownMainItem
    v-if="model"
    :active="route.name === ROUTES_MAP.PERSONAL_INFO_COURSES"
    :title="t('courses')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PERSONAL_INFO_COURSES })"
  >
    <IconMarkdown class="fill-accent-light" />
  </DropdownMainItem>
  <DropdownMainItem
    v-if="model"
    :active="route.name === ROUTES_MAP.PERSONAL_INFO_UNIVERSITY"
    :title="t('university')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PERSONAL_INFO_UNIVERSITY })"
  >
    <IconMarkdown class="fill-accent-light" />
  </DropdownMainItem>
</template>
