<script setup lang="ts">
const { t } = useI18n();

const openedState = useOpenedState();
</script>

<template>
  <div class="border-b border-line py-2.5 pl-4">
    <DropdownMainMenu v-model="openedState.hobbies" :title="t('hobbies')" />
  </div>
  <div
    v-if="openedState.hobbies"
    class="flex flex-col gap-2 border-b border-line py-5 pl-4"
  >
    <AboutMeHobbiesMenuItems />
  </div>
</template>
