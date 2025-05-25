import { MdOutlineFactory } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";

const WhyChooseUs = () => {
    return(
        <div className="px-6 sm:px-8 xl:px-32">
            <div className="flex flex-row justify-center items-center gap-4">
                <div className="border-1 border-primary w-18"></div>
                <h5 className="font-medium text-primary text-xl uppercase">Why Choose Us</h5>
                <div className="border-1 border-primary w-18"></div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-12 mt-6">
                <h1 className="font-semibold text-black text-5xl max-w-lg leading-normal text-center">
                    Why Choose Detapower as Generator Supplier?</h1>

                <div className="flex flex-col justify-between items-center gap-12">
                    <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
                        <div className="flex flex-row justify-center items-start gap-4">
                            <div><MdOutlineFactory className="text-primary size-15 self-start"/></div>
                            
                            <div className="flex flex-col justify-center items-start gap-2 mt-5">
                                <h2 className="text-black font-semibold text-xl">Own Factory</h2>
                                <p className="text-black font-light text-xl">Our factory is located in Fu’an City, Fujian Province at the Southeast 
                                    part of China. Our city is called “the capital for small-and-middle 
                                    size motors”.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-start gap-4">
                            <div><FaRegThumbsUp className="text-primary size-12 self-start"/></div>
                            <div className="flex flex-col justify-center items-start gap-2 mt-5">
                                <h2 className="text-black font-semibold text-xl">Extensive Experience</h2>
                                <p className="text-black font-light text-xl">We have 18 years of professional 
                                    experience in the power generation business. Our products are exported to 
                                    nearly 100 countries and regions around the world</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-start gap-4">
                            <div><IoSettingsOutline className="text-primary size-13 self-start"/></div>
                            <div className="flex flex-col justify-center items-start gap-2 mt-5">
                                <h2 className="text-black font-semibold text-xl">Customized Services</h2>
                                <p className="text-black font-light text-xl">We can offer different solutions 
                                    and services to our partners and customized designs and services based on 
                                    different applications and demands.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-1 w-full border-black/50"></div>

                    <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
                        <div className="flex flex-row justify-center items-start gap-4">
                            <div><FaRegCheckCircle className="text-primary size-13 self-start"/></div>
                            
                            <div className="flex flex-col justify-center items-start gap-2 mt-5">
                                <h2 className="text-black font-semibold text-xl">Proven Quality</h2>
                                <p className="text-black font-light text-xl">Complete QC system and 
                                    strict control of the quality of each generator. All products have 
                                    ISO and CE certificates.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-start gap-4">
                            <div><IoTimeOutline className="text-primary size-15 self-start"/></div>
                            <div className="flex flex-col justify-center items-start gap-2 mt-5">
                                <h2 className="text-black font-semibold text-xl">Fast Delivery</h2>
                                <p className="text-black font-light text-xl">We have built up long term 
                                    cooperation with many engine companies, so we can guarantee in-time 
                                    delivery.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-start gap-4">
                            <div><AiOutlineTeam className="text-primary size-14 self-start"/></div>
                            <div className="flex flex-col justify-center items-start gap-2 mt-5">
                                <h2 className="text-black font-semibold text-xl">Professional Team</h2>
                                <p className="text-black font-light text-xl">We gather a strong team of 
                                    experienced engineers, technicians and workers, most of them already 
                                    worked in this field for over 15 years.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default WhyChooseUs;