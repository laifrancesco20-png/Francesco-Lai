import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import MemberArea from './pages/MemberArea';
import CoachAI from './components/CoachAI';
import { Page, User } from './types';
import { MOCK_EVENTS, MOCK_USER, MOCK_REGISTRATIONS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [user, setUser] = useState<User | null>(null);

  // Simple mock login function
  const handleLogin = () => {
    // In a real app, this would validate credentials
    setUser(MOCK_USER);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage(Page.HOME);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} featuredEvents={MOCK_EVENTS} />;
      case Page.ABOUT:
        return <About />;
      case Page.EVENTS:
        return <Events events={MOCK_EVENTS} />;
      case Page.MEMBER_AREA:
        return (
          <MemberArea 
            user={user} 
            onLogin={handleLogin} 
            onLogout={handleLogout}
            registrations={MOCK_REGISTRATIONS}
            events={MOCK_EVENTS}
          />
        );
      default:
        return <Home setPage={setCurrentPage} featuredEvents={MOCK_EVENTS} />;
    }
  };

  return (
    <div className="font-sans text-slate-900 min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} user={user} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      
      {/* AI Assistant available on all pages */}
      <CoachAI />
    </div>
  );
};

export default App;