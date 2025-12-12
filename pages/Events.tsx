import React, { useState } from 'react';
import { Event } from '../types';
import EventCard from '../components/EventCard';
import { Filter } from 'lucide-react';

interface EventsProps {
  events: Event[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  const [filter, setFilter] = useState<'ALL' | 'UPCOMING' | 'COMPLETED'>('ALL');
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'BASKET3X3' | 'PADEL'>('ALL');

  const filteredEvents = events.filter(event => {
    const statusMatch = filter === 'ALL' || event.status === filter;
    const typeMatch = typeFilter === 'ALL' || event.type === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Eventi BDL</h1>
            <p className="text-slate-500 mt-1">Scopri i tornei in programma e i risultati passati.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Status Filter */}
            <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-slate-200">
              {(['ALL', 'UPCOMING', 'COMPLETED'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === f
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {f === 'ALL' ? 'Tutti' : f === 'UPCOMING' ? 'In Programma' : 'Passati'}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="ALL">Tutti gli sport</option>
              <option value="BASKET3X3">Basket 3x3</option>
              <option value="PADEL">Padel</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900">Nessun evento trovato</h3>
            <p className="text-slate-500">Prova a modificare i filtri di ricerca.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;