import './App.css';
import { Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Products from './pages/Product';
import BookAppointment from './pages/BookAppointment';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <div className="mb-3">
        <Header />
        <h1>Popo</h1>
      </div>

      <div className="mainContent container-fluid">
        <Routes>
          <Route path= '/' element={<Home />}/>
          <Route path="/packages" element={<Packages />} />
          <Route path="/products" element={<Products />} />
          <Route path="/book-appointment" element={<BookAppointment />}/>
        </Routes>
      </div>
      <footer>
        <p>Assignment 2 – Relaxation Spa Web Application (SPA) by Matthew Cheng. This is not by any means a real website. Any names, products, and places shown were meant to be as general as possible and randomly picked. </p>
      </footer>
    </div>
  );
}

export default App;
