import { Box } from "@mui/material";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/ContactUS/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SideInfo from "./Components/SideInfo/SideInfo";
// import StudentsOfMonth from "./Components/StudentsOfMonth/StudentsOfMonth";


function App() {
 
  return (
    <Box style={{background:"#f5f5fc"}}>
    <Navbar /> 
         <Banner />
         <SideInfo/> 
         {/* <StudentsOfMonth /> */}
         <Contact />
         <Footer />
    </Box>
  )
}

export default App;
