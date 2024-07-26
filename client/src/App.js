import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js';
import ListPage from './ListPage.js';
import AddPage from './AddPage.js';
import EditPage from './EditPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloWorld>
      </HelloWorld>
      <ListPage>
      </ListPage>
      <AddPage>
      </AddPage>
      <EditPage>
      </EditPage>
    </div>
  );
}

export default App;
