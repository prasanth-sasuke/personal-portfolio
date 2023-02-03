import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro"
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import './App.css';
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './context'
import { useContext } from "react";
import Grid from '@mui/material/Grid';
function App() { 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Grid container  className="App"
    style={{
      background : darkMode? 'black':'',
      color : darkMode? 'white': '',
    }}>
      <Grid item xs={12} lg={12} sm={12}>
      <Navbar/>
      <Intro/> 
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </Grid>
    </Grid>
  );
}

export default App;
