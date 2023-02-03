import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Card from '../Card/Card'
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from './resume.pdf'
import { themeContext } from '../../context'
import react from 'react'
import {motion} from 'framer-motion'
const Services = () => {
     // Animation
     const transition = {duration : 2 , type : 'spring'}
     //Theme
    const theme = react.useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="Services" id='Services'>
        {/* Left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '' }}>
                My Awesome
            </span>
            <span>
                Services
            </span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                <br />
                . Maxime praesentium magni excepturi deleniti.
            </span>
            <a href={Resume} download> 
            <button className="button s-button" >Download CV</button>
            </a>
            <div className="blur s-blur1" ></div>
        </div>
        {/*.................................... Card folder ........................................*/}

        {/* Right side */}
        <div className="cards">
            {/* First cards*/}
             <motion.div 
             initial={{left:'25rem'}}
            whileInView={{left:'14rem'}}
            transition={transition}
             style={{left: '14rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Designer'}
                details={" Figama, Photoshop , Adope photoShop , Adope aftereffect"}
                />
             </motion.div>
             {/* Second cards */}
             <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}style={{top: '12rem',left:'-4rem'}}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                details={" Html, Css ,JavaScripts,React Js,Node js "}
                />
             </motion.div> 
             {/* Third cards */}
             <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition} style={{top:'19rem', left:'12rem'}}>
                <Card
                emoji={Humble}
                heading={'Python'}
                details={" Data science, Machine Learning , artificial intelligence "}
                />
             </motion.div>
             <div className="blur s-blur2" > </div>

        </div>
    </div>
  )
}

export default Services