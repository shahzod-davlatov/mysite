<script setup lang="ts">
import { GITHUB_LINK } from '~/constants/links';
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.MAIN });

const { t } = useI18n();
</script>

<template>
  <div
    class="col-span-full flex h-full items-center justify-center gap-x-20 overflow-auto"
  >
    <CommonBlurBackground class="fixed h-5/6 lg:left-1/2 lg:-translate-x-1/4" />
    <div class="relative p-7">
      <h4 class="text-body text-primary-white">
        {{ t('greeting') }}
      </h4>
      <h2
        class="text-headline leading-none text-primary-white lg:leading-tight"
      >
        {{ t('name') }}
      </h2>
      <h3
        class="mt-1.5 text-subheadline-mobile leading-none text-accent-green lg:mt-0 lg:text-subheadline lg:text-secondary-blue"
      >
        &gt; {{ t('developer') }}
      </h3>
      <p class="mt-20 text-secondary">&sol;&sol; {{ t('findGithub') }}</p>
      <p class="mt-2.5 text-label text-primary-white">
        <span class="text-secondary-blue">const </span>
        <span class="text-accent-green">githubLink</span>
        <span> = </span>
        <span class="text-accent-red">&quot;</span>
        <span class="select-all text-accent-red underline">
          {{ GITHUB_LINK }}
        </span>
        <span class="text-accent-red">&quot;</span>
      </p>
    </div>
    <div class="relative hidden h-5/6 w-1/3 lg:block">
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
