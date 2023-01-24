import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { IconButton, MenuItem, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import {Telegram, Instagram, Facebook} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//  
//   window: PropTypes.func,
// };

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

    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      //changes the function state according to the value of open
      setState(open);
    };

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
        <MenuItem component={Link} to="natijalar" style={{color:"#333", fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>Nazorat ishi natijalari</MenuItem>
        <MenuItem component={Link} to="yutuqlar" style={{color:"#333", fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>Yutuqlar</MenuItem>
        <MenuItem component={Link} to="biz" style={{color:"#333", fontSize: matchesDLg ? ".85rem" : ".9rem", textTransform:"uppercase"}}>Biz haqimizda</MenuItem>

      </Box>
            <Box sx={{ flexGrow: 0 }}>
            <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none"
              }
            }}
            >
              <Menu style={{color:"#002bd6"}} />
            </IconButton>
            <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
            PaperProps={{
              sx:{width:"70%"}
            }}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#011c39",

              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon sx={{color:"white"}} onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton component={Link} to="fanlar" onClick={toggleDrawer(false)}>
                  <ListItemText primaryTypographyProps={{fontSize:"1rem",textTransform:"uppercase",color:"white"}} primary="Fanlar" />
                </ListItemButton>
                <Divider style={{backgroundColor:"white"}}/>
                <ListItemButton component={Link} to="togaraklar" onClick={toggleDrawer(false)}>
                  <ListItemText primaryTypographyProps={{fontSize:"1rem",textTransform:"uppercase",color:"white"}} primary="To'garaklar" />
                </ListItemButton>
                 <Divider style={{backgroundColor:"white"}}/>
                <ListItemButton component={Link} to="natijalar" onClick={toggleDrawer(false)}>
                  <ListItemText primaryTypographyProps={{fontSize:"1rem",textTransform:"uppercase",color:"white"}} primary="Imtihon natijalari" />
                </ListItemButton>
                 <Divider style={{backgroundColor:"white"}}/>
                <ListItemButton component={Link} to="yutuqlar" onClick={toggleDrawer(false)}>
                  <ListItemText primaryTypographyProps={{fontSize:"1rem",textTransform:"uppercase",color:"white"}} primary="Yutuqlar" />
                </ListItemButton>
                 <Divider style={{backgroundColor:"white"}}/>
                <ListItemButton component={Link} to="biz" onClick={toggleDrawer(false)}>
                  <ListItemText primaryTypographyProps={{fontSize:"1rem",textTransform:"uppercase",color:"white"}} primary="Biz haqimizda" />
                </ListItemButton>
              </Box>
              <Box sx={{height:"300px", width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem"}}>
                  <IconButton>
                      <Telegram style={{color:"white"}}/>
                  </IconButton>
                  <IconButton>
                      <Instagram style={{color:"white"}}/>
                  </IconButton>
                  <IconButton>
                      <Facebook style={{color:"white"}}/>
                  </IconButton>
              </Box>
            </Box>
          </Drawer>
         
          </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      </ThemeProvider>
    </React.Fragment>
  );
}
