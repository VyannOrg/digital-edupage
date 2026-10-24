import { useState, useEffect } from 'react';
import { ArrowLeft, Users, Calendar, User, Image as ImageIcon, Clock, MapPin } from 'lucide-react';
import { ekskulDatabase } from '../data/ekskulData';

export default function EkskulDetail({ setActivePage, ekskulId = 'pramuka' }) {
  const [isLoading, setIsLoading] = useState(true);
  const [ekskul, setEkskul] = useState(null);

  useEffect(() => {
    const fetchDetailEkskul = async () => {
      setIsLoading(true);
      
      const found = ekskulDatabase.find(item => item.id === ekskulId) || ekskulDatabase[0];

      setTimeout(() => {
        setEkskul(found);
        setIsLoading(false);
      }, 300);
    };

    fetchDetailEkskul();
  }, [ekskulId]);

  if (isLoading || !ekskul) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Halaman Ekskul...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 space-y-6 sm:space-y-8 bg-wf-white text-wf-darkest">

      <div className="bg-wf-light rounded-2xl sm:rounded-[32px] border border-wf-medium/30 overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[4/1] bg-wf-dark relative flex items-center justify-center border-b border-wf-medium/30">
          
          <button 
            onClick={() => setActivePage('ekskul')}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-30 inline-flex items-center gap-2 text-wf-white font-bold text-xs md:text-sm bg-wf-darkest/40 hover:bg-wf-darkest/70 backdrop-blur-md px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-wf-white/20 shadow-lg transition-all cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Kembali ke Portal Ekskul</span>
            <span className="sm:hidden">Kembali</span>
          </button>

          {ekskul.bannerUrl ? (
            <img 
              src={ekskul.bannerUrl} 
              alt={`Banner ${ekskul.nama}`} 
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <div className="flex flex-col items-center text-wf-medium/40 z-10">
              <ImageIcon size={36} className="mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">
                Slot Foto Banner Ekskul
              </span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-wf-darkest/95 via-wf-darkest/30 to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-10 text-wf-white z-20">
            <span className="text-[9px] sm:text-[10px] font-bold bg-wf-blue text-wf-white px-2.5 sm:px-3 py-1 rounded-lg uppercase tracking-wider mb-2 sm:mb-3 inline-block shadow-sm">
              {ekskul.kategori}
            </span>
            <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {ekskul.nama}
            </h1>
          </div>
        </div>

        <div className="bg-wf-white px-4 sm:px-6 md:px-10 py-3.5 sm:py-4 flex flex-wrap items-center gap-4 sm:gap-6 divide-x divide-wf-medium/20 text-xs sm:text-sm font-bold text-wf-darkest">
          <div className="flex items-center gap-2">
            <Users size={17} className="text-wf-blue shrink-0" />
            <span>{ekskul.anggota} Anggota</span>
          </div>
          <div className="flex items-center gap-2 pl-4 sm:pl-6">
            <User size={17} className="text-wf-blue shrink-0" />
            <span>Pembina: {ekskul.pembina}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        
        {/* Left Column: Info & About */}
        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
          
          <div className="bg-wf-darkest text-wf-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-sm space-y-4 sm:space-y-5">
            <h3 className="font-bold text-base sm:text-lg border-b border-wf-medium/20 pb-3">Informasi Kegiatan</h3>
            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm font-medium">
              <div className="flex items-start gap-3">
                <Clock size={17} className="text-wf-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block text-wf-medium text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">Waktu Latihan</span>
                  {ekskul.jadwal}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-wf-blue shrink-0 mt-0.5" />
                <div>
                  <span className="block text-wf-medium text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">Titik Kumpul</span>
                  {ekskul.lokasi}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wf-light p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-wf-medium/30">
            <h3 className="font-bold text-wf-darkest text-lg sm:text-xl mb-3 sm:mb-4">Tentang Ekskul</h3>
            <p className="text-wf-dark text-xs sm:text-sm leading-relaxed text-justify">
              {ekskul.deskripsiLengkap}
            </p>
          </div>

        </div>

        {/* Right Column: Activities */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-wf-medium/20">
            <h2 className="text-xl sm:text-2xl font-bold text-wf-darkest flex items-center gap-2">
              <Calendar className="text-wf-blue shrink-0" size={22} />
              Kegiatan Terbaru
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {ekskul.kegiatan && ekskul.kegiatan.map((post) => (
              <div key={post.id} className="bg-wf-light rounded-2xl sm:rounded-3xl border border-wf-medium/30 overflow-hidden shadow-xs hover:shadow-md transition-shadow group">
                
                <div className="w-full aspect-video bg-wf-dark flex items-center justify-center relative">
                  {post.fotoUrl ? (
                    <img 
                      src={post.fotoUrl} 
                      alt={post.judul} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                  ) : (
                    <div className="text-wf-medium/40 flex flex-col items-center">
                      <ImageIcon size={24} className="mb-1" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">Slot Foto Kegiatan</span>
                    </div>
                  )}
                  <div className="absolute top-2.5 right-2.5 bg-wf-darkest/90 text-wf-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur">
                    {post.tanggal}
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-wf-white">
                  <h4 className="font-bold text-wf-darkest text-sm sm:text-base leading-snug mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-wf-blue transition-colors">
                    {post.judul}
                  </h4>
                  <p className="text-xs text-wf-dark leading-relaxed line-clamp-3">
                    {post.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {(!ekskul.kegiatan || ekskul.kegiatan.length === 0) && (
            <div className="py-12 text-center bg-wf-light rounded-3xl border border-wf-medium/30 border-dashed">
              <p className="text-wf-dark text-xs sm:text-sm font-medium">Belum ada catatan kegiatan terbaru.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
