import React from 'react';
import { Factory, Zap, CheckCircle2 } from 'lucide-react';
import { mockData } from '../mock';

const Solution = () => {
  const { solution } = mockData;

  return (
    <section id="solution" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-700/30 rounded-full px-4 py-2 mb-6">
            <Factory size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Infrastructure Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{solution.title}</h2>
          <p className="text-xl text-emerald-400 font-semibold mb-4">{solution.subtitle}</p>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">{solution.description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solution.features.map((feature, index) => (
            <div 
              key={index}
              className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-center hover:border-emerald-700/50 transition-all hover:transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-emerald-400 mb-2">{feature.metric}</div>
              <div className="text-sm text-white font-semibold mb-1">{feature.unit}</div>
              <div className="text-xs text-neutral-500">{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solution.process.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < solution.process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-600 to-emerald-700/30 -z-10"></div>
                )}
                
                <div className="bg-neutral-950 border-2 border-emerald-700/30 rounded-xl p-6 hover:border-emerald-500 transition-all">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={solution.image}
            alt="Biochar production facility"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent flex items-end">
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 size={24} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Modular & Scalable Design</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Regional Hub Infrastructure
              </h4>
              <p className="text-neutral-300 max-w-2xl">
                Each hub processes 4,000-4,500 tonnes of biomass annually, with 10 modular pyrolysis units optimized for 20-30 km collection radius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
