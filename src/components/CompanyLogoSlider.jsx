import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import company1 from '../assets/company1.jpg';
import company2 from '../assets/company2.jpg';
import company3 from '../assets/company3.jpg';
import company4 from '../assets/company4.jpg';
import company5 from '../assets/company5.jpg';
import company6 from '../assets/company6.jpg';
import company7 from '../assets/company7.jpg';
import company8 from '../assets/company8.jpg';
import company9 from '../assets/company9.jpg';

const CompanyLogoSlider = () => {
    return (
        <div className="px-6 sm:px-8 xl:px-32">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={3}
                breakpoints={{
                    1280: {
                        slidesPerView: 7
                    }
                }}
                className='mySwiper flex flex-row justify-center items-center gap-8'>
                    <SwiperSlide><img src={company1} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company2} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company3} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company4} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company5} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company6} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company7} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company8} alt="company1" className='w-50'/></SwiperSlide>
                    <SwiperSlide><img src={company9} alt="company1" className='w-50'/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CompanyLogoSlider;