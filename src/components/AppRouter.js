// prvo je potrebno instalirati router
// npm install react-router-dom
import React from "react";
// import Home from './Home'; // za kasnije
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
// import Adresa from './Adresa'; // za kasnije

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

        </BrowserRouter>
    );
}
