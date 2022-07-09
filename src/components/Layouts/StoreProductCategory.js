function StoreProductCategory() {
    return (
        <div className="group w-24 flex items-center justify-center flex-col flex-shrink-0 cursor-pointer md:w-40">
            <img
                className="w-20 h-20 md:w-36 md:h-36 rounded-full m-1 group-hover:ring hover:border border-green-500"
                src="https://assets.rugimg.com/global/rugs-com/home/styles/style_plush_1x.jpg"
            />
            <span className="text-xs my-3 group-hover:underline">
                Plush Rugs
            </span>
        </div>
    )
}

export default StoreProductCategory
