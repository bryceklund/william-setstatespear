import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PoemListPage from './PoemListPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <a href='/'>Poem List</a>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          <Route exact path='/' component={PoemListPage} />
          <Route component={(props) => {
            console.log(props.match)
            return <div />
          }} />
        </main>
        <footer>
          <p>© WilliamSetstatespear, 2018. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
