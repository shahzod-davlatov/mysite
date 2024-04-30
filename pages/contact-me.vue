<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({ name: ROUTES_MAP.CONTACT_ME });

const { t } = useI18n();

const openedState = useOpenedState();
</script>

<template>
  <div class="hidden overflow-scroll border-r border-line lg:block">
    <DropdownContacts v-model="openedState.contacts" />
  </div>
  <div class="flex flex-col overflow-scroll">
    <div class="lg:hidden">
      <h3 class="mt-5 pl-7 text-code text-secondary-white">
        {{ t('links.contactMe') }}
      </h3>
      <DropdownContactsMobile v-model="openedState.contacts" class="mt-7" />
    </div>
    <CommonBreadcrumbsBlock :title="t('contacts')" />
    <div class="flex grow overflow-scroll">
      <div class="flex w-full justify-center lg:w-5/12">
        <ContactMeForm />
      </div>
      <div class="hidden w-7/12 justify-center border-l border-line lg:flex">
        <ContactMeCode />
      </div>
    </div>
  </div>
</template>
