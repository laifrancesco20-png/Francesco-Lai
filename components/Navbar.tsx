import React, { useState } from 'react';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { Page, User } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.ABOUT, label: 'Chi Siamo' },
    { id: Page.EVENTS, label: 'Eventi' },
  ];

  const handleNav = (page: Page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => handleNav(Page.HOME)}>
             <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-xl italic border-2 border-white">
                B
             </div>
             <span className="font-bold text-xl tracking-wider text-orange-500">
               BALL <span className="text-white">DON'T LIE</span>
             </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-orange-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => handleNav(Page.MEMBER_AREA)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  currentPage === Page.MEMBER_AREA
                    ? 'bg-white text-slate-900'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                <UserIcon size={16} />
                {user ? user.name.split(' ')[0] : 'Area Tesserati'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'bg-orange-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
               onClick={() => handleNav(Page.MEMBER_AREA)}
               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-orange-400 hover:text-orange-300"
            >
               {user ? `Ciao, ${user.name}` : 'Area Tesserati'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;