import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Megaphone, 
  Sliders, 
  Settings, 
  User, 
  ChevronRight, 
  Lock, 
  HelpCircle, 
  Cookie,
  ToggleLeft,
  ToggleRight,
  LogOut
} from 'lucide-react';

export default function Sidebar({ isOpen = true, onClose }) {
  const [activeTab, setActiveTab] = useState('zaruriy');
  const [cookiePreferences, setCookiePreferences] = useState({
    zaruriy: true,
    analitika: true,
    marketing: false,
    funksional: true
  });

  const categories = [
    {
      id: 'zaruriy',
      title: 'Zaruriy Cookies',
      desc: 'Sayt ishlashi uchun shart',
      icon: ShieldCheck,
      required: true
    },
    {
      id: 'analitika',
      title: 'Analitika Cookies',
      desc: 'Tashriflar statistikasi',
      icon: BarChart3,
      required: false
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      desc: 'Moslashtirilgan reklamalar',
      icon: Megaphone,
      required: false
    },
    {
      id: 'funksional',
      title: 'Funksional Cookies',
      desc: 'Shaxsiy moslashuvlar',
      icon: Sliders,
      required: false
    }
  ];

  const togglePreference = (id, e) => {
    e.stopPropagation();
    if (id === 'zaruriy') return;
    setCookiePreferences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <aside className={`w-72 bg-white border-r border-slate-200 h-screen flex flex-col justify-between sticky top-0 z-30 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <div>
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
              <Cookie size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800 leading-tight">Cookie Sozlamalari</h2>
              <p className="text-[10px] text-slate-400 font-medium">Boshqaruv Paneli</p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="px-3 py-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
            Kategoriyalar
          </p>
          
          <nav className="space-y-1">
            {categories.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const isEnabled = cookiePreferences[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer group ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-semibold' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-1.5 rounded-lg transition-colors ${
                      isActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-medium truncate">{item.title}</p>
                      <p className="text-[10px] text-slate-400 truncate font-normal">{item.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {item.required ? (
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md font-medium border border-slate-200">
                        Majburiy
                      </span>
                    ) : (
                      <button
                        onClick={(e) => togglePreference(item.id, e)}
                        className={`p-0.5 transition-colors rounded-lg ${
                          isEnabled ? 'text-emerald-600' : 'text-slate-300 hover:text-slate-400'
                        }`}
                      >
                        {isEnabled ? <ToggleRight size={22} /> : <ToggleLeft size={22} />}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>

          <p className="px-3 pt-5 pb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
            Xavfsizlik & Huquq
          </p>

          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500">
                  <Lock size={18} />
                </div>
                <span>GDPR / CCPA Ruxsatlar</span>
              </div>
              <ChevronRight size={14} className="text-slate-400" />
            </button>

            <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500">
                  <HelpCircle size={18} />
                </div>
                <span>Yordam va Qo'llab-quvvatlash</span>
              </div>
              <ChevronRight size={14} className="text-slate-400" />
            </button>

            <button className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500">
                  <Settings size={18} />
                </div>
                <span>Tizim Sozlamalari</span>
              </div>
              <ChevronRight size={14} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-slate-100 bg-slate-50/50">
        <div className="bg-emerald-900 text-white p-3 rounded-xl mb-3 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">Himoya Holati</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <p className="text-xs font-bold">Maxfiylik Yoqilgan</p>
          <p className="text-[10px] text-emerald-200 mt-0.5">3/4 kategoriya faol holatda</p>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
              <User size={16} />
            </div>
            <div className="truncate">
              <p className="text-xs font-semibold text-slate-800 truncate">Foydalanuvchi</p>
              <p className="text-[10px] text-slate-400 truncate">admin@cookie.uz</p>
            </div>
          </div>
          <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}