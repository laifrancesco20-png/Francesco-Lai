import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 italic">BALL DON'T LIE</h3>
            <p className="mb-4 text-sm">
              Associazione Sportiva Dilettantistica.<br/>
              Promuoviamo il basket 3x3 e il padel in Sardegna con passione e spirito di squadra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Facebook size={24} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500" />
                info@balldontlie-asd.it
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-500" />
                Via del Mare 23, Cagliari (CA)
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="text-lg font-bold text-white mb-4">Info Legali</h4>
             <p className="text-sm text-slate-400">
                P.IVA: 12345678901<br/>
                C.F.: 98765432109<br/>
                Affiliati CSEN
             </p>
             <p className="mt-4 text-xs text-slate-500">
               © {new Date().getFullYear()} Ball Don't Lie ASD. All rights reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;