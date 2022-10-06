import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
