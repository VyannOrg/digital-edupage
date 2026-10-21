import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Building2, Map, ExternalLink } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Kontak() {
  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 space-y-12 bg-wf-white text-wf-darkest">
      
      <div className="space-y-3 max-w-2xl">
        <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
          Layanan & Informasi
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-wf-darkest tracking-tight">
          Hubungi Kami
        </h1>
        <p className="text-wf-dark text-sm md:text-base leading-relaxed">
          Punya pertanyaan seputar pendaftaran, informasi akademik, atau kerja sama? Jangan ragu untuk menghubungi atau mendatangi kantor layanan informasi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="lg:col-span-6 space-y-8">
          
          <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-wf-medium/20">
              <Building2 className="text-wf-blue" size={24} />
              <h2 className="text-xl font-bold text-wf-darkest">Kantor Layanan & Humas</h2>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Alamat Resmi</span>
                  <span className="font-bold text-wf-darkest leading-relaxed block">
                    {schoolData.info.address}, {schoolData.info.kelurahan}, Kec. {schoolData.info.kecamatan}, Kab. {schoolData.info.kabupaten}, Prov. {schoolData.info.provinsi} {schoolData.info.kodePos}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Nomor Telepon</span>
                  <span className="font-bold text-wf-darkest block">{schoolData.info.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Email Resmi</span>
                  <span className="font-bold text-wf-darkest block">{schoolData.info.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-wf-white rounded-2xl border border-wf-medium/20 text-wf-blue shrink-0 shadow-2xs">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-wf-dark uppercase tracking-wider mb-0.5">Jam Kerja Layanan</span>
                  <span className="font-bold text-wf-darkest block">Senin - Jumat: 07:00 - 15:30 WIB</span>
                  <span className="text-xs text-wf-dark">Sabtu: 07:00 - 13:00 WIB</span>
                </div>
              </div>
            </div>

          </div>
          <div className="bg-wf-light rounded-[32px] border border-wf-medium/30 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 px-2">
              <Map className="text-wf-blue" size={20} />
              <h3 className="font-bold text-wf-darkest text-base">Lokasi pada Peta</h3>
            </div>

            <div className="w-full aspect-video bg-wf-dark rounded-2xl overflow-hidden border border-wf-medium/30 relative flex items-center justify-center">
              <div className="flex flex-col items-center text-wf-medium/40 z-10 text-center px-4">
                <MapPin size={40} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Slot Google Maps Embed (Iframe)</span>
                <span className="text-[9px] mt-1">(Tampilkan titik lokasi sekolah di sini)</span>
              </div>
            </div>
          </div>

        </div>
        <div className="lg:col-span-6 bg-wf-darkest text-wf-white rounded-[32px] p-8 md:p-12 shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-wf-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <span className="text-xs font-bold text-wf-blue uppercase tracking-widest block">
              Respon Cepat & Langsung
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
              Butuh Informasi Cepat? Hubungi Humas Kami
            </h2>
            <p className="text-wf-light text-sm md:text-base leading-relaxed opacity-90">
              Untuk pelayanan yang lebih interaktif, Anda dapat terhubung langsung dengan petugas Hubungan Masyarakat (Humas) kami melalui aplikasi pesan singkat WhatsApp. Tim kami siap melayani pada jam kerja sekolah.
            </p>
          </div>

          <div className="space-y-4 relative z-10 pt-4">
            <a 
              href={`https://wa.me/6281234567890?text=Halo%20Humas%20${encodeURIComponent(schoolData.info.name)},%20saya%20ingin%20bertanya...`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] hover:opacity-90 text-white py-4 px-8 rounded-2xl font-bold text-base transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer group"
            >
              <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
              <span>Chat Humas via WhatsApp</span>
              <ExternalLink size={16} className="opacity-70" />
            </a>

            <div className="bg-wf-white/10 backdrop-blur-md p-4 rounded-2xl border border-wf-white/10 flex items-center justify-between text-xs font-medium text-wf-light">
              <span>Waktu Respon Rata-rata:</span>
              <span className="font-bold text-white">10 - 15 Menit (Jam Kerja)</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}