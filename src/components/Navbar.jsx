import React, { useState, useEffect } from 'react';
import { schoolData } from '../data/schoolData';

export default function Navbar({ activePage, setActivePage }) {
  const [currentDate, setCurrentDate] = useState('');

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
        
        <div className="bg-wf-white/95 backdrop-blur-md border border-wf-medium/30 rounded-3xl w-full p-2 flex flex-col xl:flex-row xl:items-center justify-between shadow-sm gap-4 xl:gap-0">
          
          <div className="flex items-center gap-3 pl-2">
            
            <div className="w-10 h-10 md:w-12 md:h-12 bg-wf-medium/10 rounded-xl overflow-hidden flex items-center justify-center border border-wf-medium/30 shrink-0 relative">
              
              <img 
                src="" 
                alt="Logo Sekolah" 
                className="w-full h-full object-cover relative z-10"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-wf-dark/50">
                LOGO
              </span>
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="font-extrabold text-wf-darkest text-sm md:text-base leading-none mb-1.5 mt-0.5">
                {schoolData.info.name}
              </h1>
              <span className="text-[10px] text-wf-dark font-medium leading-none">
                {schoolData.info.phone} <span className="mx-1.5 opacity-50">•</span> {schoolData.info.email}
              </span>
            </div>

          </div>

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

        <div className="bg-wf-white/95 backdrop-blur-md border border-wf-medium/30 border-t-0 px-6 py-2 rounded-b-2xl ml-8 shadow-sm">
          <span className="text-[10px] font-bold text-wf-dark uppercase tracking-widest">
            {currentDate}
          </span>
        </div>

      </div>
    </nav>
  );
}