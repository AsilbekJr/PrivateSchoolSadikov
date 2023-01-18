import React from "react";
import { Box, Card, CardContent, CardMedia,Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import Title from "../Title";

const content = [
  {
    name: "Jahongir Hasanov",
    image: "./image/student.png",
    subject: "tarix",
    bgcolor:"#F96666",
    describtion:
      "Tarix darslarida a'lo baholar olib sinfdoshlariga o'rnak bo'ldi va maktabda o'tkazilgan 'Yosh tarixchi' musobaqasida g'olib bo'ldi. Barakalla!!!"
    },
    {
      name: "Sadiya Tursunova",
      image: "./image/student2.png",
      subject: "ingliz tili",
      bgcolor:"#FFB72B",
      describtion:
      "Ingliz tilida ravon so'zlay olish va tushinish ko'nikmalari bo'yicha tumanda 1-o'rin sohibi orasida tengsiz !!!"
    },
  {
    name: "Sanobar Kamolova",
    image: "./image/student3.png",
    subject: "kimyo",
    bgcolor:"#5FD068",
    describtion:
    "Kimyo fani bo'yicha 7-'A' sinf o'quvchisi Sanobar Kamolova a'lo natijalar qayd etdi."
  },
  {
    name: "Akmal Sadulloyev",
    image: "./image/student4.png",
    subject: "matematika",
    bgcolor:"#003865",
    describtion:
    "Matematika fani bo'yicha maktabimizning 8-'B' sinf o'quvchisi 2 karra 'Hokim olimpiadasi g'olibi.' "
  },
];

const StudentsOfMonth = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box sx={{ marginTop: "5rem" }}>
      <Box sx={{ backgroundColor: "#6FB2D2", padding:"5rem" }}>
      <Title titleText="Iqtidorli O'quvchilar" color="white"/>
        <Grid container spacing={2}>
          {content.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: matches ? 300 : 345 }}>
                  <CardMedia
                  sx={{ width: "100%", height: matches ? 230 : 250, objectFit:"cover", }}
                    component="img"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent sx={{height: matches ? "200px" : "230px"}}>
                    <Typography gutterBottom variant={matchesSM ? "h6" : "h5"} component="div">
                      {item.name}
                    </Typography>
                    <Box sx={{backgroundColor:`${item.bgcolor}`, display:"flex",maxWidth:"80px", height:"30px",padding:"0 3px", alignItems:"center", justifyContent:"center",marginBottom:"1rem", borderRadius:"4px", letterSpacing:"1px"}}>
                        <Typography variant="p" sx={{textTransform:"uppercase", fontSize:".7rem", color:"white"}}>{item.subject}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.describtion}
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StudentsOfMonth;
