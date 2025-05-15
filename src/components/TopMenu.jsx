import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TbBrandWechat } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

const TopMenu = () => {
    return(
        <div className="bg-primary w-full py-4 px-6 ">
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

                <div className="flex flex-row justify-between items-center gap-5">
                    <button>
                        <BiSearch className="text-white size-7"/>
                    </button>

                    <button>
                        <TbBrandWechat className="text-white size-7"/>
                    </button>

                    <button>
                        <BiWorld className="text-white size-7"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;