import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import {Person, num1, num2, sum, imeAplikacije as mojaVarijabla, pi, oduzimanje} from './utilities';

import randomstring from 'randomstring';

//vjezba JSX - 5.5.
import { Komponenta1 } from './Komponenta1';
import { Komponenta2 } from './Komponenta2';
import Komponenta3 from './Komponenta3'; // može bez vitičastih zagrada jer je u komponenti export default

//vjezba JSX - 5.6.
import {GlavnaKomponenta} from './GlavnaKomponenta';

//vjezba JSX - 5.7.
import WelcomeFunkcija from './WelcomeFunkcija';
import WelcomeKlasa from './WelcomeKlasa';

//vjezba PROPS 5.8
import React from "react";
import KorisnikKlasa from './KorisnikKlasa';
import KorisnikFunkcija from './KorisnikFunkcija';
import KorisnikDijete from './KorisnikDijete';

var zbrojIUmnozak = sum(num1, num2) * pi;

//vjezba JSX - 5.5.
var mojString1 = "'MOJ STRING IZ VARIJABLE 1'";
var mojString2 = "'MOJ STRING IZ VARIJABLE 2'";


//vjezba JSX - 5.7


//vjezba PROPS 5.8
const korisnici = [
  {ime:"Marko", godine: 22},
  {ime:"Katarina", godine: 21},
  {ime:"Nataša", godine: 20},
  {ime: "Sunčica", godine: 12}
];

// - pretvaramo u App klasu
class App extends React.Component {


  render() {
    var rndstr = randomstring.generate();
    console.log("Random string" + randomstring.generate());

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{mojaVarijabla}</h1>
          <h2>Učitano ime osobe je: {Person.name} i ima {Person.godine} godina.</h2>
          <p>Zbroj {num1} i {num2} i umnožak sa PI je {zbrojIUmnozak}</p>
          <p>Razlika {num2} i {num1} je {oduzimanje(num1, num2)}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Random string varijabla: {rndstr}</p>
          <p>Random string direktno pozvan: {randomstring.generate({
                                                  length: 12,
                                                  charset: 'alphabetic'
                                                })
                                            }</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <h1>Učitane komponente iz JSX-a - 5.5</h1>
          <h2>Komponenta 1:</h2>
          <Komponenta1 />

          <h2>Komponenta 2:</h2>
          <Komponenta2 podatak={mojString1} />

          <h2>Komponenta 3:</h2>
          <Komponenta3 podatak1={mojString1} podatak2={mojString2} />

          <h1>Učitane komponente iz JSX-a - 5.6</h1>
          <GlavnaKomponenta />

          <h1>Učitane komponente iz JSX-a - 5.7</h1>
          <WelcomeFunkcija />
          <WelcomeKlasa />

          <KorisnikKlasa ime={korisnici[0].ime} godine={korisnici[0].godine} />
          <KorisnikKlasa ime={korisnici[1].ime} godine={korisnici[1].godine} />
          <KorisnikFunkcija ime={korisnici[2].ime} godine={korisnici[2].godine} />

          <KorisnikDijete ime={korisnici[3].ime} godine={korisnici[3].godine}>
            Ona voli plivati.
          </KorisnikDijete>
        </header>
      </div>
    );
  }
}

export default App;
