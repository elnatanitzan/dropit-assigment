const rootReducer = (state: any = {}, action: any) => {
    
    switch(action.type) {
      
        case 'SELECT_CATEGORY': {
            return {
                ...state,
                selectCategory: action.category
            }
        }

        default:
            console.log(state);
            return state;   
    }
}

export default rootReducer;