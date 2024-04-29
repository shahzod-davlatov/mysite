import type { LanguagesKeys } from '~/types/projects';

export const useActiveLanguages = () =>
  useState<Record<LanguagesKeys, boolean>>(() => ({
    react: true,
    vue: true,
    nuxt: false,
    bun: false,
    nest: false,
  }));
