import hiragana from './hiragana';
import katakana from './katakana';
import colors from './colors';
import vocabulary from './vocabulary';
import particleQuestions from './particleQuestions';
import foodVocabulary from './food';

import { Question } from '@/src/types/questions'

export const questionsByCategory: Record<string, Question[]> = {
  hiragana,
  katakana,
  colors,
  vocabulary,
  particleQuestions,
  foodVocabulary,
};