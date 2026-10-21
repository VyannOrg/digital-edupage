import React from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          
          {/* Info Sekolah */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-900 font-bold text-xl">
                E
              </div>
              <span className="font-bold text-xl text-white">
                {schoolData.info.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              {schoolData.info.slogan}
            </p>
            <div className="space-y-2 text-sm pt-2">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <span>{schoolData.info.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gray-400 shrink-0" />
                <span>{schoolData.info.phone}</span>
              </div>
            </div>
          </div>

          {/* Navigasi Utama */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi Utama</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-white transition-colors cursor-pointer">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('profil')} className="hover:text-white transition-colors cursor-pointer">
                  Profil Sekolah
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('guru')} className="hover:text-white transition-colors cursor-pointer">
                  Guru & Staf
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('fasilitas')} className="hover:text-white transition-colors cursor-pointer">
                  Fasilitas & Denah
                </button>
              </li>
            </ul>
          </div>

          {/* Tautan Layanan */}
          <div>
            <h3 className="font-semibold text-white mb-4">Layanan & Portal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href={schoolData.info.ppdbUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1 transition-colors text-blue-400"
                >
                  Portal PPDB Online <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kontak Humas
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 text-center text-xs text-gray-500">
          © 2026 {schoolData.info.name}. Powered by Digital Edupage.
        </div>
      </div>
    </footer>
  );
}   