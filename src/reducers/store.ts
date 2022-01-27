// Configuration of main-store which combines all the Reducers under Middleware to increase Redux-store capabilities--

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';
import cartReducer from './cart.reducer';


  const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('state');
      return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

const persistedStore = loadFromLocalStorage();

const reducers = combineReducers({
    catalog: rootReducer,
    cart: cartReducer,
})

const composeEnhanchers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers, persistedStore, composeEnhanchers(applyMiddleware(thunk)))


