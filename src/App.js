import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function App() {
  const dummyProducts = [
    {
      id: 1,
      title: "Analitik Cookie Moduli v2.4",
      price: 49.99,
      description: "Sayt tashrif buyuruvchilarining xatti-harakatlarini GDPR qoidalariga to'liq mos holda tahlil qiluvchi modul.",
      category: "Analitika",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
      rating: { rate: 4.8, count: 240 }
    },
    {
      id: 2,
      title: "Xavfsizlik va Shifrlash Skripti",
      price: 89.99,
      description: "Foydalanuvchi ma'lumotlarini himoya qilish uchun zamonaviy shifrlash va cookie xavfsizlik to'plami.",
      category: "Xavfsizlik",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60",
      rating: { rate: 4.9, count: 180 }
    },
    {
      id: 3,
      title: "Marketing va Target Piksellari",
      price: 29.99,
      description: "Ijtimoiy tarmoqlar va reklama kampaniyalari uchun maxsus moslashtirilgan cookie banner va piksellar.",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
      rating: { rate: 4.6, count: 95 }
    },
    {
      id: 4,
      title: "Zaruriy Consent Manager Pro",
      price: 19.99,
      description: "Foydalanuvchi roziligini yig'ish va saqlash uchun qulay, tez ishlaydigan va yengil komponent.",
      category: "Zaruriy",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60",
      rating: { rate: 4.7, count: 310 }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl font-bold text-slate-800">Ommabop Cookie Modullari</h1>
                <p className="text-xs text-slate-500 mt-1">API ma'lumotlariga moslashtirilgan katalog</p>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold">
                4 ta modul mavjud
              </span>
            </div>
            <ProductList products={dummyProducts} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}