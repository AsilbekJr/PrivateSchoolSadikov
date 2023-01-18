import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Title from "../Title";
import { TitleSection } from "./SideInfoStyle";
import { useTheme } from '@mui/material/styles';

const content = [
  {
    title:"Tajribali ustozlar",
    image:"./image/icon/teacher.png",
    bgcolor:"#663399",
    describtion:"Bizda ta'lim beradigan ustozlar  bir qancha mahalliy va xorijiy diplom va sertifikatlar sohibidir. "
  },
  {
    title:"Zamonaviy o'quv dasturlari",
    image:"./image/icon/book.png",
    bgcolor:"#6ECB63",
    describtion:"Dars jarayoni to'liq zamonaviy dasturlar yordamida o'tiladi va bugungi kun talablariga to'la mos keladi. "
  },
  {
    title:"Kreativ fikrlash",
    image:"./image/icon/creative.png",
    bgcolor:"#F55C47",
    describtion:"O'quvchilarda yaratuvchanlik va tanqidiy fikrlash shakillantiriladi. Darslarda muammoli vaziyatlar tahlil qilinadi."
  },
  {
    title:"Sertifikat",
    image:"./image/icon/certificate.png",
    bgcolor:"#187498",
    describtion:"Barcha bitiruvchilarga sertifikat va diplomlar topshiriladi. "
  },
]



const SideInfo = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Rubik", "cursive"].join(","),
    },
  });
  const themes = useTheme();

const matches = useMediaQuery(themes.breakpoints.down('sm'));
  return (
    <>
      <ThemeProvider theme ={theme}>
        <Container>
          <TitleSection>
            <Title titleText="Nima uchun Sadikov School?" />
            <Grid container spacing={2}>
              {
                content.map((item) => (
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345, minHeight:290 }}>
                  <Box
                    sx={{
                      borderRadius: "5px",
                      width: "45px",
                      margin: "16px",
                      height: "45px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: `${item.bgcolor}`,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "35px", height: "35px", objectFit: "cover" }}
                      image={item.image}
                      alt="green iguana"
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant={matches ? "h6" : "h5"} component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="text.secondary" sx={{fontSize:matches ? ".8rem" : "1rem", lineHeight:"19px"}}>
                     {item.describtion}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

                ))
              }
            </Grid>
          </TitleSection>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SideInfo;
