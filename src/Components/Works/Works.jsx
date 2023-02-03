import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import FaceBook from '../../img/Facebook.png'
import { themeContext } from '../../context'
import react from 'react'
import { motion } from 'framer-motion'

const Works = () => {
    // Animation
    // const transition = { duration: 2, type: 'spring' }
    //Theme
    const theme = react.useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="Works">
            {/* Left side */}
            <div className="awesome" >
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
                <button className="button s-button" >Download CV</button>
                <div className="blur s-blur1" ></div>
            </div>
            {/* Right side */}
            <div className="W-right">
                <motion.div 
                initial={{ rotate:45}}
                whileInView={{rotate: 0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3.5 , type: 'spring'}}
                className="W-MainCircle">
                    <div className="W-SecCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="W-SecCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="W-SecCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="W-SecCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="W-SecCircle">
                        <img src={FaceBook} alt="" />
                    </div>
                </motion.div>
                {/* Background Circles */}
                <div className="W-BackCircle BlueCircle"></div>
                <div className="W-BackCircle YellowCircle"></div>
            </div>
        </div>
    )
}

export default Works