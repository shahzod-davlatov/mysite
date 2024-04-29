<script setup lang="ts">
import { PHONE, EMAIL } from '~/constants/contacts';

const model = defineModel<boolean>({ default: false });

const { t } = useI18n();
</script>

<template>
  <DropdownMainMenuMobile v-model="model" :title="t('contacts')" />
  <div v-if="model" class="flex flex-col gap-2 py-4 pl-7">
    <div class="flex items-center gap-2">
      <IconMail class="fill-secondary" />
      <span class="select-all text-label text-secondary">{{ EMAIL }}</span>
    </div>
    <div class="flex items-center gap-2">
      <IconPhone class="fill-secondary" />
      <span class="select-all text-label text-secondary">{{ PHONE }}</span>
    </div>
  </div>
</template>
