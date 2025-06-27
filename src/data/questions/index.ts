import hiragana from './hiragana';
import katakana from './katakana';
import colors from './colors';
import vocabulary from './vocabulary';
import particleQuestions from './particleQuestions';
import foodVocabulary from './food';

import { Question } from '@/src/types/questions'
import { QuizCategoryEnum } from '@/src/enums/questions'

export const quizCategoryLabels: Record<QuizCategoryEnum, string> = {
  [QuizCategoryEnum.Hiragana]: 'Hiragana',
  [QuizCategoryEnum.Katakana]: 'Katakana',
  [QuizCategoryEnum.Colors]: 'Colors',
  [QuizCategoryEnum.Vocabulary]: 'General Vocabulary',
  [QuizCategoryEnum.ParticleQuestions]: 'Particles',
  [QuizCategoryEnum.FoodVocabulary]: 'Food',
};

export const questionsByCategory: Record<string, Question[]> = {
  hiragana,
  katakana,
  colors,
  vocabulary,
  particleQuestions,
  foodVocabulary,
};