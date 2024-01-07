import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/common/header/Header";

import "./assets/scss/main.scss"
import {Footer} from "./components/common/footer/Footer";
import {Home} from "./pages/Home";
import {Team} from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path="team" element={<Team />}/>
            <Route path="work" element={<>Work</>}/>
            <Route path="contact" element={<>Contact</>}/>
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
