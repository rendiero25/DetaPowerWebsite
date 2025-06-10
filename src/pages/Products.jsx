import { useState, useEffect } from "react";

import ProfileBanner from "../assets/profilebanner.jpg";

import Breadcrumbs from "../components/Breadcrumbs";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    })

    return(
        <div className="flex flex-col xl:pb-16">
            <div className="h-[9rem] xl:h-[15rem] 3xl:h-[22rem] 4xl:h-[30rem]">
                <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
            </div>

            <Breadcrumbs linktopage={"/products"} pagename={"Products"}/>

            <div className="flex flex-col xl:flex-row justify-between items-start gap-8 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158 mt-20">
                <div className="flex flex-col justify-between items-center w-[20rem]">
                    <h3 className="px-6 py-4 w-full bg-primary text-white font-bold text-2xl rounded-tr-3xl border-l-1 border-t-1 border-r-1 border-primary">Product Series</h3>

                    <div className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary">
                        <h3 className="text-black font-bold text-lg">Dynamo</h3>
                        <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>

                    <div className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-t-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary">
                        <h3 className="text-black font-bold text-lg">Open Diesel Generator</h3>
                        <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>

                    <div className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-t-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary">
                        <h3 className="text-black font-bold text-lg ">Silent Box Diesel Generator</h3>
                        <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>

                    <div className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-t-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary">
                        <h3 className="text-black font-bold text-lg">Mobile Trailer</h3>
                        <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>

                    <div className="flex flex-row justify-between items-start px-6 py-4 border-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary">
                        <h3 className="text-black font-bold text-lg">Control System</h3>
                        <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>
                </div>

                <div>
                    {products.map(product => (
                        <div key={product.categoryId} className="grid grid-cols-3 justify-center items-center gap-8">
                            {product.categoryProducts.map(pro => (
                                <div key={pro.id} className="flex flex-col justify-center items-center gap-3">
                                    <img src={pro.image} alt="product-image" className="w-[17rem] h-full object-cover border-1 border-gray-300 py-6"/>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <h3 className="font-bold text-primary text-xl">{pro.name}</h3>
                                        <a href="#" className="bg-primary py-2 px-4 rounded-lg text-white font-bold text-md">Enquiry</a>
                                    </div>
                                </div>
                            ))}

                            {/*<div className="flex flex-col justify-between items-center gap-1">*/}
                            {/*    <div className="flex justify-center items-center">*/}
                            {/*        {product.name}*/}
                            {/*        /!*<img src={product.categoryProducts.name} alt="product-image" className="w-full h-full object-cover"/>*!/*/}
                            {/*    </div>*/}
                            {/*    <div></div>*/}
                            {/*</div>*/}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Products;