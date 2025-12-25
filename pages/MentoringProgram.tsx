
import React from 'react';
import { ShieldCheck, Users, Zap, CheckCircle2, ArrowRight, Star, MessageSquare, Award, Clock } from 'lucide-react';

const MentoringProgram: React.FC = () => {
  const mentoringUrl = "http://lynk.id/juraganusantara/dxw4wmnp2vnm";

  const perks = [
    {
      title: "Direct Feedback",
      desc: "Ide produk Anda direview langsung oleh tim Juragan Digital.",
      icon: MessageSquare
    },
    {
      title: "Eksklusif Group",
      desc: "Bergabung dengan ekosistem ribuan digital marketer se-Indonesia.",
      icon: Users
    },
    {
      title: "Strategy Session",
      desc: "Diskusi mingguan membahas tren pasar dan teknik marketing terbaru.",
      icon: Zap
    }
  ];

  return (
    <div className="space-y-16 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden border border-slate-800 text-center flex flex-col items-center shadow-3xl">
        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-amber-500/20 mb-4 animate-bounce">
            <Star size={14} className="fill-amber-400" /> PROGRAM UNGGULAN
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            Program Pendampingan <span className="text-amber-400">Intensif</span> Juragan Digital
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Jangan jalani bisnis digital sendirian. Bergabunglah dalam program pendampingan eksklusif untuk mempercepat proses pembuatan dan penjualan produk digital Anda.
          </p>
          <div className="pt-8">
            <a 
              href={mentoringUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-12 py-5 rounded-2xl font-black text-lg inline-flex items-center gap-3 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 active:scale-95 shadow-xl"
            >
              Daftar Program Sekarang
              <ArrowRight size={24} />
            </a>
            <p className="text-slate-500 text-xs mt-4 font-medium flex items-center justify-center gap-2">
              <Clock size={14} /> Slot Terbatas Setiap Bulannya
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -mr-40 -mb-40"></div>
      </div>

      {/* Perks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {perks.map((perk, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-6">
              <perk.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
          </div>
        ))}
      </div>

      {/* Comparison Detail */}
      <div className="bg-white rounded-[3rem] border border-slate-200 p-8 md:p-16">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-black text-slate-900">Kenapa Memilih Pendampingan?</h2>
            <p className="text-slate-500 leading-relaxed">
              Belajar mandiri memang bagus, tapi bimbingan dari yang sudah berpengalaman akan menyelamatkan Anda dari kesalahan fatal yang menghabiskan waktu dan biaya.
            </p>
            <div className="space-y-4">
              {[
                "Kurikulum yang disesuaikan dengan niche Anda",
                "Update materi berkala sesuai tren terbaru",
                "Akses aset desain & copywriting siap pakai",
                "Networking dengan pemilik bisnis digital sukses"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
             <div className="bg-slate-900 rounded-3xl p-8 text-white relative shadow-2xl overflow-hidden group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-950">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Member Get Result</h4>
                    <p className="text-xs text-slate-500 italic">"Hasil nyata dari alumni program"</p>
                  </div>
                </div>
                <div className="space-y-4 relative z-10">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-sm italic text-slate-300">"Berkat mentoring ini, e-book pertama saya laku 500 copy dalam 1 minggu pre-launch!"</p>
                      <p className="text-xs font-bold mt-2 text-indigo-400">— Sarah, Kreator Edukasi</p>
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10 opacity-60">
                      <p className="text-sm italic text-slate-300">"Strategi marketing organiknya benar-benar jalan. Gak nyangka jualan produk digital bisa secepat ini."</p>
                      <p className="text-xs font-bold mt-2 text-indigo-400">— Budi, Digital Artist</p>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Final Call */}
      <div className="bg-amber-50 border border-amber-200 rounded-[3rem] p-10 md:p-16 text-center space-y-8">
        <h2 className="text-3xl font-black text-amber-900">Tentukan Masa Depan Bisnis Anda Sekarang</h2>
        <p className="text-amber-800/70 max-w-xl mx-auto font-medium leading-relaxed">
          Jangan tunda lagi kesuksesan yang sudah di depan mata. Klik tombol di bawah untuk bergabung dengan komunitas Juragan Nusantara.
        </p>
        <a 
          href={mentoringUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-lg inline-flex items-center gap-3 transition-all hover:bg-slate-800 shadow-xl"
        >
          Ya, Saya Mau Ikut Mentoring!
          <ArrowRight size={24} />
        </a>
      </div>
    </div>
  );
};

export default MentoringProgram;
