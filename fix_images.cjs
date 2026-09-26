const fs = require('fs');
let code = fs.readFileSync('src/components/FeatureModules.tsx', 'utf8');

// Replace IoT visual
code = code.replace(
`    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller3.png" alt="IoT Telemetry Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )`,
`    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/IoT.png" alt="IoT Telemetry Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )`
);

// Replace Mandi visual
code = code.replace(
`    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller4.png" alt="Mandi Commerce Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )`,
`    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller3.png" alt="Mandi Commerce Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )`
);

// Replace Ledger visual (using regex to grab the block since it's large)
const ledgerStart = code.indexOf(`    visual: (
      <div className="bg-[#F4F1E1] rounded-xl p-6 h-full flex flex-col shadow-xl">
        <div className="flex justify-between items-start mb-6">`);
const ledgerEnd = code.indexOf(`  }
};`, ledgerStart);

if (ledgerStart !== -1 && ledgerEnd !== -1) {
  const newLedgerVisual = `    visual: (
      <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/10 flex">
        <img src="/Four_Pillor/Four-Piller4.png" alt="Farm Ledger Interface" className="w-full h-auto object-contain bg-[#0A2F1D]" />
      </div>
    )
`;
  code = code.substring(0, ledgerStart) + newLedgerVisual + code.substring(ledgerEnd);
}

fs.writeFileSync('src/components/FeatureModules.tsx', code);
console.log('Fixed images for modules.');
