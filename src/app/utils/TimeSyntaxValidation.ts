export const validateFormat = (value: string): boolean => {
  const regex = /^(\d+h\s*)?(\d+m)?$/;
  return regex.test(value.trim());
};

export function parseTimeToMinutes(time: string): number {
  const timeParts = time.split(' ');
  let totalMinutes = 0;

  timeParts.forEach(part => {
    const value = parseInt(part);
    if (part.includes('h')) {
      totalMinutes += value * 60; // Convert hours to minutes
    } else if (part.includes('m')) {
      totalMinutes += value; // Add minutes
    }
  });

  return totalMinutes;
}

