
import React, { useState } from 'react';

interface StartScreenProps {
  onStart: (playerNames: string[]) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [numPlayers, setNumPlayers] = useState(1);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleStart = () => {
    const names = numPlayers === 1 ? [player1Name] : [player1Name, player2Name];
    onStart(names);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
      <h2 className="text-3xl font-bold mb-6 text-cyan-200">Chào mừng đến với Ocean Quest!</h2>
      <div className="mb-6">
        <span className="mr-4 text-lg">Chọn chế độ chơi:</span>
        <button
          onClick={() => setNumPlayers(1)}
          className={`px-4 py-2 rounded-lg mr-2 transition-all duration-300 ${numPlayers === 1 ? 'bg-cyan-500 shadow-lg scale-110' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          👤 1 Người chơi
        </button>
        <button
          onClick={() => setNumPlayers(2)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${numPlayers === 2 ? 'bg-cyan-500 shadow-lg scale-110' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          👥 2 Người chơi
        </button>
      </div>
      <div className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="player1" className="block mb-2 text-cyan-300">Tên người chơi 1:</label>
          <input
            id="player1"
            type="text"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
            placeholder="Nhập tên người chơi 1"
            className="w-full bg-white/10 p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>
        {numPlayers === 2 && (
          <div className="mb-6">
            <label htmlFor="player2" className="block mb-2 text-cyan-300">Tên người chơi 2:</label>
            <input
              id="player2"
              type="text"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
              placeholder="Nhập tên người chơi 2"
              className="w-full bg-white/10 p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
        )}
      </div>
      <button
        onClick={handleStart}
        className="text-xl font-bold bg-green-500 hover:bg-green-600 px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        BẮT ĐẦU 🚀
      </button>
    </div>
  );
};

export default StartScreen;
