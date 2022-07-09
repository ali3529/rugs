function FilterReducer(state, action) {

    switch (action.type) {
        case 'ADD':
            console.log("siopdjviosdj",action.atttribute);
            return { atttribute: action.atttribute }

        default:

            return state;
    }
}

export default FilterReducer