import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs";

import ProfileBanner from "../assets/profilebanner.jpg";
import Location from "../assets/contactlocation.jpg";
import Phone from "../assets/contactphone.jpg";
import Email from "../assets/contactemail.jpg";
import WeChat from "../assets/contactwechat.jpg";

import { IoAddCircleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const Contact = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace('#', ''));
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }

        // Buka tab sesuai hash
        if (location.hash === '#contactway') {
            setContactWay(true);
            setMessage(false);
            setRecruitment(false);
        } else if (location.hash === '#message') {
            setContactWay(false);
            setMessage(true);
            setRecruitment(false);
        } else {
            setContactWay(false);
            setMessage(false);
            setRecruitment(true);
        }
    }, [location]);

    let [opencontactway, setContactWay] = useState(false);
    let [openmessage, setMessage] = useState(false);
    let [openrecruitment, setRecruitment] = useState(false);
    let [openrecruitmenttab, setOpenRecruitmentTab] = useState(false);

    const isActiveContactWay = () => {
        setContactWay(true);
        setMessage(false);
        setRecruitment(false);
    };

    const isActiveMessage = () => {
        setContactWay(false);
        setMessage(true);
        setRecruitment(false);
    };

    const isActiveRecruitment = () => {
        setContactWay(false);
        setMessage(false);
        setRecruitment(true);
    };

    const isActiveOpenRecruitment = () => {
        setOpenRecruitmentTab(!openrecruitmenttab);
    }

    return(
        <div className="flex flex-col xl:pb-16">
            <div className="h-[9rem] 3xl:h-[22rem] 4xl:h-[30rem]">
                <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-wrap justify-center items-center py-5 gap-6 w-full bg-[#4D5154]">
                <h3 className="text-gray-300 font-normal text-md cursor-pointer hover:text-white" onClick={isActiveContactWay}>Contact Way</h3>
                <div className="text-white hidden xl:flex">|</div>
                <h3 className=" text-gray-300 font-normal text-md active:font-bold cursor-pointer" onClick={isActiveMessage}>Message</h3>
                <div className="text-white hidden xl:flex">|</div>
                <h3 className=" text-gray-300 font-normal text-md active:font-bold cursor-pointer" onClick={isActiveRecruitment}>Recruitment</h3>
            </div>

            <Breadcrumbs linktopage={"/contact"} pagename={"Contact"}/>

            <div id="technicalsupport" className="w-full px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                {opencontactway && (
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-16 pb-14">
                        <div className="mt-10 flex flex-col justify-center items-start gap-8">
                            <div className="flex flex-col xl:flex-row justify-start items-start gap-6 border-b border-gray-200 pb-2">
                                <img src={Location} alt="location-icon" />
                                <div className="flex flex-col justify-between items-start gap-2">
                                    <h3 className="font-medium text-xl text-black">Factory Address</h3>
                                    <p className="font-normal text-black text-sm">Taman Mahkota Blok C1 No.52, Benda, Kec. Benda, Kota Tangerang, Banten 15125</p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row justify-start items-start gap-6 border-b border-gray-200 pb-2">
                                <img src={Location} alt="location-icon" />
                                <div className="flex flex-col justify-between items-start gap-2">
                                    <h3 className="font-medium text-xl text-black">Factory Address</h3>
                                    <p className="font-normal text-black text-sm">Taman Mahkota Blok C1 No.52, Benda, Kec. Benda, Kota Tangerang, Banten 15125</p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row justify-start items-start gap-6 border-b border-gray-200 pb-2 w-full">
                                <img src={Phone} alt="location-icon" />
                                <div className="flex flex-col justify-between items-start gap-2">
                                    <h3 className="font-medium text-xl text-black">Factory Address</h3>
                                    <p className="font-normal text-black text-sm">0822 3101 8184</p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row justify-start items-start gap-6 border-b border-gray-200 pb-2 w-full">
                                <img src={Email} alt="location-icon" />
                                <div className="flex flex-col justify-between items-start gap-2">
                                    <h3 className="font-medium text-xl text-black">Factory Address</h3>
                                    <p className="font-normal text-black text-sm">detapowergensetindonesia@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row justify-start items-start gap-6 border-b border-gray-200 pb-2 w-full">
                                <img src={WeChat} alt="location-icon" />
                                <div className="flex flex-col justify-between items-start gap-2">
                                    <h3 className="font-medium text-xl text-black">Factory Address</h3>
                                    <p className="font-normal text-black text-sm">0822 3101 8184</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63273.49274723835!2d106.67726514800101!3d-6.123753168138635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffe108906227%3A0xf690bc9dfc53dfa1!2sPT.%20DETAPOWER%20GENSET%20INDONESIA!5e1!3m2!1sen!2sid!4v1749395679047!5m2!1sen!2sid"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Deta Power">
                            </iframe>
                        </div>
                    </div>
                )}
            </div>

            <div id="message">
                {openmessage && (
                    <div className="flex flex-col justify-between items-center gap-4 pb-14 px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                        <form
                            action="mailto:detapowergensetindonesia@gmail.com"
                            method="POST"
                            encType="text/plain"
                            className="flex flex-col gap-2 px-8 rounded-lg w-full">

                            <h2 className="text-white font-bold text-xl mb-2">Message</h2>
                            
                            <h5>Message Content:</h5>
                            <textarea
                                name="message"
                                placeholder="Please enter the message content"
                                className="border-1 border-gray-300 w-full p-3 rounded text-black mb-6 font-bold 3xl:font-normal"
                                rows={5}
                                required
                            />

                            <h5>Phone:</h5>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Please enter your phone number"
                                className="border-1 border-gray-300 w-full p-3 rounded text-black mb-6 font-bold 3xl:font-normal"
                                required
                            />

                            <div className="flex flex-col xl:flex-row justify-between items-center gap-16 mb-6">
                                <div className="flex flex-row justify-between items-center gap-2 w-full">
                                    <h5>Email:</h5>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Please input your email"
                                        className="border-1 border-gray-300 w-full p-3 rounded text-black font-bold 3xl:font-normal"
                                        required
                                    />
                                </div>
                                
                                <div className="flex flex-row justify-between items-center gap-2 w-full">
                                    <h5>Address:</h5>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Please enter address"
                                        className="border-1 border-gray-300 w-full p-3 rounded text-black font-bold 3xl:font-normal"
                                        required
                                    />
                                </div>
                            </div>
                                
                            <h5>Verivication Code:</h5>    
                            <div className="flex flex-row items-center gap-2 mb-18">
                                <input
                                    type="text"
                                    name="verification"
                                    placeholder="Verification Code"
                                    className="border-1 border-gray-300 bg-white p-3 rounded text-black w-50 font-bold 3xl:font-normal"
                                    required
                                />

                                <span className="bg-white text-primary font-normal px-3 py-2 rounded select-none">p4Gmp</span>
                            </div>
                            
                            <button
                                type="submit"
                                className="bg-primary text-white font-bold px-4 py-2 rounded hover:bg-opacity-80 transition">
                                    Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>

            <div id="recruitment" className="py-20 px-6 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158">
                {openrecruitment && (
                    <div className={`${openrecruitmenttab ? "bg-primary" : "bg-gray-100"} cursor-pointer`} onClick={isActiveOpenRecruitment}>
                        <div className="flex flex-row justify-between items-center h-28">
                            <div className="gap-4 px-8 py-6 w-full h-full flex flex-col justify-center items-start">
                                <h4 className={`font-medium text-2xl ${openrecruitmenttab ? "text-white" : "text-gray-500"}`}>Seller</h4>
                                <div className="flex flex-col xl:flex-row gap-1 xl:gap-10 justify-start items-center">
                                    <h5 className={`font-bold text-sm ${openrecruitmenttab ? "text-white" : "text-gray-500"}`}>Department: Sales Department</h5>
                                    <h5 className={`font-bold text-sm ${openrecruitmenttab ? "text-white" : "text-gray-500"}`}>Release time: 2025-06-090</h5>
                                </div>
                            </div>

                            <div className={`${openrecruitmenttab ? "bg-primary" : "bg-gray-100"} px-10 flex justify-center items-center h-full`}>
                                <IoAddCircleOutline className={`size-10 ${openrecruitmenttab ? "text-white" : "text-gray-500"}`} />
                            </div>
                        </div>
                    </div>
                )}

                <div className="transition-all duration-500 ease-in-out origin-top">
                    {openrecruitmenttab && (
                        <div className="bg-gray-100 cursor-pointer flex flex-col justify-center items-start gap-8 py-8">
                            <p className="font-normal text-black text-sm leading-7 px-8 py-4">
                                1. Responsible for product market channel development and sales, and implement and complete the company's annual product sales plan. <br/>
                                2. According to the company's marketing strategy, increase sales value, control costs, expand product sales in the area in charge, actively complete sales volume indicators, and expand product market share;<br/>
                                3. Maintain good communication with customers and grasp customer needs in real time. Provide customers with active, enthusiastic, satisfactory and thoughtful service <br/>
                                4. According to the company's products, prices and market strategies, independently handle inquiries, quotations, negotiation of contract terms and contract signing. In the process of executing the contract, coordinate and supervise the operation of various functional departments of the company. <br/>
                                5. Dynamically grasp market prices, and regularly provide the company with market analysis and forecast reports and personal work weekly reports. <br/>
                                6. Maintain and develop new sales channels and new customers, independently develop and expand upstream and downstream users, especially end users. <br/>
                                7. Collect first-line marketing information and user opinions, and provide reference opinions on the company's marketing strategy, after-sales service, etc.
                            </p>

                            <button className="bg-primary py-2 px-6 ml-8  flex flex-row justify-center items-center gap-4">
                                <FiSend className="size-6 text-white"/>
                                <h4 className="flex flex-row justify-center items-center gap-4 font-normal text-lg text-white">Submit your resume</h4>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact;