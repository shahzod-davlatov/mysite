<script setup lang="ts">
import { RU_LOCALE, EN_LOCALE } from '~/constants/locales';

const { locale } = useI18n();

const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <LayoutLink
    :to="switchLocalePath(locale === RU_LOCALE ? EN_LOCALE : RU_LOCALE)"
    class="w-14"
  >
    <IconTranslate class="btn-social opacity-100" />
  </LayoutLink>
</template>
