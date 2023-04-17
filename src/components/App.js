import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import Osoba from './Person'; // ne treba extenzija ".js"
import  { sum, pi, imeAplikacije as mojaVarijabla } from './Utility'; // nismo importali num1 i num2

import randomstring from 'randomstring';

var zbrojIUmnozak = sum(5, 12) * pi;

function App() {
  var rndstr = randomstring.generate();
  console.log("Random string" + randomstring.generate());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{mojaVarijabla}</h1>
        <h2>Učitano ime osobe je: {Osoba.name} i ima {Osoba.godine} godina.</h2>
        <p>Zbroj 5 i 12 i umnožak sa PI je {zbrojIUmnozak}</p>
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
      </header>
    </div>
  );
}

export default App;
