import {Component} from "react";


export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Stranica se može navigirati preko URL-a</p>
                <p>za Kontakt stranicu u URL traku upišite http://localhost:3000/kontakt/</p>
                <p>za stranicu Adresa u URL traku upišite http://localhost:3000/adresa/</p>
            </div>
        );
    }
}
