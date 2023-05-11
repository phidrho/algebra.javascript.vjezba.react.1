// prvo je potrebno instalirati router
// npm install react-router-dom
import React from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from './Home';
import Adresa from './Adresa';
import Onama from './Onama';

// KREIRAMO KOMPONENTU "Kontakt" UNUTAR ROUTERA (NIJE U VANJSKOM JSX-u)
const Kontakt = () => {
    return(
        <div>
            <h2>Kontakt</h2>
            <p>Tel: +385 1 2332 861</p>
            <p>E-mail: info@algebra.hr</p>
        </div>
    );
}


export default function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/adresa/">Adresa</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/kontakt/">Kontakt</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/onama/">O nama</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adresa/" element={<Adresa />} />
                    <Route path="/kontakt/" element={<Kontakt />} />
                    <Route path="/onama/" element={<Onama />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
