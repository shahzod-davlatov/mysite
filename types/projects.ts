export type LanguagesKeys = 'react' | 'vue' | 'nuxt' | 'bun' | 'nest';

export type LanguagesFilter = {
  key: LanguagesKeys;
  icon: Component;
  title: string;
};
