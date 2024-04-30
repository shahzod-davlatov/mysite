<script setup lang="ts">
import { EMAIL } from '~/constants/contacts';

const { t } = useI18n();

const formState = useFormState();

const isSended = ref(false);

const handleSendNew = () => {
  formState.value = { name: '', email: '', message: '' };
  isSended.value = false;
};
</script>

<template>
  <form
    v-if="!isSended"
    class="flex w-full flex-col gap-6 px-7 pt-10 lg:w-3/5 lg:px-0 lg:pt-28"
    @submit.prevent="isSended = !isSended"
  >
    <CommonFieldText
      v-model="formState.name"
      :placeholder="t('form.placeholder.name')"
      :title="t('form.name')"
    />
    <CommonFieldText
      v-model="formState.email"
      :placeholder="EMAIL"
      :title="t('form.email')"
    />
    <CommonFieldTextarea
      v-model="formState.message"
      :placeholder="t('form.placeholder.message')"
      :title="t('form.message')"
    />
    <button class="btn btn-default w-fit text-code" type="submit">
      {{ t('form.submit') }}
    </button>
  </form>
  <div
    v-else
    class="flex h-full flex-col px-7 pt-10 lg:w-2/3 lg:justify-center lg:p-0"
  >
    <h5 class="text-center text-message-headline text-secondary-white">
      {{ t('form.thankYou') }}
    </h5>
    <p class="mt-2.5 text-center text-body text-secondary">
      {{ t('form.sendedMessage') }}
    </p>
    <button
      class="btn btn-default mx-auto mt-9 w-fit text-code"
      type="button"
      @click="handleSendNew"
    >
      {{ t('form.sendNew') }}
    </button>
  </div>
</template>
