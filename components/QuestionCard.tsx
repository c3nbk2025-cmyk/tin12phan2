import React, { useState, useEffect, useRef } from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

const TIME_LIMIT = 20;

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  // FIX: Replaced NodeJS.Timeout with ReturnType<typeof setInterval> for browser compatibility.
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => {
      if(timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && !isAnswered) {
      setIsAnswered(true);
      if(timerRef.current) clearInterval(timerRef.current);
      onAnswer(false); // Time out counts as wrong
    }
  }, [timeLeft, isAnswered, onAnswer]);

  const handleSelect = (answer: boolean) => {
    if (isAnswered) return;
    if(timerRef.current) clearInterval(timerRef.current);
    setIsAnswered(true);
    setSelectedAnswer(answer);
    onAnswer(answer === question.isTrue);
  };

  const getButtonClass = (isTrueButton: boolean) => {
    if (!isAnswered) {
        return "bg-blue-600 hover:bg-cyan-500";
    }
    if (isTrueButton === selectedAnswer) { // The button that was clicked
        return question.isTrue === isTrueButton ? "bg-green-500 animate-pulse" : "bg-red-500";
    }
    if (question.isTrue === isTrueButton) { // The correct answer button, if not clicked
        return "bg-green-500";
    }
    return "bg-gray-700 opacity-50";
  };
  
  const timerPercentage = (timeLeft / TIME_LIMIT) * 100;

  return (
    <div className="bg-black/30 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div 
                className="bg-gradient-to-r from-green-400 to-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-linear" 
                style={{width: `${timerPercentage}%`}}>
            </div>
        </div>
        <p className="text-center text-xl font-mono mb-6">Thời gian: {timeLeft}s</p>
      
        <p className="text-xl md:text-2xl text-center mb-8 min-h-[100px] flex items-center justify-center">{question.statement}</p>
      
        <div className="flex justify-center gap-4 md:gap-8">
            <button
                onClick={() => handleSelect(true)}
                disabled={isAnswered}
                className={`w-1/2 md:w-1/3 text-2xl font-bold py-4 rounded-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed ${getButtonClass(true)}`}
            >
                ĐÚNG ✅
            </button>
            <button
                onClick={() => handleSelect(false)}
                disabled={isAnswered}
                className={`w-1/2 md:w-1/3 text-2xl font-bold py-4 rounded-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed ${getButtonClass(false)}`}
            >
                SAI ❌
            </button>
        </div>
      {isAnswered && (
        <div className="mt-6 p-4 bg-black/30 rounded-lg border border-cyan-400/50">
          <h4 className="font-bold text-cyan-300 text-lg">Giải thích:</h4>
          <p className="text-blue-100">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;