import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import {Person, num1, num2, sum, imeAplikacije as mojaVarijabla, pi, oduzimanje} from './utilities';

import randomstring from 'randomstring';

var zbrojIUmnozak = sum(num1, num2) * pi;

function App() {
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
      </header>
    </div>
  );
}

export default App;
