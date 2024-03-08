<script setup lang="ts">
import { GITHUB_LINK } from '~/constants/links';
import { CONST_TITLE, GITHUB_LINK_TITLE } from '~/constants/title';

const { isMobile } = useDevice();

const { t } = useI18n();
</script>

<template>
  <div class="flex h-full items-center justify-center gap-x-20">
    <div class="p-7">
      <h4 class="text-body text-primary-white">
        {{ t('greeting') }}
      </h4>
      <h2
        class="text-headline leading-none text-primary-white md:leading-tight"
      >
        {{ t('name') }}
      </h2>
      <h3
        class="mt-1.5 text-subheadline leading-none text-secondary-blue md:mt-0"
      >
        &gt; {{ t('developer') }}
      </h3>
      <p class="mt-20 text-secondary">&sol;&sol; {{ t('findGithub') }}</p>
      <p class="mt-2.5 text-label text-primary-white">
        <span class="text-secondary-blue">{{ CONST_TITLE }}&nbsp;</span>
        <span class="text-accent-green">{{ GITHUB_LINK_TITLE }}</span> &equals;
        <span class="text-accent-red">&quot;</span>
        <span class="select-all text-accent-red underline">{{
          GITHUB_LINK
        }}</span>
        <span class="text-accent-red">&quot;</span>
      </p>
    </div>
    <div v-if="!isMobile" class="relative hidden h-5/6 w-1/3 md:block">
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
