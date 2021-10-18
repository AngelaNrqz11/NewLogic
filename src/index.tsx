import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";

//redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import { create } from "domain";

let composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const stores = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
