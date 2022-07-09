const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken =
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN
const collection = process.env.NEXT_PUBLIC_SHOPIFY_COLLECTION

async function callShopify(query) {
    const fetchUrl = `https://${domain}/api/2021-01/graphql.json`

    const fetchOptions = {
        endpoint: fetchUrl,
        method: 'POST',
        headers: {
            'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    }

    try {
        const data = await fetch(fetchUrl, fetchOptions).then(response =>
            response.json(),
        )
        return data
    } catch (error) {
        throw new Error('Could not fetch products!')
    }
}

export async function getAllProductsInCollection() {
    // const query = ''

    // const response = await callShopify(query)

    // const allProducts = response.data.collectionByHandle.products.edges
    //     ? response.data.collectionByHandle.products.edges
    //     : []

    const allProducts = [
        {
            node: {
                id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU2NzA5NTM5NzU5NjM=',
                title: 'Beige Amina Rug',
                description: 'Beige Amina Rug',
                handle: 'beige-3x5-amina-area-rug-6263726',
                images: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyNzgzMTcyMTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-fc750eaa.jpg?v=1616988549',
                                height: 1000,
                                width: 1000,
                                altText: 'test-text',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyNzg1NDY1ODc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1fd03b4a.jpg?v=1601536949',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyNzkwMzgxMDc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-933fb760.jpg?v=1601536950',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyNzk0MzEzMjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-ce64bb0c.jpg?v=1601536951',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyNzk1Mjk2Mjc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-72f9380c.jpg?v=1601536952',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODAyMTc3NTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-5039e70b.jpg?v=1601536953',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODA1NzgyMDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-31b6770d.jpg?v=1601536953',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODA3NzQ4MTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-3f618563.jpg?v=1601536955',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODA5Mzg2NTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-45084e66.jpg?v=1601536955',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODE3MjUwODM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-4df631c3.jpg?v=1601536956',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODIwODU1MzE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-bf6136fc.jpg?v=1601536958',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODIxODM4MzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-7fea72da.jpg?v=1601536958',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODIzODA0NDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-d9561efc.jpg?v=1601536959',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODMyMzI0MTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-e58ee30f.jpg?v=1601536961',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODM0OTQ1NTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-eb4a49a0.jpg?v=1601536962',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODQxMTcxNDc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-9b3bf8f9.jpg?v=1601536963',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODQ3NzI1MDc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-8f3b15a0.jpg?v=1601536964',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyODU0Mjc4Njc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-20344abf.jpg?v=1601536965',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                    ],
                },
                variants: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIzNDA5NDc0Nw==',
                                title: '3 x 3',
                                price: '9.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIzNDEyNzUxNQ==',
                                title: '4 x 4',
                                price: '10.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIzNDE2MDI4Mw==',
                                title: '5.5 x 5.5',
                                price: '11.99',
                            },
                        },
                    ],
                },
            },
        },
        {
            node: {
                id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU2NzA5NDgwNzc3MjM=',
                title: 'Beige Amina Rug',
                description: "You know he's got his own personal stylist.",
                handle: 'beige-3x5-amina-area-rug-6263726',
                images: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzMzNTk1MTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-6aeffeca.jpg?v=1617396810',
                                height: 1000,
                                width: 1000,
                                altText: 'fashion-dog',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzMzOTIyODM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-a34bd84d.jpg?v=1601536831',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzM1MjMzNTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c9bb0fa8.jpg?v=1601536832',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzM4MTgyNjc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1b0f8ce6.jpg?v=1601536833',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQwMTQ4NzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1819a219.jpg?v=1601536834',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQwODA0MTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-5e8b0b6b.jpg?v=1601536835',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQxNzg3MTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-10062679.jpg?v=1601536836',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQyMTE0ODM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-8440e4bc.jpg?v=1601536837',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQyNzcwMTk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1b0d1742.jpg?v=1601536838',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQ0MDgwOTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-efbb9596.jpg?v=1601536839',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQ1MDYzOTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-92cfde5d.jpg?v=1601536840',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzQ3MzU3NzE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-0913ad6f.jpg?v=1601536841',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzUxNjE3NTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-bc3d256a.jpg?v=1601536842',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzU4ODI2NTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-259a1e8c.jpg?v=1601536843',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzY2NjkwODM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-53f78edf.jpg?v=1601536844',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzY4NjU2OTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-34728850.jpg?v=1601536845',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzcwMjk1MzE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-cfd17bd2.jpg?v=1601536846',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMzc1NTM4MTk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-da023776.jpg?v=1601536847',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                    ],
                },
                variants: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIyNTA4MzU0Nw==',
                                title: '3 x 3',
                                price: '9.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIyNTExNjMxNQ==',
                                title: '4 x 4',
                                price: '10.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIyNTE4MTg1MQ==',
                                title: '5.5 x 5.5',
                                price: '11.99',
                            },
                        },
                    ],
                },
            },
        },
        {
            node: {
                id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU2NzA5NDM3ODUxMTU=',
                title: 'Beige Amina Rug',
                description: 'Look at that crazy and cute face!',
                handle: 'the-drooler',
                images: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1NTE4MzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-de719380.jpg?v=1617396832',
                                height: 1000,
                                width: 1000,
                                altText: 'drooler-main',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1ODQ2MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-5b7b683c.jpg?v=1601536747',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI4Nzk1MTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-9a8cf5a3.jpg?v=1601536748',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTMxMDg4OTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-344c8816.jpg?v=1601536749',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM0MzY1NzE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-d00d1d64.jpg?v=1601536750',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM1MDIxMDc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1a2c4f05.jpg?v=1601536751',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM3NjQyNTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-476f8a6f.jpg?v=1601536752',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQwNTkxNjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-8e069cfb.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQzODY4NDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-92741812.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQ0NTIzNzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-460cf7e0.jpg?v=1601536754',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUxNzMyNzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-e0919522.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyMDYwNDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1ea5b52c.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyNzE1Nzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-43104d15.jpg?v=1601536757',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTYzMjAxNTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-06abfc4f.jpg?v=1601536759',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY1MTY3NjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c3819672.jpg?v=1601536760',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4MTE2NzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c7f9c6b9.jpg?v=1601536761',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4NzcyMTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-72a6e2be.jpg?v=1601536762',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTc0OTk4MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-14a13080.jpg?v=1601536763',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                    ],
                },
                variants: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAwNjgxMQ==',
                                title: '3 x 3',
                                price: '9.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAzOTU3OQ==',
                                title: '4 x 4',
                                price: '10.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjEwNTExNQ==',
                                title: '5.5 x 5.5',
                                price: '11.99',
                            },
                        },
                    ],
                },
            },
        },
        {
            node: {
                id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU2NzA5NDM3ODUxMTU=',
                title: 'Beige Amina Rug',
                description: 'Look at that crazy and cute face!',
                handle: 'beige-3x5-amina-area-rug-6263726',
                images: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1NTE4MzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-de719380.jpg?v=1617396832',
                                height: 1000,
                                width: 1000,
                                altText: 'drooler-main',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1ODQ2MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-5b7b683c.jpg?v=1601536747',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI4Nzk1MTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-9a8cf5a3.jpg?v=1601536748',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTMxMDg4OTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-344c8816.jpg?v=1601536749',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM0MzY1NzE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-d00d1d64.jpg?v=1601536750',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM1MDIxMDc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1a2c4f05.jpg?v=1601536751',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM3NjQyNTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-476f8a6f.jpg?v=1601536752',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQwNTkxNjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-8e069cfb.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQzODY4NDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-92741812.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQ0NTIzNzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-460cf7e0.jpg?v=1601536754',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUxNzMyNzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-e0919522.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyMDYwNDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1ea5b52c.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyNzE1Nzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-43104d15.jpg?v=1601536757',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTYzMjAxNTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-06abfc4f.jpg?v=1601536759',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY1MTY3NjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c3819672.jpg?v=1601536760',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4MTE2NzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c7f9c6b9.jpg?v=1601536761',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4NzcyMTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-72a6e2be.jpg?v=1601536762',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTc0OTk4MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-14a13080.jpg?v=1601536763',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                    ],
                },
                variants: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAwNjgxMQ==',
                                title: '3 x 3',
                                price: '9.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAzOTU3OQ==',
                                title: '4 x 4',
                                price: '10.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjEwNTExNQ==',
                                title: '5.5 x 5.5',
                                price: '11.99',
                            },
                        },
                    ],
                },
            },
        },
        {
            node: {
                id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU2NzA5NDM3ODUxMTU=',
                title: 'Beige Amina Rug',
                description: 'Look at that crazy and cute face!',
                handle: 'beige-3x5-amina-area-rug-6263726',
                images: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1NTE4MzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-de719380.jpg?v=1617396832',
                                height: 1000,
                                width: 1000,
                                altText: 'drooler-main',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1ODQ2MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-5b7b683c.jpg?v=1601536747',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI4Nzk1MTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-9a8cf5a3.jpg?v=1601536748',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTMxMDg4OTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-344c8816.jpg?v=1601536749',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM0MzY1NzE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-d00d1d64.jpg?v=1601536750',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM1MDIxMDc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1a2c4f05.jpg?v=1601536751',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM3NjQyNTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-476f8a6f.jpg?v=1601536752',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQwNTkxNjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-8e069cfb.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQzODY4NDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-92741812.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQ0NTIzNzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-460cf7e0.jpg?v=1601536754',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUxNzMyNzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-e0919522.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyMDYwNDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1ea5b52c.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyNzE1Nzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-43104d15.jpg?v=1601536757',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTYzMjAxNTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-06abfc4f.jpg?v=1601536759',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY1MTY3NjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c3819672.jpg?v=1601536760',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4MTE2NzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c7f9c6b9.jpg?v=1601536761',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4NzcyMTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-72a6e2be.jpg?v=1601536762',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTc0OTk4MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-14a13080.jpg?v=1601536763',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                    ],
                },
                variants: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAwNjgxMQ==',
                                title: '3 x 3',
                                price: '9.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAzOTU3OQ==',
                                title: '4 x 4',
                                price: '10.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjEwNTExNQ==',
                                title: '5.5 x 5.5',
                                price: '11.99',
                            },
                        },
                    ],
                },
            },
        },
        {
            node: {
                id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU2NzA5NDM3ODUxMTU=',
                title: 'Beige Amina Rug',
                description: 'Look at that crazy and cute face!',
                handle: 'beige-3x5-amina-area-rug-6263726',
                images: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1NTE4MzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-de719380.jpg?v=1617396832',
                                height: 1000,
                                width: 1000,
                                altText: 'drooler-main',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI1ODQ2MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-5b7b683c.jpg?v=1601536747',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTI4Nzk1MTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-9a8cf5a3.jpg?v=1601536748',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTMxMDg4OTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-344c8816.jpg?v=1601536749',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM0MzY1NzE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-d00d1d64.jpg?v=1601536750',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM1MDIxMDc=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1a2c4f05.jpg?v=1601536751',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTM3NjQyNTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-476f8a6f.jpg?v=1601536752',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQwNTkxNjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-8e069cfb.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQzODY4NDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-92741812.jpg?v=1601536753',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTQ0NTIzNzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-460cf7e0.jpg?v=1601536754',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUxNzMyNzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-e0919522.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyMDYwNDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-1ea5b52c.jpg?v=1601536756',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTUyNzE1Nzk=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-43104d15.jpg?v=1601536757',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTYzMjAxNTU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-06abfc4f.jpg?v=1601536759',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY1MTY3NjM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c3819672.jpg?v=1601536760',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4MTE2NzU=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-c7f9c6b9.jpg?v=1601536761',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTY4NzcyMTE=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-72a6e2be.jpg?v=1601536762',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTk0MzYyMTc0OTk4MDM=',
                                originalSrc:
                                    'https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-14a13080.jpg?v=1601536763',
                                height: 1000,
                                width: 1000,
                                altText: null,
                            },
                        },
                    ],
                },
                variants: {
                    edges: [
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAwNjgxMQ==',
                                title: '3 x 3',
                                price: '9.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjAzOTU3OQ==',
                                title: '4 x 4',
                                price: '10.99',
                            },
                        },
                        {
                            node: {
                                id:
                                    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjIyNDIxNjEwNTExNQ==',
                                title: '5.5 x 5.5',
                                price: '11.99',
                            },
                        },
                    ],
                },
            },
        },
    ]
    return allProducts
}

export async function getProductSlugs() {
    const query = `{
      collectionByHandle(handle: "${collection}") {
        products(first: 250) {
          edges {
            node {
              handle
            }
          }
        }
      }
    }`

    const response = await callShopify(query)

    const slugs = response.data.collectionByHandle.products.edges
        ? response.data.collectionByHandle.products.edges
        : []

    return slugs
}

export async function getProduct(handle) {
    const query = `{
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 250) {
          edges {
            node {
              id
              originalSrc
              height
              width
              altText
            }
          }
        }
        variants(first: 250) {
          edges {
            node {
              id
              title
              price
            }
          }
        }
      }
    }`

    const response = await callShopify(query)

    const product = response.data.productByHandle
        ? response.data.productByHandle
        : []

    return product
}

export async function createCheckout(id, quantity) {
    const query = `mutation
      {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
        }) {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }
    `

    const response = await callShopify(query)

    const checkout = response.data.checkoutCreate.checkout
        ? response.data.checkoutCreate.checkout
        : []

    return checkout
}

export async function updateCheckout(id, lineItems) {
    const formattedLineItems = lineItems.map(item => {
        return `{
      variantId: "${item.variantId}",
      quantity:${item.quantity}
    }`
    })

    const query = `mutation
      {
        checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }
    `

    const response = await callShopify(query)

    const checkout = response.data.checkoutLineItemsReplace.checkout
        ? response.data.checkoutLineItemsReplace.checkout
        : []

    return checkout
}
