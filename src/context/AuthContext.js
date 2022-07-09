import React from 'react';

const AuthContext=React.createContext({
    isAuth:false,
    userData:{}
})

export default AuthContext;