export enum QuizCategoryEnum {
  Hiragana = 'hiragana',
  Katakana = 'katakana',
  Colors = 'colors',
  Vocabulary = 'vocabulary',
  ParticleQuestions = 'particleQuestions',
  FoodVocabulary = 'foodVocabulary',
  Family = 'family'
}

export enum ModeEnum {
  TOTAL = 'TOTAL',
  PER_CATEGORY = 'PER CATEGORY'
}

export const MODE_LABELS: Record<ModeEnum, string> = {
  [ModeEnum.TOTAL]: 'Total',
  [ModeEnum.PER_CATEGORY]: 'Per category',
};
