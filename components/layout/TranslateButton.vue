<script setup lang="ts">
import { RU_LOCALE, EN_LOCALE } from '~/constants/locales';

const { locale, setLocale } = useI18n();
</script>

<template>
  <div
    class="flex h-full w-14 items-center justify-center transition hover:backdrop-brightness-125"
    @click="setLocale(locale === RU_LOCALE ? EN_LOCALE : RU_LOCALE)"
  >
    <IconTranslate class="btn-social opacity-100" />
  </div>
</template>
