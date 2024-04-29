import { ROUTES_MAP } from '~/constants/routes';

type HeaderLink = {
  name: (typeof ROUTES_MAP)[keyof typeof ROUTES_MAP];
  title: string;
};

export const useHeaderLinks = () => {
  const { t } = useI18n();

  const headerLinks = computed<HeaderLink[]>(() => [
    {
      name: ROUTES_MAP.MAIN,
      title: t('links.hello'),
    },
    {
      name: ROUTES_MAP.ABOUT_ME,
      title: t('links.aboutMe'),
    },
    {
      name: ROUTES_MAP.PROJECTS,
      title: t('links.projects'),
    },
    {
      name: ROUTES_MAP.CONTACT_ME,
      title: t('links.contactMe'),
    },
  ]);

  return { headerLinks };
};
