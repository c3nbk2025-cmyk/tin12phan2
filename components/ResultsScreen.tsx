
import React, { useState, useMemo } from 'react';
import type { Player, Question } from '../types';

interface ResultsScreenProps {
  players: Player[];
  questions: Question[];
  answers: (boolean | null)[];
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ players, questions, answers, onRestart }) => {
  const [reviewIndex, setReviewIndex] = useState(0);

  const winner = useMemo(() => {
    if (players.length === 0) return null;
    if (players.length === 1) return players[0];
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    if (sortedPlayers[0].score > sortedPlayers[1].score) {
      return sortedPlayers[0];
    }
    return null; // It's a draw
  }, [players]);

  const handlePrev = () => {
    setReviewIndex(prev => (prev > 0 ? prev - 1 : questions.length - 1));
  }
  const handleNext = () => {
    setReviewIndex(prev => (prev < questions.length - 1 ? prev + 1 : 0));
  }

  const currentReviewQuestion = questions[reviewIndex];
  const playerAnswerStatus = answers[reviewIndex];

  return (
    <div className="flex flex-col items-center justify-center bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
      <h2 className="text-4xl font-bold mb-4 text-yellow-300">Kết Quả Chung Cuộc</h2>
      
      {winner ? (
        <p className="text-2xl mb-6">🏆 Chúc mừng <span className="font-bold text-cyan-300">{winner.name}</span> đã chiến thắng! 🏆</p>
      ) : (
        players.length > 1 && <p className="text-2xl mb-6">🤝 Kết quả hoà! Các bạn thật xuất sắc! 🤝</p>
      )}

      <div className="flex justify-center gap-8 w-full mb-8">
        {players.map(player => (
          <div key={player.id} className="text-center">
            <h3 className="text-xl font-semibold text-cyan-200">{player.name}</h3>
            <p className="text-3xl font-bold text-white">{player.score} điểm</p>
             <div className="flex justify-center items-center gap-2 h-8 mt-1">
                {player.badges.map(badge => (
                  <span key={badge.name} title={badge.name} className="text-2xl">
                    {badge.emoji}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-black/20 p-6 rounded-lg my-6">
        <h3 className="text-2xl font-bold mb-4 text-center text-cyan-300">Ôn tập lại kiến thức</h3>
        <div className="bg-black/30 p-4 rounded-lg">
            <p className="text-sm text-blue-300">Câu {reviewIndex + 1}/{questions.length}</p>
            <p className="my-2">{currentReviewQuestion.statement}</p>
            <p className={`font-bold ${playerAnswerStatus ? 'text-green-400' : 'text-red-400'}`}>
                {playerAnswerStatus === null ? 'Bạn đã bỏ qua câu này' : `Bạn đã trả lời ${playerAnswerStatus ? 'Đúng' : 'Sai'}`}
            </p>
             <p className="mt-2 text-sm text-gray-300"><span className="font-bold">Đáp án đúng:</span> {currentReviewQuestion.isTrue ? "ĐÚNG" : "SAI"}</p>
            <p className="mt-1 text-sm text-gray-300"><span className="font-bold">Giải thích:</span> {currentReviewQuestion.explanation}</p>
        </div>
        <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="px-4 py-2 bg-blue-600 hover:bg-cyan-500 rounded-lg">⬅️ Câu trước</button>
            <button onClick={handleNext} className="px-4 py-2 bg-blue-600 hover:bg-cyan-500 rounded-lg">Câu tiếp ➡️</button>
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="text-xl font-bold bg-green-500 hover:bg-green-600 px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 mt-4"
      >
        CHƠI LẠI 🔄
      </button>
    </div>
  );
};

export default ResultsScreen;
