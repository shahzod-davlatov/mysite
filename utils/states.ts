export const useOpenedState = () =>
  useState(() => ({
    personalInfo: true,
    professionalInfo: true,
    hobbies: true,
    education: true,
    contacts: true,
  }));
