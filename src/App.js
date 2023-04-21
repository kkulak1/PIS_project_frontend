import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { Component } from 'react';

class App extends Component {
  state = {
    text: []
  };

  async componentDidMount() {
    const response = await fetch('/main-backend/test-json');
    const body = await response.json();
    this.setState({text: body});
  }

  render() {
    const {text} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='"App-intro'>
              <h2>Json test</h2>

              <p>aa: {text.aa} </p>
              <p>foo: {text.foo} </p>
              <p>key: {text.key} </p>

            </div>
          </header>
        </div>
      );
  }
}


export default App;
