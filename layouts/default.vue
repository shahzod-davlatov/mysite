<template>
  <div class="h-dvh p-2 lg:p-4">
    <div
      class="grid h-full grid-rows-main rounded-lg border border-line bg-primary-light lg:grid-cols-main"
    >
      <LayoutHeader />
      <slot />
      <LayoutFooter />
    </div>
  </div>
</template>
