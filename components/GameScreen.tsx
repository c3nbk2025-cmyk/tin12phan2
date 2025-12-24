
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Player, Question, Badge } from '../types';
import PlayerInfo from './PlayerInfo';
import QuestionCard from './QuestionCard';

interface GameScreenProps {
  players: Player[];
  questions: Question[];
  onEndGame: (finalPlayers: Player[], finalAnswers: (boolean | null)[]) => void;
}

const BADGES: Badge[] = [
    { name: 'Tân Binh San Hô', emoji: '🐠', scoreThreshold: 50 },
    { name: 'Chiến Binh Sóng Cả', emoji: '🐙', scoreThreshold: 100 },
    { name: 'Thủy Thần Đại Dương', emoji: '🔱', scoreThreshold: 200 },
    { name: 'Vua Biển Khơi', emoji: '👑', scoreThreshold: 300 },
];

const GameScreen: React.FC<GameScreenProps> = ({ players: initialPlayers, questions, onEndGame }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [answers, setAnswers] = useState<(boolean | null)[]>(new Array(questions.length).fill(null));

  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    correctSoundRef.current = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_c3b09873f0.mp3');
    wrongSoundRef.current = new Audio('https://cdn.pixabay.com/audio/2021/08/04/audio_c6f2e62b72.mp3');
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    const clickSound = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_73ed201a86.mp3');
    clickSound.volume = 0.5;
    clickSound.play();
    
    setPlayers(prevPlayers => {
      const newPlayers = [...prevPlayers];
      const currentPlayer = { ...newPlayers[currentPlayerIndex] };

      if (isCorrect) {
        correctSoundRef.current?.play();
        currentPlayer.score += 10;
        
        const newBadges = BADGES.filter(badge => currentPlayer.score >= badge.scoreThreshold && !currentPlayer.badges.some(b => b.name === badge.name));
        if (newBadges.length > 0) {
            currentPlayer.badges.push(...newBadges);
        }
      } else {
        wrongSoundRef.current?.play();
      }

      newPlayers[currentPlayerIndex] = currentPlayer;
      return newPlayers;
    });

    setAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers];
        newAnswers[currentQuestionIndex] = isCorrect;
        return newAnswers;
    });

    setTimeout(() => {
      if (currentQuestionIndex === questions.length - 1) {
        onEndGame(players, answers);
      } else {
        if (players.length > 1) {
          setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }, 2500); // Wait for explanation to be read
  }, [currentPlayerIndex, players, questions.length, currentQuestionIndex, onEndGame, answers]);

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
        onEndGame(players, answers);
    }
  }, [currentQuestionIndex, onEndGame, players, questions.length, answers]);
  
  if (questions.length === 0) {
    return <div>Đang tải câu hỏi...</div>;
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const currentPlayer = players[currentPlayerIndex];

  return (
    <div>
        <div className="flex flex-col md:flex-row justify-around mb-6 gap-4">
            {players.map((player, index) => (
                <PlayerInfo key={player.id} player={player} isCurrent={index === currentPlayerIndex} />
            ))}
        </div>
        <div className="text-center mb-4 text-xl">
            <p>Câu hỏi <span className="font-bold text-cyan-300">{currentQuestionIndex + 1}</span> / {questions.length}</p>
            <p>Lượt của: <span className="font-bold text-yellow-300">{currentPlayer.name}</span></p>
        </div>
      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        key={currentQuestionIndex}
      />
    </div>
  );
};

export default GameScreen;
