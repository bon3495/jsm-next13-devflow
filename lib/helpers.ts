export function getColor(color: string, opacity?: number) {

  return `hsl(${color} / ${Number.isFinite(opacity) ? opacity : 1})`;
}
