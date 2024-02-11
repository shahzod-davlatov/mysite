<script setup lang="ts">
import { TELEGRAM_LINK, VK_LINK, GITHUB_LINK } from '~/constants/links';
</script>

<template>
  <div class="flex h-14 border-t border-line">
    <div class="flex h-full items-center border-r border-line px-5">
      <span class="text-label text-secondary">find me in:</span>
    </div>
    <LayoutLink
      :to="TELEGRAM_LINK"
      class="group/telegram w-14 border-r"
      target="_blank"
    >
      <IconTelegram
        class="btn-social transition group-hover/telegram:opacity-100"
      />
    </LayoutLink>
    <LayoutLink :to="VK_LINK" class="group/vk w-14 border-r" target="_blank">
      <IconVk class="btn-social transition group-hover/vk:opacity-100" />
    </LayoutLink>
    <LayoutLink
      :to="GITHUB_LINK"
      class="group ml-auto border-l px-8"
      target="_blank"
    >
      <div class="flex h-full items-center group-hover:underline">
        <span>@shahzod418</span>
        <IconGithub class="btn-social ml-1 opacity-100" />
      </div>
    </LayoutLink>
  </div>
</template>
