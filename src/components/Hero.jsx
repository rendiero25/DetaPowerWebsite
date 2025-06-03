import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <div className=''>
            <Swiper 
                navigation={false} 
                modules={[Autoplay]} 
                autoplay={{ delay: 5000 }} 
                className='mySwiper h-full'
                onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            >
                <SwiperSlide className=''>
                    <div className='relative w-full h-[15rem] sm:h-[30rem] xl:h-screen flex flex-col items-center justify-between'>
                        <img src={Banner1} alt="Banner1-image" className='w-full h-full xl:h-screen object-cover'/>
                        
                        <div className="flex absolute z-20 w-full h-full items-end justify-center xl:px-25 3xl:px-65 4xl:px-85">
                            <Swiper 
                                modules={[Autoplay]}
                                autoplay={{ delay: 6000 }}
                                direction='vertical'
                                className='flex flex-row w-full h-15 sm:h-26 xl:h-[14rem] 4xl:h-[20rem] 5xl:h-[35rem] '>
                                    <SwiperSlide>
                                        <div className={`swipertoup flex flex-row justify-between items-center transition-all opacity-100 duration-700 ${activeIndex === 0 ? 'animate-slideup' : ''}`}>
                                            <img src={BannerDynamo} alt="BannerDynamo-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full cursor-pointer border-2 border-primary'/>
                                            <img src={BannerOpengeneratorset} alt="BannerOpengeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerSilentgeneratorset} alt="BannerSilentgeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerMobiletrailer} alt="BannerMobiletrailer-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerControlsystem} alt="BannerControlsystem-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=''>
                    <div className='relative w-full h-[15rem] sm:h-[30rem] xl:h-screen flex flex-col items-center justify-between'>
                        <img src={Banner2} alt="Banner2-image" className='w-full h-full xl:h-screen object-cover'/>
                        
                        <div className="flex absolute z-20 w-full h-full items-end justify-center xl:px-25 3xl:px-65 4xl:px-85">
                            <Swiper 
                                modules={[Autoplay]}
                                autoplay={{ delay: 6000 }}
                                direction='vertical'
                                className='flex flex-row w-full h-15 sm:h-26 xl:h-[14rem] 4xl:h-[20rem] 5xl:h-[35rem] '>
                                    <SwiperSlide>
                                        <div className={`swipertoup flex flex-row justify-between items-center transition-all opacity-100 duration-700 ${activeIndex === 1 ? 'animate-slideup' : ''}`}>
                                            <img src={BannerDynamo} alt="BannerDynamo-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full cursor-pointer border-2 border-primary'/>
                                            <img src={BannerOpengeneratorset} alt="BannerOpengeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerSilentgeneratorset} alt="BannerSilentgeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerMobiletrailer} alt="BannerMobiletrailer-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerControlsystem} alt="BannerControlsystem-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className=''>
                    <div className='relative w-full h-[15rem] sm:h-[30rem] xl:h-screen flex flex-col items-center justify-between'>
                        <img src={Banner3} alt="Banner3-image" className='w-full h-full xl:h-screen object-cover'/>
                        
                        <div className="flex absolute z-20 w-full h-full items-end justify-center xl:px-25 3xl:px-65 4xl:px-85">
                            <Swiper 
                                modules={[Autoplay]}
                                autoplay={{ delay: 6000 }}
                                direction='vertical'
                                className='flex flex-row w-full h-15 sm:h-26 xl:h-[14rem] 4xl:h-[20rem] 5xl:h-[35rem] '>
                                    <SwiperSlide>
                                        <div className={`swipertoup flex flex-row justify-between items-center transition-all opacity-100 duration-700 ${activeIndex === 2 ? 'animate-slideup' : ''}`}>
                                            <img src={BannerDynamo} alt="BannerDynamo-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full cursor-pointer border-2 border-primary'/>
                                            <img src={BannerOpengeneratorset} alt="BannerOpengeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerSilentgeneratorset} alt="BannerSilentgeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerMobiletrailer} alt="BannerMobiletrailer-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerControlsystem} alt="BannerControlsystem-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className=''>
                    <div className='relative w-full h-[15rem] sm:h-[30rem] xl:h-screen flex flex-col items-center justify-between'>
                        <img src={Banner4} alt="Banner4-image" className='w-full h-full xl:h-screen object-cover'/>
                        
                        <div className="flex absolute z-20 w-full h-full items-end justify-center xl:px-25 3xl:px-65 4xl:px-85">
                            <Swiper 
                                modules={[Autoplay]}
                                autoplay={{ delay: 6000 }}
                                direction='vertical'
                                className='flex flex-row w-full h-15 sm:h-26 xl:h-[14rem] 4xl:h-[20rem] 5xl:h-[35rem] '>
                                    <SwiperSlide>
                                        <div className={`swipertoup flex flex-row justify-between items-center transition-all opacity-100 duration-700 ${activeIndex === 3 ? 'animate-slideup' : ''}`}>
                                            <img src={BannerDynamo} alt="BannerDynamo-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full cursor-pointer border-2 border-primary'/>
                                            <img src={BannerOpengeneratorset} alt="BannerOpengeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerSilentgeneratorset} alt="BannerSilentgeneratorset-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerMobiletrailer} alt="BannerMobiletrailer-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                            <img src={BannerControlsystem} alt="BannerControlsystem-image" className='w-20 sm:w-33 xl:w-[13.7rem] 2xl:w-[14.2rem] 3xl:w-[20rem] 4xl:w-[30rem] 5xl:w-[45rem] h-full object-cover cursor-pointer border-2 border-primary'/>
                                        </div>
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero;