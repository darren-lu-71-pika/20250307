
import React, { useState, useCallback } from 'react';
import { Terminal, ShieldAlert, Cpu, Share2 } from 'lucide-react';
import { GAMES } from './constants';
import { ToastMessage } from './types';
import BackgroundEffect from './components/BackgroundEffect';
import GameCard from './components/GameCard';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      addToast(`已複製: ${code}`);
    } catch (err) {
      addToast('複製失敗，請手動選取', 'error');
    }
  };

  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30">
      <BackgroundEffect />

      {/* Navigation / Header */}
      <nav className="sticky top-0 z-40 w-full bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">G-CENTER</span>
          </div>
          
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium">
            <Share2 className="w-4 h-4" />
            分享中心
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 animate-bounce">
            <Terminal className="w-4 h-4" />
            <span>2026 年度玩家戰報已更新</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            手遊限定兌換中心 <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-500 to-blue-400 animate-pulse">2026 戰報</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            為您即時彙整全球熱門手遊兌換碼。玻璃擬態設計，極簡操作體驗，助您領先一步獲取限定物資。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 gap-8">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} onCopy={handleCopy} />
          ))}
        </div>

        {/* Security Info */}
        <div className="mt-16 p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">安全性提醒</h4>
            <p className="text-gray-400 leading-relaxed">
              本中心代碼皆來自遊戲官方渠道與社群分享，請勿在任何非官方連結輸入您的帳號密碼。定期領取，避免代碼逾期失效。
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 Game Center Battle Report. All Rights Reserved. <br className="md:hidden" /> 
          Designed for Gamers.
        </p>
      </footer>

      {/* Toast Notifications Container */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </div>
    </div>
  );
};

export default App;
