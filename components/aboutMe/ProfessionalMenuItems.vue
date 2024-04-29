<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

const { t } = useI18n();

const router = useRouter();

const route = useRoute();

const openedState = useOpenedState();
</script>

<template>
  <DropdownMainItem
    :active="route.name === ROUTES_MAP.PROFESSIONAL_INFO_SKILLS"
    :title="t('skills')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PROFESSIONAL_INFO_SKILLS })"
  >
    <IconMarkdown class="fill-accent" />
  </DropdownMainItem>
  <DropdownMainItem
    :active="route.name === ROUTES_MAP.PROFESSIONAL_INFO_EXPERIENCE"
    :title="t('experience')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PROFESSIONAL_INFO_EXPERIENCE })"
  >
    <IconMarkdown class="fill-accent-green" />
  </DropdownMainItem>
  <DropdownMainItem v-model="openedState.education" :title="t('education')">
    <IconFolder class="fill-accent-blue" />
  </DropdownMainItem>
  <DropdownMainItem
    v-if="openedState.education"
    :active="route.name === ROUTES_MAP.PROFESSIONAL_INFO_COURSES"
    :title="t('courses')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PROFESSIONAL_INFO_COURSES })"
  >
    <IconMarkdown class="fill-accent-light" />
  </DropdownMainItem>
  <DropdownMainItem
    v-if="openedState.education"
    :active="route.name === ROUTES_MAP.PROFESSIONAL_INFO_UNIVERSITY"
    :title="t('university')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.PROFESSIONAL_INFO_UNIVERSITY })"
  >
    <IconMarkdown class="fill-accent-light" />
  </DropdownMainItem>
</template>
