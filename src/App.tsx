import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/Global.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;