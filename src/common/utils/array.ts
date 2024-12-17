export function groupBy<T, K extends keyof T>(
  array: T[],
  key: K,
): Record<string, T[]> {
  return array.reduce(
    (acc, obj) => {
      // Get the value of the key for the current object
      const groupKey = String(obj[key]);

      // If the group doesn't exist yet, create it
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }

      // Push the object into the corresponding group
      acc[groupKey].push(obj);

      return acc;
    },
    {} as Record<string, T[]>,
  );
}
