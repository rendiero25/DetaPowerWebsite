import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const ContactUs = () => {
    return(
        <div className="px-6 sm:px-8 xl:px-32 mt-10 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-4">
                <div className="border-1 border-primary w-18"></div>
                <h5 className="font-medium text-primary text-xl uppercase">Contact Us</h5>
                <div className="border-1 border-primary w-18"></div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-6 mt-6">
                <h1 className="font-semibold text-black text-5xl leading-normal text-center">
                    Deta Power Always Be Your Partner Here</h1>

                <h3 className="text-lg text-gray-600 font-medium">We're glad to answer any questions you may have!</h3>
            </div>

            <div className="max-w-2xl mt-10 border-1 border-black/20 p-8 flex justify-center items-center">
                <div className="flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-row justify-between items-center gap-2">
                        <h2 className="font-medium text-2xl text-black">Let's Raise Your Project Profit To The Next Level</h2>
                        <FaArrowRight />
                    </div>
                    
                    <p className="text-gray-500 text-xl font-normal max-w-lg">Send us a message if you have any questions or request a quote. Our experts will 
                        give you a reply within 24 hours and help you select the right products you want.</p>
                    <div className="flex flex-row justify-between items-center gap-4">
                        <FaPhoneAlt className="text-primary size-8" />
                        <h4 className="text-black text-xl font-bold">0822 3101 8184</h4>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-4">
                        <IoMdMail className="text-primary size-8" />
                        <h4 className="text-black text-xl font-bold">detapowergensetindonesia@gmail.com</h4>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ContactUs;