import React from "react";
import "react-toastify/dist/ReactToastify.css"
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
          {/* Move Navigate inside Routes */}
          {/* <Navigate to="/not-found" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
