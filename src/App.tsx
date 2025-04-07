import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/Global.css';
import Preloader from './components/Preloading';
import { useEffect, useState } from 'react';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {load && <Preloader load={load} />} {/* Rendu conditionnel */}
      <Navbar />
      <div className="app-container">
        <div className="content">
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;