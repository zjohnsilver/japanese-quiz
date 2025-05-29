export const PageKeys = {
  Teaching: 'teaching',
  Quiz: 'quiz',
} as const;

export type PageKey = (typeof PageKeys)[keyof typeof PageKeys];