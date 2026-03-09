
import { Hero } from './components/Hero';
import { Features } from './components/Features';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen font-sans selection:bg-primary-500/30">
      <Hero />
      <Features />
      
      {/* Footer */}
      <footer className="py-8 border-t border-dark-800 text-center">
        <p className="text-gray-500">
          Đội: Dream High, Fly High.
        </p>
      </footer>
    </div>
  );
}

export default App;
