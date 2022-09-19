import React from 'react'
import "./app.css"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
const App = () => {
    return (

        <BrowserRouter>
            <div className="App">
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>

                </Routes>
            </div>
        </BrowserRouter >



    )
}

export default App