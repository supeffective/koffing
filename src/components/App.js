import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from "./AppFooter";
import Board from "./Board";
import StyledComponent from "./StyledComponent";

class App extends StyledComponent {
  render() {
    return (
      <div className="koffing-app">
        <AppHeader/>
        <Board/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
