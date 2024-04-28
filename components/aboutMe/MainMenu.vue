<script setup lang="ts">
import { PHONE, EMAIL } from '~/constants/contacts';

const INFO = {
  PROFESSIONAL: 0,
  PERSONAL: 1,
  HOBBY: 2,
} as const;

const { t } = useI18n();

const selectedInfo = ref<(typeof INFO)[keyof typeof INFO]>(INFO.PERSONAL);

const selectedInfoTitle = computed(() => {
  switch (selectedInfo.value) {
    case 0:
      return t('professionalInfo');
    case 1:
      return t('personalInfo');
    case 2:
      return t('hobbies');
    default:
      throw new Error(`Unknown info type: ${selectedInfo.value}`);
  }
});
</script>

<template>
  <div class="flex border-r border-line">
    <div class="flex flex-col gap-8 border-r border-line pl-6 pr-5 pt-4">
      <IconTerminal
        :class="{ 'opacity-50': selectedInfo !== INFO.PROFESSIONAL }"
        class="size-6 cursor-pointer fill-secondary"
        @click="selectedInfo = INFO.PROFESSIONAL"
      />
      <IconUser
        :class="{ 'opacity-50': selectedInfo !== INFO.PERSONAL }"
        class="size-6 cursor-pointer fill-secondary"
        @click="selectedInfo = INFO.PERSONAL"
      />
      <IconGamepad
        :class="{ 'opacity-50': selectedInfo !== INFO.HOBBY }"
        class="size-6 cursor-pointer fill-secondary"
        @click="selectedInfo = INFO.HOBBY"
      />
    </div>
    <div class="grow">
      <div class="border-b border-line py-2.5 pl-9">
        <h3 class="relative text-label text-secondary-white">
          <IconArrowFillDown
            class="absolute -left-3 top-1/2 -translate-x-full -translate-y-1/2 fill-secondary-white"
          />
          {{ selectedInfoTitle }}
        </h3>
      </div>
      <div class="flex flex-col gap-2 border-b border-line py-4 pl-9">
        <div class="relative flex items-center gap-2">
          <IconArrowRight
            class="absolute -left-2.5 top-1/2 -translate-x-full -translate-y-1/2 fill-secondary"
          />
          <IconFolder class="fill-accent-red" />
          <span class="text-label text-secondary-white">{{ t('bio') }}</span>
        </div>
        <div class="relative flex items-center gap-2">
          <IconArrowRight
            class="absolute -left-2.5 top-1/2 -translate-x-full -translate-y-1/2 fill-secondary"
          />
          <IconFolder class="fill-accent-green" />
          <span class="text-label text-secondary">{{ t('interests') }}</span>
        </div>
        <div class="relative flex items-center gap-2">
          <IconArrowDown
            class="absolute -left-3.5 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-secondary"
          />
          <IconFolder class="fill-accent-blue" />
          <span class="text-label text-secondary">{{ t('education') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <IconMarkdown class="fill-accent-light" />
          <span class="text-label text-secondary">{{ t('highSchool') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <IconMarkdown class="fill-accent-light" />
          <span class="text-label text-secondary">{{ t('education') }}</span>
        </div>
      </div>
      <div class="border-b border-line py-2.5 pl-9">
        <h3 class="relative text-label text-secondary-white">
          <IconArrowFillDown
            class="absolute -left-3 top-1/2 -translate-x-full -translate-y-1/2 fill-secondary-white"
          />
          {{ t('contacts') }}
        </h3>
      </div>
      <div class="flex flex-col gap-2 py-4 pl-9">
        <div class="relative">
          <IconMail
            class="absolute -left-3.5 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-secondary"
          />
          <span class="select-all text-label text-secondary">{{ EMAIL }}</span>
        </div>
        <div class="relative">
          <IconPhone
            class="absolute -left-3.5 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-secondary"
          />
          <span class="select-all text-label text-secondary">{{ PHONE }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
