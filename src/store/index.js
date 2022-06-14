import { compose ,applyMiddleware,createStore } from "redux";
import promiseMiddleware from 'redux-promise';
import AppReducer from "./reducer";


function ReduxSotre() {
    const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const sotre = createStore(
        AppReducer,
        composeEn(applyMiddleware(promiseMiddleware))
    )

    return sotre;
}

export default ReduxSotre;