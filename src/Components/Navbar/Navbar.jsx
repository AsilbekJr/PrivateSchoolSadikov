import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { IconButton, Tooltip, MenuItem, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';

import { Menu } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
   
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cabin',
        'cursive',
      ].join(','),
    },});

    const themes = useTheme();
    const matchesDLg = useMediaQuery(themes.breakpoints.down("lg"));
    const matches = useMediaQuery(themes.breakpoints.down("md"));
    const matchesDSm= useMediaQuery(themes.breakpoints.down("sm"));



  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor:"rgb(248,248,248", color:"#404040", padding: "10px", height:matchesDSm ? "65px" : "90px",justifyContent:"center"}}> 
          <Toolbar sx={{display:"flex", justifyContent:matchesDLg ? "space-between" : "space-around"}}>
          <Box component={Link} to="/" sx={{display:"flex", alignItems:"center", cursor:"pointer", justifyContent:"center",textDecoration:"none"}}>      
                <img alt="Logo" src="/image/logo.png"  style={{width: matches ? "33px" : "40px",p:2,m:1, objectFit:"contain" }} /> 
                <Typography  sx={{fontSize:matches ? "1rem" : "1.4rem",color:"#002bd6",letterSpacing:"1px", padding:"0 0 0 12px", fontWeight:"400"}}>SADIKOV SCHOOL</Typography>    
            </Box>
            <Box sx={{display: matches ? "none" : "flex", justifyContent:"space-around", gap:matchesDLg ? "1.5rem" : matches ? "1rem" : "2rem"}}>
        <MenuItem component={Link} to="fanlar" style={{color:"#333",fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>Fanlar </MenuItem>
        <MenuItem component={Link} to="togaraklar" style={{color:"#333", fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>To'garaklar</MenuItem>
        <MenuItem style={{color:"#333", fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>Imtihon natijalari</MenuItem>
        <MenuItem style={{color:"#333", fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>Yutuqlar</MenuItem>
        <MenuItem style={{color:"#333", fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>Biz haqimizda</MenuItem>

      </Box>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sahifalar ro'yxati" sx={{display: matches ? "flex" : "none"}}>
            <IconButton>
              <Menu style={{color:"#002bd6"}} />
            </IconButton>
            </Tooltip>
         
          </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      </ThemeProvider>
    </React.Fragment>
  );
}
