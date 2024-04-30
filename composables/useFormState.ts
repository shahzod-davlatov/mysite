export const useFormState = () =>
  useState(() => ({
    name: '',
    email: '',
    message: '',
  }));
