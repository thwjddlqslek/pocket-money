import React from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Footer from "./components/Footer";
import store from "./store";
import ThemeContextProvider from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <Main />
        <Footer />
      </Provider>
    </ThemeContextProvider>
  );
};

export default App;
