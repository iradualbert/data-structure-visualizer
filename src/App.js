import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Board from './components/board/Board';
import Toolbar from './components/toolbar/Toolbar';

class App extends React.Component {

  state = {
    selectedDataStructure: null,
    rows: 6,
    cols: 20,
    speed: "fast",
  }
  
  render(){
    return (
      <div className="container">
        <Header />
        <Toolbar />
        <Board rows={this.state.rows} cols={this.state.cols}/>
      </div>
    );
  }
  
}

export default App;
