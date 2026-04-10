// CHANGED: trims spaces and removes extra spaces in the middle
export function normalizeUserName(name: string): string {
  return name.trim().replace(/\s+/g, ' ');
}

// CHANGED: simple validation check
export function isValidUserName(name: string): boolean {
  const normalizedName = normalizeUserName(name);
  return normalizedName.length >= 2;
}