import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Game } from './Game';
import About from './pages/About';
import Policy from './pages/Policy';
import Footer from './components/Footer';
import './App.css';
import { SudokuProvider } from './context/SudokuContext';
import './i18n'; // 导入 i18n 配置
import GoogleAnalytics from './GoogleAnalytics';

/**
 * App is the root React component.
 */
const App: React.FC = () => {
  return (
    <Router>
      <SudokuProvider>
        <div className="app-container">
          <GoogleAnalytics />
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/policy" element={<Policy />} />
          </Routes>
          <Footer />
        </div>
      </SudokuProvider>
    </Router>
  );
}

export default App;
