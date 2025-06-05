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
    let goToHome = () => {navigate("/")};

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
            <div className='px-6 xl:px-25 3xl:px-85 4xl:px-85 flex flex-row justify-between items-center w-full h-full'>
                <div className=''>
                    <img src={Logo} alt="detapower-logo" className='w-55 3xl:w-65 5xl:w-90' />
                </div>

                <div className='hidden xl:flex flex-row justify-between items-center w-auto h-full'>
                    <ul className='flex flex-row justify-between items-center gap-8 3xl:gap-14 text-black font-normal text-lg'>
                        <li onClick={goToHome} className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase'>
                            Home
                        </li>

                        <div className='relative flex flex-col justify-between items-center group hover:text-primary 5xl:gap-6 py-4 3xl:py-8 5xl:py-12' onMouseEnter={openabout} onMouseLeave={closeabout}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase'>About</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                                
                            <div className='flex justify-center items-center mt-[10rem] absolute w-full z-20'>
                                {openaboutmenu && (
                                    <div className='absolute bg-primary shadow-lg py-2'>
                                        <ul className='flex flex-col w-[15rem] text-white font-bold text-lg'>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary ease-in-out'>Profil</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Philosophy</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Culture</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Development</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Company Video</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        

                        <div className='relative flex flex-col justify-between items-center gap-2 group hover:text-primary' onMouseEnter={openProduct} onMouseLeave={closeProduct}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase group-hover:text-primary py-4 3xl:py-8 5xl:py-12'>Products</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                            
                            <div className='flex justify-center items-center mt-[11rem] absolute w-full z-20'>
                                {openproductmenu && (
                                    <div className='absolute flex flex-row shadow-lg py-2'>
                                        <ul className='flex flex-col w-[17rem] bg-primary text-white font-bold text-lg'>   
                                                                                  
                                            <li className='relative flex flex-row justify-between items-start py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openDynamo} onMouseLeave={closeDynamo}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3 className='font-medium text-lg'>Dynamo</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 text-white size-4 group-hover:text-primary' />
                                                </div>

                                                <div className='bg-primary absolute z-20 ml-[15.5rem]'>
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

                                            

                                            <li className='py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openDiesel}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3>Open Diesel Generator</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 text-white size-4 group-hover:text-primary' />
                                                </div>
                                            </li>

                                            <li className='py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openSilent}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3>Silent Box Diesel Generator</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 text-white size-4 group-hover:text-primary' />
                                                </div>
                                            </li>

                                            <li className='py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openMobile}>
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3>Mobile Trailer</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 text-white size-4 group-hover:text-primary' />
                                                </div>
                                            </li>

                                            <li className='py-2 px-4 cursor-pointer w-full group hover:bg-white hover:text-primary' onMouseEnter={openControl} >
                                                <div className='flex flex-row justify-between items-center w-full'>
                                                    <h3>Control System</h3>
                                                    <FaAngleRight className='text-white inline-block ml-2 text-white size-4 group-hover:text-primary' />
                                                </div>
                                            </li>
                                        </ul>
                                        
                                        
                                        {/* <div className='ml-2 bg-primary' onMouseLeave={closeDynamo}>
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

                                        <div className='ml-2 bg-primary' onMouseLeave={closeDiesel}>
                                            {opendiesel && (
                                                <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Cummins</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Yuchai</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Weichai</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Xuchai</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Shangchai</li>
                                                </ul>
                                            )}
                                        </div>

                                        <div className='ml-2 bg-primary' onMouseLeave={closeSilent}>
                                            {opensilent && (
                                                <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Cummins</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Yuchai</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Weichai</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Xuchai</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Shangchai</li>
                                                </ul>
                                            )}
                                        </div>

                                        <div className='ml-2 bg-primary'onMouseLeave={closeMobile}>
                                            {openmobile && (
                                                <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Container</li>
                                                </ul>
                                            )}
                                        </div>

                                        <div className='ml-2 bg-primary' onMouseLeave={closeControl}>
                                            {opencontrol && (
                                                <ul className='flex flex-col w-auto h-auto text-white font-bold text-lg'>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Automatic Switch</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Controller</li>
                                                    <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Parallel System</li>
                                                </ul>
                                            )}
                                        </div> */}
                                    </div>
                                    

                                    
                                )}

                                
                            </div>
                        </div>

                        {/* Dropdown menu for products */}                              
                        
                        <li className='font-bold text-xl 3xl:text-md 5xl:text-3xl uppercase'>Application</li>

                        <div className='relative flex flex-col justify-between items-center gap-2' onMouseEnter={openService}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase'>Service</li>
                                <MdOutlineArrowDropDown className='text-black size-6'/>
                            </div>
                            
                            <div className='flex justify-center items-center mt-[11rem] absolute w-full z-20' onMouseLeave={closeService}>
                                {openservicemenu && (
                                    <div className='absolute bg-white shadow-lg py-2'>
                                        <ul className='flex flex-col gap-2 w-[15rem]'>
                                            <li className='p-2 cursor-pointer w-full'>Dynamo</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer'>Open Diesel Generator</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer'>Silent Box Diesel Generator</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer'>Mobile Trailer</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer w-full'>Control System</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='relative flex flex-col justify-between items-center gap-2' onMouseEnter={openContact}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase'>Contact</li>
                                <MdOutlineArrowDropDown className='text-black size-6'/>
                            </div>
                            
                            <div className='flex justify-center items-center mt-[11rem] absolute w-full z-10' onMouseLeave={closeContact}>
                                {opencontactmenu && (
                                    <div className='absolute bg-white shadow-lg py-2'>
                                        <ul className='flex flex-col gap-2 w-[15rem]'>
                                            <li className='p-2 cursor-pointer w-full'>Dynamo</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer'>Open Diesel Generator</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer'>Silent Box Diesel Generator</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer'>Mobile Trailer</li>
                                            <div className="border-b-1 border-gray-300 w-full"></div>
                                            <li className='p-2 cursor-pointer w-full'>Control System</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ul>
                </div>

                <div className='xl:hidden'>
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