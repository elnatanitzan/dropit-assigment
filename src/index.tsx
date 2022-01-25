import {useEffect} from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './reducers/store'
import AppRouter from "./contexts/navigation/AppRouter";
import { API } from "./contexts/api";

import "./index.css";

const App = () => {


  useEffect(
    () => {
      API.product.getAll()
      .then((res: any) => store.dispatch({type: 'GET_INITIAL', products: res}))
    },
    []// eslint-disable-line
  );
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));