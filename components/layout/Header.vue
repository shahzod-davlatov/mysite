<script setup lang="ts">
import {
  MAIN_PAGE_LINK,
  ABOUT_ME_PAGE_LINK,
  PROJECTS_PAGE_LINK,
  CONTACT_ME_PAGE_LINK,
} from '~/constants/links';

const route = useRoute();
</script>

<template>
  <div class="flex h-14 border-b border-line">
    <div class="flex h-full min-w-80 items-center border-r border-line pl-5">
      <h1 class="text-label text-secondary">shahzod-davlatov</h1>
    </div>
    <LayoutLink
      :active="route.fullPath === MAIN_PAGE_LINK"
      :to="MAIN_PAGE_LINK"
      class="border-r px-8"
    >
      _hello
    </LayoutLink>
    <LayoutLink
      :active="route.fullPath === ABOUT_ME_PAGE_LINK"
      :to="ABOUT_ME_PAGE_LINK"
      class="border-r px-8"
    >
      _about-me
    </LayoutLink>
    <LayoutLink
      :active="route.fullPath === PROJECTS_PAGE_LINK"
      :to="PROJECTS_PAGE_LINK"
      class="border-r px-8"
    >
      _projects
    </LayoutLink>
    <LayoutLink
      :active="route.fullPath === CONTACT_ME_PAGE_LINK"
      :to="CONTACT_ME_PAGE_LINK"
      class="ml-auto border-l px-8"
    >
      _contact-me
    </LayoutLink>
  </div>
</template>
