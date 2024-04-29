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
    if (route.name === ROUTES_MAP.PERSONAL_INFO_BIO) {
      return t('bio');
    }

    if (route.name === ROUTES_MAP.PERSONAL_INFO_INTERESTS) {
      return t('interests');
    }

    if (route.name === ROUTES_MAP.PERSONAL_INFO_COURSES) {
      return t('courses');
    }

    if (route.name === ROUTES_MAP.PERSONAL_INFO_UNIVERSITY) {
      return t('university');
    }

    return '';
  });

  return {
    isProfessionalInfo,
    isPersonalInfo,
    isHobbies,
    infoTitle,
    infoSubtitle,
  };
};
