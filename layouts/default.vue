<template>
  <div class="h-screen bg-background p-4 md:p-16">
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
