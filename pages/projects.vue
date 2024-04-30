<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.PROJECTS });

const { t } = useI18n();

const openedState = useOpenedState();

const { breadcrumbsTitle } = useProjectsBreadcrumbs();
</script>

<template>
  <div class="hidden overflow-auto border-r border-line lg:block">
    <div class="border-b border-line py-2.5 pl-4">
      <DropdownMainMenu v-model="openedState.projects" :title="t('projects')" />
    </div>
    <ProjectsFilters class="py-5 pl-4" />
  </div>
  <div class="overflow-auto">
    <div class="lg:hidden">
      <h3 class="mt-5 pl-7 text-code text-secondary-white">
        {{ t('links.projects') }}
      </h3>
      <DropdownMainMenuMobile
        v-model="openedState.projects"
        :title="t('projects')"
        class="mt-7"
      />
      <ProjectsFilters v-if="openedState.projects" class="pl-7 pt-5" />
      <div class="mt-9 pl-7">
        <span class="text-label text-secondary-white">
          // {{ t('projects') }}
        </span>
        <span class="text-label text-secondary"> / {{ breadcrumbsTitle }}</span>
      </div>
    </div>
    <ProjectsBreadcrumb />
  </div>
</template>
