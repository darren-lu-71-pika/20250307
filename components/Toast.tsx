
import React, { useEffect } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toast: ToastMessage;
  onClose: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.id, onClose]);

  return (
    <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-top-4">
      {toast.type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      ) : (
        <XCircle className="w-5 h-5 text-rose-400" />
      )}
      <p className="text-white font-medium">{toast.message}</p>
    </div>
  );
};

export default Toast;
