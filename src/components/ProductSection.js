import ProductImage from '@/components/ProductImage'
import ProductInfo from './ProductInfo'
// import ProductDetails from '@/components/ProductDetails'

function ProductSection({
    product,
    description,
    short_description,
    images,
    timeLeft,
    tinyImages,
    sizes,
    onChangeProductSize,
    onChangeProductColor,
}) {
    return (
        <div className="flex flex-wrap mx-4">
            <div className="w-full md:w-1/2 ">
                <ProductImage
                    alt={product.name}
                    images={images}
                    className="w-full"
                />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
                <ProductInfo
                    product={product}
                    description={description}
                    short_description={short_description}
                    timeLeft={timeLeft}
                    tinyImages={tinyImages}
                    sizes={sizes}
                    onChangeProductSize={onChangeProductSize}
                    onChangeProductColor={onChangeProductColor}
                />
            </div>
        </div>
    )
}

export default ProductSection
