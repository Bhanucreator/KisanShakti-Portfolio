import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Four pillars', href: '#pillars' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Hardware', href: '#hardware' },
    { label: 'Research', href: '#research' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
      <div className="px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center">
          <img src="/KisanShakti-logo.png" alt="KisanShakti Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#D4ED31] hover:text-[#F4F1E1] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#downloads"
            className="bg-[#D4ED31] text-[#0A2F1D] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#c4dc2b] transition-colors flex items-center gap-2 group"
          >
            Launch Platform
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#D4ED31] hover:text-[#F4F1E1] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+1rem)] left-0 right-0 bg-[#0A2F1D]/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-[#D4ED31] hover:text-[#F4F1E1] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <div className="flex items-center justify-end">
            <a
              href="#downloads"
              className="bg-[#D4ED31] text-[#0A2F1D] font-semibold px-5 py-2.5 rounded-xl text-center flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              Launch Platform
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
