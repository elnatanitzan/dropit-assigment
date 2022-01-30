const init = {
    items: [],
    username: '',
    login: false,
}

export const sumItems = (items: any[]) => {
    let itemCount = items.reduce((total, product) => total + product.quantity, 0);
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

const cartReducer = (state: any = init, action: any) => {
    switch(action.type) {
        
        case 'ADD_ITEM_TO_CART': {
            if (!state.items.find((item: { id: number; }) => item.id === action.product.id)) {
                state.items.unshift({
                    ...action.product,
                    quantity: 1,
                    totalPrice: action.product.price
                })
            } else {
                const itemIncrease = state.items.find((item: { id: number; }) => item.id === action.product.id);
                itemIncrease.quantity++;
                itemIncrease.totalPrice = itemIncrease.quantity * itemIncrease.price;
            }
        
            console.log(state.items);
            return {
                ...state,
                ...sumItems(state.items),
                items: [...state.items],
                // total: sumItems.total
            }
        }

        case 'USERNAME': {
            return {
                ...state,
                username: action.username,
                login: !state.login
            }
        }
        
        case 'LOGOUT': {
            return {
                ...state,
                username: '',
                login: !state.login
            }
        }

        default:
            return state;
    }


}

export default cartReducer