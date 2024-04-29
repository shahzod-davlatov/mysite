<script setup lang="ts">
import Bun from '~/components/icon/Bun.vue';
import Nest from '~/components/icon/Nest.vue';
import Nuxt from '~/components/icon/Nuxt.vue';
import React from '~/components/icon/React.vue';
import Vue from '~/components/icon/Vue.vue';

import type { LanguagesFilter } from '~/types/projects';

const activeLanguages = useActiveLanguages();

const filtersMap = computed<LanguagesFilter[]>(() => [
  { key: 'react', icon: React, title: 'React' },
  { key: 'vue', icon: Vue, title: 'Vue' },
  { key: 'nuxt', icon: Nuxt, title: 'Nuxt' },
  { key: 'bun', icon: Bun, title: 'Bun' },
  { key: 'nest', icon: Nest, title: 'Nest' },
]);
</script>

<template>
  <div class="flex flex-col gap-5">
    <ProjectsFilterItem
      v-for="{ key, icon, title } in filtersMap"
      :key="key"
      v-model="activeLanguages[key]"
      :title="title"
    >
      <component :is="icon" class="ml-6 size-6 fill-secondary" />
    </ProjectsFilterItem>
  </div>
</template>
