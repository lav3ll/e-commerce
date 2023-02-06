import './stylefeed.css'
import IMG1 from '../../assets/slider-image1.jpg'
import IMG2 from '../../assets/slider-image2.jpg'
import IMG3 from '../../assets/slider-image3.jpg'
import IMG4 from '../../assets/slider-image4.jpg'
import IMG5 from '../../assets/slider-image5.jpg'
import IMG6 from '../../assets/slider-image6.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data1 = [
    {
        image:IMG1,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG2,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG3,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG4,
        text:'testing',
        phrase:'even more testing',
    },  
]
const data2 = [
    {
        image:IMG5,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG6,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG1,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG2,
        text:'testing',
        phrase:'even more testing',
    },  
]
const data3 = [
    {
        image:IMG3,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG4,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG5,
        text:'testing',
        phrase:'even more testing',
    },
    {
        image:IMG6,
        text:'testing',
        phrase:'even more testing',
    },  
]





const Stylefeed = () => {
  return (
    <section className='stylefeed__container'>
        <h3 className='stylefeed__title'>STYLE FEED</h3>
        <h5 className='stylefeed__title-text'>Style. Grooming. Inspiration. Advice.</h5>
        <Swiper navigation={true}
        modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} className='stylefeed__container'>


<SwiperSlide className='swiper'>
    <div className="stylefeed__slider">
        {data1.map(({image,text,phrase})=>{
            return(
                <div className="stylefeed__content">
            <img src={image} alt="#" className='stylefeed__image'/>
            <h5>{text}</h5>
            <h3>{phrase}</h3>
            <small>Random Information</small>
        </div>
            )
        })}
        
    </div>
   </SwiperSlide> 
   <SwiperSlide >
    <div className="stylefeed__slider">
        {data2.map(({image,text,phrase})=>{
            return(
                <div className="stylefeed__content">
            <img src={image} alt="#" className='stylefeed__image'/>
            <h5>{text}</h5>
            <h3>{phrase}</h3>
            <small>Random Information</small>
        </div>
            )
        })}
        
    </div>
   </SwiperSlide> 
   <SwiperSlide >
    <div className="stylefeed__slider">
        {data3.map(({image,text,phrase})=>{
            return(
                <div className="stylefeed__content">
            <img src={image} alt="#" className='stylefeed__image'/>
            <h5>{text}</h5>
            <h3>{phrase}</h3>
            <small>Random Information</small>
        </div>
            )
        })}
        
    </div>
   </SwiperSlide> 
  </Swiper>
  <div className="stylefeed__btn">
        <h5>VIEW STYLES AND STUFF</h5>
        </div>
</section>
  )
}


export default Stylefeed