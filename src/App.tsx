import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolutionGrid } from './components/ProblemSolutionGrid';
import { FeatureModules } from './components/FeatureModules';
import { Architecture } from './components/Architecture';
import { HardwareSpecs } from './components/HardwareSpecs';
import { AppDownloads } from './components/AppDownloads';
import { TeamAndResearch } from './components/TeamAndResearch';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F1E1]">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolutionGrid />
        <FeatureModules />
        <Architecture />
        <HardwareSpecs />
        <AppDownloads />
        <TeamAndResearch />
      </main>
      <Footer />
    </div>
  );
}

export default App;
