import React, { useState } from 'react';
import { User, Registration, Event } from '../types';
import EventCard from '../components/EventCard';
import { LogOut, User as UserIcon, ShieldCheck } from 'lucide-react';

interface MemberAreaProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  registrations: Registration[];
  events: Event[];
}

const MemberArea: React.FC<MemberAreaProps> = ({ user, onLogin, onLogout, registrations, events }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Helper to find event details for a registration
  const getEventForRegistration = (reg: Registration) => events.find(e => e.id === reg.eventId);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
              <UserIcon size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Area Tesserati</h2>
            <p className="mt-2 text-sm text-slate-600">
              Accedi per vedere le tue iscrizioni e risultati.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Email: demo@bdl.it"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Password: demo"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                Accedi (Demo Login)
              </button>
            </div>
            <p className="text-xs text-center text-slate-400">
              Clicca su Accedi per simulare il login.
            </p>
          </form>
        </div>
      </div>
    );
  }

  const upcomingRegistrations = registrations.filter(r => {
    const evt = getEventForRegistration(r);
    return evt && evt.status === 'UPCOMING';
  });

  const historyRegistrations = registrations.filter(r => {
    const evt = getEventForRegistration(r);
    return evt && evt.status === 'COMPLETED';
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* User Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full border-4 border-orange-100" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
              <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                <ShieldCheck size={16} className="text-green-500" />
                Tesserato CSEN • ID: {user.membershipId}
              </div>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Active Registrations */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
            Le tue Iscrizioni Attive
          </h2>
          {upcomingRegistrations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingRegistrations.map(reg => {
                const evt = getEventForRegistration(reg);
                if (!evt) return null;
                return <EventCard key={evt.id} event={evt} isRegistered />;
              })}
            </div>
          ) : (
             <p className="text-slate-500 bg-white p-6 rounded-lg shadow-sm">Nessuna iscrizione attiva al momento.</p>
          )}
        </section>

        {/* History */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-slate-300 rounded-full"></span>
            Storico Eventi e Risultati
          </h2>
          {historyRegistrations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {historyRegistrations.map(reg => {
                const evt = getEventForRegistration(reg);
                if (!evt) return null;
                return <EventCard key={evt.id} event={evt} isRegistered />;
              })}
            </div>
          ) : (
            <p className="text-slate-500 bg-white p-6 rounded-lg shadow-sm">Nessun evento passato trovato.</p>
          )}
        </section>

      </div>
    </div>
  );
};

export default MemberArea;