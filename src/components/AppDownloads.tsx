import { Leaf, Sprout, BarChart3, Store, Truck, ShieldCheck, Users, Apple, Smartphone } from 'lucide-react';

export function AppDownloads() {
  return (
    <section
      id="downloads"
      className="relative pt-24 pb-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/Appdownload.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#0A2F1D]/30" />
            <span className="uppercase text-xs font-bold tracking-[0.2em] text-[#0A2F1D]/70">
              Mobile Applications
            </span>
            <div className="h-px w-12 bg-[#0A2F1D]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0A2F1D]">
            Get the <span className="text-[#3b8226]">KisanShakti</span> Apps
          </h2>
          <p className="text-lg text-[#0A2F1D]/70 max-w-2xl font-medium">
            Download our dedicated mobile applications designed specifically for farmers and buyers to seamlessly interact within the KisanShakti ecosystem.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">

          {/* Upaj App Card */}
          <div className="bg-white/30 backdrop-blur-xl rounded-[2rem] p-5 md:p-6 shadow-2xl border border-white/40 flex flex-col items-center text-center transform transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group">

            {/* App Icon */}
            <div className="relative w-24 h-24 mb-4">
              <div className="absolute inset-0 bg-[#d4ed31] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <img
                src="/AppIcons/Upaj-Icon.png"
                alt="Upaj App Icon"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-extrabold mb-1 text-[#0A2F1D]">Upaj</h3>
            <p className="text-[#6c8e7b] font-bold mb-4 uppercase tracking-widest text-[10px]">Farmers App</p>

            <p className="text-[#0A2F1D]/80 mb-6 max-w-[240px] text-xs font-medium leading-relaxed">
              Manage your farm, get insights, detect diseases, check market prices and more.
            </p>

            {/* Features Row */}
            <div className="flex justify-between w-full mb-8 px-1 gap-1">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Crop<br />Advisory</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Disease<br />Detection</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Market<br />Prices</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <Store className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Sell<br />Directly</span>
              </div>
            </div>

            {/* Install Buttons */}
            <div className="mt-auto flex w-full gap-3">
              <a
                href="/APKs/application-9545e05a-9931-4734-8358-8e8384b7e510.apk"
                download="Upaj.apk"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A2F1D] text-white px-3 py-3 rounded-full font-bold hover:bg-[#15462d] transition-all shadow-lg hover:shadow-xl group/btn text-xs sm:text-sm"
              >
                <Smartphone className="w-4 h-4 text-[#d4ed31]" />
                <span>Android</span>
              </a>
              <div
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A2F1D]/40 text-[#0A2F1D]/70 px-3 py-3 rounded-full font-bold cursor-not-allowed border border-[#0A2F1D]/20 text-xs sm:text-sm relative group/ios"
                title="iOS version coming soon!"
              >
                <Apple className="w-4 h-4 text-[#0A2F1D]/60" />
                <span>iOS</span>
                <span className="text-[9px] bg-[#d4ed31] text-[#0A2F1D] px-1.5 py-0.5 rounded-full font-extrabold border border-[#0A2F1D]/20 ml-0.5 whitespace-nowrap shadow-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Mandi App Card */}
          <div className="bg-white/30 backdrop-blur-xl rounded-[2rem] p-5 md:p-6 shadow-2xl border border-white/40 flex flex-col items-center text-center transform transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group">

            {/* App Icon */}
            <div className="relative w-24 h-24 mb-4">
              <div className="absolute inset-0 bg-[#d4ed31] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <img
                src="/AppIcons/Mandi-Icon.png"
                alt="Mandi App Icon"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-extrabold mb-1 text-[#0A2F1D]">Mandi</h3>
            <p className="text-[#6c8e7b] font-bold mb-4 uppercase tracking-widest text-[10px]">Buyers App</p>

            <p className="text-[#0A2F1D]/80 mb-6 max-w-[240px] text-xs font-medium leading-relaxed">
              Discover quality produce, compare prices, connect with farmers and source directly.
            </p>

            {/* Features Row */}
            <div className="flex justify-between w-full mb-8 px-1 gap-1">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <Truck className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Direct<br />Procurement</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Live<br />Market Prices</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Verified<br />Sellers</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-[#3b8226]/10 flex items-center justify-center text-[#3b8226]">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-bold text-[#0A2F1D]/70 uppercase text-center leading-tight">Build<br />Partnerships</span>
              </div>
            </div>

            {/* Install Buttons */}
            <div className="mt-auto flex w-full gap-3">
              <a
                href="/APKs/application-894f17db-a2e4-4a12-9793-54c3dfb12775.apk"
                download="Mandi.apk"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A2F1D] text-white px-3 py-3 rounded-full font-bold hover:bg-[#15462d] transition-all shadow-lg hover:shadow-xl group/btn text-xs sm:text-sm"
              >
                <Smartphone className="w-4 h-4 text-[#d4ed31]" />
                <span>Android</span>
              </a>
              <div
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A2F1D]/40 text-[#0A2F1D]/70 px-3 py-3 rounded-full font-bold cursor-not-allowed border border-[#0A2F1D]/20 text-xs sm:text-sm relative group/ios"
                title="iOS version coming soon!"
              >
                <Apple className="w-4 h-4 text-[#0A2F1D]/60" />
                <span>iOS</span>
                <span className="text-[9px] bg-[#d4ed31] text-[#0A2F1D] px-1.5 py-0.5 rounded-full font-extrabold border border-[#0A2F1D]/20 ml-0.5 whitespace-nowrap shadow-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
