<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

const { t } = useI18n();

const router = useRouter();

const route = useRoute();
</script>

<template>
  <DropdownMainItem
    :active="route.name === ROUTES_MAP.HOBBIES_GAMES"
    :title="t('games')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.HOBBIES_GAMES })"
  >
    <IconMarkdown class="fill-accent-red" />
  </DropdownMainItem>
  <DropdownMainItem
    :active="route.name === ROUTES_MAP.HOBBIES_BOOKS"
    :title="t('books')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.HOBBIES_BOOKS })"
  >
    <IconMarkdown class="fill-accent-green" />
  </DropdownMainItem>
  <DropdownMainItem
    :active="route.name === ROUTES_MAP.HOBBIES_MUSIC"
    :title="t('music')"
    hide-arrow
    @click="router.push({ name: ROUTES_MAP.HOBBIES_MUSIC })"
  >
    <IconMarkdown class="fill-accent-purple" />
  </DropdownMainItem>
</template>
