import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './reducers/store'
import AppRouter from "./contexts/navigation/AppRouter";

import "./index.css";

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));