import { motion } from 'framer-motion';

import Breadcrumbs from "../components/Breadcrumbs";

import ProfileBanner from "../assets/profilebanner.jpg";
import ApplicationImage1 from "../assets/appimage1.jpg";
import ApplicationImage2 from "../assets/appimage2.jpg";
import ApplicationImage3 from "../assets/appimage3.jpg";
import ApplicationImage4 from "../assets/appimage4.jpg";
import ApplicationImage5 from "../assets/appimage5.jpg";
import ApplicationImage6 from "../assets/appimage6.jpg";
import ApplicationImage7 from "../assets/appimage7.jpg";
import ApplicationImage8 from "../assets/appimage8.jpg";

const Application = () => {
    return(
        <div className="flex flex-col xl:pb-16">
            <div className="h-[9rem] 3xl:h-[20rem] 4xl:h-[30rem]">
                <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
            </div>

            <Breadcrumbs linktopage={"/application"} pagename={"Application"}/>

            <div className="flex flex-col gap-12 mt-12">
                <div className="flex flex-col justify-center items-center gap-6 px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                    <h2 className="font-bold text-2xl xl:text-3xl xl:max-w-5xl text-black uppercase xl:text-center">DETA ELECTRIC IS COMMITTED TO THE RESEARCH, MANUFACTURE AND MAINTENANCE OF 
                        GENERATOR SETS AND POWER SYSTEMS</h2>
                    <p>Provide comprehensive, professional, large-scale and systematic power system solutions</p>
                </div>

                <div className="-mt-8 p-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158 flex flex-col justify-between items-center gap-12">
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage1} alt="profile-image1" className='w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101'/>
                        
                        <div className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Communications Industry</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">It is specially designed for communication base 
                                stations and conforms to the relative access standards of base stations. Equipped with 
                                self-protection system, including self-starting, self-switching and self-stopping 
                                characteristics.</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row-reverse justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage2} alt="profile-image1" className="xl:w-[35.9rem] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Data Center</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta is experienced and professional in data 
                                center power supply. A power solution will be designed for you based on your 
                                specifications, time and budget. Meet the control mechanism and redundancy requirements 
                                of the data center..</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage3} alt="profile-image1" className="xl:w-[35.9rem] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Banking</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta's reliable and stable power supply system 
                                can continuously and stably supply a large number of electronic devices used in the 
                                financing field. With redundant protection, the power supply is completely worry-free.
                                Low noise, low emissions, anti-jamming and instant start.</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row-reverse justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage4} alt="profile-image1" className="xl:w-[35.9rem] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Mine</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta provides special power solutions for unique 
                                areas of complex environments (eg mining, smelting). Normal operation at an altitude of 
                                3000 meters at temperatures from -150°C to +4°C. The mean interval between failures is 
                                not less than 2000 hours.</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage5} alt="profile-image1" className="xl:w-[35.9rem] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Medical Insurance</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta's advanced power solutions are ideal for 
                                power supplies in the medical field. Features such as long-term stable operation and 
                                instant start-up meet the power needs of the healthcare industry.</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row-reverse justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage6} alt="profile-image1" className="xl:w-[35.9rem] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Lease And Build</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta's building power solutions are especially 
                                aimed at high-rise residential buildings, hotels, restaurants, shopping malls, post 
                                offices, schools and other buildings to meet the power requirements for stable 
                                operation.</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage7} alt="profile-image1" className="xl:w-[35.9rem] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Manufacturing, Retail, Leisure</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta Universal Power Solutions has provided 
                                power to multiple industries. Fully connected to the computer, with automation, no 
                                need for guards. The control system is equipped with AMF function, which can provide 
                                system power immediately when the main power is turned off.</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row-reverse justify-between items-center xl:items-start gap-4 xl:gap-10 group hover:bg-gray-100">
                        <img src={ApplicationImage8} alt="profile-image1" className="xl:w-[35.9rem] w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-101"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4 xl:p-6">
                            <h3 className="font-medium text-4xl">Transportation</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta Infrastructure Power Solutions secure 
                                facilities at airports and train stations. Provides an ideal environment for employees 
                                to work and ride. Reliable, timed, economical and all day powered.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application;