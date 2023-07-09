import { useEffect, useState, useRef, Fragment } from "react";
import { NextSeo } from "next-seo";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Stars from "../components/Stars";
import http from "http";

import { useRouter } from "next/router";

const regexPattern = /\/([A-Z0-9]{10})\//;

const cards = ["Pros", "Cons", "Pricing", "Quality", "Performance", "Reliability"];

export default function Search() {
    const router = useRouter();
    const { q } = router.query;
    const [isLoading, setIsLoading] = useState(true);
    const searchResultsRef = useRef(null);
    let productCode: string | null = null;

    useEffect(() => {

        if (q) {
            if (typeof q === "string") {
                const match = q.match(regexPattern);
                if (match && match.length >= 2) {
                    productCode = match[1];
                }
            } else return;
            if(!productCode) return;
            http.get(`http://localhost:5000/dummy?id=${productCode}`, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    const parsedData = JSON.parse(data);
                    console.log(data);

                    searchResultsRef.current = (parsedData);
                    console.log(searchResultsRef.current);
                    setIsLoading(false);
                });
            }).on('error', (error) => {
                console.log(error);
            });
        }
    }, [q]);


    return (
        <>
            <NextSeo title="Search | Summazon: Rise Above the Canopy of Amazon Reviews" description="Summazon is a new way to ... " noindex />
            <Navbar />
            <div className="max-w-7xl mx-auto px-10">
                <div className="mx-auto">
                    <SearchBar value={q} />
                </div>
            </div>
            <div className={`z-50 container mx-auto px-4 mt-7 ${isLoading && "animate-pulse"}`}>
                <div className="max-w-6xl mx-auto">
                    {isLoading && <>
                        <div className="animate-pulse rounded-full h-12 max-w-xl bg-gray-300"></div>

                        <div className="grid grid-cols-2 gap-4 mt-7">
                            <div>
                                <div className="bg-gray-300 w-full aspect-video object-cover rounded-lg shadow-lg" ></div>

                            </div>
                            <div>
                                <div className="animate-pulse rounded-full h-12 max-w-xs bg-gray-300"></div>

                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <div className="h-6 bg-gray-300 rounded col-span-2"></div>
                                    <div className="h-6 bg-gray-300 rounded col-span-1"></div>
                                    <div className="h-6 bg-gray-300 rounded col-span-3"></div>
                                    <div className="h-6 bg-gray-300 rounded col-span-1"></div>
                                    <div className="h-6 bg-gray-300 rounded col-span-2"></div>
                                </div>

                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {
                                Array(6).fill(null).map((_, index) => (
                                    <Fragment key={index}>
                                        <Card isLoading={true} />
                                    </Fragment>
                                ))
                            }
                        </div>
                    </>}
                    {!isLoading && <>
                        <h1 className="text-4xl font-bold text-gray-900">{searchResultsRef.current["Product Name"]}</h1>

                        <div className="grid grid-cols-2 gap-4 mt-7">
                            <div>
                                <img src={searchResultsRef.current["Image"]} alt="Product image" className="w-full h-auto object-cover rounded-lg shadow-lg" />

                            </div>
                            <div>
                                <Stars number={searchResultsRef.current["Rating"]} />

                                <p className="text-lg text-gray-700 mt-4">{searchResultsRef.current["Description"]}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {
                                cards.map((card, index) => (
                                    <Fragment key={index}>
                                        <Card title={card} content={searchResultsRef.current[card]} />
                                    </Fragment>
                                ))
                            }
                        </div></>}

                </div>
            </div>

            <Footer />

        </>
    );
}