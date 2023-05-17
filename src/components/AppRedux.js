// prvo potrebno instalirati npm install redux react-redux
import React from "react";
import { connect } from "react-redux";
import { dodajNaBrojac, oduzmiSaBrojaca, setirajBrojac } from "./utilities/ReduxFunkcije";


function AppRedux({ brojac, dodajJedan, oduzmiJedan, resetiraj }) {
    return (
        <div>
            <p>
                <span>
                    <button onClick={oduzmiJedan}> - </button>
                    <span className="counter"> Broj: {brojac} </span>
                    <button onClick={dodajJedan}> + </button>
                </span>
            </p>
            <p>
                <button onClick={resetiraj}>Resetiraj broj</button>
            </p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        brojac: state,
    }
}

const mapDispatchToProps = {
    dodajJedan: () => dodajNaBrojac(1),
    oduzmiJedan: () => oduzmiSaBrojaca(1),
    resetiraj: () => setirajBrojac(0)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppRedux);
