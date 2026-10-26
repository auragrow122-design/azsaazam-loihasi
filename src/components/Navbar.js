import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Cookie, 
  User, 
  SlidersHorizontal, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  Grid, 
  Globe 
} from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Toshkent');
  const [cookieStatus, setCookieStatus] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);

  const regions = ['Toshkent', 'Samarqand', 'Buxoro', 'Andijon', "Farg'ona", 'Namangan'];

  return (
    <div className="w-full">
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <Globe size={13} />
              O'zbekcha
            </span>
            <div className="relative">
              <button 
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
              >
                <MapPin size={13} />
                <span>Shahar: <strong className="font-semibold text-white">{selectedRegion}</strong></span>
                <ChevronDown size={12} />
              </button>
              {isRegionOpen && (
                <div className="absolute top-full left-0 mt-1 w-36 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-100 py-1 z-50">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => {
                        setSelectedRegion(region);
                        setIsRegionOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Maxfiylik Siyosati</span>
            <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Yordam</span>
            <div className="flex items-center gap-1.5 bg-emerald-800/80 px-2 py-0.5 rounded-full border border-emerald-700/50">
              <ShieldCheck size={13} className="text-emerald-300" />
              <span className="text-[11px] font-medium text-emerald-200">GDPR Mos</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 cursor-pointer">
                <Cookie size={24} className="animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent tracking-tight">
                  CookieMarket
                </span>
                <span className="block text-[10px] text-slate-400 font-semibold tracking-widest uppercase -mt-1">
                  Consent Hub
                </span>
              </div>
            </div>

            <button 
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="hidden lg:flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium px-4 py-2.5 rounded-xl transition-all border border-emerald-200/60 shrink-0"
            >
              <Grid size={18} />
              <span>Kategoriyalar</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex-1 max-w-2xl relative">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cookie turlari, skriptlar yoki ruxsatnomalarni qidirish..."
                  className="w-full bg-slate-100/80 border border-slate-200 rounded-xl py-2.5 pl-4 pr-11 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                />
                <button className="absolute right-1.5 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors shadow-sm">
                  <Search size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-slate-400 font-medium uppercase">Holat</span>
                  <span className={`text-xs font-semibold ${cookieStatus ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {cookieStatus ? 'Barchasi Faol' : 'Cheklangan'}
                  </span>
                </div>
                <button
                  onClick={() => setCookieStatus(!cookieStatus)}
                  className={`w-9 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${
                    cookieStatus ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      cookieStatus ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <button className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 p-2 sm:px-3 sm:py-2 rounded-xl transition-all border border-transparent hover:border-emerald-100">
                <SlidersHorizontal size={20} className="text-emerald-600" />
                <span className="hidden md:inline text-sm font-medium">Sozlamalar</span>
              </button>

              <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-md shadow-slate-900/10">
                <User size={18} />
                <span className="hidden sm:inline">Kabinet</span>
              </button>
            </div>
          </div>
        </div>

        {isCategoryOpen && (
          <div className="bg-white border-t border-slate-100 shadow-xl py-4 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-100 cursor-pointer transition-all">
                <h4 className="font-semibold text-slate-800 text-sm flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 size={16} /> Zaruriy Cookies
                </h4>
                <p className="text-xs text-slate-500 mt-1">Sayt ishlashi uchun shart bo'lgan fayllar</p>
              </div>
              <div className="p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-100 cursor-pointer transition-all">
                <h4 className="font-semibold text-slate-800 text-sm flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 size={16} /> Analitika & Tahlil
                </h4>
                <p className="text-xs text-slate-500 mt-1">Tashriflar statistikasi va xatti-harakatlar</p>
              </div>
              <div className="p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-100 cursor-pointer transition-all">
                <h4 className="font-semibold text-slate-800 text-sm flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 size={16} /> Marketing & Reklama
                </h4>
                <p className="text-xs text-slate-500 mt-1">Moslashtirilgan reklama ko'rsatish</p>
              </div>
              <div className="p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-100 cursor-pointer transition-all">
                <h4 className="font-semibold text-slate-800 text-sm flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 size={16} /> Funksional Cookies
                </h4>
                <p className="text-xs text-slate-500 mt-1">Shaxsiy sozlamalarni eslab qolish</p>
              </div>
            </div>
          </div>
        )}

        <nav className="bg-white border-t border-slate-100 hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center space-x-8 text-xs font-medium text-slate-600 py-2.5 overflow-x-auto">
              <li className="text-emerald-600 font-semibold cursor-pointer hover:text-emerald-700 whitespace-nowrap">
                Barcha Cookie Turlari
              </li>
              <li className="cursor-pointer hover:text-emerald-600 transition-colors whitespace-nowrap">
                Tahlil vositalari
              </li>
              <li className="cursor-pointer hover:text-emerald-600 transition-colors whitespace-nowrap">
                Reklama va Pixel tarmoqlari
              </li>
              <li className="cursor-pointer hover:text-emerald-600 transition-colors whitespace-nowrap">
                Xavfsizlik protokollari
              </li>
              <li className="cursor-pointer hover:text-emerald-600 transition-colors whitespace-nowrap">
                Foydalanuvchi huquqlari
              </li>
              <li className="cursor-pointer hover:text-emerald-600 transition-colors whitespace-nowrap">
                Hujjatlar va GDPR
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}