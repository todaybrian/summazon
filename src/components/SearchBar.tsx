import isDemoMode from "..//settings";
import Link from "next/link";

export default function SearchBar({ value = "https://www.amazon.ca/Generative-Deep-Learning-Teaching-Machines/dp/1098134184/" }: { value?: string}) {


    return <>
        <form action="/search" method="GET">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" name="q" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder={value} required={true} />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
            </div>
        </form>

        {isDemoMode &&
            <><div className="mx-auto mt-2">
                <i>Try our Demos: (Due to the high costs associated with web scraping, these are the only available demos.)</i>
                <div className="flex gap-4 mt-2">
                    <a href="/search?q=https://www.amazon.ca/Google-GVU6C-Pixel-7-128GB-Obsidian/dp/B0BCQXXRJJ/" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Google Pixel 7</a>
                    <a href="/search?q=https://www.amazon.ca/LiangCuber-Tornado-MagLev-Stickerless-Magnetic/dp/B0BG734Y6G/ref=pd_ci_mcx_mh_mcx_views_0?content-id=amzn1.sym.497f2919-28f2-4b22-9bda-5f5fc143fcd1" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Tornado V3 Speedcube</a>
                    <a href="/search?q=https%3A%2F%2Fwww.amazon.ca%2FNintendo-SwitchTM-Neon-Blue-Joy%25E2%2580%2591ConTM%2Fdp%2FB0BFJWCYTL%2F%3F_encoding%3DUTF8%26content-id%3Damzn1.sym.c23fd69a-b843-4aa8-bd42-94a2c7e3f3b7%26ref_%3Dpd_gw_crs_zg_bs_3198031" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Nintendo Switch</a>
                    <a href="/search?q=https%3A%2F%2Fwww.amazon.ca%2FHP-Display-Processor-Graphics-15-fd0000ca%2Fdp%2FB0BX7FD8H7%2F%3Fref_%3Dast_sto_dp" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">HP Laptop</a>
                    <a href="/search?q=https%3A%2F%2Fwww.amazon.ca%2FMoMa-MUJI-Point-0-5mm-Black%2Fdp%2FB00E1IBPGU%2Fref%3Dsr_1_6%3Fcrid%3D2HKAOU9VLFHJN" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Muji Pens</a>
                </div>
            </div> </>
        }
    </>;
}

