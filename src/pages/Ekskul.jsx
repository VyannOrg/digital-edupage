import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Activity, Palette, BookOpen, Shield } from 'lucide-react';

export default function Ekskul({ setActivePage }) {
  // ---------------------------------------------------------
  // 1. STATE MANAGEMENT (SIAP UNTUK BACKEND CMS)
  // ---------------------------------------------------------
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [ekskulData, setEkskulData] = useState([]);

  // ---------------------------------------------------------
  // 2. SIMULASI FETCH API BACKEND
  // ---------------------------------------------------------
  useEffect(() => {
    const fetchEkskul = async () => {
      setIsLoading(true);
      
      /* 
      ===============================================================
      [BACKEND LOGIC PLACEHOLDER]
      Contoh pemanggilan API Supabase:
      const { data } = await supabase.from('ekstrakurikuler').select('*');
      if (data) setEkskulData(data);
      ===============================================================
      */
      
      // Data Dummy
      const dummyDatabase = [
        {
          id: 'pramuka',
          nama: 'Prajurit Muda Karana (Pramuka)',
          kategori: 'Wajib',
          deskripsi: 'Ekstrakurikuler wajib untuk melatih kedisiplinan, kemandirian, dan kepemimpinan siswa melalui kegiatan alam dan sosial.',
          fotoUrl: '', // KOSONG - Placeholder banner/logo ekskul
          anggota: 120
        },
        {
          id: 'robotik',
          nama: 'Klub Robotik & IoT',
          kategori: 'Akademik',
          deskripsi: 'Wadah bagi siswa yang memiliki minat pada rekayasa teknologi, pemrograman mikrokontroler, dan perakitan robot presisi.',
          fotoUrl: '', 
          anggota: 45
        },
        {
          id: 'basket',
          nama: 'Edupage Basketball Club',
          kategori: 'Olahraga',
          deskripsi: 'Membina bakat olahraga bola basket dengan porsi latihan fisik dan strategi lapangan berstandar kompetisi nasional.',
          fotoUrl: '', 
          anggota: 65
        },
        {
          id: 'teater',
          nama: 'Seni Peran & Teater',
          kategori: 'Seni',
          deskripsi: 'Mengembangkan potensi akting, olah vokal, penulisan naskah, hingga manajemen panggung pertunjukan.',
          fotoUrl: '', 
          anggota: 30
        },
        {
          id: 'pmr',
          nama: 'Palang Merah Remaja (PMR)',
          kategori: 'Wajib',
          deskripsi: 'Pelatihan kesiapsiagaan bencana, pertolongan pertama pada kecelakaan (P3K), dan aksi sosial kemanusiaan.',
          fotoUrl: '', 
          anggota: 85
        },
        {
          id: 'paduan-suara',
          nama: 'Paduan Suara Edupage',
          kategori: 'Seni',
          deskripsi: 'Grup vokal harmonis yang sering tampil di berbagai acara resmi sekolah maupun kompetisi tingkat provinsi.',
          fotoUrl: '', 
          anggota: 50
        }
      ];

      setTimeout(() => {
        setEkskulData(dummyDatabase);
        setIsLoading(false);
      }, 500);
    };

    fetchEkskul();
  }, []);

  // ---------------------------------------------------------
  // 3. LOGIKA FILTER
  // ---------------------------------------------------------
  const filters = ['Semua', 'Wajib', 'Akademik', 'Olahraga', 'Seni'];
  
  const filteredEkskul = activeFilter === 'Semua' 
    ? ekskulData 
    : ekskulData.filter(item => item.kategori === activeFilter);

  // Helper icon berdasarkan kategori
  const getCategoryIcon = (kategori) => {
    switch(kategori) {
      case 'Wajib': return <Shield size={14} />;
      case 'Akademik': return <BookOpen size={14} />;
      case 'Olahraga': return <Activity size={14} />;
      case 'Seni': return <Palette size={14} />;
      default: return <Shield size={14} />;
    }
  };

  // ---------------------------------------------------------
  // 4. UI COMPONENTS
  // ---------------------------------------------------------
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Portal Ekstrakurikuler...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 space-y-12 bg-wf-white text-wf-darkest">
      
      {/* HEADER & FILTER SECTION */}
      <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-8 md:p-12 shadow-sm flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
            Pengembangan Diri
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
            Portal Ekstrakurikuler
          </h1>
          <p className="text-wf-dark text-sm md:text-base leading-relaxed">
            Temukan dan kembangkan minat, bakat, serta potensi kepemimpinanmu di luar jam akademik melalui berbagai pilihan kegiatan ekstrakurikuler yang aktif dan berprestasi.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-wf-white p-2 rounded-2xl md:rounded-full border border-wf-medium/30 shrink-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-wf-darkest text-wf-white shadow-sm'
                  : 'text-wf-dark hover:text-wf-darkest hover:bg-wf-medium/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* GRID KARTU EKSKUL */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredEkskul.map((item) => (
          <div 
            key={item.id} 
            className="bg-wf-light rounded-3xl border border-wf-medium/30 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col"
          >
            {/* AREA FOTO/BANNER (Placeholder) */}
            <div className="w-full aspect-video bg-wf-dark flex items-center justify-center relative overflow-hidden">
              {item.fotoUrl ? (
                <img 
                  src={item.fotoUrl} 
                  alt={item.nama} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100" 
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-wf-medium/40 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">
                    Slot Foto/Banner Ekskul
                  </span>
                </div>
              )}
              
              {/* Badge Kategori */}
              <div className="absolute top-4 left-4 bg-wf-darkest/90 backdrop-blur text-wf-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-wf-medium/20 z-20 flex items-center gap-1.5">
                {getCategoryIcon(item.kategori)}
                {item.kategori}
              </div>
            </div>

            {/* INFORMASI TEKS & TOMBOL */}
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-wf-white">
              <h3 className="font-bold text-wf-darkest text-xl leading-snug mb-3 line-clamp-2">
                {item.nama}
              </h3>
              <p className="text-wf-dark text-xs md:text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                {item.deskripsi}
              </p>
              
              {/* Footer Kartu (Anggota & Tombol) */}
              <div className="flex items-center justify-between pt-5 border-t border-wf-medium/20 mt-auto">
                <span className="text-[10px] font-bold text-wf-dark">
                  {item.anggota} Anggota Aktif
                </span>
                
                {/* Tombol ke Mini Blog */}
                <button 
                  onClick={() => setActivePage('ekskul-detail')} // Routing dummy ke halaman detail ekskul
                  className="text-xs font-bold text-wf-blue hover:text-wf-darkest flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Kunjungi Blog
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* KONDISI JIKA DATA FILTER KOSONG */}
      {filteredEkskul.length === 0 && (
        <div className="py-24 text-center bg-wf-light rounded-3xl border border-wf-medium/30 border-dashed flex flex-col items-center justify-center">
          <Search size={40} className="text-wf-medium/50 mb-3" />
          <p className="text-wf-dark font-medium text-sm">Belum ada ekstrakurikuler untuk kategori {activeFilter}.</p>
        </div>
      )}

    </div>
  );
}