import ImageBanner from '../../public/productImages/shangchaisilentbox-image3.jpg';

const BannerFAQ = () => {
    return(
        <div>
            <div className="w-full mt-10">
                <div className='relative h-[30rem] flex flex-col justify-center items-center'>
                    <img src={ImageBanner} alt="Imagebanner" className='w-full h-full object-cover' />

                    <div className='absolute px-6 py-25 sm:px-8 xl:px-32 bg-black/80 w-full h-full flex flex-col xl:flex-row justify-between items-center'>
                        <div className='flex flex-col justify-between items-start gap-6'>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <div className="border-1 border-yellow-300 w-18"></div>
                                <h5 className="font-medium text-yellow-300 text-xl uppercase">faq</h5>
                            </div>

                            <h1 className="font-semibold text-white text-5xl leading-normal max-w-xl">
                                Here Anyone Can Figure Out The Needed Answer.</h1>

                            <a href="#" className='text-yellow-300 font-medium text-2xl uppercase'>More &gt;&gt;</a>
                        </div>

                        <div className='bg-black w-[30rem] h-[23rem] p-10'>
                            <div className='flex flex-row justify-between items-center p-4'>
                                <h5 className='text-white font-bold text-2xl'>What's your MOQ?</h5>
                                <h5 className='text-white font-normal text-4xl'>+</h5>
                            </div>
                            <div className='border-1 border-gray-500 w-full'></div>
                            <div className='flex flex-row justify-between items-center p-4'>
                                <h5 className='text-white font-bold text-2xl'>What's the delivery time?</h5>
                                <h5 className='text-white font-normal text-4xl'>+</h5>
                            </div>
                            <div className='border-1 border-gray-500 w-full'></div>
                            <div className='flex flex-row justify-between items-center p-4'>
                                <h5 className='text-white font-bold text-2xl'>Where is the loading port?</h5>
                                <h5 className='text-white font-normal text-4xl'>+</h5>
                            </div>
                            <div className='border-1 border-gray-500 w-full'></div>
                            <div className='flex flex-row justify-between items-center p-4'>
                                <h5 className='text-white font-bold text-2xl'>What's the payment term?</h5>
                                <h5 className='text-white font-normal text-4xl'>+</h5>
                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        </div>
    )
}

export default BannerFAQ;