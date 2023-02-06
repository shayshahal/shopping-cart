import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from './components/About.jsx';
import Nav from './components/navbar/Nav.jsx';
import Details from './components/Details.jsx';
import Complete from './components/Complete.jsx';

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/Shop" element={Shop} />
                <Route path="/Shop:name" element={Details} />
                <Route path="/About" element={About} />
                <Route path="/Complete" element={Complete} />
            </Routes>
        </BrowserRouter>
    );
};

