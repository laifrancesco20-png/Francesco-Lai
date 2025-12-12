import React from 'react';
import { Page, Event } from '../types';
import EventCard from '../components/EventCard';
import { ArrowRight, Sun, Users, Activity, User } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
  featuredEvents: Event[];
}

const Home: React.FC<HomeProps> = ({ setPage, featuredEvents }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden py-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-orange-900/60 z-10"></div>
        <img 
          src="https://picsum.photos/id/1059/1920/1080" 
          alt="Streetball community" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight uppercase italic">
            Dove lo sport <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              incontra la comunità
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-10 text-slate-100 font-light max-w-3xl leading-relaxed">
            Dalla Sardegna al resto d'Italia: organizziamo gli eventi sportivi che uniscono atleti, comunità e territorio. Basketball 3vs3 e padel a livello amatoriale e agonistico.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <button 
              onClick={() => setPage(Page.EVENTS)}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-orange-900/20 flex items-center justify-center gap-2 text-lg"
            >
              Scopri i Tornei <ArrowRight size={20} />
            </button>
            <button 
               onClick={() => setPage(Page.MEMBER_AREA)}
               className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 text-lg"
            >
              <User size={20} /> Area Personale
            </button>
          </div>
        </div>
      </section>

      {/* Intro Paragraph Section (Manifesto) */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
            <span className="font-bold text-slate-900">ASD Ball Don't Lie</span> nasce dal desiderio di creare esperienze sportive autentiche e coinvolgenti. 
            Non organizziamo solo tornei, <span className="text-orange-600 font-semibold">organizziamo comunità</span>. 
            Ogni evento è un'occasione per atleti di tutte le abilità—dai principianti agli agonisti—di mettersi alla prova, divertirsi e crescere insieme.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors rounded-full flex items-center justify-center mb-6">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Estate Sarda</h3>
              <p className="text-slate-600">
                Location uniche, dal Poetto alla Costa Smeralda. Lo sport incontra il turismo e la bellezza del territorio.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-14 h-14 mx-auto bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-slate-600">
                Un network di appassionati che va oltre il campo da gioco. Eventi, musica e condivisione.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-14 h-14 mx-auto bg-slate-100 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors rounded-full flex items-center justify-center mb-6">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Competizione</h3>
              <p className="text-slate-600">
                Tornei 3x3 (regole FIBA) e Padel per ogni livello, con premi e ranking ufficiali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Prossimi Appuntamenti</h2>
              <p className="text-slate-500 text-lg">Scendi in campo e mettiti alla prova.</p>
            </div>
            <button 
              onClick={() => setPage(Page.EVENTS)}
              className="flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group"
            >
              Vedi calendario completo <ArrowRight size={20} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.slice(0, 3).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-slate-500 mb-4">Sei già tesserato?</p>
             <button 
               onClick={() => setPage(Page.MEMBER_AREA)}
               className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
             >
               Verifica la tua iscrizione
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;