import React from 'react'
import Title from '../Title'
import { Box, Container, Grid, Typography } from '@mui/material';
import { Call, Instagram, Place, Telegram } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{marginTop:"5rem"}}>
        <Title titleText={"Biz bilan bog'lanish"}/>
        <Container sx={{paddingBottom:"4rem"}}>
            <Grid container spacing={2} sx={{margin:"2rem 0"}}> 
                  <Grid item xs={12} md={6} sx={{width:"50%", maxHeight:"250px"}}>
                    <Box sx={{display:"flex",padding:"0 0 1.1rem 0",width:"60%",alignItems:"center", margin: " 0 0 1.5rem 0rem",gap:"3rem", borderBottom:"1px solid #ccc"}}>
                        <Call sx={{color:"#22577A"}}/>
                        <Typography variant="p" sx={{fontSize:".9rem"}}>+99899 739 71 57</Typography>
                    </Box>
                    <Box sx={{display:"flex",padding:"0 0 1.1rem 0",width:"60%",alignItems:"center", margin: " 0 0 1.5rem 0rem",gap:"3rem", borderBottom:"1px solid #ccc", cursor:"pointer"}}>
                        <Telegram sx={{color:"#2192FF"}}/>
                        <Typography variant="p" sx={{fontSize:".9rem"}}>@sadikovSchool</Typography>
                    </Box>
                    <Box sx={{display:"flex",padding:"0 0 1.1rem 0",width:"60%",alignItems:"center", margin: " 0 0 1.5rem 0rem",gap:"3rem", borderBottom:"1px solid #ccc", cursor:"pointer"}}>
                        <Instagram sx={{color:"#FF0075"}}/>
                        <Typography variant="p" sx={{fontSize:".9rem"}} >@sadikov_school</Typography>
                    </Box>
                    <Box sx={{display:"flex",padding:"0 0 1.1rem 0",width:"60%",alignItems:"center", margin: " 0 0 1.5rem 0rem",gap:"3rem",  cursor:"pointer"}}>
                        <Place sx={{color:"#197163"}}/>
                        <Typography variant="p" sx={{fontSize:".9rem"}} >Buxoro, G'ijduvon tuman.     6-maktab ro'parasi</Typography>
                    </Box>
                  </Grid>  
                  <Grid item xs={12} md={6} >
                  <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bukhara, gijduvon, sadicov &amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                  </div>
                  </Grid>  
            </Grid>
        </Container>
    </Box>
  )
}

export default Contact