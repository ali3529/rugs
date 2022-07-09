function WishListReducer(state, action) {

    switch (action.type) {
        case 'ADD':
            console.log(action.type);
            return { whishListCount: action.whishListCount }

        default:

            return state;
    }
}

export default WishListReducer