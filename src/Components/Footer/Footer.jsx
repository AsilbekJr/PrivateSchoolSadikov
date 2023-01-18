import {
  Container,
  Grid,
  Typography,
  useTheme,
  Box,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ backgroundColor: "#011c39"}}>
      <Container>
     <Box sx={{marginTop:"1rem"}}>
        <Grid container spacing={matches ? 12 : 2}>
          <Grid item xs={6} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "2rem",
            }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                  borderRadius: "50%",
                  background: "white",
                  width: matches ? "45px" : "60px",
                  height: matches ? "45px" : "60px",
                }}
              >
                <img
                  alt="Logo"
                  src="/image/logo.png"
                  style={{
                      width: matches ? "20px" : "30px",
                      p: 2,
                      m: 1,
                      objectFit: "contain",
                    }}
                    />
              </Box>
              <Typography
                sx={{
                    fontSize: matches ? ".8rem" : "1.2rem",
                    color: "white",
                    letterSpacing: "1px",
                    padding: "0 0 0 12px",
                    fontWeight: "700",
                }}
                >
                SADIKOV SCHOOL
              </Typography>
            </Box>
            <Typography
              variant="p"
              sx={{ padding: "2rem 0", color: "#D0C9C0", fontSize: matches ? "0.7rem" : ".8rem" }}
              >
              SADIKOV SCHOOL farzandlaringiz uchun ajoyib tanlov. Maktabimizda
              tahsil olgan o'quvchilar davlatimiz kelajagi uchun sifatli kadr va
              o'z orzusidagi kasb egasi bo'lib yetishlari mumkin. Tanlov uchun
              rahmat. Ishonchingizni oqlash uchun harakatdamiz.
            </Typography>
          </Grid>
          <Grid item xs={6} md={2.5}>
            <List>
              <ListItem>
                <ListItemText secondary={<Typography variant="a" style={{fontSize:"1rem", color:"white"}}>Imkoniyatlar</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>IELTS kurslari</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Shaxmat to'garagi</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Sadikov Education</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Chegirmalar</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Sayohatlar</Typography>}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={2.5}>
              <List>
              <ListItem>
                <ListItemText secondary={<Typography variant="a" style={{fontSize:"1rem", color:"white"}}>Sahifalar</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Fanlar</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>To'garaklar</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Imtihon natijalari</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Yutuqlar</Typography>}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Biz haqimizda</Typography>}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={3}>
            
          <List>
              <ListItem>
                <ListItemText secondary={<Typography variant="a" style={{fontSize:"1rem", color:"white"}}>Manzil:</Typography>}/>
              </ListItem>
              <ListItem >
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>Buxoro viloyati</Typography>}/>
              </ListItem>
              <ListItem >
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}>G'ijduvon tuman </Typography>}/>
              </ListItem>
              <ListItem >
                <ListItemText secondary={<Typography variant="a" style={{fontSize:".8rem", color:"#D0C9C0"}}> Xonsolor qishlog'i, 6-maktab ro'parasi</Typography>}/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
    </Box>
          <Box  sx={{ display:"flex", alignItems:"center", justifyContent:"center", }}>
            <p style={{color:"#D0C9C0", fontSize:".8rem"}}>All rights reserved. Created by Asilbek</p>
          </Box>
      </Container>
    </Box>
  );
};

export default Footer;
