import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import randomstring from 'randomstring';

function App() {
  var rndstr = randomstring.generate();
  console.log("Random string" + randomstring.generate());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Moja prva aplikacija</h1>
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
