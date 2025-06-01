import Hero from '../components/Hero';
import AboutDetaPower from '../components/AboutDetaPower.jsx';
import MainProduct from '../components/MainProduct.jsx';
import ChooseDetaElec from '../components/ChooseDetaElec.jsx';

const Index = () => {
    return(
        <div className="">
            <div className='w-full xl:min-h-screen'>
                <Hero/>          
            </div>
            
            <div className='mt-10 flex flex-col gap-10'>
                <AboutDetaPower />
                <MainProduct />
                <ChooseDetaElec />
                {/* <BannerFAQ />
                <ContactUs />
                <Testimonial /> */}
            </div>
            
        </div>
    )
}

export default Index;