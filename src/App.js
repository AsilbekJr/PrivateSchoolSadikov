import { Box } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Subjects from "./Components/MenuPages/Subjects";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import Circle from "./Components/MenuPages/Circle";
// import StudentsOfMonth from "./Components/StudentsOfMonth/StudentsOfMonth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fanlar" element={<Subjects />} />
          <Route path="togaraklar" element={<Circle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* <StudentsOfMonth /> */
}
