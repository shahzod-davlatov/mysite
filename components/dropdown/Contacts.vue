<script setup lang="ts">
import { PHONE, EMAIL } from '~/constants/contacts';

const model = defineModel<boolean>({ default: false });

const { t } = useI18n();
</script>

<template>
  <div class="border-b border-line py-2.5 pl-4">
    <DropdownMainMenu v-model="model" :title="t('contacts')" />
  </div>
  <div v-if="model" class="flex flex-col gap-2 py-5 pl-4">
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
