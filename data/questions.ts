export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  colorOptions?: boolean;
};

export const questions: Question[] = [
  { question: 'What is the hiragana for "ka"?', options: ['か', 'き', 'こ', 'く'], correctAnswer: 'か' },
  { question: 'What is the katakana for "sa"?', options: ['サ', 'ス', 'セ', 'ソ'], correctAnswer: 'サ' },
  { question: 'What color is "aka"?', options: ['Red', 'Blue', 'Green', 'Yellow'], correctAnswer: 'Red', colorOptions: true },
  { question: 'What is the meaning of "neko"?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correctAnswer: 'Cat' },
  { question: 'What is the hiragana for "shi"?', options: ['し', 'ち', 'さ', 'す'], correctAnswer: 'し' },
  { question: 'What is the katakana for "to"?', options: ['ト', 'テ', 'チ', 'タ'], correctAnswer: 'ト' },
  { question: 'What color is "ao"?', options: ['Red', 'Blue', 'Black', 'White'], correctAnswer: 'Blue', colorOptions: true },
  { question: 'What is the meaning of "mizu"?', options: ['Water', 'Fire', 'Earth', 'Wind'], correctAnswer: 'Water' },
  { question: 'What is the hiragana for "ta"?', options: ['た', 'ち', 'て', 'と'], correctAnswer: 'た' },
  { question: 'What is the katakana for "na"?', options: ['ナ', 'ニ', 'ヌ', 'ネ'], correctAnswer: 'ナ' },
  { question: 'What color is "shiro"?', options: ['White', 'Black', 'Green', 'Blue'], correctAnswer: 'White', colorOptions: true },
  { question: 'What is the meaning of "inu"?', options: ['Bird', 'Cat', 'Dog', 'Fish'], correctAnswer: 'Dog' },
  { question: 'What is the hiragana for "mo"?', options: ['も', 'み', 'ま', 'め'], correctAnswer: 'も' },
  { question: 'What is the katakana for "re"?', options: ['レ', 'ラ', 'ロ', 'ル'], correctAnswer: 'レ' },
  { question: 'What color is "kuro"?', options: ['Black', 'White', 'Blue', 'Red'], correctAnswer: 'Black', colorOptions: true },
  { question: 'What is the meaning of "sora"?', options: ['Sky', 'Mountain', 'River', 'Tree'], correctAnswer: 'Sky' },
  { question: 'What is the hiragana for "yu"?', options: ['ゆ', 'や', 'よ', 'え'], correctAnswer: 'ゆ' },
  { question: 'What is the katakana for "me"?', options: ['メ', 'ミ', 'マ', 'ム'], correctAnswer: 'メ' },
  { question: 'What color is "midori"?', options: ['Green', 'Red', 'Blue', 'Yellow'], correctAnswer: 'Green', colorOptions: true },
  { question: 'What is the meaning of "hana"?', options: ['Flower', 'Fish', 'Heart', 'Sun'], correctAnswer: 'Flower' },
];
