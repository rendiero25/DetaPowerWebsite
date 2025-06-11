import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopMenu from './components/TopMenu.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx';
import Profile from './pages/Profile.jsx';
import Application from "./pages/Application.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import ProductsCategory from "./pages/ProductsCategory.jsx";

const App = () => {
  return (
    <Router>
      <div className='m-0 p-0 box-border font-primary'>
        
        <TopMenu />        
        <Header />

        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/application' element={<Application />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:category' element={<Products />} />
          <Route path='/products/:category/:product' element={<Products />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;