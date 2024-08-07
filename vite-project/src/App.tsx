import React from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Footer from "./components/Footer";
import store from "./store";
const App: React.FC = () => {
  console.log("1");

  return (
    <Provider store={store}>
      <Main />
      <Footer />
    </Provider>
  );
};

export default App;
