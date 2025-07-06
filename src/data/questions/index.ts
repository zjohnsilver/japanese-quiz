import hiragana from './hiraganaBasic';
import hiraganaDakuten from './hiraganaDakuten';
import katakana from './katakana';
import colors from './colors';
import vocabulary from './vocabulary';
import particleQuestions from './particleQuestions';
import foodVocabulary from './food';
import family from './family';

import { Question } from '@/src/types/questions'
import { QuizCategoryEnum } from '@/src/enums/questions'

export const quizCategoryLabels: Record<QuizCategoryEnum, string> = {
  [QuizCategoryEnum.Hiragana]: 'Hiragana: Basic',
  [QuizCategoryEnum.HiraganaDakuten]: 'Hiragana: Dakuten',
  [QuizCategoryEnum.Katakana]: 'Katakana',
  [QuizCategoryEnum.Colors]: 'Colors',
  [QuizCategoryEnum.Vocabulary]: 'General Vocabulary',
  [QuizCategoryEnum.ParticleQuestions]: 'Particles',
  [QuizCategoryEnum.FoodVocabulary]: 'Food',
  [QuizCategoryEnum.Family]: 'Family'
};

export const questionsByCategory: Record<string, Question[]> = {
  hiragana,
  hiraganaDakuten,
  katakana,
  colors,
  vocabulary,
  particleQuestions,
  foodVocabulary,
  family
};