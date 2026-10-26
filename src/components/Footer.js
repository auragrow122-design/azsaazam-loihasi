import React from 'react';
import { Cookie, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                <Cookie size={20} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                CookieMarket
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Saytlar uchun zamonaviy consent hub va cookie ma'lumotlarini boshqarish platformasi. GDPR va milliy qoidalarga to'liq mos.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
              <ShieldCheck size={16} />
              <span>Xavfsiz va Ishonchli</span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Kategoriyalar</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Zaruriy Cookies</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Analitika va Tahlil</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Marketing va Reklama</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Funksional Modullar</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Ma'lumotlar</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Maxfiylik Siyosati</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Foydalanish Shartlari</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">GDPR Talablari</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Yordam Markazi</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Bog'lanish</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin size={14} className="text-emerald-500 shrink-0" />
                <span>Toshkent shahri, Amir Temur ko'chasi</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone size={14} className="text-emerald-500 shrink-0" />
                <span>+998 (71) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={14} className="text-emerald-500 shrink-0" />
                <span>support@cookiemarket.uz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; 2026 CookieMarket. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">Maxfiylik</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">Shartlar</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">Xavfsizlik</span>
          </div>
        </div>
      </div>
    </footer>
  );
}