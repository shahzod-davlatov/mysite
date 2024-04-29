<script setup lang="ts">
const activeLanguages = useActiveLanguages();

const { breadcrumbsTitle } = useProjectsBreadcrumbs();

const hasActiveLanguage = computed(() =>
  Object.values(activeLanguages.value).some(Boolean)
);

const handleClose = () => {
  (
    Object.keys(activeLanguages.value) as (keyof typeof activeLanguages.value)[]
  ).forEach((key) => {
    activeLanguages.value[key] = false;
  });
};
</script>

<template>
  <CommonBreadcrumbsBlock
    v-if="hasActiveLanguage"
    :title="breadcrumbsTitle"
    @close="handleClose"
  />
</template>
