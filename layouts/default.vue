<template>
  <div class="h-dvh p-2 md:p-4">
    <div
      class="grid-rows-main grid h-full rounded-lg border border-line bg-primary-light md:grid-cols-main"
    >
      <LayoutHeader />
      <slot />
      <LayoutFooter />
    </div>
  </div>
</template>
