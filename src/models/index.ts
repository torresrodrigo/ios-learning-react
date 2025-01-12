export type Question = {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number;
  };
  
  export type Quiz = {
    id: string;
    topicId: string;
    questions: Question[];
    userScore?: number;
  };
  
  export type Topic = {
    id: string;
    title: string;
    description: string;
    codeExample: string;
    useCase: string;
    commonMistakes: string[];
    quiz: Quiz;
  };
  