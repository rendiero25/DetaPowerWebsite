import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import MobileMenu from './MobileMenu';

import Logo from '../assets/detapowerlogo.png';

import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Header = () => {

    let navigate = useNavigate();

    const [openmobilemenu, setOpenMobileMenu] = useState(false);
    const openMobileMenu = () => {setOpenMobileMenu(true)};
    const closeMobileMenu = () => {setOpenMobileMenu(false)};

    const [openaboutmenu, setOpenAbout] = useState(false);
    const openabout = () => {setOpenAbout(true)};
    const closeabout = () => {setOpenAbout(false)};

    const [openproductmenu, setOpenProductMenu] = useState(false);
    const openProduct = () => {setOpenProductMenu(true)};
    const closeProduct = () => {setOpenProductMenu(false)};

    const [openservicemenu, setOpenServiceMenu] = useState(false);
    const openService = () => {setOpenServiceMenu(true)};
    const closeService = () => {setOpenServiceMenu(false)};

    const [opencontactmenu, setOpenContactMenu] = useState(false);
    const openContact = () => {setOpenContactMenu(true)};
    const closeContact = () => {setOpenContactMenu(false)};

    const [opendynamo, setOpenDynamo] = useState(false);
    const openDynamo = () => {setOpenDynamo(true)};
    const closeDynamo = () => {setOpenDynamo(false)};

    const [opendiesel, setOpenDiesel] = useState(false);
    const openDiesel = () => {setOpenDiesel(true)};
    const closeDiesel = () => {setOpenDiesel(false)};

    const [opensilent, setOpenSilent] = useState(false);
    const openSilent = () => {setOpenSilent(true)};
    const closeSilent = () => {setOpenSilent(false)};

    const [openmobile, setOpenMobile] = useState(false);
    const openMobile = () => {setOpenMobile(true)};
    const closeMobile = () => {setOpenMobile(false)};

    const [opencontrol, setOpenControl] = useState(false);
    const openControl = () => {setOpenControl(true)};
    const closeControl = () => {setOpenControl(false)};

    return(
        <div className="w-full">
            <div className='px-6 xl:px-25 3xl:px-85 4xl:px-158 flex flex-row justify-between items-center w-full h-full'>
                <div className=''>
                    <img src={Logo} alt="detapower-logo" className='w-55 3xl:w-65 5xl:w-90' onClick={() => navigate("/")}/>
                </div>

                <div className='hidden xl:flex flex-row justify-between items-center w-auto h-full'>
                    <ul className='flex flex-row justify-between items-center gap-8 3xl:gap-10 text-black font-normal text-lg'>
                        <li onClick={() => navigate("/")} className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase cursor-pointer'>
                            Home
                        </li>

                        <div className='relative flex flex-col justify-between items-center group hover:text-primary 5xl:gap-6 py-4 3xl:py-8 5xl:py-12' onMouseEnter={openabout} onMouseLeave={closeabout}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase cursor-pointer'>About</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                                
                            <div className='flex justify-center items-center mt-[10rem] absolute w-full z-20'>
                                {openaboutmenu && (
                                    <div className='absolute bg-primary shadow-lg py-2'>
                                        <ul className='flex flex-col w-[15rem] text-white font-bold text-lg'>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile")}>Profil</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#philosophy")}>Philosophy</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#culture")}>Culture</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#development")}>Development</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/profile#companyvideo")}>Company Video</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        

                        <div className='relative flex flex-col justify-between items-center gap-2 group hover:text-primary' onMouseEnter={openProduct} onMouseLeave={closeProduct}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase group-hover:text-primary py-4 3xl:py-8 5xl:py-12 cursor-pointer'>Products</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                            
                            <div className='flex justify-center items-center xl:mt-[11.5rem] 3xl:mt-[13.5rem] absolute w-full z-20'>
                                {openproductmenu && (
                                    <div className='absolute flex flex-row shadow-lg py-2'>
                                        <ul className='flex flex-col w-[17rem] bg-primary text-white font-bold text-lg'>   
                                                                                  
                                            <li className='relative flex flex-row justify-between items-start py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openDynamo} onMouseLeave={closeDynamo}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3 className='font-medium text-lg'>Dynamo</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 size-4 group-hover:text-primary' />
                                                </div>

                                                <div className='bg-primary absolute z-20 ml-[15.5rem] 3xl:ml-[16rem]'>
                                                    {opendynamo && (
                                                        <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>DTG164</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>DTG184</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>DTG224</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>DTG274</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>DTG314</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>DTG354</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </li>

                                            

                                            <li className='relative flex flex-row justify-between items-start py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openDiesel} onMouseLeave={closeDiesel}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3 className='font-medium text-lg'>Open Diesel Generator</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 size-4 group-hover:text-primary' />
                                                </div>

                                                <div className='bg-primary absolute z-20 ml-[15.5rem] 3xl:ml-[16rem]'>
                                                    {opendiesel && (
                                                        <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Cummins</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Yuchai</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Weichai</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Xichai</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Shangchai</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </li>

                                            <li className='relative flex flex-row justify-between items-start py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openSilent} onMouseLeave={closeSilent}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3 className='font-medium text-lg'>Silent Box Diesel Generator</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 size-4 group-hover:text-primary' />
                                                </div>

                                                <div className='bg-primary absolute z-20 ml-[15.5rem] 3xl:ml-[16rem]'>
                                                    {opensilent && (
                                                        <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Cummins</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Yuchai</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Weichai</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Xichai</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Shangchai</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </li>

                                            <li className='relative flex flex-row justify-between items-start py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openMobile} onMouseLeave={closeMobile}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3 className='font-medium text-lg'>Mobile Trailer</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 size-4 group-hover:text-primary' />
                                                </div>

                                                <div className='bg-primary absolute z-20 ml-[15.5rem] 3xl:ml-[16rem]'>
                                                    {openmobile && (
                                                        <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Trailer</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </li>

                                            <li className='relative flex flex-row justify-between items-start py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openControl} onMouseLeave={closeControl}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3 className='font-medium text-lg'>Control System</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2  size-4 group-hover:text-primary' />
                                                </div>

                                                <div className='bg-primary absolute z-20 ml-[15.5rem] 3xl:ml-[16rem]'>
                                                    {opencontrol && (
                                                        <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Automatic Switch</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Controller</li>
                                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Parallel System</li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                
                            </div>
                        </div>

                        {/* Dropdown menu for products */}                              
                        
                        <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase cursor-pointer' onClick={() => navigate("/application")}>Application</li>

                        <div className='relative flex flex-col justify-between items-center gap-2 group hover:text-primary 5xl:gap-6 py-4 3xl:py-8 5xl:py-12' onMouseEnter={openService} onMouseLeave={closeService}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase cursor-pointer' onClick={() => navigate("/service#technicalsupport")}>Service</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                            
                            <div className='flex justify-center items-center mt-[10rem] xl:mt-[10rem] 2xl:mt-[10.2rem] 3xl:mt-[11.1rem] absolute w-full z-20'>
                                {openservicemenu && (
                                    <div className='absolute bg-primary shadow-lg py-2'>
                                        <ul className='flex flex-col w-[15rem] text-white font-bold text-lg'>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/service#technicalsupport")}>Technical Support</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/service#service")}>Service</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/service#aftersalessystem")}>After-Sales System</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/service#manual")}>Manual</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/service#operationvideo")}>Operation Video</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='relative flex flex-col justify-between items-center gap-2 group hover:text-primary 5xl:gap-6 py-4 3xl:py-8 5xl:py-12' onMouseEnter={openContact} onMouseLeave={closeContact}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase cursor-pointer' onClick={() => navigate("/contact#contactway")}>Contact</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                            
                            <div className='flex justify-center items-center mt-[10rem] xl:mt-[7.4rem] 3xl:mt-[8.4rem] absolute w-full z-20'>
                                {opencontactmenu && (
                                    <div className='absolute bg-primary shadow-lg py-2'>
                                        <ul className='flex flex-col w-[15rem] text-white font-bold text-lg'>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/contact#contactway")}>Contact Way</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/contact#message")}>Message</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onClick={() => navigate("/contact#recruitment")}>Recruitment</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ul>
                </div>

                <div className='xl:hidden py-4'>
                    {openmobilemenu ? <MdClose onClick={closeMobileMenu} className='text-primary size-10' /> : <CgMenuGridR onClick={openMobileMenu} className='text-primary size-10'/>}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className='bg-blue-500'>
                {openmobilemenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
            </div>
            

        </div>
    )
}

export default Header;