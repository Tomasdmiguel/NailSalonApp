export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateEmptyFields = (fields) => {
  for (const field of fields) {
    if (!field) {
      return false;
    }
  }
  return true;
};
