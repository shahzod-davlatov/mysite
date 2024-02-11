<script setup lang="ts">
import { APP_TITLE } from '~/constants/title';

const isOpen = ref(false);

const { headerLinks } = useHeaderLinks();

const router = useRouter();

const localePath = useLocalePath();
</script>

<template>
  <IconMenu
    v-if="!isOpen"
    class="h-5 w-4 fill-secondary md:hidden"
    @click="isOpen = true"
  />
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed z-10 h-dvh w-full bg-background p-2 md:p-4"
    >
      <div
        class="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-primary-light"
      >
        <div
          class="flex h-14 items-center justify-between border-b border-line px-5"
        >
          <div class="text-label text-secondary">
            {{ APP_TITLE }}
          </div>
          <IconClose
            v-if="isOpen"
            class="size-4 fill-secondary md:hidden"
            @click="isOpen = false"
          />
        </div>
        <nav class="grow">
          <div
            v-for="{ path, title } in headerLinks"
            :key="path"
            class="flex h-14 items-center border-b border-line pl-4 text-label text-primary-white"
            @click="router.push(localePath(path)).then(() => (isOpen = false))"
          >
            {{ title }}
          </div>
        </nav>
        <div class="flex h-14 border-t border-line">
          <LayoutTranslateLink class="ml-auto border-l border-line" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
