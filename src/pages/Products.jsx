import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import ProfileBanner from "../assets/profilebanner.jpg";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductDetail = ({ product }) => (
    <div className="flex flex-col gap-4 p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">{product.name}</h2>
        <div className="flex gap-6">
            {/* Images */}
            <div>
                {product.image && product.image.map((img, idx) => (
                    <img key={idx} src={img} alt={product.name} className="w-[18rem] mb-4" />
                ))}
            </div>
            {/* Description & model */}
            <div>
                {product.description && (
                    <img src={product.description} alt="product-description" className="mb-2 w-50"/>
                )}
                {product.model && Array.isArray(product.model) && (
                    <div>
                        <h4 className="font-bold mb-1">Model List:</h4>
                        {product.model.map((m, idx) => (
                            <div key={idx} className="mb-2">
                                <strong>{m.modelName}</strong>
                                {m.modelImage &&
                                    <img src={m.modelImage} alt={m.modelName} className="w-56 mt-1" />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);


const Products = () => {

    const navigate = useNavigate();
    const { category, product } = useParams();

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const selectedCategory = category ? decodeURIComponent(category) : 'all';

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

    const getProductsByCategory = () => {
        if (selectedCategory === 'all') {
            return products.flatMap(category => category.categoryProducts);
        } else {
            const category = products.find(cat => cat.categoryName === selectedCategory);
            return category ? category.categoryProducts : [];
        }
    };

    const allProducts = getProductsByCategory();
    const productsPerPage = 9;
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = allProducts.slice(startIndex, endIndex);
    const pageCount = Math.ceil(allProducts.length / productsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        setPage(1);
    }, [selectedCategory])

    const handleCategoryClick = (category) => {
        if (category === 'all') {
            navigate('/products');
        } else {
            navigate(`/products/${encodeURIComponent(category)}`);
        }
    };

    const handleProductClick = (productname) => {
        navigate(`/products/${encodeURIComponent(selectedCategory)}/${encodeURIComponent(productname)}`);
    };

    if (product) {
        const detailData = allProducts.find(p => encodeURIComponent(p.name) === encodeURIComponent(product));
        if (!detailData) {
            return <div>Product not found</div>
        }

        return (
            <div className="flex flex-col xl:pb-16">
                <div className="h-[9rem] xl:h-[15rem]">
                    <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
                </div>

                <Breadcrumbs linktopage={"/products"} pagename={"Products"}/>

                <div className="flex flex-col xl:flex-row justify-between items-start gap-8 sm:px-12 xl:px-25 mt-20">
                    {/* Sidebar kategori */}
                    <div className="flex flex-col justify-between items-center w-[25rem] drop-shadow-xl">
                        <h3 className="px-6 py-4 w-full bg-primary text-white font-bold text-2xl rounded-tr-3xl border-l-1 border-t-1 border-r-1 border-primary">Product Series</h3>
                        {products.map((cat, idx) => (
                            <div key={cat.categoryId}
                                 className={`flex flex-row justify-between items-start px-6 py-4 border-l-1 border-r-1 border-b-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary cursor-pointer
                                 ${selectedCategory === cat.categoryName ? "font-bold" : ""}`}
                                 onClick={() => handleCategoryClick(cat.categoryName)}>
                                    <h3 className="text-black text-lg">{cat.categoryName}</h3>
                                    <h3 className="text-black text-lg">&gt;</h3>
                            </div>
                        ))}
                    </div>
                    {/* Area detail produk */}
                    <div className="flex-1">
                        <ProductDetail product={detailData} />
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className="flex flex-col xl:pb-16">
            <div className="h-[9rem] xl:h-[15rem] 3xl:h-[22rem] 4xl:h-[30rem]">
                <img src={ProfileBanner} alt="profilebanner-image" className="w-full h-full object-cover"/>
            </div>

            <Breadcrumbs linktopage={"/products"} pagename={"Products"}/>

            <div className="flex flex-col xl:flex-row justify-between items-start gap-8 sm:px-12 xl:px-25 3xl:px-85 4xl:px-158 mt-20">
                <div className="flex flex-col justify-between items-center w-[25rem] drop-shadow-xl">
                    <h3 className="px-6 py-4 w-full bg-primary text-white font-bold text-2xl rounded-tr-3xl border-l-1 border-t-1 border-r-1 border-primary">Product Series</h3>
                    {products.map((cat, idx) => (
                        <div key={cat.categoryId}
                             className={`flex flex-row justify-between items-start px-6 py-4 border-l-1 border-r-1 border-b-1 border-gray-400 w-full hover:bg-gray-100 hover:border-l-5 hover:border-l-primary cursor-pointer ${selectedCategory === cat.categoryName ? "font-bold" : ""}`}
                             onClick={() => handleCategoryClick(cat.categoryName)}>
                                <h3 className="text-black text-lg">{cat.categoryName}</h3>
                                <h3 className="text-black text-lg">&gt;</h3>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center gap-6 w-full">
                    <div id="allproducts" className="flex flex-wrap justify-start items-center gap-10">
                        {productsToShow.map(product => (
                            <div key={product.id} className="flex flex-col justify-center items-center gap-3">
                                <img
                                    src={product.image[0]}
                                    alt="product-image"
                                    className="w-[17rem] h-full object-cover border-1 border-gray-300 py-6 cursor-pointer"
                                    onClick={() => handleProductClick(product.name)}/>

                                <div className="flex flex-row justify-between items-center w-full">
                                    <h3
                                        className="font-bold text-primary text-xl cursor-pointer"
                                        onClick={() => handleProductClick(product.name)}>
                                            {product.name}
                                    </h3>

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