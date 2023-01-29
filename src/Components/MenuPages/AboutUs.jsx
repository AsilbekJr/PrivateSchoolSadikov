import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Title from "./../Title";
import { Telegram } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "react-animated-slider/build/horizontal.css";
const AboutUs = () => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down("sm"));
  const data = [
    { name: "Hilola Sohibova", img:"https://pngimg.com/d/teacher_PNG84.png", description: "Matematika fani o'qituvchisi" },
    { name: "Davron Navro'zov", img:"https://www.pngall.com/wp-content/uploads/4/Male-Teacher-PNG-Picture.png", description: "Tarix fani o'qituvchisi" },
    { name: "Sirojiddin Farhodov", img:"https://www.pngall.com/wp-content/uploads/4/Male-Teacher-Transparent.png", description: "Ingliz tili fani o'qituvchisi" },
    { name: "Faruh Shavkatov", img:"https://pngimg.com/uploads/teacher/teacher_PNG20.png", description: "Shahmat to'garagi ustozi" },
    { name: "Aziza Esanova", img:"https://pngimg.com/d/teacher_PNG48.png", description: "Biologiya fani o'qituvchisi" },
    { name: "Madina Hasanova", img:"https://pngimg.com/uploads/teacher/teacher_PNG73.png", description: "Rus tili fani o'qituvchisi" },
    
  ];
  return (
    <Box
      sx={{ margin: "5rem 0 6rem 0", background: "#fff", minHeight: "100vh" }}
    >
      <Title titleText="Biz haqimizda" />
      <Grid container spacing={6} sx={{ minHeight: "100%" }}>
        <Grid item xs={12} md={4} sx={{ minHeight: "100%", marginTop: "6rem" }}>
          <Box
            sx={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#0bb7ca",
            }}
          >
            <Box
              sx={{
                minHeight: "100%",
                border: "2px solid #0bb7ca",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: matches ? "150px" : "200px",
                height: matches ? "150px" : "200px",
                background: "#f8f8f8",
                padding: "15px",
                borderRadius: "50%",
              }}
            >
              <img
                src="./image/logo.png"
                style={{
                  width: matches ? "70px" : "100px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box
              sx={{
                minHeight: "100%",
                color: "white",
                textAlign: "center",
                padding: "20px",
                height: "100%",
                marginTop: matches ? "-3rem" : "-5rem",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: matches ? "1.7rem" : "2.5rem",
                  fontWeight: "700",
                  paddingBottom: "3rem",
                }}
              >
                Sadikov Private School
              </Typography>
              <Typography variant="p" sx={{ marginTop: "30px" }}>
                Bizning maktabimiz sizlarga sinovdan o'tgan ta'limni takilf
                etadi. Biz sifatli bilim berish orqali hayotda o'z o'rningizni
                topishda yordam beramiz.
              </Typography>
            </Box>
            <Box
              sx={{
                height: "300px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <IconButton>
                <Telegram style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Instagram style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Facebook style={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} sx={{ marginTop: "6rem", paddingRight: matches ? "0rem" : "2rem"  }}>
        <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper" style={{ "--swiper-navigation-color": "#000", "--swiper-pagination-color": "#000", width:"100%", height:"600px"}}>
        {
          data.map((item) => (

            <SwiperSlide style={{background:`linear-gradient(99deg, rgba(44,122,215,0.1242471988795518) 62%, rgba(44,122,215, 1.9311922268907563) 100%),url(${item.img}) no-repeat left center/contain`}}>
          <Box sx={{width:  matches ? "100%"  :"90%", height: matches ? "100%" : "90%", display:"flex", flexDirection:"column", alignItems: matches ? "center" : "end", justifyContent: matches ? "end" : "center"}}> 
        <Box sx={{ textAlign: matches ? "center" : "", padding: matches ? "15px" : "0", width: matches ? "100%" : "180px", backgroundColor: matches ? "#0bb7ca" : ""}}>
       <Typography sx={{ color:"#fff", fontWeight: matches ? "500" : "700"}} variant={matches ? "h5" : "h3"}>{item.name}</Typography>
       <Typography sx={{fontSize: matches ? "1rem" : "1.5rem", fontWeight: matches ? "400" : "600", color:'#0A2647'}} variant="p">{item.description}</Typography>
        </Box>
        </Box>
        </SwiperSlide>

          ))
        }
      </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
