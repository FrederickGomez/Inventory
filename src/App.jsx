import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEdit from "./Pages/AddEdit";
import Home from "./Pages/Home";
import "./App.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/add" element={<AddEdit/>} />
          <Route path="/update/:id" element={<AddEdit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
