import React from 'react'
import { styled } from '@mui/material/styles';
import { Container, Box, Grid,Paper } from '@mui/material';
import Title from '../Title';

const Circle = () => {
    const content = [
        {title:"Yosh tarixchi", teaxher:"Azamat Ismoilov", image:"", time:""}
    ]
   
  return (
    <Box sx={{ margin:"5rem 0", paddingBottom:"2rem", backgroundColor:"#fff", minHeight:"100vh"}}>
        <Title titleText="Fan to'garaklari"/>
    <Container>  
      <Grid container spacing={2} g>
        <Grid  item xs={12} sm={6} md={8} sx={{height:"250px"}}>
          <Paper sx={{padding:"8px",color:"white",height:"100%",background: `linear-gradient(rgba(33,33,33,0.3242471988795518), rgba(33,33,33,0.811922268907563)),url('https://news.clemson.edu/wp-content/uploads/2022/03/math-25422019-hd-1130x636.jpg') no-repeat center center/cover`, objectFit:"cover", display: 'flex', justifyContent:"center", alignItems:"center",letterSpacing:"1.1px"}}>
            <h2> Matematika </h2>
          </Paper >
        </Grid>
        <Grid  item xs={12} sm={6} md={4} sx={{height:"250px"}}>
          <Paper sx={{padding:"8px",color:"white",height:"100%",background: `linear-gradient(rgba(33,33,32,0.3242471988795518), rgba(33,33,33, 0.311922268907563)),url('https://us.123rf.com/450wm/manjik/manjik2104/manjik210400026/manjik210400026.jpg?ver=6') no-repeat center center/cover`, display: 'flex', justifyContent:"center", alignItems:"center",letterSpacing:"1.1px"}}>
            <h2>Yosh Tarixchilar</h2>
          </Paper >
        </Grid>
        <Grid  item xs={12} sm={6} md={4} sx={{height:"250px"}}>
          <Paper sx={{padding:"8px",color:"white",height:"100%",background: `linear-gradient(rgba(33,33,33,0.5242471988795518), rgba(33,33,33, 0.5311922268907563)),url('https://msfl.co.in/wp-content/uploads/2021/01/flags.jpg') no-repeat center center/cover`, display: 'flex', justifyContent:"center", alignItems:"center",letterSpacing:"1.1px"}}>
            <h2>Ingliz tili bilimdonlari</h2>
          </Paper>
        </Grid>
        <Grid  item xs={12} sm={6} md={4} sx={{height:"250px"}}>
          <Paper sx={{padding:"8px",color:"white",height:"100%",background: `linear-gradient(rgba(33,33,33,0.5242471988795518), rgba(33,33,33, 0.5311922268907563)),url('https://png.pngtree.com/thumb_back/fh260/background/20210205/pngtree-c4d-chess-background-image_547555.jpg') no-repeat center center/cover`, display: 'flex', justifyContent:"center", alignItems:"center",letterSpacing:"1.1px"}}>
            <h2>Shaxmat</h2>
          </Paper >
        </Grid>
        <Grid  item xs={12} sm={6} md={4} sx={{height:"250px"}}>
          <Paper sx={{padding:"8px",color:"white",height:"100%",background: `linear-gradient(rgba(33,33,33,0.5242471988795518), rgba(33,33,33, 0.5311922268907563)),url('https://thumbs.dreamstime.com/b/programming-code-coding-hacker-background-icon-made-binary-digital-data-streaming-matrix-digits-vector-illustration-184073322.jpg') no-repeat center center/cover`, display: 'flex', justifyContent:"center", alignItems:"center",letterSpacing:"1.1px"}}>
            <h2>Dasturlash</h2>
          </Paper >
        </Grid>
        <Grid  item xs={12} sm={6} md={12} sx={{height:"250px"}}>
          <Paper sx={{padding:"8px",color:"white",height:"100%",background: `linear-gradient(rgba(33,33,33,0.5242471988795518), rgba(33,33,33, 0.5311922268907563)),url('https://img.freepik.com/premium-photo/abacus-mental-arithmetic-blue-background-with-examples-solve_101510-129.jpg') no-repeat center center/cover`, display: 'flex', justifyContent:"center", alignItems:"center",letterSpacing:"1.1px"}}>
           <h2>Mental Arifmetika</h2> 
          </Paper >
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}

export default Circle