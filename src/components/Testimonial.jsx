import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return(
        <div className="px-6 sm:px-8 xl:px-32 mt-10">
            <div className="flex flex-col justify-center items-start">
                <div className="flex flex-row justify-center items-center gap-4">
                    <div className="border-1 border-primary w-18"></div>
                    <h5 className="font-medium text-primary text-xl uppercase">Feedback</h5>
                </div>

                <div className="flex flex-col justify-center items-center gap-12 mt-6">
                    <h1 className="font-semibold text-black text-5xl leading-normal text-center">
                        What Our Client Say About Us</h1>
                </div>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    1280: {
                        slidesPerView: 2
                    }
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination
                className="mt-8">
                    
                <SwiperSlide>
                    <div className='w-[25rem] h-auto flex flex-col justify-center items-start gap-4 p-6'>
                        <p className='text-lg font-medium text-black italic'>"We’ve been using Detapower systems for over a year now in our factory, 
                            and the performance has been rock solid. Reliable, efficient, and built 
                            for demanding environments. Definitely a smart investment."</p>
                        <h4 className='font-bold text-lg text-black'>Mr. Jonathan Lee, Operations Manager at PT. Artha Metalindo</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[25rem] h-auto flex flex-col justify-center items-start gap-4 p-6'>
                        <p className='text-lg font-medium text-black italic'>"What impressed us most 
                            about Detapower is the consistency and quality of their heavy-duty power 
                            equipment. Installation was smooth, and the after-sales service has been 
                            excellent."</p>
                        <h4 className='font-bold text-lg text-black'>Ayu Prameswari, Procurement Lead, Sinarmas Construction</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[25rem] h-auto flex flex-col justify-center items-start gap-4 p-6'>
                        <p className='text-lg font-medium text-black italic'>"We integrated Detapower’s 
                            voltage stabilizers into our data center last year. They’ve drastically reduced 
                            downtime and improved the overall power quality. Couldn’t ask for better engineering."</p>
                        <h4 className='font-bold text-lg text-black'>Denny Putra, IT Infrastructure Engineer</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[25rem] h-auto flex flex-col justify-center items-start gap-4 p-6'>
                        <p className='text-lg font-medium text-black italic'>"Detapower provides industrial-grade 
                            solutions that really live up to their reputation. Their gensets are fuel-efficient, 
                            easy to maintain, and perfect for remote construction sites."</p>
                        <h4 className='font-bold text-lg text-black'>Hendra Wijaya, Project Manager, Borneo Development Group</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[25rem] h-auto flex flex-col justify-center items-start gap-4 p-6'>
                        <p className='text-lg font-medium text-black italic'>"We’ve tested multiple power solutions over 
                            the years, and Detapower stands out. The durability under extreme conditions is unmatched. 
                            Highly recommended for any industrial application."</p>
                        <h4 className='font-bold text-lg text-black'>Sofia Tan, Senior Engineer, PT. Mega Energi</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial;