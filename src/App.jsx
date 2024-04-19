import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Stats from "./components/Stats";
import Services from "./components/Services";
import PopularCoursesSlider from "./components/PopularCoursesSlider";
import Course from './pages/Course'
import SingleCourse from './pages/SingleCourse'
import Categories from "./components/Categories";
import SingleCategory from './pages/SingleCategory'
import MyCourses from './pages/MyCourses'
import MyCoursePage from './pages/MyCoursePage'
import Oppurtunities from "./pages/Oppurtunities";
import Events from './pages/Events'
import Resources from "./pages/Resources";


function App() {
  console.log("bdh");
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Routes>
              <Route path="/" element ={<Home/>}/>        
              <Route path="/register" element = {<Register/>}/>          
              <Route path="/login" element = {<Login/>}/>              
              <Route path="/impact" element = {<Stats/>}/>        
              <Route path="/services" element = {<Services/>}/>        
              <Route path="/popular" element = {<PopularCoursesSlider/>}/>        
              <Route path="/courses" element = {<Course/>}/>
              <Route path="/courses/:id" element = {<SingleCourse/>}/>
              <Route path="/category" element = {<Categories/>}/>
              <Route path="/category/:id" element = {<SingleCategory/>}/>   
              <Route path="/oppurtunity" element = {<Oppurtunities/>}/>   
              <Route path="/events" element = {<Events/>}/>   
              <Route path="/resources" element = {<Resources/>}/>   
              <Route path="/mycourses" element = {<MyCourses/>}/>
              <Route path="/mycourses/:id" element = {<MyCoursePage/>}/>
      </Routes>   
      <Footer/>    
    </div>
  );
}

export default App;
