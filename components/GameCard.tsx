
import React from 'react';
import { Copy, Gift, Sparkles, Gamepad2 } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onCopy: (code: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onCopy }) => {
  const getAccentClass = (color: string) => {
    switch (color) {
      case 'blue': return 'group-hover:text-blue-400';
      case 'fuchsia': return 'group-hover:text-fuchsia-400';
      default: return 'group-hover:text-blue-400';
    }
  };

  const getButtonClass = (color: string) => {
    switch (color) {
      case 'blue': return 'hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]';
      case 'fuchsia': return 'hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]';
      default: return 'hover:bg-blue-500/20';
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-1 transition-all duration-500 hover:border-white/20">
      {/* Gradient Hover Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-${game.accentColor}-500/10 to-transparent`}></div>
      
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300 ${getAccentClass(game.accentColor)}`}>
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{game.name}</h3>
              <p className="text-gray-400 text-sm">{game.description}</p>
            </div>
          </div>
          <Sparkles className={`w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ${getAccentClass(game.accentColor)}`} />
        </div>

        <div className="space-y-4">
          {game.codes.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-black/40 border border-white/5 group/code transition-all duration-300 hover:border-white/10"
            >
              <div className="flex items-center gap-3">
                <Gift className={`w-4 h-4 text-gray-500 group-hover/code:text-${game.accentColor}-400 transition-colors`} />
                <div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">{item.description}</div>
                  <div className="text-white font-mono text-lg font-bold tracking-widest">{item.code}</div>
                </div>
              </div>
              
              <button
                onClick={() => onCopy(item.code)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 active:scale-95 ${getButtonClass(game.accentColor)}`}
              >
                <Copy className="w-4 h-4" />
                <span>複製代碼</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
