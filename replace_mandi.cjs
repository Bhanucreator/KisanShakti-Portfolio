const fs = require('fs');
let code = fs.readFileSync('src/components/FeatureModules.tsx', 'utf8');

const mandiVisualStart = code.indexOf(`    visual: (
      <div className="bg-[#F4F1E1] rounded-xl p-6 h-full flex flex-col shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="uppercase text-[10px] font-bold tracking-widest text-[#0A2F1D]/50 mb-1">Live System View</div>
            <div className="text-5xl font-bold text-[#0A2F1D] tracking-tight mb-1">± 5%</div>`);

const mandiVisualEnd = code.indexOf(`  ledger: {`);

if (mandiVisualStart !== -1 && mandiVisualEnd !== -1) {
  const replaceWith = `    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller4.png" alt="Mandi Commerce Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )
  },
`;
  
  const newCode = code.substring(0, mandiVisualStart) + replaceWith + code.substring(mandiVisualEnd);
  fs.writeFileSync('src/components/FeatureModules.tsx', newCode);
  console.log('Successfully replaced Mandi visual.');
} else {
  console.log('Failed to find bounds:', mandiVisualStart, mandiVisualEnd);
}
