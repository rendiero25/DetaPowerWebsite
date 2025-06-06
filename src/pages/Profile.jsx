import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

import ProfileBanner from "../assets/profilebanner.jpg";
import ProfileImage1 from "../assets/profileimage1.png"
import ProfileImage2 from "../assets/profileimage2.gif";
import Sea from "../assets/sea.jpg";
import Number1 from "../assets/1.png";
import Number2 from "../assets/2.png";
import Number3 from "../assets/3.png";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Profile = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace('#', ''));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }
    }, [location]);

    return(
        <div className="flex flex-col">
            <div className="h-[9rem] 3xl:h-[20rem] 4xl:h-[30rem]">
                <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
            </div>
            
            <div className="bg-gray-200 h-11 flex flex-row justify-start items-center gap-1 px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                <IoHomeSharp className="size-3"/>
                <a href="/" className="font-normal text-sm">Homepage</a>
                <h5>&gt;</h5>
                <a href="/profile" className="font-normal text-sm">Profile</a>
            </div>

            <div className="flex flex-col gap-12 mt-12">
                <div className="p-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158 flex flex-col justify-between items-center gap-12">
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-10">
                        <img src={ProfileImage1} alt="profile-image1" />

                        <div className="flex flex-col justify-between items-start gap-4">
                            <h3 className="font-medium text-4xl">Fujian Deta Electric Co., Ltd</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta Electric is committed to the research, manufacture and maintenance of 
                                generator sets and power systems, providing comprehensive, professional, 
                                large-scale and systematic power system solutions. Deta Electric has absorbed 
                                the world's advanced generator set design and manufacturing technology and 
                                advanced processing technology advantages. Products cover various diesel, 
                                gasoline, natural gas generator sets, mobile power stations, brushless 
                                alternators, ST&STC alternators, etc., with power ranging from 5Kw to 2000Kw.
                                We mainly cooperate with upstream partners, international brands such as 
                                Perkins, Cummins, Deutz, Yanmar, Kubota, Doosan, Volvo, etc., and reliable 
                                Chinese brands such as Lovol, Ford, SDEC, Yuchai, KOFO, etc. , both have a 
                                strategic partnership with Deta Electric.</p>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row-reverse justify-between items-center gap-4 xl:gap-10">
                        <img src={ProfileImage2} alt="profile-image1" className="xl:w-[35.9rem]"/>

                        <div id="philosophy" className="flex flex-col justify-between items-start gap-4">
                            <h3 className="font-medium text-4xl">Corporate Philosophy</h3>
                            <div className="w-10 border border-primary"></div>
                            <p className="font-normal leading-normal">Deta Electric takes "safety, advanced and environmental protection" as its core 
                                value concept. With its excellent quality and service, Deta Electric has 
                                established a good reputation in the field of generator sets. Deta Electric 
                                has passed ISO9001:2008, CE, VOV certification, and its products are exported 
                                to more than 90 countries and regions in Europe, America, the Middle East, 
                                Africa, Asia, etc. The products are widely used in many fields such as 
                                agriculture, forestry, mining, farms, hospitals, Telecom systems, buildings, 
                                military (military industry), hotels, airports, etc. At the same time, Deta 
                                Electric has established a global service system with global strategic partners.</p>
                        </div>
                        
                    </div>
                </div>

                <div id="culture" className="w-full">
                    <div className="relative flex flex-col justify-center items-center xl:h-[22rem]">
                        <img src={Sea} alt="sea-image" className="w-full h-full object-cover"/>
                        <div className="absolute h-full w-full flex flex-col justify-center items-center gap-6 px-6 sm:px-12 py-8 bg-primary/80">
                            <h3 className="text-white text-4xl font-bold uppercase">Company Culture</h3>
                            <p className="text-center text-white font-normal 3xl:max-w-4xl">Deta Electric takes "safety, 
                                advanced and environmental protection" as its core value concept. With its 
                                excellent quality and service, Deta Electric has established a good reputation 
                                in the field of generator sets.</p>
                        </div>
                    </div>
                </div>

                <div id="development" className="xl:py-6 px-12 xl:px-25 3xl:px-85 4xl:px-158 flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3 className="text-black text-4xl font-bold uppercase">Development Path</h3>
                        <p className="text-center text-blackfont-normal">Deta Electric has passed 
                            ISO9001:2008, CE, VOV certification, and its products are exported to more than 
                            90 countries and regions in Europe, America, the Middle East, Africa, Asia, etc. 
                            At the same time, Deta Electric has established a global service system with 
                            global strategic partners.</p>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-between items-center gap-14">
                        <div className="flex flex-col justify-between items-start gap-6">
                            <img src={Number1} alt="number1-image" className="w-19"/>
                            <h3 className="font-bold text-black text-2xl">1999-2009</h3>
                            <p className="font-normal text-black text-lg">Deta Electric is committed to the research, manufacture and maintenance of 
                                generator sets and power systems, providing comprehensive, professional, 
                                large-scale and systematic power system solutions. Deta Electric has absorbed 
                                the world's advanced generator set design and manufacturing technology and 
                                advanced processing technology advantages.</p>
                        </div>

                        <div className="flex flex-col justify-between items-start gap-6">
                            <img src={Number2} alt="number1-image" className="w-19"/>
                            <h3 className="font-bold text-black text-2xl">2010-2016</h3>
                            <p className="font-normal text-black text-lg">We mainly cooperate with upstream partners, international 
                                brands such as Perkins, Cummins, Deutz, Yanmar, Kubota, Doosan, Volvo, etc., and reliable Chinese 
                                brands such as Lovol, Ford, SDEC, Yuchai, KOFO, etc. , both have a strategic partnership with Deta 
                                Electric</p>
                        </div>

                        <div className="flex flex-col justify-between items-start gap-6">
                            <img src={Number3} alt="number1-image" className="w-19"/>
                            <h3 className="font-bold text-black text-2xl">2017-PRESENT</h3>
                            <p className="font-normal text-black text-lg">Deta Electric takes "safety, 
                                advanced and environmental protection" as its core value concept. With its 
                                excellent quality and service, Deta Electric has established a good 
                                reputation in the field of generator sets. Deta Electric has passed 
                                ISO9001:2008, CE, VOV certification.</p>
                        </div>
                    </div>

                    <div className="hidden xl:flex absolute border-1 border-primary/7 w-full -mt-38 3xl:-mt-31"></div>
                </div>

                <div id="companyvideo" className="bg-gray-100 flex flex-col px-12 xl:px-25 3xl:px-85 4xl:px-158 py-10 xl:py-18 justify-center items-center gap-6 sm:gap-8">
                    <h3 className="text-black text-4xl font-bold uppercase">Corporate Video</h3>

                    <div className=" w-full flex flex-col xl:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col justify-center items-start border-1 border-primary/20">
                            <iframe src={video1} frameborder="0" className="sm:w-[30rem] sm:h-[20rem] 3xl:w-[38rem] 3xl:h-[28rem]"></iframe>

                            <div className="flex flex-col justify-center items-start gap-1 p-4">
                                <h4 className="text-lg font-medium text-black">Company Video</h4>
                                <div className="flex flex-row justify-start items-center gap-1">
                                    <IoTimeOutline className="size-4 text-gray-500"/>
                                    <h5 className="text-sm text-gray-500 font-normal">Time of issue: 2022/01/19</h5>
                                </div>                           
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start border-1 border-primary/20">
                            <iframe src={video2} frameborder="0" className="sm:w-[30rem] sm:h-[20rem] 3xl:w-[38rem] 3xl:h-[28rem]"></iframe>

                            <div className="flex flex-col justify-center items-start gap-1 p-4">
                                <h4 className="text-lg font-medium text-black">Company Video</h4>
                                <div className="flex flex-row justify-start items-center gap-1">
                                    <IoTimeOutline className="size-4 text-gray-500"/>
                                    <h5 className="text-sm text-gray-500 font-normal">Time of issue: 2022/01/19</h5>
                                </div>                           
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            
        </div>
    )
}

export default Profile;