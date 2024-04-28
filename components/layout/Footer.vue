<script setup lang="ts">
import IconGithub from '~/components/icon/Github.vue';
import IconTelegram from '~/components/icon/Telegram.vue';
import IconVk from '~/components/icon/Vk.vue';
import IconHabr from '~/components/icon/Habr.vue';

import {
  TELEGRAM_LINK,
  VK_LINK,
  GITHUB_LINK,
  HABR_LINK,
} from '~/constants/links';

const { t } = useI18n();

const linksMap = [
  {
    to: TELEGRAM_LINK,
    group: 'group/telegram',
    groupHover: 'group-hover/telegram:opacity-100',
    icon: IconTelegram,
  },
  {
    to: VK_LINK,
    group: 'group/vk',
    groupHover: 'group-hover/vk:opacity-100',
    icon: IconVk,
  },
  {
    to: GITHUB_LINK,
    group: 'group/github',
    groupHover: 'group-hover/github:opacity-100',
    icon: IconGithub,
  },
  {
    to: HABR_LINK,
    group: 'group/habr',
    groupHover: 'group-hover/habr:opacity-100',
    icon: IconHabr,
  },
];
</script>

<template>
  <div class="col-span-full flex border-t border-line">
    <div
      class="flex h-full grow items-center border-r border-line px-4 md:grow-0 md:pl-6"
    >
      <span class="text-label text-secondary">{{ t('findMe') }}</span>
    </div>
    <LayoutLink
      v-for="({ to, group, groupHover, icon }, index) in linksMap"
      :key="group"
      :class="[
        group,
        { 'border-r-0 md:border-r': index === linksMap.length - 1 },
      ]"
      :href="to"
      class="w-14 border-r border-line"
      target="_blank"
    >
      <component :is="icon" :class="groupHover" class="btn-social transition" />
    </LayoutLink>
  </div>
</template>
