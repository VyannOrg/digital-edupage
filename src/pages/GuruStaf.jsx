import React, { useState, useEffect } from 'react';
import { User, Briefcase, GraduationCap, Mail } from 'lucide-react';

export default function GuruStaf() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    const fetchStaffData = async () => {
      setIsLoading(true);
      
      /* 
      const { data } = await supabase.from('guru_staf').select('*');
      if(data) setStaffData(data);
      */
      
      const dummyDatabase = [
        {
          id: 1,
          name: 'Drs. H. Ahmad Wijaya, M.Pd.',
          role: 'Kepala Sekolah',
          category: 'Guru',
          nip: '19700101 199512 1 001',
          email: 'ahmad.wijaya@edupage.sch.id',
          photoUrl: '',
        },
        {
          id: 2,
          name: 'Siti Aminah, S.Pd., M.Kom.',
          role: 'Guru Rekayasa Perangkat Lunak',
          category: 'Guru',
          nip: '19850214 201001 2 003',
          email: 'siti.aminah@edupage.sch.id',
          photoUrl: '', 
        },
        {
          id: 3,
          name: 'Budi Santoso, S.Kom.',
          role: 'Kepala Tata Usaha',
          category: 'Staf',
          nip: '19820511 200803 1 002',
          email: 'budi.santoso@edupage.sch.id',
          photoUrl: '', 
        },
        {
          id: 4,
          name: 'Rina Marlina, S.Pd.',
          role: 'Guru Matematika',
          category: 'Guru',
          nip: '19901122 201504 2 005',
          email: 'rina.marlina@edupage.sch.id',
          photoUrl: '', 
        },
        {
          id: 5,
          name: 'Dimas Aditya, A.Md.',
          role: 'Staf Administrasi & IT',
          category: 'Staf',
          nip: '19950708 202001 1 007',
          email: 'dimas.aditya@edupage.sch.id',
          photoUrl: '', 
        },
        {
          id: 6,
          name: 'Dwi Lestari, S.Pd.',
          role: 'Guru Bahasa Inggris',
          category: 'Guru',
          nip: '19880930 201211 2 004',
          email: 'dwi.lestari@edupage.sch.id',
          photoUrl: '', 
        },
      ];

      setTimeout(() => {
        setStaffData(dummyDatabase);
        setIsLoading(false);
      }, 600);
    };

    fetchStaffData();
  }, []);

  const filters = ['Semua', 'Guru', 'Staf'];
  
  const filteredData = activeFilter === 'Semua' 
    ? staffData 
    : staffData.filter(person => person.category === activeFilter);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-wf-white text-wf-darkest">
        <span className="font-bold text-wf-dark animate-pulse">Memuat Direktori...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 space-y-10 bg-wf-white text-wf-darkest">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
            Direktori Pengajar & Tenaga Kependidikan
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
            Guru & Staf
          </h1>
          <p className="text-wf-dark text-sm md:text-base leading-relaxed pt-2">
            Kenali lebih dekat para pahlawan tanpa tanda jasa dan tenaga profesional yang berdedikasi membangun ekosistem pendidikan terbaik di institusi kami.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-wf-light p-1.5 rounded-full border border-wf-medium/30 self-start md:self-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-wf-darkest text-wf-white shadow-sm'
                  : 'text-wf-dark hover:text-wf-darkest hover:bg-wf-medium/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredData.map((person) => (
          <div 
            key={person.id} 
            className="bg-wf-light rounded-[28px] border border-wf-medium/30 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col"
          >
            <div className="w-full aspect-[3/4] bg-wf-dark flex items-center justify-center relative overflow-hidden">
              {person.photoUrl ? (
                <img 
                  src={person.photoUrl} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-wf-medium/30 z-10">
                  <User size={64} className="mb-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Slot Foto 3:4
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-wf-darkest/60 via-transparent to-transparent opacity-50" />
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between bg-wf-white">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-wf-blue uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  {person.category === 'Guru' ? <GraduationCap size={12} /> : <Briefcase size={12} />}
                  {person.category}
                </span>
                <h3 className="font-bold text-wf-darkest text-base leading-snug line-clamp-2">
                  {person.name}
                </h3>
                <p className="text-xs text-wf-dark font-medium line-clamp-1">
                  {person.role}
                </p>
              </div>

              <div className="mt-5 space-y-2 pt-4 border-t border-wf-medium/20">
                <div className="flex items-center gap-2 text-wf-dark">
                  <User size={14} className="opacity-70" />
                  <span className="text-[11px] font-medium font-mono">
                    NIP. {person.nip || '-'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-wf-dark">
                  <Mail size={14} className="opacity-70" />
                  <span className="text-[11px] font-medium truncate">
                    {person.email}
                  </span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="py-20 text-center bg-wf-light rounded-3xl border border-wf-medium/30 border-dashed">
          <p className="text-wf-dark font-medium">Tidak ada data {activeFilter.toLowerCase()} yang ditemukan.</p>
        </div>
      )}

    </div>
  );
}