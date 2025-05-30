import Hero from '../components/Hero';
import ProductRange from '../components/ProductRange';
import CompanyLogoSlider from '../components/CompanyLogoSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import BannerFAQ from '../components/BannerFAQ';
import ContactUs from '../components/ContactUs';
import Testimonial from '../components/Testimonial';

const Index = () => {
    return(
        <div className="">
            <div className='w-full xl:min-h-screen'>
                <Hero/>
            </div>
            
            <div className='mt-10 flex flex-col gap-10'>
                <ProductRange />
                <CompanyLogoSlider />
                <WhyChooseUs />
                <BannerFAQ />
                <ContactUs />
                <Testimonial />
            </div>
            
        </div>
    )
}

export default Index;