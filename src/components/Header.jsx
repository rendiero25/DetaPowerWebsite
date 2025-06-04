import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import MobileMenu from './MobileMenu';

import Logo from '../assets/detapowerlogo.png';

import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
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

    return(
        <div className="w-full py-4 3xl:py-8 5xl:py-12">
            <div className='px-6 xl:px-25 3xl:px-85 4xl:px-85 flex flex-row justify-between items-center w-full'>
                <div className=''>
                    <img src={Logo} alt="detapower-logo" className='w-55 3xl:w-65 5xl:w-90' />
                </div>

                <div className='hidden xl:flex flex-row justify-between items-center w-auto'>
                    <ul className='flex flex-row justify-between items-center gap-8 3xl:gap-14 text-black font-normal text-lg'>
                        <li onClick={goToHome} className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase'>
                            Home
                        </li>

                        <div className='relative flex flex-col justify-between items-center group hover:text-primary 5xl:gap-6' onMouseEnter={openabout} >
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase'>About</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                                
                            <div className='flex justify-center items-center mt-[10rem] absolute w-full z-20' onMouseLeave={closeabout}>
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
                        

                        <div className='relative flex flex-col justify-between items-center gap-2 group hover:text-primary' onMouseEnter={openProduct}>
                            <div className='flex flex-row justify-between items-center'>
                                <li className='font-bold text-lg 3xl:text-md 5xl:text-3xl uppercase'>Products</li>
                                <MdOutlineArrowDropDown className='text-black group-hover:text-primary size-6'/>
                            </div>
                            
                            <div className='flex justify-center items-center mt-[10rem] absolute w-full z-20' onMouseLeave={closeProduct}>
                                {openproductmenu && (
                                    <div className='absolute flex flex-row gap-2 shadow-lg py-2'>
                                        <ul className='flex flex-col w-[15rem] bg-primary text-white font-bold text-lg'>
                                            <div className='flex flex-row justify-between items-center'>
                                                <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary' onMouseEnter={openDynamo} onMouseLeave={closeDynamo}>Dynamo</li>

                                                
                                            </div>
                                            
                                                


                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Open Diesel Generator</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Silent Box Diesel Generator</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Mobile Trailer</li>
                                            <li className='py-2 px-4 cursor-pointer w-full hover:bg-white hover:text-primary'>Control System</li>
                                        </ul>

                                        <div className='ml-4 bg-primary'>
                                            {opendynamo && (
                                                <div className='text-white'>ddddd</div>
                                            )}
                                        </div>

                                        
                                    </div>
                                    

                                    
                                )}

                                
                            </div>
                        </div>

                        {/* Dropdown menu for products */}                              
                        
                        <li className='font-bold text-xl 3xl:text-md 5xl:text-3xl uppercase'>Application</li>

                        <div className='relative flex flex-col justify-between items-center gap-2' onMouseHover={openService}>
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

                        <div className='relative flex flex-col justify-between items-center gap-2' onMouseHover={openContact}>
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