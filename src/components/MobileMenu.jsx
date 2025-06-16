import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { MdOutlineArrowDropDown } from "react-icons/md";

const MobileMenu = ({closeMobileMenu}) => {

    let navigate = useNavigate();

    const [openaboutdd, setOpenAboutDD] = useState(false);
    const openAbout = () => {setOpenAboutDD(true)}
    const closeAbout = () => {setOpenAboutDD(false)}

    const [openproductsdd, setOpenProductsDD] = useState(false)
    const openProducts = () => {setOpenProductsDD(true)}
    const closeProducts = () => {setOpenProductsDD(false)}

    const [openservicedd, setOpenServiceDD] = useState(false)
    const openService = () => {setOpenServiceDD(true)}
    const closeService = () => {setOpenServiceDD(false)}

    const [opencontactdd, setOpenContactDD] = useState(false)
    const openContact = () => {setOpenContactDD(true)}
    const closeContact = () => {setOpenContactDD(false)}

    return(
        <div className="xl:hidden w-full bg-white mt-4 shadow-xl">
            <ul className="flex flex-col justify-center items-start">
                <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full" onClick={() => navigate("/")}>Home</li>
                <div className="border-b-1 border-gray-500 w-full"></div>

                <div className="flex flex-col justify-between items-start w-full">
                    <div className="flex flex-row justify-between items-center gap-4 w-full pr-6" onClick={openaboutdd ? closeAbout : openAbout}>
                        <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full">About</li>
                        <MdOutlineArrowDropDown className="size-12" />
                    </div>

                    {openaboutdd && (
                        <div className="flex flex-col justify-between items-start gap-2 pb-6">
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/profile")}>Profile</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/profile#philosophy")}>Philosophy</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/profile#culture")}>Culture</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/profile#development")}>Development</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/profile#companyvideo")}>Company Video</h4>
                        </div>
                    )}
                </div>

                <div className="border-b-1 border-gray-500 w-full"></div>

                <div className="flex flex-col justify-between items-start w-full">
                    <div className="flex flex-row justify-between items-center gap-4 w-full pr-6" onClick={openproductsdd ? closeProducts : openProducts}>
                        <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full">Products</li>
                        <MdOutlineArrowDropDown className="size-12" />
                    </div>

                    {openproductsdd && (
                        <div className="flex flex-col justify-between items-start gap-2 pb-6">
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/products/Dynamo")}>Dynamo</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/products/Open%20Diesel%20Generator")}>Open Diesel Generator</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/products/Silent%20Box%20Diesel%20Generator")}>Silent Box Diesel Generator</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/products/Mobile%20Trailer")}>Mobile Trailer</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate('/products/Control%20System')}>Control System</h4>
                        </div>
                    )}
                </div>

                <div className="border-b-1 border-gray-500 w-full"></div>
                <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full" >Application</li>
                <div className="border-b-1 border-gray-500 w-full"></div>

                <div className="flex flex-col justify-between items-start w-full">
                    <div className="flex flex-row justify-between items-center gap-4 w-full pr-6" onClick={openservicedd ? closeService : openService}>
                        <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full">Service</li>
                        <MdOutlineArrowDropDown className="size-12" />
                    </div>

                    {openservicedd && (
                        <div className="flex flex-col justify-between items-start gap-2 pb-6">
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/service#technicalsupport")}>Technical Support</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/service#service")}>Service</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/service#aftersalessystem")}>After Sales System</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/service#manual")}>Manual</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/service#operationvideo")}>Operation Video</h4>
                        </div>
                    )}
                </div>

                <div className="border-b-1 border-gray-500 w-full"></div>

                <div className="flex flex-col justify-between items-start w-full">
                    <div className="flex flex-row justify-between items-center gap-4 w-full pr-6" onClick={opencontactdd ? closeContact : openContact}>
                        <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full">Contact</li>
                        <MdOutlineArrowDropDown className="size-12" />
                    </div>

                    {opencontactdd && (
                        <div className="flex flex-col justify-between items-start gap-2 pb-6">
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/contact#contactway")}>Contact Way</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/contact#message")}>Message</h4>
                            <h4 className="px-6 py-2 font-normal text-xl w-full text-primary" onClick={() => navigate("/contact#recruitment")}>Recruitment</h4>
                        </div>
                    )}
                </div>
                {/* <div className="border-b-1 border-gray-500 w-full"></div> */}
            </ul>
        </div>
    )
}

export default MobileMenu;

// <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile")}>Profil</li>
// <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#philosophy")}>Philosophy</li>
// <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#culture")}>Culture</li>
// <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#development")}>Development</li>
// <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#companyvideo")}>Company Video</li>