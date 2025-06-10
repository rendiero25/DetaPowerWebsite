import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BuildingBackground from '../assets/building.jpg';

const MainProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="-mt-10 w-full">
            <div 
                className='w-full h-auto' 
                style={{ backgroundImage: `url(${BuildingBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
                <div className='bg-white/95 w-full pt-14 -pb-4 xl:pt-20 xl:pb-6 '>
                    <h1 className='font-bold text-4xl xl:text-5xl text-center uppercase text-primary mb-6 xl:mb-14'>Main Products</h1>
                    
                    {products.length && (
                        <div className='relative px-6 xl:px-25 3xl:px-85 4xl:px-85'>
                            <div className="hidden xl:flex absolute swiper-button-prev text-primary size-8 left-0 top-1/2 -translate-y-1/2 z-30 ml-6 3xl:ml-50" />
                            
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                pagination={{ clickable: true, el: '.swiper-pagination' }}
                                spaceBetween={10}
                                slidesPerView={2}
                                breakpoints={{
                                    1280: { slidesPerView: 4, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } }
                                }}
                                className=''>
                                    
                                    {products[0].categoryProducts.map(product => (
                                        <SwiperSlide key={product.id} className=''>
                                            <div className='bg-secondary mb-17 flex flex-col justify-between items-center gap-6 group hover:border-1 hover:border-primary hover:bg-primary transition-colors duration-500 ease-in-out'>
                                                <img src={product.image} alt="product-image" className='w-full h-full object-cover'/>
                                                <div className='flex flex-col justify-center items-center gap-2 mb-6'>
                                                    <h2 className='font-bold text-black text-xl group-hover:text-white'>{product.name}</h2>
                                                    <button className='cursor-pointer border-1 py-1 px-4 text-normal text-lg rounded-lg group-hover:bg-white group-hover:text-primary'>View More</button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                    {products[1].categoryProducts.map(product => (
                                        <SwiperSlide key={product.id} className=''>
                                            <div className='bg-secondary flex flex-col justify-between items-center gap-6 group hover:border-1 hover:border-primary hover:bg-primary transition-colors duration-500 ease-in-out'>
                                                <img src={product.image[0]} alt="product-image" className='w-full h-full object-cover'/>
                                                <div className='flex flex-col justify-center items-center gap-2 mb-6'>
                                                    <h2 className='font-bold text-black text-xl group-hover:text-white'>{product.name}</h2>
                                                    <button className='cursor-pointer border-1 py-1 px-4 text-normal text-lg rounded-lg group-hover:bg-white group-hover:text-primary'>View More</button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>

                            <div className="hidden xl:flex absolute swiper-button-next text-primary size-8 right-0 top-1/2 -translate-y-1/2 z-30 mr-6 3xl:mr-50" />

                            <div className="xl:hidden swiper-pagination absolute bottom-0 left-1/2 -translate-x-1/2 z-30 self-center pb-6" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MainProduct;