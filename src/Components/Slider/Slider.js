// import React, { useState } from 'react';
// import dataSlider from '../../dataSlider/dataSlider';
// import BtnSlider from './btnSlider';
// import "./Slider.css";



// export default function Slider() {
//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if (slideIndex !== dataSlider.length) {
//             setSlideIndex(slideIndex + 1)
//         }
//         else if (slideIndex === dataSlider.length) {
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if (slideIndex !== 1) {
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1) {
//             setSlideIndex(dataSlider.length)
//         }

//     }
//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                         key={obj.id}
//                         className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img
//                             src={process.env.PUBLIC_URL + `/Images/Img${index + 1}.jpg`}
//                         />
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"} />
//         </div>
//     )
// }
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Navigation, Pagination, Autoplay } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay';
  import Texas from "../../Images/Texas.jpg"
  import Juiceburst from "../../Images/Juice-Burst.jpg"
  import Burgerban from "../../Images/Burger-Ban.jpg"
  import J20 from "../../Images/j20.jpg"
 

 function createSlde(IMG) {
    return (
        <SwiperSlide>
            <img src={IMG} alt="" />
        </SwiperSlide>
    )
 }

 export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={true}
            pagination={{ clickable: true }}
        >
            {createSlde(Texas)}
            {createSlde(Juiceburst)}
            {createSlde(Burgerban)}
            {createSlde(J20)}
        </Swiper>
    );
};