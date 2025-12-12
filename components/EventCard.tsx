import React from 'react';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  isRegistered?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isRegistered }) => {
  const isCompleted = event.status === 'COMPLETED';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition hover:scale-[1.02] duration-300">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm">
          {event.type === 'BASKET3X3' ? '🏀 3x3' : '🎾 Padel'}
        </div>
        {isRegistered && (
           <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
             Iscritto
           </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold mb-2">
          <Calendar size={16} />
          {new Date(event.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <MapPin size={16} />
          {event.location}
        </div>

        <p className="text-slate-600 text-sm mb-6 flex-1">
          {event.description}
        </p>

        {isCompleted && event.results && (
           <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4">
              <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase mb-1">
                 <Trophy size={14} /> Risultati
              </div>
              <p className="text-sm text-slate-700 italic">"{event.results}"</p>
           </div>
        )}

        <div className="mt-auto">
          {isCompleted ? (
            <button disabled className="w-full py-2 bg-slate-200 text-slate-400 font-bold rounded-lg cursor-not-allowed">
              Concluso
            </button>
          ) : (
            <button className="w-full py-2 bg-slate-900 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors duration-300">
              {isRegistered ? 'Dettagli Iscrizione' : 'Iscriviti Ora'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;