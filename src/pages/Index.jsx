import TopMenu from '../components/TopMenu.jsx';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutDetaPower from '../components/AboutDetaPower.jsx';
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
                <AboutDetaPower />
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