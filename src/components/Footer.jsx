import React from 'react';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const { footer } = mockData;

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GG</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{footer.company}</h3>
                <p className="text-emerald-400 text-xs">Climate Technologies</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`mailto:${footer.email}`} className="flex items-center space-x-3 text-neutral-400 hover:text-emerald-400 transition-colors text-sm">
                <Mail size={16} />
                <span>{footer.email}</span>
              </a>
              <a href={`tel:${footer.phone}`} className="flex items-center space-x-3 text-neutral-400 hover:text-emerald-400 transition-colors text-sm">
                <Phone size={16} />
                <span>{footer.phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-neutral-400 text-sm">
                <MapPin size={16} />
                <span>{footer.address}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href={footer.social.linkedin} 
                className="w-10 h-10 bg-neutral-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-neutral-300" />
              </a>
              <a 
                href={footer.social.twitter} 
                className="w-10 h-10 bg-neutral-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-neutral-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} {footer.company}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-500 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
