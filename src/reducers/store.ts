// Configuration of main-store which combines all the Reducers under Middleware to increase Redux-store capabilities--

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { API } from "../contexts/api";

// import catalogReducer from './catalog.reducer';


// const reducers = combineReducers({
//     catalog: catalogReducer,
// })

// const composeEnhanchers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// export type RootState = ReturnType<typeof reducers>;
// export const store = createStore(reducers, composeEnhanchers(applyMiddleware(thunk)))
// API.product.getAll().then((res) => store.dispatch({type: 'GET_INITIAL', products: res}));

