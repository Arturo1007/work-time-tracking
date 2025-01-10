export const validateFormat = (value: string): boolean => {
  const regex = /^(\d+h\s*)?(\d+m)?$/;
  return regex.test(value.trim());
};

