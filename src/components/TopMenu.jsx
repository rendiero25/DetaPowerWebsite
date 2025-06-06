import { useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TbBrandWechat } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

const TopMenu = () => {

    const [mobile] = useState(window.innerWidth <= 640);

    return(
        <div className="bg-primary w-full px-6 xl:px-25 3xl:px-85 4xl:px-158 4xl:py-2 5xl:py-4">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center gap-4 5xl:gap-8">
                    <a 
                        href="https://wa.me/6282231018184?text=Halo%20Deta%20Power%2C%20Saya%20ingin%20bertanya%20mengenai%20produk%20Detapower." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row justify-between items-center gap-2">
                            <FaPhoneAlt className="text-white size-4 5xl:size-7"/>
                            <h3 className="text-white font-normal text-sm 4xl:text-lg 5xl:text-2xl">{mobile ? "Call" : "+6282231018184"}</h3>
                    </a>

                    <a 
                        href="mailto:detapowergensetindonesia@gmail.com" 
                        className="flex flex-row justify-between items-center gap-2">
                            <MdEmail className="text-white size-5 5xl:size-7"/>
                            <h3 className="text-white font-normal text-sm 4xl:text-lg 5xl:text-2xl">{mobile? "Mail" : "detapowergensetindonesia@gmail.com"}</h3>
                    </a>

                </div>

                <div className="h-full flex flex-row justify-between items-stretch gap-4">
                    <button className="py-3">
                        <BiSearch className="text-white size-7"/>
                    </button>

                    <div className="hidden xl:flex border-r-[0.05rem] border-white"></div>

                    <button>
                        <TbBrandWechat className="text-white size-7"/>
                    </button>

                    <div className="hidden xl:flex border-r-[0.05rem] border-white"></div>

                    <button>
                        <BiWorld className="text-white size-7"/>
                    </button>

                    <div className="hidden xl:flex border-r-[0.05rem] border-white"></div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;