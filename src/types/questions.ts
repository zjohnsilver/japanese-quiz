export type Question = {
  id?: number;
  question: string;
  options: string[];
  correctAnswer: string;
  colorOptions?: boolean;
};
