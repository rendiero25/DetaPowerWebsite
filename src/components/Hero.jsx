import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Banner1 from '../assets/banner1.jpg';
import Banner2 from '../assets/banner2.jpg';
import Banner3 from '../assets/banner3.jpg';
import Banner4 from '../assets/banner4.jpg';
import BannerDynamo from '../assets/bannerdynamo.jpg';
import BannerOpengeneratorset from '../assets/banneropengeneratorset.jpg';
import BannerSilentgeneratorset from '../assets/bannersilentgeneratorset.jpg';
import BannerMobiletrailer from '../assets/bannermobiletrailer.jpg';
import BannerControlsystem from '../assets/bannercontrolsystem.jpg';


const Hero = () => {
    return(
        <div className='flex-grow'>
            <div className='' >
                
            </div>

            <Swiper 
                navigation={true} 
                modules={[Navigation, Autoplay]} 
                autoplay={{ delay: 5000 }} 
                className='mySwiper'>
                    <SwiperSlide className='relative flex flex-col items-center justify-center'>
                        <div className="absolute z-20 w-full h-full flex items-center justify-center pointer-events-none">
                            <Swiper 
                                modules={[Autoplay]}
                                autoplay={{ delay: 6000 }}
                                className='inBanner1 hidden xl:flex flex-row w-full h-[10rem] mt-[20rem] xl:px-25 2xl:px-65 3xl:px-[30rem] pointer-events-auto'>
                                    <SwiperSlide>
                                        <img src={BannerDynamo} alt="BannerDynamo-image" className='w-full h-full object-cover cursor-pointer'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={BannerOpengeneratorset} alt="BannerOpengeneratorset-image" className='w-full h-full object-cover cursor-pointer'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={BannerSilentgeneratorset} alt="BannerSilentgeneratorset-image" className='w-full h-full object-cover cursor-pointer'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={BannerMobiletrailer} alt="BannerMobiletrailer-image" className='w-full h-full object-cover cursor-pointer'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={BannerControlsystem} alt="BannerControlsystem-image" className='w-full h-full object-cover cursor-pointer'/>      
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                        <img src={Banner1} alt="Banner1-image" className='w-full xl:h-screen object-cover'/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={Banner2} alt="Banner1-image" className='w-full xl:h-screen object-cover'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Banner3} alt="Banner1-image" className='w-full xl:h-screen object-cover'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Banner4} alt="Banner1-image" className='w-full xl:h-screen object-cover'/>
                    </SwiperSlide>
            </Swiper>

            
        </div>
    )
}

export default Hero;