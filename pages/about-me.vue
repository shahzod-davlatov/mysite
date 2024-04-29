<script setup lang="ts">
import { ROUTES_MAP } from '~/constants/routes';

definePageMeta({
  name: ROUTES_MAP.ABOUT_ME,
  middleware: ['about-me-redirect'],
});

const { t } = useI18n();

const router = useRouter();

const route = useRoute();

const {
  isProfessionalInfo,
  isPersonalInfo,
  isHobbies,
  infoTitle,
  infoSubtitle,
} = useAboutMeInfo();

const handleChangeInfo = (
  name: (typeof ROUTES_MAP)[keyof typeof ROUTES_MAP]
) => {
  if (route.matched.some((matchedRoute) => matchedRoute.name === name)) {
    return;
  }

  router.push({ name });
};
</script>

<template>
  <div class="hidden border-r border-line lg:flex">
    <div class="flex flex-col gap-8 border-r border-line pl-6 pr-5 pt-4">
      <IconTerminal
        :class="{ 'opacity-50': !isProfessionalInfo }"
        class="size-6 cursor-pointer fill-secondary"
        @click="handleChangeInfo(ROUTES_MAP.PROFESSIONAL_INFO)"
      />
      <IconUser
        :class="{ 'opacity-50': !isPersonalInfo }"
        class="size-6 cursor-pointer fill-secondary"
        @click="handleChangeInfo(ROUTES_MAP.PERSONAL_INFO)"
      />
      <IconGamepad
        :class="{ 'opacity-50': !isHobbies }"
        class="size-6 cursor-pointer fill-secondary"
        @click="handleChangeInfo(ROUTES_MAP.HOBBIES)"
      />
    </div>
    <div class="grow">
      <AboutMePersonalMenu v-if="isPersonalInfo" />
    </div>
  </div>
  <div>
    <div class="lg:hidden">
      <h3 class="mt-5 pl-7 text-code text-secondary-white">
        {{ t('links.aboutMe') }}
      </h3>
      <AboutMeMenuMobile class="mt-7" />
      <div class="mt-9 pl-7">
        <span class="text-label text-secondary-white">// {{ infoTitle }}</span>
        <span class="text-label text-secondary"> / {{ infoSubtitle }}</span>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
