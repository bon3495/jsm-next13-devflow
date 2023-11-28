export function getColor(color: string, opacity?: number) {
  return `hsl(${color} / ${Number.isFinite(opacity) ? opacity : 1})`;
}

export function getAvatarFallback(name: string) {
  // Split the input string into words
  const words = name.split(' ');

  // Extract the first character of each word
  const initials = words.map((word) => word.charAt(0));

  // Join the extracted characters together
  const result = initials.join('');

  return result;
}
