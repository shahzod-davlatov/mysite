<script setup lang="ts">
import IconGithub from '~/components/icon/Github.vue';
import IconTelegram from '~/components/icon/Telegram.vue';
import IconVk from '~/components/icon/Vk.vue';

import { TELEGRAM_LINK, VK_LINK, GITHUB_LINK } from '~/constants/links';

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
];
</script>

<template>
  <div class="col-span-full flex justify-end border-t border-line">
    <LayoutLink
      v-for="{ to, group, groupHover, icon } in linksMap"
      :key="group"
      :class="group"
      :href="to"
      class="w-14 border-l border-line"
      target="_blank"
    >
      <component :is="icon" :class="groupHover" class="btn-social transition" />
    </LayoutLink>
  </div>
</template>
