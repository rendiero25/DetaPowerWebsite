import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TbBrandWechat } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

const TopMenu = () => {
    return(
        <div className="bg-primary w-full px-6 xl:px-25">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center gap-4">
                    <a href="" className="flex flex-row justify-between items-center gap-2">
                        <FaPhoneAlt className="text-white size-5"/>
                        <h3 className="text-white font-normal text-sm">Call</h3>
                    </a>

                    <a href="" className="flex flex-row justify-between items-center gap-2">
                        <MdEmail className="text-white size-5"/>
                        <h3 className="text-white font-normal text-sm">Email</h3>
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