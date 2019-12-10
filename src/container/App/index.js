import React from "react";
import Thunk from "redux-thunk";
import Reducer from "../../redux/combineReducers";
import Route from "../route";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "typeface-roboto";
import "typeface-quicksand";
import "./style.css";
import "./style.sass";
const store = createStore(Reducer, applyMiddleware(Thunk));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Route />
      </Provider>
    </div>
  );
}
export default App;
