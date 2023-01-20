import React from 'react'
import { createTheme, Divider,ThemeProvider,Typography, useMediaQuery, useTheme } from '@mui/material';

const Title = ({titleText,color}) => {
  const themes = createTheme({
    typography: {
      fontFamily: ["Rubik", "cursive"].join(","),
    },
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <ThemeProvider theme={themes}>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",  paddingBottom:"3rem" }}>
        <Typography></Typography>
        <Divider sx={{textAlign:"center", bgcolor:"#ec661f",width:"30px",borderBottomWidth:"5px", marginBottom:"1rem"}}/>
        <Typography variant={matches ? "h6" : "h4"} sx={{color: color ? color : "black"}}>{titleText}</Typography>
    </div>
    </ThemeProvider>
  )
}

export default Title