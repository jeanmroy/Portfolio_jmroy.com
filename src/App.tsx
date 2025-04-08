import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloading';
import AppRouter from './router';

import './styles/Global.css';


function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div className="content-wrapper">
          <AppRouter />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const [load, setLoad] = useState(true); // Example state

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoad(false);
    }, 800);
  }, []);

  return (
    <BrowserRouter>
      {load && <Preloader load={load} />}
      <Layout />
    </BrowserRouter>
  );
}

export default App;