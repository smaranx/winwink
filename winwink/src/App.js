import logo from './diamond.mp4';
import './App.css';

function App() {
  return (
    <div className="coin">
      <header className="coinn">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href=".public/diamond.mp4"
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
