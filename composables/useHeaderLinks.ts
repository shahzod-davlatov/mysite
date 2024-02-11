import {
  MAIN_PAGE_LINK,
  ABOUT_ME_PAGE_LINK,
  PROJECTS_PAGE_LINK,
  CONTACT_ME_PAGE_LINK,
} from '~/constants/links';

export const useHeaderLinks = () => {
  const headerLinks = [
    {
      path: MAIN_PAGE_LINK,
      title: '_hello',
    },
    {
      path: ABOUT_ME_PAGE_LINK,
      title: '_about-me',
    },
    {
      path: PROJECTS_PAGE_LINK,
      title: '_projects',
    },
    {
      path: CONTACT_ME_PAGE_LINK,
      title: '_contact-me',
    },
  ];

  return { headerLinks };
};
