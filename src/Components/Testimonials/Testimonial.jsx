import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
const Testimonial = () => {
    const clients = [
        {
            img:profile1,
            review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
            img:profile2,
            review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
            img:profile3,
            review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        },
        {
            img:profile4,
            review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        }

    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)"}}> </div>
            <div className="blur t-blur2" style={{ background: "skyblue"}}> </div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((clients,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={clients.img} alt="" />
                        <span>{clients.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial