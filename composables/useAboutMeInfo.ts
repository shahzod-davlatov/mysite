import { ROUTES_MAP } from '~/constants/routes';

export const useAboutMeInfo = () => {
  const { t } = useI18n();

  const route = useRoute();

  const isProfessionalInfo = computed(() =>
    route.matched.some(({ name }) => name === ROUTES_MAP.PROFESSIONAL_INFO)
  );
  const isPersonalInfo = computed(() =>
    route.matched.some(({ name }) => name === ROUTES_MAP.PERSONAL_INFO)
  );
  const isHobbies = computed(() =>
    route.matched.some(({ name }) => name === ROUTES_MAP.HOBBIES)
  );

  const infoTitle = computed(() => {
    if (isProfessionalInfo.value) {
      return t('professionalInfo');
    }

    if (isPersonalInfo.value) {
      return t('personalInfo');
    }

    if (isHobbies.value) {
      return t('hobbies');
    }

    return '';
  });

  const infoSubtitle = computed(() => {
    switch (route.name) {
      case ROUTES_MAP.PERSONAL_INFO_BIO:
        return t('bio');
      case ROUTES_MAP.PERSONAL_INFO_INTERESTS:
        return t('interests');
      case ROUTES_MAP.PROFESSIONAL_INFO_SKILLS:
        return t('skills');
      case ROUTES_MAP.PROFESSIONAL_INFO_EXPERIENCE:
        return t('experience');
      case ROUTES_MAP.PROFESSIONAL_INFO_COURSES:
        return t('courses');
      case ROUTES_MAP.PROFESSIONAL_INFO_UNIVERSITY:
        return t('university');
      case ROUTES_MAP.HOBBIES_GAMES:
        return t('hobbies');
      case ROUTES_MAP.HOBBIES_BOOKS:
        return t('books');
      case ROUTES_MAP.HOBBIES_MUSIC:
        return t('music');
      default:
        return '';
    }
  });

  return {
    isProfessionalInfo,
    isPersonalInfo,
    isHobbies,
    infoTitle,
    infoSubtitle,
  };
};
