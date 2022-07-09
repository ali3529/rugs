import {useRouter} from 'next/router';import React from 'react';

const WishListContext=React.createContext({
    whishListCount:0
})

export default WishListContext;