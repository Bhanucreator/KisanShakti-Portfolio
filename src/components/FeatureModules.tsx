import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Leaf, MapPin, LineChart, Bluetooth } from 'lucide-react';

const tabs = [
  { id: 'disease', label: '01  Disease AI' },
  { id: 'iot', label: '02  IoT Telemetry' },
  { id: 'mandi', label: '03  Mandi Commerce' },
  { id: 'ledger', label: '04  Farm Ledger' },
];

const contentMap = {
  disease: {
    badge: 'MODULE 01 · EDGE INTELLIGENCE',
    title: 'A field agronomist that works without a signal.',
    description: 'A quantized MobileNetV2 runs entirely on entry-level Android phones, pairing fast classification with conservative safety gates and a bilingual remedy database.',
    features: [
      'PlantVillage + PlantDoc dataset fusion',
      'Green-dominance leaf gate',
      '55% confidence safety threshold',
      'ICAR / UAS-Bangalore remedy guidance'
    ],
    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller1.png" alt="Disease AI Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )
  },
  iot: {
    badge: 'MODULE 02 · RESILIENT SENSING',
    title: 'Field telemetry without SIM cards or subscriptions.',
    description: 'A solar-topped ESP32 node measures root-zone moisture, rain, temperature, and humidity, then synchronizes over BLE whenever the farmer returns to the plot.',
    features: [
      'DHT22 canopy conditions',
      'Capacitive moisture sensing',
      'LM393 rain intensity',
      'GPS weather fallback without hardware'
    ],
    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller-2.png" alt="IoT Telemetry Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )
  },
  mandi: {
    badge: 'MODULE 03 · HYPERLOCAL EXCHANGE',
    title: 'A 25-kilometre market built around fair price.',
    description: 'Upaj lets farmers list in one tap. Mandi lets nearby businesses discover harvests, bid directly, and negotiate inside a government-benchmarked safety corridor.',
    features: [
      'PostGIS ST_DWithin matching',
      '25 km maximum discovery radius',
      'Accept, counter, or decline bids',
      'Plot-linked produce traceability'
    ],
    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller3.png" alt="Mandi Commerce Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )
  },
  ledger: {
    badge: 'MODULE 04 · GENERATIONAL INTELLIGENCE',
    title: 'Turn one season\'s memory into a family asset.',
    description: 'A local-first ledger structures every crop cycle by variety, sowing month, and year—revealing true net profit, cost per kilogram, and high-ROI planting windows.',
    features: [
      'Itemized input cost tracking',
      'Crop-cycle net profit',
      'ROI and break-even analysis',
      'Multi-year yield comparisons'
    ],
    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller4.png" alt="Farm Ledger Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )
  }
};

export function FeatureModules() {
  const [activeTab, setActiveTab] = useState('disease');

  return (
    <section id="pillars" className="py-24 bg-[#0A2F1D] text-[#F4F1E1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-[#D4ED31]" />
          <span className="uppercase text-xs font-bold tracking-widest text-[#D4ED31]">
            One ecosystem · Four pillars
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl">
            From leaf diagnosis to the final market handshake.
          </h2>
          <p className="text-[#F4F1E1]/70 font-medium max-w-sm lg:text-left text-sm mb-2">
            Every module works alone. Together, they create a continuous intelligence layer across the crop cycle.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-0 border border-[#F4F1E1]/20 rounded-xl overflow-hidden mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-5 px-6 text-sm font-bold transition-all duration-300 relative border-b lg:border-b-0 lg:border-r border-[#F4F1E1]/20 last:border-0
                  ${isActive ? 'text-[#0A2F1D]' : 'text-[#F4F1E1]/70 hover:text-[#F4F1E1] hover:bg-[#F4F1E1]/5'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#D4ED31]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 whitespace-pre">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="border border-[#F4F1E1]/20 rounded-2xl p-6 lg:p-8 relative overflow-hidden bg-[#0A2F1D]/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#D4ED31] mb-6 font-bold text-xs uppercase tracking-wide">
                  {activeTab === 'disease' && <Leaf className="w-4 h-4" />}
                  {activeTab === 'iot' && <Bluetooth className="w-4 h-4" />}
                  {activeTab === 'mandi' && <MapPin className="w-4 h-4" />}
                  {activeTab === 'ledger' && <LineChart className="w-4 h-4" />}
                  <span>{contentMap[activeTab as keyof typeof contentMap].badge}</span>
                </div>
                <h3 className="text-3xl md:text-[2.5rem] font-bold mb-3 leading-[1.2]">
                  {contentMap[activeTab as keyof typeof contentMap].title}
                </h3>
                <p className="text-[#F4F1E1]/70 font-medium leading-relaxed mb-6 text-[15px]">
                  {contentMap[activeTab as keyof typeof contentMap].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {contentMap[activeTab as keyof typeof contentMap].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="w-4 h-4 text-[#D4ED31]" />
                      </div>
                      <span className="text-sm font-medium text-[#F4F1E1]/90 leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-full min-h-[320px] w-full flex flex-col justify-end">
                {contentMap[activeTab as keyof typeof contentMap].visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
