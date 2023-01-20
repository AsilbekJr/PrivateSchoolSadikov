import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import Title from '../Title';

const content = [
    {
        name:"Matematika",
        image:"./image/subject/matematika.png"
    },
    {
        name:"Tarix",
        image:"./image/subject/tarix.png"
    },
    {
        name:"Fizika",
        image:"./image/subject/fizika.png"
    },
    {
        name:"Chet tili",
        image:"./image/subject/chettili.png"
    },
    {
        name:"Kimyo",
        image:"./image/subject/kimyo.png"
    },
    {
        name:"Biologiya",
        image:"./image/subject/biologiya.png"
    },
    {
        name:"Rasm va Chizmachilik",
        image:"./image/subject/rasm.png"
    },
    {
        name:"Jismoniy tarbiya",
        image:"./image/subject/sport.png"
    },
]

const Subjects = () => {
  return (
    <Box sx={{ margin:"5rem 0", backgroundColor:"#fff"}}>
        <Title  titleText="Fanlar"/>
        <Container>
            <Grid container spacing={2}>
                {
                    content.map((item) => (      
                        <Grid item xs={6} md={4} lg={3} sx={{ height:"300px"}}>
                            <Box sx={{width:"100%", height:"100%",display:"flex",flexDirection:"column", alignItems:"center",}} >
                                <Box sx={{width:"180px", height:"180px",borderRadius:"5px", padding:"30px", backgroundColor:"#f5f5f5"}}>
                                    <img style={{width:"100%"}} src={item.image}/>
                                </Box>
                                <Typography variant='p' sx={{padding:"1rem 0"}}>
                                    {item.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))

                }
            </Grid>
        </Container>
    </Box>
  )
}

export default Subjects