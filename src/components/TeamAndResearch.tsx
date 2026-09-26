import { BookOpen, Award, ExternalLink } from 'lucide-react';

export function TeamAndResearch() {

  return (
    <>
      <section id="research" className="pt-24 pb-16 bg-[#0A2F1D] text-[#F4F1E1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-[#D4ED31]" />
                  <span className="uppercase text-xs font-bold tracking-widest text-[#D4ED31]">
                    Research & Academic Credentials
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                  Peer-Reviewed &<br />Published Innovation
                </h2>
              </div>

              {/* Publication Card */}
              <div className="bg-[#1B4332] border border-[#F4F1E1]/10 rounded-xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <BookOpen className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#D4ED31] font-bold text-sm mb-3">
                    <Award className="w-5 h-5" />
                    NIJASET Journal Publication
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 leading-snug uppercase max-w-md">
                    "KisanShakti: An Integrated Smart Farming and Hyperlocal Commerce Platform for Enhancing Farmer Profitability in India"
                  </h3>
                  <div className="font-mono text-sm text-[#F4F1E1]/60 leading-relaxed">
                    NCERC Int. J. Adv. Sci. Eng. and Tech. · Vol. 6, No.1, 2026<br />
                    ISBN: 978-93-5768-920-5
                  </div>
                </div>
              </div>

              {/* Guide Card */}
              <div className="bg-[#1B4332]/50 border border-[#F4F1E1]/10 rounded-xl p-6 shadow-xl flex items-center gap-5">
                <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-[#D4ED31]/30">
                  <img
                    src="https://cbitkolar.edu.in/wp-content/uploads/2024/08/VASUDEVA-R-300x300-2.png"
                    alt="Dr. Vasudeva R."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F4F1E1]/50 mb-1">
                    Project Guide
                  </div>
                  <div className="text-xl font-bold text-[#F4F1E1] mb-1">
                    Dr. Vasudeva R.
                  </div>
                  <div className="text-[#F4F1E1]/70 text-sm font-medium">
                    Professor & HOD, CSE, CBIT Kolar
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Research Paper Preview */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#F4F1E1]/10 bg-white">
              <img
                src="/Research-Paper.png"
                alt="KisanShakti Research Paper Front Page"
                className="w-full h-auto object-cover max-h-[700px]"
              />
              {/* Top Right Icon Button */}
              <a
                href="https://xlescience.org/index.php/NIJASET/article/view/2024/959"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-[#D4ED31] text-[#0A2F1D] p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                title="Visit Complete Research Paper"
              >
                <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-[#E5DFC5] text-[#0A2F1D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#0A2F1D]" />
                <span className="uppercase text-xs font-bold tracking-widest text-[#0A2F1D]/80">
                  The Engineering Team
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                Built across disciplines.
              </h2>
            </div>
            <p className="text-base text-[#0A2F1D]/70 font-medium leading-relaxed max-w-sm">
              Four CSE students, one shared mission: make advanced farm intelligence practical at the field edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-56 h-56 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img src="/Eng-Team/BhanuKiran.jpeg" alt="Bhanu Kiran R" className="w-full h-full object-cover object-[center_10%] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <a href="https://www.linkedin.com/in/bhanu-kiran-r" className="absolute bottom-1 right-1 bg-[#0A66C2] text-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <h3 className="font-bold text-[#0A2F1D] text-2xl mb-1 text-center">Bhanu Kiran R</h3>
              <div className="text-[#0A66C2] text-sm font-medium mb-4 text-center">System Architecture</div>
              <p className="text-[#0A2F1D]/70 text-sm italic text-center leading-relaxed max-w-[250px]">
                "Edge AI & Backend Integration"
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-56 h-56 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img src="/Eng-Team/Bindan.jpeg" alt="Bindan N" className="w-full h-full object-cover object-[center_10%] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <a href="https://www.linkedin.com/in/bindan-n" className="absolute bottom-1 right-1 bg-[#0A66C2] text-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <h3 className="font-bold text-[#0A2F1D] text-2xl mb-1 text-center">Bindan N</h3>
              <div className="text-[#0A66C2] text-sm font-medium mb-4 text-center">IoT Hardware</div>
              <p className="text-[#0A2F1D]/70 text-sm italic text-center leading-relaxed max-w-[250px]">
                "Sensor Calibration & BLE Telemetry"
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-56 h-56 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img src="/Eng-Team/HarshithaL.jpeg" alt="Harshitha L" className="w-full h-full object-cover object-[center_10%] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <a href="https://www.linkedin.com/in/harshithalakshman" className="absolute bottom-1 right-1 bg-[#0A66C2] text-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <h3 className="font-bold text-[#0A2F1D] text-2xl mb-1 text-center">Harshitha L</h3>
              <div className="text-[#0A66C2] text-sm font-medium mb-4 text-center">Mobile Development</div>
              <p className="text-[#0A2F1D]/70 text-sm italic text-center leading-relaxed max-w-[250px]">
                "Bilingual UX Design & Frontend"
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-56 h-56 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img src="/Eng-Team/HarshitaNS.jpeg" alt="Harshitha N S" className="w-full h-full object-cover object-[center_10%] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <a href="https://www.linkedin.com/in/harshitha-ns-3359a72bb" className="absolute bottom-1 right-1 bg-[#0A66C2] text-white p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <h3 className="font-bold text-[#0A2F1D] text-2xl mb-1 text-center">Harshitha N S</h3>
              <div className="text-[#0A66C2] text-sm font-medium mb-4 text-center">Database Engineering</div>
              <p className="text-[#0A2F1D]/70 text-sm italic text-center leading-relaxed max-w-[250px]">
                "Spatial Queries & Agmarknet"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
