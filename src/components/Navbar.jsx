// import React, { useState, useEffect } from 'react';
// import { Menu, X, ExternalLink, Lock } from 'lucide-react';
// import { schoolData } from '../data/schoolData';

// export default function Navbar({ activePage, setActivePage, isSpmbLocked = false }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const options = { 
//         weekday: 'long', 
//         day: 'numeric', 
//         month: 'long', 
//         year: 'numeric' 
//       };
//       setCurrentDate(now.toLocaleDateString('id-ID', options));
//     };

//     updateDateTime();
//     const timer = setInterval(updateDateTime, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const navPages = [
//     { id: 'home', label: 'Beranda' },
//     { id: 'profil', label: 'Profil Sekolah' },
//     { id: 'guru', label: 'Guru & Staf' },
//     { id: 'fasilitas', label: 'Fasilitas & Denah' },
//   ];

//   return (
//     // Latar belakang header diubah menjadi bg-transparent
//     <header className="sticky top-0 z-50 pt-4 px-6 lg:px-12 bg-transparent pb-2">
//       <div className="max-w-[1800px] w-full mx-auto drop-shadow-md">
        
//         {/* KONTAINER UTAMA NAVBAR */}
//         <div className="flex flex-col items-start">
          
//           {/* BAR UTAMA (ATAS) */}
//           <div className="w-full bg-wf-light border border-wf-medium/30 rounded-t-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none px-6 py-3 flex items-center justify-between border-b-0">
            
//             {/* SISI KIRI: LOGO + NAMA + KONTAK STATIS */}
//             <div className="flex items-center gap-4">
//               <div 
//                 onClick={() => setActivePage('home')}
//                 className="w-10 h-10 bg-wf-darkest text-wf-white rounded-xl flex items-center justify-center font-extrabold text-xl cursor-pointer"
//               >
//                 -
//               </div>

//               <div 
//                 onClick={() => setActivePage('home')}
//                 className="bg-wf-darkest text-wf-white px-4 py-2 rounded-xl font-bold text-xs md:text-sm cursor-pointer"
//               >
//                 {schoolData.info.name}
//               </div>

//               <div className="hidden lg:flex items-center gap-2 text-xs text-wf-dark select-none pointer-events-none pl-2 font-medium">
//                 <span>{schoolData.info.phone}</span>
//                 <span>•</span>
//                 <span>info@edupage.sch.id</span>
//               </div>
//             </div>

//             {/* SISI KANAN: NAVIGASI PAGE + TOMBOL SPMB */}
//             <div className="hidden md:flex items-center gap-2.5">
//               {navPages.map((page) => (
//                 <button
//                   key={page.id}
//                   onClick={() => setActivePage(page.id)}
//                   className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
//                     activePage === page.id
//                       ? 'bg-wf-darkest text-wf-white'
//                       : 'bg-wf-medium/20 text-wf-dark hover:bg-wf-medium/40 hover:text-wf-darkest'
//                   }`}
//                 >
//                   {page.label}
//                 </button>
//               ))}

//               {isSpmbLocked ? (
//                 <button
//                   disabled
//                   title="Pendaftaran SPMB Belum Dibuka / Sudah Ditutup"
//                   className="bg-wf-medium/40 text-wf-dark px-5 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 cursor-not-allowed border border-wf-medium/40"
//                 >
//                   <Lock size={14} className="text-wf-dark" />
//                   <span>SPMB Ditutup</span>
//                 </button>
//               ) : (
//                 <a
//                   href={schoolData.info.ppdbUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-wf-blue hover:opacity-90 text-wf-white px-5 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer"
//                 >
//                   <span>Portal SPMB</span>
//                   <ExternalLink size={14} />
//                 </a>
//               )}
//             </div>

//             {/* Tombol Hamburger Mobile */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-1.5 rounded-lg text-wf-darkest hover:bg-wf-medium/20"
//               >
//                 {isOpen ? <X size={22} /> : <Menu size={22} />}
//               </button>
//             </div>

//           </div>

//           {/* BAR BAWAH: NOTCH TANGGAL REALTIME */}
//           <div className="w-full flex items-start">
//             <div className="bg-wf-light border-x border-b border-wf-medium/30 rounded-b-2xl px-6 py-1 flex items-center">
//               <span className="text-xs font-semibold text-wf-dark block whitespace-nowrap">
//                 {currentDate || 'Memuat tanggal...'}
//               </span>
//             </div>
//             <div className="grow border-t border-wf-medium/30 -mt-px"></div>
//           </div>

//         </div>

//         {/* Dropdown Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-wf-light border border-wf-medium/30 rounded-2xl mt-2 p-4 space-y-2 shadow-lg">
//             {navPages.map((page) => (
//               <button
//                 key={page.id}
//                 onClick={() => { setActivePage(page.id); setIsOpen(false); }}
//                 className={`block w-full text-left px-3 py-2 rounded-xl text-xs font-bold ${
//                   activePage === page.id ? 'bg-wf-darkest text-wf-white' : 'bg-wf-medium/20 text-wf-dark'
//                 }`}
//               >
//                 {page.label}
//               </button>
//             ))}

//             {isSpmbLocked ? (
//               <div className="block w-full text-center bg-wf-medium/40 text-wf-dark px-3 py-2.5 rounded-xl text-xs font-bold mt-2 flex items-center justify-center gap-1.5">
//                 <Lock size={14} />
//                 <span>SPMB Ditutup</span>
//               </div>
//             ) : (
//               <a
//                 href={schoolData.info.ppdbUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block w-full text-center bg-wf-blue text-wf-white px-3 py-2.5 rounded-xl text-xs font-bold mt-2"
//               >
//                 Daftar SPMB Online
//               </a>
//             )}
//           </div>
//         )}

//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect } from 'react';
import { schoolData } from '../data/schoolData';

export default function Navbar({ activePage, setActivePage }) {
  const [currentDate, setCurrentDate] = useState('');

  // Logika untuk Notch Tanggal Realtime
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      setCurrentDate(now.toLocaleDateString('id-ID', options));
    };
    updateDate();
  }, []);

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'profil', label: 'Profil Sekolah' },
    { id: 'guru', label: 'Guru & Staf' },
    { id: 'fasilitas', label: 'Fasilitas & Denah' },
    { id: 'ekskul', label: 'Ekstrakurikuler' },
    { id: 'berita', label: 'Berita & Pengumuman' },
    { id: 'prestasi', label: 'Prestasi' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-[1800px] mx-auto flex flex-col items-start pointer-events-auto">
        
        {/* KANVAS NAVBAR UTAMA */}
        <div className="bg-wf-white/95 backdrop-blur-md border border-wf-medium/30 rounded-3xl w-full p-2 flex flex-col xl:flex-row xl:items-center justify-between shadow-sm gap-4 xl:gap-0">
          
          {/* =========================================
              BAGIAN KIRI: LOGO FOTO & NAMA SEKOLAH
          ========================================= */}
          <div className="flex items-center gap-3 pl-2">
            
            {/* SLOT FOTO LOGO (Tadinya Kotak "E") */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-wf-medium/10 rounded-xl overflow-hidden flex items-center justify-center border border-wf-medium/30 shrink-0 relative">
              {/* Nanti isi URL logo kamu di dalam src="" di bawah ini */}
              <img 
                src="" 
                alt="Logo Sekolah" 
                className="w-full h-full object-cover relative z-10"
              />
              {/* Teks placeholder jika foto kosong */}
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-wf-dark/50">
                LOGO
              </span>
            </div>
            
            {/* NAMA SEKOLAH & KONTAK (Tadinya Kotak Teks) */}
            <div className="flex flex-col justify-center">
              <h1 className="font-extrabold text-wf-darkest text-sm md:text-base leading-none mb-1.5 mt-0.5">
                {schoolData.info.name}
              </h1>
              <span className="text-[10px] text-wf-dark font-medium leading-none">
                {schoolData.info.phone} <span className="mx-1.5 opacity-50">•</span> {schoolData.info.email}
              </span>
            </div>

          </div>

          {/* =========================================
              BAGIAN KANAN: MENU NAVIGASI & TOMBOL SPMB
          ========================================= */}
          <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto w-full xl:w-auto pb-1 xl:pb-0 px-2 xl:px-0 hide-scrollbar">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                  activePage === link.id
                    ? 'bg-wf-darkest text-wf-white shadow-sm'
                    : 'bg-transparent text-wf-dark hover:bg-wf-medium/20 hover:text-wf-darkest'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Tombol Portal SPMB */}
            <a 
              href={schoolData.info.ppdbUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-wf-blue hover:opacity-90 text-wf-white px-5 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ml-1 md:ml-2 shadow-sm flex items-center gap-2 shrink-0"
            >
              Portal SPMB
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </a>
          </div>

        </div>

        {/* =========================================
            NOTCH TANGGAL REALTIME (Menggantung di bawah)
        ========================================= */}
        <div className="bg-wf-white/95 backdrop-blur-md border border-wf-medium/30 border-t-0 px-6 py-2 rounded-b-2xl ml-8 shadow-sm">
          <span className="text-[10px] font-bold text-wf-dark uppercase tracking-widest">
            {currentDate}
          </span>
        </div>

      </div>
    </nav>
  );
}