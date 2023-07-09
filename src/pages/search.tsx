import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from "../components/SearchBar";

import { useRouter } from "next/router";

// const regexPattern = /\/([A-Z0-9]{10})\//;

export default function Search() {
    const router = useRouter();
    const { q } = router.query;
    const [isLoading, setIsLoading] = useState(true);
    const [searchResults, setSearchResults] = useState({});

    useEffect(() => {

        if (q) {
            // Make your API request using the `q` value
            fetch(`http://localhost:5000/dummy?id=${q}`)
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data.results);
                    setIsLoading(false);
                })
                .catch(error => console.log(error));
        }
    }, [q]);


    return (
        <>
            <NextSeo title="Search | Summazon: Rise Above the Canopy of Amazon Reviews" description="Summazon is a new way to ... " noindex />
            <Navbar />
            <div className="mx-60">
                <SearchBar />
            </div>
            <div className="container mx-auto px-4 mt-7 animate-pulse">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900">{!isLoading && "BRUH"}</h1>
                    <p className="text-lg text-gray-700 mt-4">Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="mt-8">
                        <img src="img.jpg" alt="Product image" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-green-100 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold text-green-700">Pros</h2>
                            <ul className="text-gray-700 mt-2">
                                <li>- Pro 1</li>
                                <li>- Pro 2</li>
                                <li>- Pro 3</li>
                            </ul>
                        </div>
                        <div className="bg-red-100 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold text-red-700">Cons</h2>
                            <ul className="text-gray-700 mt-2">
                                <li>- Con 1</li>
                                <li>- Con 2</li>
                                <li>- Con 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}