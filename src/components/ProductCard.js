import React from 'react';
import { Star, Shield, ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative h-48 bg-slate-100 p-4 flex items-center justify-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-slate-800 text-sm line-clamp-2 mb-1 group-hover:text-emerald-700 transition-colors">
            {product.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mb-3">
            {product.description}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
              <Star size={14} fill="currentColor" />
              <span>{product.rating?.rate}</span>
              <span className="text-slate-400 font-normal">({product.rating?.count})</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
              <Shield size={14} />
              <span>Tasdiqlangan</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-medium">Narxi</span>
              <span className="text-base font-bold text-slate-900">${product.price}</span>
            </div>
            <button className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white p-2.5 rounded-xl transition-colors flex items-center gap-1 text-xs font-semibold">
              <span>Batafsil</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}