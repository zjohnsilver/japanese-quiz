import hiragana from './hiraganaBasic';
import hiraganaDakuten from './hiraganaDakuten';
import hiraganaYouon from './hiraganaYouon';
import katakana from './katakanaBasic';
import katakanaDakuten from './katakanaDakuten';
import katakanaYouon from './katakanaYouon';
import katakanaForeignSounds from './katakanaForeignSounds';
import colors from './colors';
import foodVocabulary from './food';
import family from './family';
import sentence from './sentence';

import { Question } from '@/src/types/questions'
import { QuizCategoryEnum } from '@/src/enums/questions'

export const quizCategoryLabels: Record<QuizCategoryEnum, string> = {
  [QuizCategoryEnum.Hiragana]: 'Hiragana: Basic',
  [QuizCategoryEnum.HiraganaDakuten]: 'Hiragana: Dakuten',
  [QuizCategoryEnum.HiraganaYouon]: 'Hiragana: Youon',
  [QuizCategoryEnum.Katakana]: 'Katakana: Basic',
  [QuizCategoryEnum.KatakanaDakuten]: 'Katakana: Dakuten',
  [QuizCategoryEnum.KatakanaYouon]: 'Katakana: Youon',
  [QuizCategoryEnum.KatakanaForeignSounds]: 'Katakana: Foreign Sounds',
  [QuizCategoryEnum.Colors]: 'Colors',
  [QuizCategoryEnum.FoodVocabulary]: 'Food',
  [QuizCategoryEnum.Family]: 'Family',
  [QuizCategoryEnum.Sentence]: 'Sentence'
};

export const questionsByCategory: Record<string, Question[]> = {
  hiragana,
  hiraganaDakuten,
  hiraganaYouon,
  katakana,
  katakanaDakuten,
  katakanaYouon,
  katakanaForeignSounds,
  colors,
  foodVocabulary,
  family,
  sentence
};