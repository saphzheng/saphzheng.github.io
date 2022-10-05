import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
// import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
