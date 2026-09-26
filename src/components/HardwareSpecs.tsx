import { Sun, Bluetooth, CloudRain, IndianRupee } from 'lucide-react';
import '@google/model-viewer';

export function HardwareSpecs() {
  const specs = [
    {
      icon: <Sun className="w-5 h-5 text-[#b55e3e]" />,
      title: 'Solar + Li-Ion',
      subtitle: 'Autonomous power'
    },
    {
      icon: <Bluetooth className="w-5 h-5 text-[#b55e3e]" />,
      title: 'BLE sync',
      subtitle: 'No SIM required'
    },
    {
      icon: <CloudRain className="w-5 h-5 text-[#b55e3e]" />,
      title: 'Three sensors',
      subtitle: 'Soil, rain, climate'
    },
    {
      icon: <IndianRupee className="w-5 h-5 text-[#b55e3e]" />,
      title: 'Low-cost BOM',
      subtitle: 'Target under ₹1,500'
    }
  ];

  const ModelViewer = 'model-viewer' as any;

  return (
    <section id="hardware" className="py-24 bg-[#E5DFC5] text-[#0A2F1D]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center rounded-2xl overflow-hidden group">
          <ModelViewer
            src="/IoT2.glb"
            camera-controls
            auto-rotate
            auto-rotate-delay="1000"
            rotation-per-second="30deg"
            shadow-intensity="1"
            environment-image="neutral"
            exposure="1"
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          >
            <div className="absolute top-4 right-4 bg-[#0A2F1D] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4ED31] animate-pulse"></span>
              Drag to rotate 360°
            </div>
          </ModelViewer>
        </div>

        {/* Right - Content */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-[#0A2F1D]" />
            <span className="uppercase text-xs font-bold tracking-widest text-[#0A2F1D]/80">
              Hardware Showcase
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
            A field node designed<br />
            around zero recurring<br />
            cost.
          </h2>

          <p className="text-base text-[#0A2F1D]/80 font-medium leading-relaxed mb-10 max-w-md">
            The node avoids cellular subscriptions. Solar-assisted power keeps it field-ready, while BLE turns the farmer's phone into the gateway during each visit.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, i) => (
              <div 
                key={i}
                className="bg-white rounded-xl p-6 border border-[#0A2F1D]/5 shadow-sm"
              >
                <div className="mb-4">
                  {spec.icon}
                </div>
                <div className="font-bold text-[#0A2F1D] text-base mb-0.5">{spec.title}</div>
                <div className="text-[#0A2F1D]/60 text-xs font-medium">{spec.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
