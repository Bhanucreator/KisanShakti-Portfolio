import { motion } from 'framer-motion';

export function ProblemSolutionGrid() {
  const problems = [
    {
      number: '01',
      title: 'Predatory supply chains',
      description: 'of final market value is absorbed across 3–4 intermediary tiers in traditional trade structures.',
      metric: '60–70%',
    },
    {
      number: '02',
      title: 'Diagnosis arrives late',
      description: 'annual crop loss can follow when specialist support is districts away and intervention is delayed.',
      metric: '20–40%',
    },
    {
      number: '03',
      title: 'Micro-climate blind spots',
      description: 'conditions remain invisible when commercial telemetry is costly, siloed, and cloud-dependent.',
      metric: 'Root-\nzone',
    },
    {
      number: '04',
      title: 'No financial memory',
      description: 'of structured inheritance means each generation relearns costs, yields, and pricing by intuition.',
      metric: '0 years',
    },
  ];

  return (
    <section className="py-24 bg-[#F4F1E1] text-[#0A2F1D]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column */}
        <div className="flex flex-col h-full">
          <div className="flex-1 relative">
            <div className="lg:sticky lg:top-32 pb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 bg-[#0A2F1D]" />
                <span className="uppercase text-xs font-bold tracking-widest text-[#0A2F1D]/80">
                  Why this work matters
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Four breaks in the<br />farming chain.
              </h2>
              
              <p className="text-xl text-[#0A2F1D]/80 font-medium leading-relaxed max-w-md">
                The farmer carries the production risk, yet lacks timely diagnosis, plot-level signals, fair local market access, and the memory to improve the next season.
              </p>
            </div>
          </div>

          <div className="pt-8 hidden lg:block">
            <p className="text-sm text-[#0A2F1D]/50 font-medium">
              Impact figures are project research estimates cited in the KisanShakti study.
            </p>
          </div>
        </div>

        {/* Right Column (List) */}
        <div className="flex flex-col">
          <div className="border-t border-[#0A2F1D]/10">
            {problems.map((problem, idx) => (
              <motion.div 
                key={problem.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="py-8 border-b border-[#0A2F1D]/10 grid grid-cols-[auto_1fr_auto] gap-6 items-start"
              >
                <div className="text-[#0A2F1D]/40 font-mono text-sm font-bold pt-1">
                  {problem.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-[#0A2F1D]/70 font-medium leading-relaxed max-w-sm">
                    {problem.description}
                  </p>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#b55e3e] text-right whitespace-pre-line leading-tight">
                  {problem.metric}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 lg:hidden block">
            <p className="text-sm text-[#0A2F1D]/50 font-medium">
              Impact figures are project research estimates cited in the KisanShakti study.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
