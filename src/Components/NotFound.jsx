import React from 'react'
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box sx={{width:"100%", minHeight:"100vh", display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center", paddingBottom:"5rem"}}>
             <Box sx={{fontSize:"10rem"}}>404</Box>
             <Box sx={{display:"flex",flexDirection:"column", alignItems:"center"}}>
             <h1 style={{marginRight:"1rem"}}>Sahifa topilmadi</h1> 
             </Box>
             <Link style={{textDecoration:"none"}} to="/"> <Button variant='contained'>Bosh sahifaga qaytish</Button></Link>
    </Box>
  )
}

export default NotFound