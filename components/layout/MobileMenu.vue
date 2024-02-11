<script setup lang="ts">
const isOpen = ref(false);

const { headerLinks } = useHeaderLinks();

const router = useRouter();
</script>

<template>
  <svg
    v-if="!isOpen"
    class="md:hidden"
    height="16"
    viewBox="0 0 18 16"
    width="18"
    @click="isOpen = true"
  >
    <path
      d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
      fill="#607B96"
    />
  </svg>
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
            shahzod-davlatov
          </div>
          <svg
            v-if="isOpen"
            class="md:hidden"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            @click="isOpen = false"
          >
            <path
              d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z"
              fill="#607B96"
            />
          </svg>
        </div>
        <nav class="grow">
          <div
            v-for="{ path, title } in headerLinks"
            :key="path"
            class="flex h-14 items-center border-b border-line pl-4 text-label text-primary-white"
            @click="
              router.push(path);
              isOpen = false;
            "
          >
            {{ title }}
          </div>
        </nav>
      </div>
    </div>
  </Teleport>
</template>
