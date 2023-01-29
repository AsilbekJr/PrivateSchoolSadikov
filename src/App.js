import Subjects from "./Components/MenuPages/Subjects";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import Circle from "./Components/MenuPages/Circle";
import Result from "./Components/MenuPages/Result";
import Login from "./Components/MenuPages/Login";
import PrivateRoute from "./Components/MenuPages/PrivateRoute";
import NotFound from "./Components/NotFound";
import StudentsOfMonth from "./Components/StudentsOfMonth/StudentsOfMonth";
import AboutUs from './Components/MenuPages/AboutUs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fanlar" element={<Subjects />} />
          <Route path="togaraklar" element={<Circle />} />
          <Route path="login" element={<Login/>} />
          <Route element={<PrivateRoute />}> 
            <Route path="natijalar" element={<Result/>} />
          </Route>
          <Route path="yutuqlar" element={<StudentsOfMonth />}/>
          <Route path="biz" element={<AboutUs />}/>
          <Route path="*" element={ <NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* <StudentsOfMonth /> */
}
