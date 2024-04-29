<script setup lang="ts">
const { t } = useI18n();

const openedState = useOpenedState();
</script>

<template>
  <div class="flex flex-col gap-1">
    <DropdownMainMenuMobile
      v-model="openedState.personalInfo"
      :title="t('personalInfo')"
    />
    <div
      v-if="openedState.personalInfo"
      class="flex flex-col gap-2 py-3.5 pl-7"
    >
      <AboutMePersonalMenuItems />
    </div>
    <DropdownMainMenuMobile
      v-model="openedState.professionalInfo"
      :title="t('professionalInfo')"
    />
    <div
      v-if="openedState.personalInfo"
      class="flex flex-col gap-2 py-3.5 pl-7"
    >
      <AboutMeProfessionalMenuItems />
    </div>
    <DropdownMainMenuMobile
      v-model="openedState.hobbies"
      :title="t('hobbies')"
    />
    <DropdownContactsMobile v-model="openedState.contacts" />
  </div>
</template>
