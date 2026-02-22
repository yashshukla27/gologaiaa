import React from 'react';
import { Globe, TrendingUp } from 'lucide-react';
import { mockData } from '../mock';

const WhyIndia = () => {
  const { whyIndia } = mockData;

  return (
    <section id="advantage" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-700/30 rounded-full px-4 py-2 mb-6">
            <Globe size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Market Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{whyIndia.title}</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">{whyIndia.subtitle}</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={whyIndia.image}
              alt="India agricultural landscape"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyIndia.reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-neutral-950 border-2 border-neutral-800 rounded-xl p-6 hover:border-emerald-700/50 transition-all"
              >
                <div className="text-4xl font-bold text-emerald-400 mb-2">{reason.stat}</div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight Bar */}
        <div className="bg-gradient-to-r from-emerald-950/50 to-neutral-900/50 border-l-4 border-emerald-600 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Timing Is Critical</h3>
              <p className="text-neutral-400 leading-relaxed">
                India's carbon removal infrastructure gap presents a first-mover advantage in a rapidly expanding global carbon credit market. Early deployment positions us for maximum scale and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndia;
