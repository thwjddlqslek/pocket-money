import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/globalStyle.tsx";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <GlobalStyle />
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
