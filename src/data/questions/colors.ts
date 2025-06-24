import { Question } from '@/src/types/questions'

const colors: Question[] = [
  { question: 'What color is "aka"?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Red', colorOptions: true },
  { question: 'What color is "ao"?', options: ['Red', 'Blue', 'Black', 'White'], correctAnswer: 'Blue', colorOptions: true },
  { question: 'What color is "shiro"?', options: ['White', 'Black', 'Green', 'Blue'], correctAnswer: 'White', colorOptions: true },
  { question: 'What color is "kuro"?', options: ['Black', 'White', 'Blue', 'Red'], correctAnswer: 'Black', colorOptions: true },
  { question: 'What color is "midori"?', options: ['Green', 'Red', 'Blue', 'Yellow'], correctAnswer: 'Green', colorOptions: true },
]

export default colors;