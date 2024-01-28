<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="flex h-14 border-b border-line">
    <div class="flex h-full min-w-80 items-center border-r border-line pl-5">
      <h1 class="text-label text-secondary">
        shahzod-davlatov
      </h1>
    </div>
    <LayoutLink
      to="/"
      class="border-r border-line"
      :active="route.fullPath === '/'"
    >
      _hello
    </LayoutLink>
    <LayoutLink
      to="/about-me"
      class="border-r border-line"
      :active="route.fullPath === '/about-me'"
    >
      _about-me
    </LayoutLink>
    <LayoutLink
      to="/projects"
      class="border-r border-line"
      :active="route.fullPath === '/projects'"
    >
      _projects
    </LayoutLink>
    <LayoutLink
      to="/contact-me"
      class="ml-auto border-l border-line"
      :active="route.fullPath === '/contact-me'"
    >
      _contact-me
    </LayoutLink>
  </div>
</template>