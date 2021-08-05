import logo from './logo.svg';
import './App.css';
import { Capacitor } from '@capacitor/core'

function App() {

  async function testEvent() {
    if (Capacitor.getPlatform() === 'electron') {
      const { ipcRenderer } = window.require('electron');
      try {
        const resp = await ipcRenderer.invoke('my-event', ['Test']);
        window.alert(resp);
      } catch(e) {
        window.alert(e.message);
      }
    }
  }

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
        <button onClick={testEvent}>Test Event</button>
      </header>
    </div>
  );
}

export default App;
