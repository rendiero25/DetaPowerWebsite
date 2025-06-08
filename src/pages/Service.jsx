import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs";

import ProfileBanner from "../assets/profilebanner.jpg";
import CommingSoonImage from "../assets/comingsoon.png";

const Service = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace('#', ''));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }

        // Buka tab sesuai hash
        if (location.hash === '#service') {
            setTechnicalSupport(false);
            setService(true);
            setAfterSalesSystem(false);
            setManual(false);
            setOperationalVideo(false);
        } else if (location.hash === '#aftersalessystem') {
            setTechnicalSupport(false);
            setService(false);
            setAfterSalesSystem(true);
            setManual(false);
            setOperationalVideo(false);
        } else if (location.hash === '#manual') {
            setTechnicalSupport(false);
            setService(false);
            setAfterSalesSystem(false);
            setManual(true);
            setOperationalVideo(false);
        } else if (location.hash === '#operationvideo') {
            setTechnicalSupport(false);
            setService(false);
            setAfterSalesSystem(false);
            setManual(false);
            setOperationalVideo(true);
        } else {
            // Default: buka Technical Support
            setTechnicalSupport(true);
            setService(false);
            setAfterSalesSystem(false);
            setManual(false);
            setOperationalVideo(false);
        }
    }, [location]);

    let [opentechnicalsupport, setTechnicalSupport] = useState(false);
    let [openservice, setService] = useState(false);
    let [openaftersalessystem, setAfterSalesSystem] = useState(false);
    let [openmanual, setManual] = useState(false);
    let [openoperationvideo, setOperationalVideo] = useState(false);

    const isActiveTechSupport = () => {
        setTechnicalSupport(true)
        setService(false)
        setAfterSalesSystem(false)
        setManual(false)
        setOperationalVideo(false)
    };

    const isActiveService = () => {
        setTechnicalSupport(false)
        setService(true)
        setAfterSalesSystem(false)
        setManual(false)
        setOperationalVideo(false)
    };

    const isActiveAfterSalesSystem = () => {
        setTechnicalSupport(false)
        setService(false)
        setAfterSalesSystem(true)
        setManual(false)
        setOperationalVideo(false)
    };

    const isActiveManual = () => {
        setTechnicalSupport(false)
        setService(false)
        setAfterSalesSystem(false)
        setManual(true)
        setOperationalVideo(false)
    };

    const isActiveOperationalVideo = () => {
        setTechnicalSupport(false)
        setService(false)
        setAfterSalesSystem(false)
        setManual(false)
        setOperationalVideo(true)
    };

    return(
        <div className="flex flex-col xl:pb-16">
            <div className="h-[9rem] 3xl:h-[22rem] 4xl:h-[30rem]">
                <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-wrap justify-center items-center py-5 gap-6 w-full bg-[#4D5154]">
                <h3 className="text-gray-300 font-normal text-md cursor-pointer hover:text-white" onClick={isActiveTechSupport}>Technical Support</h3>
                <div className="text-white hidden xl:flex">|</div>
                <h3 className=" text-gray-300 font-normal text-md active:font-bold cursor-pointer" onClick={isActiveService}>Service</h3>
                <div className="text-white hidden xl:flex">|</div>
                <h3 className=" text-gray-300 font-normal text-md active:font-bold cursor-pointer" onClick={isActiveAfterSalesSystem}>After-Sales System</h3>
                <div className="text-white hidden xl:flex">|</div>
                <h3 className=" text-gray-300 font-normal text-md active:font-bold cursor-pointer" onClick={isActiveManual}>Manual</h3>
                <div className="text-white hidden xl:flex">|</div>
                <h3 className=" text-gray-300 font-normal text-md active:font-bold cursor-pointer" onClick={isActiveOperationalVideo}>Operational Video</h3>
            </div>

            <Breadcrumbs linktopage={"/service"} pagename={"Service"}/>

            <div id="technicalsupport" className="w-full px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                {opentechnicalsupport && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10 border-b border-gray-200 w-full flex justify-center">
                            <h3 className="font-normal text-4xl text-[#4D5154] py-4">Technical Support</h3>
                        </div>
                        
                        <img src={CommingSoonImage} alt="Commingsoon-image" />
                    </div>
                )}
            </div>

            <div id="service" className="w-full px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                {openservice && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10 border-b border-gray-200 w-full flex justify-center">
                            <h3 className="font-normal text-4xl text-[#4D5154] py-4">Service</h3>
                        </div>
                        
                        <img src={CommingSoonImage} alt="Commingsoon-image" />
                    </div>
                )}
            </div>

            <div id="aftersalessystem" className="w-full px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                {openaftersalessystem && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10 border-b border-gray-200 w-full flex justify-center">
                            <h3 className="font-normal text-4xl text-[#4D5154] py-4">After-Sales System</h3>
                        </div>
                        
                        <img src={CommingSoonImage} alt="Commingsoon-image" />
                    </div>
                )}
            </div>

            <div id="manual" className="w-full px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                {openmanual && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10 border-b border-gray-200 w-full flex justify-center">
                            <h3 className="font-normal text-4xl text-[#4D5154] py-4">Manual</h3>
                        </div>
                        
                        <img src={CommingSoonImage} alt="Commingsoon-image" />
                    </div>
                )}
            </div>

            <div id="operationvideo" className="w-full px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                {openoperationvideo && (
                    <div className="flex flex-col justify-center items-center">
                        <div className="mt-10 border-b border-gray-200 w-full flex justify-center">
                            <h3 className="font-normal text-4xl text-[#4D5154] py-4">Operation Video</h3>
                        </div>
                        
                        <img src={CommingSoonImage} alt="Commingsoon-image" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Service;