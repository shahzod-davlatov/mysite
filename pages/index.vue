<script setup lang="ts">
import { GITHUB_LINK } from '~/constants/links';
</script>

<template>
  <div class="flex h-full items-center justify-center gap-x-20">
    <div>
      <h4 class="text-body text-primary-white">Hi all. I am</h4>
      <h2 class="text-headline text-primary-white">Shahzod Davlatov</h2>
      <h3 class="text-subheadline text-secondary-blue">> Frontend developer</h3>
      <p class="mt-36 text-primary-white text-label">
        <span class="text-secondary-blue">const </span>
        <span class="text-accent-green">githubLink</span> =
        <span class="text-accent-red">&quot;</span>
        <span class="text-accent-red underline select-all">{{
          GITHUB_LINK
        }}</span>
        <span class="text-accent-red">&quot;</span>
      </p>
    </div>
    <div class="relative h-5/6 w-1/3">
      <NuxtImg
        class="absolute top-1/4 -translate-y-1/2"
        loading="lazy"
        src="/land-big.png"
      />
      <NuxtImg class="absolute right-0" loading="lazy" src="/cloud-big.png" />
      <NuxtImg
        class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        loading="lazy"
        src="/computer.png"
      />
      <NuxtImg
        class="absolute left-1/3 top-2/3 -translate-x-1/2 -translate-y-1/2"
        loading="lazy"
        src="/cloud-small.png"
      />
      <NuxtImg
        class="absolute right-0 top-1/4"
        loading="lazy"
        src="/land-small.png"
      />
    </div>
  </div>
</template>
