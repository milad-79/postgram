import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import ReduxSotre from "./store";
import { AuthContextProvider } from "./context/authContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <AuthContextProvider>
     <Provider store={ReduxSotre()}>
        <App/>
      </Provider>
     </AuthContextProvider>
  </React.StrictMode>
);
