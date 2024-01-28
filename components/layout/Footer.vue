<script setup lang="ts"></script>

<template>
  <div class="flex h-14 border-t border-line">
    <div class="flex h-full items-center border-r border-line px-5">
      <span class="text-label text-secondary">find me in:</span>
    </div>
    <LayoutLink
      to="https://github.com/shahzod418"
      target="_blank"
      class="ml-auto border-l border-line"
    >
      <div class="flex h-full items-center">
        <span>@shahzod418</span>
        <IconGithub class="btn-social ml-1 opacity-100" />
      </div>
    </LayoutLink>
  </div>
</template>