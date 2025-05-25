import { FaArrowRight } from "react-icons/fa6";

import imageProduct1 from "../../public/productImages/xichai-image1.jpg";
import imageProduct2 from "../../public/productImages/cumminssilentbox-image1.jpg";

const ProductRange = () => {
    return(
        <div className="px-6 sm:px-8 xl:px-32">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex flex-col justify-center items-start gap-4">
                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="border-1 border-primary w-7"></div>
                        <h5 className="font-medium text-primary text-xl uppercase">Product Range</h5>
                    </div>

                    <div className="pl-12 flex flex-col gap-6 max-w-xl">
                        <h1 className="font-semibold text-black text-5xl leading-normal">
                            Professional Diesel Generator Manufacturer</h1>

                        <p>At JUSTPOWER, we supply a complete series of electricity generation solutions. 
                            Our main product is 5-100KVA air-cooled diesel generator set, 10-2000KVA water 
                            cooled diesel genset, and 5-1000KVA synchronous alternators. <br />

                            Also, JUSTPOWER generators have different series, including COMPACT SERIES, 
                            CUMMINS, PERKINS, ISUZU, DEUTZ, SIDA, YTO, RICARDO, etc.</p>

                        <div className="w-[13rem] flex flex-row items-center justify-center gap-1 bg-primary px-8 py-4 rounded-lg text-white hover:bg-black hover:text-primary hover:font-bold transition-all duration-300">
                            <a href="" className="text-xl uppercase font-normal">Quote Now</a>
                            <FaArrowRight className="text-white hover:text-primary size-4 ml-2 " />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <img src={imageProduct1} alt="Product-image1" className="w-[20rem]" />
                    <img src={imageProduct2} alt="product-image2" className="w-[15rem] -mt-8" />
                </div>
            </div>
        </div>
    )
}

export default ProductRange;