import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SideBar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../context'
import react from 'react'
const Portfolio = () => {
    const theme = react.useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="Portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Project</span>
            <span>Portfolio</span>

            {/* Slider */}
            <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='Portfolio-slider'
            >
                <SwiperSlide>
                    <img src={SideBar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio