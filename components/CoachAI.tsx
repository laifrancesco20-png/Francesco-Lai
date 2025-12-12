import React, { useState } from 'react';
import { MessageSquare, Send, Loader2, Bot } from 'lucide-react';
import { askCoach } from '../services/geminiService';

const CoachAI: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer(null);
    
    const response = await askCoach(question);
    setAnswer(response);
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl z-40 transition-all hover:scale-110 flex items-center gap-2"
      >
        <Bot size={24} />
        <span className="font-bold hidden md:inline">Chiedi al Coach</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm bg-white rounded-2xl shadow-2xl z-40 border border-slate-200 overflow-hidden flex flex-col animate-fade-in-up">
      <div className="bg-slate-900 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white">
          <Bot size={20} className="text-orange-500" />
          <h3 className="font-bold">Coach Virtuale BDL</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
          <span className="text-2xl">&times;</span>
        </button>
      </div>

      <div className="p-4 bg-slate-50 min-h-[200px] max-h-[400px] overflow-y-auto">
        {!answer && !loading && (
          <p className="text-slate-600 text-sm text-center mt-8">
            Ciao! Sono il Coach AI. <br/>
            Chiedimi regole del 3x3, consigli sul Padel o info sull'associazione!
          </p>
        )}
        
        {loading && (
          <div className="flex flex-col items-center justify-center h-32 text-orange-500">
             <Loader2 size={32} className="animate-spin mb-2" />
             <span className="text-sm font-medium">Il coach sta pensando...</span>
          </div>
        )}

        {answer && (
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
             <p className="text-sm text-slate-800 leading-relaxed">{answer}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t bg-white flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Es: Quanto dura una partita 3x3?"
          className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button 
          type="submit" 
          disabled={loading || !question.trim()}
          className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-50 transition-colors"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default CoachAI;