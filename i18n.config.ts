export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      links: {
        hello: '_hello',
        aboutMe: '_about-me',
        projects: '_projects',
        contactMe: '_contact-me',
      },
      greeting: 'Hi, my name is',
      name: 'Shahzod Davlatov',
      developer: 'Frontend developer',
      findGithub: 'find my profile on Github:',
      findMe: 'find me in:',
    },
    ru: {
      links: {
        hello: '_привет',
        aboutMe: '_обо-мне',
        projects: '_проекты',
        contactMe: '_связаться-со-мной',
      },
      greeting: 'Привет, меня зовут',
      name: 'Шахзод Давлатов',
      developer: 'Frontend разработчик',
      findGithub: 'найдите мой профиль на Github:',
      findMe: 'найди меня в:',
    },
  },
}));
