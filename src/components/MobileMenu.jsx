import { useNavigate } from "react-router-dom";

const MobileMenu = ({closeMobileMenu}) => {

    let navigate = useNavigate();
    let goToHome = () => {navigate("/")};

    return(
        <div className="xl:hidden w-full bg-white mt-4 shadow-xl">
            <ul className="flex flex-col justify-center items-start">
                <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full" onClick={goToHome}>Home</li>
                <div className="border-b-1 border-gray-500 w-full"></div>
                <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full" onClick={goToHome}>Products</li>
                <div className="border-b-1 border-gray-500 w-full"></div>
                <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full" onClick={goToHome}>About Us</li>
                <div className="border-b-1 border-gray-500 w-full"></div>
                <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full" onClick={goToHome}>Blog</li>
                <div className="border-b-1 border-gray-500 w-full"></div>
                <li className="p-6 hover:bg-primary hover:text-white font-normal text-xl w-full" onClick={goToHome}>Contact Us</li>
                {/* <div className="border-b-1 border-gray-500 w-full"></div> */}
            </ul>
        </div>
    )
}

export default MobileMenu;