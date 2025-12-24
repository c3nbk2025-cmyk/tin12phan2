
import React from 'react';
import type { Player } from '../types';

interface PlayerInfoProps {
  player: Player;
  isCurrent: boolean;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ player, isCurrent }) => {
  return (
    <div
      className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
        isCurrent
          ? 'bg-cyan-500/30 border-cyan-300 shadow-lg scale-105'
          : 'bg-black/20 border-white/20'
      }`}
    >
      <h3 className="text-2xl font-bold text-center truncate">{player.name}</h3>
      <p className="text-4xl font-bold text-center my-2 text-yellow-300">{player.score}</p>
      <div className="flex justify-center items-center gap-2 h-8">
        {player.badges.map(badge => (
          <span key={badge.name} title={badge.name} className="text-2xl animate-pulse">
            {badge.emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PlayerInfo;
