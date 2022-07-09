import HorizantalSlider from './Elements/HorizantalSlider'
import { useProductsApis } from '@/hooks/productApis'
import { useEffect, useState } from 'react'
import Breadcrumbs from './Breadcrumbs'
import ProductForm from './ProductForm'
import ProductReview from './ProductReview'
// import ProductImage from './ProductImage'
import ProductSection from './ProductSection'
import ProductSimilar from './ProductSimilar'
import StarRatings from './StarRatings'


function ProductDetails({ productData }) {
    const { getAdditionalInformation } = useProductsApis()

    const [timeLeft, setTimeLeft] = useState(null)
    const [product, setProduct] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const [error, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [refresh] = useState(false)

    const [sizes, setSizes] = useState([])
    const [images, setImages] = useState([])
    const [tinyImages, setTinyImages] = useState([])
    const [collection, setCollection] = useState(null)
    const [productInformation, setProductInformation] = useState([])

    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    function onChangeProductColor(image) {
        setSelectedColor(image)
        if (image) changeSizesByColor(image.main_color)
    }

    function changeSizesByColor(imageId) {
        let productsBySize = productData.variants
            .filter(item => item.main_color == imageId)
            .map(item => item.size)

        let items = []
        let attribute = productData.super_attributes.filter(item => {
            return item.code === 'size'
        })
        if (attribute.length > 0) {
            items = attribute[0].options.filter(item => {
                return productsBySize.filter(size => {
                    return size == item.id
                }).length
            })
        }

        if (items.length > 0) {
            let find = items.filter(item => item.id === selectedSize)
            if (!find.length > 0) setSelectedSize(items[0].id)
        }
        setSizes(items)
    }

    function onChangeProductSize(size) {
        setSelectedSize(size)
    }

    useEffect(() => {
        if (selectedColor && selectedSize) {
            productData.variants.forEach(item => {
                if (item.main_color == selectedColor.main_color) {
                    if (item.size === selectedSize) {
                        setProduct(item)
                        return
                    }
                }
            })
        }
    }, [selectedSize, selectedColor])

    useEffect(() => { }, [error, status, loading])

    useEffect(() => {
        if (product) {
            setTimeout(() => {
                setTimeLeft(calculateTimeLeft(product.special_price_to))
            }, 1000)
            // get product images
            setImages(product.images)

            //get product collection
            setCollection(getProductInfoByCode('collection'))
        }
    }, [product, productInformation])

    var groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            ; (rv[x[key]] = rv[x[key]] || []).push(x)
            return rv
        }, {})
    }

    useEffect(() => {
        if (productData) {
            if (productData.type === 'configurable') {
                let defaultVariantId =
                    productData?.additional?.default_variant_id
                setSelectedProduct(defaultVariantId)

                //get tinyImages :: only configurable type
                let colors = groupBy(productData.variants, 'main_color')
                let items = []
                Object.entries(colors).forEach(([key, values]) => {
                    let img = productData.base_image.large_image_url
                    if (values[0].images.length > 0) {
                        img = values[0].images[0].url
                    }
                    items.push({
                        url: img,
                        main_color: key,
                    })
                })
                setTinyImages(items)
            } else {
                setSelectedProduct(productData.id)
            }
        }
    }, [productData])

    useEffect(() => {
        if (productData && selectedProduct) {
            getAdditionalInformation({
                setErrors,
                setStatus,
                setLoading,
                setProductInformation,
                id: selectedProduct,
            })
            if (productData.type === 'configurable') {
                let filtered = productData.variants.filter(value => {
                    return value.id == selectedProduct
                })
                if (filtered.length > 0) {
                    setProduct(filtered[0])
                } else {
                    setProduct(null)
                }
            } else {
                setProduct(productData)
            }
        }
    }, [selectedProduct])

    function getProductInfoByCode(code) {
        let filters = productInformation?.filter(item => {
            return item.code === code
        })

        if (filters?.length > 0) return filters[0]
        return null
    }

    function calculateTimeLeft(time) {
        const difference = +new Date(time) - +new Date()

        let timeLeft = ''

        if (difference > 0) {
            timeLeft = `${Math.floor(
                difference / (1000 * 60 * 60 * 24),
            )}d ${Math.floor(
                (difference / (1000 * 60 * 60)) % 24,
            )}h ${Math.floor((difference / 1000 / 60) % 60)}m ${Math.floor(
                (difference / 1000) % 60,
            )}s`
        }

        return timeLeft
    }

    return (
        <>
            {product && (
                <Breadcrumbs collection={collection?.value} sku={product.sku.toUpperCase()} />
            )}
            {product && (
                <section className="text-gray-600  lg:mx-8 mx-4">
                    <div className="flex">
                        <div className="flex flex-col items-start mt-2">
                            <h1 className="text-3xl text-gray-900 title-font font-bold">
                                {product.name}
                            </h1>
                         
                        </div>
                    </div>
                    <div className="my-8">
                        <ProductSection
                            product={product}
                            
                            short_description={productData.short_description}
                            images={images}
                            timeLeft={timeLeft}
                            tinyImages={tinyImages}
                            sizes={sizes}
                            onChangeProductSize={onChangeProductSize}
                            onChangeProductColor={onChangeProductColor}
                        />

                        <div className="flex flex-wrap mx-4 my-8">
                            <ProductForm
                                productInformation={productInformation}
                                product={product}
                                description={productData.description}
                            />
                        </div>

                        <div className="mx-4 my-16">
                            <ProductSimilar />
                        </div>

                        <div className="mx-4 my-8">
                            <ProductReview product={product} />
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default ProductDetails
