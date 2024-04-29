<script setup lang="ts">
import { APP_TITLE } from '~/constants/title';

import type { ROUTES_MAP } from '~/constants/routes';

const isOpen = ref(false);

const { headerLinks } = useHeaderLinks();

const router = useRouter();

const handleRoute = async (
  name: (typeof ROUTES_MAP)[keyof typeof ROUTES_MAP]
) => {
  await router.push({ name });
  isOpen.value = false;
};
</script>

<template>
  <Transition>
    <IconMenu
      v-if="!isOpen"
      class="size-4 fill-secondary lg:hidden"
      @click="isOpen = true"
    />
  </Transition>
  <Teleport to="body">
    <Transition>
      <div
        v-if="isOpen"
        class="fixed z-10 h-dvh w-full bg-background p-2 lg:hidden lg:p-4"
      >
        <div
          class="grid h-full grid-rows-main rounded-lg border border-line bg-primary-light"
        >
          <div class="flex items-center border-b border-line px-4">
            <h2 class="text-label text-secondary">
              {{ APP_TITLE }}
            </h2>
            <IconClose
              v-if="isOpen"
              class="ml-auto size-4 fill-secondary"
              @click="isOpen = false"
            />
          </div>
          <nav>
            <span
              v-for="{ name, title } in headerLinks"
              :key="name"
              class="flex h-14 items-center border-b border-line pl-4 text-label text-primary-white"
              @click="handleRoute(name)"
            >
              {{ title }}
            </span>
          </nav>
          <div class="flex border-t border-line">
            <LayoutTranslateButton class="ml-auto border-l border-line" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
