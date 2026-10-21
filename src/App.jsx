import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profil from './pages/Profil';
import GuruStaf from './pages/GuruStaf';
import FasilitasDenah from './pages/FasilitasDenah';
import Ekskul from './pages/Ekskul';
import EkskulDetail from './pages/EkskulDetail';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import Prestasi from './pages/Prestasi';
import Kontak from './pages/Kontak';  

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
      <div>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        
        {/* Render Halaman Dinamis */}
        <main>
          {activePage === 'home' && <Home setActivePage={setActivePage} />}
          {activePage === 'profil' && <Profil />}
          {activePage === 'guru' && <GuruStaf />}
          {activePage === 'fasilitas' && <FasilitasDenah />}
          {activePage === 'ekskul' && <Ekskul setActivePage={setActivePage} />}
          {activePage === 'ekskul-detail' && <EkskulDetail setActivePage={setActivePage} />}
          {activePage === 'berita' && <Berita setActivePage={setActivePage} />}
          {activePage === 'berita-detail' && <BeritaDetail setActivePage={setActivePage} />}
          {activePage === 'prestasi' && <Prestasi />}
          {activePage === 'kontak' && <Kontak />}
        </main>
      </div>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}