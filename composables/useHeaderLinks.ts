import {
  MAIN_PAGE_LINK,
  ABOUT_ME_PAGE_LINK,
  PROJECTS_PAGE_LINK,
  CONTACT_ME_PAGE_LINK,
} from '~/constants/links';

export const useHeaderLinks = () => {
  const { t } = useI18n();

  const headerLinks = computed(() => [
    {
      path: MAIN_PAGE_LINK,
      title: t('links.hello'),
    },
    {
      path: ABOUT_ME_PAGE_LINK,
      title: t('links.aboutMe'),
    },
    {
      path: PROJECTS_PAGE_LINK,
      title: t('links.projects'),
    },
    {
      path: CONTACT_ME_PAGE_LINK,
      title: t('links.contactMe'),
    },
  ]);

  return { headerLinks };
};
