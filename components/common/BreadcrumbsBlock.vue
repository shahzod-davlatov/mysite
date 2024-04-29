<script setup lang="ts">
import type { ROUTES_MAP } from '~/constants/routes';

const props = defineProps<{
  title: string;
  routeName: (typeof ROUTES_MAP)[keyof typeof ROUTES_MAP];
}>();

const router = useRouter();

const handleClose = () => {
  router.push({ name: props.routeName });
};
</script>

<template>
  <div class="border-b border-line">
    <div class="flex w-fit items-center border-r border-line px-4 py-2.5">
      <h4 class="text-label text-secondary">{{ title }}</h4>
      <IconClose
        class="ml-12 size-2.5 cursor-pointer fill-secondary"
        @click="handleClose"
      />
    </div>
  </div>
</template>
