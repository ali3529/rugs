const withPWA = require('next-pwa')

module.exports = withPWA({
    future: { webpack5: true },
    pwa: {
        
        dest: 'public',
        // register:true,
        // disable: process.env.NODE_ENV === 'development',
        disable: process.env.NODE_ENV === 'development',
    },
    env: {
        app_url:process.env.NODE_ENV === 'development'?'http://127.0.0.1:3000':'https://rug100.com',
        siteTitle: 'Rugs',
        siteDescription: 'shop rugs!',
        siteKeywords: 'shop, rug, usa',
        siteUrl: 'https://rug100.com/',
        siteImagePreviewUrl: '/images/main.jpg',
        twitterHandle: '@deeepwhitman',
        imgPath: 'https://back.rug100.com/storage',
        MONGO_URL:'mongodb+srv://acorp:Ali5153529@cluster0.rvdjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        NEXT_MAILCHIMP_URL:'https://gmail.us20.list-manage.com/subscribe/post?u=e0eda9c68489527fca1dc4aa0&amp;id=9fd6a47909',
        CAPTCHA_SITE_KEY:'6Le2B4YgAAAAAIgO1zkuiGBPYOT11WA_fWY7JpnT',
        CAPTCHA_SECRET_KEY:'6Le2B4YgAAAAAAGh03ik_OXYKDgbK7VIGArEtNrD'
        
    },
    images: {
        domains: ['cdn.shopify.com', 'images.rugimg.com','back.rug100.com'],
    },
})
