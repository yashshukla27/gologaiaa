import React from 'react';
import { Leaf, Handshake, Sprout, Truck, DollarSign } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  leaf: Leaf,
  handshake: Handshake,
  sprout: Sprout,
  truck: Truck
};

const Commercial = () => {
  const { commercial } = mockData;

  return (
    <section id="advantage" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-700/30 rounded-full px-4 py-2 mb-6">
            <DollarSign size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Business Model</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{commercial.title}</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">{commercial.subtitle}</p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercial.models.map((model, index) => {
            const Icon = iconMap[model.icon] || Leaf;
            return (
              <div 
                key={index}
                className="bg-neutral-900 border-2 border-neutral-800 rounded-xl p-8 hover:border-emerald-700/50 transition-all"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-emerald-950/50 border border-emerald-700/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-emerald-400" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{model.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Streams Visual */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950/30 to-neutral-900/30 border border-emerald-700/30 rounded-xl p-10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Integrated Value Chain</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <div className="text-white font-semibold mb-1">Biomass Collection</div>
              <div className="text-sm text-neutral-400">Supply Agreements</div>
            </div>

            <div className="hidden md:block text-emerald-600">
              <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                <path d="M0 10 L50 10 L45 5 M50 10 L45 15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <div className="text-white font-semibold mb-1">Biochar Production</div>
              <div className="text-sm text-neutral-400">Pyrolysis Hubs</div>
            </div>

            <div className="hidden md:block text-emerald-600">
              <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                <path d="M0 10 L50 10 L45 5 M50 10 L45 15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <div className="text-white font-semibold mb-1">Dual Revenue</div>
              <div className="text-sm text-neutral-400">Credits + Soil Product</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
