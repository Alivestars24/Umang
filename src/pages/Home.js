import React from "react";
import Header from "../components/Header";
import AboutComponent from "../components/AboutComponent";
import Stats from '../components/Stats'
import Services from '../components/Services';
import Slider from '../components/Slider'

const Home=() =>{
    return(
       <div>
           <Header/>
           <AboutComponent/>
           <Stats/>
           <Services/>
           <Slider/>
       </div>
    );
}

export default Home;