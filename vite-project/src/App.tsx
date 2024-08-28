import React from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Footer from "./components/Footer";
import store from "./store";
import ThemeContextProvider from "./context/ThemeContext";
import GlobalStyle from "./styles/globalStyle";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <GlobalStyle />
        <Main />
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
