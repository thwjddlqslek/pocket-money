import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import ThemeContextProvider from "./context/ThemeContext";
import GlobalStyle from "./styles/globalStyle";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
