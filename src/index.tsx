import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './reducers/store'
import AppRouter from "./contexts/navigation/AppRouter";

import "./index.css";

const App = () => {
  
  const saveToLocalStorage = (state: any) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  };
  
  store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });

  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));