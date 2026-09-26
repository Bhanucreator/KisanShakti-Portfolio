import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 min-h-[90vh] flex flex-col justify-center bg-[#010402] overflow-hidden">
      {/* Background video element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      >
        <source src="/hero-bg-2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#010402] via-[#010402]/40 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#010402] via-[#010402]/40 to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-start pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          <h2 className="text-[#F4F1E1] text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold tracking-tight mb-8">
            Digitising Indian Agriculture from Soil to Mandi
          </h2>

          <p className="text-[#F4F1E1]/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-medium">
            An integrated ecosystem combining offline Edge-AI disease diagnosis, resilient IoT microclimate telemetry, and direct 25 km hyperlocal mandi trading built for smallholder farmers.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pillars"
              className="bg-[#D4ED31] text-[#0A2F1D] font-semibold px-6 py-3.5 rounded-lg flex items-center gap-2 hover:bg-[#c4dc2b] transition-colors"
            >
              Explore the system <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-transparent border border-[#F4F1E1]/30 text-[#F4F1E1] font-medium px-6 py-3.5 rounded-lg flex items-center gap-2 hover:bg-[#F4F1E1]/10 transition-colors"
            >
              Open prototype <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Metrics Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto px-6 mt-20 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#F4F1E1]/20 rounded-xl overflow-hidden bg-[#0A2F1D]/50 backdrop-blur-sm">
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#F4F1E1]/20">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#D4ED31]">&lt; 2 sec</span>
              <span className="text-[#F4F1E1]/70 text-sm font-medium">Offline disease inference</span>
            </div>
          </div>
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#F4F1E1]/20">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#D4ED31]">25 km</span>
              <span className="text-[#F4F1E1]/70 text-sm font-medium">Hyperlocal market radius</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#D4ED31]">₹1,500</span>
              <span className="text-[#F4F1E1]/70 text-sm font-medium">IoT hardware cost target</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
