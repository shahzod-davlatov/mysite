import { ROUTES_MAP } from '~/constants/routes';

export default defineNuxtRouteMiddleware((from) => {
  if (from.name === ROUTES_MAP.ABOUT_ME) {
    return navigateTo({ name: ROUTES_MAP.PERSONAL_INFO });
  }

  if (from.name === ROUTES_MAP.PERSONAL_INFO) {
    return navigateTo({ name: ROUTES_MAP.PERSONAL_INFO_BIO });
  }
});
