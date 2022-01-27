const init = {
    products: [],
    selectedCatalog: [],
    noResult: false,
    resultInclude: '',
}

const rootReducer = (state:any = init, action: any) => {
    
    switch(action.type) {
        
        case 'GET_INITIAL': {
            return {
                ...state,
                products: action.products
            }
        }

        case 'SELECT_CATEGORY': {
            return {
                ...state,
                noResult: false,
                resultInclude: '',
                selectedCatalog: action.category
            }
        }

        case 'SEARCH_RESULT': {
            return {
                ...state,
                noResult: false,
                selectedCatalog: [...action.result],
            }
        }

        case 'NO_RESULT': {
            return {
                ...state,
                noResult: true
            }
        }
        
        case 'RESULT_INCLUDE': {
            return {
                ...state,
                resultInclude: action.include
            }
        }

        case 'SEND_PRODUCT': {
            return {
                ...state,
                productPage: action.item
            }
        }
        
        default:
            return state;   
    }
}

export default rootReducer;