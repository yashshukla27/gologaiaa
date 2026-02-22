import React from 'react';
import { Flame, Lock, Network, TrendingUp, Leaf } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  flame: Flame,
  lock: Lock,
  network: Network,
  'trending-up': TrendingUp,
  leaf: Leaf
};

const Impact = () => {
  const { impact } = mockData;

  return (
    <section id="advantage" className="py-24 bg-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={impact.image}
          alt="Climate impact"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-700/30 rounded-full px-4 py-2 mb-6">
            <Leaf size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Verified Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{impact.title}</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">{impact.subtitle}</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impact.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon] || Leaf;
            return (
              <div 
                key={index}
                className="bg-neutral-900 border-2 border-neutral-800 rounded-xl p-8 hover:border-emerald-700/50 transition-all hover:transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-emerald-950/50 border border-emerald-700/30 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} className="text-emerald-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
                <div className="text-2xl font-bold text-emerald-400 mb-4">{metric.value}</div>
                <p className="text-sm text-neutral-400 leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950/50 to-neutral-900/50 border border-emerald-700/30 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">28-34x</div>
              <div className="text-sm text-neutral-400">Methane warming potential vs CO₂</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">100+ Years</div>
              <div className="text-sm text-neutral-400">Carbon storage duration in biochar</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">Registry-Grade</div>
              <div className="text-sm text-neutral-400">Verra & Puro.earth aligned MRV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
