import React from 'react';
import { AlertTriangle, TrendingUp } from 'lucide-react';
import { mockData } from '../mock';

const Problem = () => {
  const { problem } = mockData;

  return (
    <section id="advantage" className="py-24 bg-neutral-900">
      {/* Animated Background Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="flowing-dots"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-950/30 border border-orange-700/30 rounded-full px-4 py-2 mb-6">
         
            <span className="text-orange-400 text-sm font-medium">Critical Challenge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{problem.title}</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">{problem.description}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problem.stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center hover:border-orange-700/50 transition-colors"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
              <div className="text-lg text-white font-semibold mb-2">{stat.unit}</div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={problem.image}
                alt="Livestock farming"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
            </div>
          </div>

          {/* Challenges */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-white mb-6">Key Challenges</h3>
            <div className="space-y-4">
              {problem.challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-orange-700/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-950/50 border border-orange-700/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
