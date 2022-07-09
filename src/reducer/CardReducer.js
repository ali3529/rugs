function CardReducer(state, action) {

    switch (action.type) {
        case 'ADD':
            console.log(action.type);
            return { cardCount: action.cardCount }

        default:

            return state;
    }
}

export default CardReducer