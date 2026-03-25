// src/lib/paths.ts
export const getImagePath = (path: string): string => {
  // Remove leading slash if present and ensure proper path
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath;
};

export const getVideoPath = (path: string): string => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath;
};