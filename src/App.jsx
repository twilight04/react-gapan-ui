import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  const [activeLink, setActiveLink] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveLink(pathname);

    if(pathname === '/') {
      document.title = 'Home - Gapan City';
    }
    if(pathname === '/services') {
      document.title = 'Services - Gapan City';
    }
  }, [pathname]);

  return (
    <>
      <Navbar activeLink={activeLink} />
      <Outlet />
      <Footer />
    </>
  )
}

export default App