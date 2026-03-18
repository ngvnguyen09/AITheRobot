import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Process } from './components/Process';
import { TechSpecs } from './components/TechSpecs';
import { Usage } from './components/Usage';
import { Impact } from './components/Impact';
import { Footer } from './components/Footer';
// @ts-expect-error - Gallery is a JS file
import Gallery from './gallery/Gallery';

import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router basename={import.meta.env.BASE_URL}>
      <div className="bg-dark-900 min-h-screen font-sans selection:bg-primary-500/30">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <About />
              <Process />
              <TechSpecs />
              <Usage />
              <Impact />
              <Footer />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<div style={{color:'white', padding:'50px'}}>404 - Page Route Not Matched. Current URL: {window.location.pathname}</div>} />
        </Routes>
      </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App;
