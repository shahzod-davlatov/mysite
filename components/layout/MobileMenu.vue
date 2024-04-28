<script setup lang="ts">
import { APP_TITLE } from '~/constants/title';

const isOpen = ref(false);

const { headerLinks } = useHeaderLinks();

const router = useRouter();

const localePath = useLocalePath();

const handleRoute = async (path: string) => {
  await router.push(localePath(path));
  isOpen.value = false;
};
</script>

<template>
  <Transition>
    <IconMenu
      v-if="!isOpen"
      class="size-4 fill-secondary md:hidden"
      @click="isOpen = true"
    />
  </Transition>
  <Teleport to="body">
    <Transition>
      <div
        v-if="isOpen"
        class="fixed z-10 h-dvh w-full bg-background p-2 md:hidden md:p-4"
      >
        <div
          class="grid-rows-main grid h-full rounded-lg border border-line bg-primary-light"
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
            <div
              v-for="{ path, title } in headerLinks"
              :key="path"
              class="flex h-14 items-center border-b border-line pl-4 text-label text-primary-white"
              @click="handleRoute(path)"
            >
              {{ title }}
            </div>
          </nav>
          <div class="flex border-t border-line">
            <LayoutTranslateLink class="ml-auto border-l border-line" />
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
