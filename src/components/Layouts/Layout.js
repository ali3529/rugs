import Nav from '@/components/Layouts/Nav'
import Footer from '@/components/Layouts/Footer'
import { CartProvider } from '@/context/Store'

import React, { useEffect, useReducer } from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import CardContext from '@/context/CardContext'
import CardReducer from '@/reducer/CardReducer'
import WishListContext from '@/context/WishListContext'
import WishListReducer from '@/reducer/WishListReducer'
import AuthContext from '@/context/AuthContext'
import AuthReducer from '@/reducer/AuthReducer'
import FilterContex from '@/context/FilterContex'
import FilterReducer from '@/reducer/FilterReducer'


function Layout({ children }) {
    const queryClient = new QueryClient();
    const [state, dispatch] = useReducer(CardReducer, { cardCount: 0 })
    const [whishstate, wishdispatch] = useReducer(WishListReducer, { whishListCount: 0 })

    const [authState, authDispatch] = useReducer(AuthReducer, { isAuth: false })
    const [atttributeState, atttributeDispatch] = useReducer(FilterReducer, { atttribute: '' })

    useEffect(() => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/611eca90d6e7610a49b10b5f/1fdg4egul';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();

    }, [])

    return (
        // <CartProvider>

            <QueryClientProvider client={queryClient}>
                <AuthContext.Provider value={{ isAuth: authState.isAuth, userData: authState.userData, authDispatch }}>
                    <CardContext.Provider value={{ cardCount: state.cardCount, dispatch }}>
                        <WishListContext.Provider value={{ whishListCount: whishstate.whishListCount, wishdispatch }}>
                            <FilterContex.Provider value={{atttribute:atttributeState.atttribute,atttributeDispatch}}>
                               
                                <div className="flex flex-col justify-between min-h-screen bg-white">
                                    <>
                                        <Nav />

                                        <main>{children}</main>

                                        <Footer /></>

                                </div>
                            </FilterContex.Provider>
                        </WishListContext.Provider>
                    </CardContext.Provider>
                </AuthContext.Provider>
            </QueryClientProvider>
        // </CartProvider>
    )
}

export default Layout
