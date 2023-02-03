import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy1.png'
import Thumup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GlassesImoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../context'
import react from 'react'
import {motion} from 'framer-motion'
const intro = () => {
    // Animation
    const transition = {duration : 2 , type : 'spring'}
    //Theme
    const theme = react.useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
                    <span>Lakshmi Prasanth</span>
                    <span>Junior-web developer with 7-month of experience in building web applications. I had skill of programming languages, including JavaScript, Python, and C++, and has some experience as ML,Data science,React and Node.js.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="www.google.com"><img src={Github} alt="" /></a>
                    <a href="www.google.com"><img src={LinkedIn} alt="" /></a>
                    <a href="www.google.com"><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" width={200} height={406} />
                <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={GlassesImoji} alt="" />
                <motion.div 
                    initial={{top:'-4%',left:'74%'}}
                    whileInView={{left:'68%'}}
                    transition={transition}
                style={{ top: '-4%', left: '68%' }}
                className='floating-div'>
                    {/* Floating  */}
                    <FloatingDiv image={Crown} txt1='Junior' txt2='Developer' />
                </motion.div>
                <motion.div 
                    initial={{left:'9rem',top:'18rem'}}
                    whileInView={{left:'0rem'}}
                    transition={transition}
                style={{ top: '16rem', left: '0rem' }}
                className='floating-div'>
                    <FloatingDiv image={Thumup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* blur dics */}
                <div className="blur" style={{ backround: "rgb(238 210 255" }}>
                </div>
                <div className="blur bured" ></div>
            </div>
        </div>
    )
}

export default intro