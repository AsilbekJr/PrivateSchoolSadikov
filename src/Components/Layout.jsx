import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{minHeight:"100vh", background: "#f5f5fc" }}>
     <Navbar />
       <Outlet />
     <Footer/>
    </Box>
  )
}

export default Layout