import {
  Smartphone,
  Layers,
  ShieldCheck,
  ArrowUp,
  Mail,
  MapPin,
  Sparkles
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04140c] text-[#F4F1E1] pt-10 pb-6 border-t border-[#D4ED31]/20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b8226]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4ED31]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">

          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/KisanShakti-logo.png"
                  alt="KisanShakti Logo"
                  className="h-9 w-auto object-contain"
                />
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#D4ED31]/15 text-[#D4ED31] px-2.5 py-0.5 rounded-full border border-[#D4ED31]/30">
                  AI & IoT Ecosystem
                </span>
              </div>

              <p className="text-[#F4F1E1]/70 text-xs sm:text-sm font-medium leading-relaxed mb-4 max-w-md">
                Empowering smallholder farmers with offline Edge-AI crop disease diagnosis, solar-powered IoT microclimate telemetry, and direct mandi trading to eliminate market intermediaries.
              </p>
            </div>

            {/* Academic & Location Tag */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4ED31]/90">
                <MapPin className="w-3.5 h-3.5 text-[#D4ED31]" />
                <span>Pilot Hubs: Kolar & Chikkaballapur Clusters, Karnataka</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-[#F4F1E1]/80 bg-white/5 px-3 py-2 rounded-xl border border-white/10 w-fit">
                <img
                  src="/VTU-LOGO.png"
                  alt="VTU-LOGO"
                  className="h-7 w-auto object-contain drop-shadow"
                />
                <span>Visvesvaraya Technological University (VTU) Academic Research</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Platform Sections (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Ecosystem Apps */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#D4ED31] mb-3 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" /> Applications
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#downloads" className="text-[#F4F1E1]/70 hover:text-[#D4ED31] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4ED31] group-hover:scale-125 transition-transform" />
                    Upaj (Farmers App)
                  </a>
                </li>
                <li>
                  <a href="#downloads" className="text-[#F4F1E1]/70 hover:text-[#D4ED31] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4ED31] group-hover:scale-125 transition-transform" />
                    Mandi (Buyers App)
                  </a>
                </li>
                <li>
                  <a href="#downloads" className="text-[#F4F1E1]/70 hover:text-[#D4ED31] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4ED31] group-hover:scale-125 transition-transform" />
                    Download APKs
                  </a>
                </li>
                <li>
                  <span className="text-[#F4F1E1]/40 font-medium flex items-center gap-2 cursor-not-allowed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    iOS App (Coming Soon)
                  </span>
                </li>
              </ul>
            </div>

            {/* Architecture & Tech */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#D4ED31] mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> System Hub
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#pillars" className="text-[#F4F1E1]/70 hover:text-[#D4ED31] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4ED31] group-hover:scale-125 transition-transform" />
                    Four Core Pillars
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="text-[#F4F1E1]/70 hover:text-[#D4ED31] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4ED31] group-hover:scale-125 transition-transform" />
                    System Architecture
                  </a>
                </li>
                <li>
                  <a href="#hardware" className="text-[#F4F1E1]/70 hover:text-[#D4ED31] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4ED31] group-hover:scale-125 transition-transform" />
                    IoT Hardware Specs
                  </a>
                </li>
                <li>
                  <a href="#research" className="text-[#F4F1E1]/70 hover:text-[#D4ED31] font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4ED31] group-hover:scale-125 transition-transform" />
                    Research & Datasets
                  </a>
                </li>
              </ul>
            </div>

            {/* Project Collaboration & Contact */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#D4ED31] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Collaboration
              </h4>
              <p className="text-[#F4F1E1]/60 text-xs font-medium mb-3 leading-relaxed">
                Deploy KisanShakti IoT nodes or collaborate on agricultural AI research.
              </p>
              <a
                href="mailto:bhanukiran90216@gmail.com"
                className="bg-[#D4ED31] text-[#0A2F1D] text-xs font-extrabold px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all shadow-md group mb-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Project Team</span>
              </a>
              <div className="flex items-center gap-1.5 text-[11px] text-[#F4F1E1]/50 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4ED31]" />
                <span>Open for AgriTech Research</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-medium text-[#F4F1E1]/50">
          <div>
            <span>&copy; {new Date().getFullYear()} KisanShakti Project. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#team"
              className="hover:text-[#D4ED31] transition-colors"
            >
              Research Team
            </a>
            <span className="text-white/20">&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#D4ED31] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-[#D4ED31]/30 transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
