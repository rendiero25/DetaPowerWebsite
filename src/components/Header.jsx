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

    const [openproductmenu, setOpenProductMenu] = useState(false);
    const openProductMenu = () => {setOpenProductMenu(true)};
    const closeProductMenu = () => {setOpenProductMenu(false)};

    return(
        <div className="w-full py-4">
            <div className='px-6 flex flex-row justify-between items-center w-full'>
                <div className='xl:hidden'>
                    <img src={Logo} alt="detapower-logo" className='w-30' />
                </div>

                <div className='hidden xl:flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row justify-between items-center gap-4 w-full px-55 2xl:px-65 3xl:px-[30rem]'>
                        <div className=''>
                            <img src={Logo} alt="detapower-logo" className='w-30 cursor-pointer' onClick={goToHome}/>
                        </div>

                        <div className='hidden xl:flex flex-row justify-between items-center gap-4'>
                            <ul className='flex flex-row justify-between items-center gap-8 text-black font-normal text-lg'>
                                <li onClick={goToHome} className='font-normal text-xl'>
                                    Home
                                </li>
                                <div className='relative flex flex-col justify-between items-center gap-2' onMouseEnter={openProductMenu} onMouseLeave={closeProductMenu}>
                                    <div className='flex flex-row justify-between items-center gap-2'>
                                        <li className='font-normal text-xl'>Products</li>
                                        <MdOutlineArrowDropDown className='text-black size-6'/>
                                    </div>
                                    
                                    <div className='flex justify-center items-center mt-[11rem] absolute w-full'>
                                        {openproductmenu && (
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

                                {/* Dropdown menu for products */}
                                
                                
                                
                                <li className='font-normal text-xl'>About Us</li>
                                <li className='font-normal text-xl'>Blog</li>
                                <li className='font-normal text-xl'>Contact Us</li>
                            </ul>

                            
                        </div>
                    </div>
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