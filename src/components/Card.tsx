export default function Card({ title = "", content = "", isLoading = false }) {
    return <div className="bg-white border-slate-200 border-2 p-4 rounded-lg">
        {isLoading && <>
            <div className="h-6 bg-gray-300 rounded w-32"></div>
            <div className="text-gray-700 mt-2">
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="h-4 bg-gray-300 rounded col-span-2"></div>
                    <div className="h-4 bg-gray-300 rounded col-span-1"></div>
                    <div className="h-4 bg-gray-300 rounded col-span-3"></div>

                </div>
            </div></>}
        {!isLoading && <>
            <h2 className="text-xl font-semibold ">{title}</h2>
            <div className="text-gray-700 mt-2 whitespace-pre-line	">
                {content}
            </div>

        </>}
    </div>

}