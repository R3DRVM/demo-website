import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ColorProvider } from './contexts/ColorContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Discover from './pages/Discover';
import Dashboard from './pages/Dashboard';
import Perpetuals from './pages/Perpetuals';
import Tracker from './pages/Tracker';
import TokenPage from './pages/TokenPage';
import Orders from './pages/Orders';
import Portfolio from './pages/Portfolio';
import Spot from './pages/Spot';

function App() {
  useEffect(() => {
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    // This script checks to see if a redirect is present in the query string,
    // converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, '',
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  }, []);
  return (
    <ColorProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/discover" replace />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/perpetuals" element={<Perpetuals />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/token/:id" element={<TokenPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/spot" element={<Spot />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ColorProvider>
  );
}

export default App;
