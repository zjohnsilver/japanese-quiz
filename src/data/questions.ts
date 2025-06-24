import { QuizCategoryEnum } from './enums'
import { Question } from '@/src/types/questions'


export const quizCategoryLabels: Record<QuizCategoryEnum, string> = {
  [QuizCategoryEnum.Hiragana]: 'Hiragana',
  [QuizCategoryEnum.Katakana]: 'Katakana',
  [QuizCategoryEnum.Colors]: 'Colors',
  [QuizCategoryEnum.Vocabulary]: 'General Vocabulary',
  [QuizCategoryEnum.ParticleQuestions]: 'Particles',
  [QuizCategoryEnum.FoodVocabulary]: 'Food',
};

export const questionsByCategory: Record<QuizCategoryEnum, Question[]> = {
  hiragana: [
    { question: 'What is the hiragana for "ka"?', options: ['か', 'き', 'こ', 'く'], correctAnswer: 'か' },
    { question: 'What is the hiragana for "shi"?', options: ['し', 'ち', 'さ', 'す'], correctAnswer: 'し' },
    { question: 'What is the hiragana for "ta"?', options: ['た', 'ち', 'て', 'と'], correctAnswer: 'た' },
    { question: 'What is the hiragana for "mo"?', options: ['も', 'み', 'ま', 'め'], correctAnswer: 'も' },
    { question: 'What is the hiragana for "yu"?', options: ['ゆ', 'や', 'よ', 'え'], correctAnswer: 'ゆ' },
  ],

  katakana: [
    { question: 'What is the katakana for "sa"?', options: ['サ', 'ス', 'セ', 'ソ'], correctAnswer: 'サ' },
    { question: 'What is the katakana for "to"?', options: ['ト', 'テ', 'チ', 'タ'], correctAnswer: 'ト' },
    { question: 'What is the katakana for "na"?', options: ['ナ', 'ニ', 'ヌ', 'ネ'], correctAnswer: 'ナ' },
    { question: 'What is the katakana for "re"?', options: ['レ', 'ラ', 'ロ', 'ル'], correctAnswer: 'レ' },
    { question: 'What is the katakana for "me"?', options: ['メ', 'ミ', 'マ', 'ム'], correctAnswer: 'メ' },
  ],

  colors: [
    { question: 'What color is "aka"?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Red', colorOptions: true },
    { question: 'What color is "ao"?', options: ['Red', 'Blue', 'Black', 'White'], correctAnswer: 'Blue', colorOptions: true },
    { question: 'What color is "shiro"?', options: ['White', 'Black', 'Green', 'Blue'], correctAnswer: 'White', colorOptions: true },
    { question: 'What color is "kuro"?', options: ['Black', 'White', 'Blue', 'Red'], correctAnswer: 'Black', colorOptions: true },
    { question: 'What color is "midori"?', options: ['Green', 'Red', 'Blue', 'Yellow'], correctAnswer: 'Green', colorOptions: true },
  ],

  vocabulary: [
    { question: 'What is the meaning of "neko"?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correctAnswer: 'Cat' },
    { question: 'What is the meaning of "mizu"?', options: ['Water', 'Fire', 'Earth', 'Wind'], correctAnswer: 'Water' },
    { question: 'What is the meaning of "inu"?', options: ['Bird', 'Cat', 'Dog', 'Fish'], correctAnswer: 'Dog' },
    { question: 'What is the meaning of "sora"?', options: ['Sky', 'Mountain', 'River', 'Tree'], correctAnswer: 'Sky' },
    { question: 'What is the meaning of "hana"?', options: ['Flower', 'Fish', 'Heart', 'Sun'], correctAnswer: 'Flower' },
  ],

  particleQuestions: [
    {
      question: 'Watashi ___ gakusei desu. Which particle correctly completes the sentence?',
      options: ['wa', 'wo', 'ga', 'de'],
      correctAnswer: 'wa',
    },
    {
      question: 'Piza ___ tabemasu. Which particle correctly completes the sentence?',
      options: ['wo', 'wa', 'ni', 'de'],
      correctAnswer: 'wo',
    },
    {
      question: 'Kore ___ hon desu. Which particle correctly completes the sentence?',
      options: ['wa', 'wo', 'ga', 'to'],
      correctAnswer: 'wa',
    },
    {
      question: 'Keeki ___ tabemasu. Which particle correctly completes the sentence?',
      options: ['wo', 'wa', 'ni', 'de'],
      correctAnswer: 'wo',
    },
    {
      question: 'Sore ___ neko desu. Which particle correctly completes the sentence?',
      options: ['wa', 'wo', 'ga', 'de'],
      correctAnswer: 'wa',
    },
  ],
  foodVocabulary:[
    { question: 'What is the meaning of "gohan"?', options: ['Rice', 'Meat', 'Fish', 'Bread'], correctAnswer: 'Rice' },
    { question: 'What is the meaning of "pan"?', options: ['Bread', 'Milk', 'Juice', 'Cake'], correctAnswer: 'Bread' },
    { question: 'What is the meaning of "sakana"?', options: ['Fish', 'Chicken', 'Vegetable', 'Meat'], correctAnswer: 'Fish' },
    { question: 'What is the meaning of "niku"?', options: ['Meat', 'Fruit', 'Noodle', 'Tofu'], correctAnswer: 'Meat' },
    { question: 'What is the meaning of "miruku"?', options: ['Milk', 'Tea', 'Juice', 'Coffee'], correctAnswer: 'Milk' },
  ]
};