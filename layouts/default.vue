<template>
  <div class="h-dvh p-2 md:p-4">
    <div
      class="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-primary-light"
    >
      <LayoutHeader />
      <div class="grow">
        <slot />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
