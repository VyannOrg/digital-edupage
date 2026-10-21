import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Star, Calendar, User, Search, Award, Filter, Globe } from 'lucide-react';

export default function Prestasi() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeKategori, setActiveKategori] = useState('Semua');
  const [activeTingkat, setActiveTingkat] = useState('Semua');
  const [prestasiData, setPrestasiData] = useState([]);

  useEffect(() => {
    const fetchPrestasi = async () => {
      setIsLoading(true);
      
      const dummyDatabase = [
        {
          id: 7,
          judul: 'Gold Medal - Asian Youth Robotics & Innovation',
          kategori: 'Akademik',
          tingkat: 'Internasional',
          peraih: 'Tim Ekstrakurikuler Robotik',
          tanggal: '15 Agustus 2026',
          deskripsi: 'Mengharumkan nama bangsa dengan meraih medali emas pada kompetisi inovasi teknologi pemuda tingkat Asia di Singapura.',
          fotoUrl: '', 
        },
        {
          id: 2,
          judul: 'Medali Emas Olimpiade Sains Nasional (Matematika)',
          kategori: 'Akademik',
          tingkat: 'Nasional',
          peraih: 'Ahmad Fauzi (Kelas IX-A)',
          tanggal: '12 Maret 2026',
          deskripsi: 'Meraih skor tertinggi dalam babak final OSN bidang Matematika yang diselenggarakan di Jakarta.',
          fotoUrl: '', 
        },
        {
          id: 1,
          judul: 'Juara 1 Lomba Robotik Tingkat Provinsi',
          kategori: 'Akademik',
          tingkat: 'Provinsi',
          peraih: 'Tim Ekstrakurikuler Robotik',
          tanggal: '20 April 2026',
          deskripsi: 'Berhasil merancang robot pemilah sampah otomatis yang mengalahkan 45 tim dari sekolah lain se-Jawa Timur.',
          fotoUrl: '', 
        },
        {
          id: 4,
          judul: 'Juara Harapan 1 Festival Teater Remaja',
          kategori: 'Seni',
          tingkat: 'Provinsi',
          peraih: 'Ekskul Seni Peran & Teater',
          tanggal: '15 Januari 2026',
          deskripsi: 'Membawakan naskah adaptasi sejarah lokal dengan pementasan teatrikal yang memukau para juri.',
          fotoUrl: '', 
        },
        {
          id: 3,
          judul: 'Juara 2 Turnamen Bola Basket Antar Pelajar',
          kategori: 'Olahraga',
          tingkat: 'Kabupaten/Kota',
          peraih: 'Tim Basket Putra Edupage',
          tanggal: '28 Februari 2026',
          deskripsi: 'Menunjukkan sportivitas dan kerja sama tim yang luar biasa hingga berhasil menembus babak grand final.',
          fotoUrl: '', 
        },
        {
          id: 8,
          judul: 'Juara 1 Futsal Putra - Classmeet Semester Genap',
          kategori: 'Olahraga',
          tingkat: 'Internal (Classmeet)',
          peraih: 'Kelas VIII-B',
          tanggal: '18 Juni 2026',
          deskripsi: 'Berhasil mengalahkan juara bertahan di pertandingan final antar kelas dengan skor tipis 3-2.',
          fotoUrl: '', 
        },
        {
          id: 9,
          judul: 'Juara 1 Kebersihan Kelas & Pojok Literasi',
          kategori: 'Institusi',
          tingkat: 'Internal (Classmeet)',
          peraih: 'Kelas IX-C',
          tanggal: '18 Juni 2026',
          deskripsi: 'Meraih predikat kelas paling bersih dan kreatif dalam menata sudut baca selama satu semester.',
          fotoUrl: '', 
        }
      ];

      setTimeout(() => {
        setPrestasiData(dummyDatabase);
        setIsLoading(false);
      }, 500);
    };

    fetchPrestasi();
  }, []);

  const kategoriFilters = ['Semua', 'Akademik', 'Olahraga', 'Seni', 'Institusi'];
  
  const tingkatFilters = ['Semua', 'Internasional', 'Nasional', 'Provinsi', 'Kabupaten/Kota', 'Internal (Classmeet)'];
  
  const filteredPrestasi = prestasiData.filter(item => {
    const matchKategori = activeKategori === 'Semua' || item.kategori === activeKategori;
    const matchTingkat = activeTingkat === 'Semua' || item.tingkat === activeTingkat;
    return matchKategori && matchTingkat;
  });

  const getTingkatStyle = (tingkat) => {
    switch(tingkat) {
      case 'Internasional': return 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30 shadow-sm';
      case 'Nasional': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30 shadow-sm';
      case 'Provinsi': return 'bg-sky-500/10 text-sky-600 border-sky-500/30';
      case 'Kabupaten/Kota': return 'bg-orange-500/10 text-orange-600 border-orange-500/30';
      case 'Internal (Classmeet)': return 'bg-wf-light text-wf-dark border-wf-medium/30';
      default: return 'bg-wf-blue/10 text-wf-blue border-wf-blue/20';
    }
  };

  const getTingkatIcon = (tingkat) => {
    if (tingkat === 'Internasional') return <Globe size={12} />;
    return <Award size={12} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Etalase Prestasi...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 space-y-12 bg-wf-white text-wf-darkest">
      
      <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-8 md:p-12 shadow-sm flex flex-col xl:flex-row xl:items-end justify-between gap-10">
        
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
            Hall of Fame
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
            Galeri Prestasi
          </h1>
          <p className="text-wf-dark text-sm md:text-base leading-relaxed">
            Jejak langkah kebanggaan dan dedikasi. Temukan deretan pencapaian luar biasa yang berhasil diukir oleh para siswa dan institusi kami di berbagai tingkatan kompetisi.
          </p>
        </div>

        <div className="flex flex-col gap-5 xl:items-end w-full xl:w-auto shrink-0 bg-wf-white p-5 md:p-6 rounded-3xl border border-wf-medium/30 shadow-xs">
          <div className="flex items-center gap-2 mb-1 xl:hidden">
            <Filter size={16} className="text-wf-blue" />
            <span className="font-bold text-sm text-wf-darkest">Saring Prestasi</span>
          </div>

          <div className="space-y-2 xl:text-right w-full">
            <span className="text-[10px] font-bold text-wf-dark uppercase tracking-widest block px-2 xl:px-0">
              Kategori Lomba
            </span>
            <div className="flex flex-wrap items-center gap-2 bg-wf-light p-1.5 rounded-2xl md:rounded-full border border-wf-medium/30 justify-start xl:justify-end">
              {kategoriFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveKategori(f)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeKategori === f
                      ? 'bg-wf-darkest text-wf-white shadow-sm'
                      : 'text-wf-dark hover:text-wf-darkest hover:bg-wf-medium/20'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 xl:text-right w-full">
            <span className="text-[10px] font-bold text-wf-dark uppercase tracking-widest block px-2 xl:px-0">
              Tingkat Kejuaraan
            </span>
            <div className="flex flex-wrap items-center gap-1.5 bg-wf-light p-1.5 rounded-2xl md:rounded-full border border-wf-medium/30 justify-start xl:justify-end">
              {tingkatFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveTingkat(f)}
                  className={`px-3 py-1.5 rounded-full text-[11px] md:text-xs font-bold transition-all cursor-pointer ${
                    activeTingkat === f
                      ? 'bg-wf-darkest text-wf-white shadow-sm'
                      : 'text-wf-dark hover:text-wf-darkest hover:bg-wf-medium/20'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredPrestasi.map((item) => (
          <div 
            key={item.id} 
            className="bg-wf-light rounded-[28px] border border-wf-medium/30 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col relative"
          >
            <div className="w-full aspect-[4/3] bg-wf-dark flex items-center justify-center relative overflow-hidden border-b border-wf-medium/20">
              {item.fotoUrl ? (
                <img 
                  src={item.fotoUrl} 
                  alt={item.judul} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-wf-medium/40 z-10 bg-wf-white w-full h-full">
                  <Trophy size={48} className="mb-3 text-wf-medium/50" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">
                    Slot Foto Dokumentasi
                  </span>
                </div>
              )}
              
              <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 z-20 ${getTingkatStyle(item.tingkat)}`}>
                {getTingkatIcon(item.tingkat)}
                {item.tingkat}
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow bg-wf-white">
              
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-wf-blue bg-wf-blue/10 px-2.5 py-1 rounded border border-wf-blue/20 uppercase tracking-wider">
                  {item.kategori === 'Akademik' ? <Star size={10} /> : <Medal size={10} />}
                  {item.kategori}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-wf-dark">
                  <Calendar size={12} />
                  {item.tanggal}
                </span>
              </div>

              <h3 className={`font-bold text-lg leading-snug mb-3 ${item.tingkat === 'Internal (Classmeet)' ? 'text-wf-darkest/80' : 'text-wf-darkest'}`}>
                {item.judul}
              </h3>
              <p className="text-wf-dark text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                {item.deskripsi}
              </p>
              
              <div className="pt-4 border-t border-wf-medium/20 mt-auto flex items-start gap-2 text-sm text-wf-darkest">
                <User size={16} className={`${item.tingkat === 'Internal (Classmeet)' ? 'text-wf-dark' : 'text-wf-blue'} shrink-0 mt-0.5`} />
                <div>
                  <span className="block text-[10px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Diberikan Kepada</span>
                  <span className="font-bold">{item.peraih}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {filteredPrestasi.length === 0 && (
        <div className="py-24 text-center bg-wf-light rounded-3xl border border-wf-medium/30 border-dashed flex flex-col items-center justify-center">
          <Search size={40} className="text-wf-medium/50 mb-3" />
          <p className="text-wf-dark font-medium text-sm">
            Belum ada catatan prestasi untuk kategori <span className="font-bold">{activeKategori}</span> di tingkat <span className="font-bold">{activeTingkat}</span>.
          </p>
        </div>
      )}

    </div>
  );
}