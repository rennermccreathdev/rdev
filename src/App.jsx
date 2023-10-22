import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx'
import BioPage from './pages/BioPage/BioPage.jsx'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import { Helmet } from 'react-helmet';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
  
    <Helmet>
      <script src="./script.js" defer async></script>
    </Helmet>
      
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bio" element={<BioPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>

      
    </div>
    </>
  )
}

export default App
