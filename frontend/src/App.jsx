import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/NavBar";

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Toaster />
  </Provider>
);

export default App;
