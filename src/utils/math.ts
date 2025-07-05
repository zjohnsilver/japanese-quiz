export const divideEvenly = (total: number, parts: number): number[] => {
  const base = Math.floor(total / parts);
  const remainder = total % parts;
  // The remainders earn +1
  return Array.from({ length: parts }, (_, i) => base + (i < remainder ? 1 : 0));
}