import Facebook from '../assets/facebook.png';
import Linkedin from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Tumblr from '../assets/tumblr.png';
import Pinterest from '../assets/pinterest.png';


const Footer = () => {
    return(
        <div className="bg-accent w-full h-auto px-6 xl:px-25 3xl:px-65 4xl:px-85">
            <div className="flex flex-col justify-between items-center gap-8 xl:gap-2">
                <div className="w-full flex flex-col xl:flex-row pt-8 pb-4 xl:pt-16 xl:pb-6 justify-between items-start gap-6 xl:gap-16">
                    <div className="flex flex-col justify-center items-start gap-4 xl:gap-8">
                        <h2 className="font-bold text-xl text-black">Quick Links</h2>
                        <ul className="flex flex-wrap xl:flex-col xl:justify-center items-start gap-6 xl:gap-2">
                            <li className="text-md font-normal text-gray-400">Home</li>
                            <li className="text-md font-normal text-gray-400">Company Profile</li>
                            <li className="text-md font-normal text-gray-400">Product</li>
                            <li className="text-md font-normal text-gray-400">Application</li>
                            <li className="text-md font-normal text-gray-400">Service</li>
                            <li className="text-md font-normal text-gray-400">News Center</li>
                            <li className="text-md font-normal text-gray-400">Contact</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-8">
                        <h2 className="font-bold text-xl text-black">Products</h2>
                        <ul className="flex flex-wrap xl:flex-col xl:justify-center items-start gap-6 xl:gap-2">
                            <li className="text-md font-normal text-gray-400">Dynamo</li>
                            <li className="text-md font-normal text-gray-400">Open Diesel Generator</li>
                            <li className="text-md font-normal text-gray-400">Silent Box Diesel Generator</li>
                            <li className="text-md font-normal text-gray-400">Application</li>
                            <li className="text-md font-normal text-gray-400">Mobile Trailer</li>
                            <li className="text-md font-normal text-gray-400">Control System</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-8 max-w-sm">
                        <h2 className="font-bold text-xl text-black">Contact Us</h2>
                        <ul className="flex flex-col justify-center items-start gap-4">
                            <li className="text-md font-normal text-gray-400">Phone: +62822 3101 8184</li>
                            <li className="text-md font-normal text-gray-400">Email: detapowergensetindonesia@gmail.com</li>
                            <li className="text-md font-normal text-gray-400">Factory Address：No. 16-7, Budouli, Songtan Village, 
                                Banzhong Township, Fu'an City, Ningde City, Fujian.China</li>
                            <li className="text-md font-normal text-gray-400">Office Address：Building 3,Binhai Futeng Garden,No.880,
                                Third Ring Road, Chengmen Town,Cangshan District,Fuzhou 350008 China</li>
                        </ul>
                    </div>

                    <div className="bg-primary px-6 py-12 h-full w-full xl:w-[25rem]">
                        <h2 className="text-white font-bold text-xl">Message</h2>
                        <form
                            action="mailto:detapowergensetindonesia@gmail.com"
                            method="POST"
                            encType="text/plain"
                            className="flex flex-col gap-6 mt-4"
                        >
                            <textarea
                                name="message"
                                placeholder="Please enter the message content."
                                className="bg-white w-full p-2 rounded text-black"
                                rows={3}
                                required
                            />
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    type="text"
                                    name="verification"
                                    placeholder="Please enter the verification code."
                                    className="bg-white flex-1 p-2 rounded text-black"
                                    required
                                />
                                <span className="bg-white text-primary font-bold px-3 py-2 rounded select-none">p4Gmp</span>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#FFD105] text-black px-4 py-2 rounded hover:bg-opacity-80 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center self-start gap-2'>
                    <img src={Facebook} alt="facebook-icon" className='size-8' />
                    <img src={Linkedin} alt="linkedin-icon" className='size-8' />
                    <img src={Twitter} alt="twitter-icon" className='size-8' />
                    <img src={Tumblr} alt="tumblr-icon" className='size-8' />
                    <img src={Pinterest} alt="pinterest-icon" className='size-8' />
                </div>

                <h3 className=' mt- xl:mt-14 mb-4 text-xl xl:text-sm'>Copyright &copy; Fujian Deta Electric Co., Ltd. Developed by <span className='font-bold text-md'><a href="http://www.rendiero.dev">Rendiero</a></span></h3>
            </div>
        </div>
    )
}

export default Footer;