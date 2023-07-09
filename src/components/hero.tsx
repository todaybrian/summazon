import Container from "../components/Container";

export default function Hero(){
    return (
        <>
            <Container className="flex flex-wrap pt-36">
                <div className="z-50 px-24 flex items-center w-full">
                    <div className="w-full mb-8 text-center">
                        <h1 className="text-4xl font-extrabold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            <span >Rise Above</span> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Canopy</span> of Amazon Reviews
                        </h1>
                        <p className="py-5 px-22 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Summazon summarizes Amazon reviews, categorizing them into key metrics (pros/cons, price, performance, reliability, quality), helping buyers navigate through the sea of products and make informed purchases more easily.
                        </p>
                    </div>
                </div>

            </Container>
        </>
    );
}
