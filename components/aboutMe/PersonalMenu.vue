<script setup lang="ts">
const { t } = useI18n();

const openedState = useOpenedState();
</script>

<template>
  <div class="border-b border-line py-2.5 pl-4">
    <DropdownMainMenu
      v-model="openedState.personalInfo"
      :title="t('personalInfo')"
    />
  </div>
  <div
    v-if="openedState.personalInfo"
    class="flex flex-col gap-2 border-b border-line py-5 pl-4"
  >
    <AboutMePersonalMenuItems v-model="openedState.education" />
  </div>
  <DropdownContacts v-model="openedState.contacts" />
</template>
