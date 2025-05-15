import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopMenu from './components/TopMenu.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx';

const App = () => {
  return (
    <Router>
      <div className='m-0 p-0 box-border font-primary'>

        <TopMenu />
        <Header />

        <Routes>
          <Route path='/' element={<Index/>} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;