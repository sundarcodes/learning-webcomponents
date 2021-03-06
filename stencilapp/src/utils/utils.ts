
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function isUndefined(value: any): boolean {
  return value === undefined || value === 'undefined';
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 10);
}
