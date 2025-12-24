
export interface Question {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface Player {
  id: number;
  name: string;
  score: number;
  badges: Badge[];
}

export interface Badge {
  name: string;
  emoji: string;
  scoreThreshold: number;
}

export enum GameState {
  Start = 'START',
  Playing = 'PLAYING',
  Results = 'RESULTS',
}
