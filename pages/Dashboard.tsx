
import React from 'react';
import { Rocket, ArrowRight, Zap, Target, BookOpen, ChevronRight, Lightbulb, CheckCircle2, Star, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { MODULES } from './LearningCenter';

interface DashboardProps {
  onStart: () => void;
  onMentoring: () => void;
  completedModules: string[];
  progressPercentage: number;
}

const Dashboard: React.FC<DashboardProps> = ({ onStart, onMentoring, completedModules, progressPercentage }) => {
  const lastCompletedId = completedModules.length > 0 ? completedModules[completedModules.length - 1] : null;
  const lastModule = lastCompletedId ? MODULES.find(m => m.id === lastCompletedId) : null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-20">
      <div className="relative overflow-hidden bg-indigo-600 rounded-[3rem] p-10 md:p-16 lg:p-20 text-white shadow-2xl shadow-indigo-100">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold mb-8 border border-white/20 uppercase tracking-[0.2em]">
            <Sparkles size={14} className="text-amber-300" />
            Edisi Belajar 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.15] tracking-tight">
            Bangun Bisnis Digitalmu <br className="hidden sm:block" />Dari Nol Sampai Cuan.
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl mb-12 leading-relaxed opacity-90 max-w-2xl font-medium">
            Kuasai seni membuat, memasarkan, dan menjual produk digital premium dengan panduan langkah-demi-langkah berbasis kecerdasan buatan.
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center">
            <button 
              onClick={onStart}
              className="bg-white text-indigo-700 px-10 py-5 rounded-[1.5rem] font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-50 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-indigo-900/20"
            >
              {progressPercentage > 0 ? 'Lanjutkan Belajar' : 'Mulai Sekarang'}
              <ArrowRight size={22} />
            </button>
            
            <div className="bg-white/10 px-8 py-5 rounded-[1.5rem] backdrop-blur-md border border-white/20 flex flex-col justify-center min-w-[280px]">
              <div className="flex items-center justify-between gap-4 mb-3">
                 <span className="text-[10px] font-bold opacity-60 tracking-[0.2em] uppercase">My Progress</span>
                 <span className="text-xs font-black bg-white/20 px-3 py-1 rounded-full">{progressPercentage}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPercentage}%` }} />
              </div>
              
              {lastModule && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-tighter mb-1">Terakhir Dipelajari:</p>
                  <p className="text-sm font-bold text-white line-clamp-1">{lastModule.title.split(':')[1].trim()}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500 rounded-full -mr-20 -mt-20 opacity-30 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400 rounded-full opacity-20 blur-[80px] pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden border border-slate-800 shadow-2xl shadow-slate-200">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-10 h-full">
            <div className="space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest border border-amber-500/20">
                <ShieldCheck size={16} /> VIP Mentoring
              </div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">Bimbingan 1-on-1 Eksklusif</h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
                Review ide produk, strategi marketing, dan optimasi bisnis digital Anda bersama expert kami.
              </p>
            </div>
            <button 
              onClick={onMentoring}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all transform hover:scale-[1.05] active:scale-95 shrink-0 w-full sm:w-auto shadow-2xl shadow-amber-500/20"
            >
              Lihat Program <ChevronRight size={20} />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        </div>

        <div className="lg:col-span-4 bg-amber-50 border border-amber-100 rounded-[3rem] p-10 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10 space-y-6 text-center lg:text-left">
            <div className="w-16 h-16 bg-amber-100 rounded-3xl flex items-center justify-center text-amber-600 mx-auto lg:mx-0 shadow-inner">
              <Lightbulb size={32} />
            </div>
            <div>
              <h4 className="text-amber-900 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Tips Juragan</h4>
              <p className="text-amber-800 text-2xl font-black leading-tight mb-4">"Fokus pada Solusi"</p>
              <p className="text-amber-700/80 text-base leading-relaxed">Jangan jual fitur, jual transformasi. Orang membeli hasil akhir, bukan prosesnya.</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-200/30 rounded-full blur-[60px] -mr-24 -mb-24"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Belajar Terstruktur",
            desc: "Dari mindset dasar hingga teknik eksekusi tingkat lanjut tanpa ada yang terlewat.",
            icon: BookOpen,
            color: "indigo"
          },
          {
            title: "Riset Pasar AI",
            desc: "Temukan gap pasar dan tren yang belum tergarap dengan asisten riset AI kami.",
            icon: Zap,
            color: "amber"
          },
          {
            title: "Lab Strategi Bisnis",
            desc: "Rancang funnel penjualan yang otomatis menghasilkan konversi tinggi.",
            icon: Target,
            color: "emerald"
          }
        ].map((feat, i) => (
          <div key={i} className="group bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all duration-500">
            <div className={`w-16 h-16 rounded-3xl mb-8 flex items-center justify-center bg-${feat.color}-50 text-${feat.color}-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
              <feat.icon size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{feat.title}</h3>
            <p className="text-slate-500 text-base leading-relaxed font-medium">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
