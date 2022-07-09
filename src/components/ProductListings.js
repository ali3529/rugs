import ProductCard from '@/components/ProductCard'

function ProductListings({ products }) {
    return (
        // <div className="my-2 grid grid-cols-2 lg:grid-cols-3 md:px-2 -z-50">
        <div className="my-2 grid grid-cols-1 m-4 sm:m-0 lg:grid-cols-3 md:px-2 -z-50">
            {products.map((product, index) => (
                <ProductCard key={index} index={index} product={product} />
            ))}
        </div>
    )
}

export default ProductListings
