import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardTabs from './components/DashboardTabs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(99,102,241,0.08),transparent),radial-gradient(60%_50%_at_80%_10%,rgba(236,72,153,0.08),transparent)]">
      <Navbar />
      <Hero />
      <DashboardTabs />
      <Footer />
    </div>
  );
}

export default App;
