import { Check } from 'lucide-react';

export function Architecture() {
  const checks = [
    'Offline-first core workflows',
    'Asynchronous API gateway',
    'Spatially indexed local discovery',
    'Bilingual Kannada + English UX'
  ];

  return (
    <section id="architecture" className="pt-24 pb-8 lg:pt-32 lg:pb-12 bg-[#F4F1E1] text-[#0A2F1D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row: Label + Title + Description + Checks side by side with image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          {/* Left Content — compact */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#0A2F1D]" />
              <span className="uppercase text-xs font-bold tracking-widest text-[#0A2F1D]/80">
                System Architecture
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
              Local when it must be.<br />
              <span className="text-[#0A2F1D]">Connected when it can be.</span>
            </h2>

            <p className="text-base text-[#0A2F1D]/70 font-medium leading-relaxed mb-8 max-w-md">
              Diagnosis, remedies, telemetry, and the farm ledger stay useful in the field. Connectivity extends the system into weather, government benchmarks, and direct buyer discovery.
            </p>

            <div className="flex flex-col gap-3">
              {checks.map((check, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#D4ED31] rounded-full p-1 shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0A2F1D]" strokeWidth={3} />
                  </div>
                  <span className="font-bold text-sm">{check}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content — Architecture Diagram, large and clean */}
          <div className="flex items-center justify-center w-full">
            <img
              src="/System-Architecture(K).png"
              alt="KisanShakti System Architecture Diagram"
              className="w-full h-auto object-contain scale-105 lg:scale-110 xl:scale-125 lg:origin-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
