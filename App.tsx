
import React, { useState, useEffect, useRef, useCallback } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';
import { GameState } from './types';
import type { Player, Question } from './types';
import { gameQuestions } from './data/questions';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [players, setPlayers] = useState<Player[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(boolean | null)[]>([]);

  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize and play background music
    if (!backgroundMusicRef.current) {
        backgroundMusicRef.current = new Audio('https://cdn.pixabay.com/audio/2022/08/04/audio_2dde64313a.mp3');
        backgroundMusicRef.current.loop = true;
        backgroundMusicRef.current.volume = 0.1;
    }
    backgroundMusicRef.current.play().catch(error => console.log("Audio play failed: ", error));

    return () => {
        backgroundMusicRef.current?.pause();
    };
  }, []);

  const shuffleQuestions = useCallback((): Question[] => {
    return [...gameQuestions].sort(() => Math.random() - 0.5);
  }, []);


  const startGame = (playerNames: string[]) => {
    const shuffledQuestions = shuffleQuestions();
    setQuestions(shuffledQuestions);
    setPlayers(
      playerNames.map((name, index) => ({
        id: index,
        name: name || `Người chơi ${index + 1}`,
        score: 0,
        badges: [],
      }))
    );
    setAnswers(new Array(shuffledQuestions.length).fill(null));
    setGameState(GameState.Playing);
  };

  const endGame = (finalPlayersState: Player[], finalAnswers: (boolean | null)[]) => {
    setPlayers(finalPlayersState);
    setAnswers(finalAnswers);
    setGameState(GameState.Results);
  };

  const restartGame = () => {
    setPlayers([]);
    setQuestions([]);
    setAnswers([]);
    setGameState(GameState.Start);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 text-white font-sans p-4 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
          <div className="absolute text-6xl top-1/4 left-1/4 animate-pulse">🐠</div>
          <div className="absolute text-8xl bottom-1/4 right-1/4 animate-pulse delay-500">🐙</div>
          <div className="absolute text-5xl top-10 right-20 animate-pulse delay-1000">🌊</div>
          <div className="absolute text-7xl bottom-10 left-20 animate-pulse delay-700">🦀</div>
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <header className="text-center my-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-cyan-300 drop-shadow-lg">
            🌊 Ocean Quest: Trắc Nghiệm Tin Học 12 🐬
          </h1>
          <p className="text-blue-200 mt-2">Cùng chinh phục đại dương kiến thức!</p>
        </header>
        <main>
          {gameState === GameState.Start && <StartScreen onStart={startGame} />}
          {gameState === GameState.Playing && <GameScreen players={players} questions={questions} onEndGame={endGame} />}
          {gameState === GameState.Results && <ResultsScreen players={players} questions={questions} answers={answers} onRestart={restartGame} />}
        </main>
      </div>
    </div>
  );
};

export default App;
