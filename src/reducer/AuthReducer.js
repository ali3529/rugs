function AuthReducer(state, action) {

    switch (action.type) {
        case 'LOGIN':

            return { isAuth: action.isAuth,userData:action.userData }

        default:

            return state;
    }
}

export default AuthReducer