import { useState, useEffect } from 'react';
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
  const [selectedBeritaId, setSelectedBeritaId] = useState('berita-1');
  const [selectedEkskulId, setSelectedEkskulId] = useState('pramuka');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
      <div>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main>
          {activePage === 'home' && (
            <Home 
              setActivePage={setActivePage} 
              setSelectedBeritaId={setSelectedBeritaId} 
            />
          )}
          {activePage === 'profil' && <Profil />}
          {activePage === 'guru' && <GuruStaf />}
          {activePage === 'fasilitas' && <FasilitasDenah />}
          {activePage === 'ekskul' && (
            <Ekskul 
              setActivePage={setActivePage} 
              setSelectedEkskulId={setSelectedEkskulId} 
            />
          )}
          {activePage === 'ekskul-detail' && (
            <EkskulDetail 
              setActivePage={setActivePage} 
              ekskulId={selectedEkskulId} 
            />
          )}
          {activePage === 'berita' && (
            <Berita 
              setActivePage={setActivePage} 
              setSelectedBeritaId={setSelectedBeritaId} 
            />
          )}
          {activePage === 'berita-detail' && (
            <BeritaDetail 
              setActivePage={setActivePage} 
              beritaId={selectedBeritaId} 
            />
          )}
          {activePage === 'prestasi' && <Prestasi />}
          {activePage === 'kontak' && <Kontak />}
        </main>
      </div>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
