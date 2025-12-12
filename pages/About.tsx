import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Chi Siamo</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Ball Don't Lie ASD nasce dalla passione di un gruppo di amici per la palla a spicchi e l'amore per la propria terra, la Sardegna.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-12">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/3">
                <img 
                  src="https://picsum.photos/id/1057/600/600" 
                  alt="Team BDL" 
                  className="rounded-xl shadow-md w-full h-auto object-cover aspect-square"
                />
             </div>
             <div className="w-full md:w-2/3">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Heart className="text-orange-500" /> La Nostra Storia
               </h2>
               <p className="text-slate-600 mb-4 leading-relaxed">
                 Fondata nel 2018, l'associazione ha iniziato organizzando piccoli tornei di streetball nei campetti di periferia. Oggi siamo una realtà consolidata che porta centinaia di atleti a competere in location suggestive, dal Poetto di Cagliari alla Costa Smeralda.
               </p>
               <p className="text-slate-600 leading-relaxed">
                 Il nome "Ball Don't Lie" (la palla non mente) è il nostro mantra: in campo contano i fatti, l'impegno e il rispetto.
               </p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Target className="text-blue-500" /> La Mission
               </h2>
               <p className="text-slate-600 leading-relaxed">
                 Vogliamo promuovere lo sport come strumento di aggregazione sociale. Il nostro obiettivo è rendere il Basket 3x3 e il Padel accessibili a tutti, creando eventi che uniscano competizione sana e divertimento puro.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Award className="text-amber-500" /> I Valori
               </h2>
               <ul className="space-y-3 text-slate-600">
                 <li className="flex items-center gap-2">• <strong>Fair Play:</strong> Il rispetto prima di tutto.</li>
                 <li className="flex items-center gap-2">• <strong>Inclusione:</strong> Campi aperti a ogni livello.</li>
                 <li className="flex items-center gap-2">• <strong>Territorio:</strong> Valorizzazione delle location sarde.</li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;