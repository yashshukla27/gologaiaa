import React from 'react';
import { Target, MapPin, Boxes, DollarSign, ShieldCheck, Award } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  target: Target,
  'map-pin': MapPin,
  boxes: Boxes,
  'dollar-sign': DollarSign,
  'shield-check': ShieldCheck,
  award: Award
};

const Advantage = () => {
  const { advantage } = mockData;

  return (
    <section id="advantage" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-700/30 rounded-full px-4 py-2 mb-6">
            <Award size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Market Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{advantage.title}</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">{advantage.subtitle}</p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantage.points.map((point, index) => {
            const Icon = iconMap[point.icon] || Target;
            return (
              <div 
                key={index}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 hover:border-emerald-700/50 transition-all group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-emerald-950/50 border border-emerald-700/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all">
                  <Icon size={28} className="text-emerald-400 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950/30 to-neutral-900/30 border-l-4 border-emerald-600 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">High-Integrity Carbon Credits</h3>
              <p className="text-neutral-400 leading-relaxed">
                Our registry-aligned MRV ensures every credit represents verified, durable carbon removal that meets institutional buyer standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
