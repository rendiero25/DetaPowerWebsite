import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Banner1 from '../assets/banner1.jpg';
import Banner2 from '../assets/banner2.jpg';

const Hero = () => {
    return(
        <div className='flex-grow'>
            <Swiper 
                navigation={true} 
                modules={[Navigation, Autoplay]} 
                autoplay={{ delay: 5000 }} 
                className='mySwiper'>
                    <SwiperSlide>
                        <img src={Banner1} alt="Banner1-image" className='w-full h-screen object-cover'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Banner2} alt="Banner1-image" className='w-full h-screen object-cover'/>
                    </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Hero;