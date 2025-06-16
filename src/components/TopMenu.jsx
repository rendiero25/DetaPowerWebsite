import { useEffect, useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TbBrandWechat } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

const TopMenu = () => {
    const [mobile] = useState(window.innerWidth <= 640);

    const [showLang, setShowLang] = useState(false);
    // const openLang = () => setShowLang(true);
    // const closeLang = () => setShowLang(false);

    const [lang, setLang] = useState('en');

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    // Ambil data produk dari localStorage (atau bisa juga dari context/global state jika ada)
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
      fetch('/products.json')
        .then(res => res.json())
        .then(data => {
          // Gabungkan semua produk dari setiap kategori
          const flat = data.flatMap(cat => cat.categoryProducts.map(p => ({
            ...p,
            category: cat.categoryName
          })));
          setAllProducts(flat);
        });
    }, []);

    useEffect(() => {
        if (lang === 'id') {
            // Pastikan elemen sudah ada
            if (!document.getElementById('google_translate_script')) {
                const script = document.createElement('script');
                script.id = 'google_translate_script';
                script.type = 'text/javascript';
                script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                document.body.appendChild(script);
                window.googleTranslateElementInit = function() {
                    new window.google.translate.TranslateElement({
                        pageLanguage: 'en',
                        includedLanguages: 'id,en',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false
                    }, 'google_translate_element');
                    // Retry trigger
                    let tryCount = 0;
                    const trySelect = () => {
                        const select = document.querySelector('.goog-te-combo');
                        if (select) {
                            select.value = 'id';
                            select.dispatchEvent(new Event('change', { bubbles: true }));
                        } else if (tryCount < 30) {
                            tryCount++;
                            setTimeout(trySelect, 400);
                        }
                    };
                    setTimeout(trySelect, 1500);
                };
            } else {
                // Jika sudah ada, trigger translate ke Indonesia
                let tryCount = 0;
                const trySelect = () => {
                    const select = document.querySelector('.goog-te-combo');
                    if (select) {
                        select.value = 'id';
                        select.dispatchEvent(new Event('change', { bubbles: true }));
                    } else if (tryCount < 30) {
                        tryCount++;
                        setTimeout(trySelect, 400);
                    }
                };
                setTimeout(trySelect, 800);
            }
        } else if (lang === 'en') {
            let tryCount = 0;
            const trySelect = () => {
                const select = document.querySelector('.goog-te-combo');
                if (select) {
                    select.value = 'en';
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                } else if (tryCount < 30) {
                    tryCount++;
                    setTimeout(trySelect, 400);
                }
            };
            setTimeout(trySelect, 800);
        }
    }, [lang]);

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }
        // Cari produk berdasarkan nama (case-insensitive)
        const results = allProducts.filter(p =>
          p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

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
                    <button className="py-3" onClick={() => setShowSearch(true)}>
                        <BiSearch className="text-white size-7 cursor-pointer"/>
                    </button>
                    {showSearch && (
                        <div className="fixed inset-0 bg-primary/80 bg-opacity-40 flex justify-center items-start z-50">
                            <div className="bg-white rounded-lg shadow-lg mt-32 p-6 w-full max-w-md relative">
                                <button className="absolute top-2 right-2 text-gray-500" onClick={() => setShowSearch(false)}>&times;</button>
                                <h3 className="font-bold text-lg mb-2">Cari Produk</h3>
                                <input
                                    type="text"
                                    className="border px-3 py-2 rounded w-full mb-2"
                                    placeholder="Tulis nama produk..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
                                />
                                <button className="bg-primary text-white px-4 py-2 rounded" onClick={handleSearch}>Cari</button>
                                {searchResults.length > 0 && (
                                    <div className="mt-4">
                                        <h4 className="font-semibold mb-2">Hasil Produk:</h4>
                                        <ul className="max-h-40 overflow-y-auto text-sm">
                                            {searchResults.map((res, idx) => (
                                                <li key={idx} className="mb-1 border-b pb-1">
                                                    <a
                                                      href={`/products/${encodeURIComponent(res.category)}/${encodeURIComponent(res.name)}`}
                                                      className="text-primary hover:underline"
                                                      onClick={() => setShowSearch(false)}
                                                    >
                                                      {res.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {searchResults.length === 0 && searchTerm && (
                                    <div className="mt-4 text-gray-500 text-sm">Tidak ditemukan.</div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="hidden xl:flex border-r-[0.05rem] border-white"></div>

                    <button>
                        <TbBrandWechat className="text-white size-7 cursor-pointer"/>
                    </button>

                    <div className="hidden xl:flex border-r-[0.05rem] border-white"></div>

                    <div className="relative">
                        <button onClick={() => setShowLang(!showLang)} className="py-3">
                            <BiWorld className="text-white size-7 cursor-pointer"/>
                        </button>

                        {showLang && (
                            <div className="absolute -mt-2 right-0 bg-white rounded shadow-lg z-50" onMouseLeave={() => setShowLang(false)}>
                                <button onClick={() => setLang('id')} className="block w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer">Bahasa Indonesia</button>
                                <button onClick={() => setLang('en')} className="block w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer">English</button>
                            </div>
                        )}
                        {/* Google Translate container */}
                        <div id="google_translate_element" style={{display: 'none'}}></div>
                    </div>

                    <div className="hidden xl:flex border-r-[0.05rem] border-white"></div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;