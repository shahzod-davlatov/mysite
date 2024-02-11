<script setup lang="ts">
import { GITHUB_LINK } from '~/constants/links';

const { isMobile } = useDevice();
</script>

<template>
  <div class="flex h-full items-center justify-center gap-x-20">
    <div class="p-7">
      <h4 class="text-body text-primary-white">
        Hi all. I am
      </h4>
      <h2
        class="text-headline leading-none text-primary-white md:leading-tight"
      >
        Shahzod Davlatov
      </h2>
      <h3 class="text-subheadline leading-none text-secondary-blue">
        &gt; Frontend developer
      </h3>
      <p class="mt-20 text-secondary">
        // find my profile on Github:
      </p>
      <p class="mt-2.5 text-label text-primary-white">
        <span class="text-secondary-blue">const </span>
        <span class="text-accent-green">githubLink</span> =
        <span class="text-accent-red">&quot;</span>
        <span class="select-all text-accent-red underline">{{
          GITHUB_LINK
        }}</span>
        <span class="text-accent-red">&quot;</span>
      </p>
    </div>
    <div
      v-if="!isMobile"
      class="relative hidden h-5/6 w-1/3 md:block"
    >
      <NuxtImg
        class="absolute top-1/4 -translate-y-1/2"
        loading="lazy"
        src="/land-big.png"
      />
      <NuxtImg
        class="absolute right-0"
        loading="lazy"
        src="/cloud-big.png"
      />
      <NuxtImg
        class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        loading="lazy"
        src="/computer.png"
      />
      <NuxtImg
        class="absolute left-1/3 top-1/2 -translate-x-1/2 translate-y-1/3"
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
