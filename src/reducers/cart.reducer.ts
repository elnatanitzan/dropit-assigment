const init = {

}

const cartReducer = (state: any = init, action: any) => {
    switch(action.type) {
        case 'ADD_ITEM_TO_CART': {
            console.log('add: ', state.items)
            if (!state.items) {
                return {
                    ...state,
                    items: [action.product]
                }
            } else {
                return {
                    ...state,
                    items: [action.product, ...state.items]
                }
            }
        }
        default:
            return state;
    }


}

export default cartReducer