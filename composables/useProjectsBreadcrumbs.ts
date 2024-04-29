export const useProjectsBreadcrumbs = () => {
  const { t } = useI18n();

  const activeLanguages = useActiveLanguages();

  const isAllActive = computed(() =>
    Object.values(activeLanguages.value).every(Boolean)
  );

  const breadcrumbsTitle = computed(() =>
    isAllActive.value
      ? t('all')
      : (
          Object.entries(activeLanguages.value) as [
            keyof typeof activeLanguages.value,
            (typeof activeLanguages.value)[keyof typeof activeLanguages.value],
          ][]
        )
          .reduce<string[]>((acc, [key, value]) => {
            if (value) {
              acc.push(projectsLanguages[key]);
            }

            return acc;
          }, [])
          .join('; ')
  );

  return { breadcrumbsTitle };
};
