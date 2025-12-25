
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Layout, 
  Target, 
  MessageSquare, 
  Sparkles, 
  TrendingUp, 
  MapPin, 
  Image as ImageIcon,
  Menu,
  X,
  ChevronRight,
  Lightbulb,
  Compass,
  Palette,
  Store,
  Megaphone,
  ShieldCheck,
  Users
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import LearningCenter from './pages/LearningCenter';
import MarketExplorer from './pages/MarketExplorer';
import StrategyLab from './pages/StrategyLab';
import AssetCreator from './pages/AssetCreator';
import PlatformGuide from './pages/PlatformGuide';
import MarketingGuide from './pages/MarketingGuide';
import MentoringProgram from './pages/MentoringProgram';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('juragan_progress');
    if (saved) {
      try {
        setCompletedModules(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  const totalModules = 11; 
  const progressPercentage = Math.round((completedModules.length / totalModules) * 100);

  const handleModuleComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      const newProgress = [...completedModules, moduleId];
      setCompletedModules(newProgress);
      localStorage.setItem('juragan_progress', JSON.stringify(newProgress));
    }
  };

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Layout },
    { id: 'learning', name: 'Materi Belajar', icon: BookOpen },
    { id: 'mentoring', name: 'Mentoring Pro', icon: ShieldCheck, badge: 'HOT' },
    { id: 'market', name: 'Panduan Riset', icon: Compass },
    { id: 'strategy', name: 'Panduan Strategi', icon: Target },
    { id: 'marketing', name: 'Strategi Marketing', icon: Megaphone },
    { id: 'assets', name: 'Panduan Aset', icon: Palette },
    { id: 'platforms', name: 'Pilih Platform', icon: Store },
  ];

  const handleNavigate = (id: string) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': 
        return <Dashboard 
          onStart={() => handleNavigate('learning')} 
          onMentoring={() => handleNavigate('mentoring')}
          completedModules={completedModules} 
          progressPercentage={progressPercentage}
        />;
      case 'learning': 
        return <LearningCenter 
          onComplete={handleModuleComplete} 
          completedModules={completedModules}
        />;
      case 'mentoring': return <MentoringProgram />;
      case 'market': return <MarketExplorer onNavigate={handleNavigate} />;
      case 'strategy': return <StrategyLab onNavigate={handleNavigate} />;
      case 'marketing': return <MarketingGuide onNavigate={handleNavigate} />;
      case 'assets': return <AssetCreator onNavigate={handleNavigate} />;
      case 'platforms': return <PlatformGuide onNavigate={handleNavigate} />;
      default: return <Dashboard onStart={() => handleNavigate('learning')} onMentoring={() => handleNavigate('mentoring')} completedModules={completedModules} progressPercentage={progressPercentage} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans antialiased text-slate-900">
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full shadow-none'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex items-center gap-4 border-b border-slate-50">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img 
                src="https://api.dicebear.com/7.x/initials/svg?seed=JD&backgroundColor=4f46e5" 
                alt="Logo" 
                className="w-full h-full object-contain rounded-2xl shadow-lg shadow-indigo-100"
              />
            </div>
            <div className="overflow-hidden">
              <h1 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Kurikulum</h1>
              <h1 className="text-lg font-extrabold text-slate-900 leading-tight truncate">Juragan Digital</h1>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-1 py-6 overflow-y-auto scrollbar-hide">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group
                    ${activeTab === item.id 
                      ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 font-semibold' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} className={activeTab === item.id ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'} />
                    <span className="text-sm font-medium tracking-tight">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === item.id ? 'bg-white/20 text-white' : 'bg-rose-500 text-white shadow-lg shadow-rose-100'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="p-6 border-t border-slate-50">
            <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-2xl shadow-slate-200 overflow-hidden relative group">
              <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-widest relative z-10">Progress Belajar</p>
              <div className="flex items-end justify-between mb-2 relative z-10">
                <h3 className="text-2xl font-black">{progressPercentage}%</h3>
                <span className="text-xs text-slate-500 font-bold">{completedModules.length}/{totalModules} Modul</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
                <div 
                  className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-sm shadow-indigo-500/50" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-3 bg-slate-50 text-slate-600 rounded-2xl active:scale-95 transition-all"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
              <span className="hidden sm:inline hover:text-indigo-600 cursor-pointer transition-colors" onClick={() => handleNavigate('dashboard')}>Beranda</span>
              <ChevronRight size={14} className="hidden sm:block opacity-30" />
              <span className="text-indigo-600 font-bold capitalize">
                {activeTab.replace('-', ' ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button 
               onClick={() => handleNavigate('mentoring')}
               className="hidden sm:flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-2xl border border-indigo-100 text-xs font-bold hover:bg-indigo-100 transition-all active:scale-95"
             >
               <ShieldCheck size={16} /> VIP MENTORING
             </button>
             <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer border border-slate-200">
               <Users size={20} />
             </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 md:p-12 scroll-smooth">
          <div className="max-w-6xl mx-auto w-full">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
