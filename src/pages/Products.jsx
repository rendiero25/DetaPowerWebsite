import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';

import ProfileBanner from "../assets/profilebanner.jpg";

import Breadcrumbs from "../components/Breadcrumbs";

const Products = () => {

    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    // const [opendynamo, setOpenDynamo] = useState(false);
    // const [openOpenDieselGenerator, setOpenOpenDieselGenerator] = useState(false);
    // const [openSilentBoxDieselGenerator, setOpenSilentBoxDieselGenerator] = useState(false);
    // const [openMobileTrailer, setOpenMobileTrailer] = useState(false);
    // const [openControlSystem, setOpenControlSystem] = useState(false);
    //
    // const isActiveDynamo = () => {setOpenDynamo(true)};
    // const isActiveOpenDieselGenerator = () => {setOpenOpenDieselGenerator(true)};
    // const isActiveSilentBoxDieselGenerator = () => {setOpenSilentBoxDieselGenerator(true)};
    // const isActiveMobileTrailer = () => {setOpenMobileTrailer(true)};
    // const isActiveControlSystem = () => {setOpenControlSystem(true)};

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
    },[])

    const allProducts = products.flatMap(category => category.categoryProducts);

    const productsPerPage = 9;

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = allProducts.slice(startIndex, endIndex);

    const pageCount = Math.ceil(allProducts.length / productsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <div className="flex flex-col xl:pb-16">
            <div className="h-[9rem] xl:h-[15rem] 3xl:h-[22rem] 4xl:h-[30rem]">
                <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
            </div>

            <Breadcrumbs linktopage={"/products"} pagename={"Products"}/>

            <div className="flex flex-col xl:flex-row justify-between items-start gap-8 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158 mt-20">
                <div className="flex flex-col justify-between items-center w-[25rem] drop-shadow-xl">
                    <h3 className="px-6 py-4 w-full bg-primary text-white font-bold text-2xl rounded-tr-3xl border-l-1 border-t-1 border-r-1 border-primary">Product Series</h3>

                    <Link to="/products/dynamo">
                        <div className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary cursor-pointer">
                            <h3 className="text-black font-bold text-lg">Dynamo</h3>
                            <h3 className="text-black font-bold text-lg">&gt;</h3>
                        </div>
                    </Link>


                    <div
                        className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-t-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary cursor-pointer"
                        onClick={isActiveOpenDieselGenerator}>
                            <h3 className="text-black font-bold text-lg">Open Diesel Generator</h3>
                            <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>

                    <div
                        className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-t-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary cursor-pointer"
                        onClick={isActiveSilentBoxDieselGenerator}>
                            <h3 className="text-black font-bold text-lg ">Silent Box Diesel Generator</h3>
                            <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>

                    <div
                        className="flex flex-row justify-between items-start px-6 py-4 border-l-1 border-t-1 border-r-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary cursor-pointer"
                        onClick={isActiveMobileTrailer}>
                            <h3 className="text-black font-bold text-lg">Mobile Trailer</h3>
                            <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>

                    <div
                        className="flex flex-row justify-between items-start px-6 py-4 border-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary cursor-pointer"
                        onClick={isActiveControlSystem}>
                            <h3 className="text-black font-bold text-lg">Control System</h3>
                            <h3 className="text-black font-bold text-lg">&gt;</h3>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 w-full">
                    <div id="allproducts" className="flex flex-wrap justify-start items-center gap-10">
                        {productsToShow.map(product => (
                            <div key={product.id} className="flex flex-col justify-center items-center gap-3">
                                <img src={product.image[0]} alt="product-image" className="w-[17rem] h-full object-cover border-1 border-gray-300 py-6"/>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <h3 className="font-bold text-primary text-xl">{product.name}</h3>
                                    <a href="#" className="bg-primary py-2 px-4 rounded-lg text-white font-bold text-md">Enquiry</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handleChange}
                        variant="outlined"
                        shape="rounded"
                        sx={{marginTop: '2rem'}}
                    />
                </div>
            </div>
        </div>
    )
};

export default Products;